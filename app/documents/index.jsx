import Container from "@/components/container";
import Partners from "@/components/partners";
import SEO from "@/components/seo";
import { HelpItemBlock } from "@/components/helpItem";
import KnowledgeBase from "@/components/knowledgeBase";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export default function Documents({ language }) {
  const data = [
    {
      title: {
        ru: "Шаблоны заявлений на передачу прав другому владельцу",
        uz: "Huquqlarni boshqa egasiga o'tkazish uchun arizalar uchun shablonlar",
        en: "Templates for applications for the transfer of rights to another owner",
      },
      link: "/documents/transfer-owner",
      children: [
        {
          id: "domain to another owner",
          title: {
            ru: "Шаблоны заявлений на передачу домена другому владельцу",
            uz: "Domenni boshqa egasiga o'tkazish uchun dastur shablonlari",
            en: "Application templates for transferring a domain to another owner",
          },
          link: "/documents/transfer-owner/domain-owner",
        },
        {
          id: "server to another owner",
          title: {
            ru: "Шаблоны заявлений на передачу сервера другому владельцу",
            uz: "Serverni boshqa egasiga o'tkazish uchun ilovalar shablonlari",
            en: "Templates of applications for the transfer of the server to another owner",
          },
          link: "/documents/transfer-owner/server-owner",
        },
        {
          id: "account to another owner",
          title: {
            ru: "Шаблоны заявлений на передачу хостингового аккаунта другому владельцу",
            uz: "Xosting hisobini boshqa egasiga o'tkazish uchun shablonlar",
            en: "Templates for transferring a hosting account to another owner",
          },
          link: "/documents/transfer-owner/hosting-owner",
        },
      ],
    },
    {
      title: {
        ru: "Трансфер домена другому регистратору",
        uz: "Domenni boshqa registratorga o'tkazish",
        en: "Transferring a domain to another registrar",
      },
      link: "/documents/transfer-registrar",
      children: [
        {
          id: "transfer to another registrar",
          title: {
            ru: "Шаблоны заявлений на передачу домена другому регистратору",
            uz: "Domenni boshqa ro'yxatga oluvchiga o'tkazish uchun ariza shablonlari",
            en: "Application templates for domain transfer to another registrar",
          },
          link: "/documents/transfer-registrar/domain-transfer-registrar",
        },
      ],
    },
    {
      title: {
        ru: "Изменить контактный е-мейл",
        uz: "Kontakt elektron pochta manzilini o'zgartirish",
        en: "Change contact email",
      },
      link: "/documents/change-contact-email",
      children: [
        {
          id: "changing the contact e-mail box",
          title: {
            ru: "Шаблоны заявлений на смену контактного электронного почтового ящика",
            uz: "Kontakt elektron pochta qutisini o'zgartirish uchun dastur shablonlari",
            en: "Application templates for changing the contact e-mail box",
          },
          link: "/documents/change-contact-email/e-mail",
        },
      ],
    },
    {
      title: {
        ru: "Договоры на оказание услуг",
        uz: "Xizmat shartnomalari",
        en: "Service contracts",
      },
      link: "/documents/contract",
      children: [
        {
          id: "contract",
          title: {
            ru: "Договоры на оказание услуг",
            uz: "Xizmat shartnomalari",
            en: "Service contracts",
          },
          link: "/documents/contract/contract",
        },
      ],
    },
  ];

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

      <BreadCrumbs data={[{ name: langData.headTitle }]} language={language} />
      <PageBreadcrumb
        links={[{ name: langData.headTitle }]}
        language={language}
      />

      <KnowledgeBase
        data={data}
        language={language}
        eyebrow={{ ru: "Документы и шаблоны", uz: "Hujjatlar va shablonlar", en: "Documents & templates" }}
        title={{ ru: "Документы и", uz: "Hujjatlar va", en: "Documents &" }}
        brand={{ ru: "договоры", uz: "shartnomalar", en: "contracts" }[language]}
        sub={langData.cT[language]}
      />
      <Partners language={language} />
      <Reviews language={language} />
    </>
  );
}
