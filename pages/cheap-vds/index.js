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

const block = [
		{
<<<<<<< HEAD
			title: "Хостинг файлов и картинок",
			description: "Используйте 10 Gb жесткого диска для хранения данных.",
			img: "/server.png",
=======
			title: 'Хостинг файлов и картинок',
			description: 'Используйте 20 Gb жесткого диска для хранения данных.',
			img: '/server.png',
>>>>>>> fe0c4adae5fc27f2e7e957511f4e636c0bea0203
		},
		{
			title: "Для обучения и тестов",
			description: "Идеально подходит для работы в командной строке и знакомства с системой Linux.",
			img: "/lesson.png",
		},
		{
			title: "Для нетребовательных задач",
			description: "Вы можете организовать почтовый сервис или DNS-кластер.",
			img: "/database.png",
		},
		{
			title: 'Запрещается',
			description: 'Не предоставляется для игровых серверов и видео-контент сайтов!',
			img: '/warning.png',
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
					price: "200 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "300 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "400 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 2,
			ram: 2,
<<<<<<< HEAD
			ssd: 40,
			net: 10,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13",
=======
			ssd: 25,
			net: 25,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13',
>>>>>>> fe0c4adae5fc27f2e7e957511f4e636c0bea0203
		},
		{
			title: "Strong",
			// price: '200 000',
			prices: [
				{
					price: "200 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "300 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "400 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 2,
			ram: 4,
			ssd: 50,
<<<<<<< HEAD
			net: 15,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
=======
			net: 25,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14',
>>>>>>> fe0c4adae5fc27f2e7e957511f4e636c0bea0203
		},
		{
			title: 'VIP',
			price: '250 000',
			cpu: 4,
			ram: 4,
			ssd: 75,
			net: 25,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15',
		},
		{
			title: 'VIP+',
			price: '300 000',
			cpu: 4,
			ram: 6,
			ssd: 100,
			net: 25,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16',
		},
	];

export default function CheapVds() {
	return (
		<>
			<SEO
				title="Бюджетные VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Дешевые и бесплатные VDS/VPS на быстрых SSD-дисках в сети TAS-IX в Ташкенте"
			/>
			<div className={st.cheapVds}>
				<TarifMaket
					// bgImg={'/servers-2.jpg'}
					headTitle="Бюджетные VDS/VPS — Самые дешевые сервера в Ташкенте"
					description={
						<p>
							Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1
							Gbps
						</p>
					}
					className="mt-0 px-0"
					endText={
						<div className="text-white text-center mt-2">
							<p>
								Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х
								рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического
								персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делам всё
								возможное, чтобы уменьшить время ожидания.
							</p>
							<p>Срок действия услуги начнется с момента её активации.</p>
						</div>
					}>
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
						className="tarifSwiper">
						{tarif.map((item) => (
							<SwiperSlide key={item.title}>
								<div className="w-95">
									<TarifCard tarif={item} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</TarifMaket>
				
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

				<WhyBlock content={block} />

<<<<<<< HEAD
				<TarifMaket
					bgImg={"/servers-2.jpg"}
=======
				{/* <TarifMaket
					bgImg={'/servers-2.jpg'}
>>>>>>> fe0c4adae5fc27f2e7e957511f4e636c0bea0203
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
