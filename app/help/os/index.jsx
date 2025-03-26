import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "os",
    title: {
      ru: "Операционные системы",
      uz: "Operatsion tizimlar",
      en: "Operation systems",
    },
    children: [
      {
        title: {
          ru: "Как сменить операционную систему",
          uz: "Operatsion tizimni qanday o'zgartirish mumkin",
          en: "How to change operating system",
        },
        link: "/help/os/change",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    url: "/help/os",
    content: data,
  };

  export const breadCrumbsOs = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: {
        ru: "/help/os",
        uz: "/uz/help/os",
        en: "/en/help/os",
      },
    },
  ];

export default function HelpInner({ language }) {
  return (
    <HelpItemNoAsideLinks
      data={mainData}
      language={language}
      breadCrumbs={breadCrumbsOs}
    />
  );
}
