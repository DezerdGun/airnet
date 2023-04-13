import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Нужно ли вводить данные паспорта для регистрации?",
		uz: "Ro'yxatdan o'tish uchun pasport ma'lumotlarini kiritishim kerakmi?",
		en: "Do I need to enter passport data for registration?",
	},
	content: {
		ru: (
			<p>
				В случае регистрации домена копия паспорта является необходимым документов, для регистрации домена в зоне UZ.
				Это требование главного регистратора доменов в зоне UZ cctld.uz
			</p>
		),
		uz: (
			<p>
				Domenni ro'yxatdan o'tkazishda pasport nusxasi zonada domenni ro'yxatdan o'tkazish uchun zaruriy hujjatdir BIZ.
				Bu UZ cctld.uz zonasidagi domenlar bosh registratorining talabi
			</p>
		),
		en: (
			<p>
				In case of domain registration, a copy of the passport is necessary documents for registering a domain in the UZ
				zone. This is the main requirement domain registrar in the zone UZ cctld.uz
			</p>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
