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
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductDomain from "../../components/seo/productdomain";
import { forContractArticlesData } from "../domains";

export const breadCrumbsDomain = [
  {
    name: {
      ru: "Регистрация домена в зоне UZ",
      uz: "UZ zonasida domenni ro'yxatdan o'tkazish",
      en: "Domain registration in UZ zone",
    },
    link: "/domains",
  },
];
export const breadCrumbsNet = [
  ...breadCrumbsDomain,
  {
    name: {
      ru: "Регистрация домена net",
      uz: "net domenni ro'yxatdan o'tkazish",
      en: "net domain registration",
    },
    link: "/domains/net",
  },
];

const content = [
    {
      title: {
        ru: "Валидация",
        uz: "Tasdiqlash",
        en: "Validation",
      },
      description: {
        ru: (
          <p>
            домены .NET являются валидными для всех браузеров и операционных
            систем, что обеспечивает качественный доступ к вашему веб-сайту.
          </p>
        ),
        uz: (
          <p>
            .NET domenlari barcha brauzerlar va operatsion tizimlar uchun amal
            qiladi, bu sizning veb-saytingizga sifatli kirishni ta'minlaydi.
          </p>
        ),
        en: (
          <p>
            .NET domains are valid across all browsers and operating systems,
            ensuring quality access to your website.
          </p>
        ),
      },
      icon: shakeIcon,
    },
    {
      title: {
        ru: "Узнаваемость",
        uz: "Tan olish",
        en: "Recognizability",
      },
      description: {
        ru: (
          <p>
            домены .NET являются широко известными и популярными, что может
            помочь улучшить узнаваемость вашего бренда и привлекать больше
            пользователей.
          </p>
        ),
        uz: (
          <p>
            .NET domenlari taniqli va ommabop bo'lib, bu sizning brend
            xabardorligini oshirishga va ko'proq foydalanuvchilarni jalb
            qilishga yordam beradi.
          </p>
        ),
        en: (
          <p>
            .NET domains are widely known and popular, which can help improve
            your brand recognition and attract more users.
          </p>
        ),
      },
      icon: clockIcon,
    },
    {
      title: {
        ru: "Продвижение",
        uz: "Rag'batlantirish",
        en: "Promotion",
      },
      description: {
        ru: (
          <p>
            домены .NET могут быть использованы для продвижения вашей компании
            или бренда, ведь это официальный домен сети компьютеров.
          </p>
        ),
        uz: (
          <p>
            .NET domenlari sizning kompaniyangiz yoki brendingizni targ'ib
            qilish uchun ishlatilishi mumkin, chunki u kompyuterlar tarmog'ining
            rasmiy domenidir.
          </p>
        ),
        en: (
          <p>
            .NET domains can be used to promote your company or brand, because
            it is the official domain of the computer network.
          </p>
        ),
      },
      icon: gamepadIcon,
    },
    {
      title: {
        ru: "Конкурентоспособность",
        uz: "Raqobatbardoshlik",
        en: "Competitiveness",
      },
      description: {
        ru: (
          <p>
            использование домена .NET может помочь вам стать конкурентоспособнее
            в своих рыночных нишах, особенно если вы работаете в области
            интернет-услуг.
          </p>
        ),
        uz: (
          <p>
            .NET domenidan foydalanish, ayniqsa, Internet xizmatlari sohasida
            bo'lsangiz, bozorda raqobatbardosh bo'lishingizga yordam beradi.
          </p>
        ),
        en: (
          <p>
            Using a .NET domain can help you become more competitive in your
            market niches, especially if you work in the Internet services
            industry.
          </p>
        ),
      },
      icon: warrantyIcon,
    },
    {
      title: {
        ru: "Безопасность",
        uz: "Xavfsizlik",
        en: "Safety",
      },
      description: {
        ru: (
          <p>
            домены .NET управляются VeriSign Inc., которая обеспечивает
            безопасность и стабильность работы доменов, что важно для защиты
            вашей компании и пользователей.
          </p>
        ),
        uz: (
          <p>
            .NET domenlari VeriSign Inc. tomonidan boshqariladi, bu sizning
            kompaniyangiz va foydalanuvchilaringizni himoya qilish uchun muhim
            bo'lgan domenlarning xavfsizligi va barqarorligini ta'minlaydi.
          </p>
        ),
        en: (
          <p>
            .NET domains are managed by VeriSign Inc., which ensures the
            security and stability of the domains, which is important to protect
            your company and users.
          </p>
        ),
      },
      icon: usersIcon,
    },
  ],
  faq = [
    {
      title: {
        ru: "Сколько стоит домен .net?",
        uz: ".net domeni qancha turadi?",
        en: "How much does a .net domain cost?",
      },
      description: {
        ru: (
          <>
            <p>
              Цена регистрации домена .net варьируется в зависимости от
              регистратора и периода регистрации. Средняя цена домена .net
              составляет от 10 до 30 долларов в год.
            </p>
            {/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
          </>
        ),
        uz: (
          <>
            <p>
              .net domenini ro'yxatdan o'tkazish narxi ro'yxatga oluvchiga va
              ro'yxatdan o'tish davriga qarab o'zgaradi. .net domenining
              o'rtacha narxi yiliga 10 dan 30 dollargacha.
            </p>
            {/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
          </>
        ),
        en: (
          <>
            <p>
              The price of registering a .net domain varies depending on the
              registrar and the registration period. The average price of a .net
              domain is between $10 and $30 per year.
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
        ru: "Домен .net подходит для?",
        uz: ".net domeni mos keladimi?",
        en: "Is .net domain suitable for?",
      },
      description: {
        ru: (
          <>
            <p>
              Домен .net подходит для компаний, которые оперируют в
              технологическом секторе, таких как разработка программного
              обеспечения, консультирование по информационным технологиям и
              предоставление сетевых услуг. Владельцы доменов могут ожидать
              явный прирост в посещении сайтов. Кроме того, он является хорошим
              выбором для компаний, которые хотят создать сильное онлайн
              присутствие и идентификацию бренда. Купить домен – это вопрос пары
              минут, но выгода можете превзойти все ваши ожидания.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              .net domeni dasturiy ta'minotni ishlab chiqish, axborot
              texnologiyalari bo'yicha konsalting va tarmoq xizmatlari kabi
              texnologiya sohasida faoliyat yurituvchi kompaniyalar uchun javob
              beradi. Domen egalari veb-sayt trafigining aniq o'sishini
              kutishlari mumkin. Bundan tashqari, bu kuchli onlayn mavjudligi va
              brend identifikatsiyasini yaratmoqchi bo'lgan kompaniyalar uchun
              yaxshi tanlovdir. Domenni sotib olish bir necha daqiqa vaqtni
              oladi, ammo foyda barcha kutganingizdan oshib ketishi mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              The .net domain is suitable for companies operating in the
              technology sector, such as software development, IT consulting,
              and network services. Domain owners can expect a clear increase in
              website traffic. It is also a good choice for companies looking to
              establish a strong online presence and brand identity. Buying a
              domain is a matter of minutes, but the benefits can exceed your
              expectations.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как зарегистрировать домен .net?",
        uz: ".net domenini qanday ro'yxatdan o'tkazish kerak?",
        en: "How to register a .net domain?",
      },
      description: {
        ru: (
          <>
            <p>
              Чтобы зарегистрировать домен .net, выполните следующие шаги:
              <br />
              1. найдите необходимый домен на AIRNET;
              <br />
              2. проверьте доступность домена;
              <br />
              3. зарегистрируйте домен, предоставив требуемые данные (имя,
              электронная почта, контактную информацию);
              <br />
              4. оплатите регистрационный сбор.
              <br />
              5. Как видите, приобрести домен и зарегистрировать его совсем не
              является сложной задачей.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              .net domenini ro'yxatdan o'tkazish uchun quyidagi amallarni
              bajaring:
              <br />
              1. AIRNET da kerakli domenni toping;
              <br />
              2. domen mavjudligini tekshirish;
              <br />
              3. kerakli rekvizitlarni (ism, elektron pochta, aloqa
              ma'lumotlari) taqdim etish orqali domenni ro'yxatdan o'tkazish;
              <br />
              4. ro'yxatdan o'tish to'lovini to'lash.
              <br />
              5. Ko'rib turganingizdek, domen sotib olish va uni ro'yxatdan
              o'tkazish umuman qiyin ish emas.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              To register a .net domain, follow these steps:
              <br />
              1. Find the domain you need on AIRNET;
              <br />
              2. Check the availability of the domain;
              <br />
              3. Register the domain by providing the required data (name,
              email, contact information);
              <br />
              4. Pay the registration fee.
              <br />
              5. As you can see, purchasing a domain and registering it is not a
              difficult task at all.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Особенности домена .net?",
        uz: ".net domenining xususiyatlari?",
        en: "Features of the .net domain?",
      },
      description: {
        ru: (
          <>
            <p>
              Некоторые заметные особенности домена .net включают:
              <br />
              1. глобальное распространение;
              <br />
              2. широкое признание и доверие;
              <br />
              3. подходит для технологических компаний;
              <br />
              4. может быть зарегистрирован на период от 1 до 10 лет;
              <br />
              5. может быть перенесен на другой регистратор, если это
              необходимо.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              .net domenining ba'zi diqqatga sazovor xususiyatlariga quyidagilar
              kiradi:
              <br />
              1. global taqsimot;
              <br />
              2. keng e'tirof va ishonch;
              <br />
              3. texnologiya kompaniyalari uchun mos;
              <br />
              4. 1 yildan 10 yilgacha bo'lgan muddatga ro'yxatga olinishi
              mumkin;
              <br />
              5. Agar kerak bo'lsa, boshqa registratorga o'tkazilishi mumkin.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              Some notable features of the .net domain include:
              <br />
              1. Global distribution;
              <br />
              2. Wide recognition and trust;
              <br />
              3. Suitable for technology companies;
              <br />
              4. Can be registered for a period of 1 to 10 years;
              <br />
              5. Can be transferred to another registrar if necessary.
            </p>
          </>
        ),
      },
    },
  ];
export const forInfoNETData = {
  title: {
    ru: <>Условия регистрации домена .net</>,
    uz: <>.net domenini ro'yxatdan o'tkazish shartlari</>,
    en: <>.net Domain Registration Terms</>,
  },
  desc: {
    ru: <>Условия регистрации доменов в зоне .net следующие:</>,
    uz: (
      <>
        .net zonasida domenlarni ro'yxatdan o'tkazish shartlari quyidagilardan
        iborat:
      </>
    ),
    en: (
      <>
        The conditions for registering domains in the .net zone are as follows:
      </>
    ),
  },
  desc2: {
    ru: (
      <>
        Обратите внимание, что условия регистрации могут варьироваться в
        зависимости от регистратора и политик ICANN.
      </>
    ),
    uz: (
      <>
        Roʻyxatdan oʻtish shartlari registrator va ICANN siyosatiga qarab farq
        qilishi mumkinligini unutmang.
      </>
    ),
    en: (
      <>
        Please note that registration terms may vary depending on the registrar
        and ICANN policies.
      </>
    ),
  },
  // img: "/intro-img.png",
  content: [
    {
      title: {
        ru: "Доступность доменного имени: доменное имя должно быть доступно для регистрации. Это означает, что доменное имя не может быть уже зарегистрировано, а также не может быть запрещено в соответствии с политикой ICANN (Internet Corporation for Assigned Names and Numbers).",
        uz: "Domen nomining mavjudligi: Domen nomi ro'yxatdan o'tish uchun mavjud bo'lishi kerak. Bu shuni anglatadiki, domen nomini allaqachon ro'yxatdan o'tkazib bo'lmaydi yoki uni ICANN (Internet Corporation for Assigned Names and Numbers) siyosati bo'yicha rad etib bo'lmaydi.",
        en: "Domain name availability: The domain name must be available for registration. This means that the domain name cannot be already registered and also cannot be prohibited according to ICANN (Internet Corporation for Assigned Names and Numbers) policy.",
      },
      img: <p>1.</p>,
    },
    {
      title: {
        ru: "Смесь латинских символов и цифр: доменное имя может содержать буквы латинского алфавита, цифры (0-9) и знаки `-`.",
        uz: "Lotin harflari va raqamlari aralashmasi: domen nomi lotin harflari, raqamlari (0-9) va belgilarni o'z ichiga olishi mumkin. `-`.",
        en: "Mix of Latin characters and numbers: the domain name can contain Latin letters, numbers (0-9) and symbols `-`.",
      },
      img: <p>2.</p>,
    },
    {
      title: {
        ru: "Максимальная длина доменного имени: длина доменного имени не может превышать 63 символов.",
        uz: "Domen nomining maksimal uzunligi: Domen nomining uzunligi 63 belgidan oshmasligi kerak.",
        en: "Maximum domain name length: The length of a domain name cannot exceed 63 characters.",
      },
      img: <p>3.</p>,
    },
    {
      title: {
        ru: "Минимальная длина доменного имени: длина доменного имени не может быть меньше 3 символов.",
        uz: "Domen nomining minimal uzunligi: domen nomining uzunligi 3 belgidan kam bo'lmasligi kerak.",
        en: "Minimum domain name length: The length of a domain name cannot be less than 3 characters.",
      },
      img: <p>4.</p>,
    },
    {
      title: {
        ru: "Уникальность доменного имени: доменное имя должно быть уникальным, т.е. не может быть уже зарегистрировано другим лицом.",
        uz: "Domen nomining o'ziga xosligi: domen nomi noyob bo'lishi kerak, ya'ni. allaqachon boshqa shaxs tomonidan ro'yxatdan o'tkazilmaydi.",
        en: "Uniqueness of the domain name: the domain name must be unique, i.e. it cannot already be registered by another person.",
      },
      img: <p>5.</p>,
    },
    {
      title: {
        ru: "Смесь заглавных и строчных букв: доменное имя может содержать как заглавные, так и строчные буквы.",
        uz: "Katta va kichik harflar aralashmasi: Domen nomi katta va kichik harflardan iborat bo'lishi mumkin.",
        en: "Mix of upper and lower case letters: A domain name can contain both upper and lower case letters.",
      },
      img: <p>6.</p>,
    },
    {
      title: {
        ru: "Знаки пунктуации: доменное имя может содержать знаки пунктуации, такие как `.` , `,`, `;`, `?`, `%`, `&`, `=`, `+`, `/`, `-`, `_`, `~`, `!`.",
        uz: "Tinish belgilari: Domen nomida tinish belgilari bo'lishi mumkin, masalan `.` , `,`, `;`, `?`, `%`, `&`, `=`, `+`, `/`, `-`, `_`, `~`, `!`.",
        en: "Punctuation: A domain name may contain punctuation marks such as `.` , `,`, `;`, `?`, `%`, `&`, `=`, `+`, `/`, `-`, `_`, `~`, `!`.",
      },
      img: <p>7.</p>,
    },
    {
      title: {
        ru: "Квотирование: некоторые символы, такие как `*`, `@`, `#`, `$`, `%`, `^`, `&`, `~`, `!`, могут быть квотированы (запятая) для использования в доменном имени.",
        uz: "Iqtibos: `*`, `@`, `#`, `$`, `%`, `^`, `&`, `~`, `!` kabi ba`zi belgilarni qo`shilish uchun qo`shtirnoq (vergul) olish mumkin. domen nomi.",
        en: "Quoting: Some characters such as `*`, `@`, `#`, `$`, `%`, `^`, `&`, `~`, `!` may need to be quoted (comma) for use in a domain name.",
      },
      img: <p>8.</p>,
    },
    {
      title: {
        ru: "ICANN's Registry Agreement: регистратор должен заключить договор с ICANN (Internet Corporation for Assigned Names and Numbers) о регистрации доменов в зоне `.net`.",
        uz: "ICANNning reestr shartnomasi: registrator ICANN (Internet Corporation for Assigned Names and Numbers) bilan `.net` zonasida domenlarni ro'yxatdan o'tkazish uchun shartnoma tuzishi kerak..",
        en: "ICANN's Registry Agreement: The registrar must enter into an agreement with ICANN (Internet Corporation for Assigned Names and Numbers) on the registration of domains in the `.net` zone..",
      },
      img: <p>9.</p>,
    },
    {
      title: {
        ru: "Верификация информации: регистратор должен запросить информацию о регистрирующем лице, включая его имя, адрес электронной почты и адрес физического лица или организации.",
        uz: "Ma'lumotni tekshirish: Ro'yxatga oluvchi ro'yxatdan o'tuvchi haqidagi ma'lumotlarni, shu jumladan uning ismi, elektron pochta manzili va shaxs yoki tashkilotning manzilini so'rashi kerak.",
        en: "Verification of information: The registrar must request information about the registrant, including the name, email address, and address of the individual or organization.",
      },
      img: <p>10.</p>,
    },
  ],
};
export const forInfoWhatData = {
  title: {
    ru: <>Что такое доменное имя .net</>,
    uz: <>.net domen nomi nima</>,
    en: <>What is a .net domain name</>,
  },
  desc: {
    ru: (
      <>
        Доменная зона .net - это обширная группа интернет-адресов, которые
        окончены суффиксом .net. Она была создана в 1985 году как часть
        оригинального интернета, и в настоящее время является одной из наиболее
        популярных и массовых зон доменных имен.
      </>
    ),
    uz: (
      <>
        .net domen zonasi .net qo'shimchasi bilan tugaydigan Internet
        manzillarining katta guruhidir. U 1985 yilda original Internetning bir
        qismi sifatida yaratilgan va hozirda eng mashhur va keng tarqalgan domen
        nomlari zonalaridan biri hisoblanadi.
      </>
    ),
    en: (
      <>
        The .net domain zone is a large group of Internet addresses that end
        with the .net suffix. It was created in 1985 as part of the original
        Internet, and is currently one of the most popular and widespread domain
        name zones.
      </>
    ),
  },
  desc2: {
    ru: <></>,
    uz: <></>,
    en: <></>,
  },
  content: [
    {
      title: {
        ru: "",
        uz: "",
        en: "",
      },
      img: <p></p>,
    },
  ],
};

export default function Domains({ language }) {
  const langData = {
    seoTitle: {
      ru: "Купить домен net - зарегистрировать доменное имя в зоне net",
      uz: "Net domenni sotib oling - domen nomini tarmoq zonasida ro'yxatdan o'tkazing",
      en: "Buy domain net - register domain name in net zone",
    },
    descTitle: {
      ru: "Регистрация домена в зоне⚡net! Купить новое доменное в зоне net по низким ценам. Доменное имя верхнего уровня net. Регистратор airnet.uz",
      uz: "⚡net zonasida domenni ro'yxatdan o'tkazish! Net zonada arzon narxlarda yangi domen sotib oling. Yuqori darajadagi domen nomi tarmog'i. Airnet.uz registratori",
      en: "Domain registration in the ⚡net zone! Buy a new domain in the net zone at low prices. Top-level domain name net. Registrar airnet.uz",
    },
    whyBlockTitle: {
      ru: "Преимущества регистрации  домена .NET",
      uz: ".NET domenini ro'yxatdan o'tkazishning afzalliklari",
      en: "Benefits of Registering a .NET Domain",
    },
    whyBlockDescription: {
      ru: (
        <p>
          Обратите внимание, что преимущества использования домена .NET зависят
          от конкретной ситуации и целей вашего веб-сайта.
          <br />
          Купить домен можно уже сегодня, мы также поможем с регистрацией вашего
          сайта в доменных зонах.
          <br />
          <strong>
            Использование домена .NET имеет несколько преимуществ:
          </strong>
        </p>
      ),
      uz: (
        <p>
          Esda tutingki, .NET domenidan foydalanishning afzalliklari sizning
          aniq vaziyatingizga va veb-saytingiz maqsadlariga bog'liq.
          <br />
          Siz bugun domen sotib olishingiz mumkin, biz veb-saytingizni domen
          zonalarida ro'yxatdan o'tkazishda ham yordam beramiz.
          <br />
          <strong>
            .NET domenidan foydalanish bir qancha afzalliklarga ega:
          </strong>
        </p>
      ),
      en: (
        <p>
          Please note that the benefits of using a .NET domain depend on the
          specific situation and goals of your website.
          <br />
          You can buy a domain today, we will also help you register your site
          in domain zones.
          <br />
          <strong>Using a .NET domain has several benefits:</strong>
        </p>
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
      ru: "Регистрация домена net - это процесс, который позволяет зарегистрировать уникальное имя домена (URL) в интернете. Зона.net является одной из наиболее популярных и массовых зон доменных имен.",
      uz: "Net domenni ro'yxatdan o'tkazish - bu Internetda noyob domen nomini (URL) ro'yxatdan o'tkazish imkonini beruvchi jarayon. Net zonasi eng mashhur va keng tarqalgan domen nomlari zonalaridan biridir.",
      en: "Net domain registration is a process that allows you to register a unique domain name (URL) on the Internet. The .net zone is one of the most popular and widespread domain name zones.",
    },
    t3: {
      ru: "У нас вы сможете подобрать красивое доменное имя по самым низким ценам, а ещё мы не повышаем стоимость домена при продлении.",
      uz: "Biz bilan siz eng arzon narxlarda chiroyli domen nomini olishingiz mumkin, bizda esa yo'q biz yangilanganda domen narxini oshiramiz.",
      en: "Here you can find a beautiful domain name at the lowest prices, and we also do not increase the cost of a domain upon renewal.",
    },
    headTitle: {
      ru: "Регистрация домена net",
      uz: "Net domenni ro'yxatdan o'tkazish",
      en: "Net domain registration",
    },
    description: {
      ru: (
        <p>
          Компания "AIRNET" является официальным{" "}
          <a
            href="https://cctld.uz/reg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            регистратором домен в зоне UZ
          </a>
        </p>
      ),
      uz: (
        <p>
          “AIRNET” kompaniyasi{" "}
          <a
            href="https://cctld.uz/reg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UZ zonasida rasmiy domen registratori
          </a>{" "}
          hisoblanadi
        </p>
      ),
      en: (
        <p>
          The company "AIRNET" is the official{" "}
          <a
            href="https://cctld.uz/reg/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      <SEO
        title={langData.seoTitle[language]}
        desc={langData.descTitle[language]}
      />

      <ProductDomain />

      {breadCrumbsNet && breadCrumbsNet.length ? (
        <>
          <BreadCrumbs data={breadCrumbsNet} language={language} />
          <PageBreadcrumb links={breadCrumbsNet} language={language} />
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

        <ForInfo data={forInfoNETData} language={language} />
        <ForInfo data={forInfoWhatData} language={language} />

        <WhyBlock
          title={langData.whyBlockTitle[language]}
          description={langData.whyBlockDescription[language]}
          content={content}
          language={language}
        />
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
