import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Нужно ли вводить данные паспорта для регистрации?",
		uz: "Ro'yxatdan o'tish uchun pasport ma'lumotlarini kiritishim kerakmi",
	},
	content: {
		ru: (
			<p>
				В случае регистрации домена копия паспорта является необходимым
				документов, для регистрации домена в зоне UZ. Это требование главного
				регистратора доменов в зоне UZ cctld.uz
			</p>
		),
		uz: (
			<p>
				Domenni ro'yxatdan o'tkazishda pasport nusxasi zonada domenni ro'yxatdan
				o'tkazish uchun zaruriy hujjatdir BIZ. Bu UZ cctld.uz zonasidagi
				domenlar bosh registratorining talabi
			</p>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
