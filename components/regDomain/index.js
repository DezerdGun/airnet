import Container from '../container';
import st from './regDomain.module.scss';

export default function RegDomain() {
	return (
		// <Container style={{ background: `url('/domains.jpg') no-repeat` }} title="Зарегистрируем домен?">
		<div className={st.regDomain}>
			<Container title="Зарегистрируем домен?">
				<RegDomainBlock />
			</Container>
		</div>
	);
}

export const RegDomainBlock = () => {
	return (
		<>
			<div className={st.regDomain__block}>
				www. <input placeholder="Введите название домена например: airnet.uz" />
				<button>Проверить</button>
			</div>

			<p className={st.regDomain__price}>.UZ - 20.000сум/год</p>
			<p className={st.regDomain__price}>.RU - 65.000сум/год</p>
			<p className={st.regDomain__price}>.COM - 150.000сум/год</p>
			<p className={st.regDomain__price}>.NET - 150.000сум/год</p>
			<p className={st.regDomain__price}>.ORG - 200.000сум/год</p>
			<p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p>
		</>
	);
};
