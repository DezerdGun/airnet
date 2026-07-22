import Link from "next/link";
import Container from "@/components/container";
import SEO from "@/components/seo";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs.jsx";
import BreadCrumbs from "@/components/seo/breadCrumbs.jsx";
import { checkLang } from "@/utils/checkLang";
import { NEWS_API } from "@/app/news";

const labels = {
  added:    { ru: "Опубликовано",  uz: "Chop etilgan",       en: "Published" },
  updated:  { ru: "Обновлено",     uz: "Yangilangan",        en: "Updated" },
  back:     { ru: "← Все новости", uz: "← Barcha yangiliklar", en: "← All news" },
  notFound: { ru: "Новость не найдена", uz: "Yangilik topilmadi", en: "News not found" },
  newsTitle:{ ru: "Новости",       uz: "Yangiliklar",         en: "News" },
  author:   { ru: "Автор статьи:", uz: "Maqola muallifi:",    en: "Author of the article:" },
  authorseo:{ ru: "Главный редактор", uz: "Bosh muharrir",    en: "Editor-in-Chief" },
  authorname:{ ru: "Данаев Алмаз", uz: "Danaev Almaz",        en: "Danaev Almaz" },
  sidecat:  { ru: "Категории",     uz: "Kategoriyalar",       en: "Categories" },
  siteName: { ru: "AIRNET — TAS-IX в Ташкенте",
              uz: "AIRNET — Toshkentda TAS-IX",
              en: "AIRNET — TAS-IX in Tashkent" },
};

const sidecatlinks = [
  { ru: "Сервера",  uz: "Serverlar", en: "Servers",   slug: "/dedicated" },
  { ru: "Хостинг",  uz: "Xosting",   en: "Hosting",   slug: "/hosting" },
  { ru: "Windows",  uz: "Windows",   en: "Windows",   slug: "/vds/arenda-servera-windows" },
  { ru: "Linux",    uz: "Linux",     en: "Linux",     slug: "/vds/arenda-servera-linux" },
];

export default function NewsDetailsPage({ language = "ru", news }) {
  if (!news) {
    return (
      <div className="bg-gray">
        <SEO title={labels.notFound[language]} desc="" />
        <PageBreadcrumb links={[{ name: { ru: labels.notFound.ru, en: labels.notFound.en, uz: labels.notFound.uz } }]} />
        <Container>
          <div className="news-details news-details--notfound">
            <div className="news-details__center">
              <h1>{labels.notFound[language]}</h1>
              <Link href={checkLang(language) + "/news"}>
                <a className="news-details__back">{labels.back[language]}</a>
              </Link>
            </div>
          </div>
        </Container>
        <style jsx global>{globalStyles}</style>
      </div>
    );
  }

  const dateStr = news.date ? new Date(news.date).toLocaleDateString("ru-RU") : "";
  const updatedStr = news.datetime ? new Date(news.datetime).toLocaleDateString("ru-RU") : dateStr;
  const plain = (news.content_text || "").substring(0, 200);

  const breadCrumbs = [
    { name: { ru: labels.newsTitle.ru, en: labels.newsTitle.en, uz: labels.newsTitle.uz }, link: "/news" },
    { name: { ru: news.title, en: news.title, uz: news.title } },
  ];

  return (
    <div className="bg-gray">
      <SEO title={`${news.title} | ${labels.siteName[language]}`} desc={plain} />
      <BreadCrumbs data={breadCrumbs} language={language} />
      <PageBreadcrumb links={breadCrumbs} language={language} />

      <Container>
        <div className="news-details">
          <div className="news-details__center">
            {news.image && (
              <div className="news-details__main-img">
                <img src={news.image} alt={news.title} />
              </div>
            )}

            <div className="news-details__meta">
              <div className="news-details__meta-item">
                <span className="fw-bold">{labels.updated[language]}</span> <span>- {updatedStr}</span>
              </div>
              <div className="news-details__meta-item news-details__meta-item--right">
                <span className="fw-bold">{labels.added[language]}</span> <span>- {dateStr}</span>
              </div>
            </div>

            <h1>{news.title}</h1>

            <div
              className="news-details__content"
              dangerouslySetInnerHTML={{ __html: news.content || "" }}
            />

            <div className="news-details__author">
              <h3>{labels.author[language]}</h3>
              <img src="/favicon.png" width={50} height={50} alt="user" />
              <h4>{labels.authorseo[language]}</h4>
              <p>{labels.authorname[language]}</p>
            </div>

            <div className="news-details__back-wrap">
              <Link href={checkLang(language) + "/news"}>
                <a className="news-details__back">{labels.back[language]}</a>
              </Link>
            </div>
          </div>

          <div className="news-details__right">
            <div className="news-details__right-cat">
              <h3>{labels.sidecat[language]}</h3>
              {sidecatlinks.map((item) => (
                <span key={item.slug}>
                  <Link href={item.slug}>
                    <a>{item[language]}</a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style jsx global>{globalStyles}</style>
    </div>
  );
}

const globalStyles = `
  .news-details { display: flex; justify-content: space-between; flex-wrap: wrap; }
  .news-details__center {
    width: 70%; padding: 35px; margin-bottom: 20px;
    background: #fff; border-radius: 20px; overflow: hidden;
  }
  .news-details__right {
    width: 25%; padding: 35px; margin-bottom: 20px;
    background: #fff; border-radius: 20px; overflow: hidden;
  }
  .news-details__right-cat h3 { font-size: 26px; margin-bottom: 20px; color: #1f2937; }
  .news-details__right-cat span { display: inline-block; width: 100%; margin-bottom: 10px; }
  .news-details__right-cat span a { font-size: 18px; color: #0e6a4e; text-decoration: none; }
  .news-details__right-cat span a:hover { text-decoration: underline; }

  .news-details__main-img { margin-bottom: 20px; }
  .news-details__main-img img { width: 100%; height: auto; border-radius: 20px; display: block; }

  .news-details__meta {
    padding: 20px 0; display: flex; align-items: center; justify-content: space-between;
    border-top: 1px solid #f8f8f8; border-bottom: 1px solid #f8f8f8;
    color: #4b5563; font-size: 15px;
  }
  .news-details__meta-item--right { text-align: right; }

  .news-details h1 {
    font-size: 30px; margin: 20px 0; padding-bottom: 20px; line-height: 1.3;
    border-bottom: 1px solid #f8f8f8; color: #0d5446;
  }

  .news-details__content { font-size: 17px; line-height: 1.65; color: #1f2937; }
  .news-details__content p { font-size: 17px; line-height: 28px; margin-bottom: 14px; }
  .news-details__content h1, .news-details__content h2, .news-details__content h3 {
    color: #0e6a4e; margin: 24px 0 12px; font-size: 24px;
  }
  .news-details__content a { color: #0e6a4e; text-decoration: underline; }
  .news-details__content img { width: 100%; height: auto; margin: 14px 0; border-radius: 12px; display: block; }
  .news-details__content ul { list-style: none; padding: 0; margin: 0 0 14px; }
  .news-details__content ul li {
    padding-left: 20px; position: relative; font-size: 17px; line-height: 28px;
    margin-bottom: 10px;
  }
  .news-details__content ul li::before {
    content: ""; position: absolute; top: 10px; left: 0;
    width: 10px; height: 10px; border-radius: 50%; background-color: #0e6a4e;
  }
  .news-details__content ol { margin: 0 0 14px 24px; }
  .news-details__content ol li { font-size: 17px; line-height: 28px; margin-bottom: 8px; }
  .news-details__content blockquote {
    border-left: 4px solid #0e6a4e; padding: 8px 16px; margin: 16px 0;
    background: #f8fdfa; color: #1f2937;
  }
  .news-details__content code {
    background: #f3f4f6; padding: 2px 6px; border-radius: 4px;
    font-family: monospace; font-size: 14px;
  }
  .news-details__content pre {
    background: #1f2937; color: #f3f4f6; padding: 14px; border-radius: 8px;
    overflow-x: auto; margin: 14px 0;
  }
  .news-details__content pre code { background: transparent; padding: 0; color: inherit; }

  .news-details__author {
    display: inline-block; width: 270px; margin-top: 20px; margin-bottom: 40px;
  }
  .news-details__author img { border-radius: 50%; float: left; margin-right: 12px; }
  .news-details__author h3 {
    display: inline-block; width: 100%; font-size: 18px; font-weight: 600;
    margin-left: 0; margin-bottom: 10px; color: #1f2937;
  }
  .news-details__author h4 {
    display: block; margin-left: 0; margin-bottom: 4px; font-size: 14px;
    color: #6b7280; font-weight: 500;
  }
  .news-details__author p {
    display: block; margin-left: 0; font-size: 16px; color: #1f2937;
    font-weight: 600;
  }

  .news-details__back-wrap { margin-top: 20px; padding-top: 20px; border-top: 1px solid #f8f8f8; }
  .news-details__back { color: #0e6a4e; font-weight: 600; text-decoration: none; font-size: 16px; }
  .news-details__back:hover { text-decoration: underline; }

  .news-details--notfound .news-details__center { width: 100%; text-align: center; padding: 60px 35px; }

  @media (max-width: 992px) {
    .news-details__center { width: 100%; }
    .news-details__right { width: 100%; }
  }
  @media (max-width: 550px) {
    .news-details__center { padding: 20px; }
    .news-details__right { padding: 20px; }
    .news-details h1 { font-size: 22px; margin: 14px 0; }
    .news-details__meta { flex-direction: column; gap: 8px; align-items: flex-start; }
    .news-details__meta-item--right { text-align: left; }
  }
`;

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
