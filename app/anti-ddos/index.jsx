import { checkLang } from "@/utils/checkLang.js";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/container/index.jsx";
import Partners from "../../components/partners";
import { LINKS } from "../../components/requirements";
import SEO from "../../components/seo";
import WhyBlock from "../../components/whyBlock";
import st from "./anti-ddos.module.scss";
import { notificationIcon } from "shared/icons/notificationIcon.js";
import { coinsIcon } from "shared/icons/coinsIcon.js";
import { userMinusIcon } from "shared/icons/userMinusIcon.js";
import { dislikeIcon } from "shared/icons/dislikeIcon.js";

export default function AntiDDos({ language }) {
  const content = [
    {
      title: {
        ru: "На сайт невозможно зайти",
        uz: "Saytga kirishning iloji yo'q",
        en: "The site cannot be accessed",
      },
      description: {
        ru: <p>Во время DDoS-атаки серверы не выдерживают нагрузку и сайт становится недоступен для пользователей.</p>,
        uz: <p>DDos hujumi vaqtida server zoriqishni ko'tara olmaydi va mijozlar uchun hizma qila olmaydi</p>,
        en: (
          <p>During a DDoS attack, the servers fail to withstand the load and the site becomes unavailable to users.</p>
        ),
      },
      icon: notificationIcon,
    },
    {
      title: { ru: "Потеря клиентов", uz: "Mijozlorni yo'qotish", en: "Losing Customers" },
      description: {
        ru: <p>Клиент не будет ждать, пока сайт заработает и отправится рассматривать предложения конкурентов.</p>,
        uz: <p>Mijoz sayt ishlashini kutmaydi va raqobatchilarning takliflarini ko'rib chiqishga boradi.</p>,
        en: <p>Клиент не будет ждать, пока сайт заработает и отправится рассматривать предложения конкурентов.</p>,
      },
      icon: userMinusIcon,
    },
    {
      title: {
        ru: "Потеря прибыли",
        uz: "Foydani yo'qotish",
        en: "Loss of profit",
      },
      description: {
        ru: <p>С уходом клиентов Вы теряете заказы, а значит и прибыль, которую они могли принести.</p>,
        uz: (
          <p>
            Mijozlarning ketishi bilan siz buyurtmalarni va shuning uchun ular olib kelishi mumkin bo'lgan foydani
            yo'qotasiz.
          </p>
        ),
        en: <p>With the departure of customers, you lose orders, and hence the profit that they could bring.</p>,
      },
      icon: coinsIcon,
    },
    {
      title: {
        ru: "Потеря репутации",
        uz: "Taniqlikni yo'qotish",
        en: "Loss of reputation",
      },
      description: {
        ru: <p>Клиенты ассоциируют нерабочий сайт с Вашей компанией, таким образом Ваш бренд теряет репутацию.</p>,
        uz: (
          <p>
            Mijozlar ishlamaydigan saytni kompaniyangiz bilan bog'lashadi, shuning uchun brendingiz o'z obro'sini
            yo'qotadi.
          </p>
        ),
        en: <p>Customers associate a non-working site with your company, thus your brand loses its reputation.</p>,
      },
      icon: dislikeIcon,
    },
  ];
  const langData = {
    title: {
      ru: "Чем опасны DDoS-атаки?",
      uz: "DDoS hujumi nmasi bilan havfli",
      en: "Why are DDoS attacks dangerous?",
    },
    seoTitle: {
      ru: "Защита серверов от DDoS-атак | Airnet",
      uz: "DDoS hujumidan serverlarni himoya qilish| Airnet",
      en: "Protecting servers from DDoS attacks | Airnet",
    },
    seoDesc: {
      ru: "Описание защиты от DDoS-атак VDS и Выделенных серверов у Airnet",
      uz: "Airnet VDS va Dedicated serverlarining DDoS hujumlaridan himoya qilish tavsifi",
      en: "Description of protection against DDoS attacks of Airnet VDS and Dedicated servers",
    },
    headTitle: {
      ru: "Защита серверов от DDoS-атак",
      uz: "DDoS hujumidan himoya qilish",
      en: "Protecting servers from DDoS attacks",
    },
    aboutUslug: {
      ru: "Об услуге",
      uz: "Hizmatlar haqida",
      en: "About the service",
    },
    uslug1: {
      ru: "Защищает сервер от самых известных атак, предотвращает угрозы на канальном, сетевом, транспортном и прикладном уровнях OSI. Весь входящий трафик фильтруется — вредоносный отсеивается, и до сайта доходят только реальные пользователи.",
      uz: "Serverni eng mashhur hujumlardan himoya qiladi, kanal, tarmoqdagi tahdidlarning oldini oladi, OSI ning transport va amaliy qatlamlari. Barcha kiruvchi trafik filtrlanadi - zararli yo'q qilinadi va faqat haqiqiy foydalanuvchilar saytga kirishadi",
      en: "Protects the server from the most known attacks, prevents threats at the channel, network, transport and application OSI levels. All incoming traffic is filtered - malicious traffic is filtered out, and only real users reach the site.",
    },
    uslug2: {
      ru: "Подключите защищенный канал, и все сайты на сервере будут в безопасности.",
      uz: "Xavfsiz kanalni ulang va serverdagi barcha saytlar xavfsiz bo'ladi.",
      en: "Connect a secure channel, and all sites on the server will be safe.",
    },
    uslug3: {
      ru: "Как подключить DDoS?",
      uz: "DDoS qanday qilib yoqtirish",
      en: "How to enable DDoS?",
    },
    DDoSAtack: {
      ru: "Как осуществляется DDoS-атака",
      uz: "DDoS hujumini qanday aniqlash mumkin",
      en: "How a DDoS attack is carried out",
    },
    chanceAtack: {
      ru: "Шансы стать объектом DDoS-атаки очень велики, и таких попыток бывает много. Цель DDoS-атаки – сделать сервер, сервис или инфраструктуру недоступной путем перегрузки пропускной способности сервера или монополизации его ресурсов до полного истощения. Во время DDoS-атаки большое количество запросов одновременно отправляется с большого количества точек со всей сети Интернет. Интенсивность такого “перекрестного огня” делает предоставляемый сервис нестабильным, или еще хуже, – недоступным.",
      uz: "DDoS hujumi ob'ektiga aylanish ehtimoli juda yuqori va bunday urinishlar juda ko'p. Maqsad DDoS hujumlari - server, xizmat yoki infratuzilmani haddan tashqari yuklash orqali mavjud bo'lmaydi serverning tarmoqli kengligi yoki uning resurslarini tugaguniga qadar monopollashtirish. In DDoS hujumi paytida bir vaqtning o'zida katta miqdordagi so'rovlar yuboriladi butun Internetdan olingan ballar soni. Bu o'zaro otishma ning intensivligi taqdim etilgan xizmat beqaror yoki undan ham yomoni, mavjud emas.",
      en: "The chances of becoming the object of a DDoS attack are very high, and there are many such attempts. The goal of a DDoS attack is to make a server, service, or infrastructure unavailable by overloading the server's bandwidth or monopolizing its resources to the point of exhaustion. During a DDoS attack, a large number of requests are simultaneously sent from a large number of points throughout the Internet. The intensity of this crossfire makes the service provided unstable, or worse, unavailable.",
    },
    aboutAtack: {
      ru: "Цели и виды ата",
      uz: "Hujimning maqsadi va turlari",
      en: "Purposes and types of ata",
    },
    atacks: {
      ru: "Существует три способа сделать Ваш сайт, сервер или инфраструктуру недоступной:",
      uz: "Serveringizni himoya qilishning va qoshimcha kirishlarni toxtatishni 3ta usuli bor",
      en: "There are three ways to make your site, server or infrastructure unavailable:",
    },
    atack1: {
      ru: "Перенасытить пропускную способность сети сервера, сделав его недоступным.",
      uz: "Serverning tarmoq o'tkazish qobiliyatini to'ldiring, uni mavjud bo'lmaydi.",
      en: "Saturate the server's network bandwidth, making it unavailable.",
    },
    atack2: {
      ru: "Исчерпать системные ресурсы машины, сделав невозможным ответ на легитимные запросы.",
      uz: "Mashinaning tizim resurslarini sarflang, bu qonuniy so'rovlarga javob berishni imkonsiz qiladi.",
      en: "Exhaust the machine's system resources, making it impossible to respond to legitimate requests.",
    },
    atack3: {
      ru: "Использовать уязвимость программного обеспечения, так называемый «эксплоит», для захвата машины или ограничения доступа к ней.",
      uz: "Qo'lga olish uchun eksploit deb ataladigan dasturiy zaiflikdan foydalaning avtomobil yoki unga kirishga cheklovlar.",
      en: "Use a software vulnerability, a so-called exploit, to take over a machine or restrict access to it.",
    },
    howIt: {
      ru: "Как выполняется защита",
      uz: "Qanday himoya qilish",
      en: "How protection works",
    },
    howDo: {
      ru: "Для защиты серверов и сервисов от атак предлагаем решение на основе технологии VAC – эксклюзивное сочетание методов для:",
      uz: "Serverlar va xizmatlarni hujumlardan himoya qilish uchun biz VAC texnologiyasiga asoslangan yechimni taklif qilamiz - bu usullarning eksklyuziv kombinatsiyasi:",
      en: "To protect servers and services from attacks, we offer a solution based on VAC technology - an exclusive combination of methods for:",
    },
    do1: {
      ru: "Высокоскоростного анализа всех пакетов в режиме реального времени",
      uz: "Barcha paketlarni real vaqtda yuqori tezlikda tahlil qilish",
      en: "High-speed real-time analysis of all packets",
    },
    do2: {
      ru: "Отсеивания входящего трафика вашего сервера",
      uz: "Qanday himoya qilishServeringizdan kiruvchi trafikni filtrlash",
      en: "Filtering incoming traffic from your server",
    },
    do3: {
      ru: "Смягчения негативных последствий, то есть выделения всех нелегитимных IP-пакетов и пропускания легитимных",
      uz: "Salbiy oqibatlarni yumshatish, ya'ni barcha noqonuniy IP-paketlarni taqsimlash va qonuniy o'tish.",
      en: "Mitigation of negative consequences, that is, the allocation of all illegitimate IP packets and the passage of legitimate",
    },
  };
  return (
    <>
      <SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />

      <Container headTitle={langData.headTitle[language]}>
        <div className={st.anti_ddos__info}>
          <div className={st.anti_ddos__info__content}>
            <h3>{langData.aboutUslug[language]}</h3>
            <p>{langData.uslug1[language]}</p>
            <p>{langData.uslug2[language]}</p>
            <Link href={checkLang(language) + LINKS.HELP}>
              <a>{langData.uslug3[language]}</a>
            </Link>
          </div>
          <div className={st.anti_ddos__info__img}>
            <img src="/ddos-img.png" />
          </div>
        </div>
      </Container>

      {/* <Container headTitle="Защита серверов от DDoS-атак" clNTitle="mb-0"></Container> */}
      <WhyBlock title={langData.title[language]} content={content} language={language} />
      <Container className="pt-2">
        <hr />
        <h3>{langData.DDoSAtack[language]}</h3>
        <p>{langData.chanceAtack[language]}</p>
        <div className="text-center">
          <Image src="/anti-ddos/without-protection.png" width={640} height={167} className="text-center" />
        </div>
        <h3>{langData.aboutAtack[language]}</h3>
        <p>{langData.atacks[language]}</p>
        <ul className="list">
          <li>{langData.atack1[language]}</li>
          <li>{langData.atack2[language]}</li>
          <li>{langData.atack3[language]}</li>
        </ul>

        <div className="text-center">
          <Image src="/anti-ddos/network.jpg" width={800} height={640} className="text-center" />
        </div>

        <h3>{langData.howIt[language]}</h3>
        <p>{langData.howDo[language]}</p>
        <ul className="list">
          <li>{langData.do1[language]}</li>
          <li>{langData.do2[language]}</li>
          <li>{langData.do3[language]}</li>
        </ul>
        <div className="text-center">
          <Image src="/anti-ddos/protected.png" width={640} height={216} />
        </div>
      </Container>
      <Partners language={language} />
    </>
  );
}
