import AvailableTemplate from "../availableTemplate";

const AvailableOS = ({ language }) => {
  const langData = {
    title: {
      ru: "Доступные ОС",
      uz: "Mavjud OS",
      en: "Available OS",
    },
  };

  const os = [
    {
      title: "Ubuntu",
      img: "/os/ubuntu.png",
    },
    {
      title: "Centos",
      img: "/os/centos.png",
    },
    {
      title: "Debian",
      img: "/os/debian.png",
    },
    {
      title: "Windows",
      img: "/os/windows.png",
    },
    {
      title: "Alma Linux",
      img: "/os/alma.png",
    },
  ];

  return <AvailableTemplate title={langData.title[language]} data={os} language={language} />;
};

export default AvailableOS;
