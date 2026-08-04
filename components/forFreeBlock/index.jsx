import Container from "../container/index.jsx";
import st from "./forFreeBlock.module.scss";

const I = {
  pin: <><path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M7.5 14h9" /></>,
  windows: <><path d="M4 6.5 10.5 5.5v6H4zM12.5 5.2 20 4v7.5h-7.5zM4 12.5h6.5v6L4 17.5zM12.5 12.5H20V20l-7.5-1.2z" /></>,
  ssh: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10c-4-2-7-5.5-7-10V6Z" /><path d="m9 12 2 2 4-4" /></>,
  check: <><path d="M5 12l5 5L20 7" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-4L4 9" /><path d="M4 13a8 8 0 0 0 14 4l2-2" /><path d="M4 5v4h4M20 19v-4h-4" /></>,
  headset: <><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2z" /><path d="M17 19a3 3 0 0 1-3 2h-2" /></>,
  list: <><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  circleCheck: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
};
const Ico = ({ n, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[n]}</svg>
);

const ORDER = "https://billing.airnet.uz/billing.php?do=tarifs&vid=vds";

export default function ForFreeBlock({ data, language = "ru" }) {
  const tr = (v) => (typeof v === "string" ? v : v?.[language]);

  const t = {
    eyebrow: { ru: "Включено бесплатно", uz: "Bepul kiritilgan", en: "Included free" },
    badge: { ru: <>Без доплат · <strong>6 функций</strong> в комплекте</>, uz: <>Qo'shimcha to'lovsiz · <strong>6 funksiya</strong> to'plamda</>, en: <>No extra fees · <strong>6 features</strong> included</> },
    tarifs: { ru: "Тарифы", uz: "Tariflar", en: "Plans" },
    order: { ru: "Заказать сервер", uz: "Server buyurtma", en: "Order server" },
    free: { ru: "Бесплатно", uz: "Bepul", en: "Free" },
    byAgree: { ru: "По согласованию", uz: "Kelishuv bo'yicha", en: "By arrangement" },
  };

  const feats = [
    { icon: "pin", cls: "green", title: { ru: "1 выделенный IP-адрес", uz: "1 ta ajratilgan IP-manzil", en: "1 dedicated IP address" }, desc: { ru: "Персональный статический IP входит в каждый тариф. Дополнительные — по запросу.", uz: "Shaxsiy statik IP har bir tarifga kiradi. Qo'shimcha — so'rov bo'yicha.", en: "A personal static IP is in every plan. Extra IPs on request." }, tag: "free" },
    { icon: "terminal", cls: "purple", title: { ru: "Панель управления VNC", uz: "VNC boshqaruv paneli", en: "VNC control panel" }, desc: { ru: "Полный доступ к консоли сервера прямо из браузера — без стороннего ПО.", uz: "Server konsoliga to'g'ridan-to'g'ri brauzerdan to'liq kirish — qo'shimcha dastursiz.", en: "Full console access right from the browser — no extra software." }, tag: "free" },
    { icon: "flask", cls: "amber", title: { ru: "Тестовый период", uz: "Sinov muddati", en: "Trial period" }, desc: { ru: "Тестовый доступ по согласованию с отделом продаж — оцените до оплаты.", uz: "Sotuv bo'limi bilan kelishilgan sinov kirishi — to'lovdan oldin baholang.", en: "Trial access by arrangement with sales — evaluate before paying." }, tag: "agree" },
    { icon: "windows", cls: "blue", title: { ru: "Установка ОС на ваш выбор", uz: "Tanlagan OT o'rnatish", en: "OS install of your choice" }, desc: { ru: "Ubuntu, Debian, CentOS, AlmaLinux, Windows Server 2016–2025 — устанавливаем бесплатно.", uz: "Ubuntu, Debian, CentOS, AlmaLinux, Windows Server 2016–2025 — bepul o'rnatamiz.", en: "Ubuntu, Debian, CentOS, AlmaLinux, Windows Server 2016–2025 — installed free." }, tag: "free" },
    { icon: "ssh", cls: "teal", title: { ru: "Полный доступ по SSH", uz: "SSH orqali to'liq kirish", en: "Full SSH access" }, desc: { ru: "Root-доступ по SSH и SCP из коробки — полный контроль без ограничений.", uz: "SSH va SCP orqali root-kirish — cheklovsiz to'liq nazorat.", en: "Root SSH & SCP out of the box — full unrestricted control." }, tag: "free" },
    { icon: "shield", cls: "rose", title: { ru: "DDoS защита", uz: "DDoS himoya", en: "DDoS protection" }, desc: { ru: "Базовая защита от DDoS-атак на уровне сети включена во все тарифы.", uz: "Tarmoq darajasidagi asosiy DDoS himoyasi barcha tariflarga kiradi.", en: "Basic network-level DDoS protection is included in all plans." }, tag: "free" },
  ];

  const bottom = [
    { icon: "clock", pre: { ru: "Запуск от", uz: "Ishga tushirish", en: "Launch in" }, val: { ru: "30 минут", uz: "30 daqiqa", en: "30 min" } },
    { icon: "shield", pre: { ru: "Uptime", uz: "Uptime", en: "Uptime" }, val: "99.98%" },
    { icon: "refresh", pre: { ru: "Возврат", uz: "Qaytarish", en: "Refund" }, val: { ru: "3 дня", uz: "3 kun", en: "3 days" } },
    { icon: "headset", pre: { ru: "Поддержка", uz: "Qo'llab-quvvatlash", en: "Support" }, val: "24/7" },
  ];

  return (
    <Container>
      <div className={st.block}>
        <div className={st.strip}>
          <span className={`${st.strip__deco} ${st.strip__deco1}`} />
          <span className={`${st.strip__deco} ${st.strip__deco2}`} />
          <div className={st.strip__left}>
            <span className={st.strip__eyebrow}>{t.eyebrow[language]}</span>
            <div className={st.strip__title}>{tr(data.title)}</div>
          </div>
          <div className={st.strip__badge}><Ico n="circleCheck" size={14} /><span>{t.badge[language]}</span></div>
        </div>

        <div className={st.grid}>
          {feats.map((f) => (
            <div key={tr(f.title)} className={st.item}>
              <span className={`${st.item__icon} ${st[`ic_${f.cls}`]}`}><Ico n={f.icon} size={22} /></span>
              <div className={st.item__title}>{f.title[language]}</div>
              <div className={st.item__desc}>{f.desc[language]}</div>
              <span className={`${st.item__tag} ${f.tag === "free" ? st.item__tag_free : st.item__tag_agree}`}>
                <Ico n={f.tag === "free" ? "check" : "clock"} size={11} />{f.tag === "free" ? t.free[language] : t.byAgree[language]}
              </span>
            </div>
          ))}
        </div>

        <div className={st.bottom}>
          <div className={st.bottom__stats}>
            {bottom.map((b, i) => (
              <span key={i} className={st.botStat}>
                <Ico n={b.icon} size={14} />{b.pre[language]} <strong>{tr(b.val)}</strong>
              </span>
            ))}
          </div>
          <div className={st.bottom__btns}>
            <a className={st.btnSec} href="/vds"><Ico n="list" size={14} />{t.tarifs[language]}</a>
            <a className={st.btnMain} href={ORDER} target="_blank" rel="noopener noreferrer"><Ico n="arrow" size={15} />{t.order[language]}</a>
          </div>
        </div>
      </div>
    </Container>
  );
}
