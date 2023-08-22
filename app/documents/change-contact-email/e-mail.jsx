import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Шаблоны заявлений на смену контактного электронного почтового ящика",
    uz: "Kontakt elektron pochta qutisini o'zgartirish uchun dastur shablonlari",
    en: "Application templates for changing the contact e-mail box",
  },
  related: [],
  content: {
    ru: (
      <>
        <p>Шаблоны заявлений:</p>
        <ol>
          <li>Заявление на смену электронного почтового ящика (e-mail) физического лица</li>
          <li>Заявление на смену электронного почтового ящика (e-mail) юридического лица</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Bayonnoma shablonlari:</p>
        <ol>
          <li>Jismoniy shaxsning elektron pochta qutisini (elektron pochta) o'zgartirish uchun ariza</li>
          <li>Yuridik shaxsning elektron pochta qutisini (elektron pochta) o'zgartirish uchun ariza</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>Statement templates:</p>
        <ol>
          <li>Application to change the electronic mailbox (e-mail) of an individual</li>
          <li>Application to change the electronic mailbox (e-mail) of a legal entity</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
