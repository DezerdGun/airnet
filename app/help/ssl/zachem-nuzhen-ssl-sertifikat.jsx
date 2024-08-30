import HelpBlock from "@/components/helpItem/helpBlock";
import PopularSert from "@/components/popularSert";
import { breadCrumbsSsl } from "@/app/help/ssl";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
      ru: "Зачем нужен SSL-сертификат?",
      uz: "Nma uchun SSL-sertifikati kerak?",
      en: "Why do I need an SSL certificate",
    },
    related: [],
    content: {
      ru: (
        <>
          <p>
            <strong>SSL (Secure Sockets Layer)</strong> – это протокол шифрования, который обеспечивает более безопасную
            связь.
          </p>
          <p>Установка SSL-cертификата на веб сайт даёт следующие преимущества:</p>
          <p>
            <strong>Безопасная передача данных</strong>
          </p>
          <p>
            При установленном SSL-сертификате введённая информация на сайте (личные данные, пароли, реквизиты банковской
            карты) передается по протоколу HTTPS, который поддерживает шифрование и обеспечивает защиту данных. Данный
            протокол широко используется во всём мире и считается обязательным для платежных систем и сайтов, на которых
            производятся платежи.
          </p>
          <p>
            <strong>Подтверждение подлинности</strong>
          </p>
          <p>
            При установке сертификата вы должны подтвердить право собственности на этот сайт. Следовательно, любой
            пользователь, посещающий сайт, может быть полностью уверен в том, что сайт не является мошенническим.
          </p>
          <p>
            <strong>Повышение выдачи в поисковых запросах Google</strong>
          </p>
          <p>
            Тот факт, что у вас есть безопасное соединение HTTPS, учитывается при отображении результатов поиска в
            Google. Изменяя свои правила ранжирования, всемирно известная компания принимает меры для защиты
            пользователей в своих сетях и побуждает разработчиков и владельцев сайтов повышать безопасность ресурсов.
          </p>
          <p>
            Следовательно, установка SSL повысит вашу позицию в результатах <strong>поиска Google</strong>.
          </p>
          <h3 className="fw-bold mb-2">Виды сертификатов</h3>
          <p>
            <strong>У нас существуют следующие виды сертификатов:</strong>
          </p>
          <p>
            – <strong>Бесплатный</strong> сертификат на хостинге от Let’s Encrypt;
          </p>
          <p>
            – <strong>PositiveSSL (COMODO)</strong> – 100.000 сум/год – для одного сайта;
          </p>
          <p>
            – <strong>PositiveSSL Wildcard (COMODO)</strong> – 1.000.000 сум/год – для одного домена и всех поддомен.
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            <strong>SSL (Secure Sockets Layer)</strong> bu shifrlash protokoli bu yanada xavfsiz ulanishni ta'minlaydi.
          </p>
          <p>Veb-saytga SSL sertifikatini o'rnatish quyidagi afzalliklarni beradi:</p>
          <p>
            <strong>Ma'lumotlarni xavfsiz uzatish</strong>
          </p>
          <p>
            SSL sertifikati o'rnatilgan bo'lsa, saytga kiritilgan ma'lumotlar (shaxsiy ma'lumotlar, parollar, bank
            kartasi rekvizitlari) orqali uzatiladi Shifrlashni qo'llab-quvvatlaydigan va xavfsizlikni ta'minlaydigan
            HTTPS protokoli ma'lumotlar. Ushbu protokol butun dunyoda keng qo'llaniladi va ko'rib chiqiladi to'lov
            tizimlari va saytlar uchun majburiydir to'lovlar.
          </p>
          <p>
            <strong>Autentifikatsiya</strong>
          </p>
          <p>
            Sertifikatni o'rnatganingizda, uning egaligini tekshirishingiz kerak bu sayt. Shuning uchun, saytga tashrif
            buyurgan har qanday foydalanuvchi mumkin sayt firibgar emasligiga to'liq ishonch hosil qiling.
          </p>
          <p>
            <strong>Google qidiruv natijalari oshadi</strong>
          </p>
          <p>
            Xavfsiz HTTPS ulanishingiz borligi qachon hisobga olinadi Google qidiruv natijalarini ko'rsatish.
            Qoidalaringizni o'zgartirish reyting, dunyoga mashhur kompaniya himoya qilish choralarini ko'radi
            foydalanuvchilar o'z tarmoqlarida va ishlab chiquvchilar va egalarini rag'batlantiradi resurslar
            xavfsizligini yaxshilash uchun saytlar.
          </p>
          <p>
            Shuning uchun, SSL-ni o'rnatish natijalardagi mavqeingizni oshiradi <strong>Google qidiruvi</strong>.
          </p>
          <h3 className="fw-bold mb-2">Sertifikat turlari</h3>
          <p>
            <strong>Bizda quyidagi turdagi sertifikatlar mavjud:</strong>
          </p>
          <p>
            – <strong>Bepul</strong> Let's Encrypt-dan xosting sertifikati;
          </p>
          <p>
            – <strong>PositiveSSL (COMODO)</strong> – sayt 100.000 so'm/yil - bir kishi uchun ;
          </p>
          <p>
            – <strong>PositiveSSL Wildcard (COMODO)</strong> – 1.000.000 som/yil – bitta domen va barcha subdomenlar
            uchun.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            <strong>SSL (Secure Sockets Layer)</strong> is an encryption protocol that provides a more secure
            connection.
          </p>
          <p>Installing an SSL certificate on a website provides the following benefits:</p>
          <p>
            <strong>Secure data transfer</strong>
          </p>
          <p>
            With an SSL certificate installed, the information entered on the site (personal data, passwords, banking
            details) cards) is transmitted over the HTTPS protocol, which supports encryption and ensures data
            protection. The the protocol is widely used all over the world and is considered mandatory for payment
            systems and sites where payments are made.
          </p>
          <p>
            <strong>Authentication</strong>
          </p>
          <p>
            When you install the certificate, you must verify ownership of this site. Therefore, any the user visiting
            the site can be completely sure that the site is not fraudulent.
          </p>
          <p>
            <strong>Google search results increase</strong>
          </p>
          <p>
            The fact that you have a secure HTTPS connection is taken into account when displaying search results in
            Google. By changing its ranking rules, the world famous company is taking steps to protect users in their
            networks and encourages developers and site owners to increase the security of resources.
          </p>
          <p>
            Therefore, installing SSL will increase your position in <strong>Google search results</strong>.
          </p>
          <h3 className="fw-bold mb-2">Types of certificates</h3>
          <p>
            <strong>We have the following types of certificates:</strong>
          </p>
          <p>
            – <strong>Free</strong> certificate hosted by Let’s Encrypt;
          </p>
          <p>
            – <strong>PositiveSSL (COMODO)</strong> – 100.000 UZS/year – for one site;
          </p>
          <p>
            – <strong>PositiveSSL Wildcard (COMODO)</strong> – 1.000.000 UZS/year – for one domain and all subdomains.
          </p>
        </>
      ),
    },
    afterContent: <PopularSert language={language} />,
  };

  const breadCrumbs = [
    ...breadCrumbsSsl,
    {
      name: mainData.headTitle,
      link: mainData.url,
    },
  ];
  
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
};
