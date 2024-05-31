import styles from "./TwoCard.module.scss";

const TwoCard = ({ content, language }) => {
  return (
    <div className={styles.TwoCard}>
      <span className={styles.TwoCard__icon}>{content.icon}</span>
      <div>{content.icon}</div>
      <h3>{content.title[language]}</h3>
      {content.description[language]}
    </div>
  );
};

export default TwoCard;
