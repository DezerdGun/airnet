import HelpItem from '../../../components/helpItem';

const mainData = {
	headTitle: 'Нужно ли вводить данные паспорта для регистрации?',
	content: (
		<p>
			В случае регистрации домена копия паспорта является необходимым документов, для регистрации домена в зоне
			UZ. Это требование главного регистратора доменов в зоне UZ cctld.uz
		</p>
	),
};

export default function HelpBlog() {
	return <HelpItem data={mainData} />;
}
