import { useRef } from 'react';
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
	const search = useRef();

	const checkDomain = () => {
		console.log('dsds');
		// try {
		// 	fetch('https://tst.dot.uz/api/api_2_1.php', {
		// 		method: 'POST',
		// 		body: (
		// 			<data>
		// 				<dname>airnet.uz</dname>
		// 			</data>
		// 		),
		// 		headers: {
		// 			'Content-type': 'text/xml',
		// 		},
		// 	})
		// 		.then((response) => response.text())
		// 		// .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
		// 		.then((data) => console.log(data));
		// } catch (e) {
		// 	console.log(e);
		// }
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://tst.dot.uz/api/api_2_1.php', [false, 'airnetAPI', 'TurLcMAC4cnB']);
		xhr.setRequestHeader('Content-type', 'text/xml; charset=utf-8');
		xhr.send(
			<data>
				<sLogin>airnetAPI</sLogin>
				<sPass>TurLcMAC4cnB</sPass>
			</data>
		);
	};

	return (
		<>
			<div className={st.regDomain__block}>
				www. <input rel={search} placeholder="Введите название домена например: airnet.uz" />
				<button onClick={checkDomain}>Проверить</button>
			</div>

			<p className={st.regDomain__price}>.UZ - 20.000 сум/год</p>
			<p className={st.regDomain__price}>.RU - 65.000 сум/год</p>
			<p className={st.regDomain__price}>.COM - 150.000 сум/год</p>
			<p className={st.regDomain__price}>.NET - 150.000 сум/год</p>
			<p className={st.regDomain__price}>.ORG - 200.000 сум/год</p>
			{/* <p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p> */}
		</>
	);
};
