import HelpItem from "@/components/helpItem";
import { breadCrumbsHelp } from "@/app/help";
import HelpItemNoAsideLinks from "@/components/helpItem/HelpItemNoAsideLinks";

const data = {
    id: "hosting",
    title: { ru: "Хостинг", uz: "Hosting", en: "Hosting" },
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
  mainData = {
    headTitle: data.title,
    url: "/help/hosting",
    content: data,
  };

  export const breadCrumbsHosting = [
    ...breadCrumbsHelp,
    {
      name: data.title,
      link: {
        ru: "/help/hosting",
        uz: "/uz/help/hosting",
        en: "/en/help/hosting",
      },
    },
  ];

export default function HelpInner({ language }) {
  return <HelpItemNoAsideLinks 
  data={mainData} 
  language={language}
  breadCrumbs={breadCrumbsHosting} 
  />;
}
