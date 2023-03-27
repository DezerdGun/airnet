import Link from 'next/link'
import Container from '../../components/container/index.jsx'
import FAQ from '../../components/faq'
import Partners from '../../components/partners'
import { LINKS } from '../../components/requirements'
import SEO from '../../components/seo'

const faq = [
	{
		title: { ru: 'Документы', uz: 'Hujjatlar' },
		description: {
			ru: (
				<ul>
					<li>
						<Link href='/faq/kak-zaklyuchit-dogovor'>
							<a>Как заключить договор?</a>
						</Link>
					</li>
					<li>
						<Link href={LINKS.LICENSE}>
							<a>Лицензия на предоставление услуг хостинга</a>
						</Link>
					</li>
					<li>
						<Link href={LINKS.FAQ}>
							<a>Смотреть все &quot;Документы&quot;</a>
						</Link>
					</li>
				</ul>
			),
			uz: (
				<ul>
					<li>
						<Link href='/faq/kak-zaklyuchit-dogovor'>
							<a>Qanday qilib shartnoma tuzish</a>
						</Link>
					</li>
					<li>
						<Link href={LINKS.LICENSE}>
							<a>Hosting hizmati uchun litsenziya</a>
						</Link>
					</li>
					<li>
						<Link href={LINKS.FAQ}>
							<a> Barcha &quot;Hujjatlarni &quot;korish</a>
						</Link>
					</li>
				</ul>
			),
		},
	},
	{
		title: { ru: 'Хостинг и Домены', uz: 'Host va domenlar' },
		description: {
			ru: (
				<ul>
					<li>
						<Link href='/faq/chto-takoe-domen'>
							<a>Что такое домен?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-proverit-domen-na-zanyatost'>
							<a>Как проверить домен на занятость?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/pravilo-registracii-domena-v-zone-uz'>
							<a>Правила регистрации доменных имен в зоне .UZ?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-zaregistrirovat-domen'>
							<a>Как зарегистрировать домен?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/oshibochno-zaregistriroval-domen'>
							<a>Ошибочно зарегистрировал домен, можно ли отменить?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/ya-zaregistriroval-domen-chto-dalshe'>
							<a>Я зарегистрировал домен, что дальше?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-perenesti-sajt-na-xosting-airnet'>
							<a>Как перенести сайт на хостинг AIRNET?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-ustanovit-wordpress-na-xosting'>
							<a>Как установить WordPress на хостинг?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-poluchit-testovyj-period'>
							<a>Как получить тестовый период?</a>
						</Link>
					</li>
					<li>
						<Link href={LINKS.FAQ}>
							<a>Смотреть все &quot;Вопрос-Ответ&quot;</a>
						</Link>
					</li>
				</ul>
			),
			uz: (
				<ul>
					<li>
						<Link href='/faq/chto-takoe-domen'>
							<a>Domen nma?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-proverit-domen-na-zanyatost'>
							<a>Jarayon vaxtida domenni tekshirish</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/pravilo-registracii-domena-v-zone-uz'>
							<a>UZ.da domen nomi bilan ro'yxatdan o'tkazish</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-zaregistrirovat-domen'>
							<a>Domenni qanday ro'yxatdan o'tkazish</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/oshibochno-zaregistriroval-domen'>
							<a>
								Domen hatolik bn ro'yxatdan o'tkazildi, inkor qilish mavjudmi?
							</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/ya-zaregistriroval-domen-chto-dalshe'>
							<a>Men domenni ro'yhatdan o'tkazdim, endichi?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-perenesti-sajt-na-xosting-airnet'>
							<a>Saytni qanday qilib AIRNET hostiga o'tkazish mumkin?</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-ustanovit-wordpress-na-xosting'>
							<a>Qanday qilib WordPressni hostga o'rnatish mumkin</a>
						</Link>
					</li>
					<li>
						<Link href='/faq/kak-poluchit-testovyj-period'>
							<a>Qanday qilib sinov muddatiga o'tish mumkin?</a>
						</Link>
					</li>
					<li>
						<Link href={LINKS.FAQ}>
							<a>Barcha &quot;Savol-Javoblarni&quot; ko'rish</a>
						</Link>
					</li>
				</ul>
			),
		},
	},
	{
		title: { ru: 'База знаний', uz: 'Ilm bazasi' },
		description: {
			ru: (
				<ul>
					<li>
						<Link href='/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov'>
							<a>Как новичку выбрать хостинг-провайдера: 5 простых советов</a>
						</Link>
					</li>
				</ul>
			),
			uz: (
				<ul>
					<li>
						<Link href='/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov'>
							<a>
								Yangi boshlanuvchilar uchun hosting provayderini qanday tanlash
								mumkin: 5 oddiy maslahat
							</a>
						</Link>
					</li>
				</ul>
			),
		},
	},
	{
		title: { ru: 'Способ оплаты', uz: "To'lov usullari" },
		description: {
			ru: (
				<ul>
					<li>PAYME. Комиссия: 0%</li>
					<li>UPAY. Комиссия: 0%</li>
					<li>Paynet. Комиссия: 0%</li>
					<li>Webmoney. Комиссия: 0%</li>
					<li>Банковское перечисление. Комиссия банка</li>
				</ul>
			),
			uz: (
				<ul>
					<li>PAYME. Kamissiya: 0%</li>
					<li>UPAY. Kamissiya: 0%</li>
					<li>Paynet. Kamissiya: 0%</li>
					<li>Webmoney. Kamissiya: 0%</li>
					<li>Bank o'tkazmasi. Kamissiya bank</li>
				</ul>
			),
		},
	},
]

export default function FAQPage({ language }) {
	const langData = {
		seoT: {
			ru: 'Часто задаваемые вопросы | Хостинг TAS-IX в Ташкенте, Узбекистане',
			uz: 'Odatdagi savollar| Uzbekiston, Toshkent dagi TAS-IX hosti',
		},
		descT: {
			ru: 'Информация и документы AIRNET.uz',
			uz: "AIRNET.uz haqida hujjat va ma'lumotlar",
		},
		title: {
			ru: 'Информация',
			uz: "Ma'lumot",
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title={langData.title[language]}
				className='my-0'
			></Container>
			<FAQ faq={faq} language={language} />
			<Partners />
		</>
	)
}
