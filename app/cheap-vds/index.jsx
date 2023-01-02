import Container from "../../components/container";
import st from "./cheapVds.module.scss";
import ft from "../vds/vds.module.scss";
import TraficMaket from "../../components/traficMaket";
import CustomTableBottom from "../../components/customTableBottom";
import Partners from "../../components/partners";
import SEO from "../../components/seo";
import TarifMaket from "../../components/tarifMaket";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TarifCard from "../../components/tarifCard";
import ForFreeBlock from "../../components/forFreeBlock";
import WhyCard from "../../components/whyCard";
import WhyBlock from "../../components/whyBlock";
import { useEffect, useState } from "react";

const block = [
		{
			title: { ru: "Хостинг файлов и картинок", uz: "Fayllar va rasmlar serveri" },
			description: {
				ru: "Используйте 20 Gb жесткого диска для хранения данных.",
				uz: "Ma'lumotlarni saqlash uchun 20 Gb qattiq diskdan foydalaning",
			},
			img: "/server.png",
		},
		{
			title: { ru: "Для обучения и тестов", uz: "O'qish va test uchun" },
			description: {
				ru: "Идеально подходит для работы в командной строке и знакомства с системой Linux.",
				uz: "Buyruqlar satrida ishlash va Linux tizimi bilan tanishish uchun ideal.",
			},
			img: "/lesson.png",
		},
		{
			title: { ru: "Для нетребовательных задач", uz: "Zarur bo'lmagan topshiriqlar uchun" },
			description: {
				ru: "Вы можете организовать почтовый сервис или DNS-кластер.",
				uz: "Siz pochta xizmati yoki DNS klasterini tashkil qilishingiz mumkin.",
			},
			img: "/database.png",
		},
		{
			title: { ru: "Запрещается", uz: "Taqiqlanadi" },
			description: {
				ru: "Не предоставляется для игровых серверов и видео-контент сайтов!",
				uz: "O'yin serverlari va video kontent saytlari uchun mavjud emas!",
			},
			img: "/warning.png",
		},
	],
	tarif = [
		// {
		// 	title: "Micro",
		// 	// price: '100 000',
		// 	prices: [
		// 		{
		// 			price: "200 000",
		// 			dateOff: "3 мес.",
		// 			date: "мес.",
		// 		},
		// 		{
		// 			price: "300 000",
		// 			dateOff: "6 мес.",
		// 			date: "мес.",
		// 		},
		// 		{
		// 			price: "400 000",
		// 			dateOff: "12 мес.",
		// 			date: "мес.",
		// 		},
		// 	],
		// 	cpu: 1,
		// 	ram: 1,
		// 	ssd: 25,
		// 	net: 10,
		// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12",
		// },
		{
			title: "Platinum",
			// price: '150 000',
			prices: [
				{
					price: "150 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "450 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "900 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "1 800 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 2,
			ram: 2,
			ssd: 25,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13",
		},
		{
			title: "Strong",
			// price: '200 000',
			prices: [
				{
					price: "200 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "600 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "1 200 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "2 400 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 2,
			ram: 4,
			ssd: 50,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
		},
		{
			title: "VIP",
			// price: '250 000',
			prices: [
				{
					price: "250 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "750 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "1 500 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "3 000 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 4,
			ram: 4,
			ssd: 75,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15",
		},
		{
			title: "VIP+",
			// price: '300 000',
			prices: [
				{
					price: "300 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "900 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "1 800 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "3 600 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 4,
			ram: 6,
			ssd: 100,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
		},
	];

export default function CheapVds({ language }) {
	const [show, setShow] = useState(-1);

	useEffect(() => {
		const outerClick = (e) => {
			const classList = [...e.target?.classList];

			if (!classList.join(" ").includes("tarif_drop")) {
				setShow(-1);
			}
		};
		document.addEventListener("click", outerClick);
		return () => document.removeEventListener("click", outerClick);
	}, []);
	const langDate = {
		seoTitle: {
			ru: "Бюджетные VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Byudjet VDS/VPS | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		},
		descTitle: {
			ru: "Дешевые и бесплатные VDS/VPS на быстрых SSD-дисках в сети TAS-IX в Ташкенте",
			uz: "Toshkent shahridagi TAS-IX tarmog'ida tezkor SSD disklarida arzon va bepul VDS/VPS",
		},
		headTitle: {
			ru: "Бюджетные VDS/VPS — Самые дешевые сервера в Ташкенте",
			uz: "Byudjet VDS/VPS - Toshkentdagi eng arzon serverlar",
		},
		description: {
			ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
			uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps",
		},
		endText1: {
			ru: "Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делаем всё возможное, чтобы уменьшить время ожидания.",
			uz: "Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan boshlanadi zarur serverlar va yuk mavjudligiga qarab 2 ish kunigacha texnik xodimlar. To'lovdan keyin uskunani faollashtirishning o'rtacha vaqti - 1-2 soat. Biz kutish vaqtini kamaytirish uchun qo'limizdan kelganini qilamiz.",
		},
		endText2: {
			ru: "Срок действия услуги начнется с момента её активации.",
			uz: "Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.",
		},
	};

	return (
		<>
			<SEO title={langDate.seoTitle[language]} desc={langDate.descTitle[language]} />
			<div className={st.cheapVds}>
				<div className={"bg_gray"}>
					<TarifMaket
						// bgImg={'/servers-2.jpg'}
						headTitle="Бюджетные VDS/VPS — Самые дешевые сервера в Ташкенте"
						description={<p>{langDate.description[language]}</p>}
						className="mt-0 px-0"
						endText={
							<div className="text-white text-center mt-2">
								<p>{langDate.endText1[language]}</p>
								<p>{langDate.endText2[language]}</p>
							</div>
						}
					>
						<Swiper
							cssMode={true}
							modules={[Autoplay, Navigation]}
							slidesPerView={1}
							navigation
							loop={false}
							autoplay={{
								delay: 100000,
								disableOnInteraction: false,
							}}
							breakpoints={{
								1070: {
									slidesPerView: 4,
								},
								770: {
									slidesPerView: 3,
								},
								550: {
									slidesPerView: 2,
								},
							}}
							className="tarifSwiper"
						>
							{tarif.map((item, index) => (
								<SwiperSlide key={item.title}>
									<div className="w-95">
										<TarifCard index={index} tarif={item} show={show} setShow={setShow} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</TarifMaket>
				</div>

				{/* <Container style={{ background: `url('/servers-5.jpg') no-repeat` }} className="mt-0 py-0">
					<div className={st.cheapVds__header}>
						<div className={st.cheapVds__header__left}>
							<h1>БЮДЖЕТНЫЕ VDS/VPS</h1>
							<h2>САМЫЕ ДЕШЕВЫЕ VDS/VPS-СЕРВЕРА В ТАШКЕНТЕ</h2>
							<p>
								Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на
								скорости 1 Gbps
							</p>
						</div>
						<div className={st.cheapVds__header__right}>
							<h3>
								ВСЕГО 100 000 СУМ <br /> <span>в месяц!</span>
							</h3>
							<a
								href="https://billing.airnet.uz/billing.php?do=order&amp;vid=vds&amp;tarif=17"
								target="_blank"
								rel="noopener noreferrer"
							>
								Заказать сервер
							</a>
						</div>
					</div>
				</Container> */}

				<WhyBlock content={block} language={language} />

				{/* <TarifMaket
					bgImg={'/servers-2.jpg'}
					className="mb-4"
					endText={
						<ul className="list text-white mt-2 mb-0">
							<li>Владелец самостоятельно управляет сервером.</li>
							<li>На тариф не распространяются никакие скидки или специальные цены.</li>
							<li>Услуга администрирования не оказывается.</li>
						</ul>
					}
				>
					<Swiper
						cssMode={true}
						modules={[Autoplay, Navigation]}
						spaceBetween={0}
						slidesPerView={1}
						navigation
						loop={true}
						autoplay={{
							delay: 10000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							770: {
								slidesPerView: 3,
							},
							500: {
								slidesPerView: 2,
							},
						}}
						className="tarifSwiper"
					>
						{tarif.map((item) => (
							<SwiperSlide key={item.title}>
								<div className="w-95">
									<TarifCard tarif={item} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</TarifMaket> */}

				<ForFreeBlock />

				<Partners />
			</div>
		</>
	);
}
