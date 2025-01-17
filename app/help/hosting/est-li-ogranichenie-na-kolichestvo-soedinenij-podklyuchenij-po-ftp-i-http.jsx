import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Есть ли ограничение на количество соединений/подключений по FTP и HTTP?",
    uz: "FTP va HTTP orqali ulanishlar soniga cheklov bormi?",
    en: "Is there a limit on the number of connections via FTP and HTTP?",
  },
  url: "/help/hosting/est-li-ogranichenie-na-kolichestvo-soedinenij-podklyuchenij-po-ftp-i-http",
  related: [],
  content: {
    ru: (
      <>
        <p>Нет, ограничения на количество одновременных соединений отсутствуют.</p>
      </>
    ),
    uz: (
      <>
        <p>Yo'q, bir vaqtning o'zida ulanishlar soni bo'yicha hech qanday cheklov yo'q.</p>
      </>
    ),
    en: (
      <>
        <p>No, there is no limit on the number of simultaneous connections.</p>
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
