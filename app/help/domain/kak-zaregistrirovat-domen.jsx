import HelpBlock from "@/components/helpItem/helpBlock";
import { LINKS } from "@/components/requirements";
import { checkLang } from "@/utils/checkLang";
import Link from "next/link";
import { breadCrumbsDomain } from "@/app/help/domain";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
      ru: "Как зарегистрировать домен UZ?",
      uz: "Qanday qilib domen UZ royxatdan otqaziladi?",
      en: "How to register an UZ domain?",
    },
    url: "/help/domain/kak-zaregistrirovat-domen",
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
          ru: "Рекомендации по выбору доменного имени",
          uz: "Domen nomlarini tanlshdagi maslaxatlar",
          en: "Recommendations for choosing a domain name",
        },
        link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
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
        <>
          <p>
            Выбрать и проверить доменное имя на странице «
            <Link href={checkLang(language) + LINKS.DOMAINS}>
              <a>
                <strong>Зарегистрировать домен</strong>
              </a>
            </Link>
            »;
          </p>
          <p>
            Нажать на кнопку «
            <strong>
              <a
                href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Заказать
              </a>
            </strong>
            »;
          </p>
          <p>Выслать паспортные данные по тикетной системе или на наш корпоративный телеграм <a href="https://t.me/airnetuzb" target="_blank">@airnetuzb</a>.</p>
          <p>Оплатить счет за регистрацию домена;</p>
        </>
      ),
      uz: (
        <>
          <p>
            Domen nomini tanlang va «
            <Link href={checkLang(language) + LINKS.DOMAINS}>
              <a>
                <strong>Domenni ro'yxatdan o'tkazing</strong>
              </a>
            </Link>
            »;
          </p>
          <p>
            <strong>
              Buyurtma berish uchun «
              <a
                href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                ushbu tugmani bosing
              </a>
            </strong>
            »;
          </p>
          <p>Pasport ma'lumotlaringizni chipta tizimi orqali yoki korporativ telegram <a href="https://t.me/airnetuzb" target="_blank">@airnetuzb</a> manziliga yuboring.</p>
          <p>Domenni roʻyxatdan oʻtkazish uchun toʻlovni toʻlash;</p>
        </>
      ),
      en: (
        <>
          <p>
            Select and check the domain name in "
            <Link href={checkLang(language) + LINKS.DOMAINS}>
              <a>
                <strong>Register a domain</strong>
              </a>
            </Link>
            »;
          </p>
          <p>
            Click on the button "
            <strong>
              <a
                href="https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order
              </a>
            </strong>
            »;
          </p>
          <p>Send your passport details via the ticket system or to our corporate telegram <a href="https://t.me/airnetuzb" target="_blank">@airnetuzb</a>.</p>
          <p>Pay the invoice for domain registration;</p>
        </>
      ),
    },
  };

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
