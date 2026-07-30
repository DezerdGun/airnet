import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import SEO from "@/components/seo";
import TarifCard2 from "@/components/tarifCard2";
import PeriodSwitcher from "@/components/periodSwitcher";
import TarifFeatures from "@/components/tarifFeatures";
import TarifMaket from "@/components/tarifMaket";
import { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import st from "./hosting.module.scss";
import ServerSpecs from "@/components/serverSpecs";
import CmsInstall from "@/components/cmsInstall";
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
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductCpanel from "../../components/seo/productcpanel";

export default function Hosting({ language }) {
  const [show, setShow] = useState(-1);
  const [period, setPeriod] = useState(0);

  const langData = {
    seoTitle: {
      ru: "Дешевый хостинг - купить виртуальный хостинг в Узбекистане, тарифы, цены",
      uz: "Veb-sayt hosting - O'zbekistonda virtual xosting sotib olish, tariflar, narxlar",
      en: "Website hosting - buy virtual hosting in Uzbekistan, tariffs, prices",
    },
    seoDesc: {
      ru: "Купить виртуальный хостинг для сайта - ⚡от 10 000 сум. Дата центр в Ташкенте. Скорость в TAS-IX — 1 Gbps. ✔️ Мгновенная активация ✔️Безлимитный трафик",
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
      ru: "Сервера в Узбекистане (Ташкент)",
      uz: "O'zbekistondagi serverlar (Toshkent)",
      en: "Servers in Uzbekistan (Tashkent)",
    },
    tarifDesc2: {
      ru: "Подключение к TAS-IX",
      uz: "TAS-IX ga ulanmoqda",
      en: "Connecting to TAS-IX",
    },
    tarifDesc3: {
      ru: "Скорость до 1 Гбит/с",
      uz: "1 Gbit/s gacha tezlik",
      en: "Speed ​​up to 1 Gbps",
    },
    tarifEnd: {
      ru: "*При оплате за хостинг 12 месяцев!",
      uz: "*Xosting uchun 12 oy to'laganda!",
      en: "*When paying for hosting for 12 months!",
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

  const cms = [
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
        activeTop: "activeTop",
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
        activeTop: "activeTop",
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
              <p>
                Пользовательский аккаунт открывается сразу после подачи заявки.
              </p>

              <p>
                Сразу после произведения оплаты, вы можете начать сразу же
                пользоваться услугой.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Foydalanuvchi hisobi ariza topshirilgandan so‘ng darhol
                ochiladi.
              </p>

              <p>
                Toʻlovni amalga oshirganingizdan soʻng darhol xizmatdan
                foydalanishni boshlashingiz mumkin.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                The user account is opened immediately after the application is
                submitted.
              </p>

              <p>
                Immediately after making the payment, you can start using the
                service immediately.
              </p>
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
                Да. Домена можно не переносить в нашу систему но у домена долны
                быть прописаны наши DNS сервера которые после активации хостинга
                будут отправлены на ваш email.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Ha. Domenlarni bizning tizimimizga o'tkazib bo'lmaydi, lekin
                domenda DNS serverlarimiz ro'yxatdan o'tgan bo'lishi kerak, ular
                hosting faollashtirilgandan so'ng elektron pochtangizga
                yuboriladi.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                Yes. Domains can not be transferred to our system, but the
                domain must have our DNS servers registered, which, after
                hosting activation, will be sent to your email.
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
                Нет, root-доступ и SSH-доступ недоступен для планов виртуального
                хостинга на Cpanel. Если вам требуется root-доступ и SSH-доступ,
                мы рекомендуем вам приобрести виртуальный сервер.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Yo'q, cpanel umumiy hosting rejalari uchun ildizga kirish va SSH
                ruxsati mavjud emas. Agar siz ildizga kirish va SSHga kirishni
                talab qilsangiz, virtual server sotib olishingizni tavsiya
                qilamiz.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                No, root access and SSH access are not available for cpanel
                shared hosting plans. If you require root access and SSH access,
                we recommend that you purchase a virtual server.
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
                На хостинге установлена всегда последние версии MySQL и MariaDB.
                Всю необходимую информацию о сервере Вы можете уточнить у
                технической поддержки.
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Xostingda har doim MySQL va MariaDB ning so'nggi versiyalari
                o'rnatilgan. Server haqida barcha kerakli ma'lumotlarni texnik
                yordamdan olishingiz mumkin.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                The hosting always has the latest versions of MySQL and MariaDB
                installed. You can get all the necessary information about the
                server from technical support.
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
              <p>
                Xosting PHP ning 7.3 dan 8.2 gacha bo'lgan joriy versiyalarida
                mavjud
              </p>
            </>
          ),
          en: (
            <>
              <p>
                The hosting is available with current PHP versions from 7.3 to
                8.2
              </p>
            </>
          ),
        },
      },
    ];

  const whyBlockHosting = [
    {
      title: {
        ru: "Мгновенная активация",
        uz: "Bir zumdayoq ulanish",
        en: "Instant activation",
      },
      description: {
        ru: (
          <>
            <p>
              Активация Cpanel хостинга выполняется мгновенно после оплаты
              счета.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Cpanel hostingni faollashtirish hisob-faktura to'langanidan so'ng
              darhol amalga oshiriladi
            </p>
          </>
        ),
        en: (
          <>
            <p>
              Activation of cpanel hosting is performed instantly after payment
              of the invoice
            </p>
          </>
        ),
      },
      icon: clockIcon,
    },
    {
      title: { ru: "Запрещается", uz: "Taqiqlanadi", en: "Forbidden" },
      description: {
        ru: (
          <p>
            Не предоставляется для <strong>игровых</strong> серверов и{" "}
            <strong>видео-контент</strong> сайтов! Для телеграм{" "}
            <strong>ботов!</strong>
          </p>
        ),
        uz: (
          <p>
            <strong>O'yin</strong> serverlari va <strong>video</strong> kontent
            saytlari uchun mavjud emas! <strong>Telegram</strong> botlari uchun!
          </p>
        ),
        en: (
          <p>
            Not available for <strong>game</strong> servers and{" "}
            <strong>video</strong> content sites! For telegram{" "}
            <strong>bots</strong>!
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Поддержка круглосуточно",
        uz: "24/7 qo'llab quvvatlash",
        en: "Support 24/7",
      },
      description: {
        ru: (
          <>
            <p>
              В любое время суток, Вы можете к нам обратиться за помощью или
              советом, мы ответим максимально быстро.
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
              Kunning istalgan vaqtida yordam yoki maslahat uchun biz bilan
              bog'lanishingiz mumkin, biz imkon qadar tezroq javob beramiz .
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
              At any time of the day, you can contact us for help or advice, we
              will respond as quickly as possible.
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
        ru: (
          <p>
            Обеспечьте вашему сайту защищённое HTTPS‑соединение с помощью
            бесплатного сертификата.
          </p>
        ),
        uz: (
          <p>
            Saytingizga bepul sertifikat bilan xavfsiz HTTPS ulanishini bering.
          </p>
        ),
        en: (
          <p>
            Give your site a secure HTTPS connection with a free certificate.
          </p>
        ),
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
        ru: (
          <p>
            Наши специалисты бесплатно и быстро перенесут Ваши сайты и настроят
            их на нашем хостинге.
          </p>
        ),
        uz: (
          <p>
            Bizning mutaxassislarimiz saytlaringizni tez va bepul o'tkazadilar
            va ularni bizning hostingimizga o'rnatadilar.
          </p>
        ),
        en: (
          <p>
            Our specialists will quickly and free of charge transfer your sites
            and set them up on our hosting.
          </p>
        ),
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
            При единоразовой оплате хостинга на год Вы экономите до 20% в
            зависимости от тарифа и получаете бесплатный домен в зоне UZ.
          </p>
        ),
        uz: (
          <p>
            Bir yil davomida xosting uchun bir martalik toʻlov bilan siz tarifga
            qarab 20% gacha tejaysiz va UZ zonasida bepul domenga ega boʻlasiz.
          </p>
        ),
        en: (
          <p>
            With a one-time payment for hosting for a year, you save up to 20%
            depending on the tariff and get a free domain in the UZ zone
          </p>
        ),
      },
      icon: presentIcon,
    },
  ];

const forContractArticlesData = {
  title: {
    ru: <>Полезные статьи</>,
    uz: <>Foydali maqolalar</>,
    en: <>Useful articles</>,
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
    en:  ( 
      <>
      </>
    ),
  },
  img: "/sitepad-img.png",
  content: [
    {
      title: {
        ru: "Как перенести сайт на хостинг AIRNET?",
        uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
        en: "How to transfer a website to AIRNET hosting?",
      },
      link: '/help/hosting/kak-perenesti-sajt-na-hosting-airnet',
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

  const breadCrumbs = [
    {
      name: {
        ru: "Виртуальный хостинг Cpanel",
        uz: "Virtual hosting Cpanel",
        en: "Virtual hosting Cpanel",
      },
      link: "/hosting",
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
      <SEO
        title={langData.seoTitle[language]}
        desc={langData.seoDesc[language]}
      />

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
          {breadCrumbs && breadCrumbs.length ? (
            <>
              <BreadCrumbs data={breadCrumbs} language={language} />
              <PageBreadcrumb links={breadCrumbs} language={language} />
            </>
          ) : null}
          
          <Container className={"head-top"}>
            <h1>{langData.tarifTitle[language]}</h1>
          </Container>
          
          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            // headTitle={langData.tarifTitle[language]}
            title="Тарифы"
            description={<TarifFeatures items={[langData.tarifDesc[language], langData.tarifDesc2[language], langData.tarifDesc3[language]]} />}
            endText={
              <p className="text-white text-center mt-2">
                {langData.tarifEnd[language]}
              </p>
            }
          >
            <PeriodSwitcher value={period} onChange={setPeriod} language={language} />
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
                    <TarifCard2
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
          content={whyBlockHosting}
          language={language}
        />

        <ServerSpecs language={language} />

        <CmsInstall language={language} items={cms} />

        <AvailablePO language={language} />

        <FAQ
          faq={faq}
          title={langData.faqTitle[language]}
          language={language}
        />

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
