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
      link: "/documents/transfer-owner/server-owner",
    },
    {
      id: "account to another owner",
      title: {
        ru: "Шаблоны заявлений на передачу хостингового аккаунта другому владельцу",
        uz: "Xosting hisobini boshqa egasiga o'tkazish uchun shablonlar",
        en: "Templates for transferring a hosting account to another owner",
      },
      link: "/documents/transfer-owner/hosting-owner",
    },
  ],
  content: {
    ru: (
      <>
        <p>Шаблоны заявлений:</p>
        <ol>
          <li>
            <a href="/documents/change-domain-contact.docx" target="_blank">
              Заявление на передачу домена с физического лица физическому лицу
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact.docx" target="_blank">
              Заявление на передачу домена с физического лица юридическому лицу
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact-yur.docx" target="_blank">
              Заявление на передачу домена с юридического лица физическому лицу
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact-yur.docx" target="_blank">
              Заявление на передачу домена с юридического лица юридическому лицу
            </a>
          </li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Bayonnoma shablonlari:</p>
        <ol>
          <li>
            <a href="/documents/change-domain-contact.docx" target="_blank">
              Domenni jismoniy shaxsdan jismoniy shaxsga o'tkazish uchun ariza
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact.docx" target="_blank">
              Domenni jismoniy shaxsdan yuridik shaxsga o'tkazish uchun ariza
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact-yur.docx" target="_blank">
              Domenni yuridik shaxsdan jismoniy shaxsga o'tkazish uchun ariza
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact-yur.docx" target="_blank">
              Domenni yuridik shaxsdan yuridik shaxsga o'tkazish uchun ariza
            </a>
          </li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>Statement templates:</p>
        <ol>
          <li>
            <a href="/documents/change-domain-contact.docx" target="_blank">
              Application for the transfer of a domain from an individual to an individual
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact.docx" target="_blank">
              Application for the transfer of a domain from an individual to a legal entity
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact-yur.docx" target="_blank">
              Application for the transfer of a domain from a legal entity to an individual
            </a>
          </li>
          <li>
            <a href="/documents/change-domain-contact-yur.docx" target="_blank">
              Application for the transfer of a domain from a legal entity to a legal entity
            </a>
          </li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
