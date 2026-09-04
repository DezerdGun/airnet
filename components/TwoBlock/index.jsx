import Container from "../container/index.jsx";
import TwoCard from "../TwoCard";
import styles from "./TwoBlock.module.scss";

export default function TwoBlock({ title, description, content, language }) {
  return (
    <div className={styles.TwoBlock}>
      <Container title={title} clNTitle="text-center">
        {/* см. whyBlock: description может быть блочным элементом */}
        <div className="text-center mb-3">{description}</div>
        <div className={styles.TwoBlock__block}>
          {content.map((item, idx) => (
            <TwoCard key={idx} content={item} language={language} />
          ))}
        </div>
      </Container>
    </div>
  );
}
