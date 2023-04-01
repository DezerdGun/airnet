import BlogItem from "@/components/blogItem";

const data = {
  title: {
    ru: "Speedtest небольшой рост скорости интернета в Узбекистане",
    uz: "Oʻzbekistonda internet tezligining eng tez oʻsishi",
  },
  desc: {
    ru: "По итогам ноября Узбекистан занял 108 место по скорости мобильного интернета и 111 по скорости проводного.",
    uz: "O‘zbekiston noyabr oyi yakunlariga ko‘ra mobil internet tezligi bo‘yicha 108-o‘rinni, simli ulanish tezligi bo‘yicha esa 111-o‘rinni egalladi",
  },
  date: "14.12.2018",
  img: "/blog/speedtest.jpg",
  content: {
    ru: (
      <>
        <p>
          По итогам ноября Узбекистан занял 108 место по скорости мобильного
          интернета и 111 по скорости проводного.
        </p>
        <p>
          Интернет-сервис Speedtest.net ирландской компании Ookla опубликовал
          ежемесячный рейтинг Speedtest Global Index, в котором содержатся
          данные по скорости беспроводного и проводного интернета в мире по
          итогам ноября.
        </p>
        <p>
          По скорости мобильного интернета Узбекистан поднялся на две позиции и
          теперь занимает 108 место из 123 (10,44 Мбит/с).
        </p>
        <p>
          По скорости проводного интернета поднялся на одну позицию и теперь
          занимает 111-е место из 126 (9,98 Мбит/с)
        </p>
        <p>
          Лидером рейтинга по скорости мобильного интернета стала Исландия
          (72,54 Мбит/с), по скорости проводного остается Сингапур (185,25
          Мбит/с).
        </p>
        <p>
          Ранее Spot писал, что «Узбектелеком» объявил о расширении пропускной
          способности интернета в 10 раз.
        </p>
        <p>
          Speedtest вычисляет скорость и формирует рейтинг на основе собственных
          данных, полученных от посетителей из той или иной страны. В месяц сайт
          посещает более 150 млн людей, он считается одним из основных сервисов
          для определения скорости интернета на месте.
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
          Noyabr oyi yakunlari bo‘yicha O‘zbekiston mobil aloqa tezligi bo‘yicha
          108-o‘rinni egalladi. Internet va simli tezlik uchun 111.
        </p>
        <p>
          Irlandiyaning Ookla kompaniyasining Speedtest.net internet-xizmati
          e'lon qildi o'z ichiga olgan Speedtest Global Indexning oylik reytingi
          ga muvofiq dunyodagi simsiz va simli Internet tezligi haqidagi
          ma'lumotlar noyabr natijalari.
        </p>
        <p>
          Mobil internet tezligi bo‘yicha O‘zbekiston ikki pog‘onaga ko‘tarildi
          va hozirda 123 (10,44 Mbit/s) orasida 108-o‘rinni egalladi.
        </p>
        <p>
          Simli Internet tezligi bo'yicha u bir pozitsiyaga ko'tarildi va hozir
          126 orasida 111-o‘rin (9,98 Mbit/s)
        </p>
        <p>
          Islandiya mobil internet tezligi reytingida yetakchilik qilmoqda
          (72,54 Mbit / s), Singapur eng tez (185,25 Mbit / s) bo'lib qolmoqda
          Mbps).
        </p>
        <p>
          Eslatib o‘tamiz, avvalroq Spot “O‘zbektelekom” o‘tkazish qobiliyati
          kengaygani haqida xabar bergani haqida yozgan edi Internet qobiliyati
          10 marta.
        </p>
        <p>
          Speedtest tezlikni hisoblab chiqadi va o'ziga asoslanib reyting
          yaratadi ma'lum bir mamlakatdan tashrif buyuruvchilardan olingan
          ma'lumotlar. Oyiga sayt 150 milliondan ortiq kishi tashrif buyuradi,
          bu asosiy xizmatlardan biri hisoblanadi Internet tezligini joyida
          aniqlash.
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
  prev: "/blog/facebook-soobshhil-ob-oshibke",
  next: "/blog/google-podvel-itogi-2018-goda",
};

export default function Blog({ language }) {
  return <BlogItem data={data} language={language} />;
}
