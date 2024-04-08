import Container from '../container/index.jsx'
import st from './tarifMaket.module.scss'

export default function TarifMaket({
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
			className={st.tarifMaket}
			style={{ background: `url('${bgImg}') no-repeat` }}
		>
			<Container>
				{headTitle && <h1 className={st.container__headTitle}>{headTitle}</h1>}
				<div className={`${st.tarifMaket__item} ${className}`}>
					{description}
				</div>
				{title && <h2 className={st.container__title}>{title}</h2>}
				<div className={`${st.tarifMaket__children} tarifSlider`}>
					{children}
				</div>

				{endText}
			</Container>
		</div>
	)
}
