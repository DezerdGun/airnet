import SEO from "@/components/seo";
import Image from "next/image";
import styles from "./details.module.scss";
import Container from "@/components/container";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

const Details = ({ language }) => {
  const infoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
  );
  const addressIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
  const messageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const langData = {
    seoTitle: {
      ru: "Реквизиты компании | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Реквизиты компании | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Реквизиты компании | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descTitle: {
      ru: "Банковские реквизиты компании OOO AIRNET",
      uz: "Банковские реквизиты компании OOO AIRNET",
      en: "Банковские реквизиты компании OOO AIRNET",
    },
    title: {
      ru: "Реквизиты компании",
      uz: "Kompaniya tafsilotlari",
      en: "Company details",
    },
    description: {
      ru: "Юридическая информация",
      uz: "Huquqiy ma'lumotlar",
      en: "Legal information",
    },
    author: {
      ru: "Данаев Алмаз",
      uz: "Danaev Almaz",
      en: "Danaev Almaz",
    },
    prinimatel: {
      ru: "OOO",
      uz: "OOO",
      en: "OOO",
    },
    inn: {
      ru: "ИНН",
      uz: "KARVONSAROY",
      en: "INN",
    },
    oked: {
      ru: "ОКЭД",
      uz: "OKED",
      en: "OKED",
    },
    addressTitle: {
      ru: "Адрес",
      uz: "Manzil",
      en: "Address",
    },
    address: {
      ru: "100060, г. Ташкент, Мирабадский район, ул. Савр, 1А",
      uz: "100060, Toshkent sh., Mirobod tumani, Savr ko‘chasi, 1A",
      en: "100060, Tashkent, Mirabad district, Savr street, 1A",
    },
    banks: {
      ru: "Банковские реквизиты",
      uz: "Bank rekvizitlari",
      en: "Bank details",
    },
    aikb: {
      ru: "Банк",
      uz: "Bank",
      en: "Bank",
    },
    mfo: {
      ru: "МФО",
      uz: "MFO",
      en: "MFO",
    },
    count: {
      ru: "Р/Счет",
      uz: "Tekshirish",
      en: "Check",
    },
    contactInfo: {
      ru: "Контактная информация",
      uz: "Bog'lanish uchun ma'lumot",
      en: "Contact Information",
    },
    korrespondent: {
      ru: "Для корреспонденции",
      uz: "Xat yozish uchun",
      en: "For Correspondence",
    },
    address2: {
      ru: "100170, г. Ташкент, Мирзо-Улугбекский район, ул. Сайрам, 25",
      uz: "100170, Toshkent sh., Mirzo Ulugʻbek tumani, Sayram koʻchasi, 25-uy",
      en: "100170, Tashkent, Mirzo-Ulugbek district, Sairam street, 25",
    },
    nds: {
      ru: "Регистрационный номер НДС",
      uz: "QQS davlat raqami",
      en: "VAT registration number",
    },
  };

  return (
    <>
    <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />
    <main className={styles.details}>
		<BreadCrumbs data={[{ name: 'Реквизиты компании' }]} />
		<PageBreadcrumb links={[{ name: 'Реквизиты компании' }]} />
      <section className={styles.details__banner}>
        <Container className="pt-0">
          <div>
            <h1>{langData.title[language]}</h1>
            <p>{langData.description[language]}</p>
          </div>
        </Container>
      </section>
      <section className={styles.details__block}>
        <Container>
          {/* <div className={styles.details__block__author}>
            <Image src="/author/almaz-danaev.jpg" width={110} height={110} priority />
            <h5>{langData.author[language]}</h5>
            <p>{langData.prinimatel[language]}</p>
          </div> */}
          <div className={styles.details__block__content}>
            <div className={styles.details__block__content__item}>
              <h5>{langData.description[language]}:</h5>
              <ul>
                <li>
                  <span>
                    {infoIcon}
                    {langData.inn[language]}:
                  </span>{" "}
                  305264467
                </li>
                <li>
                  <span>
                    {addressIcon}
                    {langData.addressTitle[language]}:
                  </span>{" "}
                  {langData.address[language]}
                </li>
                <li>
                  <span>
                    {infoIcon}
                    {langData.oked[language]}:
                  </span>{" "}
                  63110
                </li>
                <li>
                  <span>
                    {infoIcon}
                    {langData.nds[language]}:
                  </span>{" "}
                  326010205838
                </li>
              </ul>
            </div>
            <div className={styles.details__block__content__item}>
              <h5> {langData.banks[language]}:</h5>
              <ul>
                <li>
                  <span>
                    {infoIcon}
                    {langData.aikb[language]}:
                  </span>{" "}
                  АИКБ «Ипак Йули»
                </li>
                <li>
                  <span>
                    {phoneIcon}
                    {langData.mfo[language]}:
                  </span>{" "}
                  01101
                </li>
                <li>
                  <span>
                    {messageIcon}
                    {langData.count[language]}:
                  </span>{" "}
                  2020 8000 9008 3658 4001
                </li>
              </ul>
            </div>
            <div className={styles.details__block__content__item}>
              <h5> {langData.contactInfo[language]}:</h5>
              <ul>
                <li>
                  <span>
                    {addressIcon}
                    {langData.korrespondent[language]}:
                  </span>{" "}
                  {langData.address2[language]}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
    </>
  );
};

export default Details;
