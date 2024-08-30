import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsDns } from "@/app/help/dns";

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
            В панели управления перейдите в раздел <strong>Профайлы</strong> → <strong>Изменить данные профайла</strong>.
          </li>
          <li>
            Внесите изменения в поле <strong>Электронная почта</strong>
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
          Boshqaruv panelida <strong>Profillar</strong> → <strong>Profil ma’lumotlarini tahrirlash</strong>-ga o‘ting.
          </li>
          <li>
            <strong>Email</strong> maydoniga o'zgartirishlar kiriting
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
          In the control panel, go to <strong>Profiles</strong> → <strong>Edit profile details</strong>.
          </li>
          <li>
            Make changes to the field <strong>Email</strong>
          </li>
          <li>
            Click <strong>Save</strong>.
          </li>
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
