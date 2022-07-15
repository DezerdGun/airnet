import st from './container.module.scss';

export default function Container({ headTitle, title, description, children, className, clNh3, style }) {
	return (
		<div className={`${st.container} ${className} ${style ? st.container__bg : null}`} style={style ? style : null}>
			{headTitle ? <h1 className={`${st.container__headTitle} ${clNh3}`}>{headTitle}</h1> : null}
			{title ? (
				<div className={st.container__content}>
					<h3 className={`${st.container__title} ${clNh3}`}>{title}</h3>
					{description ? <p className={st.container__description}>{description}</p> : null}
				</div>
			) : null}
			{children}
		</div>
	);
}
