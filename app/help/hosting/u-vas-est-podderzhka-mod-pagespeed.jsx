import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsHosting } from "@/app/help/hosting";

const mainData = {
  headTitle: {
    ru: "У вас есть поддержка mod_pagespeed?",
    uz: "Sizda mod_pagespeed yordami bormi?",
    en: "Do you have mod_pagespeed support?",
  },
  url: "/help/hosting/u-vas-est-podderzhka-mod-pagespeed",
  related: [],
  content: {
    ru: (
      <>
        <p>Да, на на нашем хостинге доступна поддержка mod_pagespeed через cPanel.</p>
      </>
    ),
    uz: (
      <>
        <p>Ha, bizning hosting cPanel orqali mod_pagespeed-ni qo'llab-quvvatlaydi.</p>
      </>
    ),
    en: (
      <>
        <p>Yes, our hosting provides mod_pagespeed support via cPanel.</p>
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
