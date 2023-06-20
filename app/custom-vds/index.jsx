import st from "@/app/vds/vds.module.scss";
import Calculator from "@/components/calculator";
import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
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
    headTitle: {
      ru: "Свой виртуальные сервер на базе быстрых SSD-дисков",
      uz: "Tez SSD drayverlarga asoslangan shaxsiy virtual serveringiz",
      en: "Your own virtual server based on fast SSD drives",
    },
    dsc: {
      ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
      uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps",
      en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at a speed of 1 Gbps",
    },
    endText: {
      ru: "Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делаем всё возможное, чтобы уменьшить время ожидания.",
      uz: "Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan boshlanadi zarur serverlar va yuk mavjudligiga qarab 2 ish kunigacha texnik xodimlar. To'lovdan keyin uskunani faollashtirishning o'rtacha vaqti - 1-2 soat. Biz kutish vaqtini kamaytirish uchun qo'limizdan kelganini qilamiz.",
      en: "Server installation time, after placing an order and payment, is from 30 minutes to 2 business days, depending on the availability of the necessary servers and the workload of technical personnel. The average equipment activation time after payment is 1-2 hours. We do our best to to reduce waiting time.",
    },
    timeW: {
      ru: "Срок действия услуги начнется с момента её активации.",
      uz: "Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.",
      en: "The service will start from the moment it is activated.",
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
              <tr>
                <td>Unlim 50M</td>
                <td>50 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>Бесплатно</td>
              </tr>
              <tr>
                <td>Unlim 100M</td>
                <td>100 мбит/с</td>
                <td>1 Гбит/с</td>
                <td>Без ограничений</td>
                <td>2 000 000 сум/мес.</td>
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
              {/* <tr>
								<td>Unlim 25M</td>
								<td>25 Mbps</td>
								<td>1 Gbps</td>
								<td>Unlimited</td>
								<td>Free</td>
							</tr> */}
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

  const block = [
    {
      title: { ru: "Мгновенная активация", uz: "Bir zumdayoq ulanish", en: "Instant activation" },
      description: {
        ru: (
          <>
            <p>
              Активация VDS выполняется от 5 минут до 4-х часов, в зависимости от количества заказов и наличия
              свободного оборудования.
            </p>
            <button>
              <a
                href="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12"
                target="_blank"
                rel="noopener noreferrer"
              >
                Стать клиентом и заказать VDS
              </a>
            </button>
          </>
        ),
        uz: (
          <>
            <p>
              VDSni faollashtirish buyurtmalar soniga qarab 5 daqiqadan 4 soatgacha davom etadi va bepul jihozlarning
              mavjudligi.
            </p>
            <button>
              <a
                href="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mijoz bo'ling va VDSga buyurtma bering
              </a>
            </button>
          </>
        ),
        en: (
          <>
            <p>
              VDS activation takes from 5 minutes to 4 hours, depending on the number of orders and availability free
              equipment.
            </p>
            <button>
              <a
                href="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=12"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a client and order VDS
              </a>
            </button>
          </>
        ),
      },
      icon: clockIcon,
    },
    {
      title: { ru: "Запрещается", uz: "Taqiqlanadi", en: "Forbidden" },
      description: {
        ru: <p>Не предоставляется для игровых серверов и видео-контент сайтов!</p>,
        uz: <p>O'yin serverlari va video kontent saytlari uchun mavjud emas!</p>,
        en: <p>Not available for game servers and video content sites!</p>,
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
      title: { ru: "Гибкая настройка", uz: "O'zgaruvchan qurulmalar", en: "Flexible setup" },
      description: {
        ru: "Вы можете изменить количество CPU и RAM в любой момент, а также увеличить объём SSD",
        uz: "Siz istalgan vaqtda protsessor va operativ xotira miqdorini o'zgartirishingiz, shuningdek, SSD hajmini oshirishingiz mumkin",
        en: "You can change the amount of CPU and RAM at any time, as well as increase the amount of SSD",
      },
      icon: calendarIcon,
    },
    {
      title: {
        ru: "Управление по VNC",
        uz: "VNC orqali boshqarish",
        en: "Control via VNC",
      },
      description: {
        ru: <p>Предоставляем доступ к VPS/VDS северам по протоколу удаленного доступа VNC.</p>,
        uz: <p>VPS/VDS serverlariga VNC masofaviy kirish protokoli orqali kirishni ta'minlaymiz.</p>,
        en: <p>We provide access to VPS/VDS servers via the VNC remote access protocol.</p>,
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
          <p>Нет ограничений по входящему и исходящему объёму данных на всех тарифных планах с каналом от 50 Мбит/с.</p>
        ),
        uz: (
          <p>
            50 Mbit/s yoki undan ortiq kanalli barcha tarif rejalarida kiruvchi va chiquvchi maʼlumotlar hajmiga
            cheklovlar yoʻq.
          </p>
        ),
        en: (
          <p>
            There are no restrictions on incoming and outgoing data volume on all tariff plans with a channel of 50 Mbps
            or more.
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
      <div>
        <Container headTitle={langData.headTitle[language]} clNTitle="text-center" className="pb-0"></Container>
        <Calculator language={language} />

        <ForFreeBlock data={forFreeVDSData} language={language} />

        <AvailableOS language={language} />

        <WhyBlock content={block} language={language} />

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
                        До 50 Мбит/с, безлимитный трафик -{" "}
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

        <Partners language={language} />
      </div>
    </>
  );
}
