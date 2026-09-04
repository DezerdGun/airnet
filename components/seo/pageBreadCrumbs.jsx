import st from "./pageBreadCrumbs.module.scss";
import Link from "next/dist/client/link";

const Chevron = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={st.sep}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

// Значения link во всех наборах breadCrumbs уже начинаются со слэша,
// поэтому шаблон `/${...}/` давал "//vds/". Next такой href чинил сам, но
// на каждый рендер писал в консоль "Invalid href passed to next/router".
const crumbHref = (link) => "/" + String(link || "").replace(/^\/+/, "");

export default function PageBreadcrumb({ links, language }) {
  const homeTitle = { ru: "Главная", uz: "Bosh bo'lim", en: "Home" };

  if (!links?.length) return null;

  return (
    <div className={st.bar}>
      <div
        className={st.pageBreadcrumb}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <div
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className={st.crumb}
        >
          <meta itemProp="position" content="1" />
          <Link href="/">
            <a itemProp="item" href="https://airnet.uz/" className={st.link}>
              <span itemProp="name">{homeTitle[language]}</span>
            </a>
          </Link>
        </div>

        {links.map((item, i) => {
          const last = i === links.length - 1;
          return (
            <div
              key={item.name[language]}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className={st.crumb}
            >
              <Chevron />
              <meta itemProp="position" content={String(i + 2)} />
              {last ? (
                <span itemProp="name" className={st.current}>
                  {item.name[language]}
                </span>
              ) : (
                <Link href={crumbHref(item.link[language])}>
                  <a className={st.link}>
                    <span itemProp="name">{item.name[language]}</span>
                  </a>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
