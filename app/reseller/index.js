import Container from "@/components/container"
import Partners from "@/components/partners"
import StepsBlock from "@/components/stepsBlock"
import WhyCard from "@/components/whyCard"
import st from "./reseller.module.scss"

const content = [
	{
		title: {
			ru: "Сайт хостинг-провайдера",
			uz: "Xosting provayderining veb-sayti",
		},
		description: {
			ru: "Сайт должен быть готов для размещения предложений по нашим виртуальным серверам. Это может быть действующий сайт хостинговой компании, уже имеющей опыт работы в хостинг-услугах и клиентскую базу.",
			uz: "Sayt virtual serverlarimizga takliflar joylashtirishga tayyor bo'lishi kerak. Bu hosting xizmatlari va mijozlar bazasi bo'yicha tajribaga ega bo'lgan jonli sayt hosting kompaniyasi bo'lishi mumkin",
		},

		img: "/server.png",
	},
	{
		title: {
			ru: "Сайт веб-студии",
			uz: "Sayt virtual serverlarimizga takliflar kelishiga tayyor bo'lishi kerak. Bu hosting xizmatlari va bazasi bo'yicha tajribaga ega bo'lgan jonli sayt hosting kompaniyasi bo'lishi mumkin",
		},

		description: {
			ru: "Помимо услуг по созданию сайтов, студия должна предлагать своим клиентам дополнительные услуги по их размещению.",
			uz: "Sayt yaratish xizmatlaridan tashqari, studiya o'z mijozlariga ularni joylashtirish uchun qo'shimcha xizmatlarni taklif qilishi kerak.",
		},

		img: "/tag.png",
	},
]

export default function Reseller({ language }) {
	const langData = {
		headTitle: {
			ru: "Кто может стать реселлером?",
			uz: "Kim reseller bola oladi",
		},
		description: {
			ru: (
				<>
					<p>
						К участию в программе допускаются только нацеленные на массовую
						перепродажу партнёры. Обязательными условиями являются наличие сайта
						и продажа не менее 10 серверов в первые полгода.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Dasturda faqat ommaviy ishlab chiqarishga yo'naltirilganlar ishtirok
						etishlari mumkin. qayta sotish hamkorlari. Veb-sayt - bu old shart
						va birinchi olti oy ichida kamida 10 ta serverni sotish.
					</p>
				</>
			),
		},
		title: {
			ru: "Как это работает?",
			uz: "Bu qanday ishlaydi",
		},
	}
	return (
		<>
			<div className={st.reseller}>
				<Container
					headTitle={langData.headTitle[language]}
					description={langData.description[language]}
				>
					<WhyCard content={content} language={language} />
				</Container>
			</div>
			<StepsBlock
				title={langData.title[language]}
				data={[
					{
						title: { ru: "Получаете заявку", uz: "Arizani qabul qilish" },
						description: {
							ru: "Клиенты обращаются за сервером напрямую к вам",
							uz: "Mijozlar to'g'ridan-to'g'ri sizdan server so'rashadi",
						},
					},
					{
						title: { ru: "Покупаете у нас", uz: "Bizdan harid qiling" },
						description: {
							ru: "Приобретаете у нас сервер со скидкой от 15 до 30%",
							uz: "Bizdan serverni 15 dan 30% gacha chegirma bilan sotib oling",
						},
					},
					{
						title: { ru: "Продаёте клиенту", uz: "Mikozga soting" },
						description: {
							ru: "Купленный сервер вы продаёте своему клиенту с наценкой",
							uz: "Siz sotib olingan serverni mijozingizga yuqori narxda sotasiz",
						},
					},
					{
						title: { ru: "Профит!", uz: "Foyda" },
						description: {
							ru: "Скидка + маржа = ваша прибыль, которую вы получаете сразу после первого заказа",
							uz: "Chegirma + marja = birinchi buyurtmadan keyin darhol oladigan daromadingiz",
						},
					},
				]}
				img="/how-work-img.png"
				language={language}
			/>
			<Partners language={language} />
		</>
	)
}
