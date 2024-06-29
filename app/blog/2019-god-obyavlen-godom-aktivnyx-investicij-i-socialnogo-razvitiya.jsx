import NewsItem from "@/components/newsItem"

const data = {
	title: {
		ru: "2019 год объявлен Годом активных инвестиций и социального развития",
		uz: "2019-yil “Faol investitsiyalar va ijtimoiy rivojlanish yili” deb e’lon qilindi.",
		en: "2019 has been declared the Year of Active Investments and Social Development",
	},
	desc: {
		ru: "Президент подчеркнул, что благоприятная инвестиционная среда приведет к развитию всех сфер.",
		uz: "Prezidentimiz qulay sarmoyaviy muhit barcha sohalarni rivojlantirishga xizmat qilishini ta’kidladi.",
		en: "The President stressed that a favorable investment environment will lead to the development of all areas.",
	},
	date: "31.12.2018",
	img: "/blog/president.jpg",
	content: {
		ru: (
			<>
				<p>Президент подчеркнул, что благоприятная инвестиционная среда приведет к развитию всех сфер.</p>
				<p>
					Президент Шавкат Мирзиёев объявил 2019 год Годом активных инвестиций и социального развития. Об этом глава
					государства сказал в ходе своего послания 28 декабря.
				</p>
				<p>
					Шавкат Мирзиёев объяснил это тем, что с развитием инвестиций будут развиваться и другие сферы. В частности,
					одной из основных задач на следующий год будет создание благоприятного инвестиционного климата.
				</p>
				<p>
					Среди других задач — сокращение присутствия государства в экономике, увеличение частного предпринимательства,
					продолжение валютной либерализации, подготовку квалифицированных кадров, обуздание инфляции.
				</p>
				<p>
					Новость дополняется Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>Prezidentimiz qulay sarmoyaviy muhit barcha sohalarni rivojlantirishga xizmat qilishini ta’kidladi.</p>
				<p>
					Prezident Shavkat Mirziyoyev 2019-yilni “Faol investitsiyalar va ijtimoiy rivojlanish yili” deb e’lon qildi.
					Bu haqida Bu haqda davlat rahbari 28-dekabr kuni murojaatida aytib o‘tdi.
				</p>
				<p>
					Shavkat Mirziyoyev buni sarmoya rivojlanishi bilan boshqa sohalar ham rivojlanishi bilan izohladi. IN Xususan,
					kelgusi yil uchun qulay sarmoya yaratish asosiy vazifalardan biri bo‘ladi iqlim.
				</p>
				<p>
					Boshqa vazifalar qatoriga iqtisodiyotda davlat ishtirokini kamaytirish, xususiylikni oshirish kiradi
					tadbirkorlik, valyuta liberallashuvini davom ettirish, malakali kadrlar tayyorlash, cheklash inflyatsiya.
				</p>
				<p>
					Havola manbasiga yangilik to'ldirilmoqda{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>The President stressed that a favorable investment environment will lead to the development of all areas.</p>
				<p>
					President Shavkat Mirziyoyev declared 2019 the Year of Active Investments and social development. The head of
					state said this during his December 28 messages.
				</p>
				<p>
					Shavkat Mirziyoyev explained this by saying that with the development of investments there will be develop
					other areas. In particular, one of the main tasks for next year will create a favorable investment climate.
				</p>
				<p>
					Other tasks include reducing the presence of the state in the economy, increase in private enterprise,
					continuation of the currency liberalization, training of qualified personnel, curbing inflation.
				</p>
				<p>
					The news is being supplemented Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/telegram-voice-chat",
	next: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
}

export default function Blog({ language }) {
	return <NewsItem data={data} language={language} />
}
