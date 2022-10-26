import Container from '../../components/container';
import { LINKS } from '../../components/requirements';
import Link from 'next/link';
import FAQ from '../../components/faq';
import Partners from '../../components/partners';
import SEO from '../../components/seo';

const faq = [
	{
		title: 'Документы',
		description: (
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
						<a>Смотреть все &quot;Документы&quot;</a>
					</Link>
				</li>
			</ul>
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
						<a>Смотреть все &quot;Вопрос-Ответ&quot;</a>
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

export default function Documents() {
	return (
		<>
			<SEO title="Документы и договора | Airnet" desc="Информация о договорах Airnet" />
			<Container headTitle="О документах и договорах">
				<hr />
				
				<p>
					Деятельность проекта AIRNET осуществляется от имени юридического лица OOO «AIRNET».<br />
					Все условия и правила предоставления услуг регламентируются публичным договором-офертой, размещённом на сайте проекта.
				</p>
			</Container>
			<FAQ faq={faq} />
			<Partners />
		</>
	);
}
