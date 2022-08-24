import HelpItem from '../../../components/helpItem';

const data = {
		id: 'cms',
		title: 'CMS',
		children: [
			{
				title: 'Что такое CMS',
				link: '/help/cms/chto-takoe-cms',
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
