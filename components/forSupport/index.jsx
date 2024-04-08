import Container from "../container/index.jsx";
import st from "./forSupport.module.scss";

export default function ForSupport({ data, language }) {
  return (
    <Container>
      <div className={st.forSupport}>
        <div className={st.forSupport__block}>
          <h2>{data.title[language]}</h2>
          <h3>{data.desc[language]}</h3>
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
        <div className={st.forSupport__img}>
          <img src={data.img} />
        </div>
      </div>
    </Container>
  );
}
