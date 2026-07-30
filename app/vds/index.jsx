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
import TarifFeatures from "@/components/tarifFeatures";
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
import ForContract from "@/components/forContract";
import ForSupport from "@/components/forSupport";
import ForDatacenter from "@/components/forDatacenter";
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ServerHero from "@/components/serverHero";
import ManageFeatures from "@/components/manageFeatures";
import InfraChannel from "@/components/infraChannel";
import ProductVDS from "../../components/seo/productvds";
import Calculator from "@/components/calculator";
import ru from "@/pages/domains/ru";

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
      title: {
        ru: "1 выделенный IP-адрес",
        uz: "1 ta alohida server",
        en: "1 dedicated IP address",
      },
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
        Sizga kerak bo'lgan hamma narsa
        <br />
        Yuridik shaxslar uchun
      </>
    ),
    en: (
      <>
        Everything you need
        <br />
        For legal entities
      </>
    ),
  },
  desc: {
    ru: <>Работаем с юридическими лицами, ИП и бюджентными организациями.</>,
    uz: <>Biz yuridik shaxslar, yakka tartibdagi tadbirkorlar va byudjet tashkilotlari bilan ishlaymiz.</>,
    en: <>We work with legal entities, individual entrepreneurs and budgetary organizations.</>,
  },
  img: "/how-work-img.png",
  content: [
    {
      title: {
        ru: "Отчетные документы на почту или по ЭДО",
        uz: "Hujjatlarni pochta yoki EDI orqali hisobot berish",
        en: "Reporting documents by mail or via EDI",
      },
      link: '/help/edo',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="m10,23c0,.553-.447,1-1,1h-4c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h8c2.757,0,5,2.243,5,5v2c0,.553-.447,1-1,1s-1-.447-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h4c.553,0,1,.447,1,1ZM14,6c0-.553-.447-1-1-1H5c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1Zm-4,5c0-.553-.447-1-1-1h-4c-.553,0-1,.447-1,1s.447,1,1,1h4c.553,0,1-.447,1-1Zm-5,4c-.553,0-1,.447-1,1s.447,1,1,1h2c.553,0,1-.447,1-1s-.447-1-1-1h-2Zm19,2c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-3.192-1.241l-2.223,2.134c-.144.141-.379.144-.522.002l-1.131-1.108c-.396-.388-1.028-.382-1.414.014-.387.395-.381,1.027.014,1.414l1.132,1.109c.46.449,1.062.674,1.663.674s1.201-.225,1.653-.671l2.213-2.124c.398-.383.411-1.016.029-1.414-.383-.4-1.017-.411-1.414-.029Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Поддерживаем электронный документооборот",
        uz: "Biz elektron hujjat aylanishini qo'llab-quvvatlaymiz",
        en: "We support electronic document management",
      },
      link: '/help/electronic-document',
      img: (
        <svg
          id="Layer_1"
          height="512"
          viewBox="0 0 24 24"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m21 18a2.986 2.986 0 0 0 -2.077.844l-2.96-1.481a2.9 2.9 0 0 0 .037-.363 2.9 2.9 0 0 0 -.037-.363l2.96-1.481a2.994 2.994 0 1 0 -.923-2.156 2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481a2.9 2.9 0 0 0 -.037.363 3 3 0 1 0 3-3zm0-6a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-8 6a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm8 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm-9 0a1 1 0 0 1 -1 1h-5.321a5.841 5.841 0 0 1 -5.622-4.7 5.443 5.443 0 0 1 2.885-5.651 7.652 7.652 0 0 1 -.8-5.18 8 8 0 0 1 15.49-.842 1.09 1.09 0 0 0 .722.735 1 1 0 1 1 -.588 1.911 3.1 3.1 0 0 1 -2.044-2.053 6 6 0 1 0 -11.06 4.513 1.994 1.994 0 0 1 -.792 2.686 3.468 3.468 0 0 0 -1.835 3.6 3.807 3.807 0 0 0 3.644 2.981h5.321a1 1 0 0 1 1 1z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Договор оферты или индивидуальный договор",
        uz: "Taklif shartnomasi yoki individual kelishuv",
        en: "Offer agreement or individual agreement",
      },
      link: '/help/offer',
      img: (
        <svg
          id="Layer_1"
          height="512"
          viewBox="0 0 24 24"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m11 12a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm6-3a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm-9-3h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2zm12 13.444v3.833a.721.721 0 0 1 -1.231.51l-.769-.768-.769.768a.721.721 0 0 1 -1.231-.51v-3.833a3.987 3.987 0 0 1 2-7.444 3.939 3.939 0 0 1 1 .142v-7.142a3 3 0 0 0 -3-3h-8a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h5a1 1 0 0 1 0 2h-5a5.006 5.006 0 0 1 -5-5v-12a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v8.382a3.95 3.95 0 0 1 -1 6.062zm0-3.444a2 2 0 1 0 -2 2 2 2 0 0 0 2-2z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Безналичные платежи",
        uz: "Naqd pulsiz to'lovlar",
        en: "Non-cash payments",
      },
      link: '/help/non-cash',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M12,16c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm0-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm-7-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm13,3c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-13,3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm13,3c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-.999,5c-1.64,0-3.488-.528-5.275-1.039-1.654-.473-3.365-.961-4.725-.961-2.731,0-5.549,1.303-5.578,1.315l-1.423,.666V7.158c0-1.128,.618-2.148,1.615-2.663,1.325-.683,3.333-1.496,5.386-1.496,1.662,0,3.266,.535,4.816,1.051,1.463,.488,2.845,.949,4.183,.949,1.386,0,2.517-.362,3.426-.653,.302-.097,.577-.185,.828-.251,.898-.239,1.835-.048,2.573,.52,.746,.574,1.174,1.443,1.174,2.384v12.285l-.587,.266c-.131,.06-3.233,1.449-6.413,1.449Zm-10-4c1.64,0,3.488,.528,5.275,1.039,1.655,.473,3.365,.961,4.725,.961,2,0,4.03-.665,5-1.032V7c0-.316-.144-.607-.394-.799-.142-.109-.442-.276-.842-.171-.221,.059-.464,.137-.73,.222-.986,.315-2.338,.748-4.035,.748-1.662,0-3.266-.535-4.816-1.051-1.463-.488-2.845-.949-4.183-.949-1.739,0-3.547,.798-4.47,1.273-.328,.169-.532,.508-.532,.885v10.782c1.23-.427,3.103-.94,5.002-.94Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Работа через биржу xarid.uzex.uz",
        uz: "xarid.uzex.uz birjasi orqali ishlash",
        en: "Work through the exchange xarid.uzex.uz",
      },
      link: '/help/xarid',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Bold"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M18.5,3h-.642A4,4,0,0,0,14,0H10A4,4,0,0,0,6.142,3H5.5A5.506,5.506,0,0,0,0,8.5v10A5.506,5.506,0,0,0,5.5,24h13A5.507,5.507,0,0,0,24,18.5V8.5A5.507,5.507,0,0,0,18.5,3ZM5.5,6h13A2.5,2.5,0,0,1,21,8.5V11H3V8.5A2.5,2.5,0,0,1,5.5,6Zm13,15H5.5A2.5,2.5,0,0,1,3,18.5V14h7a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2h7v4.5A2.5,2.5,0,0,1,18.5,21Z" />
        </svg>
      ),
    },
  ],
};

export const forSupportVDSData = {
  title: {
    ru: <>Отзывчивая поддержка 24/7</>,
    uz: <>24/7 javob beruvchi qo'llab-quvvatlash</>,
    en: <>Responsive support 24/7</>,
  },
  desc: {
    ru: (
      <>
        Служба поддержки быстро поможет с любым вопросом по хостингу. 80% заявок
        решается за 1 час. Компетентные и дружелюбные специалисты разберутся
        даже с самой сложной ситуацией.
        <br />
        <br />
        Обширная База знаний со статьями и видеоинструкциями поможет разобраться
        с услугой самостоятельно.
      </>
    ),
    uz: ( 
      <>
        Qo'llab-quvvatlash jamoasi har qanday hosting savolida sizga tezda yordam beradi. Ilovalarning 80%
        1 soat ichida hal qilinadi. Vakolatli va do'stona mutaxassislar buni hal qilishadi
        hatto eng qiyin vaziyatda ham.
        <br />
        <br />
        Maqolalar va video ko'rsatmalarga ega bo'lgan keng bilimlar bazasi buni tushunishga yordam beradi
        xizmat bilan o'zingiz.
      </>
    ),
    en:  ( 
      <>
        The support service will quickly help with any question about hosting. 80% of requests
        are resolved within 1 hour. Competent and friendly specialists will deal
        with even the most difficult situation.
        <br />
        <br />
        An extensive Knowledge Base with articles and video instructions will help you deal
        with the service yourself.
      </>
    ),
  },
  img: "/intro-img.png",
  content: [
    {
      title: { ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge Base" },
      link: '/help',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="m22,0h-10.5c-1.93,0-3.5,1.57-3.5,3.5v12c0,1.93,1.57,3.5,3.5,3.5h12.5V2c0-1.103-.897-2-2-2Zm-10.5,2h10.5v10h-10.5c-.536,0-1.045.122-1.5.338V3.5c0-.827.673-1.5,1.5-1.5Zm0,15c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h10.5v3h-10.5Zm2.5,4h2v3H3.5c-1.93,0-3.5-1.57-3.5-3.5v-12c0-1.93,1.57-3.5,3.5-3.5h2.5v2h-2.5c-.827,0-1.5.673-1.5,1.5v8.838c.455-.217.964-.338,1.5-.338h2.713c.211.741.569,1.421,1.048,2h-3.761c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5h10.5v-1Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Видеосправка",
        uz: "Video yordam",
        en: "Video reference",
      },
      link: 'https://www.youtube.com/@airnetuz',
      img: (
        <svg
          id="Layer_1"
          height="512"
          viewBox="0 0 24 24"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m19 24h-14a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1 -5 5zm-14-22a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm4.342 15.005a2.368 2.368 0 0 1 -1.186-.323 2.313 2.313 0 0 1 -1.164-2.021v-5.322a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1 -1.101.289zm-.025-8a.314.314 0 0 0 -.157.042.327.327 0 0 0 -.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0 -.169-.292l-5.274-2.635a.462.462 0 0 0 -.228-.068z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Чат поддержки",
        uz: "Qo'llab-quvvatlash chat",
        en: "Support chat",
      },
      link: 'https://t.me/airnetuzb',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Тикет-система",
        uz: "Chipta tizimi",
        en: "Ticket system",
      },
      link: 'https://billing.airnet.uz/billing.php?do=tickets',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M16,0H8A5.006,5.006,0,0,0,3,5V23a1,1,0,0,0,1.564.825L6.67,22.386l2.106,1.439a1,1,0,0,0,1.13,0l2.1-1.439,2.1,1.439a1,1,0,0,0,1.131,0l2.1-1.438,2.1,1.437A1,1,0,0,0,21,23V5A5.006,5.006,0,0,0,16,0Zm3,21.1-1.1-.752a1,1,0,0,0-1.132,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.131,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.129,0L5,21.1V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z" />
          <rect x="7" y="8" width="10" height="2" rx="1" />
          <rect x="7" y="12" width="8" height="2" rx="1" />
        </svg>
      ),
    },
  ],
};

export const forDatacenterVDSData = {
  title: {
    ru: <>Дата-центр AIRNET</>,
    uz: <>AIRNET ma'lumotlar markazi</>,
    en: <>AIRNET Data Center</>,
  },
  desc: {
    ru: (
      <>
        Охраняемый ЦОД находится в <strong>Ташкенте</strong> и соответсвует
        международным стандартам – <strong>TIER III</strong> (АК Узтелеком)
        <br />
        <br />
        ЦОД оборудован по стандартам повышенной надежности. Имеет систему
        видеоконтроля, пожаротушения, бесперебойного питания.
      </>
    ),
    uz: (
      <>
        Xavfsiz ma'lumotlar markazi<strong>Toshkent</strong>da joylashgan va unga mos keladi
        xalqaro standartlar -<strong>TIER III</strong>(AK Uztelecom)
        <br />
        <br />
        Ma'lumotlar markazi yuqori ishonchlilik standartlari bilan jihozlangan. Tizimi bor
        video monitoring, yong'in o'chirish, uzluksiz elektr ta'minoti.
      </>
    ),
    en: (
      <>
        The protected data center is located in <strong>Tashkent</strong> and complies with international standards - <strong>TIER III</strong> (Uztelecom JSC)
        <br />
        <br />
        The data center is equipped according to high reliability standards. It has a video surveillance system, fire extinguishing, uninterruptible power supply.
      </>
    ),
  },
  img: "/ddos-img.png",
  count: "99,98%",
  text: {
    ru: <>Средний uptime на наших серверах</>,
    uz: <>Serverlarimizdagi o'rtacha ish vaqti</>,
    en: <>Average uptime on our servers</>,
  },
  // text: "Средний uptime на наших серверах",
  count2: "0,2 сек",
  text2: {
    ru: <>Среднее время загрузки сайтов на наших серверах</>,
    uz: <>Bizning serverlarimizda veb-saytlarni o'rtacha yuklash vaqti</>,
    en: <>Average loading time of websites on our servers</>,
  },
  count3: "18 000 +",
  text3: {
    ru: <>Доменов размещено на нашей площадке</>,
    uz: <>Bizning platformamizda joylashtirilgan domenlar</>,
    en: <>Domains hosted on our platform</>,
  },
  content: [
    {
      title: { ru: "TIER III", uz: "TIER III", en: "TIER III" },
      img: (
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0d5446"><path d="M120-160v-152h720v152H120Zm66.67-38.67h74.66v-74.66h-74.66v74.66ZM120-648v-152h720v152H120Zm66.67-38.67h74.66v-74.66h-74.66v74.66ZM120-404v-152h720v152H120Zm66.67-38.67h74.66v-74.66h-74.66v74.66Z"/></svg>
      ),
    },
  ],
};

export const forContractArticlesData = {
  title: {
    ru: <>Полезные статьи</>,
    uz: <>Foydali maqolalar</>,
    en: <>Useful articles</>,
  },
  desc: { ru: "", uz: "", en: "" },
  img: "/sitepad-img.png",
  content: [
    {
      title: {
        ru: "Необходимые навыки для работы с VDS",
        uz: "VDS bilan ishlash uchun zarur bo'lgan ko'nikmalar",
        en: "Necessary skills for working with VDS",
      },
      link: '/help/vds/neobhodimye-navyki-dlya-raboty-s-vds',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Смена тарифного плана на VDS",
        uz: "Tarif rejasini VDS ga o'zgartirish",
        en: "Change tariff plan to VDS",
      },
      link: '/help/vds/smena-tarifnogo-plana-na-vds',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Как долго хранятся учётные записи VDS?",
        uz: "VDS hisoblari qancha vaqt saqlanadi?",
        en: "How long are VDS accounts stored?",
      },
      link: '/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Восстановление root пароля от VDS",
        uz: "VDS dan ildiz parolini tiklash",
        en: "Recovering root password from VDS",
      },
      link: '/help/vds/vosstanovlenie-root-parolya-ot-vds',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Перенос аккаунта на VDS",
        uz: "Hisobingiz VDS-ga o'tkazilmoqda",
        en: "Transferring an account to VDS",
      },
      link: '/help/vds/perenos-akkaunta-na-vds',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Преимущества VDS и VPS-серверов",
        uz: "VDS va VPS serverlarining afzalliklari",
        en: "Advantages of VDS and VPS servers",
      },
      link: '/help/vds/preimushhestva-vds-i-vps-serverov',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Подключиться к выделенному серверу",
        uz: "Maxsus serverga ulaning",
        en: "Connect to a dedicated server",
      },
      link: '/help/vds/connect-to-server',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Управлять сервером через VNC-консоль",
        uz: "Serverni VNC konsoli orqali boshqaring",
        en: "Manage the server via VNC console",
      },
      link: '/help/vds/manage-server-vnc',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Резервное копирование выделенных серверов",
        uz: "Maxsus server zahira nusxasi",
        en: "Dedicated Server Backup",
      },
      link: '/help/vds/backups-server',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
    {
      title: {
        ru: "Развернуть виртуальную машину с Windows Server",
        uz: "Windows Server bilan virtual mashinani o'rnating",
        en: "Deploy a virtual machine with Windows Server",
      },
      link: '/help/vds/windows',
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M24,11.247A12.012,12.012,0,1,0,12.017,24H19a5.005,5.005,0,0,0,5-5V11.247ZM22,19a3,3,0,0,1-3,3H12.017a10.041,10.041,0,0,1-7.476-3.343,9.917,9.917,0,0,1-2.476-7.814,10.043,10.043,0,0,1,8.656-8.761A10.564,10.564,0,0,1,12.021,2,9.921,9.921,0,0,1,18.4,4.3,10.041,10.041,0,0,1,22,11.342Z" />
          <path d="M8,9h4a1,1,0,0,0,0-2H8A1,1,0,0,0,8,9Z" />
          <path d="M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
          <path d="M16,15H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
        </svg>
      ),
    },
  ],
};

export const breadCrumbsVds = [
  {
    name: {
      ru: "Оптимальные VDS/VPS сервера",
      uz: "Optimal VDS/VPS serverlari",
      en: "Optimal VDS/VPS servers",
    },
    link: {
      ru: "/vds",
      uz: "/uz/vds",
      en: "/en/vds",
    },
  },
];

export default function VDS({ language }) {
  const [show, setShow] = useState(-1);
  const [period, setPeriod] = useState(0);
  const langData = {
    seo: {
      ru: "Виртуальный сервер (VPS и VDS), аренда в Узбекистане",
      uz: "Virtual server (VPS va VDS), O'zbekistonda ijaraga",
      en: "Virtual server (VPS and VDS), rent in Uzbekistan",
    },
    desc: {
      ru: "Аренда серверов VPS/VDS - ⚡от 200 000 сум. Мгновенная активация ✔️Выделенный VPS-сервер в Узбекистане ✔️Тестовый период ✔️Установка ОС",
      uz: "VPS/VDS serverlar ijarasi - ⚡200 000 so'mdan. Bir zumda faollashtirish ✔️O'zbekistonda maxsus VPS server ✔️Sinov muddati ✔️OTni o'rnatish",
      en: "Rent of VPS/VDS servers - ⚡from 200,000 sum. Instant activation ✔️Dedicated VPS server in Uzbekistan ✔️Test period ✔️OS installation",
    },
    whyBlockTitle: {
      ru: "Преимущества",
      uz: "Afzalliklar",
      en: "Advantages",
    },
    headTitle: {
      ru: "VDS/VPS — сервера на базе быстрых SSD-дисков",
      uz: "VDS / VPS - tezkor SSD drayverlarga asoslangan serverlar",
      en: "VDS/VPS - servers based on fast SSD drives",
    },
    headTitle2: {
      ru: "Мощные VDS/VPS — сервера на базе VMware виртуализации с быстрыми SSD-дисками",
      uz: "Kuchli VDS/VPS - serveri tez SSD drayvlar bilan VMware-ga asoslangan virtualizatsiya",
      en: "Powerful VDS/VPS servers VMware based virtualization with fast SSDs",
    },
    headTitle3: {
      ru: "Бюджетные VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Byudjet VDS/VPS | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Budget VDS/VPS | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    headTitleC: {
      ru: "Собери свой виртуальный сервер на базе быстрых SSD-дисков",
      uz: "Tez SSD drayverlarga asoslangan shaxsiy virtual serveringiz",
      en: "Your own virtual server based on fast SSD drives",
    },
    dscC: {
      ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
      uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps",
      en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at a speed of 1 Gbps",
    },
    // dsc: {
    //   ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
    //   uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps",
    //   en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at a speed of 1 Gbps",
    // },
    dsc: {
      ru: "Сервера в Узбекистане (Ташкент)",
      uz: "O'zbekistondagi serverlar (Toshkent)",
      en: "Servers in Uzbekistan (Tashkent)",
    },
    dsc2: {
      ru: "Подключение к TAS-IX",
      uz: "TAS-IX ga ulanmoqda",
      en: "Connecting to TAS-IX",
    },
    dsc3: {
      ru: "Скорость до 1 Гбит/с",
      uz: "1 Gbit/s gacha tezlik",
      en: "Speed ​​up to 1 Gbps",
    },
    txt: {
      ru: "Тариф",
      uz: "Tarif",
      en: "Tariff",
    },
    installNote: {
      ru: (
        <>
          <p><strong>Срок установки</strong> — от 30 минут до 2 рабочих дней после оплаты, в зависимости от загрузки.</p>
          <p>Среднее время активации — <strong>1–2 часа</strong>. Срок действия услуги начинается с момента активации.</p>
        </>
      ),
      uz: (
        <>
          <p><strong>O'rnatish muddati</strong> — to'lovdan so'ng 30 daqiqadan 2 ish kunigacha, yuklamaga qarab.</p>
          <p>O'rtacha faollashtirish vaqti — <strong>1–2 soat</strong>. Xizmatning amal qilish muddati faollashtirilgan paytdan boshlanadi.</p>
        </>
      ),
      en: (
        <>
          <p><strong>Installation time</strong> — from 30 minutes to 2 business days after payment, depending on the load.</p>
          <p>Average activation time — <strong>1–2 hours</strong>. The service term begins from the moment of activation.</p>
        </>
      ),
    },
    faqTitle: {
      ru: "Часто задаваемые вопросы",
      uz: "Ko'p so'raladigan savollar",
      en: "FAQ",
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
                <td>Unlim 250M</td>
                <td>250 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>Бесплатно</td>
              </tr>
              {/* <tr>
                <td>Unlim 200M</td>
                <td>200 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>2 500 000 сум/мес.</td>
              </tr> */}
              <tr>
                <td>Unlim 350M</td>
                <td>350 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>4 000 000 сум/мес.</td>
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
                <td>Unlim 250M</td>
                <td>250 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>Tekin</td>
              </tr>
              {/* <tr>
                <td>Unlim 200M</td>
                <td>200 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>2 500 000 so'm/oy.</td>
              </tr> */}
              <tr>
                <td>Unlim 350M</td>
                <td>350 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>4 000 000 so'm/oy.</td>
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
                <td>Unlim 250M</td>
                <td>250 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>Free</td>
              </tr>
              {/* <tr>
                <td>Unlim 200M</td>
                <td>200 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>2 500 000 sum/mon.</td>
              </tr> */}
              <tr>
                <td>Unlim 350M</td>
                <td>350 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>4 000 000 sum/mon.</td>
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
        ru: "Что такое VDS/VPS сервер?",
        uz: "VDS/VPS server nima?",
        en: "What is a VDS/VPS server?",
      },
      description: {
        ru: (
          <>
            <p>
              Аббревиатуры VPS и VDS можно назвать синонимичными. В первом
              случае речь идет о виртуальных частных серверах, во втором – о
              выделенных. Назначение идентично – они используются для хранения
              информационных массивов, размещения сайтов, независимо от
              спецификации, от коммерческих, интернет-магазинов, до
              информационных.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            VPS va VDS qisqartmalarini sinonim deb atash mumkin. Birinchisida
            Bu holda biz virtual xususiy serverlar haqida gapiramiz, ikkinchi holatda biz gaplashamiz
            ajratilgan. Maqsad bir xil - ular saqlash uchun ishlatiladi
            axborot massivlari, veb-saytlarni joylashtirish, qat'i nazar
            texnik xususiyatlar, tijorat, onlayn-do'konlardan tortib
            axborot.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              The abbreviations VPS and VDS can be called synonymous. In the first case, we are talking about virtual private servers, in the second - about dedicated ones. The purpose is identical - they are used to store information arrays, host sites, regardless of the specification, from commercial, online stores, to informational ones.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какие преимущества аренды VPS/VDS серверов?",
        uz: "VPS/VDS serverlarini ijaraga olishning qanday afzalliklari bor?",
        en: "What are the advantages of renting VPS/VDS servers?",
      },
      description: {
        ru: (
          <>
            <p>
              Аренда – оптимальный вариант с точки зрения оптимизации расходов.
              Физический сервер, арендованный или собственный, требует больших
              вложений в покупку оборудования, усилий, направленных на
              поддержание его функциональности, эффективности. С виртуальным
              аналогом все гораздо проще: покупать ничего не нужно, достаточно
              оплачивать исключительно используемые мощности. Специалисты нашей
              компании обеспечат комплексную поддержку, помогут в решении
              проблем, настройке.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Xarajatlarni optimallashtirish nuqtai nazaridan ijaraga olish eng yaxshi variant hisoblanadi. 
            Ijaraga olingan yoki egalik qilingan jismoniy server ko'p narsani talab qiladi
            uskunalar sotib olishga investitsiyalar, sa'y-harakatlarga qaratilgan
            uning funksionalligi va samaradorligini saqlab qolish. Virtual bilan
            analog bilan hamma narsa ancha sodda: siz hech narsa sotib olishingiz shart emas, bu etarli
            faqat foydalanilgan quvvat uchun to'lash. Bizning mutaxassislarimiz
            kompaniyalar har tomonlama yordam beradi va hal qilishda yordam beradi
            muammolar, sozlash.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Renting is the best option in terms of cost optimization.
            A physical server, rented or owned, requires large investments in the purchase of equipment, efforts aimed at
            maintaining its functionality and efficiency. With a virtual
            analogue, everything is much simpler: you do not need to buy anything, you only need to pay for the
            capacity used. The specialists of our company will provide comprehensive support, help in solving
            problems, setting up.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Можно ли изменить тарифный план после аренды?",
        uz: "Ijaraga olgandan keyin tarif rejasini o'zgartirish mumkinmi?",
        en: "Is it possible to change the tariff plan after renting?",
      },
      description: {
        ru: (
          <>
            <p>
              Да, это вполне допустимо. Можно изменить конфигурацию,
              скорректировать вычислительную мощность, получить дополнительный
              объем SSD для хранения данных. Единственное условие – переход на
              более высокий уровень.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Ha, bu juda maqbuldir. Siz konfiguratsiyani o'zgartirishingiz mumkin,
              hisoblash quvvatini sozlang, qo'shimcha oling
              SSD xotira hajmi. Yagona shart - bu o'tish
              yuqori daraja.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              Yes, it is quite possible. You can change the configuration, adjust the computing power, get additional SSD storage. The only condition is to move to a higher level.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какие операционные системы поддерживаются на VPS/VDS серверах?",
        uz: "VPS/VDS serverlarida qanday operatsion tizimlar qo'llab-quvvatlanadi?",
        en: "What operating systems are supported on VPS/VDS servers?",
      },
      description: {
        ru: (
          <>
            <p>
              Мы предлагаем как бесплатные, так и платные решения. Разнообразие
              первых велико: Debian, Alma, Ubuntu и другие. Основная платная ОС
              – Microsoft Windows Server, для оценки ее преимуществ, определения
              рациональности покупки можно воспользоваться пробным 180-дневным
              периодом.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Biz bepul va pullik echimlarni taklif qilamiz. Turli xillik
              Birinchilari ajoyib: Debian, Alma, Ubuntu va boshqalar. Asosiy pullik OS
              – Microsoft Windows Server, uning afzalliklarini baholash uchun, aniqlash
              Xaridni yanada oqilona qilish uchun siz 180 kunlik sinovdan foydalanishingiz mumkin
              davr.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              We offer both free and paid solutions. The variety of the former is great: Debian, Alma, Ubuntu and others. The main paid OS is Microsoft Windows Server, to evaluate its advantages, to determine the rationality of the purchase, you can use the 180-day trial period.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Можно ли установить на VPS и VDS свой образ?",
        uz: "VPS va VDS da o'z rasmingizni o'rnatish mumkinmi?",
        en: "Is it possible to install your own image on VPS and VDS?",
      },
      description: {
        ru: (
          <>
            <p>
              Да. Для этого необходимо создать образ сервера и его отправка
              нашим специалистам. Отправить сообщение с соответствующим запросом
              можно, воспользовавшись встроенным чатом на сайте. Мы
              самостоятельно выполним все необходимые конвертации для запуска.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Ha. Buning uchun siz server tasvirini yaratishingiz va uni yuborishingiz kerak
              mutaxassislarimizga. Tegishli so'rov bilan xabar yuboring
              Siz veb-saytdagi o'rnatilgan chatdan foydalanishingiz mumkin. Biz
              Biz ishga tushirish uchun barcha kerakli konvertatsiyalarni o'zimiz amalga oshiramiz.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              Yes. To do this, you need to create a server image and send it to our specialists. You can send a message with the corresponding request using the built-in chat on the site. We will independently perform all the necessary conversions for launch.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Для чего нужны виртуальные серверы?",
        uz: "Virtual serverlar nima uchun ishlatiladi?",
        en: "What are virtual servers used for?",
      },
      description: {
        ru: (
          <>
            <p>
              Виртуальный сервер может использоваться для размещения различных
              сайтов, интернет-магазинов, площадок с объявлениями, новостных,
              информационных порталов, хранения данных. По мере увеличения
              потребностей проекта, расширения сайта, можно увеличивать
              мощность, переходить на более высокие тарифные планы. Ограничения:
              игровые серверы и сайты с видео-контентом. Мы не приветствуем
              использование наших VPS для рассылки спама, запрещаем – для
              действий, нарушающих законодательство!
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Virtual server turli xil serverlarni joylashtirish uchun ishlatilishi mumkin
              veb-saytlar, onlayn do'konlar, e'lonlar saytlari, yangiliklar,
              axborot portallari, ma'lumotlarni saqlash. Oshgani sayin
              loyihaning ehtiyojlari, saytni kengaytirish, oshirish mumkin
              quvvat, yuqori tarif rejalariga o'ting. Cheklovlar:
              o'yin serverlari va video kontentga ega saytlar. Xush kelibsiz
              Biz spam yuborish uchun VPS-dan foydalanishni taqiqlaymiz - uchun
              qonunni buzadigan harakatlar!
            </p>
          </>
        ),
        en: (
          <>
            <p>
              A virtual server can be used to host various
              sites, online stores, classifieds sites, news,
              information portals, data storage. As the
              needs of the project increase, the site expands, you can increase
              power, switch to higher tariff plans. Restrictions:
              game servers and sites with video content. We do not welcome
              using our VPS for sending spam, we prohibit - for
              actions that violate the law!
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Есть ли возможность тестирования сервера перед арендой?",
        uz: "Serverni ijaraga olishdan oldin sinab ko'rish mumkinmi?",
        en: "Is it possible to test the server before renting?",
      },
      description: {
        ru: (
          <>
            <p>Аренда не предполагает бесплатного периода использования VPS.</p>
          </>
        ),
        uz: (
          <>
            <p>Ijara VPS-dan foydalanishning bepul davrini o'z ichiga olmaydi.</p>
          </>
        ),
        en: (
          <>
            <p>The rental does not include a free period of VPS use.</p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какие дополнительные услуги доступны?",
        uz: "Qanday qo'shimcha xizmatlar mavjud?",
        en: "What additional services are available?",
      },
      description: {
        ru: (
          <>
            <p>
              При необходимости мы выполним резервирование виртуального сервера,
              создадим копии, позволяющие восстановить все данные при
              критическом сбое. Это исключает потерю ценной информации,
              обеспечивает общую надежность сервера. Также доступны услуги
              профессионального администрирования, переноса сайта с физического
              сервера, обновления PHP, MySQL, защиты от DDoS-атак и многие
              другие!
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Agar kerak bo'lsa, biz virtual server zahirasini amalga oshiramiz,
              qachon barcha ma'lumotlarni qayta tiklashga imkon beradigan nusxalarni yaratamiz
              kritik muvaffaqiyatsizlik. Bu qimmatli ma'lumotlarning yo'qolishini yo'q qiladi,
              serverning umumiy ishonchliligini ta'minlaydi. Xizmatlar ham mavjud
              professional ma'muriyat, saytni jismoniydan o'tkazish
              serverlar, PHP yangilanishlari, MySQL, DDoS himoyasi va boshqalar
              boshqa!
            </p>
          </>
        ),
        en: (
          <>
            <p>
              If necessary, we will perform a virtual server backup,
              create copies that allow you to restore all data in the event of a critical failure. This eliminates the loss of valuable information,
              ensures the overall reliability of the server. Also available are professional administration services, website transfer from a physical
              server, PHP, MySQL updates, protection from DDoS attacks and many
              others!
            </p>
          </>
        ),
      },
    },
  ];

  const whyBlock = [
    {
      title: {
        ru: "Защита и резервирование данных",
        uz: "Ma'lumotlarni himoya qilish va zaxiralash",
        en: "Data protection and backup",
      },
      description: {
        ru: (
          <>
            <p>
              Серверы защищены от DDoS-атак на уровне сети.<br />
              Резервное копирование доступно по запросу — вы сохраняете контроль над своими данными и снижаете риски потерь.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Bizning serverlarimiz tarmoq darajasida DDoS hujumlaridan himoyalangan.<br />
              Zaxira nusxalari so'rov bo'yicha mavjud bo'lib, bu sizga ma'lumotlaringizni nazorat qilish va yo'qotish xavfini kamaytirish imkonini beradi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              Our servers are protected from DDoS attacks at the network level.<br />
              Backups are available upon request, allowing you to maintain control over your data and reduce the risk of loss.
            </p>
          </>
        ),
      },
      icon: clockIcon,
    },
    {
      title: { ru: "Гарантии и безопасность", uz: "Kafolat va xavfsizlik", en: "Guarantees and security" },
      description: {
        ru: (
          <p>
              Мы уверены в качестве услуг — предоставляем 100% возврат средств в течение 7 дней.
              Вы тестируете сервис без риска.
          </p>
        ),
        uz: (
          <p>
            Biz xizmatlarimiz sifatiga aminmiz — 7 kun ichida 100% pulni qaytarib berish kafolatini taqdim etamiz.
            Siz xizmatni xavfsiz sinab ko'rishingiz mumkin.
          </p>
        ),
        en: (
          <p>
              We're confident in the quality of our services—we offer a 100% money-back guarantee within 7 days.
              You can test the service risk-free.
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Круглосуточная поддержка",
        uz: "24/7 qo'llab-quvvatlash",
        en: "24/7 support",
      },
      description: {
        ru: (
          <>
            <p>
              Техническая команда доступна 24/7.
              Оперативно помогаем с настройкой, решением инцидентов и консультациями по инфраструктуре.
            </p>
            <button>
              <Link href={checkLang(language) + LINKS.CONTACTS}>
                <a>Наши контакты</a>
              </Link>
            </button>
          </>
        ),
        uz: (
          <>
            <p>
              Bizning texnik guruhimiz 24/7 xizmatingizda.
              Biz o'rnatish, noxush hodisalarni bartaraf etish va infratuzilma bo'yicha maslahatlar berishda tezkor yordam ko'rsatamiz.
            </p>
            <button>
              <Link href={checkLang(language) + LINKS.CONTACTS}>
                <a>Bizning telefon raqamlar</a>
              </Link>
            </button>
          </>
        ),
        en: (
          <>
            <p>
              Our technical team is available 24/7.
              We provide prompt assistance with setup, incident resolution, and infrastructure consultations.
            </p>
            <button>
              <Link href={checkLang(language) + LINKS.CONTACTS}>
                <a>Our contacts</a>
              </Link>
            </button>
          </>
        ),
      },
      icon: supportIcon,
    },
    {
      title: {
        ru: "Гибкая конфигурация",
        uz: "Moslashuvchan konfiguratsiya",
        en: "Flexible configuration",
      },
      description: {
        ru: (
          <p>
            Масштабируйте ресурсы под задачи проекта:<br />
            увеличивайте CPU, RAM и объём диска без сложных миграций и простоев.
          </p>
        ),
        uz: (
          <p>
            Loyiha ehtiyojlarini qondirish uchun resurslarni masshtablash:<br />
            Murakkab migratsiyalar yoki ishlamay qolishlarsiz protsessor, operativ xotira va disk maydonini oshiring.
          </p>
        ),
        en: (
          <p>
            Scale resources to meet project needs:<br />
            Increase CPU, RAM, and disk space without complex migrations or downtime.
          </p>
        ),
      },
      icon: calendarIcon,
    },
    {
      title: {
        ru: "Управление через VNC",
        uz: "VNC orqali boshqarish",
        en: "Control via VNC",
      },
      description: {
        ru: (
          <p>
            Полный удалённый доступ к серверу через VNC.<br />
            Контроль на уровне консоли — независимо от состояния операционной системы.
          </p>
        ),
        uz: (
          <p>
            VNC orqali serverga to'liq masofaviy kirish.<br />
            Konsol darajasidagi boshqaruv – operatsion tizim holatidan qat'i nazar.
          </p>
        ),
        en: (
          <p>
            Full remote access to the server via VNC.<br />
            Console-level control – regardless of the operating system state.
          </p>
        ),
      },
      icon: warrantyIcon,
    },
    {
      title: {
        ru: "Безлимитный трафик",
        uz: "Cheksiz trafik",
        en: "Unlimited traffic",
      },
      description: {
        ru: (
          <p>
            Отсутствие ограничений на входящий и исходящий трафик.
            Стабильная работа сервисов при любой нагрузке и скорости канала до 250 Мбит/с*.<br />
            <span className="font-size-10">*не допускать 100% нагрузку на канал в течении длительного времени, для киносайтов и ТВ каналы по согласованию.</span>
          </p>
        ),
        uz: (
          <p>
            Kiruvchi va chiquvchi trafikka cheklovlar yo'q.
            Har qanday yuk ostida barqaror xizmat ko'rsatish va 250 Mbit/s gacha bo'lgan kanal tezligi*.<br />
            <span className="font-size-10">*uzoq vaqt davomida 100% kanal yuklanishidan saqlaning; kino saytlari va telekanallar uchun, iltimos, muhokama qiling.</span>
          </p>
        ),
        en: (
          <p>
            No restrictions on incoming and outgoing traffic.
            Stable service operation under any load and channel speeds up to 250 Mbps*.<br />
            <span className="font-size-10">*avoid 100% channel load for extended periods; for movie sites and TV channels, please discuss.</span>
          </p>
        ),
      },
      icon: infiniteIcon,
    },
  ];

  const tarif = [
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
  ];

  const tarif2 = [
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

  const tarif3 = [
    // {
    //   title: { ru: "Platinum", uz: "Platinum", en: "Platinum" },
          // workstxt: { ru: "", uz: "", en: "" },
    //   // price: '150 000',
    //   prices: [
    //     {
    //       price: "150 000",
    //       dateOff: `1 ${langData.month[language]}`,
    //       // date: langData.month[language],
    //     },
    //     {
    //       price: "450 000",
    //       dateOff: `3 ${langData.month[language]}`,
    //       // date: langData.month[language],
    //     },
    //     {
    //       price: "900 000",
    //       dateOff: `6 ${langData.month[language]}`,
    //       // date: langData.month[language],
    //     },
    //     {
    //       price: "10% - 1 620 000",
    //       dateOff: `12 ${langData.month[language]}`,
    //       // date: langData.month[language],
    //     },
    //   ],
    //   cpu: 2,
    //   ram: 2,
    //   ssd: 25,
    //   net: 250,
    //   os: "Linux",
    //   link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13",
    // },
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

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <>
      <SEO title={langData.seo[language]} desc={langData.desc[language]} />

      <ProductVDS />

      <div className={st.vds}>
        <div className={"bg_gray"}>
          {breadCrumbsVds && breadCrumbsVds.length ? (
            <>
              <BreadCrumbs data={breadCrumbsVds} language={language} />
              <PageBreadcrumb links={breadCrumbsVds} language={language} />
            </>
          ) : null}

          <ServerHero title={langData.headTitle[language]} language={language} />

          <div className={toggle === 1 ? "show-content" : "none"}>
            <TarifMaket
              // bgImg={'/servers-2.jpg'}
              headTitle={langData.headTitle3[language]}
              // title="Тарифы"
              // description={<p>{langData.dsc[language]}</p>}
              description={<TarifFeatures items={[langData.dsc[language], langData.dsc2[language], langData.dsc3[language]]} />}
              className="mt-0 px-0"
              endText={
                <div className={st.tarifNote}>
                  {langData.installNote[language]}
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
                {tarif3.map((item, index) => (
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

          <div className={toggle === 1 ? "show-content" : "none"}>
            <TarifMaket
              // bgImg={'/servers-2.jpg'}
              headTitle={langData.headTitle[language]}
              title="Тарифы"
              // description={<p>{langData.dsc[language]}</p>}
              description={<TarifFeatures items={[langData.dsc[language], langData.dsc2[language], langData.dsc3[language]]} />}
              className="mt-0 px-0"
              endText={
                <div className={st.tarifNote}>
                  {langData.installNote[language]}
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
          <div className={toggle === 1 ? "show-content" : "none"}>
            <TarifMaket
              // bgImg={'/servers-2.jpg'}
              headTitle={langData.headTitle2[language]}
              title="Тарифы"
              // description={<p>{langData.dsc[language]}</p>}
              description={<TarifFeatures items={[langData.dsc[language], langData.dsc2[language], langData.dsc3[language]]} />}
              className="mt-0 px-0"
              endText={
                <div className={st.tarifNote}>
                  {langData.installNote[language]}
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
                {tarif2.map((item, index) => (
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
        </div>

        <WhyBlock
          title={langData.whyBlockTitle[language]}
          content={whyBlock}
          language={language}
        />

        <a name="constructor"></a>
        <Container
          title={langData.headTitleC[language]}
          description={<p className="center">{langData.dscC[language]}</p>}
          clNTitle="text-center"
          className="pb-0"
        ></Container>
        <Calculator language={language} />

        <ForFreeBlock data={forFreeVDSData} language={language} />

        <AvailableOS language={language} />
        <InfraChannel language={language} />

        <FAQ
          faq={faq2}
          title={langData.faqTitle[language]}
          language={language}
        />

        <Howworks language={language} />

        <ManageFeatures language={language} />

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
