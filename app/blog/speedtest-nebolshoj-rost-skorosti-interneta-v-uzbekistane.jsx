import NewsItem from "@/components/newsItem"

const data = {
	title: {
		ru: "Speedtest небольшой рост скорости интернета в Узбекистане",
		uz: "Speedtest O‘zbekistonda internet tezligini biroz oshirdi",
		en: "Speedtest small increase in internet speed in Uzbekistan",
	},
	desc: {
		ru: "По итогам ноября Узбекистан занял 108 место по скорости мобильного интернета и 111 по скорости проводного.",
		uz: "O‘zbekiston noyabr oyi yakunlariga ko‘ra mobil internet tezligi bo‘yicha 108-o‘rinni, simli ulanish tezligi bo‘yicha esa 111-o‘rinni egalladi",
		en: "According to the results of November, Uzbekistan ranked 108th in terms of mobile Internet speed and 111th in wired speed.",
	},
	date: "14.12.2018",
	img: "/blog/speedtest.jpg",
	content: {
		ru: (
			<>
				<p>
					По итогам ноября Узбекистан занял 108 место по скорости мобильного интернета и 111 по скорости проводного.
				</p>
				<p>
					Интернет-сервис Speedtest.net ирландской компании Ookla опубликовал ежемесячный рейтинг Speedtest Global
					Index, в котором содержатся данные по скорости беспроводного и проводного интернета в мире по итогам ноября.
				</p>
				<p>
					По скорости мобильного интернета Узбекистан поднялся на две позиции и теперь занимает 108 место из 123 (10,44
					Мбит/с).
				</p>
				<p>
					По скорости проводного интернета поднялся на одну позицию и теперь занимает 111-е место из 126 (9,98 Мбит/с)
				</p>
				<p>
					Лидером рейтинга по скорости мобильного интернета стала Исландия (72,54 Мбит/с), по скорости проводного
					остается Сингапур (185,25 Мбит/с).
				</p>
				<p>Ранее Spot писал, что «Узбектелеком» объявил о расширении пропускной способности интернета в 10 раз.</p>
				<p>
					Speedtest вычисляет скорость и формирует рейтинг на основе собственных данных, полученных от посетителей из
					той или иной страны. В месяц сайт посещает более 150 млн людей, он считается одним из основных сервисов для
					определения скорости интернета на месте.
				</p>
				<p>
					Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Noyabr oyi yakunlari bo‘yicha O‘zbekiston mobil aloqa tezligi bo‘yicha 108-o‘rinni egalladi. Internet va simli
					tezlik uchun 111.
				</p>
				<p>
					Irlandiyaning Ookla kompaniyasining Speedtest.net internet-xizmati e'lon qildi o'z ichiga olgan Speedtest
					Global Indexning oylik reytingi ga muvofiq dunyodagi simsiz va simli Internet tezligi haqidagi ma'lumotlar
					noyabr natijalari.
				</p>
				<p>
					Mobil internet tezligi bo‘yicha O‘zbekiston ikki pog‘onaga ko‘tarildi va hozirda 123 (10,44 Mbit/s) orasida
					108-o‘rinni egalladi.
				</p>
				<p>Simli Internet tezligi bo'yicha u bir pozitsiyaga ko'tarildi va hozir 126 orasida 111-o‘rin (9,98 Mbit/s)</p>
				<p>
					Islandiya mobil internet tezligi reytingida yetakchilik qilmoqda (72,54 Mbit / s), Singapur eng tez (185,25
					Mbit / s) bo'lib qolmoqda Mbps).
				</p>
				<p>
					Eslatib o‘tamiz, avvalroq Spot “O‘zbektelekom” o‘tkazish qobiliyati kengaygani haqida xabar bergani haqida
					yozgan edi Internet qobiliyati 10 marta.
				</p>
				<p>
					Speedtest tezlikni hisoblab chiqadi va o'ziga asoslanib reyting yaratadi ma'lum bir mamlakatdan tashrif
					buyuruvchilardan olingan ma'lumotlar. Oyiga sayt 150 milliondan ortiq kishi tashrif buyuradi, bu asosiy
					xizmatlardan biri hisoblanadi Internet tezligini joyida aniqlash.
				</p>
				<p>
					Manba'a uchun link{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>
					As a result of November, Uzbekistan ranked 108th in terms of mobile Internet speed and 111th in wired speed.
				</p>
				<p>
					The Internet service Speedtest.net of the Irish company Ookla has published a monthly rating Speedtest Global
					Index, which contains data on the speed of wireless and wired Internet in the world in November.
				</p>
				<p>
					In terms of mobile Internet speed, Uzbekistan has risen by two positions and now occupies 108th place out of
					123 (10.44 Mbps).
				</p>
				<p>In terms of wired Internet speed, it has risen one position and now ranks 111th out of 126 (9.98 Mbps)</p>
				<p>
					Iceland (72.54 Mbps) became the leader in the rating in terms of mobile Internet speed, in terms of wired
					remains Singapore (185.25 Mbps).
				</p>
				<p>Earlier, Spot wrote that Uzbektelecom announced the expansion of Internet bandwidth by 10 times.</p>
				<p>
					Speedtest calculates speed and generates a rating based on its own data received from visitors from one
					country or another. The site is visited by more than 150 million people a month, it is considered one of the
					main services for determining the speed of the Internet on the spot.
				</p>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/facebook-soobshhil-ob-oshibke",
	next: "/blog/google-podvel-itogi-2018-goda",
}

export default function Blog({ language }) {
	return <NewsItem data={data} language={language} />
}
