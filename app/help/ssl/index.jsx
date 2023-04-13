import HelpItem from "@/components/helpItem"

const data = {
		id: "ssl",
		title: { ru: "SSL-сертификаты", uz: "SSL-sertifikatlari", en: "SSL certificates" },
		children: [
			{
				title: {
					ru: "Зачем нужен SSL-сертификат?",
					uz: "Nma uchun SSL-sertifikati kerak?",
					en: "Why do I need an SSL certificate",
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
