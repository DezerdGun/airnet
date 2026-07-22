import Container from '../container/index.jsx'
import st from './tarifMaketHome.module.scss'

export default function TarifMaketHome({
	headTitle,
	title,
	bgImg,
	description,
	className,
	endText,
	children,
}) {
	return (
		<div
			className={st.tarifMaketHome}
			style={{ background: `url('${bgImg}') no-repeat` }}
		>
			<Container>
				{headTitle && <h1 className={st.container__headTitle}>{headTitle}</h1>}
				{title && <h2 className={st.container__title}>{title}</h2>}
				<div className={[st.tarifMaketHome__item, className].filter(Boolean).join(' ')}>
					{description}
				</div>
				<div className={`${st.tarifMaketHome__children} tarifSlider`}>
					{children}
				</div>

				{endText}
			</Container>
		</div>
	)
}
