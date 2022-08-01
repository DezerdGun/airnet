import st from './blog.module.scss';
import Container from '../../components/container';
import Image from 'next/image';
import Link from 'next/link';

export const blog = [
	{
		img: '/blog/cyberpunk.jpg',
		link: '/blog/cyberpunk-2077',
		date: '24.12.2020',
		title: 'Акции разработчика игры Cyberpunk 2077 рухнули на 20%',
		description: (
			<>
				<p>
					Котировки польской студии CD Projekt Red резко подешевели на фоне удаления игры Cyberpunk 2077 из
					магазина Sony.
				</p>
				<p>В ходе торгов на Варшавской…</p>
			</>
		),
	},
	{
		img: '/blog/audio-call.jpg',
		link: '/blog/telegram-voice-chat',
		date: '24.12.2020',
		title: 'В Telegram появились голосовые чаты и другие новые возможности',
		description: (
			<>
				<p>
					В любой группе теперь можно запустить голосовой чат параллельно с обычной перепиской — текст и голос
					будут органично дополнять друг…
				</p>
			</>
		),
	},
	{
		img: '/blog/president.jpg',
		link: '/blog/2019-god-obyavlen-godom-aktivnyx-investicij-i-socialnogo-razvitiya',
		date: '31 Дек 2018',
		title: '2019 год объявлен Годом активных инвестиций и социального развития',
		description: (
			<>
				<p>Президент подчеркнул, что благоприятная инвестиционная среда приведет к развитию всех сфер.</p>{' '}
				<p>Президент Шавкат Мирзиёев объявил 2019 год Годом активных инвестиций и социального…</p>
			</>
		),
	},
	{
		img: '/blog/youtube-facebook.jpg',
		link: '/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube',
		date: '30 Дек 2018',
		title: 'К чему привели неполадки с Facebook и YouTube',
		description: (
			<p>
				В начале 2018 года, года инноваций, у всех игроков сферы онлайн-коммерции был очень оптимистичный
				настрой, мы ожидали, что появится большое количество…
			</p>
		),
	},
	{
		img: '/blog/personal-security.jpg',
		link: '/blog/deputaty-nachali-obsuzhdenie-zakonoproekta-o-personalnyx-dannyx',
		date: '29 Дек 2018',
		title: 'Депутаты начали обсуждение законопроекта «О персональных данных»',
		description: (
			<>
				<p>Сейчас персональные данные в Узбекистане слабо защищены, но скоро это изменится.</p>{' '}
				<p>25 декабря 2018 года состоялось очередное заседание Законодательной палаты Олий Мажлиса….</p>
			</>
		),
	},
	{
		img: '/blog/vk.jpg',
		link: '/blog/vkontakte-zavela-profil-v-instagram',
		date: '28 Дек 2018',
		title: '«ВКонтакте» завела профиль в Instagram',
		description: (
			<>
				<p>
					Раньше «ВКонтакте» активно боролась с Instagram — отключала ссылки на сервис и пыталась создать
					конкурента.
				</p>{' '}
				<p>Соцсеть «ВКонтакте», запущенная в 2006 году,</p>
			</>
		),
	},
	{
		img: '/blog/uzcard.jpg',
		link: '/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi',
		date: '27 Дек 2018',
		title: 'Карты UzCard теперь можно пополнять наличными',
		description: (
			<>
				<p>В компании сообщили, что запустили в банкоматах функцию cash-in.</p>{' '}
				<p>
					Пока такую функцию поддерживают банкоматы пяти банков. Карты UzCard теперь можно пополнять
					наличными,…
				</p>
			</>
		),
	},
	{
		img: '/blog/bitcoin.jpg',
		link: '/blog/financial-times-soobshhaet-chto-majnery-zakryvayut-biznes-tak-kak-bitkoin-stal-deshevle-stoimosti-ego-dobychi',
		date: '26 Дек 2018',
		title: 'Financial Times сообщает, что майнеры закрывают бизнес, так как биткоин стал дешевле стоимости его добычи',
		description: (
			<>
				<p>Летом Узбекистан официально взял курс на развитие майнинга и собирался запустить пилотный проект.</p>
				<p>Британская компания Bladetech, которая в марте объявила о строительстве…</p>
			</>
		),
	},
	{
		img: '/blog/plastic-card.jpg',
		link: '/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane',
		date: '25 Дек 2018',
		title: 'Центральный банк опубликовал проект закона о платежах и электронных деньгах в Узбекистане',
		description: (
			<p>
				Что такое электронные деньги, кто имеет право их выпускать, как ими рассчитываться, где их могут
				принимать, а также многое другое —…
			</p>
		),
	},
	{
		img: '/blog/spacex.jpg',
		link: '/blog/ilon-mask-xochet-privlech-500-mln-na-sozdanie-mirovogo-interneta',
		date: '24 Дек 2018',
		title: 'Илон Маск хочет привлечь $500 млн на создание мирового интернета',
		description: (
			<>
				<p>
					Проект Starlink предполагает создание обширной сети спутников, способных передавать интернет-трафик.
				</p>
				<p>SpaceX Илона Маска планирует привлечь $500 млн для запуска собственной сети космических…</p>
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
					<a className={st.blog__links__active} disabled>
						&laquo; Предыдущий пост
					</a>
					<a className={st.blog__links__active}>1</a>
					<Link href="/blog/page/2">
						<a>2</a>
					</Link>
					<Link href="/blog/page/3">
						<a>3</a>
					</Link>
					<Link href="/blog/page/2">
						<a>Следующий пост &raquo;</a>
					</Link>
				</div>
			</div>
		</Container>
	);
}
