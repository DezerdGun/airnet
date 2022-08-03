import HelpItem from '../../../components/helpItem';

const mainData = {
	headTitle: 'Как перенести сайт на хостинг AIRNET?',
	content: (
		<>
			<p>Перенос любого сайта на хостинг Airnet выполняется специалистами абсолютно бесплатно.</p>
			<h3 className="fw-bold mb-2">Для начала давайте рассмотрим содержимое сайта:</h3>
			<p>
				<strong>Контент</strong> (содержимое) сайта – файлы и папки, размещённые на нем;
			</p>
			<p>
				<strong>Базы данных</strong> – содержит материалы сайта;
			</p>
			<p>
				<strong>Доменные имена</strong> – название сайта, например: Airnet.uz;
			</p>
			<h3>Перенос домена сайта на наш хостинг.</h3>
			<p>Техническим – изменение списка DNS-серверов в настройках домена, которыми обслуживается доменное имя.</p>
			<p>При добавлении домена на наш хостинг, рекомендуем делегировать его на DNS-сервера компании AIRNET.uz</p>
			<p>
				<strong>
					dns1.airnet.uz
					<br />
					dns2.airnet.uz
					<br />
					ns1.airnet.uz
					<br />
					ns2.airnet.uz
				</strong>
			</p>
		</>
	),
};

export default function HelpBlog() {
	return <HelpItem data={mainData} />;
}
