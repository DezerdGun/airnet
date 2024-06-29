import NewsItem from "@/components/newsItem"

const data = {
	title: {
		ru: "«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане",
		uz: "Yandex.Money O‘zbekistonda hamyonlarni to‘ldirish usullarini kengaytirish ustida ishlamoqda",
		en: "Yandex.Money is working on expanding the methods of replenishing wallets in Uzbekistan",
	},
	desc: {
		ru: "Сейчас в Узбекистане можно пополнить кошелек лишь через конверсионные и валютные карты.",
		uz: "Endi O‘zbekistonda hamyonni faqat konversion va valyuta kartalari orqali to‘ldirish mumkin",
		en: "Now in Uzbekistan you can replenish your wallet only through conversion and currency cards.",
	},
	date: "17.12.2018",
	img: "/blog/yandex-money.jpg",
	content: {
		ru: (
			<>
				<p>Сейчас в Узбекистане можно пополнить кошелек лишь через конверсионные и валютные карты.</p>
				<p>
					В «Яндексе.Деньгах» работают над расширением методов пополнения кошельков в Узбекистане. Об этом Spot сообщила
					Алла Савченко, директор по продуктам сервиса.
				</p>
				<p>
					Как ранее писал Spot, сервис запустил идентификацию кошельков через InfinBank. В компании подтвердили эту
					информацию и добавили, что за раз пользователь может потратить до 31 млн сумов, а с привязанной к нему
					банковской карты — до 12,5 млн сумов.
				</p>
				<p>
					Пополнить идентифицированный кошелёк можно на сайте Яндекс.Денег или в приложении сервиса для Android либо iOS
					с банковских карт Visa и Mastercard.
				</p>
				<p>
					К кошельку можно выпустить пластиковую карту Яндекс.Денег и платить с неё в интернете или торговых точках по
					всему миру, в том числе бесконтактно — через системы Apple Pay, Google Pay и Samsung Pay.
				</p>
				<p>
					Карта позволяет также снимать наличные в любых банкоматах — до 12,5 млн сумов за раз (без учёта комиссии
					сторонних партнёров за конвертацию). Сам счёт и все операции в Яндекс.Деньгах — в рублях, конвертация сумов в
					рубли происходит автоматически.
				</p>
				<p>
					«Сервис „Яндекс.Деньги“, являясь российским и работая по законам РФ, доступен везде, где есть интернет, и им
					пользуются миллионы людей из самых разных стран мира. Теперь жители Узбекистана могут легко передать свои
					данные Яндекс.Деньгам через АКБ InfinBank, чтобы идентифицировать кошелёк и пользоваться всеми его
					преимуществами. Сейчас мы работаем также над расширением списка удобных для жителей Республики методов
					пополнения кошелька», — сказала Савченко.
				</p>
				<p>
					По словам Сергея Гимадиева, заместителя председателя InfinBank, сейчас подать заявку на идентификацию
					электронного кошелька в Яндекс.Деньгах можно через любой филиал АКБ InfinBank, в будущем эта возможность
					появится и во всех наших мини-банках.
				</p>
				<p>
					«Яндекс.Деньги» — самый популярный электронный кошелёк в рунете, по данным исследования Mediascope на 2018
					год. Пользователи сервиса могут оплачивать товары и услуги на сайте сервиса, а также в мобильном приложении
					для Android или iOS. К осени 2018 года в «Яндекс.Деньгах» было зарегистрировано около 46 млн пользователей по
					всему миру.
				</p>
				<p>
					Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>Endi O‘zbekistonda hamyonni faqat konversiya orqali to‘ldirish mumkin va valyuta kartalari.</p>
				<p>
					Yandex.Money depozit usullarini kengaytirish ustida ishlamoqda hamyonlar narxi O'zbekiston. Bu haqda Spotga
					direktor Alla Savchenko ma'lum qildi xizmat ko'rsatish mahsulotlari uchun.
				</p>
				<p>
					Spot avvalroq yozganidek, xizmat orqali hamyonlarni identifikatsiyalashni boshladi infinbank. Kompaniya bu
					ma'lumotni tasdiqladi va buni qo'shimcha qildi bir marta foydalanuvchi 31 million so‘mgacha mablag‘ sarflashi
					mumkin va bilan unga bank kartasi - 12,5 million so'mgacha.
				</p>
				<p>
					Siz Yandex.Money veb-saytida yoki ichida aniqlangan hamyonni to'ldirishingiz mumkin Visa bank kartalaridan
					Android yoki iOS uchun xizmat ilovasi va mastercard.
				</p>
				<p>
					Siz hamyoningizga Yandex.Money plastik kartasini chiqarishingiz va u bilan to'lashingiz mumkin u Internetda
					yoki butun dunyo bo'ylab chakana savdo nuqtalarida, shu jumladan Apple Pay, Google Pay va Samsung Pay orqali
					kontaktsiz.
				</p>
				<p>
					Shuningdek, karta istalgan bankomatda naqd pul yechib olish imkonini beradi - 12,5 gacha bir vaqtning o'zida
					million so'm (uchinchi tomon hamkorlarining komissiyalari bundan mustasno konvertatsiya). Hisobning o'zi va
					Yandex.Money-dagi barcha operatsiyalar rublda, so'm avtomatik ravishda rublga aylantiriladi.
				</p>
				<p>
					Yandeks.Money xizmati rus tili bo'lib, Rossiya Federatsiyasi qonunlariga muvofiq ishlaydi, Internet bor joyda
					mavjud va millionlab odamlar tomonidan foydalaniladi dunyoning turli mamlakatlari. Endi O‘zbekiston xalqi
					bemalol uchun ma'lumotlaringizni InfinBank orqali Yandex.Money-ga o'tkazing hamyonni aniqlang va uning barcha
					afzalliklaridan bahramand bo'ling. Endilikda aholi uchun qulaylar ro‘yxatini kengaytirish ustida ham
					ishlayapmiz Hamyonni to'ldirish usullari respublikasi ”, dedi Savchenko.
				</p>
				<p>
					InfinBank raisi o'rinbosari Sergey Gimadievga ko'ra, hozir Yandex.Money-da elektron hamyonni identifikatsiya
					qilish uchun ariza berish InfinBankning istalgan filiali orqali bo'lishi mumkin, kelajakda bu imkoniyat barcha
					mini-banklarimizda ham paydo bo'ladi.
				</p>
				<p>
					andex.Money - RuNet-dagi eng mashhur elektron hamyon, ma'lumotlarga ko'ra 2018 yil uchun Mediascope
					tadqiqotiga ko'ra. Xizmat foydalanuvchilari mumkin xizmat veb-saytida, shuningdek mobil telefonda tovarlar va
					xizmatlar uchun to'lov Android yoki iOS uchun dastur. 2018 yilning kuziga kelib Yandex.Money-da Dunyo bo'ylab
					46 millionga yaqin foydalanuvchi ro'yxatdan o'tgan.
				</p>
				<p>
					Manba'a uchun link{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>Now in Uzbekistan you can replenish your wallet only through conversion and currency cards.</p>
				<p>
					Yandex.Money is working on expanding methods for replenishing wallets in Uzbekistan. Spot reported this Alla
					Savchenko, Service Product Director.
				</p>
				<p>
					As Spot wrote earlier, the service launched the identification of wallets through InfinBank. The company
					confirmed this information and added that a user can spend up to 31 million soums at a time, and with bank
					card - up to 12.5 million soums.
				</p>
				<p>
					You can replenish the identified wallet on the Yandex.Money website or in the service application for Android
					or iOS from Visa and Mastercard bank cards.
				</p>
				<p>
					You can issue a Yandex.Money plastic card to your wallet and pay from it on the Internet or at retail outlets
					using around the world, including contactless via Apple Pay, Google Pay and Samsung Pay.
				</p>
				<p>
					The card also allows you to withdraw cash from any ATM - up to 12.5 million soums at a time (excluding
					commission third-party partners for conversion). The account itself and all transactions in Yandex.Money are
					in rubles, soums are converted into rubles occurs automatically.
				</p>
				<p>
					“The Yandex.Money service, being Russian and operating under the laws of the Russian Federation, is available
					wherever there is Internet, and they used by millions of people around the world. Now residents of Uzbekistan
					can easily transfer their Yandex.Money data via InfinBank to identify the wallet and use all of its benefits.
					Now we are also working on expanding the list of methods convenient for residents of the Republic
					replenishment of the wallet,” said Savchenko.
				</p>
				<p>
					According to Sergey Gimadiev, Deputy Chairman of InfinBank, now apply for identification e-wallet in
					Yandex.Money is possible through any branch of InfinBank, in the future this possibility will also appear in
					all our mini-banks.
				</p>
				<p>
					Yandex.Money is the most popular e-wallet in RuNet, according to a Mediascope study for 2018 year. Users of
					the service can pay for goods and services on the website of the service, as well as in a mobile application
					for Android or iOS. By the fall of 2018, about 46 million users were registered in Yandex.Money around the
					world.
				</p>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
	next: "/blog/facebook-soobshhil-ob-oshibke",
}

export default function Blog({ language }) {
	return <NewsItem data={data} language={language} />
}
