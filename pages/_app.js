import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/globals.scss';
import { useEffect } from 'react';
import Cookies from '../components/cookies';
// import i18n from 'i18next'
// import {initReactI18next} from 'react-i18next'

// i18n.use(initReactI18next).init({
//     resources: {

//     }
// })

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Airnet.uz - Виртуальный хостинг в TAS-IX, домена, VDS-сервера, Ташкент</title>
				<meta
					name="description"
					content="Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			</Head>
			<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
			<Header />
			<div className="app">
				<Component {...pageProps} />
				<Cookies />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;
