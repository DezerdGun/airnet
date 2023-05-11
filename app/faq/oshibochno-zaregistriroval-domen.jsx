import FaqInside from "@/components/faqInside"

const data = {
	title: {
		ru: "Ошибочно зарегистрировал домен, можно ли отменить?",
		uz: "Men noto'g'ri domenni ro'yxatdan o'tkazdim, uni bekor qila olamanmi?",
		en: "I registered a domain by mistake, can I cancel it?",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: (
			<>
				<p>
					Независимо от причины отказа, внести исправления в название домена или перенести оплаченную стоимость на
					другое доменное имя <strong>невозможно</strong>!
				</p>
				<p>
					Если доменное имя было <strong>зарегистрировано</strong> в зоне .UZ возврат средств после успешной регистрации{" "}
					<strong>невозможен</strong>.
				</p>
				<p>Вы можете заказать другое доменное имя (при регистрации указав нужные вам данные) и оплатить его.</p>
			</>
		),
		uz: (
			<>
				<p>
					Rad etish sababidan qat'iy nazar, domen nomini to'g'rilash yoki to'langan narxni boshqa domen nomiga o'tkazish{" "}
					<strong>mumkin emas</strong>!
				</p>
				<p>
					Agar domen UZ da muvaffaqiyatli <strong>royxatdan otqazilgan</strong> bolsa to'lovni qaytarish{" "}
					<strong>mumkin emas</strong>.
				</p>
				<p>
					Siz boshqa domen nomiga buyurtma berishingiz mumkin (ro'yxatdan o'tish paytida, kerakli ma'lumotlaringiz
					ko'rsating ) va bu uchun alohida to'lov mavjud.
				</p>
			</>
		),
		en: (
			<>
				<p>
					Regardless of the reason for the rejection, correct the domain name or transfer the paid price to another
					domain name <strong>impossible</strong>!
				</p>
				<p>
					If the domain name was <strong>registered</strong> in the .UZ zone refund after successful registration{" "}
					<strong>not possible</strong>.
				</p>
				<p>You can order another domain name (during registration, specifying the required you data) and pay for it.</p>
			</>
		),
	},
}

export default function OshibochnoZaregistrirovalDomen({ language }) {
	return <FaqInside data={data} language={language} />
}
