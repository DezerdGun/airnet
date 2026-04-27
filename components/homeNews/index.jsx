import { useEffect, useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/container";
import { checkLang } from "@/utils/checkLang";
import { NEWS_API } from "@/app/news";

const labels = {
  title: { ru: "Новости", uz: "Yangiliklar", en: "News" },
  intro: {
    ru: "Свежие обновления, акции и события компании AIRNET. Следите за новостями, чтобы не пропустить выгодные предложения.",
    uz: "AIRNET kompaniyasining so'nggi yangiliklari, aksiyalari va voqealari.",
    en: "Latest updates, promotions and events from AIRNET.",
  },
  all: { ru: "Смотреть все новости", uz: "Barcha yangiliklarni ko'rish", en: "See all news" },
  read: { ru: "Читать →", uz: "O'qish →", en: "Read →" },
};

export default function HomeNews({ language = "ru", apiNewsServer }) {
  const [items, setItems] = useState(Array.isArray(apiNewsServer) ? apiNewsServer : []);

  useEffect(() => {
    if (Array.isArray(apiNewsServer) && apiNewsServer.length) return;
    fetch(NEWS_API + "?limit=10&lang=" + encodeURIComponent(language || "ru"))
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (j && j.ok && Array.isArray(j.data)) setItems(j.data); })
      .catch(() => {});
  }, [language, apiNewsServer]);

  if (!items.length) return null;

  return (
    <Container title={labels.title[language]} clNTitle="text-center">
      <div className="home-news">
        <Swiper
          cssMode={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 1000000, disableOnInteraction: false }}
          breakpoints={{
            770: { slidesPerView: 3 },
            550: { slidesPerView: 2 },
          }}
          className="home-news-swiper"
        >
          <SwiperSlide>
            <div className="home-news__intro">
              <div className="home-news__intro-count">
                {items.length}+
              </div>
              <div className="home-news__intro-text">{labels.intro[language]}</div>
              <Link href={checkLang(language) + "/news"}>
                <a className="home-news__intro-btn">{labels.all[language]}</a>
              </Link>
            </div>
          </SwiperSlide>
          {items.map((n) => (
            <SwiperSlide key={n.id}>
              <article className="home-news__card">
                {n.image && (
                  <div className="home-news__img">
                    <img src={n.image} alt="" loading="lazy" />
                  </div>
                )}
                <div className="home-news__body">
                  <div className="home-news__date">
                    {n.date ? new Date(n.date).toLocaleDateString("ru-RU") : ""}
                  </div>
                  <h3 className="home-news__title">{n.title}</h3>
                  <p className="home-news__excerpt">{n.excerpt}</p>
                  <a className="home-news__link" href={"https://billing.airnet.uz/billing.php?do=news&id=" + n.id} target="_blank" rel="noopener noreferrer">{labels.read[language]}</a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .home-news .home-news-swiper { padding: 0 30px; }
        .home-news__intro {
          background: #fff;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px 22px;
          height: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          margin: 0 8px;
        }
        .home-news__intro-count { font-size: 42px; font-weight: 800; line-height: 1; margin-bottom: 14px; color: #0d5446; }
        .home-news__intro-text { font-size: 14px; line-height: 1.5; flex: 1; color: #4b5563; }
        .home-news__intro-btn {
          display: inline-block;
          margin-top: 16px;
          padding: 10px 20px;
          background: #0d5446;
          color: #fff;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          font-size: 13px;
          align-self: flex-start;
          transition: all .15s ease;
        }
        .home-news__intro-btn:hover { background: #094034; color: #fff; }
        .home-news__card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 320px;
          margin: 0 8px;
          transition: all .15s ease;
        }
        .home-news__card:hover {
          border-color: #0d5446;
          box-shadow: 0 6px 18px rgba(13, 84, 70, 0.1);
        }
        .home-news__img { width: 100%; aspect-ratio: 16 / 9; background: #f3f4f6; overflow: hidden; flex-shrink: 0; }
        .home-news__img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .home-news__body { padding: 14px 16px 16px; display: flex; flex-direction: column; flex: 1; }
        .home-news__date { font-size: 12px; color: #9ca3af; margin-bottom: 6px; }
        .home-news__title { font-size: 15px; font-weight: 600; color: #0d5446; line-height: 1.3; margin: 0 0 8px; }
        .home-news__excerpt {
          font-size: 13px;
          color: #4b5563;
          line-height: 1.5;
          flex: 1;
          margin: 0 0 12px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .home-news__link { color: #0d5446; font-size: 13px; font-weight: 500; text-decoration: none; align-self: flex-start; }
        .home-news__link:hover { text-decoration: underline; }
      `}</style>
    </Container>
  );
}
