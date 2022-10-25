import Link from "next/link";
import { useState } from "react";
import Container from "../../components/container";
import FAQ from "../../components/faq";
import PopularSert from "../../components/popularSert";
import SEO from "../../components/seo";
import WhyBlock from "../../components/whyBlock";
import styles from "./ssl.module.scss";

const content = [
		{
			title: "Доверие",
			description:
				"Сертификат содержит информацию о владельце, благодаря которой посетители могут идентифицировать сайт и компанию.",
			img: "/",
		},
		{
			title: "Защита",
			description:
				"Злоумышленники не могут получить доступ к передаваемым данным благодаря зашифрованному каналу.",
			img: "/",
		},
		{
			title: "Гарантия",
			description:
				"Удостоверяющие центры компенсируют убытки, вызванные некорректной работой сертификата.",
			img: "/",
		},
	],
	content2 = [
		{
			title: "Выгодная цена",
			description:
				"Предлагаем более низкие цены, чем при покупке напрямую у сертификационного центра.",
			img: "/money.png",
		},
		{
			title: "Скидка за период",
			description: "Чем больше срок заказа сертификата, тем ниже цена покупки.",
			img: "/wallet.png",
		},
		{
			title: "Подписка",
			description:
				"При оформлении подписки ваш сертификат будет каждый год автоматически отправляться на перевыпуск.",
			img: "/calendar.png",
		},
		{
			title: "Поддержка 24/7",
			description:
				"Оказываем круглосуточную поддержку по вопросам заказа, установки и перевыпуска сертификата.",
			img: "/support.png",
		},
	],
	faq = [
		{
			title: "Как работает подписка?",
			description: (
				<>
					<p>
						Подписка позволяет автоматизировать процесс продления{" "}
						<span class="nobr">SSL-сертификата</span>
						и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете оформить подписку на&nbsp;2,
						3, 4 года или 5 лет&nbsp;— чем больше срок, тем ниже цена сертификата.
					</p>
					<p>
						Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия сертификата, система будет
						автоматически отправлять его на&nbsp;перевыпуск. Пройдя процедуру подтверждения,
						вы&nbsp;получите новый файл сертификата, который необходимо установить на&nbsp;сайте.
					</p>
					{/* <p>
						<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
					</p> */}
				</>
			),
		},
		{
			title: "Поддержка субдоменов (WC, WildCard)",
			description: (
				<p>
					Wildcard-сертификат можно использовать на всех поддоменах вашего основного домена. Этот
					сертификат будет действителен на поддоменах типа www.airnet.uz, forum.airnet.uz,
					my.airnet.uz и т. д. без ограничений на количество поддоменов. При создании запроса на
					Wildcard-сертификат в качестве Common Name (CN) необходимо использовать *.airnet.uz, где
					airnet.uz — это ваше доменное имя.
				</p>
			),
		},
		{
			title: "Поддержка национальных доменов (IDN)",
			description: (
				<p>
					IDN (Internationalized Domain Names) — доменные имена, которые содержат символы
					национальных алфавитов. Поддержка IDN означает, что сертификат поддерживает нелатинские
					буквы в доменных именах и может использоваться для доменных имён на национальных языках
					(например, эйрнет.uz).
				</p>
			),
		},
	],
	ssl = [
		{
			img: "/ssl/positive-ssl.png",
			title: "PositiveSSL",
			price: "100 000",
			link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=1&one=1",
			description: [
				<>
					Доменов: <strong>1</strong>
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
				<>
					Доменов: <strong>Неограниченное количество поддоменов</strong>
				</>,
				"Проверка организации",
				"Название компании в SSL",
				"Удобный SSL",
				"Высокая гарантия",
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
	];

export default function SSL() {
	const [show, setShow] = useState(null);

	return (
		<>
			<SEO
				title="Airnet.uz - Купить SSL-сертификат, TLS, Ташкент"
				desc="Дешево купить SSL или TLS сертификат от 100 000 сум в год. Большой выбор сертификационных центров Comodo"
			/>
			<Container headTitle="SSL-сертификаты">
				<hr />
				<div className={styles.ssl__block}>
					<div className={styles.ssl__block__content}>
						<h2>Об услуге</h2>
						<p>
							SSL-сертификат подтверждает подлинность вашего сайта и создаёт зашифрованное
							соединение, гарантируя посетителям безопасность и конфиденциальность.
						</p>
						<p>
							Сертификаты отличаются по уровню проверки удостоверяющим центром, а также по
							количеству защищаемых доменов и субдоменов.
						</p>
						<a href="https://billing.airnet.uz/billing.php?do=shopitems" target="_blank">
							Выбрать сертификат
						</a>
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
					<SslComponent key={item.title} index={index} item={item} show={show} setShow={setShow} />
				))}
			</Container>
			<WhyBlock title="Почему стоит покупать у нас?" content={content2} />
			<FAQ faq={faq} title="FAQ" />
		</>
	);
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
					<div className={styles.ssl__component__content__info__title}>{item.title}</div>
				</div>
				<div className={styles.ssl__component__content__price}>
					<div className="def-price">
						{item.price}{" "}
						<span>
							сум
							<hr />
							год
						</span>
					</div>
					<a href={item.link}>Купить</a>
					<button className={show === index ? styles.ssl__component__content__price__btn : ""}>
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
	);
};
