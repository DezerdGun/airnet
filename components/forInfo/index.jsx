import Container from "../container/index.jsx";
import st from "./forInfo.module.scss";

export default function ForInfo({ data, language }) {
  return (
    <Container>
      <div className={st.forInfo}>
        <div className={st.forInfo__img}>
          <img src={data.img} />
        </div>
        <div className={st.forInfo__block}>
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
          <p>{data.desc2[language]}</p>
        </div>
      </div>
    </Container>
  );
}