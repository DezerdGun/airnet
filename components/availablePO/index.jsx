import AvailableTemplate from "../availableTemplate";

const AvailablePO = ({ language }) => {
  const langData = {
    title: {
      ru: "Шаблоны ПО",
      uz: "Dasturiy ta'minot shablonlar",
      en: "Software Templates",
    },
  };

  const po = [
    {
      title: "ISPmanager 6",
      img: "/po/ispmanager_logo.svg",
    },
    {
      title: "Bitrix",
      img: "/po/bitrix.png",
    },
    {
      title: "LAMP",
      img: "/po/lamp.png",
    },
    {
      title: "Redmine",
      img: "/po/redmine.png",
    },
    {
      title: "Joomla",
      img: "/po/joomla.png",
    },
    {
      title: "Drupal",
      img: "/po/drupal.png",
    },
    {
      title: "NextCloud",
      img: "/po/nextcloud.png",
    },
    {
      title: "WordPress",
      img: "/po/wordpress.png",
    },
  ];

  return <AvailableTemplate title={langData.title[language]} data={po} language={language} />;
};

export default AvailablePO;
