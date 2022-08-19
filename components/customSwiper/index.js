import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Container from '../container';
import st from './customSwiper.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CustomSwiper() {
	return (
		<div className={`${st.swiper} head-swiper`}>
			<Swiper
				cssMode={true}
				modules={[Autoplay, Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				loop={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				className={st.swiper__swiper}>
				<SwiperSlide>
					<div className={st.swiper__block} style={{ background: `url('/banner.webp') no-repeat` }}>
						<Container>
							<div className={st.swiper__block__item}>
								<h2>Ваши сайты<br /> будут работать всегда</h2>
								<h4>
									Сервер любой конфигурации под Ваши задачи.<br /> Надежность и безопасность Вашего бизнеса!
								</h4>
								<br />
								<h4>Доступность в сети TAS-IX - 1 Гбит/с для всех клиентов AIRNET</h4>
								<div className={st.swiper__block__item__bg}></div>
							</div>
						</Container>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={st.swiper__block} style={{ background: `url('/banner.webp') no-repeat` }}>
						<Container>
							<div className={st.swiper__block__item}>
								<h2>Ваши сайты<br /> будут работать всегда</h2>
								<h4>
									Сервер любой конфигурации под Ваши задачи.<br /> Надежность и безопасность Вашего бизнеса!
								</h4>
								<br />
								<h4>Доступность в сети TAS-IX - 1 Гбит/с для всех клиентов AIRNET</h4>
								<div className={st.swiper__block__item__bg}></div>
							</div>
						</Container>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
