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
import ProductVDSIntel from "../../components/seo/productvdsintel";
import { breadCrumbsVds } from "./index";
import { forFreeVDSData } from "../vds";
import { forContractVDSData } from "../vds";
import { forSupportVDSData } from "../vds";
import { forDatacenterVDSData } from "../vds";
import Calculator from "@/components/calculator";

export const ForLinuxVDSData = {
  title: {
    ru: <>Виртуальный сервер VDS Windows</>,
    uz: <>Виртуальный сервер VDS Windows</>,
    en: <>Virtual server VDS Windows</>,
  },
  desc: {
    ru: (
      <>
        При помощи сервера на Windows удается повысить уровень безопасности клиентских серверов, использовать необходимое программное обеспечение, размещать сайты, независимо от направленности, от визиток до крупных интернет-магазинов и информационных порталов. Для решения перечисленных задач выгоднее оформить аренду, это значительно сокращает расходы, исключает необходимость в покупке дорогого оборудования, при этом столь же эффективно и надежно.
      </>
    ),
    uz: (
      <>
        Windows serveridan foydalanib, mijoz-serverlarning xavfsizlik darajasini oshirish, kerakli dasturiy ta'minotdan foydalanish va veb-saytlarni, ularning yo'nalishidan qat'i nazar, tashrif qog'ozlaridan tortib yirik onlayn-do'konlar va axborot portallarigacha joylashtirish mumkin. Yuqoridagi muammolarni hal qilish uchun ijaraga olish yanada foydalidir, bu xarajatlarni sezilarli darajada kamaytiradi, qimmat uskunalar sotib olish zaruratini yo'q qiladi, shu bilan birga samarali va ishonchli bo'ladi.
      </>
    ),
    en: (
      <>
        With the help of a Windows server, it is possible to increase the security level of client servers, use the necessary software, host websites, regardless of their focus, from business cards to large online stores and information portals. To solve the listed tasks, it is more profitable to arrange a lease, this significantly reduces costs, eliminates the need to purchase expensive equipment, while being just as effective and reliable.
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
    ru: <>Разница между VDS, VPS и выделенным сервером</>,
    uz: <>VDS, VPS va ajratilgan server o'rtasidagi farq</>,
    en: <>Difference between VDS, VPS and Dedicated Server</>,
  },
  desc: {
    ru: (
      <p>
        Понятия VPS и VDS очень близки, однако, не равнозначны. В первом случае речь идет о динамическом разделении доступных мощностей между пользователями, что обеспечивает гибкость настройки, повышает общую эффективность работы, дает возможно рационально использовать ресурсы, во втором – каждый пользователь получает изначально фиксированную мощность, динамическое перераспределение не предполагается.
        <br /><br />
        Выделенный сервер – более продвинутое решение, разделение между пользователями неактуально, каждый клиент получает всю доступную мощность. Это дороже, однако, надежнее, подходит для решения самых ответственных задач, размещения высоконагруженных сайтов.
      </p>
    ),
    uz: (
      <p>
        VPS va VDS tushunchalari juda yaqin, ammo ular ekvivalent emas. Birinchi holda, biz foydalanuvchilar o'rtasida mavjud imkoniyatlarning dinamik bo'linishi haqida gapiramiz, bu konfiguratsiyaning moslashuvchanligini ta'minlaydi, umumiy ish samaradorligini oshiradi va ikkinchidan, har bir foydalanuvchi dastlab belgilangan quvvatni oladi; qayta taqsimlanishi kutilmaydi.
        <br /><br />
        Ajratilgan server - bu yanada rivojlangan yechim, foydalanuvchilar o'rtasida bo'linish muhim emas, har bir mijoz mavjud bo'lgan barcha quvvatni oladi. Bu qimmatroq, ammo ishonchliroq, eng muhim vazifalarni hal qilish va yuqori yuklangan saytlarni joylashtirish uchun javob beradi.
      </p>
    ),
    en: (
      <p>
        The concepts of VPS and VDS are very close, however, they are not equivalent. In the first case, we are talking about the dynamic division of available capacities between users, which ensures flexibility of settings, increases overall efficiency, makes it possible to rationally use resources, in the second case, each user initially receives fixed capacity, dynamic redistribution is not assumed.
        <br /><br />
        A dedicated server is a more advanced solution, division between users is irrelevant, each client receives all available capacity. It is more expensive, however, more reliable, suitable for solving the most important tasks, hosting high-load sites.
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
  const [period, setPeriod] = useState(0);
  const langData = {
    seo: {
      ru: "Аренда виртуального сервера VPS/VDS на базе Windows Server",
      uz: "Windows Server asosidagi VPS/VDS virtual serverini ijaraga olish",
      en: "Rent a virtual server VPS/VDS based on Windows Server",
    },
    desc: {
      ru: "Аренда виртуального VPS/VDS сервера для Windows⚡. Это хостинг виртуальных серверов на базе операционных систем семейства Windows.",
      uz: "Windows uchun virtual VPS/VDS serverini ijaraga oling⚡. Bu Windows operatsion tizimlariga asoslangan virtual server hostingidir.",
      en: "Rent a virtual VPS/VDS server for Windows⚡. This is hosting of virtual servers based on Windows operating systems.",
    },
    whyBlockTitle: {
      ru: "Почему мы?",
      uz: "Nega biz?",
      en: "Why us?",
    },
    headTitle: {
      ru: "Аренда виртуального VPS/VDS сервера Windows",
      uz: "Windows virtual VPS/VDS serverini ijaraga olish",
      en: "Rent a virtual VPS/VDS Windows server",
    },
    headTitleH2: {
      ru: "Готовые удаленные серверы Windows",
      uz: "Готовые удаленные серверы Windows",
      en: "Готовые удаленные серверы Windows",
    },
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
        ru: "Как работает сервер с операционной системой Windows Server?",
        uz: "Server Windows Server operatsion tizimi bilan qanday ishlaydi?",
        en: "How does a server with Windows Server operating system work?",
      },
      description: {
        ru: (
          <>
            <p>
            Серверы на Windows максимально надежны в работе, предполагают широкие возможности настройки и администрирования, легко можно наладить работу в соответствии с актуальными потребностями и запросами.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Windows-dagi serverlar ishlashda juda ishonchli, keng konfiguratsiya va boshqaruv imkoniyatlarini taklif etadi va siz hozirgi ehtiyojlar va so'rovlarga muvofiq ishni osongina sozlashingiz mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Windows servers are extremely reliable in operation, offer wide customization and administration options, and can easily be adjusted to suit current needs and requests.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Каковы преимущества сервера на Windows Server?",
        uz: "Windows Server serverining afzalliklari nimada?",
        en: "What are the benefits of a Windows Server?",
      },
      description: {
        ru: (
          <>
            <p>Windows серверы просты в управлении, безопасны, устойчивы к сетевым атакам, хорошо защищены от утраты, намеренного несанкционированного изменения, кражи информации, что особенно важно в бизнесе. Они отлично подходят для ситуаций, когда компания уже использует экосистему от Microsoft, ее библиотеки и программные приложения.</p>
          </>
        ),
        uz: (
          <>
            <p>Windows serverlarini boshqarish oson, xavfsiz, tarmoq hujumlariga chidamli, yo'qotish, qasddan ruxsatsiz o'zgartirishlar va ma'lumotlarni o'g'irlashdan yaxshi himoyalangan, bu biznesda ayniqsa muhimdir. Ular kompaniya allaqachon Microsoft ekotizimidan, uning kutubxonalaridan va dasturiy ilovalaridan foydalanayotgan holatlar uchun juda mos keladi.</p>
          </>
        ),
        en: (
          <>
            <p>Windows servers are easy to manage, secure, resistant to network attacks, well protected from loss, intentional unauthorized change, theft of information, which is especially important in business. They are great for situations where the company already uses the Microsoft ecosystem, its libraries and software applications.</p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какие операционные системы Windows можно установить?",
        uz: "Qanday Windows operatsion tizimlarini o'rnatishim mumkin?",
        en: "What Windows operating systems can be installed?",
      },
      description: {
        ru: (
          <>
            <p>Допустимо использование различных редакций серверной версии Windows. Мы рекомендуем ставить наиболее свежие операционные системы, как максимально функциональные, оптимизированные, безопасные.</p>
          </>
        ),
        uz: (
          <>
            <p>Windows server versiyasining turli nashrlaridan foydalanish maqbuldir. Biz eng so'nggi operatsion tizimlarni o'rnatishni tavsiya qilamiz, chunki ular eng funktsional, optimallashtirilgan va xavfsizdir.</p>
          </>
        ),
        en: (
          <>
            <p>It is permissible to use different editions of the server version of Windows. We recommend installing the most recent operating systems, as the most functional, optimized, and secure.</p>
          </>
        ),
      },
    },
  ];

  const whyBlock = [
    {
      title: {
        ru: "Надежность.",
        uz: "Ishonchlilik.",
        en: "Reliability.",
      },
      description: {
        ru: (
          <p>
            VPS сервер Windows находится в центре, соответствующем стандарту TIER-III, укомплектованном наиболее современным, надежным оборудованием от именитых мировых брендов.
          </p>
        ),
        uz: (
          <p>
            Windows VPS serveri jahonning mashhur brendlarining eng zamonaviy, ishonchli uskunalari bilan jihozlangan TIER-III standartiga mos markazda joylashgan.
          </p>
        ),
        en: (
          <p>
            The Windows VPS server is located in a TIER-III compliant facility equipped with the most modern, reliable equipment from renowned global brands.
          </p>
        ),
      },
      icon: serversIcon,
    },
    {
      title: {
        ru: "Скорость активации.",
        uz: "Faollashtirish tezligi.",
        en: "Activation speed.",
      },
      description: {
        ru: (
          <p>
            Мы активируем VDS буквально за пару часов. Непосредственно после запуска серверы на 100% готовы к использованию.
          </p>
        ),
        uz: (
          <p>
            Biz VDSni bir necha soat ichida faollashtiramiz. Ishga tushirilgandan so'ng darhol serverlar foydalanishga 100% tayyor.
          </p>
        ),
        en: (
          <p>
            We activate VDS in just a couple of hours. Immediately after launch, the servers are 100% ready for use.
          </p>
        ),
      },
      icon: lesssonIcon,
    },
    {
      title: {
        ru: "Высокая скорость обмена данными.",
        uz: "Yuqori ma'lumot almashish tezligi.",
        en: "High speed data exchange.",
      },
      description: {
        ru: (
          <p>
            Серверы укомплектованы твердотельными накопителями, что повышает общую вычислительную мощность, позволяет быстро решать любые задачи, вне зависимости от требований и степени сложности.
          </p>
        ),
        uz: (
          <p>
            Serverlar qattiq holatdagi disklar bilan jihozlangan bo'lib, bu umumiy hisoblash quvvatini oshiradi va talablar va murakkablik darajasidan qat'i nazar, har qanday muammolarni tezda hal qilish imkonini beradi.
          </p>
        ),
        en: (
          <p>
            The servers are equipped with solid-state drives, which increases the overall computing power and allows you to quickly solve any problems, regardless of the requirements and level of complexity.
          </p>
        ),
      },
      icon: databaseIcon,
    },
    {
      title: {
        ru: "Профессиональная техподдержка.",
        uz: "Professional texnik yordam.",
        en: "Professional technical support.",
      },
      description: {
        ru: (
          <p>
            Обратиться к операторам нашей службы поддержки можно по телефону, электронной почте, через мессенджер в любое время суток, независимо от выходных и праздников. Мы максимально оперативно обрабатываем заявки, предоставляем исчерпывающие консультации.
          </p>
        ),
        uz: (
          <p>
            Dam olish kunlari va bayramlardan qat'i nazar, kunning istalgan vaqtida telefon, elektron pochta yoki messenjer orqali qo'llab-quvvatlash xizmati operatorlari bilan bog'lanishingiz mumkin. Biz arizalarni iloji boricha tezroq ko'rib chiqamiz va har tomonlama maslahat beramiz.
          </p>
        ),
        en: (
          <p>
            You can contact our support service operators by phone, email, or messenger at any time of the day, regardless of weekends and holidays. We process requests as quickly as possible and provide comprehensive consultations.
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Выгодные цены.",
        uz: "Qulay narxlar.",
        en: "Favorable prices.",
      },
      description: {
        ru: (
          <p>
            Серверы VPS используются, как правило, для решения коммерческих задач, так что мы снизили стоимость услуг для вашей максимальной выгоды.
          </p>
        ),
        uz: (
          <p>
            VPS serverlari odatda tijorat muammolarni hal qilish uchun ishlatiladi, shuning uchun biz maksimal foyda olish uchun xizmatlar narxini pasaytirdik.
          </p>
        ),
        en: (
          <p>
            VPS servers are typically used for commercial purposes, so we have reduced the cost of services for your maximum benefit.
          </p>
        ),
      },
      icon: warrantyIcon,
    },
    {
      title: {
        ru: "Идеальная репутация.",
        uz: "Mukammal obro'.",
        en: "Perfect reputation.",
      },
      description: {
        ru: (
          <p>
            Наши серверы уже используют сотни и тысячи клиентов, высокое качество услуг подтверждается множеством положительных отзывов. Среди наших партнеров – крупнейшие мировые IT-предприятия, в том числе Яндекс, Cisco, Intel.
          </p>
        ),
        uz: (
          <p>
            Nashi servery uje ispolzuyut sotni va tysyachi mijozov, vysokoe kachestvo uslug podtverjdaetsya mnojestvom polojitelnyh otzyvov. Sredi nashix partnerov – krupneyshie mirrovye IT-predpriyatiya, v tom chisle Yandeks, Cisco, Intel.
          </p>
        ),
        en: (
          <p>
            Our servers are already used by hundreds and thousands of clients, the high quality of services is confirmed by many positive reviews. Among our partners are the world's largest IT companies, including Yandex, Cisco, Intel.
          </p>
        ),
      },
      icon: warrantyIcon,
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
        ru: "Аренда серверов Windows",
        uz: "Windows server ijarasi",
        en: "Windows server rentals",
      },
      link: {
        ru: "/vds/arenda-servera-windows",
        uz: "/uz/vds/arenda-servera-windows",
        en: "/en/vds/arenda-servera-windows",
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
            <h1>{langData.headTitle[language]}</h1><br />
            <h2>{langData.headTitleH2[language]}</h2>
          </Container>

          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            // headTitle={langData.headTitle[language]}
            // title="Тарифы"
            description={<TarifFeatures items={[langData.dsc[language], langData.dsc2[language], langData.dsc3[language]]} />}
            // txt={<p>{langData.txt[language]}</p>}
            className="mt-0 px-0"
            endText={
              <div className="text-white text-center mt-2">
                <p>{langData.endText[language]}</p>
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
          // description={langData.whyBlockDescription[language]}
          content={whyBlock}
          language={language}
        />

        <ForLinux data={ForLinuxVDSData} language={language} />
        
        <Container
          title={langData.headTitleC[language]}
          // description={<p className="center">{langData.dscC[language]}</p>}
          description={<p className="center"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>{langData.dsc[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M303.69-144q-34.69 0-64.19-15T182-205q-40.94-45.32-63.97-108.11T95-442q0-77.2 30.5-145.1Q156-655 208.5-706t122.46-80.5q69.96-29.5 149.5-29.5t149.04 30q69.5 30 122 82T834-582.5q30 69.5 30 148.3 0 71.38-24.4 133.49-24.39 62.11-69.28 104.75Q743-170 713.94-157q-29.06 13-59.06 13-16.88 0-34.88-4.5-18-4.5-35-12.5l-57-28q-11-5-21.5-7.5T483-199q-15 0-30.23 3.5T424-185l-49 24q-17 8-35 12.5t-36.31 4.5Zm.31-71q10 0 19.5-2.5T343-225l48-25q20-11 43.16-16 23.16-5 46.84-5 22 0 41.57 4.29Q542.13-262.43 560-253l56 28q11 5 19.5 7.5T654-215q17 0 33.5-7.5T721-246q35-32 53-79.5T792-429q0-132-90.54-223.5t-221-91.5Q350-744 258.5-653.21T167-433q0 56 18.5 104.5T238-247q17 17.3 33 24.65 16 7.35 33 7.35Zm176-265Zm51 86.85q21-21.15 21-50.85 0-8-1.75-16T545-476l53-69q12 14 19.88 30.08Q625.75-498.85 631-480h73q-14-84-77.19-138T480-672q-85 0-148 54.5T256-480h72.6q12.4-53 54.97-86.5t96.04-33.5q16.83 0 31.68 3 14.85 3 28.71 9l-54.85 72H480.2q-29.79 0-50.99 21.21-21.21 21.21-21.21 51T429.21-393q21.21 21 51 21T531-393.15Z"/></svg>{langData.dsc2[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="m437-249 183-231H471l26-221-173 269h146l-33 183ZM336-96l48-264H192l324-504h72l-36 312h216L408-96h-72Zm136-379Z"/></svg>{langData.dsc3[language]}</p>}
          clNTitle="text-center"
          className="pb-0"
        ></Container>
        <Calculator language={language} />
        
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
