const API = process.env.BLOG_API_URL || "https://billing.airnet.uz/blog_api.php";

async function request(params) {
  const url = new URL(API);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Blog API: ${response.status}`);
  const result = await response.json();
  if (!result?.ok || !Array.isArray(result.data)) throw new Error("Invalid blog API response");
  return result;
}

async function postsForLanguage(lang) {
  const posts = [];
  let total;
  do {
    const result = await request({ lang, limit: 50, offset: posts.length });
    if (!result.data.length) break;
    if (result.data.some((post) => posts.some((existing) => existing.id === post.id))) {
      throw new Error("Blog API returned a repeated page");
    }
    posts.push(...result.data);
    total = Number(result.total);
  } while (posts.length < total);
  return posts;
}

export async function getBlogListingProps() {
  const apiPosts = {};
  const apiCategories = {};
  await Promise.all(["ru", "uz", "en"].map(async (lang) => {
    const [posts, categories] = await Promise.allSettled([
      postsForLanguage(lang), request({ action: "categories", lang }),
    ]);
    apiPosts[lang] = posts.status === "fulfilled" ? posts.value : [];
    apiCategories[lang] = categories.status === "fulfilled" ? categories.value.data : [];
  }));
  return { props: { apiPosts, apiCategories }, revalidate: 60 };
}
