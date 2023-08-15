import { flatsIcon } from "@/utils/flatsIcon";
import Container from "../container";
import styles from "./virtualServers.module.scss";
import { timerIcon } from "@/utils/timerIcon";
import { signalIcon } from "@/utils/signalIcon";

const VirtualServers = ({ language }) => {
  const data = [
    {
      icon: flatsIcon,
      title: { ru: "Дата-центры уровня TIER III", uz: "TIER III ma'lumotlar markazlari", en: "TIER III data centers" },
      description: {
        ru: "Размещаем инфраструктуру в надежном дата-центре Узбекистана, Ташкент",
        uz: "Biz infratuzilmani O'zbekistonning ishonchli ma'lumotlar markazi Toshkentga joylashtiramiz",
        en: "We place the infrastructure in a reliable data-center of Uzbekistan, Tashkent",
      },
    },
    {
      icon: timerIcon,
      title: { ru: "Доступность по SLA — 99,99%", uz: "SLA mavjudligi — 99,99%", en: "SLA availability — 99.99%" },
      description: {
        ru: "Гарантируем высокую отказоустойчивость. Возможный простой — не более 50 минут в год",
        uz: "Yuqori nosozlikka chidamliligini kafolatlaymiz. Mumkin bo'lgan uzilishlar - yiliga 50 daqiqadan ko'p bo'lmagan",
        en: "We guarantee high fault tolerance. Possible downtime - no more than 50 minutes per year",
      },
    },
    {
      icon: signalIcon,
      title: { ru: "Круглосуточный мониторинг", uz: "24 soatlik monitoring", en: "24-hour monitoring" },
      description: {
        ru: "Следим за доступностью инфраструктуры и мгновенно реагируем на проблемы",
        uz: "Biz infratuzilma mavjudligini kuzatib boramiz va muammolarga zudlik bilan javob beramiz",
        en: "We monitor the availability of infrastructure and instantly respond to problems",
      },
    },
  ];
  return (
    <Container>
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
