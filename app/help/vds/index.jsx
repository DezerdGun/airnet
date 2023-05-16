import HelpItem from "@/components/helpItem"

const data = {
		id: "vds",
		title: { ru: "VDS", uz: "VDS", en: "VDS" },
		children: [
			{
				title: {
					ru: "Необходимые навыки для работы с VDS",
					uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
					en: "Necessary skills to work with VDS",
				},
				link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
			},
			{
				title: {
					ru: "Смена тарифного плана на VDS",
					uz: "Tarif rejasini VDS ga o'zgartirish",
					en: "Change tariff plan to VDS",
				},
				link: "/help/vds/smena-tarifnogo-plana-na-vds",
			},
			{
				title: {
					ru: "Как долго хранятся учётные записи VDS?",
					uz: "VDS hisoblari qancha vaqt saqlanadi?",
					en: "How long are VDS accounts kept?",
				},
				link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
			},
			{
				title: {
					ru: "Восстановление root пароля от VDS",
					uz: "VDS ning root parolni tiklash",
					en: "Recovery of root password from VDS",
				},
				link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
			},
			{
				title: {
					ru: "Перенос аккаунта на VDS",
					uz: "Hisobni VDS-ga o'tkazish",
					en: "Account transfer to VDS",
				},
				link: "/help/vds/perenos-akkaunta-na-vds",
			},
			{
				title: {
					ru: "Преимущества VDS и VPS-серверов",
					uz: "VDS va VPS serverlarining afzalliklari",
					en: "Advantages of VDS and VPS servers",
				},
				link: "/help/vds/preimushhestva-vds-i-vps-serverov",
			},
			{
				title: {
					ru: "",
					uz: "",
					en: "",
				},
				link: "/help/vds/connect-to-server",
			},
			{
				title: {
					ru: "",
					uz: "",
					en: "",
				},
				link: "/help/vds/manage-server-vnc",
			},
			{
				title: {
					ru: "",
					uz: "",
					en: "",
				},
				link: "/help/vds/backups-server",
			},
			{
				title: {
					ru: "",
					uz: "",
					en: "",
				},
				link: "/help/vds/windows",
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
