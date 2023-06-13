import Container from "../container/index.jsx";
import st from "./forFreeBlock.module.scss";

export default function ForFreeBlock({ data, language }) {
  return (
    <Container>
      <div className={st.forFreeBlock}>
        <div className={st.forFreeBlock__block}>
          <h3>{data.title[language]}</h3>
          <ul>
            {data.content.map((item) => (
              <li key={item.title}>
                <span>
                  {item.img} {item.title[language]}
                </span>{" "}
                {item.children}
              </li>
            ))}
          </ul>
        </div>
        <div className={st.forFreeBlock__img}>
          <img src={data.img} />
        </div>
      </div>
    </Container>
  );
}
