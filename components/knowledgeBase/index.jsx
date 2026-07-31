import { useMemo, useState } from "react";
import Link from "next/link";
import st from "./knowledgeBase.module.scss";

const I = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  cloud: <><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 18Z" /></>,
  server: <><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="12" width="18" height="8" rx="2" /><path d="M7 8h.01M7 16h.01" /></>,
  world: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
  receipt: <><path d="M5 3v18l2-1 2 1 2-1 2 1 2-1 2 1V3l-2 1-2-1-2 1-2-1-2 1Z" /><path d="M9 8h6M9 12h6" /></>,
  network: <><rect x="9" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M12 9v3M12 12H6v3M12 12h6v3" /></>,
  os: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
  file: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  flame: <><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-1.5.5-2.5 1-3.5.8 1 2 1.5 2 1.5S9 7 12 3Z" /></>,
  tool: <><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z" /></>,
};

// pick icon + accent color by category title keyword
const STYLE_RULES = [
  { kw: ["ssl"], icon: "lock", bg: "#227a44" },
  { kw: ["хостинг", "hosting"], icon: "cloud", bg: "#0369a1" },
  { kw: ["vds", "vps"], icon: "server", bg: "#7c3aed" },
  { kw: ["домен", "domain"], icon: "world", bg: "#0e6a4e" },
  { kw: ["dns"], icon: "network", bg: "#0891b2" },
  { kw: ["биллинг", "billing", "оплат", "payment"], icon: "receipt", bg: "#b45309" },
  { kw: ["техни", "technical"], icon: "tool", bg: "#475569" },
  { kw: ["операц", "систем", "os", " ос"], icon: "os", bg: "#4d7c0f" },
  { kw: ["документ", "договор", "document", "contract"], icon: "file", bg: "#0f766e" },
  { kw: ["общ", "вопрос", "general"], icon: "help", bg: "#176a4f" },
];
function pickStyle(title, i) {
  const t = (title || "").toLowerCase();
  const found = STYLE_RULES.find((r) => r.kw.some((k) => t.includes(k)));
  return found || { icon: "grid", bg: ["#176a4f", "#0369a1", "#7c3aed", "#b45309", "#0891b2"][i % 5] };
}

const Ico = ({ n, size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {I[n] || I.file}
  </svg>
);

// category icon + accent color by index
const CAT_STYLE = [
  { icon: "help", bg: "#176a4f" },
  { icon: "lock", bg: "#227a44" },
  { icon: "cloud", bg: "#0369a1" },
  { icon: "server", bg: "#7c3aed" },
  { icon: "world", bg: "#0e6a4e" },
  { icon: "receipt", bg: "#b45309" },
  { icon: "network", bg: "#0891b2" },
  { icon: "os", bg: "#4d7c0f" },
];

// recursively collect every node that has a link (real article)
function collectArticles(node, lang, acc) {
  if (!node) return;
  if (Array.isArray(node)) {
    node.forEach((n) => collectArticles(n, lang, acc));
    return;
  }
  if (node.link && node.title) {
    acc.push({ title: node.title[lang] || node.title.ru, link: node.link });
  }
  if (node.children) collectArticles(node.children, lang, acc);
}

export default function KnowledgeBase({ data = [], language = "ru", eyebrow, title, sub, brand = "AIRNET" }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const trOpt = (v, fb) => (v == null ? fb : typeof v === "string" ? v : v[language] || fb);

  const t = {
    eyebrow: { ru: "Статьи и инструкции", uz: "Maqolalar va yo'riqnomalar", en: "Articles & guides" },
    h1a: { ru: "База знаний", uz: "Bilimlar bazasi", en: "Knowledge base" },
    sub: { ru: "Ответы на частые вопросы, инструкции и руководства", uz: "Ko'p so'raladigan savollarga javoblar, yo'riqnoma va qo'llanmalar", en: "Answers to FAQs, instructions and guides" },
    placeholder: { ru: "Найдите статью… например, «перенос сайта»", uz: "Maqola toping… masalan, «saytni ko'chirish»", en: "Find an article… e.g. “site migration”" },
    find: { ru: "Найти", uz: "Qidirish", en: "Search" },
    popularLabel: { ru: "Популярное:", uz: "Ommabop:", en: "Popular:" },
    sections: { ru: "Разделы", uz: "Bo'limlar", en: "Sections" },
    all: { ru: "Все разделы", uz: "Barcha bo'limlar", en: "All sections" },
    popularHead: { ru: "Популярные статьи", uz: "Ommabop maqolalar", en: "Popular articles" },
    nothing: { ru: "Ничего не найдено", uz: "Hech narsa topilmadi", en: "Nothing found" },
    articles: { ru: "статей", uz: "maqola", en: "articles" },
  };

  const cats = useMemo(
    () =>
      data.map((c, i) => {
        const acc = [];
        collectArticles(c.children || [], language, acc);
        // include the category's own link as an article if it has no children articles
        if (!acc.length && c.link && c.title) acc.push({ title: c.title[language] || c.title.ru, link: c.link });
        const catTitle = (c.title && (c.title[language] || c.title.ru)) || "";
        return {
          key: `c${i}`,
          title: catTitle,
          style: pickStyle((c.title && c.title.ru) || catTitle, i),
          articles: acc,
        };
      }),
    [data, language]
  );

  const allArticles = useMemo(() => cats.flatMap((c) => c.articles.map((a) => ({ ...a, cat: c.title }))), [cats]);

  const popular = allArticles.slice(0, 5);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return allArticles.filter((a) => a.title.toLowerCase().includes(q)).slice(0, 6);
  }, [query, allArticles]);

  const popularChips = allArticles.slice(0, 5).map((a) => a.title);
  const [collapsed, setCollapsed] = useState({});
  const toggle = (k) => setCollapsed((c) => ({ ...c, [k]: !c[k] }));

  const visibleCats = active === "all" ? cats : cats.filter((c) => c.key === active);

  return (
    <div>
      {/* HERO */}
      <section className={st.hero}>
        <span className={`${st.hd} ${st.hd1}`} />
        <span className={`${st.hd} ${st.hd2}`} />
        <div className={st.hero__inner}>
          <span className={st.hero__eyebrow}>{trOpt(eyebrow, t.eyebrow[language])}</span>
          <h1 className={st.hero__title}>{trOpt(title, t.h1a[language])} {brand ? <em>{brand}</em> : null}</h1>
          <p className={st.hero__sub}>{trOpt(sub, t.sub[language])}</p>

          <div className={st.searchBox}>
            <div className={st.searchWrap}>
              <input
                className={st.searchInp}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.placeholder[language]}
              />
              <button className={st.searchBtn} type="button"><Ico n="search" size={16} />{t.find[language]}</button>
            </div>
            {results.length > 0 && (
              <div className={st.results}>
                {results.map((a, i) => (
                  <Link href={a.link} key={i}>
                    <a className={st.srItem}><Ico n="file" size={14} /><span className={st.srText}>{a.title}</span><span className={st.srCat}>{a.cat}</span></a>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {popularChips.length > 0 && (
            <div className={st.popChips}>
              <span className={st.popLabel}>{t.popularLabel[language]}</span>
              {popularChips.map((c, i) => (
                <button key={i} className={st.popChip} type="button" onClick={() => setQuery(c)}>{c}</button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MAIN */}
      <div className={st.main}>
        <aside className={st.sidebar}>
          <div className={st.sbLabel}>{t.sections[language]}</div>
          <button className={`${st.sbCat} ${active === "all" ? st.sbCat_active : ""}`} type="button" onClick={() => setActive("all")}>
            <Ico n="grid" size={15} />{t.all[language]}<span className={st.cnt}>{cats.length}</span>
          </button>
          {cats.map((c) => (
            <button key={c.key} className={`${st.sbCat} ${active === c.key ? st.sbCat_active : ""}`} type="button" onClick={() => setActive(c.key)}>
              <Ico n={c.style.icon} size={15} />{c.title}<span className={st.cnt}>{c.articles.length}</span>
            </button>
          ))}
        </aside>

        <div className={st.content}>
          {active === "all" && popular.length > 0 && (
            <div className={st.popular}>
              <div className={st.popHead}><Ico n="flame" size={18} /><h3>{t.popularHead[language]}</h3></div>
              <div className={st.popItems}>
                {popular.map((a, i) => (
                  <Link href={a.link} key={i}>
                    <a className={st.popItem}>
                      <span className={st.popRank}>{i + 1}</span>
                      <span className={st.popTitle}>{a.title}</span>
                      <span className={st.popCat}>{a.cat}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {visibleCats.map((c) => {
            const isCol = collapsed[c.key];
            return (
              <div key={c.key} className={`${st.catCard} ${isCol ? st.catCard_col : ""}`}>
                <button className={st.catHead} type="button" onClick={() => toggle(c.key)}>
                  <span className={st.catIcon} style={{ background: c.style.bg }}><Ico n={c.style.icon} size={17} /></span>
                  <span className={st.catTitle}>{c.title}</span>
                  <span className={st.catCount}>{c.articles.length} {t.articles[language]}</span>
                  <span className={st.catArr}><Ico n="chevron" size={15} /></span>
                </button>
                {!isCol && (
                  <div className={st.articles}>
                    {c.articles.map((a, i) => (
                      <Link href={a.link} key={i}>
                        <a className={st.article}>
                          <Ico n="file" size={14} />
                          <span className={st.articleText}>{a.title}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
