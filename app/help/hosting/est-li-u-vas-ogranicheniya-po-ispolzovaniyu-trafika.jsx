import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Есть ли у вас ограничения по использованию трафика?",
    uz: "Sizda trafikdan foydalanishda cheklovlar bormi?",
    en: "Do you have any restrictions on traffic usage?",
  },
  url: "/help/hosting/est-li-u-vas-ogranicheniya-po-ispolzovaniyu-trafika",
  related: [],
  content: {
    ru: (
      <>
        <p>Нет, ограничения по использованию трафика отсутствуют.</p>
      </>
    ),
    uz: (
      <>
        <p>Yo'q, transportdan foydalanishda hech qanday cheklovlar yo'q.</p>
      </>
    ),
    en: (
      <>
        <p>No, there are no restrictions on traffic usage.</p>
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
