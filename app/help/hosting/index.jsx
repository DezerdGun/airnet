import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "hosting",
    title: { ru: "Хостинг", uz: "Hosting", en: "Hosting" },
    children: [
      {
        title: {
          ru: "Как перенести сайт на хостинг AIRNET?",
          uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
          en: "How to transfer a website to AIRNET hosting?",
        },
        link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    content: data,
  };

  export const breadCrumbsHosting = [
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
  breadCrumbs={breadCrumbsHosting} 
  />;
}
