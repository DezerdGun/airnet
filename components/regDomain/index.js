import Container from '../container';
import st from './regDomain.module.scss';

export default function RegDomain() {
	return (
		<Container style={{ background: `url('/domains.jpg') no-repeat` }} title="Регистрация доменов">
			<div className={st.regDomain}>
				<div className={st.regDomain__block}>
					<p>Проверьте доступно доменное имя в зоне «UZ» для регистрации</p>
					<div className={st.regDomain__block__input}>
						<div className={st.regDomain__block__input__block}>
							<span>www.</span>
							<input />
							<span>.</span>
							<select>
								<option>uz</option>
								<option>Все</option>
							</select>
						</div>
						<button>Проверить</button>
					</div>
				</div>

				<p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p>
				<p className={st.regDomain__endText}>Домен в зоне UZ - 17.000 сум/год</p>
			</div>
		</Container>
	);
}
