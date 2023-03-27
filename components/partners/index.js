import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../container/index.jsx'
import st from './partners.module.scss'

export default function Partners({ language }) {
	const content = [
		'/partners/bitrix.svg',
		'/partners/cloudlinux.png',
		'/partners/comodo.png',
		'/partners/cPanel.png',
		'/partners/google.png',
		'/partners/plesk.svg',
		'/partners/rapidssl.png',
		'/partners/ripe.webp',
		'/partners/yandex.svg',
	]

	const langData = {
		title: {
			ru: 'Наши партнеры',
			uz: 'Bizning hamkorlarimiz',
			en: 'Our partners',
		},
	}

	return (
		<div className={`${st.partners} partners-swiper`}>
			<Container title={langData.title[language]} clNTitle='text-center'>
				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={2}
					navigation
					loop={true}
					autoplay={{
						delay: 10000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						550: {
							slidesPerView: 3,
						},
						660: {
							slidesPerView: 4,
						},
						990: {
							slidesPerView: 5,
						},
						1100: {
							slidesPerView: 6,
						},
					}}
					className={st.swiper__swiper}
				>
					{content.map((item) => (
						<SwiperSlide key={item.title}>
							<div className={st.partners__block}>
								<img src={item} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	)
}
