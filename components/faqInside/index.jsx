import Container from "../container/index.jsx"
import SEO from "../seo"
import st from "./faqInside.module.scss"

export default function FaqInside({ data, language }) {
	return (
		<>
			<SEO title={`${data.title[language]} | Airnet`} desc={data.description} />
			<div className={st.faqInside}>
				<Container
					style={{ background: "url('/servers-2.jpg') no-repeat" }}
					title={data.title[language]}
					className="my-0"
				></Container>
				<Container>
					<div className={st.faqInside__content}>{data.content[language]}</div>
				</Container>
			</div>
		</>
	)
}
