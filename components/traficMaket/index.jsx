import Container from '../container/index.jsx'
import CustomTable from '../customTable'
import st from './traficMaket.module.scss'

export default function TraficMaket({
	title,
	headTitle,
	description,
	bgImg,
	className,
	table,
	endText,
}) {
	return (
		<Container
			style={{ background: `url('${bgImg}') no-repeat` }}
			className={className}
			headTitle={headTitle}
			title={title}
			description={description}
		>
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
	)
}
