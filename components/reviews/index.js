import st from './reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '../container';

const data = [
	{
		name: 'Говорухин',
		surname: 'Евгений',
		date: '25.12.2019',
		text: 'Отличные и быстрые сервера, у меня тариф VDS-KVM-NVMe-CPU-Турбо. Сайты работают очень быстро. Особенно хочется отметить работу технических специалистов. Месяц назад напортачил на сайте и, кроме как восстановить сайт из резервной копии, ничего не...',
	},
	{
		name: 'Станислав',
		surname: 'Крановский',
		date: '16.07.2020',
		text: 'Я уже почти 3 года пользуюсь услугами FirstVDS. Одно из основных достоинств хостинга в том, что даже если вы первый раз вообще с таким работаете, поддержка вам поможет во всем. Отвечают быстро, а на решение даже сложных проблем, уходит всего несколько...',
	},
	{
		name: 'Мария',
		surname: 'Лапкина',
		date: '16.12.2018',
		text: 'Я беру в FirstVDS VDS Атлант для размещения сайтов компании и крупных клиентов своей веб-студии. Для меня важна круглосуточная доступность ресурсов, потому что у меня есть биллинг, клиенты платят круглосуточно. Мои сервисы должны быть постоянно...',
	},
	{
		name: 'Артем',
		surname: 'Атучин',
		date: '25.12.2018',
		text: 'Я пользовался многими хостингами и доменными регистраторами. И могу сказать одно. После перехода на FirstVDS я больше вообще ничем другим пользоваться не буду! Все вполне удобно и доступно. Ребята из техподдержки ну просто молодцы, отвечают на все...',
	},
];

export default function Reviews() {
	return (
		<Container>
			<div className={st.reviews}>
				<h3>Отзывы о нас</h3>
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
					className="reviews-swiper">
					<SwiperSlide>
						<div className={st.reviews__first}>
							<div className={st.reviews__first__item}>
								<div className={st.reviews__first__item__count}>1000+</div>
								<div className={st.reviews__first__item__text}>
									довольных клиентов оставили свои отзывы о сервисе FirstVDS. Они помогают нам расти и
									повышать уровень предоставления услуг.
								</div>
							</div>
							<a href="#">Смотреть все отзывы</a>
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
										<h6>
											{item.name} {item.surname}
										</h6>
									</div>
								</div>
								{item.text}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Container>
	);
}
