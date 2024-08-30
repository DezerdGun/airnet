import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsDomain } from "@/app/help/domain";

const mainData = {
  headTitle: {
    ru: "Нужно ли вводить данные паспорта для регистрации?",
    uz: "Ro'yxatdan o'tish uchun pasport ma'lumotlarini kiritishim kerakmi?",
    en: "Do I need to enter passport data for registration?",
  },
  url: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
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
  ],
  content: {
    ru: (
      <p>
        В случае регистрации домена копия паспорта или ID-карта является необходимым документом, а также адрес постоянного места жительства, для регистрации домена в зоне UZ.
        <br /><br />
        Это требование главного регистратора доменов в зоне UZ cctld.uz
      </p>
    ),
    uz: (
      <p>
        Domenni ro‘yxatdan o‘tkazishda domenni UZ zonasida ro‘yxatdan o‘tkazish uchun pasport yoki ID karta nusxasi, shuningdek doimiy yashash manzili zaruriy hujjat hisoblanadi. 
        <br /><br />
        Bu cctld.uz UZ zonasidagi asosiy domen registratorining talabi
      </p>
    ),
    en: (
      <p>
        In case of domain registration, a copy of the passport or ID card is a necessary document, as well as the address of permanent residence, for domain registration in the UZ zone.
        <br /><br />
        This is a requirement of the main registrar of domains in the UZ zone cctld.uz
      </p>
    ),
  },
};

export default function HelpBlog({ language }) {
  const breadCrumbs = [
    ...breadCrumbsDomain,
    {
      name: mainData.headTitle,
      link: mainData.url,
    },
  ];

  return (
    <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />
  );
}
