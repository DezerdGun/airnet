import st from "@/app/vds/vds.module.scss";
import Container from "@/components/container";
import FAQ from "@/components/faq";
import CustomTable from "@/components/customTable";
import ForFreeBlock from "@/components/forFreeBlock";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import { LINKS } from "@/components/requirements";
import SEO from "@/components/seo";
import PeriodSwitcher from "@/components/periodSwitcher";
import TarifCard from "@/components/tarifCard";
import TarifFeatures from "@/components/tarifFeatures";
import TarifMaket from "@/components/tarifMaket";
import WhyBlock from "@/components/whyBlock";
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
import ServerHero from "@/components/serverHero";
import ProductVDSIntel from "../../components/seo/productvdsintel";
import { breadCrumbsVds } from "./index";
import { forFreeVDSData } from "../vds";
import { forContractVDSData } from "../vds";
import { forSupportVDSData } from "../vds";
import { forDatacenterVDSData } from "../vds";
import Calculator from "@/components/calculator";

export const ForLinuxVDSData = {
  title: {
    ru: <>CMS 1С-Bitrix: что это?</>,
    uz: <>CMS 1C-Bitrix: bu nima?</>,
    en: <>CMS 1C-Bitrix: what is it?</>,
  },
  desc: {
    ru: (
      <>
        “1С-Битрикс” – система с широким функционалом, разработанная специально для управления сайтами различного масштаба, контентом. Bitrix упрощает взаимодействие с ресурсом, дает возможность создавать новые страницы, размещать, корректировать их, наполнять видеороликами, фотографиями и другим контентом. Битрикс не накладывает ограничений по типу проекта, с его помощью можно вести блог, обеспечивать стабильность крупного новостного ресурса, интернет-магазина.
      </>
    ),
    uz: (
      <>
        "1C-Bitrix" - bu turli o'lchamdagi va kontentdagi veb-saytlarni boshqarish uchun mo'ljallangan keng funksionallikka ega tizim. Bitrix resurs bilan o'zaro aloqani soddalashtiradi, yangi sahifalar yaratish, ularni joylashtirish, tahrirlash va ularni videolar, fotosuratlar va boshqa kontent bilan to'ldirish imkonini beradi. Bitrix loyiha turiga cheklovlar qo'ymaydi, u blogni yuritish, yirik yangiliklar resursi yoki onlayn-do'konning barqarorligini ta'minlash uchun ishlatilishi mumkin.
      </>
    ),
    en: (
      <>
        “1C-Bitrix” is a system with wide functionality, developed specifically for managing websites of various sizes, content. Bitrix simplifies interaction with the resource, makes it possible to create new pages, place, correct them, fill them with videos, photos and other content. Bitrix does not impose restrictions on the type of project, with its help you can run a blog, ensure the stability of a large news resource, an online store.
      </>
    ),
  },
  descbottom: {
    ru: (
      <>
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

export const ForLinuxVDS2Data = {
  title: {
    ru: <>Каковы особенности VDS Битрикс?</>,
    uz: <>Bitrix VDS ning xususiyatlari qanday?</>,
    en: <>What are the features of VDS Bitrix?</>,
  },
  desc: {
    ru: (
      <p>
        Мы предлагаем виртуальный сервер, на 100% подготовленный к работе с Битрикс, оптимизированный и настроенный для достижения максимальной производительности, исключения ошибок, программных и аппаратных сбоев.
      </p>
    ),
    uz: (
      <p>
        Biz Bitrix bilan ishlashga 100% tayyorlangan, optimallashtirilgan va maksimal ishlashga erishish, xatolar, dasturiy va apparat nosozliklarini bartaraf etish uchun sozlangan virtual serverni taklif etamiz.
      </p>
    ),
    en: (
      <p>
        We offer a virtual server that is 100% prepared to work with Bitrix, optimized and configured to achieve maximum performance, eliminating errors, software and hardware failures.
      </p>
    ),
  },
  descbottom: {
    ru: (
      <>
      </>
    ),
  },
  // img: "/intel.png",
  content: [
    {
      title: {
        ru: "Высокопроизводительные серверы. Битрикс нуждается в особых процессорах, не просто многоядерных, но с увеличенной тактовой частотой каждого ядра, что позволяет равномернее распределять нагрузку, быстрее справляться с вычислениями. Именно такие ЦПУ, со средней частотой в 5 гигагерц, используются в нашей компании.",
        uz: "Yuqori unumdor serverlar. Bitrix-ga nafaqat ko'p yadroli, balki har bir yadroning taktli chastotasi ko'tarilgan maxsus protsessorlar kerak, bu esa yukni tengroq taqsimlash va hisob-kitoblarni tezroq bajarish imkonini beradi. Bizning kompaniyamizda o'rtacha chastotasi 5 gigagertsga teng bo'lgan ushbu protsessorlar qo'llaniladi.",
        en: "High-performance servers. Bitrix requires special processors, not just multi-core, but with an increased clock frequency of each core, which allows for a more even distribution of the load and faster processing of calculations. These are the CPUs, with an average frequency of 5 gigahertz, that are used in our company.",
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
        ru: "Оптимальные операционные системы. Грамотный подбор ОС – гарантия уверенного взаимодействия с сайтами Битрикс, удобства и эффективности использования всего функционала, необходимого для их редактирования, обновления, добавления нового содержимого, будь то текстовые статьи, фотографии, видеозаписи.",
        uz: "Optimal operatsion tizimlar. OTni to'g'ri tanlash - Bitrix saytlari bilan ishonchli o'zaro ishlashning kafolati, matnli maqolalar, fotosuratlar, videolar bo'lsin, tahrirlash, yangilash, yangi tarkib qo'shish uchun zarur bo'lgan barcha funktsiyalardan foydalanishning qulayligi va samaradorligi.",
        en: "Optimal operating systems. A competent choice of OS is a guarantee of confident interaction with Bitrix sites, convenience and efficiency of using all the functionality necessary for editing, updating, adding new content, be it text articles, photographs, videos.",
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
        ru: "Совершенные алгоритмы шифрования. Они обеспечивают безопасность передаваемых данных.",
        uz: "Mukammal shifrlash algoritmlari. Ular uzatilgan ma'lumotlarning xavfsizligini ta'minlaydi.",
        en: "Perfect encryption algorithms. They ensure the security of transmitted data.",
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
  const [period, setPeriod] = useState(0);
  const langData = {
    seo: {
      ru: "VDS/VPS для 1С-Битрикс, серверы для сайтов на Bitrix",
      uz: "1C-Bitrix uchun VDS/VPS, Bitrix-dagi saytlar uchun serverlar",
      en: "VDS/VPS for 1C-Bitrix, servers for sites on Bitrix",
    },
    desc: {
      ru: "Аренда VDS/VPS для Битрикс24 и 1С-Битрикс⚡. Решения для интернет-магазинов, CRM‑систем. Активация VDS - 5 минут. Техподдержка 24/7",
      uz: "Bitrix24 va 1C-Bitrix⚡ uchun VDS/VPS ijarasi. Onlayn do'konlar uchun echimlar, CRM tizimlari. VDS-ni faollashtirish - 5 daqiqa. 24/7 texnik yordam",
      en: "VDS/VPS rental for Bitrix24 and 1C-Bitrix⚡. Solutions for online stores, CRM systems. VDS activation - 5 minutes. Technical support 24/7",
    },
    whyBlockTitle: {
      ru: "Преимущества облачного сервера для 1С Битрикс",
      uz: "1C Bitrix uchun bulutli serverning afzalliklari",
      en: "Advantages of a cloud server for 1C Bitrix",
    },
    whyBlockDescription: {
      ru: "Наши серверы, адаптированные специально для Битрикс, являются гораздо более гибкими, простыми в управлении и настройке, адаптированными к дальнейшему масштабированию, в сравнении с классическими хостингами, простыми решениями типа VDS или VPS. На сервере может быть размещен любой проект, вплоть до огромных информационных ресурсов, на которых за сутки бывают тысячи читателей, или интернет-магазинов с крупными каталогами и бесконечными потоками заказов. При необходимости, мощность сервера можно нарастить, не потребуется приостановка его работы, переход на новый тарифный план.",
      uz: "Bitrix uchun maxsus moslashtirilgan serverlarimiz klassik xosting, VDS yoki VPS kabi oddiy echimlar bilan solishtirganda ancha moslashuvchan, boshqarish va sozlash oson, keyinchalik masshtablash uchun moslashtirilgan. Har qanday loyihani serverda joylashtirish mumkin, jumladan kuniga minglab o'quvchilarga ega bo'lgan ulkan axborot resurslari yoki katta kataloglar va cheksiz buyurtmalar oqimiga ega onlayn-do'konlar. Agar kerak bo'lsa, serverning sig'imi oshirilishi mumkin, uning ishini to'xtatib turish yoki yangi tarif rejasiga o'tishga hojat qolmaydi;",
      en: "Our servers, adapted specifically for Bitrix, are much more flexible, easy to manage and configure, adapted for further scaling, in comparison with classic hosting, simple solutions such as VDS or VPS. Any project can be hosted on the server, up to huge information resources, which are visited by thousands of readers per day, or online stores with large catalogs and endless flows of orders. If necessary, the server capacity can be increased, there is no need to suspend its operation, switch to a new tariff plan.",
    },
    headTitle: {
      ru: "Аренда VPS/VDS для Битрикс24 и 1С-Битрикс",
      uz: "Bitrix24 va 1C-Bitrix uchun VPS/VDS ijarasi",
      en: "Rent VPS/VDS for Bitrix24 and 1S-Bitrix",
    },
    dsc: {
      ru: "Выделенный виртуальный сервер для Битрикс – профессионально настроенные, на 100% надежные, оптимизированные платформы, на которых вы можете разместить любые проекты, без ограничений по масштабу, степени сложности, от персональных страничек до интернет-магазинов.",
      uz: "Bitriks uchun Vydelennyy virtualnyy server – professionalno nastroennye, na 100% nadejnye, optimizirovannye platformalar, na kotoryh vy mumkinmi lyubye proekty, bepul ogranicheniy po masshtabi, stepeni slojniche internet, otpersonalno slojnosti.",
      en: "The dedicated virtual server for Bitrix is ​​a professionally configured, 100% reliable, optimized platform, which you can place any project you like, with no limits on scale, level of sophistication, personal pages or internet magazines.",
    },
    dsc3: {
      ru: "Сервера в Узбекистане (Ташкент)",
      uz: "O'zbekistondagi serverlar (Toshkent)",
      en: "Servers in Uzbekistan (Tashkent)",
    },
    dsc4: {
      ru: "Подключение к TAS-IX",
      uz: "TAS-IX ga ulanmoqda",
      en: "Connecting to TAS-IX",
    },
    dsc5: {
      ru: "Скорость до 1 Гбит/с",
      uz: "1 Gbit/s gacha tezlik",
      en: "Speed ​​up to 1 Gbps",
    },
    headTitleH2: {
      ru: "Тарифы серверов на 1С Битрикс",
      uz: "1C Bitrix uchun server tariflari",
      en: "1C Bitrix Server Tariffs",
    },
    dsc2: {
      ru: (
        <p className="text-left">
          Мы предлагаем вашему вниманию несколько тарифных планов, что позволяет найти решение, идеально сбалансированное по производительности, доступному функционалу и цене. Независимо от выбранного тарифа, разворачивание виртуальной машины занимает всего несколько минут, при этом сервер сразу будет соответствующим образом настроен, на нем окажется все необходимое для немедленного начала работы.
          <br />
          <br />
          Чтобы точнее определиться с подходящим тарифным планом, рекомендуем получить консультацию у одного из наших специалистов. Мы максимально оперативно обрабатываем поступающие запросы!
        </p>
      ),
      uz: (
        <p className="text-left">
          Sizga bir nechta tarif rejalarini taklif qilamiz, bu sizga ishlash, mavjud funksionallik va narx bo'yicha ideal muvozanatli yechim topish imkonini beradi. Tanlangan tarifdan qat'i nazar, virtual mashinani joylashtirish bir necha daqiqa davom etadi va server darhol mos ravishda sozlanadi va darhol ishlashni boshlash uchun kerak bo'lgan hamma narsaga ega bo'ladi.
          <br />
          <br />
          Tegishli tarif rejasini aniqroq aniqlash uchun mutaxassislarimizdan biri bilan maslahatlashishni tavsiya qilamiz. Biz kiruvchi so'rovlarni imkon qadar tezroq ko'rib chiqamiz!
        </p>
      ),
      en: (
        <p className="text-left">
          We offer you several tariff plans, which allows you to find a solution that is perfectly balanced in terms of performance, available functionality and price. Regardless of the chosen tariff, deploying a virtual machine takes only a few minutes, while the server will immediately be configured accordingly, it will have everything you need to start working immediately.
          <br />
          <br />
          To more accurately determine the appropriate tariff plan, we recommend that you consult with one of our specialists. We process incoming requests as quickly as possible!
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
      ru: "Мы устанавливаем серверы на Windows, в среднем, за 2 часа с момента поступления оплаты. Только в редких ситуациях срок ожидания может растянуться на двое суток, о чем мы обязательно уведомим. Обращаем внимание, что оформление аренды для сайтов с видео-контентом и игровых платформ невозможно!",
      uz: "Biz Windows-ga serverlarni to'lov olingan paytdan boshlab o'rtacha 2 soat ichida o'rnatamiz. Faqat kamdan-kam hollarda kutish muddati ikki kun davom etishi mumkin, biz bu haqda sizni albatta xabardor qilamiz. Video kontenti va oʻyin platformalari boʻlgan saytlarni ijaraga olishning iloji yoʻqligini unutmang!",
      en: "We install Windows servers, on average, in 2 hours from the moment of payment receipt. Only in rare situations the waiting period can extend to two days, about which we will definitely notify. Please note that it is impossible to arrange a lease for sites with video content and gaming platforms!",
    },
    headTitleC: {
      ru: "Собери свой виртуальные сервер на базе быстрых SSD-дисков",
      uz: "Tez SSD drayverlarga asoslangan shaxsiy virtual serveringiz",
      en: "Your own virtual server based on fast SSD drives",
    },
    dscC: {
      ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
      uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps",
      en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at a speed of 1 Gbps",
    },
    faqTitle: {
      ru: "Нас часто спрашивают",
      uz: "Bizdan tez-tez so'rashadi",
      en: "We are often asked",
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

  const faq2 = [
    {
      title: {
        ru: "Что такое “1С-Битрикс: Виртуальная машина”?",
        uz: "1C-Bitrix: Virtual mashina nima?",
        en: "What is “1C-Bitrix: Virtual Machine”?",
      },
      description: {
        ru: (
          <>
            <p>
            Она создана специально для взаимодействия с проектами на основе Bitrix, что выражается в максимально точном соответствии настроек и конфигурации, исключении лишних проблем и неудобств. Достигнута совместимость и с другими приложениями на PHP.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            U Bitrix-ga asoslangan loyihalar bilan o'zaro ishlash uchun maxsus yaratilgan bo'lib, bu sozlamalar va konfiguratsiyaning eng aniq moslashuvida aks etadi, keraksiz muammolar va noqulayliklarni bartaraf etadi. Boshqa PHP ilovalari bilan ham muvofiqlikka erishildi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            It is created specifically for interaction with Bitrix-based projects, which is expressed in the most accurate correspondence of settings and configuration, eliminating unnecessary problems and inconveniences. Compatibility with other PHP applications has also been achieved.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "В чем необходимость виртуальной машины?",
        uz: "Virtual mashinaga nima kerak?",
        en: "What is the need for a virtual machine?",
      },
      description: {
        ru: (
          <>
            <p>С ее помощью можно добиться максимальной производительности проекта, не тратить лишнего времени на настройку и администрирование, уверенно работать как с новыми проектами, так и со старыми, перенесенными с других платформ.</p>
          </>
        ),
        uz: (
          <>
            <p>Uning yordami bilan siz maksimal loyiha unumdorligiga erishishingiz, sozlash va boshqarishga qo'shimcha vaqt sarflashdan qochishingiz, yangi loyihalar va boshqa platformalardan o'tkazilgan eski loyihalar bilan ishonchli ishlashingiz mumkin.</p>
          </>
        ),
        en: (
          <>
            <p>With its help, you can achieve maximum project productivity, not waste extra time on setup and administration, and confidently work with both new projects and old ones transferred from other platforms.</p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какая версия используется?",
        uz: "Qaysi versiyadan foydalanasiz?",
        en: "What version is being used?",
      },
      description: {
        ru: (
          <>
            <p>Обращаясь к нам, вы получаете актуальную версию программного обеспечения. Мы постоянно следим за обновлениями, чтобы исключить любые проблемы с производительностью и ограниченностью функционала.</p>
          </>
        ),
        uz: (
          <>
            <p>Biz bilan bog'lanish orqali siz dasturiy ta'minotning so'nggi versiyasini olasiz. Ishlash va cheklangan funksionallik bilan bog'liq har qanday muammolarni bartaraf etish uchun biz doimiy ravishda yangilanishlarni kuzatib boramiz.</p>
          </>
        ),
        en: (
          <>
            <p>When you contact us, you receive the latest version of the software. We constantly monitor updates to eliminate any performance issues and limited functionality.</p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какова производительность Битрикс?",
        uz: "Bitrixning ishlashi qanday?",
        en: "What is the performance of Bitrix?",
      },
      description: {
        ru: (
          <>
            <p>Мы используем алгоритмы установки и схемы настройки, позволяющие достичь максимальных показателей, высочайшей скорости загрузки страниц сайта, добавления нового контента.</p>
          </>
        ),
        uz: (
          <>
            <p>Biz maksimal ishlashga, sayt sahifalarini yuklashning eng yuqori tezligiga va yangi tarkibni qo'shishga imkon beruvchi o'rnatish algoritmlari va konfiguratsiya sxemalaridan foydalanamiz.</p>
          </>
        ),
        en: (
          <>
            <p>We use installation algorithms and configuration schemes that allow us to achieve maximum performance, the highest page loading speed, and the addition of new content.</p>
          </>
        ),
      },
    },
  ];

  const whyBlock = [
    {
      title: {
        ru: "Производительность.",
        uz: "Ishlash.",
        en: "Performance.",
      },
      description: {
        ru: (
          <p>
            Наше оборудование идеально подходит для Bitrix, гарантирует максимальную производительность.
          </p>
        ),
        uz: (
          <p>
            Bizning uskunamiz Bitrix uchun ideal va maksimal ishlashni kafolatlaydi.
          </p>
        ),
        en: (
          <p>
            Our equipment is ideal for Bitrix, guaranteeing maximum performance.
          </p>
        ),
      },
      icon: serversIcon,
    },
    {
      title: {
        ru: "Квалифицированная техническая поддержка.",
        uz: "Malakali texnik yordam.",
        en: "Qualified technical support.",
      },
      description: {
        ru: (
          <p>
            Наши специалисты знают все тонкости администрирования проектов, размещенных на Bitrix. Понимание основных нюансов данной CMS, характерных для нее “слабых мест”, позволяет успешно нивелировать их для запуска крупных проектов, которые гарантированно будут работать быстро и безошибочно.
          </p>
        ),
        uz: (
          <p>
            Mutaxassislarimiz Bitrix-da joylashgan loyihalarni boshqarishning barcha nozik tomonlarini bilishadi. Ushbu CMSning asosiy nuanslarini, uning xarakterli "zaif tomonlarini" tushunish sizga tez va xatosiz ishlashi kafolatlangan yirik loyihalarni ishga tushirish uchun ularni muvaffaqiyatli tekislash imkonini beradi.
          </p>
        ),
        en: (
          <p>
            Our specialists know all the intricacies of administering projects hosted on Bitrix. Understanding the main nuances of this CMS, its characteristic “weak points”, allows you to successfully level them out to launch large projects that are guaranteed to work quickly and without errors.
          </p>
        ),
      },
      icon: lesssonIcon,
    },
    {
      title: {
        ru: "Помощь в переносе.",
        uz: "Transfer yordami.",
        en: "Help with transfer.",
      },
      description: {
        ru: (
          <p>
            Мы поможем перенести проект, проведем его настройку. Сложность и масштаб не имеют решающего значения.
          </p>
        ),
        uz: (
          <p>
            Biz sizga loyihani uzatish va uni sozlashda yordam beramiz. Murakkablik va miqyos muhim emas.
          </p>
        ),
        en: (
          <p>
            We will help you transfer the project and set it up. Complexity and scale are not critical.
          </p>
        ),
      },
      icon: databaseIcon,
    },
    {
      title: {
        ru: "Оптимизация.",
        uz: "Optimallashtirish.",
        en: "Optimization.",
      },
      description: {
        ru: (
          <p>
            Мы используем исключительно актуальные версии окружения, виртуальных машин. Это исключает проблемы с функционалом Битрикс, позволяет оценить все его преимущества и удобство.
          </p>
        ),
        uz: (
          <p>
            Biz faqat atrof-muhit va virtual mashinalarning so'nggi versiyalaridan foydalanamiz. Bu Bitrix funksionalligi bilan bog'liq muammolarni bartaraf qiladi va uning barcha afzalliklari va qulayligini baholash imkonini beradi.
          </p>
        ),
        en: (
          <p>
            We use only current versions of the environment, virtual machines. This eliminates problems with the functionality of Bitrix, allows you to evaluate all its advantages and convenience.
          </p>
        ),
      },
      icon: warningIcon,
    },
  ];

  const tarif = [
    {
      title: { ru: "Strong", uz: "Strong", en: "Strong" },
      workstxt: { ru: "Для старта", uz: "Boshlash uchun", en: "To start" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
    },
    {
      title: { ru: "VIP", uz: "VIP", en: "VIP" },
      workstxt: { ru: "Для телеграм ботов", uz: "Telegram botlari uchun", en: "For Telegram bots" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15",
    },
    {
      title: { ru: "VIP+", uz: "VIP+", en: "VIP+" },
      workstxt: { ru: "Для интернет магазинов", uz: "Onlayn do'konlar uchun", en: "For online stores" },
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
      activeTop: "activeTop",
      cpu: 4,
      ram: 6,
      ssd: 100,
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
    },
    {
      title: { ru: "Nano", uz: "Nano", en: "Nano" },
      workstxt: { ru: "Для сайтов", uz: "Veb-saytlar uchun", en: "For websites" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=49",
    },
    {
      title: { ru: "Advanced", uz: "Advanced", en: "Advanced" },
      workstxt: { ru: "Для сайтов и приложений", uz: "Veb-saytlar va ilovalar uchun", en: "For websites and applications" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50",
    },
    {
      title: { ru: "Mega", uz: "Mega", en: "Mega" },
      workstxt: { ru: "Для CRM / 1С", uz: "CRM / 1С uchun", en: "For CRM / 1С" },
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
      activeTop: "activeTop",
      cpu: 6,
      ram: 12,
      ssd: 200,
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51",
    },
    {
      title: { ru: "Ultra", uz: "Ultra", en: "Ultra" },
      workstxt: { ru: "Для бизнеса", uz: "Biznes uchun", en: "For business" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
    },
    {
      title: { ru: "Tera", uz: "Tera", en: "Tera" },
      workstxt: { ru: "Для высоконагруженных сайтов", uz: "Yuqori yuklangan joylar uchun", en: "For high-load sites" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=53",
    },
    {
      title: { ru: "Peta", uz: "Peta", en: "Peta" },
      workstxt: { ru: "Для растущих проектов", uz: "Rivojlanayotgan loyihalar uchun", en: "For growing projects" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=61",
    },
    {
      title: { ru: "Exa", uz: "Exa", en: "Exa" },
      workstxt: { ru: "Для стабильного бизнеса", uz: "Barqaror biznes uchun", en: "For a stable business" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=117",
    },
    {
      title: { ru: "Zeta", uz: "Zeta", en: "Zeta" },
      workstxt: { ru: "Для highload", uz: "Yuqori yuklanish uchun", en: "For highload" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=62",
    },
    {
      title: { ru: "Yotta", uz: "Yotta", en: "Yotta" },
        workstxt: { ru: "Для enterprise", uz: "Korxona uchun", en: "For enterprise" },
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
      net: 250,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=112",
    },
  ];

  const breadCrumbs = [
    ...breadCrumbsVds,
    {
      name: {
        ru: "Аренда VPS/VDS для Битрикс24 и 1С-Битрикс",
        uz: "Bitrix24 va 1C-Bitrix uchun VPS/VDS ijarasi",
        en: "VPS/VDS rental for Bitrix24 and 1C-Bitrix",
      },
      link: {
        ru: "/vds/arenda-servera-bitrix",
        uz: "/uz/vds/arenda-servera-bitrix",
        en: "/en/vds/arenda-servera-bitrix",
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
          
          <ServerHero title={langData.headTitle[language]} language={language} />

          <div className={`${st.tarifNote} ${st.tarifNoteDark}`}>{langData.dsc[language]}</div>

          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            // headTitle={langData.headTitle[language]}
            // title="Тарифы"
            description={
              <TarifFeatures items={[langData.dsc3[language], langData.dsc4[language], langData.dsc5[language]]} />
            }
            // txt={<p>{langData.txt[language]}</p>}
            className="mt-0 px-0"
            endText={
              <div className={st.tarifNote}>
                {/* <p>{langData.endText[language]}</p> */}
                <p>{langData.timeW[language]}</p>
              </div>
            }
          >
            <PeriodSwitcher value={period} onChange={setPeriod} language={language} />
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
                      period={period}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TarifMaket>
        </div>

        <WhyBlock
          title={langData.whyBlockTitle[language]}
          description={langData.whyBlockDescription[language]}
          content={whyBlock}
          language={language}
        />

        <ForLinux data={ForLinuxVDSData} language={language} />
        
        {/* <Container
          title={langData.headTitleC[language]}
          description={<p className="center">{langData.dscC[language]}</p>}
          clNTitle="text-center"
          className="pb-0"
        ></Container>
        <Calculator language={language} /> */}
        
        <ForLinux data={ForLinuxVDS2Data} language={language} />

        <FAQ
          faq={faq2}
          title={langData.faqTitle[language]}
          language={language}
        />

        <ForFreeBlock data={forFreeVDSData} language={language} />

        {/* <AvailableOS language={language} /> */}
        <VirtualServers language={language} />

        <Howworks language={language} />
        <ForContract data={forContractVDSData} language={language} />
        <ForSupport data={forSupportVDSData} language={language} />
        <ForDatacenter data={forDatacenterVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />
      </div>
    </>
  );
}
