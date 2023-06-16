import Container from "@/components/container";
import FAQ from "@/components/faq";
import Partners from "@/components/partners";
import { RegDomainBlock } from "@/components/regDomain";
import SEO from "@/components/seo";
import WhyBlock from "@/components/whyBlock";
import st from "./domains.module.scss";
import { shakeIcon } from "shared/icons/shakeIcon";
import { clockIcon } from "shared/icons/clockIcon";
import { warrantyIcon } from "shared/icons/warrantyIcon";
import { gamepadIcon } from "shared/icons/gamepadIcon";

const content = [
    {
      title: { ru: "Доверие", uz: "Ishonch", en: "Confidence" },
      description: {
        ru: <p>Наши опытные сотрудники помогут подобрать подходящий домен для вашего бизнеса или стартап проекта.</p>,
        uz: (
          <p>
            Bizning tajribali xodimlarimiz biznesingiz yoki startap loyihangiz uchun to'g'ri domenni tanlashingizga
            yordam beradi.
          </p>
        ),
        en: <p>Our experienced staff will help you choose the right domain for your business or startup project.</p>,
      },
      icon: shakeIcon,
    },
    {
      title: { ru: "Автопродление", uz: "Avtomatik yangilash", en: "Auto-renewal" },
      description: {
        ru: (
          <p>Настройте автопродление или продлевайте домен вручную — мы заранее предупредим вас об окончании срока.</p>
        ),
        uz: (
          <p>
            Domeningizni avtomatik yangilashni sozlang yoki qo'lda yangilang - muddat tugashi bilan biz sizni oldindan
            xabardor qilamiz.
          </p>
        ),
        en: (
          <p>
            Set up auto-renewal or manually renew your domain - we will notify you in advance when the term expires.
          </p>
        ),
      },
      icon: clockIcon,
    },
    {
      title: { ru: "Удобное управление", uz: "Qulay boshqaruv", en: "Convenient control" },
      description: {
        ru: <p>Вы можете легко управлять доменами и другими нашими услугами в Личном кабинете.</p>,
        uz: <p>Boshqarish panelida domenlar va boshqa xizmatlarimizni osongina boshqarishingiz mumkin.</p>,
        en: <p>You can easily manage domains and our other services in your Dashboard.</p>,
      },
      icon: gamepadIcon,
    },
    {
      title: { ru: "Конфиденциальность", uz: "Maxfiylik", en: "Confidentiality" },
      description: {
        ru: "Подключите функцию Privacy Protection, чтобы защитить ваши персональные данные от кражи.",
        uz: "Shaxsiy ma'lumotlaringizni o'g'irlikdan himoya qilish uchun Maxfiylikni himoya qilish funksiyasini yoqing.",
        en: "Turn on the Privacy Protection feature to protect your personal data from theft.",
      },
      icon: warrantyIcon,
    },
  ],
  faq = [
    {
      title: {
        ru: "У меня уже есть домен, как разместить его на сервере?",
        uz: "Menda allaqachon domen bor, uni serverda qanday joylashtirishim mumkin?",
        en: "I already have a domain, how can I host it on the server?",
      },
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
              Obuna yangilanish jarayonini avtomatlashtirish imkonini beradi <span class="nobr">SSL sertifikati</span>
              va&nbsp;bir martalik toʻlov bilan tejang. Siz&nbsp;2-ga obuna boʻlishingiz mumkin,3, 4 yoki 5 yil - muddat
              qancha uzoq bo'lsa, sertifikatning narxi past bo'ladi.
            </p>
            <p>
              Tizim har yili sertifikatning amal qilish muddati tugashidan&nbsp;2 hafta oldin uni avtomatik
              ravishda&nbsp;qayta chiqarish uchun yuboring. Tasdiqlash jarayonidan o'tgandan so'ng, siz&nbsp;saytga
              o'rnatishingiz kerak bo'lgan yangi sertifikat faylini olasiz.
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
              and&nbsp;save with a one-time payment. You&nbsp;can subscribe to&nbsp;2, 3, 4 or 5 years years&nbsp;- the
              longer the term, the lower the price of the certificate.
            </p>
            <p>
              Every year, 2 weeks before&nbsp;the expiration date of the certificate, the system will automatically send
              it for&nbsp;reissue. After passing the confirmation procedure, you&nbsp;will receive a new file
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
        ru: "Как продлить доменное имя?",
        uz: "Domen nomini qanday yangilash kerak?",
        en: "How to renew a domain name?",
      },
      description: { ru: "", uz: "", en: "" },
    },
    {
      title: {
        ru: "Как перевести домен на обслуживание к нам от другого регистратора?",
        uz: "Bizga domenni boshqa registratordan qanday o'tkazish mumkin?",
        en: "How to transfer a domain to us from another registrar?",
      },
      description: { ru: "", uz: "", en: "" },
    },
    {
      title: {
        ru: "Как заказать свидетельство на домен?",
        uz: "Domen uchun sertifikatga qanday buyurtma berish mumkin?",
        en: "How to order a certificate for a domain?",
      },
      description: { ru: "", uz: "", en: "" },
    },
  ];

export default function Domains({ language }) {
  const langData = {
    seoTitle: {
      ru: "Регистрация домен UZ, Купить домен UZ | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "UZ domenini ro'yxatdan o'tkazish, UZ domenini sotib olish | Tashkent, O'zbekistondagi TAS-IX xostingi",
      en: "UZ domain registration, Buy UZ domain | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descTitle: {
      ru: "Быстрая регистрация доменов, по самым низким ценам, в зоне uz",
      uz: "Uz zonasida domenlarni tez, arzon narxlarda roʻyxatdan oʻtkazish",
      en: "Fast registration of domains, at the lowest prices, in the zone uz",
    },
    headTitle: {
      ru: "Регистрация доменного имени",
      uz: "Domen nomini ro'yxatdan o'tkazish",
      en: "Domain name registration",
    },
    t1: {
      ru: "Об услуге",
      uz: "Hizmatlar haqida",
      en: "About service",
    },
    t2: {
      ru: "Доменное имя — это уникальный адрес, по которому открывается сайт в интернете.",
      uz: "Domen nomi - bu Internetda veb-sayt ochiladigan noyob manzil.",
      en: "A domain name is a unique address at which a website opens on the Internet.",
    },
    t3: {
      ru: "У нас вы сможете подобрать красивое доменное имя по самым низким ценам, а ещё мы не повышаем стоимость домена при продлении.",
      uz: "Biz bilan siz eng arzon narxlarda chiroyli domen nomini olishingiz mumkin, bizda esa yo'q biz yangilanganda domen narxini oshiramiz.",
      en: "Here you can find a beautiful domain name at the lowest prices, and we also do not increase the cost of a domain upon renewal.",
    },
    headTitle: {
      ru: "Регистрация домена в зоне UZ",
      uz: "UZ zonasida domenni ro'yxatdan o'tkazish",
      en: "Domain registration in UZ zone",
    },
    description: {
      ru: (
        <p>
          Компания "AIRNET" является официальным{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            регистратором домен в зоне UZ
          </a>
        </p>
      ),
      uz: (
        <p>
          “AIRNET” kompaniyasi{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            UZ zonasida rasmiy domen registratori
          </a>{" "}
          hisoblanadi
        </p>
      ),
      en: (
        <p>
          The company "AIRNET" is the official{" "}
          <a href="https://cctld.uz/reg/" target="_blank" rel="noopener noreferrer">
            domain registrar in UZ zone
          </a>
        </p>
      ),
    },
    reg: {
      ru: (
        <p>
          Перед регистрацией просим вас ознакомиться с{" "}
          <a href="https://cctld.uz/info/polru/" target="_blank" rel="noopener noreferrer">
            Положением о порядке регистрации и пользования доменными именами в домене «UZ»
          </a>
        </p>
      ),
      uz: (
        <p>
          Ro'yxatdan o'tishdan oldin{" "}
          <a href="https://cctld.uz/info/polru/" target="_blank" rel="noopener noreferrer">
            “UZ” domenida domen nomlarini ro‘yxatdan o‘tkazish va ulardan foydalanish tartibi to‘g‘risidagi nizom bn
            tanishib chiqing.
          </a>
        </p>
      ),
      en: (
        <p>
          Before registration, please read the{" "}
          <a href="https://cctld.uz/info/polru/" target="_blank" rel="noopener noreferrer">
            Regulations on the procedure for registration and use of domain names in the "UZ" domain
          </a>
        </p>
      ),
    },
  };
  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />
      <Container headTitle={langData.headTitle[language]}>
        <hr />
        <div className={st.domains__block}>
          <div className={st.domains__block__content}>
            <h2>{langData.t1[language]}</h2>
            <p>{langData.t2[language]}</p>
            <p>{langData.t3[language]}</p>
          </div>
          <div className={st.domains__block__img}>
            <img src="/domain/intro-img.png" />
          </div>
        </div>
      </Container>
      <div className={st.domains}>
        <div className={st.domains__head}>
          <Container
            headTitle={langData.headTitle[language]}
            clNTitle="mb-3"
            description={<p>{langData.description[language]}</p>}
          >
            <div className={st.domains__head__block}>
              {/* <h3>Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot;.</h3> */}
              <div className={st.domains__head__block__item}>
                <RegDomainBlock language={language} />
              </div>

              {langData.reg[language]}
              {/* <div className={st.domains__head__block__table}>
								<table>
									<tr>
										<th>Доменная зона</th>
										<th>Регистрации c хостингом</th>
										<th>С хостингом</th>
										<th>Без хостинга</th>
										<th>Redemption period</th>
										<th>Купить</th>
									</tr>
									<tr>
										<td>.UZ</td>
										<th>17 000 сум*</th>
										<th>
											<Link href={checkLang(language) + "/free-domains"}>
												<a>Бесплатно*</a>
											</Link>
										</th>
										<th>20 000 сум*</th>
										<th>40 000 сум**</th>
										<th>
											<a href="https://billing.airnet.uz/billing.php?do=zones">Купить</a>
										</th>
									</tr>
								</table>
							</div> */}
            </div>
            {/* <p>
							Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен
							на нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
						</p>
						<p>* При регистрации хостинг с доменом</p>
						<p>
							** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней
							после окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в
							течение 30 календарных дней предыдущий владелец может вернуть себе домен.
						</p> */}
          </Container>
        </div>
        <WhyBlock content={content} language={language} />
        <FAQ faq={faq} title="FAQ" language={language} />
        <Partners language={language} />
      </div>
    </>
  );
}
