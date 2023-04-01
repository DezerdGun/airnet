import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "2019 год объявлен Годом активных инвестиций и социального развития",
		uz: "2019 yil Faol investitsiyalar va ijtimoiy rivojlanish yili deb e’lon qilindi",
	},
	decs: {
		ru: "Президент подчеркнул, что благоприятная инвестиционная среда приведет к развитию всех сфер.",
		uz: "– Prezidentimiz qulay sarmoyaviy muhit barcha sohalarni rivojlantirishga xizmat qilishini ta’kidladi.",
	},
	date: { ru: "31 Дек 2018", uz: "31- dekabr 2020" },
	img: "/blog/president.jpg",
	content: {
		ru: (
			<>
				<p>
					Президент подчеркнул, что благоприятная инвестиционная среда приведет
					к развитию всех сфер.
				</p>
				<p>
					Президент Шавкат Мирзиёев объявил 2019 год Годом активных инвестиций и
					социального развития. Об этом глава государства сказал в ходе своего
					послания 28 декабря.
				</p>
				<p>
					Шавкат Мирзиёев объяснил это тем, что с развитием инвестиций будут
					развиваться и другие сферы. В частности, одной из основных задач на
					следующий год будет создание благоприятного инвестиционного климата.
				</p>
				<p>
					Среди других задач — сокращение присутствия государства в экономике,
					увеличение частного предпринимательства, продолжение валютной
					либерализации, подготовку квалифицированных кадров, обуздание
					инфляции.
				</p>
				<p>
					Новость дополняется Ссылка на источник{" "}
					<a
						href="https://www.spot.uz/ru"
						target="_blank"
						rel="noreferrer noopener"
					>
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Prezidentimiz qulay sarmoyaviy muhit barcha sohalarni rivojlantirishga
					xizmat qilishini ta’kidladi.
				</p>
				<p>
					Prezident Shavkat Mirziyoyev 2019-yilni “Faol investitsiyalar va
					ijtimoiy rivojlanish yili” deb e’lon qildi. Bu haqida Bu haqda davlat
					rahbari 28-dekabr kuni murojaatida aytib o‘tdi.
				</p>
				<p>
					Shavkat Mirziyoyev buni sarmoya rivojlanishi bilan boshqa sohalar ham
					rivojlanishi bilan izohladi. IN Xususan, kelgusi yil uchun qulay
					sarmoya yaratish asosiy vazifalardan biri bo‘ladi iqlim.
				</p>
				<p>
					Boshqa vazifalar qatoriga iqtisodiyotda davlat ishtirokini
					kamaytirish, xususiylikni oshirish kiradi tadbirkorlik, valyuta
					liberallashuvini davom ettirish, malakali kadrlar tayyorlash, cheklash
					inflyatsiya.
				</p>
				<p>
					Havola manbasiga yangilik to'ldirilmoqda{" "}
					<a
						href="https://www.spot.uz/ru"
						target="_blank"
						rel="noreferrer noopener"
					>
						Spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/telegram-voice-chat",
	next: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
