import styles from "./whyCard.module.scss";

const WhyCard = ({ content, language }) => {
  return (
    <div className={styles.whyCard}>
      <span className={styles.whyCard__icon}>{content.icon}</span>
      <div>{content.icon}</div>
      <h3>{content.title[language]}</h3>
      {content.description[language]}
    </div>
  );
};

export default WhyCard;
