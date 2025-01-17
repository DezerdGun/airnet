import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Как считается количество сайтов на сервисе «Хостинг»?",
    uz: "Xosting xizmatidagi saytlar soni qanday hisoblanadi?",
    en: "How is the number of sites on the Hosting service calculated?",
  },
  url: "/help/hosting/kak-schitaetsya-kolichestvo-sajtov-na-servise-hosting",
  related: [],
  content: {
    ru: (
      <>
        <p>При подсчете количества сайтов учитываются как домены, так и поддомены.</p>
      </>
    ),
    uz: (
      <>
        <p>Saytlar sonini hisoblashda domenlar ham, subdomenlar ham hisobga olinadi.</p>
      </>
    ),
    en: (
      <>
        <p>When calculating the number of sites, both domains and subdomains are taken into account.</p>
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
