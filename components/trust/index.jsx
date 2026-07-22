import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container/index.jsx";
import st from "./trust.module.scss";

const content = [
  "/trust/2025-1.png",
  "/trust/tmz.webp",
  "/trust/ravnaqbank.png",
  "/trust/2025-2.webp",
  "/trust/cybernet.jpg",
  "/trust/coca.webp",
  // "/trust/FED.png",
  "/trust/ipoteka.webp",
  "/trust/2025-3.png",
  "/trust/leader-school.jpg",
  "/trust/paynet.jpg",
  "/trust/pepsi.jpg",
  "/trust/2025-4.png",
  "/trust/silkroad.jpg",
  "/trust/skillbox.jpg",
  "/trust/tld.jpg",
  "/trust/2025-5.png",
  "/trust/ttz.jpg",
  "/trust/universal-bank.jpg",
  "/trust/uzb-abroad.webp",
  "/trust/2025-6.png",
  "/trust/yapona-mama.jpg",
  "/trust/reikardz.jpg",
  "/trust/lerna.jpg",
  // "/trust/PAYZE.jpg",
  // "/trust/paybox.png",
  "/trust/PAYGINE.webp",
  "/trust/2025-7.webp",
  "/trust/NADESK.png",
  // "/trust/UZDJTSU Nukus filiali.jpg",
  "/trust/terra.jpg",
  "/trust/yubor.png",
  // "/trust/napa.jpg",
  "/trust/Sehriyo.png",
];

export default function Trust({ language }) {
  const langData = {
    title: {
      ru: "Нам доверяют",
      uz: "Bizga ishonishadi",
      en: "We are trusted",
    },
  };

  return (
    <div className={`${st.trust} trust-swiper`}>
      <Container title={langData.title[language]} clNTitle="text-center">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={18}
          slidesPerView={2}
          navigation
          loop={true}
          lazy={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            550: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            660: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            990: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className={st.swiper__swiper}
        >
          {content.map((item) => (
            <SwiperSlide key={item}>
              <div className={st.trust__block}>
                <img width="130" height="auto" src={item} alt="Trust Partners Logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
