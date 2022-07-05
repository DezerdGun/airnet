import st from './container.module.scss';

export default function Container({ title, description, children, className, clNh3, bgImg }) {
	return (
		<div
			className={`${st.container} ${className}`}
			style={bgImg ? { background: `url('${bgImg}') no-repeat` } : null}>
			{title ? <h3 className={`${st.container__title} ${clNh3}`}>{title}</h3> : null}
			{description ? <p className={st.container__description}>{description}</p> : null}
			{children}
		</div>
	);
}
