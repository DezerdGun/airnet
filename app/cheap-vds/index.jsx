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
import ProductCheap from "../../components/seo/productcheap"

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
      ru: "Бюджетные VDS/VPS — Самые дешевые сервера в Ташкенте",
      uz: "Byudjet VDS/VPS - Toshkentdagi eng arzon serverlar",
      en: "Budget VDS / VPS - The cheapest servers in Tashkent",
    },
    description: {
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
              <p>Для серверов доступны различные операционные системы, включая Windows и Linux.</p>
            </>
          ),
          uz: (
            <>
              <p>Для серверов доступны различные операционные системы, включая Windows и Linux.</p>
            </>
          ),
          en: (
            <>
              <p>Для серверов доступны различные операционные системы, включая Windows и Linux.</p>
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
            txt={<p>{langData.txt[language]}</p>}
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

        <WhyBlock title={langData.whyBlockTitle[language]} description={langData.whyBlockDescription[language]} content={block} language={language} />

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
        <ForIntel data={ForIntelVDSData} language={language} />
        <ForIntelTwo data={ForIntelTwoVDSData} language={language} />

        <Partners language={language} />
        <Reviews language={language} />

        <FAQ faq={faq} title={langData.faqTitle[language]} language={language} />
      </div>
    </>
  );
}
