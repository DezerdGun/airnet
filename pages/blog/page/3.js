import st from '../blog.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../../components/container';

export const blog = [
	{
		img: '/blog/yandex-money.jpg',
		link: '/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov',
		date: '12.12.2018',
		title: 'UZINFOCOM прекратил работу в качестве регистратора доменов',
		description: (
			<p>
				ООО «Единый интегратор по созданию и поддержке государственных информационных систем UZINFOCOM»
				прекратил свою деятельность по Регистрации и продлению доменных имен в…
			</p>
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
					<Link href="/blog/page/2">
						<a>&laquo; Предыдущий пост</a>
					</Link>
					<Link href="/blog">
						<a>1</a>
					</Link>
					<Link href="/blog/page/2">
						<a>2</a>
					</Link>
					<a className={st.blog__links__active}>3</a>
					<a className={st.blog__links__active}>Следующий пост &raquo;</a>
				</div>
			</div>
		</Container>
	);
}
