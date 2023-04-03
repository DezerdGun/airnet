import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Как долго хранятся учётные записи VDS?",
		uz: "VDS hisoblari qancha vaqt saqlanadi?",
	},
	content: {
		ru: (
			<p>
				После блокировки услуги, учётная запись VDS хранится на наших серверах
				30 дней. Если в течении этого периода денежные средства не поступят,
				сервис и все данные будут безвозвратно удалены с наших серверов в
				соответствии с условиями договора.
			</p>
		),
		uz: (
			<p>
				Xizmatni bloklagandan so'ng, VDS hisob qaydnomasi bizning
				serverlarimizda 30 kun davomida saqlanadi. Agar bu davrda mablag'
				olinmaydi, xizmat va barcha ma'lumotlar bizning serverlarimizdan
				butunlay o'chiriladi shartnoma shartlariga muvofiq.
			</p>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
