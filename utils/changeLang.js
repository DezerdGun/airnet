export const changeLang = (language, router) => {
	const link = router.asPath,
		sliced = link.slice(3)

	switch (language) {
		case "ru": {
			if (link.includes("/uz") || link.includes("/en")) return router.push(sliced.length ? sliced : "/")
		}
		case "uz": {
			if (link.includes("/en")) return router.push("/uz" + sliced.length ? sliced : "")
			return router.push("/uz" + link)
		}
		case "en": {
			if (link.includes("/uz")) return router.push("/en" + sliced.length ? sliced : "")
			return router.push("/en" + link)
		}
	}
}
