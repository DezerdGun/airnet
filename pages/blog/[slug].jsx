import Head from "next/head";
import BlogItem from "@/components/blogItem";
import { breadCrumbsBlog } from "@/app/blog";

const API = process.env.BLOG_API_URL || "https://billing.airnet.uz/blog_api.php";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug;
    const r = await fetch(
      `${API}?slug=${encodeURIComponent(slug)}&lang=ru`,
      { headers: { Accept: "application/json" } }
    );
    if (!r.ok) return { notFound: true, revalidate: 60 };
    const j = await r.json();
    if (!j || !j.ok || !j.data) return { notFound: true, revalidate: 60 };
    const rec = j.data;
    const slugs = rec.slugs || {};
    let postLang = "ru";
    if (slugs.uz === slug) postLang = "uz";
    else if (slugs.en === slug) postLang = "en";
    else if (slugs.ru === slug) postLang = "ru";

    // Подтянуть контент в нужном языке
    const langs = ["ru", "uz", "en"];
    const results = await Promise.all(
      langs.map(async (lng) => {
        const rr = await fetch(`${API}?id=${rec.id}&lang=${lng}`, { headers: { Accept: "application/json" } });
        if (!rr.ok) return null;
        const jj = await rr.json();
        return jj && jj.ok && jj.data ? jj.data : null;
      })
    );
    return {
      props: {
        post: { ru: results[0], uz: results[1], en: results[2], _fallback: rec },
        postLang,
      },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true, revalidate: 60 };
  }
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

function extractHeadings(html, language) {
  if (!html) return [];
  const re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const out = [];
  let i = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    const txt = m[1].replace(/<[^>]+>/g, "").trim();
    if (!txt) continue;
    i += 1;
    out.push({
      slug: `${i}`,
      title: { ru: txt, uz: txt, en: txt, slug: `${i}` },
    });
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

export default function BlogDynamic({ post, postLang }) {
  if (!post) return null;
  const pickLang = (lng) => post[lng] || post._fallback;
  const ru = pickLang("ru");
  const uz = pickLang("uz");
  const en = pickLang("en");
  const language = postLang || "ru";
  const cur = pickLang(language);
  if (!cur) return null;

  const slugs = cur.slugs || {
    ru: ru?.slug || "",
    uz: uz?.slug || "",
    en: en?.slug || "",
  };
  const urlRu = slugs.ru ? `https://airnet.uz/blog/${slugs.ru}` : null;
  const urlUz = slugs.uz ? `https://airnet.uz/blog/${slugs.uz}` : null;
  const urlEn = slugs.en ? `https://airnet.uz/blog/${slugs.en}` : null;
  const canonical = `https://airnet.uz/blog/${cur.slug}`;

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
    alinks: extractHeadings(cur.content || "", language),
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
      link: `/blog/${cur.slug}`,
    },
  ];

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
        {urlRu && <link rel="alternate" hrefLang="ru" href={urlRu} />}
        {urlUz && <link rel="alternate" hrefLang="uz" href={urlUz} />}
        {urlEn && <link rel="alternate" hrefLang="en" href={urlEn} />}
        {urlRu && <link rel="alternate" hrefLang="x-default" href={urlRu} />}
      </Head>
      <BlogItem data={data} language={language} breadCrumbs={breadCrumbs} />
    </>
  );
}
