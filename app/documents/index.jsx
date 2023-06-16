import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import { LINKS } from "@/components/requirements";
import SEO from "@/components/seo";
import { checkLang } from "@/utils/checkLang";
import Link from "next/link";

export default function Documents({ language }) {
  const langData = {
    seoTitle: {
      ru: "Документы и договора | Airnet",
      uz: "Hujjatlar va shartnomalar | havo tarmog'i",
      en: "Documents and contracts | Airnet",
    },
    desc: {
      ru: "Информация о договорах Airnet",
      uz: "Airnet shartnomalari haqida ma'lumot",
      en: "Information about Airnet contracts",
    },
    headTitle: {
      ru: "О документах и договорах",
      uz: "Hujjatlar va shartnomalar to'g'risida",
      en: "About documents and contracts",
    },
    cT: {
      ru: "Деятельность проекта AIRNET осуществляется от имени юридического лица OOO «AIRNET».",
      uz: "AIRNET loyihasi faoliyati yuridik shaxs “AIRNET” MChJ nomidan amalga oshiriladi.",
      en: "The activities of the AIRNET project are carried out on behalf of the legal entity AIRNET LLC.",
    },
    cTend: {
      ru: "Все условия и правила предоставления услуг регламентируются публичным договором-офертой, размещённом на сайте проекта.",
      uz: "Xizmatlarni taqdim etishning barcha shartlari va shartlari ommaviy oferta shartnomasi bilan tartibga solinadi, loyiha veb-saytida joylashtirilgan.",
      en: "All conditions and rules for the provision of services are regulated by a public offer agreement posted on the project website.",
    },
  };

  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.desc[language]} />
      <Container headTitle={langData.headTitle[language]}>
        <hr />

        <p>
          {langData.cT[language]}
          <br />
          {langData.cTend[language]}
        </p>
      </Container>
      <Partners language={language} />
    </>
  );
}
