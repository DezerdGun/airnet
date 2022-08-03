import HelpItem from '../../../components/helpItem';

const mainData = {
	headTitle: 'Почта для домена',
	content: (
		<>
			<p>Компания AIRNET.uz не предоставляет пользователям почтовый сервис.</p>
			<p>Мы рекомендуем использовать почтовый сервисы:</p>
			<p>
				Бесплатный –{' '}
				<a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
					<strong>Яндекс.Почта</strong>
				</a>
			</p>
			<p>
				Платный –{' '}
				<a href="https://workspace.google.com/intl/ru/products/gmail" target="_blank" rel="noreferrer noopener">
					<strong>Gmail.com</strong>
				</a>
			</p>
		</>
	),
};

export default function HelpBlog() {
	return <HelpItem data={mainData} />;
}
