import HelpItem from "@/components/helpItem";

const data = {
    title: {
      ru: "Трансфер домена другому регистратору",
      uz: "Domenni boshqa registratorga o'tkazish",
      en: "Transferring a domain to another registrar",
    },
    children: [
      {
        id: "transfer to another registrar",
        title: {
          ru: "Шаблоны заявлений на передачу домена другому регистратору",
          uz: "Domenni boshqa ro'yxatga oluvchiga o'tkazish uchun ariza shablonlari",
          en: "Application templates for domain transfer to another registrar",
        },
        link: "/documents/transfer-registrar/domain-transfer-registrar",
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
