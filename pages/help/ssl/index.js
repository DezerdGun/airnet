import Link from 'next/link';
import HelpItem from '../../../components/helpItem';
import st from '../help.module.scss';

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
