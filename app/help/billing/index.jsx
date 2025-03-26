import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "billing",
    title: { ru: "Биллинг", uz: "Billing", en: "Billing" },
    children: [
      {
        title: {
          ru: "Регистрация в панели управления",
          uz: "Boshqaruv panelida ro'yxatdan o'tish",
          en: "Registration in the control panel",
        },
        link: "/help/billing/account",
      },
      {
        title: {
          ru: "Восстановление доступа к аккаунту",
          uz: "Hisobga kirish huquqi tiklanmoqda",
          en: "Restoring account access",
        },
        link: "/help/billing/restore",
      },
      {
        title: {
          ru: "Перенести услуги на другой аккаунт",
          uz: "Xizmatlarni boshqa hisobga o'tkazish",
          en: "Transfer services to another account",
        },
        link: "/help/billing/transfer",
      },
      {
        title: {
          ru: "Удалить аккаунт",
          uz: "Hisobni o'chirish",
          en: "Delete account",
        },
        link: "/help/billing/delete",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    url: "/help/billing",
    content: data,
  };

  export const breadCrumbsBilling = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: {
        ru: "/help/billing",
        uz: "/uz/help/billing",
        en: "/en/help/billing",
      },
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks 
  data={mainData} 
  language={language}
  breadCrumbs={breadCrumbsBilling} 
  />;
}
