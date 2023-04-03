import HelpItem from "@/components/helpItem"

const data = {
		id: "cms",
		title: "CMS",
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
