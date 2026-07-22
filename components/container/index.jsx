import st from "./container.module.scss";

const cx = (...parts) => parts.filter(Boolean).join(" ");

export default function Container({ headTitle, title, description, endText, children, className, clNTitle, style }) {
  return (
    <div className={cx(st.container, className, style && st.container__bg)} style={style ?? null}>
      {headTitle && <h1 className={cx(st.container__headTitle, clNTitle)}>{headTitle}</h1>}
      {title && <h2 className={cx(st.container__title, clNTitle)}>{title}</h2>}
      {description && <div className={st.container__description}>{description}</div>}
      {children}
      {endText}
    </div>
  );
}
