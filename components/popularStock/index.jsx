import Container from "../container/index.jsx"
import st from "./popularStock.module.scss"

export default function PopularStock({ language }) {
	const langData = {
		free: {
			ru: "Бесплатно",
			uz: "Tekin",
			en: "",
		},
		stock: {
			ru: "Акция",
			uz: "Aksiya",
			en: "",
		},
		srok: {
			ru: "Срок действия",
			uz: "Amal qilish muddati",
			en: "",
		},
	}

	const data = [
		{
			title: { ru: "Домен в подарок", uz: "Domen sovg'a sifatida", en: "" },
			description: {
				ru: "Вы приобретаете у нас любой веб-хостинг на 1 год и абсолютно БЕСПЛАТНО получаете домен для вашего бизнеса или стартапа.",
				uz: "Siz bizdan 1 yil davomida istalgan veb hostingni xarid qilasiz va biznesingiz yoki startapingiz uchun mutlaqo BEPUL domen olasiz.",
				en: "",
			},
			warranty: langData.free[language],
			dateOff: { ru: "31 декабря 2022г.", uz: "31 dekabr 2022 yil", en: "" },
			link: "https://billing.airnet.uz/",
			prices: [
				{
					price: "100 000",
					dateOff: { ru: "31 декабря", uz: "31 dekabr", en: "" },
					date: { ru: "2022г.", uz: "", en: "2022y." },
				},
			],
		},
		{
			title: {
				ru: "Перенос сайтов «под ключ» бесплатно",
				uz: "Saytlarni to'liq bepul o'tkazing",
				en: "",
			},
			description: {
				ru: "При переезде от другого хостинг-провайдера к AIRNET, наши специалисты бесплатно перенесут все Ваши сайты под ключ.",
				uz: "Boshqa xosting-provayderdan AIRNET-ga o'tayotganda bizning mutaxassislarimiz barcha saytlaringizni kalit taslim asosida bepul o'tkazadilar.",
				en: "",
			},
			warranty: langData.free[language],
			dateOff: { ru: "2-3 дня", uz: "2-3 kun", en: "" },
			link: "https://billing.airnet.uz/",
			prices: [
				{
					price: "100 000",
					dateOff: { ru: "31 декабря", uz: "31 dekabr", en: "" },
					date: { ru: "2022г.", uz: "2022y.", en: "" },
				},
			],
		},
	]
	return (
		<div className={st.popularStock}>
			<Container title="" clNTitle="text-center">
				<div className={st.popularStock__block}>
					{data.map((item) => (
						<div
							key={item.title[language]}
							className={st.popularStock__block__item}
						>
							<div className={st.popularStock__block__item__top}>
								<div>{item.title[language]}</div>
								<p>{item.description[language]}</p>
								<ul>
									<li>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 384 512"
											>
												<path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM192 192c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 291.3 128 256S156.7 192 192 192zM288 448H96c-8.836 0-16-7.164-16-16C80 387.8 115.8 352 160 352h64c44.18 0 80 35.82 80 80C304 440.8 296.8 448 288 448z" />
											</svg>
										</span>
										{langData.stock[language]}:{" "}
										<strong>{item.warranty[language]}</strong>
									</li>
									<li>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
											</svg>
										</span>
										{langData.srok[language]}:{" "}
										{language == "ru" ? (
											<strong>до {item.dateOff[language]}</strong>
										) : (
											<strong>{item.dateOff[language]} gacha</strong>
										)}
									</li>
								</ul>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	)
}
