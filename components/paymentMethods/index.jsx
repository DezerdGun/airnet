import { useState } from "react";
import st from "./paymentMethods.module.scss";

const I = {
  plus: <><path d="M12 5v14M5 12h14" /></>,
  bolt: <><path d="M13 3v7h6l-8 11v-7H5l8-11" /></>,
  check: <><path d="M5 12l5 5L20 7" /></>,
  pin: <><path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6l-6 6" /></>,
  mobile: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
  store: <><path d="M4 9h16l-1-4H5L4 9Z" /><path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" /><path d="M9 20v-6h6v6" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></>,
  bank: <><path d="M3 10l9-6l9 6" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8" /><path d="M3 20h18" /></>,
  file: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  tg: <><path d="M22 4L2 12l6 2 2 6 3-4 5 4 4-16Z" /><path d="m8 14 9-7" /></>,
  phone: <><path d="M6 3h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2Z" /></>,
};

const Ico = ({ n, size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {I[n]}
  </svg>
);

const BILLING = "https://billing.airnet.uz/billing.php";
const TG = "https://t.me/airnetuzb";
const PHONE = "+998712008700";
const PHONE_TXT = "+998 71 200-87-00";

export default function PaymentMethods({ language = "ru" }) {
  const [open, setOpen] = useState(null);
  const tr = (v) => (typeof v === "string" ? v : v?.[language]);
  const toggle = (id) => setOpen((o) => (o === id ? null : id));

  const t = {
    badge: { ru: "7 способов оплаты", uz: "7 ta to'lov usuli", en: "7 payment methods" },
    h1a: { ru: "Способы оплаты", uz: "To'lov usullari", en: "Payment methods" },
    h1b: { ru: "услуг AIRNET", uz: "AIRNET xizmatlari", en: "for AIRNET services" },
    sub: {
      ru: "Услуги нашей компании можно оплачивать различными способами — выбирайте наиболее удобный: онлайн-банкинг, карты или банковский перевод.",
      uz: "Kompaniyamiz xizmatlarini turli usullar bilan to'lash mumkin — eng qulayini tanlang: onlayn-banking, kartalar yoki bank o'tkazmasi.",
      en: "Our services can be paid in various ways — choose the most convenient: online banking, cards or bank transfer.",
    },
    steps: [
      { ru: "Войдите в кабинет", uz: "Kabinetga kiring", en: "Log in to your account" },
      { ru: "Пополните баланс", uz: "Balansni to'ldiring", en: "Top up your balance" },
      { ru: "Оплатите счёт", uz: "Hisobni to'lang", en: "Pay the invoice" },
    ],
    balTitle: { ru: "Ваш баланс", uz: "Balansingiz", en: "Your balance" },
    topup: { ru: "Пополнить баланс", uz: "Balansni to'ldirish", en: "Top up balance" },
    som: { ru: "сум", uz: "so'm", en: "som" },
    mHead: { ru: "Доступные способы оплаты", uz: "Mavjud to'lov usullari", en: "Available payment methods" },
    mSub: { ru: "Все платёжные системы — безопасные и проверенные", uz: "Barcha to'lov tizimlari — xavfsiz va ishonchli", en: "All payment systems are secure and verified" },
    instruction: { ru: "Инструкция", uz: "Yo'riqnoma", en: "Instructions" },
    requisites: { ru: "Реквизиты", uz: "Rekvizitlar", en: "Bank details" },
    instant: { ru: "Мгновенно", uz: "Bir zumda", en: "Instant" },
    min15: { ru: "До 15 минут", uz: "15 daqiqagacha", en: "Up to 15 min" },
    offline: { ru: "Офлайн", uz: "Oflayn", en: "Offline" },
    htHead: { ru: "Как пополнить баланс", uz: "Balansni qanday to'ldirish", en: "How to top up" },
    htSub: { ru: "Четыре простых шага — деньги на счёте через минуту", uz: "To'rtta oddiy qadam — pul hisobda bir daqiqada", en: "Four simple steps — money on your account in a minute" },
    acHead: { ru: "Подробные инструкции по оплате", uz: "To'lov bo'yicha batafsil yo'riqnoma", en: "Detailed payment instructions" },
    acSub: { ru: "Нажмите на способ оплаты, чтобы узнать подробности", uz: "Tafsilotlar uchun to'lov usulini bosing", en: "Click a payment method to see details" },
    ctaTitle: { ru: "Остались вопросы по оплате?", uz: "To'lov bo'yicha savollar qoldimi?", en: "Questions about payment?" },
    ctaSub: { ru: "Специалисты поддержки помогут разобраться — мы на связи 24/7", uz: "Qo'llab-quvvatlash mutaxassislari yordam beradi — biz 24/7 aloqadamiz", en: "Our support team will help — we're online 24/7" },
    ctaTg: { ru: "Написать в Telegram", uz: "Telegramga yozish", en: "Message on Telegram" },
  };

  const htSteps = [
    { title: { ru: "Войдите в кабинет", uz: "Kabinetga kiring", en: "Log in" }, desc: { ru: "Откройте Личный кабинет на airnet.uz и войдите в аккаунт", uz: "airnet.uz'da shaxsiy kabinetni oching va akkauntga kiring", en: "Open your dashboard on airnet.uz and sign in" } },
    { title: { ru: "Перейдите к балансу", uz: "Balansga o'ting", en: "Go to balance" }, desc: { ru: "В верхней панели нажмите на баланс или перейдите в раздел «Счета»", uz: "Yuqori paneldagi balansni bosing yoki «Hisoblar» bo'limiga o'ting", en: "Click the balance in the top bar or open the “Invoices” section" } },
    { title: { ru: "Нажмите «Пополнить»", uz: "«To'ldirish»ni bosing", en: "Click “Top up”" }, desc: { ru: "Введите сумму пополнения и нажмите «Перейти к оплате счёта»", uz: "To'ldirish summasini kiriting va «Hisobni to'lashga o'tish»ni bosing", en: "Enter the amount and click “Proceed to payment”" } },
    { title: { ru: "Выберите способ", uz: "Usulni tanlang", en: "Choose a method" }, desc: { ru: "Выберите удобный способ оплаты и подтвердите платёж", uz: "Qulay to'lov usulini tanlang va to'lovni tasdiqlang", en: "Pick a convenient method and confirm the payment" } },
  ];

  const methods = [
    {
      id: "payme", logo: "/payments/payme.svg", name: "Payme.uz", tag: "instant",
      desc: { ru: "Оплата через мобильное приложение или сайт Payme. Мгновенное зачисление на баланс.", uz: "Payme ilovasi yoki sayti orqali to'lov. Balansga bir zumda tushadi.", en: "Pay via the Payme app or website. Instant balance top-up." },
      body: { ru: <>Откройте приложение <strong>Payme</strong> → «Оплата» → найдите <strong>AIRNET</strong> → введите лицевой счёт (ID вашего аккаунта) → укажите сумму и подтвердите. Средства поступят мгновенно.</>, uz: <>Payme ilovasini oching → «To'lov» → <strong>AIRNET</strong>ni toping → shaxsiy hisob (akkaunt ID) kiriting → summani kiriting va tasdiqlang. Mablag' bir zumda tushadi.</>, en: <>Open <strong>Payme</strong> → “Payment” → find <strong>AIRNET</strong> → enter your account ID → set the amount and confirm. Funds arrive instantly.</> },
    },
    {
      id: "click", logo: "/payments/click.png", name: "Click.uz", tag: "instant",
      desc: { ru: "Быстрая оплата через Click — популярный сервис онлайн-платежей в Узбекистане.", uz: "Click orqali tez to'lov — O'zbekistonda mashhur onlayn-to'lov xizmati.", en: "Fast payment via Click — a popular online payment service in Uzbekistan." },
      body: { ru: <>Откройте приложение <strong>Click</strong> → «Интернет-провайдеры» → выберите <strong>AIRNET</strong> → введите ID аккаунта → укажите сумму и оплатите. Зачисление — мгновенно.</>, uz: <>Click ilovasini oching → «Internet-provayderlar» → <strong>AIRNET</strong>ni tanlang → akkaunt ID kiriting → summani kiriting va to'lang. Hisobga bir zumda tushadi.</>, en: <>Open <strong>Click</strong> → “Internet providers” → choose <strong>AIRNET</strong> → enter your account ID → set the amount and pay. Instant credit.</> },
    },
    {
      id: "paynet", logo: "/payments/paynet.png", name: "Paynet.uz", tag: "min15",
      desc: { ru: "Оплата через терминалы и приложение Paynet. Широкая сеть точек приёма платежей.", uz: "Paynet terminallari va ilovasi orqali to'lov. Keng qabul nuqtalari tarmog'i.", en: "Pay via Paynet terminals and app. Wide network of payment points." },
      body: { ru: <>Через <strong>приложение</strong>: Paynet → «Телекоммуникации» → AIRNET → введите ID → оплатите. Через <strong>терминал</strong>: найдите ближайший терминал Paynet → «Интернет» → AIRNET → введите ID и внесите наличные. Зачисление до 15 минут.</>, uz: <><strong>Ilova</strong> orqali: Paynet → «Telekommunikatsiya» → AIRNET → ID kiriting → to'lang. <strong>Terminal</strong> orqali: eng yaqin Paynet terminalini toping → «Internet» → AIRNET → ID kiriting va naqd pul soling. 15 daqiqagacha tushadi.</>, en: <>Via <strong>app</strong>: Paynet → “Telecom” → AIRNET → enter ID → pay. Via <strong>terminal</strong>: find a Paynet terminal → “Internet” → AIRNET → enter ID and insert cash. Credited within 15 min.</> },
    },
    {
      id: "oson", logo: "/payments/oson.png", name: "Oson.uz", tag: "min15",
      desc: { ru: "Мобильный сервис оплаты услуг. Удобно для тех, кто платит со смартфона.", uz: "Xizmatlarni to'lash uchun mobil xizmat. Smartfondan to'lovchilar uchun qulay.", en: "Mobile bill-payment service. Handy for those who pay from a phone." },
      body: { ru: <>Откройте <strong>Oson</strong> → «Интернет» → AIRNET → введите лицевой счёт (ID аккаунта) → укажите сумму и подтвердите. Зачисление — до 15 минут.</>, uz: <><strong>Oson</strong>ni oching → «Internet» → AIRNET → shaxsiy hisob (akkaunt ID) kiriting → summani kiriting va tasdiqlang. 15 daqiqagacha tushadi.</>, en: <>Open <strong>Oson</strong> → “Internet” → AIRNET → enter your account ID → set the amount and confirm. Credited within 15 min.</> },
    },
    {
      id: "kiosk", icon: "store", name: { ru: "Киоск самообслуживания", uz: "O'z-o'ziga xizmat kioski", en: "Self-service kiosk" }, tag: "offline",
      desc: { ru: "Оплата наличными через терминалы самообслуживания. В крупных ТЦ и банках.", uz: "O'z-o'ziga xizmat terminallari orqali naqd to'lov. Yirik savdo markazlari va banklarda.", en: "Cash payment via self-service terminals. In malls and banks." },
      body: { ru: <>Найдите ближайший терминал (банки, торговые центры) → «Интернет-услуги» → <strong>AIRNET</strong> → введите <strong>ID аккаунта</strong> → внесите наличные. Чек сохраните. Зачисление — до 30 минут.</>, uz: <>Eng yaqin terminalni toping (banklar, savdo markazlari) → «Internet-xizmatlar» → <strong>AIRNET</strong> → <strong>akkaunt ID</strong> kiriting → naqd pul soling. Chekni saqlang. 30 daqiqagacha tushadi.</>, en: <>Find a terminal (banks, malls) → “Internet services” → <strong>AIRNET</strong> → enter <strong>account ID</strong> → insert cash. Keep the receipt. Credited within 30 min.</> },
    },
    {
      id: "visa", icon: "card", name: "VISA / MasterCard", tag: "instant",
      desc: { ru: "Международные банковские карты. Оплата напрямую через защищённую форму.", uz: "Xalqaro bank kartalari. Himoyalangan forma orqali to'g'ridan-to'g'ri to'lov.", en: "International bank cards. Pay directly via a secure form." },
      body: { ru: <>В Личном кабинете: <strong>«Счета» → «Пополнить»</strong> → «Банковская карта» → введите данные карты в защищённой форме → подтвердите через 3D-Secure. Зачисление — мгновенно.</>, uz: <>Shaxsiy kabinetda: <strong>«Hisoblar» → «To'ldirish»</strong> → «Bank kartasi» → karta ma'lumotlarini himoyalangan formaga kiriting → 3D-Secure orqali tasdiqlang. Bir zumda tushadi.</>, en: <>In your dashboard: <strong>“Invoices” → “Top up”</strong> → “Bank card” → enter card details in the secure form → confirm via 3D-Secure. Instant credit.</> },
    },
  ];

  const swift = {
    id: "swift", icon: "bank",
    title: { ru: "Банковский перевод (SWIFT) — оплата по договору", uz: "Bank o'tkazmasi (SWIFT) — shartnoma bo'yicha to'lov", en: "Bank transfer (SWIFT) — payment by contract" },
    desc: { ru: "Для юридических лиц и ИП. Оплата счёта по реквизитам компании. Срок зачисления — 1–3 рабочих дня. Подходит для крупных платежей.", uz: "Yuridik shaxslar va YaTT uchun. Kompaniya rekvizitlari bo'yicha to'lov. 1–3 ish kunida tushadi. Yirik to'lovlar uchun mos.", en: "For companies and sole traders. Pay by company bank details. Credited in 1–3 business days. Suited for large payments." },
    body: { ru: <>Для юридических лиц. Создайте счёт в Личном кабинете → скачайте PDF → выполните перевод по реквизитам ООО «AIRNET». В назначении платежа укажите <strong>номер счёта и ваш ID</strong>. Зачисление — 1–3 рабочих дня после подтверждения банком.</>, uz: <>Yuridik shaxslar uchun. Shaxsiy kabinetda hisob yarating → PDF yuklab oling → «AIRNET» MChJ rekvizitlari bo'yicha o'tkazma qiling. To'lov maqsadida <strong>hisob raqami va ID</strong>ingizni ko'rsating. Bank tasdiqlagach 1–3 ish kunida tushadi.</>, en: <>For companies. Create an invoice in your dashboard → download the PDF → transfer to “AIRNET” LLC bank details. In the payment reference put <strong>the invoice number and your ID</strong>. Credited in 1–3 business days after the bank confirms.</> },
  };

  const tagCls = { instant: st.tag_instant, min15: st.tag_fast, offline: "" };
  const tagIcon = { instant: "bolt", min15: "check", offline: "pin" };
  const tagLabel = { instant: t.instant, min15: t.min15, offline: t.offline };

  const accItems = [...methods, swift];

  return (
    <div>
      {/* HERO */}
      <section className={st.hero}>
        <div className={st.hero__inner}>
          <div>
            <span className={st.hero__badge}>{t.badge[language]}</span>
            <h1 className={st.hero__title}>{t.h1a[language]} <em>{t.h1b[language]}</em></h1>
            <p className={st.hero__sub}>{t.sub[language]}</p>
            <div className={st.hero__steps}>
              {t.steps.map((s, i) => (
                <span key={i} className={st.hstep}><span className={st.hstep__num}>{i + 1}</span>{s[language]}</span>
              ))}
            </div>
          </div>
          <div className={st.visual}>
            <div className={st.visual__title}>{t.balTitle[language]}</div>
            <div className={st.visual__bal}>1 025 <span>{t.som[language]}</span></div>
            <a className={st.visual__btn} href={BILLING} target="_blank" rel="noopener noreferrer"><Ico n="plus" size={14} />{t.topup[language]}</a>
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section className={st.methods}>
        <div className={st.wrap}>
          <div className={st.head}>
            <h2>{t.mHead[language]}</h2>
            <p>{t.mSub[language]}</p>
          </div>
          <div className={st.grid}>
            {methods.map((m) => (
              <button key={m.id} className={st.card} onClick={() => toggle(m.id)} type="button">
                <span className={`${st.card__icon} ${m.logo ? st.card__icon_logo : ""}`}>
                  {m.logo ? <img src={m.logo} alt={tr(m.name)} /> : m.emoji ? m.emoji : <Ico n={m.icon} />}
                </span>
                <span className={st.card__name}>{tr(m.name)}</span>
                <span className={st.card__desc}>{m.desc[language]}</span>
                <span className={`${st.tag} ${tagCls[m.tag]}`}><Ico n={tagIcon[m.tag]} size={12} />{tagLabel[m.tag][language]}</span>
                <span className={st.card__btn}><Ico n="arrow" size={13} />{t.instruction[language]}</span>
              </button>
            ))}
            <button className={`${st.card} ${st.card_wide}`} onClick={() => toggle(swift.id)} type="button">
              <span className={st.card__icon}><Ico n={swift.icon} /></span>
              <span className={st.wideText}>
                <span className={st.wideText__title}>{swift.title[language]}</span>
                <span className={st.wideText__desc}>{swift.desc[language]}</span>
              </span>
              <span className={st.card__btn}><Ico n="file" size={13} />{t.requisites[language]}</span>
            </button>
          </div>
        </div>
      </section>

      {/* HOW TO */}
      <section className={st.howto}>
        <div className={st.wrap}>
          <div className={st.head}>
            <h2>{t.htHead[language]}</h2>
            <p>{t.htSub[language]}</p>
          </div>
          <div className={st.steps}>
            {htSteps.map((s, i) => (
              <div key={i} className={st.step}>
                <div className={st.step__num}>{i + 1}</div>
                <div className={st.step__title}>{s.title[language]}</div>
                <div className={st.step__desc}>{s.desc[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <section className={st.accord}>
        <div className={st.wrap}>
          <div className={st.head}>
            <h2>{t.acHead[language]}</h2>
            <p>{t.acSub[language]}</p>
          </div>
          <div className={st.acList}>
            {accItems.map((m) => {
              const isOpen = open === m.id;
              return (
                <div key={m.id} className={`${st.ac} ${isOpen ? st.ac_open : ""}`}>
                  <button className={st.ac__row} onClick={() => toggle(m.id)} type="button">
                    <span className={`${st.ac__icon} ${m.logo ? st.ac__icon_logo : ""}`}>
                      {m.logo ? <img src={m.logo} alt={tr(m.name)} /> : <Ico n={m.icon || "mobile"} size={17} />}
                    </span>
                    <span className={st.ac__title}>{tr(m.title || m.name)}</span>
                    <span className={st.ac__arr}><Ico n="chevron" size={16} /></span>
                  </button>
                  {isOpen && <div className={st.ac__body}>{m.body[language]}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={st.ctaSection}>
        <div className={st.cta}>
          <div className={st.cta__text}>
            <h3>{t.ctaTitle[language]}</h3>
            <p>{t.ctaSub[language]}</p>
          </div>
          <div className={st.cta__btns}>
            <a className={st.cta__main} href={TG} target="_blank" rel="noopener noreferrer"><Ico n="tg" size={15} />{t.ctaTg[language]}</a>
            <a className={st.cta__sec} href={`tel:${PHONE}`}><Ico n="phone" size={14} />{PHONE_TXT}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
