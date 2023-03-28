import FaqInside from "@/components/faqInside"

const data = {
	title: { ru: "Что такое домен?", uz: "Domen nma?" },
	description: {
		ru: "",
		uz: "",
		en: "",
	},
	content: {
		ru: (
			<>
				<p>
					<strong>Домен</strong> — «название» сайта. Слова «домен» и «сайт»
					часто путают, но это не одно и то же. Сайт – это веб-страницы, которые
					отображаются в интернете, т. е. контент. А домен сайта – это его
					уникальный «адрес». Если у вашего сайта не будет домена, пользователи
					просто не найдут к нему дорогу и не увидят содержимое.
				</p>

				<p>
					<strong>Домены</strong> (доменное имя, доменный адрес) в интернете –
					это позывные для сайтов. Набрав в строке браузера опредёленную
					комбинацию, например, «<strong>google.com</strong>» (это и есть
					домен), мы переходим на сайт.
				</p>

				<p>
					Все домены устроены иерархически: они состоят из частей (уровней).
					Домены <strong>третьего</strong> уровня создаются на базе доменов{" "}
					<strong>второго</strong> уровня, а домены <strong>второго</strong>{" "}
					уровня – на базе доменов <strong>первого</strong>.
				</p>

				<p>
					<strong>Домен второго (третьего) уровня</strong> или – левая часть
					домена до точки. На практике это любая комбинация символов, которую мы
					придумаем для названия своего будущего сайта (<strong>test</strong>
					.airnet.uz)
				</p>

				<p>
					<strong>Домен первого уровня</strong> или{" "}
					<strong>доменная зона</strong> — правая часть домена после точки (
					<strong>airnet</strong>.uz)
				</p>

				<p>
					Домен .UZ (например, «airnet.uz») живёт <strong>1 год</strong>. Если
					вы не хотите его потерять, нужно позаботиться о продлении.
				</p>

				<p>
					Максимальный срок регистрации домена в зоне <strong>UZ</strong> до{" "}
					<strong>10 лет</strong>, позаботьтесь изначально о сроке регистрации
					вашего домена.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					<strong>Domen</strong> - bu saytning "nomi". "domen" va "sayt"
					so'zlari tez-tez chalkashib ketadi, lekin ular bir xil emas. Veb-sayt
					- bu veb-sahifa Internetda ko'rsatiladi, ya'ni kontent. Va saytning
					domeni uniki noyob "manzil". Agar saytingizda domen bo'lmasa,
					foydalanuvchilar ular shunchaki unga yo'l topa olmaydilar va mazmunini
					ko'rmaydilar.
				</p>

				<p>
					Internetdagi <strong>domenlar</strong> (domen nomi, domen manzili) –
					bu saytlar uchun chaqiruv belgilaridir. Brauzer qatoriga ma'lum bir
					narsani kiritish orqali kombinatsiya, masalan, "
					<strong>google.com</strong>" (bu domen), biz saytga o'tamiz.
				</p>

				<p>
					Barcha domenlar ierarxik tarzda joylashtirilgan: Ular qismlardan
					(darajalardan) iborat. <strong>Uchinchi </strong>darajadagi domenlar{" "}
					<strong>ikkinchi</strong> darajadagi domenlar asosida yaratiladi va{" "}
					<strong>ikkinchi</strong> darajadagi domenlar esa -{" "}
					<strong>birinchi</strong> domenlar asosida.
				</p>

				<p>
					<strong>Ikkinchi (uchinchi) darajali domen</strong> yoki - chap
					tomonda domendan nuqtagacha. Ya'ni, bu biz bilgan belgilarning har
					qanday kombinatsiyasi bo'lajak saytimiz uchun nom o'ylab topadi (
					<strong>test</strong>
					.airnet.uz)
				</p>

				<p>
					<strong>Birinchi darajali domen</strong> yoki{" "}
					<strong>Domen zonasi</strong> — nuqtadan song domennning birinchi
					qismi (<strong>airnet</strong>.uz)
				</p>

				<p>
					.UZ domeni (masalan, “airnet.uz”) <strong>1 yil</strong>gacha
					ishlaydi. Agar siz bu saytingiz haqida qaygursangiz berilgan mudddatni
					cho'zdiring
				</p>

				<p>
					<strong>UZ</strong> zonasida maksimal domenni roʻyxatdan oʻtkazish
					muddati <strong>10 yil</strong>
					gacha , birinchi orinda domeningiz ro'yxatdan o'tgan muddatiga e'tibor
					bering .
				</p>
			</>
		),
	},
}

export default function ChtoTakoeDomen({ language }) {
	return <FaqInside data={data} language={language} />
}
