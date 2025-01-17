import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "У вас установлен модуль ionCube?",
    uz: "Sizda ionCube moduli o'rnatilganmi?",
    en: "Do you have ionCube module installed?",
  },
  url: "/help/hosting/u-vas-ustanovlen-modul-ioncube",
  related: [],
  content: {
    ru: (
      <>
        <p>Да, на нашем хостинге установлен модуль ionCube.</p>
      </>
    ),
    uz: (
      <>
        <p>Ha, bizning hostingda ionCube moduli o'rnatilgan.</p>
      </>
    ),
    en: (
      <>
        <p>Yes, our hosting has the ionCube module installed.</p>
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
