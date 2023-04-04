import { LINKS } from "@/components/requirements"
import { checkLang } from "@/utils/checkLang"
import Link from "next/link"

export default function NotFound({ language }) {
	const langData = {
		title: {
			ru: "404 | Страница не найдена",
			uz: "404 | Sahifa topilmadi",
			en: "404 | Page not found",
		},
		description: {
			ru: (
				<>
					Вернуться на{" "}
					<Link href={checkLang(language) + LINKS.HOME}>
						<a>главную страницу</a>
					</Link>
				</>
			),
			uz: (
				<>
					<Link href={checkLang(language) + LINKS.HOME}>
						<a>Asosiy sahifaga</a>
					</Link>{" "}
					qaytish
				</>
			),
			en: (
				<>
					Go to{" "}
					<Link href={checkLang(language) + LINKS.HOME}>
						<a>main page</a>
					</Link>
				</>
			),
		},
	}

	return (
		<div
			style={{ maxWidth: "550px", margin: "50px auto", textAlign: "center" }}
		>
			<h1>{langData.title[language]}</h1>
			<p>{langData.description[language]}</p>
		</div>
	)
}
