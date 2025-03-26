import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
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
    url: "/help/cms",
    content: data,
  };

  export const breadCrumbsCms = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: {
        ru: "/help/cms",
        uz: "/uz/help/cms",
        en: "/en/help/cms",
      },
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks data={mainData} language={language} breadCrumbs={breadCrumbsCms} />;
}
