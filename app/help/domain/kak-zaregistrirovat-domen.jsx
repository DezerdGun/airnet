import HelpBlock from "@/components/helpItem/helpBlock"
import { LINKS } from "@/components/requirements"
import Link from "next/link"

const mainData = {
	headTitle: {
		ru: "Как зарегистрировать домен UZ",
		uz: "Domen UZ royxatdan otqazish",
	},
	content: {
		ru: (
			<>
				<p>
					Выбрать и проверить доменное имя в «
					<Link href={LINKS.DOMAINS}>
						<a>
							<strong>регистрации доменов</strong>
						</a>
					</Link>
					»;
				</p>
				<p>
					Нажать на кнопку «
					<strong>
						<a href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz">
							Заказать
						</a>
					</strong>
					»;
				</p>
				<p>Оплатить регистрацию домена;</p>
				<p>Выслать паспортные данные.</p>
			</>
		),
		uz: (
			<>
				<p>
					Domen nomini tanlang va «
					<Link href={LINKS.DOMAINS}>
						<a>
							<strong>domenni royxatdan otqazing</strong>
						</a>
					</Link>
					»;
				</p>
				<p>
					<strong>
						Buyurtma berish uchun
						<a href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz">
							ushbu tugmani bosing.
						</a>
					</strong>
					»;
				</p>
				<p>Domen royxatdan otqazish tolovi</p>
				<p>Pasport hujjatlarini yuborish.</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
