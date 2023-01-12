import Container from "../container";
import { LINKS } from "../requirements";
import st from "./footer.module.scss";
import Link from "next/dist/client/link";
import { LOGO } from "../utils";

export default function Footer({ language }) {
	const langData = {
		workTime: {
			ru: "Звонок круглосуточно",
			uz: "24/7 aloqadamiz",
			en: "Call around the clock",
		},
		join: {
			ru: "Присоединяйтесь",
			uz: "Ulanish",
			en: "Join",
		},
		buy: {
			ru: "Принимаем к оплате",
			uz: "To'lov usullari",
			en: "Accept for payment",
		},
		method: {
			ru: "Смотреть все способы",
			uz: "Barcha usullarni ko'rish",
			en: "See all ways",
		},
		privacy: {
			ru: "Политика конфиденциальности",
			uz: "Maxfiylik siyosati",
			en: "Privacy Policy",
		},
		worked: {
			ru: "Сайт разработан AIRNET",
			uz: "Veb-sayt AIRNET tomonidan ishlab chiqilgan",
			en: "Website developed by AIRNET",
		},
	};

	const social = [
			{
				link: "https://t.me/airnetuzb",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
						<path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
					</svg>
				),
			},
			{
				link: "https://vk.com/airnetuzb",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
					</svg>
				),
			},
			{
				link: "https://www.facebook.com/airnetuz",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
					</svg>
				),
			},
			{
				link: "https://twitter.com/airnetuz",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
					</svg>
				),
			},
			{
				link: "https://www.instagram.com/airnetuz",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
					</svg>
				),
			},
		],
		payment = [
			{
				link: "#",
				img: <img src="/payments/payme.svg" />,
			},
			{
				link: "#",
				img: <img className="oson" src="/payments/oson.png" />,
			},
			{
				link: "#",
				img: <img className="click" src="/payments/click.png" />,
			},
			{
				link: "#",
				img: <img className="upay" src="/payments/upay.svg" />,
			},
		],
		payment2 = [
			{
				link: "#",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
					</svg>
				),
			},
			{
				link: "#",
				img: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z" />
					</svg>
				),
			},
			{
				link: "#",
				img: <img className="paynet" src="payments/paynet.png" />,
			},
		],
		vps_vds = {
			title: { ru: "VPS и VDS серверы", uz: "VPS va VDS serverlari", en: "VPS and VDS servers" },
			children: [
				{
					link: LINKS.CHEAP_VDS,
					title: { ru: "Бюджетные серверы", uz: "Hamyonbob serverlari", en: "Budget servers" },
				},
				{
					link: LINKS.OPTIMAL_VDS,
					title: { ru: "Оптимальные серверы", uz: "Optimal serverlari", en: "Optimal servers" },
				},
				{
					link: LINKS.BIG_VDS,
					title: {
						ru: "Высокопроизводительные серверы",
						uz: "Yuqori unumdor serverlar",
						en: "High performance servers",
					},
				},
				{
					link: LINKS.VDS_1C,
					title: { ru: "VDS для 1C", uz: "1C uchun VDS", en: "VDS for 1C" },
				},
				{
					link: LINKS.VDS_STORAGE,
					title: { ru: "VDS Storage", uz: "VDS Storage", en: "VDS Storage" },
				},
				{
					link: LINKS.VDS_WINDOWS,
					title: { ru: "VDS для Windows", uz: "Windows uchun VDS", en: "VDS for Windows" },
				},
				{
					link: LINKS.SERVERS,
					title: { ru: "Выделенные серверы", uz: "Ajratilgan serverlar", en: "Dedicated servers" },
				},
			],
		},
		uslugi = {
			title: { ru: "Услуги", uz: "Xizmatlar", en: "Services" },
			children: [
				{
					link: LINKS.DOMAINS,
					title: { ru: "Доменные имена", uz: "Domen nomlari", en: "Domain names" },
				},
				{
					link: LINKS.SSL,
					title: { ru: "SSL-сертификаты", uz: "SSL-sertifekatlari", en: "SSL-certificates" },
				},
				{
					link: LINKS.ADMINISTRATION,
					title: { ru: "Администрирование", uz: "Adminstratsiya", en: "Administration" },
				},
				{
					link: LINKS.AUTO_COPY,
					title: {
						ru: "Автоматическое резервное копирование",
						uz: "Avtomatik saqlash",
						en: "Automatic backup",
					},
				},
				{
					link: LINKS.ANTI_DDOS,
					title: { ru: "Защита от DDoS", uz: "DDoS dan himoya", en: "DDoS protection" },
				},
				{
					link: LINKS.LICENSE,
					title: { ru: "Лицензии AIRNET", uz: "AIRNET litsenziyasi", en: "AIRNET licenses" },
				},
				{
					link: LINKS.SITEPAD,
					title: {
						ru: "Конструктор сайтов SitePad",
						uz: "SitePad qollanmasi",
						en: "SitePad Site Builder",
					},
				},
				// {
				// 	link: LINKS.ANTIVIRUS,
				// 	title:{ru: 'Антивирус для сайта',uz:""},
				// },
			],
		},
		clients = {
			title: { ru: "Клиентам", uz: "Mijozlar uchun", en: "For Clients" },
			children: [
				{
					link: LINKS.ABOUT,
					title: { ru: "О компании", uz: "Kompaniya haqida", en: "About the company" },
				},
				{
					link: LINKS.CONTACTS,
					title: { ru: "Контакты", uz: "Kontaktlar", en: "Contacts" },
				},
				{
					link: LINKS.DOCUMENTS,
					title: { ru: "Документы", uz: "Xujjatlar", en: "Documents" },
				},
				{
					link: LINKS.BLOG,
					title: { ru: "Блог", uz: "Blog", en: "Blog" },
				},
				{
					link: LINKS.REVIEWS,
					title: { ru: "Отзывы", uz: "Sharhlar", en: "Reviews" },
				},
				// {
				// 	link: LINKS.LOYALS,
				// 	title:{ru: 'Программа лояльности',uz:""},
				// },
			],
		},
		help = {
			title: { ru: "Помощь", uz: "Yordam", en: "Help" },
			children: [
				{
					link: LINKS.HELP,
					title: { ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge base" },
				},
				{
					link: LINKS.SUPPORT,
					title: { ru: "Служба поддержки", uz: "Qo'llab-quvatlash xizmati", en: "Support Service" },
				},
				{
					link: LINKS.AUTO_PAY,
					title: { ru: "Автоплатёж", uz: "Avtoto'lov", en: "Auto payment" },
				},
			],
		},
		partners = {
			title: { ru: "Партнёрам", uz: "Hamkorlar", en: "Partners" },
			children: [
				{
					link: LINKS.PARTNERS,
					title: {
						ru: "Реферальная программа",
						uz: "Yo'naltirilgan dasturlar",
						en: "Referral program",
					},
				},
				{
					link: LINKS.RESELLING,
					title: { ru: "Программа реселлинга", uz: "Resellar dasturi", en: "Reselling Program" },
				},
			],
		};
	// menu = [
	// 	{
	// 		title:{ru: 'VPS и VDS серверы',uz:""},
	// 		children: [
	// 			{
	// 				link: LINKS.CHEAP_VDS,
	// 				title:{ru: 'Бюджетные серверы',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.OPTIMAL_VDS,
	// 				title:{ru: 'Оптимальные серверы',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.BIG_VDS,
	// 				title:{ru: 'Высокопроизводительные серверы',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.VDS_1C,
	// 				title:{ru: 'VDS для 1C',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.VDS_STORAGE,
	// 				title:{ru: 'VDS Storage',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.VDS_WINDOWS,
	// 				title:{ru: 'VDS для Windows',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.SERVERS,
	// 				title:{ru: 'Выделенные серверы',uz:""},
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title:{ru: 'Услуги',uz:""},
	// 		children: [
	// 			{
	// 				link: LINKS.DOMAINS,
	// 				title:{ru: 'Доменные имена',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.SSL,
	// 				title:{ru: 'SSL-сертификаты',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.ADMINISTRATION,
	// 				title:{ru: 'Администрирование',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.AUTO_COPY,
	// 				title:{ru: 'Автоматическое резервное копирование',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.ANTI_DDOS,
	// 				title:{ru: 'Защита от DDoS',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.LICENSE,
	// 				title:{ru: 'Лицензии AIRNET',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.SITEPAD,
	// 				title:{ru: 'Конструктор сайтов SitePad',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.ANTIVIRUS,
	// 				title:{ru: 'Антивирус для сайта',uz:""},
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title:{ru: 'Клиентам',uz:""},
	// 		children: [
	// 			{
	// 				link: LINKS.ABOUT,
	// 				title:{ru: 'О компании',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.CONTACTS,
	// 				title:{ru: 'Контакты',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.FAQ,
	// 				title:{ru: 'Документы',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.BLOG,
	// 				title:{ru: 'Блог',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.REVIEWS,
	// 				title:{ru: 'Отзывы',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.LOYALS,
	// 				title:{ru: 'Программа лояльности',uz:""},
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title:{ru: 'Партнёрам',uz:""},
	// 		children: [
	// 			{
	// 				link: LINKS.PARTNERS,
	// 				title:{ru: 'Реферальная программа',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.RESELLING,
	// 				title:{ru: 'Программа реселлинга',uz:""},
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title:{ru: 'Помощь',uz:""},
	// 		children: [
	// 			{
	// 				link: LINKS.HELP,
	// 				title:{ru: 'База знаний',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.SUPPORT,
	// 				title:{ru: 'Служба поддержки',uz:""},
	// 			},
	// 			{
	// 				link: LINKS.AUTO_PAY,
	// 				title:{ru: 'Автоплатёж',uz:""},
	// 			},
	// 		],
	// 	},
	// ];

	return (
		<div className={st.footer}>
			<Container>
				<div className={st.footer__block}>
					<div className={st.footer__block__head}>
						<div className={st.footer__block__head__logo}>
							<Link href={LINKS.HOME}>
								<a>{LOGO}</a>
							</Link>
						</div>
						<div className={st.footer__block__head__phone}>
							<a href={LINKS.PHONE}>+998 (71) 200-87-00</a>
							<p>{langData.workTime[language]}</p>
						</div>
						<div className={st.footer__block__head__social}>
							<h6>{langData.join[language]}</h6>
							<ul>
								{social.map((item) => (
									<li key={item.link}>
										<a href={item.link} target="_blank">
											{item.img}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<nav className={st.footer__block__nav}>
						<ul className={st.footer__block__nav__ul}>
							<li
								className={`${st.footer__block__nav__ul__li} ${st.footer__block__nav__ul__li__vps}`}
							>
								<h3>{vps_vds.title[language]}</h3>
								<ul>
									{vps_vds.children.map((i) => (
										<li key={i.link}>
											<Link href={i.link}>
												<a>{i.title[language]}</a>
											</Link>
										</li>
									))}
								</ul>
							</li>
							<li
								className={`${st.footer__block__nav__ul__li} ${st.footer__block__nav__ul__li__uslugi}`}
							>
								<h3>{uslugi.title[language]}</h3>
								<ul>
									{uslugi.children.map((i) => (
										<li key={i.link}>
											<Link href={i.link}>
												<a>{i.title[language]}</a>
											</Link>
										</li>
									))}
								</ul>
							</li>
							<div className={st.footer__block__nav__ul__div}>
								<li
									className={`${st.footer__block__nav__ul__li} ${st.footer__block__nav__ul__div__clients}`}
								>
									<h3>{clients.title[language]}</h3>
									<ul>
										{clients.children.map((i) => (
											<li key={i.link}>
												<Link href={i.link}>
													<a>{i.title[language]}</a>
												</Link>
											</li>
										))}
									</ul>
								</li>
								<li
									className={`${st.footer__block__nav__ul__li} ${st.footer__block__nav__ul__div__partners}`}
								>
									<h3>{partners.title[language]}</h3>
									<ul>
										{partners.children.map((i) => (
											<li key={i.link}>
												<Link href={i.link}>
													<a>{i.title[language]}</a>
												</Link>
											</li>
										))}
									</ul>
								</li>
							</div>
							<li
								className={`${st.footer__block__nav__ul__li} ${st.footer__block__nav__ul__li__help}`}
							>
								<h3>{help.title[language]}</h3>
								<ul>
									{help.children.map((i) => (
										<li key={i.link}>
											<Link href={i.link}>
												<a>{i.title[language]}</a>
											</Link>
										</li>
									))}
								</ul>
								<br />
								<div className={st.footer__block__head__payment}>
									<h6>{langData.buy[language]}</h6>
									<ul>
										{payment.map((item) => (
											<li key={item.link}>
												<a href={item.link}>{item.img}</a>
											</li>
										))}
									</ul>
									<ul>
										{payment2.map((item) => (
											<li key={item.link}>
												<a href={item.link}>{item.img}</a>
											</li>
										))}
									</ul>
									<Link href={LINKS.PAYMENT}>
										<a>{langData.method[language]}</a>
									</Link>
								</div>
							</li>
						</ul>
					</nav>
				</div>
				<div className={st.footer__bottom}>
					<span>Copyright © 2018 — 2022 OOO «AIRNET»</span>
					<Link href={LINKS.PRIVACY_POLICY}>
						<a>{langData.privacy[language]}</a>
					</Link>
					<Link href={LINKS.HOME}>
						<a>{langData.worked[language]}</a>
					</Link>
				</div>
			</Container>
		</div>
	);
}
