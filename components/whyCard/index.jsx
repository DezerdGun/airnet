import styles from "./whyCard.module.scss";

const WhyCard = ({ content, language }) => {
  return (
    <div className={styles.whyCard}>
      <span className={styles.whyCard__icon}>{content.icon}</span>
      <div>{content.icon}</div>
      <h6>{content.title[language]}</h6>
      {content.description[language]}
    </div>
  );
};

export default WhyCard;
