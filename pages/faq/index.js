import Container from '../../components/container';
import { LINKS } from '../../components/requirements';
import st from './faq.module.scss';
import Link from 'next/link';
import FAQ from '../../components/faq';
import Partners from '../../components/partners';

const faq = [
	{
		title: 'Документы',
		description: (
			<>
				<ul>
					<li>
						<Link href="/faq/kak-zaklyuchit-dogovor">
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
							<a>Смотреть все "Документы"</a>
						</Link>
					</li>
				</ul>
			</>
		),
	},
	{
		title: 'Хостинг и Домены',
		description: (
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
					<Link href={LINKS.FAQ}>
						<a>Смотреть все "Вопрос-Ответ"</a>
					</Link>
				</li>
			</ul>
		),
	},
	{
		title: 'База знаний',
		description: (
			<ul>
				<li>
					<Link href="/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov">
						<a>Как новичку выбрать хостинг-провайдера: 5 простых советов</a>
					</Link>
				</li>
			</ul>
		),
	},
	{
		title: 'Способ оплаты',
		description: (
			<ul>
				<li>PAYME. Комиссия: 0%</li>
				<li>UPAY. Комиссия: 0%</li>
				<li>Paynet. Комиссия: 0%</li>
				<li>Webmoney. Комиссия: 0%</li>
				<li>Банковское перечисление. Комиссия банка</li>
			</ul>
		),
	},
];

export default function FAQPage() {
	return (
		<div className={st.faq}>
			<Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title="Информация"
				className="my-0"></Container>
			<FAQ faq={faq} />
			<Partners />
		</div>
	);
}
