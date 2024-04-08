import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../container/index.jsx'
import st from './reviews.module.scss'

const data = [
	{
		name: 'Сардор',
		surname: '',
		date: '19.12.2023',
		text: 'Отличный хостинг, очень радует тех поддержка, гибкие тарифы и при надобности возможно сделать тариф под себя, рекомендую!',
	},
	{
		name: 'Александр',
		surname: '',
		date: '16.12.2023',
		text: 'Отличный хостинг, очень быстрая скорость работы. Поддержка и специалисты отвечают быстро и помогают в решении возникших проблем в кратчайшие сроки. Цена на тариф приятная',
	},
	{
		name: 'Нариман',
		surname: '',
		date: '03.12.2023',
		text: 'Я пользуюсь хостингом AIRNET 2 года и очень доволен. У них отличный VPS, работает быстро и стабильно. Не было никаких перебоев, за это я их ценю. Техническая поддержка клиентов всегда готова помочь, она работает 24/7, Всем  рекомендую!',
	},
	{
		name: 'Amir',
		surname: '',
		date: '02.06.2022',
		text: 'Airnet так держать! Скорость Tasix и внешнего интернета это просто мощь! Всем доволен',
	},
	{
		name: 'Sadriddin',
		surname: '',
		date: '18.05.2022',
		text: 'Мне нравится этот хостинг. Ну и самое главное стабильная работа хостинга, даже при высоких нагрузках.',
	},
	{
		name: 'Ахмадбек',
		surname: '',
		date: '24.09.2021',
		text: 'Хостинг отличный! Тех поддержка на высшем уровне.',
	},
	{
		name: 'Melisa',
		surname: '',
		date: '16.09.2021',
		text: 'Вот уже почти год пользуемся хостингом Airnet. Отвечают и работают оперативно. Довольны!',
	},
]

export default function Reviews({ language }) {
	const langData = {
		title: {
			ru: 'Отзывы о нас',
			uz: 'Biz haqimizda sharhlar',
			en: 'Reviews about us',
		},
		text: {
			ru: 'довольных клиентов оставили свои отзывы о сервисе AIRNET. Они помогают нам расти и повышать уровень предоставления услуг.',
			uz: "mamnun mijozlar AIRNET xizmati haqida o'z fikr-mulohazalarini qoldirdi. Ular bizga xizmat ko'rsatishni yaxshilashga yordam beradi.",
			en: 'satisfied customers have left their feedback about the AIRNET service. They help us grow and improve the level of service.',
		},
		show: {
			ru: 'Смотреть все отзывы',
			uz: "Barcha sharhlarni ko'rish",
			en: 'See all reviews',
		},
	}

	return (
		<Container title={langData.title[language]} clNTitle='text-center'>
			<div className={st.reviews}>
				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					autoplay={{
						delay: 1000000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						770: {
							slidesPerView: 3,
						},
						550: {
							slidesPerView: 2,
						},
					}}
					className='reviews-swiper'
				>
					<SwiperSlide>
						<div className={st.reviews__first}>
							<div className={st.reviews__first__item}>
								<div className={st.reviews__first__item__count}>1000+</div>
								<div className={st.reviews__first__item__text}>
									{langData.text[language]}
								</div>
							</div>
							<a href='/reviews'>{langData.show[language]}</a>
						</div>
					</SwiperSlide>
					{data.map((item) => (
						<SwiperSlide key={item.name}>
							<div className={st.reviews__block}>
								<div className={st.reviews__block__header}>
									<div className={st.reviews__block__header__author}>
										{item.name.slice(0, 1)}
										{item.surname.slice(0, 1)}
									</div>
									<div className={st.reviews__block__header__content}>
										<span>{item.date}</span>
										<p>
											{item.name} {item.surname}
										</p>
									</div>
								</div>
								{item.text}
								<div className={st.reviews__block__star}>
									<span><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/></svg></span>
									<span><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/></svg></span>
									<span><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/></svg></span>
									<span><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/></svg></span>
									<span><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z"/></svg></span>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Container>
	)
}
