import Container from "@/components/container"
import SEO from "@/components/seo"

export default function Speed({ language }) {
	const langData = {
		seoT: {
			ru: "Проверка скорости | Airnet",
			uz: "Airnet tezligini tekshirish",
		},
		descT: {
			ru: "Проверка скорости подключения интернет услуги в сети TAS-IX в Ташкенте",
			uz: "Toshkent shahridagi TAS-IX tarmog‘ida internet xizmatlarini ulash tezligini tekshirish",
		},
		headTitle: {
			ru: "Проверка скорости",
			uz: "Tezlikni tekshirish",
		},
		speed: {
			ru: (
				<>
					<hr />
					<p>
						Данный сервис предназначен для того, чтобы Вы могли проверить
						“видимость” того или иного узла со стороны наших площадок с помощью
						ping, traceroute, а также протестировать скорость загрузки файлов.
						<br />
						<a
							href="http://airnetuz.speedtestcustom.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Проверка скорости
						</a>
					</p>
				</>
			),
			uz: (
				<>
					<hr />
					<p>
						Ushbu xizmat sizga tekshirish imkonini berish uchun yaratilgan.
						Bizning saytlarimizdan ma'lum bir tugunning "ko'rinishi" yordamida
						ping, traceroute, shuningdek, faylni yuklab olish tezligini sinab
						ko'ring.
						<br />
						<a
							href="http://airnetuz.speedtestcustom.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tezlikni tekshirish
						</a>
					</p>
				</>
			),
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<Container headTitle={langData.headTitle[language]}>
				{langData.speed[language]}
			</Container>
		</>
	)
}
