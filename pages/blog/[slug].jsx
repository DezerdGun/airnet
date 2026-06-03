import Head from "next/head";
import BlogItem from "@/components/blogItem";
import { breadCrumbsBlog } from "@/app/blog";

const API = process.env.BLOG_API_URL || "https://billing.airnet.uz/blog_api.php";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function fetchPost(slug, urlLang) {
  try {
    // Тянем контент на всех 3 языках по id (для hreflang альтернатив)
    const langs = ["ru", "uz", "en"];
    const first = await fetch(`${API}?slug=${encodeURIComponent(slug)}&lang=${urlLang}`, {
      headers: { Accept: "application/json" },
    });
    if (!first.ok) return { notFound: true, revalidate: 60 };
    const firstJ = await first.json();
    if (!firstJ || !firstJ.ok || !firstJ.data) return { notFound: true, revalidate: 60 };
    const id = firstJ.data.id;
    const results = await Promise.all(
      langs.map(async (lng) => {
        const rr = await fetch(`${API}?id=${id}&lang=${lng}`, { headers: { Accept: "application/json" } });
        if (!rr.ok) return null;
        const jj = await rr.json();
        return jj && jj.ok && jj.data ? jj.data : null;
      })
    );
    return {
      props: {
        post: { ru: results[0], uz: results[1], en: results[2], _fallback: firstJ.data },
      },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true, revalidate: 60 };
  }
}

export async function getStaticProps({ params }) {
  return fetchPost(params.slug, "ru");
}

function fmtDate(s) {
  if (!s) return "";
  const d = new Date(s.replace(" ", "T"));
  if (isNaN(d)) return s;
  const pad = (n) => (n < 10 ? "0" + n : "" + n);
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}

function readMinutes(text) {
  const words = (text || "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

function extractHeadings(html) {
  if (!html) return [];
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const out = [];
  let i = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    const txt = m[1].replace(/<[^>]+>/g, "").trim();
    if (!txt) continue;
    i += 1;
    out.push({ slug: `${i}`, title: { ru: txt, uz: txt, en: txt, slug: `${i}` } });
  }
  return out;
}

function injectAnchors(html) {
  if (!html) return "";
  let i = 0;
  return html.replace(/<h2([^>]*)>/gi, (m, attrs) => {
    i += 1;
    return `<a name="${i}"></a><h2${attrs}>`;
  });
}

const defaultFaq = [
  {
    title: {
      ru: "Как скоро можно начать пользоваться услугой?",
      uz: "Xizmatdan qanchalik tez foydalanishni boshlashim mumkin?",
      en: "How soon can I start using the service?",
    },
    description: {
      ru: (
        <>
          <p>Пользовательский аккаунт открывается сразу после подачи заявки.</p>
          <p>Сразу после произведения оплаты, вы можете начать сразу же пользоваться услугой.</p>
        </>
      ),
      uz: (
        <>
          <p>Foydalanuvchi hisobi ariza topshirilgandan so‘ng darhol ochiladi.</p>
          <p>To‘lovni amalga oshirganingizdan so‘ng darhol xizmatdan foydalanishni boshlashingiz mumkin.</p>
        </>
      ),
      en: (
        <>
          <p>The user account is opened immediately upon application.</p>
          <p>You can start using the service immediately after payment.</p>
        </>
      ),
    },
  },
];

// language приходит из _app.jsx (по URL префиксу: /uz/ → uz, /en/ → en, иначе ru)
export default function BlogDynamic({ post, language }) {
  if (!post) return null;
  const lang = language || "ru";
  const pickLang = (lng) => post[lng] || post._fallback;
  const ru = pickLang("ru");
  const uz = pickLang("uz");
  const en = pickLang("en");
  const cur = pickLang(lang);
  if (!cur) return null;

  const slug = cur.slug;
  const urlRu = `https://airnet.uz/blog/${slug}`;
  const urlUz = `https://airnet.uz/uz/blog/${slug}`;
  const urlEn = `https://airnet.uz/en/blog/${slug}`;
  const canonical =
    lang === "uz" ? urlUz : lang === "en" ? urlEn : urlRu;

  const dateStr = fmtDate(cur.published_at);
  const ruHtml = injectAnchors(ru?.content || "");
  const uzHtml = injectAnchors(uz?.content || "");
  const enHtml = injectAnchors(en?.content || "");

  const data = {
    title: { ru: ru?.title || "", uz: uz?.title || "", en: en?.title || "" },
    headTitle: { ru: ru?.title || "", uz: uz?.title || "", en: en?.title || "" },
    desc: {
      ru: ru?.meta_description || (ru?.content_text ? ru.content_text.slice(0, 160) : ""),
      uz: uz?.meta_description || (uz?.content_text ? uz.content_text.slice(0, 160) : ""),
      en: en?.meta_description || (en?.content_text ? en.content_text.slice(0, 160) : ""),
    },
    date: dateStr,
    updated: dateStr,
    read: readMinutes(cur.content_text),
    view: cur.views || 0,
    img: cur.image || "/blog/live.png",
    faqTitle: {
      ru: "Ответы на популярные вопросы",
      uz: "Ommabop savollarga javoblar",
      en: "Answers to popular questions",
    },
    faq: defaultFaq,
    alinks: extractHeadings(cur.content || ""),
    content: {
      ru: <div dangerouslySetInnerHTML={{ __html: ruHtml }} />,
      uz: <div dangerouslySetInnerHTML={{ __html: uzHtml }} />,
      en: <div dangerouslySetInnerHTML={{ __html: enHtml }} />,
    },
  };

  const breadCrumbs = [
    ...breadCrumbsBlog,
    {
      name: { ru: ru?.title || cur.title, uz: uz?.title || cur.title, en: en?.title || cur.title },
      link: `/blog/${slug}`,
    },
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="ru" href={urlRu} />
        <link rel="alternate" hrefLang="uz" href={urlUz} />
        <link rel="alternate" hrefLang="en" href={urlEn} />
        <link rel="alternate" hrefLang="x-default" href={urlRu} />
      </Head>
      <BlogItem data={data} language={lang} breadCrumbs={breadCrumbs} />
    </>
  );
}
