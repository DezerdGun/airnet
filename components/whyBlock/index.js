import st from './whyBlock.module.scss';
import Container from '../container';
import Link from 'next/link';
import WhyCard from '../whyCard';

export default function WhyBlock({ title, content }) {
	return (
		<div className={`${st.whyBlock} whyBlock-swiper`}>
			<Container title={title} clNTitle="text-center">
				<WhyCard content={content} />
			</Container>
		</div>
	);
}
