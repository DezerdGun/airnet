import Container from "../container/index.jsx";
import st from "./forContract.module.scss";

export default function ForContract({ data, language }) {
  return (
    <Container>
      <div className={st.forContract}>
        <div className={st.forContract__img}>
          <img src={data.img} />
        </div>
        <div className={st.forContract__block}>
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
