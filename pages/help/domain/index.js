import HelpItem from '../../../components/helpItem';

const data = {
		id: 'domain',
		title: 'Домены',
		children: [
			{
				title: 'Наши DNS-записи',
				link: '/help/domain/dns',
			},
			{
				title: 'Как зарегистрировать домен?',
				link: '/help/domain/kak-zaregistrirovat-domen',
			},
			{
				title: 'Рекомендации по выбору доменного имени',
				link: '/help/domain/rekomendaczii-po-vyboru-domennogo-imeni',
			},
			{
				title: 'Нужно ли вводить данные паспорта для регистрации?',
				link: '/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii',
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
