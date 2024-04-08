import Drop from "../drop"
import st from "../tarifCard/tarifCard.module.scss"

export default function TarifCard2({ index, tarif, show, setShow, language }) {
	const langData = {
		mb: {
			ru: "МБ",
			uz: "MB",
			en: "MB",
		},
		count: {
			ru: "Кол-во сайтов",
			uz: "Saytlar soni",
			en: "Number of sites",
		},
		free: {
			ru: "Бесплатно",
			uz: "Bepul",
			en: "Free",
		},
		domen: {
			ru: "Домен .UZ",
			uz: ".Uz domeni",
			en: "Domain .UZ",
		},
		present: {
			ru: "В Подарок",
			uz: "Sovg'a sifatida",
			en: "As a gift",
		},
		obyom: {
			ru: "Объем трафика",
			uz: "Trafik hajmi",
			en: "Traffic volume",
		},
		channel: {
			ru: "Канал",
			uz: "Kanal",
			en: "Channel",
		},
		speed: {
			ru: "Мбит/сек",
			uz: "Mbit/s",
			en: "Mbps",
		},
		gigSpeed: {
			ru: "Гбит/сек",
			uz: "Gbit/s",
			en: "Gbps",
		},
		order: {
			ru: "Заказать хостинг",
			uz: "Buyurtma berish",
			en: "Order hosting",
		},
	}

	return (
		<div className={st.tarifCard}>
			<div className={st.tarifCard__header}>
				<h3>{tarif.title[language]}</h3>
				<div className={st.tarifCard__header__price}>
					<Drop
						index={index}
						item={tarif.prices}
						isTarifCard={true}
						show={show}
						setShow={setShow}
						language={language}
					/>
				</div>
			</div>
			<table>
				<tr>
					<td>SSD</td>
					<td>{langData.count[language]}</td>
				</tr>
				<tr>
					<th>
						{tarif.ssd} {langData.mb[language]}
					</th>
					<th>{tarif.sites}</th>
				</tr>
			</table>
			<table>
				<tr>
					<td>SSL</td>
					<td>{langData.domen[language]}</td>
				</tr>
				<tr>
					<th>{langData.free[language]}</th>
					<th>{langData.present[language]}*</th>
				</tr>
			</table>
			<table>
				<tr>
					<td>{langData.obyom[language]}</td>
					<td>SitePad</td>
				</tr>
				<tr>
					<th>∞</th>
					<th>{langData.free[language]}</th>
				</tr>
			</table>
			<table>
				<tr>
					<td>{langData.channel[language]}</td>
					<td>TAS-IX</td>
				</tr>
				<tr>
					<th>100 {langData.speed[language]}</th>
					<th>1 {langData.gigSpeed[language]}</th>
				</tr>
			</table>
			<hr />
			<button>
				<a href={tarif.link} target="_blank" rel="noopener noreferrer">
					{langData.order[language]}
				</a>
			</button>
		</div>
	)
}
