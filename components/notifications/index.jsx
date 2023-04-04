import { Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import Container from "../container/index.jsx"
import st from "./notifications.module.scss"

const content = [
	{
		title: "AIRNET",
		date: "10.02.2022",
		description: {
			ru: (
				<>
					<p>
						В связи с аварийной ситуацией на сети ННО ЦВСПД &quot;TAS-IX&quot;
						15.02.2022 г. с 00:30 по 10:00 (ТШК) могли наблюдаться ухудшения
						качества и перерывы в предоставлении услуги сети TAS-IX.
					</p>
					<p>
						ННО ЦВСПД &quot;TAS-IX&quot; приносит свои извинения за
						предоставленные неудобства.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						NNO TsVPD tarmog'ida favqulodda vaziyat yuzaga kelishi munosabati
						bilan &quot;TAS-IX&quot; 15.02.2022 00:30 dan soat 10:00 (TSK) ga
						qadar xizmatlar sifati yomonlashishi va xizmatlar ko'rsatishda
						uzilishlar bo'lishi mumkin TAS-IX tarmoqlari.
					</p>
					<p>
						NNO TsVSPD &quot;TAS-IX&quot; yuzaga kelgan noqulayliklar uchun uzr
						so'raydi.
					</p>
				</>
			),
			en: (
				<>
					<p>
						In connection with the emergency situation on the network of NNO
						TsVPD &quot;TAS-IX&quot; 02/15/2022 from 00:30 by 10:00 (TSK) there
						could be deterioration in quality and interruptions in the provision
						of services TAS-IX networks.
					</p>
					<p>
						NNO TsVSPD &quot;TAS-IX&quot; apologizes for the inconvenience
						caused.
					</p>
				</>
			),
		},
	},
	{
		title: "AIRNET",
		date: "8.02.2022",
		description: {
			ru: (
				<>
					<p>
						В связи с профилактическими работами у вышестоящего партнёра на сети
						TAS-IX, 12.02.2022г., в период с 10:00 до 15:00 возможно временное
						отсутствие услуги в сети TAS-IX.
					</p>
					<p>Приносим извинения за доставленные неудобства.</p>
				</>
			),
			uz: (
				<>
					<p>
						TAS-IX tarmog‘idagi yuqori hamkorda profilaktika ishlari olib
						borilishi munosabati bilan 2022-yil 12-fevralda soat 10:00 dan 15:00
						gacha bo'lgan davrda TAS-IX tarmog'ida vaqtinchalik xizmat
						ko'rsatilmasligi mumkin.
					</p>
					<p>Yuzilgan noqulayliklar uchun uzr so'raymiz.</p>
				</>
			),
			en: (
				<>
					<p>
						In connection with preventive work at the higher partner on the
						TAS-IX network, 02/12/2022, from 10:00 to 15:00, there may be a
						temporary lack of service in the network TAS-IX.
					</p>
					<p>We apologize for the inconvenience.</p>
				</>
			),
		},
	},
	{
		title: "AIRNET",
		date: "5.01.2022",
		description: {
			ru: (
				<>
					<p>
						На телекоммуникационной сети OOO «AIRNET» 13 января 2022 года (с
						21:00 до 01:30чч) в связи со спам-атаками и досс-атаками были
						технические сбои в доступе к сервисам компании.
					</p>
					<p>
						В этот период наблюдались кратковременные прерывания связи и
						ухудшение качества предоставляемых услуг фиксированной связи на сети
						OOO &quot;AIRNET&quot;.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						2022-yil 13-yanvar kuni (soat 21:00 dan 01:30 gacha) AIRNET MChJ
						telekommunikatsiya tarmog‘ida spam hujumlari va doss hujumlari bilan
						kompaniya xizmatlariga kirishda texnik nosozliklar yuzaga keldi.
					</p>
					<p>
						Bu davrda aloqada qisqa muddatli uzilishlar va sifatning
						yomonlashuvi kuzatildi. “AIRNET” MChJ tarmog‘ida statsionar aloqa
						xizmatlarini ko‘rsatdi.
					</p>
				</>
			),
			en: (
				<>
					<p>
						On the telecommunications network of AIRNET LLC on January 13, 2022
						(from 21:00 to 01:30 a.m.) at due to spam attacks and doss attacks
						there were technical failures in access to services companies.
					</p>
					<p>
						During this period, short-term interruptions in communication and
						deterioration in the quality were observed. provided fixed
						communication services on the network of "AIRNET" LLC.
					</p>
				</>
			),
		},
	},
]

export default function Notifications({ language }) {
	const langData = {
		title: {
			ru: "Оповещения",
			uz: "Yangiliklar",
			en: "Notifications",
		},
	}

	return (
		<div className={`${st.notifications} notifications-swiper`}>
			<Container title={langData.title[language]} clNTitle="text-center mb-0">
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
					className={st.swiper__swiper}
				>
					{content.map((item) => (
						<SwiperSlide key={item.title}>
							<div className={st.notifications__block}>
								<div className={st.notifications__block__item}>
									<div className={st.notifications__block__item__header}>
										<div
											className={st.notifications__block__item__header__author}
										>
											AIR
										</div>
										<div
											className={st.notifications__block__item__header__content}
										>
											<span>{item.date}</span>
											<h6>{item.title}</h6>
										</div>
									</div>
									{item.description[language]}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
	)
}
