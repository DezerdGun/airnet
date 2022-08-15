import Container from '../container';
import st from './tarifMaket.module.scss';

export default function TarifMaket({ headTitle, bgImg, description, className, endText, children }) {
	return (
		<div className={st.tarifMaket} style={{ background: `url('${bgImg}') no-repeat` }}>
			<div className={st.tarifMaket__item}>
				<Container
					headTitle={headTitle}
					style={{}}
					description={description}
					className={`${className} pb-0 mb-0`}></Container>
			</div>
			<div className={st.tarifMaket__children}>{children}</div>

			<div className={st.tarifMaket__item}>{endText}</div>
		</div>
	);
}
