import Container from "../container/index.jsx";
import st from "./forInfotxt.module.scss";

export default function ForInfoTxt({ data, language }) {
  return (
    <Container>
      <div className={st.forInfotxt}>
        <div className={st.forInfotxt__img}>
          <img src={data.img} />
        </div>
        <div className={st.forInfotxt__block}>
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