import { useState } from "react";
import Container from "../container";
import Drop from "../drop";
import st from "./popularSert.module.scss";

const data = [
	{
		title: "Comodo PositiveSSL",
		description: "Самый доступный сертификат от Comodo. Низкая стоимость и быстрый выпуск.",
		warranty: 50000,
		dateOff: "1 дня",
		link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=1&one=1",
		prices: [
			{
				price: "100 000",
				dateOff: "1 год",
				date: "год",
			},
			{
				price: "190 000",
				dateOff: "2 года",
				date: "год",
			},
			{
				price: "276 000",
				dateOff: "3 года",
				date: "год",
			},
			{
				price: "352 000",
				dateOff: "4 года",
				date: "год",
			},
			{
				price: "400 000",
				dateOff: "5 лет",
				date: "год",
			},
		],
	},
	{
		title: "Comodo PositiveSSL Wildcard",
		description: "Надежный цифровой сертификат безопасности.",
		warranty: 50000,
		dateOff: "1 дней",
		link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=2&one=1",
		prices: [
			{
				price: "1 000 000",
				dateOff: "1 год",
				date: "год",
			},
			{
				price: "1 900 000",
				dateOff: "2 года",
				date: "год",
			},
			{
				price: "2 760 000",
				dateOff: "3 года",
				date: "год",
			},
			{
				price: "3 520 000",
				dateOff: "4 года",
				date: "год",
			},
			{
				price: "4 000 000",
				dateOff: "5 лет",
				date: "год",
			},
		],
	},
	{
		title: "Comodo PremiumSSL Wildcard",
		description:
			"Сертификат с расширенной проверкой идентифицирует не только сайт, но и организацию.",
		warranty: 250000,
		dateOff: "5 дней",
		link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=3&one=1",
		prices: [
			{
				price: "2 250 000",
				dateOff: "1 год",
				date: "год",
			},
			{
				price: "4 275 000",
				dateOff: "2 года",
				date: "год",
			},
			{
				price: "6 210 000",
				dateOff: "3 года",
				date: "год",
			},
			{
				price: "7 920 000",
				dateOff: "4 года",
				date: "год",
			},
			{
				price: "9 000 000",
				dateOff: "5 лет",
				date: "год",
			},
		],
	},
];

export default function PopularSert() {
	const [show, setShow] = useState(null);

	return (
		<div className={st.popularSert}>
			<Container title="Популярные сертификаты" clNTitle="text-center">
				<div className={st.popularSert__block}>
					{data.map((item, index) => (
						<div key={item.title} className={st.popularSert__block__item}>
							<div className={st.popularSert__block__item__top}>
								<div>{item.title}</div>
								<p>{item.description}</p>
								<ul>
									<li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
												<path d="M247.6 8C104.7 8 0 123.1 0 256c0 138.5 113.6 248 247.6 248C377.5 504 496 403.1 496 256 496 118.1 389.4 8 247.6 8zm.8 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.4 85.5-203.3 203.7-203.3 112.6 0 202.9 89.5 202.8 203.3 0 121.7-99.6 202.8-202.8 202.8zM316.7 186h-53.2v137.2h53.2c21.4 0 70-5.1 70-68.6 0-63.4-48.6-68.6-70-68.6zm.8 108.5h-19.9v-79.7l19.4-.1c3.8 0 35-2.1 35 39.9 0 24.6-10.5 39.9-34.5 39.9zM203.7 186h-68.2v137.3h34.6V279h27c54.1 0 57.1-37.5 57.1-46.5 0-31-16.8-46.5-50.5-46.5zm-4.9 67.3h-29.2v-41.6h28.3c30.9 0 28.8 41.6.9 41.6z" />
											</svg>
										</span>
										Поддержка нац. доменов
									</li>
									<li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
												<path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
											</svg>
										</span>
										Шифрование: <strong>256 бит</strong>
									</li>
									<li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
												<path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM192 192c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 291.3 128 256S156.7 192 192 192zM288 448H96c-8.836 0-16-7.164-16-16C80 387.8 115.8 352 160 352h64c44.18 0 80 35.82 80 80C304 440.8 296.8 448 288 448z" />
											</svg>
										</span>
										Гарантия: <strong>{item.warranty}$</strong>
									</li>
									<li>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
											</svg>
										</span>
										Срок выпуска: <strong>от {item.dateOff}</strong>
									</li>
								</ul>
							</div>
							<div className={st.popularSert__block__item__footer}>
								<Drop index={index} item={item.prices} show={show} setShow={setShow} />
								<a href={item.link}>
									<button>Купить</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}
