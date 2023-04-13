import HelpItem from "@/components/helpItem"

const data = {
		id: "ftp",
		title: { ru: "FTP", uz: "FTP", en: "FTP" },
		children: [
			{
				title: { ru: "Что такое FTP?", uz: "FTP nma?", en: "What is FTP?" },
				link: "/help/ftp/chto-takoe-ftp",
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
