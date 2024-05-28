import { changeLang } from "@/utils/changeLang.js";
import { checkLang } from "@/utils/checkLang.js";
import Link from "next/link";
import { useRouter } from "next/router.js";
import { useState } from "react";
import Container from "../container/index.jsx";
import { LINKS } from "../requirements";
import { LOGO } from "../utils";
import st from "./header.module.scss";
import HeaderMob from "./headerMob";

export default function Header({ language }) {
  const menu = [
      {
        title: { ru: "Хостинг", uz: "Xosting", en: "Hosting" },
        link: LINKS.HOSTING,
      },
      {
        title: { ru: "Серверы", uz: "Serverlar", en: "Servers" },
        link: LINKS.SERVERS,
      },
      {
        title: {
          ru: "VPS и VDS серверы",
          uz: "VPS va VDS serverlari",
          en: "VPS and VDS servers",
        },
        link: LINKS.VPS_VDS,
        children: [
          {
            title: {
              ru: "Бюджетные серверы",
              uz: "Byudjet serverlari",
              en: "Budget Servers",
            },
            link: LINKS.CHEAP_VDS,
          },
          {
            title: {
              ru: "Оптимальные серверы",
              uz: "Optimal serverlar",
              en: "Optimal Servers",
            },
            link: LINKS.OPTIMAL_VDS,
          },
          {
            title: {
              ru: "Высокопроизводительные серверы",
              uz: "Yuqori unumdor serverlar",
              en: "High Performance Servers",
            },
            link: LINKS.BIG_VDS,
          },
          {
            title: {
              ru: "Конструктор серверов",
              uz: "Server quruvchi",
              en: "Custom Server",
            },
            link: LINKS.CUSTOM_VDS,
          },
          {
            title: {
              ru: "Аренда серверов intel",
              uz: "Intel server ijarasi",
              en: "Intel servers",
            },
            link: LINKS.INTEL_VDS,
          },
        ],
      },
      {
        title: { ru: "Домены", uz: "Domenlar", en: "Domains" },
        link: LINKS.DOMAINS,
        children: [
          {
            title: {
              ru: "Whois",
              uz: "Whois",
              en: "Whois",
            },
            link: LINKS.DOMAINS_WHOIS,
          },
        ],
      },

      {
        title: { ru: "SSL", uz: "SSL", en: "SSL" },
        link: LINKS.SSL,
      },
      {
        title: { ru: "Почта", uz: "Pochta", en: "E-mail" },
        link: LINKS.EMAIL,
      },

      {
        title: { ru: "О сервисе", uz: "Xizmat haqida", en: "About service" },
        link: LINKS.ABOUT,
        className: "sec",
        children: [
          // {
          //   title: {
          //     ru: "Администрирование",
          //     uz: "Ma'muriyat",
          //     en: "Administration",
          //   },
          //   link: LINKS.ADMINISTRATION,
          // },
          // {
          //   title: { ru: "Реселлинг", uz: "Qayta sotish", en: "Reselling" },
          //   link: LINKS.RESELLING,
          // },
          // {
          //   title: { ru: "Блог", uz: "Blog", en: "Blog" },
          //   link: LINKS.BLOG,
          // },
          // {
          //   title: { ru: "Акции", uz: "Aksiya", en: "Stocks" },
          //   link: LINKS.STOCK,
          // },
          {
            title: { ru: "FAQ", uz: "FAQ", en: "FAQ" },
            link: LINKS.HELP,
          },
          {
            title: { ru: "Оплата", uz: "To'lov", en: "Payment" },
            link: LINKS.PAYMENT,
          },
          {
            title: { ru: "Поддержка", uz: "Qo'llab-quvvatlash", en: "Support" },
            link: LINKS.SUPPORT,
          },
          {
            title: { ru: "Отзывы", uz: "Отзывы", en: "Reviews" },
            link: LINKS.REVIEWS,
          },
          {
            title: { ru: "Наши лицензии", uz: "Litsenziyalar", en: "Licenses" },
            link: LINKS.LICENSE,
          },
          {
            title: {
              ru: "+998(71) 202-87-00",
              uz: "+998(71) 202-87-00",
              en: "+998(71) 202-87-00",
            },
            link: LINKS.PHONE,
            isHref: true,
          },
          {
            title: {
              ru: "+998(90) 324-30-80 (телеграм)",
              uz: "+998(90) 324-30-80 (telegram)",
              en: "+998(90) 324-30-80 (telegram)",
            },
            link: LINKS.TELEGRAM,
            isHref: true,
          },
        ],
      },
    ],
    [isOpen, setIsOpen] = useState(false),
    router = useRouter();

  const langData = {
    enter: {
      ru: "Вход и регистрация",
      uz: "Kirish va ro'yxatdan o'tish",
      en: "Login and registration",
    },
  };

  return (
    <div className={st.header}>
      <Container className="py-0">
        <div className={st.header__main}>
          <div className={st.header__main__logo}>
            <Link href={checkLang(language) + LINKS.HOME}>
              <a>{LOGO}</a>
            </Link>
          </div>
          <nav className={st.header__main__nav}>
            {menu.map((item) => (
              <div key={item.title[language]} className={st.header__main__nav__item}>
                <Link href={checkLang(language) + item.link}>
                  <a className={st.header__main__nav__item__a} onClick={() => setIsOpen(false)}>
                    {item.title[language]}{" "}
                    {item?.children && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M11.3359 1.33366L6.0026 6.66699L0.669271 1.33366"
                          stroke="#F8F8F8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    )}
                  </a>
                </Link>
                {item?.children && <NavItem key={item.title[language]} nav={item} language={language} />}
              </div>
            ))}
          </nav>
          <div className={st.header__main__right}>
            <div className={st.header__main__right__lang}>
              <LangBlock language={language} router={router} />
            </div>
            <button className={st.header__main__right__billing}>
              <a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
                <span>
                  <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="15px" height="15px">
                    <path d="M 16 0 C 13.789063 0 11.878906 0.917969 10.6875 2.40625 C 9.496094 3.894531 9 5.824219 9 7.90625 L 9 9 L 12 9 L 12 7.90625 C 12 6.328125 12.390625 5.085938 13.03125 4.28125 C 13.671875 3.476563 14.542969 3 16 3 C 17.460938 3 18.328125 3.449219 18.96875 4.25 C 19.609375 5.050781 20 6.308594 20 7.90625 L 20 9 L 23 9 L 23 7.90625 C 23 5.8125 22.472656 3.863281 21.28125 2.375 C 20.089844 0.886719 18.207031 0 16 0 Z M 9 10 C 7.34375 10 6 11.34375 6 13 L 6 23 C 6 24.65625 7.34375 26 9 26 L 23 26 C 24.65625 26 26 24.65625 26 23 L 26 13 C 26 11.34375 24.65625 10 23 10 Z M 16 15 C 17.105469 15 18 15.894531 18 17 C 18 17.738281 17.597656 18.371094 17 18.71875 L 17 21 C 17 21.550781 16.550781 22 16 22 C 15.449219 22 15 21.550781 15 21 L 15 18.71875 C 14.402344 18.371094 14 17.738281 14 17 C 14 15.894531 14.894531 15 16 15 Z" />
                  </svg>
                </span>
                {langData.enter[language]}
              </a>
            </button>
            <button
              className={`${st.header__main__right__burger} ${isOpen && st.header__main__right__burger__active}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <rect
                    width="26"
                    height="3"
                    rx="1.5"
                    transform="matrix(0.707107 0.707107 -0.707499 0.706714 2.12305 0.384766)"
                    fill="#fff"
                  ></rect>
                  <rect
                    width="26"
                    height="3"
                    rx="1.5"
                    transform="matrix(0.707107 -0.707107 0.707499 0.706714 0 18.3848)"
                    fill="#fff"
                  ></rect>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="#fff">
                  <rect width="26" height="4" rx="2" fill="#fff"></rect>
                  <rect x="9" y="16" width="17" height="4" rx="2" fill="#fff"></rect>
                  <rect x="4" y="8" width="22" height="4" rx="2" fill="#fff"></rect>
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>
      <HeaderMob isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} language={language} router={router} />
    </div>
  );
}

const NavItem = ({ nav, language }) => {
  return (
    <ul className={st[`header__main__nav__item__${nav.className}`]}>
      {nav.children.map((item) => (
        <li key={item.id}>
          {item?.isHref ? (
            <a href={item.link}>{item.title[language]}</a>
          ) : (
            <Link href={checkLang(language) + item.link}>
              <a>{item.title[language]}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export const LangBlock = ({ language, router }) => {
  return (
    <>
      <div
        className={`${st.header__main__right__lang__item} ${
          language == "ru" ? st.header__main__right__lang__item__active : ""
        }`}
        onClick={() => language != "ru" && changeLang("ru", router)}
      >
        RU
      </div>
      <div
        className={`${st.header__main__right__lang__item} ${
          language == "en" ? st.header__main__right__lang__item__active : ""
        }`}
        onClick={() => language != "en" && changeLang("en", router)}
      >
        EN
      </div>
      <div
        className={`${st.header__main__right__lang__item} ${
          language == "uz" ? st.header__main__right__lang__item__active : ""
        }`}
        onClick={() => language != "uz" && changeLang("uz", router)}
      >
        UZ
      </div>
    </>
  );
};
