import HelpItem from "@/components/helpItem"

const data = {
		id: "ftp",
		title: "FTP",
		children: [
			{
				title: { ru: "Что такое FTP", uz: "FTP nma?" },
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
