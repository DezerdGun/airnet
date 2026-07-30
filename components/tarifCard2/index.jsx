import Drop from "../drop";
import st from "../tarifCard/tarifCard.module.scss";

const IconSsd = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="currentColor"><path d="M160-280h640v-240H160v240Zm562.5-77.5Q740-375 740-400t-17.5-42.5Q705-460 680-460t-42.5 17.5Q620-425 620-400t17.5 42.5Q655-340 680-340t42.5-17.5ZM880-600H767l-80-80H273l-80 80H80l137-137q11-11 25.5-17t30.5-6h414q16 0 30.5 6t25.5 17l137 137ZM160-200q-33 0-56.5-23.5T80-280v-320h800v320q0 33-23.5 56.5T800-200H160Z"/></svg>
);
const IconSites = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="currentColor"><path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
);
const IconSsl = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="currentColor"><path d="M480-96q-135-33-223.5-152.84Q168-368.69 168-515v-229l312-120 312 120v229q0 146.31-88.5 266.16Q615-129 480-96Zm0-75q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z"/></svg>
);
const IconDomain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="currentColor"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-360H168v360Zm270-40L302-440l51-51 85 85 169-170 51 51-220 221Zm-270 40v-432 432Z"/></svg>
);
const IconNet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="currentColor"><path d="M475.67-307.83q41.66-1.17 61-30.84l218.66-338L420-456q-29 19.33-30.83 61-1.84 41.67 21.5 65 23.33 23.33 65 22.17Zm3-491.5q57.66 0 117.16 17.83t113.5 58.83l-60 40.67q-41-25.67-87.16-38.17-46.17-12.5-83.52-12.5-137.98 0-234.98 97.98t-97 237.35q0 44.01 12.16 88.34 12.17 44.33 34.5 82.33h570q22.34-36.66 34.5-82.33Q810-354.67 810-400q0-40-11.17-83.67-11.16-43.66-38.16-81.66l42-60Q838-572.33 856.5-517t20.17 112.33q1.66 59-12.34 111.67t-41 98.33q-11.66 21.34-27 28Q781-160 760.67-160H196q-18.33 0-35.67-9Q143-178 134-194.67q-26-47-40-96.83T80-397.33q0-83 31.5-156.17 31.5-73.17 85.67-127.67 54.16-54.5 126.95-86.33t154.55-31.83Zm-3.67 325Z"/></svg>
);
const IconTasix = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="currentColor"><path d="M303.69-144q-34.69 0-64.19-15T182-205q-40.94-45.32-63.97-108.11T95-442q0-77.2 30.5-145.1Q156-655 208.5-706t122.46-80.5q69.96-29.5 149.5-29.5t149.04 30q69.5 30 122 82T834-582.5q30 69.5 30 148.3 0 71.38-24.4 133.49-24.39 62.11-69.28 104.75Q743-170 713.94-157q-29.06 13-59.06 13-16.88 0-34.88-4.5-18-4.5-35-12.5l-57-28q-11-5-21.5-7.5T483-199q-15 0-30.23 3.5T424-185l-49 24q-17 8-35 12.5t-36.31 4.5Zm.31-71q10 0 19.5-2.5T343-225l48-25q20-11 43.16-16 23.16-5 46.84-5 22 0 41.57 4.29Q542.13-262.43 560-253l56 28q11 5 19.5 7.5T654-215q17 0 33.5-7.5T721-246q35-32 53-79.5T792-429q0-132-90.54-223.5t-221-91.5Q350-744 258.5-653.21T167-433q0 56 18.5 104.5T238-247q17 17.3 33 24.65 16 7.35 33 7.35Zm176-265Zm51 86.85q21-21.15 21-50.85 0-8-1.75-16T545-476l53-69q12 14 19.88 30.08Q625.75-498.85 631-480h73q-14-84-77.19-138T480-672q-85 0-148 54.5T256-480h72.6q12.4-53 54.97-86.5t96.04-33.5q16.83 0 31.68 3 14.85 3 28.71 9l-54.85 72H480.2q-29.79 0-50.99 21.21-21.21 21.21-21.21 51T429.21-393q21.21 21 51 21T531-393.15Z"/></svg>
);
const IconPanel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor"><path d="M300-300h160v-160H300v160Zm0-200h160v-160H300v160Zm200 200h160v-160H500v160Zm0-200h160v-160H500v160ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/></svg>
);
const IconCms = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
);
const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor"><path d="m438-339 220-221-51-51-169 170-85-85-51 51 136 136Zm42 243q-135-33-223.5-152.84Q168-368.69 168-515v-229l312-120 312 120v229q0 146.31-88.5 266.16Q615-129 480-96Zm0-75q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z"/></svg>
);
const IconFlame = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor"><path d="M264-384q0 46 19.5 87.5T338-223q-1-5-1.5-10t-.5-10q0-27 10-50.5t27-42.5l107-120 107 120q17 20 27 43.5t10 49.5q0 5-.5 10.5T622-222q35-29 54.5-71.5T696-384q0-51-17.5-100.5T628-576q-17 11-35.5 17t-40.5 6q-52 0-91.5-32T411-668q-36 33-63 67.5T302-530q-19 36-28.5 73t-9.5 73Zm216 36-53 60q-9 11-14 22.5t-5 25.5q0 30 21 51t51 21q30 0 51-21t21-51q0-14-5-26t-14-22l-53-60Zm0-468v119q0 30 21 51t51 21q17 0 31.5-7t24.5-20l16-20q64 38 104 118.5T768-384q0 120-84 204T480-96q-120 0-204-84t-84-204q0-112 76-226.5T480-816Z"/></svg>
);
const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
);

export default function TarifCard2({ index, tarif, show, setShow, language, period }) {
  const langData = {
    mb: { ru: "МБ", uz: "MB", en: "MB" },
    count: { ru: "Кол-во сайтов", uz: "Saytlar soni", en: "Number of sites" },
    free: { ru: "Бесплатно", uz: "Bepul", en: "Free" },
    ssl: { ru: "SSL", uz: "SSL", en: "SSL" },
    domen: { ru: "Домен .UZ", uz: ".UZ domeni", en: "Domain .UZ" },
    present: { ru: "В подарок", uz: "Sovg'a", en: "As a gift" },
    channel: { ru: "Интернет", uz: "Internet", en: "Internet" },
    speed: { ru: "Мбит/сек", uz: "Mbit/s", en: "Mbps" },
    gigSpeed: { ru: "Гбит/сек", uz: "Gbit/s", en: "Gbps" },
    cpanel: { ru: "cPanel", uz: "cPanel", en: "cPanel" },
    cms: { ru: "CMS в 1 клик", uz: "1 bosishda CMS", en: "1-click CMS" },
    ddos: { ru: "DDoS защита", uz: "DDoS himoya", en: "DDoS protection" },
    order: { ru: "Заказать хостинг", uz: "Buyurtma berish", en: "Order hosting" },
    topCard: { ru: "Рекомендуем", uz: "Biz tavsiya qilamiz", en: "We recommend" },
    start: { ru: "Запуск за минуты", uz: "Bir necha daqiqada", en: "Ready in minutes" },
    uptime: { ru: "Uptime 99.98%", uz: "Uptime 99.98%", en: "Uptime 99.98%" },
    sum: { ru: "сум", uz: "so'm", en: "sum" },
  };

  const usePeriod = typeof period === "number" && Array.isArray(tarif.prices);
  const active = usePeriod ? tarif.prices[Math.min(period, tarif.prices.length - 1)] : null;
  const featured = Boolean(tarif.activeTop);

  return (
    <div className={`${st.card} ${featured ? st.card_featured : ""}`}>
      {featured && (
        <div className={st.badge}>
          <IconFlame />
          {langData.topCard[language]}
        </div>
      )}

      <div className={st.top}>
        <div className={st.head}>
          <h3 className={st.name}>{tarif.title[language]}</h3>
        </div>

        {usePeriod ? (
          <div className={st.price}>
            <span className={st.price__num}>{active.price}</span>
            <span className={st.price__unit}>
              {langData.sum[language]} / {active.dateOff}
            </span>
          </div>
        ) : (
          <div className={st.priceDrop}>
            <Drop index={index} item={tarif.prices} isTarifCard={true} show={show} setShow={setShow} language={language} />
          </div>
        )}
      </div>

      <div className={st.specs}>
        <div className={st.spec}>
          <span className={st.spec__left}><IconSsd />SSD</span>
          <span className={st.spec__val}>{tarif.ssd} {langData.mb[language]}</span>
        </div>
        <div className={st.spec}>
          <span className={st.spec__left}><IconSites />{langData.count[language]}</span>
          <span className={st.spec__val}>{tarif.sites}</span>
        </div>
        <div className={st.spec}>
          <span className={st.spec__left}><IconSsl />{langData.ssl[language]}</span>
          <span className={`${st.spec__val} ${st.spec__val_hl}`}>{langData.free[language]}</span>
        </div>
        <div className={st.spec}>
          <span className={st.spec__left}><IconDomain />{langData.domen[language]}</span>
          <span className={st.spec__val}>{langData.present[language]}*</span>
        </div>

        <span className={st.specDivider} />

        <div className={st.spec}>
          <span className={st.spec__left}><IconNet />{langData.channel[language]}</span>
          <span className={st.spec__val}>250 {langData.speed[language]}</span>
        </div>
        <div className={st.spec}>
          <span className={st.spec__left}><IconTasix />TAS-IX / UZ-IX</span>
          <span className={`${st.spec__val} ${st.spec__val_hl}`}>1 {langData.gigSpeed[language]}</span>
        </div>
      </div>

      <div className={st.chips}>
        <span className={st.chip}><IconPanel />{langData.cpanel[language]}</span>
        <span className={st.chip}><IconCms />{langData.cms[language]}</span>
        <span className={st.chip}><IconShield />{langData.ddos[language]}</span>
      </div>

      <div className={st.cta}>
        <a
          className={`${st.ctaBtn} ${featured ? st.ctaBtn_primary : st.ctaBtn_secondary}`}
          href={tarif.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {langData.order[language]}
          <IconArrow />
        </a>
      </div>

      <div className={st.foot}>
        <span className={st.foot__item}>{langData.start[language]}</span>
        <span className={st.foot__item}>{langData.uptime[language]}</span>
      </div>
    </div>
  );
}
