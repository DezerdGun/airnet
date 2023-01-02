import Container from "../../components/container";
import Link from "next/link";
import Image from "next/image";
import SEO from "../../components/seo";
import st from "./anti-ddos.module.scss";
import { LINKS } from "../../components/requirements";
import WhyBlock from "../../components/whyBlock";
import Partners from "../../components/partners";

export default function AntiDDos({ language }) {
	const content = [
		{
			title: { ru: "На сайт невозможно зайти", uz: "Saytga kirishning iloji yo'q" },
			description: {
				ru: "Во время DDoS-атаки серверы не выдерживают нагрузку и сайт становится недоступен для пользователей.",
				uz: "DDos hujumi vaqtida server zoriqishni ko'tara olmaydi va mijozlar uchun hizma qila olmaydi",
			},

			//Во время DDoS-атаки серверы не выдерживают нагрузку и сайт становится недоступен для пользователей.
			//DDos hujumi vaqtida server zoriqishni ko'tara olmaydi va mijozlar uchun hizma qila olmaydi"
			img: "/notification.png",
		},
		{
			title: { ru: "Потеря клиентов", uz: "Mijozlorni yo'qotish" },
			description: {
				ru: "Клиент не будет ждать, пока сайт заработает и отправится рассматривать предложения конкурентов.",
				uz: "Mijoz sayt ishlashini kutmaydi va raqobatchilarning takliflarini ko'rib chiqishga boradi.",
			},
			img: "/user-minus.png",
		},
		{
			title: { ru: "Потеря прибыли", uz: "Foydani yo'qotish" },
			description: {
				ru: "С уходом клиентов Вы теряете заказы, а значит и прибыль, которую они могли принести.",
				uz: "Mijozlarning ketishi bilan siz buyurtmalarni va shuning uchun ular olib kelishi mumkin bo'lgan foydani yo'qotasiz.",
			},
			img: "/money.png",
		},
		{
			title: { ru: "Потеря репутации", uz: "Taniqlikni yo'qotish" },
			description: {
				ru: "Клиенты ассоциируют нерабочий сайт с Вашей компанией, таким образом Ваш бренд теряет репутацию.",
				uz: "Mijozlar ishlamaydigan saytni kompaniyangiz bilan bog'lashadi, shuning uchun brendingiz o'z obro'sini yo'qotadi.",
			},
			img: "/dislike.png",
		},
	];
	const langData = {
		title: {
			ru: "Чем опасны DDoS-атаки?",
			uz: "DDoS hujumi nmasi bilan havfli",
		},
		seoTitle: {
			ru: "Защита серверов от DDoS-атак | Airnet",
			uz: "DDoS hujumidan serverlarni himoya qilish| Airnet",
		},
		seoDesc: {
			ru: "Описание защиты от DDoS-атак VDS и Выделенных серверов у Airnet",
			uz: "Airnet VDS va Dedicated serverlarining DDoS hujumlaridan himoya qilish tavsifi",
		},
		headTitle: {
			ru: "Защита серверов от DDoS-атак",
			uz: "DDoS hujumidan himoya qilish",
		},
		aboutUslug: {
			ru: "Об услуге",
			uz: "Hizmatlar haqida",
		},
		uslug1: {
			ru: "Защищает сервер от самых известных атак, предотвращает угрозы на канальном, сетевом, транспортном и прикладном уровнях OSI. Весь входящий трафик фильтруется — вредоносный отсеивается, и до сайта доходят только реальные пользователи.",
			uz: "Serverni eng mashhur hujumlardan himoya qiladi, kanal, tarmoqdagi tahdidlarning oldini oladi, OSI ning transport va amaliy qatlamlari. Barcha kiruvchi trafik filtrlanadi - zararli yo'q qilinadi va faqat haqiqiy foydalanuvchilar saytga kirishadi",
		},
		uslug2: {
			ru: "Подключите защищенный канал, и все сайты на сервере будут в безопасности.",
			uz: "Xavfsiz kanalni ulang va serverdagi barcha saytlar xavfsiz bo'ladi.",
		},
		uslug3: {
			ru: "Как подключить DDoS?",
			uz: "DDoS qanday qilib yoqtirish",
		},
		DDoSAtack: {
			ru: "Как осуществляется DDoS-атака",
			uz: "DDoS hujumini qanday aniqlash mumkin",
		},
		chanceAtack: {
			ru: "Шансы стать объектом DDoS-атаки очень велики, и таких попыток бывает много. Цель DDoS-атаки – сделать сервер, сервис или инфраструктуру недоступной путем перегрузки пропускной способности сервера или монополизации его ресурсов до полного истощения. Во время DDoS-атаки большое количество запросов одновременно отправляется с большого количества точек со всей сети Интернет. Интенсивность такого “перекрестного огня” делает предоставляемый сервис нестабильным, или еще хуже, – недоступным.",
			uz: "DDoS hujumi ob'ektiga aylanish ehtimoli juda yuqori va bunday urinishlar juda ko'p. Maqsad DDoS hujumlari - server, xizmat yoki infratuzilmani haddan tashqari yuklash orqali mavjud bo'lmaydi serverning tarmoqli kengligi yoki uning resurslarini tugaguniga qadar monopollashtirish. In DDoS hujumi paytida bir vaqtning o'zida katta miqdordagi so'rovlar yuboriladi butun Internetdan olingan ballar soni. Bu o'zaro otishma ning intensivligi taqdim etilgan xizmat beqaror yoki undan ham yomoni, mavjud emas.",
		},
		aboutAtack: {
			ru: "Цели и виды ата",
			uz: "Hujimning maqsadi va turlari",
		},
		atacks: {
			ru: "Существует три способа сделать Ваш сайт, сервер или инфраструктуру недоступной:",
			uz: "Serveringizni himoya qilishning va qoshimcha kirishlarni toxtatishni 3ta usuli bor",
		},
		atack1: {
			ru: "Перенасытить пропускную способность сети сервера, сделав его недоступным.",
			uz: "Serverning tarmoq o'tkazish qobiliyatini to'ldiring, uni mavjud bo'lmaydi.",
		},
		atack2: {
			ru: "Исчерпать системные ресурсы машины, сделав невозможным ответ на легитимные запросы.",
			uz: "Mashinaning tizim resurslarini sarflang, bu qonuniy so'rovlarga javob berishni imkonsiz qiladi.",
		},
		atack3: {
			ru: "Использовать уязвимость программного обеспечения, так называемый «эксплоит», для захвата машины или ограничения доступа к ней.",
			uz: "Qo'lga olish uchun eksploit deb ataladigan dasturiy zaiflikdan foydalaning avtomobil yoki unga kirishga cheklovlar.",
		},
		howIt: {
			ru: "Как выполняется защита",
			uz: "Qanday himoya qilish",
		},
		howDo: {
			ru: "Для защиты серверов и сервисов от атак предлагаем решение на основе технологии VAC – эксклюзивное сочетание методов для:",
			uz: "Serverlar va xizmatlarni hujumlardan himoya qilish uchun biz VAC texnologiyasiga asoslangan yechimni taklif qilamiz - bu usullarning eksklyuziv kombinatsiyasi:",
		},
		do1: {
			ru: "Высокоскоростного анализа всех пакетов в режиме реального времени",
			uz: "Barcha paketlarni real vaqtda yuqori tezlikda tahlil qilish",
		},
		do2: {
			ru: "Отсеивания входящего трафика вашего сервера",
			uz: "Qanday himoya qilishServeringizdan kiruvchi trafikni filtrlash",
		},
		do3: {
			ru: "Смягчения негативных последствий, то есть выделения всех нелегитимных IP-пакетов и пропускания легитимных",
			uz: "Salbiy oqibatlarni yumshatish, ya'ni barcha noqonuniy IP-paketlarni taqsimlash va qonuniy o'tish.",
		},
	};
	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />

			<Container headTitle={langData.headTitle[language]}>
				<div className={st.anti_ddos__info}>
					<div className={st.anti_ddos__info__content}>
						<h3>{langData.aboutUslug[language]}</h3>
						<p>{langData.uslug1[language]}</p>
						<p>{langData.uslug2[language]}</p>
						<Link href={LINKS.HELP}>
							<a>{langData.uslug3[language]}</a>
						</Link>
					</div>
					<div className={st.anti_ddos__info__img}>
						<img src="/ddos-img.png" />
					</div>
				</div>
			</Container>

			{/* <Container headTitle="Защита серверов от DDoS-атак" clNTitle="mb-0"></Container> */}
			<WhyBlock title={langData.title[language]} content={content} language={language} />
			<Container className="pt-2">
				<hr />
				<h3>{langData.DDoSAtack[language]}</h3>
				<p>{langData.chanceAtack[language]}</p>
				<div className="text-center">
					<Image
						src="/anti-ddos/without-protection.png"
						width={640}
						height={167}
						className="text-center"
					/>
				</div>
				<h3>{langData.aboutAtack[language]}</h3>
				<p>{langData.atacks[language]}</p>
				<ul className="list">
					<li>{langData.atack1[language]}</li>
					<li>{langData.atack2[language]}</li>
					<li>{langData.atack3[language]}</li>
				</ul>

				<div className="text-center">
					<Image src="/anti-ddos/network.jpg" width={800} height={640} className="text-center" />
				</div>

				<h3>{langData.howIt[language]}</h3>
				<p>{langData.howDo[language]}</p>
				<ul className="list">
					<li>{langData.do1[language]}</li>
					<li>{langData.do2[language]}</li>
					<li>{langData.do3[language]}</li>
				</ul>
				<div className="text-center">
					<Image src="/anti-ddos/protected.png" width={640} height={216} />
				</div>
			</Container>
			<Partners />
		</>
	);
}
