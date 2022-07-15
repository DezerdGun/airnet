import Container from '../../components/container';
import Partners from '../../components/partners';
import st from './domains.module.scss';
import Link from 'next/dist/client/link';

export default function Domains() {
	// const checkDomain = async (val)=>{
	//     const res = await fetch({
	//         method:'POST',
	//         url: '',
	//         body: ''
	//     })

	// }

	return (
		<div className={st.domains}>
			<Container
				className="mt-0"
				headTitle="Регистрация доменных имен в зоне UZ"
				style={{ background: "url('/servers-2.jpg') no-repeat" }}>
				<div className={st.domains__head}>
					<p>
						Компания "AIRNET" является официальным{' '}
						<a href="https://cctld.uz/reg/">регистратором домен в зоне UZ</a>
					</p>
					<div className={st.domains__head__block}>
						<h3>Введите название доменного имени и нажмите на кнопку "Проверить".</h3>
						<p>
							Перед регистрацией просим вас ознакомиться с{' '}
							<a href="https://cctld.uz/info/polru/">
								Положением о порядке регистрации и пользования доменными именами в домене «UZ»
							</a>
						</p>
						<div className={st.domains__head__block__input}>
							<div className={st.domains__head__block__input__block}>
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
						<div className={st.domains__head__block__table}>
							<table>
								<tr>
									<th>Доменная зона</th>
									<th>Регистрации c хостингом</th>
									<th>С хостингом</th>
									<th>Без хостинга</th>
									<th>Redemption period</th>
									<th>Купить</th>
								</tr>
								<tr>
									<td>.UZ</td>
									<th>17 000 сум*</th>
									<th>
										<Link href="/free-domains">
											<a>Бесплатно*</a>
										</Link>
									</th>
									<th>20 000 сум*</th>
									<th>40 000 сум**</th>
									<th>
										<a href="https://billing.airnet.uz/billing.php?do=zones">Купить</a>
									</th>
								</tr>
							</table>
						</div>
					</div>
					<p>
						Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен на
						нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
					</p>
					<p>* При регистрации хостинг с доменом</p>
					<p>
						** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней после
						окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в течение 30
						календарных дней предыдущий владелец может вернуть себе домен.
					</p>
				</div>
			</Container>
			<Partners />
		</div>
	);
}
