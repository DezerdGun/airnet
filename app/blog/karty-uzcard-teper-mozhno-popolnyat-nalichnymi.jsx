import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Карты UzCard теперь можно пополнять наличными",
		uz: "UzCard kartalarini endi naqd pulda to‘ldirish mumkin",
	},
	decs: {
		ru: "В компании сообщили, что запустили в банкоматах функцию cash-in. Пока такую функцию поддерживают банкоматы пяти банков.",
		uz: "Kompaniya bankomatlarda naqd pul olish funksiyasini ishga tushirganini aytdi. Hozirgacha beshta bankning bankomatlari bu funksiyani qo'llab-quvvatlamoqda",
	},
	date: "27 Дек 2018",
	img: "/blog/uzcard.jpg",
	content: {
		ru: (
			<>
				<p>
					В компании сообщили, что запустили в банкоматах функцию cash-in. Пока
					такую функцию поддерживают банкоматы пяти банков.
				</p>
				<p>
					Карты UzCard теперь можно пополнять наличными, сообщили в Едином
					общереспубликанском процессинговом центре.
				</p>
				<p>
					«Отныне держателям карт не придется ехать в свой обслуживающий банк,
					для того чтобы пополнить свою карту наличными средствами, потому что
					мы представляем банкоматы с функцией cash-in», — говорится в
					сообщении.
				</p>
				<p>
					Раньше в банкоматах можно было лишь снимать наличные с карты
					(cash-out), но теперь, при помощи банкоматов модели NCR SelfServ 6632,
					можно делать и то, и другое, а также конвертировать наличную
					иностранную валюту в сумы.
				</p>
				<p>
					В UzCard отмечают, что курс валюты устанавливается банком,
					обслуживающий банкомат, комиссия с держателя карты не взимается.
				</p>
				<p>Банки, чьи банкоматы поддерживают функцию cash in:</p>

				<ul>
					<li>Agrobank </li>
					<li>Народный банк </li>
					<li>Ravnaq-bank </li>
					<li>KDB </li>
					<li>Hi-Tech bank </li>
				</ul>
				<p>
					О том, что Узбекистане появятся банкоматы, через которые можно будет
					наличными пополнить счет на карте, Spot писал еще в марте. В UzCard
					тогда отмечали, что это связано с ростом у населения потребности в
					такой услуге.
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
					Kompaniya bankomatlarda naqd pul olish funksiyasini ishga tushirganini
					e'lon qildi. Xayr Ushbu funktsiya beshta bankning bankomatlari
					tomonidan qo'llab-quvvatlanadi.
				</p>
				<p>
					UzCard kartalarini endi naqd pulda to'ldirish mumkin, Yunayted
					umummilliy protsessing markazi.
				</p>
				<p>
					Bundan buyon karta egalari xizmat ko‘rsatuvchi bankiga borishlari
					shart emas. kartangizni naqd pul bilan to'ldirish uchun, chunki Biz
					naqd pul olish funksiyasiga ega bankomatlarni taqdim etamiz”, -
					deyiladi xabarda xabar.
				</p>
				<p>
					Ilgari bankomatlar faqat kartadan naqd pul yechib olishlari mumkin
					edi. (naqd pul chiqarish), lekin hozir NCR SelfServ 6632
					bankomatlaridan foydalangan holda, siz ikkalasini ham qilishingiz
					mumkin, shuningdek, naqd pulni konvertatsiya qilishingiz mumkin so'mda
					xorijiy valyuta.
				</p>
				<p>
					UzCard qayd etishicha, valyuta kursi bank tomonidan belgilanadi,
					bankomatga xizmat ko'rsatish, karta egasidan komissiya olinmaydi.
				</p>
				<p>Bankomatlari naqd pul o'tkazishni qo'llab-quvvatlaydigan banklar:</p>

				<ul>
					<li>Agrobank </li>
					<li>Xalq banki </li>
					<li>Ravnaq-bank </li>
					<li>KDB </li>
					<li>Hi-Tech bank </li>
				</ul>
				<p>
					O‘zbekistonda bankomatlar paydo bo‘lishi, ular orqali buni amalga
					oshirish mumkinligi haqida kartaga naqd pul to'ldirish, Spot mart
					oyida javob yozgan. UzCard kartasiga keyin bu ehtiyoj ortib
					borayotganligi bilan bog'liqligi qayd etildi bunday xizmat.
				</p>
				<p>
					Manba'a uhun link{" "}
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
	prev: "/blog/vkontakte-zavela-profil-v-instagram",
	next: "/blog/financial-times-soobshhaet-chto-majnery-zakryvayut-biznes-tak-kak-bitkoin-stal-deshevle-stoimosti-ego-dobychi",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
