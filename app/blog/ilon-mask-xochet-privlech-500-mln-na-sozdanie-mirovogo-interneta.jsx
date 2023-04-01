import BlogItem from "@/components/blogItem";

const data = {
  title: {
    ru: "Илон Маск хочет привлечь $500 млн на создание мирового интернета",
    uz: "Ilon Mask jahon internetini qurish uchun 500 million dollar yig‘moqchi",
  },
  desc: {
    ru: "Проект Starlink предполагает создание обширной сети спутников, способных передавать интернет-трафик.",
    uz: "Starlink loyihasi internet-trafikni uzatishga qodir bo'lgan keng yo'ldoshlar tarmog'ini yaratishni nazarda tutadi",
  },
  date: "24.12.2018",
  img: "/blog/spacex.jpg",
  content: {
    ru: (
      <>
        <p>
          Проект Starlink предполагает создание обширной сети спутников,
          способных передавать интернет-трафик.
        </p>
        <p>
          SpaceX Илона Маска планирует привлечь $500 млн для запуска собственной
          сети космических спутников, предназначенных для передачи
          интернет-трафика в рамках проекта Starlink, сообщает The Wall Street
          Journal.
        </p>
        <p>
          По данным издания, SpaceX договорилась с действующими акционерами и с
          инвестиционной компанией Baillie Gifford & Co о приобретении нового
          выпуска акций по цене $186 за одну бумагу, пишет РБК.
        </p>
        <p>
          Эта компания уже является инвестором другой компании Маска, Tesla.
          Стороны согласовали условия финансирования, однако пока деньги не были
          перечислены SpaceX. Источники WSJ сообщили, что официально о сделке
          стороны могут объявить до конца года.
        </p>
        <p>
          Проект Starlink предполагает создание обширной сети спутников,
          способных передавать интернет-трафик. Для начала SpaceX планирует
          вывести на низкую орбиту 4 тыс. аппаратов, в будущем сеть должна
          вырасти до 11 тыс. единиц.
        </p>
        <p>
          Сейчас самая крупная спутниковая телекоммуникационная сеть насчитывает
          65 спутников. Однако к настоящему времени SpaceX запустила в космос
          только два прототипа — запуск ракеты с аппаратами Microsat 2a и
          Microsat 2b был произведен в феврале 2018 года.
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
          Starlink loyihasi keng ko'lamli sun'iy yo'ldoshlar tarmog'ini
          yaratishni o'z ichiga oladi internet-trafikni uzatish.
        </p>
        <p>
          Ilon Maskning SpaceX kompaniyasi o‘zini uchirish uchun 500 million
          dollar yig‘ishni rejalashtirmoqda uzatish uchun mo'ljallangan kosmik
          sun'iy yo'ldoshlar tarmoqlari Starlink loyihasi doirasida
          internet-trafik, deb xabar beradi The Wall Street Jurnal.
        </p>
        <p>
          Nashrning yozishicha, SpaceX joriy aksiyadorlar va ular bilan kelishib
          olgan investitsiya kompaniyasi Baillie Gifford & Co yangi sotib olish
          to'g'risida har bir aksiya uchun 186 dollar bahoda aksiyalar
          chiqarilishi, deb yozadi RBC.
        </p>
        <p>
          Bu kompaniya allaqachon Maskning boshqa Tesla kompaniyasining
          investori hisoblanadi. Tomonlar moliyalashtirish shartlari bo'yicha
          kelishib oldilar, ammo hozircha pul bo'lmagan SpaceX tomonidan
          ro'yxatga olingan. WSJ manbalari kelishuv haqida rasman ma'lum
          qilishdi tomonlar yil oxirigacha e'lon qilishlari mumkin.
        </p>
        <p>
          Starlink loyihasi keng ko'lamli sun'iy yo'ldoshlar tarmog'ini
          yaratishni o'z ichiga oladi internet-trafikni uzatish. Boshlash uchun
          SpaceX olib kelishni rejalashtirmoqda past orbitali 4 ming qurilma,
          kelajakda tarmoq 11 mingtagacha o'sishi kerak. birliklar.
        </p>
        <p>
          Hozirda eng yirik sun'iy yo'ldosh telekommunikatsiya tarmog'i mavjud
          65 sun'iy yo'ldosh. Biroq hozirgacha SpaceX koinotga uchirdi faqat
          ikkita prototip - Microsat 2a va Microsat qurilmalari bilan raketa
          uchirish 2b 2018 yil fevral oyida ishlab chiqarilgan.
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
  prev: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
  next: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
};

export default function Blog({ language }) {
  return <BlogItem data={data} language={language} />;
}
