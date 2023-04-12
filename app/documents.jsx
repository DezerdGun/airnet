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
			title: { ru: "Документы", uz: "Hujjatlar", en: "Documentation" },
			description: {
				ru: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/kak-zaklyuchit-dogovor"}>
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
				),
				uz: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/kak-zaklyuchit-dogovor"}>
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
				),
				en: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/kak-zaklyuchit-dogovor"}>
								<a>How to conclude an agreement?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + LINKS.LICENSE}>
								<a>License to provide hosting services</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + LINKS.FAQ}>
								<a>View all "Documents"</a>
							</Link>
						</li>
					</ul>
				),
			},
		},
		{
			title: { ru: "Хостинг и Домены", uz: "Host va domenlar", en: "Hosting and Domains" },
			description: {
				ru: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/chto-takoe-domen"}>
								<a>Что такое домен?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-proverit-domen-na-zanyatost"}>
								<a>Как проверить домен на занятость?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/pravilo-registracii-domena-v-zone-uz"}>
								<a>Правила регистрации доменных имен в зоне .UZ?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-zaregistrirovat-domen"}>
								<a>Как зарегистрировать домен?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/oshibochno-zaregistriroval-domen"}>
								<a>Ошибочно зарегистрировал домен, можно ли отменить?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/ya-zaregistriroval-domen-chto-dalshe"}>
								<a>Я зарегистрировал домен, что дальше?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-perenesti-sajt-na-xosting-airnet"}>
								<a>Как перенести сайт на хостинг AIRNET?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-ustanovit-wordpress-na-xosting"}>
								<a>Как установить WordPress на хостинг?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-poluchit-testovyj-period"}>
								<a>Как получить тестовый период?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + LINKS.FAQ}>
								<a>Смотреть все &quot;Вопрос-Ответ&quot;</a>
							</Link>
						</li>
					</ul>
				),
				uz: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/chto-takoe-domen"}>
								<a>Domen aslida nma?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-proverit-domen-na-zanyatost"}>
								<a>Darsda qanday qilib domenni tekshirish</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/pravilo-registracii-domena-v-zone-uz"}>
								<a>.UZ zonasida domen nomlarini ro'yxatdan o'tkazish qoidalari?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-zaregistrirovat-domen"}>
								<a>Domenni qanday ro'yxatdan o'tkazish kerak?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/oshibochno-zaregistriroval-domen"}>
								<a>Men noto'g'ri domenni ro'yxatdan o'tkazdim, uni bekor qila olamanmi?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/ya-zaregistriroval-domen-chto-dalshe"}>
								<a>Men domenni ro'yxatdan o'tkazdim, keyin nima bo'ladi?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-perenesti-sajt-na-xosting-airnet"}>
								<a>Veb-saytni AIRNET xostingiga qanday o'tkazish mumkin?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-ustanovit-wordpress-na-xosting"}>
								<a>WordPressni hostingga qanday o'rnatish mumkin?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-poluchit-testovyj-period"}>
								<a>Sinov muddatini qanday olish mumkin?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + LINKS.FAQ}>
								<a>Hamma &quot;Savol-javoblar&quot;</a>
							</Link>
						</li>
					</ul>
				),
				en: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/chto-takoe-domain"}>
								<a>What is a domain?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-proverit-domen-na-zanyatost"}>
								<a>How do I check if a domain is busy?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/pravilo-registracii-domain-v-zone-uz"}>
								<a>Rules for registering domain names in the .UZ zone?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-zaregistrirovat-domen"}>
								<a>How do I register a domain?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/oshibochno-zaregistriroval-domen"}>
								<a>Mistakenly registered a domain, can I cancel?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/ya-zaregistriroval-domen-chto-dalshe"}>
								<a>I've registered a domain, what's next?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-perenesti-sajt-na-hosting-airnet"}>
								<a>How do I migrate my website to AIRNET hosting?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-ustanovit-wordpress-na-hosting"}>
								<a>How to install WordPress on hosting?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + "/faq/kak-poluchit-testovyj-period"}>
								<a>How do I get a trial period?</a>
							</Link>
						</li>
						<li>
							<Link href={checkLang(language) + LINKS.FAQ}>
								<a>View all Q&A</a>
							</Link>
						</li>
					</ul>
				),
			},
		},
		{
			title: { ru: "База знаний", uz: "Ilm markazi", en: "Knowledge base" },
			description: {
				ru: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov"}>
								<a>Как новичку выбрать хостинг-провайдера: 5 простых советов</a>
							</Link>
						</li>
					</ul>
				),
				uz: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov"}>
								<a>Yangi boshlanuvchilar uchun xosting provayderini qanday tanlash uchun 5 ta oddiy maslahat:</a>
							</Link>
						</li>
					</ul>
				),
				en: (
					<ul>
						<li>
							<Link href={checkLang(language) + "/faq/kak-novichku-vybrat-hosting-provajdera-5-prostyx-sovetov"}>
								<a>How to choose a hosting provider for a beginner: 5 simple tips</a>
							</Link>
						</li>
					</ul>
				),
			},
		},
		{
			title: { ru: "Способ оплаты", uz: "To'lov usullari", en: "Payment method" },
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
				en: (
					<>
						<ul>
							<li>PAYME. Commission: 0%</li>
							<li>UPAY. Commission: 0%</li>
							<li>Paynet. Commission: 0%</li>
							<li>webmoney. Commission: 0%</li>
							<li>Bank transfer. Bank fee</li>
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
			en: "Documents and contracts | Airnet",
		},
		desc: {
			ru: "Информация о договорах Airnet",
			uz: "Airnet shartnomalari haqida ma'lumot",
			en: "Information about Airnet contracts",
		},
		headTitle: {
			ru: "О документах и договорах",
			uz: "Hujjatlar va shartnomalar to'g'risida",
			en: "About documents and contracts",
		},
		cT: {
			ru: "Деятельность проекта AIRNET осуществляется от имени юридического лица OOO «AIRNET».",
			uz: "AIRNET loyihasi faoliyati yuridik shaxs “AIRNET” MChJ nomidan amalga oshiriladi.",
			en: "The activities of the AIRNET project are carried out on behalf of the legal entity AIRNET LLC.",
		},
		cTend: {
			ru: "Все условия и правила предоставления услуг регламентируются публичным договором-офертой, размещённом на сайте проекта.",
			uz: "Xizmatlarni taqdim etishning barcha shartlari va shartlari ommaviy oferta shartnomasi bilan tartibga solinadi, loyiha veb-saytida joylashtirilgan.",
			en: "All conditions and rules for the provision of services are regulated by a public offer agreement posted on the project website.",
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
			<Partners language={language} />
		</>
	)
}
