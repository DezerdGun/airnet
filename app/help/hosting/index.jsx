import HelpItem from '@/components/helpItem';

const data = {
		id: 'hosting',
		title:{ru: 'Хостинг', uz:"Xost"},
		children: [
			{
				title: {ru:'Как перенести сайт на хостинг AIRNET?', uz:"Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?"},
				link: '/help/hosting/kak-perenesti-sajt-na-hosting-airnet',
			},
		],
	},
	mainData = {
		headTitle: data.title,
		content: data,
	};

export default function HelpInner({language}) {
	return <HelpItem data={mainData} language={language}/>;
}
