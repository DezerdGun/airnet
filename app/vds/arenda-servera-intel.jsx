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
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductVDSIntel from "../../components/seo/productvdsintel";
import { breadCrumbsVds } from "./index";
import { forFreeVDSData } from "../vds";
import { forContractVDSData } from "../vds";
import { forSupportVDSData } from "../vds";
import { forDatacenterVDSData } from "../vds";
import { forContractArticlesData } from "../vds";

export const ForIntelVDSData = {
  title: {
    ru: (
      <>
        Выбор сервера на Intel® зависит от ваших нужд и чего вы хотите. Вот что
        важно при выборе сервера:
      </>
    ),
    uz: (
      <>
        Выбор сервера на Intel® зависит от ваших нужд и чего вы хотите. Вот что
        важно при выборе сервера:
      </>
    ),
    en: (
      <>
        Выбор сервера на Intel® зависит от ваших нужд и чего вы хотите. Вот что
        важно при выборе сервера:
      </>
    ),
  },
  desc: {
    ru: <></>,
    uz: <></>,
    en: <></>,
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
        ru: "Частота ядра. Чем выше частота, тем быстрее сервер справляется с задачами. Это хорошо для задач, которые нельзя делать одновременно на разных ядрах.",
        uz: "Частота ядра. Чем выше частота, тем быстрее сервер справляется с задачами. Это хорошо для задач, которые нельзя делать одновременно на разных ядрах.",
        en: "Частота ядра. Чем выше частота, тем быстрее сервер справляется с задачами. Это хорошо для задач, которые нельзя делать одновременно на разных ядрах.",
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
        ru: "Кэш сервера. Больший кэш помогает быстрее работать с данными.",
        uz: "Кэш сервера. Больший кэш помогает быстрее работать с данными.",
        en: "Кэш сервера. Больший кэш помогает быстрее работать с данными.",
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
        ru: "Разъемы и память: Проверьте, подходят ли разъемы и память сервера для ваших нужд.",
        uz: "Разъемы и память: Проверьте, подходят ли разъемы и память сервера для ваших нужд.",
        en: "Разъемы и память: Проверьте, подходят ли разъемы и память сервера для ваших нужд.",
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
        ru: "Энергопотребление. Выберите сервер, который мало потребляет энергии, чтобы сэкономить на электричестве и обслуживании.",
        uz: "Энергопотребление. Выберите сервер, который мало потребляет энергии, чтобы сэкономить на электричестве и обслуживании.",
        en: "Энергопотребление. Выберите сервер, который мало потребляет энергии, чтобы сэкономить на электричестве и обслуживании.",
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
      ru: "Аренда сервера на базе Intel Xeon",
      uz: "Intel Xeon asosidagi serverni ijaraga oling",
      en: "Rent a server based on Intel Xeon",
    },
    desc: {
      ru: "Аренда сервера на базе Intel Xeon - ⚡от 200 000 сум✔️ Бесплатно 1 выделенный IP-адрес ✔️Тестовый период✔️Установка ОС",
      uz: "Intel Xeon asosidagi serverni ijaraga oling - ⚡200 000 so'mdan✔️ Bepul 1 ta ajratilgan IP manzil ✔️Sinov muddati✔️OS o'rnatilishi",
      en: "Rent a server based on Intel Xeon - ⚡from 200,000 sum✔️ Free 1 dedicated IP address ✔️Test period✔️OS installation",
    },
    whyBlockTitle: {
      ru: "Преимущества",
      uz: "Преимущества",
      en: "Преимущества",
    },
    whyBlockDescription: {
      ru: (
        <p>
          Просмотрите наши тарифы на сервера Intel ниже. Выберите нужный вам.
          <br /> Если вы выберете нашу услугу аренды сервера Intel Xeon, вы
          получите много преимуществ:
        </p>
      ),
      uz: (
        <p>
          Quyida Intel serverimiz narxlarini koʻring. Sizga kerak bo'lganini
          tanlang.
          <br />
          Agar siz bizning Intel Xeon serverlarini ijaraga olish xizmatimizni
          tanlasangiz, siz ko'plab imtiyozlarga ega bo'lasiz:
        </p>
      ),
      en: (
        <p>
          View our Intel server rates below. Choose the one you need.
          <br />
          If you choose our Intel Xeon server rental service, you will receive
          many benefits:
        </p>
      ),
    },
    headTitle: {
      ru: "Аренда серверов intel",
      uz: "Intel server ijarasi",
      en: "Intel server rental",
    },
    dsc: {
      ru: (
        <p>
          Мы продаем мощные серверы Intel. Они работают быстро и надежно.
          <br />
          Это хорошо для вашего бизнеса. Наши специалисты следят за серверами
          круглосуточно.
          <br />
          Они помогают, чтобы все работало без сбоев. Вы можете арендовать
          сервер Intel на территории Узбекистана уже сегодня!
        </p>
      ),
      uz: (
        <p>
          Biz kuchli Intel serverlarini sotamiz. Ular tez va ishonchli ishlaydi.
          <br />
          Bu sizning biznesingiz uchun yaxshi. Mutaxassislarimiz serverlarni
          kechayu kunduz kuzatib boradilar.
          <br />
          Ular hamma narsani muammosiz bajarishga yordam beradi. Bugun
          O'zbekistonda Intel serverini ijaraga olishingiz mumkin!
        </p>
      ),
      en: (
        <p>
          We sell powerful Intel servers. They work quickly and reliably.
          <br />
          It's good for your business. Our specialists monitor the servers
          around the clock.
          <br />
          They help keep everything running smoothly. You can rent an Intel
          server in Uzbekistan today!
        </p>
      ),
    },
    dsc2: {
      ru: "Сервера в Узбекистане (Ташкент)",
      uz: "O'zbekistondagi serverlar (Toshkent)",
      en: "Servers in Uzbekistan (Tashkent)",
    },
    dsc3: {
      ru: "Подключение к TAS-IX",
      uz: "TAS-IX ga ulanmoqda",
      en: "Connecting to TAS-IX",
    },
    dsc4: {
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
        ru: "Надёжная серверная инфраструктура",
        uz: "Ishonchli server infratuzilmasi",
        en: "Reliable server infrastructure",
      },
      description: {
        ru: (
          <p>
            Серверы на базе Intel обеспечивают стабильную работу и предсказуемую производительность.
            Минимизация сбоев и высокая отказоустойчивость позволяют вашим сервисам работать без перебоев.
          </p>
        ),
        uz: (
          <p>
            Intel asosidagi serverlar barqaror ishlashni va oldindan aytib bo'ladigan ishlashni ta'minlaydi.
            Minimallashtirilgan nosozliklar va yuqori nosozliklarga chidamlilik xizmatlaringizning uzluksiz ishlashiga imkon beradi.
          </p>
        ),
        en: (
          <p>
            Intel-based servers ensure stable operation and predictable performance.
            Minimized failures and high fault tolerance allow your services to run without interruption.
          </p>
        ),
      },
      icon: serversIcon,
    },
    {
      title: {
        ru: "Гибкие тарифы и конфигурации",
        uz: "Moslashuvchan tariflar va konfiguratsiyalar",
        en: "Flexible tariffs and configurations",
      },
      description: {
        ru: (
          <p>
            Доступны различные варианты конфигураций под любые задачи — от базовых до высоконагруженных.
            Выбирайте ресурсы, которые соответствуют требованиям вашего проекта, без переплаты.
          </p>
        ),
        uz: (
          <p>
            Oddiydan tortib, og'ir yuklamagacha bo'lgan har qanday vazifaga mos keladigan turli xil konfiguratsiyalar mavjud.
            Loyihangiz talablariga javob beradigan resurslarni ortiqcha to'lovsiz tanlang.
          </p>
        ),
        en: (
          <p>
            A variety of configurations are available to suit any task, from basic to high-load.
            Choose the resources that meet your project's requirements without overpaying.
          </p>
        ),
      },
      icon: lesssonIcon,
    },
    {
      title: {
        ru: "Круглосуточная техническая поддержка",
        uz: "24/7 texnik yordam",
        en: "24/7 technical support",
      },
      description: {
        ru: (
          <p>
            Инженеры поддержки доступны 24/7.
            Оперативно помогаем с настройкой, администрированием и устранением инцидентов.
          </p>
        ),
        uz: (
          <p>
            Bizning qo'llab-quvvatlash muhandislarimiz 24/7 xizmatingizda.
            Biz sozlash, boshqarish va noxush holatlarni hal qilishda tezkor yordam ko'rsatamiz.
          </p>
        ),
        en: (
          <p>
            Our support engineers are available 24/7.
            We provide prompt assistance with setup, administration, and incident resolution.
          </p>
        ),
      },
      icon: databaseIcon,
    },
    {
      title: {
        ru: "Защита данных и безопасность",
        uz: "Ma'lumotlarni himoya qilish va xavfsizlik",
        en: "Data protection and security",
      },
      description: {
        ru: (
          <p>
            Инфраструктура построена с учётом современных требований к безопасности.
            Ваши данные защищены от внешних угроз и несанкционированного доступа.
          </p>
        ),
        uz: (
          <p>
            Infratuzilma zamonaviy xavfsizlik talablarini hisobga olgan holda qurilgan.
            Ma'lumotlaringiz tashqi tahdidlar va ruxsatsiz kirishdan himoyalangan.
          </p>
        ),
        en: (
          <p>
            The infrastructure is built with modern security requirements in mind.
            Your data is protected from external threats and unauthorized access.
          </p>
        ),
      },
      icon: warningIcon,
    },
    {
      title: {
        ru: "Масштабируемость под рост проекта",
        uz: "Loyiha o'sishiga moslashish uchun masshtablash imkoniyati",
        en: "Scalability to accommodate project growth",
      },
      description: {
        ru: (
          <p>
            Ресурсы можно увеличивать по мере роста нагрузки.
            Вы не ограничены текущими параметрами и можете развивать проект без смены инфраструктуры.
          </p>
        ),
        uz: (
          <p>
            Ish hajmi oshgani sayin resurslar kengaytirilishi mumkin.
            Siz joriy parametrlar bilan cheklanmaysiz va infratuzilmani o'zgartirmasdan loyihani ishlab chiqishingiz mumkin.
          </p>
        ),
        en: (
          <p>
            Resources can be expanded as the workload grows.
            You're not limited by current parameters and can develop the project without changing the infrastructure.
          </p>
        ),
      },
      icon: warrantyIcon,
    },
    {
      title: {
        ru: "Современные технологии",
        uz: "Zamonaviy texnologiyalar",
        en: "Modern technologies",
      },
      description: {
        ru: (
          <p>
            Используем актуальные серверные решения и регулярно обновляем инфраструктуру.
            Это обеспечивает стабильную производительность и соответствие современным требованиям.
          </p>
        ),
        uz: (
          <p>
            Biz eng zamonaviy server yechimlaridan foydalanamiz va infratuzilmamizni muntazam ravishda yangilab boramiz. 
            Bu barqaror ishlash va zamonaviy talablarga muvofiqlikni ta'minlaydi.
          </p>
        ),
        en: (
          <p>
            We use up-to-date server solutions and regularly update our infrastructure.
            This ensures stable performance and compliance with modern requirements.
          </p>
        ),
      },
      icon: infiniteIcon,
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
        ru: "Аренда серверов intel",
        uz: "Intel server ijarasi",
        en: "Intel server rental",
      },
      link: {
        ru: "/vds/arenda-servera-intel",
        uz: "/uz/vds/arenda-servera-intel",
        en: "/en/vds/arenda-servera-intel",
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
            title="Тарифы"
            description={<p>{langData.dsc[language]} <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>{langData.dsc2[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="M303.69-144q-34.69 0-64.19-15T182-205q-40.94-45.32-63.97-108.11T95-442q0-77.2 30.5-145.1Q156-655 208.5-706t122.46-80.5q69.96-29.5 149.5-29.5t149.04 30q69.5 30 122 82T834-582.5q30 69.5 30 148.3 0 71.38-24.4 133.49-24.39 62.11-69.28 104.75Q743-170 713.94-157q-29.06 13-59.06 13-16.88 0-34.88-4.5-18-4.5-35-12.5l-57-28q-11-5-21.5-7.5T483-199q-15 0-30.23 3.5T424-185l-49 24q-17 8-35 12.5t-36.31 4.5Zm.31-71q10 0 19.5-2.5T343-225l48-25q20-11 43.16-16 23.16-5 46.84-5 22 0 41.57 4.29Q542.13-262.43 560-253l56 28q11 5 19.5 7.5T654-215q17 0 33.5-7.5T721-246q35-32 53-79.5T792-429q0-132-90.54-223.5t-221-91.5Q350-744 258.5-653.21T167-433q0 56 18.5 104.5T238-247q17 17.3 33 24.65 16 7.35 33 7.35Zm176-265Zm51 86.85q21-21.15 21-50.85 0-8-1.75-16T545-476l53-69q12 14 19.88 30.08Q625.75-498.85 631-480h73q-14-84-77.19-138T480-672q-85 0-148 54.5T256-480h72.6q12.4-53 54.97-86.5t96.04-33.5q16.83 0 31.68 3 14.85 3 28.71 9l-54.85 72H480.2q-29.79 0-50.99 21.21-21.21 21.21-21.21 51T429.21-393q21.21 21 51 21T531-393.15Z"/></svg>{langData.dsc3[language]}   <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d5446"><path d="m437-249 183-231H471l26-221-173 269h146l-33 183ZM336-96l48-264H192l324-504h72l-36 312h216L408-96h-72Zm136-379Z"/></svg>{langData.dsc4[language]}</p>}
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

        <WhyBlock
          title={langData.whyBlockTitle[language]}
          description={langData.whyBlockDescription[language]}
          content={whyBlock}
          language={language}
        />
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
        <ForContract data={forContractArticlesData} language={language} />
        <ForDatacenter data={forDatacenterVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />
      </div>
    </>
  );
}
