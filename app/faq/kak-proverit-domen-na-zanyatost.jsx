import FaqInside from "@/components/faqInside"
import { LINKS } from "@/components/requirements"
import Link from "next/link"

const data = {
	title: {
		ru: "Как проверить домен на занятость?",
		uz: "Domen bandligini qanday tekshirish mumkin?",
	},
	description: { ru: "", uz: "" },
	content: {
		ru: (
			<>
				<p>
					<strong>Whois</strong> (от англ. «кто это») — общедоступная база
					данных зарегистрированных доменов. Через неё любой пользователь может
					получить информацию о домене или IP-адресе.{" "}
				</p>
				<h2>Как проверить домен на занятость?</h2>
				<p>
					Проверить домен на занятость можно как{" "}
					<Link href={LINKS.DOMAINS}>
						<a>на странице сервиса Купить домен</a>
					</Link>
					, так и{" "}
					<Link href={LINKS.HOME}>
						<a>на главной странице сайта</a>
					</Link>
					.
				</p>
				<p>
					Введите имя домена или IP-адрес и нажмите <strong>Проверить</strong>.{" "}
				</p>
				<p>
					Сервис покажет результаты проверки. Если домен{" "}
					<strong>свободен</strong>, вы можете его{" "}
					<a
						href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
						target="_blank"
						rel="noreferrer noopener"
					>
						зарегистрировать
					</a>
					.{" "}
				</p>
				<p>
					Если домен занят, вы можете обратиться к текущему администратору
					домена по вопросу его покупки.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					<strong>Whois</strong> (inglizchada - "kim bu") — umumiy ma'lumotlar
					bazasi ro'yxatdan o'tgan domen ma'lumotlari. U orqali har qanday
					foydalanuvchi domen yoki IP manzil haqida ma'lumotni olishi mumkin.{" "}
				</p>
				<h2>Domen bandligini qanday tekshirish mumkin?</h2>
				<p>
					Domen band yoki yo'qligini{" "}
					<Link href={LINKS.DOMAINS}>
						<a> Domen sotib oling xizmat sahifasida</a>
					</Link>
					, va yana{" "}
					<Link href={LINKS.HOME}>
						<a>saytning asosiy sahifasida</a>
					</Link>{" "}
					tekshirishingiz mumkin.
				</p>
				<p>
					Domen nomini yoki IP manzilini kiriting va <strong>Tekshirish</strong>
					ni bosing
				</p>
				<p>
					Xizmat tekshiruv natijalarini ko'rsatadi. Agar domen{" "}
					<strong>bo'sh</strong> bolsa, siz uni{" "}
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
					Agar domen band bo'lsa,uni sotib olish masalasi bo'yicha domen joriy
					administrator bilan bog'lanishingiz mumkin .
				</p>
			</>
		),
	},
}

export default function KakProveritDomenNaZanyatost({ language }) {
	return <FaqInside data={data} language={language} />
}
