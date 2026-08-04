import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import Image from "next/image";
import Container from "../container/index.jsx";
import FAQ from "../faq";
import Partners from "../partners";
import { LINKS } from "../requirements.js";
import SEO from "../seo";
import bst from "../blogItem/blogItem.module.scss";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import BreadCrumbs from "../seo/breadCrumbs.jsx";

export default function HelpBlock({ data, language, breadCrumbs }) {
  const langData = {
    author: { ru: "Автор статьи:", uz: "Maqola muallifi:", en: "Author of the article:" },
    authorseo: { ru: "Главный редактор", uz: "Bosh muharrir", en: "Editor-in-Chief" },
    authorname: { ru: "Данаев Алмаз", uz: "Danaev Almaz", en: "Danaev Almaz" },
    related: { ru: "Похожие статьи", uz: "O'xshash maqolalar", en: "Related articles" },
    categories: { ru: "Категории", uz: "Kategoriyalar", en: "Categories" },
    goToDB: {
      ru: <>Вернуться к <Link href={checkLang(language) + LINKS.HELP}><a>«Базе знаний»</a></Link></>,
      uz: <><Link href={checkLang(language) + LINKS.HELP}><a>«Bilimlar bazasi»</a></Link> sahifasiga qaytish</>,
      en: <>Go back to <Link href={checkLang(language) + LINKS.HELP}><a>Knowledge Base</a></Link></>,
    },
    phoneSupport: {
      ru: "Не нашли ответ на свой вопрос? Позвоните нашим специалистам по телефону",
      uz: "Savolingizga javob topa olmadingizmi? Telefon orqali mutaxassislarimizga qo'ng'iroq qiling",
      en: "Did not find an answer to your question? Call our specialists by phone",
    },
  };

  const categories = [
    { label: { ru: "Хостинг", uz: "Xosting", en: "Hosting" }, link: "/help/hosting" },
    { label: { ru: "VDS/VPS", uz: "VDS/VPS", en: "VDS/VPS" }, link: "/help/vds" },
    { label: { ru: "Домены", uz: "Domenlar", en: "Domains" }, link: "/help/domain" },
    { label: { ru: "SSL-сертификаты", uz: "SSL-sertifikatlar", en: "SSL certificates" }, link: "/help/ssl" },
    { label: { ru: "Биллинг", uz: "Billing", en: "Billing" }, link: "/help/billing" },
  ];

  const hasRelated = Array.isArray(data.related) && data.related.length > 0;

  return (
    <div className="bg-gray">
      <SEO title={`${data.headTitle[language]} | Airnet`} desc={data?.desc?.[language]} />

      {breadCrumbs && breadCrumbs.length ? (
        <>
          <BreadCrumbs data={breadCrumbs} language={language} />
          <PageBreadcrumb links={breadCrumbs} language={language} />
        </>
      ) : null}

      <Container>
        <div className={bst.blogItem}>
          <div className={bst.blogItem__center}>
            <h1>{data.headTitle[language]}</h1>

            {data.content[language]}

            <div className={bst.blogItem__details__author}>
              <h3>{langData.author[language]}</h3>
              <Image src="/author/almaz-danaev.png" width={50} height={50} alt="Данаев Алмаз" blurDataURL placeholder="blur" />
              <h4>{langData.authorseo[language]}</h4>
              <p>{langData.authorname[language]}</p>
            </div>

            <div className={bst.blogItem__links}>
              <p>{langData.goToDB[language]}</p>
              <p>
                {langData.phoneSupport[language]}{" "}
                <a href="tel:+998712028700">+998 (71) 202-87-00</a>
              </p>
            </div>
          </div>

          <div className={bst.blogItem__right}>
            {hasRelated && (
              <div className={bst.blogItem__right__text}>
                <h3>{langData.related[language]}</h3>
                <ol>
                  {data.related.map((item) => (
                    <li key={item.link}>
                      <Link href={checkLang(language) + item.link}>
                        <a>{item.title[language]}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            <div className={bst.blogItem__right__category}>
              <h3>{langData.categories[language]}</h3>
              {categories.map((c) => (
                <span key={c.link}>
                  <Link href={checkLang(language) + c.link}>
                    <a>{c.label[language]}</a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {data?.afterContent}

      {data?.faq && (
        <FAQ faq={data.faq} title={data.faqTitle?.[language]} language={language} />
      )}
      <Partners language={language} />
    </div>
  );
}
