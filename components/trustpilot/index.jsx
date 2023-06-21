import Container from "../container/index.jsx";
import st from "./trustpilot.module.scss";

export default function TrustPilot({ language }) {
  const langData = {
    title: {
      ru: "Отзывы клиентов",
      uz: "Mijozlarning sharhlari",
      en: "Customer Reviews",
    },
  };
  return (
    <Container
      title={langData.title[language]}
      style={{ backgroundColor: "#f8f8f8" }}
      clNTitle="text-center text-black"
    >
      <div className={st.trustpilot}>
        <div></div>
      </div>
    </Container>
  );
}
