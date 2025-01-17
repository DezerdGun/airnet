import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Как создать поддомен?",
    uz: "Subdomenni qanday yaratish mumkin?",
    en: "How to create a subdomain?",
  },
  url: "/help/hosting/kak-sozdat-poddomen",
  related: [],
  content: {
    ru: (
      <>
        <p>Создание поддомена осуществляется через панель управления cPanel. Подробная инструкция доступна по ссылке: https://support.cpanel.net/hc/en-us/articles/360052780313-How-to-create-a-subdomain</p>
        <ul>
          <li>Войдите в cPanel в учетной записи, чтобы добавить поддомен.</li>
          <li>Нажмите «Домены» в разделе «Домены».</li>
          <li>Нажмите кнопку «Создать новый домен».</li>
          <li>Введите имя поддомена для добавления в текстовое поле «Домен».</li>
          <li>Отмените выбор параметра «Совместно использовать корневой каталог документа (/home/username/public_html) с «domain.tld».</li>
          <li>Введите каталог, в котором должны находиться файлы для этого поддомена.</li>
          <li>Нажмите кнопку «Отправить».</li>
        </ul>
      </>
    ),
    uz: (
      <>
        <p>Subdomen yaratish cPanel boshqaruv paneli orqali amalga oshiriladi. Batafsil ko'rsatmalar quyidagi havolada mavjud: https://support.cpanel.net/hc/en-us/articles/360052780313-How-to-create-a-subdomain</p>
        <ul>
          <li>Subdomenni qo'shish uchun hisob qaydnomasi orqali cPanel-ga kiring.</li>
          <li>"Domenlar" bo'limi ostidagi "Domenlar" tugmasini bosing.</li>
          <li>“Yangi domen yaratish” tugmasini bosing.</li>
          <li>"Domen" matn maydoniga qo'shiladigan subdomen nomini kiriting.</li>
          <li>“Domain.tld” bilan hujjat ildizini (/home/username/public_html) almashish” belgisini olib tashlang. variant.</li>
          <li>Ushbu subdomen uchun fayllar mavjud boʻlishini xohlagan katalogni kiriting.</li>
          <li>“Yuborish” tugmasini bosing.</li>
        </ul>
      </>
    ),
    en: (
      <>
        <p>Subdomain creation is done through the cPanel control panel. Detailed instructions are available at the link: https://support.cpanel.net/hc/en-us/articles/360052780313-How-to-create-a-subdomain</p>
        <ul>
          <li>Log into cPanel on the account to add the subdomain on.</li>
          <li>Click "Domains" under the "Domains" section.</li>
          <li>Click the "Create A New Domain" button.</li>
          <li>Enter the subdomain name to add in the "Domain" text box.</li>
          <li>Deselect the "Share document root (/home/username/public_html) with “domain.tld”." option.</li>
          <li>Enter the directory where you want the files for this subdomain to exist.</li>
          <li>Click the "Submit" button.</li>
        </ul>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsHosting,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
