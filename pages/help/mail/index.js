import Link from 'next/link';
import HelpItem from '../../../components/helpItem';
import st from '../help.module.scss';

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
