import st from './blogItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../container';

export default function BlogItem({ data }) {
	return (
		<Container>
			<div className={st.blogItem}>
				<Link href="/blog">
					<a className={st.blogItem__breadCrumb}>Все новости</a>
				</Link>
				<h1>{data.title}</h1>
				<div className={st.blogItem__details}>
					<div className={st.blogItem__details__author}>
						<Image src="/user.png" width={50} height={50} alt="user" blurDataURL placeholder="blur" />
						<span>Airnet</span>
					</div>
					<div className={st.blogItem__details__date}>
						<span className="fw-bold mb-3">Добавлено</span> <br />
						<span>{data.date}</span>
					</div>
				</div>
				<div className={st.blogItem__mainImg}>
					<Image src={data.img} width={560} height={300} blurDataURL placeholder="blur" />
				</div>
				{data.content}
				<div className={st.blogItem__links}>
					{data?.prev && (
						<Link href={data.prev}>
							<a className="me-2">&laquo; Предыдущий пост</a>
						</Link>
					)}
					{data?.next && (
						<Link href={data.next}>
							<a>Следующий пост &raquo;</a>
						</Link>
					)}
				</div>
			</div>
		</Container>
	);
}
