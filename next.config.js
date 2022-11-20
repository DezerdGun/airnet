// /** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: { esmExternals: true },
};

module.exports = nextConfig;

module.exports = {
	redirects: async () => {
		return [
			{
				source: '/cheap_vds',
				destination: '/cheap-vds',
				permanent: true,
			},
			{
				source: '/big_vds',
				destination: '/big-vds',
				permanent: true,
			},
			{
				source: '/sitemap.xml',
				destination: '/sitemap',
				permanent: true,
			},
			{
				source: '/sitemap_index.xml',
				destination: '/sitemap',
				permanent: true,
			},
			{
				source: '/free-domains',
				destination: '/domains',
				permanent: true,
			},
		];
	},
};