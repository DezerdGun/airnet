import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import PopularMail from "@/components/popularMail";
import SEO from "@/components/seo";
import WhyBlock from "@/components/whyBlock";
import { useState } from "react";
import styles from "./email.module.scss";
import { coinsIcon } from "shared/icons/coinsIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { calendarIcon } from "shared/icons/calendarIcon";
import { supportIcon } from "shared/icons/supportIcon";

export default function EMAIL({ language }) {
  const [show, setShow] = useState(null);

  const langData = {
    seoTitle: {
      ru: "Заказать корпоративную почту для домена",
      uz: "Domen uchun korporativ pochtaga buyurtma berish",
      en: "Order corporate mail for a domain",
    },
    seoDesc: {
      ru: "Дешево заказать корпоративную почту для домена. Большой выбор тарифных планов для вашего домена",
      uz: "Domen uchun korporativ pochtaga buyurtma berish arzon. Domeningiz uchun tarif rejalarining keng doirasi",
      en: "It's cheap to order corporate mail for a domain. A wide range of tariff plans for your domain",
    },
    headTitle: {
      ru: "Почта на домене",
      uz: "Domendagi pochta",
      en: "Mail on the domain",
    },
    content: {
      ru: (
        <>
          <h2>Об услуге</h2>
          <p>Корпоративная почта для вашего домена от быстрого и надежного регистратора AIRNET в Узбекистане</p>
          <ul>
            <li>Неограниченное количество ящиков</li>
            <li>Фильтрация от спама и вирусов</li>
            <li>Отсутствие рекламы в интерфейсе</li>
          </ul>
          <a href="#">Выбрать тариф</a>
        </>
      ),
      uz: (
        <>
          <h2>Xizmat haqida</h2>
          <p>
            SSL sertifikati veb-saytingizning haqiqiyligini tasdiqlaydi va yaratadi shifrlangan ulanish, tashrif
            buyuruvchilar xavfsizligini kafolatlaydi va maxfiylik.
          </p>
          <p>
            Sertifikatlar sertifikatlashtirish organi tomonidan tekshirish darajasida farqlanadi, shuningdek,
            himoyalangan domenlar va subdomenlar soni bo'yicha.
          </p>
          <a href="#">Sertifikatni tanlang</a>
        </>
      ),
      en: (
        <>
          <h2>About service</h2>
          <p>
            An SSL certificate authenticates your website and creates an encrypted connection, ensuring visitors safety
            and privacy.
          </p>
          <p>
            Certificates differ in the level of verification by the certification authority, as well as in the number of
            protected domains and subdomains.
          </p>
          <a href="#">Select certificate</a>
        </>
      ),
    },
    whyTitle: {
      ru: "Преимущества доменной почты",
      uz: "Domen pochtasining afzalliklari",
      en: "Benefits of Domain Mail",
    },
    sum: {
      ru: "сум",
      uz: "so'm",
      en: "sum",
    },
    year: {
      ru: "год",
      uz: "yil",
      en: "year",
    },
    buy: {
      ru: "Купить",
      uz: "Sotib olish",
      en: "Buy",
    },
  };

  const content2 = [
      {
        title: { ru: "Запоминаемость бренда", uz: "Brend xabardorligi", en: "Brand Awareness" },
        description: {
          ru: (
            <p>
              Рассылки с официального email организации вызывают больше доверия у клиентов. Такой домен лучше
              запоминается
            </p>
          ),
          uz: (
            <p>
              Tashkilotning rasmiy elektron pochtasidan kelgan xatlar mijozlarning ishonchini oshiradi. Bunday domen
              yaxshi esda qoladi
            </p>
          ),
          en: (
            <p>
              Mailings from the official email of the organization cause more trust among customers. Such a domain is
              better remembered
            </p>
          ),
        },
        icon: coinsIcon,
      },
      {
        title: { ru: "Конфиденциальность", uz: "Maxfiylik", en: "Confidentiality" },
        description: {
          ru: <p>Вы сможете управлять персональными черными и белыми списками отправителей и получателей</p>,
          uz: (
            <p>Siz jo'natuvchilar va qabul qiluvchilarning shaxsiy qora va oq ro'yxatlarini boshqarishingiz mumkin</p>
          ),
          en: <p>You will be able to manage personal black and white lists of senders and recipients</p>,
        },
        icon: warrantyIcon,
      },
      {
        title: { ru: "Безопасность", uz: "Xavfsizlik", en: "Safety" },
        description: {
          ru: <p>Предоставляем управление персональным черными и белыми списками отправителей и получателей</p>,
          uz: <p>Biz jo'natuvchilar va oluvchilarning shaxsiy qora va oq ro'yxatlarini boshqarishni ta'minlaymiz</p>,
          en: <p>We provide management of personal black and white lists of senders and recipients</p>,
        },
        icon: calendarIcon,
      },
      {
        title: { ru: "Поддержка 24/7", uz: "Qo'llab-quvatlash 24/7", en: "Support 24/7" },
        description: {
          ru: <p>Оказываем круглосуточную поддержку по вопросам заказа, установки и перевыпуска сертификата.</p>,
          uz: (
            <p>
              Biz sertifikatga buyurtma berish, o'rnatish va qayta rasmiylashtirish uchun kechayu kunduz yordam beramiz.
            </p>
          ),
          en: <p>We provide round-the-clock support for ordering, installing and reissuing a certificate.</p>,
        },
        icon: supportIcon,
      },
    ],
    faq = [
      {
        title: { ru: "Как работает подписка?", uz: "Obuna qanday ishlaydi", en: "How does a subscription work?" },
        description: {
          ru: (
            <>
              <p>
                Подписка позволяет автоматизировать процесс продления <span class="nobr">Корпоративной почты</span> и
                сэкономить при единовременной оплате. Вы можете оформить подписку на 1, 6, 9 и 12 месяцев — чем больше
                срок, тем больше скидка.
              </p>
              <p>
                Выберите тариф нажмите Заказать, пройдите регистрацию, после оплаты счета предоставим доступ к вашей
                почте.
              </p>
              {/* <p>
						<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
					</p> */}
            </>
          ),
          uz: (
            <>
              <p>
                Obuna yangilanish jarayonini avtomatlashtirish <span class="nobr">SSL-sertifikati</span>
                va&nbsp;bir marta to'lov bilan pulni tejash imkonini beradi. &nbsp;siz istalgan vahtga obuna
                yani&nbsp;2, 3, 4 yil yoki 5 yil&nbsp;— qanchalik uzoq muddat bolsa, shunchalik narhi pas boladi.
              </p>
              <p>
                Har yili, amal qilish muddatidan&nbsp;2 hafta oldin sertifikat, tizim uni avtomatik ravishda yuboradi
                qayta chiqarish uchun&nbsp; Tasdiqlash jarayonidan o'tgandan so'ng, sizga kerak boʻlgan yangi sertifikat
                faylini&nbsp;olasiz va veb-saytga&nbsp;o'rnatasiz.
              </p>
              {/* <p>
						<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
					</p> */}
            </>
          ),
          en: (
            <>
              <p>
                Subscription allows you to automate the process of renewing a <span class="nobr">SSL certificate</span>
                and&nbsp;save with a one-time payment. You&nbsp;can subscribe to&nbsp;2, 3, 4 or 5 years years&nbsp;-
                the longer the term, the lower the price of the certificate.
              </p>
              <p>
                Every year, 2 weeks before&nbsp;the expiration date of the certificate, the system will automatically
                send it for&nbsp;reissue. After passing the confirmation procedure, you&nbsp;will receive a new file
                certificate to be installed on&nbsp;website.
              </p>
              {/* <p>
							<a href="/technology/podpiska-na-ssl-sertifikat">Learn more about&nbsp;subscription</a>.
							</p> */}
            </>
          ),
        },
      },
      {
        title: {
          ru: "Поддержка национальных доменов (IDN)",
          uz: "(IDN) Milliy domenlarni qo'llash",
          en: "Support for country code domains (IDN)",
        },
        description: {
          ru: (
            <p>
              IDN (Internationalized Domain Names) — доменные имена, которые содержат символы национальных алфавитов.
              Поддержка IDN означает, что сертификат поддерживает не латинские буквы в доменных именах и может
              использоваться для доменных имён на национальных языках (например, эйрнет.uz).
            </p>
          ),
          uz: (
            <p>
              IDN (xalqarolashtirilgan domen nomlari) bu domen nomlari milliy alifbo belgilaridan iborat. IDN
              qo'llab-quvvatlashi shuni anglatadi sertifikat domen nomlarida lotin bo'lmagan harflarni
              qo'llab-quvvatlaydi va mumkin milliy tillardagi domen nomlari uchun ishlatilishi mumkin (masalan,
              airnet.uz).
            </p>
          ),
          en: (
            <p>
              IDN (Internationalized Domain Names) - domain names that contain characters of national alphabets. IDN
              support means that the certificate supports non-Latin characters in domain names and can be used for
              domain names in national languages (for example, airnet.uz).
            </p>
          ),
        },
      },
    ],
    ssl = [
      {
        img: "/ssl/positive-ssl.png",
        title: { ru: "PositiveSSL", uz: "PositiveSSL", en: "PositiveSSL" },
        price: "100 000",
        link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=1&one=1",
        description: {
          ru: [
            <>
              Доменов: <strong>1</strong>
            </>,
            "Проверка домена",
            "Базовый HTTPS",
            "Удобный SSL",
            "Удобный SSL",
            "Низкая гарантия",
          ],
          uz: [
            <>
              Domenlar: <strong>1</strong>
            </>,
            "Domenni tekshirish",
            "Asosiy HTTPS",
            "Qulay SSL",
            "Qulay SSL",
            "Kafolat past",
          ],
          en: [
            <>
              Domains: <strong>1</strong>
            </>,
            "Domain check",
            "Basic HTTPS",
            "Convenient SSL",
            "Convenient SSL",
            "Low Warranty",
          ],
        },
      },
      {
        img: "/partners/comodo.png",
        title: {
          ru: "PositiveSSL Wildcard",
          uz: "PositiveSSL Wildcard",
          en: "PositiveSSL Wildcard",
        },
        price: "1 000 000",
        link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=2&one=1",
        description: {
          ru: [
            <>
              Доменов: <strong>Неограниченное количество поддоменов</strong>
            </>,
            "Проверка домена",
            "Базовый HTTPS",
            "Удобный SSL",
            "Удобный SSL",
            "Низкая гарантия",
          ],
          uz: [
            <>
              Domenlar: <strong>Cheksiz subdomenlar</strong>
            </>,
            "Domenni tekshirish",
            "Asosiy HTTPS",
            "Qulay SSL",
            "Qulay SSL",
            "Kafolat past",
          ],
          en: [
            <>
              Domains: <strong>Unlimited subdomains</strong>
            </>,
            "Domain check",
            "Basic HTTPS",
            "Convenient SSL",
            "Convenient SSL",
            "Low Warranty",
          ],
        },
      },
      {
        img: "/partners/comodo.png",
        title: { ru: "EV SSL", uz: "EV SSL", en: "EV SSL" },
        price: "1 000 000",
        link: "",
        description: {
          ru: [
            <>
              Доменов: <strong>1</strong>
            </>,
            "Расширенная проверка",
            "Название компании в браузере",
            "Удобный SSL",
            "Очень высокая гарантия",
          ],
          uz: [
            <>
              Domenlar: <strong>1</strong>
            </>,
            "Kengaytirilgan tekshirish",
            "Brauzerda kompaniya nomi",
            "Qulay SSL",
            "Juda yuqori kafolat",
          ],
          en: [
            <>
              Domains: <strong>1</strong>
            </>,
            "Extended Check",
            "Company name in browser",
            "Convenient SSL",
            "Very high guarantee",
          ],
        },
      },
      {
        img: "/partners/comodo.png",
        title: { ru: "PremiumSSL Wildcard", uz: "PremiumSSL Wildcard", en: "PremiumSSL Wildcard" },
        price: "3 000 000",
        link: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=3&one=1",
        description: {
          ru: [
            <>
              Доменов: <strong>Неограниченное количество поддоменов</strong>
            </>,
            "Проверка организации",
            "Название компании в SSL",
            "Удобный SSL",
            "Высокая гарантия",
          ],
          uz: [
            <>
              Domenlar: <strong>Cheksiz subdomenlar</strong>
            </>,
            "Tashkilotni tekshirish",
            "SSL kompaniya nomi",
            "Qulay SSL",
            "Yuqori kafolat",
          ],
          en: [
            <>
              Domains: <strong>Unlimited subdomains</strong>
            </>,
            "Organization check",
            "SSL company name",
            "Convenient SSL",
            "High Guarantee",
          ],
        },
      },
    ];

  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />
      <Container headTitle={langData.headTitle[language]}>
        <hr />
        <div className={styles.ssl__block}>
          <div className={styles.ssl__block__content}>{langData.content[language]}</div>
          <div className={styles.ssl__block__img}>
            <img src="/ssl/mail-img.png" />
          </div>
        </div>
      </Container>
      <PopularMail language={language} />
      <WhyBlock title={langData.whyTitle[language]} content={content2} language={language} />
      <FAQ faq={faq} title="FAQ" language={language} />
      <Partners language={language} />
    </>
  );
}
