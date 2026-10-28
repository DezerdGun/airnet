import st from "./stock.module.scss";
import WhyBlock from "../whyBlock/index.jsx";
import { presentIcon } from "shared/icons/presentIcon";
import { presentIcon2 } from "shared/icons/presentIcon2";
import { settingsIcon } from "shared/icons/settingsIcon";
import { usersIcon } from "shared/icons/usersIcon";
import { globalIcon } from "shared/icons/globalIcon";

export default function Stock({ language }) {
  const whyBlockStock = [
    {
      title: {
        ru: "Бонусы при оплате за год",
        uz: "Yillik to'lov uchun bonuslar",
        en: "Bonuses for annual payment",
      },
      description: {
        ru: (
          <p>
            Оплатите хостинг на 12 месяцев и получите больше за те же деньги:<br />
            домен в зоне .UZ, SSL-сертификаты для ваших сайтов и приоритетную поддержку.
            Максимум выгоды при долгосрочном размещении.
          </p>
        ),
        uz: (
          <p>
            12 oylik xosting uchun to'lovni amalga oshiring va bir xil narxda ko'proq narsaga ega bo'ling:<br />
            .UZ domeni, saytlaringiz uchun SSL sertifikatlari va ustuvor qo'llab-quvvatlash.
            Uzoq muddatli xosting bilan maksimal qiymat.
          </p>
        ),
        en: (
          <p>
            Pay for 12 months of hosting and get more for the same price:<br />
            a .UZ domain, SSL certificates for your sites, and priority support.
            Maximum value with long-term hosting.
          </p>
        ),
      },
      icon: presentIcon,
    },
    {
      title: {
        ru: "Переезд без затрат",
        uz: "Xarajatlarsiz ko'chib o'tish",
        en: "Moving without expenses",
      },
      description: {
        ru: (
          <p>
            Переходите от другого провайдера — мы сделаем всё за вас.<br />
            Бесплатно перенесём сайты и подарим 1 месяц хостинга.
            Без простоев, без рисков, без лишних действий с вашей стороны.
          </p>
        ),
        uz: (
          <p>
            Boshqa provayderdan o'ting — biz siz uchun hamma narsani qilamiz.<br />
            Biz veb-saytlaringizni bepul o'tkazamiz va sizga bir oylik xosting xizmatini taqdim etamiz.
            Hech qanday uzilishlar, xavflar va siz tomondan qo'shimcha harakatlar yo'q.
          </p>
        ),
        en: (
          <p>
            Switch from another provider—we'll do everything for you.<br />
            We'll transfer your websites for free and give you one month of hosting.
            No downtime, no risks, and no extra steps on your part.
          </p>
        ),
      },
      icon: presentIcon2,
    },
    {
      title: {
        ru: "Полное сопровождение при переносе",
        uz: "O'tkazish paytida to'liq qo'llab-quvvatlash",
        en: "Full support during the transfer",
      },
      description: {
        ru: <p>Берём на себя весь процесс миграции: от копирования данных до настройки.<br />
              Минимум вашего участия — максимум результата.<br />
              Запуск без ошибок и потерь.</p>,
        uz: <p>Biz butun migratsiya jarayonini boshqaramiz: ma'lumotlarni nusxalashdan tortib konfiguratsiya qilishgacha.<br />
              Sizning minimal ishtirokingiz - maksimal natijalar.<br />
              Xatosiz va yo'qotishsiz ishga tushirish.</p>,
        en: <p>We handle the entire migration process: from data copying to configuration.<br />
              Minimal involvement on your part – maximum results.<br />
              Error-free and loss-free launch.</p>,
      },
      icon: settingsIcon,
    },
    {
      title: {
        ru: "Приведи друга — получи бонус",
        uz: "Do'stingizni tavsiya qiling - bonus oling",
        en: "Refer a friend - get a bonus",
      },
      description: {
        ru: <p>Рекомендуйте AIRNET и получайте бесплатный месяц хостинга.<br />
              Простая схема: вы делитесь — мы начисляем бонус.<br />
              Выгодно для вас и ваших партнёров.</p>,
        uz: <p>AIRNETni tavsiya qiling va bir oylik bepul xostingga ega bo'ling.<br />
              Bu juda oddiy: siz ulashasiz va biz sizga bonus beramiz.<br />
              Bu siz va hamkorlaringiz uchun foydali.</p>,
        en: <p>Recommend AIRNET and get a free month of hosting.<br />
              It's simple: you share, and we'll give you a bonus.<br />
              It's beneficial for you and your partners.</p>,
      },
      icon: usersIcon,
    },
    {
      title: {
        ru: "Домен в подарок",
        uz: "Sovg'a sifatida domen",
        en: "Domain as a gift",
      },
      description: {
        ru: <p>При заказе хостинга на год — домен бесплатно.<br />
              Экономия на старте и быстрый запуск проекта без дополнительных затрат.</p>,
        uz: <p>Bir yilga xostingga buyurtma bering va bepul domenga ega bo'ling.<br />
              Startupda pulni tejang va qo'shimcha xarajatlarsiz loyihangizni tezda ishga tushiring.</p>,
        en: <p>Order hosting for a year and get a free domain.<br />
              Save money on your start-up and launch your project quickly without additional costs.</p>,
      },
      icon: globalIcon,
    },
  ];

  const langData = {
    title: {
      ru: "Акции",
      uz: "Aksiya",
      en: "Stocks",
    },
  };

  return (
		<>
      <div className={st.stock}>
        <WhyBlock title={langData.title[language]} content={whyBlockStock} language={language} />
      </div>
    </>
  );
}
