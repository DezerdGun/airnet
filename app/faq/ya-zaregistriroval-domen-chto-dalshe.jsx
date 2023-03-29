import FaqInside from "@/components/faqInside"
import { LINKS } from "@/components/requirements"
import Link from "next/link"

const data = {
	title: {
		ru: "Я зарегистрировал домен, что дальше?",
		uz: "Men domenni ro'yxatdan o'tkazdim, keyin nima bo'ladi?",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: (
			<>
				<p>
					«Что делать после регистрации домена?» Дальнейшие действия зависят от
					того, есть ли у вас готовый сайт и опыт в их создании или нет.
				</p>
				<h2>Если есть опыт в создании сайтов</h2>
				<ol>
					<li>
						<Link href={LINKS.HOSTING}>
							<a>Закажите хостинг</a>
						</Link>
					</li>
				</ol>
			</>
		),
		uz: (
			<>
				<p>
					«Domenni ro'yxatdan o'tkazgandan keyin nima qilish kerak?» Keyingi
					harakat sizdagi sayt yaratashish yoki shu sferadagi malaka bormi,
					yoqmi shunga bogliq boladi.
				</p>
				<h2>Agar veb-saytlarni yaratishda tajribangiz bo'lsa</h2>
				<ol>
					<li>
						<Link href={LINKS.HOSTING}>
							<a>Xostingga buyurtma bering</a>
						</Link>
					</li>
				</ol>
			</>
		),
	},
}

export default function YaZaregistrirovalDomenChtoDalshe({ language }) {
	return <FaqInside data={data} language={language} />
}
