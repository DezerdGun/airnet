import Link from 'next/link';
import HelpItem from '../../../components/helpItem';
import st from '../help.module.scss';

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
		content: (
			<ol id={data.id} className={st.help__block__content__active}>
				{data.children.map((item) => (
					<li key={item.link}>
						<Link href={item.link}>
							<a>{item.title}</a>
						</Link>
					</li>
				))}
			</ol>
		),
	};

export default function HelpInner() {
	return <HelpItem data={mainData} />;
}
