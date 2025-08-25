import HelpBlock from "@/components/helpItem/helpBlock";
import PopularSert from "@/components/popularSert";
import { breadCrumbsHelp } from "@/app/help";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
        ru: "Договор оферты или индивидуальный договор",
        uz: "Taklif shartnomasi yoki individual kelishuv",
        en: "Offer agreement or individual agreement",
    },
    related: [],
    content: {
      ru: (
        <>
          <p>
            Выбирайте договор оферты, условия всем клиентам идентичны, например, для оплаты за наши услуги от физического лица, а индивидуальный договор это двустороннее соглашение, где обе стороны согласовали и подписали все условия сотрудничества, если вы хотите внести свои коррективы в условия сотрудничества в типовой договор, просим обратится к нашим менеджерам. 
          </p>
          <p>
            Оферта – это предложение, которое становится договором после акцепта (принятия) клиентом, а индивидуальный договор – это уже полноценное соглашение, зафиксированное подписями сторон. 
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Taklif shartnomasini tanlang, shartlar barcha mijozlar uchun bir xil, masalan, bizning xizmatlarimiz uchun jismoniy shaxs tomonidan to'lash uchun va individual shartnoma ikki tomonlama shartnoma bo'lib, unda ikkala tomon ham hamkorlikning barcha shartlarini kelishib, imzolagan, agar siz standart shartnomada hamkorlik shartlariga o'zingizning tuzatishlaringizni kiritmoqchi bo'lsangiz, iltimos, menejerlarimizga murojaat qiling.
          </p>
          <p>
            Taklif - bu mijoz tomonidan qabul qilinganidan keyin kelishuvga aylanadigan taklif va individual shartnoma allaqachon tomonlarning imzolari bilan qayd etilgan to'liq shartnomadir.
          </p>
        </>
      ),
      en: (
        <>
          <p>
           Choose an offer agreement, the conditions are identical for all clients, for example, for payment for our services from an individual, and an individual agreement is a bilateral agreement, where both parties have agreed and signed all the terms of cooperation, if you want to make your own adjustments to the terms of cooperation in a standard agreement, please contact our managers.
          </p>
          <p>
            An offer is a proposal that becomes an agreement after acceptance by the client, and an individual agreement is already a full-fledged agreement, recorded by the signatures of the parties.
          </p>
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
