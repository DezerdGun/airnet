import HelpItem from "@/components/helpItem";
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
        children: [
          {
            title: {
              ru: "Восстановление доступа к аккаунту",
              uz: "Hisobga kirish huquqi tiklanmoqda",
              en: "Restoring account access",
            },
            link: "/help/billing/account/restore",
          },
          {
            title: {
              ru: "Перенести услуги на другой аккаунт",
              uz: "Xizmatlarni boshqa hisobga o'tkazish",
              en: "Transfer services to another account",
            },
            link: "/help/billing/account/transfer",
          },
          {
            title: {
              ru: "Удалить аккаунт",
              uz: "Hisobni o'chirish",
              en: "Delete account",
            },
            link: "/help/billing/account/delete",
          },
        ],
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    content: data,
  };

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks data={mainData} language={language} />;
}
