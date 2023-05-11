import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Илон Маск хочет привлечь $500 млн на создание мирового интернета",
		uz: "Ilon Mask jahon internetini qurish uchun 500 million dollar yig‘moqchi",
		en: "Elon Musk wants to raise $500 million to build the world's internet",
	},
	desc: {
		ru: "Проект Starlink предполагает создание обширной сети спутников, способных передавать интернет-трафик.",
		uz: "Starlink loyihasi internet-trafikni uzatishga qodir bo'lgan keng yo'ldoshlar tarmog'ini yaratishni nazarda tutadi",
		en: "The Starlink project involves the creation of an extensive network of satellites capable of transmitting Internet traffic.",
	},
	date: "24.12.2018",
	img: "/blog/spacex.jpg",
	content: {
		ru: (
			<>
				<p>Проект Starlink предполагает создание обширной сети спутников, способных передавать интернет-трафик.</p>
				<p>
					SpaceX Илона Маска планирует привлечь $500 млн для запуска собственной сети космических спутников,
					предназначенных для передачи интернет-трафика в рамках проекта Starlink, сообщает The Wall Street Journal.
				</p>
				<p>
					По данным издания, SpaceX договорилась с действующими акционерами и с инвестиционной компанией Baillie Gifford
					& Co о приобретении нового выпуска акций по цене $186 за одну бумагу, пишет РБК.
				</p>
				<p>
					Эта компания уже является инвестором другой компании Маска, Tesla. Стороны согласовали условия финансирования,
					однако пока деньги не были перечислены SpaceX. Источники WSJ сообщили, что официально о сделке стороны могут
					объявить до конца года.
				</p>
				<p>
					Проект Starlink предполагает создание обширной сети спутников, способных передавать интернет-трафик. Для
					начала SpaceX планирует вывести на низкую орбиту 4 тыс. аппаратов, в будущем сеть должна вырасти до 11 тыс.
					единиц.
				</p>
				<p>
					Сейчас самая крупная спутниковая телекоммуникационная сеть насчитывает 65 спутников. Однако к настоящему
					времени SpaceX запустила в космос только два прототипа — запуск ракеты с аппаратами Microsat 2a и Microsat 2b
					был произведен в феврале 2018 года.
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
					Starlink loyihasi keng ko'lamli sun'iy yo'ldoshlar tarmog'ini yaratishni o'z ichiga oladi internet-trafikni
					uzatish.
				</p>
				<p>
					Ilon Maskning SpaceX kompaniyasi o‘zini uchirish uchun 500 million dollar yig‘ishni rejalashtirmoqda uzatish
					uchun mo'ljallangan kosmik sun'iy yo'ldoshlar tarmoqlari Starlink loyihasi doirasida internet-trafik, deb
					xabar beradi The Wall Street Jurnal.
				</p>
				<p>
					Nashrning yozishicha, SpaceX joriy aksiyadorlar va ular bilan kelishib olgan investitsiya kompaniyasi Baillie
					Gifford & Co yangi sotib olish to'g'risida har bir aksiya uchun 186 dollar bahoda aksiyalar chiqarilishi, deb
					yozadi RBC.
				</p>
				<p>
					Bu kompaniya allaqachon Maskning boshqa Tesla kompaniyasining investori hisoblanadi. Tomonlar moliyalashtirish
					shartlari bo'yicha kelishib oldilar, ammo hozircha pul bo'lmagan SpaceX tomonidan ro'yxatga olingan. WSJ
					manbalari kelishuv haqida rasman ma'lum qilishdi tomonlar yil oxirigacha e'lon qilishlari mumkin.
				</p>
				<p>
					Starlink loyihasi keng ko'lamli sun'iy yo'ldoshlar tarmog'ini yaratishni o'z ichiga oladi internet-trafikni
					uzatish. Boshlash uchun SpaceX olib kelishni rejalashtirmoqda past orbitali 4 ming qurilma, kelajakda tarmoq
					11 mingtagacha o'sishi kerak. birliklar.
				</p>
				<p>
					Hozirda eng yirik sun'iy yo'ldosh telekommunikatsiya tarmog'i mavjud 65 sun'iy yo'ldosh. Biroq hozirgacha
					SpaceX koinotga uchirdi faqat ikkita prototip - Microsat 2a va Microsat qurilmalari bilan raketa uchirish 2b
					2018 yil fevral oyida ishlab chiqarilgan.
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
					The Starlink project involves the creation of an extensive network of satellites, capable of transmitting
					Internet traffic.
				</p>
				<p>
					Elon Musk's SpaceX plans to raise $500 million to launch its own networks of space satellites intended for
					transmission Internet traffic as part of the Starlink project, reports The Wall Street Journal.
				</p>
				<p>
					According to the publication, SpaceX agreed with the current shareholders and with investment company Baillie
					Gifford & Co on the acquisition of a new issue of shares at a price of $186 per share, writes RBC.
				</p>
				<p>
					This company is already an investor in Musk's other company, Tesla. The parties agreed on the terms of
					financing, but so far the money has not been listed by SpaceX. Sources of the WSJ said that officially about
					the deal the parties may announce before the end of the year.
				</p>
				<p>
					The Starlink project involves the creation of an extensive network of satellites, capable of transmitting
					Internet traffic. To start, SpaceX is planning put 4 thousand devices into low orbit, in the future the
					network should grow to 11 thousand units.
				</p>
				<p>
					Now the largest satellite telecommunications network has 65 satellites. So far, however, SpaceX has launched
					into space only two prototypes - rocket launch with Microsat 2a and Microsat 2b was produced in February 2018.
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
	prev: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
	next: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
