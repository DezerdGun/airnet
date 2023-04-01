import HelpItem from '../../../components/helpItem';

const data = {
		id: 'ssl',
		title: 'SSl-сертификаты',
		children: [
			{
				title: 'Зачем нужен SSl-сертификат',
				link: '/help/ssl/zachem-nuzhen-ssl-sertifikat',
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
