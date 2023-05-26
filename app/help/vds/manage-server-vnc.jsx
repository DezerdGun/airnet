import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Управлять сервером через VNC-консоль",
    uz: "VNC konsoli orqali serverni boshqarish",
    en: "Manage server via VNC console",
  },
  related: [
    {
      title: {
        ru: "Необходимые навыки для работы с VDS",
        uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
        en: "Necessary skills to work with VDS",
      },
      link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
    },
    {
      title: {
        ru: "Смена тарифного плана на VDS",
        uz: "Tarif rejasini VDS ga o'zgartirish",
        en: "Change tariff plan to VDS",
      },
      link: "/help/vds/smena-tarifnogo-plana-na-vds",
    },
    {
      title: {
        ru: "Как долго хранятся учётные записи VDS?",
        uz: "VDS hisoblari qancha vaqt saqlanadi?",
        en: "How long are VDS accounts kept?",
      },
      link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
    },
    {
      title: {
        ru: "Восстановление root пароля от VDS",
        uz: "VDS ning root parolni tiklash",
        en: "Recovery of root password from VDS",
      },
      link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
    },
    {
      title: {
        ru: "Перенос аккаунта на VDS",
        uz: "Hisobni VDS-ga o'tkazish",
        en: "Account transfer to VDS",
      },
      link: "/help/vds/perenos-akkaunta-na-vds",
    },
    {
      title: {
        ru: "Преимущества VDS и VPS-серверов",
        uz: "VDS va VPS serverlarining afzalliklari",
        en: "Advantages of VDS and VPS servers",
      },
      link: "/help/vds/preimushhestva-vds-i-vps-serverov",
    },
    {
      title: {
        ru: "Подключиться к выделенному серверу",
        uz: "Ajratilgan serverga ulaning",
        en: "Connect to a dedicated server",
      },
      link: "/help/vds/connect-to-server",
    },
    {
      title: {
        ru: "Резервное копирование выделенных серверов",
        uz: "Maxsus server zahirasi",
        en: "Dedicated server backup",
      },
      link: "/help/vds/backups-server",
    },
    {
      title: {
        ru: "Развернуть виртуальную машину с Windows Server",
        uz: "Windows Server bilan virtual mashinani o'rnating",
        en: "Deploy a virtual machine with Windows Server",
      },
      link: "/help/vds/windows",
    },
  ],
  content: {
    ru: (
      <>
        <p>
          Выделенные серверы, кроме линейки Chipcore Line, укомплектованы BMC модулем, который позволяет удаленно
          управлять питанием и запускать VNC-консоль. Для серверов Chipcore Line можно заказать дополнительную услугу
          Подключение IP-VNC на 3 часа.
        </p>

        <p>
          Чтобы открыть VNC-консоль, нажмите на значок консоли в правом верхнем углу карточки с информацией о сервере.
          Консоль запустится в noVNC-сессии прямо в браузере и автоматически адаптируется под размер экрана. Вы сможете
          управлять сервером даже с планшета. При открытии нескольких вкладок с запущенными noVNC-сессиями текстовый
          ввод доступен только на наиболее ранней открытой вкладке.
        </p>

        <p>Перетаскивать окна виртуального рабочего стола можно двумя способами:</p>

        <ul>
          <li>удерживая Alt на клавиатуре, переместить окно при помощи левой клавиши мыши;</li>
          <li>удерживая Shift на клавиатуре, переместить окно при помощи левой клавиши мыши.</li>
        </ul>
        <p>За перезагрузку питания отвечают три основные кнопки:</p>

        <ul>
          <li>Reboot</li>
          <li>Power off</li>
          <li>Power on</li>
        </ul>
        <p>
          Виртуальная клавиатура открывается через меню <strong>Virtual Media</strong>. Ее можно переместить в удобное
          место аналогично другим окнам в noVNC-сессии.
        </p>

        <p>
          Встроенная клавиатура позволяет передавать сочетания клавиш последовательным нажатием (например,
          последовательно нажать клавиши Ctrl, Alt и Del).
        </p>

        <p>
          В пункте меню <strong>Macro</strong> отображается список комбинаций клавиш, которые чаще всего нельзя передать
          напрямую приложению, потому что они перехватываются самой системой.
        </p>

        <p>Чтобы развернуть окно с доступом к серверу после открытия в консоли:</p>

        <ol>
          <li>
            Перейдите на вкладку <strong>Options</strong>.
          </li>
          <li>
            Перейдите в пункт <strong>Preference</strong>.
          </li>
          <li>
            Перейдите на вкладку <strong>Window</strong>.
          </li>
          <li>
            Снимите галочку <strong>Auto resize window</strong>.
          </li>
          <li>
            Нажмите кнопку <strong>Ок</strong>.
          </li>
        </ol>
        <p>В правом верхнем углу консоли появится кнопка для разворачивания окна.</p>
      </>
    ),
    uz: (
      <>
        <p>
          Chipcore liniyasidan tashqari maxsus serverlar quvvatni masofadan boshqarish va VNC konsolini ishga tushirish
          imkonini beruvchi BMC moduli bilan jihozlangan. Chipcore Line serverlari uchun siz 3 soat davomida qo'shimcha
          IP-VNC ulanish xizmatiga buyurtma berishingiz mumkin.
        </p>

        <p>
          VNC konsolini ochish uchun server ma'lumot kartasining yuqori o'ng burchagidagi konsol belgisini bosing.
          Konsol to'g'ridan-to'g'ri brauzerda noVNC seansida boshlanadi va avtomatik ravishda ekran o'lchamiga
          moslashadi. Serverni hatto planshetdan ham boshqarishingiz mumkin. NoVNC seanslari bilan bir nechta
          yorliqlarni ochganda, matn kiritish faqat eng birinchi ochiq tabda mavjud.
        </p>

        <p>Virtual ish stoli oynalarini tortishning ikki yo'li mavjud:</p>

        <ul>
          <li>
            klaviaturada Alt tugmachasini bosib turgan holda sichqonchaning chap tugmasi bilan oynani harakatlantiring;
          </li>
          <li>
            klaviaturada Shift tugmachasini bosib ushlab turing va sichqonchaning chap tugmasi bilan oynani
            harakatlantiring.
          </li>
        </ul>
        <p>Uchta asosiy tugma quvvatni qayta o'rnatish uchun javobgardir:</p>

        <ul>
          <li>Qayta ishga tushirish</li>
          <li>Oʻchirish</li>
          <li>Quvvatni yoqing</li>
        </ul>

        <p>
          Virtual klaviatura <strong>Virtual media</strong> menyusi orqali ochiladi. Uni noVNC seansida boshqa oynalarga
          o'xshash qulay joyga ko'chirish mumkin.
        </p>

        <p>
          O'rnatilgan klaviatura ketma-ket bosish (masalan, Ctrl, Alt va Del tugmalarini ketma-ket bosish) orqali
          tugmalar birikmasini uzatish imkonini beradi.
        </p>

        <p>
          Menyu elementi<strong>Makro</strong>ko'pincha to'g'ridan-to'g'ri dasturga o'tkazib bo'lmaydigan tugmalar
          birikmalari ro'yxatini ko'rsatadi, chunki ularni tizimning o'zi ushlab turadi.
        </p>

        <p>Konsolda ochilgandan so'ng serverga kirish imkoniyati bilan oynani kattalashtirish uchun:</p>

        <ol>
          <li>
            <strong>Tanlovlar</strong> yorlig'ini bosing.
          </li>
          <li>
            <strong>Afzal</strong> bandiga o'ting.
          </li>
          <li>
            <strong>Oyna</strong> yorlig'ini bosing.
          </li>
          <li>
            <strong>Oyna hajmini avtomatik o'zgartirish</strong> belgisini olib tashlang.
          </li>
          <li>
            <strong>OK</strong> tugmasini bosing.
          </li>
        </ol>
        <p>Oynani kattalashtirish tugmasi konsolning yuqori o'ng burchagida paydo bo'ladi.</p>
      </>
    ),
    en: (
      <>
        <p>
          Dedicated servers, except for the Chipcore Line, are equipped with a BMC module that allows you to remotely
          control power and run a VNC console. For Chipcore Line servers, you can order an additional service IP-VNC
          connection for 3 hours.
        </p>

        <p>
          To open the VNC console, click on the console icon in the upper right corner of the server information card.
          The console will start in a noVNC session right in the browser and automatically adapt to the screen size. You
          can manage the server even from a tablet. When opening multiple tabs with running noVNC sessions, text input
          is only available on the earliest open tab.
        </p>

        <p>There are two ways to drag virtual desktop windows:</p>

        <ul>
          <li>holding Alt on the keyboard, move the window with the left mouse button;</li>
          <li>hold Shift on the keyboard and move the window with the left mouse button.</li>
        </ul>
        <p>Three main buttons are responsible for power reset:</p>

        <ul>
          <li>Reboot</li>
          <li>Power off</li>
          <li>Power on</li>
        </ul>
        <p>
          The virtual keyboard is opened via the <strong>Virtual Media</strong> menu. It can be moved to a convenient
          location similar to other windows in a noVNC session.
        </p>

        <p>
          The built-in keyboard allows you to transfer key combinations by successive pressing (for example, pressing
          the Ctrl, Alt and Del keys in sequence).
        </p>

        <p>
          The menu item <strong>Macro</strong> displays a list of key combinations that most often cannot be passed
          directly to the application, because they are intercepted by the system itself.
        </p>

        <p>To maximize the window with access to the server after opening in the console:</p>

        <ol>
          <li>
            Click the <strong>Options</strong> tab.
          </li>
          <li>
            Go to the <strong>Preference</strong> item.
          </li>
          <li>
            Click the <strong>Window</strong> tab.
          </li>
          <li>
            Uncheck <strong>Auto resize window</strong>.
          </li>
          <li>
            Click the <strong>OK</strong> button.
          </li>
        </ol>
        <p>A button for maximizing the window will appear in the upper right corner of the console.</p>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
