import HelpItem from '../../../components/helpItem';

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
