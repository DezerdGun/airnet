import HelpItem from "@/components/helpItem"

const data = {
		id: "ssl",
		title: { ru: "SSl-сертификаты", uz: "SS1 -sertefekati" },
		children: [
			{
				title: {
					ru: "Зачем нужен SSl-сертификат",
					uz: "Nma uchun SS1-sertefekati kerak",
				},
				link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
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
