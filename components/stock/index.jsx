import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import Container from "../container/index.jsx"
import WhyCard from "../whyCard"
import st from "./stock.module.scss"

export default function Stock({ language }) {
	const content = [
		{
			title: {
				ru: "Подарки при оплате на длительный срок",
				uz: "Uzoq muddatli to'lovlar uchun sovg'alar",
				en: "Gifts when paid for a long time",
			},
			description: {
				ru: "Закажите любой тариф виртуального хостинга на 1 год и получите в подарок домен в зоне .UZ: Помощь в переносе сайтов; SSL-сертификаты на каждый Ваш домен; Приоритетный уровень обслуживания;",
				uz: "1 yilga istalgan virtual hosting rejasiga buyurtma bering va .UZ zonasida domenni sovg'a sifatida oling: Saytlarni uzatishda yordam bering; Har bir domeningiz uchun SSL sertifikatlari; Xizmat ko'rsatishning ustuvor darajasi;",
				en: "Order any virtual hosting plan for 1 year and get a domain in the .UZ zone as a gift: Assistance in site migration; SSL certificates for each of your domains; Priority level of service;",
			},
			img: "/present.png",
		},
		{
			title: {
				ru: "Хостинг в подарок, при переезде от другого провайдера",
				uz: "Boshqa provayderdan ko'chib o'tishda sovg'a sifatida xosting",
				en: "Hosting as a gift, when moving from another provider",
			},
			description: {
				ru: "Вы переезжаете к нам от другого хостинг-провайдера? Тогда мы подарим один месяц виртуального хостинга, по выбранному Вами тарифу, более того, выполним бесплатный перенос всех сайтов!",
				uz: "Siz boshqa hosting provayderidan bizga ko'chyapsizmi? Shunda biz siz tanlagan tarif bo'yicha bir oylik virtual xosting beramiz, bundan tashqari barcha saytlarni bepul o'tkazamiz!",
				en: "Are you moving to us from another hosting provider? Then we will give you one month of virtual hosting at the rate you choose, moreover, we will transfer all sites for free!",
			},
			img: "/present.png",
		},
		{
			title: { ru: "Тестовый период", uz: "Sinov davri", en: "Test period" },
			description: {
				ru: "Некоторые наши услуги Вы можете тестировать до 3-х дней.",
				uz: "Ba'zi xizmatlarimizni 3 kungacha sinab ko'rishingiz mumkin.",
				en: "Some of our services you can test up to 3 days.",
			},
			img: "/timer.png",
		},
		{
			title: {
				ru: "Помощь при переезде",
				uz: "Ko'chirishda yordam bering",
				en: "Help with moving",
			},
			description: {
				ru: "Сделаем все сами, в кратчайшие сроки.",
				uz: "Biz hamma narsani o'zimiz qilamiz, eng qisqa vaqt ichida.",
				en: "We will do everything ourselves, in the shortest possible time.",
			},
			img: "/settings.png",
		},
		{
			title: {
				ru: "Приведите друга!",
				uz: "Do'stingizni olib keling!",
				en: "Bring a friend!",
			},
			description: {
				ru: "Подарим Вам бесплатный месяц веб-хостинга, по Вашему тарифному плану.",
				uz: "Biz sizga tarif rejangizga muvofiq bir oylik bepul veb-xosting beramiz.",
				en: "We will give you a free month of web hosting, according to your tariff plan.",
			},
			img: "/people.png",
		},
		{
			title: {
				ru: "Бесплатно доменное имя!",
				uz: "Bepul domen nomi!",
				en: "Free domain name!",
			},
			description: {
				ru: "При заказе виртуального хостинга от 1 года.",
				uz: "1 yildan boshlab virtual xostingga buyurtma berishda.",
				en: "When ordering a virtual hosting from 1 year.",
			},
			img: "/site.png",
		},
	]

	const langData = {
		title: {
			ru: "Акции",
			uz: "Aksiya",
			en: "Stocks",
		},
	}

	return (
		<div className={st.stock}>
			<Container title={langData.title[language]} clNTitle="text-center mb-4">
				<WhyCard content={content} language={language} />
			</Container>
		</div>
	)
}
