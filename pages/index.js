import Container from '../components/container';
import Swiper from '../components/swiper';
import st from './index.module.scss';

export default function Home() {
	return (
		<div className={st.home}>
			<Swiper />
			<Container></Container>
		</div>
	);
}
