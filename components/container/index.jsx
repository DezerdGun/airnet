import st from "./container.module.scss";

export default function Container({ headTitle, title, description, endText, children, className, clNTitle, style }) {
  return (
    <div className={`${st.container} ${className} ${style ? st.container__bg : null}`} style={style ?? null}>
      {headTitle && <h1 className={`${st.container__headTitle} ${clNTitle}`}>{headTitle}</h1>}
      {title && <h2 className={`${st.container__title} ${clNTitle}`}>{title}</h2>}
      {description && <div className={st.container__description}>{description}</div>}
      {children}
      {endText}
    </div>
  );
}
