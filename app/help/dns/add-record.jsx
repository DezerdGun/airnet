import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Добавить запись",
    uz: "Eslatma qo'shing",
    en: "Add a note",
  },
  related: [
    {
      title: {
        ru: "Общая информация о DNS-хостинг",
        uz: "DNS hosting haqida umumiy ma'lumot",
        en: "General information about DNS hosting",
      },
      link: "/help/dns/about-dns",
    },
    {
      title: {
        ru: "Добавить и делегировать домен",
        uz: "Domen qo‘shish va vakolat berish",
        en: "Add and delegate a domain",
      },
      link: "/help/dns/add-domain",
    },
    {
      title: {
        ru: "Редактировать настройки домена",
        uz: "Domen sozlamalarini tahrirlash",
        en: "Edit domain settings",
      },
      link: "/help/dns/edit-domain",
    },
    {
      title: {
        ru: "Подключить сайт к домену",
        uz: "Saytni domenga ulang",
        en: "Connect site to domain",
      },
      link: "/help/dns/connect-domain",
    },
  ],
  content: {
    ru: (
      <>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Добавить ресурсную запись могут только пользователи с ролями Владелец аккаунта и Администратор аккаунта.
        </p>
        <p>
          Ресурсная запись — это запись о соответствии домена и информации о нем в системе доменных имен (DNS). Перед
          добавлением ресурсной записи домен должен быть делегирован.
        </p>
        <ol>
          <li>Делегируйте домен.</li>
          <li>
            В панели управления перейдите в раздел <strong>Сетевые сервисы</strong> → <strong>DNS-хостинг</strong>.
          </li>
          <li>
            Откройте страницу домена → вкладка <strong>DNS-записи</strong>.
          </li>
          <li>
            Нажмите <strong>Добавить запись</strong>.
          </li>
          <li>Выберите тип записи — A, AAAA, TXT, CNAME, NS, MX, SRV, SSHFP, ALIAS или CAA.</li>
          <li>
            Введите имя записи — это домен, для которого будет создана запись. Можно создать запись:
            <ul>
              <li>для основного домена — оставьте поле заполненным по умолчанию;</li>
              <li>
                или поддомена — введите его имя. Например, чтобы создать запись с именем first.example.com, введите
                first.
              </li>
            </ul>
          </li>
          <li>
            Введите TTL — время в секундах, через которое кэш запросит информацию об обновлении записи. Ресурсные
            записи, которые попали в кэш NS-серверов, хранятся не дольше времени, указанного в TTL.
          </li>
          <li>Введите значение записи.</li>
          <li>
            Нажмите <strong>Добавить запись</strong>.
          </li>
        </ol>
        <h2>Типы записей DNS</h2>
        <table>
          <thead>
            <tr>
              <th>Запись</th> <th>Назначение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>А</td>
              <td>
                Связывает доменное имя с IP-адресом сервера в сети IPv4. Пока для домена не создана A-запись, сайт не
                будет работать
              </td>
            </tr>
            <tr>
              <td>AAAA</td>
              <td>
                Связывает доменное имя с IP-адресом сервера в сети IPv6. Пока для домена не создана AAAA-запись, сайт не
                будет работать
              </td>
            </tr>
            <tr>
              <td>TXT</td>
              <td>
                Содержит любую текстовую информацию, которую нужно добавить в настройки домена. Например, может хранить
                уникальный маркер для подтверждения прав на домен или ключ DKIM для исходящих почтовых рассылок
              </td>
            </tr>
            <tr>
              <td>CNAME</td>
              <td>
                Привязывает дополнительный домен к основному (каноническому) домену, чтобы оба вели на IP-адрес
                канонического домена. CNAME нельзя добавить для домена второго уровня. Домен с CNAME не может иметь
                других ресурсных записей
              </td>
            </tr>
            <tr>
              <td>NS</td>
              <td>
                Указывает на DNS-серверы, где хранятся ресурсные записи доменного имени. Если записи хранятся на
                нескольких DNS-серверах, запись должна быть создана для каждого DNS-сервера. При добавлении домена в
                Airnet необходимые NS-записи добавляются автоматически
              </td>
            </tr>
            <tr>
              <td>MX</td>
              <td>
                Указывает на сервер для приема входящей почты для домена. Если у домена несколько почтовых серверов,
                запись должна быть создана для каждого сервера с указанием приоритета для распределения нагрузки
              </td>
            </tr>
            <tr>
              <td>SRV</td>
              <td>
                Определяет местоположение — hostname и номер порта серверов для определенных служб. Для каждой записи
                также указывается приоритет сервера и вес записи для распределения нагрузки между серверами
              </td>
            </tr>
            <tr>
              <td>SSHFP</td>
              <td>Содержит отпечаток ключа, который используется сервером при подключении по протоколу SSH</td>
            </tr>
            <tr>
              <td>ALIAS</td>
              <td>
                Привязывает домен-псевдоним к основному (каноническому) домену, чтобы поддомен вел на IP-адрес
                канонического домена. В отличие от CNAME, может добавляться для доменов второго уровня и существовать с
                другими ресурсными записями для домена (кроме A и AAAA)
              </td>
            </tr>
            <tr>
              <td>CAA</td>
              <td>
                Указывает на центры сертификации, которым разрешен выпуск SSL-сертификатов для этого доменного имени.
                Если сертификаты для домена могут выпускать несколько центров, запись должна быть создана для каждого
                центра
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    uz: (
      <>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Faqat Hisob egasi va Hisob ma'muri roliga ega foydalanuvchilar resurs yozuvi.
        </p>
        <p>
          Resurs yozuvi - bu domen nomlari tizimidagi (DNS) domen va u haqidagi ma'lumotlar o'rtasidagi yozishmalar
          yozuvi. Resurs yozuvini qo‘shishdan oldin, domenga vakolat berilishi kerak.
        </p>
        <ol>
          <li>Domenni vakolat bering.</li>
          <li>
            Boshqaruv panelida <strong>Tarmoq xizmatlari</strong> → <strong>DNS hosting</strong>-ga o‘ting.
          </li>
          <li>
            Domen sahifasi → <strong>DNS yozuvlari</strong> yorlig‘ini oching.
          </li>
          <li>
            <strong>Yozuv qo'shish</strong> tugmasini bosing.
          </li>
          <li>Yozuv turini tanlang - A, AAAA, TXT, CNAME, NS, MX, SRV, SSHFP, ALIAS yoki CAA.</li>
          <li>
            Yozuv nomini kiriting - bu yozuv yaratiladigan domen. Siz kirishni yaratishingiz mumkin:
            <ul>
              <li>asosiy domen uchun - sukut bo'yicha to'ldirilgan maydonni qoldiring;</li>
              <li>
                {" "}
                yoki subdomen - uning nomini kiriting. Masalan, first.example.com nomli yozuvni yaratish uchun avval
                yozing.
              </li>
            </ul>
          </li>
          <li>
            TTL ni kiriting - bu vaqtdan keyin kesh yozuvni yangilash haqida ma'lumot so'raydi. NS serverlari tomonidan
            keshlangan resurs yozuvlari TTLda koʻrsatilgan vaqtdan ortiq saqlanmaydi.
          </li>
          <li>Yozuv uchun qiymat kiriting.</li>
          <li>
            <strong>Yozuv qo'shish</strong> tugmasini bosing.
          </li>
        </ol>
        <h2>DNS yozuvlari turlari</h2>
        <table>
          <thead>
            <tr>
              <th>Yozuv</th> <th>Maqsad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>
                Domen nomini IPv4 tarmog'idagi serverning IP manzili bilan bog'laydi. Domen uchun A-yozuv
                yaratilmaguncha, sayt ishlamaydi
              </td>
            </tr>
            <tr>
              <td>AAAA</td>
              <td>
                Domen nomini IPv6 tarmog'idagi serverning IP manzili bilan bog'laydi. Domen uchun AAAA yozuvi
                yaratilmaguncha, sayt ishlamaydi
              </td>
            </tr>
            <tr>
              <td>TXT</td>
              <td>
                Domen sozlamalariga qo'shilishi kerak bo'lgan har qanday matn ma'lumotlarini o'z ichiga oladi. Masalan,
                u domen huquqlarini tekshirish uchun noyob tokenni yoki chiquvchi pochta roʻyxatlari uchun DKIM kalitini
                saqlashi mumkin
              </td>
            </tr>
            <tr>
              <td>CNAME</td>
              <td>
                Ikkinchi darajali domenni asosiy (kanonik) domenga bog'laydi, shunda ikkalasi ham kanonik domenning IP
                manziliga ishora qiladi. Ikkinchi darajali domen uchun CNAME qo‘shib bo‘lmaydi. CNAMEga ega domen boshqa
                manba yozuvlariga ega boʻlishi mumkin emas
              </td>
            </tr>
            <tr>
              <td>NS</td>
              <td>
                Domen nomi resurs yozuvlari saqlanadigan DNS serverlariga ishora qiladi. Agar yozuvlar bir nechta DNS
                serverlarida saqlansa, har bir DNS server uchun yozuv yaratilishi kerak. Airnet-ga domen qo'shganda,
                kerakli NS yozuvlari avtomatik ravishda qo'shiladi
              </td>
            </tr>
            <tr>
              <td>MX</td>
              <td>
                Domen uchun kiruvchi xatlarni qabul qilish uchun serverga ishora qiladi. Agar domenda bir nechta pochta
                serverlari bo'lsa, har bir server uchun yuk balansi ustuvorligi bilan yozuv yaratilishi kerak
              </td>
            </tr>
            <tr>
              <td>SRV</td>
              <td>
                Joylashuvni belgilaydi - xost nomi va ma'lum xizmatlar uchun serverlar port raqami. Har bir kirish uchun
                server ustuvorligi va yozuvning og'irligi yukni serverlar o'rtasida taqsimlash uchun ham ko'rsatilgan
              </td>
            </tr>
            <tr>
              <td>SSHFP</td>
              <td>SSH orqali ulanishda server tomonidan ishlatiladigan kalitning barmoq izini o'z ichiga oladi</td>
            </tr>
            <tr>
              <td>ALIAS</td>
              <td>
                {" "}
                Taxallus domenni asosiy (kanonik) domenga bog'laydi, shunda subdomain kanonik domenning IP manziliga
                ishora qiladi. CNAME-dan farqli o'laroq, u ikkinchi darajali domenlar uchun qo'shilishi mumkin va domen
                uchun boshqa manba yozuvlari bilan birga mavjud (A va AAAA dan tashqari)
              </td>
            </tr>
            <tr>
              <td>CAA</td>
              <td>
                Ushbu domen nomi uchun SSL sertifikatlarini chiqarishga ruxsat berilgan CAlarni bildiradi. Agar domen
                uchun sertifikatlar bir nechta vakolatli organlar tomonidan berilishi mumkin bo'lsa, har bir organ uchun
                yozuv yaratilishi kerak
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    en: (
      <>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Only users with the Account Owner and Account Administrator roles can add a resource record .
        </p>
        <p>
          A resource record is a record of correspondence between a domain and information about it in the Domain Name
          System (DNS). Before adding a resource record, the domain must be delegated.
        </p>
        <ol>
          <li>Delegate the domain.</li>
          <li>
            In the control panel, go to <strong>Network Services</strong> → <strong>DNS Hosting</strong>.
          </li>
          <li>
            Open the domain page → <strong>DNS records</strong> tab.
          </li>
          <li>
            Click <strong>Add Entry</strong>.
          </li>
          <li>Select the record type - A, AAAA, TXT, CNAME, NS, MX, SRV, SSHFP, ALIAS, or CAA.</li>
          <li>
            Enter the name of the entry - this is the domain for which the entry will be created. You can create an
            entry:
            <ul>
              <li>for the main domain - leave the field filled in by default;</li>
              <li>
                {" "}
                or subdomain - enter its name. For example, to create an entry named first.example.com, type first.
              </li>
            </ul>
          </li>
          <li>
            Enter TTL - the time in seconds after which the cache will request information about updating the entry.
            Resource records that are cached by NS servers are stored no longer than the time specified in the TTL.
          </li>
          <li>Enter a value for the entry.</li>
          <li>
            Click <strong>Add Entry</strong>.
          </li>
        </ol>
        <h2>DNS record types</h2>
        <table>
          <thead>
            <tr>
              <th>Record</th> <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>
                Associates a domain name with the IP address of a server on an IPv4 network. Until an A-record is
                created for the domain, the site will not work
              </td>
            </tr>
            <tr>
              <td>AAAA</td>
              <td>
                Associates a domain name with the IP address of a server on an IPv6 network. Until an AAAA record is
                created for the domain, the site will not work
              </td>
            </tr>
            <tr>
              <td>TXT</td>
              <td>
                Contains any textual information that needs to be added to the domain settings. For example, it can
                store a unique token for verifying domain rights or a DKIM key for outgoing mailing lists
              </td>
            </tr>
            <tr>
              <td>CNAME</td>
              <td>
                Links the secondary domain to the main (canonical) domain so that both point to the canonical domain's
                IP address. CNAME cannot be added for a second level domain. A domain with a CNAME cannot have other
                resource records
              </td>
            </tr>
            <tr>
              <td>NS</td>
              <td>
                Points to DNS servers where domain name resource records are stored. If records are stored on multiple
                DNS servers, a record must be created for each DNS server. When adding a domain to Airnet, the necessary
                NS records are added automatically
              </td>
            </tr>
            <tr>
              <td>MX</td>
              <td>
                Points to the server to accept incoming mail for the domain. If a domain has multiple mail servers, an
                entry should be created for each server with a priority for load balancing
              </td>
            </tr>
            <tr>
              <td>SRV</td>
              <td>
                Specifies the location - hostname and port number of servers for specific services. For each entry, the
                server priority and the weight of the entry are also indicated to distribute the load between servers
              </td>
            </tr>
            <tr>
              <td>SSHFP</td>
              <td>Contains the fingerprint of the key used by the server when connecting via SSH</td>
            </tr>
            <tr>
              <td>ALIAS</td>
              <td>
                Links the alias domain to the main (canonical) domain so that the subdomain points to the IP address of
                the canonical domain. Unlike CNAME, it can be added for second-level domains and exist with other
                resource records for the domain (except for A and AAAA)
              </td>
            </tr>
            <tr>
              <td>CAA</td>
              <td>
                Indicates the CAs that are allowed to issue SSL certificates for this domain name. If certificates for a
                domain can be issued by multiple authorities, an entry must be created for each authority
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
