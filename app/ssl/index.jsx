import Container from "@/components/container"
import FAQ from "@/components/faq"
import Partners from "@/components/partners"
import PopularSert from "@/components/popularSert"
import SEO from "@/components/seo"
import WhyBlock from "@/components/whyBlock"
import { useState } from "react"
import styles from "./ssl.module.scss"

export default function SSL({ language }) {
	const [show, setShow] = useState(null)

	const langData = {
		seoTitle: {
			ru: "Купить SSL-сертификат, TLS 1.2, X.509v3",
			uz: "SSL sertifikatini sotib oling, TLS 1.2, X.509v3",
			en: "Buy an SSL certificate, TLS 1.2, X.509v3",
		},
		seoDesc: {
			ru: "Дешево купить SSL или TLS сертификат от 825р. в год. Большой выбор сертификационных центров Comodo, Thawte, RapidSSL, Geotrust, Symantec.",
			uz: "825 rubldan SSL yoki TLS sertifikatini sotib olish arzon. yilda. Comodo, Thawte, RapidSSL, Geotrust, Symantec sertifikatlashtirish markazlarining katta tanlovi.",
			en: "Cheap to buy an SSL or TLS certificate from 825 rubles per year. Large selection of certification centers Comodo, Thawte, RapidSSL, Geotrust, Symantec.",
		},
		headTitle: {
			ru: "SSL-сертификаты",
			uz: "SSL sertifikatlari",
			en: "SSL certificates",
		},
		content: {
			ru: (
				<>
					<h2>Об услуге</h2>
					<p>
						SSL-сертификат подтверждает подлинность вашего сайта и создаёт зашифрованное соединение, гарантируя
						посетителям безопасность и конфиденциальность.
					</p>
					<p>
						Сертификаты отличаются по уровню проверки удостоверяющим центром, а также по количеству защищаемых доменов и
						субдоменов.
					</p>
					<a href="#">Выбрать сертификат</a>
				</>
			),
			uz: (
				<>
					<h2>Xizmat haqida</h2>
					<p>
						SSL sertifikati veb-saytingizning haqiqiyligini tasdiqlaydi va yaratadi shifrlangan ulanish, tashrif
						buyuruvchilar xavfsizligini kafolatlaydi va maxfiylik.
					</p>
					<p>
						Sertifikatlar sertifikatlashtirish organi tomonidan tekshirish darajasida farqlanadi, shuningdek,
						himoyalangan domenlar va subdomenlar soni bo'yicha.
					</p>
					<a href="#">Sertifikatni tanlang</a>
				</>
			),
			en: (
				<>
					<h2>About service</h2>
					<p>
						An SSL certificate authenticates your website and creates an encrypted connection, ensuring visitors safety
						and privacy.
					</p>
					<p>
						Certificates differ in the level of verification by the certification authority, as well as in the number of
						protected domains and subdomains.
					</p>
					<a href="#">Select certificate</a>
				</>
			),
		},
		whyTitle: {
			ru: "Почему стоит покупать у нас?",
			uz: "Nima uchun bizdan sotib olasiz?",
			en: "Why should you buy from us?",
		},
		sum: {
			ru: "сум",
			uz: "so'm",
			en: "sum",
		},
		year: {
			ru: "год",
			uz: "yil",
			en: "year",
		},
		buy: {
			ru: "Купить",
			uz: "Sotib olish",
			en: "Buy",
		},
	}

	const content = [
			{
				title: { ru: "Доверие", uz: "Ishonch", en: "Confidence" },
				description: {
					ru: "Сертификат содержит информацию о владельце, благодаря которой посетители могут идентифицировать сайт и компанию.",
					uz: "Sertifikat egasi haqidagi ma'lumotlarni o'z ichiga oladi, buning yordamida tashrif buyuruvchilar sayt va kompaniyani aniqlashlari mumkin.",
					en: "The certificate contains information about the owner, thanks to which visitors can identify the site and the company.",
				},
				img: "/",
			},
			{
				title: { ru: "Защита", uz: "Himoya", en: "Protection" },
				description: {
					ru: "Злоумышленники не могут получить доступ к передаваемым данным благодаря зашифрованному каналу.",
					uz: "Buzg'unchilar shifrlangan kanal tufayli uzatilgan ma'lumotlarga kira olmaydi.",
					en: "Intruders cannot access the transmitted data due to the encrypted channel.",
				},
				img: "/",
			},
			{
				title: { ru: "Гарантия", uz: "Ishonchnoma", en: "Guarantee" },
				description: {
					ru: "Удостоверяющие центры компенсируют убытки, вызванные некорректной работой сертификата.",
					uz: "Sertifikat idoralari sertifikatning noto'g'ri ishlashi natijasida etkazilgan zararni qoplaydi.",
					en: "Certificate authorities compensate for losses caused by incorrect operation of the certificate.",
				},
				img: "/",
			},
		],
		content2 = [
			{
				title: { ru: "Выгодная цена", uz: "Unumdor narh", en: "Profitable price" },
				description: {
					ru: "Предлагаем более низкие цены, чем при покупке напрямую у сертификационного центра.",
					uz: "Biz to'g'ridan-to'g'ri sertifikatlashtirish markazidan sotib olishdan ko'ra arzonroq narxlarni taklif qilamiz.",
					en: "We offer lower prices than buying directly from the certification center.",
				},
				img: "/money.png",
			},
			{
				title: { ru: "Скидка за период", uz: "Ma'lum vatga chegirma", en: "Period Discount" },
				description: {
					ru: "Чем больше срок заказа сертификата, тем ниже цена покупки.",
					uz: "Sertifikatga buyurtma berish muddati qancha uzoq bo'lsa, sotib olish narxi shunchalik past bo'ladi.",
					en: "The longer the period for ordering a certificate, the lower the purchase price.",
				},
				img: "/wallet.png",
			},
			{
				title: { ru: "Подписка", uz: "Obuna", en: "Subscription" },
				description: {
					ru: "При оформлении подписки ваш сертификат будет каждый год автоматически отправляться на перевыпуск.",
					uz: "Siz obuna bo'lganingizda sertifikatingiz har yili avtomatik ravishda qayta chiqariladi.",
					en: "When you subscribe, your certificate will automatically be reissued every year.",
				},
				img: "/calendar.png",
			},
			{
				title: { ru: "Поддержка 24/7", uz: "Qo'llab-quvatlash 24/7", en: "Support 24/7" },
				description: {
					ru: "Оказываем круглосуточную поддержку по вопросам заказа, установки и перевыпуска сертификата.",
					uz: "Biz sertifikatga buyurtma berish, o'rnatish va qayta rasmiylashtirish uchun kechayu kunduz yordam beramiz.",
					en: "We provide round-the-clock support for ordering, installing and reissuing a certificate.",
				},
				img: "/support.png",
			},
		],
		faq = [
			{
				title: { ru: "Как работает подписка?", uz: "Obuna qanday ishlaydi", en: "How does a subscription work?" },
				description: {
					ru: (
						<>
							<p>
								Подписка позволяет автоматизировать процесс продления <span class="nobr">SSL-сертификата</span>
								и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете оформить подписку на&nbsp;2, 3, 4 года или 5
								лет&nbsp;— чем больше срок, тем ниже цена сертификата.
							</p>
							<p>
								Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия сертификата, система будет автоматически
								отправлять его на&nbsp;перевыпуск. Пройдя процедуру подтверждения, вы&nbsp;получите новый файл
								сертификата, который необходимо установить на&nbsp;сайте.
							</p>
							{/* <p>
						<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
					</p> */}
						</>
					),
					uz: (
						<>
							<p>
								Obuna yangilanish jarayonini avtomatlashtirish <span class="nobr">SSL-sertifikati</span>
								va&nbsp;bir marta to'lov bilan pulni tejash imkonini beradi. &nbsp;siz istalgan vahtga obuna
								yani&nbsp;2, 3, 4 yil yoki 5 yil&nbsp;— qanchalik uzoq muddat bolsa, shunchalik narhi pas boladi.
							</p>
							<p>
								Har yili, amal qilish muddatidan&nbsp;2 hafta oldin sertifikat, tizim uni avtomatik ravishda yuboradi
								qayta chiqarish uchun&nbsp; Tasdiqlash jarayonidan o'tgandan so'ng, sizga kerak boʻlgan yangi sertifikat
								faylini&nbsp;olasiz va veb-saytga&nbsp;o'rnatasiz.
							</p>
							{/* <p>
						<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
					</p> */}
						</>
					),
					en: (
						<>
							<p>
								Subscription allows you to automate the process of renewing a <span class="nobr">SSL certificate</span>
								and&nbsp;save with a one-time payment. You&nbsp;can subscribe to&nbsp;2, 3, 4 or 5 years years&nbsp;-
								the longer the term, the lower the price of the certificate.
							</p>
							<p>
								Every year, 2 weeks before&nbsp;the expiration date of the certificate, the system will automatically
								send it for&nbsp;reissue. After passing the confirmation procedure, you&nbsp;will receive a new file
								certificate to be installed on&nbsp;website.
							</p>
							{/* <p>
							<a href="/technology/podpiska-na-ssl-sertifikat">Learn more about&nbsp;subscription</a>.
							</p> */}
						</>
					),
				},
			},
			{
				title: {
					ru: "Поддержка субдоменов (WC, WildCard)",
					uz: "(WC,WildCard) subdomenlarni qo'llash",
					en: "Subdomain support (WC, WildCard)",
				},
				description: {
					ru: (
						<p>
							Wildcard-сертификат можно использовать на всех поддоменах вашего основного домена. Этот сертификат будет
							действителен на поддоменах типа www.airnet.uz, forum.airnet.uz, my.airnet.uz и т. д. без ограничений на
							количество поддоменов. При создании запроса на Wildcard-сертификат в качестве Common Name (CN) необходимо
							использовать *.airnet.uz, где airnet.uz — это ваше доменное имя.
						</p>
					),
					uz: (
						<p>
							Wildcard belgilar sertifikati barcha subdomenlaringiz uchun ishlatilishi mumkin bolgan asosiy domen. Ushbu
							sertifikat subdomenlarda amal qiladi kabi www.airnet.uz, forum.airnet.uz, my.airnet.uz va hokazolarsiz
							subdomenlar soni bo'yicha cheklovlar. uchun so'rov yaratishda Umumiy nom (CN) sifatida joker belgilar
							sertifikati talab qilinadi *.airnet.uz dan foydalaning, bu erda airnet.uz sizning domen nomingizdir.
						</p>
					),
					en: (
						<p>
							A wildcard certificate can be used on all subdomains of your main domain. This certificate will valid on
							subdomains like www.airnet.uz, forum.airnet.uz, my.airnet.uz, etc. without restrictions on number of
							subdomains. When creating a request for a Wildcard certificate as a Common Name (CN), you must use
							*.airnet.uz, where airnet.uz is your domain name.
						</p>
					),
				},
			},
			{
				title: {
					ru: "Поддержка национальных доменов (IDN)",
					uz: "(IDN) Milliy domenlarni qo'llash",
					en: "Support for country code domains (IDN)",
				},
				description: {
					ru: (
						<p>
							IDN (Internationalized Domain Names) — доменные имена, которые содержат символы национальных алфавитов.
							Поддержка IDN означает, что сертификат поддерживает нелатинские буквы в доменных именах и может
							использоваться для доменных имён на национальных языках (например, эйрнет.uz).
						</p>
					),
					uz: (
						<p>
							IDN (xalqarolashtirilgan domen nomlari) bu domen nomlari milliy alifbo belgilaridan iborat. IDN
							qo'llab-quvvatlashi shuni anglatadi sertifikat domen nomlarida lotin bo'lmagan harflarni
							qo'llab-quvvatlaydi va mumkin milliy tillardagi domen nomlari uchun ishlatilishi mumkin (masalan,
							airnet.uz).
						</p>
					),
					en: (
						<p>
							IDN (Internationalized Domain Names) - domain names that contain characters of national alphabets. IDN
							support means that the certificate supports non-Latin characters in domain names and can be used for
							domain names in national languages (for example, airnet.uz).
						</p>
					),
				},
			},
		],
		ssl = [
			{
				img: "/ssl/positive-ssl.png",
				title: { ru: "PositiveSSL", uz: "PositiveSSL", en: "PositiveSSL" },
				price: "100 000",
				link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=1&one=1",
				description: {
					ru: [
						<>
							Доменов: <strong>1</strong>
						</>,
						"Проверка домена",
						"Базовый HTTPS",
						"Удобный SSL",
						"Удобный SSL",
						"Низкая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>1</strong>
						</>,
						"Domenni tekshirish",
						"Asosiy HTTPS",
						"Qulay SSL",
						"Qulay SSL",
						"Kafolat past",
					],
					en: [
						<>
							Domains: <strong>1</strong>
						</>,
						"Domain check",
						"Basic HTTPS",
						"Convenient SSL",
						"Convenient SSL",
						"Low Warranty",
					],
				},
			},
			{
				img: "/partners/comodo.png",
				title: {
					ru: "PositiveSSL Wildcard",
					uz: "PositiveSSL Wildcard",
					en: "PositiveSSL Wildcard",
				},
				price: "1 000 000",
				link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=2&one=1",
				description: {
					ru: [
						<>
							Доменов: <strong>Неограниченное количество поддоменов</strong>
						</>,
						"Проверка домена",
						"Базовый HTTPS",
						"Удобный SSL",
						"Удобный SSL",
						"Низкая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>Cheksiz subdomenlar</strong>
						</>,
						"Domenni tekshirish",
						"Asosiy HTTPS",
						"Qulay SSL",
						"Qulay SSL",
						"Kafolat past",
					],
					en: [
						<>
							Domains: <strong>Unlimited subdomains</strong>
						</>,
						"Domain check",
						"Basic HTTPS",
						"Convenient SSL",
						"Convenient SSL",
						"Low Warranty",
					],
				},
			},
			{
				img: "/partners/comodo.png",
				title: { ru: "EV SSL", uz: "EV SSL", en: "EV SSL" },
				price: "1 000 000",
				link: "",
				description: {
					ru: [
						<>
							Доменов: <strong>1</strong>
						</>,
						"Расширенная проверка",
						"Название компании в браузере",
						"Удобный SSL",
						"Очень высокая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>1</strong>
						</>,
						"Kengaytirilgan tekshirish",
						"Brauzerda kompaniya nomi",
						"Qulay SSL",
						"Juda yuqori kafolat",
					],
					en: [
						<>
							Domains: <strong>1</strong>
						</>,
						"Extended Check",
						"Company name in browser",
						"Convenient SSL",
						"Very high guarantee",
					],
				},
			},
			{
				img: "/partners/comodo.png",
				title: { ru: "PremiumSSL Wildcard", uz: "PremiumSSL Wildcard", en: "PremiumSSL Wildcard" },
				price: "2 250 000",
				link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=3&one=1",
				description: {
					ru: [
						<>
							Доменов: <strong>Неограниченное количество поддоменов</strong>
						</>,
						"Проверка организации",
						"Название компании в SSL",
						"Удобный SSL",
						"Высокая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>Cheksiz subdomenlar</strong>
						</>,
						"Tashkilotni tekshirish",
						"SSL kompaniya nomi",
						"Qulay SSL",
						"Yuqori kafolat",
					],
					en: [
						<>
							Domains: <strong>Unlimited subdomains</strong>
						</>,
						"Organization check",
						"SSL company name",
						"Convenient SSL",
						"High Guarantee",
					],
				},
			},
		]

	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />
			<Container headTitle={langData.headTitle[language]}>
				<hr />
				<div className={styles.ssl__block}>
					<div className={styles.ssl__block__content}>{langData.content[language]}</div>
					<div className={styles.ssl__block__img}>
						<img src="/ssl/intro-img.png" />
					</div>
				</div>
			</Container>
			<PopularSert language={language} />
			<WhyBlock content={content} language={language} />
			<Container>
				{ssl.map((item, index) => (
					<SslComponent
						key={item.title}
						index={index}
						item={item}
						show={show}
						setShow={setShow}
						langData={langData}
						language={language}
					/>
				))}
			</Container>
			<WhyBlock title={langData.whyTitle[language]} content={content2} language={language} />
			<FAQ faq={faq} title="FAQ" language={language} />
			<Partners language={language} />
		</>
	)
}

export const SslComponent = ({ index, item, show, setShow, langData, language }) => {
	return (
		<div className={styles.ssl__component}>
			<div className={styles.ssl__component__content} onClick={() => (show == index ? setShow(null) : setShow(index))}>
				<div className={styles.ssl__component__content__info}>
					<div className={styles.ssl__component__content__info__img}>
						<img src={item.img} />
					</div>
					<div className={styles.ssl__component__content__info__title}>{item.title[language]}</div>
				</div>
				<div className={styles.ssl__component__content__price}>
					<div className="def-price">
						{item.price}{" "}
						<span>
							{langData.sum[language]}
							<hr />
							{langData.year[language]}
						</span>
					</div>
					<a href="#">{langData.buy[language]}</a>
					<button className={show == index ? styles.ssl__component__content__price__btn : ""}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
						</svg>
					</button>
				</div>
			</div>

			<div
				className={`${styles.ssl__component__collapse} ${show == index ? styles.ssl__component__collapse__active : ""}`}
			>
				<ul>
					{item.description[language].map((el) => (
						<li key={el}>{el}</li>
					))}
				</ul>
			</div>
		</div>
	)
}
