import SEO from "@/components/seo";
import Container from "@/components/container";
import BreadCrumbs from "@/components/seo/breadCrumbs";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs";
import Link from "next/link";
import { checkLang } from "@/utils/checkLang";

const API = process.env.BLOG_API_URL || "https://billing.airnet.uz/blog_api.php";

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const langs = ["ru", "uz", "en"];
    const results = await Promise.all(
      langs.map(async (lng) => {
        const r = await fetch(
          `${API}?slug=${encodeURIComponent(params.slug)}&lang=${lng}`,
          { headers: { Accept: "application/json" } }
        );
        if (!r.ok) return null;
        const j = await r.json();
        return j && j.ok && j.data ? j.data : null;
      })
    );
    const found = results.find(Boolean);
    if (!found) return { notFound: true, revalidate: 60 };
    return {
      props: {
        post: { ru: results[0], uz: results[1], en: results[2], _fallback: found },
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

export default function BlogDynamic({ language, post }) {
  if (!post) return null;
  const p = post[language] || post._fallback;
  if (!p) return null;

  const breadCrumbs = [
    {
      name: { ru: "Блог", uz: "Blog", en: "Blog" },
      link: { ru: "/blog", uz: "/uz/blog", en: "/en/blog" },
    },
    {
      name: { ru: p.title, uz: p.title, en: p.title },
      link: `/blog/${p.slug}`,
    },
  ];

  return (
    <div className="bg-gray">
      <SEO
        title={`${p.title} | Airnet`}
        desc={p.meta_description || (p.content_text ? p.content_text.slice(0, 160) : "")}
      />

      <BreadCrumbs data={breadCrumbs} language={language} />
      <PageBreadcrumb links={breadCrumbs} language={language} />

      <Container>
        <article style={{ maxWidth: 820, margin: "0 auto", padding: "20px 12px" }}>
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", height: "auto", borderRadius: 12, marginBottom: 24 }}
            />
          )}

          <h1 style={{ fontSize: 32, lineHeight: 1.25, margin: "0 0 12px" }}>{p.title}</h1>

          <div style={{ color: "#888", fontSize: 14, marginBottom: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
            {p.published_at && <span>{fmtDate(p.published_at)}</span>}
            {p.author_name && <span>· {p.author_name}</span>}
            {p.views > 0 && <span>· {p.views} просмотров</span>}
            {Array.isArray(p.tags) && p.tags.length > 0 && (
              <span>· {p.tags.map((t) => `#${t}`).join(" ")}</span>
            )}
          </div>

          <div
            style={{ fontSize: 16, lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: p.content || "" }}
          />

          <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #ddd" }}>
            <Link href={checkLang(language) + "/blog"}>
              <a>&laquo; Все записи</a>
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
}
