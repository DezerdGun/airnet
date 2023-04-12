import Container from "@/components/container"
import SEO from "@/components/seo"

export default function Speed({ language }) {
	const langData = {
		seoT: {
			ru: "Проверка скорости | Airnet",
			uz: "Airnet tezligini tekshirish",
			en: "Speed test | Airnet",
		},
		descT: {
			ru: "Проверка скорости подключения интернет услуги в сети TAS-IX в Ташкенте",
			uz: "Toshkent shahridagi TAS-IX tarmog‘ida internet xizmatlarini ulash tezligini tekshirish",
			en: "Checking the speed of connecting Internet services in the TAS-IX network in Tashkent",
		},
		headTitle: {
			ru: "Проверка скорости",
			uz: "Tezlikni tekshirish",
			en: "Speed Check",
		},
		speed: {
			ru: (
				<>
					<hr />
					<p>
						Данный сервис предназначен для того, чтобы Вы могли проверить “видимость” того или иного узла со стороны
						наших площадок с помощью ping, traceroute, а также протестировать скорость загрузки файлов.
						<br />
						<a href="http://airnetuz.speedtestcustom.com/" target="_blank" rel="noopener noreferrer">
							Проверка скорости
						</a>
					</p>
				</>
			),
			uz: (
				<>
					<hr />
					<p>
						Ushbu xizmat sizga tekshirish imkonini berish uchun yaratilgan. Bizning saytlarimizdan ma'lum bir tugunning
						"ko'rinishi" yordamida ping, traceroute, shuningdek, faylni yuklab olish tezligini sinab ko'ring.
						<br />
						<a href="http://airnetuz.speedtestcustom.com/" target="_blank" rel="noopener noreferrer">
							Tezlikni tekshirish
						</a>
					</p>
				</>
			),
			en: (
				<>
					<hr />
					<p>
						This service is designed to enable you to check “visibility” of a particular node from our sites using ping,
						traceroute, and also test file download speed.
						<br />
						<a href="http://airnetuz.speedtestcustom.com/" target="_blank" rel="noopener noreferrer">
							Speed test
						</a>
					</p>
				</>
			),
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<Container headTitle={langData.headTitle[language]}>{langData.speed[language]}</Container>
		</>
	)
}
