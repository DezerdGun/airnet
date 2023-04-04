import { checkLang } from "@/utils/checkLang.js"
import Link from "next/link"
import { useEffect, useState } from "react"
import Container from "../container/index.jsx"
import FAQ from "../faq/index.jsx"
import Partners from "../partners/index.jsx"
import { LINKS } from "../requirements.js"
import SEO from "../seo"
import st from "./helpItem.module.scss"

export default function HelpItem({ data, language }) {
	const [isFixed, setIsFixed] = useState(false)

	const scroll = () => {
		const content = document.querySelector("#content"),
			links = document.querySelector("#links")

		if (document.body.clientWidth > 770) {
			if (window.pageYOffset >= 112) {
				if (
					window.pageYOffset >
					content.clientHeight - links.clientHeight + 112
				) {
					setIsFixed("end")
				} else setIsFixed(true)
			} else setIsFixed(false)
		} else document.removeEventListener("scroll", scroll)
	}

	const langData = {
		menu: {
			ru: "Разделы",
			uz: "Bo'limlar",
			en: "",
		},
		goToDB: {
			ru: (
				<>
					Вернуться к{" "}
					<Link href={checkLang(language) + LINKS.HELP}>
						<a>«База знаний»</a>
					</Link>
				</>
			),
			uz: (
				<>
					<Link href={checkLang(language) + LINKS.HELP}>
						<a>«Bilimlar bazasi»</a>
					</Link>{" "}
					sahifasiga qaytish
				</>
			),
			en: "",
		},
		phoneSupport: {
			ru: "Не нашли ответ на свой вопрос? Позвоните нашим специалистам по	телефону",
			uz: "Savolingizga javob topa olmadingizmi? Telefon orqali mutaxassislarimizga qo'ng'iroq qiling",
			en: "",
		},
		faq: {
			ru: "НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ",
			uz: "BIZNING TO'LOV PANOSINI KO'P SO'RALADILAR",
			en: "",
		},
	}

	useEffect(() => {
		document.addEventListener("scroll", scroll)
	}, [])

	return (
		<>
			<SEO
				title={`${data.headTitle[language]} | Airnet`}
				desc={data?.desc?.[language]}
			/>
			<Container headTitle={data.headTitle[language]}>
				<div className={st.helpItem}>
					<div className={st.helpItem__block}>
						<div
							className={`${st.helpItem__block__links} ${
								isFixed &&
								(isFixed === "end"
									? st.helpItem__block__links__absolute
									: st.helpItem__block__links__fixed)
							}`}
						>
							<div id="links">
								<h4>{langData.menu[language]}</h4>
								{console.log(data)}
								<div className={st.helpItem__block__links__back}>
									{data?.content?.length ? (
										data.content.map((item, i) => (
											<LinksBlock key={i} data={item} language={language} />
										))
									) : (
										<LinksBlock data={data.content} language={language} />
									)}
								</div>
							</div>
						</div>
						<div id="content" className={st.helpItem__block__content}>
							<Content data={data.content} language={language} />
						</div>
					</div>
					<p>{langData.goToDB[language]}</p>
					<p>
						{langData.phoneSupport[language]}{" "}
						<a href="tel:+998712008700">+998(71) 200-87-00</a>
					</p>
				</div>
			</Container>
			{data?.afterContent}
			{data?.faq && (
				<FAQ
					faq={data.faq}
					title={langData.faq[language]}
					language={language}
				/>
			)}
			<Partners language={language} />
		</>
	)
}

const LinksBlock = ({ data, language }) => {
	const [state, setState] = useState(false)

	return (
		<ul className={st.helpItem__block__links__block}>
			<li onClick={() => setState(!state)}>
				<div>
					{data?.link ? (
						<Link href={checkLang(language) + data.link}>
							<a>{data.title[language]}</a>
						</Link>
					) : (
						data.title[language]
					)}
				</div>
				{data?.children && (
					<span
						className={`${st.helpItem__block__links__block__span} ${
							state && st.helpItem__block__links__block__span__active
						}`}
					>
						{">"}
					</span>
				)}
			</li>
			<div
				className={`${st.helpItem__block__links__block__content} ${
					state && st.helpItem__block__links__block__content__active
				}`}
			>
				{data?.children &&
					data.children.map((item, i) => (
						<LinksBlock key={`data${i}`} data={item} language={language} />
					))}
			</div>
		</ul>
	)
}

const Content = ({ data, language }) => {
	if (data?.length)
		return data.map((item) => (
			<div
				key={item.title[language]}
				className={st.helpItem__block__content__block}
			>
				<h3>
					{item?.link ? (
						<Link href={checkLang(language) + item.link}>
							<a>{item.title[language]}</a>
						</Link>
					) : (
						item.title[language]
					)}
				</h3>
				<ContentBlock data={item.children} language={language} />
			</div>
		))
	return (
		<div className={st.helpItem__block__content__block}>
			<h3>
				{data?.link ? (
					<Link href={checkLang(language) + data.link}>
						<a>{data.title[language]}</a>
					</Link>
				) : (
					data.title[language]
				)}
			</h3>
			<ContentBlock data={data.children} language={language} />
		</div>
	)
}

const ContentBlock = ({ data, language }) => {
	return data.map((item) => (
		<div
			key={item.title[language]}
			className={st.helpItem__block__content__block__item}
		>
			<h4>
				{item?.link ? (
					<Link href={checkLang(language) + item.link}>
						<a>{item.title[language]}</a>
					</Link>
				) : (
					item.title[language]
				)}
			</h4>
			{item?.children?.length && (
				<ul>
					{item.children.map((item) => (
						<li key={item.id}>
							<Link href={checkLang(language) + item.link}>
								<a>{item.title[language]}</a>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	))
}
