import HelpBlock from "@/components/helpItem/helpBlock";
import PopularSert from "@/components/popularSert";
import { breadCrumbsHelp } from "@/app/help";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
        ru: "Отчетные документы на почту или по ЭДО",
        uz: "Hujjatlarni pochta yoki EDI orqali hisobot qilish",
        en: "Reporting documents by mail or via EDI",
    },
    related: [],
    content: {
      ru: (
        <>
          <p>
            Отправка отчетных документов зависит от типа отчета и договоренности с контрагентом или налоговой: отчетность для налоговой и государственные органы сдаётся только в электронном виде по ЭДО или через специализированные сервисы, а для контрагентов можно использовать ЭДО для отправки электронных оригиналов или бумажные документы. При этом электронный документ, подписанный электронной подписью, имеет ту же юридическую силу, что и бумажный оригинал.
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Hisobot hujjatlarini yuborish hisobot turiga va kontragent yoki soliq organi bilan tuzilgan shartnomaga bog‘liq: soliq organi va davlat organlari uchun hisobot faqat elektron shaklda ERI orqali yoki ixtisoslashtirilgan xizmatlar orqali taqdim etiladi, kontragentlar uchun esa ERIdan elektron asl nusxalar yoki qog‘oz hujjatlarni jo‘natish mumkin. Bunda elektron imzo bilan imzolangan elektron hujjat qog‘ozdagi asl nusxadagi kabi yuridik kuchga ega.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Sending reporting documents depends on the type of report and the agreement with the counterparty or tax authority: reporting for the tax authority and government agencies is submitted only electronically via EDI or through specialized services, and for counterparties, EDI can be used to send electronic originals or paper documents. In this case, an electronic document signed with an electronic signature has the same legal force as a paper original.
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
