import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
		uz: "Lenovo kompaniyasi 12 Gb tezkor xotiraga ega dunyodagi birinchi smartfonni taqdim etdi",
	},
	decs: {
		ru: "Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и новейший процессор Snapdragon 855.",
		uz: "Lenovo Z5 Pro GT dunyoda birinchi bo‘lib 12 Gb tezkor xotira va eng yangi Snapdragon 855 protsessoriga ega bo‘ldi",
	},
	date: "21 Дек 2018",
	img: "/blog/lenovo-phone.jpg",
	content: {
		ru: (
			<>
				<p>
					Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и
					новейший процессор Snapdragon 855.
				</p>
				<p>
					Lenovo представила новую версию смартфона-слайдера Lenovo Z5 Pro,
					сообщается на сайте компании.
				</p>
				<p>
					Смартфон первым в мире получил 12 ГБ оперативной памяти и новейший
					процессор Snapdragon 855, уточняет Ferra.
				</p>
				<p>
					Экран сдвигается вниз, открывая доступ к фронтальной камере. Смартфон
					оснащается 6,39-дюймовым Super AMOLED-дисплеем разрешением Full HD+
					(2340×1080 пикселей), занимающим 95,06% передней панели, двойной
					основной камерой 24+16 Мп, двойной фронтальной камерой 16+8 Мп. Сканер
					отпечатков пальцев встроен под экран.
				</p>
				<p>
					Аккумулятор обладает ёмкостью 3350 мАч. Поддерживаются две SIM-карты,
					4G VoLTE, Wi-Fi (802.11 ac), Bluetooth 5, GPS + ГЛОНАСС, NFC, есть
					порт USB
					Type-C./blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora
				</p>
				<p>
					Lenovo Z5 Pro GT поступит в продажу в январе в Китае по цене $391 за
					версию 6+128 ГБ, 434 доллара за 8+128 ГБ, $492 за 8+256 ГБ, $635 за
					12+512 ГБ.
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
					Lenovo Z5 Pro GT dunyoda birinchi bo'lib 12 GB operativ xotira va
					so'nggi Snapdragon 855 protsessori.
				</p>
				<p>
					Lenovo Lenovo Z5 Pro slider smartfonining yangi versiyasini taqdim
					etdi, kompaniya saytida xabar qilingan.
				</p>
				<p>
					Smartfon dunyoda birinchi bo'lib 12 GB operativ xotiraga ega bo'ldi va
					eng yangisi Snapdragon 855 protsessori, Ferra aniqlaydi.
				</p>
				<p>
					Old kamerani ochish uchun ekran pastga siljiydi. Smartfon 6,39 dyuymli
					Full HD+ Super AMOLED displey bilan jihozlangan (2340×1080 piksel),
					old panelning 95,06% ni egallagan, ikki barobar asosiy kamera 24 + 16
					MP, ikkita old kamera 16 + 8 MP. Skaner barmoq izi ekran ostida
					qurilgan.
				</p>
				<p>
					Akkumulyator sig‘imi 3350 mA/soat. Ikkita SIM-kartani
					qo'llab-quvvatlaydi, 4G VoLTE, Wi-Fi (802.11 ac), Bluetooth 5, GPS +
					GLONASS, NFC, ha USB port
					Type-C./blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora
				</p>
				<p>
					Lenovo Z5 Pro GT yanvar oyida Xitoyda 391 dollardan sotuvga
					chiqariladi 6+128GB versiyasi, 8+128GB uchun 434 dollar, 8+256GB uchun
					492 dollar, 635 dollar uchun 12+512 GB.
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
	prev: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
	next: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
