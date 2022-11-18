import { useRef, useState } from "react";
import Container from "../container";
import st from "./regDomain.module.scss";

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
	const [loading, setLoading] = useState(false);

	const checkDomain = (e) => {
		e.preventDefault();

		setLoading(true);

		console.log(e.target[0].value);

		// fetch(`https://billing.airnet.uz/api.php`, {
		// 	headers: {
		// 		"Access-Control-Allow-Origin": "true",
		// 	},
		// });
		let xhr = new XMLHttpRequest();
		xhr.open("POST", "https://tst.dot.uz/api/api_2_1.php", [false, "airnetAPI", "TurLcMAC4cnB"]);
		xhr.setRequestHeader("Content-type", "text/xml; charset=utf-8");
		xhr.send(
			<data>
				{/* <sLogin>airnetAPI</sLogin>
				<sPass>TurLcMAC4cnB</sPass> */}
				<dname>bozor.uz</dname>
			</data>
		);
	};

	return (
		<>
			<form onSubmit={checkDomain} className={st.regDomain__block}>
				www. <input placeholder="Введите название домена например: airnet.uz" required />
				<button type="submit">Проверить</button>
			</form>

			<p className={st.regDomain__price}>.UZ - 20.000 сум/год</p>
			<p className={st.regDomain__price}>.RU - 65.000 сум/год</p>
			<p className={st.regDomain__price}>.COM - 150.000 сум/год</p>
			<p className={st.regDomain__price}>.NET - 150.000 сум/год</p>
			<p className={st.regDomain__price}>.ORG - 200.000 сум/год</p>
			{/* <p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p> */}
		</>
	);
};
