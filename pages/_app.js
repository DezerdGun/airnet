import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.scss";
import { useEffect } from "react";
import Cookies from "../components/cookies";
// import i18n from 'i18next'
// import {initReactI18next} from 'react-i18next'

// i18n.use(initReactI18next).init({
//     resources: {

//     }
// })

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Airnet.uz - Виртуальный хостинг в TAS-IX, домена, VDS-сервера, Ташкент</title>
				<meta
					name="description"
					content="Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-N4WXM93');`,
					}}
				></script>

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
									streetAddress: "Matbuotchilar Street 32",
									addressLocality: "Tashkent",
									postalCode: "100060",
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
			<link
				href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
				rel="stylesheet"
			/>
			<Header />
			<div className="app">
				<Component {...pageProps} />
				<Cookies />
			</div>
			<Footer />
			<script
				dangerouslySetInnerHTML={{
					__html: `window.replainSettings = { id: '5f7300e1-1747-4afc-ae3f-6b8478c6ce3e' };
						(function(u){var s=document.createElement('script');s.async=true;s.src=u;
						var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
						})('https://widget.replain.cc/dist/client.js')`,
				}}
			></script>
		</>
	);
}

export default MyApp;
