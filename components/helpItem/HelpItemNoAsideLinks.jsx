import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../container/index.jsx";
import FAQ from "../faq/index.jsx";
import Partners from "../partners/index.jsx";
import { LINKS } from "../requirements.js";
import SEO from "../seo/index.jsx";
import st from "./helpItemNoLinks.module.scss";
import BreadCrumbs from "../seo/breadCrumbs.jsx";
import PageBreadcrumb from "../seo/pageBreadCrumbs.jsx";

export default function HelpItemNoAsideLinks({ data, language, breadCrumbs }) {
  const langData = {
    faq: {
      ru: "НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ",
      uz: "BIZNING TO'LOV PANOSINI KO'P SO'RALADILAR",
      en: "WE ARE FREQUENTLY ASKED BILLING PANEL",
    },
  };

  return (
    <>
      <SEO
        title={`${data.headTitle[language]} | Airnet`}
        desc={data?.desc?.[language]}
      />
      {breadCrumbs && breadCrumbs.length ? (
        <>
          <BreadCrumbs data={breadCrumbs} language={language} />
          <PageBreadcrumb links={breadCrumbs} language={language} />
        </>
      ) : (
        ""
      )}
      <div className={st.hero}>
        <div className={st.hero__inner}>
          <Link href={checkLang(language) + LINKS.HELP}>
            <a className={st.hero__back}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
              {{ ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge base" }[language]}
            </a>
          </Link>
          <h1 className={st.hero__title}>{data.headTitle?.[language]}</h1>
        </div>
      </div>
      <HelpItemBlock data={data} language={language} hideTitle />
      {data?.afterContent}
      {data?.faq && (
        <FAQ
          faq={data.faq}
          title={langData.faq[language]}
          language={language}
        />
      )}
      <Partners language={language} />
    </>
  );
}

export const HelpItemBlock = ({ data, language, hideTitle }) => {
  const [isFixed, setIsFixed] = useState(false);
  const langData = {
    menu: {
      ru: "Разделы",
      uz: "Bo'limlar",
      en: "Sections",
    },
    goToDB: {
      ru: (
        <>
          Вернуться к{" "}
          <Link href={checkLang(language) + LINKS.HELP}>
            <a>«База знаний»</a>
          </Link>
        </>
      ),
      uz: (
        <>
          <Link href={checkLang(language) + LINKS.HELP}>
            <a>«Bilimlar bazasi»</a>
          </Link>{" "}
          sahifasiga qaytish
        </>
      ),
      en: (
        <>
          Go back to{" "}
          <Link href={checkLang(language) + LINKS.HELP}>
            <a>Knowledge Base</a>
          </Link>
        </>
      ),
    },
    phoneSupport: {
      ru: "Не нашли ответ на свой вопрос? Позвоните нашим специалистам по	телефону",
      uz: "Savolingizga javob topa olmadingizmi? Telefon orqali mutaxassislarimizga qo'ng'iroq qiling",
      en: "Did not find an answer to your question? Call our specialists by phone",
    },
  };

  return (
    <Container headTitle={hideTitle ? undefined : data.headTitle?.[language]}>
      <div className={st.helpItem}>
        <div className={st.helpItem__block2}>
          <div id="content" className={st.helpItem__block__content}>
            <Content data={data.content} language={language} />
          </div>
        </div>
        <p>{langData.goToDB[language]}</p>
        <p>
          {langData.phoneSupport[language]}{" "}
          <a href="tel:+998712028700">+998(71) 202-87-00</a>
        </p>
      </div>
    </Container>
  );
};

export const Content = ({ data, language }) => {
  if (data?.length)
    return data.map((item) => (
      <div
        key={item.title[language]}
        className={st.helpItem__block__content__block}
      >
        <ContentBlock data={item.children} language={language} />
      </div>
    ));
  return (
    <div className={st.helpItem__block__content__block}>
      <ContentBlock data={data.children} language={language} />
    </div>
  );
};

const ContentBlock = ({ data, language }) => {
  return data.map((item) => (
    <div
      key={item.title[language]}
      className={st.helpItem__block__content__block__item}
    >
      <h3>
        {item?.link ? (
          <Link href={checkLang(language) + item.link}>
            <a>{item.title[language]}</a>
          </Link>
        ) : (
          item.title[language]
        )}
      </h3>
      {item?.children?.length && (
        <ul>
          {item.children.map((item) => (
            <li key={item.id}>
              <h3>
                <Link href={checkLang(language) + item.link}>
                  <a>{item.title[language]}</a>
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));
};
