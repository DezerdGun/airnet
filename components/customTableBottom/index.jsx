import st from "./customTableBottom.module.scss"

export default function CustomTableBottom({ price, link, text }) {
	return (
		<div className={st.customTableBottom}>
			<div className={st.customTableBottom__price}>{price}</div>
			<div className={st.customTableBottom__link}>
				<a href={link} target="_blank" rel="noopener noreferrer">
					{text}
				</a>
			</div>
		</div>
	)
}
