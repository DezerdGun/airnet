import Link from "next/link";
import Container from "@/components/container";
import SEO from "@/components/seo";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs.jsx";
import { checkLang } from "@/utils/checkLang";
import { NEWS_API } from "@/app/news";

const labels = {
  added:    { ru: "Добавлено",     uz: "Qo'shildi",         en: "Added" },
  back:     { ru: "← Все новости", uz: "← Barcha yangiliklar", en: "← All news" },
  notFound: { ru: "Новость не найдена", uz: "Yangilik topilmadi", en: "News not found" },
  siteName: { ru: "AIRNET — TAS-IX в Ташкенте",
              uz: "AIRNET — Toshkentda TAS-IX",
              en: "AIRNET — TAS-IX in Tashkent" },
};

export default function NewsDetailsPage({ language = "ru", news }) {
  if (!news) {
    const nfName = { ru: labels.notFound.ru, en: labels.notFound.en, uz: labels.notFound.uz };
    return (
      <>
        <SEO title={labels.notFound[language]} desc="" />
        <PageBreadcrumb links={[{ name: nfName }]} />
        <Container>
          <div style={{ padding: "40px 20px", textAlign: "center" }}>
            <h2>{labels.notFound[language]}</h2>
            <Link href={checkLang(language) + "/news"}>
              <a style={{ color: "#0d5446", textDecoration: "underline" }}>{labels.back[language]}</a>
            </Link>
          </div>
        </Container>
      </>
    );
  }

  const dateStr = news.date ? new Date(news.date).toLocaleDateString("ru-RU") : "";
  const plain = (news.content_text || "").substring(0, 200);

  return (
    <>
      <SEO title={`${news.title} | ${labels.siteName[language]}`} desc={plain} />
      <PageBreadcrumb links={[{ name: { ru: news.title, en: news.title, uz: news.title } }]} />

      <Container>
        <article className="news-details">
          <h1 className="news-details__title">{news.title}</h1>
          <div className="news-details__meta">
            <span className="news-details__author">AIRNET</span>
            <span className="news-details__date">{labels.added[language]}: {dateStr}</span>
          </div>
          {news.image && (
            <div className="news-details__image">
              <img src={news.image} alt={news.title} loading="lazy" />
            </div>
          )}
          <div
            className="news-details__content"
            dangerouslySetInnerHTML={{ __html: news.content || "" }}
          />
          <div className="news-details__back">
            <Link href={checkLang(language) + "/news"}>
              <a>{labels.back[language]}</a>
            </Link>
          </div>
        </article>
      </Container>

      <style jsx global>{`
        .news-details { max-width: 920px; margin: 0 auto; padding: 30px 16px 60px; }
        .news-details__title { font-size: 32px; line-height: 1.2; color: #0d5446; margin-bottom: 16px; }
        .news-details__meta { display: flex; gap: 18px; color: #6b7280; font-size: 14px; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid #e5e7eb; }
        .news-details__author { font-weight: 600; }
        .news-details__image { margin: 0 0 28px; border-radius: 12px; overflow: hidden; background: #f3f4f6; }
        .news-details__image img { width: 100%; height: auto; display: block; }
        .news-details__content { font-size: 16px; line-height: 1.65; color: #1f2937; }
        .news-details__content img { max-width: 100%; height: auto; border-radius: 8px; margin: 14px 0; }
        .news-details__content p { margin: 0 0 14px; }
        .news-details__content h1, .news-details__content h2, .news-details__content h3 { color: #0d5446; margin: 24px 0 12px; }
        .news-details__content a { color: #0d5446; text-decoration: underline; }
        .news-details__content ul, .news-details__content ol { margin: 0 0 14px 24px; }
        .news-details__back { margin-top: 36px; padding-top: 24px; border-top: 1px solid #e5e7eb; }
        .news-details__back a { color: #0d5446; font-weight: 600; text-decoration: none; }
        .news-details__back a:hover { text-decoration: underline; }
        @media (max-width: 600px) {
          .news-details__title { font-size: 24px; }
          .news-details__meta { flex-direction: column; gap: 6px; }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ res, query, params }) {
  const slug = (params?.slug || "").toString();
  const lang = (query?.language || "ru").toString();
  let news = null;
  if (slug) {
    try {
      const r = await fetch(NEWS_API + "?slug=" + encodeURIComponent(slug) + "&lang=" + encodeURIComponent(lang));
      if (r.ok) {
        const j = await r.json();
        if (j && j.ok && j.data) news = j.data;
      }
    } catch (_) {}
  }
  if (!news && res) res.statusCode = 404;
  if (res) res.setHeader("Cache-Control", "public, s-maxage=120, stale-while-revalidate=600");
  return { props: { news } };
}
