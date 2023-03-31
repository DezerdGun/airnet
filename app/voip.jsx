import Container from "@/components/container"
import FAQ from "@/components/faq"
import PopularSert from "@/components/popularSert"
import SEO from "@/components/seo"
import WhyBlock from "@/components/whyBlock"
import { useState } from "react"
import { SslComponent } from "./ssl"
import styles from "./ssl/ssl.module.scss"

export default function Voip({ language }) {
	const [show, setShow] = useState(null)

	const langData = {
		seoTitle: {
			ru: "Купить SSL-сертификат, TLS 1.2, X.509v3",
			uz: "SSL sertifikatini sotib oling, TLS 1.2, X.509v3",
			en: "",
		},
		seoDesc: {
			ru: "Дешево купить SSL или TLS сертификат от 825р. в год. Большой выбор сертификационных центров Comodo, Thawte, RapidSSL, Geotrust, Symantec.",
			uz: "825 rubldan SSL yoki TLS sertifikatini sotib olish arzon. yilda. Comodo, Thawte, RapidSSL, Geotrust, Symantec sertifikatlashtirish markazlarining katta tanlovi.",
			en: "",
		},
		headTitle: {
			ru: "SSL-сертификаты",
			uz: "SSL sertifikatlari",
			en: "",
		},
		content: {
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
					<a href="#">Выбрать сертификат</a>
				</>
			),
			uz: (
				<>
					<h2>Xizmat haqida</h2>
					<p>
						SSL sertifikati veb-saytingizning haqiqiyligini tasdiqlaydi va
						yaratadi shifrlangan ulanish, tashrif buyuruvchilar xavfsizligini
						kafolatlaydi va maxfiylik.
					</p>
					<p>
						Sertifikatlar sertifikatlashtirish organi tomonidan tekshirish
						darajasida farqlanadi, shuningdek, himoyalangan domenlar va
						subdomenlar soni bo'yicha.
					</p>
					<a href="#">Sertifikatni tanlang</a>
				</>
			),
			en: "",
		},
		whyTitle: {
			ru: "Почему стоит покупать у нас?",
			uz: "Nima uchun bizdan sotib olasiz?",
			en: "",
		},
		sum: {
			ru: "сум",
			uz: "so'm",
			en: "",
		},
		year: {
			ru: "год",
			uz: "yil",
			en: "",
		},
		buy: {
			ru: "Купить",
			uz: "Sotib olish",
			en: "",
		},
	}

	const content = [
			{
				title: { ru: "Доверие", uz: "Ishonch", en: "" },
				description: {
					ru: "OnlinePBX - IP телефония для тех, кто ценит каждого клиента!",
					uz: "OnlinePBX - har bir mijozni qadrlaydiganlar uchun IP telefoniya!",
					en: "",
				},
				img: "/",
			},
			{
				title: { ru: "Защита", uz: "Himoya", en: "" },
				description: {
					ru: "Сферы бизнеса наших клиентов по подключению IP-телефонии в Узбекистане",
					uz: "O'zbekistonda IP-telefoniyani ulash bo'yicha mijozlarimizning biznes yo'nalishlari",
					en: "",
				},
				img: "/",
			},
		],
		content2 = [
			{
				title: { ru: "Отделы продаж", uz: "Savdo bo'limlari", en: "" },
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: { ru: "Call-центры", uz: "Qo'ng'iroq markazlari", en: "" },
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: {
					ru: "Маркетинговые агенства",
					uz: "Marketing agentliklari",
					en: "",
				},
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: { ru: "Онлайн-школы", uz: "Onlayn maktablar", en: "" },
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: {
					ru: "Строительные компании",
					uz: "Qurilish kompaniyalari",
					en: "",
				},
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: { ru: "Фитнес-центры", uz: "Fitnes markazlari", en: "" },
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: {
					ru: "Агенства недвижимости",
					uz: "Ko'chmas mulk agentliklari",
					en: "",
				},
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: { ru: "Интернет-магазины", uz: "Onlayn xarid qilish", en: "" },
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
			{
				title: { ru: "Салоны красоты", uz: "Go'zallik salonlari", en: "" },
				description: { ru: "", uz: "", en: "" },
				img: "/",
			},
		],
		faq = [
			{
				title: {
					ru: "Как работает подписка?",
					uz: "Obuna qanday ishlaydi?",
					en: "",
				},
				description: {
					ru: (
						<>
							<p>
								Подписка позволяет автоматизировать процесс продления{" "}
								<span class="nobr">SSL-сертификата</span>
								и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете
								оформить подписку на&nbsp;2, 3, 4 года или 5 лет&nbsp;— чем
								больше срок, тем ниже цена сертификата.
							</p>
							<p>
								Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия
								сертификата, система будет автоматически отправлять его
								на&nbsp;перевыпуск. Пройдя процедуру подтверждения,
								вы&nbsp;получите новый файл сертификата, который необходимо
								установить на&nbsp;сайте.
							</p>
							<p>
								<a href="/technology/podpiska-na-ssl-sertifikat">
									Подробнее о&nbsp;подписке
								</a>
								.
							</p>
						</>
					),
					uz: (
						<>
							<p>
								Obuna yangilanish jarayonini avtomatlashtirish imkonini beradi{" "}
								<span class="nobr">SSL sertifikati</span>
								va&nbsp;bir martalik toʻlov bilan tejang. Siz&nbsp;mumkin obuna
								bo'ling&nbsp;2, 3, 4 yil yoki 5 yil&nbsp;- qancha ko'p muddati,
								sertifikat narxi past bo'ladi.
							</p>
							<p>
								Har yili, amal qilish muddatidan&nbsp;2 hafta oldin sertifikat,
								tizim uni avtomatik ravishda yuboradi qayta chiqarish
								uchun&nbsp; Tasdiqlash jarayonidan o'tgandan so'ng, sizga kerak
								boʻlgan yangi sertifikat fayli&nbsp;olasiz
								veb-saytga&nbsp;o'rnatish.
							</p>
							<p>
								<a href="/technology/subpiska-na-ssl-sertifikat">
									&nbsp;Obuna haqida batafsil
								</a>
								.
							</p>
						</>
					),
					en: "",
				},
			},
			{
				title: {
					ru: "Поддержка субдоменов (WC, WildCard)",
					uz: "Subdomenni qo'llab-quvvatlash (WC, WildCard)",
					en: "",
				},
				description: {
					ru: (
						<p>
							Wildcard-сертификат можно использовать на всех поддоменах вашего
							основного домена. Этот сертификат будет действителен на поддоменах
							типа www.domain.ru, forum.domain.ru, my.domain.ru и т. д. без
							ограничений на количество поддоменов. При создании запроса на
							Wildcard-сертификат в качестве Common Name (CN) необходимо
							использовать *.domain.ru, где domain.ru — это ваше доменное имя.
						</p>
					),
					uz: (
						<p>
							Wildcard-sertifikati barcha subdomenlaringiz uchun ishlatilishi
							mumkin asosiy domen. Ushbu sertifikat subdomenlarda amal qiladi
							kabi www.domain.ru, forum.domain.ru, my.domain.ru va boshqalar
							holda subdomenlar soni bo'yicha cheklovlar. uchun so'rov
							yaratishda Umumiy nom (CN) sifatida Wildcard-sertifikati talab
							qilinadi *.domain.ru dan foydalaning, bu erda domain.ru sizning
							domen nomingizdir.
						</p>
					),
					en: "",
				},
			},
			{
				title: {
					ru: "Поддержка национальных доменов (IDN)",
					uz: "Mamlakat kodi domenini (IDN) qo'llab-quvvatlash",
					en: "",
				},
				description: {
					ru: (
						<p>
							IDN (Internationalized Domain Names) — доменные имена, которые
							содержат символы национальных алфавитов. Поддержка IDN означает,
							что сертификат поддерживает нелатинские буквы в доменных именах и
							может использоваться для доменных имён на национальных языках
							(например, сайт.рф).
						</p>
					),
					uz: (
						<p>
							IDN (xalqarolashtirilgan domen nomlari) bu domen nomlari milliy
							alifbo belgilaridan iborat. IDN qo'llab-quvvatlashi shuni
							anglatadi sertifikat domen nomlarida lotin bo'lmagan harflarni
							qo'llab-quvvatlaydi va mumkin milliy tillardagi domen nomlari
							uchun ishlatilishi mumkin (masalan, site.rf).
						</p>
					),
					en: "",
				},
			},
		],
		ssl = [
			{
				img: "/ssl/positive-ssl.png",
				title: { ru: "PositiveSSL", uz: "PositiveSSL", en: "" },
				price: "100 000",
				link: "",
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
				},
			},
			{
				img: "/partners/comodo.png",
				title: {
					ru: "PositiveSSL Wildcard",
					uz: "PositiveSSL Wildcard",
					en: "",
				},
				price: "100 000",
				link: "",
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
				},
			},
			{
				img: "/partners/comodo.png",
				title: { ru: "EV SSL", uz: "EV SSL", en: "" },
				price: "100 000",
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
				},
			},
			{
				img: "/partners/comodo.png",
				title: { ru: "PremiumSSL Wildcard", uz: "PremiumSSL Wildcard", en: "" },
				price: "100 000",
				link: "",
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
				},
			},
			{
				img: "/ssl/instant-ssl.png",
				title: { ru: "InstantSSL", uz: "InstantSSL", en: "" },
				price: "100 000",
				link: "",
				description: {
					ru: [
						<>
							Доменов: <strong>1</strong>
						</>,
						"Проверка организации",
						"Название компании в SSL",
						"Удобный SSL",
						"Высокая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>1</strong>
						</>,
						"Tashkilotni tekshirish",
						"SSL kompaniya nomi",
						"Qulay SSL",
						"Yuqori kafolat",
					],
				},
			},
			{
				img: "/ssl/positive-ssl.png",
				title: {
					ru: "PositiveSSL Multi-Domain",
					uz: "PositiveSSL Multi-Domain",
					en: "",
				},
				price: "100 000",
				link: "",
				description: {
					ru: [
						<>
							Доменов: <strong>3-100</strong>
						</>,
						"Проверка домена",
						"Базовый HTTPS",
						"Удобный SSL",
						"Низкая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>3-100</strong>
						</>,
						"Domenni tekshirish",
						"Asosiy HTTPS",
						"Qulay SSL",
						"Kafolat past",
					],
				},
			},
			{
				img: "/partners/comodo.png",
				title: { ru: "EV Multi-Domain SSL", uz: "EV Multi-Domain SSL", en: "" },
				price: "100 000",
				link: "",
				description: {
					ru: [
						<>
							Доменов: <strong>3-100</strong>
						</>,
						"Расширенная проверка",
						"Название компании в браузере",
						"Удобный SSL",
						"Очень высокая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>3-100</strong>
						</>,
						"Kengaytirilgan tekshirish",
						"Brauzerda kompaniya nomi",
						"Qulay SSL",
						"Juda yuqori kafolat",
					],
				},
			},
			{
				img: "/ssl/unified-ssl.webp",
				title: {
					ru: "Unified Communications",
					uz: "Unified Communications",
					en: "",
				},
				price: "100 000",
				link: "",
				description: {
					ru: [
						<>
							Доменов: <strong>3-100</strong>
						</>,
						"Проверка домена",
						"Название компании в SSL",
						"Удобный SSL",
						"Высокая гарантия",
					],
					uz: [
						<>
							Domenlar: <strong>3-100</strong>
						</>,
						"Domen tekshiruvi",
						"SSLda kompaniya nomi",
						"Qulay SSL",
						"Yuqori kafolat",
					],
				},
			},
		]

	return (
		<>
			<SEO
				title={langData.seoTitle[language]}
				desc={langData.seoDesc[language]}
			/>
			<Container headTitle={langData.headTitle[language]}>
				<hr />
				<div className={styles.ssl__block}>
					<div className={styles.ssl__block__content}>
						{langData.content[language]}
					</div>
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
			<WhyBlock
				title={langData.whyTitle[language]}
				content={content2}
				fourCol={true}
				language={language}
			/>
			<FAQ faq={faq} title="FAQ" language={language} />
		</>
	)
}
