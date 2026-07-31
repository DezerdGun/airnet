import Container from "@/components/container";
import st from "./cmsInstall.module.scss";

const GLYPH = [
  <><path d="M4 20h4L18.5 9.5a2.12 2.12 0 0 0-3-3L5 17v3" /><path d="M13.5 6.5l3 3" /></>, // Блоги — перо
  <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v5" /></>, // Порталы и CMS — окно/layout
  <><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5a8.7 8.7 0 0 1-4-1L3 20l1-4.5a8.5 8.5 0 1 1 16-4Z" /></>, // Форумы — сообщение
  <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="10" r="1.5" /><path d="m21 16-5-5L5 19" /></>, // Галереи — фото
  <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6" /></>, // Соцсети — люди
  <><path d="M4 20V5M4 20h16" /><rect x="7" y="11" width="3" height="6" /><rect x="12" y="8" width="3" height="9" /><rect x="17" y="13" width="3" height="4" /></>, // Голосования — диаграмма
  <><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /><path d="M3 4h2l2.4 12.3a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 8H6" /></>, // Магазины — корзина
  <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></>, // Файлы — папка
];

const Ico = ({ i }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {GLYPH[i % GLYPH.length]}
  </svg>
);

export default function CmsInstall({ language = "ru", items }) {
  const t = {
    eyebrow: {
      ru: "Softaculous · 100+ приложений бесплатно",
      uz: "Softaculous · 100+ ilova bepul",
      en: "Softaculous · 100+ apps for free",
    },
    title: {
      ru: "Быстрая установка WordPress и популярных CMS в 1 клик!",
      uz: "WordPress va mashhur CMS-larni 1 marta bosishda tez o'rnatish!",
      en: "Install WordPress and popular CMS in one click!",
    },
    desc: {
      ru: "Более 100 бесплатных CMS-установщиков различных категорий от Softaculous — от блогов и интернет-магазинов до форумов и галерей.",
      uz: "Softaculous'dan turli toifadagi 100 dan ortiq bepul CMS o'rnatuvchi — bloglardan onlayn-do'konlargacha, forum va galereyalargacha.",
      en: "Over 100 free CMS installers of various categories from Softaculous — from blogs and online stores to forums and galleries.",
    },
  };

  const list = items || [];

  return (
    <div className={st.section}>
      <Container>
        <div className={st.head}>
          <span className={st.eyebrow}>{t.eyebrow[language]}</span>
          <h2>{t.title[language]}</h2>
          <p>{t.desc[language]}</p>
        </div>

        <div className={st.grid}>
          {list.map((item, i) => {
            const name = item.name ? item.name[language] : item[language];
            return (
              <div key={name} className={st.item}>
                <span className={st.item__icon}>
                  <Ico i={i} />
                </span>
                <div className={st.item__body}>
                  <span className={st.item__name}>{name}</span>
                  {item.desc ? <span className={st.item__desc}>{item.desc}</span> : null}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
