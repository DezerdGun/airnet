import HelpItem from '../../../components/helpItem';

const mainData = {
	headTitle: 'DNS записи',
	content: (
		<>
			<p>При добавлении домена на наш хостинг, рекомендуем делегировать его на DNS-сервера компании AIRNET.uz</p>
			<p>
				Name-сервер 1: <strong>dns1.airnet.uz</strong>
			</p>
			<p>
				Name-сервер 2: <strong>dns2.airnet.uz</strong>
			</p>
			<p>
				Name-сервер 3: <strong>ns1.airnet.uz</strong>
			</p>
			<p>
				Name-сервер 4: <strong>ns2.airnet.uz</strong>
			</p>
		</>
	),
};

export default function HelpBlog() {
	return <HelpItem data={mainData} />;
}
