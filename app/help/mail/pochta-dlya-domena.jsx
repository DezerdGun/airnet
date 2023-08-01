import HelpBlock from "@/components/helpItem/helpBlock";
import Link from "next/link";

const mainData = {
  headTitle: { ru: "Почта для домена", uz: "Domen uchun pochta", en: "Mail for domain" },
  related: [
    {
      title: {
        ru: "Настроить программу по протоколу IMAP",
        uz: "IMAP protokoli yordamida dasturni sozlang",
        en: "Configure the program using the IMAP protocol",
      },
      link: "/help/mail/mail-clients",
    },
  ],
  content: {
    ru: (
      <>
        <p>
          Компания AIRNET.uz предоставляет пользователям почтовый сервис для домена.
        </p>
        <p>
          Платный –{" "}
          <Link href="/email">
            <a>
              <strong>AIRNET.Почта</strong>
            </a>
          </Link>
        </p>
        <p>
          Платный –{" "}
          <a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
            <strong>Яндекс.Почта</strong>
          </a>
        </p>
        <p>
          Платный –{" "}
          <a href="https://workspace.google.com/intl/ru/products/gmail" target="_blank" rel="noreferrer noopener">
            <strong>Gmail.com</strong>
          </a>
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          AIRNET.uz kompaniyasi foydalanuvchilarga domen uchun pochta xizmatini taqdim etadi.
        </p>
        <p>
          Pullik -{" "}
          <Link href="/uz/email">
            <a>
              <strong>AIRNET.Mail</strong>
            </a>
          </Link>
        </p>
        <p>
          Pullik –{" "}
          <a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
            <strong>Yandex.Mail</strong>
          </a>
        </p>
        <p>
          Pullik –{" "}
          <a href="https://workspace.google.com/intl/en/products/gmail" target="_blank" rel="noreferrer noopener">
            <strong>Gmail.com</strong>
          </a>
        </p>
      </>
    ),
    en: (
      <>
        <p>
          The AIRNET.uz company provides users with a mail service for the domain.
        </p>
        <p>
          Paid –{" "}
          <Link href="/en/email">
            <a>
              <strong>AIRNET.Mail</strong>
            </a>
          </Link>
        </p>
        <p>
          Paid –{" "}
          <a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
            <strong>Yandex.Mail</strong>
          </a>
        </p>
        <p>
          Paid –{" "}
          <a href="https://workspace.google.com/intl/en/products/gmail" target="_blank" rel="noreferrer noopener">
            <strong>Gmail.com</strong>
          </a>
        </p>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
