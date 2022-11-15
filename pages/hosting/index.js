import CustomTableBottom from "../../components/customTableBottom";
import Partners from "../../components/partners";
import TraficMaket from "../../components/traficMaket";
import st from "./hosting.module.scss";
import Link from "next/link";
import { LINKS } from "../../components/requirements";
import Container from "../../components/container";
import CustomTable from "../../components/customTable";
import FAQ from "../../components/faq";
import CustomTableHosting from "../../components/customTableHosting";
import SEO from "../../components/seo";
import TarifMaket from "../../components/tarifMaket";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TarifCard2 from "../../components/tarifCard2";
import { useEffect, useState } from "react";

const block = [
		{
			title: "Жесткие диски",
			description: "12 x 1ТB SSD",
			img: "/hosting/ssd.png",
		},
		{
			title: "Оперативная память",
			description: "256 GB DDR4 ECC",
			img: "/hosting/ram.png",
		},
		{
			title: "Процессор",
			description: "2 x Intel Xeon",
			img: "/hosting/processor.png",
		},
		{
			title: "Массив RAID",
			description: "Аппаратный RAID5",
			img: "/hosting/raid.png",
		},
	],
	cms = [
		"Блоги",
		"Порталы и CMS",
		"Форумы",
		"Галереи изображений",
		"Социальные сети",
		"Голосования и опросы",
		"Интернет-магазины",
		"Файловые менеджеры",
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
			title: "Старт",
			// price: '10 000',
			prices: [
				{
					price: "10 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "30 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "57 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "108 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: 250,
			sites: 5,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32",
		},
		{
			title: "Простой",
			// price: '15 000',
			prices: [
				{
					price: "15 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "45 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "85 500",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "162 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: 500,
			sites: 10,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31",
		},
		{
			title: "Стандарт",
			// price: '25 000',
			prices: [
				{
					price: "25 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "75 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "142 500",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "270 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: "1 000",
			sites: 15,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33",
		},
		{
			title: "Доступный",
			// price: '60 000',
			prices: [
				{
					price: "60 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "180 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "342 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "648 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: "3 000",
			sites: 20,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34",
		},
		{
			title: "Оптимальный",
			// price: '90 000',
			prices: [
				{
					price: "90 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "270 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "513 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "972 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: "5 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37",
		},
		{
			title: "Выгодный",
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
					price: "855 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "1 620 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: "10 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
		},
		{
			title: "Офис",
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
					price: "1 425 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "2 700 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: "15 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
		},
		{
			title: "Корпоративный",
			// price: '350 000',
			prices: [
				{
					price: "350 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "1 050 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "1 995 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "3 780 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			ssd: "20 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
		},
	],
	faq = [
		{
			title: "Как скоро можно начать пользоваться услугой?",
			description: (
				<>
					<p>Пользовательский аккаунт открывается сразу после подачи заявки.</p>

					<p>Сразу после произведения оплаты, вы можете начать сразу же пользоваться услугой.</p>
				</>
			),
		},
	];

export default function Hosting() {
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

	return (
		<>
			<SEO
				title="Cpanel хостинг | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Виртуальный хостинг Cpanel в сети TAS-IX с круглосуточной поддержкой, хостинг в Ташкенте, недорогой хостинг, хостинг в Узбекистане"
			/>
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
						headTitle="Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте"
						description={
							<p>
								Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на
								скорости до 1 Gbps
							</p>
						}
						endText={
							<p className="text-white text-center mt-2">*При оплате за хостинг 12 месяцев!</p>
						}
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
										<TarifCard2 index={index} tarif={item} show={show} setShow={setShow} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</TarifMaket>
				</div>

				<Container
					title="Ваш хостинг будет размещен на сервере с конфигурацией:"
					clNTitle="text-center"
				>
					<div className={st.hosting__block}>
						{block.map((item) => (
							<div key={item.title} className={st.hosting__block__item}>
								<div className={st.hosting__block__item__img}>
									<img src={item.img} />
								</div>
								<div className={st.hosting__block__item__content}>
									<h6>{item.title}</h6>
									<p>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</Container>
				<div className={`bg-gray`}>
					<Container
						title="На всех тарифных планах"
						clNTitle="text-black text-center"
						// style={{ background: "url('/hosting/server.jpg') no-repeat" }}
					>
						<div className={st.hosting__plan}>
							<div className={st.hosting__plan__content}>
								<p>
									<strong>Безлимитный трафик</strong> — никаких ограничений на соотношение входящего
									/ исходящего трафика.
								</p>
								<p>
									<strong>Скорость в Интернет</strong> — 100 Mbps
								</p>
								<p>
									<strong>Скорость в TAS-IX</strong> — 1 Gbps
								</p>
								<p>
									<strong>Безлимитные FTP-аккаунты</strong> — для своего удобства работы с файлами,
									Вы можете создавать неограниченное количество FTP-аккаунтов, например, для каждого
									проекта - отдельный доступ.
								</p>
								<p>
									<strong>Без жестких ограничений ресурсов</strong> — у нас нет жестких лимитов
									аппаратных ресурсов. Если вдруг на Ваш сайт придет большое количество человек, то
									все они увидят Ваш сайт. Гарантировано посещение - 2500 человек в сутки.
								</p>
							</div>
							<div className={st.hosting__plan__img}>
								<img src="/hosting/unlim.png" />
							</div>
						</div>
					</Container>
				</div>
				<Container
					title="Быстрая установка Wordpress и популярных CMS в 1 клик!"
					description={
						<>
							<p>Установка CMS-установщика в 1 клик</p>
							<p>
								Вашему вниманию предлагаются более <strong>100 БЕСПЛАТНЫХ</strong>
							</p>
							<p>CMS-установщиков различных категорий от Softaculous:</p>
						</>
					}
					className="text-center"
				>
					<div className={st.hosting__cms}>
						{cms.map((item) => (
							<div key={item} className={st.hosting__cms__item}>
								{checkedCircle}
								<p>{item}</p>
							</div>
						))}
					</div>
				</Container>
				<FAQ faq={faq} title="Нас часто спрашивают" />
				<Partners />
			</div>
		</>
	);
}
