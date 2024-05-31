import Container from "../container/index.jsx";
import TwoCard from "../TwoCard";
import styles from "./TwoBlock.module.scss";

export default function TwoBlock({ title, description, content, language }) {
  return (
    <div className={styles.TwoBlock}>
      <Container title={title} clNTitle="text-center">
        <p className="text-center">{description}</p>
        <div className={styles.TwoBlock__block}>
          {content.map((item) => (
            <TwoCard key={item.title} content={item} language={language} />
          ))}
        </div>
      </Container>
    </div>
  );
}
