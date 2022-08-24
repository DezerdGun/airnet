import HelpItem from '../../../components/helpItem';

const data = {
		id: 'hosting',
		title: 'Хостинг',
		children: [
			{
				title: 'Как перенести сайт на хостинг AIRNET?',
				link: '/help/hosting/kak-perenesti-sajt-na-hosting-airnet',
			},
		],
	},
	mainData = {
		headTitle: data.title,
		content: data,
	};

export default function HelpInner() {
	return <HelpItem data={mainData} />;
}
