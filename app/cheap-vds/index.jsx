import SEO from "@/components/seo";
import Container from "@/components/container";
import CustomTable from "@/components/customTable";
import TarifMaket from "@/components/tarifMaket";
import { useEffect, useState } from "react";
import st from "./cheapVds.module.scss";

import ForFreeBlock from "@/components/forFreeBlock";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import PeriodSwitcher from "@/components/periodSwitcher";
import TarifCard from "@/components/tarifCard";
import TarifFeatures from "@/components/tarifFeatures";
import WhyBlock from "@/components/whyBlock";
import { checkLang } from "@/utils/checkLang";
import { LINKS } from "@/components/requirements";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { forFreeVDSData } from "../vds/data";
import { serversIcon } from "shared/icons/serversIcon";
import { lesssonIcon } from "shared/icons/lessonIcon";
import { databaseIcon } from "shared/icons/databaseIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { calendarIcon } from "shared/icons/calendarIcon";
import { supportIcon } from "shared/icons/supportIcon";
import { warningIcon } from "shared/icons/warningIcon";
import { infiniteIcon } from "shared/icons/infiniteIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import AvailableOS from "@/components/availableOS";
import VirtualServers from "@/components/virtualServers";
import Reviews from "@/components/reviews";
import ForContract from "@/components/forContract";
import { forContractVDSData } from "../vds/data";
import ForSupport from "@/components/forSupport";
import { forSupportVDSData } from "../vds/data";
import ForDatacenter from "@/components/forDatacenter";
import { forDatacenterVDSData } from "../vds/data";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductCheap from "../../components/seo/productcheap"

export default function CheapVds({ language }) {
  const [show, setShow] = useState(-1);
  const [period, setPeriod] = useState(0);

  const langData = {
    seoTitle: {
      ru: "Бюджетные VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Byudjet VDS/VPS | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Budget VDS/VPS | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descTitle: {
      ru: "Дешевые и бесплатные VDS/VPS на быстрых SSD-дисках в сети TAS-IX в Ташкенте",
      uz: "Toshkent shahridagi TAS-IX tarmog'ida tezkor SSD disklarida arzon va bepul VDS/VPS",
      en: "Cheap and free VDS/VPS on fast SSD drives in the TAS-IX network in Tashkent",
    },
    whyBlockTitle: {
      ru: "Преимущества",
      uz: "Преимущества",
      en: "Преимущества",
    },
    headTitle: {
      ru: "Бюджетные VDS/VPS — Самые дешевые сервера в Ташкенте",
      uz: "Byudjet VDS/VPS - Toshkentdagi eng arzon serverlar",
      en: "Budget VDS / VPS - The cheapest servers in Tashkent",
    },
    description: {
      ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps",
      uz: "Bizning serverlarimiz O'zbekiston hududida (Toshkent) TAS-IX tarmog'ida joylashgan tezligi 1 Gbps",
      en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at a speed of 1 Gbps",
    },
    endText1: {
      ru: "Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делаем всё возможное, чтобы уменьшить время ожидания.",
      uz: "Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan boshlanadi zarur serverlar va yuk mavjudligiga qarab 2 ish kunigacha texnik xodimlar. To'lovdan keyin uskunani faollashtirishning o'rtacha vaqti - 1-2 soat. Biz kutish vaqtini kamaytirish uchun qo'limizdan kelganini qilamiz.",
      en: "Server installation time, after placing an order and payment, is from 30 minutes to 2 business days, depending on the availability of the necessary servers and the workload of technical personnel. The average equipment activation time after payment is 1-2 hours. We do our best to to reduce waiting time.",
    },
    endText2: {
      ru: <p>Срок действия услуги начнется с момента её активации.<br /> Не предоставляется для <span className="strong">игровых серверов и видео-контент сайтов!</span></p>,
      uz: <p>Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.<br /> <span className="strong">oʻyin serverlari va video kontent saytlari uchun taqdim etilmaydi!</span></p>,
      en: <p>The validity period of the service will begin from the moment of its activation.<br /> Not provided for <span className="strong">game servers and video content sites!</span></p>,
    },
    headTitle: {
      ru: "Бюджетные VDS/VPS — Самые дешевые сервера в Ташкенте",
      uz: "Hamyonbop VDS/VPS - Toshkentdagi eng arzon serverlar",
      en: "Budget VDS / VPS - The cheapest servers in Tashkent",
    },
    month: {
      ru: "мес.",
      uz: "oy",
      en: "mon.",
    },
    faqTitle: {
      ru: "Часто задаваемые вопросы",
      uz: "Ko'p so'raladigan savollar",
      en: "FAQ",
    },

    // cT: {
    //   ru: "Стоимость международного интернет-канала без ограничения трафика",
    //   uz: "Trafik cheklovlarisiz xalqaro Internet-kanalning narxi",
    //   en: "The cost of an international Internet channel without traffic restrictions",
    // },
    // cD: {
    //   ru: "Внешний трафик и трафик в сети «TAS-IX» не тарифицируется.",
    //   uz: "TAS-IX tarmog'idagi tashqi trafik va trafik to'lov olinmaydi.",
    //   en: "External traffic and traffic in the TAS-IX network is not charged.",
    // },
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
        ru: <p>Не предоставляется для <strong>"игровых"</strong> серверов и <strong>"видео-контент"</strong> сайтов!</p>,
        uz: <p><strong>O'yin</strong> serverlari va <strong>video kontent</strong> saytlari uchun mavjud emas!</p>,
        en: <p>Not available for <strong>game</strong> servers and <strong>video</strong> content sites!</p>,
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
        ru: <p>Вы можете изменить количество CPU и RAM в любой момент, а также увеличить объём SSD</p>,
        uz: (
          <p>
            Siz istalgan vaqtda protsessor va operativ xotira miqdorini o'zgartirishingiz, shuningdek, SSD hajmini
            oshirishingiz mumkin
          </p>
        ),
        en: <p>You can change the amount of CPU and RAM at any time, as well as increase the amount of SSD</p>,
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
          <p>Нет ограничений по входящему и исходящему объёму данных на всех тарифных планах с каналом от 100 Мбит/с.</p>
        ),
        uz: (
          <p>
            100 Mbit/s yoki undan ortiq kanalli barcha tarif rejalarida kiruvchi va chiquvchi maʼlumotlar hajmiga
            cheklovlar yoʻq.
          </p>
        ),
        en: (
          <p>
            There are no restrictions on incoming and outgoing data volume on all tariff plans with a channel of 100 Mbps
            or more.
          </p>
        ),
      },
      icon: infiniteIcon,
    },
  ],
    tarif = [
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
    ],
    faq = [
      {
        title: {
          ru: "Какие сроки установки сервера?",
          uz: "Какие сроки установки сервера?",
          en: "Какие сроки установки сервера?",
        },
        description: {
          ru: (
            <>
              <p>Срок установки сервера после оформления заказа и оплаты обычно составляет от 30 минут до 2 рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала.</p>
            </>
          ),
          uz: (
            <>
              <p>Срок установки сервера после оформления заказа и оплаты обычно составляет от 30 минут до 2 рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала.</p>
            </>
          ),
          en: (
            <>
              <p>Срок установки сервера после оформления заказа и оплаты обычно составляет от 30 минут до 2 рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала.</p>
            </>
          ),
        },
      },
      {
        title: {
          ru: "Какие операционные системы доступны для серверов?",
          uz: "Какие операционные системы доступны для серверов?",
          en: "Какие операционные системы доступны для серверов?",
        },
        description: {
          ru: (
            <>
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
            </>
          ),
          uz: (
            <>
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
            </>
          ),
          en: (
            <>
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
            </>
          ),
        },
      },
      {
        title: {
          ru: "Как происходит оплата аренды сервера?",
          uz: "Как происходит оплата аренды сервера?",
          en: "Как происходит оплата аренды сервера?",
        },
        description: {
          ru: (
            <>
              <p>Оплата аренды сервера происходит в зависимости от выбранного тарифного плана, который может быть ежемесячным или предусматривать более длительные периоды с соответствующими скидками.</p>
            </>
          ),
          uz: (
            <>
              <p>Оплата аренды сервера происходит в зависимости от выбранного тарифного плана, который может быть ежемесячным или предусматривать более длительные периоды с соответствующими скидками.</p>
            </>
          ),
          en: (
            <>
              <p>Оплата аренды сервера происходит в зависимости от выбранного тарифного плана, который может быть ежемесячным или предусматривать более длительные периоды с соответствующими скидками.</p>
            </>
          ),
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
      <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />

      <ProductCheap />

      <div className={st.cheapVds}>
        <div className={"bg_gray"}>
      
          <BreadCrumbs data={[{ name: 'Бюджетные VDS/VPS сервера' }]} />
          <PageBreadcrumb links={[{ name: 'Бюджетные VDS/VPS сервера' }]} />

          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            headTitle={langData.headTitle[language]}
            title="Тарифы"
            description={<p>{langData.description[language]}</p>}
            className="mt-0 px-0"
            endText={
              <div className={st.tarifNote}>
                <p>{langData.endText1[language]}</p>
                <p>{langData.endText2[language]}</p>
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
                delay: 100000,
                disableOnInteraction: false,
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
                <SwiperSlide key={index}>
                  <div className="w-95">
                    <TarifCard index={index} tarif={item} show={show} setShow={setShow} language={language} period={period} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TarifMaket>
        </div>

        {/* <Container style={{ background: `url('/servers-5.jpg') no-repeat` }} className="mt-0 py-0">
					<div className={st.cheapVds__header}>
						<div className={st.cheapVds__header__left}>
							<h1>БЮДЖЕТНЫЕ VDS/VPS</h1>
							<h2>САМЫЕ ДЕШЕВЫЕ VDS/VPS-СЕРВЕРА В ТАШКЕНТЕ</h2>
							<p>
								Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на
								скорости 1 Gbps
							</p>
						</div>
						<div className={st.cheapVds__header__right}>
							<h3>
								ВСЕГО 100 000 СУМ <br /> <span>в месяц!</span>
							</h3>
							<a
								href="https://billing.airnet.uz/billing.php?do=order&amp;vid=vds&amp;tarif=17"
								target="_blank"
								rel="noopener noreferrer"
							>
								Заказать сервер
							</a>
						</div>
					</div>
				</Container> */}

        <WhyBlock title={langData.whyBlockTitle[language]} content={block} language={language} />

        {/* <TarifMaket
					bgImg={'/servers-2.jpg'}
					className="mb-4"
					endText={
						<ul className="list text-white mt-2 mb-0">
							<li>Владелец самостоятельно управляет сервером.</li>
							<li>На тариф не распространяются никакие скидки или специальные цены.</li>
							<li>Услуга администрирования не оказывается.</li>
						</ul>
					}
				>
					<Swiper
						cssMode={true}
						modules={[Autoplay, Navigation]}
						spaceBetween={0}
						slidesPerView={1}
						navigation
						loop={true}
						autoplay={{
							delay: 10000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							770: {
								slidesPerView: 3,
							},
							500: {
								slidesPerView: 2,
							},
						}}
						className="tarifSwiper"
					>
						{tarif.map((item, idx) => (
							<SwiperSlide key={idx}>
								<div className="w-95">
									<TarifCard tarif={item} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</TarifMaket> */}

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
        <ForDatacenter data={forDatacenterVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />

        <FAQ faq={faq} title={langData.faqTitle[language]} language={language} />
      </div>
    </>
  );
}
