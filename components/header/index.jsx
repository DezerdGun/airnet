import { changeLang } from "@/utils/changeLang.js";
import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import { useRouter } from "next/router.js";
import { useEffect, useRef, useState } from "react";
import { LINKS } from "../requirements";
import { LOGO } from "../utils";
import st from "./header.module.scss";
import HeaderMob from "./headerMob";
import Icon from "./icons.jsx";

export default function Header({ language }) {
  const menu = [
      {
        title: { ru: "Хостинг", uz: "Xosting", en: "Hosting" },
        link: LINKS.HOSTING,
        icon: "cloud",
      },
      {
        title: {
          ru: "VPS и VDS серверы",
          uz: "VPS va VDS serverlari",
          en: "VPS and VDS servers",
        },
        link: LINKS.OPTIMAL_VDS,
        icon: "server",
        mega: true,
        children: [
          {
            title: {
              ru: "Оптимальные серверы",
              uz: "Optimal serverlar",
              en: "Optimal Servers",
            },
            desc: {
              ru: "Готовые тарифы под типовые задачи",
              uz: "Odatiy vazifalar uchun tayyor tariflar",
              en: "Ready-made plans for typical workloads",
            },
            link: LINKS.OPTIMAL_VDS,
            icon: "server2",
          },
          {
            title: {
              ru: "Конструктор серверов",
              uz: "Server quruvchi",
              en: "Custom Server",
            },
            desc: {
              ru: "Соберите конфигурацию под свои задачи",
              uz: "Konfiguratsiyani o'zingiz yig'ing",
              en: "Build a configuration for your needs",
            },
            link: LINKS.CUSTOM_VDS,
            icon: "sliders",
          },
          {
            title: {
              ru: "Аренда Игровых серверов",
              uz: "O'yin serverlar ijaraga",
              en: "Game servers",
            },
            desc: {
              ru: "Низкий пинг, стабильная связь",
              uz: "Past ping, barqaror aloqa",
              en: "Low ping, stable connection",
            },
            link: LINKS.GAME_VDS,
            icon: "gamepad",
          },
          {
            title: {
              ru: "Аренда серверов intel",
              uz: "Intel server ijarasi",
              en: "Intel servers",
            },
            desc: {
              ru: "Высокопроизводительные процессоры",
              uz: "Yuqori unumdor protsessorlar",
              en: "High-performance processors",
            },
            link: LINKS.INTEL_VDS,
            icon: "cpu",
          },
          {
            title: {
              ru: "Аренда сервера Linux",
              uz: "Linux server ijarasi",
              en: "Linux servers",
            },
            desc: {
              ru: "Ubuntu, Debian, CentOS, AlmaLinux",
              uz: "Ubuntu, Debian, CentOS, AlmaLinux",
              en: "Ubuntu, Debian, CentOS, AlmaLinux",
            },
            link: LINKS.LINUX_VDS,
            icon: "linux",
          },
          {
            title: {
              ru: "Аренда сервера Windows",
              uz: "Windows server ijarasi",
              en: "Windows servers",
            },
            desc: {
              ru: "Windows Server 2016–2025",
              uz: "Windows Server 2016–2025",
              en: "Windows Server 2016–2025",
            },
            link: LINKS.WINDOWS_VDS,
            icon: "windows",
          },
          {
            title: {
              ru: "Аренда сервера для Битрикс24 и 1С-Битрикс",
              uz: "Битрикс24 и 1С-Битрикс server ijarasi",
              en: "Битрикс24 & 1С-Битрикс servers",
            },
            desc: {
              ru: "Оптимизировано под CRM и интернет-магазин",
              uz: "CRM va onlayn-do'kon uchun optimallashtirilgan",
              en: "Tuned for CRM and online stores",
            },
            link: LINKS.BITRIX_VDS,
            icon: "bitrix",
          },
          {
            title: {
              ru: "Выделенные серверы",
              uz: "Ajratilgan serverlar",
              en: "Dedicated servers",
            },
            desc: {
              ru: "Dedicated — полная мощность для вас",
              uz: "Dedicated — to'liq quvvat sizga",
              en: "Dedicated — full power for you",
            },
            link: LINKS.SERVERS,
            icon: "bolt",
          },
        ],
        tags: [
          { icon: "clock", label: { ru: "Запуск от 30 мин", uz: "30 daqiqada ishga tushirish", en: "Launch in 30 min" } },
          { icon: "shield", label: { ru: "Uptime 99.98%", uz: "Uptime 99.98%", en: "Uptime 99.98%" } },
          { icon: "refresh", label: { ru: "Возврат 7 дней", uz: "7 kun ichida qaytarish", en: "7-day refund" } },
          { icon: "network", label: { ru: "TAS-IX 1 Гбит/с", uz: "TAS-IX 1 Gbit/s", en: "TAS-IX 1 Gbps" } },
        ],
      },
      {
        title: { ru: "Серверы", uz: "Serverlar", en: "Servers" },
        link: LINKS.SERVERS,
        icon: "database",
      },
      {
        title: { ru: "Домены", uz: "Domenlar", en: "Domains" },
        link: LINKS.DOMAINS,
        icon: "world",
        mega: true,
        children: [
          {
            title: { ru: "Whois", uz: "Whois", en: "Whois" },
            desc: {
              ru: "Проверить, свободен ли домен",
              uz: "Domen bo'shligini tekshirish",
              en: "Check if a domain is available",
            },
            link: LINKS.DOMAINS_WHOIS,
            icon: "search",
          },
          {
            title: { ru: "Доменная зона .UZ", uz: ".UZ domen zonasi", en: "The .UZ domain zone" },
            desc: {
              ru: "Национальная зона Узбекистана",
              uz: "O'zbekistonning milliy zonasi",
              en: "National zone of Uzbekistan",
            },
            link: LINKS.DOMAINS,
            icon: "pin",
          },
          {
            title: { ru: "Доменная зона .ru", uz: ".ru domen zonasi", en: "The .ru domain zone" },
            desc: {
              ru: "Популярная зона рунета",
              uz: "Runetning mashhur zonasi",
              en: "Popular zone of the Russian web",
            },
            link: LINKS.DOMAINS_RU,
            icon: "world",
          },
          {
            title: { ru: "Доменная зона .com", uz: ".com domen zonasi", en: "The .com domain zone" },
            desc: {
              ru: "Международная коммерческая зона",
              uz: "Xalqaro tijorat zonasi",
              en: "International commercial zone",
            },
            link: LINKS.DOMAINS_COM,
            icon: "store",
          },
          {
            title: { ru: "Доменная зона .net", uz: ".net domen zonasi", en: "The .net domain zone" },
            desc: {
              ru: "Для сетевых и IT-проектов",
              uz: "Tarmoq va IT loyihalar uchun",
              en: "For network and IT projects",
            },
            link: LINKS.DOMAINS_NET,
            icon: "network",
          },
          {
            title: { ru: "Доменная зона .org", uz: ".org domen zonasi", en: "The .org domain zone" },
            desc: {
              ru: "Для организаций и сообществ",
              uz: "Tashkilot va hamjamiyatlar uchun",
              en: "For organizations and communities",
            },
            link: LINKS.DOMAINS_ORG,
            icon: "building",
          },
          {
            title: { ru: "Доменная зона .in", uz: ".in domen zonasi", en: "The .in domain zone" },
            desc: {
              ru: "Короткая международная зона",
              uz: "Qisqa xalqaro zona",
              en: "Short international zone",
            },
            link: LINKS.DOMAINS_IN,
            icon: "world",
          },
          {
            title: { ru: "Доменная зона .su", uz: ".su domen zonasi", en: "The .su domain zone" },
            desc: {
              ru: "Много свободных коротких имён",
              uz: "Ko'p bo'sh qisqa nomlar",
              en: "Plenty of short names still free",
            },
            link: LINKS.DOMAINS_SU,
            icon: "world",
          },
          {
            title: { ru: "Все доменные зоны", uz: "Barcha domen zonalari", en: "All domain zones" },
            desc: {
              ru: "Полный список зон и цены",
              uz: "Zonalarning to'liq ro'yxati va narxlar",
              en: "Full list of zones and pricing",
            },
            link: LINKS.DOMAINS,
            icon: "list",
          },
        ],
        tags: [
          { icon: "clock", label: { ru: "Регистрация за минуты", uz: "Bir necha daqiqada ro'yxatdan o'tkazish", en: "Registered in minutes" } },
          { icon: "dns", label: { ru: "Управление DNS", uz: "DNS boshqaruvi", en: "DNS management" } },
          { icon: "gift", label: { ru: "Домен в подарок к хостингу", uz: "Xosting bilan domen sovg'a", en: "Free domain with hosting" } },
          { icon: "headset", label: { ru: "Поддержка 24/7", uz: "24/7 qo'llab-quvvatlash", en: "Support 24/7" } },
        ],
      },
      {
        title: { ru: "SSL", uz: "SSL", en: "SSL" },
        link: LINKS.SSL,
        icon: "lock",
      },
      {
        title: { ru: "Почта", uz: "Pochta", en: "E-mail" },
        link: LINKS.EMAIL,
        icon: "mail",
      },
      {
        title: { ru: "О сервисе", uz: "Xizmat haqida", en: "About service" },
        link: LINKS.ABOUT,
        className: "sec",
        children: [
          {
            title: { ru: "Оплата", uz: "To'lov", en: "Payment" },
            link: LINKS.PAYMENT,
            icon: "card",
          },
          {
            title: { ru: "Отзывы", uz: "Sharhlar", en: "Reviews" },
            link: LINKS.REVIEWS,
            icon: "star",
          },
          {
            title: { ru: "Наши лицензии", uz: "Litsenziyalar", en: "Licenses" },
            link: LINKS.LICENSE,
            icon: "certificate",
          },
          {
            title: { ru: "О компании", uz: "Kompaniya haqida", en: "About company" },
            link: LINKS.ABOUT,
            icon: "building",
          },
        ],
      },
    ],
    [isOpen, setIsOpen] = useState(false),
    [supportOpen, setSupportOpen] = useState(false),
    supportRef = useRef(null),
    router = useRouter();

  useEffect(() => {
    if (!supportOpen) return;

    const onPointerDown = (e) => {
      if (supportRef.current && !supportRef.current.contains(e.target)) {
        setSupportOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSupportOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [supportOpen]);

  const langData = {
    supportBtn: {
      ru: "Поддержка",
      uz: "Qo'llab-quvvatlash",
      en: "Support",
    },
    mTickets: {
      ru: "Мои тикеты",
      uz: "Mening tiketlarim",
      en: "My tickets",
    },
    mTicketsD: {
      ru: "Открыть переписку с поддержкой",
      uz: "Qo'llab-quvvatlash bilan yozishma",
      en: "Open support conversation",
    },
    mKb: {
      ru: "База знаний",
      uz: "Bilimlar bazasi",
      en: "Knowledge base",
    },
    mKbD: {
      ru: "Документация и инструкции",
      uz: "Hujjatlar va yo'riqnomalar",
      en: "Docs and guides",
    },
    mContacts: {
      ru: "Контакты",
      uz: "Kontaktlar",
      en: "Contacts",
    },
    mContactsD: {
      ru: "Адреса офисов и реквизиты",
      uz: "Ofis manzillari va rekvizitlar",
      en: "Offices and company details",
    },
    mCallUs: {
      ru: "Свяжитесь с нами",
      uz: "Biz bilan bog'laning",
      en: "Contact us",
    },
    mTgTech: {
      ru: "Telegram, техническая поддержка",
      uz: "Telegram, texnik qo'llab-quvvatlash",
      en: "Telegram, technical support",
    },
    supportSales: {
      ru: "Отдел продаж, договора",
      uz: "Savdo bo'limi, shartnomalar",
      en: "Sales, contracts",
    },
    supportTech: {
      ru: "Техническая поддержка",
      uz: "Texnik qo'llab-quvvatlash",
      en: "Technical support",
    },
    supportStatus: {
      ru: "Все сервисы работают",
      uz: "Barcha xizmatlar ishlayapti",
      en: "All systems operational",
    },
    enter: {
      ru: "Вход и регистрация",
      uz: "Kirish va ro'yxatdan o'tish",
      en: "Login and registration",
    },
    tagline: {
      ru: "Хостинг провайдер",
      uz: "Xosting provayder",
      en: "Hosting provider",
    },
    support: {
      ru: "Поддержка 24/7",
      uz: "24/7 qo'llab-quvvatlash",
      en: "Support 24/7",
    },
  };

  const realPath = (router.asPath || "/").split("?")[0].split("#")[0];
  const isActive = (link) => {
    const clean = (link || "").split("#")[0];
    if (!clean || clean === "/" || clean.startsWith("tel:") || clean.startsWith("http")) return false;
    return realPath === clean || realPath.startsWith(clean + "/") || realPath.endsWith(clean);
  };

  return (
    <header className={st.header}>
      {}
      <div className={st.topbar}>
        <div className={st.topbar__inner}>
          <div className={st.topbar__left}>
            <a className={st.topbar__item} href={LINKS.PHONE2}>
              <Icon name="phone" size={13} />
              +998 71 202-87-00
            </a>
            <span className={st.topbar__sep}>|</span>
            <a className={st.topbar__item} href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer">
              <Icon name="telegram" size={13} />
              @airnetuzb
            </a>
            <span className={st.topbar__sep}>|</span>
            <span className={st.topbar__item}>
              <Icon name="clock" size={13} />
              {langData.support[language]}
            </span>
          </div>
          <div className={st.topbar__right}>
            <LangBlock language={language} router={router} />
          </div>
        </div>
      </div>

      {}
      <nav className={st.nav} role="navigation" aria-label={langData.tagline[language]}>
        <div className={st.nav__inner}>
          <Link href={checkLang(language) + LINKS.HOME}>
            <a className={st.logo} aria-label="AIRNET">
              {LOGO}
            </a>
          </Link>

          <div className={st.nav__menu}>
            {menu.map((item) => (
              <div key={item.title.ru} className={st.nav__item}>
                <Link href={checkLang(language) + item.link}>
                  <a
                    className={`${st.nav__link} ${isActive(item.link) ? st.nav__link_active : ""}`}
                    onClick={() => setIsOpen(false)}
                    aria-haspopup={item.children ? "true" : undefined}
                  >
                    {item.icon && <Icon name={item.icon} size={15} className={st.nav__link__icon} />}
                    {item.title[language]}
                    {item.children && <Icon name="chevron" size={13} className={st.nav__link__arr} />}
                  </a>
                </Link>

                {item.children &&
                  (item.mega ? (
                    <MegaMenu item={item} language={language} />
                  ) : (
                    <DropMenu item={item} language={language} />
                  ))}
              </div>
            ))}
          </div>

          <div className={st.nav__right}>
            <div className={st.support} ref={supportRef}>
              <button
                type="button"
                className={`${st.supportBtn} ${supportOpen ? st.supportBtn_on : ""}`}
                aria-expanded={supportOpen}
                aria-haspopup="true"
                onClick={() => setSupportOpen((v) => !v)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                {langData.supportBtn[language]}
                <span className={st.supportBtn__arw}>▾</span>
              </button>

              {supportOpen && (
                <div className={st.supportMenu} role="menu" onClick={() => setSupportOpen(false)}>
                  <a
                    className={st.supportMenu__row}
                    href={LINKS.BILLING + "?do=tickets"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={st.supportMenu__ico}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
                        <path d="M9 6v2M9 11v2M9 16v2" />
                      </svg>
                    </span>
                    <span className={st.supportMenu__txt}>
                      <b>{langData.mTickets[language]}</b>
                      <small>{langData.mTicketsD[language]}</small>
                    </span>
                  </a>

                  <Link href={checkLang(language) + "/help"}>
                    <a className={st.supportMenu__row}>
                      <span className={st.supportMenu__ico}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 17.5z" />
                          <path d="M8 7h8M8 11h6" />
                        </svg>
                      </span>
                      <span className={st.supportMenu__txt}>
                        <b>{langData.mKb[language]}</b>
                        <small>{langData.mKbD[language]}</small>
                      </span>
                    </a>
                  </Link>

                  <Link href={checkLang(language) + "/contacts"}>
                    <a className={st.supportMenu__row}>
                      <span className={st.supportMenu__ico}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 11v5M12 8h.01" />
                        </svg>
                      </span>
                      <span className={st.supportMenu__txt}>
                        <b>{langData.mContacts[language]}</b>
                        <small>{langData.mContactsD[language]}</small>
                      </span>
                    </a>
                  </Link>

                  <div className={st.supportMenu__label}>
                    {langData.mCallUs[language]}
                  </div>

                  <a className={st.supportMenu__row} href="tel:+998712028700">
                    <span className={st.supportMenu__ico}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                      </svg>
                    </span>
                    <span className={st.supportMenu__txt}>
                      <b>+998 (71) 202-87-00</b>
                      <small>{langData.supportSales[language]}</small>
                    </span>
                  </a>

                  <a
                    className={st.supportMenu__row}
                    href={LINKS.TELEGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={st.supportMenu__ico}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 3 2 10.5l6 2.3L20 6l-9 8.4V21l3.4-4.2 5 3.7z" />
                      </svg>
                    </span>
                    <span className={st.supportMenu__txt}>
                      <b>+998 (90) 324-87-00</b>
                      <small>{langData.mTgTech[language]}</small>
                    </span>
                  </a>

                  <a className={st.supportMenu__row} href="tel:+998903243080">
                    <span className={st.supportMenu__ico}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                        <path d="M11 18h2" />
                      </svg>
                    </span>
                    <span className={st.supportMenu__txt}>
                      <b>+998 (90) 324-30-80</b>
                      <small>{langData.supportTech[language]}</small>
                    </span>
                  </a>

                  <div className={st.supportMenu__status}>
                    <i />
                    {langData.supportStatus[language]}
                  </div>
                </div>
              )}
            </div>
            <a
              className={st.loginBtn}
              href={LINKS.BILLING}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="lock" size={15} />
              {langData.enter[language]}
            </a>
            <button
              className={`${st.burger} ${isOpen ? st.burger_active : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <HeaderMob isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} language={language} router={router} />
    </header>
  );
}
const MegaMenu = ({ item, language }) => (
  <div className={st.mega} role="menu">
    <div className={st.mega__grid}>
      {item.children.map((child) => (
        <Link key={child.title.ru} href={checkLang(language) + child.link}>
          <a className={st.mega__item} role="menuitem">
            <span className={st.mega__icon}>
              <Icon name={child.icon} size={16} />
            </span>
            <span className={st.mega__body}>
              <span className={st.mega__title}>{child.title[language]}</span>
              {child.desc && <span className={st.mega__desc}>{child.desc[language]}</span>}
            </span>
          </a>
        </Link>
      ))}
    </div>
    {item.tags && (
      <div className={st.mega__footer}>
        {item.tags.map((tag) => (
          <span key={tag.label.ru} className={st.mega__tag}>
            <Icon name={tag.icon} size={13} />
            {tag.label[language]}
          </span>
        ))}
      </div>
    )}
  </div>
);

const DropMenu = ({ item, language }) => (
  <div className={`${st.drop} ${item.className === "sec" ? st.drop_right : ""}`} role="menu">
    {item.children.map((child) =>
      child.isHref ? (
        <a key={child.title.ru} className={st.drop__item} href={child.link} role="menuitem">
          <Icon name={child.icon} size={15} />
          {child.title[language]}
        </a>
      ) : (
        <Link key={child.title.ru} href={checkLang(language) + child.link}>
          <a className={st.drop__item} role="menuitem">
            <Icon name={child.icon} size={15} />
            {child.title[language]}
          </a>
        </Link>
      )
    )}
  </div>
);

export const LangBlock = ({ language, router }) => {
  return (
    <>
      {["ru", "en", "uz"].map((code) => (
        <button
          key={code}
          type="button"
          className={`${st.langBtn} ${language === code ? st.langBtn_active : ""}`}
          onClick={() => language !== code && changeLang(code, router)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </>
  );
};
