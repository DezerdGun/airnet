import HelpItem from "@/components/helpItem";

const data = {
    id: "hosting-and-domains",
    title: { ru: "Хостинг и Домены", uz: "Host va domenlar", en: "Hosting and Domains" },
    children: [
      {
        id: "what",
        title: {
          ru: "Что такое домен?",
          uz: "Domen aslida nma?",
          en: "What is a domain?",
        },
        link: "/faq/chto-takoe-domen",
      },
      {
        id: "busy",
        title: {
          ru: "Как проверить домен на занятость?",
          uz: "Darsda qanday qilib domenni tekshirish",
          en: "How do I check if a domain is busy?",
        },
        link: "/faq/kak-proverit-domen-na-zanyatost",
      },
      {
        id: "zone",
        title: {
          ru: "Правила регистрации доменных имен в зоне .UZ?",
          uz: ".UZ zonasida domen nomlarini ro'yxatdan o'tkazish qoidalari?",
          en: "Rules for registering domain names in the .UZ zone?",
        },
        link: "/faq/pravilo-registracii-domena-v-zone-uz",
      },
      {
        id: "domain",
        title: {
          ru: "Как зарегистрировать домен?",
          uz: "Domenni qanday ro'yxatdan o'tkazish kerak?",
          en: "How do I register a domain?",
        },
        link: "/faq/kak-zaregistrirovat-domen",
      },
      {
        id: "cancel",
        title: {
          ru: "Ошибочно зарегистрировал домен, можно ли отменить?",
          uz: "Men noto'g'ri domenni ro'yxatdan o'tkazdim, uni bekor qila olamanmi?",
          en: "Mistakenly registered a domain, can I cancel?",
        },
        link: "/faq/oshibochno-zaregistriroval-domen",
      },
      {
        id: "next",
        title: {
          ru: "Я зарегистрировал домен, что дальше?",
          uz: "Men domenni ro'yxatdan o'tkazdim, keyin nima bo'ladi?",
          en: "I've registered a domain, what's next?",
        },
        link: "/faq/ya-zaregistriroval-domen-chto-dalshe",
      },
      {
        id: "website",
        title: {
          ru: "Как перенести сайт на хостинг AIRNET?",
          uz: "Veb-saytni AIRNET xostingiga qanday o'tkazish mumkin?",
          en: "How do I migrate my website to AIRNET hosting?",
        },
        link: "/faq/kak-perenesti-sajt-na-xosting-airnet",
      },
      {
        id: "hosting",
        title: {
          ru: "Как установить WordPress на хостинг?",
          uz: "WordPressni hostingga qanday o'rnatish mumkin?",
          en: "How to install WordPress on hosting?",
        },
        link: "/faq/kak-ustanovit-wordpress-na-xosting",
      },
      {
        id: "period",
        title: {
          ru: "Как получить тестовый период?",
          uz: "Sinov muddatini qanday olish mumkin?",
          en: "How do I get a trial period?",
        },
        link: "/faq/kak-poluchit-testovyj-period",
      },
    ],
  },
  mainData = {
    headTitle: data.title,
    content: data,
  };

export default function HelpInner({ language }) {
  return <HelpItem data={mainData} language={language} />;
}
