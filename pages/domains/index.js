import Container from '../../components/container';
import Partners from '../../components/partners';
import st from './domains.module.scss';
import Link from 'next/dist/client/link';
import { useRef, useState } from 'react';
import SEO from '../../components/seo';

export default function Domains() {
	const [isDomainFree, setIsDomainFree] = useState(undefined),
		domainName = useRef();

	const checkDomain = (e) => {
		e.preventDefault();
		fetch(
			`https://api.whoisfreaks.com/v1.0/whois?apiKey=6e967135ca21493f85f7070ec981e67e&whois=live&domainName=${
				document.querySelector('#domainName').value
			}.uz`
		).then((res) => {
			console.log(res);
			return res.domain_registered === 'yes' ? setIsDomainFree('yes') : setIsDomainFree('no');
		});
	};

	return (
		<>
			<SEO
				title="Регистрация домен UZ, Купить домен UZ | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Быстрая регистрация доменов, по самым низким ценам, в зоне uz"
			/>
			<div className={st.domains}>
				<Container
					className="mt-0"
					style={{ background: "url('/servers-2.jpg') no-repeat" }}
					headTitle="Регистрация доменных имен в зоне UZ"
					description={
						<p>
							Компания &quot;AIRNET&quot; является официальным{' '}
							<a href="https://cctld.uz/reg/">регистратором домен в зоне UZ</a>
						</p>
					}>
					<div className={st.domains__head}>
						<div className={st.domains__head__block}>
							<h3>Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot;.</h3>
							<p>
								Перед регистрацией просим вас ознакомиться с{' '}
								<a href="https://cctld.uz/info/polru/">
									Положением о порядке регистрации и пользования доменными именами в домене «UZ»
								</a>
							</p>
							<form onSubmit={checkDomain} className={st.domains__head__block__input}>
								<div className={st.domains__head__block__input__block}>
									<span>www.</span>
									<input
										ref={domainName}
										id="domainName"
										placeholder="Например: airnet.uz"
										required
									/>
									<span>.</span>
									<select>
										<option>uz</option>
										{/* <option>Все</option> */}
									</select>
								</div>
								<button type="submit">Проверить</button>
							</form>
							{isDomainFree && (
								<p className={st.domains__head__block__text}>
									<strong>{domainName.current.value}.uz</strong>{' '}
									{isDomainFree === 'yes' ? (
										<span className={st.domains__head__block__text__red}>
											доменное имя в данное время недоступно для регистрации.
										</span>
									) : (
										<>
											<span className={st.domains__head__block__text__green}>
												доменное имя в данное время недоступно для регистрации.
											</span>{' '}
											Нажмите{' '}
											<a href="https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=airnet22">
												Заказать
											</a>{' '}
											для регистрации доменного имени.
										</>
									)}
								</p>
							)}
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
							Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен
							на нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
						</p>
						<p>* При регистрации хостинг с доменом</p>
						<p>
							** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней
							после окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в
							течение 30 календарных дней предыдущий владелец может вернуть себе домен.
						</p>
					</div>
				</Container>
				<Partners />
			</div>
		</>
	);
}
