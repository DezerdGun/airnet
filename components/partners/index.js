import st from './partners.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Container from '../container';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function Partners() {
	const content = [
		'/partners/bitrix.svg',
		'/partners/cloudlinux.webp',
		'/partners/comodo.webp',
		'/partners/cPanel.png',
		'/partners/google.png',
		'/partners/plesk.svg',
		'/partners/rapidssl.webp',
		'/partners/ripe.webp',
		'/partners/yandex.svg',
	];

	return (
		<div className={`${st.partners} partners-swiper`}>
			<Container title="Наши партнеры" clNh3="text-center text-uppercase">
				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={6}
					navigation
					loop={true}
					autoplay={{
						delay: 10000,
						disableOnInteraction: false,
					}}
					className={st.swiper__swiper}>
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
	);
}
