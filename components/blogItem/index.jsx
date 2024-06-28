import { checkLang } from "@/utils/checkLang.js"
import Image from "next/image"
import Link from "next/link"
import Container from "../container/index.jsx"
import SEO from "../seo"
import st from "./blogItem.module.scss"
import PageBreadcrumb from "../seo/pageBreadCrumbs";
import FAQ from "@/components/faq";

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
			ru: "Опубликовано",
			uz: "Опубликовано",
			en: "Опубликовано",
		},
		updated: {
			ru: "Обновлено",
			uz: "Обновлено",
			en: "Обновлено",
		},
		read: {
			ru: "Читать",
			uz: "Читать",
			en: "Читать",
		},
		view: {
			ru: "Статью прочитали",
			uz: "Статью прочитали",
			en: "Статью прочитали",
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
		<div className="bg-gray">
			<SEO
				title={`${data.title[language]} | ${langData.title[language]}`}
				desc={data.desc[language]}
			/>
			
			<PageBreadcrumb links={[{ name: data.title[language] }]} />

			<Container>
				<div className={st.blogItem}>
					<div className={st.blogItem__center}>
						<div className={st.blogItem__mainImg}>
							<Image
								src={data.img}
								width={805}
								height={404}
								blurDataURL
								placeholder="blur"
							/>
						</div>
						{/* <Link href={checkLang(language) + "/blog"}>
							<a className={st.blogItem__breadCrumb}>{langData.news[language]}</a>
						</Link> */}
						<div className={st.blogItem__details}>
							<div className={st.blogItem__details__read}>
								<span className="fw-bold mb-3">{langData.read[language]}</span>{" "}
								<span>- {data.read} мин.</span>
							</div>
							<div className={st.blogItem__details__view}>
								<span className="fw-bold mb-3">{langData.view[language]}</span>{" "}
								<span>- {data.view} раз</span>
							</div>
							<div className={st.blogItem__details__updated}>
								<span className="fw-bold mb-3">{langData.updated[language]}</span>{" "}
								<span>- {data.updated}</span>
							</div>
							<div className={st.blogItem__details__date}>
								<span className="fw-bold mb-3">{langData.added[language]}</span>{" "}
								<span>- {data.date}</span>
							</div>
						</div>
						<h1>{data.title[language]}</h1>

						{data.content[language]}
						
						<div className={st.blogItem__faqblock}>
							<FAQ faq={data.faq} title={data.faqTitle[language]} language={language} />
						</div>

						<div className={st.blogItem__details__author}>
							<h3>Автор статьи:</h3>
							<Image
								src="/favicon.png"
								width={50}
								height={50}
								alt="user"
								blurDataURL
								placeholder="blur"
							/>
							<h4>Главный редактор</h4>
							<p>Данаев Алмаз</p>
						</div>

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
					<div className={st.blogItem__right}>
						<div className={st.blogItem__right__text}>
							<h3>Содержание</h3>
							<ol>
							{data.alinks.map((item) => (
								<li key={item.name}>
									<Link href="/">
										<a>{item.title[language]}</a>
									</Link>
								</li>
          					))}
							</ol>
						</div>
						<div className={st.blogItem__right__category}>
							<h3>Категорий</h3>
							<span><a href="/">Сервера</a></span>
							<span><a href="/">Хостинг</a></span>
							<span><a href="/">Windows</a></span>
							<span><a href="/">Linux</a></span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
