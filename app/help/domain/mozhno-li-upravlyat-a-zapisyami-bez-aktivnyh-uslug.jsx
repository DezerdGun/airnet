import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsDomain } from "@/app/help/domain";

const mainData = {
  headTitle: { 
    ru: "Можно ли управлять A-записями без активных услуг?",
    uz: "A-yozuvlarni faol xizmatlarsiz boshqarish mumkinmi?",
    en: "Is it possible to manage A-records without active services?",
  },
  url: "/help/domain/mozhno-li-upravlyat-a-zapisyami-bez-aktivnyh-uslug",
  related: [
    {
      title: {
        ru: "Наши DNS-записи",
        uz: "Bizning DNS-yozuvlarimiz",
        en: "Our DNS records",
      },
      link: "/help/domain/dns",
    },
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
    {
      title: {
        ru: "Сколько ждать обновления DNS?",
        uz: "DNS-ni yangilash qancha vaqt oladi?",
        en: "How long does it take to update DNS?",
      },
      link: "/help/domain/skolko-zhdat-obnovleniya-dns",
    },
    {
      title: {
        ru: "Можно ли сделать перерегистрацию домена в AIRNET?",
        uz: "AIRNET da domenni qayta ro'yxatdan o'tkazish mumkinmi?",
        en: "Is it possible to re-register a domain in AIRNET?",
      },
      link: "/help/domain/mozhno-li-sdelat-pereregistraciyu-domena-v-airnet",
    },
    {
      title: {
        ru: "Домен занят. Как я могу забронировать и с кем могу связаться?",
        uz: "Domen olinadi. Qanday qilib bron qilishim mumkin va kimga murojaat qilishim mumkin?",
        en: "The domain is taken. How can I reserve it and who can I contact?",
      },
      link: "/help/domain/domen-zanyat-kak-ya-mogu-zabronirovat-i-s-kem-mogu-svyazatsya",
    },
    {
      title: {
        ru: "Можно ли зарегистрировать домен в AIRNET, если нет 18 лет?",
        uz: "18 yoshdan kichik bo'lsangiz, AIRNET da domenni ro'yxatdan o'tkazish mumkinmi?",
        en: "Is it possible to register a domain in AIRNET if you are under 18 years old?",
      },
      link: "/help/domain/mozhno-li-zaregistrirovat-domen-v-airnet-esli-net-18-let",
    },
    {
      title: {
        ru: "Можно ли управлять A-записями без активных услуг?",
        uz: "A-yozuvlarni faol xizmatlarsiz boshqarish mumkinmi?",
        en: "Is it possible to manage A-records without active services?",
      },
      link: "/help/domain/mozhno-li-upravlyat-a-zapisyami-bez-aktivnyh-uslug",
    },
    {
      title: {
        ru: "Как посмотреть, кому принадлежит домен?",
        uz: "Domen kimga tegishli ekanligini qanday ko'rish mumkin?",
        en: "How to see who owns a domain?",
      },
      link: "/help/domain/kak-posmotret-komu-prinadlezhit-domen",
    },
    {
      title: {
        ru: "Как удалить домен?",
        uz: "Domenni qanday o'chirish mumkin?",
        en: "How to delete a domain?",
      },
      link: "/help/domain/kak-udalit-domen",
    },
    {
      title: {
        ru: "Можно ли зарегистрировать домен без приобретения услуг хостинга?",
        uz: "Xosting xizmatlarini sotib olmasdan domenni ro'yxatdan o'tkazish mumkinmi?",
        en: "Is it possible to register a domain without purchasing hosting services?",
      },
      link: "/help/domain/mozhno-li-zaregistrirovat-domen-bez-priobreteniya-uslug-hostinga",
    },
  ],
  content: {
    ru: (
      <>
        <p>Нельзя, только в комплексе с активными услугами</p>
      </>
    ),
    uz: (
      <>
        <p>Yo'q, faqat faol xizmatlar bilan birgalikda</p>
      </>
    ),
    en: (
      <>
        <p>No, only in combination with active services</p>
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
