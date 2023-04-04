import { checkLang } from "@/utils/checkLang.js"
import Link from "next/link"
import Container from "../container/index.jsx"
import FAQ from "../faq"
import Partners from "../partners"
import { LINKS } from "../requirements.js"
import SEO from "../seo"
import st from "./helpBlock.module.scss"

export default function HelpBlock({ data, language }) {
	const langData = {
		faq: {
			ru: "НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ",
			uz: "BIZGA KO'P SO'RALADIGAN BILLING-PANELI",
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
	}

	return (
		<>
			<SEO
				title={`${data.headTitle[language]} | Airnet`}
				desc={data?.desc?.[language]}
			/>
			<Container headTitle={data.headTitle[language]}>
				<div className={st.helpItem}>
					<div className={st.helpItem__block}>{data.content[language]}</div>
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
