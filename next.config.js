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
		];
	},
};