import News, { NEWS_API } from "@/app/news";

export default function NewsPage({ language, apiNews }) {
  return <News language={language} apiNewsServer={apiNews} />;
}

export async function getServerSideProps({ res, query }) {
  const lang = (query?.language || "ru").toString();
  let apiNews = [];
  try {
    const r = await fetch(NEWS_API + "?limit=20&lang=" + encodeURIComponent(lang));
    if (r.ok) {
      const j = await r.json();
      if (j && j.ok && Array.isArray(j.data)) apiNews = j.data;
    }
  } catch (_) {}
  if (res) res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { props: { apiNews } };
}
