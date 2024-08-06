import HelpItem from "@/components/helpItem";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "dns",
    title: { ru: "DNS-хостинг", uz: "DNS hosting", en: "DNS hosting" },
    children: [
      {
        title: {
          ru: "Общая информация о DNS-хостинг",
          uz: "DNS hosting haqida umumiy ma'lumot",
          en: "General information about DNS hosting",
        },
        link: "/help/dns/about-dns",
      },
      {
        title: {
          ru: "Добавить и делегировать домен",
          uz: "Domen qo‘shish va vakolat berish",
          en: "Add and delegate a domain",
        },
        link: "/help/dns/add-domain",
      },
      {
        title: {
          ru: "Редактировать настройки домена",
          uz: "Domen sozlamalarini tahrirlash",
          en: "Edit domain settings",
        },
        link: "/help/dns/edit-domain",
      },
      {
        title: {
          ru: "Подключить сайт к домену",
          uz: "Saytni domenga ulang",
          en: "Connect site to domain",
        },
        link: "/help/dns/connect-domain",
      },
      {
        title: {
          ru: "Добавить запись",
          uz: "Eslatma qo'shing",
          en: "Add a note",
        },
        link: "/help/dns/add-record",
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
