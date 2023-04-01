import BlogItem from "@/components/blogItem";

const data = {
  title: {
    ru: "В Китае решили отказаться от 3G",
    uz: "Xitoyda 3G internetidan voz kechishdi",
  },
  desc: {
    ru: "В прошлом году страна отказалась от 2G, а в этом году решила сделать то же самое с 3G.",
    uz: "O'tgan yili mamlakat 2Gdan voz kechdi, bu yil esa 3G bilan ham shunday qilishga qaror qildi",
  },
  date: "18.12.2018",
  img: "/blog/google-5g.jpg",
  content: {
    ru: (
      <>
        <p>
          В прошлом году страна отказалась от 2G, а в этом году решила сделать
          то же самое с 3G.
        </p>
        <p>
          Основные китайские и тайваньские операторы планируют с 1 января 2019
          года перестать оказывать услуги по технологии 3G, сообщает Giz China.
        </p>
        <p>
          Chunghwa Telecom, FarEasTone Telecom и Taiwan Big Brother не планируют
          продлевать свои лицензии по 3Glicensess, которые истекают 31 декабря
          2018 года.
        </p>
        <p>
          Сейчас 3G на одном лишь Тайване использует около 280 тыс. абонентов,
          тогда как в прошлом году было более 5 млн. В Китае таких пользователей
          еще меньше — около 200 тыс.
        </p>
        <p>
          Ожидается, что до конца года основные операторы переведут абонентов на
          4G, а сама технология уйдет в прошлое уже к концу следующего года.
          Некоторые операторы, такие как Asia Pacific Telecom, к примеру, уже
          отключили 3G.
        </p>
        <p>С 1 июля 2017 года в Китае и Тайване также закрылась сеть 2G.</p>
        <p>
          Ранее Spot писал, что уровень проникновения 4G в Узбекистане
          составляет 8,7% — большая часть населения в стране пользуется 2G
          (33,9%) и 3G (31,4%).
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
          O'tgan yili mamlakat 2G dan voz kechdi va bu yil buni qilishga qaror
          qildi 3G bilan ham xuddi shunday.
        </p>
        <p>
          Yirik Xitoy va Tayvan operatorlari 2019-yil 1-yanvardan boshlab
          rejalashtirmoqda Giz China ko'ra, 3G texnologiyasi xizmatlarini
          ko'rsatishni to'xtating.
        </p>
        <p>
          Chunghwa Telecom, FarEasTone Telecom va Taiwan Big Brother hech qanday
          rejaga ega emas 31 dekabrda tugaydigan 3Glicenses litsenziyalaringizni
          yangilang 2018.
        </p>
        <p>
          Hozir birgina Tayvanda 3G dan 280 mingga yaqin abonent foydalanadi,
          o'tgan yili esa 5 milliondan ortiq.Xitoyda bunday foydalanuvchilar
          hatto kamroq - taxminan 200 ming.
        </p>
        <p>
          Yil oxirigacha asosiy operatorlar abonentlarni o'tkazishi kutilmoqda
          4G va texnologiyaning o'zi keyingi yil oxiriga kelib o'tmishda qoladi.
          Ba'zi operatorlar, masalan, Asia Pacific Telecom, allaqachon mavjud 3G
          o'chirilgan.
        </p>
        <p>
          2017 yilning 1 iyulida Xitoy va Tayvanda 2G tarmoqlari ham yopildi.
        </p>
        <p>
          Eslatib o‘tamiz, avvalroq Spot O‘zbekistonda 4G tarmog‘ining kirib
          borish darajasi haqida yozgan edi 8,7% ni tashkil etadi - mamlakat
          aholisining aksariyati 2G dan foydalanadi (33,9%) va 3G (31,4%).
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
  prev: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
  next: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
};

export default function Blog({ language }) {
  return <BlogItem data={data} language={language} />;
}
