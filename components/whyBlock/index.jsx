import Container from "../container/index.jsx";
import WhyCard from "../whyCard";
import styles from "./whyBlock.module.scss";

export default function WhyBlock({ title, description, content, language }) {
  return (
    <div className={styles.whyBlock}>
      <Container title={title} clNTitle="text-center">
        {description && <p className="text-center">{description}</p>}
        <div className={styles.whyBlock__block}>
          {content.map((item) => (
            <WhyCard key={item.title} content={item} language={language} />
          ))}
        </div>
      </Container>
    </div>
  );
}
