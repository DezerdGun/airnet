import Container from '../container';
import CustomTable from '../customTable';
import st from './traficMaket.module.scss';

export default function TraficMaket({ title, description, bgImg, table, endText }) {
	return (
		<div className={st.traficMaket}>
			<Container bgImg={bgImg}>
				<div className={st.traficMaket__block}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className={st.traficMaket__table}>
					{table.map((item, i) => (
						<CustomTable key={`table${i}`} table={item} />
					))}
				</div>
				{endText ? <p className={st.traficMaket__endText}>{endText}</p> : null}
			</Container>
		</div>
	);
}
