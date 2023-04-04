import HelpItem from "@/components/helpItem"

const data = {
		id: "vds",
		title: { ru: "VDS", uz: "VDS" },
		children: [
			{
				title: {
					ru: "Необходимые навыки для работы с VDS",
					uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
				},
				link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
			},
			{
				title: {
					ru: "Смена тарифного плана на VDS",
					uz: "Tarif rejasini VDS ga o'zgartirish",
				},
				link: "/help/vds/smena-tarifnogo-plana-na-vds",
			},
			{
				title: {
					ru: "Как долго хранятся учётные записи VDS?",
					uz: "VDS hisoblari qancha vaqt saqlanadi?",
				},
				link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
			},
			{
				title: {
					ru: "Восстановление root пароля от VDS",
					uz: "VDS ning root parolni tiklash",
				},
				link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
			},
			{
				title: {
					ru: "Перенос аккаунта на VDS",
					uz: "Hisobni VDS-ga o'tkazish",
				},
				link: "/help/vds/perenos-akkaunta-na-vds",
			},
			{
				title: {
					ru: "Преимущества VDS и VPS-серверов",
					uz: "VDS va VPS serverlarining afzalliklari",
				},
				link: "/help/vds/preimushhestva-vds-i-vps-serverov",
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
