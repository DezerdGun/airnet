import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Шаблоны заявлений на передачу домена другому владельцу",
    uz: "Domenni boshqa egasiga o'tkazish uchun dastur shablonlari",
    en: "Application templates for transferring a domain to another owner",
  },
  related: [
    {
      id: "server to another owner",
      title: {
        ru: "Шаблоны заявлений на передачу сервера другому владельцу",
        uz: "Serverni boshqa egasiga o'tkazish uchun ilovalar shablonlari",
        en: "Templates of applications for the transfer of the server to another owner",
      },
      link: "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-of-applications-for-the-transfer-of-the-server-to-another-owner",
    },
    {
      id: "account to another owner",
      title: {
        ru: "Шаблоны заявлений на передачу хостингового аккаунта другому владельцу",
        uz: "Xosting hisobini boshqa egasiga o'tkazish uchun shablonlar",
        en: "Templates for transferring a hosting account to another owner",
      },
      link: "/documents/templates-for-applications-for-the-transfer-of-rights-to-another-owner/templates-for-transferring-a-hosting-account-to-another-owner",
    },
  ],
  content: {
    ru: (
      <>
        <p>Шаблоны заявлений:</p>
        <ol>
          <li>Заявление на передачу домена с физического лица физическому лицу</li>
          <li>Заявление на передачу домена с физического лица юридическому лицу</li>
          <li>Заявление на передачу домена с юридического лица физическому лицу</li>
          <li>Заявление на передачу домена с юридического лица юридическому лицу</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Bayonnoma shablonlari:</p>
        <ol>
          <li>Domenni jismoniy shaxsdan jismoniy shaxsga o'tkazish uchun ariza</li>
          <li>Domenni jismoniy shaxsdan yuridik shaxsga o'tkazish uchun ariza</li>
          <li>Domenni yuridik shaxsdan jismoniy shaxsga o'tkazish uchun ariza</li>
          <li>Domenni yuridik shaxsdan yuridik shaxsga o'tkazish uchun ariza</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>Statement templates:</p>
        <ol>
          <li>Application for the transfer of a domain from an individual to an individual</li>
          <li>Application for the transfer of a domain from an individual to a legal entity</li>
          <li>Application for the transfer of a domain from a legal entity to an individual</li>
          <li>Application for the transfer of a domain from a legal entity to a legal entity</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
