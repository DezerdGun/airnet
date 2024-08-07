import Container from "@/components/container";
import Partners from "@/components/partners";
import StepsBlock from "@/components/stepsBlock";
import WhyCard from "@/components/whyCard";
import st from "./reseller.module.scss";
import WhyBlock from "@/components/whyBlock";
import { serversIcon } from "shared/icons/serversIcon";
import { tagIcon } from "shared/icons/tagIcon";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

const content = [
  {
    title: {
      ru: "Сайт хостинг-провайдера",
      uz: "Xosting provayderining veb-sayti",
      en: "Website hosting provider",
    },
    description: {
      ru: (
        <p>
          Сайт должен быть готов для размещения предложений по нашим виртуальным серверам. Это может быть действующий
          сайт хостинговой компании, уже имеющей опыт работы в хостинг-услугах и клиентскую базу.
        </p>
      ),
      uz: (
        <p>
          Sayt virtual serverlarimizga takliflar joylashtirishga tayyor bo'lishi kerak. Bu hosting xizmatlari va
          mijozlar bazasi bo'yicha tajribaga ega bo'lgan jonli sayt hosting kompaniyasi bo'lishi mumkin
        </p>
      ),
      en: (
        <p>
          The site must be ready to host offers for our virtual servers. This may be an active site of a hosting company
          that already has experience in hosting services and a client base.
        </p>
      ),
    },
    icon: serversIcon,
  },
  {
    title: {
      ru: "Сайт веб-студии",
      uz: "Veb-studiya sayti",
      en: "Web studio website",
    },
    description: {
      ru: (
        <p>
          Помимо услуг по созданию сайтов, студия должна предлагать своим клиентам дополнительные услуги по их
          размещению.
        </p>
      ),
      uz: (
        <p>
          Sayt yaratish xizmatlaridan tashqari, studiya o'z mijozlariga ularni joylashtirish uchun qo'shimcha
          xizmatlarni taklif qilishi kerak.
        </p>
      ),
      en: (
        <p>
          In addition to site creation services, the studio must offer its clients additional services for their
          placement.
        </p>
      ),
    },
    icon: tagIcon,
  },
];

export default function Reseller({ language }) {
  const langData = {
    headTitle: {
      ru: "Кто может стать реселлером?",
      uz: "Kim reseller bola oladi?",
      en: "Who can become a reseller?",
    },
    description: {
      ru: (
        <p>
          К участию в программе допускаются только нацеленные на массовую перепродажу партнёры. Обязательными условиями
          являются наличие сайта и продажа не менее 10 серверов в первые полгода.
        </p>
      ),
      uz: (
        <p>
          Dasturda faqat ommaviy ishlab chiqarishga yo'naltirilganlar ishtirok etishlari mumkin. qayta sotish
          hamkorlari. Veb-sayt - bu old shart va birinchi olti oy ichida kamida 10 ta serverni sotish.
        </p>
      ),
      en: (
        <p>
          Only partners aimed at mass resale are allowed to participate in the program. Mandatory the conditions are the
          presence of a website and the sale of at least 10 servers in the first six months.
        </p>
      ),
    },
    title: {
      ru: "Как это работает?",
      uz: "Bu qanday ishlaydi?",
      en: "How it works?",
    },
  };

  const breadCrumbs = [
    {
      name: {
        ru: "Реселлер",
        uz: "Реселлер",
        en: "Реселлер",
      },
      link: "/reseller",
    },
  ];

  return (
    <>
      <div className={st.reseller}>

      {breadCrumbs && breadCrumbs.length ? (
      <>
        <BreadCrumbs data={breadCrumbs} language={language} />
        <PageBreadcrumb links={breadCrumbs} language={language} />
      </>
      ) : null}

        <Container headTitle={langData.headTitle[language]} description={langData.description[language]}></Container>
        <WhyBlock content={content} language={language} />
      </div>
      <StepsBlock
        title={langData.title[language]}
        data={[
          {
            title: { ru: "Получаете заявку", uz: "Arizani qabul qilish", en: "Receive an application" },
            description: {
              ru: "Клиенты обращаются за сервером напрямую к вам",
              uz: "Mijozlar to'g'ridan-to'g'ri sizdan server so'rashadi",
              en: "Clients request a server directly from you",
            },
          },
          {
            title: { ru: "Покупаете у нас", uz: "Bizdan harid qiling", en: "Buy from us" },
            description: {
              ru: "Приобретаете у нас сервер со скидкой от 15 до 30%",
              uz: "Bizdan serverni 15 dan 30% gacha chegirma bilan sotib oling",
              en: "Purchase a server from us with a discount of 15 to 30%",
            },
          },
          {
            title: { ru: "Продаёте клиенту", uz: "Mikozga soting", en: "Sell to a customer" },
            description: {
              ru: "Купленный сервер вы продаёте своему клиенту с наценкой",
              uz: "Siz sotib olingan serverni mijozingizga yuqori narxda sotasiz",
              en: "You sell the purchased server to your client at a premium",
            },
          },
          {
            title: { ru: "Профит!", uz: "Foyda!", en: "Profit!" },
            description: {
              ru: "Скидка + маржа = ваша прибыль, которую вы получаете сразу после первого заказа",
              uz: "Chegirma + marja = birinchi buyurtmadan keyin darhol oladigan daromadingiz",
              en: "Discount + margin = your profit that you get immediately after the first order",
            },
          },
        ]}
        img="/how-work-img.png"
        language={language}
      />
      <Partners language={language} />
      <Reviews language={language} />
    </>
  );
}
