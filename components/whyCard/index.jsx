import st from "./whyCard.module.scss"

export default function WhyCard({ content, fourCol, language }) {
	return (
		<div className={st.whyCard}>
			{content.map((item) => (
				<div
					className={`${st.whyCard__item} ${
						fourCol ? st.whyCard__item__fourCol : ""
					}`}
					style={{ background: `url('${item.img}') no-repeat` }}
					key={item.title[language]}
				>
					<h6>{item.title[language]}</h6>
					<p>{item.description[language]}</p>
				</div>
			))}
		</div>
	)
}
