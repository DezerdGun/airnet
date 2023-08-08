import { flatsIcon } from "@/utils/flatsIcon";
import Container from "../container";
import styles from "./virtualServers.module.scss";
import { timerIcon } from "@/utils/timerIcon";
import { signalIcon } from "@/utils/signalIcon";

const VirtualServers = ({ language }) => {
  const langData = {
    headTitle: {
      ru: "Bиртуальные сервера",
      uz: "Virtual serverlar",
      en: "Virtual servers",
    },
  };

  const data = [
    {
      icon: flatsIcon,
      title: { ru: "Дата-центры уровня TIER III", uz: "", en: "" },
      description: { ru: "Размещаем инфраструктуру в надежных дата-центрах России и Польши", uz: "", en: "" },
    },
    {
      icon: timerIcon,
      title: { ru: "Доступность по SLA — 99,99%", uz: "", en: "" },
      description: {
        ru: "Гарантируем высокую отказоустойчивость. Возможный простой — не более 50 минут в год",
        uz: "",
        en: "",
      },
    },
    {
      icon: signalIcon,
      title: { ru: "Круглосуточный мониторинг", uz: "", en: "" },
      description: { ru: "Следим за доступностью инфраструктуры и мгновенно реагируем на проблемы", uz: "", en: "" },
    },
  ];
  return (
    <Container title={langData.headTitle[language]}>
      <div className={styles.virtualServers}>
        {data.map((item) => (
          <div key={item.title[language]} className={styles.virtualServers__item}>
            <div className={styles.virtualServers__item__icon}>{item.icon}</div>
            <div className={styles.virtualServers__item__title}>{item.title[language]}</div>
            <p className={styles.virtualServers__item__description}>{item.description[language]}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default VirtualServers;
