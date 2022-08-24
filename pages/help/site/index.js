import Link from 'next/link';
import HelpItem from '../../../components/helpItem';
import st from '../help.module.scss';

const data = {
		id: 'site',
		title: 'Технические вопросы',
		children: [
			{
				title: 'Файл .htaccess',
				link: '/help/site/file-htaccess',
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
