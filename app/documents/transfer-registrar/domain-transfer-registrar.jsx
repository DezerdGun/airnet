import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Шаблоны заявлений на передачу домена другому регистратору",
    uz: "Domenni boshqa ro'yxatga oluvchiga o'tkazish uchun ariza shablonlari",
    en: "Application templates for domain transfer to another registrar",
  },
  related: [],
  content: {
    ru: (
      <>
        <p>Шаблоны заявлений:</p>
        <ol>
          <li>
            <a href="/documents/transfer-domain-yur.docx" target="_blank">
              Заявление физического лица на передачу домена другому регистратору
            </a>
          </li>
          <li>
            <a href="/documents/transfer-domain.docx" target="_blank">
              Заявление юридического лица на передачу домена другому регистратору
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
            <a href="/documents/transfer-domain-yur.docx" target="_blank">
              Jismoniy shaxsning domenni boshqa registratorga o‘tkazish uchun arizasi
            </a>
          </li>
          <li>
            <a href="/documents/transfer-domain.docx" target="_blank">
              Yuridik shaxsning domenni boshqa registratorga o‘tkazish uchun arizasi
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
            <a href="/documents/transfer-domain-yur.docx" target="_blank">
              Application by an individual to transfer a domain to another registrar
            </a>
          </li>
          <li>
            <a href="/documents/transfer-domain.docx" target="_blank">
              Application by a legal entity to transfer a domain to another registrar
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
