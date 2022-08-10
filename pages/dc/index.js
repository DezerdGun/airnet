import Container from '../../components/container';
import Link from 'next/link';
import SEO from '../../components/seo';

export default function About() {
	return (
		<>
			<SEO title="Дата-Центр в Ташкенте | Airnet" desc="Дата-Центр Airnet, который расположен в Ташкенте" />
			<Container headTitle="Дата-Центр">
				<hr />
				<h3>Collocation</h3>
				<p>Наша компания не оказывает услугу “collocation” по размещение оборудования клиентов.</p>
				<h3>Локация</h3>
				<p>Выделенные VDS/VPS сервера размещаются в Ташкенте в надежном и охраняемом Дата-Центре.</p>
				<h3>Оборудование</h3>
				<p>
					Мы предоставляем только брендовое оборудование компаний Hewlett Packard, IBM, Dell. При аренде
					сервера Вы можете не беспокоиться о его техническом состоянии.
				</p>
			</Container>
		</>
	);
}
