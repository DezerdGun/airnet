import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import { RegDomainBlock } from "@/components/regDomain";
import SEO from "@/components/seo";
import WhyBlock from "@/components/whyBlock";
import st from "./domains.module.scss";
import { shakeIcon } from "shared/icons/shakeIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { gamepadIcon } from "shared/icons/gamepadIcon";
import { useState } from "react";
import Link from "next/link";
import { checkLang } from "@/utils/checkLang";
import { LINKS } from "@/components/requirements";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ForContract from "@/components/forContract";
import { forContractArticlesData } from "../domains";

export const breadCrumbsDomain = [
  {
    name: {
      ru: "Регистрация домена в зоне UZ",
      uz: "Регистрация домена в зоне UZ",
      en: "Регистрация домена в зоне UZ",
    },
    link: "/domains",
  },
];
export const breadCrumbsWhois = [
  ...breadCrumbsDomain,
  {
    name: {
      ru: "Whois - сервис",
      uz: "Whois - сервис",
      en: "Whois - сервис",
    },
    link: "/domains/whois",
  },
];

export default function WhoIs({ language }) {
  const langData = {
    seoTitle: {
      ru: "Проверить имя домена, сервис Whois - занятость, владелец, дата регистрации",
      uz: "Domen nomini tekshiring, Whois xizmati - ish joyi, egasi, ro'yxatdan o'tish sanasi",
      en: "Check domain name, Whois service - employment, owner, registration date",
    },
    descTitle: {
      ru: "Сервис Whois - узнайте все о домене, когда зарегистрирован, занят ли он, а также кто владелец домена – юридическое или физическое лицо.",
      uz: "Whois xizmati - domen haqida hamma narsani bilib oling, u qachon ro'yxatdan o'tgan, u egallanganmi va domen egasi kim - yuridik yoki jismoniy shaxs.",
      en: "Whois service - find out everything about the domain, when it was registered, whether it is occupied, and who the owner of the domain is - a legal entity or an individual.",
    },
    headTitle: {
      ru: "Whois - сервис",
      uz: "Whois - xizmat",
      en: "Whois - service",
    },
    t1: {
      ru: "Для чего нужен Whois?",
      uz: "Для чего нужен Whois?",
      en: "Для чего нужен Whois?",
    },
    t2: {
      ru: "В первую очередь, Whois дает возможность точно и быстро определить статус домена, понять, свободен ли он, допустимо ли его использование. Если данные по доменному имени отсутствуют, то с большой долей уверенности можно говорить о его свободе, что позволяет успешно провести регистрацию.",
      uz: "В первую очередь, Whois дает возможность точно и быстро определить статус домена, понять, свободен ли он, допустимо ли его использование. Если данные по доменному имени отсутствуют, то с большой долей уверенности можно говорить о его свободе, что позволяет успешно провести регистрацию.",
      en: "В первую очередь, Whois дает возможность точно и быстро определить статус домена, понять, свободен ли он, допустимо ли его использование. Если данные по доменному имени отсутствуют, то с большой долей уверенности можно говорить о его свободе, что позволяет успешно провести регистрацию.",
    },
    t3: {
      ru: "Впрочем, только этим область использования Whois не ограничивается. Оказывается доступной и более подробная информация о домене, его собственнике, дате регистрации и прочем. Тщательная проверка поможет получить максимально подробное представление о сайте, понять, насколько ему можно доверять, давно ли он зарегистрирован, нет ли риска столкнуться с мошенниками, можно ли оставлять личные данные.",
      uz: "Впрочем, только этим область использования Whois не ограничивается. Оказывается доступной и более подробная информация о домене, его собственнике, дате регистрации и прочем. Тщательная проверка поможет получить максимально подробное представление о сайте, понять, насколько ему можно доверять, давно ли он зарегистрирован, нет ли риска столкнуться с мошенниками, можно ли оставлять личные данные.",
      en: "Впрочем, только этим область использования Whois не ограничивается. Оказывается доступной и более подробная информация о домене, его собственнике, дате регистрации и прочем. Тщательная проверка поможет получить максимально подробное представление о сайте, понять, насколько ему можно доверять, давно ли он зарегистрирован, нет ли риска столкнуться с мошенниками, можно ли оставлять личные данные.",
    },
    domainSettings: {
      ru: "ПАРАМЕТРЫ ДОМЕНА",
      uz: "DOMAIN SOZLAMALARI",
      en: "DOMAIN SETTINGS",
    },
    domain: {
      ru: "Домен",
      uz: "Domen",
      en: "Domain",
    },
    status: {
      ru: "Статус",
      uz: "Holat",
      en: "Status",
    },
    active: {
      ru: "Активный",
      uz: "Faol",
      en: "Active",
    },
    descriptionTitle: {
      ru: "Описание",
      uz: "Tavsif",
      en: "Description",
    },
    firstNS: {
      ru: "Первый NS",
      uz: "Birinchi NS",
      en: "First NS",
    },
    secNS: {
      ru: "Второй NS",
      uz: "Ikkinchi NS",
      en: "Second NS",
    },
    thirdNS: {
      ru: "Третий NS",
      uz: "Uchinchi NS",
      en: "Third NS",
    },
    fourthNS: {
      ru: "Четвертый NS",
      uz: "To'rtinchi NS",
      en: "Fourth NS",
    },
    registrator: {
      ru: "Регистратор",
      uz: "Registrator",
      en: "Registrar",
    },
    createdAt: {
      ru: "Дата обновления",
      uz: "Yangilanish sanasi",
      en: "Update date",
    },
    until: {
      ru: "Активен до",
      uz: "Faol",
      en: "Active until",
    },
    clientSettings: {
      ru: "ПАРАМЕТРЫ КЛИЕНТА",
      uz: "MIJOLAR PARAMETRLARI",
      en: "CLIENT PARAMETERS",
    },
    type: {
      ru: "Тип",
      uz: "Tur",
      en: "Type",
    },
    organistaion: {
      ru: "Организация",
      uz: "Tashkilot",
      en: "Organization",
    },
    region: {
      ru: "Регион",
      uz: "Region",
      en: "Region",
    },
    postIndex: {
      ru: "Почтовый индекс",
      uz: "Pochta indeksi",
      en: "Postal code",
    },
    city: {
      ru: "Город",
      uz: "Shahar",
      en: "City",
    },
    country: {
      ru: "Страна",
      uz: "Mamlakat",
      en: "Country",
    },
    prefix: {
      ru: "Префикс",
      uz: "Prefiks",
      en: "Prefix",
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

  const faq = [
    {
      title: {
        ru: "Как работает сервис Whois",
        uz: "Whois xizmati qanday ishlaydi",
        en: "How the Whois service works",
      },
      description: {
        ru: (
          <>
            <p>
              Чаще всего сервис Whois используется для того, чтобы проверить домен на занятость. Сделать это можно
              легко, быстро и абсолютно бесплатно.
            </p>
            <p>
              Перейдите на страницу{" "}
              <Link href={checkLang(language) + LINKS.DOMAINS}>
                <a>Регистрация доменов</a>
              </Link>
              , введите интересующее имя в строку поиска и нажмите кнопку «Зарегистрировать». Поиск информации обычно
              занимает считанные секунды.
            </p>
            <p>
              Если система не найдет информацию о данном домене, значит, это имя свободно, и, скорее всего, вы сможете
              его зарегистрировать. Рядом с сообщением «Домен свободен» вы увидите стоимость его регистрации на один
              год. Для покупки нажмите кнопку «Добавить в корзину».
            </p>
            <p>
              Если сервис выдаст сообщение «Домен занят», то, нажав на кнопку «Whois», вы сможете посмотреть подробную
              информацию о домене.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
              Ko'pincha Whois xizmati domen mavjudligini tekshirish uchun ishlatiladi. Buni qilish mumkin oson, tez va
              mutlaqo bepul.
            </p>
            <p>
              <Link href={checkLang(language) + LINKS.DOMAINS}>
                <a>Domenni ro'yxatdan o'tkazish</a>
              </Link>{" "}
              sahifasiga o'tish, qidiruv satriga qiziqish nomini kiriting va "Ro'yxatdan o'tish" tugmasini bosing.
              Ma'lumot qidirish odatda bir necha soniya vaqt oladi.
            </p>
            <p>
              Agar tizim ushbu domen haqida ma'lumot topa olmasa, unda bu nom bepul va ehtimol siz ro'yxatdan
              o'tishingiz mumkin. "Domen bepul" xabari yonida siz uni ro'yxatdan o'tkazish narxini ko'rasiz bir yil
              uchun. Xarid qilish uchun "Savatga qo'shish" tugmasini bosing.
            </p>
            <p>
              Agar xizmat "Domen band" xabarini ko'rsatsa, "Whois" tugmasini bosish orqali siz ko'rishingiz mumkin.
              domen haqida batafsil ma'lumot.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              Most often, the Whois service is used to check the availability of a domain. It can be done easy, fast and
              absolutely free.
            </p>
            <p>
              Go to page{" "}
              <Link href={checkLang(language) + LINKS.DOMAINS}>
                <a>Domain registration</a>
              </Link>
              , enter the name of interest in the search bar and click the "Register" button. Search for information
              usually takes a matter of seconds.
            </p>
            <p>
              If the system does not find information about this domain, then this name is free, and most likely you you
              can register it. Next to the message "Domain is free" you will see the cost of its registration for one
              year. To purchase, click the "Add to Cart" button.
            </p>
            <p>
              If the service displays the message "Domain busy", then by clicking on the "Whois" button, you can view
              detailed information about the domain.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Whois – Проверить домен на занятость",
        uz: "Whois - Domen bandligini tekshiring",
        en: "Whois - Check Domain for Busy",
      },
      description: {
        ru: (
          <>
            <p>Какие сведения можно получить при помощи Whois</p>
            <p>После проверки домена, который уже был зарегистрирован, Whois-сервис отображает следующую информацию:</p>
            <ul className="list">
              <li>
                В полях «nserver» будут показаны сведения о DNS-серверах. Это позволяет узнать, у какого
                хостинг-провайдера владелец домена разместил свой сайт, поскольку, как правило, в этих строках
                отображаются записи хостера.
              </li>
              <li>ВВ поле «state» вы увидите актуальный статус домена.</li>
              <li>
                В случае если домен был зарегистрирован на физическое лицо, сервис Whois покажет в строке «person»
                данные об администраторе, однако в ряде доменных зон они могут быть скрыты. В этом случае вместо имени
                владельца в строке «person» вы увидите запись «Private Person».
              </li>
              <li>
                Если доменом владеет юридическое лицо, вместо записи «person» вы увидите строку «org», где отобразятся
                данные об этой организации.
              </li>
              <li>
                Поле «registrar» показывает имя компании-регистратора, в которой был зарегистрирован данный домен.
              </li>
              <li>В строке «admin-contact» сервис отображает контакты администратора домена.</li>
              <li>
                Поле «created» содержит сведения о дате регистрации доменного имени. Выяснив возраст домена, можно
                выявить мошеннические сайты-однодневки. Проверить сайт имеет смысл, если вам прислали e-mail с
                какой-либо подозрительной ссылкой либо в случае, когда вы зашли на вызывающий у вас сомнения веб-ресурс.
                Сайт, созданный недавно, вполне может оказаться мошенническим ресурсом.
              </li>
              <li>Поле «paid-till» показывает, когда закончится срок регистрации домена.</li>
              <li>
                Из строки «free-date» вы узнаете, когда этот адрес окажется свободен, если владелец не станет его
                продлевать.
              </li>
              <li>В поле «last updated» отображается дата последнего обновления данных о домене.</li>
            </ul>
            <p>
              Набор сведений, выдаваемых сервисом, может несколько отличаться в зависимости от доменной зоны и
              регистратора.
            </p>
          </>
        ),
        uz: (
          <>
            <p>Whois yordamida qanday ma'lumotlarni olish mumkin</p>
            <p>Ro'yxatdan o'tgan domenni tekshirgandan so'ng, Whois xizmati quyidagi ma'lumotlarni ko'rsatadi:</p>
            <ul className="list">
              <li>
                "Nserver" maydonlarida DNS serverlari haqidagi ma'lumotlar ko'rsatiladi. Bu sizga qaysi birini aniqlash
                imkonini beradi hosting provayderi, domen egasi o'z saytini joylashtirdi, chunki, qoida tariqasida, bu
                satrlarda hoster yozuvlari ko'rsatiladi.
              </li>
              <li>"Holat" maydonida siz domenning joriy holatini ko'rasiz.</li>
              <li>
                Agar domen jismoniy shaxsga ro'yxatdan o'tgan bo'lsa, Whois xizmati "person" qatorida ko'rsatiladi.
                administrator haqidagi ma'lumotlar, ammo bir qator domen zonalarida ular yashirin bo'lishi mumkin. Bu
                holda, o'rniga egasining ismi "shaxs" qatorida "Shaxsiy shaxs" yozuvini ko'rasiz.
              </li>
              <li>
                Agar domen yuridik shaxsga tegishli bo'lsa, "shaxs" yozuvi o'rniga siz "org" qatorini ko'rasiz, bu erda
                ushbu tashkilot haqidagi ma'lumotlar ko'rsatiladi.
              </li>
              <li>
                "Registrator" maydonida ushbu domen ro'yxatdan o'tgan ro'yxatga oluvchi kompaniya nomi ko'rsatilgan.
              </li>
              <li>"Admin-kontakt" qatorida xizmat domen administratorining kontaktlarini ko'rsatadi.</li>
              <li>
                "Yaratilgan" maydonida domen nomini ro'yxatdan o'tkazish sanasi haqidagi ma'lumotlar mavjud. Domenning
                yoshini bilib, mumkin firibgar veb-saytlarni aniqlash. Agar sizga elektron pochta xabari yuborilgan
                bo'lsa, saytni tekshirish mantiqan har qanday shubhali havola yoki shubhali havolaga kirgan bo'lsangiz
                veb-resurs. Yaqinda yaratilgan sayt soxta manba bo'lib chiqishi mumkin.
              </li>
              <li>Domenni ro'yxatdan o'tkazish muddati qachon tugashini "to'langan" maydoni ko'rsatadi.</li>
              <li>
                "Erkin sana" qatoridan siz ushbu manzil qachon bepul bo'lishini bilib olasiz, agar egasi unga aylanmasa
                uzaytirish.
              </li>
              <li>"So'nggi yangilangan" maydonida domen oxirgi marta yangilangan sana ko'rsatiladi.</li>
            </ul>
            <p>
              Xizmat tomonidan taqdim etilgan ma'lumotlar to'plami domen zonasiga qarab biroz farq qilishi mumkin
              registrator.
            </p>
          </>
        ),
        en: (
          <>
            <p>What information can be obtained using Whois</p>
            <p>
              After checking a domain that has already been registered, the Whois service displays the following
              information:
            </p>
            <ul className="list">
              <li>
                The "nserver" fields will show information about DNS servers. This allows you to find out which hosting
                provider, the domain owner hosted his site, because, as a rule, in these lines hoster entries are
                displayed.
              </li>
              <li>In the "state" field you will see the current status of the domain.</li>
              <li>
                If the domain was registered to an individual, the Whois service will show in the line "person" data
                about the administrator, however, in a number of domain zones they can be hidden. In this case, instead
                of owner name in the line "person" you will see the entry "Private Person".
              </li>
              <li>
                If the domain is owned by a legal entity, instead of the entry "person" you will see the line "org",
                where information about that organization will be displayed.
              </li>
              <li>
                The "registrar" field shows the name of the registrar company in which this domain was registered.
              </li>
              <li>In the "admin-contact" line, the service displays the contacts of the domain administrator.</li>
              <li>
                The "created" field contains information about the date of registration of the domain name. By finding
                out the age of the domain, you can identify fraudulent websites. It makes sense to check the site if you
                were sent an e-mail with any suspicious link, or in case you went to a suspicious link web resource. A
                site created recently may well turn out to be a fraudulent resource.
              </li>
              <li>The "paid-till" field shows when the domain registration expires.</li>
              <li>
                From the "free-date" line you will know when this address will be free if the owner does not become it
                prolong.
              </li>
              <li>The "last updated" field displays the date the domain was last updated.</li>
            </ul>
            <p>
              The set of information provided by the service may differ slightly depending on the domain zone and
              registrar.
            </p>
            {/* <div>
              Check out {" "}
              <a href="/ru/services/domains/whois/usloviya-ispolzovaniya-whois-servisa/">
                terms of use
              </a>{" "}
              built-in Whois service.
            </div> */}
          </>
        ),
      },
    },
    {
      title: {
        ru: "Что такое Whois?",
        uz: "Что такое Whois?",
        en: "Что такое Whois?",
      },
      description: {
        ru: (
          <>
            <p>
            Это специальный сервис, позволяющий узнать актуальные данные об интересующем сайте, доменном имени. Все организации, уполномоченные на регистрацию, должны иметь аккредитацию ICANN, корпорации, согласно политике которой все сведения Whois должны быть открытыми и общедоступными. Это гарантирует возможность получить исчерпывающий набор всех нужных сведений.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Это специальный сервис, позволяющий узнать актуальные данные об интересующем сайте, доменном имени. Все организации, уполномоченные на регистрацию, должны иметь аккредитацию ICANN, корпорации, согласно политике которой все сведения Whois должны быть открытыми и общедоступными. Это гарантирует возможность получить исчерпывающий набор всех нужных сведений.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Это специальный сервис, позволяющий узнать актуальные данные об интересующем сайте, доменном имени. Все организации, уполномоченные на регистрацию, должны иметь аккредитацию ICANN, корпорации, согласно политике которой все сведения Whois должны быть открытыми и общедоступными. Это гарантирует возможность получить исчерпывающий набор всех нужных сведений.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Какая информация доступна через Whois?",
        uz: "Какая информация доступна через Whois?",
        en: "Какая информация доступна через Whois?",
      },
      description: {
        ru: (
          <>
            <p>
            Максимально подробная. Можно понять, кто зарегистрировал доменное имя, когда это было сделано, кто управляет сайтом, используются ли DNS-серверы.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Максимально подробная. Можно понять, кто зарегистрировал доменное имя, когда это было сделано, кто управляет сайтом, используются ли DNS-серверы.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Максимально подробная. Можно понять, кто зарегистрировал доменное имя, когда это было сделано, кто управляет сайтом, используются ли DNS-серверы.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как определить владельца домена?",
        uz: "Как определить владельца домена?",
        en: "Как определить владельца домена?",
      },
      description: {
        ru: (
          <>
            <p>
            В большинстве случае, необходимые сведения закреплены в графах “Administrator” или подобных им. Конкретика определяется доменной зоной и спецификой сайта, в некоторых случаях данные оказываются скрытыми.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            В большинстве случае, необходимые сведения закреплены в графах “Administrator” или подобных им. Конкретика определяется доменной зоной и спецификой сайта, в некоторых случаях данные оказываются скрытыми.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            В большинстве случае, необходимые сведения закреплены в графах “Administrator” или подобных им. Конкретика определяется доменной зоной и спецификой сайта, в некоторых случаях данные оказываются скрытыми.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как определить дату регистрации?",
        uz: "Как определить дату регистрации?",
        en: "Как определить дату регистрации?",
      },
      description: {
        ru: (
          <>
            <p>
            Она указана в поле “Creation Date”.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Она указана в поле “Creation Date”.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Она указана в поле “Creation Date”.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Как узнать дату истечения регистрации?",
        uz: "Как узнать дату истечения регистрации?",
        en: "Как узнать дату истечения регистрации?",
      },
      description: {
        ru: (
          <>
            <p>
            Сведения указаны в графе “Paid-till”. Соотношение с датой регистрации поможет понять специфику сайта, уровень его надежности. Очень легко можно вычислить “однодневку” или другой сайт, который явно ориентирован на мошеннические действия.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Сведения указаны в графе “Paid-till”. Соотношение с датой регистрации поможет понять специфику сайта, уровень его надежности. Очень легко можно вычислить “однодневку” или другой сайт, который явно ориентирован на мошеннические действия.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Сведения указаны в графе “Paid-till”. Соотношение с датой регистрации поможет понять специфику сайта, уровень его надежности. Очень легко можно вычислить “однодневку” или другой сайт, который явно ориентирован на мошеннические действия.
            </p>
          </>
        ),
      },
    },
    {
      title: {
        ru: "Что делать при занятости домена?",
        uz: "Что делать при занятости домена?",
        en: "Что делать при занятости домена?",
      },
      description: {
        ru: (
          <>
            <p>
            Можно выбрать другое доменное имя, максимально созвучное искомому, либо связаться с собственником, попробовать договориться о выкупе, перерегистрации. Ждать даты окончания регистрации – не лучшее решение. Приоритетное право на повторную регистрацию остается за прежним владельцам, так что можно впустую потратить время.
            </p>
          </>
        ),
        uz: (
          <>
            <p>
            Можно выбрать другое доменное имя, максимально созвучное искомому, либо связаться с собственником, попробовать договориться о выкупе, перерегистрации. Ждать даты окончания регистрации – не лучшее решение. Приоритетное право на повторную регистрацию остается за прежним владельцам, так что можно впустую потратить время.
            </p>
          </>
        ),
        en: (
          <>
            <p>
            Можно выбрать другое доменное имя, максимально созвучное искомому, либо связаться с собственником, попробовать договориться о выкупе, перерегистрации. Ждать даты окончания регистрации – не лучшее решение. Приоритетное право на повторную регистрацию остается за прежним владельцам, так что можно впустую потратить время.
            </p>
          </>
        ),
      },
    },
  ];
  const [whoIs, setWhoIs] = useState(null);

  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />
      
      {breadCrumbsWhois && breadCrumbsWhois.length ? (
        <>
          <BreadCrumbs data={breadCrumbsWhois} language={language} />
          <PageBreadcrumb links={breadCrumbsWhois} language={language} />
        </>
      ) : (
        ""
      )}

      <Container headTitle={langData.headTitle[language]}>
      </Container>

      <div className={st.domains__head}>
        <Container clNTitle="mb-3">
          {/* <hr /> */}
          <p>{langData.description[language]}</p>
          <div className={st.domains__head__block}>
            <div className={st.domains__head__block__item}>
              <RegDomainBlock language={language} showDomains={false} setWhoIs={setWhoIs} />

              {whoIs && (
                <div className="my-4">
                  <h2 className="text-start">Whois</h2>

                  <div className="table" style={{ overflowX: "auto", textAlign: "left" }}>
                    <table className="table table-striped" style={{ minWidth: "800px" }}>
                      <thead>
                        <tr>
                          <td colSpan="8" style={{ textAlign: "center" }}>
                            <strong>{langData.domainSettings[language]}</strong>
                          </td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <strong>{langData.domain[language]}:</strong>
                          </td>
                          <td colSpan="3">{whoIs?.dName ?? "-"}</td>
                          <td>
                            <strong>{langData.status[language]}:</strong>
                          </td>
                          {/* <td colSpan="3">{langData.active[language]}</td> */}
                          <td colSpan="3">{whoIs?.dStatus}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.descriptionTitle[language]}:</strong>
                          </td>
                          <td colSpan="3">{whoIs?.sDesc}</td>
                          <td>
                            <strong>{langData.firstNS[language]}:</strong>
                          </td>
                          <td colSpan="3">
                            {langData.domain[language]}: {whoIs?.sNs1}{" "}
                            {whoIs?.sNs1 !== "not.defined." && `IP: ${whoIs?.sIp1}`}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.registrator[language]}:</strong>
                          </td>
                          <td colSpan="3">{whoIs?.sRegistrator}</td>
                          <td>
                            <strong>{langData.secNS[language]}:</strong>
                          </td>
                          <td colSpan="3">
                            {langData.domain[language]}: {whoIs?.sNs2}{" "}
                            {whoIs?.sNs2 !== "not.defined." && `IP: ${whoIs?.sIp2}`}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.createdAt[language]}:</strong>
                          </td>
                          <td colSpan="3">{whoIs?.dActivated} г.</td>
                          <td>
                            <strong>{langData.thirdNS[language]}:</strong>
                          </td>
                          <td colSpan="3">
                            {langData.domain[language]}: {whoIs?.sNs3}{" "}
                            {whoIs?.sNs3 !== "not.defined." && `IP: ${whoIs?.sIp3}`}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.until[language]}:</strong>
                          </td>
                          <td colSpan="3">{whoIs?.dExpired} г.</td>
                          <td>
                            <strong>{langData.fourthNS[language]}:</strong>
                          </td>
                          <td colSpan="3">
                            {langData.domain[language]}: {whoIs?.sNs4}{" "}
                            {whoIs?.sNs4 !== "not.defined." && `IP: ${whoIs?.sIp4}`}
                          </td>
                        </tr>
                      </tbody>

                      <thead>
                        <tr>
                          <td colSpan="8" style={{ textAlign: "center" }}>
                            <strong>{langData.clientSettings[language]}</strong>
                          </td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <strong>{langData.type[language]}:</strong>
                          </td>
                          <td colSpan="3">{whoIs?.sType}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.organistaion[language]}:</strong>
                          </td>
                          <td colSpan="7">{whoIs?.sOrg}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.region[language]}:</strong>
                          </td>
                          <td colSpan="7">
                            {whoIs?.sCustomerCity}, {whoIs?.sCustomerCountry}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{langData.postIndex[language]}:</strong>
                          </td>
                          <td>{whoIs?.sCustomerPost}</td>
                          <td>
                            <strong>{langData.city[language]}:</strong>
                          </td>
                          <td>{whoIs?.sCustomerCity}</td>
                          <td>
                            <strong>{langData.country[language]}:</strong>
                          </td>
                          <td>{whoIs?.sCustomerCountry}</td>
                          <td>
                            <strong>{langData.prefix[language]}:</strong>
                          </td>
                          <td>{whoIs?.sCustomerState}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="table">
                    <table style={{ border: "1px solid" }}>
                      <tr>
                        <th className="text-start">dName</th>
                        <td>{whoIs?.dName}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sRegistrator</th>
                        <td>{whoIs?.sRegistrator}</td>
                      </tr>
                      <tr>
                        <th className="text-start">dStatus</th>
                        <td>{whoIs?.dStatus}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sNs1</th>
                        <td>{whoIs?.sNs1}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sIp1</th>
                        <td>{whoIs?.sIp1}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sNs2</th>
                        <td>{whoIs?.sNs2}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sIp2</th>
                        <td>{whoIs?.sIp2}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sNs3</th>
                        <td>{whoIs?.sNs3}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sNs4</th>
                        <td>{whoIs?.sNs4}</td>
                      </tr>
                      <tr>
                        <th className="text-start">dActivated</th>
                        <td>{whoIs?.dActivated}</td>
                      </tr>
                      <tr>
                        <th className="text-start">dExpired</th>
                        <td>{whoIs?.dExpired}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sOrg</th>
                        <td>{whoIs?.sOrg}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sCustomerPost</th>
                        <td>{whoIs?.sCustomerPost}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sCustomerCity</th>
                        <td>{whoIs?.sCustomerCity}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sCustomerRegion</th>
                        <td>{whoIs?.sCustomerRegion}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sCustomerCountry</th>
                        <td>{whoIs?.sCustomerCountry}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sCustomerState</th>
                        <td>{whoIs?.sCustomerState}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sTechsOrgRU</th>
                        <td>{whoIs?.sTechsOrgRU}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sTechsPost</th>
                        <td>{whoIs?.sTechsPost}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sTechsCityRU</th>
                        <td>{whoIs?.sTechsCityRU}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sTechsRegion</th>
                        <td>{whoIs?.sTechsRegion}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sTechsCountryRU</th>
                        <td>{whoIs?.sTechsCountryRU}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sTechsState</th>
                        <td>{whoIs?.sTechsState}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sBillsOrgRU</th>
                        <td>{whoIs?.sBillsOrgRU}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sBillsPost</th>
                        <td>{whoIs?.sBillsPost}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sBillsCityRU</th>
                        <td>{whoIs?.sBillsCityRU}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sBillsRegion</th>
                        <td>{whoIs?.sBillsRegion}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sBillsCountryRU</th>
                        <td>{whoIs?.sBillsCountryRU}</td>
                      </tr>
                      <tr>
                        <th className="text-start">sBillsState</th>
                        <td>{whoIs?.sBillsState}</td>
                      </tr>
                      <tr>
                        <th className="text-start">rcode</th>
                        <td>{whoIs?.rcode}</td>
                      </tr>
                    </table>
                  </div> */}
                </div>
              )}

              <br />
              {langData.reg[language]}
            </div>
          </div>
        </Container>
      </div>

      <Container>
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

      <FAQ faq={faq} title="FAQ" language={language} />
      <ForContract data={forContractArticlesData} language={language} />
      <Partners language={language} />
      <Reviews language={language} />
    </>
  );
}
