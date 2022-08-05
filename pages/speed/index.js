import Container from '../../components/container';
import Link from 'next/link';

export default function About() {
	return (
		<Container headTitle="Проверка скорости">
			<hr />
			<p>
				Данный сервис предназначен для того, чтобы Вы могли проверить “видимость” того или иного узла со стороны
				наших площадок с помощью ping, traceroute, а также протестировать скорость загрузки файлов.
				<br />
				<a href="http://airnetuz.speedtestcustom.com/" target="_blank" rel="noopener noreferrer">
					Проверка скорости
				</a>
			</p>
		</Container>
	);
}
