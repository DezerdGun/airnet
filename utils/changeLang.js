export const changeLang = (language, router) => {
	const link = router.asPath;
	const sliced = link.slice(3);

	switch (language) {
		case "ru": {
			if (link.includes("/uz") || link.includes("/en")) return router.push(sliced.length ? sliced : "/");
			return;
		}
		case "uz": {
			if (link.includes("/en")) return router.push("/uz" + (sliced.length ? sliced : ""));
			if (!link.startsWith("/uz")) return router.push("/uz" + link);
			return;
		}
		case "en": {
			if (link.includes("/uz")) return router.push("/en" + (sliced.length ? sliced : ""));
			if (!link.startsWith("/en")) return router.push("/en" + link);
			return;
		}
	}
};
