import HelpItem from "@/components/helpItem";

const data = {
    id: "mail",
    title: { ru: "Почта", uz: "Pochta", en: "Mail" },
    children: [
      {
        title: { ru: "Почта для домена", uz: "Domen uchun pochta", en: "Mail for domain" },
        link: "/help/mail/pochta-dlya-domena",
      },
      {
        title: {
          ru: "Настроить программу по протоколу IMAP",
          uz: "IMAP protokoli yordamida dasturni sozlang",
          en: "Configure the program using the IMAP protocol",
        },
        link: "/help/mail/mail-clients",
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
