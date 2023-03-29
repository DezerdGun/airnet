import FaqInside from "@/components/faqInside"

const data = {
	title: {
		ru: "Ошибочно зарегистрировал домен, можно ли отменить?",
		uz: "Men noto'g'ri domenni ro'yxatdan o'tkazdim, uni bekor qila olamanmi?",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: (
			<>
				<p>
					Независимо от причины отказа, внести исправления в название домена или
					перенести оплаченную стоимость на другое доменное имя{" "}
					<strong>невозможно</strong>!
				</p>
				<p>
					Если доменное имя было <strong>зарегистрировано</strong> в зоне .UZ
					возврат средств после успешной регистрации <strong>невозможен</strong>
					.
				</p>
				<p>
					Вы можете заказать другое доменное имя (при регистрации указав нужные
					вам данные) и оплатить его.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Rad etish sababidan qat'iy nazar, domen nomini to'g'rilang yoki
					to'langan narxni boshqa domen nomiga o'tkazish{" "}
					<strong>mumkin emas</strong>!
				</p>
				<p>
					Agar domen UZ da <strong>royxatdan otqazilgan</strong> bolsa
					muvaffaqiyatli ro'yxatdan o'tgandan keyin to'lovni qaytarish{" "}
					<strong>mumkin emas</strong>.
				</p>
				<p>
					Siz boshqa domen nomiga buyurtma berishingiz mumkin (ro'yxatdan o'tish
					paytida, kerakli ma'lumotlaringiz ko'rsating ) va bu uchun alohida
					to'lov mavjud.
				</p>
			</>
		),
	},
}

export default function OshibochnoZaregistrirovalDomen({ language }) {
	return <FaqInside data={data} language={language} />
}
