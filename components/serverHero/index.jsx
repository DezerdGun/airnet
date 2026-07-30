import st from "./serverHero.module.scss";

const IconServer = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="12" width="18" height="8" rx="2" /><path d="M7 8v.01M7 16v.01" /></svg>
);
const IconNet = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="6" r="3" /><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /><path d="M12 9v3M12 12H5v3M12 12h7v3" /></svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10c-4-2-7-5.5-7-10V6Z" /><path d="m9 12l2 2l4-4" /></svg>
);
const IconRefresh = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14-4L4 9" /><path d="M4 13a8 8 0 0 0 14 4l2-2" /><path d="M4 5v4h4M20 19v-4h-4" /></svg>
);
const IconWin = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6.5L10.5 5.5v6H4zM12.5 5.2L20 4v7.5h-7.5zM4 12.5h6.5v6L4 17.5zM12.5 12.5H20V20l-7.5-1.2z" /></svg>
);

const DEFAULT_PILLS = [
  { icon: <IconServer />, label: { ru: "VMware виртуализация", uz: "VMware virtualizatsiya", en: "VMware virtualization" } },
  { icon: <IconNet />, label: { ru: "TAS-IX 1 Гбит/с", uz: "TAS-IX 1 Gbit/s", en: "TAS-IX 1 Gbps" } },
  { icon: <IconShield />, label: { ru: "DDoS защита", uz: "DDoS himoya", en: "DDoS protection" } },
  { icon: <IconRefresh />, label: { ru: "Возврат 7 дней", uz: "7 kun ichida qaytarish", en: "7-day refund" } },
  { icon: <IconWin />, label: { ru: "Windows / Linux", uz: "Windows / Linux", en: "Windows / Linux" } },
];

const DEFAULT_STATS = [
  { num: "99.98%", accent: true, label: { ru: "Средний uptime", uz: "O'rtacha uptime", en: "Average uptime" } },
  { num: "0.2с", label: { ru: "Загрузка сайтов", uz: "Sayt yuklanishi", en: "Site load time" } },
  { num: "18 000+", label: { ru: "Доменов", uz: "Domenlar", en: "Domains" } },
  { num: "24/7", accent: true, label: { ru: "Поддержка", uz: "Qo'llab-quvvatlash", en: "Support" } },
];

export default function ServerHero({
  language = "ru",
  title,
  eyebrow,
  sub,
  pills = DEFAULT_PILLS,
  stats = DEFAULT_STATS,
}) {
  const t = {
    eyebrow: { ru: "Дата-центр TIER III · Ташкент · TAS-IX", uz: "TIER III data-markazi · Toshkent · TAS-IX", en: "TIER III data center · Tashkent · TAS-IX" },
    sub: {
      ru: "Виртуальные серверы в Узбекистане с подключением к TAS-IX и UZ-IX. Запуск от 30 минут, масштабирование без простоев, поддержка 24/7.",
      uz: "O'zbekistonda TAS-IX va UZ-IX ulanishli virtual serverlar. 30 daqiqada ishga tushirish, to'xtovsiz masshtablash, 24/7 qo'llab-quvvatlash.",
      en: "Virtual servers in Uzbekistan connected to TAS-IX and UZ-IX. Launch in 30 minutes, seamless scaling, 24/7 support.",
    },
    choose: { ru: "Выбрать тариф", uz: "Tarifni tanlash", en: "Choose a plan" },
    build: { ru: "Собрать свой сервер", uz: "O'z serverini yig'ish", en: "Build your server" },
  };

  const tr = (v) => (typeof v === "string" ? v : v?.[language]);

  return (
    <section className={st.hero}>
      <span className={st.deco1} />
      <span className={st.deco2} />
      <span className={st.deco3} />

      <div className={st.inner}>
        <span className={st.eyebrow}>{tr(eyebrow) || t.eyebrow[language]}</span>
        <h1 className={st.title}>{tr(title)}</h1>
        <p className={st.sub}>{tr(sub) || t.sub[language]}</p>

        {pills?.length ? (
          <div className={st.pills}>
            {pills.map((p, i) => (
              <span key={i} className={st.pill}>
                {p.icon}
                {tr(p.label)}
              </span>
            ))}
          </div>
        ) : null}

        <div className={st.btns}>
          <a href="#tarif" className={st.btnMain}>{t.choose[language]}</a>
          <a href="#constructor" className={st.btnSec}>{t.build[language]}</a>
        </div>

        {stats?.length ? (
          <div className={st.stats}>
            {stats.map((s, i) => (
              <div key={i} className={st.stat}>
                <div className={`${st.stat__num} ${s.accent ? st.stat__num_accent : ""}`}>{s.num}</div>
                <div className={st.stat__label}>{tr(s.label)}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
