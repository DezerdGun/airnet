import st from './notifications.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Container from '../container';
import 'swiper/css';
import 'swiper/css/navigation';

const content = [
	{
		title: 'УВАЖАЕМЫЕ АБОНЕНТЫ!',
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
		title: 'УВАЖАЕМЫЕ АБОНЕНТЫ!',
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
		title: 'УВАЖАЕМЫЕ АБОНЕНТЫ!',
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
			<Container title="ОПОВЕЩЕНИЯ" clNTitle="text-center text-uppercase">
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
					breakpoints={{
						660: {
							slidesPerView: 2,
						},
						1040: {
							slidesPerView: 3,
						},
					}}
					className={st.swiper__swiper}>
					{content.map((item) => (
						<SwiperSlide key={item.title}>
							<div className={st.notifications__block}>
								<h6>{item.title}</h6>
								{item.decsription}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	);
}
