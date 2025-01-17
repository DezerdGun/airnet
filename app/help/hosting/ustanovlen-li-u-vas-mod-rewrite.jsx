import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Установлен ли у вас mod_rewrite?",
    uz: "Sizda mod_rewrite o'rnatilganmi?",
    en: "Do you have mod_rewrite installed?",
  },
  url: "/help/hosting/ustanovlen-li-u-vas-mod-rewrite",
  related: [],
  content: {
    ru: (
      <>
        <p>Да, на нашем хостинге установлен mod_rewrite.</p>
      </>
    ),
    uz: (
      <>
        <p>Ha, bizning hostingimizda mod_rewrite o'rnatilgan.</p>
      </>
    ),
    en: (
      <>
        <p>Yes, we have mod_rewrite installed on our hosting.</p>
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
