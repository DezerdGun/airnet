import { useState } from 'react'
import Container from '../container/index.jsx'
import st from './tarifMaket.module.scss'

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
			style={{ background: `url('${bgImg}') no-repeat` }}
		>
			<Container>
				{/* {title && <h2 className={st.container__title}>{title}</h2>} */}
				{headTitle && <h3 className={st.container__headTitle}>{headTitle}</h3>}
				{/* <div className={`${st.tarifMaket__item} ${className}`}>
					{description}
				</div> */}
				{/* {txt && <p className={st.container__txt}>{txt}</p>} */}
				
				<div className={`${st.tarifMaket__children} tarifSlider`}>
					{children}
				</div>

				{endText}
			</Container>
		</div>
	)
}
