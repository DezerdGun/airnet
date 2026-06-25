import { useCallback, useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container/index.jsx";
import st from "./howworks.module.scss";

function TiltCard({ src, alt, onClick }) {
  const cardRef = useRef(null);

  const handleMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const ry = (px - 0.5) * 18;
    const rx = (0.5 - py) * 14;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  }, []);

  const handleLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <button
      ref={cardRef}
      type="button"
      className={st.card}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      aria-label="Open fullscreen"
    >
      <div className={st.card__inner}>
        <img src={src} alt={alt} loading="lazy" />
        <span className={st.card__shine} aria-hidden="true" />
        <span className={st.card__zoom}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </div>
    </button>
  );
}

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
      <Container title={langData.title[language]} clNTitle="text-center">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={700}
          breakpoints={{
            550: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className={st.howworks__swiper}
        >
          {content.map((item, i) => (
            <SwiperSlide key={item}>
              <TiltCard
                src={item}
                alt="Screenshots Admin panel AIRNET"
                onClick={() => setOpenIndex(i)}
              />
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
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            key={openIndex}
            src={content[openIndex]}
            alt="Screenshots Admin panel AIRNET"
            className={st.lightbox__img}
          />

          <button
            type="button"
            className={`${st.lightbox__nav} ${st.lightbox__nav_next}`}
            onClick={() => setOpenIndex((i) => (i + 1) % content.length)}
            aria-label="Next"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <button
            type="button"
            className={st.lightbox__close}
            onClick={() => setOpenIndex(null)}
            aria-label={langData.close[language]}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className={st.lightbox__counter}>
            {openIndex + 1} / {content.length}
          </div>
        </div>
      )}
    </div>
  );
}
