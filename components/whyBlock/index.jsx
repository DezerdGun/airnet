import Container from '../container/index.jsx'
import WhyCard from '../whyCard'
import st from './whyBlock.module.scss'

export default function WhyBlock({ title, content, fourCol, language }) {
	return (
		<div className={`${st.whyBlock} whyBlock-swiper`}>
			<Container title={title} clNTitle='text-center'>
				<WhyCard content={content} fourCol={fourCol} language={language} />
			</Container>
		</div>
	)
}
