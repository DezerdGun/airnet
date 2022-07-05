import Container from '../container';
import st from './regDomain.module.scss';

export default function RegDomain() {
	return (
		<Container style={{ background: `url('/domains.jpg') no-repeat` }}>
			<div className={st.regDomain}>
				<h3>Регистрация доменов</h3>
				<div className={st.regDomain__block}>
					<p>Проверьте доступно доменное имя в зоне «UZ» для регистрации</p>
					<div className={st.regDomain__block__input}>
						<span>www.</span>
						<input />
						<span>.</span>
						<select>
							<option>uz</option>
							<option>Все</option>
						</select>
						<button>Проверить</button>
					</div>
				</div>

				<p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p>
				<p className={st.regDomain__endText}>Домен в зоне UZ - 17.000 сум/год</p>
			</div>
		</Container>
	);
}
