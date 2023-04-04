import Container from "@/components/container"
import FAQ from "@/components/faq"
import Partners from "@/components/partners"
import { LINKS } from "@/components/requirements"
import SEO from "@/components/seo"
import { checkLang } from "@/utils/checkLang"
import Link from "next/link"

export default function Documents({ language }) {
	const faq = [
		{
			title: { ru: "Документы", uz: "Hujjatlar" },
			description: {
				ru: (
					<>
						<ul>
							<li>
								<Link href="/faq/kak-zaklyuchit-dogovor">
									<a>Как заключить договор?</a>
								</Link>
							</li>
							<li>
								<Link href={checkLang(language) + LINKS.LICENSE}>
									<a>Лицензия на предоставление услуг хостинга</a>
								</Link>
							</li>
							<li>
								<Link href={checkLang(language) + LINKS.FAQ}>
									<a>Смотреть все &quot;Документы&quot;</a>
								</Link>
							</li>
						</ul>
					</>
				),
				uz: (
					<>
						<ul>
							<li>
								<Link href="/faq/kak-zaklyuchit-dogovor">
									<a>Qanday qilib shartnoma tuzish</a>
								</Link>
							</li>
							<li>
								<Link href={checkLang(language) + LINKS.LICENSE}>
									<a>Xosting litsenziyasi</a>
								</Link>
							</li>
							<li>
								<Link href={checkLang(language) + LINKS.FAQ}>
									<a>Barcha&quot;Hujjatlarni ko'rish&quot;</a>
								</Link>
							</li>
						</ul>
					</>
				),
			},
		},
		{
			title: { ru: "Хостинг и Домены", uz: "Host va domenlar" },
			description: {
				ru: (
					<>
						<ul>
							<li>
								<Link href="/faq/chto-takoe-domen">
									<a>Что такое домен?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-proverit-domen-na-zanyatost">
									<a>Как проверить домен на занятость?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/pravilo-registracii-domena-v-zone-uz">
									<a>Правила регистрации доменных имен в зоне .UZ?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-zaregistrirovat-domen">
									<a>Как зарегистрировать домен?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/oshibochno-zaregistriroval-domen">
									<a>Ошибочно зарегистрировал домен, можно ли отменить?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/ya-zaregistriroval-domen-chto-dalshe">
									<a>Я зарегистрировал домен, что дальше?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-perenesti-sajt-na-xosting-airnet">
									<a>Как перенести сайт на хостинг AIRNET?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-ustanovit-wordpress-na-xosting">
									<a>Как установить WordPress на хостинг?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-poluchit-testovyj-period">
									<a>Как получить тестовый период?</a>
								</Link>
							</li>
							<li>
								<Link href={checkLang(language) + LINKS.FAQ}>
									<a>Смотреть все &quot;Вопрос-Ответ&quot;</a>
								</Link>
							</li>
						</ul>
					</>
				),
				uz: (
					<>
						<ul>
							<li>
								<Link href="/faq/chto-takoe-domen">
									<a>Domen aslida nma?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-proverit-domen-na-zanyatost">
									<a>Darsda qanday qilib domenni tekshirish</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/pravilo-registracii-domena-v-zone-uz">
									<a>
										.UZ zonasida domen nomlarini ro'yxatdan o'tkazish qoidalari?
									</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-zaregistrirovat-domen">
									<a>Domenni qanday ro'yxatdan o'tkazish kerak?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/oshibochno-zaregistriroval-domen">
									<a>
										Men noto'g'ri domenni ro'yxatdan o'tkazdim, uni bekor qila
										olamanmi?
									</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/ya-zaregistriroval-domen-chto-dalshe">
									<a>Men domenni ro'yxatdan o'tkazdim, keyin nima bo'ladi?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-perenesti-sajt-na-xosting-airnet">
									<a>Veb-saytni AIRNET xostingiga qanday o'tkazish mumkin?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-ustanovit-wordpress-na-xosting">
									<a>WordPressni hostingga qanday o'rnatish mumkin?</a>
								</Link>
							</li>
							<li>
								<Link href="/faq/kak-poluchit-testovyj-period">
									<a>Sinov muddatini qanday olish mumkin?</a>
								</Link>
							</li>
							<li>
								<Link href={checkLang(language) + LINKS.FAQ}>
									<a>Hamma &quot;Savol-javoblar&quot;</a>
								</Link>
							</li>
						</ul>
					</>
				),
			},
		},
		{
			title: { ru: "База знаний", uz: "Ilm markazi" },
			description: {
				ru: (
					<>
						<ul>
							<li>
								<Link href="/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov">
									<a>
										Как новичку выбрать хостинг-провайдера: 5 простых советов
									</a>
								</Link>
							</li>
						</ul>
					</>
				),
				uz: (
					<>
						<ul>
							<li>
								<Link href="/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov">
									<a>
										Yangi boshlanuvchilar uchun xosting provayderini qanday
										tanlash uchun 5 ta oddiy maslahat:
									</a>
								</Link>
							</li>
						</ul>
					</>
				),
			},
		},
		{
			title: { ru: "Способ оплаты", uz: "To'lov usullari" },
			description: {
				ru: (
					<>
						<ul>
							<li>PAYME. Комиссия: 0%</li>
							<li>UPAY. Комиссия: 0%</li>
							<li>Paynet. Комиссия: 0%</li>
							<li>Webmoney. Комиссия: 0%</li>
							<li>Банковское перечисление. Комиссия банка</li>
						</ul>
					</>
				),
				uz: (
					<>
						<ul>
							<li>PAYME Komissiya: 0%</li>
							<li>UPAY. Komissiya: 0%</li>
							<li>Paynet. Komissiya: 0%</li>
							<li>Webmoney. Komissiya: 0%</li>
							<li>Bank hisob-kitobi.Bank komissiya </li>
						</ul>
					</>
				),
			},
		},
	]
	const langData = {
		seoTitle: {
			ru: "Документы и договора | Airnet",
			uz: "Hujjatlar va shartnomalar | havo tarmog'i",
		},
		desc: {
			ru: "Информация о договорах Airnet",
			uz: "Airnet shartnomalari haqida ma'lumot",
		},
		headTitle: {
			ru: "О документах и договорах",
			uz: "Hujjatlar va shartnomalar to'g'risida",
		},
		cT: {
			ru: "Деятельность проекта AIRNET осуществляется от имени юридического лица OOO «AIRNET».",
			uz: "AIRNET loyihasi faoliyati yuridik shaxs “AIRNET” MChJ nomidan amalga oshiriladi.",
		},
		cTend: {
			ru: "Все условия и правила предоставления услуг регламентируются публичным договором-офертой, размещённом на сайте проекта.",
			uz: "Xizmatlarni taqdim etishning barcha shartlari va shartlari ommaviy oferta shartnomasi bilan tartibga solinadi, loyiha veb-saytida joylashtirilgan.",
		},
	}
	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.desc[language]} />
			<Container headTitle={langData.headTitle[language]}>
				<hr />

				<p>
					{langData.cT[language]}
					<br />
					{langData.cTend[language]}
				</p>
			</Container>
			<FAQ faq={faq} language={language} />
			<Partners />
		</>
	)
}
