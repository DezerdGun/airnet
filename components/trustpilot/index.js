import st from './trustpilot.module.scss';
import Container from '../container';

export default function TrustPilot() {
	return (
		<Container
			title="Отзывы клиентов"
			style={{ backgroundColor: '#eeebee' }}
			clNh3="text-center text-uppercase text-black">
			<div className={st.trustpilot}>
				<div></div>
			</div>
		</Container>
	);
}
