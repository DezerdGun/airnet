import Container from "../container/index.jsx";
import WhyCard from "../whyCard";
import styles from "./whyBlock.module.scss";

export default function WhyBlock({ title, description, content, language }) {
  return (
    <div className={styles.whyBlock}>
      <Container title={title} clNTitle="text-center">
        {/* div, а не p: часть страниц передаёт в description готовый <p>,
            и получалось невалидное <p> внутри <p>. mb-3 повторяет отступ,
            который давал абзац. */}
        {description && (
          <div className="text-center mb-3">{description}</div>
        )}
        <div className={styles.whyBlock__block}>
          {content.map((item, idx) => (
            <WhyCard key={idx} content={item} language={language} />
          ))}
        </div>
      </Container>
    </div>
  );
}
