import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "mail",
    title: { ru: "Почта", uz: "Pochta", en: "Mail" },
    children: [
      {
        title: {
          ru: "Почта для домена",
          uz: "Domen uchun pochta",
          en: "Mail for domain",
        },
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
    url: "/help/mail",
    content: data,
  };

  export const breadCrumbsMail = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: mainData.url,
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks data={mainData} language={language} breadCrumbs={breadCrumbsMail} />;
}
