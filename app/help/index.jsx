import HelpItem from "@/components/helpItem";
import SEO from "@/components/seo";
import Image from "next/image";
import st from "./help.module.scss";
import { LINKS } from "@/components/requirements";
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

const data = [
    {
      title: {
        ru: "Общие вопросы",
        uz: "Umumiy savollar",
        en: "General questions",
      },
      children: [
        {
          title: {
            ru: "Правила оказания услуг и ограничения",
            uz: "Xizmat ko'rsatish qoidalari va cheklovlar",
            en: "Rules for the provision of services and restrictions",
          },
          children: [
            {
              title: {
                ru: "Отчетные документы на почту или по ЭДО",
                uz: "Hujjatlarni pochta yoki EDI orqali hisobot qilish",
                en: "Reporting documents by mail or via EDI",
              },
              link: "#",
            },
            {
              title: {
                ru: "Поддерживаем электронный документооборот",
                uz: "Biz elektron hujjat aylanishini qo'llab-quvvatlaymiz",
                en: "We support electronic document management",
              },
              link: "#",
            },
            {
              title: {
                ru: "Договор оферты или индивидуальный договор",
                uz: "Taklif shartnomasi yoki individual kelishuv",
                en: "Offer agreement or individual agreement",
              },
              link: "#",
            },
            {
              title: {
                ru: "Безналичные платежи",
                uz: "Naqd pulsiz to'lovlar",
                en: "Non-cash payments",
              },
              link: "#",
            },
            {
              title: {
                ru: "Работа через биржу xarid.uzex.uz",
                uz: "xarid.uzex.uz birjasi orqali ishlash",
                en: "Work through the exchange xarid.uzex.uz",
              },
              link: "#",
            },
          ],
        },
      ],
    },
    {
      title: {
        ru: "SSL-сертификаты",
        uz: "SSL-sertifikatlari",
        en: "SSL certificates",
      },
      link: {
        ru: "/help/ssl",
        uz: "/uz/help/ssl",
        en: "/en/help/ssl",
      },
      children: [
        {
          id: "ssl",
          title: {
            ru: "Общая информация",
            uz: "Umumiy ma'lumotlar",
            en: "General information",
          },
          children: [
            {
              title: {
                ru: "Зачем нужен SSL-сертификат",
                uz: "Nma uchun SSL-sertifikati kerak?",
                en: "Why do I need an SSL certificate",
              },
              link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
            },
          ],
        },
      ],
    },
    {
      title: { ru: "Хостинг", uz: "Hosting", en: "Hosting" },
      link: "/help/hosting",
      children: [
        {
          id: "hosting",
          title: {
            ru: "Общая информация",
            uz: "Umumiy ma'lumotlar",
            en: "General information",
          },
          children: [
            {
              title: {
                ru: "Как перенести сайт на хостинг AIRNET?",
                uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
                en: "How to transfer a website to AIRNET hosting?",
              },
              link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
            },
            {
              title: {
                ru: "Установлен ли у вас mod_rewrite?",
                uz: "Sizda mod_rewrite o'rnatilganmi?",
                en: "Do you have mod_rewrite installed?",
              },
              link: "/help/hosting/ustanovlen-li-u-vas-mod-rewrite",
            },
            {
              title: {
                ru: "У вас установлен модуль ionCube?",
                uz: "Sizda ionCube moduli o'rnatilganmi?",
                en: "Do you have ionCube module installed?",
              },
              link: "/help/hosting/u-vas-ustanovlen-modul-ioncube",
            },
            {
              title: {
                ru: "Есть ли у вас бэкап (резервное копирование) данных, и как часто он производится?",
                uz: "Ma'lumotlaringizning zaxira nusxasi bormi va u qanchalik tez-tez amalga oshiriladi?",
                en: "Do you have a backup of your data and how often is it done?",
              },
              link: "/help/hosting/est-li-u-vas-behkap-rezervnoe-kopirovanie-dannyh-i-kak-chasto-on-proizvoditsya",
            },
            {
              title: {
                ru: "У вас есть поддержка mod_pagespeed?",
                uz: "Sizda mod_pagespeed yordami bormi?",
                en: "Do you have mod_pagespeed support?",
              },
              link: "/help/hosting/u-vas-est-podderzhka-mod-pagespeed",
            },
            {
              title: {
                ru: "Вы можете помочь перенести сайт со старого хостинга к вам?",
                uz: "Veb-saytimni eski xostingimdan sizga o'tkazishimga yordam bera olasizmi?",
                en: "Can you help me transfer my website from my old hosting to you?",
              },
              link: "/help/hosting/vy-mozhete-pomoch-perenesti-sajt-so-starogo-hostinga-k-vam",
            },
            {
              title: {
                ru: "Как разместить несколько сайтов на одном аккаунте?",
                uz: "Bir hisobda bir nechta saytlarni qanday joylashtirish mumkin?",
                en: "How to host multiple sites on one account?",
              },
              link: "/help/hosting/kak-razmestit-neskolko-sajtov-na-odnom-akkaunte",
            },
            {
              title: {
                ru: "Как считается количество сайтов на сервисе «Хостинг»?",
                uz: "Xosting xizmatidagi saytlar soni qanday hisoblanadi?",
                en: "How is the number of sites on the Hosting service calculated?",
              },
              link: "/help/hosting/kak-schitaetsya-kolichestvo-sajtov-na-servise-hosting",
            },
            {
              title: {
                ru: "Есть ли у вас SSH (Shell)?",
                uz: "Sizda SSH (Shell) bormi?",
                en: "Do you have SSH (Shell)?",
              },
              link: "/help/hosting/est-li-u-vas-ssh-shell",
            },
            {
              title: {
                ru: "Есть ли у вас ограничения по использованию трафика?",
                uz: "Sizda trafikdan foydalanishda cheklovlar bormi?",
                en: "Do you have any restrictions on traffic usage?",
              },
              link: "/help/hosting/est-li-u-vas-ogranicheniya-po-ispolzovaniyu-trafika",
            },
            {
              title: {
                ru: "Предоставляете ли вы выделенный IP для аккаунта?",
                uz: "Hisob uchun maxsus IP taqdim qilasizmi?",
                en: "Do you provide dedicated IP for account?",
              },
              link: "/help/hosting/predostavlyaete-li-vy-vydelennyj-ip-dlya-akkaunta",
            },
            {
              title: {
                ru: "Есть ли ограничение на количество соединений/подключений по FTP и HTTP?",
                uz: "FTP va HTTP orqali ulanishlar soniga cheklov bormi?",
                en: "Is there a limit on the number of connections via FTP and HTTP?",
              },
              link: "/help/hosting/est-li-ogranichenie-na-kolichestvo-soedinenij-podklyuchenij-po-ftp-i-http",
            },
            {
              title: {
                ru: "Видео: «Как ускорить сайт с помощью HTTP/2?»",
                uz: "Video: «HTTP/2 yordamida veb-saytingizni qanday tezlashtirish mumkin?»",
                en: "Video: «How to Speed ​​Up Your Website with HTTP/2?»",
              },
              link: "/help/hosting/video-kak-uskorit-sajt-s-pomoshchyu-http-2",
            },
            {
              title: {
                ru: "Как создать поддомен?",
                uz: "Subdomenni qanday yaratish mumkin?",
                en: "How to create a subdomain?",
              },
              link: "/help/hosting/kak-sozdat-poddomen",
            },
            {
              title: {
                ru: "Есть ли доступ к log-файлам? Где мне найти error_log и access_log?",
                uz: "Jurnal fayllariga kirish imkoni bormi? error_log va access_logni qayerdan topsam bo'ladi?",
                en: "Is there access to log files? Where can I find error_log and access_log?",
              },
              link: "/help/hosting/est-li-dostup-k-log-fajlam-gde-mne-najti-error-log-i-access-log",
            },
            {
              title: {
                ru: "Какие у вас тарифы?",
                uz: "Narxlaringiz qanday?",
                en: "What are your rates?",
              },
              link: "/help/hosting/kakie-u-vas-tarify",
            },
          ],
        },
      ],
    },
    {
      title: { ru: "VDS", uz: "VDS", en: "VDS" },
      link: "/help/vds",
      children: [
        {
          id: "vds",
          title: {
            ru: "Общая информация",
            uz: "Umumiy ma'lumotlar",
            en: "General information",
          },
          children: [
            {
              title: {
                ru: "Необходимые навыки для работы с VDS",
                uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
                en: "Necessary skills to work with VDS",
              },
              link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
            },
            {
              title: {
                ru: "Смена тарифного плана на VDS",
                uz: "Tarif rejasini VDS ga o'zgartirish",
                en: "Change tariff plan to VDS",
              },
              link: "/help/vds/smena-tarifnogo-plana-na-vds",
            },
            {
              title: {
                ru: "Как долго хранятся учётные записи VDS?",
                uz: "VDS hisoblari qancha vaqt saqlanadi?",
                en: "How long are VDS accounts kept?",
              },
              link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
            },
            {
              title: {
                ru: "Восстановление root пароля от VDS",
                uz: "VDS-dan ildiz parolini tiklash",
                en: "Recovery of root password from VDS",
              },
              link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
            },
            {
              title: {
                ru: "Перенос аккаунта на VDS",
                uz: "Akkauntni VDS ga otqazish",
                en: "Account transfer to VDS",
              },
              link: "/help/vds/perenos-akkaunta-na-vds",
            },
            {
              title: {
                ru: "Преимущества VDS и VPS-серверов",
                uz: "VDS va VPS serverlarinign ustunlikari",
                en: "Advantages of VDS and VPS servers",
              },
              link: "/help/vds/preimushhestva-vds-i-vps-serverov",
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
                ru: "Управлять сервером через VNC-консоль",
                uz: "VNC konsoli orqali serverni boshqarish",
                en: "Manage server via VNC console",
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
            {
              title: {
                ru: "Есть ли лимит на число файлов?",
                uz: "Fayllar sonida cheklov bormi?",
                en: "Is there a limit on the number of files?",
              },
              link: "/help/vds/est-li-limit-na-chislo-fajlov",
            },
            {
              title: {
                ru: "Производится ли резервное копирование?",
                uz: "Zaxira bormi?",
                en: "Is there a backup?",
              },
              link: "/help/vds/proizvoditsya-li-rezervnoe-kopirovanie",
            },
            {
              title: {
                ru: "Как использовать 25 порт для отправки почты?",
                uz: "Pochta yuborish uchun 25-portdan qanday foydalanish kerak?",
                en: "How to use port 25 to send mail?",
              },
              link: "/help/vds/kak-ispolzovat-25-port-dlya-otpravki-pochty",
            },
            {
              title: {
                ru: "Как установить ОС или переустановить имеющуюся?",
                uz: "OSni qanday o'rnatish yoki mavjudini qayta o'rnatish kerak?",
                en: "How to install OS or reinstall existing one?",
              },
              link: "/help/vds/kak-ustanovit-os-ili-pereustanovit-imeyushchuyusya",
            },
            {
              title: {
                ru: "Как удалить сервер?",
                uz: "Serverni qanday o'chirish mumkin?",
                en: "How to delete a server?",
              },
              link: "/help/vds/kak-udalit-server",
            },
            {
              title: {
                ru: "Возможно ли увеличить объем предоставляемых ресурсов?",
                uz: "Berilgan resurslar hajmini oshirish mumkinmi?",
                en: "Is it possible to increase the volume of resources provided?",
              },
              link: "/help/vds/vozmozhno-li-uvelichit-obem-predostavlyaemyh-resursov",
            },
          ],
        },
      ],
    },
    {
      title: { ru: "Домены", uz: "Domenlar", en: "Domains" },
      link: "/help/domain",
      children: [
        {
          id: "domain",
          title: {
            ru: "Регистрация/продление доменов",
            uz: "Domenlarni ro'yxatdan o'tkazish / yangilash",
            en: "Registration/Renewal of Domains",
          },
          children: [
            {
              title: {
                ru: "Наши DNS-записи",
                uz: "Bizning DNS-yozuvlarimiz",
                en: "Our DNS records",
              },
              link: "/help/domain/dns",
            },
            {
              title: {
                ru: "Как зарегистрировать домен?",
                uz: "Domenlarni  qanday royxatdan otqazish ",
                en: "How to register a domain?",
              },
              link: "/help/domain/kak-zaregistrirovat-domen",
            },
            {
              title: {
                ru: "Рекомендации по выбору доменного имени",
                uz: "Domen nomlarini tanlshdagi maslaxatlar",
                en: "Recommendations for choosing a domain name",
              },
              link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
            },
            {
              title: {
                ru: "Нужно ли вводить данные паспорта для регистрации?",
                uz: "Ro'yxatdan otish uchun pasport malumotlari kerakmi?",
                en: "Do I need to enter passport data for registration?",
              },
              link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
            },
            {
              title: {
                ru: "Сколько ждать обновления DNS?",
                uz: "DNS-ni yangilash qancha vaqt oladi?",
                en: "How long does it take to update DNS?",
              },
              link: "/help/domain/skolko-zhdat-obnovleniya-dns",
            },
            {
              title: {
                ru: "Можно ли сделать перерегистрацию домена в AIRNET?",
                uz: "AIRNET da domenni qayta ro'yxatdan o'tkazish mumkinmi?",
                en: "Is it possible to re-register a domain in AIRNET?",
              },
              link: "/help/domain/mozhno-li-sdelat-pereregistraciyu-domena-v-airnet",
            },
            {
              title: {
                ru: "Домен занят. Как я могу забронировать и с кем могу связаться?",
                uz: "Domen olinadi. Qanday qilib bron qilishim mumkin va kimga murojaat qilishim mumkin?",
                en: "The domain is taken. How can I reserve it and who can I contact?",
              },
              link: "/help/domain/domen-zanyat-kak-ya-mogu-zabronirovat-i-s-kem-mogu-svyazatsya",
            },
            {
              title: {
                ru: "Можно ли зарегистрировать домен в AIRNET, если нет 18 лет?",
                uz: "18 yoshdan kichik bo'lsangiz, AIRNET da domenni ro'yxatdan o'tkazish mumkinmi?",
                en: "Is it possible to register a domain in AIRNET if you are under 18 years old?",
              },
              link: "/help/domain/mozhno-li-zaregistrirovat-domen-v-airnet-esli-net-18-let",
            },
            {
              title: {
                ru: "Можно ли управлять A-записями без активных услуг?",
                uz: "A-yozuvlarni faol xizmatlarsiz boshqarish mumkinmi?",
                en: "Is it possible to manage A-records without active services?",
              },
              link: "/help/domain/mozhno-li-upravlyat-a-zapisyami-bez-aktivnyh-uslug",
            },
            {
              title: {
                ru: "Как посмотреть, кому принадлежит домен?",
                uz: "Domen kimga tegishli ekanligini qanday ko'rish mumkin?",
                en: "How to see who owns a domain?",
              },
              link: "/help/domain/kak-posmotret-komu-prinadlezhit-domen",
            },
            {
              title: {
                ru: "Как удалить домен?",
                uz: "Domenni qanday o'chirish mumkin?",
                en: "How to delete a domain?",
              },
              link: "/help/domain/kak-udalit-domen",
            },
            {
              title: {
                ru: "Можно ли зарегистрировать домен без приобретения услуг хостинга?",
                uz: "Xosting xizmatlarini sotib olmasdan domenni ro'yxatdan o'tkazish mumkinmi?",
                en: "Is it possible to register a domain without purchasing hosting services?",
              },
              link: "/help/domain/mozhno-li-zaregistrirovat-domen-bez-priobreteniya-uslug-hostinga",
            },
          ],
        },
      ],
    },
    {
      id: "billing",
      title: { ru: "Биллинг", uz: "Billing", en: "Billing" },
      link: "/help/billing",
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
              title: {
                ru: "Удалить аккаунт",
                uz: "Hisobni o'chirish",
                en: "Delete account",
              },
              link: "/help/billing/account/delete",
            },
          ],
        },
      ],
    },
    {
      id: "dns",
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
      title: {
        ru: "Технические вопросы",
        uz: "Texnik savollar",
        en: "Technical questions",
      },
      link: "/help/site",
      children: [
        {
          id: "site",
          title: { ru: "Сайт", uz: "Sayt", en: "Website" },
          children: [
            {
              title: {
                ru: "Файл .htaccess",
                uz: "Fayl .htaccess",
                en: ".htaccess file",
              },
              link: "/help/site/file-htaccess",
            },
          ],
        },
        {
          id: "mail",
          title: { ru: "Почта", uz: "Pochta", en: "Mail" },
          link: "/help/mail",
          children: [
            {
              title: {
                ru: "Почта для домена",
                uz: "Domen uchun pochta",
                en: "Mail for domain",
              },
              link: "/help/mail/pochta-dlya-domena",
            },
            {
              title: {
                ru: "Настроить программу по протоколу IMAP",
                uz: "IMAP protokoli yordamida dasturni sozlang",
                en: "Configure the program using the IMAP protocol",
              },
              link: "/help/mail/mail-clients",
            },
          ],
        },
        {
          id: "cms",
          title: { ru: "CMS", uz: "CMS", en: "CMS" },
          link: "/help/cms",
          children: [
            {
              title: {
                ru: "Что такое CMS?",
                uz: "CMS bu nma?",
                en: "What is CMS?",
              },
              link: "/help/cms/chto-takoe-cms",
            },
          ],
        },
        {
          id: "ftp",
          title: { ru: "FTP", uz: "FTP", en: "FTP" },
          link: "/help/ftp",
          children: [
            {
              title: {
                ru: "Что такое FTP?",
                uz: "FTP nma?",
                en: "What is FTP?",
              },
              link: "/help/ftp/chto-takoe-ftp",
            },
          ],
        },
      ],
    },
    {
      id: "os",
      title: {
        ru: "Операционные системы",
        uz: "Operatsion tizimlar",
        en: "Operation systems",
      },
      link: "/help/os",
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
    {
      title: { ru: "Документы", uz: "Hujjatlar", en: "Documentation" },
      link: "/help/documents",
      children: [
        {
          id: "services",
          title: {
            ru: "Лицензия на предоставление услуг хостинга",
            uz: "Xosting litsenziyasi",
            en: "License to provide hosting services",
          },
          link: LINKS.LICENSE,
        },
      ],
    },
  ],
  mainData = {
    headTitle: { ru: "База знаний", uz: "Ilmlar bazasi", en: "Knowledge base" },
    url: "/help",
    content: data,
    faq: [
      {
        title: {
          ru: "Как пополнить баланс в биллинг системе?",
          uz: "Billeng sistemasida hisobni to'ldirish",
          en: "How to replenish the balance in the billing system?",
        },
        description: {
          ru: (
            <>
              <p className="mb-3">
                Чтобы пополнить баланс зайдите в биллинг систему, кликните на
                ваш баланс (правая графа сверху)
              </p>
              <Image
                src="/help/balance.jpg"
                width={1160}
                height={511}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          uz: (
            <>
              <p className="mb-3">
                Balansni to'ldirish uchun billing tizimiga o'ting, o'zingizning
                tugmachangizni bosing balans (yuqori o'ng ustun)
              </p>
              <Image
                src="/help/balance.jpg"
                width={1160}
                height={511}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          en: (
            <>
              <p className="mb-3">
                To top up your balance, go to the billing system, click on your
                balance (top right column)
              </p>
              <Image
                src="/help/balance.jpg"
                width={1160}
                height={511}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
        },
      },
      {
        title: {
          ru: "Как изменить личные данные в биллинг системе?",
          uz: "To'lov tizimidagi shaxsiy ma'lumotlarni qanday o'zgartirish mumkin?",
          en: "How to change personal data in the billing system?",
        },
        description: {
          ru: (
            <>
              <p className="mb-3">
                Как изменить личные данные в биллинг системе?
              </p>
              <Image
                src="/help/profile.jpg"
                width={1160}
                height={422}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          uz: (
            <>
              <p className="mb-3">
                Billing tizimidagi shaxsiy ma'lumotlarni qanday o'zgartirish
                mumkin?
              </p>
              <Image
                src="/help/profile.jpg"
                width={1160}
                height={422}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          en: (
            <>
              <p className="mb-3">
                How to change personal data in the billing system?
              </p>
              <Image
                src="/help/profile.jpg"
                width={1160}
                height={422}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
        },
      },
      {
        title: {
          ru: "В настройках можно изменить язык панели.",
          uz: "Sozlamalarda siz panel tilini o'zgartirishingiz mumkin.",
          en: "You can change the panel language in the settings.",
        },
        description: {
          ru: (
            <>
              <p className="mb-3">Для выбора вам предоставляется 6 языков</p>
              <Image
                src="/help/lang.jpg"
                width={1160}
                height={422}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          uz: (
            <>
              <p className="mb-3">Sizda 6 ta til mavjud</p>
              <Image
                src="/help/lang.jpg"
                width={1160}
                height={422}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          en: (
            <>
              <p className="mb-3">You have 6 languages to choose from</p>
              <Image
                src="/help/lang.jpg"
                width={1160}
                height={422}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
        },
      },
      {
        title: {
          ru: "Где я могу увидеть SSL- сертификат?",
          uz: "SSL- sertifikatini qayerda korishim mumkin",
          en: "Where can I see the SSL certificate?",
        },
        description: {
          ru: (
            <>
              <p className="mb-3">
                SSL сертификат можно увидеть в графе «товары»
              </p>
              <Image
                src="/help/ssl.jpg"
                width={1160}
                height={592}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          uz: (
            <>
              <p className="mb-3">
                SSL sertifikatini "mahsulotlar" ustunida ko'rish mumkin
              </p>
              <Image
                src="/help/ssl.jpg"
                width={1160}
                height={592}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          en: (
            <>
              <p className="mb-3">
                SSL certificate can be seen in the "goods" column
              </p>
              <Image
                src="/help/ssl.jpg"
                width={1160}
                height={592}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
        },
      },
      {
        title: {
          ru: "Как ознакомится с тарифными планами VDS/VPS",
          uz: "VDS/VPS tarif rejalari bilan qanday tanishish mumkin",
          en: "How to get acquainted with the tariff plans VDS / VPS",
        },
        description: {
          ru: (
            <>
              <p className="mb-3">
                C тарифными планами можно также ознакомится и приобрести в
                биллинг системе.
              </p>
              <Image
                src="/help/tarif.jpg"
                width={1160}
                height={563}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          uz: (
            <>
              <p className="mb-3">
                Tarif rejalarini ham ko'rish va sotib olish mumkin hisob-kitob
                tizimi.
              </p>
              <Image
                src="/help/tarif.jpg"
                width={1160}
                height={563}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
          en: (
            <>
              <p className="mb-3">
                You can also view and purchase tariff plans in the billing
                system.
              </p>
              <Image
                src="/help/tarif.jpg"
                width={1160}
                height={563}
                blurDataURL
                placeholder="blur"
              />
            </>
          ),
        },
      },
    ],
  };

export const breadCrumbsHelp = [
  {
    name: mainData.headTitle,
    link: {
      ru: "/help",
      uz: "/uz/help",
      en: "/en/help",
    },
  },
];

export default function Help({ language }) {
  const langData = {
    seoT: {
      ru: "База знаний | Airnet",
      uz: "Airnet | Ilimlari bazasi",
      en: "Knowledge Base | Airnet",
    },
    descT: {
      ru: "Ответы на часто задаваемые вопросы, вы можете найти ответы на интересующие вопросы по хостингу, домену и VDS серверам от AIRNET",
      uz: "Tez-tez beriladigan savollarga javoblar, hosting, domen va VDS serverlari haqidagi savollaringizga AIRNET’dan javob topishingiz mumkin.",
      en: "Answers to frequently asked questions, you can find answers to your questions about hosting, domain and VDS servers from AIRNET",
    },
  };

  return (
    <>
      <SEO title={langData.seoT[language]} desc={langData.descT[language]} />

      <div className={st.help}>
        <BreadCrumbs data={breadCrumbsHelp} language={language} />
        <PageBreadcrumb links={breadCrumbsHelp} language={language} />

        <HelpItem data={mainData} language={language} />
      </div>
    </>
  );
}
