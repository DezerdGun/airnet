import Container from "@/components/container";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import SEO from "@/components/seo";
import st from "./dedicated.module.scss";
import ForFreeBlock from "@/components/forFreeBlock";
import Reviews from "@/components/reviews";
import ForContract from "@/components/forContract";
import ForSupport from "@/components/forSupport";
import ForDatacenter from "@/components/forDatacenter";
import { forContractVDSData } from "../vds";
import { forSupportVDSData } from "../vds";
import { forDatacenterVDSData } from "../vds";
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ServerHero from "@/components/serverHero";
import ProductDedicated from "../../components/seo/productdedicated";
import WhyBlock from "@/components/whyBlock";
import { serversIcon } from "shared/icons/serversIcon";
import { lesssonIcon } from "shared/icons/lessonIcon";
import { databaseIcon } from "shared/icons/databaseIcon";
import { warningIcon } from "shared/icons/warningIcon";
import FAQ from "@/components/faq";
import CustomTable from "@/components/customTable";

export default function Dedicated({ language }) {
  const checkedCircle = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
          fill="#0e6a4e"
        />
      </svg>
    ),
    infoCircle = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
      </svg>
    ),
    table = [
      {
        proc: "2 x Xeon",
        procTitle: "E5-2670",
        core: { ru: "32 ядра", uz: "32 yadro", en: "32 cores" },
        herz: "2.6",
        ram: 256,
        ssd: {
          ru: "4 x 1000 Гб SSD, RAID 5",
          uz: "4 x 1000 GB SSD, RAID 5",
          en: "4 x 1000 GB SSD, RAID 5",
        },
        settingsRam: 16,
        settingsOther: {
          ru: "12 шт. SSD",
          uz: "12 ta. SSD",
          en: "12 pcs. SSD",
        },
        price: "15 000 000",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=dedicated&tarif=113",
      },
      {
        proc: "2 x Xeon",
        procTitle: "E5-2690 v4",
        core: { ru: "56 ядер", uz: "56 yadro", en: "56 cores" },
        herz: "2.6",
        ram: 256,
        ssd: {
          ru: "6 x 1000 Гб SSD, RAID 5",
          uz: "6 x 1000 GB SSD, RAID 5",
          en: "6 x 1000 GB SSD, RAID 5",
        },
        settingsRam: 16,
        settingsOther: {
          ru: "12 шт. SSD",
          uz: "12 ta. SSD",
          en: "12 pcs. SSD",
        },
        price: "18 000 000",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=dedicated&tarif=113",
      },
      {
        proc: "2 x Xeon",
        procTitle: "Intel Xeon Gold 6252",
        core: { ru: "48 ядер", uz: "48 yadro", en: "48 cores" },
        herz: "2.1",
        ram: 384,
        ssd: {
          ru: "6 x 1000 Гб SSD, RAID 5",
          uz: "6 x 1000 GB SSD, RAID 5",
          en: "6 x 1000 GB SSD, RAID 5",
        },
        settingsRam: 16,
        settingsOther: {
          ru: "6 шт. SSD",
          uz: "6 ta. SSD",
          en: "6 pcs. SSD",
        },
        price: "25 000 000",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=dedicated&tarif=113",
      },
      {
        proc: "2 x Xeon",
        procTitle: "Intel Xeon Gold 6152 ",
        core: { ru: "88 ядер", uz: "88 yadro", en: "88 cores" },
        herz: "2.1",
        ram: 768,
        ssd: {
          ru: "10 x 1000 Гб SSD, RAID 5",
          uz: "10 x 1000 GB SSD, RAID 5",
          en: "10 x 1000 GB SSD, RAID 5",
        },
        settingsRam: 16,
        settingsOther: {
          ru: "6 шт. SSD",
          uz: "6 ta. SSD",
          en: "6 pcs. SSD",
        },
        price: "28 000 000",
        link: "https://billing.airnet.uz/billing.php?do=order&vid=dedicated&tarif=113",
      },
    ];

  const forFreeDedicatedData = {
    title: {
      ru: "Что входит в услугу аренды сервера",
      uz: "Server ijarasi xizmatiga nimalar kiradi",
      en: "What is included in the server rental service",
    },
    img: "/forFreeBlock/cat.png",
    content: [
      {
        title: {
          ru: "Бесплатная настройка и установка сервера",
          uz: "Bepul serverni o'rnatish va o'rnatish",
          en: "Free server setup and installation",
        },
        img: checkedCircle,
      },
      {
        title: {
          ru: "Все сервера подключаются к порту 10 Gbps, интернет на скорости до 250 Mbit/s без ограничений и 1 Gbps в зоне TAS-IX.",
          uz: "Barcha serverlar 10 Gbit/s portga ulangan, internet yoqilgan cheklovsiz 250 Mbit/s gacha tezlik va TAS-IX zonasida 1 Gbit/s gacha.",
          en: "All servers are connected to a 10 Gbps port, Internet at speeds up to 250 Mbit/s without restrictions and 1 Gbps in the TAS-IX zone.",
        },
        img: checkedCircle,
      },
      {
        title: {
          ru: "На каждый сервер бесплатно выделяется 1 IPv4 адрес., стоимость дополнительного IP - 20 000 сум",
          uz: "Har bir server uchun 1 ta IPv4 manzili bepul ajratiladi, qo'shimcha IP narxi 20 000 so'm",
          en: "1 IPv4 address is allocated for each server free of charge, the cost of an additional IP is 20,000 sums",
        },
        img: checkedCircle,
      },
      {
        title: {
          ru: "Операционные системы для установки: Linux и Windows Server (или ISO по запросу пользователя)",
          uz: "O'rnatish uchun operatsion tizimlar: Linux va Windows Server (yoki foydalanuvchi talabiga binoan ISO)",
          en: "Operating systems for installation: Linux and Windows Server (or ISO upon user request)",
        },
        img: checkedCircle,
      },
    ],
  };

  const langData = {
    seoTitle: {
      ru: "Аренда выделенного сервера Deticated в Узбекистане - цены, тарифы",
      uz: "O'zbekistonda Deticated maxsus server ijarasi - narxlar, tariflar",
      en: "Rent a dedicated server Deticated in Uzbekistan - prices, tariffs",
    },
    descTitle: {
      ru: "Аренда Dedicated сервера. Дата центр в Ташкенте. Установим и активируем мощный сервер за 120 минут ✔️Бесплатная настройка и установка сервера",
      uz: "Maxsus server ijarasi. Toshkentdagi Data-markaz. Biz 120 daqiqada kuchli serverni o'rnatamiz va faollashtiramiz ✔️Bepul serverni sozlash va o'rnatish",
      en: "Dedicated server rental. Data center in Tashkent. We will install and activate a powerful server in 120 minutes ✔️Free server setup and installation",
    },
    headTitle: {
      ru: "Выделенные сервера",
      uz: "Serverlarni ajtarish",
      en: "Dedicated Servers",
    },
    description: {
      ru: "Установим и активируем сервер за 120 минут, добавим диски и память за сутки по согласованию с отделом продаж",
      uz: "Serverni 120 daqiqada o'rnating va faollashtiring, bir kunda disk va xotira qo'shing savdo bo'limi bilan muvofiqlashtiring",
      en: "Install and activate the server in 120 minutes, add disks and memory in a day in agreement with the sales department",
    },
    whyBlockTitle: {
      ru: "Почему стоит арендовать серверы в AIRNET.uz?",
      uz: "Nima uchun AIRNET.uz da serverlarni ijaraga olish arziydi?",
      en: "Why is it worth renting servers from AIRNET.uz?",
    },
    whyBlockDescription: {
      ru: "",
      uz: "",
      en: "",
    },
    hz: {
      ru: "ГГц",
      uz: "GHz",
      en: "GHz",
    },
    gb: {
      ru: "ГБ",
      uz: "GB",
      en: "GB",
    },
    span: {
      ru: (
        <>
          <span>
            сум
            <hr />
            мес.
          </span>
        </>
      ),
      uz: (
        <>
          <span>
            so'm
            <hr />
            oy.
          </span>
        </>
      ),
      en: (
        <>
          <span>
            sum
            <hr />
            mon.
          </span>
        </>
      ),
    },
    buy: {
      ru: "Заказать",
      uz: "Buyurtma berish",
      en: "Order",
    },
    arenda: {
      ru: "Арендовать сервер",
      uz: "Serverni ijagaraga olish",
      en: "Rent a server",
    },
    cT: {
      ru: (
        <>
          Срок установки сервера, после оформления заказа и оплаты, составляет
          от 30 минут до 3-х рабочих дней, в зависимости от наличия необходимых
          серверов и загрузки технического персонала. Среднее время активации
          оборудования - 24 часа. <br /> Мы делаем всё возможное, чтобы
          уменьшить время ожидания. Срок действия услуги начнется с момента её
          активации.
        </>
      ),
      uz: (
        <>
          Buyurtma va to'lovi amalga oshirgandan so'ng serverni o'rnatish
          muddati 30 daqiqadan dan keyin boshlanadi 3 ish kunigacha, zarur
          serverlar va yukning mavjudligiga qarab texnik xodimlar nazoratidan
          otadi. Uskunani faollashtirish vaqti o'rtacha 24 soat. <br /> Kutish
          vaqtini qisqartirish uchun hamma narsa mumkin. Xizmatning faollashivu
          shu paytdan boshlanadi.
        </>
      ),
      en: (
        <>
          Server installation time, after placing an order and payment, ranges
          from 30 minutes to 3 working days, depending on the availability of
          the necessary servers and the workload of the technical staff. Average
          activation time equipment - 24 hours. <br /> We do our best to reduce
          the waiting time. Service validity period will start from the moment
          it is activated.
        </>
      ),
    },
    coin: {
      ru: "Цены привязаны и указаны в сумах.",
      uz: "Narxlar bog'langan va so'mda ko'rsatilgan.",
      en: "Prices are tied and indicated in soums.",
    },
    plan: {
      ru: (
        <>
          <li>
            <span>{checkedCircle}</span>Бесплатная настройка и установка сервера
          </li>
          <li>
            <span>{checkedCircle}</span>Все сервера подключаются к порту 10
            Gbps, интернет на скорости до 250 Mbit/s без ограничений и 1 Gbps в
            зоне TAS-IX.
          </li>
          <li>
            <span>{checkedCircle}</span>
            На каждый сервер бесплатно выделяется 1 IPv4 адрес., стоимость
            дополнительного IP - 20 000 сум
          </li>
          {/* <li>
							<span>{checkedCircle}</span>Все серверы поддерживают как 32-х так и 64-х битные системы
						</li> */}
          <li>
            <span>{checkedCircle}</span>Операционные системы для установки:
            Linux и Windows Server (или ISO по запросу пользователя)
          </li>
        </>
      ),
      uz: (
        <>
          <li>
            <span>{checkedCircle}</span>
            Bepul serverni o'rnatish va o'rnatish
          </li>
          <li>
            <span>{checkedCircle}</span>Barcha serverlar 10 Gbit/s portga
            ulangan, internet yoqilgan cheklovsiz 250 Mbit/s gacha tezlik va
            TAS-IX zonasida 1 Gbit/s gacha.
          </li>
          <li>
            <span>{checkedCircle}</span>
            Har bir server uchun 1 ta IPv4 manzili bepul ajratiladi, qo'shimcha
            IP narxi 20 000 so'm
          </li>
          {/* <li>
							<span>{checkedCircle}</span>Все серверы поддерживают как 32-х так и 64-х битные системы
						</li> */}
          <li>
            <span>{checkedCircle}</span>
            O'rnatish uchun operatsion tizimlar: Linux va Windows Server (yoki
            foydalanuvchi talabiga binoan ISO)
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <span>{checkedCircle}</span>Free server setup and installation
          </li>
          <li>
            <span>{checkedCircle}</span>All servers are connected to a 10 Gbps
            port, Internet at speeds up to 250 Mbit/s without restrictions and 1
            Gbps in the TAS-IX zone.
          </li>
          <li>
            <span>{checkedCircle}</span>1 IPv4 address is allocated for each
            server free of charge, the cost of an additional IP is 20,000 sums
          </li>
          <li>
            <span>{checkedCircle}</span>Operating systems for installation:
            Linux and Windows Server (or ISO upon user request)
          </li>
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
                <td>Unlim 100M</td>
                <td>100 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>Tekin</td>
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
                <td>Unlim 100M</td>
                <td>100 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>Free</td>
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
        ru: "Какие задачи позволяет решить выделенный сервер?",
        uz: "Ajratilgan server qanday vazifalarni hal qilishi mumkin?",
        en: "What tasks can a dedicated server solve?",
      },
      description: {
        ru: (
          <>
            <p>Необходимость актуальна в следующих случаях:</p><br />
            <ul>
                <li>Потребность проекта в значительном дисковом пространстве;</li>
                <li>Виртуальному серверу не хватает производительности, не удается нормально взаимодействовать с базами данных и другими крупными структурами;</li>
                <li>Регулярность отправки больших количеств электронных писем;</li>
                <li>Необходимость в специализированном программном обеспечении;</li>
                <li>Жесткие требования в отношении информационной безопасности, сохранности данных, их защиты от несанкционированного доступа, повреждения и утраты.</li>
            </ul>
          </>
        ),
        uz: (
          <>
            <p>Ehtiyoj quyidagi hollarda tegishli:</p><br />
            <ul>
              <li>Loyihaning katta disk maydoniga bo'lgan ehtiyoji;</li>
              <li>Virtual server unumdor emas va ma'lumotlar bazalari va boshqa yirik tuzilmalar bilan normal ishlay olmaydi;</li>
              <li>Ko'p sonli elektron pochta xabarlarini yuborishning muntazamligi;</li>
              <li>Maxsus dasturiy ta'minotga ehtiyoj;</li>
              <li>Axborot xavfsizligi, ma'lumotlar xavfsizligi, ruxsatsiz kirish, shikastlanish va yo'qotishdan himoya qilish uchun qat'iy talablar.</li>
            </ul>
          </>
        ),
        en: (
          <>
            <p>The need is relevant in the following cases:</p><br />
            <ul>
              <li>The project needs significant disk space;</li>
              <li>The virtual server lacks performance, cannot interact normally with databases and other large structures;</li>
              <li>Regular sending of large quantities of emails;</li>
              <li>The need for specialized software;</li>
              <li>Strict requirements for information security, data safety, their protection from unauthorized access, damage and loss.</li>
            </ul>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как определиться с производительностью?",
        uz: "Samaradorlikni qanday aniqlash mumkin?",
        en: "How to determine productivity?",
      },
      description: {
        ru: (
          <>
            <p>
            Нужно исходить из специфики проекта. В большинстве случаев, достаточно простых серверов, высокопроизводительные – требуются при взаимодействии только с особо крупными сайтами, информационными массивами, масштабными базами данных.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Loyihaning o'ziga xos xususiyatlaridan kelib chiqish kerak. Ko'pgina hollarda oddiy, yuqori unumdor serverlar etarli - ular faqat katta saytlar, axborot massivlari va katta hajmdagi ma'lumotlar bazalari bilan o'zaro aloqada bo'lganda talab qilinadi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            It is necessary to proceed from the specifics of the project. In most cases, simple servers are sufficient, high-performance ones are required when interacting only with particularly large sites, information arrays, large-scale databases.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Что включено в услугу аренды выделенного сервера?",
        uz: "Maxsus server ijarasi xizmatiga nimalar kiradi?",
        en: "What is included in the dedicated server rental service?",
      },
      description: {
        ru: (
          <>
            <p>
            Если вы решили заказать серверы в нашей компании, мы самостоятельно установим и настроим их, привяжем IPv4-адрес. Будет выполнено подключение к порту 10 Gbps, неограниченная скорость составляет 100 мегабит в секунду, в зоне TAS-IX – 1 Gbps.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Agar siz bizning kompaniyamizdan serverlarga buyurtma berishga qaror qilsangiz, biz ularni o'zimiz o'rnatamiz va sozlaymiz va IPv4 manzilini tayinlaymiz. 10 Gbit/s portiga ulanish amalga oshiriladi, cheksiz tezlik sekundiga 100 megabit, TAS-IX zonasida – 1 Gbit/s.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            If you decide to order servers from our company, we will install and configure them ourselves, bind an IPv4 address. A connection to a 10 Gbps port will be made, unlimited speed is 100 megabits per second, in the TAS-IX zone - 1 Gbps.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как управлять сервером?",
        uz: "Serverni qanday boshqarish kerak?",
        en: "How to manage the server?",
      },
      description: {
        ru: (
          <>
            <p>
            Для управления выделенным сервером используется специальная панель. Все ее функции интуитивно понятны, здесь можно инициировать все действия, от запуска до перезагрузки и общего сброса.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Ajratilgan serverni boshqarish uchun maxsus panel ishlatiladi. Uning barcha funktsiyalari intuitivdir, bu erda siz ishga tushirishdan tortib qayta yuklash va umumiy qayta o'rnatishgacha bo'lgan barcha harakatlarni boshlashingiz mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            A dedicated server is managed using a special panel. All its functions are intuitive, here you can initiate all actions, from launch to reboot and general reset.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как оплатить сервер?",
        uz: "Server uchun qanday to'lash kerak?",
        en: "How to pay for the server?",
      },
      description: {
        ru: (
          <>
            <p>
            Стоимость аренды сервера определяется его производительностью, выбранным тарифным планом. В момент заключения договора фиксируются даты платежей, допустимо их проведение в безналичном формате.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Serverni ijaraga olish narxi uning ishlashi va tanlangan tarif rejasi bilan belgilanadi. Shartnoma tuzish vaqtida to'lovlar sanasi belgilanadi, ularni naqd pulsiz shaklda amalga oshirishga ruxsat beriladi;
            </p>
          </>
        ),
        en: (
          <>
            <p>
            The cost of renting a server is determined by its performance and the selected tariff plan. Payment dates are fixed at the time of signing the contract, and they can be made in a non-cash format.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Когда будет запущен сервер?",
        uz: "Server qachon ishga tushadi?",
        en: "When will the server be launched?",
      },
      description: {
        ru: (
          <>
            <p>
            Среднее время активации серверов – сутки с момента проведения оплаты, точное – определяется свободными мощностями, загрузкой наших специалистов. В некоторых случаях нам удается выполнить все необходимые операции за полчаса, но иногда ожидание может растянуться на 3 дня.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Serverni faollashtirishning o'rtacha vaqti to'lov amalga oshirilgan paytdan boshlab bir kun, aniq vaqt mavjud imkoniyatlar va mutaxassislarimizning ish yuki bilan belgilanadi. Ba'zi hollarda biz barcha kerakli operatsiyalarni yarim soat ichida bajarishga qodirmiz, lekin ba'zida kutish 3 kun davom etishi mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            The average time of server activation is one day from the moment of payment, the exact time is determined by free capacities, the workload of our specialists. In some cases, we manage to perform all the necessary operations in half an hour, but sometimes the wait can last for 3 days.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Возможна ли модернизация?",
        uz: "Modernizatsiya qilish mumkinmi?",
        en: "Is modernization possible?",
      },
      description: {
        ru: (
          <>
            <p>В большинстве случаев серверы можно модифицировать, перейти на более высокий тарифный план, получить дополнительное дисковое пространство, вычислительные мощности. Чтобы отправить заявку, достаточно воспользоваться личным кабинетом или специальной формой связи, представленной на сайте.</p>
          </>
        ),
        uz: (
          <>
            <p>Ko'pgina hollarda serverlar o'zgartirilishi, yuqori tarif rejasiga ko'tarilishi va qo'shimcha disk maydoni va hisoblash quvvatini olishi mumkin. Arizani yuborish uchun shaxsiy hisobingizdan yoki veb-saytda taqdim etilgan maxsus aloqa formasidan foydalaning.</p>
          </>
        ),
        en: (
          <>
            <p>In most cases, servers can be modified, upgraded to a higher tariff plan, additional disk space, computing power. To send a request, just use your personal account or a special contact form provided on the site.</p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Где будет размещен сервер?",
        uz: "Server qayerda joylashgan bo'ladi?",
        en: "Where will the server be located?",
      },
      description: {
        ru: (
          <>
            <p>
            Для размещения выделенных серверов мы используем собственный центр обработки данных. Охраняемый объект расположен в Ташкенте, сертифицирован по стандартам TIER III. ЦОД оснащен резервными источниками питаниями, на случай сбоя на основной линии, комплексами пожаротушения, видеобнаблюдением.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Biz maxsus serverlarni joylashtirish uchun o'z ma'lumotlar markazimizdan foydalanamiz. Himoya qilinadigan ob'ekt Toshkent shahrida joylashgan bo'lib, TIER III standartlari bo'yicha sertifikatlangan. Maʼlumotlar markazi magistral liniyada nosozliklar yuzaga kelganda zaxira quvvat manbalari, yongʻin oʻchirish tizimlari, videokuzatuv tizimlari bilan jihozlangan.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            To host dedicated servers, we use our own data center. The guarded facility is located in Tashkent and is certified according to TIER III standards. The data center is equipped with backup power supplies in case of a failure on the main line, fire extinguishing systems, and video surveillance.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Каковы преимущества выделенного сервера?",
        uz: "Maxsus serverning qanday afzalliklari bor?",
        en: "What are the benefits of a dedicated server?",
      },
      description: {
        ru: (
          <>
            <p>
            Серверные ресурсы используются исключительно для решения ваших задач, что обеспечивает максимальную производительность, предотвращает сбои. Данные защищены от потери, кражи, повреждения на физическом и программном уровнях. Работа серверов соответствует актуальному законодательству Узбекистана, нормам международного права.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Server resurslari faqat sizning muammolaringizni hal qilish uchun ishlatiladi, bu maksimal ishlashni ta'minlaydi va nosozliklarni oldini oladi. Ma'lumotlar jismoniy va dasturiy ta'minot darajasida yo'qolishi, o'g'irlanishi va shikastlanishidan himoyalangan. Serverlarning ishlashi O‘zbekistonning amaldagi qonunchiligi va xalqaro huquq normalariga mos keladi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Server resources are used exclusively to solve your problems, which ensures maximum performance and prevents failures. Data is protected from loss, theft, damage at the physical and software levels. The work of the servers complies with the current legislation of Uzbekistan, the norms of international law.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Предусмотрены ли бэкапы?",
        uz: "Zaxira nusxalari taqdim etilganmi?",
        en: "Are backups provided?",
      },
      description: {
        ru: (
          <>
            <p>
            При оформлении аренды выделенного сервера можно подключить и некоторые дополнительные услуги, в числе которых -  автоматическое резервирование. При необходимости делать копии можно и самостоятельно.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Ajratilgan serverni ijaraga olganingizda, ba'zi qo'shimcha xizmatlarga, jumladan, avtomatik zaxiraga ulanishingiz mumkin. Agar kerak bo'lsa, nusxalarini o'zingiz qilishingiz mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            When leasing a dedicated server, you can also connect some additional services, including automatic backup. If necessary, you can make copies yourself.
            </p>
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
            При аренде выделенного сервера возможно подключение автоматического резервирования информации, защиты от DDoS-атак, профессионального администрирования силами наших специалистов.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Ajratilgan serverni ijaraga olayotganda, ma'lumotlarning avtomatik zahirasini, DDoS hujumlaridan himoya qilish va mutaxassislarimiz tomonidan professional boshqaruvni ulash mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            When renting a dedicated server, it is possible to connect automatic information backup, protection from DDoS attacks, and professional administration by our specialists.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как обеспечивается безопасность информации?",
        uz: "Axborot xavfsizligi qanday ta'minlanadi?",
        en: "How is information security ensured?",
      },
      description: {
        ru: (
          <>
            <p>
            Наш дата-центр, использующийся для размещения серверов, соответствует всем государственным и мировым стандартам информационной безопасности. Потеря данных исключена как из-за физических сбоев, например, из-за отключения питания, так и из-за программных, сетевых атак, вирусной активности, хакерских действий.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Serverlarni joylashtirish uchun foydalaniladigan maʼlumotlar markazimiz barcha davlat va xalqaro axborot xavfsizligi standartlariga javob beradi. Ma'lumotlarning yo'qolishi jismoniy nosozliklar tufayli ham, masalan, elektr ta'minotidagi uzilishlar tufayli ham, dasturiy ta'minot, tarmoq hujumlari, viruslar faoliyati va xakerlik harakatlari tufayli ham istisno qilinadi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Our data center, used for hosting servers, complies with all state and international information security standards. Data loss is excluded both due to physical failures, such as power outages, and due to software, network attacks, virus activity, hacker actions.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какое оборудование используется для серверов?",
        uz: "Serverlar uchun qanday uskunalar ishlatiladi?",
        en: "What equipment is used for servers?",
      },
      description: {
        ru: (
          <>
            <p>
            Быстродействие серверов обеспечивается современными процессорами Intel Xeon, Intel Xeon Gold, в частности – моделями E5-2670, E5-2637v2. Также используется оперативная память высоких стандартов DDR4, надежные скоростные твердотельные накопители SSD и NVMe-формата.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Serverlarning ishlashi zamonaviy Intel Xeon va Intel Xeon Gold protsessorlari, xususan, E5-2670, E5-2637v2 modellari bilan ta'minlanadi. Bundan tashqari, yuqori standartli DDR4 RAM, ishonchli yuqori tezlikda ishlaydigan SSD va NVMe formatidagi qattiq holatdagi drayverlar ishlatiladi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            The servers' performance is ensured by modern Intel Xeon, Intel Xeon Gold processors, in particular the E5-2670, E5-2637v2 models. They also use high-standard DDR4 RAM, reliable high-speed SSD and NVMe solid-state drives.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какие доступны операционные системы?",
        uz: "Qanday operatsion tizimlar mavjud?",
        en: "What operating systems are available?",
      },
      description: {
        ru: (
          <>
            <p>
            Для управления выделенными серверами мы предлагаем Linux-подобные системы и Windows Server. Если предложенные варианты не подходят, можно загрузить свой образ, для этого нужно подать заявку в индивидуальном порядке.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Ajratilgan serverlarni boshqarish uchun biz Linuxga o'xshash tizimlar va Windows Serverni taklif qilamiz. Agar taklif qilingan variantlar mos kelmasa, siz o'zingizning rasmingizni yuklashingiz mumkin, buning uchun siz alohida ariza topshirishingiz kerak.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            For managing dedicated servers, we offer Linux-like systems and Windows Server. If the proposed options are not suitable, you can upload your own image, for this you need to submit an individual application.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как распределяются зоны ответственности?",
        uz: "Mas'uliyat sohalari qanday taqsimlanadi?",
        en: "How are areas of responsibility distributed?",
      },
      description: {
        ru: (
          <>
            <p>
            Вам нужно, в первую очередь, управлять сервером, устанавливать программное обеспечение, загружать данные, своевременно обновлять информацию. Впрочем, при необходимости, это можно поручить нашим специалистам, доступна услуга профессионального администрирования. Наша главная зона ответственности – поддержание работоспособности, защита информации, своевременная замена технических средств, их модернизация по вашему требованию.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Sizga, birinchi navbatda, serverni boshqarish, dasturiy ta'minotni o'rnatish, ma'lumotlarni yuklab olish va ma'lumotlarni o'z vaqtida yangilash kerak. Biroq, agar kerak bo'lsa, bu bizning mutaxassislarimizga ishonib topshirilishi mumkin, professional boshqaruv xizmati mavjud; Bizning asosiy mas'uliyat yo'nalishimiz - operativlikni ta'minlash, ma'lumotni himoya qilish, texnik jihozlarni o'z vaqtida almashtirish va sizning iltimosingiz bo'yicha ularni modernizatsiya qilish.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            First of all, you need to manage the server, install software, upload data, and update information in a timely manner. However, if necessary, this can be entrusted to our specialists; professional administration service is available. Our main area of ​​responsibility is maintaining operability, protecting information, timely replacement of technical equipment, and upgrading it at your request.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Доступен ли электронный документооборот?",
        uz: "Elektron hujjat aylanishi mavjudmi?",
        en: "Is electronic document management available?",
      },
      description: {
        ru: (
          <>
            <p>
            Да, наша компания использует такую схему, максимально удобную для юридических лиц.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Ha, bizning kompaniyamiz yuridik shaxslar uchun imkon qadar qulay bo'lgan bunday sxemadan foydalanadi.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Yes, our company uses this scheme, which is most convenient for legal entities.
            </p>
          </>
        ),
      },
    },
  ];

  const whyBlock = [
    {
      title: {
        ru: "Простота управления.",
        uz: "Boshqarish oson.",
        en: "Ease of control.",
      },
      description: {
        ru: (
          <p>
            Все манипуляции можно выполнить через общую панель, в которой доступны функции перезагрузки, сброса настроек.
          </p>
        ),
        uz: (
          <p>
            Barcha manipulyatsiyalar umumiy panel orqali amalga oshirilishi mumkin, unda qayta yuklash va sozlamalarni tiklash funktsiyalari mavjud.
          </p>
        ),
        en: (
          <p>
            All manipulations can be performed through the general panel, in which the functions of rebooting and resetting settings are available.
          </p>
        ),
      },
      icon: serversIcon,
    },
    {
      title: {
        ru: "Разнообразие выбора.",
        uz: "Tanlovning xilma-xilligi.",
        en: "Variety of choice.",
      },
      description: {
        ru: (
          <p>
            У нас представлены выделенные серверы, различные по производительности, соответствующие проектам как малого, так и крупного масштаба. Для управления используются операционные системы Linux, Windows Server или образы, предоставленные клиентом.
          </p>
        ),
        uz: (
          <p>
            Biz kichik va katta miqyosdagi loyihalar uchun mos bo'lgan turli xil unumdorlikdagi maxsus serverlarni taklif qilamiz. Boshqarish uchun Linux, Windows Server operatsion tizimlari yoki mijoz tomonidan taqdim etilgan tasvirlar ishlatiladi.
          </p>
        ),
        en: (
          <p>
            We offer dedicated servers with different performance levels, suitable for both small and large scale projects. The operating systems used for management are Linux, Windows Server or images provided by the client.
          </p>
        ),
      },
      icon: lesssonIcon,
    },
    {
      title: {
        ru: "Простота модернизации.",
        uz: "Yangilash oson.",
        en: "Ease of upgrading.",
      },
      description: {
        ru: (
          <p>
            При увеличении масштаба проекта, появлении необходимости в более высокой производительности, возможно усовершенствование выделенного сервера, получение дополнительной вычислительной мощности, дискового пространства.
          </p>
        ),
        uz: (
          <p>
            Loyihaning ko'lami ortib borayotgani va yuqori ishlashga bo'lgan ehtiyoj paydo bo'lishi bilan ajratilgan serverni yaxshilash va qo'shimcha hisoblash quvvati va disk maydonini olish mumkin.
          </p>
        ),
        en: (
          <p>
            As the scale of the project increases and the need for higher performance arises, it is possible to upgrade the dedicated server, obtain additional computing power and disk space.
          </p>
        ),
      },
      icon: databaseIcon,
    },
    {
      title: {
        ru: "Комплексная техническая поддержка.",
        uz: "Har tomonlama texnik yordam.",
        en: "Comprehensive technical support.",
      },
      description: {
        ru: (
          <p>
            При возникновении проблем с выделенным сервером, решить их можно при помощи нашей службы поддержки. Мы придерживаемся принципов оперативности и точности, с 4 из 5 вопросов удается справиться за час.
          </p>
        ),
        uz: (
          <p>
            Agar siz maxsus serveringiz bilan bog'liq muammolarga duch kelsangiz, ularni qo'llab-quvvatlash guruhimiz yordamida hal qilishingiz mumkin. Biz samaradorlik va aniqlik tamoyillariga amal qilamiz, 5 ta savoldan 4 tasiga bir soat ichida javob berish mumkin.
          </p>
        ),
        en: (
          <p>
            If you have problems with a dedicated server, you can solve them with the help of our support service. We adhere to the principles of efficiency and accuracy, 4 out of 5 questions can be solved within an hour.
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Надежность.",
        uz: "Ishonchlilik.",
        en: "Reliability.",
      },
      description: {
        ru: (
          <p>
            Наши дата-центры сертифицированы по стандартам TIER III, характеризуются максимальной надежностью, укомплектованы комплексами защиты от постороннего проникновения, возгорания, отключения электроснабжения. Действовать нашей компании лицензирована, мы являемся официально зарегистрированным юридическим лицом.
          </p>
        ),
        uz: (
          <p>
            Bizning ma'lumotlar markazlarimiz TIER III standartlari bo'yicha sertifikatlangan, maksimal ishonchliligi bilan ajralib turadi va ruxsatsiz kirish, yong'in va elektr uzilishlaridan himoya qilish tizimlari bilan jihozlangan. Kompaniyamiz faoliyat yuritish uchun litsenziyaga ega, biz rasmiy ro'yxatdan o'tgan yuridik shaxsmiz.
          </p>
        ),
        en: (
          <p>
            Our data centers are certified according to TIER III standards, are characterized by maximum reliability, equipped with protection systems against unauthorized entry, fire, power outage. Our company is licensed to operate, we are an officially registered legal entity.
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Индивидуальные условия сотрудничества.",
        uz: "Hamkorlikning individual shartlari.",
        en: "Individual terms of cooperation.",
      },
      description: {
        ru: (
          <p>
            Арендовать выделенный сервер могут как частные, так и юридические лица, индивидуальные предприниматели. По запросу клиента мы готовы предоставить отчетную документацию, наладить ведение электронного документооборота, перевести платежи в безналичную форму.
          </p>
        ),
        uz: (
          <p>
            Xususiy va yuridik shaxslar va yakka tartibdagi tadbirkorlar maxsus serverni ijaraga olishlari mumkin. Mijozning iltimosiga binoan biz hisobot hujjatlarini taqdim etishga, elektron hujjat aylanishini tashkil etishga va to'lovlarni naqd pulsiz shaklga o'tkazishga tayyormiz.
          </p>
        ),
        en: (
          <p>
            Both private and legal entities, sole proprietors can rent a dedicated server. At the client's request, we are ready to provide reporting documentation, establish electronic document management, and transfer payments to non-cash form.
          </p>
        ),
      },
      icon: warningIcon,
    },
  ];

  const breadCrumbs = [
    {
      name: {
        ru: "Выделенные сервера",
        uz: "Dedicated servers",
        en: "Maxsus serverlar",
      },
      link: "/dedicated",
    },
  ];

  return (
    <>
      <SEO
        title={langData.seoTitle[language]}
        desc={langData.descTitle[language]}
      />

      <ProductDedicated />
      {breadCrumbs && breadCrumbs.length ? (
        <>
          <BreadCrumbs data={breadCrumbs} language={language} />
          <PageBreadcrumb links={breadCrumbs} language={language} />
        </>
      ) : null}

      <ServerHero title={langData.headTitle[language]} language={language} />

      <div className={st.dedicated}>
        <Container
          className="mt-0 text-center"
          // style={{ background: "url('/servers.jpg') no-repeat" }}
          description={<p>{langData.description[language]}</p>}
          clNTitle="mb-4"
        >
          <>
            <div className={st.dedicated__table}>
              {/* <table>
								<thead>
									<tr>
										<th></th>
										<th>Процессор</th>
										<th>Оперативная память</th>
										<th>Жесткие диски</th>
										<th>Порт</th>
										<th>Локация</th>
										<th>Стоимость</th>
									</tr>
								</thead>
								<tbody>
									{table.map((item) => (
										<tr key={item.proc}>
											<td>{item.img}</td>
											<td>{item.proc}</td>
											<td>{item.ram} Гб</td>
											<td>{item.ssd}</td>
											<td>250 Mbit/s., неограниченный</td>
											<td>Ташкент</td>
											<td>Ожидается</td>
										</tr>
									))}
								</tbody>
							</table> */}
              <table>
                {table.map((item, i) => (
                  <tr key={item.proc}>
                    <td>
                      <div className={st.dedicated__table__count}>P{i + 1}</div>
                    </td>
                    <td>
                      <div className={st.dedicated__table__proc}>
                        <h4>{item.proc}</h4>
                        <h5>{item.procTitle}</h5>
                      </div>
                    </td>
                    <td className="text-center">{item.core[language]}</td>
                    <td className="text-center">
                      {item.herz}
                      {langData.hz[language]}
                    </td>
                    <td className="text-center">
                      {item.ram}
                      {langData.gb[language]}
                    </td>
                    <td className="text-center">{item.ssd[language]}</td>
                    {/* <td>250 Mbit/s., неограниченный</td> */}
                    {/* <td>Ташкент</td> */}
                    <td className="text-center">
                      <div className="def-price">
                        {item.price}
                        {langData.span[language]}
                      </div>
                    </td>
                    <td>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {langData.buy[language]}
                      </a>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <a
              href="https://billing.airnet.uz/billing.php?do=tarifs&vid=dedicated"
              target="_blank"
              rel="noopener noreferrer"
              className={st.dedicated__link}
            >
              {langData.arenda[language]}
            </a>
          </>
        </Container>

        <Container>
          <p className={st.dedicated__text}>
            {infoCircle}
            {langData.cT[language]}
          </p>
          <p className={st.dedicated__text}>
            {infoCircle}
            {langData.coin[language]}
          </p>
        </Container>

        <WhyBlock
          title={langData.whyBlockTitle[language]}
          description={langData.whyBlockDescription[language]}
          content={whyBlock}
          language={language}
        />

        <ForFreeBlock data={forFreeDedicatedData} language={language} />

        <Container
          className="text-center"
          title={langData.cT[language]}
          description={langData.cD[language]}
        >
          <div className={st.vds__table}>
            <CustomTable table={langData.table[language]} />
          </div>
        </Container>

        <FAQ
          faq={faq2}
          title={langData.faqTitle[language]}
          language={language}
        />

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
