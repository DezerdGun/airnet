import Container from "../container/index.jsx";
import st from "./forContract.module.scss";

export default function ForContract({ data, language }) {
  return (
    <Container>
      <div className={st.forContract}>
        <div className={st.forContract__block}>
          <h2>{data.title[language]}</h2>
          <p>{data.desc[language]}</p>
          <ul>
            {data.content.map((item) => (
              <li key={item.title}>
                <span>
                  <a href={item.link}>{item.img} {item.title[language]}</a>
                </span>{" "}
                {item.children}
              </li>
            ))}
          </ul>
        </div>
        <div className={st.forContract__img}>
          <img src={data.img} alt="Infographics img" />
        </div>
      </div>
    </Container>
  );
}
