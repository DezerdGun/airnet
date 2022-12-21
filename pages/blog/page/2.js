import st from '../blog.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../../components/container';

export const blog = [
	{
		img: '/blog/yandex-musics.jpg',
		link: '/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt',
		date: '23 Дек 2018',
		title: '«Яндекс.Музыка» и Beeline запустили совместный проект',
		description: (
			<>
				<p>
					Мобильные операторы все активнее сотрудничают с поставщиками аудиоконтента — ранее похожие проекты
					запустили Ucell и Zvooq, UMS и Lamuz.
				</p>{' '}
				<p>«Яндекс.Музыка» и Beeline…</p>
			</>
		),
	},
	{
		img: '/blog/sim-card.jpg',
		link: '/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora',
		date: '22 Дек 2018',
		title: 'В Узбекистане разрешат сохранять номер при смене оператора',
		description: (
			<>
				<p>Услуга будет платной, а переносить номер можно будет не чаще одного раза в 180 дней.</p>
				<p>В Узбекистане разрешат сохранять номер при смене…</p>
			</>
		),
	},
	{
		img: '/blog/lenovo-phone.jpg',
		link: '/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati',
		date: '21 Дек 2018',
		title: 'Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти',
		description: (
			<>
				<p>
					Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и новейший процессор Snapdragon 855.
				</p>
				<p>Lenovo представила новую версию смартфона-слайдера…</p>
			</>
		),
	},
	{
		img: '/blog/santa.jpg',
		link: '/blog/v-telegram-poyavilis-vstroennye-oprosy',
		date: '20 Дек 2018',
		title: 'В Telegram появились встроенные опросы',
		description: (
			<>
				<p>
					В новом обновлении мессенджера для создания опроса теперь не надо пользоваться сторонними решениями.
				</p>
				<p>Команда Telegram представила специальный инструмент для создания опросов. Об…</p>
			</>
		),
	},
	{
		img: '/blog/phone-vpn.jpg',
		link: '/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android',
		date: '19 Дек 2018',
		title: 'Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android',
		description: (
			<>
				<p>
					Первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store — VPN Proxy
					Master.
				</p>
				<p>VPN-приложения стали самыми…</p>
			</>
		),
	},
	{
		img: '/blog/google-5g.jpg',
		link: '/blog/v-kitae-reshili-otkazatsya-ot-3g',
		date: '18 Дек 2018',
		title: 'В Китае решили отказаться от 3G',
		description: (
			<>
				<p>В прошлом году страна отказалась от 2G, а в этом году решила сделать то же самое с 3G.</p>{' '}
				<p>Основные китайские и тайваньские…</p>
			</>
		),
	},
	{
		img: '/blog/yandex-money.jpg',
		link: '/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane',
		date: '17 Дек 2018',
		title: '«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане',
		description: (
			<>
				<p>Сейчас в Узбекистане можно пополнить кошелек лишь через конверсионные и валютные карты.</p>{' '}
				<p>В «Яндексе.Деньгах» работают над расширением методов пополнения кошельков в Узбекистане….</p>
			</>
		),
	},
	{
		img: '/blog/facebook.jpg',
		link: '/blog/facebook-soobshhil-ob-oshibke',
		date: '16 Дек 2018',
		title: 'Facebook сообщил об ошибке',
		description: (
			<>
				<p>
					Из-за ошибки в API сторонние приложения могли получить доступ к закрытым и даже неопубликованным
					фотографиям.{' '}
				</p>
				<p>Facebook обнаружила ошибку в API, из-за которой…</p>
			</>
		),
	},
	{
		img: '/blog/speedtest.jpg',
		link: '/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane',
		date: '14 Дек 2018',
		title: 'Speedtest небольшой рост скорости интернета в Узбекистане',
		description: (
			<>
				<p>
					По итогам ноября Узбекистан занял 108 место по скорости мобильного интернета и 111 по скорости
					проводного.
				</p>
				<p>Интернет-сервис Speedtest.net ирландской компании Ookla</p>
			</>
		),
	},
	{
		img: '/blog/google-5g.jpg',
		link: '/blog/google-podvel-itogi-2018-goda',
		date: '13 Дек 2018',
		title: 'Google подвел итоги 2018 года',
		description: (
			<>
				<p>
					Google подвел{' '}
					<a
						href="https://trends.google.com/trends/yis/2018/GLOBAL/"
						target="_blank"
						rel="noreferrer noopener">
						итоги года
					</a>
					, проанализировав поисковые запросы пользователей со всего мира.
				</p>
				<p>Больше всего в этом году искали информацию о Чемпионате…</p>
			</>
		),
	},
];

export default function Blog() {
	return (
		<Container headTitle="Новости" clNTitle="text-center">
			<div className={st.blog}>
				<div className={st.blog__block}>
					{blog.map((item) => (
						<div key={item.title} className={st.blog__block__item}>
							<Link href={item.link}>
								<a>
									<div className={st.blog__block__item__img}>
										<Image src={item.img} width={560} height={300} blurDataURL placeholder="blur" />
									</div>
									<div className={st.blog__block__item__content}>
										<div className={st.blog__block__item__content__header}>
											<h2>{item.title}</h2>
											<span>{item.date}</span>
										</div>
										{item.description}
									</div>
								</a>
							</Link>
						</div>
					))}
				</div>
				<div className={st.blog__links}>
					<Link href="/blog">
						<a>&laquo; Предыдущий пост</a>
					</Link>
					<Link href="/blog">
						<a>1</a>
					</Link>
					<a className={st.blog__links__active}>2</a>
					<Link href="/blog/page/3">
						<a>3</a>
					</Link>
					<Link href="/blog/page/3">
						<a>Следующий пост &raquo;</a>
					</Link>
				</div>
			</div>
		</Container>
	);
}
