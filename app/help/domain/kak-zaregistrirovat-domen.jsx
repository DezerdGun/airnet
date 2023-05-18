import HelpBlock from "@/components/helpItem/helpBlock"
import { LINKS } from "@/components/requirements"
import { checkLang } from "@/utils/checkLang"
import Link from "next/link"

export default function HelpBlog({ language }) {
	const mainData = {
		headTitle: {
			ru: "Как зарегистрировать домен UZ?",
			uz: "Qanday qilib domen UZ royxatdan otqaziladi?",
			en: "How to register an UZ domain?",
		},
		content: {
			ru: (
				<>
					<p>
						Выбрать и проверить доменное имя в «
						<Link href={checkLang(language) + LINKS.DOMAINS}>
							<a>
								<strong>регистрации доменов</strong>
							</a>
						</Link>
						»;
					</p>
					<p>
						Нажать на кнопку «
						<strong>
							<a
								href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
								target="_blank"
								rel="noopener noreferrer"
							>
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
						<Link href={checkLang(language) + LINKS.DOMAINS}>
							<a>
								<strong>domenni royxatdan otqazing</strong>
							</a>
						</Link>
						»;
					</p>
					<p>
						<strong>
							Buyurtma berish uchun «
							<a
								href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
								target="_blank"
								rel="noopener noreferrer"
							>
								ushbu tugmani bosing
							</a>
						</strong>
						»;
					</p>
					<p>Domen royxatdan otqazish tolovi</p>
					<p>Pasport hujjatlarini yuborish.</p>
				</>
			),
			en: (
				<>
					<p>
						Select and check the domain name in "
						<Link href={checkLang(language) + LINKS.DOMAINS}>
							<a>
								<strong>domain registrations</strong>
							</a>
						</Link>
						»;
					</p>
					<p>
						Click on the button "
						<strong>
							<a
								href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
								target="_blank"
								rel="noopener noreferrer"
							>
								Order
							</a>
						</strong>
						»;
					</p>
					<p>Pay for domain registration;</p>
					<p>Send passport details.</p>
				</>
			),
		},
	}
	return <HelpBlock data={mainData} language={language} />
}
