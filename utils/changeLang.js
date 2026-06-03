async function changeBlogLang(targetLang, router) {
	const path = (router.asPath || "").split("?")[0].split("#")[0];
	const m = path.match(/^(?:\/(?:uz|en))?\/blog\/([^/]+)\/?$/);
	if (!m) return false;
	const slug = m[1];
	try {
		const API = process.env.NEXT_PUBLIC_BLOG_API_URL || "https://billing.airnet.uz/blog_api.php";
		const r = await fetch(`${API}?slug=${encodeURIComponent(slug)}&lang=ru`);
		if (!r.ok) return false;
		const j = await r.json();
		if (!j || !j.ok || !j.data || !j.data.slugs) return false;
		const newSlug = j.data.slugs[targetLang];
		if (!newSlug) return false;
		const prefix = targetLang === "ru" ? "" : `/${targetLang}`;
		router.push(`${prefix}/blog/${newSlug}`);
		return true;
	} catch (e) {
		return false;
	}
}

export const changeLang = (language, router) => {
	changeBlogLang(language, router).then((handled) => {
		if (handled) return;
		const link = router.asPath;
		const sliced = link.slice(3);
		if (language === "ru") {
			if (link.includes("/uz") || link.includes("/en")) {
				return router.push(sliced.length ? sliced : "/");
			}
			return;
		}
		if (language === "uz") {
			if (link.includes("/en")) return router.push("/uz" + (sliced.length ? sliced : ""));
			if (!link.startsWith("/uz")) return router.push("/uz" + link);
			return;
		}
		if (language === "en") {
			if (link.includes("/uz")) return router.push("/en" + (sliced.length ? sliced : ""));
			if (!link.startsWith("/en")) return router.push("/en" + link);
			return;
		}
	});
};
