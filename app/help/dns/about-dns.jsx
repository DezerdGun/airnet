import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Общая информация о DNS-хостинг",
    uz: "DNS hosting haqida umumiy ma'lumot",
    en: "General information about DNS hosting",
  },
  related: [
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
  content: {
    ru: (
      <>
        <p>
          С помощью продукта DNS-хостинг можно размещать домены, ресурсные записи и обратные записи (PTR-записи) на
          авторитативных NS-серверах Airnet.
        </p>

        <p>В продукте поддерживаются типы и роли пользователей.</p>

        <p>Работать с доменами и записями можно:</p>

        <ul>
          <li>в панели управления;</li>
          <li>через Domains API;</li>
        </ul>
        <h2>Инфраструктура Airnet DNS</h2>
        {/* <img src="/help/dns-about.jpg" /> */}
        <p>Части инфраструктуры Airnet DNS:</p>

        <ul>
          <li>API-сервер, к которому попадают запросы;</li>
          <li>кластер баз данных, в котором хранится информация о доменах и записях;</li>
          <li>
            несколько NS-серверов. На каждом сервере расположена локальная копия базы данных и запущен NS-сервис,
            который отвечает на запросы.
          </li>
        </ul>
        <p>
          Для стабильной работы используется Anycast-балансировка адресов NS-серверов внутри каждого дата-центра и между
          дата-центрами. Это позволяет обеспечить работоспособность услуги даже в случае выхода из строя нескольких
          серверов — работа будет продолжаться, пока работает хотя бы один сервер.
        </p>

        <p>
          Публичные IP-адреса авторитативных NS-серверов Airnet (dns1.airnet.uz, dns2.airnet.uz) защищены DNS Firewall
          от DDoS-атак.
        </p>

        <h2>Стоимость</h2>
        <p>
          Услуга предоставляется бесплатно в дополнение к другим платным продуктам или услугам. Перед началом
          использования услуги завершите регистрацию и пополните баланс. Вы можете разместить любое количество ваших
          доменов и записей.
        </p>

        <h2>Ограничения</h2>
        <p>
          Сейчас DNS Airnet нельзя использовать в качестве Secondary DNS — мы планируем добавить эту функцию в будущем.
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          DNS xostingi yordamida siz Airnetning nufuzli NS serverlarida domenlar, manba yozuvlari va teskari yozuvlarni
          (PTR yozuvlari) joylashtirishingiz mumkin.
        </p>

        <p>Mahsulot foydalanuvchi turlari va rollarini qoʻllab-quvvatlaydi.</p>

        <p>Domenlar va yozuvlar bilan ishlashingiz mumkin:</p>

        <ul>
          <li>boshqaruv panelida;</li>
          <li>Domenlar API orqali;</li>
        </ul>
        <h2>DNS infratuzilmasini tanlang</h2>
        {/* <img src="/help/dns-about.jpg" /> */}
        <p>Airnet DNS infratuzilmasining qismlari:</p>

        <ul>
          <li>So'rovlar yuboriladigan API serveri;</li>
          <li>domenlar va yozuvlar haqidagi ma'lumotlarni saqlaydigan ma'lumotlar bazasi klasteri;</li>
          <li>
            bir nechta NS serverlari. Har bir server maʼlumotlar bazasining mahalliy nusxasini joylashtiradi va
            soʻrovlarga javob beruvchi NS xizmatini ishga tushiradi.
          </li>
        </ul>
        <p>
          Barqaror ishlash uchun har bir maʼlumot markazida va maʼlumotlar markazlari oʻrtasida NS server manzillarining
          Anycast balansi qoʻllaniladi. Bu bir nechta serverlar ishlamay qolgan taqdirda ham xizmatning ishlashini
          ta'minlash imkonini beradi - ish kamida bitta server ishlayotgan ekan, davom etadi.
        </p>

        <p>
          Airnetning nufuzli NS serverlarining umumiy IP manzillari (dns1.airnet.uz, dns2.airnet.uz) DNS xavfsizlik
          devori tomonidan DDoS bilan himoyalangan.
        </p>

        <h2>Xarajat</h2>
        <p>
          Xizmat boshqa pullik mahsulot yoki xizmatlardan tashqari bepul taqdim etiladi. Xizmatdan foydalanishdan oldin
          ro'yxatdan o'tishni yakunlang va balansni to'ldiring. Istalgan miqdordagi domen va yozuvlaringizni
          joylashtirishingiz mumkin.
        </p>

        <h2>Cheklovlar</h2>
        <p>
          DNS Airnet-dan hozirda ikkinchi darajali DNS sifatida foydalanish mumkin emas - kelajakda bu xususiyatni
          qo‘shishni rejalashtirmoqdamiz.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          With DNS hosting, you can host domains, resource records, and reverse records (PTR records) on Airnet's
          authoritative NS servers.
        </p>

        <p>The product supports user types and roles.</p>

        <p>You can work with domains and records:</p>

        <ul>
          <li>in the control panel;</li>
          <li>via the Domains API;</li>
        </ul>
        <h2>Airnet DNS Infrastructure</h2>
        {/* <img src="/help/dns-about.jpg" /> */}
        <p>Parts of the Airnet DNS infrastructure:</p>

        <ul>
          <li>API server to which requests are made;</li>
          <li>a database cluster that stores information about domains and records;</li>
          <li>
            several NS servers. Each server hosts a local copy of the database and runs an NS service that responds to
            queries.
          </li>
        </ul>
        <p>
          For stable operation, Anycast balancing of NS server addresses is used within each data center and between
          data centers. This makes it possible to ensure the service's operability even in the event of a failure of
          several servers - work will continue as long as at least one server is working.
        </p>

        <p>
          Public IP addresses of Airnet's authoritative NS servers (dns1.airnet.uz, dns2.airnet.uz) are DDoS-protected
          by DNS Firewall.
        </p>

        <h2>Cost</h2>
        <p>
          The service is provided free of charge in addition to other paid products or services. Before using the
          service, complete the registration and replenish the balance. You can host any number of your domains and
          records.
        </p>

        <h2>Limits</h2>
        <p>DNS Airnet cannot currently be used as a Secondary DNS - we plan to add this feature in the future.</p>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
