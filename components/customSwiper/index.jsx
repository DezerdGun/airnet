import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '../container/index.jsx'
import st from './customSwiper.module.scss'

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
			en: (
				<>
					Your sites
					<br /> will always work
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
			en: (
				<>
					Server of any configuration for your tasks.
					<br /> Reliability and security of your business!
				</>
			),
		},
		slideText12: {
			ru: 'Доступность в сети TAS-IX - 1 Гбит/с для всех клиентов AIRNET',
			uz: "TAS-IX tarmog'ida mavjudlik - barcha AIRNET mijozlari uchun 1 Gbit/s",
			en: 'Availability in the TAS-IX network - 1 Gbps for all AIRNET clients',
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
			en: (
				<>
					VDS/VPS hosting
					<br /> in Uzbekistan
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
					Barqaror ish uchun Cloud VPS-ga buyurtma bering veb loyihangizning{' '}
					<br />.
				</>
			),
			en: (
				<>
					Order Cloud VPS for stable work
					<br /> of your web project.
				</>
			),
		},
		slideText22: {
			ru: 'Доступность в сети интернет от - 25 Мбит/с для всех клиентов AIRNET',
			uz: 'Barcha AIRNET mijozlari uchun - 25 Mbit/s dan boshlab Internet mavjudligi',
			en: 'Availability on the Internet from - 25 Mbps for all AIRNET clients',
		},
		slideTitle3: {
			ru: (
				<>
					Поздравляем AIRNET.uz<br /> с 6-летием! 🎉
				</>
			),
			uz: (
				<>
					Поздравляем AIRNET.uz<br /> с 6-летием! 🎉
				</>
			),
			en: (
				<>
					Поздравляем AIRNET.uz<br /> с 6-летием! 🎉
				</>
			),
		},
		slideText33: {
			ru: (
				<>
					01.02.2024 наша компания празднует свой шестилетний юбилей,🎂✨ и мы хотели бы выразить огромную благодарность каждому из вас за вашу веру в нас и вашу лояльность. Благодаря вашей поддержке мы смогли достичь таких высот и стать ведущими провайдерами хостинг-услуг в Узбекистане.🚀
				</>
			),
			uz: (
				<>
					01.02.2024 наша компания празднует свой шестилетний юбилей,🎂✨ и мы хотели бы выразить огромную благодарность каждому из вас за вашу веру в нас и вашу лояльность. Благодаря вашей поддержке мы смогли достичь таких высот и стать ведущими провайдерами хостинг-услуг в Узбекистане.🚀
				</>
			),
			en: (
				<>
					01.02.2024 наша компания празднует свой шестилетний юбилей,🎂✨ и мы хотели бы выразить огромную благодарность каждому из вас за вашу веру в нас и вашу лояльность. Благодаря вашей поддержке мы смогли достичь таких высот и стать ведущими провайдерами хостинг-услуг в Узбекистане.🚀
				</>
			),
		},
		slideText32: {
			ru: '10% Скидка по промо-коду AIR-HAPPY',
			uz: '10% Скидка по промо-коду AIR-HAPPY',
			en: '10% Скидка по промо-коду AIR-HAPPY',
		},
	}

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
					<div
						className={st.swiper__block}
						style={{ background: `url('/happy6.webp') no-repeat` }}
					>
						<Container>
							<div className={st.swiper__block__item}>
								<h2>{langData.slideTitle3[language]}</h2>
								<h4>{langData.slideText33[language]}</h4>
								<br />
								<h4>{langData.slideText32[language]}</h4>
								<div className={st.swiper__block__item__bg}></div>
							</div>
						</Container>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className={st.swiper__block}
						style={{ background: `url('/banner.webp') no-repeat` }}
					>
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
					<div
						className={st.swiper__block}
						style={{ background: `url('/banner2.webp') no-repeat` }}
					>
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
	)
}
