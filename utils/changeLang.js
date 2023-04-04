export const changeLang = (language, router) => {
	const link = router.asPath

	switch (language) {
		case "ru": {
			if (link.includes("/uz") || link.includes("/en"))
				return router.push(link.slice(3))
		}
		case "uz": {
			if (link.includes("/en")) return router.push(link.slice(3))
			return router.push("/uz" + link)
		}
		case "en": {
			if (link.includes("/uz")) return router.push(link.slice(3))
			return router.push("/en" + link)
		}
	}
}
