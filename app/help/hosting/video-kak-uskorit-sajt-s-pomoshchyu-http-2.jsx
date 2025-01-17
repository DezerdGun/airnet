import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Видео: «Как ускорить сайт с помощью HTTP/2?»",
    uz: "Video: «HTTP/2 yordamida veb-saytingizni qanday tezlashtirish mumkin?»",
    en: "Video: «How to Speed ​​Up Your Website with HTTP/2?»",
  },
  url: "/help/hosting/video-kak-uskorit-sajt-s-pomoshchyu-http-2",
  related: [],
  content: {
    ru: (
      <>
        <p>Ресурсы предоставляются строго в рамках выбранного тарифного плана. Для больших объемов рекомендуем использовать VDS/VPS сервера.</p>
      </>
    ),
    uz: (
      <>
        <p>Resurslar qat'iy tanlangan tarif rejasi doirasida taqdim etiladi. Katta hajmlar uchun VDS/VPS serverlaridan foydalanishni tavsiya etamiz.</p>
      </>
    ),
    en: (
      <>
        <p>Resources are provided strictly within the selected tariff plan. For large volumes, we recommend using VDS/VPS servers.</p>
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
