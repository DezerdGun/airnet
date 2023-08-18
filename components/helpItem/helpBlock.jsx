import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import Container from "../container/index.jsx";
import FAQ from "../faq";
import Partners from "../partners";
import { LINKS } from "../requirements.js";
import SEO from "../seo";
import st from "./helpBlock.module.scss";

export default function HelpBlock({ data, language }) {
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
      title: { ru: "Удалить аккаунт", uz: "Hisobni o'chirish", en: "Delete account" },
      link: "/help/billing/account/delete",
    },
  ];

  console.log(language);

  return (
    <>
      <SEO title={`${data.headTitle[language]} | Airnet`} desc={data?.desc?.[language]} />
      <div style={{ backgroundColor: "#f8f8f8" }}>
        <Container headTitle={data.headTitle[language]} clNTitle="mb-3">
          <div className={st.author}>
            <img src="/author/almaz-danaev.jpg" />
            <span>Almaz</span>
          </div>
          <div className={st.helpBlock}>
            <div className={st.helpBlock__related}>
              <div className={st.helpBlock__related__title}>Похожие статьи</div>
              <ul className={st.helpBlock__related__links}>
                {data.related.map((item) => (
                  <li key={item.link}>
                    <Link href={checkLang(language) + item.link}>
                      <a>{item.title[language]}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={st.helpBlock__content}>{data.content[language]}</div>
          </div>
          <p>{langData.goToDB[language]}</p>
          <p>
            {langData.phoneSupport[language]} <a href="tel:+998712028700">+998(71) 202-87-00</a>
          </p>
        </Container>
        {data?.afterContent}
        {data?.faq && <FAQ faq={data.faq} title={langData.faq[language]} language={language} />}
        <Partners language={language} />
      </div>
    </>
  );
}
