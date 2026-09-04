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
import {
  forFreeVDSData,
  forContractVDSData,
  forSupportVDSData,
  forDatacenterVDSData,
  forContractArticlesData,
  breadCrumbsVds,
} from "./data";

// Реэкспорт для обратной совместимости; новый код импортирует из "./data".
export {
  forFreeVDSData,
  forContractVDSData,
  forSupportVDSData,
  forDatacenterVDSData,
  forContractArticlesData,
  breadCrumbsVds,
};
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
              Мы уверены в качестве услуг — предоставляем 100% возврат средств в течение 3 дней.
              Вы тестируете сервис без риска.
          </p>
        ),
        uz: (
          <p>
            Biz xizmatlarimiz sifatiga aminmiz — 3 kun ichida 100% pulni qaytarib berish kafolatini taqdim etamiz.
            Siz xizmatni xavfsiz sinab ko'rishingiz mumkin.
          </p>
        ),
        en: (
          <p>
              We're confident in the quality of our services—we offer a 100% money-back guarantee within 3 days.
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
                  <SwiperSlide key={index} language={language}>
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
                  <SwiperSlide key={index} language={language}>
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
                  <SwiperSlide key={index} language={language}>
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
