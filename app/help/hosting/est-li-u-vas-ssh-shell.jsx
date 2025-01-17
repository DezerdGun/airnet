import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Есть ли у вас SSH (Shell)?",
    uz: "Sizda SSH (Shell) bormi?",
    en: "Do you have SSH (Shell)?",
  },
  url: "/help/hosting/est-li-u-vas-ssh-shell",
  related: [],
  content: {
    ru: (
      <>
        <p>На хостинге SSH доступ не предоставляется. Данная функция доступна только на VDS/VPS серверах, так как хостинг рассчитан на работу с PHP сайтами.</p>
      </>
    ),
    uz: (
      <>
        <p>SSH kirish hostingda ta'minlanmagan. Bu funksiya faqat VDS/VPS serverlarida mavjud, chunki hosting PHP saytlari bilan ishlashga mo'ljallangan.</p>
      </>
    ),
    en: (
      <>
        <p>SSH access is not provided on hosting. This function is available only on VDS/VPS servers, as the hosting is designed to work with PHP sites.</p>
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
