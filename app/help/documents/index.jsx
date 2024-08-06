import HelpItem from "@/components/helpItem";
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

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks data={mainData} language={language} />;
}
