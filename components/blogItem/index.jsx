import { checkLang } from "@/utils/checkLang.js"
import Image from "next/image"
import Link from "next/link"
import Container from "../container/index.jsx"
import SEO from "../seo"
import st from "./blogItem.module.scss"
import PageBreadcrumb from "../seo/pageBreadCrumbs";

export default function BlogItem({ data, language }) {
	const langData = {
		title: {
			ru: "Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
			en: "Hosting TAS-IX in Tashkent, Uzbekistan",
		},
		news: {
			ru: "Все новости",
			uz: "Barcha yangiliklar",
			en: "All news",
		},
		added: {
			ru: "Добавлено",
			uz: "Qo'shildi",
			en: "Added",
		},
		prevPost: {
			ru: "Предыдущий пост",
			uz: "Oldingi post",
			en: "Previous post",
		},
		nextPost: {
			ru: "Следующий пост",
			uz: "Keyingi post",
			en: "Next post",
		},
	}
	return (
		<>
			<SEO
				title={`${data.title[language]} | ${langData.title[language]}`}
				desc={data.desc[language]}
			/>
			
			<PageBreadcrumb links={[{ name: data.title[language] }]} />

			<Container>
				<div className={st.blogItem}>
					{/* <Link href={checkLang(language) + "/blog"}>
						<a className={st.blogItem__breadCrumb}>{langData.news[language]}</a>
					</Link> */}
					<h1>{data.title[language]}</h1>
					<div className={st.blogItem__details}>
						<div className={st.blogItem__details__author}>
							<Image
								src="/user.png"
								width={50}
								height={50}
								alt="user"
								blurDataURL
								placeholder="blur"
							/>
							<span>AIRNET</span>
						</div>
						<div className={st.blogItem__details__date}>
							<span className="fw-bold mb-3">{langData.added[language]}</span>{" "}
							<br />
							<span>{data.date}</span>
						</div>
					</div>
					<div className={st.blogItem__mainImg}>
						<Image
							src={data.img}
							width={560}
							height={300}
							blurDataURL
							placeholder="blur"
						/>
					</div>
					{data.content[language]}
					<div className={st.blogItem__links}>
						{data?.prev && (
							<Link href={checkLang(language) + data.prev}>
								<a className="me-2">&laquo; {langData.prevPost[language]}</a>
							</Link>
						)}
						{data?.next && (
							<Link href={checkLang(language) + data.next}>
								<a>{langData.nextPost[language]} &raquo;</a>
							</Link>
						)}
					</div>
				</div>
			</Container>
		</>
	)
}
