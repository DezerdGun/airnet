import Container from "@/components/container";
import st from "./manageFeatures.module.scss";

const I = {
  bolt: <><path d="M13 3v7h6l-8 11v-7H5l8-11" /></>,
  sliders: <><path d="M4 6h8m4 0h4M4 12h4m4 0h8M4 18h10m4 0h2M12 4v4M8 10v4M14 16v4" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9l3 3l-3 3M13 15h4" /></>,
  headset: <><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2zM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2z" /><path d="M17 19a3 3 0 0 1-3 2h-2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  expand: <><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10c-4-2-7-5.5-7-10V6Z" /><path d="m9 12l2 2l4-4" /></>,
  clock24: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2.5 2.5" /></>,
  panel: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-4L4 9" /><path d="M4 13a8 8 0 0 0 14 4l2-2" /><path d="M4 5v4h4M20 19v-4h-4" /></>,
  rotate: <><path d="M4 12a8 8 0 1 1 2.3 5.6" /><path d="M4 20v-4h4" /></>,
  os: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
  camera: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7l1.5-2h3L15 7" /><circle cx="12" cy="13" r="3" /></>,
  chart: <><path d="M4 19V5M4 19h16M8 16l3-4l3 2l4-6" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6l-6 6" /></>,
};

const Ico = ({ n, size = 22, cls }) => (
  <svg className={cls} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {I[n]}
  </svg>
);

export default function ManageFeatures({ language = "ru" }) {
  const t = {
    eyebrow: { ru: "Управление VPS", uz: "VPS boshqaruvi", en: "VPS management" },
    title: { ru: "Простое и быстрое управление сервером", uz: "Serverni sodda va tez boshqarish", en: "Simple and fast server management" },
    sub: {
      ru: "Активация занимает считанные минуты, администрирование не требует особых знаний — всё доступно из одной панели.",
      uz: "Faollashtirish bir necha daqiqa oladi, boshqaruv maxsus bilim talab qilmaydi — hammasi bitta paneldan.",
      en: "Activation takes minutes, administration requires no special skills — everything from a single panel.",
    },
    wideTitle: { ru: "Все функции — в одной панели", uz: "Barcha funksiyalar — bitta panelda", en: "All features — in one panel" },
    wideDesc: {
      ru: "Все функции собраны в одной панели управления: перезагрузка, сброс настроек, установка ОС, снимки и мониторинг — без технических знаний.",
      uz: "Barcha funksiyalar bitta boshqaruv panelida: qayta yuklash, sozlamalarni tiklash, OT o'rnatish, snapshotlar va monitoring — texnik bilimsiz.",
      en: "All features live in one control panel: reboot, reset, OS install, snapshots and monitoring — no technical skills needed.",
    },
    wideBtn: { ru: "Войти в панель", uz: "Panelga kirish", en: "Open panel" },
  };

  const features = [
    {
      icon: "bolt",
      title: { ru: "Активация за минуты", uz: "Bir necha daqiqada faollashtirish", en: "Activated in minutes" },
      desc: {
        ru: "Активация виртуального сервера занимает считанные минуты. При необходимости можно скорректировать производительность, добавить процессоры, память или задействовать новые SSD — без переноса данных.",
        uz: "Virtual serverni faollashtirish bir necha daqiqa oladi. Kerak bo'lsa, unumdorlikni o'zgartirish, protsessor, xotira yoki yangi SSD qo'shish mumkin — ma'lumotlarni ko'chirmasdan.",
        en: "Activating a virtual server takes minutes. When needed you can adjust performance, add CPUs, RAM or new SSDs — without migrating data.",
      },
      tag: { icon: "clock", label: { ru: "Запуск от 30 минут", uz: "30 daqiqada", en: "Launch in 30 min" } },
    },
    {
      icon: "sliders",
      title: { ru: "Гибкая масштабируемость", uz: "Moslashuvchan masshtablash", en: "Flexible scaling" },
      desc: {
        ru: "Гибкие возможности настройки VPS — ресурсы масштабируются без миграций и простоев. Изменение конфигурации доступно в любой момент через личный кабинет.",
        uz: "VPS-ni moslashuvchan sozlash — resurslar ko'chirish va to'xtashsiz masshtablanadi. Konfiguratsiyani istalgan vaqtda shaxsiy kabinetdan o'zgartirish mumkin.",
        en: "Flexible VPS configuration — resources scale with no migrations or downtime. Change the setup anytime from your dashboard.",
      },
      tag: { icon: "expand", label: { ru: "До 192 CPU · 512 ГБ RAM", uz: "192 CPU · 512 GB RAM gacha", en: "Up to 192 CPU · 512 GB RAM" } },
    },
    {
      icon: "terminal",
      title: { ru: "Управление по VNC", uz: "VNC orqali boshqaruv", en: "VNC management" },
      desc: {
        ru: "Управление сервером осуществляется по VNC-протоколам — максимально безопасным и быстрым способом. Полный доступ к консоли прямо из браузера без дополнительного ПО.",
        uz: "Server VNC protokollari orqali boshqariladi — eng xavfsiz va tez usul. Konsolga to'liq kirish to'g'ridan-to'g'ri brauzerdan, qo'shimcha dastursiz.",
        en: "The server is managed over VNC protocols — the most secure and fast way. Full console access right from the browser, no extra software.",
      },
      tag: { icon: "shield", label: { ru: "Безопасный доступ", uz: "Xavfsiz kirish", en: "Secure access" } },
    },
    {
      icon: "headset",
      title: { ru: "Поддержка 24/7", uz: "24/7 qo'llab-quvvatlash", en: "Support 24/7" },
      desc: {
        ru: "При возникновении проблем на помощь готовы прийти специалисты службы поддержки, доступной в круглосуточном режиме. Телефон, Telegram, тикет-система.",
        uz: "Muammo yuzaga kelsa, kunu-tun ishlaydigan qo'llab-quvvatlash mutaxassislari yordam beradi. Telefon, Telegram, tiket-tizim.",
        en: "If problems arise, our round-the-clock support team is ready to help. Phone, Telegram, ticket system.",
      },
      tag: { icon: "clock24", label: { ru: "Ответ за 1 час", uz: "1 soatda javob", en: "Reply within 1 hour" } },
    },
  ];

  const chips = [
    { icon: "refresh", label: { ru: "Перезагрузка", uz: "Qayta yuklash", en: "Reboot" } },
    { icon: "rotate", label: { ru: "Сброс настроек", uz: "Sozlamalarni tiklash", en: "Reset" } },
    { icon: "os", label: { ru: "Смена ОС", uz: "OT almashtirish", en: "OS change" } },
    { icon: "camera", label: { ru: "Снимки", uz: "Snapshotlar", en: "Snapshots" } },
    { icon: "chart", label: { ru: "Мониторинг", uz: "Monitoring", en: "Monitoring" } },
  ];

  const stats = [
    { num: "30 мин", label: { ru: "Среднее время запуска", uz: "O'rtacha ishga tushirish", en: "Average launch time" } },
    { num: "99.98%", label: { ru: "Uptime по SLA", uz: "SLA bo'yicha uptime", en: "Uptime by SLA" } },
    { num: "192", label: { ru: "Максимум CPU", uz: "Maksimal CPU", en: "Max CPU" } },
    { num: "24/7", label: { ru: "Поддержка клиентов", uz: "Mijozlarni qo'llab-quvvatlash", en: "Customer support" } },
  ];

  const tr = (v) => (typeof v === "string" ? v : v[language]);
  const BILLING = "https://billing.airnet.uz/billing.php";

  return (
    <div className={st.section}>
      <Container>
        <div className={st.head}>
          <span className={st.eyebrow}><Ico n="os" size={13} />{t.eyebrow[language]}</span>
          <h2>{t.title[language]}</h2>
          <p>{t.sub[language]}</p>
        </div>

        <div className={st.grid}>
          {features.map((f) => (
            <div key={tr(f.title)} className={st.card}>
              <span className={st.card__icon}><Ico n={f.icon} /></span>
              <div className={st.card__body}>
                <div className={st.card__title}>{tr(f.title)}</div>
                <p className={st.card__desc}>{tr(f.desc)}</p>
                <span className={st.card__tag}><Ico n={f.tag.icon} size={12} />{tr(f.tag.label)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={st.wide}>
          <div className={st.wide__left}>
            <div className={st.wide__title}><Ico n="panel" size={20} />{t.wideTitle[language]}</div>
            <p className={st.wide__desc}>{t.wideDesc[language]}</p>
            <div className={st.wide__chips}>
              {chips.map((c) => (
                <span key={tr(c.label)} className={st.wide__chip}><Ico n={c.icon} size={12} />{tr(c.label)}</span>
              ))}
            </div>
          </div>
          <a className={st.wide__btn} href={BILLING} target="_blank" rel="noopener noreferrer">
            {t.wideBtn[language]}
            <Ico n="arrow" size={16} />
          </a>
        </div>

        <div className={st.stats}>
          {stats.map((s) => (
            <div key={tr(s.label)} className={st.stat}>
              <span className={st.stat__num}>{s.num}</span>
              <div className={st.stat__label}>{tr(s.label)}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
