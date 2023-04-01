import BlogItem from "@/components/blogItem";

const data = {
  title: {
    ru: "UZINFOCOM прекратил работу в качестве регистратора доменов",
    uz: "UZINFOCOM domen registratori sifatida ishlashni to‘xtatdi",
  },
  desc: {
    ru: "ООО «Единый интегратор по созданию и поддержке государственных информационных систем UZINFOCOM» прекратил свою деятельность по Регистрации и продлению доменных имен в зоне .UZ. Владельцы доменных имен обслуживаемые в OOO «Единый интегратор UZINFOCOM» могут по желанию перевести (трансфер домена) свои доменные имена любому официальному регистратору зоны .UZ.",
    uz: "UZINFOCOM davlat axborot tizimlarini yaratish va qo‘llab-quvvatlash bo‘yicha yagona integrator” MChJ .UZ zonasida domen nomlarini ro‘yxatdan o‘tkazish va yangilash bo‘yicha o‘z faoliyatini to‘xtatdi.“Yagona integrator UZINFOCOM” MChJ tomonidan xizmat ko‘rsatuvchi domen nomlari egalari, agar xohlasalar, o‘tkazishlari mumkin ( domen transferi) ularning domen nomlari .UZ zonasining istalgan rasmiy registratori.",
  },
  date: "12.12.2018",
  img: "/blog/yandex-money.jpg",
  content: {
    ru: (
      <>
        <p>
          ООО «Единый интегратор по созданию и поддержке государственных
          информационных систем UZINFOCOM» прекратил свою деятельность по
          Регистрации и продлению доменных имен в зоне .UZ. Владельцы доменных
          имен обслуживаемые в OOO «Единый интегратор UZINFOCOM» могут по
          желанию перевести (трансфер домена) свои доменные имена любому
          официальному регистратору зоны .UZ.
        </p>
        <p>
          Данное решение позволит ООО «Единый интегратор UZINFOCOM»
          придерживаться четкой распределенной функцией между регистраторами и
          Администрацией домена .UZ, развивать конкурентоспособную сеть
          Регистраторов, предпринимать меры по децентрализации услуг регистрации
          и поддержки доменных имен, обеспечению конкурентной среды, повышению
          количества и качества предоставляемых услуг на рынке по регистрации
          доменных имен, а также технически поддерживать основной реестр зоны
          .UZ.
        </p>
        <p>
          Напоминаем, что ООО «Единый интегратор UZINFOCOM» является
          администратором домена верхнего уровня Узбекистана .UZ (ccTLD) в
          соответствии с Соглашением о спонсорстве ccTLD, подписанным с
          Корпорацией по назначению имен и адресов Интернета (ICANN) 27 марта
          2003 года.
        </p>
        <p>
          По всем дополнительным вопросам вы можете обращаться в абонентский
          отдел OOO «Единый интегратор UZINFOCOM» по номеру +99871 202 2 202 или
          на электронный адрес abonent@uzinfocom.uz
        </p>
        <p>
          Ссылка на источник{" "}
          <a
            href="https://uzinfocom.uz/ru/news/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov-4"
            target="_blank"
            rel="noreferrer noopener"
          >
            Uzinfocom
          </a>
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          Davlatni yaratish va qo'llab-quvvatlash bo'yicha yagona integrator
          MChJ “UZINFOCOM” axborot tizimlari oʻz faoliyatini toʻxtatdi .UZ
          zonasida domen nomlarini ro'yxatdan o'tkazish va yangilash. Domen
          egalari United Integrator UZINFOCOM MChJ tomonidan xizmat ko'rsatuvchi
          nomlar mumkin domen nomlaringizni har kimga o'tkazishni (domenni
          o'tkazishni) xohlasangiz .UZ zonasining rasmiy registratori.
        </p>
        <p>
          Ushbu yechim United Integrator UZINFOCOM MChJga imkon beradi
          registratorlar va o'rtasida aniq taqsimlangan funktsiyasi rioya .UZ
          domeni ma'muriyati, raqobatbardosh tarmoqni rivojlantirish Ro'yxatga
          oluvchilar ro'yxatga olish xizmatlarini markazsizlashtirish
          choralarini ko'rishlari va domen nomlarini qo'llab-quvvatlash, raqobat
          muhitini ta'minlash, oshirish ro'yxatga olish bozorida ko'rsatiladigan
          xizmatlarning miqdori va sifati domen nomlari, shuningdek, zonaning
          asosiy reestrini texnik jihatdan yuritish .uz.
        </p>
        <p>
          Eslatib o'tamiz, United Integrator UZINFOCOM MChJ hisoblanadi
          O'zbekistonning yuqori darajali .UZ (ccTLD) domenining ma'muri bilan
          imzolangan ccTLD homiylik shartnomasiga muvofiq Tayinlangan nomlar va
          Internet manzillari raqamlari korporatsiyasi (ICANN) 27-mart 2003 yil.
        </p>
        <p>
          Har qanday qo'shimcha savollar uchun siz abonentga murojaat
          qilishingiz mumkin “Yagona integrator UZINFOCOM” MChJ boʻlimi +99871
          202 2 202 yoki abonent@uzinfocom.uz elektron pochta manziliga
        </p>
        <p>
          Manba'a uchun link{" "}
          <a
            href="https://uzinfocom.uz/ru/news/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov-4"
            target="_blank"
            rel="noreferrer noopener"
          >
            Uzinfocom
          </a>
        </p>
      </>
    ),
  },
  prev: "/blog/google-podvel-itogi-2018-goda",
  next: "/",
};

export default function Blog({ language }) {
  return <BlogItem data={data} language={language} />;
}
