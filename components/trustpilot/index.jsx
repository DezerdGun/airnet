import Container from '../container/index.jsx'
import st from './trustpilot.module.scss'

export default function TrustPilot({ language }) {
	const langData = {
		title: {
			ru: 'Отзывы клиентов',
			uz: 'Mijozlarning sharhlari',
			en: '',
		},
	}
	return (
		<Container
			title={langData.title[language]}
			style={{ backgroundColor: '#eeebee' }}
			clNTitle='text-center text-black'
		>
			<div className={st.trustpilot}>
				<div></div>
			</div>
		</Container>
	)
}
