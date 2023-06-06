import HelpItem from "@/components/helpItem";

const data = {
    id: "os",
    title: { ru: "Операционные системы", uz: "Operatsion tizimlar", en: "Operation systems" },
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
    content: data,
  };

export default function HelpInner({ language }) {
  return <HelpItem data={mainData} language={language} />;
}
