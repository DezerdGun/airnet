import HelpItem from "@/components/helpItem";

const data = {
    title: {
      ru: "Договоры на оказание услуг",
      uz: "Xizmat shartnomalari",
      en: "Service contracts",
    },
    children: [
      {
        id: "contract",
        title: {
          ru: "Договоры на оказание услуг",
          uz: "Xizmat shartnomalari",
          en: "Service contracts",
        },
        link: "/documents/contract/contract",
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
