import Container from '../container';
import FAQ from '../faq';
import Partners from '../partners';
import st from './helpItem.module.scss';
import Link from 'next/link';
import SEO from '../seo';

export default function HelpItem({ data }) {
	return (
		<>
			<SEO title={`${data.headTitle} | Airnet`} desc={data.desc} />
			<Container headTitle={data.headTitle}>
				<div className={st.helpItem}>
					<div className={st.helpItem__block}>{data.content}</div>
					<p>
						Вернуться к{' '}
						<Link href="/help">
							<a>«База знаний»</a>
						</Link>
					</p>
					<p>
						Не нашли ответ на свой вопрос? Позвоните нашим специалистам по телефону{' '}
						<a href="tel:+998712008700">+998(71) 200-87-00</a>
					</p>
				</div>
			</Container>
			{data?.afterContent}
			{data?.faq && <FAQ faq={data.faq} title="НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ" />}
			<Partners />
		</>
	);
}
