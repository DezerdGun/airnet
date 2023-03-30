import { useEffect, useState } from "react"
import Container from "../../components/container"
import FAQ from "../../components/faq"
import ImageFullScreen from "../../components/imageFullScreen"
import Partners from "../../components/partners"
import SEO from "../../components/seo"
import styles from "./payment.module.scss"

const faq = [
		{
			title: {
				ru: "Банковский перевод (SWIFT)",
				uz: "Bank o'tkazmasi (SWIFT)",
			},
			description: {
				ru: (
					<>
						<p>
							Чтобы воспользоваться банковским переводом по договору, нужно
							оформить заказ у нас на сайте, пройти регистрацию и далее
							обратится к технической поддержке для составления договора для
							юридического лица, для этого потребуется всего 3 документа:
						</p>
						<br />
						<p>
							1. Гувохнома (Свидетельство о регистрации компании)
							<br />
							2. ФИО директора (Удостверение личности)
							<br />
							3. Банковские Реквизиты компании
						</p>
					</>
				),
				uz: (
					<>
						<p>
							Shartnoma bo'yicha bank o'tkazmasidan foydalanish uchun sizga
							kerak veb-saytimizga buyurtma bering, ro'yxatdan o'ting va keyin
							shartnoma tuzish uchun texnik yordamga murojaat qiling yuridik
							shaxs bo'lsa, bu faqat 3 ta hujjatni talab qiladi:
						</p>
						<br />
						<p>
							1. “Guvohnoma” (firmani ro‘yxatdan o‘tkazish to‘g‘risidagi
							guvohnoma)
							<br />
							2. Direktorning to'liq ismi (sharifi)
							<br />
							3. Kompaniyaning bank rekvizitlari
						</p>
					</>
				),
			},
		},
		{
			title: {
				ru: "Международные банковские карты",
				uz: "Xalqaro bank kartalari",
			},
			description: {
				ru: (
					<>
						<p>
							Для нерезидентов Узбекистана и карт выпущенных не в банках
							Узбекистана - доступна оплата через платежные системы paybox.money
							и oson.uz
						</p>
						<p>
							Чтобы произвести оплату через Paybox.Money перейдите во вкладку
							"Кабинет" {"->"} "Счета" выберите № счета и нажмите кнопку
							"Оплатить счет", далее выберите из предложенных способов оплаты
							"Paybox" и нажмите на кнопку оплатить...
						</p>
						<br />
						<img src="/payments/1.png" />
					</>
				),
				uz: (
					<>
						<p>
							Oʻzbekiston norezidentlari va banklar tomonidan chiqarilgan
							kartalar uchun O'zbekiston - to'lovni paybox.money va orqali
							amalga oshirish mumkin oson.uz
						</p>
						<p>
							Paybox.Money orqali toʻlovni amalga oshirish uchun yorligʻiga
							oʻting "Kabinet" {"->"} "Hisoblar" hisob raqamini tanlang va
							"To'lash" tugmasini bosing hisob", keyin taklif qilingan to'lov
							usullaridan "Paybox" va tanlang to'lov tugmasini bosing...
						</p>
						<br />
						<img src="/payments/1.png" />
					</>
				),
			},
		},
		{
			title: "PAYNET.uz",
			description: {
				ru: (
					<>
						<p>
							Зайдите с мобильного приложение PAYNET через сайт
							https://paynet.uz, а также через диллеров PAYNET, найдите нас в
							категории "Хостинг-провайдеры" - AIRNET.uz хостинг, для оплаты
							введите ваш ID или № счета и сумму оплаты.
						</p>
						<img className="width-50" src="/payments/2.jpg" />
						<img className="width-50" src="/payments/3.jpg" />
					</>
				),
				uz: (
					<>
						<p>
							https://paynet.uz sayti orqali PAYNET mobil ilovasidan tizimga
							kiring, shuningdek, PAYNET dilerlari orqali bizni toifadan toping
							"Xosting provayderlari" - AIRNET.uz xostingi, to'lash uchun
							shaxsiy guvohnomangizni kiriting yoki hisob raqami va to'lov
							miqdori.
						</p>
						<img className="width-50" src="/payments/2.jpg" />
						<img className="width-50" src="/payments/3.jpg" />
					</>
				),
			},
		},
		{
			title: "PAYME.uz",
			description: {
				ru: (
					<>
						<p>
							Зайдите с мобильного приложение PAYME.uz найдите нас в категории
							"Хостинг-провайдеры" - AIRNET.uz хостинг, для оплаты введите ваш
							ID или № счета и сумму оплаты.
						</p>
						<img className="width-50" src="/payments/5.jpg" />
						<img className="width-50" src="/payments/6.jpg" />
						<p>
							В биллинг панели выбрать способ оплаты через PAYME.uz и нажать на
							кнопку "Оплатить Payme" и вас переведет на сайт платежной системы
							где нужно будет указать данные вашей карты для быстрой оплаты.
						</p>
						<br />
						<img src="/payments/4.png" />
					</>
				),
				uz: (
					<>
						<p>
							PAYME.uz mobil ilovasidan tizimga kiring, bizni turkumda toping
							"Xosting provayderlari" - AIRNET.uz xostingi, to'lov uchun
							o'zingizni kiriting ID yoki hisob raqami va to'lov miqdori.
						</p>
						<img className="width-50" src="/payments/5.jpg" />
						<img className="width-50" src="/payments/6.jpg" />
						<p>
							Billing panelida PAYME.uz orqali to‘lov usulini tanlang va ustiga
							bosing "Payme bilan to'lash" tugmasini bosing va siz to'lov
							tizimining veb-saytiga yo'naltirilasiz bu erda tez to'lov uchun
							kartangiz ma'lumotlarini kiritishingiz kerak bo'ladi.
						</p>
						<br />
						<img src="/payments/4.png" />
					</>
				),
			},
		},
		{
			title: "Click.uz",
			description: {
				ru: (
					<>
						<p>
							Зайдите с мобильного приложение Click.uz найдите нас в категории
							"Хостинг и домены" - AIRNET.uz хостинг, для оплаты введите № счета
							и сумму оплаты.
						</p>
						<img className="width-50" src="/payments/7.jpg" />
						<img className="width-50" src="/payments/8.jpg" />
						<p>
							В биллинг панели выбрать способ оплаты через CLICK.uz и нажать на
							кнопку "Оплатить" и вас переведет на сайт платежной системы где
							нужно будет указать данные вашей карты для быстрой оплаты.
						</p>
						<br />
						<img src="/payments/9.png" />
					</>
				),
				uz: (
					<>
						<p>
							Click.uz mobil ilovasidan tizimga kiring, bizni turkumda toping
							"Xosting va domenlar" - AIRNET.uz xostingi, to'lov uchun hisob
							raqamini kiriting va to'lov miqdori.
						</p>
						<img className="width-50" src="/payments/7.jpg" />
						<img className="width-50" src="/payments/8.jpg" />
						<p>
							Billing panelida CLICK.uz orqali to‘lov usulini tanlang va ustiga
							bosing "To'lash" tugmasi va siz to'lov tizimining saytiga o'tasiz
							Tez to'lov uchun karta ma'lumotlarini kiritishingiz kerak.
						</p>
						<br />
						<img src="/payments/9.png" />
					</>
				),
			},
		},
		{
			title: "UPAY.uz",
			description: {
				ru: (
					<>
						<p>
							Зайдите с мобильного приложение UPAY.uz найдите нас в категории
							"Хостинг услуги" - AIRNET.uz хостинг, для оплаты введите ваш ID
							клиента и сумму оплаты.
						</p>
						<img className="width-50" src="/payments/11.jpg" />
						<img className="width-50" src="/payments/12.jpg" />
						<p>
							В биллинг панели выбрать способ оплаты через UPAY.uz и нажать на
							кнопку "Перейти на сайт UPAY" и вас переведет на сайт платежной
							системы где нужно будет указать данные вашей карты для быстрой
							оплаты.
						</p>
						<br />
						<img src="/payments/10.png" />
					</>
				),
				uz: (
					<>
						<p>
							UPAY.uz mobil ilovasidan tizimga kiring, bizni turkumda toping
							"Xosting xizmatlari" - AIRNET.uz xostingi, to'lash uchun
							shaxsingizni tasdiqlovchi hujjatni kiriting mijoz va to'lov
							miqdori.
						</p>
						<img className="width-50" src="/payments/11.jpg" />
						<img className="width-50" src="/payments/12.jpg" />
						<p>
							Billing panelida UPAY.uz orqali to‘lov usulini tanlang va ustiga
							bosing "UPAY saytiga o'tish" tugmasini bosing va siz to'lov
							saytiga o'tasiz karta ma'lumotlarini tezda kiritishingiz kerak
							bo'lgan tizim to'lov.
						</p>
						<br />
						<img src="/payments/10.png" />
					</>
				),
			},
		},
		{
			title: "Oson.uz",
			description: {
				ru: (
					<>
						<p>
							Зайдите с мобильного приложение OSON.uz найдите нас в категории
							"Хостинг провайдеры" - AIRNET.uz хостинг, для оплаты введите ваш
							ID клиента или № счета и сумму оплаты.
						</p>
						<img className="width-50" src="/payments/16.jpg" />
						<img className="width-50" src="/payments/17.jpg" />
						<p>
							В биллинг панели выбрать способ оплаты через OSON.uz и нажать на
							кнопку "Оплатить OSON" и вам откроется дополнительное окно
							платежной системы где нужно будет указать данные вашей карты для
							быстрой оплаты.
						</p>
						<br />
						<img src="/payments/13.png" />
						<br />
						<p>Можно выбрать оплата банковской картой UZCARD или HUMO</p>
						<br />
						<img src="/payments/14.png" />
						<br />
						<p>Можно выбрать оплата банковской картой VISA или MasterCard</p>
						<br />
						<img src="/payments/15.png" />
					</>
				),
				uz: (
					<>
						<p>
							OSON.uz mobil ilovasidan tizimga kiring, bizni turkumda toping
							"Xosting provayderlari" - AIRNET.uz xostingi, to'lov uchun
							o'zingizni kiriting Mijoz identifikatori yoki hisob raqami va
							to'lov miqdori.
						</p>
						<img className="width-50" src="/payments/16.jpg" />
						<img className="width-50" src="/payments/17.jpg" />
						<p>
							Billing panelida OSON.uz orqali toʻlov usulini tanlang va ustiga
							bosing "OSON to'lash" tugmasi va siz uchun qo'shimcha oyna
							ochiladi karta ma'lumotlarini kiritishingiz kerak bo'lgan to'lov
							tizimi tez to'lov.
						</p>
						<br />
						<img src="/payments/13.png" />
						<br />
						<p>
							Siz UZCARD yoki HUMO bank kartasi bilan toʻlashni tanlashingiz
							mumkin
						</p>
						<br />
						<img src="/payments/14.png" />
						<br />
						<p>Siz VISA yoki MasterCard orqali to'lashni tanlashingiz mumkin</p>
						<br />
						<img src="/payments/15.png" />
					</>
				),
			},
		},
		{
			title: {
				ru: "Киоск самообслуживания",
				uz: " O'z-o'ziga hizat korsatish kioskasi",
			},
			description: {
				ru: (
					<>
						<p>
							Киоски самообслуживания находятся на балансе коммерческих банков
						</p>
					</>
				),
				uz: (
					<>
						<p>
							O‘z-o‘ziga xizmat ko‘rsatish infokiosklari tijorat banklari
							balansida
						</p>
					</>
				),
			},
		},
	],
	data = [
		{
			title: {
				ru: "Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)",
				uz: "1-qadam № (SitePad Website Builder-ni qidiring va ustiga bosing)",
			},
			img: "/sitepad/step-1.jpg",
			width: 500,
			height: 264,
		},
		{
			title: {
				ru: "Шаг № 2 (Выберите слева Добавить сайт)",
				uz: "2-qadam (chapdagi Veb-sayt qo'shish-ni tanlang)",
			},
			img: "/sitepad/step-2.jpg",
			width: 500,
			height: 283,
		},
		{
			title: {
				ru: "Шаг № 3 (Нажмите Начать)",
				uz: "3-qadam (Ishga tushirish tugmasini bosing)",
			},
			img: "/sitepad/step-3.jpg",
			width: 500,
			height: 243,
		},
		{
			title: {
				ru: "Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)",
				uz: "4-qadam (Siz yaratayotgan sayt toifasiga mos mavzuni toping)",
			},
			img: "/sitepad/step-4.jpg",
			width: 500,
			height: 297,
		},
		{
			title: {
				ru: "Шаг № 5 (Визуальный просмотр демо-сайта)",
				uz: "5-qadam (demo saytning vizual ko'rinishi)",
			},
			img: "/sitepad/step-5.jpg",
			width: 500,
			height: 356,
		},
		{
			title: {
				ru: "Шаг № 6 (Подтвердите установку выбранной темы)",
				uz: "6-qadam (Tanlangan mavzuni o'rnatishni tasdiqlang)",
			},
			img: "/sitepad/step-6.jpg",
			width: 500,
			height: 367,
		},
		{
			title: {
				ru: "Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)",
				uz: "7-qadam (Kelajak saytingizni o'rnatish uchun maydonlarni to'ldiring va o'rnatish tugmasini bosing)",
			},
			img: "/sitepad/step-7.jpg",
			width: 500,
			height: 287,
		},
		{
			title: {
				ru: "Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)",
				uz: "8-qadam (O'rnatishdan so'ng saytingizning ichki sahifalarini osongina o'zgartirishingiz mumkin)",
			},
			img: "/sitepad/step-8.jpg",
			width: 500,
			height: 216,
		},
		{
			title: {
				ru: "Шаг № 9 (Опции по редактированию страницы)",
				uz: "9-qadam (sahifani tahrirlash parametrlari)",
			},
			img: "/sitepad/step-9.jpg",
			width: 500,
			height: 237,
		},
	]

export default function Payment({ language }) {
	const [image, setImage] = useState("")

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden"
		else document.body.style = "overflow:unset"
	}, [image])
	const langData = {
		seoT: {
			ru: "Способы оплаты услуг | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Xizmatlar uchun to'lov usullari | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		},
		descT: {
			ru: "Способы оплаты услуг",
			uz: "Xizmatlar uchun to'lov usullari",
		},
		headTitle: {
			ru: "Способы оплаты услуг",
			uz: "To'lov usullari",
		},
		payment: {
			ru: (
				<>
					<h3>Об услуге</h3>
					<p>
						Услуги нашей компании можно оплачивать различными способами.
						Выбирайте наиболее удобный:
					</p>
					{/* <Link href={LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
				</>
			),
			uz: (
				<>
					<h3>Hizmatlar haqida</h3>
					<p>
						Kompaniyamiz xizmatlari turli yo'llar bilan to'lanishi mumkin. Eng
						qulayini tanlang:
					</p>
					{/* <Link href={LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
				</>
			),
			
		},
		table: {
			ru: (
				<>
					<ul>
						<li>
							<a href="#transfer-swift">Банковский перевод</a> (SWIFT) оплата
							по договору.
						</li>
						<li>
							<a href="#transfer-card">Банковские карты</a> (UzCard, HUMO,
							VISA, MasterCard)
						</li>
						<li>
							<a href="#transfer-paybox">Международные банковские карты</a>{" "}
							VISA, MasterCard (PayBox.Money)
						</li>
						<li>
							<a href="#transfer-paynet">PAYNET.uz</a>
						</li>
						<li>
							<a href="#transfer-payme">PAYME.uz</a>
						</li>
						<li>
							<a href="#transfer-click">Click.uz</a>
						</li>
						<li>
							<a href="#transfer-upay">UPAY.uz</a>
						</li>
						<li>
							<a href="#transfer-oson">Oson.uz</a>
						</li>
						<li>
							<a href="#transfer-bank">Киоск самообслуживания</a>
						</li>
					</ul>
					<p>
						Для зачисления средств на баланс аккаунта необходимо создать счёт
						и оплатить его. Откройте Личный кабинет, перейдите вверху
						балансовые счет - выберите "Пополнить", введите "Сумму пополнения"
						нажмите кнопку "Перейти к оплате счета".
					</p>
				</>
			),
			uz: (
				<>
					<ul>
						<li>
							<a href="#transfer-swift">Bank o'tkazmasi</a> (SWIFT) To'lovi
							asosida.
						</li>
						<li>
							<a href="#transfer-card">Bank kartasi</a> (UzCard, HUMO, VISA,
							MasterCard)
						</li>
						<li>
							<a href="#transfer-paybox">Halqaro o'tkazmalar</a> VISA,
							MasterCard (PayBox.Money)
						</li>
						<li>
							<a href="#transfer-paynet">PAYNET.uz</a>
						</li>
						<li>
							<a href="#transfer-payme">PAYME.uz</a>
						</li>
						<li>
							<a href="#transfer-click">Click.uz</a>
						</li>
						<li>
							<a href="#transfer-upay">UPAY.uz</a>
						</li>
						<li>
							<a href="#transfer-oson">Oson.uz</a>
						</li>
						<li>
							<a href="#transfer-bank">
								Kiosak o'z - o'ziga hizmat ko'rsatish
							</a>
						</li>
					</ul>
					<p>
						Hisob balansiga pul mablag'larini kiritish uchun siz hisob
						yaratishingiz kerak va buning uchun to'lang. Shaxsiy hisobingizni
						oching, tepaga o'ting balans hisobi - "To'ldirish" -ni tanlang,
						"To'ldirish summasi" ni kiriting. "To'lov-fakturaga o'tish"
						tugmasini bosing.
					</p>
				</>
			),
		},
		title: {
			ru: "Подробные способы оплаты",
			uz: "Batafsil to'lov usullari",
		},
	}

	return (
		<div className={styles.payment}>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />

			<Container headTitle={langData.headTitle[language]}>
				<div className={styles.payment__info}>
					<div className={styles.payment__info__content}>
						{langData.payment[language]}
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
				{langData.table[language]}

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
			<FAQ faq={faq} title={langData.title[language]} />

			<Partners language={language} />
		</div>
	)
}
