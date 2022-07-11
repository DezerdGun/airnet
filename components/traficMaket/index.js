import Container from '../container';
import CustomTable from '../customTable';
import st from './traficMaket.module.scss';

export default function TraficMaket({ title, description, bgImg, table, endText }) {
	return (
		<Container style={{ background: `url('${bgImg}') no-repeat` }} title={title} description={description}>
			<div className={st.traficMaket}>
				<div className={st.traficMaket__table}>
					{table.map((item, i) => (
						<div key={`table${i}`} className={st.traficMaket__table__item}>
							<CustomTable table={item} />
						</div>
					))}
				</div>
				{endText ? <p className={st.traficMaket__endText}>{endText}</p> : null}
			</div>
		</Container>
	);
}
