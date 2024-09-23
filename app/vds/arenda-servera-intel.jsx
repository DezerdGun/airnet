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
        ru: (
          <p>
            Взятые у нас в аренду сервера Intel работают стабильно и не
            ломаются. Это хорошо для вашего проекта. Благодаря качеству сервера
            Intel минимизируется риск сбоев.
          </p>
        ),
        uz: (
          <p>
            Bizdan ijaraga olingan Intel serverlari barqaror ishlaydi va
            buzilmaydi. Bu sizning loyihangiz uchun yaxshi. Intel serverining
            sifati tufayli ishdan chiqish xavfi minimallashtiriladi.
          </p>
        ),
        en: (
          <p>
            Intel servers rented from us work stably and do not break down. This
            is good for your project. Thanks to the quality of the Intel server,
            the risk of failure is minimized.
          </p>
        ),
      },
      icon: serversIcon,
    },
    {
      title: {
        ru: "Удобные планы и настройки.",
        uz: "Qulay rejalar va sozlamalar.",
        en: "Convenient plans and settings.",
      },
      description: {
        ru: (
          <p>
            Мы предлагаем разные планы и настройки серверов. При аренде серверов
            Intel вы сможете выбрать то, что вам нужно.
          </p>
        ),
        uz: (
          <p>
            Biz turli xil rejalar va server sozlamalarini taklif qilamiz. Intel
            serverlarini ijaraga olayotganda siz o'zingizga kerakli narsani
            tanlashingiz mumkin.
          </p>
        ),
        en: (
          <p>
            We offer different plans and server settings. When renting Intel
            servers, you can choose what you need.
          </p>
        ),
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
        ru: (
          <p>
            У нас есть команда, которая помогает круглосуточно. Вы всегда можете
            получить удаленную помощь с сервером или арендой.
          </p>
        ),
        uz: (
          <p>
            Bizda kechayu kunduz yordam beradigan jamoamiz bor. Siz har doim
            server yoki ijara bo'yicha masofaviy yordam olishingiz mumkin.
          </p>
        ),
        en: (
          <p>
            We have a team that helps around the clock. You can always get
            remote help with a server or rental.
          </p>
        ),
      },
      icon: databaseIcon,
    },
    {
      title: {
        ru: "Сохранность конфиденциальности.",
        uz: "Maxfiylikni saqlash.",
        en: "Maintaining confidentiality.",
      },
      description: {
        ru: (
          <p>
            Ваши данные будут в безопасности на наших серверах Intel. Мы защитим
            их от любых угроз во время аренды.
          </p>
        ),
        uz: (
          <p>
            Sizning ma'lumotlaringiz bizning Intel serverlarimizda xavfsiz
            bo'ladi. Biz ijara vaqtida ularni har qanday tahdidlardan himoya
            qilamiz.
          </p>
        ),
        en: (
          <p>
            Your data will be safe on our Intel servers. We will protect them
            from any threats during the rental.
          </p>
        ),
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
        ru: (
          <p>
            Наши серверы Intel можно масштабировать. Если ваш бизнес вырастет,
            мы поможем адаптироваться.
            <br />
            Арендованные серверы Intel экономят энергию. Это снижает ваши
            расходы.
          </p>
        ),
        uz: (
          <p>
            Bizning Intel serverlarimiz kengaytirilishi mumkin. Biznesingiz
            o'sishi bilan biz sizga moslashishga yordam beramiz.
            <br />
            Ijaraga olingan Intel serverlari energiyani tejaydi. Bu sizning
            xarajatlaringizni kamaytiradi.
          </p>
        ),
        en: (
          <p>
            Our Intel servers are scalable. As your business grows, we can help
            you adapt.
            <br />
            Rented Intel servers save energy. This reduces your costs.
          </p>
        ),
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
            Мы работаем с Intel и знаем все о новых серверных технологиях. Это
            делает вашу работу лучше.
          </p>
        ),
        uz: (
          <p>
            Biz Intel bilan ishlaymiz va yangi server texnologiyalari haqida
            hamma narsani bilamiz. Bu sizning ishingizni yaxshilaydi.
          </p>
        ),
        en: (
          <p>
            We work with Intel and know everything about new server
            technologies. It makes your work better.
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

  const breadCrumbs = [
    ...breadCrumbsVds,
    {
      name: {
        ru: "Аренда серверов intel",
        uz: "Intel server ijarasi",
        en: "Intel server rental",
      },
      link: "/vds/arenda-servera-intel",
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
