import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "ssl",
    title: {
      ru: "SSL-сертификаты",
      uz: "SSL-sertifikatlari",
      en: "SSL certificates",
    },
    children: [
      {
        title: {
          ru: "Зачем нужен SSL-сертификат?",
          uz: "Nma uchun SSL-sertifikati kerak?",
          en: "Why do I need an SSL certificate",
        },
        link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    url: "/help/ssl",
    content: data,
  };

  export const breadCrumbsSsl = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: {
        ru: "/help/ssl",
        uz: "/uz/help/ssl",
        en: "/en/help/ssl",
      },
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks 
  data={mainData} 
  language={language}
  breadCrumbs={breadCrumbsSsl} 
  />;
}
