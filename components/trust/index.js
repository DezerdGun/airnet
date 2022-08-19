import st from './trust.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Container from '../container';
import 'swiper/css';
import 'swiper/css/navigation';

const content = [
	'/trust/coca.jpg',
	'/trust/FED.png',
	'/trust/ipoteka.jpg',
	'/trust/leader-school.jpg',
	'/trust/paynet.jpg',
	'/trust/pepsi.jpg',
	'/trust/silkroad.jpg',
	'/trust/skillbox.jpg',
	'/trust/tld.jpg',
	'/trust/ttz.jpg',
	'/trust/universal-bank.jpg',
	'/trust/uzb-abroad.jpg',
	'/trust/yapona-mama.jpg',
];

export default function Trust() {
	return (
		<div className={`${st.trust} trust-swiper`}>
			<Container title="Нам доверяют" clNTitle="text-center">
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
					className={st.swiper__swiper}>
					{content.map((item) => (
						<SwiperSlide key={item.title}>
							<div className={st.trust__block}>
								<img src={item} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	);
}
