import Container from '../container';
import st from './stock.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { LINKS } from '../requirements';
import Link from 'next/link';
import WhyCard from '../whyCard';

export default function Stock() {
	const content = [
		{
			title: 'Подарки при оплате на длительный срок',
			decsription:
				'Закажите любой тариф виртуального хостинга на 1 или 2 года и получите в подарок домен .uz: Помощь в переносе сайтов; SSL-сертификаты на каждый Ваш домен; Приоритетный уровень обслуживания;',
			img: '/present.png',
		},
		{
			title: 'Хостинг в подарок, при переезде от другого провайдера',
			decsription:
				'Вы переезжаете к нам от другого хостинг-провайдера? Тогда мы подарим один месяц виртуального хостинга, по выбранному Вами тарифу, более того, выполним бесплатный перенос всех сайтов!',
			img: '/present.png',
		},
		{
			title: 'Тестовый период',
			decsription: 'Некоторые наши услуги Вы можете тестировать до 3-х дней.',
			img: '/timer.png',
		},
		{
			title: 'Помощь при переезде',
			decsription: 'Сделаем все сами, в кратчайшие сроки.',
			img: '/settings.png',
		},
		{
			title: 'Приведите друга!',
			decsription: 'Подарим Вам бесплатный месяц веб-хостинга, по Вашему тарифному плану.',
			img: '/people.png',
		},
		{
			title: 'Бесплатно доменное имя!',
			decsription: 'При заказе виртуального хостинга от 1 года.',
			img: '/site.png',
		},
	];

	return (
		<div className={st.stock}>
			<Container title="Акции" clNTitle="text-center mb-4">
				<WhyCard content={content} />
			</Container>
		</div>
	);

	// return (
	// 	<Container>
	// 		<div className={`${st.stock} stock-swiper`}>
	// 			<div className={st.stock__content}>
	// 				<Swiper
	// 					modules={[Autoplay, EffectFade, Pagination]}
	// 					spaceBetween={10}
	// 					slidesPerView={1}
	// 					pagination={{ clickable: true }}
	// 					loop={true}
	// 					autoplay={{
	// 						delay: 10000,
	// 						disableOnInteraction: false,
	// 					}}
	// 					effect="fade"
	// 					className={st.swiper__swiper}>
	// 					{content.map((item) => (
	// 						<SwiperSlide key={item.title}>
	// 							<div className={st.stock__content__block}>
	// 								<div className={st.stock__content__block__img}>
	// 									<img src={item.img} />
	// 								</div>
	// 								<div className={st.stock__content__block__content}>
	// 									<div>
	// 										<h6>{item.title}</h6>
	// 										<p>{item.decsription}</p>
	// 									</div>
	// 									<button>
	// 										<Link href={LINKS.STOCK}>
	// 											<a>
	// 												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	// 													<path d="M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z" />
	// 												</svg>
	// 												Смотреть акции
	// 											</a>
	// 										</Link>
	// 									</button>
	// 								</div>
	// 							</div>
	// 						</SwiperSlide>
	// 					))}
	// 				</Swiper>
	// 			</div>
	// 			<div className={st.stock__content2}>
	// 				{content2.map((item) => (
	// 					<div key={item.title} className={st.stock__content2__block}>
	// 						<div className={st.stock__content2__block__img}>
	// 							<img src={item.img} />
	// 						</div>
	// 						<div className={st.stock__content2__block__content}>
	// 							<h6>{item.title}</h6>
	// 							<p>{item.decsription}</p>
	// 						</div>
	// 					</div>
	// 				))}
	// 			</div>
	// 		</div>
	// 	</Container>
	// );
}
