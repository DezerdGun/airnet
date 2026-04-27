import { useEffect, useState } from "react";
import Link from "next/link";
import { checkLang } from "@/utils/checkLang.js";
import { NEWS_API } from "@/app/news";

const labels = {
  title: { ru: "Новости", uz: "Yangiliklar", en: "News" },
  all:   { ru: "Все новости", uz: "Barcha yangiliklar", en: "All news" },
};

export default function FooterNews({ language = "ru" }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(NEWS_API + "?limit=3&lang=" + encodeURIComponent(language || "ru"))
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (j && j.ok && Array.isArray(j.data)) setItems(j.data); })
      .catch(() => {});
  }, [language]);

  if (!items.length) return null;

  return (
    <div className="footer-news">
      <span className="footer-news__title">{labels.title[language] || labels.title.ru}</span>
      <ul className="footer-news__list">
        {items.map((n) => (
          <li key={n.id}>
            <a href={"https://billing.airnet.uz/billing.php?do=news&id=" + n.id} target="_blank" rel="noopener noreferrer">
              <span className="footer-news__date">
                {n.date ? new Date(n.date).toLocaleDateString("ru-RU") : ""}
              </span>
              <span className="footer-news__head">{n.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <Link href={checkLang(language) + "/news"}>
        <a className="footer-news__all">{labels.all[language] || labels.all.ru} →</a>
      </Link>
      <style jsx>{`
        .footer-news { font-size: 13px; color: rgba(255,255,255,0.85); }
        .footer-news__title { display: block; font-weight: 600; color: #fff; margin-bottom: 12px; font-size: 15px; }
        .footer-news__list { list-style: none; padding: 0; margin: 0 0 10px; }
        .footer-news__list li { margin-bottom: 10px; }
        .footer-news__list a { color: rgba(255,255,255,0.85); text-decoration: none; display: block; line-height: 1.35; transition: color .15s ease; }
        .footer-news__list a:hover { color: #fff; }
        .footer-news__date { display: block; font-size: 11px; color: rgba(255,255,255,0.55); margin-bottom: 2px; }
        .footer-news__head { display: block; font-size: 13px; }
        .footer-news__all { display: inline-block; color: #fcdd44; text-decoration: none; font-size: 12px; margin-top: 4px; }
        .footer-news__all:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}
