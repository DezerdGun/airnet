import FaqInside from "@/components/faqInside"
import { LINKS } from "@/components/requirements"
import Link from "next/link"

const data = {
	title: { ri: "Как заключить договор?", uz: "Qanday qilib shartnoma tuzish" },
	description: { ru: "", uz: "" },
	content: {
		ru: (
			<>
				<p>
					Заключение двустороннего договора с нашей организацией не требуется,
					услуги предоставляются на основании публичной оферты, физическим
					лицам. Публичный договор оферты не требует подписания и имеет такую же
					юридическую силу, как и «обыкновенный» двусторонний договор. В
					соответствии со статьей 370 Гражданского кодекса Республики Узбекистан
					безусловным принятием (акцептом) условий публичного договора оферты
					считается осуществление регистрации в системе или внесение платежа в
					счет оплаты услуг. С текстом договора можно ознакомиться на{" "}
					<Link href={LINKS.OFERTA}>
						<a>по ссылке.</a>
					</Link>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Tashkilotimiz bilan ikki tomonlama shartnoma tuzish shart emas,
					xizmatlar ommaviy oferta, jismoniy shaxslar asosida taqdim etiladi .
					Taklifning ommaviy shartnomasi imzolashni talab qilmaydi va xuddi
					shunday "oddiy" ikki tomonlama shartnoma kabi yuridik kuchga ega.
					O‘zbekiston Respublikasi Fuqarolik kodeksining 370-moddasiga asosan
					ofertaning ommaviy shartnomasi shartlarini so'zsiz qabul qilish (qabul
					qilish). Tizimda ro'yxatdan o'tish yoki to'lovni amalga oshirish
					xizmat to'lovi hisobi. Shartnoma matni bilan tanishish uchun ushbu{" "}
					<Link href={LINKS.OFERTA}>
						<a>havola</a>
					</Link>
					ga o'ting{" "}
				</p>
			</>
		),
	},
}

export default function KakZaklyuchitDogovor({ language }) {
	return <FaqInside data={data} language={language} />
}
