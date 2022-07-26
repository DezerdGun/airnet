import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

export default function SEO({ title, keyw, desc, url, a }) {
	const router = useRouter();

	return (
		<Head>
			<meta name="description" content={desc} />
			<meta property="og:description" content={desc} />
			<meta name="keywords" content={keyw} />
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta property="og:url" content={`https://airnet.uz${url ?? `${router.pathname}/`}`} />
			<link rel="canonical" href={`https://airnet.uz${url ?? `${router.pathname}/`}`} />
		</Head>
	);
}
