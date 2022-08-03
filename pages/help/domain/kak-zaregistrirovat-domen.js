import HelpItem from '../../../components/helpItem';
import Link from 'next/link';
import { LINKS } from '../../../components/requirements';

const mainData = {
	headTitle: 'Как зарегистрировать домен UZ',
	content: (
		<>
			<p>
				Выбрать и проверить доменное имя в «
				<Link href={LINKS.DOMAINS}>
					<a>
						<strong>регистрации доменов</strong>
					</a>
				</Link>
				»;
			</p>
			<p>
				Нажать на кнопку «
				<strong>
					<a href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz">Заказать</a>
				</strong>
				»;
			</p>
			<p>Оплатить регистрацию домена;</p>
			<p>Выслать паспортные данные.</p>
		</>
	),
};

export default function HelpBlog() {
	return <HelpItem data={mainData} />;
}
