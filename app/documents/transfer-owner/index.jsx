import HelpItem from "@/components/helpItem";

const data = {
    title: {
      ru: "Шаблоны заявлений на передачу прав другому владельцу",
      uz: "Huquqlarni boshqa egasiga o'tkazish uchun arizalar uchun shablonlar",
      en: "Templates for applications for the transfer of rights to another owner",
    },
    children: [
      {
        id: "domain to another owner",
        title: {
          ru: "Шаблоны заявлений на передачу домена другому владельцу",
          uz: "Domenni boshqa egasiga o'tkazish uchun dastur shablonlari",
          en: "Application templates for transferring a domain to another owner",
        },
        link: "/documents/transfer-owner/domain-owner",
      },
      {
        id: "server to another owner",
        title: {
          ru: "Шаблоны заявлений на передачу сервера другому владельцу",
          uz: "Serverni boshqa egasiga o'tkazish uchun ilovalar shablonlari",
          en: "Templates of applications for the transfer of the server to another owner",
        },
        link: "/documents/transfer-owner/server-owner",
      },
      {
        id: "account to another owner",
        title: {
          ru: "Шаблоны заявлений на передачу хостингового аккаунта другому владельцу",
          uz: "Xosting hisobini boshqa egasiga o'tkazish uchun shablonlar",
          en: "Templates for transferring a hosting account to another owner",
        },
        link: "/documents/transfer-owner/hosting-owner",
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
