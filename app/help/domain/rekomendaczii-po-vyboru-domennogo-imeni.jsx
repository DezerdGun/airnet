import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsDomain } from "@/app/help/domain";

const mainData = {
  headTitle: {
    ru: "Рекомендации по выбору доменного имени",
    uz: "Domen nomini tanlash bo'yicha tavsiyalar",
    en: "Recommendations for choosing a domain name",
  },
  url: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
  related: [
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
        ru: "Нужно ли вводить данные паспорта для регистрации?",
        uz: "Ro'yxatdan otish uchun pasport malumotlari kerakmi?",
        en: "Do I need to enter passport data for registration?",
      },
      link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
    },
  ],
  content: {
    ru: (
      <ul className="list">
        <li>Выбор доменной зоны помогает правильно направить клиента.</li>
        <li>
          При создании личной страницы рекомендуется выбрать доменное имя,
          связанное с именем человека, которому будет посвящён сайт.
        </li>
        <li>
          В случае создания сайта для организации доменное имя может содержать
          название организации, или сферу компании. Помимо этого эффективным
          будет применение ключевых слов и терминов, характерных для бизнеса.
        </li>
        <li>
          При выборе доменного имени, необходимо учитывать, что короткое
          доменное имя запоминается намного легче, а сайт с запоминающимся
          именем будет легче найти в поисковых системах.
        </li>
        <li>
          В случае транслитерации имени, если возникнет спорный момент в
          написании, можно зарегистрировать нескольких доменов и настроить их
          так, чтобы для всех имён открывался один сайт.
        </li>
        <li>
          Рекомендуется регистрировать доменные имена с наименьшим количеством
          символов, избегая при этом большого количества дефисов.
        </li>
      </ul>
    ),
    uz: (
      <ul className="list">
        <li>
          Domen zonasini tanlash mijozni to'g'ri yo'naltirishga yordam beradi.
        </li>
        <li>
          Shaxsiy sahifani yaratishda domen nomini tanlash tavsiya etiladi, sayt
          bag'ishlangan shaxsning nomi bilan bog'liq.
        </li>
        <li>
          Tashkilot uchun sayt yaratishda domen nomi o'z ichiga olishi mumkin
          tashkilot nomi yoki kompaniya doirasi. Bunga qo'shimcha ravishda,
          samarali biznesga xos kalit so'zlar va atamalardan foydalanish
          bo'ladi.
        </li>
        <li>
          Domen nomini tanlayotganda, qisqa ekanligini yodda tuting domen nomini
          eslab qolish ancha oson va esda qolarli veb-sayt nomi qidiruv
          tizimlarida topish osonroq bo'ladi.
        </li>
        <li>
          Ism transliteratsiya qilingan taqdirda, agar nizo kelib chiqsa yozish,
          siz bir nechta domenlarni ro'yxatdan o'tkazishingiz va ularni
          sozlashingiz mumkin Shunday qilib, bitta sayt barcha nomlar uchun
          ochiladi.
        </li>
        <li>
          Eng kam sonli domen nomlarini ro'yxatdan o'tkazish tavsiya etiladi
          belgilar, shu bilan birga ko'plab defislardan qoching.
        </li>
      </ul>
    ),
    en: (
      <ul className="list">
        <li>
          The choice of a domain zone helps to properly direct the client.
        </li>
        <li>
          When creating a personal page, it is recommended to choose a domain
          name, associated with the name of the person to whom the site will be
          dedicated.
        </li>
        <li>
          In the case of creating a site for an organization, the domain name
          may contain the name of the organization, or the scope of the company.
          In addition to this, effective there will be the use of keywords and
          terms specific to the business.
        </li>
        <li>
          When choosing a domain name, keep in mind that a short a domain name
          is much easier to remember, and a website with a memorable name will
          be easier to find in search engines.
        </li>
        <li>
          In case of transliteration of the name, if a dispute arises in
          writing, you can register multiple domains and set them up so that one
          site opens for all names.
        </li>
        <li>
          It is recommended to register domain names with the least number of
          characters, while avoiding a lot of hyphens.
        </li>
      </ul>
    ),
  },
};

export default function HelpBlog({ language }) {
  const breadCrumbs = [
    ...breadCrumbsDomain,
    {
      name: mainData.headTitle,
      link: mainData.url,
    },
  ];

  return (
    <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />
  );
}
