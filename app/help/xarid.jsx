import HelpBlock from "@/components/helpItem/helpBlock";
import PopularSert from "@/components/popularSert";
import { breadCrumbsHelp } from "@/app/help";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
        ru: "Работа через биржу xarid.uzex.uz",
        uz: "xarid.uzex.uz birjasi orqali ishlash",
        en: "Work through the exchange xarid.uzex.uz",
    },
    related: [],
    content: {
      ru: (
        <>
          <p>
            Работа на бирже UzEx через сайт xarid.uzex.uz подразумевает участие в системе электронных закупок, где компании и частные лица могут покупать и продавать товары, а также участвовать в тендерах. Чтобы начать работу, вам нужно зарегистрироваться на портале, пройти процедуру идентификации и заключить договор с брокером, чтобы получить доступ к электронным торгам и тендерам.
          </p>
          <p>
            После выполнения всех необходимых процедур, вы можете подавать заявки на участие в торгах как покупатель, а также запросить у наших менджеров ссылку на лот для участия в электронных тендерах.
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            UzEx birjasida xarid.uzex.uz sayti orqali ishlash korxonalar va jismoniy shaxslar tovarlarni sotib olish va sotish, shuningdek, tenderlarda ishtirok etishi mumkin bo‘lgan elektron xaridlar tizimida ishtirok etishni nazarda tutadi. Ishni boshlash uchun siz portalda ro'yxatdan o'tishingiz, identifikatsiyalash tartib-qoidasidan o'tishingiz va elektron savdo va tenderlarga kirish uchun broker bilan shartnoma tuzishingiz kerak.
          </p>
          <p>
            Barcha kerakli protseduralarni bajarganingizdan so'ng, siz xaridor sifatida savdoda ishtirok etish uchun arizalarni topshirishingiz mumkin, shuningdek, elektron tenderlarda ishtirok etish uchun menejerlarimizdan lotga havolani so'rashingiz mumkin.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Working on the UzEx exchange through the xarid.uzex.uz website involves participating in the electronic procurement system, where companies and individuals can buy and sell goods, as well as participate in tenders. To get started, you need to register on the portal, go through the identification procedure and enter into an agreement with a broker to gain access to electronic trading and tenders.
          </p>
          <p>
            After completing all the necessary procedures, you can submit applications for participation in trading as a buyer, and also request a link to the lot from our managers to participate in electronic tenders.
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
