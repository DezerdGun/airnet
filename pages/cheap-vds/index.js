import Container from '../../components/container';
import st from './cheapVds.module.scss';
import ft from '../vds/vds.module.scss';
import TraficMaket from '../../components/traficMaket';
import CustomTableBottom from '../../components/customTableBottom';
import Partners from '../../components/partners';
import SEO from '../../components/seo';
import TarifMaket from '../../components/tarifMaket';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import TarifCard from '../../components/tarifCard';

const block = [
		{
			title: 'Хостинг файлов и картинок',
			description: 'Используйте 10 Gb жесткого диска для хранения данных.',
			img: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z" />
				</svg>
			),
		},
		{
			title: 'Для обучения и тестов',
			description: 'Идеально подходит для работы в командной строке и знакомства с системой Linux.',
			img: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
					<path d="M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0zM160 320c53.02 0 96-42.98 96-96c0-53.02-42.98-96-96-96C106.1 128 64 170.1 64 224C64 277 106.1 320 160 320zM192 352H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32C320 409.3 262.7 352 192 352z" />
				</svg>
			),
		},
		{
			title: 'Для нетребовательных задач',
			description: 'Вы можете организовать почтовый сервис или DNS-кластер.',
			img: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z" />
				</svg>
			),
		},
	],
	tarif = [
		{
			title: 'Micro',
			price: '100 000',
			cpu: 1,
			ram: 1,
			ssd: 25,
			net: 10,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12',
		},
		{
			title: 'Platinum',
			price: '150 000',
			cpu: 2,
			ram: 2,
			ssd: 40,
			net: 10,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13',
		},
		{
			title: 'Strong',
			price: '200 000',
			cpu: 2,
			ram: 4,
			ssd: 50,
			net: 15,
			link: 'https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14',
		},
	];

export default function CheapVds() {
	return (
		<>
			<SEO
				title="Бюджетные VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Дешевые и бесплатные VDS/VPS на быстрых SSD-дисках в сети TAS-IX в Ташкенте"
			/>
			<div className={st.cheapVds}>
				<Container style={{ background: `url('/servers-5.jpg') no-repeat` }} className="mt-0 py-0">
					<div className={st.cheapVds__header}>
						<div className={st.cheapVds__header__left}>
							<h1>БЮДЖЕТНЫЕ VDS/VPS</h1>
							<h2>САМЫЕ ДЕШЕВЫЕ VDS/VPS-СЕРВЕРА В ТАШКЕНТЕ</h2>
							<p>
								Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости
								1 Gbps
							</p>
						</div>
						<div className={st.cheapVds__header__right}>
							<h3>
								ВСЕГО 100 000 СУМ <br /> <span>в месяц!</span>
							</h3>
							<a
								href="https://billing.airnet.uz/billing.php?do=order&amp;vid=vds&amp;tarif=17"
								target="_blank"
								rel="noopener noreferrer">
								Заказать сервер
							</a>
						</div>
					</div>
				</Container>
				<Container>
					<div className={ft.vds__block}>
						{block.map((item) => (
							<div key={item.title} className={ft.vds__block__item}>
								<div className={ft.vds__block__item__img}>{item.img}</div>
								<h6>{item.title}</h6>
								<p>{item.description}</p>
							</div>
						))}
					</div>
				</Container>
				<TarifMaket
					bgImg={'/servers-2.jpg'}
					className="mt-0 px-0"
					endText={
						<ul className="list text-white mt-2 mb-0">
							<li>Владелец самостоятельно управляет сервером.</li>
							<li>На тариф не распространяются никакие скидки или специальные цены.</li>
							<li>Услуга администрирования не оказывается.</li>
						</ul>
					}>
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
							770: {
								slidesPerView: 3,
							},
							500: {
								slidesPerView: 2,
							},
						}}
						className="tarifSwiper">
						{tarif.map((item) => (
							<SwiperSlide key={item.title}>
								<div className="w-95">
									<TarifCard tarif={item} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</TarifMaket>

				<Partners />
			</div>
		</>
	);
}
