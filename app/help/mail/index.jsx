import HelpItem from "@/components/helpItem"

const data = {
		id: "mail",
		title: { ru: "Почта", uz: "Pochta" },
		children: [
			{
				title: { ru: "Почта для домена", uz: "Domen uchun pochta" },
				link: "/help/mail/pochta-dlya-domena",
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
