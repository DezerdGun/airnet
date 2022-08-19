import Container from '../container';
import st from './regDomain.module.scss';

export default function RegDomain() {
	return (
		<Container style={{ background: `url('/domains.jpg') no-repeat` }} title="Зарегистрируем домен?">
			<div className={st.regDomain}>
				<div className={st.regDomain__block}>
					<input placeholder="Введите название домена" />
					<button>Проверить</button>
				</div>

				<p className={st.regDomain__price}>.uz 17.000сум/год</p>
				<p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p>
			</div>
		</Container>
	);
}
