import FaqInside from '../../components/faqInside';
import { LINKS } from '../../components/requirements';
import Link from 'next/link';

const data = {
	title: 'Я зарегистрировал домен, что дальше?',
	description: '',
	content: (
		<>
			<p>
				«Что делать после регистрации домена?» Дальнейшие действия зависят от того, есть ли у вас готовый сайт и
				опыт в их создании или нет.
			</p>
			<h2>Если есть опыт в создании сайтов</h2>
			<ol>
				<li>
					<Link href={LINKS.HOSTING}>
						<a>Закажите хостинг</a>
					</Link>
				</li>
			</ol>
		</>
	),
};

export default function FAQ() {
	return <FaqInside data={data} />;
}
