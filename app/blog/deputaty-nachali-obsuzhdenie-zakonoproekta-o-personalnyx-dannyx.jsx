import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Депутаты начали обсуждение законопроекта «О персональных данных»",
		uz: "Deputatlar “Shaxsiy ma’lumotlar to‘g‘risida”gi qonun loyihasini muhokama qilishga kirishdilar.",
	},
	decs: {
		ru: "Сейчас персональные данные в Узбекистане слабо защищены, но скоро это изменится.",
		uz: "Hozirda Oʻzbekistonda shaxsiy maʼlumotlar yomon himoyalangan, biroq bu tez orada oʻzgaradi",
	},
	date: { ru: "29 Дек 2018", uz: "29-dekabr 2018" },
	img: "/blog/personal-security.jpg",
	content: {
		ru: (
			<>
				<p>
					Сейчас персональные данные в Узбекистане слабо защищены, но скоро это
					изменится.
				</p>
				<p>
					25 декабря 2018 года состоялось очередное заседание Законодательной
					палаты Олий Мажлиса. В нем депутаты рассмотрели ряд законопроектов,
					направленных на правовое обеспечение реформ, осуществляемых в
					социальной, экономической, судебно-правовой сферах страны, сообщает
					пресс-служба палаты.
				</p>
				<p>
					Одним из проектов стал закон «О персональных данных», который был
					разработан еще в мае.
				</p>
				<p>
					В документе давалось четкое определение таким понятиям как
					«персональные данные», «оператор базы персональных данных», а также
					сбора, хранения, обработки и уничтожения персональных данных.
				</p>
				<p>
					Депутаты отметили, что законопроект обеспечит граждан возможностью
					контроля своих персональных данных.
				</p>
				<p>
					«Вместе с тем, упростит доступ к ним и, как следствие, упростит
					процедуры международной передачи персональных данных, гарантируя
					защиту персональных данных граждан вне зависимости от того, где они
					обрабатываются», — отмечается в сообщении.
				</p>
				<p>
					Ожидается, что это поспособствует предотвращению возможных нарушений,
					которые могут причинить вред гражданам, в части нерушимости прав на
					неприкосновенность частной жизни.
				</p>
				<p>
					В проекте отмечалось, что использовать персональные данные можно
					только для ранее заявленных целей их сбора, при условии, что будет
					обеспечен необходимый уровень их защищенности. Согласно документу,
					если меняется цель обработки данных, люди, чья персональная информация
					используется, должны дать на это согласие.
				</p>
				<p>
					Без согласия человека запрещается любое использование его персональных
					данных. Исключение — случаи, когда обработка данных проводится
					правоохранительными органами в рамках уголовного дела, при
					противодействии легализации доходов, полученных от преступной
					деятельности, а также если данные находятся в общественном доступе.
				</p>
				<p>
					Правда, разработчики ссылались тогда на закон Казахстана «Об
					информатизации», который, к тому же, утратил свою силу. Также
					оставалось непонятным, как будет регулироваться обработка
					интернет-ресурсами личной информации пользователей.
				</p>
				<p>
					Ссылка на источник{" "}
					<a
						href="https://www.spot.uz/ru"
						target="_blank"
						rel="noreferrer noopener"
					>
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Hozirda O‘zbekistonda shaxsiy ma’lumotlar yomon himoyalangan, biroq bu
					tez orada o‘zgaradi.
				</p>
				<p>
					2018-yil 25-dekabr kuni Oliy Majlis Qonunchilik palatasining
					navbatdagi majlisi bo‘lib o‘tdi. Unda deputatlar bor yilda amalga
					oshirilayotgan islohotlarni huquqiy jihatdan ta’minlashga qaratilgan
					qator qonun loyihalari ko‘rib chiqildi mamlakatimizning ijtimoiy,
					iqtisodiy, sud-huquq sohalari, deb xabar beradi palata matbuot
					xizmati.
				</p>
				<p>
					Loyihalardan biri may oyida ishlab chiqilgan "Shaxsiy ma'lumotlar
					to'g'risida" gi qonun edi.
				</p>
				<p>
					Hujjatda "shaxsiy ma'lumotlar", "baza operatori" kabi tushunchalarga
					aniq ta'rif berilgan shaxsiy ma'lumotlar", shuningdek shaxsiy
					ma'lumotlarni to'plash, saqlash, qayta ishlash va yo'q qilish.
				</p>
				<p>
					Deputatlar qonun loyihasi fuqarolarga shaxsiy ma’lumotlarini nazorat
					qilish imkoniyatini berishini ta’kidladilar.
				</p>
				<p>
					Shu bilan birga, bu ularga kirishni soddalashtiradi va natijada
					xalqaro o'tkazish tartib-qoidalarini soddalashtiradi. qayerda
					bo'lishidan qat'i nazar, fuqarolarning shaxsiy ma'lumotlarini himoya
					qilishni kafolatlaydigan shaxsiy ma'lumotlar qayta ishlandi”, —
					deyiladi xabarda.
				</p>
				<p>
					Bu zarar keltirishi mumkin bo'lgan huquqbuzarliklarning oldini olishga
					yordam berishi kutilmoqda. fuqarolarning shaxsiy daxlsizlik huquqining
					daxlsizligi nuqtai nazaridan.
				</p>
				<p>
					Loyihada qayd etilishicha, shaxsiy ma’lumotlardan faqat avvalroq
					belgilangan maqsadlarda foydalanish mumkin ularning xavfsizligining
					zarur darajasi ta'minlangan taqdirda yig'ish. Hujjatga ko'ra, agar
					ma'lumotlarni qayta ishlash maqsadi o'zgarganda, shaxsiy
					ma'lumotlardan foydalanilgan odamlar buni berishi kerak kelishuv.
				</p>
				<p>
					Shaxsning roziligisiz uning shaxsiy ma'lumotlaridan har qanday
					foydalanish taqiqlanadi. Istisno holatlardir ma'lumotlarga ishlov
					berish jinoyat ishi doirasida huquqni muhofaza qiluvchi organlar
					tomonidan amalga oshirilganda, jinoyatdan olingan daromadlarni
					legallashtirishga qarshi kurashish, shuningdek, agar ma'lumotlar
					jamoat mulki hisoblanadi.
				</p>
				<p>
					To'g'ri, ishlab chiquvchilar keyin Qozog'istonning "Axborotlashtirish
					to'g'risida"gi qonuniga murojaat qilishdi, bundan tashqari, kuchini
					yo‘qotdi. Internet-resurslarni qayta ishlash qanday tartibga solinishi
					ham noaniqligicha qoldi. foydalanuvchilarning shaxsiy ma'lumotlari.
				</p>
				<p>
					Manba'a uchun link{" "}
					<a
						href="https://www.spot.uz/ru"
						target="_blank"
						rel="noreferrer noopener"
					>
						Spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
	next: "/blog/vkontakte-zavela-profil-v-instagram",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
