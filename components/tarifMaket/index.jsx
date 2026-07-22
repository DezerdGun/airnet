import Container from '../container/index.jsx'
import st from './tarifMaket.module.scss'

const cx = (...parts) => parts.filter(Boolean).join(' ')

export default function TarifMaket({
	headTitle,
	title,
	txt,
	bgImg,
	description,
	className,
	endText,
	children,
}) {
	return (
		<div
			className={st.tarifMaket}
			style={bgImg ? { background: `url('${bgImg}') no-repeat` } : undefined}
		>
			<Container>
				{headTitle && <h3 className={st.container__headTitle}>{headTitle}</h3>}

				{}
				{description && (
					<div className={cx(st.tarifMaket__item, className)}>{description}</div>
				)}

				<div className={`${st.tarifMaket__children} tarifSlider`}>
					{children}
				</div>

				{endText}
			</Container>
		</div>
	)
}
