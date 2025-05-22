import st from "@/app/vds/vds.module.scss";
import Container from "@/components/container";
import CustomTable from "@/components/customTable";
import ForFreeBlock from "@/components/forFreeBlock";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import { LINKS } from "@/components/requirements";
import SEO from "@/components/seo";
import TarifCard from "@/components/tarifCard";
import TarifMaket from "@/components/tarifMaket";
import WhyBlock from "@/components/whyBlock";
import TwoBlock from "@/components/TwoBlock";
import { checkLang } from "@/utils/checkLang";
import Link from "next/link";
import { useEffect, useState } from "react";
import { calendarIcon } from "shared/icons/calendarIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { supportIcon } from "shared/icons/supportIcon";
import { serversIcon } from "shared/icons/serversIcon";
import { lesssonIcon } from "shared/icons/lessonIcon";
import { databaseIcon } from "shared/icons/databaseIcon";
import { warningIcon } from "shared/icons/warningIcon";
import { infiniteIcon } from "shared/icons/infiniteIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import AvailableOS from "@/components/availableOS";
import VirtualServers from "@/components/virtualServers";
import Reviews from "@/components/reviews";
import ForLinux from "@/components/forLinux";
import ForIntelTwo from "@/components/forIntelTwo";
import ForContract from "@/components/forContract";
import ForSupport from "@/components/forSupport";
import ForDatacenter from "@/components/forDatacenter";
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductVDSIntel from "../../components/seo/productvdsintel";
import { breadCrumbsVds } from "./index";
import { forFreeVDSData } from "../vds";
import { forContractVDSData } from "../vds";
import { forSupportVDSData } from "../vds";
import { forDatacenterVDSData } from "../vds";
import { forContractArticlesData } from "../vds";

export const ForLinuxVDSData = {
  title: {
    ru: <>VPS сервера на Linux</>,
    uz: <>Linuxda VPS serverlari</>,
    en: <>VPS servers on Linux</>,
  },
  desc: {
    ru: (
      <>
        Виртуальный сервер (VPS) под управлением операционной системы Linux -
        это мощный инструмент для хранения и обработки данных. Сервер на Linux
        позволяет размещать на нем веб-сайты, устанавливать серверное
        программное обеспечение и базы данных, а также хранить корпоративную
        информацию в безопасном месте.
        <br />
        <br />
        Linux-сервер, в частности CentOS, является одним из самых популярных
        выборами среди специалистов, потому что он универсален и доступен. Это
        означает, что сервер на Linux может быть настроен для различных задач,
        от обслуживания веб-сайтов до расчетов BigData и AI.
        <br />
        <br />
        Использование сервера на Linux также дает другие преимущества, такие
        как:
      </>
    ),
    uz: (
      <>
        Виртуальный сервер (VPS) под управлением операционной системы Linux -
        это мощный инструмент для хранения и обработки данных. Сервер на Linux
        позволяет размещать на нем веб-сайты, устанавливать серверное
        программное обеспечение и базы данных, а также хранить корпоративную
        информацию в безопасном месте.
        <br />
        <br />
        Linux-сервер, в частности CentOS, является одним из самых популярных
        выборами среди специалистов, потому что он универсален и доступен. Это
        означает, что сервер на Linux может быть настроен для различных задач,
        от обслуживания веб-сайтов до расчетов BigData и AI.
        <br />
        <br />
        Использование сервера на Linux также дает другие преимущества, такие
        как:
      </>
    ),
    en: (
      <>
        Виртуальный сервер (VPS) под управлением операционной системы Linux -
        это мощный инструмент для хранения и обработки данных. Сервер на Linux
        позволяет размещать на нем веб-сайты, устанавливать серверное
        программное обеспечение и базы данных, а также хранить корпоративную
        информацию в безопасном месте.
        <br />
        <br />
        Linux-сервер, в частности CentOS, является одним из самых популярных
        выборами среди специалистов, потому что он универсален и доступен. Это
        означает, что сервер на Linux может быть настроен для различных задач,
        от обслуживания веб-сайтов до расчетов BigData и AI.
        <br />
        <br />
        Использование сервера на Linux также дает другие преимущества, такие
        как:
      </>
    ),
  },
  descbottom: {
    ru: (
      <>
        Linux-сервер - это идеальный выбор для любой организации, которая хочет
        создать надежный и масштабируемый инфраструктуру для хранения и
        обработки данных. Сервер Linux-ваш выбор для развития!
      </>
    ),
  },
  // img: "/intel.png",
  content: [
    {
      title: {
        ru: "высокая производительность и быстродействие",
        uz: "высокая производительность и быстродействие",
        en: "высокая производительность и быстродействие",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "полная гибкость и настройка",
        uz: "полная гибкость и настройка",
        en: "полная гибкость и настройка",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "низкая стоимость эксплуатации",
        uz: "низкая стоимость эксплуатации",
        en: "низкая стоимость эксплуатации",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "доступность широкого спектра программного обеспечения",
        uz: "доступность широкого спектра программного обеспечения",
        en: "доступность широкого спектра программного обеспечения",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "высокая безопасность и стабильность",
        uz: "высокая безопасность и стабильность",
        en: "высокая безопасность и стабильность",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
  ],
};

export const ForLinuxVDS2Data = {
  title: {
    ru: <>Кому подойдет виртуальный сервер на Linux</>,
    uz: <>Linuxda virtual server kimga mos keladi?</>,
    en: <>Who is a virtual server on Linux suitable for?</>,
  },
  desc: {
    ru: (
      <>
        Вот 5 групп людей и организаций, которым может быть полезен Linux VPS, с
        кратким описанием каждой из них:
      </>
    ),
    uz: (
      <>
        Bu erda Linux VPS-dan foydalanishi mumkin bo'lgan 5 guruh odamlar va tashkilotlar mavjud
        ularning har birining qisqacha tavsifi:
      </>
    ),
    en: (
      <>
        Here are 5 groups of people and organizations that can benefit from Linux VPS, with a brief description of each:
      </>
    ),
  },
  descbottom: {
    ru: (
      <>
        <strong>Группа 1: Веб-разработчики и дизайнеры.</strong>
        <br />
        <br />
        Linux VPS предоставляет им гибкость в выборе различных операционных
        систем и пакетов программного обеспечения, позволяя им разрабатывать и
        тестировать свои проекты в контролируемой среде. С помощью Linux VPS они
        могут легко устанавливать и управлять несколькими веб-сайтами, базами
        данных и приложениями, что делает его идеальным решением для
        веб-разработки и дизайна.
        <br />
        <br />
        <strong>Группа 2: Малый и средний бизнес (SMB).</strong>
        <br />
        <br />
        Linux VPS обеспечивает им гибкость в добавлении или удалении ресурсов по
        мере необходимости, гарантируя, что их веб-сайт остается доступным и
        отзывчивым для их клиентов. При использовании Linux VPS малые и средние
        предприятия также могут воспользоваться расширенными функциями
        безопасности, такими как брандмауэры и системы обнаружения вторжений,
        для защиты своих данных и приложений. В частности, хорошим вариантом
        будем Linux Ubuntu или Linux Debian. <br />
        <br />
        <strong>Группа 3: Владельцы магазинов электронной коммерции.</strong>
        <br />
        <br />
        Linux VPS предоставляет им возможность настраивать сервер, позволяя
        оптимизировать свой сайт для скорости и безопасности. Используя Linux
        VPS, владельцы магазинов электронной коммерции могут воспользоваться
        такими функциями, как SSL-шифрование, защита от DDoS-атак и регулярное
        резервное копирование для защиты своих онлайн-продаж.
        <br />
        <br />
        <strong>Группа 4: Создатели контента.</strong>
        <br />
        <br />
        Linux VPS предоставляет им гибкость в настройке сервера, позволяя
        оптимизировать доставку и хранение контента. При использовании Linux VPS
        создатели контента также могут воспользоваться такими функциями, как
        сжатие и кэширование данных, которые помогают уменьшить задержку и
        улучшить качество работы пользователей.
        <br />
        <br />
        <strong>Группа 5: Разработчики программного обеспечения.</strong>
        <br />
        <br />
        Linux VPS предоставляет им возможность создавать изолированные среды для
        тестирования и разработки, что позволяет им обеспечить стабильность и
        безопасность своего программного обеспечения. Используя Linux VPS,
        разработчики программного обеспечения также могут воспользоваться такими
        функциями, как контроль версий и непрерывная интеграция, которые
        помогают оптимизировать процесс разработки. Эти группы людей и
        организаций могут извлечь выгоду из Linux VPS, потому что он
        обеспечивает им гибкость, масштабируемость и безопасность, необходимые
        для размещения их проектов, веб-сайтов или приложений.
      </>
    ),
    uz: (
      <>
      <strong>1-guruh: Veb-ishlab chiquvchilar va dizaynerlar</strong>
      <br />
      <br />
      Linux VPS ularga turli xil operatsion tizimlarni tanlashda moslashuvchanlikni beradi
      tizimlar va dasturiy paketlar, ularni ishlab chiqish va
      loyihalaringizni boshqariladigan muhitda sinab ko'ring. Ular Linux VPS dan foydalanish
      bir nechta veb-saytlarni, ma'lumotlar bazalarini osongina o'rnatishi va boshqarishi mumkin
      ma'lumotlar va ilovalar uchun ideal echimga aylantiradi
      veb-ishlab chiqish va dizayn.
      <br />
      <br />
      <strong>2-guruh: Kichik va o'rta biznes (SMB).</strong>
      <br />
      <br />
      Linux VPS ularga mos ravishda resurslarni qo'shish yoki olib tashlash uchun moslashuvchanlikni beradi
      agar kerak bo'lsa, ularning veb-saytlari ochiq bo'lishini ta'minlash va
      o'z mijozlariga javob beradi. Kichik va o'rta Linux VPS dan foydalanilganda
      korxonalar ilg'or xususiyatlardan ham foydalanishlari mumkin
      xavfsizlik devorlari va hujumni aniqlash tizimlari kabi xavfsizlik;
      ma'lumotlaringiz va ilovalaringizni himoya qilish uchun. Xususan, yaxshi variant
      Keling, Linux Ubuntu yoki Linux Debian dan foydalanaylik. <br />
      <br />
      <strong>3-guruh: Elektron tijorat do'konlari egalari</strong>
      <br />
      <br />
      Linux VPS ularga serverni sozlash imkoniyatini beradi, bu esa imkon beradi
      tezlik va xavfsizlik uchun veb-saytingizni optimallashtirish. Linuxdan foydalanish
      VPS, elektron tijorat do'konlari egalari foyda olishlari mumkin
      SSL shifrlash, DDoS himoyasi va muntazam kabi xususiyatlar
      onlayn savdolaringizni himoya qilish uchun zaxira nusxalari.
      <br />
      <br />
      <strong>4-guruh: Kontent yaratuvchilari</strong>
      <br />
      <br />
      Linux VPS ularga serverni sozlashda moslashuvchanlikni beradi, bu esa imkon beradi
      kontentni yetkazib berish va saqlashni optimallashtirish. Linux VPS dan foydalanilganda
      kabi xususiyatlardan kontent yaratuvchilar ham foydalanishlari mumkin
      ma'lumotlarni siqish va keshlash, bu kechikishni kamaytirishga yordam beradi va
      foydalanuvchi tajribasini yaxshilash.
      <br />
      <br />
      <strong>5-guruh: Dastur ishlab chiquvchilari</strong>
      <br />
      <br />
      Linux VPS ularga alohida muhit yaratish imkoniyatini beradi
      sinov va ishlab chiqish, bu ularga barqarorlikni ta'minlash imkonini beradi va
      dasturiy ta'minotingiz xavfsizligi. Linux VPS dan foydalanish,
      dasturiy ta'minot ishlab chiquvchilari ham ulardan foydalanishlari mumkin
      versiya nazorati va uzluksiz integratsiya kabi xususiyatlar, qaysi
      ishlab chiqish jarayonini optimallashtirishga yordam beradi. Bu odamlar guruhlari va
      tashkilotlar Linux VPS-dan foyda olishlari mumkin, chunki u
      ularga kerakli moslashuvchanlik, kengayish va xavfsizlikni beradi
      o'z loyihalari, veb-saytlari yoki ilovalarini joylashtirish uchun.
      </>
    ),
    en: (
      <>
      <strong>Group 1: Web Developers and Designers.</strong>
      <br />
      <br />
      Linux VPS gives them the flexibility to choose from a variety of operating

      systems and software packages, allowing them to develop and test their projects in a controlled

      environment. With Linux VPS, they can easily install and manage multiple websites,

      databases, and applications, making it an ideal solution for web development and

      design.
      <br />
      <br />
      <strong>Group 2: Small and Medium Businesses (SMB).</strong>
      <br />
      <br />
      Linux VPS gives them the flexibility to add or remove resources

      as needed, ensuring that their website remains available and responsive

      to their customers. When using Linux VPS, SMBs can also take advantage of advanced

      security features such as firewalls and intrusion detection systems to protect their data

      and applications. In particular, Linux Ubuntu or Linux Debian are good options. <br />
      <br />
      <strong>Group 3: E-Commerce Store Owners.</strong>
      <br />
      <br />
      Linux VPS gives them the flexibility to customize their server, allowing them to
      optimize their site for speed and security. Using Linux
      VPS, e-commerce store owners can take advantage of features such as SSL encryption, DDoS protection, and regular
      backups to protect their online sales.
      <br />
      <br />
      <strong>Group 4: Content Creators.</strong>
      <br />
      <br />
      Linux VPS gives them the flexibility to customize their server, allowing them to
      optimize content delivery and storage. When using Linux VPS, content creators can also take advantage of features such as
      data compression and caching, which help reduce latency and improve user experience. <br />
      <br />
      <strong>Group 5: Software Developers.</strong>
      <br />
      <br />
      Linux VPS provides them with the ability to create isolated environments for
      testing and development, allowing them to ensure the stability and
      security of their software. Using Linux VPS,
      software developers can also take advantage of features such as version control and continuous
      integration, which help streamline the development process. These groups of people and
      organizations can benefit from Linux VPS because it provides them with the flexibility, scalability, and
      security they need to host their projects, websites, or applications.
      </>
    ),
  },
  // img: "/intel.png",
  content: [
    {
      title: {
        ru: "",
        uz: "",
        en: "",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
  ],
};

export const ForIntelTwoVDSData = {
  title: {
    ru: (
      <>
        Выделенные серверы с процессорами Intel подходят для многих задач. Они
        хороши, потому что могут многое. Их можно арендовать и это выгодно:
      </>
    ),
    uz: (
      <>
        Выделенные серверы с процессорами Intel подходят для многих задач. Они
        хороши, потому что могут многое. Их можно арендовать и это выгодно:
      </>
    ),
    en: (
      <>
        Выделенные серверы с процессорами Intel подходят для многих задач. Они
        хороши, потому что могут многое. Их можно арендовать и это выгодно:
      </>
    ),
  },
  desc: {
    ru: (
      <>
        Выделенные серверы с процессорами Intel подходят для решения любых
        вычислительных систем и задач благодаря своей высокой
        производительности, энергоэффективности и поддержке разнообразных
        технологий. Вы можете ощутить все бонусы этого варианта уже сегодня
        заказав аренду выделенного сервера у нас всего в пару кликов.
      </>
    ),
    uz: (
      <>
        Выделенные серверы с процессорами Intel подходят для решения любых
        вычислительных систем и задач благодаря своей высокой
        производительности, энергоэффективности и поддержке разнообразных
        технологий. Вы можете ощутить все бонусы этого варианта уже сегодня
        заказав аренду выделенного сервера у нас всего в пару кликов.
      </>
    ),
    en: (
      <>
        Выделенные серверы с процессорами Intel подходят для решения любых
        вычислительных систем и задач благодаря своей высокой
        производительности, энергоэффективности и поддержке разнообразных
        технологий. Вы можете ощутить все бонусы этого варианта уже сегодня
        заказав аренду выделенного сервера у нас всего в пару кликов.
      </>
    ),
  },
  img: "/sitepad-img.png",
  content: [
    {
      title: {
        ru: "Виртуализация и хостинг сайтов: Сервера Intel обеспечивают высокую производительность и эффективность для виртуальных машин, что делает их идеальным выбором для хостинга и управления сайтами.",
        uz: "Виртуализация и хостинг сайтов: Сервера Intel обеспечивают высокую производительность и эффективность для виртуальных машин, что делает их идеальным выбором для хостинга и управления сайтами.",
        en: "Виртуализация и хостинг сайтов: Сервера Intel обеспечивают высокую производительность и эффективность для виртуальных машин, что делает их идеальным выбором для хостинга и управления сайтами.",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Работа с контентом: Выделенные серверы с процессорами Intel могут обрабатывать и обрабатывать большие объемы контента, такие как медиафайлы, тексты и данные баз данных, что позволяет эффективно работать с различными контент-платформами и интернет-ресурсами. Возможности intel серверов при работе с контентом безграничны",
        uz: "Работа с контентом: Выделенные серверы с процессорами Intel могут обрабатывать и обрабатывать большие объемы контента, такие как медиафайлы, тексты и данные баз данных, что позволяет эффективно работать с различными контент-платформами и интернет-ресурсами. Возможности intel серверов при работе с контентом безграничны",
        en: "Работа с контентом: Выделенные серверы с процессорами Intel могут обрабатывать и обрабатывать большие объемы контента, такие как медиафайлы, тексты и данные баз данных, что позволяет эффективно работать с различными контент-платформами и интернет-ресурсами. Возможности intel серверов при работе с контентом безграничны",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Сложные математические вычисления: Процессоры Intel серверов, с их передовыми технологиями и архитектурой, способны эффективно обрабатывать сложные математические задачи. Симуляции, моделирование и анализ данных - для арендованных серверов Intel не станет проблемой. Это делает их популярным выбором для научных исследований и инженерных проектов.",
        uz: "Сложные математические вычисления: Процессоры Intel серверов, с их передовыми технологиями и архитектурой, способны эффективно обрабатывать сложные математические задачи. Симуляции, моделирование и анализ данных - для арендованных серверов Intel не станет проблемой. Это делает их популярным выбором для научных исследований и инженерных проектов.",
        en: "Сложные математические вычисления: Процессоры Intel серверов, с их передовыми технологиями и архитектурой, способны эффективно обрабатывать сложные математические задачи. Симуляции, моделирование и анализ данных - для арендованных серверов Intel не станет проблемой. Это делает их популярным выбором для научных исследований и инженерных проектов.",
      },
      img: (
        <svg
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z" />
        </svg>
      ),
    },
  ],
};

export default function VDS({ language }) {
  const [show, setShow] = useState(-1);
  const langData = {
    seo: {
      ru: "Аренда сервера linux - виртуальный сервер VPS на линукс",
      uz: "Linux serverini ijaraga olish - Linuxda virtual VPS server",
      en: "Renting a Linux server - virtual VPS server on Linux",
    },
    desc: {
      ru: "Аренда сервера на базе linux (линукс) - ⚡от 150000 сум ✔️Бесплатно 1 выделенный IP-адрес ✔️Тестовый период ✔️Установка ОС",
      uz: "Linux (Linux) asosidagi server ijarasi - ⚡150 000 so'mdan ✔️Bepul 1 ta ajratilgan IP manzil ✔️Sinov muddati ✔️OS o'rnatish",
      en: "Rent a server based on linux (Linux) - ⚡from 150,000 sum ✔️Free 1 dedicated IP address ✔️Test period ✔️OS installation",
    },
    whyBlockTitle: {
      ru: "Преимущества",
      uz: "Преимущества",
      en: "Преимущества",
    },
    whyBlockDescription: {
      ru: (
        <p>
          Когда речь заходит о выборе хостинга, виртуальные частные серверы
          (VPS) Linux становятся популярным выбором среди веб-разработчиков,
          предприятий и частных лиц. Благодаря своей природе с открытым исходным
          кодом, гибкости и масштабируемости, Linux предлагает беспрецедентные
          возможности контроля и настройки. Но что делает Linux VPS
          действительно выделяющимся среди остальных? Преимуществом аренды Linux
          VPS хостинга, которые делают его идеальным выбором для тех, кто ищет
          надежный, безопасный и высокопроизводительный хостинг.
        </p>
      ),
      uz: (
        <p>
          Когда речь заходит о выборе хостинга, виртуальные частные серверы
          (VPS) Linux становятся популярным выбором среди веб-разработчиков,
          предприятий и частных лиц. Благодаря своей природе с открытым исходным
          кодом, гибкости и масштабируемости, Linux предлагает беспрецедентные
          возможности контроля и настройки. Но что делает Linux VPS
          действительно выделяющимся среди остальных? Преимуществом аренды Linux
          VPS хостинга, которые делают его идеальным выбором для тех, кто ищет
          надежный, безопасный и высокопроизводительный хостинг.
        </p>
      ),
      en: (
        <p>
          Когда речь заходит о выборе хостинга, виртуальные частные серверы
          (VPS) Linux становятся популярным выбором среди веб-разработчиков,
          предприятий и частных лиц. Благодаря своей природе с открытым исходным
          кодом, гибкости и масштабируемости, Linux предлагает беспрецедентные
          возможности контроля и настройки. Но что делает Linux VPS
          действительно выделяющимся среди остальных? Преимуществом аренды Linux
          VPS хостинга, которые делают его идеальным выбором для тех, кто ищет
          надежный, безопасный и высокопроизводительный хостинг.
        </p>
      ),
    },
    twoBlockTitle: {
      ru: "Для чего понадобится VPS на Linux",
      uz: "Для чего понадобится VPS на Linux",
      en: "Для чего понадобится VPS на Linux",
    },
    twoBlockDescription: {
      ru: (
        <p>
          Вот 4 основные причины использовать аренду VPS на Linux с более
          подробным объяснением:
        </p>
      ),
      uz: (
        <p>
          Вот 4 основные причины использовать аренду VPS на Linux с более
          подробным объяснением:
        </p>
      ),
      en: (
        <p>
          Вот 4 основные причины использовать аренду VPS на Linux с более
          подробным объяснением:
        </p>
      ),
    },
    headTitle: {
      ru: "Аренда сервера Linux",
      uz: "Linux server ijarasi",
      en: "Linux server rental",
    },
    dsc: {
      ru: (
        <p>
          Аренда сервера Linux - это возможность временного или постоянного
          использования сервера, основанного на операционной системе Linux.
          Cервер на Linux является наиболее распространенным и знакомым для
          администраторов, что значительно ускоряет процесс настройки и
          использования сервера на Linux. Наши специалисты помогут выбрать тип
          сервера, мощность, оперативную память, в зависимости от ваших
          требований–все в рамках аренды VPS. Мы рассчитаем стоимость аренды для
          каждого персонально.
        </p>
      ),
      uz: (
        <p>
          Linux serverini ijaraga olish Linux operatsion tizimiga asoslangan
          serverdan vaqtincha yoki doimiy foydalanish imkoniyatidir. Linux
          serveri ma'murlar uchun eng keng tarqalgan va tanish bo'lib, u Linux
          serverini sozlash va undan foydalanish jarayonini sezilarli darajada
          tezlashtiradi. Bizning mutaxassislarimiz sizning talablaringizga qarab
          server turini, quvvatni, RAMni tanlashda yordam beradi - barchasi VPS
          ijarasi doirasida. Biz har bir kishi uchun ijara narxini alohida
          hisoblab chiqamiz.
        </p>
      ),
      en: (
        <p>
          Renting a Linux server is the opportunity to temporarily or
          permanently use a server based on the Linux operating system. The
          Linux server is the most common and familiar to administrators, which
          significantly speeds up the process of setting up and using a Linux
          server. Our specialists will help you choose the type of server,
          power, RAM, depending on your requirements - all within the scope of
          VPS rental. We will calculate the rental cost for each person
          individually.
        </p>
      ),
    },
    txt: {
      ru: (
        <p>
          Выберите удобный тариф для аренды сервера. Обратите внимание для
          аренды сервера Intel Xeon Gold вам нужно оформить индивидуальный
          заказ.
          <br />
          Или найдите сервер, который идеально подойдет вашему бизнесу. Мы
          предлагаем разные планы аренды сервера на базе Intel. У каждого плана
          есть свои особенности.
          <br />
          Вы можете выбрать подходящий для своих нужд и бюджета.
        </p>
      ),
      uz: (
        <p>
          Server ijarasi uchun qulay tarifni tanlang. Esda tuting, Intel Xeon
          Gold serverini ijaraga olish uchun siz individual buyurtma berishingiz
          kerak.
          <br />
          Yoki biznesingiz uchun mukammal serverni toping. Biz turli xil Intel
          asosidagi server ijarasi rejalarini taklif qilamiz. Har bir reja
          o'ziga xos xususiyatlarga ega.
          <br />
          Siz o'zingizning ehtiyojlaringiz va byudjetingizga mos keladiganini
          tanlashingiz mumkin.
        </p>
      ),
      en: (
        <p>
          Choose a convenient tariff for server rental. Please note, to rent an
          Intel Xeon Gold server, you need to place an individual order.
          <br />
          Or find a server that's perfect for your business. We offer different
          Intel based server rental plans. Each plan has its own
          characteristics.
          <br />
          You can choose the one that suits your needs and budget.
        </p>
      ),
    },
    endText: {
      ru: "Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делаем всё возможное, чтобы уменьшить время ожидания.",
      uz: "Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan boshlanadi zarur serverlar va yuk mavjudligiga qarab 2 ish kunigacha texnik xodimlar. To'lovdan keyin uskunani faollashtirishning o'rtacha vaqti - 1-2 soat. Biz kutish vaqtini kamaytirish uchun qo'limizdan kelganini qilamiz.",
      en: "Server installation time, after placing an order and payment, is from 30 minutes to 2 business days, depending on the availability of the necessary servers and the workload of technical personnel. The average equipment activation time after payment is 1-2 hours. We do our best to to reduce waiting time.",
    },
    timeW: {
      ru: (
        <p>
          Срок действия услуги начнется с момента её активации.
          <br /> Не предоставляется для{" "}
          <span className="strong">
            игровых серверов и видео-контент сайтов!
          </span>
        </p>
      ),
      uz: (
        <p>
          Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.
          <br />{" "}
          <span className="strong">
            oʻyin serverlari va video kontent saytlari uchun taqdim etilmaydi!
          </span>
        </p>
      ),
      en: (
        <p>
          The validity period of the service will begin from the moment of its
          activation.
          <br /> Not provided for{" "}
          <span className="strong">game servers and video content sites!</span>
        </p>
      ),
    },

    cT: {
      ru: "Стоимость международного интернет-канала без ограничения трафика",
      uz: "Trafik cheklovlarisiz xalqaro Internet-kanalning narxi",
      en: "The cost of an international Internet channel without traffic restrictions",
    },
    cD: {
      ru: "Внешний трафик и трафик в сети «TAS-IX» не тарифицируется.",
      uz: "TAS-IX tarmog'idagi tashqi trafik va trafik to'lov olinmaydi.",
      en: "External traffic and traffic in the TAS-IX network is not charged.",
    },
    table: {
      ru: (
        <>
          <table>
            <thead>
              <tr>
                <th>Тариф</th>
                <th>Скорость доступа в Интернет</th>
                <th>Скорость доступа в «TAS-IX»</th>
                <th>Тарификация</th>
                <th>Абонентская плата в месяц</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>Unlim 50M</td>
                <td>50 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>Бесплатно</td>
              </tr> */}
              <tr>
                <td>Unlim 100M</td>
                <td>100 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>Бесплатно</td>
              </tr>
              <tr>
                <td>Unlim 200M</td>
                <td>200 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>2 500 000 сум/мес.</td>
              </tr>
              <tr>
                <td>Unlim 350M</td>
                <td>350 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>5 000 000 сум/мес.</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
      uz: (
        <>
          <table>
            <thead>
              <tr>
                <th>Tarif</th>
                <th>Internet tezligi</th>
                <th>«TAS-IX» internet tezligi</th>
                <th>Paket</th>
                <th>Abonent oylik to'lovi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unlim 50M</td>
                <td>50 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>Tekin</td>
              </tr>
              <tr>
                <td>Unlim 100M</td>
                <td>100 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>2 000 000 so'm/oy.</td>
              </tr>
              <tr>
                <td>Unlim 200M</td>
                <td>200 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>2 500 000 so'm/oy.</td>
              </tr>
              <tr>
                <td>Unlim 350M</td>
                <td>350 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>5 000 000 so'm/oy.</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
      en: (
        <>
          <table>
            <thead>
              <tr>
                <th>Tariff</th>
                <th>Internet access speed</th>
                <th>Access speed in "TAS-IX"</th>
                <th>Billing</th>
                <th>Monthly fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unlim 50M</td>
                <td>50 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Unlim 100M</td>
                <td>100 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>2 000 000 sum/mon.</td>
              </tr>
              <tr>
                <td>Unlim 200M</td>
                <td>200 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>2 500 000 sum/mon.</td>
              </tr>
              <tr>
                <td>Unlim 350M</td>
                <td>350 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>5 000 000 sum/mon.</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    month: {
      ru: "мес.",
      uz: "oy",
      en: "mon.",
    },
  };

  const whyBlock = [
    {
      title: {
        ru: "Непревзойденная безопасность:",
        uz: "Непревзойденная безопасность:",
        en: "Непревзойденная безопасность:",
      },
      description: {
        ru: (
          <p>
            Linux известен своими надежными функциями безопасности, что делает
            его идеальным выбором для размещения конфиденциальных данных и
            приложений. Варианты аренды виртуальных серверов позволяют выбрать
            лучшую опцию для каждого.
          </p>
        ),
        uz: (
          <p>
            Linux известен своими надежными функциями безопасности, что делает
            его идеальным выбором для размещения конфиденциальных данных и
            приложений. Варианты аренды виртуальных серверов позволяют выбрать
            лучшую опцию для каждого.
          </p>
        ),
        en: (
          <p>
            Linux известен своими надежными функциями безопасности, что делает
            его идеальным выбором для размещения конфиденциальных данных и
            приложений. Варианты аренды виртуальных серверов позволяют выбрать
            лучшую опцию для каждого.
          </p>
        ),
      },
      icon: serversIcon,
    },
    {
      title: {
        ru: "Полный контроль:",
        uz: "Полный контроль:",
        en: "Полный контроль:",
      },
      description: {
        ru: (
          <p>
            С Linux VPS вы получаете неограниченный контроль над своим сервером,
            что позволяет вам настроить и оптимизировать выделенный сервер под
            ваши конкретные нужды.
          </p>
        ),
        uz: (
          <p>
            С Linux VPS вы получаете неограниченный контроль над своим сервером,
            что позволяет вам настроить и оптимизировать выделенный сервер под
            ваши конкретные нужды.
          </p>
        ),
        en: (
          <p>
            С Linux VPS вы получаете неограниченный контроль над своим сервером,
            что позволяет вам настроить и оптимизировать выделенный сервер под
            ваши конкретные нужды.
          </p>
        ),
      },
      icon: lesssonIcon,
    },
    {
      title: {
        ru: "100% масштабируемость:",
        uz: "100% масштабируемость:",
        en: "100% масштабируемость:",
      },
      description: {
        ru: (
          <p>
            Linux VPS можно легко увеличить или уменьшить по мере необходимости,
            что делает его идеальным выбором для предприятий с переменчивыми
            требованиями.
          </p>
        ),
        uz: (
          <p>
            Linux VPS можно легко увеличить или уменьшить по мере необходимости,
            что делает его идеальным выбором для предприятий с переменчивыми
            требованиями.
          </p>
        ),
        en: (
          <p>
            Linux VPS можно легко увеличить или уменьшить по мере необходимости,
            что делает его идеальным выбором для предприятий с переменчивыми
            требованиями.
          </p>
        ),
      },
      icon: databaseIcon,
    },
    {
      title: {
        ru: "Высокая производительность:",
        uz: "Высокая производительность:",
        en: "Высокая производительность:",
      },
      description: {
        ru: (
          <p>
            Linux VPS обладает высокой производительностью, что делает его
            подходящим для требовательных приложений и веб-сайтов с высоким
            трафиком.
          </p>
        ),
        uz: (
          <p>
            Linux VPS обладает высокой производительностью, что делает его
            подходящим для требовательных приложений и веб-сайтов с высоким
            трафиком.
          </p>
        ),
        en: (
          <p>
            Linux VPS обладает высокой производительностью, что делает его
            подходящим для требовательных приложений и веб-сайтов с высоким
            трафиком.
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Гибкость:",
        uz: "Гибкость:",
        en: "Гибкость:",
      },
      description: {
        ru: (
          <p>
            Linux VPS предлагает широкий спектр вариантов развертывания, включая
            облако, виртуализацию и пустые серверы.
          </p>
        ),
        uz: (
          <p>
            Linux VPS предлагает широкий спектр вариантов развертывания, включая
            облако, виртуализацию и пустые серверы.
          </p>
        ),
        en: (
          <p>
            Linux VPS предлагает широкий спектр вариантов развертывания, включая
            облако, виртуализацию и пустые серверы.
          </p>
        ),
      },
      icon: warrantyIcon,
    },
  ];

  const twoBlock = [
    {
      title: {
        ru: "Веб-разработка и хостинг.",
        uz: "Веб-разработка и хостинг.",
        en: "Веб-разработка и хостинг.",
      },
      description: {
        ru: (
          <p>
            Сервер VPS на Линукс можно использовать для размещения и разработки
            веб-сайтов, платформ электронной коммерции и других веб-приложений.
            На VPS вы можете установить собственное программное обеспечение для
            веб-сервера, например Apache или Nginx, и управлять конфигурацией,
            файлами и базами данных вашего сайта. Линукс обеспечивает высокую
            степень гибкости и контроля над инфраструктурой вашего сайта.
            <br />
            <br />
            Например, если вы разрабатываете сайт с использованием системы
            управления контентом (CMS), такой, как WordPress, вы можете
            установить ее на свой сервер VPS Linux и настроить под свои нужды.
            Вы также можете использовать VPS для размещения нескольких
            веб-сайтов, каждый из которых будет иметь свою собственную
            конфигурацию и настройки. Аренда виртуального сервера отличный
            вариант для таких задач.
          </p>
        ),
        uz: (
          <p>
            Сервер VPS на Линукс можно использовать для размещения и разработки
            веб-сайтов, платформ электронной коммерции и других веб-приложений.
            На VPS вы можете установить собственное программное обеспечение для
            веб-сервера, например Apache или Nginx, и управлять конфигурацией,
            файлами и базами данных вашего сайта. Линукс обеспечивает высокую
            степень гибкости и контроля над инфраструктурой вашего сайта.
            <br />
            <br />
            Например, если вы разрабатываете сайт с использованием системы
            управления контентом (CMS), такой, как WordPress, вы можете
            установить ее на свой сервер VPS Linux и настроить под свои нужды.
            Вы также можете использовать VPS для размещения нескольких
            веб-сайтов, каждый из которых будет иметь свою собственную
            конфигурацию и настройки. Аренда виртуального сервера отличный
            вариант для таких задач.
          </p>
        ),
        en: (
          <p>
            Сервер VPS на Линукс можно использовать для размещения и разработки
            веб-сайтов, платформ электронной коммерции и других веб-приложений.
            На VPS вы можете установить собственное программное обеспечение для
            веб-сервера, например Apache или Nginx, и управлять конфигурацией,
            файлами и базами данных вашего сайта. Линукс обеспечивает высокую
            степень гибкости и контроля над инфраструктурой вашего сайта.
            <br />
            <br />
            Например, если вы разрабатываете сайт с использованием системы
            управления контентом (CMS), такой, как WordPress, вы можете
            установить ее на свой сервер VPS Linux и настроить под свои нужды.
            Вы также можете использовать VPS для размещения нескольких
            веб-сайтов, каждый из которых будет иметь свою собственную
            конфигурацию и настройки. Аренда виртуального сервера отличный
            вариант для таких задач.
          </p>
        ),
      },
      icon: "1",
    },
    {
      title: {
        ru: "Хранение и обработка данных.",
        uz: "Хранение и обработка данных.",
        en: "Хранение и обработка данных.",
      },
      description: {
        ru: (
          <p>
            Сервер VPS на Linux можно использовать для хранения и обработки
            данных, особенно для больших массивов данных или сложных задач по
            обработке данных. Вы можете установить на сервер на Линукс такие
            базы данных, как MySQL или PostgreSQL, и использовать их для
            хранения и запроса больших объемов данных.
            <br />
            <br />
            Кроме того, вы можете использовать VPS для выполнения задач
            обработки данных, таких как анализ данных и алгоритмы машинного
            обучения, с помощью таких инструментов, как Python или R. Это
            позволит вам быстро и эффективно обрабатывать большие массивы
            данных, не заботясь о сложности управления физическим сервером.
          </p>
        ),
        uz: (
          <p>
            Сервер VPS на Linux можно использовать для хранения и обработки
            данных, особенно для больших массивов данных или сложных задач по
            обработке данных. Вы можете установить на сервер на Линукс такие
            базы данных, как MySQL или PostgreSQL, и использовать их для
            хранения и запроса больших объемов данных.
            <br />
            <br />
            Кроме того, вы можете использовать VPS для выполнения задач
            обработки данных, таких как анализ данных и алгоритмы машинного
            обучения, с помощью таких инструментов, как Python или R. Это
            позволит вам быстро и эффективно обрабатывать большие массивы
            данных, не заботясь о сложности управления физическим сервером.
          </p>
        ),
        en: (
          <p>
            Сервер VPS на Linux можно использовать для хранения и обработки
            данных, особенно для больших массивов данных или сложных задач по
            обработке данных. Вы можете установить на сервер на Линукс такие
            базы данных, как MySQL или PostgreSQL, и использовать их для
            хранения и запроса больших объемов данных.
            <br />
            <br />
            Кроме того, вы можете использовать VPS для выполнения задач
            обработки данных, таких как анализ данных и алгоритмы машинного
            обучения, с помощью таких инструментов, как Python или R. Это
            позволит вам быстро и эффективно обрабатывать большие массивы
            данных, не заботясь о сложности управления физическим сервером.
          </p>
        ),
      },
      icon: "2",
    },
    {
      title: {
        ru: "Облачные вычисления и автоматизация",
        uz: "Облачные вычисления и автоматизация",
        en: "Облачные вычисления и автоматизация",
      },
      description: {
        ru: (
          <p>
            VPS на Линукс можно использовать в качестве платформы для облачных
            вычислений, позволяющей автоматизировать задачи и рабочие процессы с
            помощью таких инструментов, как Ansible или Puppet.
          </p>
        ),
        uz: (
          <p>
            VPS на Линукс можно использовать в качестве платформы для облачных
            вычислений, позволяющей автоматизировать задачи и рабочие процессы с
            помощью таких инструментов, как Ansible или Puppet.
          </p>
        ),
        en: (
          <p>
            VPS на Линукс можно использовать в качестве платформы для облачных
            вычислений, позволяющей автоматизировать задачи и рабочие процессы с
            помощью таких инструментов, как Ansible или Puppet.
          </p>
        ),
      },
      icon: "3",
    },
    {
      title: {
        ru: "Безопасность и изоляция",
        uz: "Безопасность и изоляция",
        en: "Безопасность и изоляция",
      },
      description: {
        ru: (
          <p>
            VPS на Linux можно использовать для обеспечения безопасной и
            изолированной среды для конфиденциальных данных или приложений. Вы
            можете использовать VPS для создания изолированных контейнеров или
            виртуальных машин, каждая из которых имеет свою собственную
            операционную систему и конфигурацию.
            <br />
            <br />
            Это обеспечивает высокую степень безопасности и изоляции, поскольку
            каждый контейнер или виртуальная машина отделены от других и не
            могут получить доступ к базовой инфраструктуре или повлиять на нее.
            <br />
            <br />В целом, VPS на Linux представляет собой гибкую и
            настраиваемую платформу для широкого спектра приложений, от
            веб-разработки и хостинга до хранения и обработки данных.
          </p>
        ),
        uz: (
          <p>
            VPS на Linux можно использовать для обеспечения безопасной и
            изолированной среды для конфиденциальных данных или приложений. Вы
            можете использовать VPS для создания изолированных контейнеров или
            виртуальных машин, каждая из которых имеет свою собственную
            операционную систему и конфигурацию.
            <br />
            <br />
            Это обеспечивает высокую степень безопасности и изоляции, поскольку
            каждый контейнер или виртуальная машина отделены от других и не
            могут получить доступ к базовой инфраструктуре или повлиять на нее.
            <br />
            <br />В целом, VPS на Linux представляет собой гибкую и
            настраиваемую платформу для широкого спектра приложений, от
            веб-разработки и хостинга до хранения и обработки данных.
          </p>
        ),
        en: (
          <p>
            VPS на Linux можно использовать для обеспечения безопасной и
            изолированной среды для конфиденциальных данных или приложений. Вы
            можете использовать VPS для создания изолированных контейнеров или
            виртуальных машин, каждая из которых имеет свою собственную
            операционную систему и конфигурацию.
            <br />
            <br />
            Это обеспечивает высокую степень безопасности и изоляции, поскольку
            каждый контейнер или виртуальная машина отделены от других и не
            могут получить доступ к базовой инфраструктуре или повлиять на нее.
            <br />
            <br />В целом, VPS на Linux представляет собой гибкую и
            настраиваемую платформу для широкого спектра приложений, от
            веб-разработки и хостинга до хранения и обработки данных.
          </p>
        ),
      },
      icon: "4",
    },
  ];

  const tarif = [
    {
      title: { ru: "Strong", uz: "Strong", en: "Strong" },
      // price: '200 000',
      prices: [
        {
          price: "200 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "600 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "1 200 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 2 160 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 2,
      ram: 4,
      ssd: 50,
      net: 100,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
    },
    {
      title: { ru: "VIP", uz: "VIP", en: "VIP" },
      // price: '250 000',
      prices: [
        {
          price: "250 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "750 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "1 500 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 2 700 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 4,
      ram: 4,
      ssd: 75,
      net: 100,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15",
    },
    {
      title: { ru: "VIP+", uz: "VIP+", en: "VIP+" },
      // price: '300 000',
      prices: [
        {
          price: "300 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "900 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "1 800 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 3 240 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 4,
      ram: 6,
      ssd: 100,
      net: 100,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
    },
    {
      title: { ru: "Nano", uz: "Nano", en: "Nano" },
      // price: "400 000",
      prices: [
        {
          price: "400 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "1 200 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "2 400 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 4 320 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 4,
      ram: 8,
      ssd: 100,
      net: 100,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=49",
    },
    {
      title: { ru: "Advanced", uz: "Advanced", en: "Advanced" },
      // price: "550 000",
      prices: [
        {
          price: "550 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "1 650 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "3 300 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 5 940 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 6,
      ram: 10,
      ssd: 150,
      net: 150,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50",
    },
    {
      title: { ru: "Mega", uz: "Mega", en: "Mega" },
      // price: "800 000",
      prices: [
        {
          price: "800 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "2 400 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "4 800 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 8 640 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 6,
      ram: 12,
      ssd: 200,
      net: 150,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51",
    },
    {
      title: { ru: "Ultra", uz: "Ultra", en: "Ultra" },
      // price: "1 000 000",
      prices: [
        {
          price: "1 000 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "3 000 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "6 000 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 10 800 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 8,
      ram: 16,
      ssd: 250,
      net: 150,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
    },
    {
      title: { ru: "Tera", uz: "Tera", en: "Tera" },
      // price: '1 500 000',
      prices: [
        {
          price: "1 500 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "4 500 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "9 000 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 16 200 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 8,
      ram: 32,
      ssd: 300,
      net: 150,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=53",
    },
    {
      title: { ru: "Peta", uz: "Peta", en: "Peta" },
      // price: '2 250 000',
      prices: [
        {
          price: "2 250 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "6 750 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "13 500 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 24 300 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 12,
      ram: 48,
      ssd: 500,
      net: 200,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=61",
    },
    {
      title: { ru: "Exa", uz: "Exa", en: "Exa" },
      // price: '2 250 000',
      prices: [
        {
          price: "2 700 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "8 100 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "16 200 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 29 160 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 12,
      ram: 56,
      ssd: 500,
      net: 200,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=117",
    },
    {
      title: { ru: "Zeta", uz: "Zeta", en: "Zeta" },
      // price: '3 000 000',
      prices: [
        {
          price: "3 000 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "9 000 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "18 000 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 32 400 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 16,
      ram: 64,
      ssd: 500,
      net: 200,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=62",
    },
    {
      title: { ru: "Yotta", uz: "Yotta", en: "Yotta" },
      // price: "7 500 000",
      prices: [
        {
          price: "7 500 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "22 500 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "45 000 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 81 000 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 22,
      ram: 128,
      ssd: 1000,
      net: 200,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=112",
    },
  ];

  const breadCrumbs = [
    ...breadCrumbsVds,
    {
      name: {
        ru: "Аренда серверов Linux",
        uz: "Linux server ijarasi",
        en: "Linux server rentals",
      },
      link: {
        ru: "/vds/arenda-servera-linux",
        uz: "/uz/vds/arenda-servera-linux",
        en: "/en/vds/arenda-servera-linux",
      },
    },
  ];

  useEffect(() => {
    const outerClick = (e) => {
      const classList = [...e.target?.classList];

      if (!classList.join(" ").includes("tarif_drop")) {
        setShow(-1);
      }
    };
    document.addEventListener("click", outerClick);
    return () => document.removeEventListener("click", outerClick);
  }, []);

  return (
    <>
      <SEO title={langData.seo[language]} desc={langData.desc[language]} />

      <ProductVDSIntel />

      <div className={st.vds}>
        <div className={"bg_gray"}>
          {breadCrumbs && breadCrumbs.length ? (
            <>
              <BreadCrumbs data={breadCrumbs} language={language} />
              <PageBreadcrumb links={breadCrumbs} language={language} />
            </>
          ) : null}
          
          <Container className={"head-top"}>
            <h1>{langData.headTitle[language]}</h1>
          </Container>

          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            // headTitle={langData.headTitle[language]}
            // title="Тарифы"
            description={<p>{langData.dsc[language]}</p>}
            // txt={<p>{langData.txt[language]}</p>}
            className="mt-0 px-0"
            endText={
              <div className="text-white text-center mt-2">
                <p>{langData.endText[language]}</p>
                <p>{langData.timeW[language]}</p>
              </div>
            }
          >
            <Swiper
              cssMode={true}
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              navigation
              loop={false}
              autoplay={{
                delay: 10000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                1070: {
                  slidesPerView: 4,
                },
                770: {
                  slidesPerView: 3,
                },
                550: {
                  slidesPerView: 2,
                },
              }}
              className="tarifSwiper"
            >
              {tarif.map((item, index) => (
                <SwiperSlide key={item.title} language={language}>
                  <div className="w-95">
                    <TarifCard
                      index={index}
                      tarif={item}
                      show={show}
                      setShow={setShow}
                      language={language}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TarifMaket>
        </div>

        <ForLinux data={ForLinuxVDSData} language={language} />
        <TwoBlock
          title={langData.twoBlockTitle[language]}
          description={langData.twoBlockDescription[language]}
          content={twoBlock}
          language={language}
        />
        <WhyBlock
          title={langData.whyBlockTitle[language]}
          description={langData.whyBlockDescription[language]}
          content={whyBlock}
          language={language}
        />
        <ForLinux data={ForLinuxVDS2Data} language={language} />
        {/* <ForIntelTwo data={ForIntelTwoVDSData} language={language} /> */}

        <ForFreeBlock data={forFreeVDSData} language={language} />

        <AvailableOS language={language} />
        <VirtualServers language={language} />

        {/* <Container className="text-center" title={langData.cT[language]} description={langData.cD[language]}>
          <div className={st.vds__table}>
            <CustomTable table={langData.table[language]} />
          </div>
        </Container> */}

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
