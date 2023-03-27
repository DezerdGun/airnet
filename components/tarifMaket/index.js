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
				{title && <h3 className={st.container__title}>{title}</h3>}
				<div className={`${st.tarifMaket__item} ${className}`}>
					{description}
				</div>
				<div className={`${st.tarifMaket__children} tarifSlider`}>
					{children}
				</div>

				{endText}
			</Container>
		</div>
	)
}
