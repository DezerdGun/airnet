import Container from "@/components/container";
import Link from "next/link";

const sitemap = [
  { title: { ru: "Главная", uz: "Bosh bolim" }, link: "/" },
  { title: { ru: "О нас", uz: "Biz haqimizda" }, link: "/about" },
  {
    title: { ru: "Администрирование", uz: "Ma'muriyat" },
    link: "/admin-support",
  },
  {
    title: { ru: "Защита от DDOS", uz: "DDOS dan himoya" },
    link: "/anti-ddos",
  },
  {
    title: {
      ru: "Автоматическое резервное копирование",
      uz: "Avtomatik tarzdagi nusha kochirish",
    },
    link: "/autobackup",
  },
  {
    title: {
      ru: "Высокопроизводительные серверы",
      uz: "Yuqori unumdorli serverlar",
    },
    link: "/big-vds",
  },
  {
    title: { ru: "Блог", uz: "Blok" },
    link: "/blog",
    children: [
      {
        title: {
          ru: "2019 год объявлен Годом активных инвестиций и социального развития",
          uz: "“2019-yil “Faol investitsiyalar va ijtimoiy rivojlanish yili” deb e’lon qilindi.",
        },
        link: "/blog/2019-god-obyavlen-godom-aktivnyx-investicij-i-socialnogo-razvitiya",
      },
      {
        title: {
          ru: "Центральный банк опубликовал проект закона о платежах и электронных деньгах в Узбекистане",
          uz: "Markaziy bank O‘zbekistonda to‘lovlar va elektron pullar to‘g‘risida”gi qonun loyihasini e’lon qildi",
        },
        link: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
      },
      {
        title: {
          ru: "Акции разработчика игры Cyberpunk 2077 рухнули на 20%",
          uz: "Cyberpunk 2077 oʻyinini ishlab chiquvchining aksiyalari 20 foizga tushib ketdi.",
        },
        link: "/blog/cyberpunk-2077",
      },
      {
        title: {
          ru: "Депутаты начали обсуждение законопроекта «О персональных данных»",
          uz: "Deputatlar “Shaxsiy ma’lumotlar to‘g‘risida”gi qonun loyihasini muhokama qilishga kirishdilar.",
        },
        link: "/blog/deputaty-nachali-obsuzhdenie-zakonoproekta-o-personalnyx-dannyx",
      },
      {
        title: {
          ru: "Facebook сообщил об ошибке",
          uz: "Facebook xato haqida xabar berdi",
        },
        link: "/blog/facebook-soobshhil-ob-oshibke",
        havola: "/blog/facebook-soobshhil-ob-oshibke",
      },
      {
        title: {
          ru: "Financial Times сообщает, что майнеры закрывают бизнес, так как биткоин стал дешевле стоимости его добычи",
          uz: "Financial Times ma'lumotlariga ko'ra, konchilar biznesni to'xtatmoqdalar, chunki bitkoin ishlab chiqarish narxidan arzonlashdi",
        },
        link: "/blog/financial-times-soobshhaet-chto-majnery-zakryvayut-biznes-tak-kak-bitkoin-stal-deshevle-stoimosti-ego-dobychi",
      },
      {
        title: {
          ru: "Google подвел итоги 2018 года",
          uz: "Google 2018 yil yakunlarini sarhisob qildi",
        },
        link: "/blog/google-podvel-itogi-2018-goda",
      },
      {
        title: {
          ru: "Илон Маск хочет привлечь $500 млн на создание мирового интернета",
          uz: "Ilon Mask jahon internetini qurish uchun 500 million dollar yig‘moqchi",
        },
        link: "/blog/ilon-mask-xochet-privlech-500-mln-na-sozdanie-mirovogo-interneta",
      },
      {
        title: {
          ru: "К чему привели неполадки с Facebook и YouTube",
          uz: "Facebook va YouTube bilan bog'liq muammolarga nima sabab bo'ldi",
        },
        link: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
      },
      {
        title: {
          ru: "Карты UzCard теперь можно пополнять наличными",
          uz: "UzCard kartalarini endi naqd pulda to‘ldirish mumkin",
        },
        link: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
      },
      {
        title: {
          ru: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
          uz: "Lenovo kompaniyasi 12 Gb tezkor xotiraga ega dunyodagi birinchi smartfonni taqdim etdi",
        },
        link: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
      },
      {
        title: { ru: "Блог | Страница 2", uz: "Blog | 2-sahifa" },
        link: "/blog/page/2",
      },
      {
        title: { ru: "Блог | Страница 3", uz: "Blog | 3-sahifa" },
        link: "/blog/page/3",
      },
      {
        title: {
          ru: "Speedtest небольшой рост скорости интернета в Узбекистане",
          uz: "Oʻzbekistonda internet tezligining eng tez oʻsishis",
        },
        link: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
      },
      {
        title: {
          ru: "В Telegram появились голосовые чаты и другие новые возможности",
          uz: "Telegram’da ovozli chatlar va boshqa yangi funksiyalar paydo bo‘ldi",
        },
        link: "/blog/telegram-voice-chat",
      },
      {
        title: {
          ru: "UZINFOCOM прекратил работу в качестве регистратора доменов",
          uz: "UZINFOCOM domen registratori sifatida ishlashni to‘xtatdi",
        },
        link: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
      },
      {
        title: {
          ru: "В Китае решили отказаться от 3G",
          uz: "Xitoy 3Gdan voz kechishga qaror qildi",
        },
        link: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
      },
      {
        title: {
          ru: "В Telegram появились встроенные опросы",
          uz: "Telegram’da o‘rnatilgan so‘rovnomalar mavjud",
        },
        link: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
      },
      {
        title: {
          ru: "В Узбекистане разрешат сохранять номер при смене оператора",
          uz: "O‘zbekistonda operatorni almashtirishda raqamni saqlab qolishga ruxsat beriladi",
        },
        link: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
      },
      {
        title: {
          ru: "«ВКонтакте» завела профиль в Instagram",
          uz: "VKontakte Instagram profilini ishga tushirdi",
        },
        link: "/blog/vkontakte-zavela-profil-v-instagram",
      },
      {
        title: {
          ru: "Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android",
          uz: "Birinchi marta VPN ilovalari O‘zbekistonda ham iOS, ham Android uchun eng ko‘p yuklab olingan ilovalarga aylandi",
        },
        link: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
      },
      {
        title: {
          ru: "«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане",
          uz: "Yandex.Money O‘zbekistonda hamyonlarni to‘ldirish usullarini kengaytirish ustida ishlamoqda",
        },
        link: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
      },
      {
        title: {
          ru: "«Яндекс.Музыка» и Beeline запустили совместный проект",
          uz: "Yandex.Musiqa va Beeline hamkorlikdagi loyihani ishga tushirdi",
        },
        link: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
      },
    ],
  },
  {
    title: { ru: "Оптимальные серверы", uz: "Optimal serverlar" },
    link: "/cheap-vds",
  },
  { title: { ru: "Конструктор", uz: "Konstruktor" }, link: "/constructor-vds" },
  { title: { ru: "Контакты", uz: "Kontaktlar" }, link: "/contacts" },
  { title: { ru: "Создание сайта", uz: "Sayt yaratish" }, link: "/create" },
  { title: { ru: "Дата-Центр", uz: "Vaqt-markazi" }, link: "/dc" },
  {
    title: { ru: "Выделенные сервера", uz: "Ajratilgan serverlar" },
    link: "/dedicated",
  },
  { title: { ru: "Документы", uz: "Hujjatlar" }, link: "/documents" },
  { title: { ru: "Домены", uz: "Domenlar" }, link: "/domains" },
  {
    title: { ru: "Частые вопросы", uz: "Malum savollar" },
    link: "/faq",
    children: [
      {
        title: { ru: "Что такое домен?", uz: "Domen nma?" },
        link: "/faq/chto-takoe-domen",
      },
      {
        title: {
          ru: "Как новичку выбрать хостинг-провайдера: 5 простых советов",
          uz: "Yangi mijozlar uchun host tanlashning: 5 oson uslubi",
        },
        link: "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
      },
      {
        title: {
          ru: "Как перенести сайт на хостинг AIRNET?",
          uz: "Saytni qanday qilib AIRNET hostiga otkazish",
        },
        link: "/faq/kak-perenesti-sajt-na-xosting-airnet",
      },
      {
        title: {
          ru: "Как получить тестовый период?",
          uz: "Qanday qilib sinov muddatini olish",
        },
        link: "/faq/kak-poluchit-testovyj-period",
      },
      {
        title: {
          ru: "Как проверить домен на занятость?",
          uz: "Domen bandligini tekshirish",
        },
        link: "/faq/kak-proverit-domen-na-zanyatost",
      },
      {
        title: {
          ru: "Как установить WordPress на хостинг?",
          uz: "WordPress ni qanday qilib xostga yuklash",
        },
        link: "/faq/kak-ustanovit-wordpress-na-xosting",
      },
      {
        title: {
          ru: "Как заключить договор?",
          uz: "Qanday qilib shartnoma tuzish",
        },
        link: "/faq/kak-zaklyuchit-dogovor",
      },
      {
        title: {
          ru: "Как зарегистрировать домен?",
          uz: "Domenni qanday royxatdan otqazish",
        },
        link: "/faq/kak-zaregistrirovat-domen",
      },
      {
        title: {
          ru: "Ошибочно зарегистрировал домен, можно ли отменить?",
          uz: "Domenni royhatdan otqazishda hatolik, tog'irlash mumkinmi?",
        },
        link: "/faq/oshibochno-zaregistriroval-domen",
      },
      {
        title: {
          ru: "Правила регистрации доменных имен в зоне .UZ",
          uz: "Domen nomlarini .UZ da ornatish qoidalari",
        },
        link: "/faq/pravilo-registracii-domena-v-zone-uz",
      },
      {
        title: {
          ru: "Я зарегистрировал домен, что дальше?",
          uz: "Domenni royhattan otkazdim, endichi?",
        },
        link: "/faq/ya-zaregistriroval-domen-chto-dalshe",
      },
    ],
  },
  {
    title: { ru: "Бесплатные домены", uz: "Bepul domen" },
    link: "/free-domains",
  },
  {
    title: { ru: "Помощь", uz: "Yordam" },
    link: "/help",
    children: [
      {
        title: { ru: "CMS", uz: "CMS" },
        link: "/help/cms",
        children: [
          {
            title: { ru: "Что такое CMS", uz: "CMS nma?" },
            link: "/help/cms/chto-takoe-cms",
          },
        ],
      },
      {
        title: { ru: "Домены", uz: "Domenlar" },
        link: "/help/domain",
        children: [
          {
            title: { ru: "DNS записи", uz: "DNS yozuvlari" },
            link: "/help/domain/dns",
          },
          {
            title: {
              ru: "Как зарегистрировать домен UZ",
              uz: "Domen .UZ qanday royxatdan otkazish?",
            },
            link: "/help/domain/kak-zaregistrirovat-domen",
          },
          {
            title: {
              ru: "Нужно ли вводить данные паспорта для регистрации?",
              uz: "Royxatdan otkazish uchun passport ma'lumotlari kerakmi",
            },
            link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
          },
          {
            title: {
              ru: "Рекомендации по выбору доменного имени",
              uz: "Domen nomini tanlash uchun yoriqnoma",
            },
            link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
          },
        ],
      },
      {
        title: { ru: "FTP", uz: "FTP" },
        link: "/help/ftp",
        children: [
          {
            title: { ru: "Что такое FTP", uz: "FTP nma?" },
            link: "/help/ftp/chto-takoe-ftp",
          },
        ],
      },
      {
        title: { ru: "Хостинг", uz: "Xost" },
        link: "/help/hosting",
        children: [
          {
            title: {
              ru: "Как перенести сайт на хостинг AIRNET?",
              uz: "Saytni qanday qilib AIRNET xostiga ga otkazish",
            },
            link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
          },
        ],
      },
      {
        title: { ru: "Почта", uz: "Pochta" },
        link: "/help/mail",
        children: [
          {
            title: { ru: "Почта для домена", uz: "Domen uchun pochta" },
            link: "/help/mail/pochta-dlya-domena",
          },
        ],
      },
      {
        title: { ru: "Технические вопросы", uz: "Texnik savollar" },
        link: "/help/site",
        children: [
          {
            title: { ru: "Файл .htaccess", uz: ".htaccess Fayl" },
            link: "/help/site/file-htaccess",
          },
        ],
      },
      {
        title: { ru: "SSl-сертификаты", uz: "SS1-sertifakatlari" },
        link: "/help/ssl",
        children: [
          {
            title: {
              ru: "Зачем нужен SSl-сертификат",
              uz: "SS1-sertifikat nmaga kerak",
            },
            link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
          },
        ],
      },
      {
        title: { ru: "VDS", uz: "VDS" },
        link: "/help/vds",
        children: [
          {
            title: {
              ru: "Как долго хранятся учётные записи VDS?",
              uz: "Qancha vaqt VDS yozuvlari saqlanib qoladi",
            },
            link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
          },
          {
            title: {
              ru: "Необходимые навыки для работы с VDS",
              uz: "VDS uchun kerakli qobuliyatlar",
            },
            link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
          },
          {
            title: {
              ru: "Перенос аккаунта на VDS",
              uz: "Akkauntni VDS ga otkazish",
            },
            link: "/help/vds/perenos-akkaunta-na-vds",
          },
          {
            title: {
              ru: "Преимущества VDS и VPS-серверов",
              uz: "VDS va VPS servelraning ustunligi",
            },
            link: "/help/vds/preimushhestva-vds-i-vps-serverov",
          },
          {
            title: {
              ru: "Смена тарифного плана на VDS",
              uz: "VDS tarif rejasini ozgartirish",
            },
            link: "/help/vds/smena-tarifnogo-plana-na-vds",
          },
          {
            title: {
              ru: "Восстановление root пароля от VDS",
              uz: "VDS root qulfini tiklash",
            },
            link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
          },
        ],
      },
    ],
  },
  { title: { ru: "Хостинг", uz: "Xost" }, link: "/hosting" },
  { title: { ru: "Лицензии", uz: "Litsenziya" }, link: "/license" },
  { title: { ru: "Интернет пакеты", uz: "Internet tezligi" }, link: "/net" },
  { title: { ru: "Публичная оферта", uz: "Ommabop oferta" }, link: "/oferta" },
  { title: { ru: "Партнеры", uz: "Hamkorlar" }, link: "/partners" },
  { title: { ru: "Оплата", uz: "To'lov" }, link: "/payment" },
  {
    title: { ru: "Политика конфиденциальности", uz: "Maxfiylik siyosati" },
    link: "/privacy-policy",
  },
  { title: { ru: "Реселлинг", uz: "Reselling" }, link: "/reseller" },
  {
    title: { ru: "Конструктор сайтов SitePad", uz: "SitePad sayti tuzilishi" },
    link: "/sitepad",
  },
  { title: { ru: "Карта сайта", uz: "Sayt kartasi" }, link: "/sitemap" },
  {
    title: { ru: "Скорость интернета", uz: "Internet tezligi" },
    link: "/speed",
  },
  { title: { ru: "SSL сертификаты", uz: "SSL sertifikati" }, link: "/ssl" },
  { title: { ru: "Активныe акции", uz: "Faol aktisiyalar" }, link: "/stock" },
  {
    title: { ru: "Служба поддержки", uz: "Qollab quvatlash markazi" },
    link: "/support",
  },
  {
    title: { ru: "Оптимальные серверы", uz: "Optimal serverlar" },
    link: "/vds",
  },
  { title: { ru: "SSL-сертификаты", uz: "SSL - sertefikati" }, link: "/voip" },
];

const Linker = ({ link, i, language }) => {
  if (link?.children)
    return (
      <>
        <li key={i} className="mb-2">
          <Link href={link.link}>
            <a>{link.title[language]}</a>
          </Link>
        </li>
        <ul>
          {link.children.map((item, i) => (
            <Linker key={i} link={item} language={language} />
          ))}
        </ul>
      </>
    );
  return (
    <li key={i} className="mb-2">
      <Link href={link.link}>
        <a>{link.title[language]}</a>
      </Link>
    </li>
  );
};

const Sitemap = ({ language }) => {
  return (
    <Container headTitle="Карта сайта">
      {sitemap.map((item, i) => (
        <Linker key={i} link={item} language={language} />
      ))}
    </Container>
  );
};

export default Sitemap;
