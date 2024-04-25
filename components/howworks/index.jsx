import { Zoom, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container/index.jsx";
import st from "./howworks.module.scss";

export default function Howworks({ language }) {
  const content = [
    "/work/vds-1.png",
    "/work/vds-2.png",
    "/work/vds-3.png",
    "/work/vds-4.png",
    "/work/vds-5.png",
  ];

  const langData = {
    title: {
      ru: "Удобно управлять и администрировать",
      uz: "Удобно управлять и администрировать",
      en: "Easy works",
    },
  };

  return (
    <div className={`${st.howworks} howworks-swiper`}>
      <Container title={langData.title[language]} clNTitle="text-center">
        <Swiper
          cssMode={true}
          modules={[Zoom, Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          loop={true}
          zoom={true}
          speed={10000}
          autoplay={false}
          breakpoints={{
            550: {
              slidesPerView: 1,
            },
            660: {
              slidesPerView: 1,
            },
            990: {
              slidesPerView: 1,
            },
            1100: {
              slidesPerView: 1,
            },
          }}
          className={st.swiper__swiper}
        >
          {content.map((item) => (
            <SwiperSlide key={item.title}>
              <div className={`${st.howworks__block} swiper-zoom-container`}>
                <img src={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
