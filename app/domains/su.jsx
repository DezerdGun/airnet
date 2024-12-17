import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import Howworks from "@/components/howworks";
import { RegDomainBlock } from "@/components/regDomain";
import SEO from "@/components/seo";
import WhyBlock from "@/components/whyBlock";
import st from "./domains.module.scss";
import { shakeIcon } from "shared/icons/shakeIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { gamepadIcon } from "shared/icons/gamepadIcon";
import { usersIcon } from "shared/icons/usersIcon";
import Reviews from "@/components/reviews";
import ForContract from "@/components/forContract";
import { forContractVDSData } from "../vds";
import ForSupport from "@/components/forSupport";
import ForInfo from "@/components/forInfo";
import { forSupportVDSData } from "../vds";
import ForDatacenter from "@/components/forDatacenter";
import { forDatacenterVDSData } from "../vds";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductDomain from "../../components/seo/productdomain"
import { forContractArticlesData } from "../domains";

export const breadCrumbsDomain = [
  {
    name: {
      ru: "Купить доменное имя в зоне SU",
      uz: "SU zonasida domen nomini sotib oling",
      en: "Buy a domain name in the SU zone",
    },
    link: "/domains",
  },
];
export const breadCrumbsSu = [
  ...breadCrumbsDomain,
  {
    name: {
      ru: "Домен SU: купить доменное имя в зоне SU",
      uz: "SU domeni: SU zonasida domen nomini sotib oling",
      en: "Domain SU: buy a domain name in the SU zone",
    },
    link: "/domains/su",
  },
];

const content = [
    {
      title: { 
      ru: "", 
      uz: "", 
      en: "" },
      description: {
        ru: <p>Простота регистрационной процедуры. Финансовые и временные затраты минимальны, сложности и проблемы исключены.</p>,
        uz: <p>Ro'yxatdan o'tish jarayonining soddaligi. Moliyaviy va vaqt xarajatlari minimal, qiyinchiliklar va muammolar bundan mustasno.</p>,
        en: <p>Simplicity of the registration procedure. Financial and time costs are minimal, difficulties and problems are excluded.</p>,
      },
      icon: shakeIcon,
    },
    {
      title: { 
      ru: "", 
      uz: "", 
      en: "" },
      description: {
        ru: <p>В зоне SU поддерживается регистрация сайтов различной направленности, от информационных до коммерческих, от частных до корпоративных, будь то новостные порталы, интернет-магазины, площадки объявлений. Обилие свободных имен позволяет найти без лишних трудностей найти идеальный вариант, без сокращений и аббревиатур, смущающих читателей и покупателей.</p>,
        uz: <p>SU zonasi axborotdan tortib tijoratgacha, xususiydan korporativgacha, yangiliklar portallari, onlayn-do'konlar, reklama saytlari bo'lsin, har xil turdagi saytlarni ro'yxatdan o'tkazishni qo'llab-quvvatlaydi. Bepul nomlarning ko'pligi sizga keraksiz qiyinchiliklarsiz, o'quvchilar va xaridorlarni chalg'itadigan qisqartmalar va qisqartmalarsiz ideal variantni topishga imkon beradi.</p>,
        en: <p>The SU zone supports registration of sites of various types, from informational to commercial, from private to corporate, be it news portals, online stores, ad sites. The abundance of free names allows you to find the ideal option without unnecessary difficulties, without abbreviations and acronyms that confuse readers and buyers.</p>,
      },
      icon: clockIcon,
    },
    {
      title: {
        ru: "", 
        uz: "", 
        en: "" },
      description: {
        ru: <p>Поддержка монетизации. Сайт можно адаптировать к генерации пассивного или активного дохода.</p>,
        uz: <p>Monetizatsiyani qo'llab-quvvatlash. Sayt passiv yoki faol daromad olish uchun moslashtirilishi mumkin.</p>,
        en: <p>Monetization support. The site can be adapted to generate passive or active income.</p>,
      },
      icon: gamepadIcon,
    },
    {
      title: {
        ru: "", 
        uz: "", 
        en: "" },
      description: {
        ru: <p>Широта охвата. Порталы представляют интерес для пользователей всех стран СНГ, потенциальный охват измеряется сотнями миллионов. Уровень доверия к сайтам, зарегистрированным в SU-зоне, при этом очень высок, не зависит от государства. Вдобавок, имена хорошо запоминаются русскоязычной аудиторией, что положительно сказывается на посещаемости.</p>,
        uz: <p>Qoplama kengligi. Portallar barcha MDH mamlakatlari foydalanuvchilari uchun qiziqish uyg'otadi, ularning salohiyati yuzlab millionlar bilan o'lchanadi. SU zonasida ro'yxatdan o'tgan saytlarga ishonch darajasi juda yuqori va davlatga bog'liq emas. Bundan tashqari, ismlar rusiyzabon auditoriya tomonidan yaxshi eslab qolinadi, bu esa tashrifga ijobiy ta'sir ko'rsatadi.</p>,
        en: <p>Breadth of coverage. The portals are of interest to users from all CIS countries, the potential coverage is measured in hundreds of millions. The level of trust in sites registered in the SU zone is very high, and does not depend on the state. In addition, the names are well remembered by the Russian-speaking audience, which has a positive effect on traffic.</p>,
      },
      icon: warrantyIcon,
    },
    {
      title: {
        ru: "", 
        uz: "", 
        en: "" },
      description: {
        ru: <p>Эффективность SEO-оптимизации. Для повышения популярности сайта можно использовать все доступные инструменты, при грамотном подходе – даже без лишних вложений он будет хорошо индексироваться каждой из поисковых систем, популярных в СНГ.</p>,
        uz: <p>SEO optimallashtirish samaradorligi. Saytning mashhurligini oshirish uchun siz barcha mavjud vositalardan malakali yondashuv bilan foydalanishingiz mumkin - qo'shimcha investitsiyalarsiz ham, u MDHda mashhur bo'lgan qidiruv tizimlarining har biri tomonidan yaxshi indekslanadi.</p>,
        en: <p>SEO optimization efficiency. To increase the popularity of the site, you can use all available tools, with a competent approach - even without extra investments, it will be well indexed by each of the search engines popular in the CIS.</p>,
      },
      icon: usersIcon,
    },
    {
      title: {
        ru: "", 
        uz: "", 
        en: "" },
      description: {
        ru: <p>Высокий уровень защиты. В зоне используются алгоритмы, исключающие подмену IP-адреса и другие мошеннические действия, направленные на перехват личных данных, взлом сайта, несанкционированное размещение на нем нежелательной информации.</p>,
        uz: <p>Yuqori darajadagi himoya. Zonada shaxsiy maʼlumotlarni ushlash, veb-saytni buzish yoki undagi kiruvchi maʼlumotlarni ruxsatsiz joylashtirishga qaratilgan IP-manzilni buzish va boshqa firibgarlik harakatlarining oldini oluvchi algoritmlardan foydalaniladi.</p>,
        en: <p>High level of protection. The zone uses algorithms that exclude IP address substitution and other fraudulent actions aimed at intercepting personal data, hacking the site, and unauthorized placement of unwanted information on it.</p>,
      },
      icon: clockIcon,
    },
  ],
  faq = [
    {
      title: {
        ru: "Каковы условия регистрации в SU?",
        uz: "SUda ro'yxatdan o'tish shartlari qanday?",
        en: "What are the conditions for registration in SU?",
      },
      description: {
        ru: (
          <>
            <p>
            Требования, действующие в зоне, максимально лояльны. Длина имени должна составлять от 2 до 63 знаков, возможно использование только букв латиницы и кириллицы, цифр, дефисов, недопустима обсценная лексика.
            </p>
            {/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
          </>
        ),
        uz: (
          <>
            <p>
            Zonadagi amaldagi talablar imkon qadar moslashuvchan. Ismning uzunligi 2 dan 63 belgigacha bo'lishi kerak, faqat lotin va kirill harflari, raqamlar, defislardan foydalanish mumkin, odobsiz so'zlarga yo'l qo'yilmaydi.
            </p>
            {/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
          </>
        ),
        en: (
          <>
            <p>
            The requirements in force in the zone are maximally loyal. The length of the name should be from 2 to 63 characters, only Latin and Cyrillic letters, numbers, hyphens are allowed, obscene language is not allowed.
            </p>
            {/* <p>
				<a href="/technology/podpiska-na-ssl-sertifikat">Learn more about&nbsp;subscription</a>.
				</p> */}
          </>
        ),
      },
    },
    {
      title: {
        ru: "Для чего подходит SU?",
        uz: "SU nima uchun mos keladi?",
        en: "What is SU good for?",
      },
      description: {
        ru: (
          <>
            <p>
            Домен универсален, может быть использован для размещения любых сайтов, от одностраничных, визиток, небольших частных блогов до корпоративных проектов, интернет-магазинов, городских, региональных и национальных новостных порталов.
            </p>
          </>), 
        uz: (
          <>
            <p>
            Domen universal bo‘lib, bir sahifali veb-saytlar, tashrif qog‘ozlari, kichik shaxsiy bloglardan tortib, korporativ loyihalar, onlayn-do‘konlar, shahar, viloyat va milliy axborot portallarigacha bo‘lgan istalgan veb-saytni joylashtirish uchun ishlatilishi mumkin.
            </p>
          </>), 
        en: (
          <>
            <p>
            The domain is universal and can be used to host any websites, from one-page websites, business cards, small private blogs to corporate projects, online stores, city, regional and national news portals.
            </p>
          </>)
        },
    },
    {
      title: {
        ru: "Каковы особенности SU?",
        uz: "SUning xususiyatlari qanday?",
        en: "What are the features of SU?",
      },
      description: {
        ru: (
          <>
            <p>
            Преимущества зоны представлены выше, а главной особенностью можно считать возможность использования кириллицы, что делает сайт привлекательнее для жителей не только РФ и Беларуси, но и других стран СНГ.
            </p>
          </>), 
        uz: (
          <>
            <p>
            Zonaning afzalliklari yuqorida keltirilgan va asosiy xususiyatni kirill alifbosidan foydalanish imkoniyati deb hisoblash mumkin, bu saytni nafaqat Rossiya Federatsiyasi va Belorussiya, balki MDHning boshqa mamlakatlari aholisi uchun ham jozibador qiladi.
            </p>
          </>), 
        en: (
          <>
            <p>
            The advantages of the zone are presented above, and the main feature can be considered the ability to use Cyrillic, which makes the site more attractive for residents of not only the Russian Federation and Belarus, but also other CIS countries.
            </p>
          </>)
      },
    },
  ];
  export const forInfoSUData = {
    title: {
      ru: (
        <>
          Условия регистрации домена .SU
        </>
      ),
      uz: (
        <>
          .SU domenini ro'yxatdan o'tkazish shartlari
        </>
      ),
      en: (
        <>
          .SU Domain Registration Terms
        </>
      ),
    },
    desc: {
      ru: (
        <>
          Купить домен SU могут лица вне зависимости от статуса, юридические и физические, гражданства. Успешная регистрация возможна при выполнении нескольких условий:
        </>
      ),
      uz: (
        <>
          Jismoniy shaxslar, maqomi, yuridik yoki jismoniy yoki fuqaroligidan qat'i nazar, SU domenini sotib olishlari mumkin. Muvaffaqiyatli ro'yxatdan o'tish bir nechta shartlar bajarilgan taqdirda mumkin:
        </>
      ),
      en: (
        <>
          The SU domain can be purchased by persons regardless of status, legal entities and individuals, citizenship. Successful registration is possible if several conditions are met:
        </>
      ),
    },
    desc2: {
      ru: (
        <>
          Обратите внимание, что условия регистрации могут варьироваться в зависимости от регистратора и политик ICANN.
        </>
      ),
      uz: (
        <>
          Roʻyxatdan oʻtish shartlari registrator va ICANN siyosatiga qarab farq qilishi mumkinligini unutmang.
        </>
      ),
      en: (
        <>
          Please note that registration terms may vary depending on the registrar and ICANN policies.
        </>
      ),
    },
    // img: "/intro-img.png",
    content: [
      {
        title: { 
        ru: "Доступность выбранного имени. Если оно занято, придется поискать другой вариант, либо попробовать связаться с владельцем для обсуждения выкупа.", 
        uz: "Tanlangan nomning mavjudligi. Agar u band bo'lsa, siz boshqa variantni izlashingiz yoki sotib olishni muhokama qilish uchun egasi bilan bog'lanishga harakat qilishingiz kerak bo'ladi.", 
        en: "Availability of the chosen name. If it is taken, you will have to look for another option, or try to contact the owner to discuss the purchase." },
        img: (
          <p>1.</p>
        ),
      },
      {
        title: {
          ru: "Длина – 63 символа максимум, недопустимо использование символов, отличных от букв латиницы и кириллицы, цифр, дефисов.",
          uz: "Uzunlik - maksimal 63 belgi, lotin va kirill harflaridan boshqa belgilar, raqamlar va defislardan foydalanishga yo'l qo'yilmaydi.",
          en: "Length – 63 characters maximum, characters other than Latin and Cyrillic letters, numbers, hyphens are not allowed.",
        },
        img: (
          <p>2.</p>
        ),
      },
      {
        title: {
          ru: "Благозвучность имени, не допускается нецензурная лексика, оскорбительные слова и аббревиатуры, выражения, нарушающие интересы и права третьих лиц.",
          uz: "Ismning xushomadgo'yligi, odobsiz so'zlar, haqoratli so'zlar va qisqartmalar, uchinchi shaxslarning manfaatlari va huquqlarini buzadigan iboralarga yo'l qo'yilmaydi.",
          en: "The name must be euphonious; obscene language, offensive words and abbreviations, expressions that violate the interests and rights of third parties are not allowed.",
        },
        img: (
          <p>3.</p>
  
        ),
      },
    ],
  };
  export const forInfoWhatData = {
    title: {
      ru: (
        <>
          Что такое доменное имя .SU 
        </>
      ),
      uz: (
        <>
          .SU domen nomi nima 
        </>
      ),
      en: (
        <>
          What is a .SU domain name 
        </>
      ),
    },
    desc: {
      ru: (
        <>
          Доменная зона .SU - это обширная группа интернет-адресов, которые окончены суффиксом .SU. Она была создана в 1985 году как часть оригинального интернета, и в настоящее время является одной из наиболее популярных и массовых зон доменных имен.
        </>
      ),
      uz: (
        <>
          .SU domen zonasi .SU qo'shimchasi bilan tugaydigan Internet manzillarining katta guruhidir. U 1985 yilda original Internetning bir qismi sifatida yaratilgan va hozirda eng mashhur va keng tarqalgan domen nomlari zonalaridan biri hisoblanadi.
        </>
      ),
      en: (
        <>
          The .SU domain zone is a large group of Internet addresses that end with the .SU suffix. It was created in 1985 as part of the original Internet, and is currently one of the most popular and widespread domain name zones.
        </>
      ),
    },
    desc2: {
      ru: (
        <>
        </>
      ),
      uz: (
        <>
        </>
      ),
      en: (
        <>
        </>
      ),
    },
    content: [
      {
        title: { 
        ru: "", 
        uz: "", 
        en: "" },
        img: (
          <p></p>
        ),
      },
    ],
  };

export default function Domains({ language }) {
  const langData = {
    seoTitle: {
      ru: "Купить домен SU: зарегистрировать доменное имя в зоне SU",
      uz: "SU domenini sotib oling: SU zonasida domen nomini ro'yxatdan o'tkazing",
      en: "Buy SU domain: register a domain name in the SU zone",
    },
    descTitle: {
      ru: "Регистрация домена в зоне⚡SU! Купить новое доменное в зоне SUпо низким ценам. Доменное имя верхнего уровня SU. Регистратор airnet.uz",
      uz: "⚡SU zonasida domenni ro'yxatdan o'tkazish! SU zonasida yangi domenni arzon narxlarda sotib oling. SU yuqori darajadagi domen nomi. Airnet.uz registratori",
      en: "Domain registration in the ⚡SU zone! Buy a new domain in the SU zone at low prices. Top-level domain name SU. Registrar airnet.uz",
    },
    whyBlockTitle: {
      ru: "Преимущества регистрации  домена .SU",
      uz: ".SU domenini ro'yxatdan o'tkazishning afzalliklari",
      en: "Benefits of Registering a .SU Domain",
    },
    whyBlockDescription: {
      ru: (
        <p>
          Конкретные осязаемые достоинства определяются спецификой использования, однако, в общем случае они выглядят следующим образом:</p>
      ),
      uz: (
        <p>
        Muayyan aniq afzalliklar foydalanishning o'ziga xos xususiyatlari bilan belgilanadi, ammo umuman olganda ular quyidagicha ko'rinadi:</p>
        ),
      en: (
        <p>
        Specific tangible benefits are determined by the specifics of use, but in general they look like this:</p>
        ),
    },
    headTitle: {
      ru: "Регистрация доменного имени",
      uz: "Domen nomini ro'yxatdan o'tkazish",
      en: "Domain name registration",
    },
    t1: {
      ru: "Об услуге",
      uz: "Hizmatlar haqida",
      en: "About service",
    },
    t2: {
      ru: "Домен SU еще несколько десятилетий назад был создан для СССР. Несмотря на то, что советское государство осталось в прошлом, домен продолжает жить и, более того, пользоваться спросом! Зарегистрироваться в этой зоне – хорошее решение для организаций, частных лиц из России, Узбекистана и других стран СНГ.",
      uz: "SU domeni SSSR uchun bir necha o'n yillar oldin yaratilgan. Sovet davlati o'tmishda qolganiga qaramay, domen yashashni davom ettirmoqda va bundan tashqari, talabga ega! Ushbu zonada ro'yxatdan o'tish Rossiya, O'zbekiston va boshqa MDH davlatlarining tashkilotlari va jismoniy shaxslari uchun yaxshi echimdir.",
      en: "The SU domain was created for the USSR several decades ago. Despite the fact that the Soviet state is a thing of the past, the domain continues to live and, moreover, is in demand! Registering in this zone is a good solution for organizations, individuals from Russia, Uzbekistan and other CIS countries.",
    },
    t3: {
      ru: "По популярности домен несколько уступает национальным, так что наша компания поможет вам подобрать имя, наиболее полно соответствующее названию организации, торговой марке, специфике сайта. Наши цены доступны и неизменны в течение всего сотрудничества, повышение при продлении исключено!",
      uz: "Domenning mashhurligi milliy domenlardan biroz pastroq, shuning uchun kompaniyamiz sizga tashkilot nomi, savdo belgisi va sayt xususiyatlariga mos keladigan nomni tanlashda yordam beradi. Bizning narxlarimiz hamyonbop va butun hamkorlik davomida o'zgarmasdir!",
      en: "The domain is somewhat inferior in popularity to national ones, so our company will help you choose a name that most fully matches the name of the organization, trademark, and specifics of the site. Our prices are affordable and unchanged throughout the entire cooperation, an increase upon renewal is excluded!",
    },
    headTitle: {
      ru: "Регистрация домена SU",
      uz: "SU domenni ro'yxatdan o'tkazish",
      en: "SU domain registration",
    },
    description: {
      ru: (
        <p>
          Компания "AIRNET" является официальным{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            регистратором домен в зоне UZ
          </a>
        </p>
      ),
      uz: (
        <p>
          “AIRNET” kompaniyasi{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            UZ zonasida rasmiy domen registratori
          </a>{" "}
          hisoblanadi
        </p>
      ),
      en: (
        <p>
          The company "AIRNET" is the official{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            domain registrar in UZ zone
          </a>
        </p>
      ),
    },
    reg: {
      ru: (
        <>
        <p>
          Перед регистрацией просим вас ознакомиться с{" "}
          <a
            href="https://cctld.uz/info/polru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Положением о порядке регистрации и пользования доменными именами в
            домене «UZ»
          </a>
        </p>
        <div className={st.domains__head__block__zone}>
          <p><strong>Доступные зоны:</strong></p>
          <a href="/domains/" target="_blank">.UZ</a>
          <a href="/domains/ru" target="_blank">.RU</a>
          <a href="/domains/com" target="_blank">.COM</a>
          <a href="/domains/net" target="_blank">.NET</a>
          <a href="/domains/org" target="_blank">.ORG</a>
          <a href="/domains/in" target="_blank">.IN</a>
          <a href="/domains/su" target="_blank">.SU</a>
        </div>
        </>
      ),
      uz: (
        <>
        <p>
          Ro'yxatdan o'tishdan oldin{" "}
          <a
            href="https://cctld.uz/info/polru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “UZ” domenida domen nomlarini ro‘yxatdan o‘tkazish va ulardan
            foydalanish tartibi to‘g‘risidagi nizom bn tanishib chiqing.
          </a>
        </p>
        <div className={st.domains__head__block__zone}>
          <p><strong>Mavjud hududlar:</strong></p>
          <a href="/domains/" target="_blank">.UZ</a>
          <a href="/domains/ru" target="_blank">.RU</a>
          <a href="/domains/com" target="_blank">.COM</a>
          <a href="/domains/net" target="_blank">.NET</a>
          <a href="/domains/org" target="_blank">.ORG</a>
          <a href="/domains/in" target="_blank">.IN</a>
          <a href="/domains/su" target="_blank">.SU</a>
        </div>
        </>
      ),
      en: (
        <>
        <p>
          Before registration, please read the{" "}
          <a
            href="https://cctld.uz/info/polru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Regulations on the procedure for registration and use of domain
            names in the "UZ" domain
          </a>
        </p>
        <div className={st.domains__head__block__zone}>
          <p><strong>Available Zones:</strong></p>
          <a href="/domains/" target="_blank">.UZ</a>
          <a href="/domains/ru" target="_blank">.RU</a>
          <a href="/domains/com" target="_blank">.COM</a>
          <a href="/domains/net" target="_blank">.NET</a>
          <a href="/domains/org" target="_blank">.ORG</a>
          <a href="/domains/in" target="_blank">.IN</a>
          <a href="/domains/su" target="_blank">.SU</a>
        </div>
        </>
      ),
    },
  };
  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />

      <ProductDomain />
      
      {breadCrumbsSu && breadCrumbsSu.length ? (
        <>
          <BreadCrumbs data={breadCrumbsSu} language={language} />
          <PageBreadcrumb links={breadCrumbsSu} language={language} />
        </>
      ) : (
        ""
      )}

      <Container headTitle={langData.headTitle[language]}>
        <hr />
        <div className={st.domains__block}>
          <div className={st.domains__block__content}>
            <h2>{langData.t1[language]}</h2>
            <p>{langData.t2[language]}</p>
            <p>{langData.t3[language]}</p>
          </div>
          <div className={st.domains__block__img}>
            <img src="/domain/intro-img.png" />
          </div>
        </div>
      </Container>
      <div className={st.domains}>
        <div className={st.domains__head}>
          <Container
            // headTitle={langData.headTitle[language]}
            clNTitle="mb-3 center"
            description={<p>{langData.description[language]}</p>}
          >
            <div className={st.domains__head__block}>
              {/* <h3>Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot;.</h3> */}
              <div className={st.domains__head__block__item}>
                <RegDomainBlock language={language} />
              </div>

              {langData.reg[language]}
              {/* <div className={st.domains__head__block__table}>
								<table>
									<tr>
										<th>Доменная зона</th>
										<th>Регистрации c хостингом</th>
										<th>С хостингом</th>
										<th>Без хостинга</th>
										<th>Redemption period</th>
										<th>Купить</th>
									</tr>
									<tr>
										<td>.UZ</td>
										<th>17 000 сум*</th>
										<th>
											<Link href={checkLang(language) + "/free-domains"}>
												<a>Бесплатно*</a>
											</Link>
										</th>
										<th>20 000 сум*</th>
										<th>40 000 сум**</th>
										<th>
											<a href="https://billing.airnet.uz/billing.php?do=zones">Купить</a>
										</th>
									</tr>
								</table>
							</div> */}
            </div>
            {/* <p>
							Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен
							на нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
						</p>
						<p>* При регистрации хостинг с доменом</p>
						<p>
							** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней
							после окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в
							течение 30 календарных дней предыдущий владелец может вернуть себе домен.
						</p> */}
          </Container>
        </div>
        
        <ForInfo data={forInfoSUData} language={language} />
        {/* <ForInfo data={forInfoWhatData} language={language} /> */}
        
        <WhyBlock title={langData.whyBlockTitle[language]} description={langData.whyBlockDescription[language]} content={content} language={language} />
        <FAQ faq={faq} title="FAQ" language={language} />

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
