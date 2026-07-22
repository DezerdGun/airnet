import { useState } from "react"
import styles from "./drop.module.scss"

const Drop = ({ item, index, show, setShow, isTarifCard, language }) => {
	const [checked, setChecked] = useState(0)

	const langData = {
		sum: {
			ru: "сум / ",
			uz: "so'm / ",
			en: "sum / ",
		},
		sumV: {
			ru: "сум",
			uz: "so'm",
			en: "sum",
		},
	}

	return (
		<div
			className={`tarif_drop ${styles.drop} ${
				isTarifCard ? styles.drop__tarifCard : ""
			}`}
		>
			<div
				className={styles.drop__checked}
				onClick={() => (index === show ? setShow(-1) : setShow(index))}
			>
				<div className="tarif_drop">
					{item[checked].price}
					<span className="tarif_drop">
						{langData.sum[language]}{item[checked].dateOff}
					</span>
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0d5446" className="tarif_drop">
					<path className="tarif_drop" d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
				</div>
			</div>
			<ul
				className={`${styles.drop__ul} ${
					show == index ? styles.drop__ul__active : ""
				}`}
			>
				{item.map((el, i) => (
					<li
						onClick={() => {
							setChecked(i)
							setShow(-1)
						}}
						key={el.price}
					>
						<strong>
							{el.price} {langData.sumV[language]}
							{el.date}
						</strong> /
						<span>
							{language == "uz" ? (
								<>{el.dateOff} ga to'lov</>
							) : language == "en" ? (
								<> {el.dateOff}</>
							) : (
								<> {el.dateOff}</>
							)}
							{el.discount && (
								<em className="periodDisc">{el.discount}</em>
							)}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Drop
