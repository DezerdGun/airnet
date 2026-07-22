import { Zoom, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container/index.jsx";
import st from "./blogslider.module.scss";

export default function Blogslider({ language }) {
  const content = [
    "/blog/cyberpunk.jpg",
    "/blog/spacex.jpg",
    "/blog/santa.jpg",
    "/blog/vk.jpg",
  ];

  const langData = {
    title: {
      ru: "Удобно управлять и администрировать",
      uz: "Удобно управлять и администрировать",
      en: "Easy works",
    },
  };

  return (
    <div className={`${st.blogslider} blogslider-swiper`}>
      <Container title={langData.title[language]} clNTitle="text-center">
        <Swiper
          cssMode={true}
          modules={[Zoom, Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          loop={true}
          zoom={true}
          speed={10000}
          autoplay={false}
          pagination={{
            clickable: true,
          }}
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
            <SwiperSlide key={item}>
              <div className={`${st.blogslider__block} swiper-zoom-container`}>
                <img width="100%" height="auto" src={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
