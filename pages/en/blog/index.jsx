import Blog from "@/app/blog";

const API = process.env.BLOG_API_URL || "https://billing.airnet.uz/blog_api.php";

export async function getStaticProps() {
  let apiPosts = { ru: [], uz: [], en: [] };
  try {
    const langs = ["ru", "uz", "en"];
    const results = await Promise.all(
      langs.map(async (lng) => {
        const r = await fetch(`${API}?lang=${lng}&limit=50`, { headers: { Accept: "application/json" } });
        if (!r.ok) return [];
        const j = await r.json();
        return j && j.ok && Array.isArray(j.data) ? j.data : [];
      })
    );
    langs.forEach((lng, i) => { apiPosts[lng] = results[i]; });
  } catch (e) {}
  return { props: { apiPosts }, revalidate: 60 };
}

export default function ({ language, apiPosts }) {
  return <Blog language={language} apiPosts={apiPosts} />;
}
