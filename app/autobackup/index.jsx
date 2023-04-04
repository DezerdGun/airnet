import { checkLang } from "@/utils/checkLang.js"
import Link from "next/link"
import Container from "../../components/container/index.jsx"
import Partners from "../../components/partners"
import { LINKS } from "../../components/requirements"
import WhyBlock from "../../components/whyBlock"
import st from "./autobackup.module.scss"

export default function Autobackup({ language }) {
	const content = [
		{
			title: { ru: "Независимые серверы", uz: "Mustaqil severlar" },
			description: {
				ru: "Копии хранятся на отдельном VDS: сможете восстановить информацию, даже если Ваш сервер выйдет из строя.",
				uz: "Nusxalari SIDSning alohida holatlarida topiladi: sizning lezyoningiz tuzilishdan kelib chiqqan bo'lsa ham, o'simta tiklanishi mumkin.",
			},

			img: "/server.png",
		},
		{
			title: { ru: "Частота обновлений", uz: "Qaytayonish soni" },
			description: {
				ru: "Полные копии создаются еженедельно, а дифференциальные - ежедневно. В случае форс-мажора восстанавливаются файты за любой день последних 5 недель.",
				uz: "To'liq zaxiralar har hafta, differensial zaxiralar esa har kuni yaratiladi. Fors-major holatlarida janglar oxirgi 5 haftaning istalgan kunida tiklanadi",
			},
			img: "/calendar.png",
		},
		{
			title: { ru: "Уведомляем об ошибках", uz: "Xatolar haqida xabar berish" },
			description: {
				ru: "Система ежедневно проверят корректную работу резервного копирования. Если что-то пойдет не так - Вы получите уведомление.",
				uz: "Tizim har kuni zahiraning to'g'ri ishlashini tekshiradi. Agar biror narsa noto'g'ri bo'lsa, sizga xabarnoma keladi.",
			},
			img: "/notification.png",
		},
		{
			title: { ru: "Фоновая загрузка", uz: "Fon yuklab olish" },
			description: {
				ru: "Копирование происходит в фоновом режиме и не требует остановки сервера или отключния сайта.",
				uz: "Nusxalash fonda amalga oshiriladi va serverni o'chirish yoki saytni o'chirishni talab qilmaydi.",
			},
			img: "/cloud.png",
		},
	]
	const langData = {
		title: {
			ru: "Преимущества автобэкапов",
			uz: "Autobackupning avfzalliklari",
		},
		headTitle: {
			ru: "Автоматическое резервное копирование",
			uz: "Avtomatik zaxiralash",
		},
		about: {
			ru: "Об услуге",
			uz: "Hizmatlar haqida",
		},
		autoDownload: {
			ru: "Автоматические бэкапы позволят вам не беспокоиться о том, что вы забыли или не успели сделать бэкап.",
			uz: "Avtomatik zahira nusxalari siz unutgan yoki vaqtingiz yo'qligi haqida tashvishlanmaslik imkonini beradi zaxira nusxasini yarating.",
		},
		hack: {
			ru: "В случае взлома, случайного удаления или неудачного обновления у вас под рукой будет свежая копия для быстрого восстановления данных.",
			uz: "Buzg'unchilik, tasodifiy o'chirish yoki muvaffaqiyatsiz yangilanish holatlarida sizda shunday bo'ladi tez ma'lumotlarni tiklash uchun yangi nusxasi.",
		},
		join: {
			ru: "Как подключить бэкапы?",
			uz: "Qanday qilib ulanish",
		},
	}
	return (
		<div className={st.autobackup}>
			<Container headTitle={langData.headTitle[language]}>
				<div className={st.autobackup__info}>
					<div className={st.autobackup__info__content}>
						<h3>{langData.about[language]}</h3>
						<p>{langData.autoDownload[language]}</p>
						<p>{langData.hack[language]}</p>
						<Link href={checkLang(language) + LINKS.HELP}>
							<a>{langData.join[language]}</a>
						</Link>
					</div>
					<div className={st.autobackup__info__img}>
						<img src="/intro-img.png" />
					</div>
				</div>
			</Container>
			<WhyBlock
				title={langData.title[language]}
				content={content}
				language={language}
			/>
			<Partners />
		</div>
	)
}
