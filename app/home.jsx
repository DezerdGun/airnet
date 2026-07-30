import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

import CustomSwiper from "@/components/customSwiper";
import FAQ from "@/components/faq";
import Notifications from "@/components/notifications";
import Partners from "@/components/partners";
import RegDomain from "@/components/regDomain";
import DomainPrices from "@/components/domainPrices";
import Reviews from "@/components/reviews";
import HomeNews from "@/components/homeNews";
import SEO from "@/components/seo";
// import Product from "@/components/seo/product";
import Sitepad from "@/components/sitepad";
import Stock from "@/components/stock";
import TarifCard from "@/components/tarifCard";
import TarifCard2 from "@/components/tarifCard2";
import TarifMaketHome from "@/components/tarifMaketHome";
import PeriodSwitcher from "@/components/periodSwitcher";
import Trust from "@/components/trust";
import WhyBlock from "@/components/whyBlock";

import Howworks from "@/components/howworks";
import ForContract from "@/components/forContract";
import { forContractVDSData } from "./vds";
import ForSupport from "@/components/forSupport";
import { forSupportVDSData } from "./vds";
import ForDatacenter from "@/components/forDatacenter";
import { forDatacenterVDSData } from "./vds";

import { checkLang } from "@/utils/checkLang";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { phoneIcon } from "shared/icons/phoneIcon";
import { searchIcon } from "shared/icons/searchIcon";
import { walletIcon } from "shared/icons/walletIcon";
import { ethernetIcon } from "shared/icons/ethernetIcon";
import { databaseIcon } from "shared/icons/databaseIcon";
import { serversIcon } from "shared/icons/serversIcon";
import { ssdIcon } from "shared/icons/ssdIcon";
import ProductHome from "@/components/seo/producthome"

export default function Home({ language, apiNewsServer }) {
  const [show, setShow] = useState(-1);
  const [period, setPeriod] = useState(0);
  const langData = {
    seoTitle: {
      ru: "Airnet.uz - Виртуальный хостинг в TAS-IX, домена, VDS-сервера, Ташкент",
      uz: "Airnet.uz - TAS-IXda virtual xosting, domen, VDS-server, Toshkent",
      en: "Airnet.uz - Virtual hosting in TAS-IX, domain, VDS server, Tashkent",
    },
    seoDesc: {
      ru: "Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена",
      uz: "Virtual xosting, Toshkentda xosting, xostingni qayta sotish, arzon VDS, VPS serverlar, Toshkentda VDS, virtual serverlar, ajratilgan serverlar, domen nomlari",
      en: "Virtual hosting, hosting in Tashkent, reselling hosting, cheap VDS, VPS servers, VDS in Tashkent, virtual servers, dedicated servers, domain names",
    },
    whyBlockTitle: {
      ru: "Почему выбирают AIRNET?",
      uz: "Nima uchun AIRNET ni tanlaysiz?",
      en: "Why choose AIRNET?",
    },
    tarifMaketHomeTitle: {
      ru: "Популярные тарифы - виртуальный сервер в Ташкенте",
      uz: "Ommabop tariflar - Toshkentdagi virtual server",
      en: "Popular tariffs - virtual server in Tashkent",
    },
    tarifMaketHomeDesc: {
      ru: "Сервера в Узбекистане (Ташкент)",
      uz: "O'zbekistondagi serverlar (Toshkent)",
      en: "Servers in Uzbekistan (Tashkent)",
    },
    tarifMaketHomeDesc2: {
      ru: "Подключение к TAS-IX",
      uz: "TAS-IX ga ulanmoqda",
      en: "Connecting to TAS-IX",
    },
    tarifMaketHomeDesc3: {
      ru: "Скорость до 1 Гбит/с",
      uz: "1 Gbit/s gacha tezlik",
      en: "Speed ​​up to 1 Gbps",
    },
    tarifMaketHomeEnd: {
      ru: (
        <>
          <p>Быстрый запуск без ожидания</p>
          <p>
            VDS-сервер готов к работе уже через 30 минут после оплаты.<br />
            В большинстве случаев активация занимает 1–2 часа — вы получаете доступ практически сразу.
          </p>
          <p>Даже при высокой загрузке или нестандартной конфигурации срок развёртывания не превышает 2 рабочих дней.</p>
          <p>Мы оптимизировали процессы так, чтобы вы начинали работу без задержек.</p>
        </>
      ),
      uz: (
        <>
          <p>Kutishsiz tezkor ishga tushirish</p>
          <p>
            VDS serveri to'lovdan keyin 30 daqiqa ichida foydalanishga tayyor.<br />
            Ko'pgina hollarda, faollashtirish 1-2 soat davom etadi, bu sizga deyarli darhol kirish imkonini beradi.
          </p>
          <p>Yuqori yuklanish yoki nostandart konfiguratsiya bilan ham, joylashtirish vaqti 2 ish kunidan oshmaydi.</p>
          <p>Biz jarayonlarni optimallashtirdik, shuning uchun siz kechikishsiz boshlashingiz mumkin.</p>
        </>
      ),
      en: (
        <>
          <p>Quick start-up without waiting</p>
          <p>
            The VDS server is ready to use within 30 minutes of payment.<br />
            In most cases, activation takes 1-2 hours, giving you access almost immediately.
          </p>
          <p>Even with high load or a non-standard configuration, deployment time does not exceed 2 business days.</p>
          <p>We've optimized processes so you can get started without delays.</p>
        </>
      ),
    },
    tarifMaketHomeTitle2: {
      ru: "Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте",
      uz: "Ommabop tariflar Toshkentda umumiy hosting Cpanel",
      en: "Popular tariffs Shared hosting Cpanel in Tashkent",
    },
    tarifMaketHomeEnd2: {
      ru: "*При оплате за хостинг от 12 месяцев!",
      uz: "*Xosting uchun 12 oydan boshlab to'lashda!",
      en: "*If you pay for hosting from 12 months!",
    },
    faqTitle: {
      ru: "Нас часто спрашивают",
      uz: "Bizdan tez-tez so'rashadi",
      en: "We are often asked",
    },
    month: {
      ru: "мес.",
      uz: "oy",
      en: "mo.",
    },
  };

  const faq = [
      {
        title: {
          ru: "Есть ли возможность протестировать услуги? ✔",
          uz: "Xizmatlarni sinab ko'rish mumkinmi? ✔",
          en: "Is it possible to test the services? ✔",
        },
        description: {
          ru: (
            <>
              <p>
                Чтобы протестировать сервис, сначала нужно{" "}
                <a href="https://billing.airnet.uz/billing.php?do=order&type=partner" target="_blank">
                  зарегистрироваться.
                </a>
              </p>

              <p>Вам нужен VDS сервер? - Выполните 3 простых шага, описанных здесь</p>

              <p>
                Вы представляете юр.лицо, и вам нужен полноценный тестовый стенд? - <strong>напишите нам</strong> в
                тикет или на наш телеграм!
              </p>
            </>
          ),
          uz: (
            <>
              <p>
                Xizmatni sinab koʻrish uchun avval{" "}
                <a href="https://billing.airnet.uz/billing.php?do=order&type=partner" target="_blank">
                  roʻyxatdan oʻtishingiz kerak.
                </a>
              </p>

              <p>Sizga VDS server kerakmi? - Bu yerda tasvirlangan 3 oson qadamni bajaring</p>

              <p>
                Siz yuridik shaxssiz va sizga to'liq huquqli test stoli kerakmi? - <strong>bizga yozing</strong>
              </p>
            </>
          ),
          en: (
            <>
              <p>
                To test the service, you first need to{" "}
                <a href="https://billing.airnet.uz/billing.php?do=order&type=partner" target="_blank">
                  sign up.
                </a>
              </p>

              <p>Do you need a VDS server? - Follow the 3 easy steps described here</p>

              <p>
                Are you a legal entity and do you need a full-fledged test stand? - <strong>write to us</strong>
              </p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Как быстро отвечает служба техподдержки? ⭐",
          uz: "Texnik yordam qanchalik tez javob beradi? ⭐",
          en: "How quickly does tech support respond? ⭐",
        },
        description: {
          ru: (
            <p>
              Время ответа может занять до 30 мин. Оно зависит от числа обращений в определенный период времени. После
              20:00 и до 09:00 утра время ответа может быть увеличено!
            </p>
          ),
          uz: (
            <p>
              Javob berish vaqti 30 daqiqagacha vaqt olishi mumkin. Bu ma'lum bir davrdagi qo'ng'iroqlar soniga bog'liq.
              vaqt. Soat 20:00 dan keyin va ertalab soat 09:00 ga qadar javob vaqti oshirilishi mumkin!
            </p>
          ),
          en: (
            <p>
              Response time may take up to 30 minutes. It depends on the number of calls in a certain time period. After
              20:00 pm and until 09:00 am, the response time may be increased!
            </p>
          ),
        },
      },
      {
        title: {
          ru: "Можно ли изменять конфигурацию рабочего сервера? 🖥️",
          uz: "Ishchi server konfiguratsiyasini o'zgartirish mumkinmi? 🖥️",
          en: "Is it possible to change the configuration of the working server? 🖥️",
        },
        description: {
          ru: (
            <>
              <p>Да. Изменять конфигурации своего сервера вы можете в любой момент. 🚀</p>

              <p>
                Для <strong>RAM</strong> и <strong>CPU</strong> [требуется перезагрузка]
              </p>

              <p>
                Для <strong>SSD</strong> [без перезагрузки]
              </p>

              <p>
                Для <strong>Интернет</strong> [без перезагрузки]
              </p>
            </>
          ),
          uz: (
            <>
              <p>Ha. Siz istalgan vaqtda serveringiz konfiguratsiyasini o'zgartirishingiz mumkin. 🚀</p>

              <p>
                <strong>RAM</strong> va <strong>CPU</strong> uchun [qayta yuklash kerak]
              </p>

              <p>
                <strong>SSD</strong> uchun [qayta yuklanmaydi]
              </p>

              <p>
                <strong>Internet</strong> uchun [qayta yuklanmaydi]
              </p>
            </>
          ),
          en: (
            <>
              <p>Yes. You can change the configuration of your server at any time. 🚀</p>

              <p>
                For <strong>RAM</strong> and <strong>CPU</strong> [reboot required]
              </p>

              <p>
                For <strong>SSD</strong> [no reboot]
              </p>

              <p>
                For <strong>Internet</strong> [no reboot]
              </p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Какая система виртуализации используется в AIRNET? 🗂️",
          uz: "AIRNET da qanday virtualizatsiya tizimi qo'llaniladi? 🗂️",
          en: "What virtualization system is used in AIRNET? 🗂️",
        },
        description: {
          ru: (
            <p>
              Виртуальная инфраструктура <strong>AIRNET</strong> компании использует <strong>VMware</strong> с
              прикладными дополнениями. Виртуальные сервера создаются в среде операционной системы <strong>ESXi</strong>
              .
            </p>
          ),
          uz: (
            <p>
              Kompaniyaning <strong>AIRNET</strong> virtual infratuzilmasi <strong>VMware</strong> ilova qoʻshimchalari
              bilan. Virtual serverlar muhitda yaratilgan
              <strong>ESXi</strong> operatsion tizimi.
            </p>
          ),
          en: (
            <p>
              The company's <strong>AIRNET</strong> virtual infrastructure uses <strong>VMware</strong> with application
              addons. Virtual servers are created in
              <strong>ESXi</strong> operating system environment.
            </p>
          ),
        },
      },
      {
        title: {
          ru: "Как можно оплатить за услуги AIRNET? 💷",
          uz: "AIRNET xizmatlari uchun qanday to'lashim mumkin? 💷",
          en: "How can I pay for AIRNET services? 💷",
        },
        description: {
          ru: (
            <>
              <p>Способы оплаты</p>

              <p>
                Для <strong>физических лиц</strong>: PAYME, PAYNET, CLICK, UPAY, Webmoney, OSON.uz, VISA, MasterCard и
                другие.
              </p>

              <p>
                Для <strong>юридических лиц</strong>: банковский перевод. (перечисление)
              </p>

              <p>
                Все доступные способы оплаты смотрите на нашем{" "}
                <a href="/payment" target="_blank">
                  сайте.
                </a>
              </p>
            </>
          ),
          uz: (
            <>
              <p>To'lov usullari</p>

              <p>
                <strong>jismoniy shaxslar</strong> uchun: PAYME, PAYNET, CLICK, UPAY, Webmoney, OSON.uz, VISA,
                MasterCard va boshqalar.
              </p>

              <p>
                <strong>yuridik shaxslar</strong> uchun: bank o‘tkazmasi. (ro'yxatga olish)
              </p>

              <p>
                Bizning{" "}
                <a href="/payment" target="_blank">
                  veb-saytimizda
                </a>{" "}
                mavjud bo'lgan barcha to'lov usullarini ko'ring.
              </p>
            </>
          ),
          en: (
            <>
              <p>Payment methods</p>

              <p>
                For <strong>individuals</strong>: PAYME, PAYNET, CLICK, UPAY, Webmoney, OSON.uz, VISA, MasterCard and
                others.
              </p>

              <p>
                For <strong>legal entities</strong>: bank transfer. (enumeration)
              </p>

              <p>
                See all available payment methods on our{" "}
                <a href="/payment" target="_blank">
                  website.
                </a>
              </p>
            </>
          ),
        },
      },
    ],
    tarif = [
      {
        title: { ru: "Strong", uz: "Strong", en: "Strong" },
        workstxt: { ru: "Для старта", uz: "Boshlash uchun", en: "To start" },
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
            discount: "−10%",
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
        title: { ru: "VIP+", uz: "VIP+", en: "VIP+" },
        workstxt: { ru: "Для интернет магазинов", uz: "Onlayn do'konlar uchun", en: "For online stores" },
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
            discount: "−10%",
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
        title: { ru: "Advanced", uz: "Advanced", en: "Advanced" },
        workstxt: { ru: "Для сайтов и приложений", uz: "Veb-saytlar va ilovalar uchun", en: "For websites and applications" },
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
            discount: "−10%",
            // date: langData.month[language],
          },
        ],
        cpu: 6,
        ram: 10,
        ssd: 100,
        net: 250,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50",
      },
      {
        title: { ru: "Mega", uz: "Mega", en: "Mega" },
        workstxt: { ru: "Для CRM / 1С", uz: "CRM / 1С uchun", en: "For CRM / 1С" },
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
            discount: "−10%",
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
            discount: "−10%",
            // date: langData.month[language],
          },
        ],
        cpu: 8,
        ram: 16,
        ssd: 250,
        net: 250,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
      },
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
            discount: "−10%",
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
            discount: "−10%",
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
            discount: "−10%",
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
            discount: "−10%",
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
            discount: "−10%",
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
            discount: "−10%",
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
            discount: "−10%",
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
            discount: "−10%",
            // date: langData.month[language],
          },
        ],
        ssd: "20 000",
        sites: "∞",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
      },
    ],
    whyBlockData = [
      {
        title: {
          ru: "Поддержка 24/7",
          uz: "24/7 qo'llab-quvvatlash",
          en: "24/7 support",
        },
        description: {
          ru: (
            <p>
              Наша техническая поддержка доступна круглосуточно без выходных.<br />
              Вы получаете оперативную помощь через удобные каналы связи: телефон, e-mail, Telegram и онлайн-чат.
            </p>
          ),
          uz: (
            <p>
              Bizning texnik yordamimiz haftasiga 7 kun, 24/7 rejimida mavjud.<br />
              Siz qulay aloqa kanallari: telefon, elektron pochta, Telegram va onlayn chat orqali tezkor yordam olasiz.
            </p>
          ),
          en: (
            <p>
              Our technical support is available 24/7, 7 days a week.<br />
              You receive prompt assistance through convenient communication channels: phone, email, Telegram, and online chat.
            </p>
          ),
        },
        icon: phoneIcon,
      },
      {
        title: { ru: "Стабильность и надежность", uz: "Barqarorlik va ishonchlilik", en: "Stability and reliability" },
        description: {
          ru: (
            <p>
              Мы обеспечиваем высокий уровень доступности сервисов — до 99.9%.<br />
              Оборудование размещено в современном дата-центре уровня TIER III в Ташкенте.
            </p>
          ),
          uz: (
            <p>
              Biz yuqori darajadagi xizmat ko'rsatish imkoniyatini ta'minlaymiz — 99,9% gacha.<br />
              Uskunalar Toshkentdagi zamonaviy TIER III ma'lumotlar markazida joylashgan.
            </p>
          ),
          en: (
            <p>
              We provide a high level of service availability—up to 99.9%.<br />
              The equipment is housed in a modern TIER III data center in Tashkent.
            </p>
          ),
        },
        icon: searchIcon,
      },
      {
        title: { ru: "Оптимальная стоимость", uz: "Optimal narx", en: "Optimal price" },
        description: {
          ru: (
            <p>
              Мы предлагаем конкурентные цены без компромиссов в качестве.<br />
              Оптимизация инфраструктуры и прямые подключения позволяют снижать издержки — это напрямую отражается на стоимости для клиентов.
            </p>
          ),
          uz: (
            <p>
              Biz sifatga putur yetkazmasdan raqobatbardosh narxlarni taklif qilamiz.<br />
              Infratuzilmani optimallashtirish va to'g'ridan-to'g'ri aloqalar bizga xarajatlarni kamaytirish imkonini beradi, bu esa mijozlarimiz uchun qiymatga bevosita ta'sir qiladi.
            </p>
          ),
          en: (
            <p>
              We offer competitive prices without compromising quality.<br />
              Infrastructure optimization and direct connections allow us to reduce costs, which directly impacts the value for our clients.
            </p>
          ),
        },
        icon: walletIcon,
      },
      {
        title: {
          ru: "Собственная IP-инфраструктура",
          uz: "O'z IP infratuzilmasi",
          en: "Own IP infrastructure",
        },
        description: {
          ru: (
            <p>
              Мы используем собственные IP-адреса и работаем по протоколу BGP.<br />
              Прямое подключение к автономной системе обеспечивает стабильную маршрутизацию и независимость от сторонних операторов.
              Также мы являемся участниками TAS-IX и UZ-IX, что гарантирует локальную доступность ресурсов.
            </p>
          ),
          uz: (
            <p>
              Biz o'z IP-manzillarimizdan foydalanamiz va BGP protokoli yordamida ishlaymiz.<br />
              Avtonom tizimga to'g'ridan-to'g'ri ulanish barqaror marshrutizatsiya va uchinchi tomon operatorlaridan mustaqillikni ta'minlaydi.
              Biz shuningdek, mahalliy resurslarning mavjudligini kafolatlaydigan TAS-IX va UZ-IX a'zolarimiz.
            </p>
          ),
          en: (
            <p>
              We use our own IP addresses and operate using the BGP protocol.<br />
              Direct connection to the autonomous system ensures stable routing and independence from third-party operators.
              We are also members of TAS-IX and UZ-IX, which guarantees local resource availability.
            </p>
          ),
        },
        icon: ethernetIcon,
      },
      {
        title: {
          ru: "Локальное размещение в Ташкенте",
          uz: "Toshkentdagi mahalliy turar joy",
          en: "Local accommodation in Tashkent",
        },
        description: {
          ru: <p>Все данные обрабатываются и хранятся на территории Узбекистана.<br />
              Это обеспечивает минимальные задержки, высокую скорость доступа и соответствие локальным требованиям к данным.
              Прямое подключение к TAS-IX и UZ-IX дает дополнительное преимущество в скорости внутри страны.</p>,
          uz: <p>Barcha ma'lumotlar O'zbekiston ichida qayta ishlanadi va saqlanadi.<br />
              Bu minimal kechikish, yuqori kirish tezligi va mahalliy ma'lumotlar talablariga muvofiqlikni ta'minlaydi.
              TAS-IX va UZ-IX ga to'g'ridan-to'g'ri ulanish mamlakat ichida qo'shimcha tezlik afzalligini beradi.</p>,
          en: <p>All data is processed and stored within Uzbekistan.<br />
              This ensures minimal latency, high access speeds, and compliance with local data requirements.
              Direct connection to TAS-IX and UZ-IX provides an additional speed advantage within the country.</p>
        },
        icon: serversIcon,
      },
      {
        title: {
          ru: "Высокая производительность",
          uz: "Yuqori samaradorlik",
          en: "High performance",
        },
        description: {
          ru: <p>Использование SSD накопителей и современных серверных решений обеспечивает быструю загрузку и стабильную работу проектов.
              Сетевая инфраструктура оптимизирована для высокой пропускной способности и минимальных задержек.
              Ваши сервисы работают быстро даже при высокой нагрузке.</p>,
          uz: <p>SSD disklar va zamonaviy server yechimlaridan foydalanish loyihalarning tez yuklanishini va barqaror ishlashini ta'minlaydi.
              Tarmoq infratuzilmasi yuqori o'tkazuvchanlik va minimal kechikish uchun optimallashtirilgan.
              Xizmatlaringiz hatto og'ir yuk ostida ham tez ishlaydi.</p>,
          en: <p>The use of SSD drives and modern server solutions ensures fast loading and stable operation of projects.
              The network infrastructure is optimized for high throughput and minimal latency.
              Your services run quickly even under heavy load.</p>
        },
        icon: ssdIcon,
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
      {/* <Product language={language} /> */}

      <ProductHome />
      <CustomSwiper language={language} />
      <WhyBlock title={langData.whyBlockTitle[language]} content={whyBlockData} language={language} />
      <TarifMaketHome
        title={langData.tarifMaketHomeTitle[language]}
        description={<p><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>{langData.tarifMaketHomeDesc[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M303.69-144q-34.69 0-64.19-15T182-205q-40.94-45.32-63.97-108.11T95-442q0-77.2 30.5-145.1Q156-655 208.5-706t122.46-80.5q69.96-29.5 149.5-29.5t149.04 30q69.5 30 122 82T834-582.5q30 69.5 30 148.3 0 71.38-24.4 133.49-24.39 62.11-69.28 104.75Q743-170 713.94-157q-29.06 13-59.06 13-16.88 0-34.88-4.5-18-4.5-35-12.5l-57-28q-11-5-21.5-7.5T483-199q-15 0-30.23 3.5T424-185l-49 24q-17 8-35 12.5t-36.31 4.5Zm.31-71q10 0 19.5-2.5T343-225l48-25q20-11 43.16-16 23.16-5 46.84-5 22 0 41.57 4.29Q542.13-262.43 560-253l56 28q11 5 19.5 7.5T654-215q17 0 33.5-7.5T721-246q35-32 53-79.5T792-429q0-132-90.54-223.5t-221-91.5Q350-744 258.5-653.21T167-433q0 56 18.5 104.5T238-247q17 17.3 33 24.65 16 7.35 33 7.35Zm176-265Zm51 86.85q21-21.15 21-50.85 0-8-1.75-16T545-476l53-69q12 14 19.88 30.08Q625.75-498.85 631-480h73q-14-84-77.19-138T480-672q-85 0-148 54.5T256-480h72.6q12.4-53 54.97-86.5t96.04-33.5q16.83 0 31.68 3 14.85 3 28.71 9l-54.85 72H480.2q-29.79 0-50.99 21.21-21.21 21.21-21.21 51T429.21-393q21.21 21 51 21T531-393.15Z"/></svg>{langData.tarifMaketHomeDesc2[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="m437-249 183-231H471l26-221-173 269h146l-33 183ZM336-96l48-264H192l324-504h72l-36 312h216L408-96h-72Zm136-379Z"/></svg>{langData.tarifMaketHomeDesc3[language]}</p>}
        endText={<div className="text-white text-center mt-2">{langData.tarifMaketHomeEnd[language]}</div>}
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
            delay: 100000,
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
          {tarif.map((item, index) => (
            <SwiperSlide key={item.title}>
              <div className="w-95">
                <TarifCard index={index} tarif={item} show={show} setShow={setShow} language={language} period={period} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </TarifMaketHome>
      <RegDomain language={language} />
      <DomainPrices language={language} />
      <TarifMaketHome
        title={langData.tarifMaketHomeTitle2[language]}
        description={<p><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>{langData.tarifMaketHomeDesc[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M303.69-144q-34.69 0-64.19-15T182-205q-40.94-45.32-63.97-108.11T95-442q0-77.2 30.5-145.1Q156-655 208.5-706t122.46-80.5q69.96-29.5 149.5-29.5t149.04 30q69.5 30 122 82T834-582.5q30 69.5 30 148.3 0 71.38-24.4 133.49-24.39 62.11-69.28 104.75Q743-170 713.94-157q-29.06 13-59.06 13-16.88 0-34.88-4.5-18-4.5-35-12.5l-57-28q-11-5-21.5-7.5T483-199q-15 0-30.23 3.5T424-185l-49 24q-17 8-35 12.5t-36.31 4.5Zm.31-71q10 0 19.5-2.5T343-225l48-25q20-11 43.16-16 23.16-5 46.84-5 22 0 41.57 4.29Q542.13-262.43 560-253l56 28q11 5 19.5 7.5T654-215q17 0 33.5-7.5T721-246q35-32 53-79.5T792-429q0-132-90.54-223.5t-221-91.5Q350-744 258.5-653.21T167-433q0 56 18.5 104.5T238-247q17 17.3 33 24.65 16 7.35 33 7.35Zm176-265Zm51 86.85q21-21.15 21-50.85 0-8-1.75-16T545-476l53-69q12 14 19.88 30.08Q625.75-498.85 631-480h73q-14-84-77.19-138T480-672q-85 0-148 54.5T256-480h72.6q12.4-53 54.97-86.5t96.04-33.5q16.83 0 31.68 3 14.85 3 28.71 9l-54.85 72H480.2q-29.79 0-50.99 21.21-21.21 21.21-21.21 51T429.21-393q21.21 21 51 21T531-393.15Z"/></svg>{langData.tarifMaketHomeDesc2[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="m437-249 183-231H471l26-221-173 269h146l-33 183ZM336-96l48-264H192l324-504h72l-36 312h216L408-96h-72Zm136-379Z"/></svg>{langData.tarifMaketHomeDesc3[language]}</p>}
        endText={<p className="text-white text-center mt-2">{langData.tarifMaketHomeEnd2[language]}</p>}
      >
        <Swiper
          cssMode={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={false}
          autoplay={{
            delay: 100000,
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
              slidesPerView: 0,
            },
          }}
          className="tarifSwiper"
        >
          {tarif2.map((item, index) => (
            <SwiperSlide key={item.title}>
              <div className="w-95">
                <TarifCard2
                  index={index + tarif2.length}
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
      </TarifMaketHome>
      <Stock language={language} />
      <Trust language={language} />
      <FAQ faq={faq} title={langData.faqTitle[language]} language={language} />
      {/* <Notifications language={language} /> */}
        
      <Howworks language={language} />
      <ForContract data={forContractVDSData} language={language} />
      <ForSupport data={forSupportVDSData} language={language} />
      <ForDatacenter data={forDatacenterVDSData} language={language} />
      
      <Partners language={language} />
      <HomeNews language={language} apiNewsServer={apiNewsServer} />
      <Reviews language={language} />
    </>
  );
}
