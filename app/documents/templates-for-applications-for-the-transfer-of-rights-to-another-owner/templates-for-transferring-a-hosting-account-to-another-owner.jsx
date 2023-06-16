import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Шаблоны заявлений на передачу хостингового аккаунта другому владельцу",
    uz: "Xosting hisobini boshqa egasiga o'tkazish uchun shablonlar",
    en: "Templates for transferring a hosting account to another owner",
  },
  related: [
    {
      id: "domain to another owner",
      title: {
        ru: "Шаблоны заявлений на передачу домена другому владельцу",
        uz: "Domenni boshqa egasiga o'tkazish uchun dastur shablonlari",
        en: "Application templates for transferring a domain to another owner",
      },
      link: "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/application-templates-for-transferring-a-domain-to-another-owner",
    },
    {
      id: "server to another owner",
      title: {
        ru: "Шаблоны заявлений на передачу сервера другому владельцу",
        uz: "Serverni boshqa egasiga o'tkazish uchun ilovalar shablonlari",
        en: "Templates of applications for the transfer of the server to another owner",
      },
      link: "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-of-applications-for-the-transfer-of-the-server-to-another-owner",
    },
  ],
  content: {
    ru: (
      <>
        <p>Шаблоны заявлений:</p>
        <ol>
          <li>Заявление на передачу хостинг аккаунта с физического лица физическому лицу</li>
          <li>Заявление на передачу хостинг аккаунта с физического лица юридическому лицу</li>
          <li>Заявление на передачу хостинг аккаунта с юридического лица физическому лицу</li>
          <li>Заявление на передачу хостинг аккаунта с юридического лица юридическому лицу</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Bayonnoma shablonlari:</p>
        <ol>
          <li>Xosting hisobini jismoniy shaxsdan jismoniy shaxsga o'tkazish uchun ariza</li>
          <li>Jismoniy shaxsdan yuridik shaxsga xosting hisobini o‘tkazish uchun ariza</li>
          <li>Xosting hisobini yuridik shaxsdan jismoniy shaxsga o‘tkazish uchun ariza</li>
          <li>Xosting hisobini yuridik shaxsdan yuridik shaxsga o‘tkazish uchun ariza</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>Statement templates:</p>
        <ol>
          <li>Application for the transfer of a hosting account from an individual to an individual</li>
          <li>Application for the transfer of a hosting account from an individual to a legal entity</li>
          <li>Application for the transfer of a hosting account from a legal entity to an individual</li>
          <li>Application for the transfer of a hosting account from a legal entity to a legal entity</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
