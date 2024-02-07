import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"
import { useRouter } from "next/router"
import Cookies from "../components/cookies/index.jsx"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/globals.scss"

function MyApp({ Component, pageProps, url }) {
	const router = useRouter(),
		language = router.asPath.includes("/uz") ? "uz" : router.asPath.includes("/en") ? "en" : "ru"

	return (
		<>
			<Head>
				<title>
					{language == "uz"
						? "Airnet.uz - TAS-IXda virtual xosting, UZ zonasida domen, VDS/VPS - serverlar, Toshkent, O'zbekiston"
						: language == "en"
						? "Airnet.uz - Virtual hosting in TAS-IX, domain in UZ zone, VDS/VPS - servers, Tashkent, Uzbekistan"
						: "Airnet.uz - Виртуальный хостинг в TAS-IX, домена в зоне UZ, VDS/VPS - сервера, Ташкент,	Узбекистане"}
				</title>
				<meta
					name="description"
					content={
						language == "uz"
							? "Virtual xosting, Toshkentda xosting, qayta sotish hosting, arzon VDS, VPS serverlar, Toshkentda VDS, virtual serverlar, ajratilgan serverlar, domen nomlari"
							: language == "en"
							? "Virtual hosting, hosting in Tashkent, reselling hosting, cheap VDS, VPS servers, VDS in Tashkent, virtual servers, dedicated servers, domain names"
							: "Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена"
					}
				/>
				<meta name="yandex-verification" content="e5fe79390705ede1" />
				<link rel="shortcut icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link rel="alternate" hrefLang="uz-ru" href={`https://airnet.uz${url ?? `${router.pathname}`}`} />
				<link rel="alternate" hrefLang="uz-en" href={`https://airnet.uz/en${url ?? `${router.pathname}`}`} />
				<link rel="alternate" hrefLang="uz" href={`https://airnet.uz/uz${url ?? `${router.pathname}`}`} />
				<link rel="alternate" hrefLang="x-default" href={`https://airnet.uz/uz${url ?? `${router.pathname}`}`} />
				<meta name="referrer" content="strict-origin" />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-N4WXM93');`,
					}}
				></script>

				{/* <!-- Yandex.Metrika counter --> */}

				<script
					type="text/javascript"
					dangerouslySetInnerHTML={{
						__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

				ym(50412993, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
				});`,
					}}
				></script>
				<noscript>
					<div>
						<img src="https://mc.yandex.ru/watch/50412993" style={{ position: "absolute", left: "-9999px" }} alt="" />
					</div>
				</noscript>

				{/* <!-- /Yandex.Metrika counter --> */}

				{/* ------------- Organization ------------- */}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "Organization",
								name: "AIRNET",
								url: "https://airnet.uz/",
								logo: "https://airnet.uz/logo.png",
								contactPoint: {
									"@type": "ContactPoint",
									telephone: "99890 3243080",
									contactType: "customer service",
									areaServed: "UZ",
									availableLanguage: "ru",
								},
							},
							null,
							2
						),
					}}
				></script>

				{/* ------------- LocalBusiness ------------- */}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "InsuranceAgency",
								name: "AIRNET",
								image: "https://airnet.uz/logo.png",
								"@id": "https://airnet.uz/",
								url: "https://airnet.uz/",
								telephone: "99890 3243080",
								priceRange: "$1 - $300",
								address: {
									"@type": "PostalAddress",
									streetAddress: "Sayram 25",
									addressLocality: "Tashkent",
									postalCode: "100067",
									addressCountry: "Uzbekistan",
								},
								geo: {
									"@type": "GeoCoordinates",
									latitude: 41.310233,
									longitude: 69.276234,
								},
								openingHoursSpecification: [
									{
										"@type": "OpeningHoursSpecification",
										dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
										opens: "08:00",
										closes: "20:00",
									},
									{
										"@type": "OpeningHoursSpecification",
										dayOfWeek: ["Sunday", "Saturday"],
										opens: "09:00",
										closes: "18:00",
									},
								],
							},
							null,
							2
						),
					}}
				></script>
			</Head>
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4WXM93"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			></noscript>
			<link href="/fonts/css2.css?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
			<Header language={language} />
			<div className="app">
				<Component {...pageProps} language={language} />
				<Cookies language={language} />
			</div>
			<Footer language={language} />
			<script
				dangerouslySetInnerHTML={{
					__html: `window.replainSettings = { id: '5f7300e1-1747-4afc-ae3f-6b8478c6ce3e' };
						(function(u){var s=document.createElement('script');s.async=true;s.src=u;
						var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
						})('https://widget.replain.cc/dist/client.js')`,
				}}
			></script>
		</>
	)
}

export default MyApp
