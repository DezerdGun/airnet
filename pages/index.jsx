import Home from "@/app/home";
import { NEWS_API } from "@/app/news";

export default function HomePage({ language, apiNews }) {
	return <Home language={language} apiNewsServer={apiNews} />;
}

export async function getStaticProps() {
	let apiNews = [];
	try {
		const r = await fetch(NEWS_API + "?limit=10&lang=ru");
		if (r.ok) {
			const j = await r.json();
			if (j && j.ok && Array.isArray(j.data)) apiNews = j.data;
		}
	} catch (_) {}
	return { props: { apiNews }, revalidate: 60 };
}
