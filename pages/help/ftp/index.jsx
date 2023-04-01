import HelpItem from '../../../components/helpItem';

const data = {
		id: 'ftp',
		title: 'FTP',
		children: [
			{
				title: 'Что такое FTP',
				link: '/help/ftp/chto-takoe-ftp',
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
