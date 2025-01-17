import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Есть ли у вас бэкап (резервное копирование) данных, и как часто он производится?",
    uz: "Ma'lumotlaringizning zaxira nusxasi bormi va u qanchalik tez-tez amalga oshiriladi?",
    en: "Do you have a backup of your data and how often is it done?",
  },
  url: "/help/hosting/est-li-u-vas-behkap-rezervnoe-kopirovanie-dannyh-i-kak-chasto-on-proizvoditsya",
  related: [],
  content: {
    ru: (
      <>
        <p>Да, на нашем хостинге производится автоматическое резервное копирование данных всех клиентов 3 раза в неделю.</p>
      </>
    ),
    uz: (
      <>
        <p>Ha, bizning hosting avtomatik ravishda barcha mijozlar ma'lumotlarini haftasiga 3 marta zaxiralaydi.</p>
      </>
    ),
    en: (
      <>
        <p>Yes, our hosting automatically backs up all clients' data 3 times a week.</p>
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
