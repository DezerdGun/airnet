import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Как разместить несколько сайтов на одном аккаунте?",
    uz: "Bir hisobda bir nechta saytlarni qanday joylashtirish mumkin?",
    en: "How to host multiple sites on one account?",
  },
  url: "/help/hosting/kak-razmestit-neskolko-sajtov-na-odnom-akkaunte",
  related: [],
  content: {
    ru: (
      <>
        <p>Для размещения дополнительного сайта необходимо добавить домен и создать директорию для нового сайта через панель управления хостинга Cpanel. Количество сайтов регулируется согласно выбранному тарифному плану.</p>
      </>
    ),
    uz: (
      <>
        <p>Qo'shimcha saytni joylashtirish uchun siz domen qo'shishingiz va Cpanel hosting boshqaruv paneli orqali yangi sayt uchun katalog yaratishingiz kerak. Saytlar soni tanlangan tarif rejasiga muvofiq tartibga solinadi.</p>
      </>
    ),
    en: (
      <>
        <p>To host an additional site, you need to add a domain and create a directory for the new site through the Cpanel hosting control panel. The number of sites is regulated according to the selected tariff plan.</p>
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
