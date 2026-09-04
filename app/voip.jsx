import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import PopularSert from "@/components/popularSert";
import SEO from "@/components/seo";
import WhyBlock from "@/components/whyBlock";
import { useState } from "react";
import styles from "./ssl/ssl.module.scss";
import { SslComponent } from "./ssl";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { shieldIcon } from "shared/icons/shieldIcon";
import { shakeIcon } from "shared/icons/shakeIcon";
import { coinsIcon } from "shared/icons/coinsIcon";
import { walletIcon } from "shared/icons/walletIcon";
import { calendarIcon } from "shared/icons/calendarIcon";
import { supportIcon } from "shared/icons/supportIcon";
import BreadCrumbs from "../components/seo/breadCrumbs"
import PageBreadcrumb from "../components/seo/pageBreadCrumbs";

export default function SSL({ language }) {
  const [show, setShow] = useState(null);

  const langData = {
    seoTitle: {
      ru: "Купить SSL-сертификат, TLS 1.2, X.509v3",
      uz: "SSL sertifikatini sotib oling, TLS 1.2, X.509v3",
      en: "Buy an SSL certificate, TLS 1.2, X.509v3",
    },
    seoDesc: {
      ru: "Дешево купить SSL или TLS сертификат от 825р. в год. Большой выбор сертификационных центров Comodo, Thawte, RapidSSL, Geotrust, Symantec.",
      uz: "825 rubldan SSL yoki TLS sertifikatini sotib olish arzon. yilda. Comodo, Thawte, RapidSSL, Geotrust, Symantec sertifikatlashtirish markazlarining katta tanlovi.",
      en: "Cheap to buy an SSL or TLS certificate from 825 rubles per year. Large selection of certification centers Comodo, Thawte, RapidSSL, Geotrust, Symantec.",
    },
    headTitle: {
      ru: "VOIP телефония (SIP-TRUNK)",
      uz: "VOIP телефония (SIP-TRUNK)",
      en: "VOIP телефония (SIP-TRUNK)",
    },
    content: {
      ru: (
        <>
          <h2>IP-телефония</h2>
          <p>
            SIP транк — качественная и надежная связь для IP-АТС
          </p>
          <p>
            SIP-телефония — это способ голосовой связи через интернет на основе протокола SIP. 
          </p>
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
      ru: "Почему стоит покупать у нас?",
      uz: "Nima uchun bizdan sotib olasiz?",
      en: "Why should you buy from us?",
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

  const content = [
      {
        title: { ru: "Запись звонков", uz: "Запись звонков", en: "Запись звонков" },
        description: {
          ru: (
            <p>
              У вас будет запись всех звонков. Это значит, что вы сможете прослушать любой разговор менеджера с клиентом.
            </p>
          ),
          uz: (
            <p>
              У вас будет запись всех звонков. Это значит, что вы сможете прослушать любой разговор менеджера с клиентом.
            </p>
          ),
          en: (
            <p>
              У вас будет запись всех звонков. Это значит, что вы сможете прослушать любой разговор менеджера с клиентом.
            </p>
          ),
        },
        icon: shieldIcon,
      },
      {
        title: { ru: "Многоканальность", uz: "Многоканальность", en: "Многоканальность" },
        description: {
          ru: <p>Многоканальность - это возможность принимать на один телефонный номер несколько звонков одновременно. </p>,
          uz: <p>Многоканальность - это возможность принимать на один телефонный номер несколько звонков одновременно. </p>,
          en: <p>Многоканальность - это возможность принимать на один телефонный номер несколько звонков одновременно. </p>,
        },
        icon: shakeIcon,
      },
      {
        title: { ru: "Переадресация вызовов", uz: "Переадресация вызовов", en: "Переадресация вызовов" },
        description: {
          ru: <p>Возможность автоматически переадресовывать звонки на другой телефонный номер или подключение автоответчика.</p>,
          uz: <p>Возможность автоматически переадресовывать звонки на другой телефонный номер или подключение автоответчика.</p>,
          en: <p>Возможность автоматически переадресовывать звонки на другой телефонный номер или подключение автоответчика.</p>,
        },
        icon: warrantyIcon,
      },
    ],
    content2 = [
      {
        title: { ru: "Выгодная цена", uz: "Unumdor narh", en: "Profitable price" },
        description: {
          ru: <p>Никакой абонентской платы за тариф</p>,
          uz: (
            <p>
              Никакой абонентской платы за тариф
            </p>
          ),
          en: <p>Никакой абонентской платы за тариф</p>,
        },
        icon: coinsIcon,
      },
      {
        title: { ru: "Скидка за период", uz: "Ma'lum vatga chegirma", en: "Period Discount" },
        description: {
          ru: <p>Чем больше срок заказа сертификата, тем ниже цена покупки.</p>,
          uz: (
            <p>Sertifikatga buyurtma berish muddati qancha uzoq bo'lsa, sotib olish narxi shunchalik past bo'ladi.</p>
          ),
          en: <p>The longer the period for ordering a certificate, the lower the purchase price.</p>,
        },
        icon: walletIcon,
      },
      {
        title: { ru: "Подписка", uz: "Obuna", en: "Subscription" },
        description: {
          ru: <p>При оформлении подписки ваш сертификат будет каждый год автоматически отправляться на перевыпуск.</p>,
          uz: <p>Siz obuna bo'lganingizda sertifikatingiz har yili avtomatik ravishda qayta chiqariladi.</p>,
          en: <p>When you subscribe, your certificate will automatically be reissued every year.</p>,
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
                Подписка позволяет автоматизировать процесс продления <span class="nobr">SSL-сертификата</span>{" "}
                и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете оформить подписку на&nbsp;2, 3, 4 года или 5
                лет&nbsp;— чем больше срок, тем ниже цена сертификата.
              </p>
              <p>
                Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия сертификата, система будет автоматически
                отправлять его на&nbsp;перевыпуск. Пройдя процедуру подтверждения, вы&nbsp;получите новый файл
                сертификата, который необходимо установить на&nbsp;сайте.
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
    ],
    ssl = [
      {
        img: "/ssl/sipicon.png",
        title: { 
          ru: "SIP-2", 
          uz: "SIP-2", 
          en: "SIP-2" 
        },
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
        img: "/ssl/sipicon.png",
        title: {
          ru: "SIP-4",
          uz: "SIP-4",
          en: "SIP-4",
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
        img: "/ssl/sipicon.png",
        title: { ru: "SIP-8", uz: "SIP-8", en: "SIP-8" },
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
        img: "/ssl/sipicon.png",
        title: { ru: "SIP-10", uz: "SIP-10", en: "SIP-10" },
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

    const breadCrumbs = [
      {
        name: {
          ru: "VOIP телефония",
          uz: "VOIP телефония",
          en: "VOIP телефония",
        },
        link: "/voip",
      },
    ];

  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />

      {breadCrumbs && breadCrumbs.length ? (
      <>
        <BreadCrumbs data={breadCrumbs} language={language} />
        <PageBreadcrumb links={breadCrumbs} language={language} />
      </>
      ) : null}

      <Container headTitle={langData.headTitle[language]}>
        <hr />
        <div className={styles.ssl__block}>
          <div className={styles.ssl__block__content}>{langData.content[language]}</div>
          <div className={styles.ssl__block__img}>
            <img src="/ssl/sip.png" />
          </div>
        </div>
      </Container>
      {/* <PopularSert language={language} /> */}
      <WhyBlock content={content} language={language} />
      <Container>
        {ssl.map((item, index) => (
          <SslComponent
            key={index}
            index={index}
            item={item}
            show={show}
            setShow={setShow}
            langData={langData}
            language={language}
          />
        ))}
      </Container>
      <WhyBlock title={langData.whyTitle[language]} content={content2} language={language} />
      <FAQ faq={faq} title="FAQ" language={language} />
      <Partners language={language} />
    </>
  );
}
