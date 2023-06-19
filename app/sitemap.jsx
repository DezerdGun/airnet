import Container from "@/components/container";
import { checkLang } from "@/utils/checkLang";
import Link from "next/link";

const sitemap = [
  { title: { ru: "Главная", uz: "Bosh bolim", en: "Home" }, link: "/" },
  { title: { ru: "О нас", uz: "Biz haqimizda", en: "About Us" }, link: "/about" },
  {
    title: { ru: "Администрирование", uz: "Ma'muriyat", en: "Administration" },
    link: "/admin-support",
  },
  {
    title: { ru: "Защита от DDOS", uz: "DDOS dan himoya", en: "DDOS Protection" },
    link: "/anti-ddos",
  },
  {
    title: {
      ru: "Автоматическое резервное копирование",
      uz: "Avtomatik tarzdagi nusha kochirish",
      en: "Auto backup",
    },
    link: "/autobackup",
  },
  {
    title: {
      ru: "Высокопроизводительные серверы",
      uz: "Yuqori unumdorli serverlar",
      en: "High Performance Servers",
    },
    link: "/big-vds",
  },
  {
    title: { ru: "Блог", uz: "Blog", en: "Blog" },
    link: "/blog",
    children: [
      {
        title: {
          ru: "2019 год объявлен Годом активных инвестиций и социального развития",
          uz: "“2019-yil “Faol investitsiyalar va ijtimoiy rivojlanish yili” deb e’lon qilindi.",
          en: "2019 has been declared the Year of Active Investments and Social Development",
        },
        link: "/blog/2019-god-obyavlen-godom-aktivnyx-investicij-i-socialnogo-razvitiya",
      },
      {
        title: {
          ru: "Центральный банк опубликовал проект закона о платежах и электронных деньгах в Узбекистане",
          uz: "Markaziy bank O‘zbekistonda to‘lovlar va elektron pullar to‘g‘risida”gi qonun loyihasini e’lon qildi",
          en: "The Central Bank has published a draft law on payments and electronic money in Uzbekistan",
        },
        link: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
      },
      {
        title: {
          ru: "Акции разработчика игры Cyberpunk 2077 рухнули на 20%",
          uz: "Cyberpunk 2077 oʻyinini ishlab chiquvchining aksiyalari 20 foizga tushib ketdi.",
          en: "Cyberpunk 2077 game developer stocks plummeted 20%",
        },
        link: "/blog/cyberpunk-2077",
      },
      {
        title: {
          ru: "Депутаты начали обсуждение законопроекта «О персональных данных»",
          uz: "Deputatlar “Shaxsiy ma’lumotlar to‘g‘risida”gi qonun loyihasini muhokama qilishga kirishdilar.",
          en: "Deputies began discussing the draft law «On Personal Data»",
        },
        link: "/blog/deputaty-nachali-obsuzhdenie-zakonoproekta-o-personalnyx-dannyx",
      },
      {
        title: {
          ru: "Facebook сообщил об ошибке",
          uz: "Facebook xato haqida xabar berdi",
          en: "Facebook reported an error",
        },
        link: "/blog/facebook-soobshhil-ob-oshibke",
      },
      {
        title: {
          ru: "Financial Times сообщает, что майнеры закрывают бизнес, так как биткоин стал дешевле стоимости его добычи",
          uz: "Financial Times ma'lumotlariga ko'ra, konchilar biznesni to'xtatmoqdalar, chunki bitkoin ishlab chiqarish narxidan arzonlashdi",
          en: "Financial Times reports that miners are shutting down business as bitcoin has become cheaper than the cost of its production,",
        },
        link: "/blog/financial-times-soobshhaet-chto-majnery-zakryvayut-biznes-tak-kak-bitkoin-stal-deshevle-stoimosti-ego-dobychi",
      },
      {
        title: {
          ru: "Google подвел итоги 2018 года",
          uz: "Google 2018 yil yakunlarini sarhisob qildi",
          en: "Google summed up the results of 2018",
        },
        link: "/blog/google-podvel-itogi-2018-goda",
      },
      {
        title: {
          ru: "Илон Маск хочет привлечь $500 млн на создание мирового интернета",
          uz: "Ilon Mask jahon internetini qurish uchun 500 million dollar yig‘moqchi",
          en: "Elon Musk wants to raise $500 million to build the world's internet",
        },
        link: "/blog/ilon-mask-xochet-privlech-500-mln-na-sozdanie-mirovogo-interneta",
      },
      {
        title: {
          ru: "К чему привели неполадки с Facebook и YouTube",
          uz: "Facebook va YouTube bilan bog'liq muammolarga nima sabab bo'ldi",
          en: "What did the problems with Facebook and YouTube lead to",
        },
        link: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
      },
      {
        title: {
          ru: "Карты UzCard теперь можно пополнять наличными",
          uz: "UzCard kartalarini endi naqd pulda to‘ldirish mumkin",
          en: "UzCard cards can now be replenished in cash",
        },
        link: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
      },
      {
        title: {
          ru: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
          uz: "Lenovo kompaniyasi 12 Gb tezkor xotiraga ega dunyodagi birinchi smartfonni taqdim etdi",
          en: "Lenovo introduced the world's first smartphone with 12 GB of RAM",
        },
        link: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
      },
      {
        title: { ru: "Блог | Страница 2", uz: "Blog | 2-sahifa", en: "Blog | Page 2" },
        link: "/blog/page/2",
      },
      {
        title: { ru: "Блог | Страница 3", uz: "Blog | 3-sahifa", en: "Blog | Page 3" },
        link: "/blog/page/3",
      },
      {
        title: {
          ru: "Speedtest небольшой рост скорости интернета в Узбекистане",
          uz: "Oʻzbekistonda internet tezligining eng tez oʻsishis",
          en: "Speedtest small increase in internet speed in Uzbekistan",
        },
        link: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
      },
      {
        title: {
          ru: "В Telegram появились голосовые чаты и другие новые возможности",
          uz: "Telegram’da ovozli chatlar va boshqa yangi funksiyalar paydo bo‘ldi",
          en: "Voice chats and other new features appeared in Telegram",
        },
        link: "/blog/telegram-voice-chat",
      },
      {
        title: {
          ru: "UZINFOCOM прекратил работу в качестве регистратора доменов",
          uz: "UZINFOCOM domen registratori sifatida ishlashni to‘xtatdi",
          en: "UZINFOCOM has stopped working as a domain registrar",
        },
        link: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
      },
      {
        title: {
          ru: "В Китае решили отказаться от 3G",
          uz: "Xitoy 3Gdan voz kechishga qaror qildi",
          en: "China decided to abandon 3G",
        },
        link: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
      },
      {
        title: {
          ru: "В Telegram появились встроенные опросы",
          uz: "Telegram’da o‘rnatilgan so‘rovnomalar mavjud",
          en: "Telegram has built-in polls",
        },
        link: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
      },
      {
        title: {
          ru: "В Узбекистане разрешат сохранять номер при смене оператора",
          uz: "O‘zbekistonda operatorni almashtirishda raqamni saqlab qolishga ruxsat beriladi",
          en: "In Uzbekistan, it will be allowed to keep the number when changing the operator",
        },
        link: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
      },
      {
        title: {
          ru: "«ВКонтакте» завела профиль в Instagram",
          uz: "VKontakte Instagram profilini ishga tushirdi",
          en: "VKontakte launched an Instagram profile",
        },
        link: "/blog/vkontakte-zavela-profil-v-instagram",
      },
      {
        title: {
          ru: "Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android",
          uz: "Birinchi marta VPN ilovalari O‘zbekistonda ham iOS, ham Android uchun eng ko‘p yuklab olingan ilovalarga aylandi",
          en: "For the first time, VPN applications have become the most downloaded in Uzbekistan for both iOS and Android",
        },
        link: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
      },
      {
        title: {
          ru: "«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане",
          uz: "Yandex.Money O‘zbekistonda hamyonlarni to‘ldirish usullarini kengaytirish ustida ishlamoqda",
          en: "Yandex.Money is working on expanding methods for replenishing wallets in Uzbekistan",
        },
        link: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
      },
      {
        title: {
          ru: "«Яндекс.Музыка» и Beeline запустили совместный проект",
          uz: "Yandex.Musiqa va Beeline hamkorlikdagi loyihani ishga tushirdi",
          en: "Yandex.Music and Beeline launched a joint project",
        },
        link: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
      },
    ],
  },
  {
    title: { ru: "Оптимальные серверы", uz: "Optimal serverlar", en: "Optimal Servers" },
    link: "/cheap-vds",
  },
  { title: { ru: "Конструктор", uz: "Konstruktor", en: "Constructor" }, link: "/constructor-vds" },
  { title: { ru: "Контакты", uz: "Kontaktlar", en: "Contacts" }, link: "/contacts" },
  { title: { ru: "Создание сайта", uz: "Sayt yaratish", en: "Creating a site" }, link: "/create" },
  { title: { ru: "Дата-Центр", uz: "Vaqt-markazi", en: "Data center" }, link: "/dc" },
  {
    title: { ru: "Выделенные сервера", uz: "Ajratilgan serverlar", en: "Dedicated servers" },
    link: "/dedicated",
  },
  { title: { ru: "Документы", uz: "Hujjatlar", en: "Documentation" }, link: "/documents" },
  { title: { ru: "Домены", uz: "Domenlar", en: "Domains" }, link: "/domains" },
  // {
  //   title: { ru: "Частые вопросы", uz: "Malum savollar", en: "FAQ" },
  //   link: "/faq",
  //   children: [
  //     {
  //       title: { ru: "Что такое домен?", uz: "Domen nma?", en: "What is a domain?" },
  //       link: "/faq/chto-takoe-domen",
  //     },
  //     {
  //       title: {
  //         ru: "Как новичку выбрать хостинг-провайдера: 5 простых советов",
  //         uz: "Yangi mijozlar uchun host tanlashning: 5 oson uslubi",
  //         en: "How to choose a hosting provider for a beginner: 5 simple tips",
  //       },
  //       link: "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
  //     },
  //     {
  //       title: {
  //         ru: "Как перенести сайт на хостинг AIRNET?",
  //         uz: "Saytni qanday qilib AIRNET hostiga otkazish",
  //         en: "How to transfer a website to AIRNET hosting?",
  //       },
  //       link: "/faq/kak-perenesti-sajt-na-xosting-airnet",
  //     },
  //     {
  //       title: {
  //         ru: "Как получить тестовый период?",
  //         uz: "Qanday qilib sinov muddatini olish",
  //         en: "How to get a trial period?",
  //       },
  //       link: "/faq/kak-poluchit-testovyj-period",
  //     },
  //     {
  //       title: {
  //         ru: "Как проверить домен на занятость?",
  //         uz: "Domen bandligini tekshirish",
  //         en: "How to check if a domain is busy?",
  //       },
  //       link: "/faq/kak-proverit-domen-na-zanyatost",
  //     },
  //     {
  //       title: {
  //         ru: "Как установить WordPress на хостинг?",
  //         uz: "WordPress ni qanday qilib xostga yuklash",
  //         en: "How to install WordPress on hosting?",
  //       },
  //       link: "/faq/kak-ustanovit-wordpress-na-xosting",
  //     },
  //     {
  //       title: {
  //         ru: "Как заключить договор?",
  //         uz: "Qanday qilib shartnoma tuzish",
  //         en: "How to conclude an agreement?",
  //       },
  //       link: "/faq/kak-zaklyuchit-dogovor",
  //     },
  //     {
  //       title: {
  //         ru: "Как зарегистрировать домен?",
  //         uz: "Domenni qanday royxatdan otqazish",
  //         en: "How to register a domain?",
  //       },
  //       link: "/faq/kak-zaregistrirovat-domen",
  //     },
  //     {
  //       title: {
  //         ru: "Ошибочно зарегистрировал домен, можно ли отменить?",
  //         uz: "Domenni royhatdan otqazishda hatolik, tog'irlash mumkinmi?",
  //         en: "I registered a domain by mistake, can I cancel it?",
  //       },
  //       link: "/faq/oshibochno-zaregistriroval-domen",
  //     },
  //     {
  //       title: {
  //         ru: "Правила регистрации доменных имен в зоне .UZ",
  //         uz: "Domen nomlarini .UZ da ornatish qoidalari",
  //         en: "Rules for registering domain names in the .UZ zone",
  //       },
  //       link: "/faq/pravilo-registracii-domena-v-zone-uz",
  //     },
  //     {
  //       title: {
  //         ru: "Я зарегистрировал домен, что дальше?",
  //         uz: "Domenni royhattan otkazdim, endichi?",
  //         en: "I have registered a domain, what's next?",
  //       },
  //       link: "/faq/ya-zaregistriroval-domen-chto-dalshe",
  //     },
  //   ],
  // },
  {
    title: { ru: "Бесплатные домены", uz: "Bepul domen", en: "Free Domains" },
    link: "/free-domains",
  },
  {
    title: { ru: "Помощь", uz: "Yordam", en: "Help" },
    link: "/help",
    children: [
      {
        title: { ru: "CMS", uz: "CMS", en: "CMS" },
        link: "/help/cms",
        children: [
          {
            title: { ru: "Что такое CMS?", uz: "CMS nma?", en: "What is CMS?" },
            link: "/help/cms/chto-takoe-cms",
          },
        ],
      },
      {
        title: { ru: "Домены", uz: "Domenlar", en: "Domains" },
        link: "/help/domain",
        children: [
          {
            title: { ru: "DNS записи", uz: "DNS yozuvlari", en: "DNS entries" },
            link: "/help/domain/dns",
          },
          {
            title: {
              ru: "Как зарегистрировать домен UZ",
              uz: "Domen .UZ qanday royxatdan otkazish?",
              en: "How to register UZ domain",
            },
            link: "/help/domain/kak-zaregistrirovat-domen",
          },
          {
            title: {
              ru: "Нужно ли вводить данные паспорта для регистрации?",
              uz: "Royxatdan otkazish uchun passport ma'lumotlari kerakmi",
              en: "Do I need to enter passport data for registration?",
            },
            link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
          },
          {
            title: {
              ru: "Рекомендации по выбору доменного имени",
              uz: "Domen nomini tanlash uchun yoriqnoma",
              en: "Recommendations for choosing a domain name",
            },
            link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
          },
        ],
      },
      {
        title: { ru: "FTP", uz: "FTP", en: "FTP" },
        link: "/help/ftp",
        children: [
          {
            title: { ru: "Что такое FTP?", uz: "FTP nma?", en: "What is FTP?" },
            link: "/help/ftp/chto-takoe-ftp",
          },
        ],
      },
      {
        title: { ru: "Хостинг", uz: "Xost", en: "Hosting" },
        link: "/help/hosting",
        children: [
          {
            title: {
              ru: "Как перенести сайт на хостинг AIRNET?",
              uz: "Saytni qanday qilib AIRNET xostiga ga otkazish",
              en: "How to transfer a website to AIRNET hosting?",
            },
            link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
          },
        ],
      },
      {
        title: { ru: "Почта", uz: "Pochta", en: "Email" },
        link: "/help/mail",
        children: [
          {
            title: { ru: "Почта для домена", uz: "Domen uchun pochta", en: "Email for Domain" },
            link: "/help/mail/pochta-dlya-domena",
          },
        ],
      },
      {
        title: { ru: "Технические вопросы", uz: "Texnik savollar", en: "Technical questions" },
        link: "/help/site",
        children: [
          {
            title: { ru: "Файл .htaccess", uz: ".htaccess Fayl", en: ".htaccess file" },
            link: "/help/site/file-htaccess",
          },
        ],
      },
      {
        title: { ru: "SSL-сертификаты", uz: "SSL-sertifakatlari", en: "SSL certificates" },
        link: "/help/ssl",
        children: [
          {
            title: {
              ru: "Зачем нужен SSL-сертификат",
              uz: "SSL-sertifikat nmaga kerak",
              en: "Why do I need an SSL certificate",
            },
            link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
          },
        ],
      },
      {
        title: { ru: "VDS", uz: "VDS", en: "VDS" },
        link: "/help/vds",
        children: [
          {
            title: {
              ru: "Как долго хранятся учётные записи VDS?",
              uz: "Qancha vaqt VDS yozuvlari saqlanib qoladi",
              en: "How long are VDS accounts kept?",
            },
            link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
          },
          {
            title: {
              ru: "Необходимые навыки для работы с VDS",
              uz: "VDS uchun kerakli qobuliyatlar",
              en: "Necessary skills to work with VDS",
            },
            link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
          },
          {
            title: {
              ru: "Перенос аккаунта на VDS",
              uz: "Akkauntni VDS ga otkazish",
              en: "Account transfer to VDS",
            },
            link: "/help/vds/perenos-akkaunta-na-vds",
          },
          {
            title: {
              ru: "Преимущества VDS и VPS-серверов",
              uz: "VDS va VPS servelraning ustunligi",
              en: "Advantages of VDS and VPS servers",
            },
            link: "/help/vds/preimushhestva-vds-i-vps-serverov",
          },
          {
            title: {
              ru: "Смена тарифного плана на VDS",
              uz: "VDS tarif rejasini ozgartirish",
              en: "Change tariff plan to VDS",
            },
            link: "/help/vds/smena-tarifnogo-plana-na-vds",
          },
          {
            title: {
              ru: "Восстановление root пароля от VDS",
              uz: "VDS root qulfini tiklash",
              en: "Recovery of root password from VDS",
            },
            link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
          },
          {
            title: {
              ru: "Подключиться к выделенному серверу",
              uz: "Ajratilgan serverga ulaning",
              en: "Connect to a dedicated server",
            },
            link: "/help/vds/connect-to-server",
          },
          {
            title: {
              ru: "Управлять сервером через KVM-консоль",
              uz: "KVM konsoli orqali serverni boshqarish",
              en: "Manage server via KVM console",
            },
            link: "/help/vds/manage-server-vnc",
          },
          {
            title: {
              ru: "Резервное копирование выделенных серверов",
              uz: "Maxsus server zahirasi",
              en: "Dedicated server backup",
            },
            link: "/help/vds/backups-server",
          },
          {
            title: {
              ru: "Развернуть виртуальную машину с Windows Server",
              uz: "Windows Server bilan virtual mashinani o'rnating",
              en: "Deploy a virtual machine with Windows Server",
            },
            link: "/help/vds/windows",
          },
        ],
      },
      {
        title: { ru: "Биллинг", uz: "Billing", en: "Billing" },
        link: "/help/billing",
        children: [
          {
            id: "billing",
            title: { ru: "Биллинг", uz: "Billing", en: "Billing" },
            children: [
              {
                title: {
                  ru: "Регистрация в панели управления",
                  uz: "Boshqaruv panelida ro'yxatdan o'tish",
                  en: "Registration in the control panel",
                },
                link: "/help/billing/account",
                children: [
                  {
                    title: {
                      ru: "Восстановление доступа к аккаунту",
                      uz: "Hisobga kirish huquqi tiklanmoqda",
                      en: "Restoring account access",
                    },
                    link: "/help/billing/account/restore",
                  },
                  {
                    title: {
                      ru: "Перенести услуги на другой аккаунт",
                      uz: "Xizmatlarni boshqa hisobga o'tkazish",
                      en: "Transfer services to another account",
                    },
                    link: "/help/billing/account/transfer",
                  },
                  {
                    title: { ru: "Удалить аккаунт", uz: "Hisobni o'chirish", en: "Delete account" },
                    link: "/help/billing/account/delete",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: { ru: "DNS-хостинг", uz: "DNS hosting", en: "DNS hosting" },
        link: "/help/dns",
        children: [
          {
            title: {
              ru: "Общая информация о DNS-хостинг",
              uz: "DNS hosting haqida umumiy ma'lumot",
              en: "General information about DNS hosting",
            },
            link: "/help/dns/about-dns",
          },
          {
            title: {
              ru: "Добавить и делегировать домен",
              uz: "Domen qo‘shish va vakolat berish",
              en: "Add and delegate a domain",
            },
            link: "/help/dns/add-domain",
          },
          {
            title: {
              ru: "Редактировать настройки домена",
              uz: "Domen sozlamalarini tahrirlash",
              en: "Edit domain settings",
            },
            link: "/help/dns/edit-domain",
          },
          {
            title: {
              ru: "Подключить сайт к домену",
              uz: "Saytni domenga ulang",
              en: "Connect site to domain",
            },
            link: "/help/dns/connect-domain",
          },
          {
            title: {
              ru: "Добавить запись",
              uz: "Eslatma qo'shing",
              en: "Add a note",
            },
            link: "/help/dns/add-record",
          },
        ],
      },
      {
        title: { ru: "Операционные системы", uz: "Operatsion tizimlar", en: "Operation systems" },
        children: [
          {
            title: {
              ru: "Как сменить операционную систему",
              uz: "Operatsion tizimni qanday o'zgartirish mumkin",
              en: "How to change operating system",
            },
            link: "/help/os/change",
          },
        ],
      },
    ],
  },
  { title: { ru: "Хостинг", uz: "Xost", en: "Hosting" }, link: "/hosting" },
  { title: { ru: "Лицензии", uz: "Litsenziya", en: "Licenses" }, link: "/license" },
  { title: { ru: "Интернет пакеты", uz: "Internet tezligi", en: "Internet packages" }, link: "/net" },
  { title: { ru: "Публичная оферта", uz: "Ommabop oferta", en: "Public offer" }, link: "/oferta" },
  { title: { ru: "Партнеры", uz: "Hamkorlar", en: "Partners" }, link: "/partners" },
  { title: { ru: "Оплата", uz: "To'lov", en: "Payment" }, link: "/payment" },
  {
    title: { ru: "Политика конфиденциальности", uz: "Maxfiylik siyosati", en: "Privacy Policy" },
    link: "/privacy-policy",
  },
  { title: { ru: "Реселлинг", uz: "Reselling", en: "Reselling" }, link: "/reseller" },
  {
    title: { ru: "Конструктор сайтов SitePad", uz: "SitePad sayti tuzilishi", en: "SitePad Website Builder" },
    link: "/sitepad",
  },
  { title: { ru: "Карта сайта", uz: "Sayt kartasi", en: "Map of site" }, link: "/sitemap" },
  {
    title: { ru: "Скорость интернета", uz: "Internet tezligi", en: "Internet speed" },
    link: "/speed",
  },
  { title: { ru: "SSL сертификаты", uz: "SSL sertifikati", en: "SSL certificates" }, link: "/ssl" },
  { title: { ru: "Активныe акции", uz: "Faol aktisiyalar", en: "Active shares" }, link: "/stock" },
  {
    title: { ru: "Служба поддержки", uz: "Qollab quvatlash markazi", en: "Support service" },
    link: "/support",
  },
  {
    title: { ru: "Оптимальные серверы", uz: "Optimal serverlar", en: "Optimal Servers" },
    link: "/vds",
  },
  { title: { ru: "SSL-сертификаты", uz: "SSL sertifikati", en: "SSL certificates" }, link: "/voip" },
];

const Linker = ({ link, i, language }) => {
  if (link?.children)
    return (
      <>
        <li key={i} className="mb-2">
          <Link href={checkLang(language) + link.link}>
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
      <Link href={checkLang(language) + link.link}>
        <a>{link.title[language]}</a>
      </Link>
    </li>
  );
};

const Sitemap = ({ language }) => {
  const langData = {
    headTitle: {
      ru: "Карта сайта",
      uz: "Sayt xaritasi",
      en: "Sitemap",
    },
  };
  return (
    <Container headTitle={langData.headTitle[language]}>
      {sitemap.map((item, i) => (
        <Linker key={i} link={item} language={language} />
      ))}
    </Container>
  );
};

export default Sitemap;
