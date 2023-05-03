import { useState } from "react"
import Container from "../container/index.jsx"
import Drop from "../drop"
import st from "./popularMail.module.scss"

export default function PopularMail({ language }) {
	const [show, setShow] = useState(null)

	const langData = {
		year: {
			ru: "Месяц",
			uz: "Месяц",
			en: "Месяц",
		},
		years: {
			ru: "Месяцев",
			uz: "Месяцев",
			en: "Месяцев",
		},
		oneDay: {
			ru: "1 дня",
			uz: "1 kun",
			en: "1 day",
		},
		fiveDays: {
			ru: "5 дней",
			uz: "5 kun",
			en: "5 days",
		},
		fiveYears: {
			ru: "5 лет",
			uz: "5 yil",
			en: "5 years",
		},
		title: {
			ru: "Популярные тарифы",
			uz: "Mashhur tariflar",
			en: "Popular plan",
		},
		poddejka: {
			ru: "Поддержка нац. доменов",
			uz: "Milliy qo'llab-quvvatlash domenlar",
			en: "Support for national domains",
		},
		shifr: {
			ru: "Кол-во аккаунтов",
			uz: "Кол-во аккаунтов",
			en: "Кол-во аккаунтов",
		},
		bit: {
			ru: "пользователей",
			uz: "пользователей",
			en: "пользователей",
		},
		warranty: {
			ru: "Гарантия",
			uz: "Kafolat",
			en: "Guarantee",
		},
		srok: {
			ru: "Срок выпуска",
			uz: "Ishlab chiqarilish sanasi",
			en: "Release Date",
		},
		buy: {
			ru: "Заказать",
			uz: "Sotib olish",
			en: "Buy",
		},
	}

	const data = [
		{
			title: { ru: "Mail 1Gb", uz: "Mail 1Gb", en: "Mail 1Gb" },
			description: {
				ru: "1 ГБ на SSD-диске",
				uz: "1 ГБ на SSD-диске",
				en: "1 ГБ на SSD-диске",
			},
			count: "3х",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=4&one=1",
			prices: [
				{
					price: "25 000",
					dateOff: `1 ${langData.year[language]}`,
					date: langData.year[language],
				},
				{
					price: "135 000",
					dateOff: `6 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "191 250",
					dateOff: `9 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "240 000",
					dateOff: `12 ${langData.years[language]}`,
					date: langData.year[language],
				},
			],
		},
		{
			title: {
				ru: "Mail 10Gb",
				uz: "Mail 10Gb",
				en: "Mail 10Gb",
			},
			description: {
				ru: "10 ГБ на SSD-диске",
				uz: "10 ГБ на SSD-диске",
				en: "10 ГБ на SSD-диске",
			},
			// warranty: 50000,
			// dateOff: langData.oneDay[language],
			count: "15",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=5&one=1",
			prices: [
				{
					price: "75 000",
					dateOff: `1 ${langData.year[language]}`,
					date: langData.year[language],
				},
				{
					price: "405 000",
					dateOff: `6 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "573 750",
					dateOff: `9 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "720 000",
					dateOff: `12 ${langData.years[language]}`,
					date: langData.year[language],
				},
			],
		},
		{
			title: {
				ru: "Mail 20Gb",
				uz: "Mail 20Gb",
				en: "Mail 20Gb",
			},
			description: {
				ru: "20 ГБ на SSD-диске",
				uz: "20 ГБ на SSD-диске",
				en: "20 ГБ на SSD-диске",
			},
			// warranty: 250000,
			// dateOff: langData.fiveDays[language],
			count: "20",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=6&one=1",
			prices: [
				{
					price: "100 000",
					dateOff: `1 ${langData.year[language]}`,
					date: langData.year[language],
				},
				{
					price: "540 000",
					dateOff: `6 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "765 000",
					dateOff: `9 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "960 000",
					dateOff: `12 ${langData.years[language]}`,
					date: langData.year[language],
				},
			],
		},
		{
			title: {
				ru: "Mail 50Gb",
				uz: "Mail 50Gb",
				en: "Mail 50Gb",
			},
			description: {
				ru: "50 ГБ на SSD-диске",
				uz: "50 ГБ на SSD-диске",
				en: "50 ГБ на SSD-диске",
			},
			// warranty: 250000,
			// dateOff: langData.fiveDays[language],
			count: "50",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=7&one=1",
			prices: [
				{
					price: "200 000",
					dateOff: `1 ${langData.year[language]}`,
					date: langData.year[language],
				},
				{
					price: "1 080 000",
					dateOff: `6 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "1 530 000",
					dateOff: `9 ${langData.years[language]}`,
					date: langData.year[language],
				},
				{
					price: "1 920 000",
					dateOff: `12 ${langData.years[language]}`,
					date: langData.year[language],
				},
			],
		},
	]

	return (
		<div className={st.popularMail}>
			<Container title={langData.title[language]} clNTitle="text-center">
				<div className={st.popularMail__block}>
					{data.map((item, index) => (
						<div key={item.title[language]} className={st.popularMail__block__item}>
							<div className={st.popularMail__block__item__top}>
								<div>{item.title[language]}</div>
								<p>{item.description[language]}</p>
								<ul>
									<li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
												<path d="M247.6 8C104.7 8 0 123.1 0 256c0 138.5 113.6 248 247.6 248C377.5 504 496 403.1 496 256 496 118.1 389.4 8 247.6 8zm.8 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.4 85.5-203.3 203.7-203.3 112.6 0 202.9 89.5 202.8 203.3 0 121.7-99.6 202.8-202.8 202.8zM316.7 186h-53.2v137.2h53.2c21.4 0 70-5.1 70-68.6 0-63.4-48.6-68.6-70-68.6zm.8 108.5h-19.9v-79.7l19.4-.1c3.8 0 35-2.1 35 39.9 0 24.6-10.5 39.9-34.5 39.9zM203.7 186h-68.2v137.3h34.6V279h27c54.1 0 57.1-37.5 57.1-46.5 0-31-16.8-46.5-50.5-46.5zm-4.9 67.3h-29.2v-41.6h28.3c30.9 0 28.8 41.6.9 41.6z" />
											</svg>
										</span>
										{langData.poddejka[language]}
									</li>
									<li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
												<path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
											</svg>
										</span>
										{langData.shifr[language]}: <strong>до {item.count} {langData.bit[language]}</strong>
									</li>
									{/* <li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
												<path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM192 192c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 291.3 128 256S156.7 192 192 192zM288 448H96c-8.836 0-16-7.164-16-16C80 387.8 115.8 352 160 352h64c44.18 0 80 35.82 80 80C304 440.8 296.8 448 288 448z" />
											</svg>
										</span>
										{langData.warranty[language]}: <strong>{item.warranty}$</strong>
									</li> */}
									{/* <li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
											</svg>
										</span>
										{langData.srok[language]}:{" "}
										{language == "uz" ? (
											<strong>{item.dateOff} dan</strong>
										) : language == "en" ? (
											<strong>from {item.dateOff}</strong>
										) : (
											<strong>от {item.dateOff}</strong>
										)}
									</li> */}
								</ul>
							</div>
							<div className={st.popularMail__block__item__footer}>
								<Drop index={index} item={item.prices} show={show} setShow={setShow} language={language} />
								<a href={item.link}>
									<button>{langData.buy[language]}</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	)
}
