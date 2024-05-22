import st from "@/app/vds/vds.module.scss";
import Calculator from "@/components/calculator";
import Container from "@/components/container";
import FAQ from "@/components/faq";
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
import { serversIcon } from "shared/icons/serversIcon";
import { lesssonIcon } from "shared/icons/lessonIcon";
import { databaseIcon } from "shared/icons/databaseIcon";
import { calendarIcon } from "shared/icons/calendarIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { supportIcon } from "shared/icons/supportIcon";
import { warningIcon } from "shared/icons/warningIcon";
import { infiniteIcon } from "shared/icons/infiniteIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ForFreeBlock from "@/components/forFreeBlock";
import { forFreeVDSData } from "../vds";
import AvailableOS from "@/components/availableOS";
import VirtualServers from "@/components/virtualServers";
import Reviews from "@/components/reviews";
import ForIntel from "@/components/forIntel";
import { ForIntelVDSData } from "../vds";
import ForIntelTwo from "@/components/forIntelTwo";
import { ForIntelTwoVDSData } from "../vds";
import ForContract from "@/components/forContract";
import { forContractVDSData } from "../vds";
import ForSupport from "@/components/forSupport";
import { forSupportVDSData } from "../vds";
import ForDatacenter from "@/components/forDatacenter";
import { forDatacenterVDSData } from "../vds";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export default function CustomVDS({ language }) {
  const [show, setShow] = useState(-1);
  const langData = {
    seo: {
      ru: "Свой виртуальный сервер VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "O'z virtual serveri VDS/VPS | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Own virtual server VDS/VPS | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    desc: {
      ru: "Предложение в соотношении цены-качества-количества ресурсов, которое построенно на быстрых SSD-дисках. Оптимальные VDS/VPS в сети TAS-IX в Ташкенте",
      uz: "Tez SSD drayverlarga qurilgan narx-sifat-resurslar miqdori nisbatidagi taklif. Toshkent shahridagi TAS-IX tarmog'ida optimal VDS/VPS",
      en: "An offer in the ratio of price-quality-quantity of resources, which is built on fast SSD drives. Optimal VDS / VPS in the TAS-IX network in Tashkent",
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
      ru: "Свой виртуальные сервер на базе быстрых SSD-дисков",
      uz: "Tez SSD drayverlarga asoslangan shaxsiy virtual serveringiz",
      en: "Your own virtual server based on fast SSD drives",
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
      ru: <p>Выберите удобный тариф для аренда сервера. Обратите внимание для аренды сервера Intel Xeon Gold вам нужно оформить индивидуальный заказ.<br />
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
								<td>Unlim 25M</td>
								<td>25 мбит/с</td>
								<td>1 Гбит/с</td>
								<td>Без ограничений</td>
								<td>Бесплатно</td>
							</tr> */}
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
              {/* <tr>
								<td>Unlim 25M</td>
								<td>25 MB/s</td>
								<td>1 Gbps</td>
								<td>Cheksiz</td>
								<td>Tekin</td>
							</tr> */}
              {/* <tr>
                <td>Unlim 50M</td>
                <td>50 MB/s</td>
                <td>1 Gbps</td>
                <td>Cheksiz</td>
                <td>Tekin</td>
              </tr> */}
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
              {/* <tr>
								<td>Unlim 25M</td>
								<td>25 Mbps</td>
								<td>1 Gbps</td>
								<td>Unlimited</td>
								<td>Free</td>
							</tr> */}
              {/* <tr>
                <td>Unlim 50M</td>
                <td>50 Mbps</td>
                <td>1 Gbps</td>
                <td>Unlimited</td>
                <td>Free</td>
              </tr> */}
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

  const block = [
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
      
      <BreadCrumbs data={[{ name: 'Конструктор VDS/VPS сервера' }]} />
      <PageBreadcrumb links={[{ name: 'Конструктор VDS/VPS сервера' }]} />

      <div>
        <Container 
        headTitle={langData.headTitle[language]}
        description={<p>{langData.dsc[language]}</p>} 
        clNTitle="text-center" className="pb-0"></Container>
        <Calculator language={language} />

        <ForFreeBlock data={forFreeVDSData} language={language} />

        <AvailableOS language={language} />
        <VirtualServers language={language} />

        <WhyBlock title={langData.whyBlockTitle[language]} description={langData.whyBlockDescription[language]} content={block} language={language} />

        <FAQ
          title="Дополнительно"
          language={language}
          faq={[
            {
              title: { ru: "Операционная система" },
              description: {
                ru: (
                  <p>
                    <span>Бесплатные</span>
                    <ul className="mt-2">
                      <li>Debian</li>
                      <li>Ubuntu</li>
                      <li>FreeBSD</li>
                      <li>CentOS</li>
                      <li>Alma</li>
                    </ul>
                    <span>Платные</span>
                    <ul className="mt-2">
                      <li>
                        Windows Server -{" "}
                        <span>
                          <strong className="text-green">Тестовый период - 180 дней</strong>
                        </span>
                      </li>
                    </ul>
                  </p>
                ),
              },
            },
            {
              title: { ru: "Панель управления сервером" },
              description: {
                ru: (
                  <p>
                    <ul>
                      <li>
                        IPSmanager 6 Lite -{" "}
                        <span>
                          <strong className="text-green">СКОРО (максимум 10 сайтов)</strong>
                        </span>
                      </li>
                      <li>
                        IPSmanager 6 Pro -{" "}
                        <span>
                          <strong className="text-green">СКОРО (максимум 50 сайтов)</strong>
                        </span>
                      </li>
                      <li>
                        IPSmanager 6 Host -{" "}
                        <span>
                          <strong className="text-green">СКОРО (без ограничений)</strong>
                        </span>
                      </li>
                    </ul>
                  </p>
                ),
              },
            },
            {
              title: { ru: "Лицензии Microsoft" },
              description: {
                ru: (
                  <p>
                    <ul>
                      <li>
                        Лицензия SQL Server Web Edition Core -{" "}
                        <span>
                          <strong className="text-green">СКОРО за 2 ядра (минимум 4 ядра)</strong>
                        </span>
                      </li>
                      <li>
                        Лицензия SQL Server Standard Edition per user -{" "}
                        <span>
                          <strong className="text-green">СКОРО за 1 пользователя</strong>
                        </span>
                      </li>
                      <li>
                        Windows Remote Desktop Services -{" "}
                        <span>
                          <strong className="text-green">СКОРО за 1 пользователя</strong>
                        </span>
                      </li>
                    </ul>
                  </p>
                ),
              },
            },
            {
              title: { ru: "Канал" },
              description: {
                ru: (
                  <p>
                    <ul>
                      <li>
                        До 100 Мбит/с, безлимитный трафик -{" "}
                        <span>
                          <strong className="text-green">бесплатно</strong>
                        </span>
                      </li>
                      <li>
                        До 1 Гбит/с, трафик 10 Тб/мес -{" "}
                        <span>
                          <strong className="text-green">бесплатно</strong>
                        </span>
                      </li>
                    </ul>
                  </p>
                ),
              },
            },
            {
              title: { ru: "Дополнительные IP-адреса" },
              description: {
                ru: (
                  <p>
                    <ul>
                      <li>
                        Дополнительные IP-адреса IPv4 -{" "}
                        <span>
                          <strong className="text-green">20 000 cум/мес.</strong>
                        </span>
                      </li>
                      <li>
                        Дополнительные IP-адреса IPv6 (подсеть) -{" "}
                        <span>
                          <strong className="text-green">СКОРО</strong>
                        </span>
                      </li>
                    </ul>
                  </p>
                ),
              },
            },
          ]}
        />

        <Howworks language={language} />
        <ForContract data={forContractVDSData} language={language} />
        <ForSupport data={forSupportVDSData} language={language} />
        <ForDatacenter data={forDatacenterVDSData} language={language} />
        <ForIntel data={ForIntelVDSData} language={language} />
        <ForIntelTwo data={ForIntelTwoVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />
      </div>
    </>
  );
}
