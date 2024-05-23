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
import ForIntel from "@/components/forIntel";
import ForIntelTwo from "@/components/forIntelTwo";
import ForContract from "@/components/forContract";
import ForSupport from "@/components/forSupport";
import ForDatacenter from "@/components/forDatacenter";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductVDS from "../../components/seo/productvds"

export const forFreeVDSData = {
  title: {
    ru: (
      <>
        Бесплатно с каждым
        <br />
        VDS и VPS сервером:
      </>
    ),
    uz: (
      <>
        Tekin narxda barcha
        <br />
        VDS va VPS serverlar uchun:
      </>
    ),
    en: (
      <>
        Free with every
        <br />
        VDS and VPS server:
      </>
    ),
  },
  img: "/forFreeBlock/cat.png",
  content: [
    {
      title: { ru: "1 выделенный IP-адрес", uz: "1 ta alohida server", en: "1 dedicated IP address" },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Панель управления сервером VNC",
        uz: "VNS serverini bosgqarish uchun qurilma",
        en: "VNC Server Control Panel",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Тестовый период по согласованию",
        uz: "Test qilish jaroyoni ",
        en: "Test period by agreement",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Установка ОС на ваш выбор",
        uz: "O'z tanlovingiz bo'yicha OS",
        en: "Install OS of your choice",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Полный доступ по SSH",
        uz: "SHH bo'yicha to'liq foydalanish",
        en: "Full access via SSH",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
        </svg>
      ),
    },
  ],
};

export const ForIntelVDSData = {
  title: {
    ru: (
      <>
        Выбор сервера на Intel® зависит от ваших нужд и чего вы хотите. Вот что важно при выборе сервера:
      </>
    ),
    uz: (
      <>
        Выбор сервера на Intel® зависит от ваших нужд и чего вы хотите. Вот что важно при выборе сервера:
      </>
    ),
    en: (
      <>
        Выбор сервера на Intel® зависит от ваших нужд и чего вы хотите. Вот что важно при выборе сервера:
      </>
    ),
  },
  desc: {
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
  img: "/intel.png",
  content: [
    {
      title: {
        ru: "Мощность процессора. Нужно выбрать сервер с нужным количеством ядер и потоков. Если вам нужно много работать одновременно, подойдет сервер Xeon Gold.",
        uz: "Мощность процессора. Нужно выбрать сервер с нужным количеством ядер и потоков. Если вам нужно много работать одновременно, подойдет сервер Xeon Gold.",
        en: "Мощность процессора. Нужно выбрать сервер с нужным количеством ядер и потоков. Если вам нужно много работать одновременно, подойдет сервер Xeon Gold.",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Частота ядра. Чем выше частота, тем быстрее сервер справляется с задачами. Это хорошо для задач, которые нельзя делать одновременно на разных ядрах.",
        uz: "Частота ядра. Чем выше частота, тем быстрее сервер справляется с задачами. Это хорошо для задач, которые нельзя делать одновременно на разных ядрах.",
        en: "Частота ядра. Чем выше частота, тем быстрее сервер справляется с задачами. Это хорошо для задач, которые нельзя делать одновременно на разных ядрах.",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Кэш сервера. Больший кэш помогает быстрее работать с данными.",
        uz: "Кэш сервера. Больший кэш помогает быстрее работать с данными.",
        en: "Кэш сервера. Больший кэш помогает быстрее работать с данными.",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Разъемы и память: Проверьте, подходят ли разъемы и память сервера для ваших нужд.",
        uz: "Разъемы и память: Проверьте, подходят ли разъемы и память сервера для ваших нужд.",
        en: "Разъемы и память: Проверьте, подходят ли разъемы и память сервера для ваших нужд.",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Энергопотребление. Выберите сервер, который мало потребляет энергии, чтобы сэкономить на электричестве и обслуживании.",
        uz: "Энергопотребление. Выберите сервер, который мало потребляет энергии, чтобы сэкономить на электричестве и обслуживании.",
        en: "Энергопотребление. Выберите сервер, который мало потребляет энергии, чтобы сэкономить на электричестве и обслуживании.",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
  ],
};

export const ForIntelTwoVDSData = {
  title: {
    ru: (
      <>
        Выделенные серверы с процессорами Intel подходят для многих задач. Они хороши, потому что могут многое. Их можно арендовать и это выгодно:
      </>
    ),
    uz: (
      <>
        Выделенные серверы с процессорами Intel подходят для многих задач. Они хороши, потому что могут многое. Их можно арендовать и это выгодно:
      </>
    ),
    en: (
      <>
        Выделенные серверы с процессорами Intel подходят для многих задач. Они хороши, потому что могут многое. Их можно арендовать и это выгодно:
      </>
    ),
  },
  desc: {
    ru: (
      <>
        Выделенные серверы с процессорами Intel подходят для решения любых вычислительных систем и задач благодаря своей высокой производительности, энергоэффективности и поддержке разнообразных технологий. Вы можете ощутить все бонусы этого варианта уже сегодня заказав аренду выделенного сервера у нас всего в пару кликов.
      </>
    ),
    uz: (
      <>
        Выделенные серверы с процессорами Intel подходят для решения любых вычислительных систем и задач благодаря своей высокой производительности, энергоэффективности и поддержке разнообразных технологий. Вы можете ощутить все бонусы этого варианта уже сегодня заказав аренду выделенного сервера у нас всего в пару кликов.
      </>
    ),
    en: (
      <>
        Выделенные серверы с процессорами Intel подходят для решения любых вычислительных систем и задач благодаря своей высокой производительности, энергоэффективности и поддержке разнообразных технологий. Вы можете ощутить все бонусы этого варианта уже сегодня заказав аренду выделенного сервера у нас всего в пару кликов.
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
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Работа с контентом: Выделенные серверы с процессорами Intel могут обрабатывать и обрабатывать большие объемы контента, такие как медиафайлы, тексты и данные баз данных, что позволяет эффективно работать с различными контент-платформами и интернет-ресурсами. Возможности intel серверов при работе с контентом безграничны",
        uz: "Работа с контентом: Выделенные серверы с процессорами Intel могут обрабатывать и обрабатывать большие объемы контента, такие как медиафайлы, тексты и данные баз данных, что позволяет эффективно работать с различными контент-платформами и интернет-ресурсами. Возможности intel серверов при работе с контентом безграничны",
        en: "Работа с контентом: Выделенные серверы с процессорами Intel могут обрабатывать и обрабатывать большие объемы контента, такие как медиафайлы, тексты и данные баз данных, что позволяет эффективно работать с различными контент-платформами и интернет-ресурсами. Возможности intel серверов при работе с контентом безграничны",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Сложные математические вычисления: Процессоры Intel серверов, с их передовыми технологиями и архитектурой, способны эффективно обрабатывать сложные математические задачи. Симуляции, моделирование и анализ данных - для арендованных серверов Intel не станет проблемой. Это делает их популярным выбором для научных исследований и инженерных проектов.",
        uz: "Сложные математические вычисления: Процессоры Intel серверов, с их передовыми технологиями и архитектурой, способны эффективно обрабатывать сложные математические задачи. Симуляции, моделирование и анализ данных - для арендованных серверов Intel не станет проблемой. Это делает их популярным выбором для научных исследований и инженерных проектов.",
        en: "Сложные математические вычисления: Процессоры Intel серверов, с их передовыми технологиями и архитектурой, способны эффективно обрабатывать сложные математические задачи. Симуляции, моделирование и анализ данных - для арендованных серверов Intel не станет проблемой. Это делает их популярным выбором для научных исследований и инженерных проектов.",
      },
      img: (
        <svg data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M85,100a15,15,0,1,0,15-15A15,15,0,0,0,85,100Zm-55,0A15,15,0,1,0,45,85,15,15,0,0,0,30,100Zm110,0a15,15,0,1,0,15-15,15,15,0,0,0-15,15Z"/></svg>
      ),
    },
  ],
};

export const forContractVDSData = {
  title: {
    ru: (
      <>
        Все необходимое 
        <br /> 
        Для юридических лиц
      </>
    ),
    uz: (
      <>
        Все необходимое
        <br />
        Для юридических лиц
      </>
    ),
    en: (
      <>
        Все необходимое
        <br />
        Для юридических лиц
      </>
    ),
  },
  desc: {
    ru: (
      <>
        Работаем с юридическими лицами, ИП и бюджентными организациями.
      </>
    ),
    uz: (
      <>
        Работаем с юридическими лицами, ИП и бюджентными организациями.
      </>
    ),
    en: (
      <>
        Работаем с юридическими лицами, ИП и бюджентными организациями.
      </>
    ),
  },
  img: "/how-work-img.png",
  content: [
    {
      title: { ru: "Отчетные документы на почту или по ЭДО", uz: "Отчетные документы на почту или по ЭДО", en: "Отчетные документы на почту или по ЭДО" },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m10,23c0,.553-.447,1-1,1h-4c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h8c2.757,0,5,2.243,5,5v2c0,.553-.447,1-1,1s-1-.447-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h4c.553,0,1,.447,1,1ZM14,6c0-.553-.447-1-1-1H5c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1Zm-4,5c0-.553-.447-1-1-1h-4c-.553,0-1,.447-1,1s.447,1,1,1h4c.553,0,1-.447,1-1Zm-5,4c-.553,0-1,.447-1,1s.447,1,1,1h2c.553,0,1-.447,1-1s-.447-1-1-1h-2Zm19,2c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-3.192-1.241l-2.223,2.134c-.144.141-.379.144-.522.002l-1.131-1.108c-.396-.388-1.028-.382-1.414.014-.387.395-.381,1.027.014,1.414l1.132,1.109c.46.449,1.062.674,1.663.674s1.201-.225,1.653-.671l2.213-2.124c.398-.383.411-1.016.029-1.414-.383-.4-1.017-.411-1.414-.029Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Поддерживаем электронный документооборот",
        uz: "Поддерживаем электронный документооборот",
        en: "Поддерживаем электронный документооборот",
      },
      img: (
        <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m21 18a2.986 2.986 0 0 0 -2.077.844l-2.96-1.481a2.9 2.9 0 0 0 .037-.363 2.9 2.9 0 0 0 -.037-.363l2.96-1.481a2.994 2.994 0 1 0 -.923-2.156 2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481a2.9 2.9 0 0 0 -.037.363 3 3 0 1 0 3-3zm0-6a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-8 6a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm8 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm-9 0a1 1 0 0 1 -1 1h-5.321a5.841 5.841 0 0 1 -5.622-4.7 5.443 5.443 0 0 1 2.885-5.651 7.652 7.652 0 0 1 -.8-5.18 8 8 0 0 1 15.49-.842 1.09 1.09 0 0 0 .722.735 1 1 0 1 1 -.588 1.911 3.1 3.1 0 0 1 -2.044-2.053 6 6 0 1 0 -11.06 4.513 1.994 1.994 0 0 1 -.792 2.686 3.468 3.468 0 0 0 -1.835 3.6 3.807 3.807 0 0 0 3.644 2.981h5.321a1 1 0 0 1 1 1z"/></svg>
      ),
    },
    {
      title: {
        ru: "Договор оферты или индивидуальный договор",
        uz: "Договор оферты или индивидуальный договор",
        en: "Договор оферты или индивидуальный договор",
      },
      img: (
        <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m11 12a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm6-3a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm-9-3h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1 -1.231.51l-.769-.768-.769.768a.721.721 0 0 1 -1.231-.51v-3.833a3.987 3.987 0 0 1 2-7.444 3.939 3.939 0 0 1 1 .142v-7.142a3 3 0 0 0 -3-3h-8a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2h-5a5.006 5.006 0 0 1 -5-5v-12a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1 -1 6.062zm0-3.444a2 2 0 1 0 -2 2 2 2 0 0 0 2-2z"/></svg>
      ),
    },
    {
      title: {
        ru: "Безналичные платежи",
        uz: "Безналичные платежи",
        en: "Безналичные платежи",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm0-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm-7-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm13,3c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-13,3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm13,3c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-.999,5c-1.64,0-3.488-.528-5.275-1.039-1.654-.473-3.365-.961-4.725-.961-2.731,0-5.549,1.303-5.578,1.315l-1.423,.666V7.158c0-1.128,.618-2.148,1.615-2.663,1.325-.683,3.333-1.496,5.386-1.496,1.662,0,3.266,.535,4.816,1.051,1.463,.488,2.845,.949,4.183,.949,1.386,0,2.517-.362,3.426-.653,.302-.097,.577-.185,.828-.251,.898-.239,1.835-.048,2.573,.52,.746,.574,1.174,1.443,1.174,2.384v12.285l-.587,.266c-.131,.06-3.233,1.449-6.413,1.449Zm-10-4c1.64,0,3.488,.528,5.275,1.039,1.655,.473,3.365,.961,4.725,.961,2,0,4.03-.665,5-1.032V7c0-.316-.144-.607-.394-.799-.142-.109-.442-.276-.842-.171-.221,.059-.464,.137-.73,.222-.986,.315-2.338,.748-4.035,.748-1.662,0-3.266-.535-4.816-1.051-1.463-.488-2.845-.949-4.183-.949-1.739,0-3.547,.798-4.47,1.273-.328,.169-.532,.508-.532,.885v10.782c1.23-.427,3.103-.94,5.002-.94Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Работа через биржу xarid.uzex.uz",
        uz: "Работа через биржу xarid.uzex.uz",
        en: "Работа через биржу xarid.uzex.uz",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M18.5,3h-.642A4,4,0,0,0,14,0H10A4,4,0,0,0,6.142,3H5.5A5.506,5.506,0,0,0,0,8.5v10A5.506,5.506,0,0,0,5.5,24h13A5.507,5.507,0,0,0,24,18.5V8.5A5.507,5.507,0,0,0,18.5,3ZM5.5,6h13A2.5,2.5,0,0,1,21,8.5V11H3V8.5A2.5,2.5,0,0,1,5.5,6Zm13,15H5.5A2.5,2.5,0,0,1,3,18.5V14h7a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2h7v4.5A2.5,2.5,0,0,1,18.5,21Z"/></svg>
      ),
    },
  ],
};

export const forSupportVDSData = {
  title: {
    ru: (
      <>
        Отзывчивая поддержка 24/7
      </>
    ),
    uz: (
      <>
        Отзывчивая поддержка 24/7
      </>
    ),
    en: (
      <>
        Отзывчивая поддержка 24/7
      </>
    ),
  },
  desc: {
    ru: (
      <>
        Служба поддержки быстро поможет с любым вопросом по хостингу. 80% заявок решается за 1 час. Компетентные и дружелюбные специалисты разберутся даже с самой сложной ситуацией.
        <br /><br />
        Обширная База знаний со статьями и видеоинструкциями поможет разобраться с услугой самостоятельно.
      </>
    ),
    uz: (
      <>
        Работаем с юридическими лицами, ИП и бюджентными организациями.
      </>
    ),
    en: (
      <>
        Работаем с юридическими лицами, ИП и бюджентными организациями.
      </>
    ),
  },
  img: "/intro-img.png",
  content: [
    {
      title: { ru: "База знаний", uz: "База знаний", en: "База знаний" },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m22,0h-10.5c-1.93,0-3.5,1.57-3.5,3.5v12c0,1.93,1.57,3.5,3.5,3.5h12.5V2c0-1.103-.897-2-2-2Zm-10.5,2h10.5v10h-10.5c-.536,0-1.045.122-1.5.338V3.5c0-.827.673-1.5,1.5-1.5Zm0,15c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h10.5v3h-10.5Zm2.5,4h2v3H3.5c-1.93,0-3.5-1.57-3.5-3.5v-12c0-1.93,1.57-3.5,3.5-3.5h2.5v2h-2.5c-.827,0-1.5.673-1.5,1.5v8.838c.455-.217.964-.338,1.5-.338h2.713c.211.741.569,1.421,1.048,2h-3.761c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5h10.5v-1Z"/></svg>
      ),
    },
    {
      title: {
        ru: "Видеосправка",
        uz: "Видеосправка",
        en: "Видеосправка",
      },
      img: (
        <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m19 24h-14a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1 -5 5zm-14-22a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm4.342 15.005a2.368 2.368 0 0 1 -1.186-.323 2.313 2.313 0 0 1 -1.164-2.021v-5.322a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1 -1.101.289zm-.025-8a.314.314 0 0 0 -.157.042.327.327 0 0 0 -.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0 -.169-.292l-5.274-2.635a.462.462 0 0 0 -.228-.068z"/></svg>
      ),
    },
    {
      title: {
        ru: "Чат поддержки",
        uz: "Чат поддержки",
        en: "Чат поддержки",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z"/><path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z"/><path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"/><path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"/></svg>

      ),
    },
    {
      title: {
        ru: "Тикет-система",
        uz: "Тикет-система",
        en: "Тикет-система",
      },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,0H8A5.006,5.006,0,0,0,3,5V23a1,1,0,0,0,1.564.825L6.67,22.386l2.106,1.439a1,1,0,0,0,1.13,0l2.1-1.439,2.1,1.439a1,1,0,0,0,1.131,0l2.1-1.438,2.1,1.437A1,1,0,0,0,21,23V5A5.006,5.006,0,0,0,16,0Zm3,21.1-1.1-.752a1,1,0,0,0-1.132,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.131,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.129,0L5,21.1V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z"/><rect x="7" y="8" width="10" height="2" rx="1"/><rect x="7" y="12" width="8" height="2" rx="1"/></svg>
      ),
    },
  ],
};

export const forDatacenterVDSData = {
  title: {
    ru: (
      <>
        Дата-центр AIRNET
      </>
    ),
    uz: (
      <>
        Дата-центр AIRNET
      </>
    ),
    en: (
      <>
        Дата-центр AIRNET
      </>
    ),
  },
  desc: {
    ru: (
      <>
        Охраняемый ЦОД находится в <strong>Ташкенте</strong> и соответсвует международным стандартам – <strong>TIER III</strong> (АК Узтелеком)
        <br /><br />
        ЦОД оборудован по стандартам повышенной надежности. Имеет систему видеоконтроля, пожаротушения, бесперебойного питания.
      </>
    ),
    uz: (
      <>
        Охраняемый ЦОД находится в <strong>Ташкенте</strong> и соответсвует международным стандартам – <strong>TIER III</strong> (АК Узтелеком)
        <br /><br />
        ЦОД оборудован по стандартам повышенной надежности. Имеет систему видеоконтроля, пожаротушения, бесперебойного питания.
      </>
    ),
    en: (
      <>
        Охраняемый ЦОД находится в <strong>Ташкенте</strong> и соответсвует международным стандартам – <strong>TIER III</strong> (АК Узтелеком)
        <br /><br />
        ЦОД оборудован по стандартам повышенной надежности. Имеет систему видеоконтроля, пожаротушения, бесперебойного питания.
      </>
    ),
  },
  img: "/ddos-img.png",
  count: "99,98%",
  text: "Сердний uptime на наших серверах",
  count2: "0,2 сек",
  text2: "Среднее время загрузки сайтов на наших серверах",
  count3: "10000 +",
  text3: "Доменов размещено на нашей площадке",
  content: [
    {
      title: { ru: "TIER III", uz: "TIER III", en: "TIER III" },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M18,0H6C3.24,0,1,2.24,1,5v14c0,2.76,2.24,5,5,5h12c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM6,2h12c1.65,0,3,1.35,3,3V15H3V5c0-1.65,1.35-3,3-3Zm12,20H6c-1.65,0-3-1.35-3-3v-2H21v2c0,1.65-1.35,3-3,3Zm2-2.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm-4,0c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Z"/></svg>
      ),
    },
  ],
};

export default function VDS({ language }) {
  const [show, setShow] = useState(-1);
  const langData = {
    seo: {
      ru: "Аренда сервера на базе Intel Xeon",
      uz: "Intel Xeon asosidagi serverni ijaraga oling",
      en: "Rent a server based on Intel Xeon",
    },
    desc: {
      ru: "Аренда сервера на базе Intel Xeon - ⚡от 150000 сум✔️ Бесплатно 1 выделенный IP-адрес ✔️Тестовый период✔️Установка ОС",
      uz: "Intel Xeon asosidagi serverni ijaraga oling - ⚡150 000 so'mdan✔️ Bepul 1 ta ajratilgan IP manzil ✔️Sinov muddati✔️OS o'rnatilishi",
      en: "Rent a server based on Intel Xeon - ⚡from 150,000 sum✔️ Free 1 dedicated IP address ✔️Test period✔️OS installation",
    },
    whyBlockTitle: {
      ru: "Преимущества",
      uz: "Преимущества",
      en: "Преимущества",
    },
    whyBlockDescription: {
      ru: <p>Просмотрите наши тарифы на сервера Intel ниже. Выберите нужный вам.<br /> Если вы выберете нашу услугу аренды сервера Intel Xeon, вы получите много преимуществ:</p>,
      uz: <p>Quyida Intel serverimiz narxlarini koʻring. Sizga kerak bo'lganini tanlang.<br />Agar siz bizning Intel Xeon serverlarini ijaraga olish xizmatimizni tanlasangiz, siz ko'plab imtiyozlarga ega bo'lasiz:</p>,
      en: <p>View our Intel server rates below. Choose the one you need.<br />If you choose our Intel Xeon server rental service, you will receive many benefits:</p>,
    },
    headTitle: {
      ru: "Аренда серверов intel",
      uz: "Intel server ijarasi",
      en: "Intel server rental",
    },
    dsc: {
      ru: <p>Мы продаем мощные серверы Intel. Они работают быстро и надежно.<br />
        Это хорошо для вашего бизнеса. Наши специалисты следят за серверами круглосуточно.<br />
        Они помогают, чтобы все работало без сбоев. Вы можете арендовать сервер Intel на территории Узбекистана уже сегодня!</p>,
      uz: <p>Biz kuchli Intel serverlarini sotamiz. Ular tez va ishonchli ishlaydi.<br />
      Bu sizning biznesingiz uchun yaxshi. Mutaxassislarimiz serverlarni kechayu kunduz kuzatib boradilar.<br />
      Ular hamma narsani muammosiz bajarishga yordam beradi. Bugun O'zbekistonda Intel serverini ijaraga olishingiz mumkin!</p>,
      en: <p>We sell powerful Intel servers. They work quickly and reliably.<br />
      It's good for your business. Our specialists monitor the servers around the clock.<br />
      They help keep everything running smoothly. You can rent an Intel server in Uzbekistan today!</p>,
    },
    txt: {
      ru: <p>Выберите удобный тариф для аренды сервера. Обратите внимание для аренды сервера Intel Xeon Gold вам нужно оформить индивидуальный заказ.<br />
        Или найдите сервер, который идеально подойдет вашему бизнесу. Мы предлагаем разные планы аренды сервера на базе Intel. У каждого плана есть свои особенности.<br /> 
        Вы можете выбрать подходящий для своих нужд и бюджета.</p>,
      uz: <p>Server ijarasi uchun qulay tarifni tanlang. Esda tuting, Intel Xeon Gold serverini ijaraga olish uchun siz individual buyurtma berishingiz kerak.<br />
      Yoki biznesingiz uchun mukammal serverni toping. Biz turli xil Intel asosidagi server ijarasi rejalarini taklif qilamiz. Har bir reja o'ziga xos xususiyatlarga ega.<br />
      Siz o'zingizning ehtiyojlaringiz va byudjetingizga mos keladiganini tanlashingiz mumkin.</p>,
      en: <p>Choose a convenient tariff for server rental. Please note, to rent an Intel Xeon Gold server, you need to place an individual order.<br />
      Or find a server that's perfect for your business. We offer different Intel based server rental plans. Each plan has its own characteristics.<br />
      You can choose the one that suits your needs and budget.</p>,
    },
    endText: {
      ru: "Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делаем всё возможное, чтобы уменьшить время ожидания.",
      uz: "Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan boshlanadi zarur serverlar va yuk mavjudligiga qarab 2 ish kunigacha texnik xodimlar. To'lovdan keyin uskunani faollashtirishning o'rtacha vaqti - 1-2 soat. Biz kutish vaqtini kamaytirish uchun qo'limizdan kelganini qilamiz.",
      en: "Server installation time, after placing an order and payment, is from 30 minutes to 2 business days, depending on the availability of the necessary servers and the workload of technical personnel. The average equipment activation time after payment is 1-2 hours. We do our best to to reduce waiting time.",
    },
    timeW: {
        ru: <p>Срок действия услуги начнется с момента её активации.<br /> Не предоставляется для <span className="strong">игровых серверов и видео-контент сайтов!</span></p>,
        uz: <p>Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.<br /> <span className="strong">oʻyin serverlari va video kontent saytlari uchun taqdim etilmaydi!</span></p>,
        en: <p>The validity period of the service will begin from the moment of its activation.<br /> Not provided for <span className="strong">game servers and video content sites!</span></p>,
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
                <td>5 000 000 сум/мес.</td>
              </tr>
              <tr>
                <td>Unlim 350M</td>
                <td>350 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>10 000 000 сум/мес.</td>
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
                <td>5 000 000 so'm/oy.</td>
              </tr>
              <tr>
                <td>Unlim 350M</td>
                <td>350 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>10 000 000 so'm/oy.</td>
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
                <td>5 000 000 sum/mon.</td>
              </tr>
              <tr>
                <td>Unlim 350M</td>
                <td>350 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>10 000 000 sum/mon.</td>
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
        ru: "Качественные сервера Intel.",
        uz: "Yuqori sifatli Intel serverlari.",
        en: "High-quality Intel servers.",
      },
      description: {
        ru: <p>Взятые у нас в аренду сервера Intel работают стабильно и не ломаются. Это хорошо для вашего проекта. Благодаря качеству сервера Intel минимизируется риск сбоев.</p>,
        uz: <p>Bizdan ijaraga olingan Intel serverlari barqaror ishlaydi va buzilmaydi. Bu sizning loyihangiz uchun yaxshi. Intel serverining sifati tufayli ishdan chiqish xavfi minimallashtiriladi.</p>,
        en: <p>Intel servers rented from us work stably and do not break down. This is good for your project. Thanks to the quality of the Intel server, the risk of failure is minimized.</p>,
      },
      icon: serversIcon,
    },
    {
      title: { ru: "Удобные планы и настройки.", uz: "Qulay rejalar va sozlamalar.", en: "Convenient plans and settings." },
      description: {
        ru: <p>Мы предлагаем разные планы и настройки серверов. При аренде серверов Intel вы сможете выбрать то, что вам нужно.</p>,
        uz: <p>Biz turli xil rejalar va server sozlamalarini taklif qilamiz. Intel serverlarini ijaraga olayotganda siz o'zingizga kerakli narsani tanlashingiz mumkin.</p>,
        en: <p>We offer different plans and server settings. When renting Intel servers, you can choose what you need.</p>,
      },
      icon: lesssonIcon,
    },
    {
      title: {
        ru: "Поддержка 24/7.",
        uz: "24/7 qo'llab-quvvatlash.",
        en: "Support 24/7.",
      },
      description: {
        ru: <p>У нас есть команда, которая помогает круглосуточно. Вы всегда можете получить удаленную помощь с сервером или арендой.</p>,
        uz: <p>Bizda kechayu kunduz yordam beradigan jamoamiz bor. Siz har doim server yoki ijara bo'yicha masofaviy yordam olishingiz mumkin.</p>,
        en: <p>We have a team that helps around the clock. You can always get remote help with a server or rental.</p>,
      },
      icon: databaseIcon,
    },
    {
      title: { ru: "Сохранность конфиденциальности.", uz: "Maxfiylikni saqlash.", en: "Maintaining confidentiality." },
      description: {
        ru: <p>Ваши данные будут в безопасности на наших серверах Intel. Мы защитим их от любых угроз во время аренды.</p>,
        uz: <p>Sizning ma'lumotlaringiz bizning Intel serverlarimizda xavfsiz bo'ladi. Biz ijara vaqtida ularni har qanday tahdidlardan himoya qilamiz.</p>,
        en: <p>Your data will be safe on our Intel servers. We will protect them from any threats during the rental.</p>,
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Масштабируемость и гибкость.",
        uz: "Masshtablilik va moslashuvchanlik.",
        en: "Scalability and flexibility.",
      },
      description: {
        ru: <p>Наши серверы Intel можно масштабировать. Если ваш бизнес вырастет, мы поможем адаптироваться.<br />
        Арендованные серверы Intel экономят энергию. Это снижает ваши расходы.</p>,
        uz: <p>Bizning Intel serverlarimiz kengaytirilishi mumkin. Biznesingiz o'sishi bilan biz sizga moslashishga yordam beramiz.<br />
        Ijaraga olingan Intel serverlari energiyani tejaydi. Bu sizning xarajatlaringizni kamaytiradi.</p>,
        en: <p>Our Intel servers are scalable. As your business grows, we can help you adapt.<br />
        Rented Intel servers save energy. This reduces your costs.</p>,
      },
      icon: warrantyIcon,
    },
    {
      title: {
        ru: "Обновления и инновации.",
        uz: "Yangilanishlar va innovatsiyalar.",
        en: "Updates and innovations.",
      },
      description: {
        ru: (
          <p>
            Мы работаем с Intel и знаем все о новых серверных технологиях. Это делает вашу работу лучше.
          </p>
        ),
        uz: (
          <p>
            Biz Intel bilan ishlaymiz va yangi server texnologiyalari haqida hamma narsani bilamiz. Bu sizning ishingizni yaxshilaydi.
          </p>
        ),
        en: (
          <p>
            We work with Intel and know everything about new server technologies. It makes your work better.
          </p>
        ),
      },
      icon: infiniteIcon,
    },
  ];

  const tarif = [
    {
      title: { ru: "Platinum", uz: "Platinum", en: "Platinum" },
      // price: '150 000',
      prices: [
        {
          price: "150 000",
          dateOff: `1 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "450 000",
          dateOff: `3 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "900 000",
          dateOff: `6 ${langData.month[language]}`,
          // date: langData.month[language],
        },
        {
          price: "10% - 1 620 000",
          dateOff: `12 ${langData.month[language]}`,
          // date: langData.month[language],
        },
      ],
      cpu: 2,
      ram: 2,
      ssd: 25,
      net: 100,
      os: "Linux",
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13",
    },
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
      net: 100,
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
      net: 100,
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
      net: 100,
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
      net: 100,
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
      net: 100,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=61",
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
      net: 100,
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
      net: 100,
      link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=112",
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
      
      <ProductVDS />

      <div className={st.vds}>
        <div className={"bg_gray"}>
      
          <BreadCrumbs data={[{ name: 'Аренда серверов intel' }]} />
          <PageBreadcrumb links={[{ name: 'Аренда серверов intel' }]} />

          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            headTitle={langData.headTitle[language]}
            title="Тарифы"
            description={<p>{langData.dsc[language]}</p>}
            txt={<p>{langData.txt[language]}</p>}
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
                    <TarifCard index={index} tarif={item} show={show} setShow={setShow} language={language} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TarifMaket>
        </div>

        <WhyBlock title={langData.whyBlockTitle[language]} description={langData.whyBlockDescription[language]} content={whyBlock} language={language} />
        <ForIntel data={ForIntelVDSData} language={language} />
        <ForIntelTwo data={ForIntelTwoVDSData} language={language} />

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
        <ForDatacenter data={forDatacenterVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />
      </div>
    </>
  );
}
