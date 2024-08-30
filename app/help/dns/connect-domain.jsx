import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsDns } from "@/app/help/dns";

const mainData = {
  headTitle: {
    ru: "Подключить сайт к домену",
    uz: "Saytni domenga ulang",
    en: "Connect site to domain",
  },
  related: [
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
          Вы можете подключить сайт к домену с помощью A-записи — привязать домен к определенному IP-адресу. При
          обращении к домену будет открываться сайт, расположенный на сервере с указанным IP-адресом.
        </p>

        <ol>
          <li>Проверьте, что у домена не истек срок регистрации.</li>
          <li>Добавьте домен.</li>
          <li>Делегируйте домен на NS-серверы AIRNET.</li>
          <li>Добавьте A-запись со значением IP-адреса вашего сервера.</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>
          Siz saytni domenga A-record yordamida ulashingiz mumkin - domenni ma'lum bir IP manzilga bog'lang. Domenga
          kirishda ko‘rsatilgan IP manzilga ega serverda joylashgan sayt ochiladi.
        </p>

        <ol>
          <li>Domen muddati tugamaganligini tekshiring.</li>
          <li>Domen qo'shing.</li>
          <li>Domenni AIRNET NS serverlariga topshiring.</li>
          <li>Serveringiz IP manzili qiymatiga ega A yozuvini qo'shing.</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>
          You can connect a site to a domain using an A-record - bind a domain to a specific IP address. When accessing
          the domain, the site located on the server with the specified IP address will be opened.
        </p>

        <ol>
          <li>Check that the domain has not expired.</li>
          <li>Add a domain.</li>
          <li>Delegate the domain to the AIRNET NS servers.</li>
          <li>Add an A record with the value of your server's IP address.</li>
        </ol>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsDns,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
