import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Настроить программу по протоколу IMAP",
    uz: "IMAP protokoli yordamida dasturni sozlang",
    en: "Configure the program using the IMAP protocol",
  },
  related: [
    {
      title: { ru: "Почта для домена", uz: "Domen uchun pochta", en: "Mail for domain" },
      link: "/help/mail/pochta-dlya-domena",
    },
  ],
  content: {
    ru: (
      <>
        <p>
          При использовании протокола IMAP почтовая программа синхронизируется с сервером и сохраняет структуру папок
          вашего ящика. Отправляемые вами через почтовую программу письма будут храниться не только на компьютере, но и
          на сервере, и вы сможете иметь к ним доступ с различных устройств.
        </p>
        <h2>Настройте программу</h2>
        <h4>Входящая почта</h4>
        <ul>
          <li>
            адрес почтового сервера — <code>mail.airnet.uz</code>;
          </li>
          <li>
            защита соединения — <code>SSL</code>;
          </li>
          <li>
            порт — <code>993</code>.
          </li>
        </ul>
        <h4>Исходящая почта</h4>
        <ul>
          <li>
            адрес почтового сервера — <code>mail.airnet.uz</code>;
          </li>
          <li>
            защита соединения — <code>SSL</code>;
          </li>
          <li>
            порт — <code>465</code>.
          </li>
        </ul>
      </>
    ),
    uz: (
      <>
        <p>
          IMAP protokolidan foydalanganda pochta dasturi server bilan sinxronlanadi va papka tuzilishini saqlaydi.
          sizning qutingiz. Pochta dasturi orqali siz yuborgan xatlar nafaqat kompyuterda, balki saqlanadi serverda va
          ularga turli qurilmalardan kirishingiz mumkin.
        </p>
        <h2>Dasturni moslashtiring</h2>
        <h4>Kiruvchi xat</h4>
        <ul>
          <li>
            pochta serveri manzili — <code>mail.airnet.uz</code>;
          </li>
          <li>
            ulanish xavfsizligi - <code>SSL</code>;
          </li>
          <li>
            port - <code>993</code>.
          </li>
        </ul>
        <h4>Chiquvchi xat</h4>
        <ul>
          <li>
            pochta serveri manzili — <code>mail.airnet.uz</code>;
          </li>
          <li>
            ulanish xavfsizligi - <code>SSL</code>;
          </li>
          <li>
            port - <code>465</code>.
          </li>
        </ul>
      </>
    ),
    en: (
      <>
        <p>
          When using the IMAP protocol, the mail program synchronizes with the server and preserves the folder structure
          your box. Letters sent by you through the mail program will be stored not only on the computer, but also on
          the server and you can access them from different devices.
        </p>
        <h2>Customize the program</h2>
        <h4>Incoming mail</h4>
        <ul>
          <li>
            mail server address — <code>mail.airnet.uz</code>;
          </li>
          <li>
            connection security - <code>SSL</code>;
          </li>
          <li>
            port is <code>993</code>.
          </li>
        </ul>
        <h4>Outgoing mail</h4>
        <ul>
          <li>
            mail server address — <code>mail.airnet.uz</code>;
          </li>
          <li>
            connection security - <code>SSL</code>;
          </li>
          <li>
            port is <code>465</code>.
          </li>
        </ul>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
