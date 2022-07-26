import Head from 'next/head';
import Container from '../container';
import SEO from '../seo';
import st from './faqInside.module.scss';

export default function FaqInside({ data }) {
	return (
		<>
			<SEO title={`${data.title} | Airnet`} desc={data.description} />
			<div className={st.faqInside}>
				<Container
					style={{ background: "url('/servers-2.jpg') no-repeat" }}
					title={data.title}
					className="my-0"></Container>
				<Container>
					<div className={st.faqInside__content}>{data.content}</div>
				</Container>
			</div>
		</>
	);
}
