import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import st from './swiper.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Container from '../container';

export default () => {
	return (
		<div className={st.swiper}>
			<Swiper
				cssMode={true}
				modules={[Autoplay, Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				loop={true}
				// autoplay={{
				// 	delay: 5000,
				// 	disableOnInteraction: false,
				// }}
				className={st.swiper__swiper}>
				<SwiperSlide>
					<div className={st.swiper__block} style={{ background: `url('/banner.webp') no-repeat` }}>
						<Container>
							<div className={st.swiper__block__item}>
								<h1>Ваши сайты будут работать всегда</h1>
								<h3>
									Сервер любой конфигурации под Ваши задачи. Надежность и безопасность Вашего бизнеса!
								</h3>
								<h3>Доступность в сети TAS-IX - 1 Гбит/с для всех клиентов AIRNET</h3>
							</div>
						</Container>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={st.swiper__block} style={{ background: `url('/banner.webp') no-repeat` }}>
						<Container>
							<div className={st.swiper__block__item}>
								<h1>Ваши сайты будут работать всегда</h1>
								<h3>
									Сервер любой конфигурации под Ваши задачи. Надежность и безопасность Вашего бизнеса!
								</h3>
								<h3>Доступность в сети TAS-IX - 1 Гбит/с для всех клиентов AIRNET</h3>
							</div>
						</Container>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
