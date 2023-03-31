import Container from "@/components/container"
import FAQ from "@/components/faq"
import Partners from "@/components/partners"
import PopularSert from "@/components/popularSert"
import SEO from "@/components/seo"
import WhyBlock from "@/components/whyBlock"
import { useState } from "react"
import styles from "./ssl.module.scss"

const content = [
		{
			title: { ru: "Доверие", uz: "Ishonch" },
			description: {
				ru: "Сертификат содержит информацию о владельце, благодаря которой посетители могут идентифицировать сайт и компанию.",
				uz: "Sertifikat egasi haqidagi ma'lumotlarni o'z ichiga oladi, buning yordamida tashrif buyuruvchilar sayt va kompaniyani aniqlashlari mumkin.",
			},
			img: "/",
		},
		{
			title: { ru: "Защита", uz: "Himoya" },
			description: {
				ru: "Злоумышленники не могут получить доступ к передаваемым данным благодаря зашифрованному каналу.",
				uz: "Buzg'unchilar shifrlangan kanal tufayli uzatilgan ma'lumotlarga kira olmaydi.",
			},
			img: "/",
		},
		{
			title: { ru: "Гарантия", uz: "Ishonchnoma" },
			description: {
				ru: "Удостоверяющие центры компенсируют убытки, вызванные некорректной работой сертификата.",
				uz: "Sertifikat idoralari sertifikatning noto'g'ri ishlashi natijasida etkazilgan zararni qoplaydi.",
			},
			img: "/",
		},
	],
	content2 = [
		{
			title: { ru: "Выгодная цена", uz: "Unumdor narh" },
			description: {
				ru: "Предлагаем более низкие цены, чем при покупке напрямую у сертификационного центра.",
				uz: "Biz to'g'ridan-to'g'ri sertifikatlashtirish markazidan sotib olishdan ko'ra arzonroq narxlarni taklif qilamiz.",
			},
			img: "/money.png",
		},
		{
			title: { ru: "Скидка за период", uz: "Ma'lum vatga chegirma" },
			description: {
				ru: "Чем больше срок заказа сертификата, тем ниже цена покупки.",
				uz: "Sertifikatga buyurtma berish muddati qancha uzoq bo'lsa, sotib olish narxi shunchalik past bo'ladi.",
			},
			img: "/wallet.png",
		},
		{
			title: { ru: "Подписка", uz: "Obuna" },
			description: {
				ru: "При оформлении подписки ваш сертификат будет каждый год автоматически отправляться на перевыпуск.",
				uz: "Siz obuna bo'lganingizda sertifikatingiz har yili avtomatik ravishda qayta chiqariladi.",
			},
			img: "/calendar.png",
		},
		{
			title: { ru: "Поддержка 24/7", uz: "Qo'llab-quvatlash 24/7" },
			description: {
				ru: "Оказываем круглосуточную поддержку по вопросам заказа, установки и перевыпуска сертификата.",
				uz: "Biz sertifikatga buyurtma berish, o'rnatish va qayta rasmiylashtirish uchun kechayu kunduz yordam beramiz.",
			},
			img: "/support.png",
		},
	],
	faq = [
		{
			title: { ru: "Как работает подписка?", uz: "Obuna qanday ishlaydi" },
			description: {
				ru: (
					<>
						<p>
							Подписка позволяет автоматизировать процесс продления{" "}
							<span class="nobr">SSL-сертификата</span>
							и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете
							оформить подписку на&nbsp;2, 3, 4 года или 5 лет&nbsp;— чем больше
							срок, тем ниже цена сертификата.
						</p>
						<p>
							Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия
							сертификата, система будет автоматически отправлять его
							на&nbsp;перевыпуск. Пройдя процедуру подтверждения,
							вы&nbsp;получите новый файл сертификата, который необходимо
							установить на&nbsp;сайте.
						</p>
						{/* <p>
							<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
						</p> */}
					</>
				),
				uz: (
					<>
						<p>
							Obuna yangilanish jarayonini avtomatlashtirish{" "}
							<span class="nobr">SSL-sertifikati</span>
							va&nbsp;bir marta to'lov bilan pulni tejash imkonini beradi.
							&nbsp;siz istalgan vahtga obuna yani&nbsp;2, 3, 4 yil yoki 5
							yil&nbsp;— qanchalik uzoq muddat bolsa, shunchalik narhi pas
							boladi.
						</p>
						<p>
							Har yili, amal qilish muddatidan&nbsp;2 hafta oldin sertifikat,
							tizim uni avtomatik ravishda yuboradi qayta chiqarish uchun&nbsp;
							Tasdiqlash jarayonidan o'tgandan so'ng, sizga kerak boʻlgan yangi
							sertifikat faylini&nbsp;olasiz va veb-saytga&nbsp;o'rnatasiz.
						</p>
						{/* <p>
							<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
						</p> */}
					</>
				),
			},
		},
		{
			title: {
				ru: "Поддержка субдоменов (WC, WildCard)",
				uz: "(WC,WildCard) subdomenlarni qo'llash",
			},
			description: {
				ru: (
					<p>
						Wildcard-сертификат можно использовать на всех поддоменах вашего
						основного домена. Этот сертификат будет действителен на поддоменах
						типа www.airnet.uz, forum.airnet.uz, my.airnet.uz и т. д. без
						ограничений на количество поддоменов. При создании запроса на
						Wildcard-сертификат в качестве Common Name (CN) необходимо
						использовать *.airnet.uz, где airnet.uz — это ваше доменное имя.
					</p>
				),
				uz: (
					<p>
						Wildcard belgilar sertifikati barcha subdomenlaringiz uchun
						ishlatilishi mumkin bolgan asosiy domen. Ushbu sertifikat
						subdomenlarda amal qiladi kabi www.airnet.uz, forum.airnet.uz,
						my.airnet.uz va hokazolarsiz subdomenlar soni bo'yicha cheklovlar.
						uchun so'rov yaratishda Umumiy nom (CN) sifatida joker belgilar
						sertifikati talab qilinadi *.airnet.uz dan foydalaning, bu erda
						airnet.uz sizning domen nomingizdir.
					</p>
				),
			},
		},
		{
			title: {
				ru: "Поддержка национальных доменов (IDN)",
				uz: "(IDN) Milliy domenlarni qo'llash",
			},
			description: {
				ru: (
					<p>
						IDN (Internationalized Domain Names) — доменные имена, которые
						содержат символы национальных алфавитов. Поддержка IDN означает, что
						сертификат поддерживает нелатинские буквы в доменных именах и может
						использоваться для доменных имён на национальных языках (например,
						эйрнет.uz).
					</p>
				),
				uz: (
					<p>
						IDN (xalqarolashtirilgan domen nomlari) bu domen nomlari milliy
						alifbo belgilaridan iborat. IDN qo'llab-quvvatlashi shuni anglatadi
						sertifikat domen nomlarida lotin bo'lmagan harflarni
						qo'llab-quvvatlaydi va mumkin milliy tillardagi domen nomlari uchun
						ishlatilishi mumkin (masalan, airnet.uz).
					</p>
				),
			},
		},
	],
	ssl = [
		{
			img: "/ssl/positive-ssl.png",
			title: "PositiveSSL",
			price: "100 000",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=1&one=1",
			description: [
				{
					ru:
						((
							<>
								Доменов: <strong>1</strong>
							</>
						),
						(
							<>
								"Проверка домена", "Базовый HTTPS", "Удобный SSL", "Удобный
								SSL", "Низкая гарантия",
							</>
						)),
					uz:
						((
							<>
								Domenlar: <strong>1</strong>
							</>
						),
						(
							<>
								Domenni tekshirish", "Asosiy HTTPS", "Qulay SSL", "Qulay SSL",
								"Kam kafolat",
							</>
						)),
				},
			],
		},
		{
			img: "/partners/comodo.png",
			title: "PositiveSSL Wildcard",
			price: "1 000 000",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=2&one=1",
			description: [
				<>
					Доменов: <strong>Неограниченное количество поддоменов</strong>
				</>,
				"Проверка домена",
				"Базовый HTTPS",
				"Удобный SSL",
				"Удобный SSL",
				"Низкая гарантия",
			],
		},
		{
			img: "/partners/comodo.png",
			title: "EV SSL",
			price: "1 000 000",
			link: "",
			description: [
				<>
					Доменов: <strong>1</strong>
				</>,
				"Расширенная проверка",
				"Название компании в браузере",
				"Удобный SSL",
				"Очень высокая гарантия",
			],
		},
		{
			img: "/partners/comodo.png",
			title: "PremiumSSL Wildcard",
			price: "2 250 000",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=3&one=1",
			description: [
				{
					ru:
						((
							<>
								Доменов: <strong>Неограниченное количество поддоменов</strong>
							</>
						),
						(
							<>
								"Проверка организации", "Название компании в SSL", "Удобный
								SSL", "Высокая гарантия",
							</>
						)),
					uz:
						((
							<>
								Domenar: <strong>Cheksiz domen bosuvchilar</strong>
							</>
						),
						(
							<>
								"Tashkilotni tekshiring", "SSL-dagi kompaniya nomi", "Qulay
								SSL", "Yuqori kafolat",
							</>
						)),
				},
			],
		},
		// {
		// 	img: '/ssl/instant-ssl.png',
		// 	title: 'InstantSSL',
		// 	price: '100 000',
		// 	link: '',
		// 	description: [
		// 		<>
		// 			Доменов: <strong>1</strong>
		// 		</>,
		// 		'Проверка организации',
		// 		'Название компании в SSL',
		// 		'Удобный SSL',
		// 		'Высокая гарантия',
		// 	],
		// },
		// {
		// 	img: '/ssl/positive-ssl.png',
		// 	title: 'PositiveSSL Multi-Domain',
		// 	price: '100 000',
		// 	link: '',
		// 	description: [
		// 		<>
		// 			Доменов: <strong>3-100</strong>
		// 		</>,
		// 		'Проверка домена',
		// 		'Базовый HTTPS',
		// 		'Удобный SSL',
		// 		'Низкая гарантия',
		// 	],
		// },
		// {
		// 	img: '/partners/comodo.png',
		// 	title: 'EV Multi-Domain SSL',
		// 	price: '100 000',
		// 	link: '',
		// 	description: [
		// 		<>
		// 			Доменов: <strong>3-100</strong>
		// 		</>,
		// 		'Расширенная проверка',
		// 		'Название компании в браузере',
		// 		'Удобный SSL',
		// 		'Очень высокая гарантия',
		// 	],
		// },
		// {
		// 	img: '/ssl/unified-ssl.webp',
		// 	title: 'Unified Communications',
		// 	price: '100 000',
		// 	link: '',
		// 	description: [
		// 		<>
		// 			Доменов: <strong>3-100</strong>
		// 		</>,
		// 		'Проверка домена',
		// 		'Название компании в SSL',
		// 		'Удобный SSL',
		// 		'Высокая гарантия',
		// 	],
		// },
	]

export default function SSL() {
	const [show, setShow] = useState(null)
	const langData = {
		seoT: {
			ru: "Airnet.uz - Купить SSL-сертификат, TLS, Ташкент",
			uz: "Airnet.uz - TLS, Tashkent, SSL - sertifikatini sotib olish",
		},
		descT: {
			ru: "Дешево купить SSL или TLS сертификат от 100 000 сум в год. Большой выбор сертификационных центров Comodo",
			uz: "Yiliga 100 000 so'mdan SSL yoki TLS sertifikatini sotib olish arzon. Comodo sertifikatlash markazlarining katta tanlovi",
		},
		headTitle: {
			ru: "SSL-сертификаты",
			uz: "SSL-sertefikati",
		},
		about: {
			ru: (
				<>
					<h2>Об услуге</h2>
					<p>
						SSL-сертификат подтверждает подлинность вашего сайта и создаёт
						зашифрованное соединение, гарантируя посетителям безопасность и
						конфиденциальность.
					</p>
					<p>
						Сертификаты отличаются по уровню проверки удостоверяющим центром, а
						также по количеству защищаемых доменов и субдоменов.
					</p>
					<a
						href="https://billing.airnet.uz/billing.php?do=shopitems"
						target="_blank"
					>
						Выбрать сертификат
					</a>
				</>
			),
			uz: (
				<>
					<h2>Hizmat haqida</h2>
					<p>
						SSL sertifikati veb-saytingizning haqiqiyligini tasdiqlaydi va
						yaratadi shifrlangan ulanish, tashrif buyuruvchilar xavfsizligini
						kafolatlaydi va maxfiylik.
					</p>
					<p>
						Sertifikatlar sertifikatlashtirish organi tomonidan tekshirish
						darajasida farqlanadi va shuningdek, himoyalangan domenlar va
						subdomenlar soni bo'yicha.
					</p>
					<a
						href="https://billing.airnet.uz/billing.php?do=shopitems"
						target="_blank"
					>
						Sertefikat tanlang
					</a>
				</>
			),
		},
		whyBuy: {
			ru: "Почему стоит покупать у нас?",
			uz: "Nega bizda sotib olishadi",
		},
		price: {
			ru: (
				<>
					<div className="def-price">
						{item.price}{" "}
						<span>
							сум
							<hr />
							год
						</span>
					</div>
					<a href={item.link}>Купить</a>
				</>
			),
			uz: (
				<>
					<div className="def-price">
						{item.price}{" "}
						<span>
							som
							<hr />
							yil
						</span>
					</div>
					<a href={item.link}>Harid qilish</a>
				</>
			),
		},
	}

	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.sert[language]} />
			<Container headTitle={langData.headTitle[language]}>
				<hr />
				<div className={styles.ssl__block}>
					<div className={styles.ssl__block__content}>
						{langData.about[language]}
					</div>
					<div className={styles.ssl__block__img}>
						<img src="/ssl/intro-img.png" />
					</div>
				</div>
			</Container>
			<PopularSert />
			<WhyBlock content={content} />
			<Container>
				{ssl.map((item, index) => (
					<SslComponent
						key={item.title}
						index={index}
						item={item}
						show={show}
						setShow={setShow}
					/>
				))}
			</Container>
			<WhyBlock
				title={langData.whyBuy[language]}
				content={content2}
				language={language}
			/>
			<FAQ faq={faq} title="FAQ" />
			<Partners language={language} />
		</>
	)
}

const SslComponent = ({ index, item, show, setShow }) => {
	return (
		<div className={styles.ssl__component}>
			<div
				className={styles.ssl__component__content}
				onClick={() => (show === index ? setShow(null) : setShow(index))}
			>
				<div className={styles.ssl__component__content__info}>
					<div className={styles.ssl__component__content__info__img}>
						<img src={item.img} />
					</div>
					<div className={styles.ssl__component__content__info__title}>
						{item.title}
					</div>
				</div>
				<div className={styles.ssl__component__content__price}>
					{langData.price[language]}
					<button
						className={
							show === index ? styles.ssl__component__content__price__btn : ""
						}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
						</svg>
					</button>
				</div>
			</div>
			<div
				className={`${styles.ssl__component__collapse} ${
					show === index ? styles.ssl__component__collapse__active : ""
				}`}
			>
				<ul>
					{item.description.map((el) => (
						<li key={el}>{el}</li>
					))}
				</ul>
			</div>
		</div>
	)
}
