import Container from "@/components/container";
import st from "./infraChannel.module.scss";

const I = {
  building: <><path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" /><path d="M12 9h6a1 1 0 0 1 1 1v11" /><path d="M3 21h18" /><path d="M7 8h.01M7 12h.01M7 16h.01M15 13h.01M15 17h.01" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-4L4 9" /><path d="M4 13a8 8 0 0 0 14 4l2-2" /><path d="M4 5v4h4M20 19v-4h-4" /></>,
  chart: <><path d="M4 19V5M4 19h16M8 16l3-4l3 2l4-6" /></>,
  pin: <><path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  headset: <><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2z" /><path d="M17 19a3 3 0 0 1-3 2h-2" /></>,
  wifi: <><path d="M5 12.5a10 10 0 0 1 14 0" /><path d="M8.5 15.8a5 5 0 0 1 7 0" /><path d="M12 19h.01" /><path d="M2 9a15 15 0 0 1 20 0" /></>,
  network: <><rect x="9" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M12 9v3M12 12H6v3M12 12h6v3" /></>,
  infinity: <><path d="M6.5 9a3.5 3.5 0 1 0 0 6c1.6 0 2.7-1.2 3.9-2.5l3.2-3C18.8 6.8 21 9 21 12s-2.2 5.2-4.4 2.5" /></>,
  check: <><path d="M5 12l5 5L20 7" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6l-6 6" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
};

const Ico = ({ n, size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {I[n]}
  </svg>
);

export default function InfraChannel({ language = "ru" }) {
  const tr = (v) => (typeof v === "string" ? v : v[language]);
  const BILLING = "https://billing.airnet.uz/billing.php";

  const t = {
    infraTitle: { ru: "Надёжная инфраструктура", uz: "Ishonchli infratuzilma", en: "Reliable infrastructure" },
    infraSub: { ru: "Корпоративный уровень для вашего бизнеса", uz: "Biznesingiz uchun korporativ daraja", en: "Enterprise-grade level for your business" },
    chBadge: { ru: "Без ограничения трафика", uz: "Trafik cheklovlarisiz", en: "No traffic limits" },
    chTitle: { ru: "Стоимость международного интернет-канала", uz: "Xalqaro internet-kanal narxi", en: "International internet channel pricing" },
    chSub: {
      ru: "Внешний трафик и трафик в сети «TAS-IX» не тарифицируется — платите только за скорость",
      uz: "Tashqi trafik va «TAS-IX» tarmog'idagi trafik tariflanmaydi — faqat tezlik uchun to'laysiz",
      en: "External traffic and «TAS-IX» network traffic is not charged — you pay only for speed",
    },
    note: {
      ru: <><strong>TAS-IX / UZ-IX 1 Гбит/с</strong> включён во все тарифы бесплатно. Внешний интернет-канал и трафик не тарифицируются — никаких скрытых доплат за объём.</>,
      uz: <><strong>TAS-IX / UZ-IX 1 Gbit/s</strong> barcha tariflarga bepul kiritilgan. Tashqi internet-kanal va trafik tariflanmaydi — hajm uchun yashirin to'lovlarsiz.</>,
      en: <><strong>TAS-IX / UZ-IX 1 Gbps</strong> is included in every plan for free. The external channel and traffic are not charged — no hidden volume fees.</>,
    },
    rowInternet: { ru: "Интернет", uz: "Internet", en: "Internet" },
    rowTasix: { ru: "TAS-IX", uz: "TAS-IX", en: "TAS-IX" },
    rowBilling: { ru: "Тарификация", uz: "Tariflash", en: "Billing" },
    unlimited: { ru: "Без ограничений", uz: "Cheksiz", en: "Unlimited" },
    included: { ru: "Включено в тариф", uz: "Tarifga kiritilgan", en: "Included in plan" },
    includedNote: { ru: "включено в тариф VDS/VPS", uz: "VDS/VPS tarifiga kiritilgan", en: "included in VDS/VPS plan" },
    free: { ru: "Бесплатно", uz: "Bepul", en: "Free" },
    choose: { ru: "Выбрать", uz: "Tanlash", en: "Choose" },
    perMonth: { ru: "в месяц · доплата к тарифу", uz: "oyiga · tarifga qo'shimcha", en: "per month · add-on to plan" },
    som: { ru: "сум", uz: "so'm", en: "som" },
    recommended: { ru: "Рекомендуем", uz: "Tavsiya etamiz", en: "Recommended" },
  };

  const infra = [
    {
      icon: "building",
      title: { ru: <>Дата-центры уровня <em>TIER III</em></>, uz: <><em>TIER III</em> darajali data-markazlar</>, en: <>Data centers of <em>TIER III</em> level</> },
      desc: {
        ru: "Размещаем инфраструктуру в надёжном дата-центре Узбекистана — Ташкент. Видеоконтроль, пожаротушение, бесперебойное питание.",
        uz: "Infratuzilmani O'zbekistonning ishonchli data-markazida — Toshkentda joylashtiramiz. Videonazorat, yong'inni o'chirish, uzluksiz quvvat.",
        en: "We host the infrastructure in a reliable data center in Uzbekistan — Tashkent. Video surveillance, fire suppression, uninterruptible power.",
      },
      stat: { icon: "pin", label: { ru: "Ташкент, Узбекистан", uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" } },
    },
    {
      icon: "refresh",
      title: { ru: <>Доступность по SLA — <em>99,99%</em></>, uz: <>SLA bo'yicha mavjudlik — <em>99,99%</em></>, en: <>SLA availability — <em>99.99%</em></> },
      desc: {
        ru: "Гарантируем высокую отказоустойчивость. Возможный простой — не более 50 минут в год. Резервирование на всех уровнях.",
        uz: "Yuqori nosozlikka chidamlilikni kafolatlaymiz. Mumkin bo'lgan uzilish — yiliga 50 daqiqadan ko'p emas. Barcha darajalarda zaxiralash.",
        en: "We guarantee high fault tolerance. Possible downtime — no more than 50 minutes per year. Redundancy at every level.",
      },
      stat: { icon: "clock", label: { ru: "Простой ≤ 50 мин/год", uz: "Uzilish ≤ 50 daq/yil", en: "Downtime ≤ 50 min/yr" } },
    },
    {
      icon: "chart",
      title: { ru: <>Круглосуточный <em>мониторинг</em></>, uz: <>Kunu-tun <em>monitoring</em></>, en: <>Round-the-clock <em>monitoring</em></> },
      desc: {
        ru: "Следим за доступностью инфраструктуры и мгновенно реагируем на проблемы. Автоматические уведомления и оперативное устранение.",
        uz: "Infratuzilma mavjudligini kuzatamiz va muammolarga zudlik bilan javob beramiz. Avtomatik bildirishnomalar va tezkor bartaraf etish.",
        en: "We monitor infrastructure availability and respond to problems instantly. Automatic alerts and prompt resolution.",
      },
      stat: { icon: "headset", label: { ru: "Поддержка 24/7", uz: "24/7 qo'llab-quvvatlash", en: "Support 24/7" } },
    },
  ];

  const cards = [
    {
      name: "Unlim 250M",
      rows: [
        { icon: "wifi", lbl: t.rowInternet, val: { ru: "250 Мбит/с", uz: "250 Mbit/s", en: "250 Mbps" } },
        { icon: "network", lbl: t.rowTasix, val: { ru: "1 Гбит/с", uz: "1 Gbit/s", en: "1 Gbps" }, highlight: true },
        { icon: "infinity", lbl: t.rowBilling, val: t.unlimited },
      ],
      free: true,
      priceNote: t.includedNote,
      btnLabel: t.included,
      btnIcon: "check",
      btnOutline: true,
    },
    {
      name: "Unlim 350M",
      recommended: true,
      rows: [
        { icon: "wifi", lbl: t.rowInternet, val: { ru: "350 Мбит/с", uz: "350 Mbit/s", en: "350 Mbps" } },
        { icon: "network", lbl: t.rowTasix, val: { ru: "1 Гбит/с", uz: "1 Gbit/s", en: "1 Gbps" }, highlight: true },
        { icon: "infinity", lbl: t.rowBilling, val: t.unlimited },
      ],
      price: "4 000 000",
      priceNote: t.perMonth,
      btnLabel: t.choose,
      btnIcon: "arrow",
      href: BILLING,
    },
  ];

  return (
    <>
      <div className={st.infra}>
        <Container>
          <div className={st.infra__head}>
            <h2>{t.infraTitle[language]}</h2>
            <p>{t.infraSub[language]}</p>
          </div>
          <div className={st.infra__grid}>
            {infra.map((c) => (
              <div key={c.icon} className={st.ic}>
                <div className={st.ic__icon}><Ico n={c.icon} /></div>
                <div className={st.ic__title}>{c.title[language]}</div>
                <div className={st.ic__desc}>{c.desc[language]}</div>
                <div className={st.ic__stat}><Ico n={c.stat.icon} size={13} />{tr(c.stat.label)}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className={st.channel}>
        <span className={`${st.channel__deco} ${st.channel__deco1}`} />
        <span className={`${st.channel__deco} ${st.channel__deco2}`} />
        <Container>
          <div className={st.ch__head}>
            <span className={st.ch__badge}>{t.chBadge[language]}</span>
            <h2>{t.chTitle[language]}</h2>
            <p>{t.chSub[language]}</p>
          </div>

          <div className={st.ch__cards}>
            {cards.map((c) => (
              <div key={c.name} className={`${st.ch__card} ${c.recommended ? st.ch__card_rec : ""}`}>
                {c.recommended && <span className={st.ch__recBadge}>⚡ {t.recommended[language]}</span>}
                <div className={st.ch__name}>{c.name}</div>
                <div className={st.ch__rows}>
                  {c.rows.map((r, i) => (
                    <div key={i} className={st.ch__row}>
                      <span className={st.ch__rowLbl}><Ico n={r.icon} size={14} />{tr(r.lbl)}</span>
                      <span className={`${st.ch__rowVal} ${r.highlight ? st.ch__rowVal_hl : ""}`}>{tr(r.val)}</span>
                    </div>
                  ))}
                </div>
                <div className={st.ch__price}>
                  {c.free ? (
                    <div className={`${st.ch__priceNum} ${st.ch__priceNum_free}`}>{t.free[language]}</div>
                  ) : (
                    <div className={st.ch__priceNum}>{c.price} <span className={st.ch__priceCur}>{t.som[language]}</span></div>
                  )}
                  <div className={st.ch__pricePer}>{tr(c.priceNote)}</div>
                </div>
                {c.href ? (
                  <a className={st.ch__btn} href={c.href} target="_blank" rel="noopener noreferrer">
                    <Ico n={c.btnIcon} size={14} />{tr(c.btnLabel)}
                  </a>
                ) : (
                  <span className={`${st.ch__btn} ${st.ch__btn_outline}`}>
                    <Ico n={c.btnIcon} size={14} />{tr(c.btnLabel)}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className={st.ch__note}>
            <Ico n="info" size={16} />
            <span>{t.note[language]}</span>
          </div>
        </Container>
      </div>
    </>
  );
}
