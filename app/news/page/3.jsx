import { checkLang } from "@/utils/checkLang"
import Link from "next/link"
import { NewsBlock } from ".."
import st from "../news.module.scss"

export const news = [
	{
		img: "/blog/yandex-money.jpg",
		link: "/blog/infocom-prekratil-rabotu-v-kachestve-registratora-domenov",
		date: "12.12.2018",
		title: {
			ru: "UZINFOCOM прекратил работу в качестве регистратора доменов",
			uz: "UZINFOCOM domen registratori sifatida ishlashni to'xtatdi",
			en: "UZINFOCOM has stopped working as a domain registrar",
		},
		description: {
			ru: (
				<p>
					ООО «Единый интегратор по созданию и поддержке государственных информационных систем UZINFOCOM» прекратил свою
					деятельность по Регистрации и продлению доменных имен в…
				</p>
			),
			uz: (
				<p>
					Davlatni yaratish va qo'llab-quvvatlash bo'yicha yagona integrator MChJ “UZINFOCOM” axborot tizimlari oʻz
					faoliyatini toʻxtatdi Domen nomlarini roʻyxatdan oʻtkazish va yangilash…
				</p>
			),
			en: (
				<p>
					LLC "Single integrator for the creation and support of state information systems UZINFOCOM" ceased its
					registration and renewal of domain names in…
				</p>
			),
		},
	},
]

export default function News({ language }) {
	const pagination = {
		ru: (
			<>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>&laquo; Предыдущий пост</a>
				</Link>
				<Link href={checkLang(language) + "/news"}>
					<a>1</a>
				</Link>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>2</a>
				</Link>
				<a className={st.news__links__active}>3</a>
				<a className={st.news__links__active}>Следующий пост &raquo;</a>
			</>
		),
		uz: (
			<>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>&laquo; Oldingi post</a>
				</Link>
				<Link href={checkLang(language) + "/news"}>
					<a>1</a>
				</Link>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>2</a>
				</Link>
				<a className={st.news__links__active}>3</a>
				<a className={st.news__links__active}>Keyingi post &raquo;</a>
			</>
		),
		en: (
			<>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>&laquo; Previous post</a>
				</Link>
				<Link href={checkLang(language) + "/news"}>
					<a>1</a>
				</Link>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>2</a>
				</Link>
				<a className={st.news__links__active}>3</a>
				<a className={st.news__links__active}>Next post &raquo;</a>
			</>
		),
	}

	return <NewsBlock pagination={pagination} news={news} language={language} />
}
