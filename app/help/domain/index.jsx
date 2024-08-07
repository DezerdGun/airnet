import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "domain",
    title: { ru: "Домены", uz: "Domenlar", en: "Domains" },
    children: [
      {
        title: {
          ru: "Наши DNS-записи",
          uz: "Bizning DNS-yozuvlarimiz",
          en: "Our DNS records",
        },
        link: "/help/domain/dns",
      },
      {
        title: {
          ru: "Как зарегистрировать домен?",
          uz: "Domenlarni  qanday royxatdan otqazish ",
          en: "How to register a domain?",
        },
        link: "/help/domain/kak-zaregistrirovat-domen",
      },
      {
        title: {
          ru: "Рекомендации по выбору доменного имени",
          uz: "Domen nomlarini tanlshdagi maslaxatlar",
          en: "Recommendations for choosing a domain name",
        },
        link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
      },
      {
        title: {
          ru: "Нужно ли вводить данные паспорта для регистрации?",
          uz: "Ro'yxatdan otish uchun pasport malumotlari kerakmi?",
          en: "Do I need to enter passport data for registration?",
        },
        link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    url: "/help/domain",
    content: data,
  };

  export const breadCrumbsDomain = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: mainData.url,
    },
  ];

export default function HelpInner({ language }) {
  return (
    <HelpItemNoAsideLinks
      data={mainData}
      language={language}
      breadCrumbs={breadCrumbsDomain}
    />
  );
}
