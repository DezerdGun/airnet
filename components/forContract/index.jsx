import Container from "../container/index.jsx";
import st from "./forContract.module.scss";

const I = {
  building: <><path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" /><path d="M12 9h6a1 1 0 0 1 1 1v11" /><path d="M3 21h18M7 8h.01M7 12h.01M7 16h.01M15 13h.01M15 17h.01" /></>,
  send: <><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></>,
  phone: <><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6l1.5-2.5 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M19 3v18" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  headset: <><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2z" /><path d="M17 19a3 3 0 0 1-3 2h-2" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6" /></>,
  landmark: <><path d="M3 10l9-6 9 6M4 10v8M9 10v8M15 10v8M20 10v8M3 21h18" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2.4 12.3a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 8H6" /></>,
  chart: <><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></>,
};
const Ico = ({ n, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[n]}</svg>
);

const BILLING = "https://billing.airnet.uz/billing.php";
const TG = "https://t.me/airnetuzb";
const PHONE = "+998712028700";
const PHONE_TXT = "+998 71 202-87-00";

export default function ForContract({ data, language = "ru" }) {
  const tr = (v) => (typeof v === "string" ? v : v?.[language]);
  if (data.variant === "articles") return <ArticlesBlock data={data} language={language} tr={tr} />;

  const t = {
    eyebrow: { ru: "Для бизнеса", uz: "Biznes uchun", en: "For business" },
    rightHead: { ru: "AIRNET для бизнеса", uz: "AIRNET biznes uchun", en: "AIRNET for business" },
    rightSub: { ru: "Цифры, которые говорят сами за себя", uz: "O'zi haqida gapiruvchi raqamlar", en: "Numbers that speak for themselves" },
    apply: { ru: "Оставить заявку", uz: "Ariza qoldirish", en: "Leave a request" },
    reqs: { ru: "Скачать реквизиты", uz: "Rekvizitlarni yuklab olish", en: "Download details" },
    clientsLbl: { ru: "Работаем с", uz: "Biz bilan ishlaydi", en: "We work with" },
    contactLbl: { ru: "Отдел корпоративных клиентов", uz: "Korporativ mijozlar bo'limi", en: "Corporate clients dept." },
    call: { ru: "Позвонить", uz: "Qo'ng'iroq", en: "Call" },
  };
  const stats = [
    { num: "8+", suf: { ru: " лет", uz: " yil", en: " yrs" }, lbl: { ru: "На рынке IT-услуг Узбекистана", uz: "O'zbekiston IT-xizmatlari bozorida", en: "On the Uzbek IT market" } },
    { num: "2 800", lbl: { ru: "Корпоративных клиентов", uz: "Korporativ mijozlar", en: "Corporate clients" } },
    { num: "99.98%", lbl: { ru: "Uptime по SLA", uz: "SLA bo'yicha uptime", en: "Uptime by SLA" } },
    { num: "24/7", lbl: { ru: "Поддержка и сопровождение", uz: "Qo'llab-quvvatlash", en: "Support & maintenance" } },
  ];
  const clients = [
    { icon: "building", label: { ru: "Юридические лица", uz: "Yuridik shaxslar", en: "Legal entities" } },
    { icon: "users", label: { ru: "ИП", uz: "YaTT", en: "Sole traders" } },
    { icon: "landmark", label: { ru: "Бюджетные организации", uz: "Byudjet tashkilotlari", en: "Budget organizations" } },
    { icon: "cart", label: { ru: "Интернет-магазины", uz: "Onlayn-do'konlar", en: "Online stores" } },
    { icon: "chart", label: { ru: "Стартапы", uz: "Startaplar", en: "Startups" } },
  ];

  return (
    <Container>
      <div className={st.legal}>
        <div className={st.legal__left}>
          <span className={st.eyebrow}><Ico n="building" size={13} />{t.eyebrow[language]}</span>
          <div className={st.legal__heading}>
            <h2>{tr(data.title)}</h2>
            {tr(data.desc) && <p>{tr(data.desc)}</p>}
          </div>
          <div className={st.legal__feats}>
            {data.content.map((item) => (
              <a key={tr(item.title)} className={st.feat} href={item.link || "#"}>
                <span className={st.feat__icon}>{item.img}</span>
                <span className={st.feat__title}>{tr(item.title)}</span>
              </a>
            ))}
          </div>
          <div className={st.legal__ctaRow}>
            <a className={st.btnMain} href={BILLING} target="_blank" rel="noopener noreferrer"><Ico n="send" size={15} />{t.apply[language]}</a>
            <a className={st.btnSec} href="/details"><Ico n="download" size={14} />{t.reqs[language]}</a>
          </div>
        </div>

        <div className={st.legal__right}>
          <span className={`${st.rdeco} ${st.rdeco1}`} />
          <span className={`${st.rdeco} ${st.rdeco2}`} />
          <div className={st.rhead}>
            <h3>{t.rightHead[language]}</h3>
            <p>{t.rightSub[language]}</p>
          </div>
          <div className={st.rstats}>
            {stats.map((s, i) => (
              <div key={i} className={st.rstat}>
                <div className={st.rstat__num}><em>{s.num}</em>{s.suf ? s.suf[language] : ""}</div>
                <div className={st.rstat__lbl}>{s.lbl[language]}</div>
              </div>
            ))}
          </div>
          <div className={st.rclients}>
            <div className={st.rclients__lbl}>{t.clientsLbl[language]}</div>
            <div className={st.rclients__tags}>
              {clients.map((c, i) => (
                <span key={i} className={st.ctag}><Ico n={c.icon} size={13} />{c.label[language]}</span>
              ))}
            </div>
          </div>
          <div className={st.rcontact}>
            <div className={st.rcontact__info}>
              <div className={st.rcontact__lbl}>{t.contactLbl[language]}</div>
              <div className={st.rcontact__val}>{PHONE_TXT}</div>
            </div>
            <a className={st.rcontact__btn} href={`tel:${PHONE}`}><Ico n="phone" size={13} />{t.call[language]}</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ArticlesBlock({ data, language, tr }) {
  const t = {
    eyebrow: { ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge base" },
    all: { ru: "Все статьи", uz: "Barcha maqolalar", en: "All articles" },
    ctaText: { ru: <>Не нашли ответ? В базе знаний ещё <strong>100+ статей</strong> и видеоинструкций</>, uz: <>Javob topmadingizmi? Bilimlar bazasida yana <strong>100+ maqola</strong> va videoyo'riqnomalar</>, en: <>No answer? The knowledge base has <strong>100+ more articles</strong> and video guides</> },
    kb: { ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge base" },
    ask: { ru: "Спросить у поддержки", uz: "Qo'llab-quvvatlashga savol", en: "Ask support" },
  };
  const items = data.content || [];
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <Container>
      <div className={st.articles}>
        <div className={st.articles__head}>
          <div>
            <span className={st.eyebrow}><Ico n="book" size={13} />{t.eyebrow[language]}</span>
            <h2 className={st.articles__title}>{tr(data.title)}</h2>
          </div>
          <a className={st.allLink} href="/help">{t.all[language]}<Ico n="arrow" size={14} /></a>
        </div>

        <div className={st.articles__grid}>
          {featured && (
            <a className={`${st.artCard} ${st.artCard_featured}`} href={featured.link || "#"}>
              <span className={st.artCard__icon}>{featured.img}</span>
              <span className={st.artCard__title}>{tr(featured.title)}</span>
              <span className={st.artCard__arr}><Ico n="arrow" size={16} /></span>
            </a>
          )}
          {rest.map((item) => (
            <a key={tr(item.title)} className={st.artCard} href={item.link || "#"}>
              <span className={st.artCard__icon}>{item.img}</span>
              <span className={st.artCard__title}>{tr(item.title)}</span>
              <span className={st.artCard__arr}><Ico n="arrow" size={16} /></span>
            </a>
          ))}
        </div>

        <div className={st.artCta}>
          <div className={st.artCta__text}><Ico n="book" size={16} /><span>{t.ctaText[language]}</span></div>
          <div className={st.artCta__btns}>
            <a className={st.artCta__main} href="/help"><Ico n="book" size={14} />{t.kb[language]}</a>
            <a className={st.artCta__sec} href={TG} target="_blank" rel="noopener noreferrer"><Ico n="headset" size={14} />{t.ask[language]}</a>
          </div>
        </div>
      </div>
    </Container>
  );
}
