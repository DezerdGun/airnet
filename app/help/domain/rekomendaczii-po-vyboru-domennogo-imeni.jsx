import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Рекомендации по выбору доменного имени",
		uz: "Domen nomini tanlash bo'yicha tavsiyalar",
	},
	content: {
		ru: (
			<ul className="list">
				<li>Выбор доменной зоны помогает правильно направить клиента.</li>
				<li>
					При создании личной страницы рекомендуется выбрать доменное имя,
					связанное с именем человека, которому будет посвящён сайт.
				</li>
				<li>
					В случае создания сайта для организации доменное имя может содержать
					название организации, или сферу компании. Помимо этого эффективным
					будет применение ключевых слов и терминов, характерных для бизнеса.
				</li>
				<li>
					При выборе доменного имени, необходимо учитывать, что короткое
					доменное имя запоминается намного легче, а сайт с запоминающимся
					именем будет легче найти в поисковых системах.
				</li>
				<li>
					В случае транслитерации имени, если возникнет спорный момент в
					написании, можно зарегистрировать нескольких доменов и настроить их
					так, чтобы для всех имён открывался один сайт.
				</li>
				<li>
					Рекомендуется регистрировать доменные имена с наименьшим количеством
					символов, избегая при этом большого количества дефисов.
				</li>
			</ul>
		),
		uz: (
			<ul className="list">
				<li>
					Domen zonasini tanlash mijozni to'g'ri yo'naltirishga yordam beradi.
				</li>
				<li>
					Shaxsiy sahifani yaratishda domen nomini tanlash tavsiya etiladi, sayt
					bag'ishlangan shaxsning nomi bilan bog'liq.
				</li>
				<li>
					Tashkilot uchun sayt yaratishda domen nomi o'z ichiga olishi mumkin
					tashkilot nomi yoki kompaniya doirasi. Bunga qo'shimcha ravishda,
					samarali biznesga xos kalit so'zlar va atamalardan foydalanish
					bo'ladi.
				</li>
				<li>
					Domen nomini tanlayotganda, qisqa ekanligini yodda tuting domen nomini
					eslab qolish ancha oson va esda qolarli veb-sayt nomi qidiruv
					tizimlarida topish osonroq bo'ladi.
				</li>
				<li>
					Ism transliteratsiya qilingan taqdirda, agar nizo kelib chiqsa yozish,
					siz bir nechta domenlarni ro'yxatdan o'tkazishingiz va ularni
					sozlashingiz mumkin Shunday qilib, bitta sayt barcha nomlar uchun
					ochiladi.
				</li>
				<li>
					Eng kam sonli domen nomlarini ro'yxatdan o'tkazish tavsiya etiladi
					belgilar, shu bilan birga ko'plab defislardan qoching.
				</li>
			</ul>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
