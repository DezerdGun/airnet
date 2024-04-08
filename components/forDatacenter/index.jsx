import Container from "../container/index.jsx";
import st from "./forDatacenter.module.scss";

export default function ForDatacenter({ data, language }) {
  return (
    <Container>
      <div className={st.forDatacenter}>
        <div className={st.forDatacenter__img}>
          {/* <img src={data.img} /> */}
          <div className={st.forDatacenter__blockup}>
            <h4>{data.count}</h4>
            <p>{data.text}</p>
          </div>
          <div className={st.forDatacenter__blockup}>
            <h4>{data.count2}</h4>
            <p>{data.text2}</p>
          </div>
          <div className={st.forDatacenter__blockup}>
            <h4>{data.count3}</h4>
            <p>{data.text3}</p>
          </div>
        </div>
        <div className={st.forDatacenter__block}>
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
      </div>
    </Container>
  );
}
