import SEO from "@/components/seo";
import Container from "@/components/container";
import CustomTable from "@/components/customTable";
import TarifMaket from "@/components/tarifMaket";
import { useEffect, useState } from "react";
import st from "./cheapVds.module.scss";

import ForFreeBlock from "@/components/forFreeBlock";
import Partners from "@/components/partners";
import TarifCard from "@/components/tarifCard";
import WhyBlock from "@/components/whyBlock";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { forFreeVDSData } from "../vds";
import { serversIcon } from "shared/icons/serversIcon";
import { lesssonIcon } from "shared/icons/lessonIcon";
import { databaseIcon } from "shared/icons/databaseIcon";
import { warningIcon } from "shared/icons/warningIcon";
import { infiniteIcon } from "shared/icons/infiniteIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import AvailableOS from "@/components/availableOS";

export default function CheapVds({ language }) {
  const [show, setShow] = useState(-1);

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
      ru: "Срок действия услуги начнется с момента её активации.",
      uz: "Xizmatning amal qilish muddati u yoqilgan paytdan boshlanadi.",
      en: "The service will start from the moment it is activated.",
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
        title: {
          ru: "Хостинг файлов и картинок",
          uz: "Fayllar va rasmlar serveri",
          en: "File and image hosting",
        },
        description: {
          ru: <p>Используйте 20 Gb жесткого диска для хранения данных.</p>,
          uz: <p>Ma'lumotlarni saqlash uchun 20 Gb qattiq diskdan foydalaning</p>,
          en: <p>Use 20 Gb hard drive for data storage.</p>,
        },
        icon: serversIcon,
      },
      {
        title: { ru: "Для обучения и тестов", uz: "O'qish va test uchun", en: "For training and tests" },
        description: {
          ru: <p>Идеально подходит для работы в командной строке и знакомства с системой Linux.</p>,
          uz: <p>Buyruqlar satrida ishlash va Linux tizimi bilan tanishish uchun ideal.</p>,
          en: <p>Perfect for command line work and getting to know the Linux system.</p>,
        },
        icon: lesssonIcon,
      },
      {
        title: {
          ru: "Для нетребовательных задач",
          uz: "Zarur bo'lmagan topshiriqlar uchun",
          en: "For undemanding tasks",
        },
        description: {
          ru: <p>Вы можете организовать почтовый сервис или DNS-кластер.</p>,
          uz: <p>Siz pochta xizmati yoki DNS klasterini tashkil qilishingiz mumkin.</p>,
          en: <p>You can set up a mail service or a DNS cluster.</p>,
        },
        icon: databaseIcon,
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
            <p>
              Нет ограничений по входящему и исходящему объёму данных на всех тарифных планах с каналом от 50 Мбит/с.
            </p>
          ),
          uz: (
            <p>
              50 Mbit/s yoki undan ortiq kanalli barcha tarif rejalarida kiruvchi va chiquvchi maʼlumotlar hajmiga
              cheklovlar yoʻq.
            </p>
          ),
          en: (
            <p>
              There are no restrictions on incoming and outgoing data volume on all tariff plans with a channel of 50
              Mbps or more.
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
        net: 50,
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
        net: 50,
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
        net: 50,
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
        net: 50,
        link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
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
      <div className={st.cheapVds}>
        <div className={"bg_gray"}>
          <TarifMaket
            // bgImg={'/servers-2.jpg'}
            headTitle={langData.headTitle[language]}
            description={<p>{langData.description[language]}</p>}
            className="mt-0 px-0"
            endText={
              <div className="text-white text-center mt-2">
                <p>{langData.endText1[language]}</p>
                <p>{langData.endText2[language]}</p>
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
                <SwiperSlide key={item.title}>
                  <div className="w-95">
                    <TarifCard index={index} tarif={item} show={show} setShow={setShow} language={language} />
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

        <WhyBlock content={block} language={language} />

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
						{tarif.map((item) => (
							<SwiperSlide key={item.title}>
								<div className="w-95">
									<TarifCard tarif={item} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</TarifMaket> */}

        <ForFreeBlock data={forFreeVDSData} language={language} />
        <AvailableOS language={language} />

        {/* <Container className="text-center" title={langData.cT[language]} description={langData.cD[language]}>
          <div className={st.vds__table}>
            <CustomTable table={langData.table[language]} />
          </div>
        </Container> */}

        <Partners language={language} />
      </div>
    </>
  );
}
