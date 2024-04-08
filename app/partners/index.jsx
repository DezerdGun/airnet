import { checkLang } from "@/utils/checkLang";
import Link from "next/link";
import Container from "../../components/container";
import Partners from "../../components/partners";
import { LINKS } from "../../components/requirements";
import SEO from "../../components/seo";
import StepsBlock from "../../components/stepsBlock";
import st from "./partners.module.scss";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export default function PartnersPage({ language }) {
  const langData = {
    seoT: {
      ru: "Партнерская программа | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Hamkorlik dasturi | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Affiliate program | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descT: {
      ru: "Выгодная партнерская программа от Airnet",
      uz: "Airnetdan qulay hamkorlik dasturi",
      en: "Favorable affiliate program from Airnet",
    },
    container: {
      ru: (
        <>
          <Container
            style={{ background: "url('/servers-2.jpg') no-repeat" }}
            title="Партнерам"
            className="my-0"
          ></Container>
          <Container
            style={{}}
            title="Партнерская программа"
            clNTitle="text-black"
            className="my-0"
            description={
              <p className="text-black">
                Вы являетесь владельцем большого количества доменов или планируете ежемесячную регистрацию доменных имен
                и приобретение сопутствующих услуг в значительных объемах или вы — владелец web-студии, который хотел бы
                размещать сайты своих клиентов у одного провайдера, чтобы ими было удобно управлять?
              </p>
            }
          >
            <table>
              <thead>
                <tr>
                  <th>Веб-хостинг</th>
                  <th>VDS/VPS</th>
                  <th>Разработка сайтов</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>до 30%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </Container>

          <Container
            style={{}}
            title="Реферальная программа"
            clNTitle="text-black"
            className="mt-0"
            description={
              <>
                <p className="text-black">
                  Привлеките клиента один раз и получайте вознаграждение за все его заказы и продления!
                </p>
                <p className="text-black">
                  1. Клиент приходит по вашей реферальной ссылке (Вы размещаете ссылку и рекомендуете наши услуги)
                  <br />
                  2. Клиент покупает домены, хостинг или другие услуги (Вы получаете вознаграждение до 30%!)
                  <br />
                  3. Клиент продлевает купленные домены, хостинг или другие услуги. (И вы снова получаете вознаграждение
                  до 10%!)
                </p>
              </>
            }
          >
            <table>
              <thead>
                <tr>
                  <th>Веб-хостинг</th>
                  <th>VDS/VPS</th>
                  <th>Разработка сайтов</th>
                  <th>Скидки на Landing от fr.uz</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>до 30%</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>30%</td>
                </tr>
              </tbody>
            </table>
          </Container>

          <StepsBlock
            title="Как это работает?"
            data={[
              {
                title: "Приглашение",
                description: "Вы размещаете партнёрскую ссылку на сайте или делитесь промокодом с друзьями",
              },
              {
                title: "Заявка",
                description: "Человек переходит на FirstVDS по ссылке, либо вводит промокод при заказе",
              },
              {
                title: "Активация",
                description: (
                  <>
                    При активации первого сервера клиент получает <span className="text-green">скидку 25%</span> на
                    первый месяц
                  </>
                ),
              },
              {
                title: "Прибыль",
                description: (
                  <>
                    Вы получаете <span className="text-green">10% от расходов</span> всех ваших рефералов себе на счёт
                  </>
                ),
              },
            ]}
            img="/how-work.png"
          />

          <Container
            style={{ background: "url('/agreement.jpg') no-repeat" }}
            title="Как начать зарабатывать"
            className="my-0"
          >
            <div className={st.partners__payment}>
              <div className={st.partners__payment__block}>
                <h6>Пройти регистрацию</h6>
                <p>
                  <a
                    href="https://billing.airnet.uz/billing.php?do=order&type=partner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Пройдите регистрацию
                  </a>
                  , после чего, в нашем биллинге Вы сможете получить свою реферальную ссылку и персональный промо-код.
                </p>
              </div>
              <div className={st.partners__payment__block}>
                <h6>Разместить баннер на своем сайте</h6>
                <p>
                  Архив с рекламными материалами доступен по{" "}
                  <Link href={checkLang(language) + LINKS.HOME}>
                    <a>данной ссылке</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <p className="text-center text-white">
              Работать с нами очень и легко и приятно. Мы всегда помогаем нашим партнерам достичь хорошего результата.
            </p>
          </Container>

          <Container style={{}} title="Партнерская программа для вебмастеров" clNTitle="text-black" className="my-0">
            <div className={st.partners__web}>
              <div className={st.partners__web__block}>
                <div className={st.partners__web__block__aside}>до 30%</div>
                <div className={st.partners__web__block__content}>
                  <p>
                    <strong>от всех платежей за услуги виртуального хостинга, от всех привлеченных клиентов</strong>
                  </p>
                  <p>
                    Принять участие в данной партнерской программе могут абсолютно все желающие, без каких-либо
                    ограничений и особых требований. Если у Вас имеются вопросы, Вы всегда можете получить на них ответы
                    у наших онлайн-консультантов или же у менеджеров отдела продаж.
                  </p>
                </div>
              </div>
              <div className={st.partners__web__block}>
                <div className={st.partners__web__block__aside}>до 15%</div>
                <div className={st.partners__web__block__content}>
                  <p>
                    <strong>от всех платежей за виртуальные и выделенные сервера, от всех привлеченных клиентов</strong>
                  </p>
                  <p>
                    Принять участие в данной партнерской программе могут абсолютно все желающие, без каких-либо
                    ограничений и особых требований. Если у Вас имеются вопросы, Вы всегда можете получить на них ответы
                    у наших онлайн-консультантов или же у менеджеров отдела продаж.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <Container
            style={{ backgroundColor: "#f8f8f8" }}
            title="Почему нас выбирают лучшие вебмастеры"
            clNTitle="text-black"
            className="my-0"
          >
            <ul className={st.partners__bestWeb}>
              <li>Высокий уровень вознаграждения, уникальные выгодные условия</li>
              <li>Выплата вознаграждения без задержек, в любое время суток</li>
              <li>Удобная панель со встроенной аналитикой по переходам и регистрациям</li>
              <li>Работаем с веб-мастерами по всему миру</li>
            </ul>
          </Container>
          <Partners language={language} />
        </>
      ),
      uz: (
        <>
          <Container
            style={{ background: "url('/servers-2.jpg') no-repeat" }}
            title="Hamkorlar"
            className="my-0"
          ></Container>
          <Container
            style={{}}
            title="Hamkor dastur"
            clNTitle="text-black"
            className="my-0"
            description={
              <p className="text-black">
                Siz ko'p sonli domenlarning egasimisiz yoki oylik domen nomini ro'yxatdan o'tkazish va sotib olishni
                rejalashtirish tegishli xizmatlar katta hajmda yoki siz egasisiz o'z mijozlarining veb-saytlarini
                joylashtirmoqchi bo'lgan veb-studiya bitta provayder, ular qulay tarzda boshqarilishi mumkinmi?
              </p>
            }
          >
            <table>
              <thead>
                <tr>
                  <th>Veb-Xost</th>
                  <th>VDS/VPS</th>
                  <th>Saytlarni ishlab chiqarish</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30% gacha</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </Container>
          <Container
            style={{}}
            title="Yo'naltiruvchi dastur"
            clNTitle="text-black"
            className="mt-0"
            description={
              <>
                <p className="text-black">
                  Bir marta mijozni jalb qiling va hamma narsa uchun mukofot oling uning buyruqlari va yangilanishlari!
                </p>
                <p className="text-black">
                  1. Mijoz sizning tavsiya havolangiz orqali keladi (siz joyni havola qiling va xizmatlarimizni tavsiya
                  eting)
                  <br />
                  2. Mijoz domenlar, xosting yoki boshqa xizmatlarni sotib oladi (siz 30% gacha mukofot oling!
                  <br />
                  3. Mijoz sotib olingan domenlarni, xostingni yoki boshqa narsalarni yangilaydi xizmatlar. (Va siz yana
                  10% gacha mukofot olasiz!)
                </p>
              </>
            }
          >
            <table>
              <thead>
                <tr>
                  <th>Web-Xosting</th>
                  <th>VDS/VPS</th>
                  <th>Sayt ishlab chiqarish</th>
                  <th>fr.uz dan Landinga chegirma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30% gacha</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>30%</td>
                </tr>
              </tbody>
            </table>
          </Container>

          <StepsBlock
            title="Bu qanday ishlaydi?"
            data={[
              {
                title: "Taklif",
                description:
                  "Siz saytga sheriklik havolasini joylashtirasiz yoki do'stlaringiz bilan reklama kodini baham ko'rasiz",
              },
              {
                title: "Chaqiruv",
                description:
                  "Biror kishi havola orqali FirstVDS-ga boradi yoki buyurtma berishda reklama kodini kiritadi",
              },
              {
                title: "Faollashtirish",
                description: (
                  <>
                    Birinchi server faollashtirilganda, birinchi oy uchun mijoz{" "}
                    <span className="text-green">25% chegirma</span>ni qabul qiladi{" "}
                  </>
                ),
              },
              {
                title: "Tushum",
                description: (
                  <>
                    Siz barcha havolangizni <span className="text-green">10% harajatdan</span> o'z hisobingizga qabul
                    qilasiz
                  </>
                ),
              },
            ]}
            img="/how-work.png"
          />

          <Container
            style={{ background: "url('/agreement.jpg') no-repeat" }}
            title="Qanday daromad qilish?"
            className="my-0"
          >
            <div className={st.partners__payment}>
              <div className={st.partners__payment__block}>
                <h6>Ro'yhatdan o'tish</h6>
                <p>
                  <a
                    href="https://billing.airnet.uz/billing.php?do=order&type=partner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ro'yhatdan o'ting
                  </a>{" "}
                  va shundan so'ng, siz o'zingizni havola va shaxsiy promo-kodingizni bizning habarlarimiz orqali
                  olishingiz mumkin .
                </p>
              </div>
              <div className={st.partners__payment__block}>
                <h6>Saytingizga banner joylashtiring</h6>
                <p>
                  Reklama materiallari arxivi quyidagi{" "}
                  <Link href={checkLang(language) + LINKS.HOME}>
                    <a>havola</a>
                  </Link>{" "}
                  manzilda joylashgan .
                </p>
              </div>
            </div>
            <p className="text-center text-white">
              Biz bilan ishlash juda oson va yoqimli. Biz har doim o'zimizga yordam beramiz yaxshi natijalarga erishish
              uchun hamkorlar.
            </p>
          </Container>

          <Container style={{}} title="Veb-ustalar uchun hamkorlik dasturi" clNTitle="text-black" className="my-0">
            <div className={st.partners__web}>
              <div className={st.partners__web__block}>
                <div className={st.partners__web__block__aside}>30% gacha</div>
                <div className={st.partners__web__block__content}>
                  <p>
                    <strong>
                      umumiy xosting xizmatlari uchun barcha to'lovlardan, hammasidan mijozlarni jalb qildi
                    </strong>
                  </p>
                  <p>
                    Siz ushbu hamkorlik dasturida ishtirok etishingiz mumkin mutlaqo hamma, hech qanday cheklovlarsiz va
                    maxsus talablar. Agar sizda biron bir savdo menejerlari, savol bo'lsa, har doim bizning onlayn
                    maslahatchilarimizdan yoki ulardan javob olishingiz mumkin
                  </p>
                </div>
              </div>
              <div className={st.partners__web__block}>
                <div className={st.partners__web__block__aside}>15% gacha</div>
                <div className={st.partners__web__block__content}>
                  <p>
                    <strong>
                      virtual va ajratilgan serverlar uchun barcha to'lovlardan, dan barcha jalb qilingan mijozlar
                    </strong>
                  </p>
                  <p>
                    Siz ushbu hamkorlik dasturida ishtirok etishingiz mumkin mutlaqo hamma, hech qanday cheklovlarsiz va
                    maxsus talablar. Agar sizda biron bir savol bo'lsa, har doim mumkin bizning onlayn
                    maslahatchilarimizdan yoki ulardan javob oling savdo menejerlari.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <Container
            style={{ backgroundColor: "#f8f8f8" }}
            title="Nima uchun eng yaxshi veb-ustalar bizni tanlaydi?"
            clNTitle="text-black"
            className="my-0"
          >
            <ul className={st.partners__bestWeb}>
              <li>Yuqori darajadagi ish haqi, noyob qulay sharoitlar</li>
              <li>Ish haqini kunning istalgan vaqtida kechiktirmasdan to'lash</li>
              <li>O'tish uchun o'rnatilgan analitikli qulay panel va ro'yxatga olishlar</li>
              <li>Biz butun dunyo bo'ylab veb-ustalar bilan ishlaymiz</li>
            </ul>
          </Container>
          <Partners language={language} />
        </>
      ),
      en: (
        <>
          <Container
            style={{ background: "url('/servers-2.jpg') no-repeat" }}
            title="Partners"
            className="my-0"
          ></Container>
          <Container
            style={{}}
            title="Affiliate program"
            clNTitle="text-black"
            className="my-0"
            description={
              <p className="text-black">
                Are you the owner of a large number of domains or are planning monthly registration of domain names and
                the purchase of related services in significant volumes, or are you the owner of a web studio who would
                like to host the sites of his clients from one provider so that they can be easily managed?
              </p>
            }
          >
            <table>
              <thead>
                <tr>
                  <th>Web hosting</th>
                  <th>VDS/VPS</th>
                  <th>Web Development</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>up to 30%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </Container>
          <Container
            style={{}}
            title="Referral program"
            clNTitle="text-black"
            className="mt-0"
            description={
              <>
                <p className="text-black">Attract a client once and get a reward for all his orders and renewals!</p>
                <p className="text-black">
                  1. The client comes through your referral link (You place a link and recommend our services)
                  <br />
                  2. Client buys domains, hosting or other services (you get up to 30% commission!)
                  <br />
                  3. The client renews the purchased domains, hosting or other services. (And you get rewarded again to
                  10%!)
                </p>
              </>
            }
          >
            <table>
              <thead>
                <tr>
                  <th>Web hosting</th>
                  <th>VDS/VPS</th>
                  <th>Web Development</th>
                  <th>Discounts on Landing from fr.uz</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>up to 30%</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>30%</td>
                </tr>
              </tbody>
            </table>
          </Container>
          <StepsBlock
            title="How it works?"
            data={[
              {
                title: "Invitation",
                description: "You place an affiliate link on the site or share a promotional code with friends",
              },
              {
                title: "Application",
                description: "A person goes to FirstVDS via a link, or enters a promotional code when ordering",
              },
              {
                title: "Activation",
                description: (
                  <>
                    Upon activation of the first server, the client receives a{" "}
                    <span className="text-green">25% discount</span> on first month
                  </>
                ),
              },
              {
                title: "Profit",
                description: (
                  <>
                    You get <span className="text-green">10% of the expenses</span> of all your referrals to your
                    account
                  </>
                ),
              },
            ]}
            img="/how-work.png"
          />
          <Container
            style={{ background: "url('/agreement.jpg') no-repeat" }}
            title="How to start earning"
            className="my-0"
          >
            <div className={st.partners__payment}>
              <div className={st.partners__payment__block}>
                <h6>Register</h6>
                <p>
                  <a
                    href="https://billing.airnet.uz/billing.php?do=order&type=partner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign up
                  </a>
                  , after which, in our billing you will be able to get your referral link and personal promo code .
                </p>
              </div>
              <div className={st.partners__payment__block}>
                <h6>Place a banner on your site</h6>
                <p>
                  Archive with promotional materials available at{" "}
                  <Link href={checkLang(language) + LINKS.HOME}>
                    <a>this link</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <p className="text-center text-white">
              Работать с нами очень и легко и приятно. Мы всегда помогаем нашим партнерам достичь хорошего результата.
            </p>
          </Container>
          <Container style={{}} title="Affiliate program for webmasters" clNTitle="text-black" className="my-0">
            <div className={st.partners__web}>
              <div className={st.partners__web__block}>
                <div className={st.partners__web__block__aside}>up to 30%</div>
                <div className={st.partners__web__block__content}>
                  <p>
                    <strong>from all payments for virtual hosting services, from all attracted customers</strong>
                  </p>
                  <p>
                    Absolutely everyone can take part in this affiliate program, without any restrictions and special
                    requirements. If you have any questions, you can always get answers from our online consultants or
                    sales managers.
                  </p>
                </div>
              </div>
              <div className={st.partners__web__block}>
                <div className={st.partners__web__block__aside}>up to 15%</div>
                <div className={st.partners__web__block__content}>
                  <p>
                    <strong>from all payments for virtual and dedicated servers, from all attracted customers</strong>
                  </p>
                  <p>
                    Absolutely everyone can take part in this affiliate program, without any restrictions and special
                    requirements. If you have any questions, you can always get answers from our online consultants or
                    sales managers.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          <Container
            style={{ backgroundColor: "#f8f8f8" }}
            title="Why we are chosen by the best webmasters"
            clNTitle="text-black"
            className="my-0"
          >
            <ul className={st.partners__bestWeb}>
              <li>High level of remuneration, unique favorable conditions</li>
              <li>Payment of remuneration without delay, at any time of the day</li>
              <li>A handy panel with built-in conversion and registration analytics</li>
              <li>We work with webmasters around the world</li>
            </ul>
          </Container>
          <Partners language={language} />
        </>
      ),
    },
  };
  return (
    <>
      <SEO title={langData.seoT[language]} desc={langData.descT[language]} />
      
      <BreadCrumbs data={[{ name: 'Партнерская программа' }]} />
      <PageBreadcrumb links={[{ name: 'Партнерская программа' }]} />

      <div className={st.partners}>{langData.container[language]}</div>
      <Reviews language={language} />
    </>
  );
}
