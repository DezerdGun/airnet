import Link from 'next/link';
import HelpItem from '../../../components/helpItem';
import st from '../help.module.scss';

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
