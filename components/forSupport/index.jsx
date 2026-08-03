import Container from "../container/index.jsx";
import st from "./forSupport.module.scss";

const I = {
  tg: <><path d="M22 4 2 12l6 2 2 6 3-4 5 4 4-16Z" /><path d="m8 14 9-7" /></>,
  phone: <><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6l1.5-2.5 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
};
const Ico = ({ n, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[n]}</svg>
);

const TG = "https://t.me/airnetuzb";
const PHONE = "+998712028700";
const PHONE_TXT = "+998 71 202-87-00";

// per-channel accent + short description, keyed by title (ru)
const CH_META = {
  "База знаний": { cls: "kb", desc: { ru: "100+ статей и инструкций", uz: "100+ maqola va yo'riqnoma", en: "100+ articles & guides" } },
  "Видеосправка": { cls: "video", desc: { ru: "Видеоинструкции по настройке услуг", uz: "Xizmatlarni sozlash bo'yicha videolar", en: "Video setup instructions" } },
  "Чат поддержки": { cls: "tg", desc: { ru: "Быстрые ответы — @airnetuzb", uz: "Tezkor javoblar — @airnetuzb", en: "Fast replies — @airnetuzb" }, badge: { ru: "● Live", uz: "● Live", en: "● Live" }, badgeCls: "live" },
  "Тикет-система": { cls: "ticket", desc: { ru: "Обращение в личном кабинете", uz: "Shaxsiy kabinetda murojaat", en: "Ticket in your dashboard" }, badge: { ru: "↗ 1 час", uz: "↗ 1 soat", en: "↗ 1 hr" }, badgeCls: "fast" },
};

export default function ForSupport({ data, language = "ru" }) {
  const tr = (v) => (typeof v === "string" ? v : v?.[language]);

  const t = {
    badge: { ru: "Поддержка 24/7", uz: "24/7 qo'llab-quvvatlash", en: "Support 24/7" },
    tgBtn: { ru: "Написать в Telegram", uz: "Telegramga yozish", en: "Message on Telegram" },
    call: { ru: "Позвонить", uz: "Qo'ng'iroq qilish", en: "Call" },
    online: { ru: "● Онлайн", uz: "● Onlayn", en: "● Online" },
    phoneDesc: { ru: "Звонок принимается круглосуточно", uz: "Qo'ng'iroq kunu-tun qabul qilinadi", en: "Calls accepted 24/7" },
  };
  const stats = [
    { num: "80%", lbl: { ru: "заявок за 1 час", uz: "so'rov 1 soatda", en: "requests in 1 hr" } },
    { num: "24/7", lbl: { ru: "круглосуточно", uz: "kunu-tun", en: "round the clock" } },
    { num: "100+", lbl: { ru: "статей в базе знаний", uz: "bilimlar bazasida maqola", en: "articles in KB" } },
  ];

  const channels = (data.content || []).map((item) => ({ ...item, meta: CH_META[item.title?.ru] || {} }));

  return (
    <Container>
      <div className={st.support}>
        <span className={`${st.deco} ${st.deco1}`} />
        <span className={`${st.deco} ${st.deco2}`} />
        <div className={st.support__inner}>
          <div className={st.left}>
            <span className={st.badge}>{t.badge[language]}</span>
            <h2 className={st.left__title}>{tr(data.title)}</h2>
            <div className={st.left__desc}>{tr(data.desc)}</div>
            <div className={st.stats}>
              {stats.map((s, i) => (
                <div key={i} className={st.stat}>
                  <span className={st.stat__num}>{s.num}</span>
                  <div className={st.stat__lbl}>{s.lbl[language]}</div>
                </div>
              ))}
            </div>
            <div className={st.cta}>
              <a className={st.cta__main} href={TG} target="_blank" rel="noopener noreferrer"><Ico n="tg" size={15} />{t.tgBtn[language]}</a>
              <a className={st.cta__sec} href={`tel:${PHONE}`}><Ico n="phone" size={14} />{t.call[language]}</a>
            </div>
          </div>

          <div className={st.right}>
            {channels.map((ch) => (
              <a key={tr(ch.title)} className={st.channel} href={ch.link} target="_blank" rel="noopener noreferrer">
                <span className={`${st.ch__icon} ${st[`ch__icon_${ch.meta.cls || "kb"}`] || ""}`}>{ch.img}</span>
                <span className={st.ch__body}>
                  <span className={st.ch__name}>{tr(ch.title)}</span>
                  {ch.meta.desc && <span className={st.ch__desc}>{ch.meta.desc[language]}</span>}
                </span>
                {ch.meta.badge && <span className={`${st.ch__badge} ${st[`ch__badge_${ch.meta.badgeCls}`] || ""}`}>{ch.meta.badge[language]}</span>}
                <span className={st.ch__arr}><Ico n="arrow" size={15} /></span>
              </a>
            ))}
            <a className={st.channel} href={`tel:${PHONE}`}>
              <span className={`${st.ch__icon} ${st.ch__icon_phone}`}><Ico n="phone" size={20} /></span>
              <span className={st.ch__body}>
                <span className={st.ch__name}>{PHONE_TXT}</span>
                <span className={st.ch__desc}>{t.phoneDesc[language]}</span>
              </span>
              <span className={`${st.ch__badge} ${st.ch__badge_live}`}>{t.online[language]}</span>
              <span className={st.ch__arr}><Ico n="arrow" size={15} /></span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
