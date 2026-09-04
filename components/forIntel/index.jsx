import Container from "../container/index.jsx";
import st from "./forIntel.module.scss";

export default function ForIntel({ data, language }) {
  return (
    <Container>
      <div className={st.forIntel}>
        <div className={st.forIntel__block}>
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
        <div className={st.forIntel__img}>
          <img src={data.img} />
        </div>
      </div>
    </Container>
  );
}
