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
];

export default function Blog() {
	return (
		<Container headTitle="Новости" clNTitle="text-center">
			<div className={st.blog}>
				{blog.map((item) => (
					<div key={item.title} className={st.blog__item}>
						<Link href={item.link}>
							<a>
								<div className={st.blog__item__img}>
									<Image src={item.img} width={560} height={300} blurDataURL placeholder="blur" />
								</div>
								<div className={st.blog__item__content}>
									<div className={st.blog__item__content__header}>
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
		</Container>
	);
}
