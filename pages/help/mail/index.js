import Link from 'next/link';
import HelpItem from '../../../components/helpItem';
import st from '../help.module.scss';

const data = {
		id: 'mail',
		title: 'Почта',
		children: [
			{
				title: 'Почта для домена',
				link: '/help/mail/pochta-dlya-domena',
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
