import FaqInside from "@/components/faqInside"

const data = {
	title: {
		ru: "Правила регистрации доменных имен в зоне .UZ",
		uz: "UZ zonasida domen nomlarini ro'yxatdan o'tkazish qoidalari",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: (
			<>
				<p> Зарегистрировать домен .UZ может гражданин любой страны.</p>
				<p>
					Для доменов .UZ после окончания регистрации наступает{" "}
					<strong>период продления</strong>, который продолжается 30 дней с
					момента окончания регистрации. В течение этого периода действующий
					администратор домена может продлить домен.
				</p>
				<p>
					Пользователь обязан предоставить регистратору достоверные сведения
					паспортные данные, установленных Правилами и договором, а также
					своевременно извещать регистратора об изменении предоставленных им
					сведений и предоставлять регистратору по его запросу подтверждающие
					документы.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					{" "}
					Istalgan davlat fuqarosi .UZ domenini ro‘yxatdan o‘tkazishi mumkin.
				</p>
				<p>
					UZ domenlari uchun roʻyxatdan oʻtgandan soʻng,{" "}
					<strong>ishlash muddati</strong>, 30 kun davom etadi. Bu davrda joriy
					domen administratori domenni yangilashi mumkin.
				</p>
				<p>
					Foydalanuvchi registratorga ishonchli ma'lumotlarni taqdim etishi
					shart Qoidalar va shartnomada belgilangan pasport ma'lumotlari,
					shuningdek ro'yxatga oluvchini o'z vaqtida xabardor qilish
					ma'lumotlarni taqdim etish va ro'yxatdan o'tkazuvchiga uning
					iltimosiga binoan tasdiqlash hujjatlari kerak boladi.
				</p>
			</>
		),
	},
}

export default function PraviloRegistraciiDomenavZoneUz({ language }) {
	return <FaqInside data={data} language={language} />
}
