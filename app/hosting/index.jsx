import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import SEO from "@/components/seo";
import TarifCard2 from "@/components/tarifCard2";
import TarifMaket from "@/components/tarifMaket";
import { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import st from "./hosting.module.scss";
import ForFreeBlock from "@/components/forFreeBlock";
import WhyBlock from "@/components/whyBlock";
import { calendarIcon } from "shared/icons/calendarIcon";
import { supportIcon } from "shared/icons/supportIcon";
import { warningIcon } from "shared/icons/warningIcon";
import { checkLang } from "@/utils/checkLang";
import { clockIcon } from "shared/icons/clockIcon";
import { settingsIcon } from "shared/icons/settingsIcon";
import { presentIcon } from "shared/icons/presentIcon";
import Link from "next/link";
import { LINKS } from "@/components/requirements";
import AvailablePO from "@/components/availablePO";
import Reviews from "@/components/reviews";
import ForContract from "@/components/forContract";
import { forContractVDSData } from "../vds";
import ForSupport from "@/components/forSupport";
import { forSupportVDSData } from "../vds";
import ForDatacenter from "@/components/forDatacenter";
import { forDatacenterVDSData } from "../vds";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductCpanel from "../../components/seo/productcpanel"

export default function Hosting({ language }) {
  const [show, setShow] = useState(-1);

  const langData = {
    seoTitle: {
      ru: "Хостинг для сайта - купить виртуальный хостинг в Узбекистане, тарифы, цены",
      uz: "Veb-sayt hosting - O'zbekistonda virtual xosting sotib olish, tariflar, narxlar",
      en: "Website hosting - buy virtual hosting in Uzbekistan, tariffs, prices",
    },
    seoDesc: {
      ru: "Купить виртуальный хостинг для сайта - ⚡от 10000 сум. Дата центр в Ташкенте. Скорость в TAS-IX — 1 Gbps. ✔️ Мгновенная активация ✔️Безлимитный трафик",
      uz: "Veb-sayt uchun virtual xosting sotib oling - ⚡10 000 so'mdan. Toshkentdagi Data-markaz. TAS-IX da tezlik 1 Gbit/s. ✔️ Tezkor faollashtirish ✔️ Cheksiz trafik",
      en: "Buy virtual hosting for a website - ⚡from 10,000 sum. Data center in Tashkent. Speed ​​in TAS-IX is 1 Gbps. ✔️ Instant activation ✔️ Unlimited traffic",
    },
    whyBlockTitle: {
      ru: "Преимущества",
      uz: "Преимущества",
      en: "Преимущества",
    },
    tarifTitle: {
      ru: "Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте",
      uz: "Ommabop tariflar Toshkentda umumiy hosting Cpanel",
      en: "Popular tariffs Shared hosting Cpanel in Tashkent",
    },
    tarifDesc: {
      ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости до 1 Gbps",
      uz: "Bizning serverlarimiz O‘zbekiston hududida (Toshkent) TAS-IX tarmog‘ida 1 Gbit/s gacha tezlikda joylashgan.",
      en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at speeds up to 1 Gbps",
    },
    tarifEnd: {
      ru: "*При оплате за хостинг 12 месяцев!",
      uz: "*Xosting uchun 12 oy to'laganda!",
      en: "*When paying for hosting for 12 months!",
    },
    confTitle: {
      ru: "Ваш хостинг будет размещен на сервере с конфигурацией:",
      uz: "Sizning xostingingiz quyidagi konfiguratsiyaga ega serverda joylashtiriladi:",
      en: "Your hosting will be hosted on a server with the following configuration:",
    },
    wordpressTitle: {
      ru: "Быстрая установка Wordpress и популярных CMS в 1 клик!",
      uz: "1 marta bosishda Wordpress va mashhur CMS-ni tez o'rnatish!",
      en: "Quick installation of Wordpress and popular CMS in 1 click!",
    },
    wordpressDesc: {
      ru: (
        <>
          <p>Установка CMS-установщика в 1 клик</p>
          <p>
            Вашему вниманию предлагаются более <strong>100 БЕСПЛАТНЫХ</strong>
          </p>
          <p>CMS-установщиков различных категорий от Softaculous:</p>
        </>
      ),
      uz: (
        <>
          <p>Bir marta bosish bilan CMS oʻrnatuvchisi</p>
          <p>
            <strong>100 dan ortiq BEPUL</strong>
          </p>
          <p>Softaculous-dan turli toifadagi CMS o'rnatuvchilari:</p>
        </>
      ),
      en: (
        <>
          <p>One-click CMS installer</p>
          <p>
            More than <strong>100 FREE</strong>
          </p>
          <p>CMS installers of various categories from Softaculous:</p>
        </>
      ),
    },
    faqTitle: {
      ru: "Часто задаваемые вопросы",
      uz: "Ko'p so'raladigan savollar",
      en: "FAQ",
    },
    month: {
      ru: "мес.",
      uz: "oy",
      en: "mon.",
    },
  };

  const block = [
      {
        title: { ru: "Жесткие диски", uz: "Qattiq disklar", en: "Hard drives" },
        description: {
          ru: "12 x 1ТB SSD",
          uz: "12 x 1ТB SSD",
          en: "12 x 1ТB SSD",
        },
        img: "/hosting/ssd.png",
      },
      {
        title: { ru: "Оперативная память", uz: "Operativ xotira", en: "RAM" },
        description: {
          ru: "256 GB DDR4 ECC",
          uz: "256 GB DDR4 ECC",
          en: "256 GB DDR4 ECC",
        },
        img: "/hosting/ram.png",
      },
      {
        title: { ru: "Процессор", uz: "Protsessor", en: "CPU" },
        description: {
          ru: "2 x Intel Xeon",
          uz: "2 x Intel Xeon",
          en: "2 x Intel Xeon",
        },
        img: "/hosting/processor.png",
      },
      {
        title: { ru: "Массив RAID", uz: "RAID massivi", en: "RAID Array" },
        description: {
          ru: "Аппаратный RAID5",
          uz: "RAID5 apparati",
          en: "Hardware RAID5",
        },
        img: "/hosting/raid.png",
      },
    ],
    cms = [
      { ru: "Блоги", uz: "Bloglar", en: "Blogs" },
      { ru: "Порталы и CMS", uz: "Portallar va CMS", en: "Portals and CMS" },
      { ru: "Форумы", uz: "Forumlar", en: "Forums" },
      {
        ru: "Галереи изображений",
        uz: "Rasmlar galereyasi",
        en: "Image Galleries",
      },
      { ru: "Социальные сети", uz: "Ijtimoiy tarmoqlar", en: "Social media" },
      {
        ru: "Голосования и опросы",
        uz: "So'rovlar va so'rovlar",
        en: "Voting and Polls",
      },
      {
        ru: "Интернет-магазины",
        uz: "Internet do'konlari",
        en: "Internet stores",
      },
      { ru: "Файловые менеджеры", uz: "Fayl menejerlari", en: "File Managers" },
    ],
    checkedCircle = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
          fill="#006a4d"
        />
      </svg>
    ),
    tarif2 = [
      {
        title: { ru: "Старт", uz: "Start", en: "Start" },
        prices: [
          {
            price: "10 000",
            dateOff: `1 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "30 000",
            dateOff: `3 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "5% - 57 000",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 108 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: 250,
        sites: 5,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32",
      },
      {
        title: { ru: "Простой", uz: "Oddiy", en: "Simple" },
        // price: '15 000',
        prices: [
          {
            price: "15 000",
            dateOff: `1 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "45 000",
            dateOff: `3 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "5% - 85 500",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 162 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: 500,
        sites: 10,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31",
      },
      {
        title: { ru: "Стандарт", uz: "Standart", en: "Standart" },
        // price: '25 000',
        prices: [
          {
            price: "25 000",
            dateOff: `1 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "75 000",
            dateOff: `3 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "5% - 142 500",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 270 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: "1 000",
        sites: 15,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33",
      },
      {
        title: { ru: "Доступный", uz: "Hamyonbop", en: "Accessible" },
        // price: '60 000',
        prices: [
          {
            price: "60 000",
            dateOff: `1 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "180 000",
            dateOff: `3 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "5% - 342 000",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 648 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: "3 000",
        sites: 20,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34",
      },
      {
        title: { ru: "Оптимальный", uz: "Optimal", en: "Optimal" },
        // price: '90 000',
        prices: [
          {
            price: "90 000",
            dateOff: `1 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "270 000",
            dateOff: `3 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "5% - 513 000",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 972 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: "5 000",
        sites: "∞",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37",
      },
      {
        title: { ru: "Выгодный", uz: "Foydali", en: "Profitable" },
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
            price: "5% - 855 000",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 1 620 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: "10 000",
        sites: "∞",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
      },
      {
        title: { ru: "Офис", uz: "Ofis", en: "Office" },
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
            price: "5% - 1 425 000",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 2 700 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: "15 000",
        sites: "∞",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
      },
      {
        title: { ru: "Корпоративный", uz: "Korporativ", en: "Corporate" },
        // price: '350 000',
        prices: [
          {
            price: "350 000",
            dateOff: `1 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "1 050 000",
            dateOff: `3 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "5% - 1 995 000",
            dateOff: `6 ${langData.month[language]}`,
            // date: langData.month[language],
          },
          {
            price: "10% - 3 780 000",
            dateOff: `12 ${langData.month[language]}`,
            // date: langData.month[language],
          },
        ],
        ssd: "20 000",
        sites: "∞",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
      },
    ],
    faq = [
      {
        title: {
          ru: "Как скоро можно начать пользоваться услугой?",
          uz: "Xizmatdan qanchalik tez foydalanishni boshlashim mumkin?",
          en: "How soon can I start using the service?",
        },
        description: {
          ru: (
            <>
              <p>Пользовательский аккаунт открывается сразу после подачи заявки.</p>

              <p>Сразу после произведения оплаты, вы можете начать сразу же пользоваться услугой.</p>
            </>
          ),
          uz: (
            <>
              <p>Foydalanuvchi hisobi ariza topshirilgandan so‘ng darhol ochiladi.</p>

              <p>Toʻlovni amalga oshirganingizdan soʻng darhol xizmatdan foydalanishni boshlashingiz mumkin.</p>
            </>
          ),
          en: (
            <>
              <p>The user account is opened immediately after the application is submitted.</p>

              <p>Immediately after making the payment, you can start using the service immediately.</p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Возможно ли тестирование сайта без переноса домена?",
          uz: "Domenni o'tkazmasdan saytni sinab ko'rish mumkinmi?",
          en: "Is it possible to test a site without transferring a domain?",
        },
        description: {
          ru: (
            <>
              <p>
                Да. Домена можно не переносить в нашу систему но у домена долны быть прописаны наши DNS сервера которые
                после активации хостинга будут отправлены на ваш email.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Ha. Domenlarni bizning tizimimizga o'tkazib bo'lmaydi, lekin domenda DNS serverlarimiz ro'yxatdan o'tgan
                bo'lishi kerak, ular hosting faollashtirilgandan so'ng elektron pochtangizga yuboriladi.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                Yes. Domains can not be transferred to our system, but the domain must have our DNS servers registered,
                which, after hosting activation, will be sent to your email.
              </p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Могу ли я получить root-доступ или SSH-доступ на виртуальном хостинге Cpanel?",
          uz: "Cpanel umumiy hostingida root yoki SSH ruxsatini olsam bo'ladimi?",
          en: "Can I get root access or SSH access on cpanel shared hosting?",
        },
        description: {
          ru: (
            <>
              <p>
                Нет, root-доступ и SSH-доступ недоступен для планов виртуального хостинга на Cpanel. Если вам требуется
                root-доступ и SSH-доступ, мы рекомендуем вам приобрести виртуальный сервер.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Yo'q, cpanel umumiy hosting rejalari uchun ildizga kirish va SSH ruxsati mavjud emas. Agar siz ildizga
                kirish va SSHga kirishni talab qilsangiz, virtual server sotib olishingizni tavsiya qilamiz.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                No, root access and SSH access are not available for cpanel shared hosting plans. If you require root
                access and SSH access, we recommend that you purchase a virtual server.
              </p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Какая версия MySQL установлена на вашем хостинге?",
          uz: "Sizning hostingingizda MySQL-ning qaysi versiyasi o'rnatilgan?",
          en: "What version of MySQL is installed on your hosting?",
        },
        description: {
          ru: (
            <>
              <p>
                На хостинге установлена всегда последние версии MySQL и MariaDB. Всю необходимую информацию о сервере Вы
                можете уточнить у технической поддержки.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Xostingda har doim MySQL va MariaDB ning so'nggi versiyalari o'rnatilgan. Server haqida barcha kerakli
                ma'lumotlarni texnik yordamdan olishingiz mumkin.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                The hosting always has the latest versions of MySQL and MariaDB installed. You can get all the necessary
                information about the server from technical support.
              </p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Какие версии PHP доступны на вашем хостинге?",
          uz: "Xostingda PHP ning qanday versiyalari mavjud?",
          en: "What versions of PHP are available on your hosting?",
        },
        description: {
          ru: (
            <>
              <p>На хостинге доступны актуальные версии PHP от 7.3 до 8.2</p>
            </>
          ),
          uz: (
            <>
              <p>Xosting PHP ning 7.3 dan 8.2 gacha bo'lgan joriy versiyalarida mavjud</p>
            </>
          ),
          en: (
            <>
              <p>The hosting is available with current PHP versions from 7.3 to 8.2</p>
            </>
          ),
        },
      },
    ];

  const forFreeData = {
    title: {
      ru: "На всех тарифных планах",
      uz: "Barcha tarif rejalarida",
      en: "On all tariff plans",
    },
    img: "/hosting/unlim.png",
    content: [
      {
        title: {
          ru: (
            <p>
              <strong>Безлимитный трафик</strong> — никаких ограничений на соотношение входящего / исходящего трафика.
            </p>
          ),
          uz: (
            <p>
              <strong>Cheksiz trafik</strong> - kiruvchi / kirish nisbatida cheklovlar yo'q. chiquvchi trafik.
            </p>
          ),
          en: (
            <p>
              <strong>Unlimited traffic</strong> - no limits on the ratio of incoming / outgoing traffic.
            </p>
          ),
        },
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
            <path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z" />
          </svg>
        ),
      },
      {
        title: {
          ru: (
            <p>
              <strong>Скорость в Интернет</strong> — 100 Mbps
            </p>
          ),
          uz: (
            <p>
              <strong>Internet tezligi</strong> — 100 Mbit/s
            </p>
          ),
          en: (
            <p>
              <strong>Internet speed</strong> — 100 Mbps
            </p>
          ),
        },
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm32 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM256 408c-30.9 0-56-25.1-56-56s25.1-56 56-56c10.3 0 19.9 2.8 28.2 7.6l110.2-75.4c10.9-7.5 25.9-4.7 33.4 6.3s4.7 25.9-6.3 33.4L311.3 343.2c.4 2.9 .7 5.8 .7 8.8c0 30.9-25.1 56-56 56zM384 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM112 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
          </svg>
        ),
      },
      {
        title: {
          ru: (
            <p>
              <strong>Скорость в TAS-IX</strong> — 1 Gbps
            </p>
          ),
          uz: (
            <p>
              <strong>TAS-IX da tezlik</strong> — 1 Gbit/s
            </p>
          ),
          en: (
            <p>
              <strong>Speed in TAS-IX</strong> — 1 Gbps
            </p>
          ),
        },
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm32 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM256 408c-30.9 0-56-25.1-56-56s25.1-56 56-56c10.3 0 19.9 2.8 28.2 7.6l110.2-75.4c10.9-7.5 25.9-4.7 33.4 6.3s4.7 25.9-6.3 33.4L311.3 343.2c.4 2.9 .7 5.8 .7 8.8c0 30.9-25.1 56-56 56zM384 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM112 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
          </svg>
        ),
      },
      {
        title: {
          ru: (
            <p>
              <strong>Безлимитные FTP-аккаунты</strong> — для своего удобства работы с файлами, Вы можете создавать
              неограниченное количество FTP-аккаунтов, например, для каждого проекта - отдельный доступ.
            </p>
          ),
          uz: (
            <p>
              <strong>Cheksiz FTP hisoblari</strong> — fayllar bilan ishlash qulayligi uchun siz cheksiz miqdordagi FTP
              hisoblarini yaratishingiz mumkin, masalan, har bir loyiha uchun - alohida kirish.
            </p>
          ),
          en: (
            <p>
              <strong>Unlimited FTP accounts</strong> — for your convenience of working with files, you you can create
              an unlimited number of FTP accounts, for example, for each project - separate access.
            </p>
          ),
        },
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
            <path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z" />
          </svg>
        ),
      },
      {
        title: {
          ru: (
            <p>
              <strong>Без жестких ограничений ресурсов</strong> — у нас нет жестких лимитов аппаратных ресурсов. Если
              вдруг на Ваш сайт придет большое количество человек, то все они увидят Ваш сайт. Гарантировано посещение -
              2500 человек в сутки.
            </p>
          ),
          uz: (
            <p>
              <strong>Qattiq resurs cheklovlari yo'q</strong> - bizda apparat uchun qattiq cheklovlar yo'q resurslar.
              Agar to'satdan saytingizga juda ko'p odamlar kirsa, ular hammasi ko'radi Sizning veb-saytingiz.
              Kafolatlangan tashrif - kuniga 2500 kishi.
            </p>
          ),
          en: (
            <p>
              <strong>No hard resource limits</strong> - we don't have hard limits on hardware resources. If suddenly a
              large number of people come to your site, then they will all see Your website. Guaranteed visit - 2500
              people per day.
            </p>
          ),
        },
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 80c-8.8 0-16 7.2-16 16V258c5.1-1.3 10.5-2 16-2H448c5.5 0 10.9 .7 16 2V96c0-8.8-7.2-16-16-16H64zM48 320v96c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 320V96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V320v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
        ),
      },
    ],
  };

  const whyBlockHosting = [
    {
      title: { ru: "Мгновенная активация", uz: "Bir zumdayoq ulanish", en: "Instant activation" },
      description: {
        ru: (
          <>
            <p>Активация Cpanel хостинга выполняется мгновенно после оплаты счета.</p>
          </>
        ),
        uz: (
          <>
            <p>Cpanel hostingni faollashtirish hisob-faktura to'langanidan so'ng darhol amalga oshiriladi</p>
          </>
        ),
        en: (
          <>
            <p>Activation of cpanel hosting is performed instantly after payment of the invoice</p>
          </>
        ),
      },
      icon: clockIcon,
    },
    {
      title: { ru: "Запрещается", uz: "Taqiqlanadi", en: "Forbidden" },
      description: {
        ru: <p>Не предоставляется для <strong>игровых</strong> серверов и <strong>видео-контент</strong> сайтов! Для телеграм <strong>ботов!</strong></p>,
        uz: <p><strong>O'yin</strong> serverlari va <strong>video</strong> kontent saytlari uchun mavjud emas! <strong>Telegram</strong> botlari uchun!</p>,
        en: <p>Not available for <strong>game</strong> servers and <strong>video</strong> content sites! For telegram <strong>bots</strong>!</p>,
      },
      icon: warningIcon,
    },
    {
      title: { ru: "Поддержка круглосуточно", uz: "24/7 qo'llab quvvatlash", en: "Support 24/7" },
      description: {
        ru: (
          <>
            <p>
              В любое время суток, Вы можете к нам обратиться за помощью или советом, мы ответим максимально быстро.
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
              Kunning istalgan vaqtida yordam yoki maslahat uchun biz bilan bog'lanishingiz mumkin, biz imkon qadar
              tezroq javob beramiz .
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
              At any time of the day, you can contact us for help or advice, we will respond as quickly as possible.
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
      title: { ru: "Бесплатные SSL", uz: "Bepul SSL", en: "Free SSL" },
      description: {
        ru: <p>Обеспечьте вашему сайту защищённое HTTPS‑соединение с помощью бесплатного сертификата.</p>,
        uz: <p>Saytingizga bepul sertifikat bilan xavfsiz HTTPS ulanishini bering.</p>,
        en: <p>Give your site a secure HTTPS connection with a free certificate.</p>,
      },
      icon: calendarIcon,
    },
    {
      title: {
        ru: "Перенесем сайты сами",
        uz: "Saytlarni o'zimiz o'tkazamiz",
        en: "We will transfer the sites ourselves",
      },
      description: {
        ru: <p>Наши специалисты бесплатно и быстро перенесут Ваши сайты и настроят их на нашем хостинге.</p>,
        uz: (
          <p>
            Bizning mutaxassislarimiz saytlaringizni tez va bepul o'tkazadilar va ularni bizning hostingimizga
            o'rnatadilar.
          </p>
        ),
        en: <p>Our specialists will quickly and free of charge transfer your sites and set them up on our hosting.</p>,
      },
      icon: settingsIcon,
    },
    {
      title: {
        ru: "Скидка при оплате за год",
        uz: "Yillik chegirma",
        en: "Yearly discount",
      },
      description: {
        ru: (
          <p>
            При единоразовой оплате хостинга на год Вы экономите до 20% в зависимости от тарифа и получаете бесплатный
            домен в зоне UZ.
          </p>
        ),
        uz: (
          <p>
            Bir yil davomida xosting uchun bir martalik toʻlov bilan siz tarifga qarab 20% gacha tejaysiz va UZ zonasida
            bepul domenga ega boʻlasiz.
          </p>
        ),
        en: (
          <p>
            With a one-time payment for hosting for a year, you save up to 20% depending on the tariff and get a free
            domain in the UZ zone
          </p>
        ),
      },
      icon: presentIcon,
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
      <SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />

      <ProductCpanel />

      <div className={st.hosting}>
        {/* <Container
					className="mt-0"
					headTitle="Быстрый и надежный виртуальный хостинг Cpanel в Ташкенте"
					description={
						<>
							<p>
								Ежедневно, клиентами AirNet становятся десятки компаний и частных веб-мастеров. Многие
								уже оценили преимущества современных технологий, стабильность, скорость и безопасность
								нашего хостинга. Оборудование мы размещаем в высокотехнологичном, современном, надёжном
								Дата-Центре. Не теряйте время, оцените наш хостинг и профессиональную поддержку прямо
								сейчас.
							</p>
							<p className={st.hosting__traficMaket__speed}>
								Наши сервера расположены на территории Узбекистана, в сети TAS-IX и доступны на скорости
								- <span>1 Gbps</span>
							</p>
						</>
					}
					style={{ background: "url('/servers-2.jpg') no-repeat" }}>
					<div className={st.hosting__traficMaket}>
						<CustomTableHosting table={table1} />
						<CustomTableHosting table={table2} />
					</div>
				</Container> */}

        <div className={"bg_gray"}>
      
          <BreadCrumbs data={[{ name: 'Виртуальный хостинг Cpanel' }]} />
          <PageBreadcrumb links={[{ name: 'Виртуальный хостинг Cpanel' }]} />

          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            headTitle={langData.tarifTitle[language]}
            title="Тарифы"
            description={<p>{langData.tarifDesc[language]}</p>}
            endText={<p className="text-white text-center mt-2">{langData.tarifEnd[language]}</p>}
          >
            <Swiper
              cssMode={true}
              modules={[Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={false}
              autoplay={{
                delay: 20000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                950: {
                  slidesPerView: 4,
                },
                770: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 2,
                },
              }}
              className="tarifSwiper"
            >
              {tarif2.map((item, index) => (
                <SwiperSlide key={item.title}>
                  <div className="w-95">
                    <TarifCard2 index={index} tarif={item} show={show} setShow={setShow} language={language} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TarifMaket>
        </div>

        <WhyBlock title={langData.whyBlockTitle[language]} content={whyBlockHosting} language={language} />

        <Container title={langData.confTitle[language]} clNTitle="text-center">
          <div className={st.hosting__block}>
            {block.map((item) => (
              <div key={item.title[language]} className={st.hosting__block__item}>
                <div className={st.hosting__block__item__img}>
                  <img src={item.img} />
                </div>
                <div className={st.hosting__block__item__content}>
                  <h6>{item.title[language]}</h6>
                  <p>{item.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>

        <div className={`bg-gray`}>
          <ForFreeBlock data={forFreeData} language={language} />
        </div>

        <Container
          title={langData.wordpressTitle[language]}
          description={langData.wordpressDesc[language]}
          className="text-center"
        >
          <div className={st.hosting__cms}>
            {cms.map((item) => (
              <div key={item[language]} className={st.hosting__cms__item}>
                {checkedCircle}
                <p>{item[language]}</p>
              </div>
            ))}
          </div>
        </Container>

        <AvailablePO language={language} />

        <FAQ faq={faq} title={langData.faqTitle[language]} language={language} />

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
