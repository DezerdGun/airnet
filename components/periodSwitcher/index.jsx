import st from "./periodSwitcher.module.scss";
export default function PeriodSwitcher({ value, onChange, language = "ru", options }) {
  const month = { ru: "мес.", uz: "oy", en: "mo." };

  const items =
    options ||
    [
      { label: `1 ${month[language]}` },
      { label: `3 ${month[language]}` },
      { label: `6 ${month[language]}` },
      { label: `12 ${month[language]}`, discount: "−10%" },
    ];

  const title = {
    ru: "Срок оплаты",
    uz: "To'lov muddati",
    en: "Billing period",
  };

  return (
    <div className={st.wrap}>
      <div className={st.switcher} role="tablist" aria-label={title[language]}>
        {items.map((item, i) => (
          <span key={item.label} className={st.slot}>
            {item.discount && <span className={st.disc}>{item.discount}</span>}
            <button
              type="button"
              role="tab"
              aria-selected={value === i}
              className={`${st.btn} ${value === i ? st.btn_on : ""}`}
              onClick={() => onChange(i)}
            >
              {item.label}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
