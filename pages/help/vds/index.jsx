import HelpItem from '../../../components/helpItem';

const data = {
		id: 'vds',
		title: 'VDS',
		children: [
			{
				title: 'Необходимые навыки для работы с VDS',
				link: '/help/vds/neobhodimye-navyki-dlya-raboty-s-vds',
			},
			{
				title: 'Смена тарифного плана на VDS',
				link: '/help/vds/smena-tarifnogo-plana-na-vds',
			},
			{
				title: 'Как долго хранятся учётные записи VDS?',
				link: '/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds',
			},
			{
				title: 'Восстановление root пароля от VDS',
				link: '/help/vds/vosstanovlenie-root-parolya-ot-vds',
			},
			{
				title: 'Перенос аккаунта на VDS',
				link: '/help/vds/perenos-akkaunta-na-vds',
			},
			{
				title: 'Преимущества VDS и VPS-серверов',
				link: '/help/vds/preimushhestva-vds-i-vps-serverov',
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
