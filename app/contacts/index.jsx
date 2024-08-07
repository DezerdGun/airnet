import Container from "@/components/container";
import Partners from "@/components/partners";
import SEO from "@/components/seo";
import st from "./contacts.module.scss";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export default function Contacts({ language }) {
  const phone = (
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
        </svg>
      </span>
    ),
    content = [
      {
        title: {
          ru: "По всем техническим вопросам:",
          uz: "Hamma texnik savollar bo'yicha",
          en: "For all technical questions:",
        },
        description: <a href="mailto:info@airnet.uz">info@airnet.uz</a>,
      },
      {
        title: {
          ru: "По финансовым, предпродажным и организационным вопросам:",
          uz: "Moliyaviy, sotishdan oldingi va tashkiliy masalalar bo'yicha:",
          en: "On financial, pre-sales and organizational issues:",
        },
        description: <a href="mailto:info@airnet.uz">info@airnet.uz</a>,
      },
      {
        title: {
          ru: "По поводу жалоб и предложений:",
          uz: "Arizalar va takliflar bo'yicha",
          en: "About complaints and suggestions:",
        },
        description: <a href="mailto:admin@airnet.uz">admin@airnet.uz</a>,
      },
    ];

  const langData = {
    seoTitle: {
      ru: "Контактная информация | Airnet",
      uz: "Kontaktlar | Airnet",
      en: "Contact Information | Airnet",
    },
    desc: {
      ru: "Контактная информация компании Airnet",
      uz: "Airnet kompaniyasining kanttaktlari malumoti",
      en: "Airnet contact information",
    },
    headTitle: {
      ru: "Прием звонков с 10:00 до 19:00",
      uz: "Soat 10:00 dan 19:00 gacha qo'ng'iroqlarni qabul qilamiz",
      en: "Receiving calls from 10:00 to 19:00",
    },
    callNumber: {
      ru: "Абонентский отдел",
      uz: "Mijozlar honasi",
      en: "Subscriber department",
    },
    language: {
      ru: "Абонентский отдел",
      uz: "Mijozlar honasi",
      en: "Subscriber department",
    },
    tex: {
      ru: "Техническая поддержка",
      uz: "Texnik yordam",
      en: "Technical support",
    },
    telegram: {
      ru: "телеграм",
      uz: "telegram",
      en: "telegram",
    },
    quas: {
      ru: "Если Вы уже являетесь нашим клиентом, самый простой и быстрый способ связи — посредством тикет-системы в биллинге. Обращения через тикет систему рассматриваются с наиболее высоким приоритетом и максимально быстро.",
      uz: "Agar siz allaqachon bizning mijozimiz bo'lsangiz, biz bilan bog'lanishning eng oson va tezkor usuli chipta tizimi orqali. Chipta tizimi orqali arizalar imkon qadar tezroq ko'rib chiqiladi.",
      en: "If you are already our client, the easiest and fastest way to contact is through the ticket system in the billing. Requests through the ticket system are considered with the highest priority and as quickly as possible.",
    },
    room: {
      ru: "Личный кабинет",
      uz: "Shaxsiy kabinet",
      en: "Personal area",
    },
    title: {
      ru: "Приходите к нам в Ташкенте",
      uz: "Toshkentga keling",
      en: "Come to us in Tashkent",
    },
    location: {
      ru: "Узбекистан, г. Ташкент, ул. Сайрам, 25",
      uz: "Uzbekiston, Toshkent shaxri, Sayram ko'chasi 25",
      en: "Uzbekistan, Tashkent, Sairam street, 25",
    },
    cT: {
      ru: "Пишите по любым вопросам",
      uz: "Istalgan vaqtda murojat qiling",
      en: "Write for any questions",
    },
  };

  const breadCrumbs = [
    {
      name: {
        ru: "Наши контакты",
        uz: "Наши контакты",
        en: "Наши контакты",
      },
      link: "/contacts",
    },
  ];

  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.desc[language]} />

      {breadCrumbs && breadCrumbs.length ? (
      <>
        <BreadCrumbs data={breadCrumbs} language={language} />
        <PageBreadcrumb links={breadCrumbs} language={language} />
      </>
      ) : null}
      
      <div className={st.contacts}>
        <Container title={langData.headTitle[language]} clNTitle="text-center" className="mt-0 pb-0">
          <div className={st.contacts__phones}>
            <div className={st.contacts__phones__item}>
              <span>{langData.callNumber[language]}</span>
              <h3>{phone}+998 (71) 202-87-00</h3>
              <p>{langData.language[language]}</p>
            </div>
            <div className={st.contacts__phones__item}>
              <span>{langData.tex[language]}</span>
              <h3>{phone}+998 (71) 200-87-00</h3>
              <h3>{phone}+998 (90) 324-30-80</h3>
              <p>{langData.telegram[language]}</p>
            </div>
          </div>
        </Container>
        <div className={st.contacts__questions}>
          <Container title={langData.cT[language]} clNTitle="text-center">
            <div className={st.contacts__questions__block}>
              {content.map((item) => (
                <div className={st.contacts__questions__block__item} key={item.title}>
                  <h6>{item.title[language]}</h6>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className={st.contacts__questions__footer}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" />
                </svg>
              </span>
              <p>{langData.quas[language]}</p>
              <a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
                {langData.room[language]}
              </a>
            </div>
          </Container>
        </div>
        <Container
          // style={{ backgroundColor: '#f8f8f8' }}
          title={langData.title[language]}
          clNTitle="text-black text-center"
        >
          <p className="text-center">{langData.location[language]}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.020531509858!2d69.3247241!3d41.330166899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f21efa76fd%3A0x5c4c93cf2b6f99ea!2zMjUgU2F5cmFtIGtvJ2NoYXNpLCDQotC-0YjQutC10L3Rgg!5e0!3m2!1sru!2s!4v1666791600018!5m2!1sru!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
        <Partners language={language} />
        <Reviews language={language} />
      </div>
    </>
  );
}
