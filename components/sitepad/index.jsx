import { checkLang } from "@/utils/checkLang.js";
import Link from "next/dist/client/link";
import Container from "../container/index.jsx";
import { LINKS } from "../requirements";
import st from "./sitepad.module.scss";

export default function Sitepad({ language }) {
  const content = ["/art-const-1.jpg", "/art-const-2.jpg", "/art-const-3.jpg", "/art-const-4.jpg"];

  const langData = {
    title: {
      ru: "Бесплатный конструктор сайтов от SitePad",
      uz: "SitePad tomonidan bepul veb-sayt yaratuvchisi",
      en: "Free Website Builder by SitePad",
    },
    desc: {
      ru: (
        <p>
          Для того чтобы воспользоваться конструктором сайта где более 750 разных тем, вам необходимо{" "}
          <Link href={checkLang(language) + LINKS.HOSTING}>
            <a className="text-red">заказать любой хостинг</a>
          </Link>{" "}
          на тарифных планах Cpanel.
        </p>
      ),
      uz: (
        <p>
          750 dan ortiq turli mavzular bilan veb-sayt quruvchisidan foydalanish uchun siz zarur{" "}
          <Link href={checkLang(language) + LINKS.HOSTING}>
            <a className="text-red">har qanday xostingga buyurtma bering</a>
          </Link>{" "}
          Cpanel tarif rejalarida.
        </p>
      ),
      en: (
        <p>
          In order to use the website builder with more than 750 different themes, you necessary{" "}
          <Link href={checkLang(language) + LINKS.HOSTING}>
            <a className="text-red">order any hosting</a>
          </Link>{" "}
          on Cpanel tariff plans.
        </p>
      ),
    },
    text: {
      ru: (
        <>
          После оплаты за услугу хостинг, вы получите доступы к панели управления Cpanel по эл.почте.
          <br />
          Внутри Cpanel вы сможете создавать профессиональный сайт с помощью конструктора, без навыков программирования.
        </>
      ),
      uz: (
        <>
          Xosting xizmati uchun to'lovni amalga oshirganingizdan so'ng, siz Cpanel boshqaruv paneliga kirish huquqiga
          ega bo'lasiz elektron pochta.
          <br />
          Cpanel ichida siz veb-sayt yaratuvchisi yordamida professional veb-sayt yaratishingiz mumkin dasturlash
          qobiliyatlari.
        </>
      ),
      en: (
        <>
          After paying for the hosting service, you will get access to the Cpanel control panel by e-mail.
          <br />
          Inside Cpanel you will be able to create a professional website using the website builder, without programming
          skills.
        </>
      ),
    },
    buy: {
      ru: "Купить хостинг",
      uz: "Xosting sotib olish",
      en: "Buy hosting",
    },
    instruct: {
      ru: "Инструкция",
      uz: "Ko'rsatmalar",
      en: "Instructions",
    },
  };

  return (
    <div className={st.sitepad}>
      <Container title={langData.title[language]} description={langData.desc[language]}>
        <div className={st.sitepad__img}>
          {content.map((item) => (
            <img key={item} src={item} />
          ))}
        </div>
        <p>{langData.text[language]}</p>
        <div className={st.sitepad__button}>
          <button>
            <Link href={checkLang(language) + LINKS.HOSTING}>
              <a>{langData.buy[language]}</a>
            </Link>
          </button>
          <button>
            <noindex>
              <a target="_blank" rel="nofollow" href={LINKS.SITEPAD_LINK}>
                {langData.instruct[language]}
              </a>
            </noindex>
          </button>
        </div>
      </Container>
    </div>
  );
}
