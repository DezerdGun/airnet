import Drop from "../drop";
import st from "./tarifCard.module.scss";

export default function TarifCard({ index, tarif, show, setShow, language }) {
  const langData = {
    yader: {
      ru: "ядер",
      uz: "yadroli",
      en: "cores",
    },
    yadra: {
      ru: "ядра",
      uz: "yadroli",
      en: "cores",
    },
    gb: {
      ru: "ГБ",
      uz: "GB",
      en: "GB",
    },
    os: {
      ru: "ДОПОЛНИТЕЛЬНО",
      uz: "ДОПОЛНИТЕЛЬНО",
      en: "ДОПОЛНИТЕЛЬНО",
    },
    winOrLin: {
      ru: "Windows / Linux",
      uz: "Windows / Linux",
      en: "Windows / Linux",
    },
    ip: {
      ru: "IP адресов",
      uz: "IP manzillar",
      en: "IP addresses",
    },
    virtual: {
      ru: "Виртуализация",
      uz: "Virtualizatsiya",
      en: "Virtualization",
    },
    address: {
      ru: "1 адрес",
      uz: "1 manzil",
      en: "1 address",
    },
    channel: {
      ru: "Интернет",
      uz: "Internet",
      en: "Internet",
    },
    speed: {
      ru: "Мбит/сек",
      uz: "Mbit/s",
      en: "Mbps",
    },
    gigSpeed: {
      ru: "Гбит/сек",
      uz: "Gbit/s",
      en: "Gbps",
    },
    order: {
      ru: "Заказать сервер",
      uz: "Serverga buyurtma bering",
      en: "Order a server",
    },
    topCard: { ru: "Рекомендуем", uz: "Biz tavsiya qilamiz", en: "We recommend" },
  };

  return (
    <div className={st.tarifCard}>
      <div className={st.tarifCard__header}>
        <h3>{tarif.title[language]}</h3>
        <span>{tarif.workstxt[language]}</span>
      </div>
      <div className={st.tarifCard__header__price}>
        <Drop
          index={index}
          item={tarif.prices}
          isTarifCard={true}
          show={show}
          setShow={setShow}
          language={language}
        />
      </div>
      <table>
        <tr>
          <td><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T720-120H160Zm0-80h560v-560H160v560Zm80-80h200v-160H240v160Zm240-280h160v-120H480v120Zm-240 80h200v-200H240v200Zm240 200h160v-240H480v240ZM160-760v560-560Z"/></svg> CPU</td>
          <td>
            {tarif.cpu}{" "}
            {tarif.cpu === 2 || tarif.cpu === 4 || tarif.cpu === 22
              ? langData.yadra[language]
              : langData.yader[language]}
            </td>
        </tr>
        <tr>
          <td><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z"/></svg> RAM</td>
          <td>{tarif.ram} {langData.gb[language]}</td>
        </tr>
        <tr>
          <td><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M160-280h640v-240H160v240Zm562.5-77.5Q740-375 740-400t-17.5-42.5Q705-460 680-460t-42.5 17.5Q620-425 620-400t17.5 42.5Q655-340 680-340t42.5-17.5ZM880-600H767l-80-80H273l-80 80H80l137-137q11-11 25.5-17t30.5-6h414q16 0 30.5 6t25.5 17l137 137ZM160-200q-33 0-56.5-23.5T80-280v-320h800v320q0 33-23.5 56.5T800-200H160Z"/></svg> SSD</td>
          <td>{tarif.ssd} {langData.gb[language]}</td>
        </tr>
        <tr>
          <td><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M475.67-307.83q41.66-1.17 61-30.84l218.66-338L420-456q-29 19.33-30.83 61-1.84 41.67 21.5 65 23.33 23.33 65 22.17Zm3-491.5q57.66 0 117.16 17.83t113.5 58.83l-60 40.67q-41-25.67-87.16-38.17-46.17-12.5-83.52-12.5-137.98 0-234.98 97.98t-97 237.35q0 44.01 12.16 88.34 12.17 44.33 34.5 82.33h570q22.34-36.66 34.5-82.33Q810-354.67 810-400q0-40-11.17-83.67-11.16-43.66-38.16-81.66l42-60Q838-572.33 856.5-517t20.17 112.33q1.66 59-12.34 111.67t-41 98.33q-11.66 21.34-27 28Q781-160 760.67-160H196q-18.33 0-35.67-9Q143-178 134-194.67q-26-47-40-96.83T80-397.33q0-83 31.5-156.17 31.5-73.17 85.67-127.67 54.16-54.5 126.95-86.33t154.55-31.83Zm-3.67 325Z"/></svg> {langData.channel[language]}</td>
          <td>{tarif.net} {langData.speed[language]}</td>
        </tr>
        <tr>
          <td><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M303.69-144q-34.69 0-64.19-15T182-205q-40.94-45.32-63.97-108.11T95-442q0-77.2 30.5-145.1Q156-655 208.5-706t122.46-80.5q69.96-29.5 149.5-29.5t149.04 30q69.5 30 122 82T834-582.5q30 69.5 30 148.3 0 71.38-24.4 133.49-24.39 62.11-69.28 104.75Q743-170 713.94-157q-29.06 13-59.06 13-16.88 0-34.88-4.5-18-4.5-35-12.5l-57-28q-11-5-21.5-7.5T483-199q-15 0-30.23 3.5T424-185l-49 24q-17 8-35 12.5t-36.31 4.5Zm.31-71q10 0 19.5-2.5T343-225l48-25q20-11 43.16-16 23.16-5 46.84-5 22 0 41.57 4.29Q542.13-262.43 560-253l56 28q11 5 19.5 7.5T654-215q17 0 33.5-7.5T721-246q35-32 53-79.5T792-429q0-132-90.54-223.5t-221-91.5Q350-744 258.5-653.21T167-433q0 56 18.5 104.5T238-247q17 17.3 33 24.65 16 7.35 33 7.35Zm176-265Zm51 86.85q21-21.15 21-50.85 0-8-1.75-16T545-476l53-69q12 14 19.88 30.08Q625.75-498.85 631-480h73q-14-84-77.19-138T480-672q-85 0-148 54.5T256-480h72.6q12.4-53 54.97-86.5t96.04-33.5q16.83 0 31.68 3 14.85 3 28.71 9l-54.85 72H480.2q-29.79 0-50.99 21.21-21.21 21.21-21.21 51T429.21-393q21.21 21 51 21T531-393.15Z"/></svg> TAS-IX / UZ-IX</td>
          <td>1 {langData.gigSpeed[language]}</td>
        </tr>
        <tr>
          <th colSpan={2}>
            <div className={st.tarifCard__ipcard}>
              <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#0d5446"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg> 1 IP-адрес
            </div>
          </th>
          <th colSpan={2}>
            <div className={st.tarifCard__ipcard}>
              <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#0d5446"><path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z"/></svg> VMware
            </div>
          </th>
        </tr>
        <tr>
          <th colSpan={2}><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M300-300h160v-160H300v160Zm0-200h160v-160H300v160Zm200 200h160v-160H500v160Zm0-200h160v-160H500v160ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg> {tarif?.os ?? langData.winOrLin[language]}</th>
        </tr>
      </table>
      <button>
        <a href={tarif.link} target="_blank" rel="noopener noreferrer">
          {langData.order[language]} <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
        </a>
      </button>
      <p className={st.tarifCard__topcard + ' ' + tarif.activeTop}>
          <span><svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#fcdd44"><path d="M264-384q0 46 19.5 87.5T338-223q-1-5-1.5-10t-.5-10q0-27 10-50.5t27-42.5l107-120 107 120q17 20 27 43.5t10 49.5q0 5-.5 10.5T622-222q35-29 54.5-71.5T696-384q0-51-17.5-100.5T628-576q-17 11-35.5 17t-40.5 6q-52 0-91.5-32T411-668q-36 33-63 67.5T302-530q-19 36-28.5 73t-9.5 73Zm216 36-53 60q-9 11-14 22.5t-5 25.5q0 30 21 51t51 21q30 0 51-21t21-51q0-14-5-26t-14-22l-53-60Zm0-468v119q0 30 21 51t51 21q17 0 31.5-7t24.5-20l16-20q64 38 104 118.5T768-384q0 120-84 204T480-96q-120 0-204-84t-84-204q0-112 76-226.5T480-816Z"/></svg> {langData.topCard[language]}</span>
      </p>
      <table>
        <tr>
          <td>
            <div className={st.tarifCard__bottomcard}>
            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="M360-816v-72h240v72H360Zm84 432h72v-240h-72v240Zm-94.92 261.49q-60.92-26.5-106.49-72.08-45.58-45.57-72.08-106.49Q144-362 144-432q0-70 26.51-130.92 26.5-60.92 72.08-106.49 45.57-45.58 106.49-72.08Q410-768 479.56-768q58.28 0 111.86 19.5T691-694l52-51 50 50-51 52q35 45 54.5 98.81T816-431.86q0 69.86-26.51 130.78-26.5 60.92-72.08 106.49-45.57 45.58-106.49 72.08Q550-96 480-96q-70 0-130.92-26.51ZM667-245q77-77 77-187t-77-187q-77-77-187-77t-187 77q-77 77-77 187t77 187q77 77 187 77t187-77ZM480-432Z"/></svg> Запуск от 30 минут
            </div>
          </td>
          <td>
            <div className={st.tarifCard__bottomcard}>
            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#0d5446"><path d="m438-339 220-221-51-51-169 170-85-85-51 51 136 136Zm42 243q-135-33-223.5-152.84Q168-368.69 168-515v-229l312-120 312 120v229q0 146.31-88.5 266.16Q615-129 480-96Zm0-75q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z"/></svg> Uptime 99.98%
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
