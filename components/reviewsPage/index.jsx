
import { useEffect, useState } from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../container/index.jsx'
import st from './reviewsPage.module.scss'

const TESTIM_API = "https://billing.airnet.uz/testimonials_api.php"

function mapApi(r) {
	let parts = (r.name || '').trim().split(/\s+/)
	return {
		name: parts[0] || 'Клиент',
		surname: parts.slice(1).join(' '),
		date: r.date ? new Date(r.date).toLocaleDateString('ru-RU') : '',
		text: r.message || '',
	}
}

export default function ReviewsPage({ language }) {
	const [data, setData] = useState([])
	useEffect(() => {
		fetch(TESTIM_API + '?limit=50')
			.then((r) => (r.ok ? r.json() : null))
			.then((j) => {
				if (j && j.ok && Array.isArray(j.data)) {
					setData(j.data.map(mapApi))
				}
			})
			.catch(() => {})
	}, [])

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
			ru: 'Смотреть отзывы',
			uz: "Barcha sharhlarni ko'rish",
			en: 'See reviews',
		},
	}

	return (
		<Container title={langData.title[language]} clNTitle='text-center'>
			<div className={st.reviewsPage}>
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
					{data.map((item) => (
						<SwiperSlide key={item.name}>
							<div className={st.reviewsPage__block}>
								<div className={st.reviewsPage__block__header}>
									<div className={st.reviewsPage__block__header__author}>
										{item.name.slice(0, 1)}
										{item.surname.slice(0, 1)}
									</div>
									<div className={st.reviewsPage__block__header__content}>
										<span>{item.date}</span>
										<p>
											{item.name} {item.surname}
										</p>
									</div>
								</div>
								{item.text}
								<div className={st.reviewsPage__block__star}>
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