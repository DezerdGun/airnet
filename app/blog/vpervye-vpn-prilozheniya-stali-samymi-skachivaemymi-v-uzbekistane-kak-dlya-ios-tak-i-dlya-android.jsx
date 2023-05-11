import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android",
		uz: "Birinchi marta VPN ilovalari O‘zbekistonda ham iOS, ham Android uchun eng ko‘p yuklab olingan ilovalarga aylandi",
		en: "For the first time, VPN applications have become the most downloaded in Uzbekistan for both iOS and Android",
	},
	desc: {
		ru: "Первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store — VPN Proxy Master.",
		uz: "Secure VPN Google Play-da yuklab olishlar bo'yicha 1-o'rinni egalladi va VPN Proxy Master App Store do'konida 1-o'rinni egalladi.",
		en: "Secure VPN took first place in terms of the number of downloads on Google Play, and VPN Proxy Master in the App Store.",
	},
	date: "19.12.2018",
	img: "/blog/phone-vpn.jpg",
	content: {
		ru: (
			<>
				<p>Первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store — VPN Proxy Master.</p>
				<p>
					VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android,{" "}
					<a
						href="https://www.data.ai/account/login/?next=%2Fdashboard%2Fhome"
						target="_blank"
						rel="noreferrer noopener"
					>
						свидетельствуют
					</a>
					данные сервиса аналитики мобильных приложений App Annie.
				</p>
				<p>
					Начиная с сентября владельцы телефонов на iOS{" "}
					<a href="https://www.spot.uz/ru/2018/09/20/vpn/" target="_blank" rel="noreferrer noopener">
						скачивают
					</a>{" "}
					VPN Proxy Master от студии All Connected. Приложение иногда опускается ниже 5 места, но практически не выходит
					из топ-10. Теперь в тройку самых скачиваемых вошло еще и VPN Super Unlimited от студии Mobile Jump.
				</p>
				<p>
					Начиная с ноября массово скачивать VPN-приложения стали и владельцы телефонов на Android (до этого
					VPN-приложения не входили в топ-10). В частности, пользователи активно устанавливают Thunder VPN и Secure VPN
					от студии Signal Lab.
				</p>
				<p>
					На 15−18 декабря первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store — VPN
					Proxy Master. Таким образом, впервые VPN-приложения одновременно стали самыми скачиваемыми как среди
					владельцем телефонов на iOS, так и Android в Узбекистане.
				</p>
				<p>
					Причем второе место в Google Play также занимает VPN-приложение — Thunder VPN, а в App Store — третье (VPN
					Super Unlimited). Конкуренцию им иногда составляют «Яндекс.Музыка», SHAREit, Telegram, Instagram, Plus
					Messenger и imo.
				</p>
				<p>
					Ранее Spot писал, что в Узбекистане наблюдаются проблемы с доступом к Facebook, YouTube и нескольким другим
					сайтам. В правительстве сообщали, что работают над решением проблемы, пока что пользователи пытаются сами
					решить ее установкой VPN.
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
				<p>
					Google Play-da yuklab olishlar soni bo'yicha birinchi o'rinni Secure VPN egalladi, va App Store do'konida -
					VPN Proxy Master.
				</p>
				<p>
					VPN ilovalari Oʻzbekistonda ikkala iOS uchun ham eng koʻp yuklab olingan ilovalarga aylandi. Android uchun
					shunday,App Annie mobil ilovasi tahlili ma'lumotlari{" "}
					<a
						href="https://www.data.ai/account/login/?next=%2Fdashboard%2Fhome"
						target="_blank"
						rel="noreferrer noopener"
					>
						guvohlik beredi
					</a>
					.
				</p>
				<p>
					sentyabr oyidan boshlab iOS telefonlari egalari{" "}
					<a href="https://www.spot.uz/ru/2018/09/20/vpn/" target="_blank" rel="noreferrer noopener">
						ko'chirib olishadi
					</a>{" "}
					All Connected Studio tomonidan VPN Proksi Master. Ilova ba'zida ishdan chiqadi 5-o'rindan pastda, lekin amalda
					birinchi 10talikni tark etmaydi. Endi uchtada Mobil studiodan eng ko'p yuklab olingan VPN Super Unlimited ham
					mavjud sakramoq.
				</p>
				<p>
					Noyabr oyidan boshlab egalar VPN ilovalarini ommaviy ravishda yuklab olishni boshladilar Android telefonlari
					(bundan oldin VPN ilovalari eng yaxshi 10 talikka kirmagan). IN xususan, foydalanuvchilar Thunder VPN va
					Secure VPN-ni faol ravishda o'rnatmoqda Signal Lab tomonidan.
				</p>
				<p>
					15-18 dekabr kunlari Google Play-da yuklab olishlar soni bo'yicha birinchi o'rin Secure VPN-ni egalladi va App
					Store-da - VPN Proxy Master. Shunday qilib, Birinchi marta VPN ilovalari bir vaqtning o'zida eng ko'p yuklab
					olinganlarga aylandi O‘zbekistondagi iOS va Android telefonlari egalari orasida.
				</p>
				<p>
					Bundan tashqari, Google Play-da ikkinchi o'rinni VPN ilovasi ham egallaydi - Thunder VPN va App Store
					do'konida - uchinchi (VPN Super Unlimited). musobaqa ular ba'zan Yandex.Music, SHAREit, Telegram, Instagram,
					Bundan tashqari, Messenger va imo.
				</p>
				<p>
					Avvalroq Spot O‘zbekistonda kirishda muammolar borligi haqida yozgan edi Facebook, YouTube va boshqa bir
					qancha saytlar. Hukumatda Hozirgacha foydalanuvchilar muammoni hal qilish ustida ishlayotganliklarini xabar
					qilishdi VPN o'rnatish orqali uni hal qilishga urinish.
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
				<p>Secure VPN ranked first in the number of downloads on Google Play, and VPN Proxy Master on the App Store.</p>
				<p>
					VPN applications have become the most downloaded in Uzbekistan for both iOS and Android,{" "}
					<a
						href="https://www.data.ai/account/login/?next=%2Fdashboard%2Fhome"
						target="_blank"
						rel="noreferrer noopener"
					>
						testify
					</a>
					App Annie mobile app analytics data.
				</p>
				<p>
					Starting in September, iOS phone owners{" "}
					<a href="https://www.spot.uz/en/2018/09/20/vpn/" target="_blank" rel="noreferrer noopener">
						download
					</a>{" "}
					VPN Proxy Master by All Connected Studio. The application sometimes falls below 5th place, but almost never
					leaves from the top 10. Now VPN Super Unlimited from the Mobile Jump studio has also entered the top three
					most downloaded.
				</p>
				<p>
					Starting in November, Android phone owners began to massively download VPN applications (before that VPN apps
					were not in the top 10). In particular, users are actively installing Thunder VPN and Secure VPN by Signal
					Lab.
				</p>
				<p>
					On December 15-18, Secure VPN took the first place in terms of the number of downloads in Google Play, and VPN
					in the App Store Proxy Master. Thus, for the first time, VPN applications simultaneously became the most
					downloaded among both the owner of iOS and Android phones in Uzbekistan.
				</p>
				<p>
					Moreover, the second place in Google Play is also occupied by a VPN application - Thunder VPN, and in the App
					Store - the third (VPN Super Unlimited). They sometimes compete with Yandex.Music, SHAREit, Telegram,
					Instagram, Plus messenger and imo.
				</p>
				<p>
					Earlier, Spot wrote that in Uzbekistan there are problems with access to Facebook, YouTube and several others.
					sites. The government reported that they are working on a solution to the problem, while users are trying to
					Solve it by installing a VPN.
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
	prev: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
	next: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
