const siteUrl = "https://airnet.uz",
	allow = ["/*.css", "/*.jpg", "/*.png", "/*.js"];

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	sitemapBaseFileName: "sitemap",
	priority: NaN,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: allow,
			},
			{
				userAgent: "Googlebot",
				allow: allow,
			},
		],
		additionalSitemaps: [`${siteUrl}/sitemap.xml`],
	},
	sitemapSize: 50000,
};
