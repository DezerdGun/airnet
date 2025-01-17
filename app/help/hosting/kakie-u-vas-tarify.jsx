import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Какие у вас тарифы?",
    uz: "Narxlaringiz qanday?",
    en: "What are your rates?",
  },
  url: "/help/hosting/kakie-u-vas-tarify",
  related: [],
  content: {
    ru: (
      <>
        <p>С актуальными тарифами можно ознакомиться на странице https://airnet.uz/hosting</p>
      </>
    ),
    uz: (
      <>
        <p>Amaldagi tariflar bilan https://airnet.uz/hosting sahifasida tanishish mumkin</p>
      </>
    ),
    en: (
      <>
        <p>Current tariffs can be found on the page https://airnet.uz/hosting</p>
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
