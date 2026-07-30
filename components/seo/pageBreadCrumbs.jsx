import st from "./pageBreadCrumbs.module.scss";
import Link from "next/dist/client/link";

const Chevron = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={st.sep}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export default function PageBreadcrumb({ links, language }) {
  const homeTitle = { ru: "Главная", uz: "Bosh bo'lim", en: "Home" };

  if (!links?.length) return null;

  return (
    <div className={st.bar}>
      <div
        className={st.pageBreadcrumb}
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <div
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
          className={st.crumb}
        >
          <meta itemprop="position" content="1" />
          <Link href="/">
            <a itemprop="item" href="https://airnet.uz/" className={st.link}>
              <span itemprop="name">{homeTitle[language]}</span>
            </a>
          </Link>
        </div>

        {links.map((item, i) => {
          const last = i === links.length - 1;
          return (
            <div
              key={item.name[language]}
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
              className={st.crumb}
            >
              <Chevron />
              <meta itemprop="position" content={String(i + 2)} />
              {last ? (
                <span itemprop="name" className={st.current}>
                  {item.name[language]}
                </span>
              ) : (
                <Link href={`/${item.link[language]}/`}>
                  <a className={st.link}>
                    <span itemprop="name">{item.name[language]}</span>
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
