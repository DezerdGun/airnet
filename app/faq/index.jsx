import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import Container from "../../components/container/index.jsx";
import FAQ from "../../components/faq";
import Partners from "../../components/partners";
import { LINKS } from "../../components/requirements";
import SEO from "../../components/seo";

export default function FAQPage({ language }) {
  const langData = {
    seoT: {
      ru: "Часто задаваемые вопросы | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Odatdagi savollar| Uzbekiston, Toshkent dagi TAS-IX hosti",
      en: "Frequently Asked Questions | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descT: {
      ru: "Информация и документы AIRNET.uz",
      uz: "AIRNET.uz haqida hujjat va ma'lumotlar",
      en: "Information and documents AIRNET.uz",
    },
    title: {
      ru: "Информация",
      uz: "Ma'lumot",
      en: "Information",
    },
  };

  const faq = [
    {
      title: { ru: "Документы", uz: "Hujjatlar", en: "Documentation" },
      description: {
        ru: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/kak-zaklyuchit-dogovor"}>
                <a>Как заключить договор?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.LICENSE}>
                <a>Лицензия на предоставление услуг хостинга</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.HELP}>
                <a>Смотреть все &quot;Документы&quot;</a>
              </Link>
            </li>
          </ul>
        ),
        uz: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/kak-zaklyuchit-dogovor"}>
                <a>Qanday qilib shartnoma tuzish</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.LICENSE}>
                <a>Hosting hizmati uchun litsenziya</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.HELP}>
                <a> Barcha &quot;Hujjatlarni &quot;korish</a>
              </Link>
            </li>
          </ul>
        ),
        en: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/kak-zaklyuchit-dogovor"}>
                <a>How to conclude an agreement?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.LICENSE}>
                <a>License to provide hosting services</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.HELP}>
                <a>View all "Documents"</a>
              </Link>
            </li>
          </ul>
        ),
      },
    },
    {
      title: { ru: "Хостинг и Домены", uz: "Host va domenlar", en: "Hosting and Domains" },
      description: {
        ru: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/chto-takoe-domen"}>
                <a>Что такое домен?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-proverit-domen-na-zanyatost"}>
                <a>Как проверить домен на занятость?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/pravilo-registracii-domena-v-zone-uz"}>
                <a>Правила регистрации доменных имен в зоне .UZ?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-zaregistrirovat-domen"}>
                <a>Как зарегистрировать домен?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/oshibochno-zaregistriroval-domen"}>
                <a>Ошибочно зарегистрировал домен, можно ли отменить?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/ya-zaregistriroval-domen-chto-dalshe"}>
                <a>Я зарегистрировал домен, что дальше?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-perenesti-sajt-na-xosting-airnet"}>
                <a>Как перенести сайт на хостинг AIRNET?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-ustanovit-wordpress-na-xosting"}>
                <a>Как установить WordPress на хостинг?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-poluchit-testovyj-period"}>
                <a>Как получить тестовый период?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.HELP}>
                <a>Смотреть все &quot;Вопрос-Ответ&quot;</a>
              </Link>
            </li>
          </ul>
        ),
        uz: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/chto-takoe-domen"}>
                <a>Domen nma?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-proverit-domen-na-zanyatost"}>
                <a>Jarayon vaxtida domenni tekshirish</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/pravilo-registracii-domena-v-zone-uz"}>
                <a>UZ.da domen nomi bilan ro'yxatdan o'tkazish</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-zaregistrirovat-domen"}>
                <a>Domenni qanday ro'yxatdan o'tkazish</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/oshibochno-zaregistriroval-domen"}>
                <a>Domen hatolik bn ro'yxatdan o'tkazildi, inkor qilish mavjudmi?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/ya-zaregistriroval-domen-chto-dalshe"}>
                <a>Men domenni ro'yhatdan o'tkazdim, endichi?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-perenesti-sajt-na-xosting-airnet"}>
                <a>Saytni qanday qilib AIRNET hostiga o'tkazish mumkin?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-ustanovit-wordpress-na-xosting"}>
                <a>Qanday qilib WordPressni hostga o'rnatish mumkin</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-poluchit-testovyj-period"}>
                <a>Qanday qilib sinov muddatiga o'tish mumkin?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.HELP}>
                <a>Barcha &quot;Savol-Javoblarni&quot; ko'rish</a>
              </Link>
            </li>
          </ul>
        ),
        en: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/chto-takoe-domain"}>
                <a>What is a domain?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-proverit-domen-na-zanyatost"}>
                <a>How do I check if a domain is busy?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/pravilo-registracii-domain-v-zone-uz"}>
                <a>Rules for registering domain names in the .UZ zone?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-zaregistrirovat-domen"}>
                <a>How do I register a domain?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/oshibochno-zaregistriroval-domen"}>
                <a>Mistakenly registered a domain, can I cancel?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/ya-zaregistriroval-domen-chto-dalshe"}>
                <a>I've registered a domain, what's next?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-perenesti-sajt-na-hosting-airnet"}>
                <a>How do I migrate my website to AIRNET hosting?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-ustanovit-wordpress-na-hosting"}>
                <a>How to install WordPress on hosting?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + "/faq/kak-poluchit-testovyj-period"}>
                <a>How do I get a trial period?</a>
              </Link>
            </li>
            <li>
              <Link href={checkLang(language) + LINKS.HELP}>
                <a>View all Q&A</a>
              </Link>
            </li>
          </ul>
        ),
      },
    },
    {
      title: { ru: "База знаний", uz: "Ilm bazasi", en: "Knowledge base" },
      description: {
        ru: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov"}>
                <a>Как новичку выбрать хостинг-провайдера: 5 простых советов</a>
              </Link>
            </li>
          </ul>
        ),
        uz: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov"}>
                <a>Yangi boshlanuvchilar uchun hosting provayderini qanday tanlash mumkin: 5 oddiy maslahat</a>
              </Link>
            </li>
          </ul>
        ),
        en: (
          <ul>
            <li>
              <Link href={checkLang(language) + "/faq/kak-novichku-vybrat-hosting-provajdera-5-prostyx-sovetov"}>
                <a>How to choose a hosting provider for a beginner: 5 simple tips</a>
              </Link>
            </li>
          </ul>
        ),
      },
    },
    {
      title: { ru: "Способ оплаты", uz: "To'lov usullari", en: "Payment method" },
      description: {
        ru: (
          <ul>
            <li>PAYME. Комиссия: 0%</li>
            <li>UPAY. Комиссия: 0%</li>
            <li>Paynet. Комиссия: 0%</li>
            <li>Webmoney. Комиссия: 0%</li>
            <li>Банковское перечисление. Комиссия банка</li>
          </ul>
        ),
        uz: (
          <ul>
            <li>PAYME. Kamissiya: 0%</li>
            <li>UPAY. Kamissiya: 0%</li>
            <li>Paynet. Kamissiya: 0%</li>
            <li>Webmoney. Kamissiya: 0%</li>
            <li>Bank o'tkazmasi. Kamissiya bank</li>
          </ul>
        ),
        en: (
          <ul>
            <li>PAYME. Commission: 0%</li>
            <li>UPAY. Commission: 0%</li>
            <li>Paynet. Commission: 0%</li>
            <li>webmoney. Commission: 0%</li>
            <li>Bank transfer. Bank fee</li>
          </ul>
        ),
      },
    },
  ];
  return (
    <>
      <SEO title={langData.seoT[language]} desc={langData.descT[language]} />
      <Container
        style={{ background: "url('/servers-2.jpg') no-repeat" }}
        title={langData.title[language]}
        className="my-0"
      ></Container>
      <FAQ faq={faq} language={language} />
      <Partners />
    </>
  );
}
