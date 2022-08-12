import Container from '../container';
import st from './tarifMaket.module.scss';

export default function TarifMaket({ headTitle, bgImg, description, className, endText, children }) {
	return (
		<div className={st.tarifMaket} style={{ background: `url('${bgImg}') no-repeat` }}>
			<Container
				headTitle={headTitle}
				style={{}}
				description={description}
				className={className}
				endText={endText}>
				{children}
			</Container>
		</div>
	);
}
