import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Редактировать настройки домена",
    uz: "Domen sozlamalarini tahrirlash",
    en: "Edit domain settings",
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
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Редактировать настройки домена могут только пользователи с ролями Владелец аккаунта и Администратор аккаунта.
        </p>

        <p>
          Для домена можно изменить адрес электронной почты и время негативного кэширования — время, в течение которого
          кэширующие серверы будут хранить информацию об отсутствии записи.
        </p>

        <ol>
          <li>
            В панели управления перейдите в раздел <strong>Сетевые сервисы</strong> → <strong>DNS-хостинг</strong>.
          </li>
          <li>
            Откройте страницу домена → вкладка <strong>Настройки домена</strong>.
          </li>
          <li>
            Внесите изменения в поле <strong>Электронная почта</strong> или{" "}
            <strong>Время негативного кэширования</strong>.
          </li>
          <li>
            Нажмите <strong>Сохранить</strong>.
          </li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Faqat hisob egasi va hisob ma'muri roliga ega foydalanuvchilar domen sozlamalarini tahrirlashi mumkin.
        </p>

        <p>
          Domen uchun siz elektron pochta manzilini va salbiy keshlash vaqtini o'zgartirishingiz mumkin - bu vaqtni
          keshlash serverlari yozuvning yo'qligi haqidagi ma'lumotlarni saqlaydi.
        </p>

        <ol>
          <li>
            Boshqaruv panelida <strong>Tarmoq xizmatlari</strong> → <strong>DNS hosting</strong>-ga o‘ting.
          </li>
          <li>
            Domen sahifasi → <strong>Domen sozlamalari</strong> yorlig‘ini oching.
          </li>
          <li>
            <strong>Email</strong> yoki maydoniga o'zgartirishlar kiriting
            <strong>Salbiy keshlash vaqti</strong>.
          </li>
          <li>
            <strong>Saqlash</strong> tugmasini bosing.
          </li>
        </ol>
      </>
    ),
    en: (
      <>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Only users with the Account Owner and Account Administrator roles can edit domain settings.
        </p>

        <p>
          For a domain, you can change the email address and the negative caching time - the time during which caching
          servers will store information about the absence of a record.
        </p>

        <ol>
          <li>
            In the control panel, go to <strong>Network Services</strong> → <strong>DNS Hosting</strong>.
          </li>
          <li>
            Open the domain page → <strong>Domain settings</strong> tab.
          </li>
          <li>
            Make changes to the field <strong>Email</strong> or <strong>Negative caching time</strong>.
          </li>
          <li>
            Click <strong>Save</strong>.
          </li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
