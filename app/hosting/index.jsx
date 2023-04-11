import Container from "@/components/container"
import FAQ from "@/components/faq"
import Partners from "@/components/partners"
import SEO from "@/components/seo"
import TarifCard2 from "@/components/tarifCard2"
import TarifMaket from "@/components/tarifMaket"
import { useEffect, useState } from "react"

import { Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

import st from "./hosting.module.scss"

export default function Hosting({ language }) {
	const [show, setShow] = useState(-1)

	const langData = {
		seoTitle: {
			ru: "Cpanel хостинг | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Cpanel Hosting | Toshkentda TAS-IX Hosting, O'zbekiston",
			en: "Cpanel Hosting | TAS-IX Hosting in Tashkent, Uzbekistan",
		},
		seoDesc: {
			ru: "Виртуальный хостинг Cpanel в сети TAS-IX с круглосуточной поддержкой, хостинг в Ташкенте, недорогой хостинг, хостинг в Узбекистане",
			uz: "Virtual hosting Cpanel TAS-IX tarmog'ida 24/7 qo'llab-quvvatlash, Toshkentda xosting, arzon hosting, O'zbekistonda xosting",
			en: "Virtual hosting Cpanel in TAS-IX network with 24/7 support, hosting in Tashkent, cheap hosting, hosting in Uzbekistan",
		},
		tarifTitle: {
			ru: "Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте",
			uz: "Ommabop tariflar Toshkentda umumiy hosting Cpanel",
			en: "Popular tariffs Shared hosting Cpanel in Tashkent",
		},
		tarifDesc: {
			ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости до 1 Gbps",
			uz: "Bizning serverlarimiz O‘zbekiston hududida (Toshkent) TAS-IX tarmog‘ida 1 Gbit/s gacha tezlikda joylashgan.",
			en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at speeds up to 1 Gbps",
		},
		tarifEnd: {
			ru: "*При оплате за хостинг 12 месяцев!",
			uz: "*Xosting uchun 12 oy to'laganda!",
			en: "*When paying for hosting for 12 months!",
		},
		confTitle: {
			ru: "Ваш хостинг будет размещен на сервере с конфигурацией:",
			uz: "Sizning xostingingiz quyidagi konfiguratsiyaga ega serverda joylashtiriladi:",
			en: "Your hosting will be hosted on a server with the following configuration:",
		},
		allTarifsTitle: {
			ru: "На всех тарифных планах",
			uz: "Barcha tarif rejalarida",
			en: "On all tariff plans",
		},
		allTarifsText: {
			ru: (
				<>
					<p>
						<strong>Безлимитный трафик</strong> — никаких ограничений на соотношение входящего / исходящего трафика.
					</p>
					<p>
						<strong>Скорость в Интернет</strong> — 100 Mbps
					</p>
					<p>
						<strong>Скорость в TAS-IX</strong> — 1 Gbps
					</p>
					<p>
						<strong>Безлимитные FTP-аккаунты</strong> — для своего удобства работы с файлами, Вы можете создавать
						неограниченное количество FTP-аккаунтов, например, для каждого проекта - отдельный доступ.
					</p>
					<p>
						<strong>Без жестких ограничений ресурсов</strong> — у нас нет жестких лимитов аппаратных ресурсов. Если
						вдруг на Ваш сайт придет большое количество человек, то все они увидят Ваш сайт. Гарантировано посещение -
						2500 человек в сутки.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						<strong>Cheksiz trafik</strong> - kiruvchi / kirish nisbatida cheklovlar yo'q. chiquvchi trafik.
					</p>
					<p>
						<strong>Internet tezligi</strong> — 100 Mbit/s
					</p>
					<p>
						<strong>TAS-IX da tezlik</strong> — 1 Gbit/s
					</p>
					<p>
						<strong>Cheksiz FTP hisoblari</strong> — fayllar bilan ishlash qulayligi uchun siz cheksiz miqdordagi FTP
						hisoblarini yaratishingiz mumkin, masalan, har bir loyiha uchun - alohida kirish.
					</p>
					<p>
						<strong>Qattiq resurs cheklovlari yo'q</strong> - bizda apparat uchun qattiq cheklovlar yo'q resurslar. Agar
						to'satdan saytingizga juda ko'p odamlar kirsa, ular hammasi ko'radi Sizning veb-saytingiz. Kafolatlangan
						tashrif - kuniga 2500 kishi.
					</p>
				</>
			),
			en: (
				<>
					<p>
						<strong>Unlimited traffic</strong> - no limits on the ratio of incoming / outgoing traffic.
					</p>
					<p>
						<strong>Internet speed</strong> — 100 Mbps
					</p>
					<p>
						<strong>Speed in TAS-IX</strong> — 1 Gbps
					</p>
					<p>
						<strong>Unlimited FTP accounts</strong> — for your convenience of working with files, you you can create an
						unlimited number of FTP accounts, for example, for each project - separate access.
					</p>
					<p>
						<strong>No hard resource limits</strong> - we don't have hard limits on hardware resources. If suddenly a
						large number of people come to your site, then they will all see Your website. Guaranteed visit - 2500
						people per day.
					</p>
				</>
			),
		},
		wordpressTitle: {
			ru: "Быстрая установка Wordpress и популярных CMS в 1 клик!",
			uz: "1 marta bosishda Wordpress va mashhur CMS-ni tez o'rnatish!",
			en: "Quick installation of Wordpress and popular CMS in 1 click!",
		},
		wordpressDesc: {
			ru: (
				<>
					<p>Установка CMS-установщика в 1 клик</p>
					<p>
						Вашему вниманию предлагаются более <strong>100 БЕСПЛАТНЫХ</strong>
					</p>
					<p>CMS-установщиков различных категорий от Softaculous:</p>
				</>
			),
			uz: (
				<>
					<p>Bir marta bosish bilan CMS oʻrnatuvchisi</p>
					<p>
						<strong>100 dan ortiq BEPUL</strong>
					</p>
					<p>Softaculous-dan turli toifadagi CMS o'rnatuvchilari:</p>
				</>
			),
			en: (
				<>
					<p>One-click CMS installer</p>
					<p>
						More than <strong>100 FREE</strong>
					</p>
					<p>CMS installers of various categories from Softaculous:</p>
				</>
			),
		},
		faqTitle: {
			ru: "Нас часто спрашивают",
			uz: "Bizdan tez-tez so'rashadi",
			en: "We are often asked",
		},
		month: {
			ru: "мес.",
			uz: "oy",
			en: "mon.",
		},
	}

	const block = [
			{
				title: { ru: "Жесткие диски", uz: "Qattiq disklar", en: "Hard drives" },
				description: {
					ru: "12 x 1ТB SSD",
					uz: "12 x 1ТB SSD",
					en: "12 x 1ТB SSD",
				},
				img: "/hosting/ssd.png",
			},
			{
				title: { ru: "Оперативная память", uz: "Operativ xotira", en: "RAM" },
				description: {
					ru: "256 GB DDR4 ECC",
					uz: "256 GB DDR4 ECC",
					en: "256 GB DDR4 ECC",
				},
				img: "/hosting/ram.png",
			},
			{
				title: { ru: "Процессор", uz: "Protsessor", en: "CPU" },
				description: {
					ru: "2 x Intel Xeon",
					uz: "2 x Intel Xeon",
					en: "2 x Intel Xeon",
				},
				img: "/hosting/processor.png",
			},
			{
				title: { ru: "Массив RAID", uz: "RAID massivi", en: "RAID Array" },
				description: {
					ru: "Аппаратный RAID5",
					uz: "RAID5 apparati",
					en: "Hardware RAID5",
				},
				img: "/hosting/raid.png",
			},
		],
		cms = [
			{ ru: "Блоги", uz: "Bloglar", en: "Blogs" },
			{ ru: "Порталы и CMS", uz: "Portallar va CMS", en: "Portals and CMS" },
			{ ru: "Форумы", uz: "Forumlar", en: "Forums" },
			{
				ru: "Галереи изображений",
				uz: "Rasmlar galereyasi",
				en: "Image Galleries",
			},
			{ ru: "Социальные сети", uz: "Ijtimoiy tarmoqlar", en: "Social media" },
			{
				ru: "Голосования и опросы",
				uz: "So'rovlar va so'rovlar",
				en: "Voting and Polls",
			},
			{
				ru: "Интернет-магазины",
				uz: "Internet do'konlari",
				en: "Internet stores",
			},
			{ ru: "Файловые менеджеры", uz: "Fayl menejerlari", en: "File Managers" },
		],
		checkedCircle = (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
					fill="#006a4d"
				/>
			</svg>
		),
		table1 = [
			{
				title: "Старт",
				price: "10 000",
				ssd: 250,
				sites: 5,
				present: "",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32",
				month1: "10 000",
				month3: "30 000",
				month6: "57 000",
				month12: "108 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=1",
			},
			{
				title: "Простой",
				price: "15 000",
				ssd: 500,
				sites: 10,
				present: "",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31",
				month1: "15 000",
				month3: "45 000",
				month6: "85 500",
				month12: "162 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=2",
			},
			{
				title: "Стандарт",
				price: "25 000",
				ssd: "1 000",
				sites: 15,
				present: "",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33",
				month1: "25 000",
				month3: "75 000",
				month6: "142 500",
				month12: "270 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=3",
			},
			{
				title: "Доступный",
				price: "60 000",
				ssd: "3 000",
				sites: 20,
				present: "",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34",
				month1: "60 000",
				month3: "180 000",
				month6: "342 000",
				month12: "648 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=4",
			},
		],
		table2 = [
			{
				title: "Оптимальный",
				price: "90 000",
				ssd: "5 000",
				sites: "∞",
				present: "(2шт)",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37",
				month1: "90 000",
				month3: "270 000",
				month6: "513 000",
				month12: "972 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=36",
			},
			{
				title: "Выгодный",
				price: "150 000",
				ssd: "10 000",
				sites: "∞",
				present: "(2шт)",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
				month1: "150 000",
				month3: "450 000",
				month6: "855 000",
				month12: "1 620 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
			},
			{
				title: "Офис",
				price: "250 000",
				ssd: "15 000",
				sites: "∞",
				present: "(2шт)",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
				month1: "250 000",
				month3: "750 000",
				month6: "1 425 000",
				month12: "2 700 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
			},
			{
				title: "Корпоративный",
				price: "350 000",
				ssd: "20 000",
				sites: "∞",
				present: "(2шт)",
				orderLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
				month1: "350 000",
				month3: "1 050 000",
				month6: "1 995 000",
				month12: "3 780 000",
				buyLink: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
			},
		],
		tarif2 = [
			{
				title: { ru: "Старт", uz: "Start", en: "Start" },
				prices: [
					{
						price: "10 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "30 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "57 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "108 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: 250,
				sites: 5,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32",
			},
			{
				title: { ru: "Простой", uz: "Oddiy", en: "Simple" },
				// price: '15 000',
				prices: [
					{
						price: "15 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "45 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "85 500",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "162 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: 500,
				sites: 10,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31",
			},
			{
				title: { ru: "Стандарт", uz: "Standart", en: "Standart" },
				// price: '25 000',
				prices: [
					{
						price: "25 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "75 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "142 500",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "270 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "1 000",
				sites: 15,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33",
			},
			{
				title: { ru: "Доступный", uz: "Hamyonbop", en: "Accessible" },
				// price: '60 000',
				prices: [
					{
						price: "60 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "180 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "342 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "648 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "3 000",
				sites: 20,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34",
			},
			{
				title: { ru: "Оптимальный", uz: "Optimal", en: "Optimal" },
				// price: '90 000',
				prices: [
					{
						price: "90 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "270 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "513 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "972 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "5 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37",
			},
			{
				title: { ru: "Выгодный", uz: "Foydali", en: "Profitable" },
				// price: '150 000',
				prices: [
					{
						price: "150 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "450 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "855 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 620 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "10 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
			},
			{
				title: { ru: "Офис", uz: "Ofis", en: "Office" },
				// price: '250 000',
				prices: [
					{
						price: "250 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "750 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 425 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "2 700 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "15 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
			},
			{
				title: { ru: "Корпоративный", uz: "Korporativ", en: "Corporate" },
				// price: '350 000',
				prices: [
					{
						price: "350 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 050 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 995 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "3 780 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "20 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
			},
		],
		faq = [
			{
				title: {
					ru: "Как скоро можно начать пользоваться услугой?",
					uz: "Xizmatdan qanchalik tez foydalanishni boshlashim mumkin?",
					en: "How soon can I start using the service?",
				},
				description: {
					ru: (
						<>
							<p>Пользовательский аккаунт открывается сразу после подачи заявки.</p>

							<p>Сразу после произведения оплаты, вы можете начать сразу же пользоваться услугой.</p>
						</>
					),
					uz: (
						<>
							<p>Foydalanuvchi hisobi ariza topshirilgandan so‘ng darhol ochiladi.</p>

							<p>Toʻlovni amalga oshirganingizdan soʻng darhol xizmatdan foydalanishni boshlashingiz mumkin.</p>
						</>
					),
					en: (
						<>
							<p>The user account is opened immediately after the application is submitted.</p>

							<p>Immediately after making the payment, you can start using the service immediately.</p>
						</>
					),
				},
			},
		]

	useEffect(() => {
		const outerClick = (e) => {
			const classList = [...e.target?.classList]

			if (!classList.join(" ").includes("tarif_drop")) {
				setShow(-1)
			}
		}
		document.addEventListener("click", outerClick)
		return () => document.removeEventListener("click", outerClick)
	}, [])

	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />
			<div className={st.hosting}>
				{/* <Container
					className="mt-0"
					headTitle="Быстрый и надежный виртуальный хостинг Cpanel в Ташкенте"
					description={
						<>
							<p>
								Ежедневно, клиентами AirNet становятся десятки компаний и частных веб-мастеров. Многие
								уже оценили преимущества современных технологий, стабильность, скорость и безопасность
								нашего хостинга. Оборудование мы размещаем в высокотехнологичном, современном, надёжном
								Дата-Центре. Не теряйте время, оцените наш хостинг и профессиональную поддержку прямо
								сейчас.
							</p>
							<p className={st.hosting__traficMaket__speed}>
								Наши сервера расположены на территории Узбекистана, в сети TAS-IX и доступны на скорости
								- <span>1 Gbps</span>
							</p>
						</>
					}
					style={{ background: "url('/servers-2.jpg') no-repeat" }}>
					<div className={st.hosting__traficMaket}>
						<CustomTableHosting table={table1} />
						<CustomTableHosting table={table2} />
					</div>
				</Container> */}

				<div className={"bg_gray"}>
					<TarifMaket
						// bgImg={'/servers-2.jpg'}
						headTitle={langData.tarifTitle[language]}
						description={<p>{langData.tarifDesc[language]}</p>}
						endText={<p className="text-white text-center mt-2">{langData.tarifEnd[language]}</p>}
					>
						<Swiper
							cssMode={true}
							modules={[Autoplay, Navigation]}
							spaceBetween={0}
							slidesPerView={1}
							navigation
							loop={false}
							autoplay={{
								delay: 20000,
								disableOnInteraction: false,
							}}
							breakpoints={{
								950: {
									slidesPerView: 4,
								},
								770: {
									slidesPerView: 3,
								},
								500: {
									slidesPerView: 2,
								},
							}}
							className="tarifSwiper"
						>
							{tarif2.map((item, index) => (
								<SwiperSlide key={item.title}>
									<div className="w-95">
										<TarifCard2 index={index} tarif={item} show={show} setShow={setShow} language={language} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</TarifMaket>
				</div>

				<Container title={langData.confTitle[language]} clNTitle="text-center">
					<div className={st.hosting__block}>
						{block.map((item) => (
							<div key={item.title[language]} className={st.hosting__block__item}>
								<div className={st.hosting__block__item__img}>
									<img src={item.img} />
								</div>
								<div className={st.hosting__block__item__content}>
									<h6>{item.title[language]}</h6>
									<p>{item.description[language]}</p>
								</div>
							</div>
						))}
					</div>
				</Container>
				<div className={`bg-gray`}>
					<Container
						title={langData.allTarifsTitle[language]}
						clNTitle="text-black text-center"
						// style={{ background: "url('/hosting/server.jpg') no-repeat" }}
					>
						<div className={st.hosting__plan}>
							<div className={st.hosting__plan__content}>{langData.allTarifsText[language]}</div>
							<div className={st.hosting__plan__img}>
								<img src="/hosting/unlim.png" />
							</div>
						</div>
					</Container>
				</div>
				<Container
					title={langData.wordpressTitle[language]}
					description={langData.wordpressDesc[language]}
					className="text-center"
				>
					<div className={st.hosting__cms}>
						{cms.map((item) => (
							<div key={item[language]} className={st.hosting__cms__item}>
								{checkedCircle}
								<p>{item[language]}</p>
							</div>
						))}
					</div>
				</Container>

				<FAQ faq={faq} title={langData.faqTitle[language]} language={language} />
				<Partners language={language} />
			</div>
		</>
	)
}
