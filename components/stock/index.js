import Container from "../container";
import st from "./stock.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import WhyCard from "../whyCard";

export default function Stock({ language }) {
	const content = [
		{
			title: {
				ru: "Подарки при оплате на длительный срок",
				uz: "Uzoq muddatli to'lovlar uchun sovg'alar",
			},
			description: {
				ru: "Закажите любой тариф виртуального хостинга на 1 год и получите в подарок домен в зоне .UZ: Помощь в переносе сайтов; SSL-сертификаты на каждый Ваш домен; Приоритетный уровень обслуживания;",
				uz: "1 yilga istalgan virtual hosting rejasiga buyurtma bering va .UZ zonasida domenni sovg'a sifatida oling: Saytlarni uzatishda yordam bering; Har bir domeningiz uchun SSL sertifikatlari; Xizmat ko'rsatishning ustuvor darajasi;",
			},
			img: "/present.png",
		},
		{
			title: {
				ru: "Хостинг в подарок, при переезде от другого провайдера",
				uz: "Boshqa provayderdan ko'chib o'tishda sovg'a sifatida xosting",
			},
			description: {
				ru: "Вы переезжаете к нам от другого хостинг-провайдера? Тогда мы подарим один месяц виртуального хостинга, по выбранному Вами тарифу, более того, выполним бесплатный перенос всех сайтов!",
				uz: "Siz boshqa hosting provayderidan bizga ko'chyapsizmi? Shunda biz siz tanlagan tarif bo'yicha bir oylik virtual xosting beramiz, bundan tashqari barcha saytlarni bepul o'tkazamiz!",
			},
			img: "/present.png",
		},
		{
			title: { ru: "Тестовый период", uz: "Sinov davri" },
			description: {
				ru: "Некоторые наши услуги Вы можете тестировать до 3-х дней.",
				uz: "Ba'zi xizmatlarimizni 3 kungacha sinab ko'rishingiz mumkin.",
			},
			img: "/timer.png",
		},
		{
			title: { ru: "Помощь при переезде", uz: "Ko'chirishda yordam bering" },
			description: {
				ru: "Сделаем все сами, в кратчайшие сроки.",
				uz: "Biz hamma narsani o'zimiz qilamiz, eng qisqa vaqt ichida.",
			},
			img: "/settings.png",
		},
		{
			title: { ru: "Приведите друга!", uz: "Do'stingizni olib keling!" },
			description: {
				ru: "Подарим Вам бесплатный месяц веб-хостинга, по Вашему тарифному плану.",
				uz: "Biz sizga tarif rejangizga muvofiq bir oylik bepul veb-xosting beramiz.",
			},
			img: "/people.png",
		},
		{
			title: { ru: "Бесплатно доменное имя!", uz: "Bepul domen nomi!" },
			description: {
				ru: "При заказе виртуального хостинга от 1 года.",
				uz: "1 yildan boshlab virtual xostingga buyurtma berishda.",
			},
			img: "/site.png",
		},
	];

	return (
		<div className={st.stock}>
			<Container title="Акции" clNTitle="text-center mb-4">
				<WhyCard content={content} language={language} />
			</Container>
		</div>
	);
}
