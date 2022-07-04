import st from './container.module.scss';

export default function Container({ title, children, className, clNh3 }) {
	return (
		<div className={`${st.container} ${className}`}>
			{title ? <h3 className={`${st.container__title} ${clNh3}`}>{title}</h3> : null}
			{children}
		</div>
	);
}
