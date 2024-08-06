import HelpItem from "@/components/helpItem";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "cms",
    title: { ru: "CMS", uz: "CMS", en: "CMS" },
    children: [
      {
        title: { ru: "Что такое CMS?", uz: "CMS bu nma?", en: "What is CMS?" },
        link: "/help/cms/chto-takoe-cms",
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
