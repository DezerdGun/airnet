import st from "../blog.module.scss";
import Link from "next/link";
import { BlogBlock } from "..";

export const blog = [
  {
    img: "/blog/yandex-musics.jpg",
    link: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
    date: "23.12.2018",
    title: {
      ru: "«Яндекс.Музыка» и Beeline запустили совместный проект",
      uz: "Yandex.Musiqa va Beeline hamkorlikdagi loyihani ishga tushirdi",
    },
    description: {
      ru: (
        <>
          <p>
            Мобильные операторы все активнее сотрудничают с поставщиками
            аудиоконтента — ранее похожие проекты запустили Ucell и Zvooq, UMS и
            Lamuz.
          </p>{" "}
          <p>«Яндекс.Музыка» и Beeline…</p>
        </>
      ),
      uz: (
        <>
          <p>
            Uyali aloqa operatorlari etkazib beruvchilar bilan tobora ko'proq
            hamkorlik qilmoqda audio-kontent — ilgari shu kabi loyihalar Ucell
            va Zvooq, UMS va Lamuz.
          </p>{" "}
          <p>Yandex.Musiqa va Beeline...</p>
        </>
      ),
    },
  },
  {
    img: "/blog/sim-card.jpg",
    link: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
    date: "22.12.2018",
    title: {
      ru: "В Узбекистане разрешат сохранять номер при смене оператора",
      uz: "O‘zbekistonda operatorni almashtirishda raqamni saqlab qolishga ruxsat beriladi",
    },
    description: {
      ru: (
        <>
          <p>
            Услуга будет платной, а переносить номер можно будет не чаще одного
            раза в 180 дней.
          </p>
          <p>В Узбекистане разрешат сохранять номер при смене…</p>
        </>
      ),
      uz: (
        <>
          <p>
            Xizmat pullik bo'ladi va raqamni ko'pi bilan bir marta o'tkazish
            mumkin bo'ladi marta 180 kun ichida.
          </p>
          <p>
            O‘zbekistonda raqamni o‘zgartirganda saqlashga ruxsat beriladi ...
          </p>
        </>
      ),
    },
  },
  {
    img: "/blog/lenovo-phone.jpg",
    link: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
    date: "21.12.2018",
    title: {
      ru: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
      uz: "Lenovo kompaniyasi 12 Gb tezkor xotiraga ega dunyodagi birinchi smartfonni taqdim etdi",
    },
    description: {
      ru: (
        <>
          <p>
            Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и
            новейший процессор Snapdragon 855.
          </p>
          <p>Lenovo представила новую версию смартфона-слайдера…</p>
        </>
      ),
      uz: (
        <>
          <p>
            Lenovo Z5 Pro GT dunyoda birinchi bo'lib 12 GB operativ xotira va
            so'nggi Snapdragon 855 protsessori.
          </p>
          <p>Lenovo slider smartfonining yangi versiyasini taqdim etdi...</p>
        </>
      ),
    },
  },
  {
    img: "/blog/santa.jpg",
    link: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
    date: "20.12.2018",
    title: {
      ru: "В Telegram появились встроенные опросы",
      uz: "Telegramda o‘rnatilgan so‘rovnomalar mavjud",
    },
    description: {
      ru: (
        <>
          <p>
            В новом обновлении мессенджера для создания опроса теперь не надо
            пользоваться сторонними решениями.
          </p>
          <p>
            Команда Telegram представила специальный инструмент для создания
            опросов. Об…
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Yangi messenjer yangilanishida siz endi so'rovnoma yaratishingiz
            shart emas uchinchi tomon yechimlaridan foydalaning.
          </p>
          <p>
            Telegram jamoasi yaratish uchun maxsus vositani taqdim etdi
            so'rovlar. Haqida…
          </p>
        </>
      ),
    },
  },
  {
    img: "/blog/phone-vpn.jpg",
    link: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
    date: "19.12.2018",
    title: {
      ru: "Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android",
      uz: "Birinchi marta VPN ilovalari O‘zbekistonda ham iOS, ham Android uchun eng ko‘p yuklab olingan ilovalarga aylandi",
    },
    description: {
      ru: (
        <>
          <p>
            Первое место по количеству скачиваний в Google Play занял Secure
            VPN, а в App Store — VPN Proxy Master.
          </p>
          <p>VPN-приложения стали самыми…</p>
        </>
      ),
      uz: (
        <>
          <p>
            Google Play’da yuklab olishlar soni bo‘yicha birinchi o‘rinni Secure
            egalladi VPN va App Store do'konida - VPN Proxy Master.
          </p>
          <p>VPN ilovalari eng koʻp...</p>
        </>
      ),
    },
  },
  {
    img: "/blog/google-5g.jpg",
    link: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
    date: "18.12.2018",
    title: {
      ru: "В Китае решили отказаться от 3G",
      uz: "Xitoy 3Gdan voz kechishga qaror qildi",
    },
    description: {
      ru: (
        <>
          <p>
            В прошлом году страна отказалась от 2G, а в этом году решила сделать
            то же самое с 3G.
          </p>{" "}
          <p>Основные китайские и тайваньские…</p>
        </>
      ),
      uz: (
        <>
          <p>
            O'tgan yili mamlakat 2G dan voz kechdi va bu yil buni qilishga qaror
            qildi 3G bilan ham xuddi shunday.
          </p>{" "}
          <p>Asosiy Xitoy va Tayvan...</p>
        </>
      ),
    },
  },
  {
    img: "/blog/yandex-money.jpg",
    link: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
    date: "17.12.2018",
    title: {
      ru: "«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане",
      uz: "Yandex.Money O‘zbekistonda hamyonlarni to‘ldirish usullarini kengaytirish ustida ishlamoqda",
    },
    description: {
      ru: (
        <>
          <p>
            Сейчас в Узбекистане можно пополнить кошелек лишь через
            конверсионные и валютные карты.
          </p>{" "}
          <p>
            В «Яндексе.Деньгах» работают над расширением методов пополнения
            кошельков в Узбекистане….
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Endi O‘zbekistonda hamyonni faqat orqali to‘ldirish mumkin
            konvertatsiya va valyuta kartalari.
          </p>{" "}
          <p>
            Yandex.Money depozit usullarini kengaytirish ustida ishlamoqda
            O'zbekistonda hamyonlar...
          </p>
        </>
      ),
    },
  },
  {
    img: "/blog/facebook.jpg",
    link: "/blog/facebook-soobshhil-ob-oshibke",
    date: "16.12.2018",
    title: {
      ru: "Facebook сообщил об ошибке",
      uz: "Facebook xato haqida xabar berdi",
    },
    description: {
      ru: (
        <>
          <p>
            Из-за ошибки в API сторонние приложения могли получить доступ к
            закрытым и даже неопубликованным фотографиям.{" "}
          </p>
          <p>Facebook обнаружила ошибку в API, из-за которой…</p>
        </>
      ),
      uz: (
        <>
          <p>
            APIdagi xatolik tufayli uchinchi tomon ilovalari kirishi mumkin edi
            yopiq va hatto nashr etilmagan suratlar.{" "}
          </p>
          <p>Facebook API xatosiga duch keldi...</p>
        </>
      ),
    },
  },
  {
    img: "/blog/speedtest.jpg",
    link: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
    date: "14.12.2018",
    title: {
      ru: "Speedtest небольшой рост скорости интернета в Узбекистане",
      uz: "Speedtest O‘zbekistonda internet tezligini biroz oshirdi",
    },
    description: {
      ru: (
        <>
          <p>
            По итогам ноября Узбекистан занял 108 место по скорости мобильного
            интернета и 111 по скорости проводного.
          </p>
          <p>Интернет-сервис Speedtest.net ирландской компании Ookla</p>
        </>
      ),
      uz: (
        <>
          <p>
            Noyabr oyi yakunlari bo‘yicha O‘zbekiston mobil aloqa tezligi
            bo‘yicha 108-o‘rinni egalladi. Internet va simli tezlik uchun 111.
          </p>
          <p>
            Irlandiyaning Ookla kompaniyasining Speedtest.net internet xizmati
          </p>
        </>
      ),
    },
  },
  {
    img: "/blog/google-5g.jpg",
    link: "/blog/google-podvel-itogi-2018-goda",
    date: "13.12.2018",
    title: {
      ru: "Google подвел итоги 2018 года",
      uz: "Google 2018 yil yakunlarini sarhisob qildi",
    },
    description: {
      ru: (
        <>
          <p>
            Google подвел{" "}
            <a
              href="https://trends.google.com/trends/yis/2018/GLOBAL/"
              target="_blank"
              rel="noreferrer noopener"
            >
              итоги года
            </a>
            , проанализировав поисковые запросы пользователей со всего мира.
          </p>
          <p>Больше всего в этом году искали информацию о Чемпионате…</p>
        </>
      ),
      uz: (
        <>
          <p>
            Google butun dunyo bo'ylab foydalanuvchilarning qidiruv so'rovlarini
            tahlil qilish orqali{" "}
            <a
              href="https://trends.google.com/trends/yis/2018/GLOBAL/"
              target="_blank"
              rel="noreferrer noopener"
            >
              yil natijalarini
            </a>{" "}
            chiqardi.
          </p>
          <p>Bu yil chempionat haqidagi ma'lumot eng ko'p qidirilganlar...</p>
        </>
      ),
    },
  },
];

export default function Blog({ language }) {
  const pagination = {
    ru: (
      <>
        <Link href="/blog">
          <a>&laquo; Предыдущий пост</a>
        </Link>
        <Link href="/blog">
          <a>1</a>
        </Link>
        <a className={st.blog__links__active}>2</a>
        <Link href="/blog/page/3">
          <a>3</a>
        </Link>
        <Link href="/blog/page/3">
          <a>Следующий пост &raquo;</a>
        </Link>
      </>
    ),
    uz: (
      <>
        <a className={st.blog__links__active} disabled>
          &laquo; Oldingi post
        </a>
        <Link href="/blog/page/2">
          <a>1</a>
        </Link>
        <a className={st.blog__links__active}>2</a>
        <Link href="/blog/page/3">
          <a>3</a>
        </Link>
        <Link href="/blog/page/3">
          <a>Keyingi post &raquo;</a>
        </Link>
      </>
    ),
  };

  return <BlogBlock pagination={pagination} blog={blog} language={language} />;
}
