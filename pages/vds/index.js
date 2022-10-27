import CustomTableBottom from "../../components/customTableBottom";
import Partners from "../../components/partners";
import TraficMaket from "../../components/traficMaket";
import st from "./vds.module.scss";
import Link from "next/link";
import { LINKS } from "../../components/requirements";
import Container from "../../components/container";
import CustomTable from "../../components/customTable";
import SEO from "../../components/seo";
import TarifMaket from "../../components/tarifMaket";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TarifCard from "../../components/tarifCard";
import ForFreeBlock from "../../components/forFreeBlock";
import WhyBlock from "../../components/whyBlock";
import { useEffect, useState } from "react";

const block = [
		{
			title: "Мгновенная активация",
			description: (
				<>
					<p>
						Активация VDS выполняется от 5 минуты до 4-х часов, в зависимости от количества заказов
						и наличия свободного оборудования.
					</p>
					<button>
						<Link href="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12">
							<a>Стать клиентом и заказать VDS</a>
						</Link>
					</button>
				</>
			),
			img: "/time.png",
		},
		{
			title: "Низкая цена",
			description:
				'Мы предоставляем услуги по самым "низким" ценам в Узбекистане, наше преимущество в том, что мы оказываем максимально качественные услуги за максимально низкие цены. Таким образом, мы поможем Вам зарабатывать, а не тратиться.',
			img: "/money.png",
		},
		{
			title: "Поддержка круглосуточно",
			description: (
				<>
					<p>
						В любое время суток, Вы можете к нам обратиться за помощью или советом, мы ответим
						максимально быстро.
					</p>
					<button>
						<Link href={LINKS.CONTACTS}>
							<a>Наши контакты</a>
						</Link>
					</button>
				</>
			),
			img: "/support.png",
		},
		{
			title: "Гибкая настройка",
			description:
				"Вы можете изменить количество CPU и RAM в любой момент, а также увеличить объём SSD",
			img: "/year.png",
		},
	],
	tarif = [
		// {
		// 	title: "Strong",
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
		// 	cpu: 2,
		// 	ram: 4,
		// 	ssd: 50,
		// 	net: 15,
		// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
		// },
		// {
		// 	title: "VIP",
		// 	// price: "250 000",
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
		// 	cpu: 4,
		// 	ram: 4,
		// 	ssd: 100,
		// 	net: 15,
		// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15",
		// },
		// {
		// 	title: "VIP+",
		// 	// price: "300 000",
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
		// 	cpu: 4,
		// 	ram: 6,
		// 	ssd: 150,
		// 	net: 15,
		// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
		// },
		{
			title: "Nano",
			// price: "400 000",
			prices: [
				{
					price: "400 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "1 200 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "2 400 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "4 800 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 4,
			ram: 8,
			ssd: 100,
			net: 15,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=49",
		},
		{
			title: "Advanced",
			// price: "550 000",
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
			// price: "1 000 000",
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
			ssd: 250,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
		},
	];

export default function VDS() {
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
				title="Быстрые VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Предложение в соотношении цены-качества-количества ресурсов, которое построенно на быстрых SSD-дисках. Оптимальные VDS/VPS в сети TAS-IX в Ташкенте"
			/>
			<div className={st.vds}>
				<div className={"bg_gray"}>
					<TarifMaket
						// bgImg={'/servers-2.jpg'}
						headTitle="VDS/VPS — сервера на базе быстрых SSD-дисков"
						description={
							<p>
								Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на
								скорости 1 Gbps
							</p>
						}
						className="mt-0 px-0"
						endText={
							<div className="text-white text-center mt-2">
								<p>
									Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут
									до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки
									технического персонала. Среднее время активации оборудования после оплаты - 1-2
									часа. Мы делам всё возможное, чтобы уменьшить время ожидания.
								</p>
								<p>Срок действия услуги начнется с момента её активации.</p>
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
								delay: 10000,
								disableOnInteraction: true,
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

				<WhyBlock content={block} />

				<ForFreeBlock />

				<Container
					className="text-center"
					title="Стоимость международного интернет-канала без ограничения трафика"
					description="Внешний трафик и трафик в сети «TAS-IX» не тарифицируется."
				>
					<div className={st.vds__table}>
						<CustomTable
							table={
								<table>
									<thead>
										<tr>
											<th>Тариф</th>
											<th>Скорость доступа в Интернет</th>
											<th>Скорость доступа в «TAS-IX»</th>
											<th>Тарификация</th>
											<th>Абонентская плата в месяц</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Unlim 25M</td>
											<td>25 мбит/с</td>
											<td>1 Гбит/с</td>
											<td>Без ограничений</td>
											<td>Бесплатно</td>
										</tr>
										<tr>
											<td>Unlim 50M</td>
											<td>50 мбит/с</td>
											<td>1 Гбит/с</td>
											<td>Без ограничений</td>
											<td>1 000 000 сум/мес.</td>
										</tr>
										<tr>
											<td>Unlim 100M</td>
											<td>100 мбит/с</td>
											<td>1 Гбит/с</td>
											<td>Без ограничений</td>
											<td>2 000 000 сум/мес.</td>
										</tr>
										<tr>
											<td>Unlim 200M</td>
											<td>200 мбит/с</td>
											<td>1 Гбит/с</td>
											<td>Без ограничений</td>
											<td>5 000 000 сум/мес.</td>
										</tr>
										<tr>
											<td>Unlim 350M</td>
											<td>350 мбит/с</td>
											<td>1 Гбит/с</td>
											<td>Без ограничений</td>
											<td>10 000 000 сум/мес.</td>
										</tr>
									</tbody>
								</table>
							}
						/>
					</div>
				</Container>
				<Partners />
			</div>
		</>
	);
}
