import Container from "../container/index.jsx"
import st from "./stepsBlock.module.scss"

export default function StepsBlock({ title, data, img, language }) {
	return (
		<Container title={title}>
			<div className={st.stepsBlock}>
				<ol>
					{data.map((item) => (
						<li key={item.title[language]}>
							<h3>{item.title[language]}</h3>
							<div>{item.description[language]}</div>
						</li>
					))}
				</ol>
				<div>
					<img src={img} />
				</div>
			</div>
		</Container>
	)
}
