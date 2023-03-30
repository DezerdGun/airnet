import Container from "../../components/container";
import FAQ from "../../components/faq";
import Image from "next/image";
import Partners from "../../components/partners";
import SEO from "../../components/seo";
import { useEffect, useState } from "react";
import ImageFullScreen from "../../components/imageFullScreen";
import styles from "./payment.module.scss";

const faq = [
	{
		title: "Банковский перевод (SWIFT)",
		description: (
			<>
				<p>
					Чтобы воспользоваться банковским переводом по договору, нужно оформить заказ у нас на сайте, пройти регистрацию и далее обратится к технической поддержке для составления договора для юридического лица,
					для этого потребуется всего 3 документа:
				</p><br />
				<p>
					1. Гувохнома (Свидетельство о регистрации компании)<br />
					2. ФИО директора (Удостверение личности)<br />
					3. Банковские Реквизиты компании
				</p>
			</>
		),
	},
	{
		title: "Международные банковские карты",
		description: (
			<>
				<p>
					Для нерезидентов Узбекистана и карт выпущенных не в банках Узбекистана - доступна оплата через платежные системы paybox.money и oson.uz
				</p>
				<p>
					Чтобы произвести оплату через Paybox.Money перейдите во вкладку "Кабинет" -> "Счета" выберите № счета и нажмите кнопку "Оплатить счет", далее выберите из предложенных способов оплаты "Paybox" и нажмите на кнопку оплатить...
				</p><br />
				<img src="/payments/1.png" />
			</>
		),
	},
	{
		title: "PAYNET.uz",
		description: (
			<>
				<p>
					Зайдите с мобильного приложение PAYNET через сайт https://paynet.uz, а также через диллеров PAYNET, найдите нас в категории "Хостинг-провайдеры" - AIRNET.uz хостинг, 
					для оплаты введите ваш ID или № счета и сумму оплаты.
				</p>
				<img className="width-50" src="/payments/2.jpg" />
				<img className="width-50" src="/payments/3.jpg" />
			</>
		),
	},
	{
		title: "PAYME.uz",
		description: (
			<>
				<p>
					Зайдите с мобильного приложение PAYME.uz найдите нас в категории "Хостинг-провайдеры" - AIRNET.uz хостинг, для оплаты введите ваш ID или № счета и сумму оплаты.
				</p>
				<img className="width-50" src="/payments/5.jpg" />
				<img className="width-50" src="/payments/6.jpg" />
				<p>
					В биллинг панели выбрать способ оплаты через PAYME.uz и нажать на кнопку "Оплатить Payme" и вас переведет на сайт платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
				</p><br />
				<img src="/payments/4.png" />
			</>
		),
	},
	{
		title: "Click.uz",
		description: (
			<>
				<p>
					Зайдите с мобильного приложение Click.uz найдите нас в категории "Хостинг и домены" - AIRNET.uz хостинг, для оплаты введите № счета и сумму оплаты.
				</p>
				<img className="width-50" src="/payments/7.jpg" />
				<img className="width-50" src="/payments/8.jpg" />
				<p>
					В биллинг панели выбрать способ оплаты через CLICK.uz и нажать на кнопку "Оплатить" и вас переведет на сайт платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
				</p><br />
				<img src="/payments/9.png" />
			</>
		),
	},
	{
		title: "UPAY.uz",
		description: (
			<>
				<p>
					Зайдите с мобильного приложение UPAY.uz найдите нас в категории "Хостинг услуги" - AIRNET.uz хостинг, для оплаты введите ваш ID клиента и сумму оплаты.
				</p>
				<img className="width-50" src="/payments/11.jpg" />
				<img className="width-50" src="/payments/12.jpg" />
				<p>
					В биллинг панели выбрать способ оплаты через UPAY.uz и нажать на кнопку "Перейти на сайт UPAY" и вас переведет на сайт платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
				</p><br />
				<img src="/payments/10.png" />
			</>
		),
	},
	{
		title: "Oson.uz",
		description: (
			<>
				<p>
					Зайдите с мобильного приложение OSON.uz найдите нас в категории "Хостинг провайдеры" - AIRNET.uz хостинг, для оплаты введите ваш ID клиента или № счета и сумму оплаты.
				</p>
				<img className="width-50" src="/payments/16.jpg" />
				<img className="width-50" src="/payments/17.jpg" />
				<p>
					В биллинг панели выбрать способ оплаты через OSON.uz и нажать на кнопку "Оплатить OSON" и вам откроется дополнительное окно платежной системы где нужно будет указать данные вашей карты для быстрой оплаты.
				</p><br />
				<img src="/payments/13.png" /><br />
				<p>
					Можно выбрать оплата банковской картой UZCARD или HUMO
				</p><br />
				<img src="/payments/14.png" /><br />
				<p>
					Можно выбрать оплата банковской картой VISA или MasterCard
				</p><br />
				<img src="/payments/15.png" />
			</>
		),
	},
	{
		title: "Киоск самообслуживания",
		description: (
			<>
				<p>Киоски самообслуживания находятся на балансе коммерческих банков</p>
			</>
		),
	},
],
data = [
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
					<li><a href="#transfer-card">Банковские карты</a> (UzCard, HUMO, VISA, MasterCard)</li>
					<li><a href="#transfer-paybox">Международные банковские карты</a> VISA, MasterCard (PayBox.Money)</li>
					<li><a href="#transfer-paynet">PAYNET.uz</a></li>
					<li><a href="#transfer-payme">PAYME.uz</a></li>
					<li><a href="#transfer-click">Click.uz</a></li>
					<li><a href="#transfer-upay">UPAY.uz</a></li>
					<li><a href="#transfer-oson">Oson.uz</a></li>
					<li><a href="#transfer-bank">Киоск самообслуживания</a></li>
				</ul>

				<p>
					Для зачисления средств на баланс аккаунта необходимо создать счёт и оплатить его. Откройте Личный кабинет, 
					перейдите вверху балансовые счет - выберите "Пополнить", введите "Сумму пополнения" нажмите кнопку "Перейти к оплате счета".
				</p>

				{/* <h2 id="transfer-swift">Банковский перевод</h2>

				<p>Банковским переводом могут воспользоваться компании. Для юридических лиц предоставляются все необходимые бухгалтерские документы.</p>

				<h2 id="transfer-card">Банковские карты</h2>

				<h2 id="transfer-paybox">Международные банковские карты</h2>

				<h2 id="transfer-paynet">PAYNET.uz</h2>

				<h2 id="transfer-payme">PAYME.uz</h2>

				<h2 id="transfer-click">Click.uz</h2>

				<h2 id="transfer-upay">UPAY.uz</h2>

				<h2 id="transfer-oson">Oson.uz</h2>

				<h2 id="transfer-bank">Инфокиоск</h2> */}

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
			<FAQ faq={faq} title="Подробные способы оплаты" />

			<Partners />
		</div>
	);
}
