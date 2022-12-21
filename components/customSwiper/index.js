import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Container from "../container";
import st from "./customSwiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";

export default function CustomSwiper({ language }) {
	const langData = {
		slideTitle1: {
			ru: (
				<>
					Ваши сайты
					<br /> будут работать всегда
				</>
			),
			uz: (
				<>
					Sizning saytlaringiz
					<br /> har doim ishlaydi
				</>
			),
		},
		slideText11: {
			ru: (
				<>
					Сервер любой конфигурации под Ваши задачи.
					<br /> Надежность и безопасность Вашего бизнеса!
				</>
			),
			uz: (
				<>
					Vazifalaringiz uchun har qanday konfiguratsiya serveri.
					<br /> Biznesingizning ishonchliligi va xavfsizligi!
				</>
			),
		},
		slideText12: {
			ru: "Доступность в сети TAS-IX - 1 Гбит/с для всех клиентов AIRNET",
			uz: "TAS-IX tarmog'ida mavjudlik - barcha AIRNET mijozlari uchun 1 Gbit/s",
		},
		slideTitle2: {
			ru: (
				<>
					VDS/VPS хостинг
					<br /> в Узбекистане
				</>
			),
			uz: (
				<>
					VDS/VPS hosting
					<br /> O'zbekistonda
				</>
			),
		},
		slideText21: {
			ru: (
				<>
					Закажите Облачный VPS для стабильной работы
					<br /> вашего веб-проекта.
				</>
			),
			uz: (
				<>
					Barqaror ish uchun Cloud VPS-ga buyurtma bering veb loyihangizning <br />.
				</>
			),
		},
		slideText22: {
			ru: "Доступность в сети интернет от - 25 Мбит/с для всех клиентов AIRNET",
			uz: "Barcha AIRNET mijozlari uchun - 25 Mbit/s dan boshlab Internet mavjudligi",
		},
	};

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
				className={st.swiper__swiper}
			>
				<SwiperSlide>
					<div className={st.swiper__block} style={{ background: `url('/banner.webp') no-repeat` }}>
						<Container>
							<div className={st.swiper__block__item}>
								<h2>{langData.slideTitle1[language]}</h2>
								<h4>{langData.slideText11[language]}</h4>
								<br />
								<h4>{langData.slideText12[language]}</h4>
								<div className={st.swiper__block__item__bg}></div>
							</div>
						</Container>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={st.swiper__block} style={{ background: `url('/banner2.jpg') no-repeat` }}>
						<Container>
							<div className={st.swiper__block__item}>
								<h2>{langData.slideTitle2[language]}</h2>
								<h4>{langData.slideText21[language]}</h4>
								<br />
								<h4>{langData.slideText22[language]}</h4>
								<div className={st.swiper__block__item__bg}></div>
							</div>
						</Container>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
