import Container from "../container";
import styles from "./availableTemplate.module.scss";
import Image from "next/image";

const AvailableTemplate = ({ title, data, language }) => {
  return (
    <section className={styles.availableTemplate}>
      <Container title={title} clNTitle="text-center">
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>
              <Image src={item.img} width={70} height={70} alt={item.title} />
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AvailableTemplate;
