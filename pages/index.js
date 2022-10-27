import Container from "../components/container";
import FAQ from "../components/faq";
import Notifications from "../components/notifications";
import Partners from "../components/partners";
import CustomSwiper from "../components/customSwiper";
import TraficMaket from "../components/traficMaket";
import Trust from "../components/trust";
import TrustPilot from "../components/trustpilot";
import { faqGenerate } from "../components/utils";
import WhyBlock from "../components/whyBlock";
import st from "./index.module.scss";
import CustomTableBottom from "../components/customTableBottom";
import RegDomain from "../components/regDomain";
import Sitepad from "../components/sitepad";
import Stock from "../components/stock";
import TarifCard from "../components/tarifCard";
import Link from "next/dist/client/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TarifMaket from "../components/tarifMaket";
import TarifCard2 from "../components/tarifCard2";
import Reviews from "../components/reviews";
import Product from "../components/seo/product";
import { useEffect, useState } from "react";

const faq = [
		{
			title: "Есть ли возможность протестировать услуги? ✔",
			description: (
				<>
					<p>
						Чтобы протестировать сервис, сначала нужно <a href="#">зарегистрироваться.</a>
					</p>

					<p>Вам нужен VDS сервер? - Выполните 5 простых шагов, описанных здесь</p>

					<p>
						Вы представляете юр.лицо, и вам нужен полноценный тестовый стенд? -{" "}
						<strong>напишите нам</strong>
					</p>
				</>
			),
		},
		{
			title: "Как быстро отвечает служба техподдержки? ⭐",
			description: (
				<p>
					Время ответа может быть от нескольких минут до 30 минут. Оно зависит от числа обращений в
					определенный период времени.
				</p>
			),
		},
		{
			title: "Можно ли изменять конфигурацию рабочего сервера? 🖥️",
			description: (
				<>
					<p>Да. Изменять конфигурации своего сервера вы можете в любой момент. 🚀</p>

					<p>
						Для <strong>RAM</strong> и <strong>CPU</strong> [требуется перезагрузка]
					</p>

					<p>
						Для <strong>SSD</strong> [требуется перезагрузка]
					</p>

					<p>
						Для <strong>Интернет</strong> [без перезагрузки]
					</p>
				</>
			),
		},
		{
			title: "Какая система виртуализации используется в AIRNET? 🗂️",
			description: (
				<p>
					Виртуальная инфраструктура <strong>AIRNET</strong> компании использует{" "}
					<strong>VMware</strong> с прикладными дополнениями. Виртуальные сервера создаются в среде
					операционной системы <strong>ESXi</strong>.
				</p>
			),
		},
		{
			title: "Как можно оплатить за услуги AIRNET? 💷",
			description: (
				<>
					<p>Способы оплаты</p>

					<p>
						Для <strong>физических лиц</strong>: PAYME, PAYNET, CLICK, UPAY, Webmoney, OSON.uz,
						VISA, MasterCard и другие.
					</p>

					<p>
						Для <strong>юридических лиц</strong>: банковский перевод. (перечисление)
					</p>
				</>
			),
		},
	],
	tarif = [
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
			ssd: 150,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
		},
		{
			title: "Advanced",
			// price: '550 000',
			prices: [
				{
					price: "550 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "1 650 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "3 300 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "6 600 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 6,
			ram: 10,
			ssd: 150,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50",
		},
		{
			title: "Mega",
			// price: "800 000",
			prices: [
				{
					price: "800 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "2 400 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "4 800 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "9 600 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 6,
			ram: 12,
			ssd: 200,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51",
		},
		{
			title: "Ultra",
			// price: '1 000 000',
			prices: [
				{
					price: "1 000 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "3 000 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "6 000 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "12 000 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 8,
			ram: 16,
			ssd: 200,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
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
	content = [
		{
			title: "Служба поддержки 24/7",
			description:
				"В случае возникновения каких-либо вопросов, Вы всегда можете рассчитывать на нашу квалифицированную помощь с индивидуальным подходом, по телефону, e-mail, telegram, а также в онлайн чате - в любое время суток!",
			img: "/phone.png",
		},
		{
			title: "Стабильность",
			description: (
				<>
					Мы обеспечиваем гарантированную доступность сервиса 99%. Круглосуточно, за всеми системами
					следят наши высококвалифицированные сотрудники. А оборудование размещаем в
					высокотехнологичном, современном, надёжном{" "}
					<Link href="/dc">
						<a>Дата-Центре</a>
					</Link>{" "}
					TIER-2, в Ташкенте.
				</>
			),
			img: "/search.png",
		},
		{
			title: "Низкая цена",
			description:
				'Мы предоставляем услуги по самым "низким" ценам в Узбекистане, наше преимущество в том, что мы оказываем максимально качественные услуги за максимально низкие цены. Таким образом, мы поможем Вам зарабатывать, а не тратиться.',
			img: "/wallet.png",
		},
		{
			title: "Собственные ip-адреса",
			description:
				'Мы предоставляем услуги по собственной BGP протоколу (Border Gateway Protocol) для всех блоков IP-адресов. Подключенныe напрямую к автономной системе (AS) АК "Узтелеком", а также являемся участниками зоны TAS-IX.',
			img: "/ip.png",
		},
	];

export default function Home() {
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
		<div className={st.home}>
			<Product />
			<CustomSwiper />
			<WhyBlock title="Почему выбирают AIRNET?" content={content} />
			<TarifMaket
				// bgImg={'/servers.jpg'}
				title="Популярные тарифы - Виртуальный сервер в Ташкенте"
				description={
					<p>
						Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости
						до 1 Gbps
					</p>
				}
				endText={
					<div className="text-white text-center mt-2">
						<p>
							Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до
							2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки
							технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа.
							Мы делам всё возможное, чтобы уменьшить время ожидания.
						</p>
						<p>Срок действия услуги начнется с момента её активации.</p>
					</div>
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
						delay: 100000,
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
					{tarif.map((item, index) => (
						<SwiperSlide key={item.title}>
							<div className="w-95">
								<TarifCard index={index} tarif={item} show={show} setShow={setShow} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</TarifMaket>
			<RegDomain />
			<TarifMaket
				// bgImg={'/servers-2.jpg'}
				title="Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте"
				description={
					<p>
						Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости
						до 1 Gbps
					</p>
				}
				endText={
					<p className="text-white text-center mt-2">*При оплате за хостинг от 12 месяцев!</p>
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
						delay: 100000,
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
								<TarifCard2
									index={index + tarif2.length}
									tarif={item}
									show={show}
									setShow={setShow}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</TarifMaket>
			<Sitepad />
			<Stock />
			<Reviews />
			<Trust />
			<FAQ faq={faq} title="Нас часто спрашивают" />
			<Notifications />
			<Partners />
		</div>
	);
}
