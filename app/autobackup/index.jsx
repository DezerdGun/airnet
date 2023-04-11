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
			title: { ru: "Независимые серверы", uz: "Mustaqil severlar", en: "Independent Servers" },
			description: {
				ru: "Копии хранятся на отдельном VDS: сможете восстановить информацию, даже если Ваш сервер выйдет из строя.",
				uz: "Nusxalari SIDSning alohida holatlarida topiladi: sizning lezyoningiz tuzilishdan kelib chiqqan bo'lsa ham, o'simta tiklanishi mumkin.",
				en: "Copies are stored on a separate VDS: you can recover information even if your server goes down.",
			},
			img: "/server.png",
		},
		{
			title: { ru: "Частота обновлений", uz: "Qaytayonish soni", en: "Update frequency" },
			description: {
				ru: "Полные копии создаются еженедельно, а дифференциальные - ежедневно. В случае форс-мажора восстанавливаются файты за любой день последних 5 недель.",
				uz: "To'liq zaxiralar har hafta, differensial zaxiralar esa har kuni yaratiladi. Fors-major holatlarida janglar oxirgi 5 haftaning istalgan kunida tiklanadi",
				en: "Full backups are created weekly, and differential backups are created daily. In case of force majeure, fights are restored for any day of the last 5 weeks.",
			},
			img: "/calendar.png",
		},
		{
			title: { ru: "Уведомляем об ошибках", uz: "Xatolar haqida xabar berish", en: "Notify Errors" },
			description: {
				ru: "Система ежедневно проверят корректную работу резервного копирования. Если что-то пойдет не так - Вы получите уведомление.",
				uz: "Tizim har kuni zahiraning to'g'ri ishlashini tekshiradi. Agar biror narsa noto'g'ri bo'lsa, sizga xabarnoma keladi.",
				en: "The system will check the correct operation of the backup daily. If something goes wrong, you will receive a notification.",
			},
			img: "/notification.png",
		},
		{
			title: { ru: "Фоновая загрузка", uz: "Fon yuklab olish", en: "Background download" },
			description: {
				ru: "Копирование происходит в фоновом режиме и не требует остановки сервера или отключния сайта.",
				uz: "Nusxalash fonda amalga oshiriladi va serverni o'chirish yoki saytni o'chirishni talab qilmaydi.",
				en: "Copying takes place in the background and does not require stopping the server or shutting down the site.",
			},
			img: "/cloud.png",
		},
	]

	const langData = {
		title: {
			ru: "Преимущества автобэкапов",
			uz: "Autobackupning avfzalliklari",
			en: "Advantages of Autobackups",
		},
		headTitle: {
			ru: "Автоматическое резервное копирование",
			uz: "Avtomatik zaxiralash",
			en: "Auto backup",
		},
		about: {
			ru: "Об услуге",
			uz: "Hizmatlar haqida",
			en: "About service",
		},
		autoDownload: {
			ru: "Автоматические бэкапы позволят вам не беспокоиться о том, что вы забыли или не успели сделать бэкап.",
			uz: "Avtomatik zahira nusxalari siz unutgan yoki vaqtingiz yo'qligi haqida tashvishlanmaslik imkonini beradi zaxira nusxasini yarating.",
			en: "Automatic backups will allow you not to worry that you forgot or did not have time to make a backup.",
		},
		hack: {
			ru: "В случае взлома, случайного удаления или неудачного обновления у вас под рукой будет свежая копия для быстрого восстановления данных.",
			uz: "Buzg'unchilik, tasodifiy o'chirish yoki muvaffaqiyatsiz yangilanish holatlarida sizda shunday bo'ladi tez ma'lumotlarni tiklash uchun yangi nusxasi.",
			en: "In the event of a hack, accidental deletion, or failed update, you'll have a fresh copy at hand for quick data recovery.",
		},
		join: {
			ru: "Как подключить бэкапы?",
			uz: "Qanday qilib ulanish",
			en: "How to connect backups?",
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
			<WhyBlock title={langData.title[language]} content={content} language={language} />
			<Partners language={language} />
		</div>
	)
}
