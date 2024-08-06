import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsDomain } from "@/app/help/domain";

const mainData = {
  headTitle: { ru: "DNS записи", uz: "DNS yozuvlari", en: "DNS records" },
  url: "/help/domain/dns",
  related: [
    {
      title: {
        ru: "Как зарегистрировать домен?",
        uz: "Domenlarni  qanday royxatdan otqazish ",
        en: "How to register a domain?",
      },
      link: "/help/domain/kak-zaregistrirovat-domen",
    },
    {
      title: {
        ru: "Рекомендации по выбору доменного имени",
        uz: "Domen nomlarini tanlshdagi maslaxatlar",
        en: "Recommendations for choosing a domain name",
      },
      link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
    },
    {
      title: {
        ru: "Нужно ли вводить данные паспорта для регистрации?",
        uz: "Ro'yxatdan otish uchun pasport malumotlari kerakmi?",
        en: "Do I need to enter passport data for registration?",
      },
      link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
    },
  ],
  content: {
    ru: (
      <>
        <p>
          При добавлении домена на наш хостинг, рекомендуем делегировать его на
          DNS-сервера компании AIRNET.uz
        </p>
        <p>
          Name-сервер 1: <strong>dns1.airnet.uz</strong>
        </p>
        <p>
          Name-сервер 2: <strong>dns2.airnet.uz</strong>
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          Bizning xostingimizga domen qo'shganda, uni vakolat berishni tavsiya
          qilamiz AIRNET.uz DNS serverlari
        </p>
        <p>
          1- server nomi: <strong>dns1.airnet.uz</strong>
        </p>
        <p>
          2- server nomi: <strong>dns2.airnet.uz</strong>
        </p>
      </>
    ),
    en: (
      <>
        <p>
          When adding a domain to our hosting, we recommend delegating it to the
          DNS servers of AIRNET.uz
        </p>
        <p>
          Name server 1: <strong>dns1.airnet.uz</strong>
        </p>
        <p>
          Name server 2: <strong>dns2.airnet.uz</strong>
        </p>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsDomain,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return (
    <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />
  );
}
