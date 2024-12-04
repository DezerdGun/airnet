import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Container from "../container/index.jsx";
import st from "./regDomain.module.scss";
import { useRouter } from "next/router";

export default function RegDomain({ language }) {
  const langData = {
    title: {
      ru: "Зарегистрируем домен?",
      uz: "Domenni ro'yxatdan o'tkazamizmi?",
      en: "Shall we register a domain?",
    },
  };

  return (
    <div className={st.regDomain}>
      <Container title={langData.title[language]}>
        <RegDomainBlock language={language} />
      </Container>
    </div>
  );
}

export const RegDomainBlock = ({ language, showDomains = true, setWhoIs }) => {
  const langData = {
    inputPlaceholder: {
      ru: "Введите название домена например: airnet",
      uz: "Domen nomini kiriting, masalan: airnet",
      en: "Enter the domain name for example: airnet",
    },
    check: {
      ru: "Проверить",
      uz: "Tekshirish",
      en: "Check",
    },
    domenBooked: {
      ru: "доменное имя в данное время недоступно для регистрации.",
      uz: "domen nomi hozirda ro‘yxatdan o‘tish uchun mavjud emas.",
      en: "domain name is currently unavailable for registration.",
    },
    domenFree: {
      ru: "доменное имя в данное время доступно для регистрации.",
      uz: "domen nomi hozirda ro'yxatdan o'tish uchun mavjud.",
      en: "domain name is currently available for registration.",
    },
    sumVg: {
      ru: "сум/год",
      uz: "so'm/yil",
      en: "sum/year",
    },
    Valid: {
      ru: "Доступно",
      uz: "Mavjud",
      en: "Available",
    },
    notValid: {
      ru: "Временно не доступно",
      uz: "Vaqtinchalik mavjud emas",
      en: "Temporarily unavailable",
    },
    domainSettings: {
      ru: "ПАРАМЕТРЫ ДОМЕНА",
      uz: "DOMAIN SOZLAMALARI",
      en: "DOMAIN SETTINGS",
    },
    domain: {
      ru: "Домен",
      uz: "Domen",
      en: "Domain",
    },
    status: {
      ru: "Статус",
      uz: "Holat",
      en: "Status",
    },
    active: {
      ru: "Активный",
      uz: "Faol",
      en: "Active",
    },
    descriptionTitle: {
      ru: "Описание",
      uz: "Tavsif",
      en: "Description",
    },
    firstNS: {
      ru: "Первый NS",
      uz: "Birinchi NS",
      en: "First NS",
    },
    secNS: {
      ru: "Второй NS",
      uz: "Ikkinchi NS",
      en: "Second NS",
    },
    thirdNS: {
      ru: "Третий NS",
      uz: "Uchinchi NS",
      en: "Third NS",
    },
    fourthNS: {
      ru: "Четвертый NS",
      uz: "To'rtinchi NS",
      en: "Fourth NS",
    },
    registrator: {
      ru: "Регистратор",
      uz: "Registrator",
      en: "Registrar",
    },
    createdAt: {
      ru: "Дата обновления",
      uz: "Yangilanish sanasi",
      en: "Update date",
    },
    until: {
      ru: "Активен до",
      uz: "Faol",
      en: "Active until",
    },
    clientSettings: {
      ru: "ПАРАМЕТРЫ КЛИЕНТА",
      uz: "MIJOLAR PARAMETRLARI",
      en: "CLIENT PARAMETERS",
    },
    type: {
      ru: "Тип",
      uz: "Tur",
      en: "Type",
    },
    organistaion: {
      ru: "Организация",
      uz: "Tashkilot",
      en: "Organization",
    },
    region: {
      ru: "Регион",
      uz: "Region",
      en: "Region",
    },
    postIndex: {
      ru: "Почтовый индекс",
      uz: "Pochta indeksi",
      en: "Postal code",
    },
    city: {
      ru: "Город",
      uz: "Shahar",
      en: "City",
    },
    country: {
      ru: "Страна",
      uz: "Mamlakat",
      en: "Country",
    },
    prefix: {
      ru: "Префикс",
      uz: "Prefiks",
      en: "Prefix",
    },
  };
  const pattern =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
  const router = useRouter();
  const [isDomainFree, setIsDomainFree] = useState({
      domain: "",
      isShow: false,
      isActive: false,
    }),
    [modal, setModal] = useState(false),
    [loading, setLoading] = useState(false),
    [selectPlaceholder, setSelectPlaceholder] = useState(); // use useState for taking current value of select

  useEffect(() => {
    if (!modal) {
      document.body.style = "overflow:unset";
      return;
    }

    document.body.style = "overflow:hidden";

    const outerClick = (event) => {
      const target = event.target;
      if (!target.closest("#modalBlock")) {
        setModal(false);
      }
    };

    document.addEventListener("click", outerClick);

    return () => document.removeEventListener("click", outerClick);
  }, [modal]);

  const checkDomain = (e) => {
    e.preventDefault();

    setLoading(true);
    let selectedDomainName = document.querySelector("#domainName").value;
    let domain = `${
      document.querySelector("#domain").value
    }${selectedDomainName}`;

    // if (!domain.includes(".uz")) {
    //   domain += ".uz";
    //   document.querySelector("#domain").value = domain;
    // }

    axios
      .post("https://api.airnet.uz/api/check/domain", {
        domain,
      })
      .then((res) => {
        setLoading(false);

        if (
          (res.data.data?.dstatus === "empty" ||
            res.data.result === "Available") &&
          pattern.test(domain)
        ) {
          setIsDomainFree({ domain, isShow: true, isActive: false });
          setWhoIs && setWhoIs(null);
        } else {
          setIsDomainFree({
            domain,
            isShow: true,
            isActive: true,
            data: res.data.data || null,
          });
          setWhoIs && setWhoIs(res.data.data);
        }
      });
  };

  return (
    <>
      <form onSubmit={checkDomain} className={st.regDomain__block}>
        www.{" "}
        <input
          id="domain"
          placeholder={
            langData.inputPlaceholder[language] +
            `.${
              selectPlaceholder
                ? selectPlaceholder.slice(1)
                : router.pathname.slice(9) &&
                  router.pathname.slice(9) !== "whois"
                ? router.pathname.slice(9)
                : "uz"
            }`
          }
          required
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^-\p{L}\d]/gu, "");
          }}
        />
        <select
          id="domainName"
          defaultValue={`.${router.pathname.slice(9)}` || ".uz"}
          className={st.regDomain__block__select}
          onChange={({ target }) => {
            setSelectPlaceholder(target.value);
            // router.push(`/domains/${target.value.slice(1)}`);
          }}
        >
          <option value=".uz">.uz</option>
          <option value=".com">.com</option>
          <option value=".ru">.ru</option>
          <option value=".net">.net</option>
          <option value=".in">.in</option>
          <option value=".su">.su</option>
        </select>
        <button type="submit" disabled={loading}>
          {langData.check[language]}{" "}
          {loading && (
            <div
              class="spinner-border text-light spinner-border-sm"
              role="status"
            ></div>
          )}
        </button>
      </form>

      {isDomainFree.isShow && (
        <p className={st.regDomain__text}>
          <strong>{isDomainFree.domain}</strong>{" "}
          {isDomainFree.isActive ? (
            <span className={st.regDomain__text__red}>
              {langData.domenBooked[language]}{" "}
              {showDomains && isDomainFree?.data?.dStatus && (
                <span
                  className={st.regDomain__text__red}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => setModal(!modal)}
                >
                  whois
                </span>
              )}
            </span>
          ) : (
            <>
              <span className={st.regDomain__text__green}>
                {langData.domenFree[language]}
              </span>{" "}
              {language == "uz" ? (
                <>
                  Buyurtma qilish uchun{" "}
                  <a
                    href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ushbu havolaga
                  </a>{" "}
                  bosing
                </>
              ) : language == "en" ? (
                <>
                  Click{" "}
                  <a
                    href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    To order
                  </a>{" "}
                  to register a domain name.
                </>
              ) : (
                <>
                  Нажмите{" "}
                  <a
                    href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Заказать
                  </a>{" "}
                  для регистрации доменного имени.
                </>
              )}
            </>
          )}
        </p>
      )}

      {showDomains && (
        <ul className={st.regDomain__price}>
          <li className={st.regDomain__price__item}>
            <div className={st.regDomain__price__item__block}>
              .UZ - 27.000 {langData.sumVg[language]}
            </div>
            <span>{langData.Valid[language]}</span>
          </li>
          <li className={st.regDomain__price__item}>
            <div className={`${st.regDomain__price__item__block}`}>
              .RU - 35.000 {langData.sumVg[language]}
            </div>
            <span>{langData.Valid[language]}</span>
          </li>
          <li className={st.regDomain__price__item}>
            <div className={`${st.regDomain__price__item__block}`}>
              .COM - 200.000 {langData.sumVg[language]}
            </div>
            <span>{langData.Valid[language]}</span>
          </li>
          <li className={st.regDomain__price__item}>
            <div
              className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}
            >
              .NET - 150.000 {langData.sumVg[language]}
            </div>
            <span>{langData.notValid[language]}</span>
          </li>
          <li className={st.regDomain__price__item}>
            <div
              className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}
            >
              .ORG - 200.000 {langData.sumVg[language]}
            </div>
            <span>{langData.notValid[language]}</span>
          </li>
          {/* <li className={st.regDomain__price__item}>
          <div className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}>
            .PRO - 60.000 {langData.sumVg[language]}
          </div>
          <span>{langData.notValid[language]}</span>
        </li>
        <li className={st.regDomain__price__item}>
          <div className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}>
            .BIZ - 60.000 {langData.sumVg[language]}
          </div>
          <span>{langData.notValid[language]}</span>
        </li>
        <li className={st.regDomain__price__item}>
          <div className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}>
            .US - 180.000 {langData.sumVg[language]}
          </div>
          <span>{langData.notValid[language]}</span>
        </li>
        <li className={st.regDomain__price__item}>
          <div className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}>
            .BANK - 2.000.000 {langData.sumVg[language]}
          </div>
          <span>{langData.notValid[language]}</span>
        </li>
        <li className={st.regDomain__price__item}>
          <div className={`${st.regDomain__price__item__block} ${st.regDomain__price__item__block__crossed}`}>
            .SHOP - 50.000 {langData.sumVg[language]}
          </div>
          <span>{langData.notValid[language]}</span>
        </li> */}
        </ul>
      )}

      {/* <p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p> */}

      <div className={`${st.modal} ${modal ? st.modal__active : ""}`}>
        <div id="modalBlock" className={st.modal__block}>
          <div
            className="table"
            style={{ overflowX: "auto", textAlign: "left" }}
          >
            <table
              className="table table-striped"
              style={{ minWidth: "800px" }}
            >
              <thead>
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    <strong>{langData.domainSettings[language]}</strong>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>{langData.domain[language]}:</strong>
                  </td>
                  <td colSpan="3">{isDomainFree?.data?.dName ?? "-"}</td>
                  <td>
                    <strong>{langData.status[language]}:</strong>
                  </td>
                  <td colSpan="3">{isDomainFree?.data?.dStatus}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.descriptionTitle[language]}:</strong>
                  </td>
                  <td colSpan="3">{isDomainFree?.data?.sDesc}</td>
                  <td>
                    <strong>{langData.firstNS[language]}:</strong>
                  </td>
                  <td colSpan="3">
                    {langData.domain[language]}: {isDomainFree?.data?.sNs1}{" "}
                    {isDomainFree?.data?.sNs1 !== "not.defined." &&
                      `IP: ${isDomainFree?.data?.sIp1}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.registrator[language]}:</strong>
                  </td>
                  <td colSpan="3">{isDomainFree?.data?.sRegistrator}</td>
                  <td>
                    <strong>{langData.secNS[language]}:</strong>
                  </td>
                  <td colSpan="3">
                    {langData.domain[language]}: {isDomainFree?.data?.sNs2}{" "}
                    {isDomainFree?.data?.sNs2 !== "not.defined." &&
                      `IP: ${isDomainFree?.data?.sIp2}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.createdAt[language]}:</strong>
                  </td>
                  <td colSpan="3">{isDomainFree?.data?.dActivated} г.</td>
                  <td>
                    <strong>{langData.thirdNS[language]}:</strong>
                  </td>
                  <td colSpan="3">
                    {langData.domain[language]}: {isDomainFree?.data?.sNs3}{" "}
                    {isDomainFree?.data?.sNs3 !== "not.defined." &&
                      `IP: ${isDomainFree?.data?.sIp3}`}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.until[language]}:</strong>
                  </td>
                  <td colSpan="3">{isDomainFree?.data?.dExpired} г.</td>
                  <td>
                    <strong>{langData.fourthNS[language]}:</strong>
                  </td>
                  <td colSpan="3">
                    {langData.domain[language]}: {isDomainFree?.data?.sNs4}{" "}
                    {isDomainFree?.data?.sNs4 !== "not.defined." &&
                      `IP: ${isDomainFree?.data?.sIp4}`}
                  </td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    <strong>{langData.clientSettings[language]}</strong>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>{langData.type[language]}:</strong>
                  </td>
                  <td colSpan="7">{isDomainFree?.data?.sType}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.organistaion[language]}:</strong>
                  </td>
                  <td colSpan="7">{isDomainFree?.data?.sOrg}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.region[language]}:</strong>
                  </td>
                  <td colSpan="7">
                    {isDomainFree?.data?.sCustomerCity},{" "}
                    {isDomainFree?.data?.sCustomerCountry}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{langData.postIndex[language]}:</strong>
                  </td>
                  <td>{isDomainFree?.data?.sCustomerPost}</td>
                  <td>
                    <strong>{langData.city[language]}:</strong>
                  </td>
                  <td>{isDomainFree?.data?.sCustomerCity}</td>
                  <td>
                    <strong>{langData.country[language]}:</strong>
                  </td>
                  <td>{isDomainFree?.data?.sCustomerCountry}</td>
                  <td>
                    <strong>{langData.prefix[language]}:</strong>
                  </td>
                  <td>{isDomainFree?.data?.sCustomerState}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <table>
            <tr>
              <th>dName</th>
              <td>{isDomainFree?.data?.dName}</td>
            </tr>
            <tr>
              <th>sRegistrator</th>
              <td>{isDomainFree?.data?.sRegistrator}</td>
            </tr>
            <tr>
              <th>dStatus</th>
              <td>{isDomainFree?.data?.dStatus}</td>
            </tr>
            <tr>
              <th>sNs1</th>
              <td>{isDomainFree?.data?.sNs1}</td>
            </tr>
            <tr>
              <th>sIp1</th>
              <td>{isDomainFree?.data?.sIp1}</td>
            </tr>
            <tr>
              <th>sNs2</th>
              <td>{isDomainFree?.data?.sNs2}</td>
            </tr>
            <tr>
              <th>sIp2</th>
              <td>{isDomainFree?.data?.sIp2}</td>
            </tr>
            <tr>
              <th>sNs3</th>
              <td>{isDomainFree?.data?.sNs3}</td>
            </tr>
            <tr>
              <th>sNs4</th>
              <td>{isDomainFree?.data?.sNs4}</td>
            </tr>
            <tr>
              <th>dActivated</th>
              <td>{isDomainFree?.data?.dActivated}</td>
            </tr>
            <tr>
              <th>dExpired</th>
              <td>{isDomainFree?.data?.dExpired}</td>
            </tr>
            <tr>
              <th>sOrg</th>
              <td>{isDomainFree?.data?.sOrg}</td>
            </tr>
            <tr>
              <th>sCustomerPost</th>
              <td>{isDomainFree?.data?.sCustomerPost}</td>
            </tr>
            <tr>
              <th>sCustomerCity</th>
              <td>{isDomainFree?.data?.sCustomerCity}</td>
            </tr>
            <tr>
              <th>sCustomerRegion</th>
              <td>{isDomainFree?.data?.sCustomerRegion}</td>
            </tr>
            <tr>
              <th>sCustomerCountry</th>
              <td>{isDomainFree?.data?.sCustomerCountry}</td>
            </tr>
            <tr>
              <th>sCustomerState</th>
              <td>{isDomainFree?.data?.sCustomerState}</td>
            </tr>
            {/* <tr>
							<th>sTechsOrgRU</th>
							<td>{isDomainFree?.data?.sTechsOrgRU}</td>
						</tr>
						<tr>
							<th>sTechsPost</th>
							<td>{isDomainFree?.data?.sTechsPost}</td>
						</tr>
						<tr>
							<th>sTechsCityRU</th>
							<td>{isDomainFree?.data?.sTechsCityRU}</td>
						</tr>
						<tr>
							<th>sTechsRegion</th>
							<td>{isDomainFree?.data?.sTechsRegion}</td>
						</tr>
						<tr>
							<th>sTechsCountryRU</th>
							<td>{isDomainFree?.data?.sTechsCountryRU}</td>
						</tr>
						<tr>
							<th>sTechsState</th>
							<td>{isDomainFree?.data?.sTechsState}</td>
						</tr>
						<tr>
							<th>sBillsOrgRU</th>
							<td>{isDomainFree?.data?.sBillsOrgRU}</td>
						</tr>
						<tr>
							<th>sBillsPost</th>
							<td>{isDomainFree?.data?.sBillsPost}</td>
						</tr>
						<tr>
							<th>sBillsCityRU</th>
							<td>{isDomainFree?.data?.sBillsCityRU}</td>
						</tr>
						<tr>
							<th>sBillsRegion</th>
							<td>{isDomainFree?.data?.sBillsRegion}</td>
						</tr>
						<tr>
							<th>sBillsCountryRU</th>
							<td>{isDomainFree?.data?.sBillsCountryRU}</td>
						</tr>
						<tr>
							<th>sBillsState</th>
							<td>{isDomainFree?.data?.sBillsState}</td>
						</tr>
						<tr>
							<th>rcode</th>
							<td>{isDomainFree?.data?.rcode}</td>
						</tr> 
          </table> */}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          onClick={() => setModal(false)}
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      </div>
    </>
  );
};
