import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Как долго хранятся учётные записи VDS?",
		uz: "VDS hisoblari qancha vaqt saqlanadi?",
		en: "How long are VDS accounts kept?",
	},
	content: {
		ru: (
			<p>
				После блокировки услуги, учётная запись VDS хранится на наших серверах 30 дней. Если в течении этого периода
				денежные средства не поступят, сервис и все данные будут безвозвратно удалены с наших серверов в соответствии с
				условиями договора.
			</p>
		),
		uz: (
			<p>
				Xizmatni bloklagandan so'ng, VDS hisob qaydnomasi bizning serverlarimizda 30 kun davomida saqlanadi. Agar bu
				davrda mablag' olinmaydi, xizmat va barcha ma'lumotlar bizning serverlarimizdan butunlay o'chiriladi shartnoma
				shartlariga muvofiq.
			</p>
		),
		en: (
			<p>
				After blocking the service, the VDS account is stored on our servers for 30 days. If during this period funds
				will not be received, the service and all data will be permanently deleted from our servers in accordance with
				the terms of the contract.
			</p>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
