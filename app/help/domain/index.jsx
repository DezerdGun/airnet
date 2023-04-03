import HelpItem from "@/components/helpItem"

const data = {
		id: "domain",
		title: { ru: "Домены", uz: " Domenlar" },
		children: [
			{
				title: { ru: "Наши DNS-записи", uz: "Bizning DNS youzvlarimiz" },
				link: "/help/domain/dns",
			},
			{
				title: {
					ru: "Как зарегистрировать домен?",
					uz: "Domenni qanday royhatdan otqazish",
				},
				link: "/help/domain/kak-zaregistrirovat-domen",
			},
			{
				title: {
					ru: "Рекомендации по выбору доменного имени",
					uz: "Domen nomini tanlash bo'yicha tavsiyalar",
				},
				link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
			},
			{
				title: {
					ru: "Нужно ли вводить данные паспорта для регистрации?",
					uz: "Ro'yxatdan o'tish uchun pasport ma'lumotlarini kiritishim kerakmi?",
				},
				link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
			},
		],
	},
	mainData = {
		headTitle: data.title,
		content: data,
	}

export default function HelpInner({ language }) {
	return <HelpItem data={mainData} language={language} />
}
