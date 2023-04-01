import BlogItem from "@/components/blogItem";

const data = {
  title: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
  decs: "Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и новейший процессор Snapdragon 855.",
  date: "21 Дек 2018",
  img: "/blog/lenovo-phone.jpg",
  content: (
    <>
      <p>
        Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и
        новейший процессор Snapdragon 855.
      </p>
      <p>
        Lenovo представила новую версию смартфона-слайдера Lenovo Z5 Pro,
        сообщается на сайте компании.
      </p>
      <p>
        Смартфон первым в мире получил 12 ГБ оперативной памяти и новейший
        процессор Snapdragon 855, уточняет Ferra.
      </p>
      <p>
        Экран сдвигается вниз, открывая доступ к фронтальной камере. Смартфон
        оснащается 6,39-дюймовым Super AMOLED-дисплеем разрешением Full HD+
        (2340×1080 пикселей), занимающим 95,06% передней панели, двойной
        основной камерой 24+16 Мп, двойной фронтальной камерой 16+8 Мп. Сканер
        отпечатков пальцев встроен под экран.
      </p>
      <p>
        Аккумулятор обладает ёмкостью 3350 мАч. Поддерживаются две SIM-карты, 4G
        VoLTE, Wi-Fi (802.11 ac), Bluetooth 5, GPS + ГЛОНАСС, NFC, есть порт USB
        Type-C./blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora
      </p>
      <p>
        Lenovo Z5 Pro GT поступит в продажу в январе в Китае по цене $391 за
        версию 6+128 ГБ, 434 доллара за 8+128 ГБ, $492 за 8+256 ГБ, $635 за
        12+512 ГБ.
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
  prev: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
  next: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
};

export default function Blog() {
  return <BlogItem data={data} />;
}
