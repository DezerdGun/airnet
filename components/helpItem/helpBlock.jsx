import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import Container from "../container/index.jsx";
import FAQ from "../faq";
import Partners from "../partners";
import { LINKS } from "../requirements.js";
import SEO from "../seo";
import st from "./helpBlock.module.scss";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import BreadCrumbs from "../seo/breadCrumbs.jsx";

export default function HelpBlock({ data, language, breadCrumbs }) {
  const langData = {
    author: {
      ru: "Алмаз Данаев",
      uz: "Almaz Danaev",
      en: "Almaz Danaev",
    },
    faq: {
      ru: "НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ",
      uz: "BIZGA KO'P SO'RALADIGAN BILLING-PANELI",
      en: "WE ARE FREQUENTLY ASKED BILLING PANEL",
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

  const related = [
    {
      title: {
        ru: "Восстановление доступа к аккаунту",
        uz: "Hisobga kirish huquqi tiklanmoqda",
        en: "Restoring account access",
      },
      link: "/help/billing/account/restore",
    },
    {
      title: {
        ru: "Перенести услуги на другой аккаунт",
        uz: "Xizmatlarni boshqa hisobga o'tkazish",
        en: "Transfer services to another account",
      },
      link: "/help/billing/account/transfer",
    },
    {
      title: {
        ru: "Удалить аккаунт",
        uz: "Hisobni o'chirish",
        en: "Delete account",
      },
      link: "/help/billing/account/delete",
    },
  ];

  const hasRelated = data.related && data.related.length > 0;

  const relatedTitle = { ru: "Похожие статьи", uz: "O'xshash maqolalar", en: "Related articles" };
  const backTitle = { ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge base" };

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
      ) : null}

      <div className={st.hero}>
        <div className={st.hero__inner}>
          <Link href={checkLang(language) + LINKS.HELP}>
            <a className={st.hero__back}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
              {backTitle[language]}
            </a>
          </Link>
          <h1 className={st.hero__title}>{data.headTitle[language]}</h1>
          <div className={st.hero__meta}>
            <img src="/author/almaz-danaev.png" alt="Almaz Danaev" />
            <span>Almaz Danaev · CEO</span>
          </div>
        </div>
      </div>

      <div className={`${st.wrap} ${hasRelated ? "" : st.wrap_full}`}>
        <article className={st.article}>
          <div className={st.article__content}>{data.content[language]}</div>
          <div className={st.article__foot}>
            <p>{langData.goToDB[language]}</p>
            <p>
              {langData.phoneSupport[language]}{" "}
              <a href="tel:+998712028700">+998 (71) 202-87-00</a>
            </p>
          </div>
        </article>

        {hasRelated && (
          <aside className={st.aside}>
            <div className={st.aside__title}>{relatedTitle[language]}</div>
            <ul className={st.aside__links}>
              {data.related.map((item) => (
                <li key={item.link}>
                  <Link href={checkLang(language) + item.link}>
                    <a>{item.title[language]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

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
