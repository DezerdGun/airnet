import st from './whyCard.module.scss';

export default function WhyCard({ content }) {
	return (
		<div className={st.whyCard}>
			{content.map((item) => (
				<div
					className={st.whyCard__item}
					style={{ background: `url('${item.img}') no-repeat` }}
					key={item.title}>
					<h6>{item.title}</h6>
					<p>{item.decsription}</p>
				</div>
			))}
		</div>
	);
}
