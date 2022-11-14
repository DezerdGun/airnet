import Container from "../../components/container";
import Image from "next/image";
import Partners from "../../components/partners";
import SEO from "../../components/seo";
import { useEffect, useState } from "react";
import ImageFullScreen from "../../components/imageFullScreen";
import styles from "./payment.module.scss";

const data = [
	{
		title: "Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)",
		img: "/sitepad/step-1.jpg",
		width: 500,
		height: 264,
	},
	{
		title: "Шаг № 2 (Выберите слева Добавить сайт)",
		img: "/sitepad/step-2.jpg",
		width: 500,
		height: 283,
	},
	{
		title: "Шаг № 3 (Нажмите Начать)",
		img: "/sitepad/step-3.jpg",
		width: 500,
		height: 243,
	},
	{
		title: "Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)",
		img: "/sitepad/step-4.jpg",
		width: 500,
		height: 297,
	},
	{
		title: "Шаг № 5 (Визуальный просмотр демо-сайта)",
		img: "/sitepad/step-5.jpg",
		width: 500,
		height: 356,
	},
	{
		title: "Шаг № 6 (Подтвердите установку выбранной темы)",
		img: "/sitepad/step-6.jpg",
		width: 500,
		height: 367,
	},
	{
		title: "Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)",
		img: "/sitepad/step-7.jpg",
		width: 500,
		height: 287,
	},
	{
		title:
			"Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)",
		img: "/sitepad/step-8.jpg",
		width: 500,
		height: 216,
	},
	{
		title: "Шаг № 9 (Опции по редактированию страницы)",
		img: "/sitepad/step-9.jpg",
		width: 500,
		height: 237,
	},
];

export default function Payment() {
	const [image, setImage] = useState("");

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden";
		else document.body.style = "overflow:unset";
	}, [image]);

	return (
		<div className={styles.payment}>
			<SEO
				title="Способы оплаты услуг | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Способы оплаты услуг"
			/>
			
			<Container headTitle="Способы оплаты услуг">
				<div className={styles.payment__info}>
					<div className={styles.payment__info__content}>
						<h3>Об услуге</h3>
						<p>
							Услуги нашей компании можно оплачивать различными способами. Выбирайте наиболее удобный:
						</p>
						{/* <Link href={LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
					</div>
					<div className={styles.payment__info__img}>
						<img src="/payment-img.png" />
					</div>
				</div>
			</Container>

			{/* <Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title="Конструктор сайтов SitePad"
				className="my-0">
			</Container> */}
			<Container className="px-3">

				<ul>
					<li><a href="#transfer-swift">Банковский перевод</a> (SWIFT) оплата по договору.</li>
					<li><a href="#transfer-card">Банковские карты</a> (UzCard, HUMA, VISA, MasterCard)</li>
					<li><a href="#transfer-paybox">Международные банковские карты</a> VISA, MasterCard (PayBox.Money)</li>
					<li><a href="#transfer-paynet">PAYNET.uz</a></li>
					<li><a href="#transfer-payme">PAYME.uz</a></li>
					<li><a href="#transfer-click">Click.uz</a></li>
					<li><a href="#transfer-upay">UPAY.uz</a></li>
					<li><a href="#transfer-oson">Oson.uz</a></li>
					<li><a href="#transfer-bank">Инфокиоск</a></li>
				</ul>

				<p>
					Для зачисления средств на баланс аккаунта необходимо создать счёт и оплатить его. Откройте Личный кабинет, 
					перейдите в верху балансовые счет - выберите "Пополнить", введите "Сумму пополнения" нажмите кнопку "Перейти к оплате счета".
				</p>

				<br /><br /><br />

				<h2 id="transfer-swift">Банковский перевод</h2>

				<p>Банковским переводом могут воспользоваться компании. Для юридических лиц предоставляются все необходимые бухгалтерские документы.</p>

				<h2 id="transfer-card">Банковские карты</h2>

				<h2 id="transfer-paybox">Международные банковские карты</h2>

				<h2 id="transfer-paynet">PAYNET.uz</h2>

				<h2 id="transfer-payme">PAYME.uz</h2>

				<h2 id="transfer-click">Click.uz</h2>

				<h2 id="transfer-upay">UPAY.uz</h2>

				<h2 id="transfer-oson">Oson.uz</h2>

				<h2 id="transfer-bank">Инфокиоск</h2>

				{/* <div className={styles.sitepad__block}>
					{data.map((item) => (
						<div className={styles.sitepad__block__item}>
							<p>{item.title}</p>
							<Image
								loading="lazy"
								onClick={() => setImage(item.img)}
								width={item.width}
								height={item.height}
								src={item.img}
							/>
						</div>
					))}
				</div> */}

				{/* <p>+99871-200-87-00</p>
				<p>+99890-324-30-80 </p>
				<p>
					Наш{" "}
					<a
						href="https://t.me/airnetuzb"
						target="_blank"
						rel="noreferrer noopener"
						title="https://t.me/airnetuzb"
						className="text-decoration-underline"
					>
						телеграм
					</a>{' '}
				</p> */}
			</Container>
			{image && <ImageFullScreen image={image} setImage={setImage} />}

			<Partners />
		</div>
	);
}
