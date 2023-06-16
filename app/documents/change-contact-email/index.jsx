import HelpItem from "@/components/helpItem";

const data = {
    title: {
      ru: "Изменить контактный е-мейл",
      uz: "Kontakt elektron pochta manzilini o'zgartirish",
      en: "Change contact email",
    },
    children: [
      {
        id: "changing the contact e-mail box",
        title: {
          ru: "Шаблоны заявлений на смену контактного электронного почтового ящика",
          uz: "Kontakt elektron pochta qutisini o'zgartirish uchun dastur shablonlari",
          en: "Application templates for changing the contact e-mail box",
        },
        link: "/documents/change-contact-email/application-templates-for-changing-the-contact-e-mail-box",
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
