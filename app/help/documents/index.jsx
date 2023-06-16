import HelpItem from "@/components/helpItem";
import { LINKS } from "@/components/requirements";

const data = {
    id: "documents",
    title: { ru: "Документы", uz: "Hujjatlar", en: "Documentation" },
    children: [
      {
        id: "agreement",
        title: {
          ru: "Как заключить договор?",
          uz: "Qanday qilib shartnoma tuzish",
          en: "How to conclude an agreement?",
        },
        link: "/faq/kak-zaklyuchit-dogovor",
      },
      {
        id: "services",
        title: {
          ru: "Лицензия на предоставление услуг хостинга",
          uz: "Xosting litsenziyasi",
          en: "License to provide hosting services",
        },
        link: LINKS.LICENSE,
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    content: data,
  };

export default function HelpInner({ language }) {
  return <HelpItem data={mainData} language={language} />;
}
