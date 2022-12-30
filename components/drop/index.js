import { useState } from "react";
import styles from "./drop.module.scss";

const Drop = ({ item, index, show, setShow, isTarifCard, language }) => {
	const [checked, setChecked] = useState(0);

	const langData = {
		sum: {
			ru: "сум",
			uz: "so'm",
			en: "sum",
		},
		sumV: {
			ru: "сум в",
			uz: "so'mda",
			en: "sum in",
		},
	};

	return (
		<div className={`tarif_drop ${styles.drop} ${isTarifCard ? styles.drop__tarifCard : ""}`}>
			<div
				className={styles.drop__checked}
				onClick={() => (index === show ? setShow(-1) : setShow(index))}
			>
				<div className="tarif_drop">
					{item[checked].price}
					<span className="tarif_drop">
						{langData.sum[language]}
						<hr />
						{item[checked].dateOff[language]}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="8"
						viewBox="0 0 12 8"
						fill="black"
						className="tarif_drop"
					>
						<path
							className="tarif_drop"
							d="M11.3359 1.33366L6.0026 6.66699L0.669271 1.33366"
							stroke="#F8F8F8"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</div>
			</div>
			<ul className={`${styles.drop__ul} ${show === index ? styles.drop__ul__active : ""}`}>
				{item.map((el, i) => (
					<li
						onClick={() => {
							setChecked(i);
							setShow(-1);
						}}
						key={el.price}
					>
						<strong>
							{el.price} {langData.sumV[language]} {el.date[language]}
						</strong>
						<br />
						<span>
							{language === "uz" ? (
								<>{el.dateOff.uz} ga to'lov</>
							) : language === "en" ? (
								<>when paying for {el.dateOff.ru}</>
							) : (
								<>при оплате за {el.dateOff.ru}</>
							)}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Drop;
