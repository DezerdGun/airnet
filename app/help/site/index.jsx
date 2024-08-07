import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "site",
    title: {
      ru: "Технические вопросы",
      uz: "Texnik savollar",
      en: "Technical questions",
    },
    children: [
      {
        title: {
          ru: "Файл .htaccess",
          uz: "Fayl .htaccess",
          en: ".htaccess file",
        },
        link: "/help/site/file-htaccess",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    content: data,
  };

  export const breadCrumbsSite = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: mainData.url,
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks 
  data={mainData} 
  language={language}
  breadCrumbs={breadCrumbsSite} 
  />;
}
