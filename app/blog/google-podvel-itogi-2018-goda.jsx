import BlogItem from "@/components/blogItem";

const data = {
  title: {
    ru: "Google подвел итоги 2018 года",
    uz: "Google 2018 yil yakunlarini sarhisob qildi",
  },
  desc: {
    ru: "Google подвел итоги года, проанализировав поисковые запросы пользователей со всего мира.",
    uz: "Google butun dunyo boʻylab foydalanuvchilarning qidiruv soʻrovlarini tahlil qilib, yilni sarhisob qildi",
  },
  date: "13.12.2018",
  img: "/blog/google-5g.jpg",
  content: {
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
        <p>
          Больше всего в этом году искали информацию о Чемпионате мира по
          футболу, ди-джее Avicii, рэп-исполнителе Маке Миллере и писателе Стэне
          Ли (все трое ушли из жизни в этом году), а также фильме «Черная
          пантера».
        </p>
        <p>
          Из новостей пользователей больше всего интересовали ЧМ по футболу в
          России, ураган «Флоренция», результаты американской лотереи «Мега
          миллионы», королевская свадьба (свадьба принца Гарри и Меган Маркл), а
          также результатов выборов в США (полностью переизбирается нижняя
          палата Конгресса США — Палата представителей).
        </p>
        <p>
          Людьми, информацию о которых искали чаще всего, стали вышедшая замуж
          за принца Гарри Меган Маркл, певица Деми Ловато, актер и режиссер
          Сильвестр Сталонне, видеоблогер Логан Пол и бизнесвуман Хлои Кардашян.
        </p>
        <p>
          Пять актеров, которых гуглили чаще всего, стали Сильвестр Сталонне,
          Логан Пол, Пит Дэвидсон, Билл Косби и Ноа Ченинео.
        </p>
        <p>
          Что касается спортсменов, то тут пользователи больше всего искали
          баскетболиста Тристана Томпсона, футболиста Алексиса Санчеса,
          горнолыжницу Линдси Вонн, сноубордиста Шона Уайта и бойца Хабиба
          Нурмагомедова.
        </p>
        <p>
          Google также назвал фильмы, которые искали чаще всего: «Черная
          пантера», «Дэдпул 2», Venom, «Мстители: Война бесконечности» и
          «Богемская рапсодия».
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
          Butun dunyo bo'ylab foydalanuvchilarning qidiruv so'rovlarini tahlil
          qilish orqali, Google{" "}
          <a
            href="https://trends.google.com/trends/yis/2018/GLOBAL/"
            target="_blank"
            rel="noreferrer noopener"
          >
            yil sarhisobini chiqardi
          </a>
        </p>
        <p>
          Ko'pchilik bu yil jahon chempionati haqida ma'lumot qidirdi futbol,
          ​​DJ Avicii, rap rassomi Mac Miller va yozuvchi Stan Li (uchalasi ham
          bu yil vafot etdi), shuningdek, "Qora pantera".
        </p>
        <p>
          Yangiliklardan foydalanuvchilarni eng ko'p jahon chempionati
          qiziqtirgan Rossiya, "Florensiya" dovuli, Amerika lotereyasi
          natijalari "Mega millionlar”, qirollik to‘yi (shahzoda Garri va Meghan
          Marklning to‘yi) va shuningdek, Qo'shma Shtatlardagi saylov natijalari
          (pastki AQSh Vakillar Palatasi).
        </p>
        <p>
          Eng ko'p qidirilgan odamlar turmush qurgan ayol edi shahzoda Garri
          Meghan Markle, qo'shiqchi Demi Lovato, aktyor va rejissyor uchun
          Silvestr Stallone, videoblogger Logan Pol va ishbilarmon ayol Chloe
          Kardashian.
        </p>
        <p>
          Googleda eng ko'p topilgan aktyorlar beshligi Silvestr Stallone edi.
          Logan Pol, Pit Devidson, Bill Kosbi va Nuh Chenineo.
        </p>
        <p>
          Sportchilarga kelsak, bu erda foydalanuvchilar eng ko'p qidirgan
          basketbolchi Tristan Tompson, futbolchi Aleksis Sanches, chang'ichi
          Lindsi Vonn, snoubordchi Shon Uayt va jangchi Xabib Nurmagomedov.
        </p>
        <p>
          Google shuningdek, eng koʻp qidirilgan filmlarni “Qora pantera",
          "Dedpul 2", Venom, "Qasoskorlar: Infinity War" va "Bogemacha
          Rapsodiya".
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
  prev: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
  next: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
};

export default function Blog({ language }) {
  return <BlogItem data={data} language={language} />;
}
