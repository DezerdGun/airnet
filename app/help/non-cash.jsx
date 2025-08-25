import HelpBlock from "@/components/helpItem/helpBlock";
import PopularSert from "@/components/popularSert";
import { breadCrumbsHelp } from "@/app/help";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
        ru: "Безналичные платежи",
        uz: "Naqd pulsiz to'lovlar",
        en: "Non-cash payments",
    },
    related: [],
    content: {
      ru: (
        <>
          <p>
            Безналичные платежи — это расчеты, при которых деньги переводятся между счетами без использования физических наличных купюр. Средства перечисляются через финансовые организации (банки) с одного банковского счета на другой. К ним относятся платежи с помощью банковских карт, мобильных приложений, электронных кошельков и систем онлайн-платежей. 
          </p>
          <h3>Как работают безналичные платежи:</h3><br />
          <p><strong>1. Через банк:</strong></p>
          <p>Клиент дает распоряжение банку перевести деньги со своего счета на счет получателя. </p>
          <p><strong>2. Через <a href="/payment">платежную систему</a>:</strong></p>
          <p>Сервисы онлайн-платежей и мобильные приложения выступают посредниками для проведения транзакций между счетами или электронными кошельками. </p>
        </>
      ),
      uz: (
        <>
          <p>
          Naqd pulsiz to'lovlar - bu jismoniy naqd puldan foydalanmasdan hisobvaraqlar o'rtasida pul o'tkazmalari. Mablag'lar moliya institutlari (banklar) orqali bir bank hisobvarag'idan ikkinchisiga o'tkaziladi. Bularga bank kartalari, mobil ilovalar, elektron hamyonlar va onlayn to‘lov tizimlaridan foydalangan holda to‘lovlar kiradi.
          </p>
          <h3>Naqd pulsiz to'lovlar qanday ishlaydi:</h3><br />
          <p><strong>1. Bank orqali:</strong></p>
          <p>Mijoz bankka uning hisobidan pulni oluvchining hisobiga o‘tkazishni buyuradi. </p>
          <p><strong>2. <a href="/payment">To‘lov tizimi</a> orqali:</strong></p>
          <p>Onlayn to'lov xizmatlari va mobil ilovalar hisoblar yoki elektron hamyonlar o'rtasidagi tranzaktsiyalar uchun vositachi vazifasini bajaradi. </p>
        </>
      ),
      en: (
        <>
          <p>
          Cashless payments are payments in which money is transferred between accounts without using physical cash. Funds are transferred through financial institutions (banks) from one bank account to another. These include payments using bank cards, mobile applications, electronic wallets and online payment systems.
          </p>
          <h3>How cashless payments work:</h3><br />
          <p><strong>1. Through a bank:</strong></p>
          <p>The client instructs the bank to transfer money from his account to the recipient's account. </p>
          <p><strong>2. Through a <a href="/payment">payment system</a>:</strong></p>
          <p>Online payment services and mobile applications act as intermediaries for transactions between accounts or electronic wallets. </p>
        </>
      ),
    },
    afterContent: <PopularSert language={language} />,
  };

  const breadCrumbs = [
    ...breadCrumbsHelp,
    {
      name: mainData.headTitle,
      link: mainData.url,
    },
  ];
  
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
};
