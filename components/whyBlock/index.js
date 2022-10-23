import st from "./whyBlock.module.scss";
import Container from "../container";
import WhyCard from "../whyCard";

export default function WhyBlock({ title, content, fourCol }) {
	return (
		<div className={`${st.whyBlock} whyBlock-swiper`}>
			<Container title={title} clNTitle="text-center">
				<WhyCard content={content} fourCol={fourCol} />
			</Container>
		</div>
	);
}
