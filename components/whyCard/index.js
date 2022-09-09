import st from "./whyCard.module.scss";

export default function WhyCard({ content, fourCol }) {
	return (
		<div className={st.whyCard}>
			{content.map((item) => (
				<div
					className={`${st.whyCard__item} ${fourCol ? st.whyCard__item__fourCol : ""}`}
					style={{ background: `url('${item.img}') no-repeat` }}
					key={item.title}
				>
					<h6>{item.title}</h6>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
}
