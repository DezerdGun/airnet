import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container/index.jsx";
import st from "./howworks.module.scss";

export default function Howworks({ language }) {
  const content = [
    "/work/vds-0.webp",
    "/work/vds-1.webp",
    "/work/vds-2.webp",
    "/work/vds-3.webp",
    "/work/vds-4.webp",
    "/work/vds-5.webp",
  ];

  const langData = {
    title: {
      ru: "Удобно управлять и администрировать",
      uz: "Boshqarish va boshqarish uchun qulay",
      en: "Easy to manage and administer",
    },
    close: { ru: "Закрыть", uz: "Yopish", en: "Close" },
  };

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % content.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + content.length) % content.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, content.length]);

  return (
    <div className={`${st.howworks} howworks-swiper`}>
      <Container title={langData.title[language]} clNTitle={`text-center ${st.howworks__title}`}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true, type: "bullets" }}
          loop={true}
          autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={650}
          breakpoints={{
            550: { slidesPerView: 2, spaceBetween: 18 },
            992: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className={st.howworks__swiper}
        >
          {content.map((item, i) => (
            <SwiperSlide key={item}>
              <button
                type="button"
                className={st.card}
                onClick={() => setOpenIndex(i)}
                aria-label="Open fullscreen"
              >
                <div className={st.card__img}>
                  <img src={item} alt="Screenshots Admin panel AIRNET" loading="lazy" />
                  <span className={st.card__overlay} aria-hidden="true" />
                  <span className={st.card__zoom}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {openIndex !== null && (
        <div
          className={st.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenIndex(null);
          }}
        >
          <button
            type="button"
            className={`${st.lightbox__nav} ${st.lightbox__nav_prev}`}
            onClick={() => setOpenIndex((i) => (i - 1 + content.length) % content.length)}
            aria-label="Previous"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={st.lightbox__stage}>
            <img
              key={openIndex}
              src={content[openIndex]}
              alt="Screenshots Admin panel AIRNET"
              className={st.lightbox__img}
            />
          </div>

          <button
            type="button"
            className={`${st.lightbox__nav} ${st.lightbox__nav_next}`}
            onClick={() => setOpenIndex((i) => (i + 1) % content.length)}
            aria-label="Next"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <button
            type="button"
            className={st.lightbox__close}
            onClick={() => setOpenIndex(null)}
            aria-label={langData.close[language]}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className={st.lightbox__counter}>
            <span className={st.lightbox__counterNum}>{String(openIndex + 1).padStart(2, "0")}</span>
            <span className={st.lightbox__counterSep} />
            <span className={st.lightbox__counterTotal}>{String(content.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}
    </div>
  );
}
