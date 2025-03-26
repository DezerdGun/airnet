import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";
import { LINKS } from "@/components/requirements";

const data = {
    id: "documents",
    title: { ru: "Документы", uz: "Hujjatlar", en: "Documentation" },
    children: [
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

  export const breadCrumbsDoc = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: {
        ru: "/help/documents",
        uz: "/uz/help/documents",
        en: "/en/help/documents",
      },
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks 
  data={mainData} 
  language={language}
  breadCrumbs={breadCrumbsDoc} 
  />;
}
