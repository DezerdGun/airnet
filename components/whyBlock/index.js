import st from "./whyBlock.module.scss";
import Container from "../container";
import WhyCard from "../whyCard";

export default function WhyBlock({ title, content, fourCol, language }) {
	return (
		<div className={`${st.whyBlock} whyBlock-swiper`}>
			<Container title={title} clNTitle="text-center">
				<WhyCard content={content} fourCol={fourCol} language={language} />
			</Container>
		</div>
	);
}
