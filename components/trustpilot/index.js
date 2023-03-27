import Container from '../container/index.jsx'
import st from './trustpilot.module.scss'

export default function TrustPilot() {
	return (
		<Container
			title='Отзывы клиентов'
			style={{ backgroundColor: '#eeebee' }}
			clNTitle='text-center text-black'
		>
			<div className={st.trustpilot}>
				<div></div>
			</div>
		</Container>
	)
}
