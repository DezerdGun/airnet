import { checkLang } from "@/utils/checkLang.js"
import Image from "next/image"
import Link from "next/link"
import Container from "../container/index.jsx"
import SEO from "../seo"
import st from "./blogItem.module.scss"
import FAQ from "@/components/faq";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs";
import BreadCrumbs from "@/components/seo/breadCrumbs.jsx";

export default function BlogItem({ data, language, breadCrumbs }) {
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
			uz: "Chop etilgan",
			en: "Published",
		},
		updated: {
			ru: "Обновлено",
			uz: "Yangilangan",
			en: "Updated",
		},
		read: {
			ru: "Читать",
			uz: "O'qing",
			en: "Read",
		},
		view: {
			ru: "Статью прочитали",
			uz: "Maqola o'qildi",
			en: "The article has been read",
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
		author: {
			ru: "Автор статьи:",
			uz: "Maqola muallifi:",
			en: "Author of the article:",
		},
		authorseo: {
			ru: "Главный редактор",
			uz: "Bosh muharrir",
			en: "Editor-in-Chief",
		},
		authorname: {
			ru: "Данаев Алмаз",
			uz: "Danaev Almaz",
			en: "Danaev Almaz",
		},
		sidetitle: {
			ru: "Содержание",
			uz: "Tarkib",
			en: "Content",
		},
		sidecat: {
			ru: "Категорий",
			uz: "Kategoriyalar",
			en: "Categories",
		},
		sidecatlinks: [
			{ title: {ru: "Сервера", uz: "Serverlar", en: "Servers", slug: "/dedicated" }},
			{ title: {ru: "Хостинг", uz: "Xosting", en: "Hosting", slug: "/hosting" }},
			{ title: {ru: "Windows", uz: "Windows", en: "Windows", slug: "/vds/arenda-servera-windows" }},
			{ title: {ru: "Linux", uz: "Linux", en: "Linux", slug: "/vds/arenda-servera-linux" }},
		],
	}
	return (
		<div className="bg-gray">
			<SEO
				title={`${data.title[language]}`}
				desc={data.desc[language]}
			/>
			
			{breadCrumbs && breadCrumbs.length ? (
			<>
				<BreadCrumbs data={breadCrumbs} language={language} />
				<PageBreadcrumb links={breadCrumbs} language={language} />
			</>
			) : null}

			<Container>
				<div className={st.blogItem}>
					<div className={st.blogItem__center}>
						{/* <h1>{data.headTitle[language]}</h1> */}
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
						<h1>{data.headTitle[language]}</h1>

						{data.content[language]}
						
						{Array.isArray(data.faq) && data.faq.length > 0 && (
							<div className={st.blogItem__faqblock}>
								<FAQ faq={data.faq} title={data.faqTitle[language]} language={language} />
							</div>
						)}

						<div className={st.blogItem__details__author}>
							<h3>{langData.author[language]}</h3>
							<Image
								src="/favicon.png"
								width={50}
								height={50}
								alt="user"
								blurDataURL
								placeholder="blur"
							/>
							<h4>{langData.authorseo[language]}</h4>
							<p>{langData.authorname[language]}</p>
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
						{Array.isArray(data.alinks) && data.alinks.length > 0 && (
							<div className={st.blogItem__right__text}>
								<h3>{langData.sidetitle[language]}</h3>
								<ol>
									{data.alinks.map((item) => (
									<li key={item.slug}>
										<Link href={`#${item.title.slug}`}>
										<a>{item.title[language]}</a>
										</Link>
									</li>
									))}
								</ol>
							</div>
						)}
						<div className={st.blogItem__right__category}>
							<h3>{langData.sidecat[language]}</h3>
							{langData.sidecatlinks.map((item) => (
								<span key={item.slug}>
									<Link href={item.title.slug}>
									<a>{item.title[language]}</a>
									</Link>
								</span>
							))}
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
