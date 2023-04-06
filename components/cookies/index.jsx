import { useEffect, useState } from "react"
import st from "./cookies.module.scss"

export default function Cookies({ language }) {
	const [isOpen, setIsOpen] = useState(false)

	const langData = {
		title: {
			ru: "Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies",
			uz: "Saytimizdan foydalanish orqali siz cookiesdan foydalanishimizga rozilik bildirasiz",
			en: "By using our site, you agree to our use of cookies",
		},
		close: {
			ru: "ЗАКРЫТЬ",
			uz: "YOPISH",
			en: "CLOSE",
		},
		apply: {
			ru: "ПРИНЯТЬ",
			uz: "QABUL QILISH",
			en: "ACCEPT",
		},
	}

	useEffect(() => {
		localStorage?.getItem("cookies") ? "" : setIsOpen(true)
	}, [isOpen])

	if (!isOpen) return null
	return (
		<div className={st.cookies}>
			<div className={st.cookies__block}>{langData.title[language]}</div>
			<div className={st.cookies__block}>
				<button
					onClick={() => {
						setIsOpen(false)
						localStorage.setItem("cookies", "declined")
					}}
				>
					{langData.close[language]}
				</button>
				<button
					onClick={() => {
						setIsOpen(false)
						localStorage.setItem("cookies", "accepted")
					}}
				>
					{langData.apply[language]}
				</button>
			</div>
		</div>
	)
}
