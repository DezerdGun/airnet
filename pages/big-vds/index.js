import CustomTableBottom from "../../components/customTableBottom";
import Partners from "../../components/partners";
import TraficMaket from "../../components/traficMaket";
import st from "../vds/vds.module.scss";
import Link from "next/link";
import { LINKS } from "../../components/requirements";
import Container from "../../components/container";
import CustomTable from "../../components/customTable";
import SEO from "../../components/seo";
import TarifCard from "../../components/tarifCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TarifMaket from "../../components/tarifMaket";
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
		// 	title: "Mega",
		// 	// price: '800 000',
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
		// 	cpu: 6,
		// 	ram: 12,
		// 	ssd: 200,
		// 	net: 25,
		// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51",
		// },
		// {
		// 	title: "Ultra",
		// 	// price: '1 000 000',
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
		// 	cpu: 8,
		// 	ram: 16,
		// 	ssd: 200,
		// 	net: 25,
		// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
		// },
		{
			title: "Tera",
			// price: '1 500 000',
			prices: [
				{
					price: "1 500 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "4 500 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "9 000 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "18 000 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 8,
			ram: 32,
			ssd: 300,
			net: 50,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=53",
		},
		{
			title: "Peta",
			// price: '2 250 000',
			prices: [
				{
					price: "2 250 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "6 750 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "13 500 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "27 000 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 12,
			ram: 48,
			ssd: 500,
			net: 50,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=61",
		},
		{
			title: "Zeta",
			// price: '3 000 000',
			prices: [
				{
					price: "3 000 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "9 000 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "18 000 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "36 000 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 16,
			ram: 64,
			ssd: 500,
			net: 50,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=62",
		},
		{
			title: "Yotta",
			// price: "7 500 000",
			prices: [
				{
					price: "7 500 000",
					dateOff: "1 мес.",
					date: "мес.",
				},
				{
					price: "22 500 000",
					dateOff: "3 мес.",
					date: "мес.",
				},
				{
					price: "45 000 000",
					dateOff: "6 мес.",
					date: "мес.",
				},
				{
					price: "90 000 000",
					dateOff: "12 мес.",
					date: "мес.",
				},
			],
			cpu: 22,
			ram: 128,
			ssd: 1000,
			net: 100,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=63",
		},
	];

export default function BigVDS() {
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
				title="Высокопроизводительные сервера | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Высокопроизводительный виртуальный хостинг, Мощные VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера в Узбекистане"
			/>
			<div className={st.vds}>
				<div className={"bg_gray"}>
					<TarifMaket
						// bgImg={'/servers-2.jpg'}
						headTitle={
							<>
								Мощные VDS/VPS — сервера <br /> на базе VMware виртуализации с быстрыми SSD-дисками
							</>
						}
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
							spaceBetween={0}
							slidesPerView={1}
							navigation
							loop={false}
							autoplay={{
								delay: 10000,
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
											<td>Unlim 50M</td>
											<td>50 мбит/с</td>
											<td>1 Гбит/с</td>
											<td>Без ограничений</td>
											<td>Бесплатно</td>
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
