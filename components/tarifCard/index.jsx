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
      ru: "ОС",
      uz: "OT",
      en: "OS",
    },
    winOrLin: {
      ru: "Windows или Linux",
      uz: "Windows yoki Linux",
      en: "Windows or Linux",
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
      ru: "Канал",
      uz: "Kanal",
      en: "Channel",
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
      uz: "Buyurtma berish",
      en: "Order a server",
    },
  };

  return (
    <div className={st.tarifCard}>
      <div className={st.tarifCard__header}>
        <h4>{tarif.title[language]}</h4>
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
      </div>
      <table>
        <tr>
          <td>CPU</td>
          <td>RAM</td>
          <td>SSD</td>
        </tr>
        <tr>
          <th>
            {tarif.cpu}{" "}
            {tarif.cpu === 2 || tarif.cpu === 4 || tarif.cpu === 22
              ? langData.yadra[language]
              : langData.yader[language]}
          </th>
          <th>
            {tarif.ram} {langData.gb[language]}
          </th>
          <th>
            {tarif.ssd} {langData.gb[language]}
          </th>
        </tr>
      </table>
      <table>
        <tr>
          <td colSpan={2}>{langData.os[language]}</td>
        </tr>
        <tr>
          <th colSpan={2}>{tarif?.os ?? langData.winOrLin[language]}</th>
        </tr>
      </table>
      <table>
        <tr>
          <td>{langData.ip[language]}</td>
          <td>{langData.virtual[language]}</td>
        </tr>
        <tr>
          <th>{langData.address[language]}</th>
          <th>VMware</th>
        </tr>
      </table>
      <table>
        <tr>
          <td>{langData.channel[language]}</td>
          <td>TAS-IX</td>
        </tr>
        <tr>
          <th>
            {tarif.net} {langData.speed[language]}
          </th>
          <th>1 {langData.gigSpeed[language]}</th>
        </tr>
      </table>
      <hr />
      <button>
        <a href={tarif.link} target="_blank" rel="noopener noreferrer">
          {langData.order[language]}
        </a>
      </button>
    </div>
  );
}
