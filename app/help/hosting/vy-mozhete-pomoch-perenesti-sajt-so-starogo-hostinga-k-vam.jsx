import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Вы можете помочь перенести сайт со старого хостинга к вам?",
    uz: "Veb-saytimni eski xostingimdan sizga o'tkazishimga yordam bera olasizmi?",
    en: "Can you help me transfer my website from my old hosting to you?",
  },
  url: "/help/hosting/vy-mozhete-pomoch-perenesti-sajt-so-starogo-hostinga-k-vam",
  related: [],
  content: {
    ru: (
      <>
        <p>Да, мы предоставляем бесплатный перенос вашего сайта с другого хостинга.</p>
      </>
    ),
    uz: (
      <>
        <p>Ha, biz sizning veb-saytingizni boshqa hostingdan bepul o'tkazishni ta'minlaymiz.</p>
      </>
    ),
    en: (
      <>
        <p>Yes, we provide free transfer of your website from another hosting.</p>
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
