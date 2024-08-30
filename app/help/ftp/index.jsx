import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "ftp",
    title: { ru: "FTP", uz: "FTP", en: "FTP" },
    children: [
      {
        title: { ru: "Что такое FTP?", uz: "FTP nma?", en: "What is FTP?" },
        link: "/help/ftp/chto-takoe-ftp",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    url: "/help/ftp",
    content: data,
  };

  export const breadCrumbsFtp = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: mainData.url,
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks data={mainData} language={language} breadCrumbs={breadCrumbsFtp} />;
}
