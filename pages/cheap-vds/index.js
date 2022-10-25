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
			title: "Хостинг файлов и картинок",
			description: "Используйте 10 Gb жесткого диска для хранения данных.",
			img: "/server.png",
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
	],
	tarif = [
		{
			title: "Micro",
			// price: '100 000',
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
			cpu: 1,
			ram: 1,
			ssd: 25,
			net: 10,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12",
		},
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
			ssd: 40,
			net: 10,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13",
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
			net: 15,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
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
				<Container style={{ background: `url('/servers-5.jpg') no-repeat` }} className="mt-0 py-0">
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
				</Container>

				<WhyBlock content={block} />

				<TarifMaket
					bgImg={"/servers-2.jpg"}
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
				</TarifMaket>

				<ForFreeBlock />

				<Partners />
			</div>
		</>
	);
}
