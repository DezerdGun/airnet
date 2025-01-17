import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "Есть ли доступ к log-файлам? Где мне найти error_log и access_log?",
    uz: "Jurnal fayllariga kirish imkoni bormi? error_log va access_logni qayerdan topsam bo'ladi?",
    en: "Is there access to log files? Where can I find error_log and access_log?",
  },
  url: "/help/hosting/est-li-dostup-k-log-fajlam-gde-mne-najti-error-log-i-access-log",
  related: [],
  content: {
    ru: (
      <>
        <p>Да, доступ к лог-файлам предоставляется через File Manager в панели управления cPanel или любой другой сторонний FTP-клиент</p>
      </>
    ),
    uz: (
      <>
        <p>Ha, jurnal fayllariga kirish cPanel boshqaruv panelidagi Fayl menejeri yoki boshqa uchinchi tomon FTP mijozi orqali taqdim etiladi.</p>
      </>
    ),
    en: (
      <>
        <p>Yes, access to log files is provided via File Manager in the cPanel control panel or any other third-party FTP client.</p>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsHosting,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
