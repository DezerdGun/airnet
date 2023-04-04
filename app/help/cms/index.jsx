import HelpItem from "@/components/helpItem"

const data = {
		id: "cms",
		title: { ru: "CMS", uz: "CMS" },
		children: [
			{
				title: { ru: "Что такое CMS", uz: "CMS nima" },
				link: "/help/cms/chto-takoe-cms",
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
