import HelpBlock from '../../../components/helpItem/helpBlock';

const mainData = {
	headTitle: 'Как долго хранятся учётные записи VDS?',
	content: (
		<p>
			После блокировки услуги, учётная запись VDS хранится на наших серверах 30 дней. Если в течении этого периода
			денежные средства не поступят, сервис и все данные будут безвозвратно удалены с наших серверов в
			соответствии с условиями договора.
		</p>
	),
};

export default function HelpBlog() {
	return <HelpBlock data={mainData} />;
}
