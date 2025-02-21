import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import { RegDomainBlock } from "@/components/regDomain";
import SEO from "@/components/seo";
import WhyBlock from "@/components/whyBlock";
import st from "./domains.module.scss";
import { shakeIcon } from "shared/icons/shakeIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { gamepadIcon } from "shared/icons/gamepadIcon";
import { usersIcon } from "shared/icons/usersIcon";
import Reviews from "@/components/reviews";
import ForContract from "@/components/forContract";
import { forContractVDSData } from "../vds";
import ForSupport from "@/components/forSupport";
import ForInfo from "@/components/forInfo";
import ForInfoTxt from "@/components/forInfoTxt";
import { forSupportVDSData } from "../vds";
import ForDatacenter from "@/components/forDatacenter";
import { forDatacenterVDSData } from "../vds";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductDomain from "../../components/seo/productdomain"
import { forContractArticlesData } from "../domains";

export const breadCrumbsDomain = [
  {
    name: {
      ru: "Регистрация домена в зоне UZ",
      uz: "Регистрация домена в зоне UZ",
      en: "Регистрация домена в зоне UZ",
    },
    link: "/domains",
  },
];
export const breadCrumbsIn = [
  ...breadCrumbsDomain,
  {
    name: {
      ru: "Регистрация домена в зоне in",
      uz: "In zonada domenni ro'yxatdan o'tkazish",
      en: "Domain registration in the in zone",
    },
    link: "/domains/in",
  },
];

const content = [
    {
      title: {
      ru: "Национальное признание",
      uz: "Национальное признание",
      en: "Национальное признание" },
      description: {
        ru: <p>Домен .in является национальным доменом Индии, что означает, что ваш бизнес будет иметь официальное признание и хостинг в этой стране.</p>,
        uz: <p>Домен .in является национальным доменом Индии, что означает, что ваш бизнес будет иметь официальное признание и хостинг в этой стране.</p>,
        en: <p>Домен .in является национальным доменом Индии, что означает, что ваш бизнес будет иметь официальное признание и хостинг в этой стране.</p>,
      },
      icon: shakeIcon,
    },
    {
      title: { 
      ru: "Доступ к локальному рынку", 
      uz: "Доступ к локальному рынку", 
      en: "Доступ к локальному рынку" },
      description: {
        ru: <p>Домен .in будет привлекать индийских потребителей, которые будут больше интересоваться вашим продуктом или услугой благодаря хостинг услуге.</p>,
        uz: <p>Домен .in будет привлекать индийских потребителей, которые будут больше интересоваться вашим продуктом или услугой благодаря хостинг услуге.</p>,
        en: <p>Домен .in будет привлекать индийских потребителей, которые будут больше интересоваться вашим продуктом или услугой благодаря хостинг услуге.</p>,
      },
      icon: clockIcon,
    },
    {
      title: {
        ru: "Повышение конкурентоспособности", 
        uz: "Повышение конкурентоспособности", 
        en: "Повышение конкурентоспособности" },
      description: {
        ru: <p>С доменом .in ваш бизнес будет иметь  преимущество над другими бизнесами, которые не имеют национальной хостинг опции.</p>,
        uz: <p>С доменом .in ваш бизнес будет иметь  преимущество над другими бизнесами, которые не имеют национальной хостинг опции.</p>,
        en: <p>С доменом .in ваш бизнес будет иметь  преимущество над другими бизнесами, которые не имеют национальной хостинг опции.</p>,
      },
      icon: gamepadIcon,
    },
    {
      title: {
        ru: "Повышенная  безопасность", 
        uz: "Повышенная  безопасность", 
        en: "Повышенная  безопасность" },
      description: {
        ru: <p>Домен .in имеет уровень безопасности, равный международным доменам, что означает, что ваш бизнес будет надежно защищен от кибератак.</p>,
        uz: <p>Домен .in имеет уровень безопасности, равный международным доменам, что означает, что ваш бизнес будет надежно защищен от кибератак.</p>,
        en: <p>Домен .in имеет уровень безопасности, равный международным доменам, что означает, что ваш бизнес будет надежно защищен от кибератак.</p>,
      },
      icon: warrantyIcon,
    },
  ],
  faq = [
    {
      title: {
        ru: "Сколько стоит домен .IN?",
        uz: "Сколько стоит домен .IN?",
        en: "Сколько стоит домен .IN?",
      },
      description: {
        ru: (
          <>
            <p>
            Стоимость регистрации домена .in зависит от регистратора и типа регистрации. Обычно цена составляет от 1 500 до 2 500 индийских рупий (около 20-35 долларов США) за год. Купить домены можно у нас всего в несколько кликов. При заказе услуги наши агенты помогут подобрать домены верхнего уровня для ваших сайтов.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Стоимость регистрации домена .in зависит от регистратора и типа регистрации. Обычно цена составляет от 1 500 до 2 500 индийских рупий (около 20-35 долларов США) за год. Купить домены можно у нас всего в несколько кликов. При заказе услуги наши агенты помогут подобрать домены верхнего уровня для ваших сайтов.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Стоимость регистрации домена .in зависит от регистратора и типа регистрации. Обычно цена составляет от 1 500 до 2 500 индийских рупий (около 20-35 долларов США) за год. Купить домены можно у нас всего в несколько кликов. При заказе услуги наши агенты помогут подобрать домены верхнего уровня для ваших сайтов.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Домен .IN подходит для?",
        uz: "Домен .IN подходит для?",
        en: "Домен .IN подходит для?",
      },
      description: {
        ru: (
          <>
            <p>
            Домен .in подходит для любых индийских компаний и организаций, которые хотят развивать свой онлайн-бизнес в Индии и в международных зонах. Этот хостинг также подходит для ТНК, которые хотят расширить свои операции в Индии.
            </p>
          </>), 
        uz: (
          <>
            <p>
            Домен .in подходит для любых индийских компаний и организаций, которые хотят развивать свой онлайн-бизнес в Индии и в международных зонах. Этот хостинг также подходит для ТНК, которые хотят расширить свои операции в Индии.
            </p>
          </>), 
        en: (
          <>
            <p>
            Домен .in подходит для любых индийских компаний и организаций, которые хотят развивать свой онлайн-бизнес в Индии и в международных зонах. Этот хостинг также подходит для ТНК, которые хотят расширить свои операции в Индии.
            </p>
          </>)
        },
    },
    {
      title: {
        ru: "Как зарегистрировать домен .IN?",
        uz: "Как зарегистрировать домен .IN?",
        en: "Как зарегистрировать домен .IN?",
      },
      description: {
        ru: (
          <>
            <p>
            Регистрация домена .in может быть сделана через регистратора domain registrar, который аккредитован Индийской ассоциацией интернета (IANA). Для начала вам нужно выбрать подходящего регистратора и пройти процесс регистрации, обратите внимание на реестр доменных имен в правилах регистрации. Вам нужно предоставить документы, подтверждающие право на использование имени компании или организации. Зарегистрируйте новый домен уже сегодня всего в пару кликов!
            </p>
          </>), 
        uz: (
          <>
            <p>
            Регистрация домена .in может быть сделана через регистратора domain registrar, который аккредитован Индийской ассоциацией интернета (IANA). Для начала вам нужно выбрать подходящего регистратора и пройти процесс регистрации, обратите внимание на реестр доменных имен в правилах регистрации. Вам нужно предоставить документы, подтверждающие право на использование имени компании или организации. Зарегистрируйте новый домен уже сегодня всего в пару кликов!
            </p>
          </>), 
        en: (
          <>
            <p>
            Регистрация домена .in может быть сделана через регистратора domain registrar, который аккредитован Индийской ассоциацией интернета (IANA). Для начала вам нужно выбрать подходящего регистратора и пройти процесс регистрации, обратите внимание на реестр доменных имен в правилах регистрации. Вам нужно предоставить документы, подтверждающие право на использование имени компании или организации. Зарегистрируйте новый домен уже сегодня всего в пару кликов!
            </p>
          </>)
      },
    },
  ];
  export const forInfoINData = {
    desc2: {
      ru: (
        <>
          В целом, покупка домен в зоне .in - это выгодное решение для вашего бизнеса в Индии, который поможет вам привлечь более локальных потребителей и увеличить оборот. При заказе услуги регистрации домена в зоне .in, мы предоставляем бесплатную защиту и подносе сопровождение в процессе регистрации виртуального хостинга для ваших сайтов.
        </>
      ),
      uz: (
        <>
          В целом, покупка домен в зоне .in - это выгодное решение для вашего бизнеса в Индии, который поможет вам привлечь более локальных потребителей и увеличить оборот. При заказе услуги регистрации домена в зоне .in, мы предоставляем бесплатную защиту и подносе сопровождение в процессе регистрации виртуального хостинга для ваших сайтов.
        </>
      ),
      en: (
        <>
          В целом, покупка домен в зоне .in - это выгодное решение для вашего бизнеса в Индии, который поможет вам привлечь более локальных потребителей и увеличить оборот. При заказе услуги регистрации домена в зоне .in, мы предоставляем бесплатную защиту и подносе сопровождение в процессе регистрации виртуального хостинга для ваших сайтов.
        </>
      ),
    },
    // img: "/intro-img.png",
    content: [
      {
        title: { 
        ru: "", 
        uz: "", 
        en: "" },
        img: (
          <p></p>
        ),
      },
    ],
  };
  export const forInfoWhatData = {
    title: {
      ru: (
        <>
          Купить домены в зоне in 
        </>
      ),
      uz: (
        <>
          Купить домены в зоне in 
        </>
      ),
      en: (
        <>
          Купить домены в зоне in 
        </>
      ),
    },
    desc: {
      ru: (
        <>
          Покупка домена в зоне .in - простой и эффективный способ развивать свой бизнес в Индии. Рынок Индии - это золотая жила для любого бизнеса, который хочет расширить свои международные связи и доходы. Однако для того, чтобы ваш бизнес был успешным в Индии, вам нужно иметь сильное присутствие в онлайне и уникальный интернет-адрес, который будет привлекать клиентов и отличать вас от конкурентов в популярных зонах. <br />

          В этом случае, доменная зона.in может быть идеальным выбором для вашего бизнеса в Индии.
        </>
      ),
      uz: (
        <>
        Покупка домена в зоне .in - простой и эффективный способ развивать свой бизнес в Индии. Рынок Индии - это золотая жила для любого бизнеса, который хочет расширить свои международные связи и доходы. Однако для того, чтобы ваш бизнес был успешным в Индии, вам нужно иметь сильное присутствие в онлайне и уникальный интернет-адрес, который будет привлекать клиентов и отличать вас от конкурентов в популярных зонах. <br />

        В этом случае, доменная зона.in может быть идеальным выбором для вашего бизнеса в Индии.
        </>
      ),
      en: (
        <>
        Покупка домена в зоне .in - простой и эффективный способ развивать свой бизнес в Индии. Рынок Индии - это золотая жила для любого бизнеса, который хочет расширить свои международные связи и доходы. Однако для того, чтобы ваш бизнес был успешным в Индии, вам нужно иметь сильное присутствие в онлайне и уникальный интернет-адрес, который будет привлекать клиентов и отличать вас от конкурентов в популярных зонах. <br />

        В этом случае, доменная зона.in может быть идеальным выбором для вашего бизнеса в Индии.
        </>
      ),
    },
    desc2: {
      ru: (
        <>
        </>
      ),
      uz: (
        <>
        </>
      ),
      en: (
        <>
        </>
      ),
    },
    content: [
      {
        title: { 
        ru: "", 
        uz: "", 
        en: "" },
        img: (
          <p></p>
        ),
      },
    ],
  };

export default function Domains({ language }) {
  const langData = {
    seoTitle: {
      ru: "Купить домен in - зарегистрировать доменное имя в зоне in",
      uz: "Купить домен in - зарегистрировать доменное имя в зоне in",
      en: "Купить домен in - зарегистрировать доменное имя в зоне in",
    },
    descTitle: {
      ru: "Регистрация домена в зоне⚡in! Купить новое доменное в зоне in по низким ценам. Доменное имя верхнего уровня in. Регистратор airnet.uz",
      uz: "Регистрация домена в зоне⚡in! Купить новое доменное в зоне in по низким ценам. Доменное имя верхнего уровня in. Регистратор airnet.uz",
      en: "Регистрация домена в зоне⚡in! Купить новое доменное в зоне in по низким ценам. Доменное имя верхнего уровня in. Регистратор airnet.uz",
    },
    whyBlockTitle: {
      ru: "Преимущества регистрации  домена .IN",
      uz: "Преимущества регистрации  домена .IN",
      en: "Преимущества регистрации  домена .IN",
    },
    whyBlockDescription: {
      ru: (
        <p>
          Некоторые преимущества покупки в зоне .in:</p>
      ),
      uz: "Использование домена .in имеет несколько преимуществ:",
      en: "Использование домена .in имеет несколько преимуществ:",
    },
    headTitle: {
      ru: "Регистрация доменного имени",
      uz: "Domen nomini ro'yxatdan o'tkazish",
      en: "Domain name registration",
    },
    t1: {
      ru: "ЧТО ТАКОЕ ДОМЕН .IN?",
      uz: "ЧТО ТАКОЕ ДОМЕН .IN?",
      en: "ЧТО ТАКОЕ ДОМЕН .IN?",
    },
    t2: {
      ru: "Домен .in - это национальный домен Индии, который предназначен для регистрации интернет-адресов для компаний и организаций из Индии. Домен .in является одним из самых популярных национальных доменов в мире.",
      uz: "Домен .in - это национальный домен Индии, который предназначен для регистрации интернет-адресов для компаний и организаций из Индии. Домен .in является одним из самых популярных национальных доменов в мире.",
      en: "Домен .in - это национальный домен Индии, который предназначен для регистрации интернет-адресов для компаний и организаций из Индии. Домен .in является одним из самых популярных национальных доменов в мире.",
    },
    t3: {
      ru: "",
      uz: "",
      en: "",
    },
    headTitle: {
      ru: "Регистрация домена в зоне in",
      uz: "In zonada domenni ro'yxatdan o'tkazish",
      en: "Domain registration in the in zone",
    },
    description: {
      ru: (
        <p>
          Компания "AIRNET" является официальным{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            регистратором домен в зоне UZ
          </a>
        </p>
      ),
      uz: (
        <p>
          “AIRNET” kompaniyasi{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            UZ zonasida rasmiy domen registratori
          </a>{" "}
          hisoblanadi
        </p>
      ),
      en: (
        <p>
          The company "AIRNET" is the official{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            domain registrar in UZ zone
          </a>
        </p>
      ),
    },
    reg: {
      ru: (
        <>
        <p>
          Перед регистрацией просим вас ознакомиться с{" "}
          <a
            href="https://cctld.uz/info/polru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Положением о порядке регистрации и пользования доменными именами в
            домене «UZ»
          </a>
        </p>
        <div className={st.domains__head__block__zone}>
          <p><strong>Доступные зоны:</strong></p>
          <a href="/domains/" target="_blank">.UZ</a>
          <a href="/domains/ru" target="_blank">.RU</a>
          <a href="/domains/com" target="_blank">.COM</a>
          <a href="/domains/net" target="_blank">.NET</a>
          <a href="/domains/org" target="_blank">.ORG</a>
          <a href="/domains/in" target="_blank">.IN</a>
          <a href="/domains/su" target="_blank">.SU</a>
          <a href="/domains/tg" target="_blank">.TG</a>
          <a href="/domains/ae" target="_blank">.AE</a>
          <a href="/domains/am" target="_blank">.AM</a>
          <a href="/domains/az" target="_blank">.AZ</a>
          <a href="/domains/be" target="_blank">.BE</a>
          <a href="/domains/by" target="_blank">.BY</a>
          <a href="/domains/cc" target="_blank">.CC</a>
          <a href="/domains/cn" target="_blank">.CN</a>
          <a href="/domains/cz" target="_blank">.CZ</a>
          <a href="/domains/de" target="_blank">.DE</a>
          <a href="/domains/eu" target="_blank">.EU</a>
          <a href="/domains/io" target="_blank">.IO</a>
          <a href="/domains/it" target="_blank">.IT</a>
          <a href="/domains/kg" target="_blank">.KG</a>
          <a href="/domains/me" target="_blank">.ME</a>
          <a href="/domains/pw" target="_blank">.PW</a>
          <a href="/domains/tk" target="_blank">.TK</a>
          <a href="/domains/tr" target="_blank">.TR</a>
          <a href="/domains/tv" target="_blank">.TV</a>
          <a href="/domains/ua" target="_blank">.UA</a>
          <a href="/domains/us" target="_blank">.US</a>
        </div>
        </>
      ),
      uz: (
        <>
        <p>
          Ro'yxatdan o'tishdan oldin{" "}
          <a
            href="https://cctld.uz/info/polru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “UZ” domenida domen nomlarini ro‘yxatdan o‘tkazish va ulardan
            foydalanish tartibi to‘g‘risidagi nizom bn tanishib chiqing.
          </a>
        </p>
        <div className={st.domains__head__block__zone}>
          <p><strong>Mavjud hududlar:</strong></p>
          <a href="/domains/" target="_blank">.UZ</a>
          <a href="/domains/ru" target="_blank">.RU</a>
          <a href="/domains/com" target="_blank">.COM</a>
          <a href="/domains/net" target="_blank">.NET</a>
          <a href="/domains/org" target="_blank">.ORG</a>
          <a href="/domains/in" target="_blank">.IN</a>
          <a href="/domains/su" target="_blank">.SU</a>
          <a href="/domains/tg" target="_blank">.TG</a>
          <a href="/domains/ae" target="_blank">.AE</a>
          <a href="/domains/am" target="_blank">.AM</a>
          <a href="/domains/az" target="_blank">.AZ</a>
          <a href="/domains/be" target="_blank">.BE</a>
          <a href="/domains/by" target="_blank">.BY</a>
          <a href="/domains/cc" target="_blank">.CC</a>
          <a href="/domains/cn" target="_blank">.CN</a>
          <a href="/domains/cz" target="_blank">.CZ</a>
          <a href="/domains/de" target="_blank">.DE</a>
          <a href="/domains/eu" target="_blank">.EU</a>
          <a href="/domains/io" target="_blank">.IO</a>
          <a href="/domains/it" target="_blank">.IT</a>
          <a href="/domains/kg" target="_blank">.KG</a>
          <a href="/domains/me" target="_blank">.ME</a>
          <a href="/domains/pw" target="_blank">.PW</a>
          <a href="/domains/tk" target="_blank">.TK</a>
          <a href="/domains/tr" target="_blank">.TR</a>
          <a href="/domains/tv" target="_blank">.TV</a>
          <a href="/domains/ua" target="_blank">.UA</a>
          <a href="/domains/us" target="_blank">.US</a>
        </div>
        </>
      ),
      en: (
        <>
        <p>
          Before registration, please read the{" "}
          <a
            href="https://cctld.uz/info/polru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Regulations on the procedure for registration and use of domain
            names in the "UZ" domain
          </a>
        </p>
        <div className={st.domains__head__block__zone}>
          <p><strong>Available Zones:</strong></p>
          <a href="/domains/" target="_blank">.UZ</a>
          <a href="/domains/ru" target="_blank">.RU</a>
          <a href="/domains/com" target="_blank">.COM</a>
          <a href="/domains/net" target="_blank">.NET</a>
          <a href="/domains/org" target="_blank">.ORG</a>
          <a href="/domains/in" target="_blank">.IN</a>
          <a href="/domains/su" target="_blank">.SU</a>
          <a href="/domains/tg" target="_blank">.TG</a>
          <a href="/domains/ae" target="_blank">.AE</a>
          <a href="/domains/am" target="_blank">.AM</a>
          <a href="/domains/az" target="_blank">.AZ</a>
          <a href="/domains/be" target="_blank">.BE</a>
          <a href="/domains/by" target="_blank">.BY</a>
          <a href="/domains/cc" target="_blank">.CC</a>
          <a href="/domains/cn" target="_blank">.CN</a>
          <a href="/domains/cz" target="_blank">.CZ</a>
          <a href="/domains/de" target="_blank">.DE</a>
          <a href="/domains/eu" target="_blank">.EU</a>
          <a href="/domains/io" target="_blank">.IO</a>
          <a href="/domains/it" target="_blank">.IT</a>
          <a href="/domains/kg" target="_blank">.KG</a>
          <a href="/domains/me" target="_blank">.ME</a>
          <a href="/domains/pw" target="_blank">.PW</a>
          <a href="/domains/tk" target="_blank">.TK</a>
          <a href="/domains/tr" target="_blank">.TR</a>
          <a href="/domains/tv" target="_blank">.TV</a>
          <a href="/domains/ua" target="_blank">.UA</a>
          <a href="/domains/us" target="_blank">.US</a>
        </div>
        </>
      ),
    },
  };
  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />

      <ProductDomain />
      
      {breadCrumbsIn && breadCrumbsIn.length ? (
        <>
          <BreadCrumbs data={breadCrumbsIn} language={language} />
          <PageBreadcrumb links={breadCrumbsIn} language={language} />
        </>
      ) : (
        ""
      )}

      <Container headTitle={langData.headTitle[language]}>
        <hr />
        <div className={st.domains__block}>
          <div className={st.domains__block__content}>
            <h2>{langData.t1[language]}</h2>
            <p>{langData.t2[language]}</p>
            <p>{langData.t3[language]}</p>
          </div>
          <div className={st.domains__block__img}>
            <img src="/domain/intro-img.png" />
          </div>
        </div>
      </Container>
      <div className={st.domains}>
        <div className={st.domains__head}>
          <Container
            // headTitle={langData.headTitle[language]}
            clNTitle="mb-3 center"
            description={<p>{langData.description[language]}</p>}
          >
            <div className={st.domains__head__block}>
              {/* <h3>Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot;.</h3> */}
              <div className={st.domains__head__block__item}>
                <RegDomainBlock language={language} />
              </div>

              {langData.reg[language]}
              {/* <div className={st.domains__head__block__table}>
								<table>
									<tr>
										<th>Доменная зона</th>
										<th>Регистрации c хостингом</th>
										<th>С хостингом</th>
										<th>Без хостинга</th>
										<th>Redemption period</th>
										<th>Купить</th>
									</tr>
									<tr>
										<td>.UZ</td>
										<th>17 000 сум*</th>
										<th>
											<Link href={checkLang(language) + "/free-domains"}>
												<a>Бесплатно*</a>
											</Link>
										</th>
										<th>20 000 сум*</th>
										<th>40 000 сум**</th>
										<th>
											<a href="https://billing.airnet.uz/billing.php?do=zones">Купить</a>
										</th>
									</tr>
								</table>
							</div> */}
            </div>
            {/* <p>
							Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен
							на нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
						</p>
						<p>* При регистрации хостинг с доменом</p>
						<p>
							** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней
							после окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в
							течение 30 календарных дней предыдущий владелец может вернуть себе домен.
						</p> */}
          </Container>
        </div>
        
        <ForInfo data={forInfoWhatData} language={language} />
        
        <WhyBlock title={langData.whyBlockTitle[language]} description={langData.whyBlockDescription[language]} content={content} language={language} />
        {/* <ForInfo data={forInfoNETData} language={language} /> */}
        <ForInfoTxt data={forInfoINData} language={language} />

        <FAQ faq={faq} title="FAQ" language={language} />

        <Howworks language={language} />
        <ForContract data={forContractVDSData} language={language} />
        <ForSupport data={forSupportVDSData} language={language} />
        <ForContract data={forContractArticlesData} language={language} />
        <ForDatacenter data={forDatacenterVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />
      </div>
    </>
  );
}
