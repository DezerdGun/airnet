import { checkLang } from "@/utils/checkLang"
import Link from "next/link"
import { BlogBlock } from ".."
import st from "../blog.module.scss"

export const blog = [
	{
		img: "/blog/yandex-musics.jpg",
		link: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
		date: "23.12.2018",
		title: {
			ru: "«Яндекс.Музыка» и Beeline запустили совместный проект",
			uz: "Yandex.Musiqa va Beeline hamkorlikdagi loyihani ishga tushirdi",
			en: "Yandex.Music and Beeline launched a joint project",
		},
		description: {
			ru: (
				<>
					<p>
						Мобильные операторы все активнее сотрудничают с поставщиками аудиоконтента — ранее похожие проекты запустили
						Ucell и Zvooq, UMS и Lamuz.
					</p>
					<p>«Яндекс.Музыка» и Beeline…</p>
				</>
			),
			uz: (
				<>
					<p>
						Uyali aloqa operatorlari etkazib beruvchilar bilan tobora ko'proq hamkorlik qilmoqda audio-kontent — ilgari
						shu kabi loyihalar Ucell va Zvooq, UMS va Lamuz.
					</p>
					<p>Yandex.Musiqa va Beeline...</p>
				</>
			),
			en: (
				<>
					<p>
						Mobile operators are increasingly cooperating with suppliers audio content — previously similar projects
						were launched by Ucell and Zvooq, UMS and Lamuz.
					</p>
					<p>Yandex.Music and Beeline…</p>
				</>
			),
		},
	},
]

export default function Blog({ language }) {
	const pagination = {
		ru: (
			<>
				<Link href={checkLang(language) + "/blog"}>
					<a>&laquo; Предыдущий пост</a>
				</Link>
				<Link href={checkLang(language) + "/blog"}>
					<a>1</a>
				</Link>
				<a className={st.blog__links__active}>2</a>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>Следующий пост &raquo;</a>
				</Link>
			</>
		),
		uz: (
			<>
				<a className={st.blog__links__active} disabled>
					&laquo; Oldingi post
				</a>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>1</a>
				</Link>
				<a className={st.blog__links__active}>2</a>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>Keyingi post &raquo;</a>
				</Link>
			</>
		),
		en: (
			<>
				<Link href={checkLang(language) + "/blog"}>
					<a>&laquo; Previous post</a>
				</Link>
				<Link href={checkLang(language) + "/blog"}>
					<a>1</a>
				</Link>
				<a className={st.blog__links__active}>2</a>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>Next post &raquo;</a>
				</Link>
			</>
		),
	}

	return <BlogBlock pagination={pagination} blog={blog} language={language} />
}
