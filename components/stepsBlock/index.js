import Container from '../container';
import st from './stepsBlock.module.scss';

export default function StepsBlock({ title, data, img }) {
	return (
		<Container title={title}>
			<div className={st.stepsBlock}>
				<ol>
					{data.map((item) => (
						<li key={item.title}>
							<h3>{item.title}</h3>
							<div>{item.description}</div>
						</li>
					))}
				</ol>
				<div>
					<img src={img} />
				</div>
			</div>
		</Container>
	);
}
