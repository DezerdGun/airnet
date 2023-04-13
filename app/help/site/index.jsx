import HelpItem from "@/components/helpItem"

const data = {
		id: "site",
		title: { ru: "Технические вопросы", uz: "Texnik savollar", en: "Technical questions" },
		children: [
			{
				title: { ru: "Файл .htaccess", uz: "Fayl .htaccess", en: ".htaccess file" },
				link: "/help/site/file-htaccess",
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
