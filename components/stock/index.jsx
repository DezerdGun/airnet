import st from "./stock.module.scss";
import WhyBlock from "../whyBlock/index.jsx";
import { presentIcon } from "shared/icons/presentIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { settingsIcon } from "shared/icons/settingsIcon";
import { usersIcon } from "shared/icons/usersIcon";
import { globalIcon } from "shared/icons/globalIcon";

export default function Stock({ language }) {
  const whyBlockStock = [
    {
      title: {
        ru: "Подарки при оплате на длительный срок",
        uz: "Uzoq muddatli to'lovlar uchun sovg'alar",
        en: "Gifts when paid for a long time",
      },
      description: {
        ru: (
          <p>
            Закажите любой тариф виртуального хостинга на 1 год и получите в подарок домен в зоне .UZ: Помощь в переносе
            сайтов; SSL-сертификаты на каждый Ваш домен; Приоритетный уровень обслуживания;
          </p>
        ),
        uz: (
          <p>
            1 yilga istalgan virtual hosting rejasiga buyurtma bering va .UZ zonasida domenni sovg'a sifatida oling:
            Saytlarni uzatishda yordam bering; Har bir domeningiz uchun SSL sertifikatlari; Xizmat ko'rsatishning
            ustuvor darajasi;
          </p>
        ),
        en: (
          <p>
            Order any virtual hosting plan for 1 year and get a domain in the .UZ zone as a gift: Assistance in site
            migration; SSL certificates for each of your domains; Priority level of service;
          </p>
        ),
      },
      icon: presentIcon,
    },
    {
      title: {
        ru: "Хостинг в подарок, при переезде от другого провайдера",
        uz: "Boshqa provayderdan ko'chib o'tishda sovg'a sifatida xosting",
        en: "Hosting as a gift, when moving from another provider",
      },
      description: {
        ru: (
          <p>
            Вы переезжаете к нам от другого хостинг-провайдера? Тогда мы подарим один месяц виртуального хостинга, по
            выбранному Вами тарифу, более того, выполним бесплатный перенос всех сайтов!
          </p>
        ),
        uz: (
          <p>
            Siz boshqa hosting provayderidan bizga ko'chyapsizmi? Shunda biz siz tanlagan tarif bo'yicha bir oylik
            virtual xosting beramiz, bundan tashqari barcha saytlarni bepul o'tkazamiz!
          </p>
        ),
        en: (
          <p>
            Are you moving to us from another hosting provider? Then we will give you one month of virtual hosting at
            the rate you choose, moreover, we will transfer all sites for free!
          </p>
        ),
      },
      icon: presentIcon,
    },
    {
      title: { ru: "Тестовый период", uz: "Sinov davri", en: "Test period" },
      description: {
        ru: <p>Некоторые наши услуги Вы можете тестировать до 3-х дней.</p>,
        uz: <p>Ba'zi xizmatlarimizni 3 kungacha sinab ko'rishingiz mumkin.</p>,
        en: <p>Some of our services you can test up to 3 days.</p>,
      },
      icon: clockIcon,
    },
    {
      title: {
        ru: "Помощь при переезде",
        uz: "Ko'chirishda yordam bering",
        en: "Help with moving",
      },
      description: {
        ru: <p>Сделаем все сами, в кратчайшие сроки.</p>,
        uz: <p>Biz hamma narsani o'zimiz qilamiz, eng qisqa vaqt ichida.</p>,
        en: <p>We will do everything ourselves, in the shortest possible time.</p>,
      },
      icon: settingsIcon,
    },
    {
      title: {
        ru: "Приведите друга!",
        uz: "Do'stingizni olib keling!",
        en: "Bring a friend!",
      },
      description: {
        ru: <p>Подарим Вам бесплатный месяц веб-хостинга, по Вашему тарифному плану.</p>,
        uz: <p>Biz sizga tarif rejangizga muvofiq bir oylik bepul veb-xosting beramiz.</p>,
        en: <p>We will give you a free month of web hosting, according to your tariff plan.</p>,
      },
      icon: usersIcon,
    },
    {
      title: {
        ru: "Бесплатно доменное имя!",
        uz: "Bepul domen nomi!",
        en: "Free domain name!",
      },
      description: {
        ru: <p>При заказе виртуального хостинга от 1 года.</p>,
        uz: <p>1 yildan boshlab virtual xostingga buyurtma berishda.</p>,
        en: <p>When ordering a virtual hosting from 1 year.</p>,
      },
      icon: globalIcon,
    },
  ];

  const langData = {
    title: {
      ru: "Акции",
      uz: "Aksiya",
      en: "Stocks",
    },
  };

  return (
    <div className={st.stock}>
      <WhyBlock title={langData.title[language]} content={whyBlockStock} language={language} />
    </div>
  );
}
