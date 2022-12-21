import st from "./reviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Container from "../container";

const data = [
	{
		name: "Amir",
		surname: "",
		date: "02.06.2022",
		text: "Airnet так держать! Скорость Tasix и внешнего интернета это просто мощь! Всем доволен",
	},
	{
		name: "Sadriddin",
		surname: "",
		date: "18.05.2022",
		text: "Мне нравится этот хостинг. Ну и самое главное стабильная работа хостинга, даже при высоких нагрузках.",
	},
	{
		name: "Ахмадбек",
		surname: "",
		date: "24.09.2021",
		text: "Хостинг отличный! Тех поддержка на высшем уровне.",
	},
	{
		name: "Melisa",
		surname: "",
		date: "16.09.2021",
		text: "Вот уже почти год пользуемся хостингом Airnet. Отвечают и работают оперативно. Довольны!",
	},
];

export default function Reviews({ language }) {
	const langData = {
		title: {
			ru: "Отзывы о нас",
			uz: "Biz haqimizda sharhlar",
		},
		text: {
			ru: "довольных клиентов оставили свои отзывы о сервисе AIRNET. Они помогают нам расти и повышать уровень предоставления услуг.",
			uz: "mamnun mijozlar AIRNET xizmati haqida o'z fikr-mulohazalarini qoldirdi. Ular bizga xizmat ko'rsatishni yaxshilashga yordam beradi.",
		},
		show: {
			ru: "Смотреть все отзывы",
			uz: "Barcha sharhlarni ko'rish",
		},
	};

	return (
		<Container title={langData.title[language]} clNTitle="text-center">
			<div className={st.reviews}>
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
					className="reviews-swiper"
				>
					<SwiperSlide>
						<div className={st.reviews__first}>
							<div className={st.reviews__first__item}>
								<div className={st.reviews__first__item__count}>1000+</div>
								<div className={st.reviews__first__item__text}>{langData.text[language]}</div>
							</div>
							<a href="#">{langData.show[language]}</a>
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
