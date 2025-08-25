import HelpBlock from "@/components/helpItem/helpBlock";
import PopularSert from "@/components/popularSert";
import { breadCrumbsHelp } from "@/app/help";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
        ru: "Поддерживаем электронный документооборот",
        uz: "Biz elektron hujjat aylanishini qo'llab-quvvatlaymiz",
        en: "We support electronic document management",
    },
    related: [],
    content: {
      ru: (
        <>
          <p>
            OOO AIRNET готова обмениваться документами в цифровом виде с помощью специальных программ и интернет-каналов связи, что ускоряет рабочие процессы, уменьшает затраты на печать и упрощает хранение, при этом обеспечивая юридическую значимость благодаря использованию электронной подписи.
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Mchj AIRNET maxsus dasturlar va Internet aloqa kanallari yordamida hujjatlarni raqamli shaklda almashishga tayyor, bu esa ish jarayonlarini tezlashtiradi, bosib chiqarish xarajatlarini kamaytiradi va saqlashni soddalashtiradi, shu bilan birga elektron imzodan foydalanish orqali huquqiy ahamiyatga ega.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            AIRNET LLC is ready to exchange documents in digital form using special programs and Internet communication channels, which speeds up work processes, reduces printing costs and simplifies storage, while ensuring legal significance through the use of an electronic signature.
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
