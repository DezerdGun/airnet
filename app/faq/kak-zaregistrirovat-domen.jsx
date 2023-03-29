import FaqInside from "@/components/faqInside"
import { LINKS } from "@/components/requirements"
import Link from "next/link"

const data = {
	title: {
		ru: "Как зарегистрировать домен?",
		uz: "Qanday qilib domenni royxatdan o'tqazish?",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: (
			<>
				<p>
					<strong>Регистрация домена</strong> — это не покупка доменного имени
					насовсем, а его аренда на определённый срок (минимальный срок
					регистрации – 1 год, максимальный 10 лет). После регистрации домена на
					свои данные вы получаете его во временное управление, то есть
					становитесь администратором домена. Вы можете создать на домене сайт,
					почту, продлевать его регистрацию и т.д. Однако конечным владельцем
					всех доменов является организация CCTLD.uz
				</p>
				<p>
					Для регистрации домена в зоне .UZ пройдите на страницу “
					<Link href={LINKS.DOMAINS}>
						<a>купить домен</a>
					</Link>
					” проверьте свободен ли домен для регистрации и оставьте заявку, после
					оплаты с вами свяжутся менеджеры для подтверждения ваших персональных
					данных для регистрации домена.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					<strong>Domenni royxatdan otqazish</strong> — bu domen nomini cheksiz
					muddatga sotib olish emas, uning ijarasi malum bir vaqt ichida (eng
					kam muddat bu 1 yil eng uzogu bu - 10 yil) amal qiladi. Domenni
					ro'yxatdan o'tkazgandan so'ng ma'lumotlaringizni vaqtinchalik
					boshqaruvda olasiz, ya'ni domen administratoriga aylanish. Siz domenda
					veb-sayt yaratishingiz mumkin, pochta, uning ro'yxatini yangilash va
					hokazo. Biroq, yakuniy egasi barcha domenlardan CCTLD.uz tashkiloti
					hisoblanadi
				</p>
				<p>
					UZ zonasida domenni ro‘yxatdan o‘tkazish uchun{" "}
					<Link href={LINKS.DOMAINS}>
						<a>domen harid qilish</a>
					</Link>{" "}
					sahifasiga o‘ting “ ” проверьте свободен ли домен для регистрации и
					оставьте заявку, после оплаты с вами свяжутся менеджеры для
					подтверждения ваших персональных данных для регистрации домена.
				</p>
			</>
		),
	},
}

export default function KakZaregistrirovatDomen({ language }) {
	return <FaqInside data={data} language={language} />
}
