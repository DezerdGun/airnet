import st from "./whyCard.module.scss";

export default function WhyCard({ content, fourCol, language }) {
	return (
		<div className={st.whyCard}>
			{content.map((item) => (
				<div
					className={`${st.whyCard__item} ${fourCol ? st.whyCard__item__fourCol : ""}`}
					style={{ background: `url('${item.img}') no-repeat` }}
					key={language ? item.title[language] : item.title}
				>
					<h6>{language ? item.title[language] : item.title}</h6>
					<p>{language ? item.description[language] : item.description}</p>
				</div>
			))}
		</div>
	);
}
