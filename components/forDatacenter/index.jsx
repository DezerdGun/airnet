import Container from "../container/index.jsx";
import st from "./forDatacenter.module.scss";

export default function ForDatacenter({ data, language }) {
  return (
    <Container>
      <div className={st.forDatacenter}>
        <div className={st.forDatacenter__block}>
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
        <div className={st.forDatacenter__img}>
          {/* <img src={data.img} /> */}
          <div className={st.forDatacenter__blockup}>
            <span>{data.count}</span>
            <p>{data.text[language]}</p>
          </div>
          <div className={st.forDatacenter__blockup}>
            <span>{data.count2}</span>
            <p>{data.text2[language]}</p>
          </div>
          <div className={st.forDatacenter__blockup}>
            <span>{data.count3}</span>
            <p>{data.text3[language]}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
