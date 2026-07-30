import Container from "@/components/container";
import st from "./cmsInstall.module.scss";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#0e6a4e" />
    <path
      d="m7.5 12.4 3 3 6-6.8"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
          {list.map((item) => (
            <div key={item[language]} className={st.item}>
              <span className={st.item__icon}>
                <CheckIcon />
              </span>
              <span className={st.item__name}>{item[language]}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
