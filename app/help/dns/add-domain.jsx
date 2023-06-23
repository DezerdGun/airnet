import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Добавить и делегировать домен",
    uz: "Domen qo‘shish va vakolat berish",
    en: "Add and delegate a domain",
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
    {
      title: {
        ru: "Добавить запись",
        uz: "Eslatma qo'shing",
        en: "Add a note",
      },
      link: "/help/dns/add-record",
    },
  ],
  content: {
    ru: (
      <>
        <h2>Зарегистрировать домен</h2>
        <p>
          Доменное имя нужно зарегистрировать — арендовать у компании-регистратора доменов на определенный срок.
          Минимальный срок регистрации для всех доменных зон — 1 год, а максимальный срок зависит от зоны. Например, для
          зоны .ru срок регистрации — 1 год, для .UZ — до 10 лет. После окончания периода регистрации домен необходимо
          продлить, чтобы вы остались владельцем домена, и ваш сайт продолжил работу.
        </p>

        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          {/* Airnet не предоставляет услуги регистрации и продления доменов. */}
        </p>

        <h2>Добавить домен</h2>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Добавить домен могут только пользователи с ролями Владелец аккаунта и Администратор аккаунта.
        </p>

        <p>
          Перед началом использования услуги завершите регистрацию и пополните баланс. Вы можете добавить любое
          количество доменов.
        </p>

        <ol>
          <li>
            В панели управления перейдите в раздел <strong>Сетевые сервисы</strong> → <strong>DNS-хостинг</strong>.
          </li>
          <li>
            Нажмите <strong>Добавить домен</strong>.
          </li>
          <li>Введите имя домена.</li>
          <li>
            Нажмите <strong>Добавить домен</strong>.
          </li>
          <li>Опционально: при необходимости используйте octoDNS для импорта BIND-зоны.</li>
        </ol>
        <h2>Делегировать домен</h2>
        <p>Делегируйте домен — передайте управление доменом на DNS-серверы Airnet.</p>

        <p>
          DNS-серверы будут хранить информацию о том, какому IP-адресу соответствует домен. Все запросы к домену будут
          приходить на них. Подробнее о работе DNS-серверов в статье блога Что такое DNS-сервер — объясняем простыми
          словами.
        </p>

        <ol>
          <li>
            Проверьте, что добавили домен в панели управления. Ресурсные NS-записи Airnet добавятся автоматически.
          </li>

          <li>
            На стороне вашего доменного регистратора укажите NS-серверы:
            <div
              style={{
                marginTop: "10px",
                padding: "10px 20px 0",
                border: "1px solid #ebeff1",
                borderRadius: "5px",
                backgroundColor: "#f6f8fa",
              }}
            >
              <pre>
                <code>
                  dns1.airnet.uz
                  <br />
                  dns2.airnet.uz
                </code>
              </pre>
            </div>
          </li>
        </ol>
      </>
    ),
    uz: (
      <>
        <h2>Domenni ro'yxatdan o'tkazing</h2>
        <p>
          Domen nomini ro'yxatdan o'tkazish kerak - domen registratoridan ma'lum muddatga ijaraga olingan. Barcha domen
          zonalari uchun minimal ro'yxatdan o'tish muddati 1 yil, maksimal muddat esa zonaga bog'liq. Masalan, .ru
          zonasi uchun ro'yxatdan o'tish muddati 1 yil, .UZ uchun - 10 yilgacha. Roʻyxatdan oʻtish muddati tugagach,
          siz domen egasi boʻlib qolishingiz va saytingiz ishlashda davom etishingiz uchun domen yangilanishi kerak.
        </p>

        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          {/* Airnet domenni roʻyxatdan oʻtkazish yoki yangilash xizmatlarini taqdim etmaydi. */}
        </p>

        <h2>Domen qo'shish</h2>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Faqat Hisob egasi va Hisob ma'muri roliga ega foydalanuvchilar domen.{" "}
        </p>

        <p>
          Xizmatdan foydalanishni boshlashdan oldin roʻyxatdan oʻtishni yakunlang va balansni toʻldiring. Siz istalgan
          miqdordagi domenlarni qo'shishingiz mumkin.
        </p>

        <ol>
          <li>
            Boshqaruv panelida <strong>Tarmoq xizmatlari</strong> → <strong>DNS hosting</strong>-ga o‘ting.
          </li>
          <li>
            <strong>Domen qo'shish</strong> tugmasini bosing.
          </li>
          <li>Domen nomini kiriting.</li>
          <li>
            <strong>Domen qo'shish</strong> tugmasini bosing.
          </li>
          <li>Ixtiyoriy: Agar kerak bo'lsa, BIND zonasini import qilish uchun octoDNS-dan foydalaning.</li>
        </ol>
        <h2>Delegat domen</h2>
        <p>Domenni topshirish - domenni boshqarishni Airnet DNS serverlariga o'tkazish.</p>

        <p>
          DNS serverlari domen qaysi IP-manzilga mos kelishi haqidagi ma'lumotlarni saqlaydi. Domenga barcha so'rovlar
          ularga keladi. DNS-serverlarning ishlashi haqida blog maqolasida DNS-server nima - biz oddiy so'zlar bilan
          tushuntiramiz.
        </p>

        <ol>
          <li>
            Boshqarish panelida domen qo‘shganingizni tekshiring. Airnet resurs NS yozuvlari avtomatik ravishda
            qo'shiladi.
          </li>

          <li>
            Domen registratorining yon tomonida NS serverlarini belgilang:
            <div
              style={{
                marginTop: "10px",
                padding: "10px 20px 0",
                border: "1px qattiq #ebeff1",
                borderRadius: "5px",
                backgroundColor: "#f6f8fa",
              }}
            >
              <pre>
                <code>
                  dns1.airnet.uz
                  <br />
                  dns2.airnet.uz
                </code>
              </pre>
            </div>
          </li>
        </ol>
      </>
    ),
    en: (
      <>
        <h2>Register a domain</h2>
        <p>
          The domain name needs to be registered - rented from a domain registrar for a certain period. The minimum
          registration period for all domain zones is 1 year, and the maximum period depends on the zone. For example,
          for the .ru zone, the registration period is 1 year, for .UZ - up to 10 years. After the registration period
          ends, the domain must be renewed so that you remain the owner of the domain and your site continues to work.
        </p>

        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          {/* Airnet does not provide domain registration or renewal services. */}
        </p>

        <h2>Add domain</h2>
        <p
          style={{ padding: "10px 20px", border: "1px solid #91d5ff", borderRadius: "5px", backgroundColor: "#e6f7ff" }}
        >
          Only users with the Account Owner and Account Administrator roles can add a domain.{" "}
        </p>

        <p>
          Before you start using the service, complete the registration and replenish the balance. You can add any
          number of domains.
        </p>

        <ol>
          <li>
            In the control panel, go to <strong>Network Services</strong> → <strong>DNS Hosting</strong>.
          </li>
          <li>
            Click <strong>Add Domain</strong>.
          </li>
          <li>Enter a domain name.</li>
          <li>
            Click <strong>Add Domain</strong>.
          </li>
          <li>Optional: Use octoDNS to import the BIND zone if necessary.</li>
        </ol>
        <h2>Delegate domain</h2>
        <p>Delegate the domain - transfer control of the domain to the Airnet DNS servers.</p>

        <p>
          DNS servers will store information about which IP address the domain corresponds to. All requests to the
          domain will come to them. Read more about the operation of DNS servers in the blog article What is a DNS
          server - we explain in simple words.
        </p>

        <ol>
          <li>
            Check that you have added the domain in the control panel. Airnet resource NS records will be added
            automatically.
          </li>

          <li>
            On the side of your domain registrar, specify the NS servers:
            <div
              style={{
                marginTop: "10px",
                padding: "10px 20px 0",
                border: "1px solid #ebeff1",
                borderRadius: "5px",
                backgroundColor: "#f6f8fa",
              }}
            >
              <pre>
                <code>
                  dns1.airnet.uz
                  <br />
                  dns2.airnet.uz
                </code>
              </pre>
            </div>
          </li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
