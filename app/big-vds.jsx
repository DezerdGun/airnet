import st from "@/app/vds/vds.module.scss"
import Container from "@/components/container"
import CustomTable from "@/components/customTable"
import Partners from "@/components/partners"
import { LINKS } from "@/components/requirements"
import SEO from "@/components/seo"
import TarifCard from "@/components/tarifCard"
import Link from "next/link"

import ForFreeBlock from "@/components/forFreeBlock"
import TarifMaket from "@/components/tarifMaket"
import WhyBlock from "@/components/whyBlock"
import { useEffect, useState } from "react"
import { Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

export default function BigVDS({ language }) {
	const [show, setShow] = useState(-1)

	const langData = {
		seoT: {
			ru: "Высокопроизводительные сервера | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Yuqori samarali serverlar | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		},
		descT: {
			ru: "Высокопроизводительный виртуальный хостинг, Мощные VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера в Узбекистане",
			uz: "Yuqori samarali virtual xosting, Kuchli VDS, VPS serverlar, Toshkentdagi VDS, virtual serverlar, O'zbekistonda ajratilgan serverlar",
		},
		headT1: {
			ru: <>Мощные VDS/VPS — сервера</>,
			uz: <>Kuchli VDS/VPS - serveri</>,
		},
		headT2: {
			ru: <>на базе VMware виртуализации с быстрыми SSD-дисками</>,
			uz: <>Tez SSD drayvlar bilan VMware-ga asoslangan virtualizatsiya</>,
		},
		description: {
			ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
			uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps ",
		},
		endText1: {
			ru: "Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делаем всё возможное, чтобы уменьшить время ожидания.",
			uz: "Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan boshlanadi zarur serverlar va yuk mavjudligiga qarab 2 ish kunigacha texnik xodimlar. To'lovdan keyin uskunani faollashtirishning o'rtacha vaqti - 1-2 soat. Biz kutish vaqtini kamaytirish uchun qo'limizdan kelganini qilamiz. ",
		},
		endText2: {
			ru: "Срок действия услуги начнется с момента её активации.",
			uz: "Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.",
		},
		cT: {
			ru: "Стоимость международного интернет-канала без ограничения трафика",
			uz: "Trafik cheklovlarisiz xalqaro Internet-kanalning narxi",
		},
		dT: {
			ru: "Внешний трафик и трафик в сети «TAS-IX» не тарифицируется.",
			uz: "TAS-IX tarmog'idagi tashqi trafik va trafik hisoblanmaydi. ",
		},
		table: {
			ru: (
				<>
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
								<td>50 MB/s</td>
								<td>1 GB/s</td>
								<td>Без ограничений</td>
								<td>Бесплатно</td>
							</tr>
							<tr>
								<td>Unlim 100M</td>
								<td>100 MB/s</td>
								<td>1 GB/s</td>
								<td>Без ограничений</td>
								<td>2 000 000 сум/мес.</td>
							</tr>
							<tr>
								<td>Unlim 200M</td>
								<td>200 MB/s</td>
								<td>1 Гбит/с</td>
								<td>Без ограничений</td>
								<td>5 000 000 сум/мес.</td>
							</tr>
							<tr>
								<td>Unlim 350M</td>
								<td>350 MB/s</td>
								<td>1 Гбит/с</td>
								<td>Без ограничений</td>
								<td>10 000 000 сум/мес.</td>
							</tr>
						</tbody>
					</table>
				</>
			),
			uz: (
				<>
					<table>
						<thead>
							<tr>
								<th>Tarif</th>
								<th>Internet tezligi</th>
								<th>Tas-IX dagi internet tezligi</th>
								<th>Tarif boyicha</th>
								<th>Oylik mijoz to'lovi</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Unlim 50M</td>
								<td>50 MB/s</td>
								<td>1 GB/s</td>
								<td>Cheksiz</td>
								<td>Tekin</td>
							</tr>
							<tr>
								<td>Unlim 100M</td>
								<td>100 MB/s</td>
								<td>1 GB/s</td>
								<td>Cheksiz</td>
								<td>2 000 000 so'm/oy.</td>
							</tr>
							<tr>
								<td>Unlim 200M</td>
								<td>200 MB/s</td>
								<td>1 GB/s</td>
								<td>Cheksiz</td>
								<td>5 000 000 so'm/oy.</td>
							</tr>
							<tr>
								<td>Unlim 350M</td>
								<td>350 MB/s</td>
								<td>1 GB/s</td>
								<td>Cheksiz</td>
								<td>10 000 000 so'm/oy.</td>
							</tr>
						</tbody>
					</table>
				</>
			),
		},
		month: {
			ru: "мес.",
			uz: "oy",
		},
	}

	const block = [
			{
				title: { ru: "Мгновенная активация", uz: "Bir zumda ulanish" },
				description: {
					ru: (
						<>
							<p>
								Активация VDS выполняется от 5 минут до 4-х часов, в зависимости
								от количества заказов и наличия свободного оборудования.
							</p>
							<button>
								<Link href="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12">
									<a>Стать клиентом и заказать VDS</a>
								</Link>
							</button>
						</>
					),
					uz: (
						<>
							<p>
								VDSni faollashtirish buyurtmalar soniga qarab 5 daqiqadan 4
								soatgacha davom etadi mavjud uskunalar.
							</p>
							<button>
								<Link href="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12">
									<a>Mijozga aylaning va vdsga buyurtma bering</a>
								</Link>
							</button>
						</>
					),
				},

				img: "/time.png",
			},
			{
				title: { ru: "Низкая цена", uz: "Hamyonbop narx" },
				description: {
					ru: "Мы предоставляем услуги по самым низким ценам в Узбекистане, наше преимущество в том, что мы оказываем максимально качественные услуги за максимально низкие цены. Таким образом, мы поможем Вам зарабатывать, а не тратиться.",
					uz: "Biz O'zbekistonda eng past narxlarda xizmatlar ko'rsatamiz, bizning afzalligimiz shundaki, biz eng yuqori sifatli xizmatlarni imkon qadar arzon narxlarda taqdim etamiz. Shunday qilib, biz sizga sarflashga emas, pul ishlashingizga yordam beramiz.",
				},
				img: "/money.png",
			},
			{
				title: { ru: "Поддержка круглосуточно", uz: "24/7 hizmatingizda" },
				description: {
					ru: (
						<>
							<p>
								В любое время суток, Вы можете к нам обратиться за помощью или
								советом, мы ответим максимально быстро.
							</p>
							<button>
								<Link href={LINKS.CONTACTS}>
									<a>Наши контакты</a>
								</Link>
							</button>
						</>
					),
					uz: (
						<>
							<p>
								Kunning istalgan vaqtida yordam yoki maslahat uchun biz bilan
								bog'lanishingiz mumkin, biz javob beramiz imkon qadar tezroq.
							</p>
							<button>
								<Link href={LINKS.CONTACTS}>
									<a>Murojat uchun</a>
								</Link>
							</button>
						</>
					),
				},

				img: "/support.png",
			},
			{
				title: { ru: "Гибкая настройка", uz: "Ko'p qirrali qurilmalar" },
				description: {
					ru: "Вы можете изменить количество CPU и RAM в любой момент, а также увеличить объём SSD",
					uz: "Siz istalgan vaqtda protsessor va RAM miqdorini o'zgartirishingiz, shuningdek SSD miqdorini oshirishingiz mumkin",
				},

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
			// 			date: langData.month[language],
			// 		},
			// 		{
			// 			price: "300 000",
			// 			dateOff: "6 мес.",
			// 			date: langData.month[language],
			// 		},
			// 		{
			// 			price: "400 000",
			// 			dateOff: "12 мес.",
			// 			date: langData.month[language],
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
			// 			date: langData.month[language],
			// 		},
			// 		{
			// 			price: "300 000",
			// 			dateOff: "6 мес.",
			// 			date: langData.month[language],
			// 		},
			// 		{
			// 			price: "400 000",
			// 			dateOff: "12 мес.",
			// 			date: langData.month[language],
			// 		},
			// 	],
			// 	cpu: 8,
			// 	ram: 16,
			// 	ssd: 200,
			// 	net: 25,
			// 	link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
			// },
			{
				title: { ru: "Tera", uz: "Tera", en: "" },
				// price: '1 500 000',
				prices: [
					{
						price: "1 500 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "4 500 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "9 000 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "18 000 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 8,
				ram: 32,
				ssd: 300,
				net: 50,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=53",
			},
			{
				title: { ru: "Peta", uz: "Peta", en: "" },
				// price: '2 250 000',
				prices: [
					{
						price: "2 250 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "6 750 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "13 500 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "27 000 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 12,
				ram: 48,
				ssd: 500,
				net: 50,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=61",
			},
			{
				title: { ru: "Zeta", uz: "Zeta", en: "" },
				// price: '3 000 000',
				prices: [
					{
						price: "3 000 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "9 000 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "18 000 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "36 000 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 16,
				ram: 64,
				ssd: 500,
				net: 50,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=62",
			},
			{
				title: { ru: "Yotta", uz: "Yotta", en: "" },
				// price: "7 500 000",
				prices: [
					{
						price: "7 500 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "22 500 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "45 000 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "90 000 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 22,
				ram: 128,
				ssd: 1000,
				net: 100,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=63",
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
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<div className={st.vds}>
				<div className={"bg_gray"}>
					<TarifMaket
						// bgImg={'/servers-2.jpg'}
						headTitle={
							<>
								{langData.headT1[language]} <br /> {langData.headT2[language]}
							</>
						}
						description={<p>{langData.description[language]}</p>}
						className="mt-0 px-0"
						endText={
							<div className="text-white text-center mt-2">
								<p>{langData.endText1[language]}</p>
								<p>{langData.endText2[language]}</p>
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
										<TarifCard
											index={index}
											tarif={item}
											show={show}
											setShow={setShow}
											language={language}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</TarifMaket>
				</div>

				<WhyBlock content={block} language={language} />

				<ForFreeBlock language={language} />

				<Container
					className="text-center"
					title={langData.cT[language]}
					description={langData.dT[language]}
				>
					<div className={st.vds__table}>
						<CustomTable table={langData.table[language]} />
					</div>
				</Container>
				<Partners />
			</div>
		</>
	)
}
