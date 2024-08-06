import st from "./pageBreadCrumbs.module.scss";
import Link from "next/dist/client/link";

export default function PageBreadcrumb({ links, language }) {
  const homeTitle = { ru: "Главная", uz: "Bosh bolim", en: "Home" };

  return (
    <div
      className={st.pageBreadcrumb}
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      {links?.length ? (
        <>
          <div
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <meta itemprop="position" content="1" />
            <Link href="/">
              <a itemprop="item" href="https://airnet.uz/">
                <span itemprop="name">{homeTitle[language]}</span>
              </a>
            </Link>
            &raquo;
          </div>
          <div
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <meta itemprop="position" content="2" />
            {links.map((item, i) => {
              if (i == links.length - 1)
                return <span itemprop="name">{item.name[language]}</span>;
              else
                return (
                  <span itemprop="name">
                    <Link href={`/${item.link}/`}>
                      <a>{item.name[language]}</a>
                    </Link>
                    &raquo;
                  </span>
                );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
