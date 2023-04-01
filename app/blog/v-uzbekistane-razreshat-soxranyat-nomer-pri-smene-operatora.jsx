import BlogItem from "@/components/blogItem";

const data = {
  title: {
    ru: "В Узбекистане разрешат сохранять номер при смене оператора",
    uz: "O‘zbekistonda operator almashtirilganda raqamni saqlab qolishga ruxsat beriladi",
  },
  desc: {
    ru: "Услуга будет платной, а переносить номер можно будет не чаще одного раза в 180 дней.",
    uz: "Xizmat pullik bo'ladi va raqamni har 180 kunda bir martadan ko'p bo'lmagan holda o'tkazish mumkin bo'ladi",
  },
  date: "22.12.2018",
  img: "/blog/sim-card.jpg",
  content: {
    ru: (
      <>
        <p>
          Услуга будет платной, а переносить номер можно будет не чаще одного
          раза в 180 дней.
        </p>
        <p>
          В Узбекистане разрешат сохранять номер при смене оператора, следует из
          проекта Министерства по развитию информационных технологий и
          коммуникаций.
        </p>
        <p>
          Ведомство уже подготовило проект положения, в котором описывается, как
          именно будет проводиться операция.
        </p>
        <p>
          Так, к примеру, услуга указана платной. Перенос номера планируется
          ограничить одним разом в течение 180 дней.
        </p>
        <p>
          «Переносимыми номерами могут быть только номера, выделенные для
          операторов мобильной связи. Изменения формата набора номера вследствие
          переносимости номера недопустимо», — говорится в проекте.
        </p>
        <p>
          Перенести можно будет лишь номера мобильной связи — перенос номеров,
          используемых для предоставления услуг фиксированной телефонной связи,
          к сетям мобильной связи и наоборот запрещается. Если номер перенесен
          ошибочно, то его можно будет вернуть — прописан и этот порядок.
        </p>
        <p>
          Подробнее ознакомиться с{" "}
          <a
            href="https://regulation.gov.uz/ru/document/1539"
            target="_blank"
            rel="noreferrer noopener"
          >
            проектом
          </a>
          , внести в него свои предложения и замечания можно до 2 января 2019
          года.
        </p>
        <p>
          Ссылка на источник{" "}
          <a
            href="https://www.spot.uz/ru"
            target="_blank"
            rel="noreferrer noopener"
          >
            Spot
          </a>
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          Xizmat pullik bo'ladi va raqamni ko'pi bilan bir marta o'tkazish
          mumkin bo'ladi marta 180 kun ichida.
        </p>
        <p>
          O‘zbekistonda operator o‘zgarganda raqamni saqlab qolishga ruxsat
          beriladi Axborot texnologiyalarini rivojlantirish vazirligining
          loyihasi va kommunikatsiyalar.
        </p>
        <p>
          Agentlik allaqachon qanday qilib tasvirlangan nizom loyihasini
          tayyorlagan operatsiya amalga oshiriladi.
        </p>
        <p>
          Masalan, xizmat pullik deb ko'rsatilgan. Raqamni ko'chirish
          rejalashtirilgan 180 kun ichida bir marta cheklash.
        </p>
        <p>
          “Ko‘chma raqamlar faqat ular uchun ajratilgan raqamlar bo‘lishi mumkin
          uyali aloqa operatorlari. Terish formati tufayli o'zgaradi Raqamni
          ko'chirishga yo'l qo'yib bo'lmaydi”, - deyiladi loyihada
        </p>
        <p>
          Faqat mobil raqamlarni o'tkazish mumkin bo'ladi - raqamlarni
          ko'chirish, statsionar telefon xizmatlarini ko'rsatish uchun
          foydalaniladi, mobil tarmoqlarga va aksincha taqiqlanadi. Agar raqam
          ko'chirilgan bo'lsa noto'g'ri, keyin uni qaytarish mumkin - bu buyruq
          ham belgilanadi.
        </p>
        <p>
          <a
            href="https://regulation.gov.uz/ru/document/1539"
            target="_blank"
            rel="noreferrer noopener"
          >
            Proekt
          </a>
          haqida koproq ma'lumot oling , Unga taklif va mulohazalaringizni
          2019-yil 2-yanvarga qadar yuborishingiz mumkin yilning.
        </p>
        <p>
          Manba'a uchun link{" "}
          <a
            href="https://www.spot.uz/ru"
            target="_blank"
            rel="noreferrer noopener"
          >
            Spot
          </a>
        </p>
      </>
    ),
  },
  prev: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
  next: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
};

export default function Blog({ language }) {
  return <BlogItem data={data} language={language} />;
}
