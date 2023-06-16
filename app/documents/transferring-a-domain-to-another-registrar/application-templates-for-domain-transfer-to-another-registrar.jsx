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
          <li>Заявление физического лица на передачу домена другому регистратору</li>
          <li>Заявление юридического лица на передачу домена другому регистратору</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Bayonnoma shablonlari:</p>
        <ol>
          <li>Jismoniy shaxsning domenni boshqa registratorga o‘tkazish uchun arizasi</li>
          <li>Yuridik shaxsning domenni boshqa registratorga o‘tkazish uchun arizasi</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>Statement templates:</p>
        <ol>
          <li>Application by an individual to transfer a domain to another registrar</li>
          <li>Application by a legal entity to transfer a domain to another registrar</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
