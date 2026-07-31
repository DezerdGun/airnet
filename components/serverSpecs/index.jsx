import Link from "next/link";
import { checkLang } from "@/utils/checkLang";
import { LINKS } from "../requirements";
import SpecIcon from "./icons.jsx";
import st from "./serverSpecs.module.scss";

export default function ServerSpecs({ language = "ru" }) {
  const t = {
    headTitle: {
      ru: "Ваш хостинг размещён на сервере с конфигурацией",
      uz: "Xostingingiz quyidagi konfiguratsiyali serverda joylashgan",
      en: "Your hosting runs on a server with this configuration",
    },
    headSub: {
      ru: "Оборудование корпоративного класса · Дата-центр TIER III · Ташкент",
      uz: "Korporativ darajadagi uskunalar · TIER III data-markazi · Toshkent",
      en: "Enterprise-grade hardware · TIER III data center · Tashkent",
    },
    badge: {
      ru: "Онлайн · Uptime 99.98%",
      uz: "Onlayn · Uptime 99.98%",
      en: "Online · Uptime 99.98%",
    },
    incTitle: {
      ru: "На всех тарифных планах включено",
      uz: "Barcha tarif rejalarida mavjud",
      en: "Included in every plan",
    },
    incSub: {
      ru: "Всё необходимое для стабильной работы — без скрытых доплат",
      uz: "Barqaror ishlash uchun kerak bo'lgan hamma narsa — yashirin to'lovlarsiz",
      en: "Everything you need for stable operation — no hidden fees",
    },
    cta: {
      ru: "Выбрать тариф",
      uz: "Tarifni tanlash",
      en: "Choose a plan",
    },
  };

  const hardware = [
    {
      icon: "ssd",
      label: { ru: "Жёсткие диски", uz: "Qattiq disklar", en: "Storage" },
      value: "12 × 1TB SSD",
      sub: { ru: "Enterprise · RAID5", uz: "Enterprise · RAID5", en: "Enterprise · RAID5" },
    },
    {
      icon: "ram",
      label: { ru: "Оперативная память", uz: "Operativ xotira", en: "Memory" },
      value: "256 GB DDR4",
      sub: { ru: "ECC · Registered", uz: "ECC · Registered", en: "ECC · Registered" },
    },
    {
      icon: "cpu",
      label: { ru: "Процессор", uz: "Protsessor", en: "CPU" },
      value: "2 × Intel Xeon",
      sub: { ru: "Dual-socket", uz: "Dual-socket", en: "Dual-socket" },
    },
    {
      icon: "raid",
      label: { ru: "Дисковый массив", uz: "Disk massivi", en: "Disk array" },
      value: { ru: "Аппаратный RAID5", uz: "Apparat RAID5", en: "Hardware RAID5" },
      sub: { ru: "Защита данных · VMware", uz: "Ma'lumot himoyasi · VMware", en: "Data protection · VMware" },
    },
  ];

  const included = [
    {
      icon: "infinity",
      tone: "green",
      title: { ru: "Безлимитный трафик", uz: "Cheksiz trafik", en: "Unlimited traffic" },
      text: {
        ru: "Никаких ограничений на соотношение входящего и исходящего трафика — платите только за тариф.",
        uz: "Kiruvchi va chiquvchi trafik nisbatiga cheklov yo'q — faqat tarif uchun to'laysiz.",
        en: "No limits on inbound/outbound traffic ratio — you pay only for the plan.",
      },
    },
    {
      icon: "folders",
      tone: "amber",
      title: { ru: "Безлимитные FTP-аккаунты", uz: "Cheksiz FTP-akkauntlar", en: "Unlimited FTP accounts" },
      text: {
        ru: "Создавайте неограниченное количество FTP-аккаунтов — удобно для раздельного доступа к каждому проекту.",
        uz: "Cheksiz FTP-akkaunt yarating — har bir loyiha uchun alohida kirish qulay.",
        en: "Create unlimited FTP accounts — handy for separate access per project.",
      },
    },
    {
      icon: "bolt",
      tone: "blue",
      title: { ru: "Скорость в интернет", uz: "Internet tezligi", en: "Internet speed" },
      text: {
        ru: "Внешний канал без ограничений по объёму.",
        uz: "Tashqi kanal hajm bo'yicha cheklovsiz.",
        en: "External channel with no volume caps.",
      },
      stat: { icon: "arrowUpRight", label: { ru: "250 Мбит/с", uz: "250 Mbit/s", en: "250 Mbps" } },
    },
    {
      icon: "shield",
      tone: "purple",
      title: { ru: "Без жёстких лимитов ресурсов", uz: "Qattiq resurs cheklovlarisiz", en: "No hard resource limits" },
      text: {
        ru: "Нет ограничений по аппаратным ресурсам. При росте посещаемости сайт не упадёт.",
        uz: "Apparat resurslariga cheklov yo'q. Tashriflar o'sganda sayt ishdan chiqmaydi.",
        en: "No hardware resource caps. Your site stays up when traffic spikes.",
      },
      stat: {
        icon: "users",
        label: { ru: "Гарантия 2 500 чел/сутки", uz: "Kafolat 2 500 kishi/kun", en: "Guaranteed 2,500 visitors/day" },
      },
    },
    {
      icon: "network",
      tone: "teal",
      title: { ru: "Скорость в TAS-IX / UZ-IX", uz: "TAS-IX / UZ-IX tezligi", en: "TAS-IX / UZ-IX speed" },
      text: {
        ru: "Прямое подключение к узбекскому интернет-обмену для минимального пинга внутри страны.",
        uz: "Mamlakat ichida minimal ping uchun O'zbekiston internet-almashinuviga to'g'ridan-to'g'ri ulanish.",
        en: "Direct peering with the Uzbek internet exchange for minimal in-country latency.",
      },
      stat: { icon: "arrowUpRight", label: { ru: "1 Гбит/с", uz: "1 Gbit/s", en: "1 Gbps" } },
    },
    {
      icon: "refresh",
      tone: "rose",
      title: { ru: "Возврат средств 3 дня", uz: "3 kun ichida pulni qaytarish", en: "3-day money back" },
      text: {
        ru: "Если не понравится — вернём 100% оплаты без вопросов в течение первых 3 дней.",
        uz: "Yoqmasa — birinchi 3 kun ichida to'lovni 100% qaytaramiz.",
        en: "Not satisfied? Full refund within the first 3 days, no questions asked.",
      },
    },
  ];

  const footItems = [
    { icon: "clock", label: { ru: "Запуск от 30 минут", uz: "30 daqiqada ishga tushirish", en: "Launch in 30 min" } },
    { icon: "pin", label: { ru: "Дата-центр в Ташкенте", uz: "Toshkentdagi data-markaz", en: "Data center in Tashkent" } },
    { icon: "headset", label: { ru: "Поддержка 24/7", uz: "24/7 qo'llab-quvvatlash", en: "Support 24/7" } },
    { icon: "certificate", label: { ru: "SLA 99.98%", uz: "SLA 99.98%", en: "SLA 99.98%" } },
  ];

  const tr = (v) => (typeof v === "string" ? v : v[language]);

  const left = included.filter((_, i) => i % 2 === 0);
  const right = included.filter((_, i) => i % 2 === 1);

  const renderItem = (item) => (
    <div key={tr(item.title)} className={st.inc__item}>
      <span className={`${st.inc__icon} ${st[`tone_${item.tone}`]}`}>
        <SpecIcon name={item.icon} size={19} />
      </span>
      <div className={st.inc__text}>
        <h4>{tr(item.title)}</h4>
        <p>{tr(item.text)}</p>
        {item.stat && (
          <span className={st.inc__stat}>
            <SpecIcon name={item.stat.icon} size={12} />
            {tr(item.stat.label)}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className={st.wrap}>
      <section className={st.server}>
        <div className={st.server__head}>
          <div className={st.server__headInner}>
            <div>
              <h2>{t.headTitle[language]}</h2>
              <p>{t.headSub[language]}</p>
            </div>
            <span className={st.server__badge}>{t.badge[language]}</span>
          </div>
        </div>

        <div className={st.hw}>
          {hardware.map((item) => (
            <div key={tr(item.label)} className={st.hw__item}>
              <span className={st.hw__icon}>
                <SpecIcon name={item.icon} size={22} />
              </span>
              <span className={st.hw__label}>{tr(item.label)}</span>
              <span className={st.hw__value}>{tr(item.value)}</span>
              <span className={st.hw__sub}>{tr(item.sub)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={st.included}>
        <div className={st.inc__head}>
          <h2>{t.incTitle[language]}</h2>
          <p>{t.incSub[language]}</p>
        </div>

        <div className={st.inc__body}>
          <div className={st.inc__col}>{left.map(renderItem)}</div>
          <div className={st.inc__col}>{right.map(renderItem)}</div>
        </div>

        <div className={st.inc__footer}>
          <div className={st.inc__footItems}>
            {footItems.map((f) => (
              <span key={tr(f.label)} className={st.inc__footItem}>
                <SpecIcon name={f.icon} size={14} />
                {tr(f.label)}
              </span>
            ))}
          </div>
          <Link href={checkLang(language) + LINKS.HOSTING + "#tarif"}>
            <a className={st.inc__cta}>
              {t.cta[language]}
              <SpecIcon name="arrowRight" size={16} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
