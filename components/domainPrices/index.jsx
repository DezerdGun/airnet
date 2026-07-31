import { useState } from "react";
import Container from "@/components/container";
import st from "./domainPrices.module.scss";

export default function DomainPrices({ language = "ru" }) {
  const t = {
    title: {
      ru: "Цены на домены",
      uz: "Domen narxlari",
      en: "Domain pricing",
    },
    sub: {
      ru: "Регистрация и продление · Все цены указаны за 1 год",
      uz: "Ro'yxatdan o'tkazish va uzaytirish · Barcha narxlar 1 yil uchun",
      en: "Registration and renewal · All prices are per year",
    },
    perYear: {
      ru: "сум/год",
      uz: "so'm/yil",
      en: "sum/year",
    },
    popular: {
      ru: "популярный",
      uz: "mashhur",
      en: "popular",
    },
    filters: {
      all: { ru: "Все зоны", uz: "Barcha zonalar", en: "All zones" },
      uz: { ru: "Узбекистан", uz: "O'zbekiston", en: "Uzbekistan" },
      popular: { ru: "Популярные", uz: "Mashhur", en: "Popular" },
      business: { ru: "Бизнес", uz: "Biznes", en: "Business" },
    },
  };

  const zones = [
    { zone: ".uz", price: "27 000", popular: true, tags: ["uz", "popular"], cat: { ru: "Узбекистан", uz: "O'zbekiston", en: "Uzbekistan" } },
    { zone: ".com", price: "85 000", popular: true, tags: ["popular", "business"], cat: { ru: "Международный", uz: "Xalqaro", en: "International" } },
    { zone: ".ru", price: "45 000", tags: ["popular"], cat: { ru: "Россия", uz: "Rossiya", en: "Russia" } },
    { zone: ".net", price: "90 000", tags: ["popular"], cat: { ru: "Сети", uz: "Tarmoqlar", en: "Networks" } },
    { zone: ".org", price: "88 000", tags: [], cat: { ru: "Организации", uz: "Tashkilotlar", en: "Organizations" } },
    { zone: ".info", price: "72 000", tags: [], cat: { ru: "Информация", uz: "Axborot", en: "Information" } },
    { zone: ".biz", price: "95 000", tags: ["business"], cat: { ru: "Бизнес", uz: "Biznes", en: "Business" } },
    { zone: ".io", price: "290 000", tags: [], cat: { ru: "Технологии", uz: "Texnologiya", en: "Technology" } },
  ];

  const filters = [
    { key: "all", label: t.filters.all },
    { key: "uz", label: t.filters.uz },
    { key: "popular", label: t.filters.popular },
    { key: "business", label: t.filters.business },
  ];

  const [active, setActive] = useState("all");
  const visible = active === "all" ? zones : zones.filter((z) => z.tags.includes(active));

  return (
    <div className={st.section}>
      <Container>
        <div className={st.head}>
          <h2>{t.title[language]}</h2>
          <p>{t.sub[language]}</p>
        </div>

        <div className={st.filters} role="tablist">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active === f.key}
              className={`${st.filter} ${active === f.key ? st.filter_on : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label[language]}
            </button>
          ))}
        </div>

        <div className={st.grid}>
          {visible.map((z) => (
            <div key={z.zone} className={`${st.card} ${z.popular ? st.card_popular : ""}`}>
              <div className={st.card__top}>
                <span className={st.card__zoneWrap}>
                  <span className={st.card__zone}>{z.zone}</span>
                  {z.popular && <span className={st.card__badge}>{t.popular[language]}</span>}
                </span>
                <span className={st.card__price}>
                  {z.price}
                  <em>{t.perYear[language]}</em>
                </span>
              </div>
              <span className={st.card__cat}>{z.cat[language]}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
