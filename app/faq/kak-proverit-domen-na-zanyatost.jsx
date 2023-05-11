import FaqInside from "@/components/faqInside"
import { LINKS } from "@/components/requirements"
import { checkLang } from "@/utils/checkLang"
import Link from "next/link"

export default function KakProveritDomenNaZanyatost({ language }) {
	const data = {
		title: {
			ru: "Как проверить домен на занятость?",
			uz: "Domen bandligini qanday tekshirish mumkin?",
			en: "How to check if a domain is busy?",
		},
		description: { ru: "", uz: "", en: "" },
		content: {
			ru: (
				<>
					<p>
						<strong>Whois</strong> (от англ. «кто это») — общедоступная база данных зарегистрированных доменов. Через
						неё любой пользователь может получить информацию о домене или IP-адресе.{" "}
					</p>
					<h2>Как проверить домен на занятость?</h2>
					<p>
						Проверить домен на занятость можно как{" "}
						<Link href={checkLang(language) + LINKS.DOMAINS}>
							<a>на странице сервиса Купить домен</a>
						</Link>
						, так и{" "}
						<Link href={checkLang(language) + LINKS.HOME}>
							<a>на главной странице сайта</a>
						</Link>
						.
					</p>
					<p>
						Введите имя домена или IP-адрес и нажмите <strong>Проверить</strong>.{" "}
					</p>
					<p>
						Сервис покажет результаты проверки. Если домен <strong>свободен</strong>, вы можете его{" "}
						<a
							href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
							target="_blank"
							rel="noreferrer noopener"
						>
							зарегистрировать
						</a>
						.{" "}
					</p>
					<p>Если домен занят, вы можете обратиться к текущему администратору домена по вопросу его покупки.</p>
				</>
			),
			uz: (
				<>
					<p>
						<strong>Whois</strong> (inglizchada - "kim bu") — umumiy ma'lumotlar bazasi ro'yxatdan o'tgan domen
						ma'lumotlari. U orqali har qanday foydalanuvchi domen yoki IP manzil haqida ma'lumotni olishi mumkin.{" "}
					</p>
					<h2>Domen bandligini qanday tekshirish mumkin?</h2>
					<p>
						Domen band yoki yo'qligini{" "}
						<Link href={checkLang(language) + LINKS.DOMAINS}>
							<a> Domen sotib oling xizmat sahifasida</a>
						</Link>
						, va yana{" "}
						<Link href={checkLang(language) + LINKS.HOME}>
							<a>saytning asosiy sahifasida</a>
						</Link>{" "}
						tekshirishingiz mumkin.
					</p>
					<p>
						Domen nomini yoki IP manzilini kiriting va <strong>Tekshirish</strong>
						ni bosing
					</p>
					<p>
						Xizmat tekshiruv natijalarini ko'rsatadi. Agar domen <strong>bo'sh</strong> bolsa, siz uni{" "}
						<a
							href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
							target="_blank"
							rel="noreferrer noopener"
						>
							royxatdan o'tkazishingiz mumkin boladi
						</a>
						.{" "}
					</p>
					<p>
						Agar domen band bo'lsa,uni sotib olish masalasi bo'yicha domen joriy administrator bilan bog'lanishingiz
						mumkin .
					</p>
				</>
			),
			en: (
				<>
					<p>
						<strong>Whois</strong> (from the English "who is") - a public database registered domain data. Through it,
						any user can get domain or IP address information.{" "}
					</p>
					<h2>How to check if a domain is busy?</h2>
					<p>
						You can check if a domain is busy as{" "}
						<Link href={checkLang(language) + LINKS.DOMAINS}>
							<a>on the service page Buy a domain</a>
						</Link>
						, and{" "}
						<Link href={checkLang(language) + LINKS.HOME}>
							<a>on the main page of the site</a>
						</Link>
						.
					</p>
					<p>
						Enter the domain name or IP address and click <strong>Check</strong>.
					</p>
					<p>
						The service will show the results of the check. If domain <strong>free</strong>, you can{" "}
						<a
							href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
							target="_blank"
							rel="noreferrer noopener"
						>
							register
						</a>
						.{" "}
					</p>
					<p>If the domain is busy, you can contact the current administrator domain on the issue of its purchase.</p>
				</>
			),
		},
	}
	return <FaqInside data={data} language={language} />
}
