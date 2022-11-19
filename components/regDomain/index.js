import axios from "axios";
import { useState } from "react";
import Container from "../container";
import st from "./regDomain.module.scss";

export default function RegDomain() {
	return (
		<div className={st.regDomain}>
			<Container title="Зарегистрируем домен?">
				<RegDomainBlock />
			</Container>
		</div>
	);
}

export const RegDomainBlock = () => {
	const [isDomainFree, setIsDomainFree] = useState({
			domain: "",
			isShow: false,
			isActive: false,
		}),
		[loading, setLoading] = useState(false);

	const checkDomain = (e) => {
		e.preventDefault();

		setLoading(true);
		let domain = document.querySelector("#domain").value;

		if (!domain.includes(".uz")) {
			domain += ".uz";
			document.querySelector("#domain").value = domain;
		}

		axios
			.post("https://api.airnet.uz/api/check/domain", {
				domain,
			})
			.then((res) => {
				setLoading(false);

				if (res.data.data?.dstatus !== "empty")
					setIsDomainFree({ domain, isShow: true, isActive: true });
				else setIsDomainFree({ domain, isShow: true, isActive: false });
			});
	};

	return (
		<>
			<form onSubmit={checkDomain} className={st.regDomain__block}>
				www.{" "}
				<input id="domain" placeholder="Введите название домена например: airnet.uz" required />
				<button type="submit" disabled={loading}>
					Проверить{" "}
					{loading && (
						<div class="spinner-border text-light spinner-border-sm" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					)}
				</button>
			</form>

			{isDomainFree.isShow && (
				<p className={st.regDomain__text}>
					<strong>{isDomainFree.domain}</strong>{" "}
					{isDomainFree.isActive ? (
						<span className={st.regDomain__text__red}>
							доменное имя в данное время недоступно для регистрации.
						</span>
					) : (
						<>
							<span className={st.regDomain__text__green}>
								доменное имя в данное время доступно для регистрации.
							</span>{" "}
							Нажмите{" "}
							<a
								href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
							>
								Заказать
							</a>{" "}
							для регистрации доменного имени.
						</>
					)}
				</p>
			)}

			<p className={st.regDomain__price}>.UZ - 20.000 сум/год</p>
			<p className={st.regDomain__price}>.RU - 65.000 сум/год</p>
			<p className={st.regDomain__price}>.COM - 150.000 сум/год</p>
			<p className={st.regDomain__price}>.NET - 150.000 сум/год</p>
			<p className={st.regDomain__price}>.ORG - 200.000 сум/год</p>
			{/* <p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p> */}
		</>
	);
};
