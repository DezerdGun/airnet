import st from './notifications.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Container from '../container';
import 'swiper/css';
import 'swiper/css/navigation';

const content = [
	{
		title: 'AIRNET',
		date: '10.02.2022',
		decsription: (
			<>
				<p>
					В связи с аварийной ситуацией на сети ННО ЦВСПД &quot;TAS-IX&quot; 15.02.2022 г. с 00:30 по 10:00
					(ТШК) могли наблюдаться ухудшения качества и перерывы в предоставлении услуги сети TAS-IX.
				</p>
				<p>ННО ЦВСПД &quot;TAS-IX&quot; приносит свои извинения за предоставленные неудобства.</p>
			</>
		),
	},
	{
		title: 'AIRNET',
		date: '8.02.2022',
		decsription: (
			<>
				<p>
					В связи с профилактическими работами у вышестоящего партнёра на сети TAS-IX, 12.02.2022г., в период
					с 10:00 до 15:00 возможно временное отсутствие услуги в сети TAS-IX.
				</p>
				<p>Приносим извинения за доставленные неудобства.</p>
			</>
		),
	},
	{
		title: 'AIRNET',
		date: '5.01.2022',
		decsription: (
			<>
				<p>
					На телекоммуникационной сети OOO «AIRNET» 13 января 2022 года (с 21:00 до 01:30чч) в связи со
					спам-атаками и досс-атаками были технические сбои в доступе к сервисам компании.
				</p>
				<p>
					В этот период наблюдались кратковременные прерывания связи и ухудшение качества предоставляемых
					услуг фиксированной связи на сети OOO &quot;AIRNET&quot;.
				</p>
			</>
		),
	},
];

export default function Notifications() {
	return (
		<div className={`${st.notifications} notifications-swiper`}>
			<Container title="Оповещения" clNTitle="text-center mb-0">
				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					loop={true}
					autoplay={{
						delay: 1000000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						560: {
							slidesPerView: 2,
						},
						770: {
							slidesPerView: 3,
						},
						1040: {
							slidesPerView: 4,
						},
					}}
					className={st.swiper__swiper}>
					{content.map((item) => (
						<SwiperSlide key={item.title}>
							<div className={st.notifications__block}>
								<div className={st.notifications__block__item}>
									<div className={st.notifications__block__item__header}>
										<div className={st.notifications__block__item__header__author}>AN</div>
										<div className={st.notifications__block__item__header__content}>
											<span>{item.date}</span>
											<h6>{item.title}</h6>
										</div>
									</div>
									{item.decsription}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	);
}
