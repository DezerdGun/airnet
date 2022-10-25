import { useState } from "react";
import styles from "./drop.module.scss";

const Drop = ({ item, isTarifCard }) => {
	const [price, setPrice] = useState({ checked: 0, show: false });

	return (
		<div className={`${styles.drop} ${isTarifCard ? styles.drop__tarifCard : ""}`}>
			<div
				onClick={() => setPrice({ ...price, show: !price.show })}
				className={styles.drop__checked}
			>
				<div>
					{item[price.checked].price}
					<span>
						сум
						<hr />
						{console.log(item, price.checked)}
						{item[price.checked].date}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="8"
						viewBox="0 0 12 8"
						fill="black"
					>
						<path
							d="M11.3359 1.33366L6.0026 6.66699L0.669271 1.33366"
							stroke="#F8F8F8"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</div>
				<span>при оплате за {item[price.checked].dateOff}</span>
			</div>
			<ul className={`${styles.drop__ul} ${price.show ? styles.drop__ul__active : ""}`}>
				{item.map((el, i) => (
					<li onClick={() => setPrice({ checked: i, show: false })} key={el.price}>
						<strong>
							{el.price} сум в {el.date}
						</strong>
						<br />
						<span>при оплате за {el.dateOff}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Drop;
