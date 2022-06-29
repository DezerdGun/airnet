import st from './container.module.scss';

export default function Container({ className, children }) {
	return <div className={`${st.container} ${className}`}>{children}</div>;
}
