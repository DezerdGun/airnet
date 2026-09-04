import Container from "../container/index.jsx";
import st from "./forIntelTwo.module.scss";

export default function forIntelTwo({ data, language }) {
  return (
    <Container>
      <div className={st.forIntelTwo}>
        <div className={st.forIntelTwo__img}>
          <img src={data.img} />
        </div>
        <div className={st.forIntelTwo__block}>
          <h2>{data.title[language]}</h2>
          <p>{data.desc[language]}</p>
          <ul>
            {data.content.map((item, idx) => (
              <li key={idx}>
                <span>
                  {item.img} {item.title[language]}
                </span>{" "}
                {item.children}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
