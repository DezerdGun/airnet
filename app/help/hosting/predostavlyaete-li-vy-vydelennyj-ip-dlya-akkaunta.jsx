import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Предоставляете ли вы выделенный IP для аккаунта?",
    uz: "Hisob uchun maxsus IP taqdim qilasizmi?",
    en: "Do you provide dedicated IP for account?",
  },
  url: "/help/hosting/predostavlyaete-li-vy-vydelennyj-ip-dlya-akkaunta",
  related: [],
  content: {
    ru: (
      <>
        <p>На cPanel хостинге используется общий IP-адрес для всех клиентов.</p>
        <p>IP: 176.96.243.100</p>
      </>
    ),
    uz: (
      <>
        <p>cPanel hosting barcha mijozlar uchun umumiy IP manzilidan foydalanadi.</p>
        <p>IP: 176.96.243.100</p>
      </>
    ),
    en: (
      <>
        <p>cPanel hosting uses a shared IP address for all clients.</p>
        <p>IP: 176.96.243.100</p>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsHosting,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
