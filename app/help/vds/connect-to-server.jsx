import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsVds } from "@/app/help/vds";

const mainData = {
  headTitle: {
    ru: "Подключиться к выделенному серверу",
    uz: "Ajratilgan serverga ulaning",
    en: "Connect to a dedicated server",
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
        ru: "Управлять сервером через VNC-консоль",
        uz: "VNC konsoli orqali serverni boshqarish",
        en: "Manage server via VNC console",
      },
      link: "/help/vds/manage-server-vnc",
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
        <p>Для удаленного управления выделенным сервером можно подключиться к нему:</p>

        <ul>
          <li>по протоколу SSH (для серверов с ОС Linux);</li>
          <li>по протоколу RDP (для серверов с ОС Windows);</li>
          <li>по протоколу VNC (для серверов с macOS);</li>
          <li>
            через VNC-консоль (для серверов с любой ОС, для серверов линейки Chipcore Line при заказе дополнительной
            услуги).
          </li>
        </ul>
        <p>
          Параметры для подключения (логин, пароль, публичный IP-адрес сервера) указаны в панели управления на странице
          сервера ⟶ вкладка <strong>Операционная система</strong>. Пароль будет доступен для просмотра 24 часа с момента
          сдачи сервера. Если вы забыли пароль от сервера, можно сбросить и восстановить его.
        </p>

        <p>
          Для установки ОС на сервере из iso-образа, подключитесь через VNC-консоль или загрузитесь в Airnet Boot Menu.
        </p>

        <h2>Подключиться по SSH</h2>
        <p>
          Протокол SSH используется для подключения к серверам с ОС Linux. Для подключения к серверу можно вводить логин
          и пароль или использовать пару SSH-ключей. Подключиться по паре ключей можно только с того компьютера, на
          котором хранится закрытый SSH-ключ. Хранить публичные SSH-ключи можно в панели управления раздел{" "}
          <strong>Серверы и оборудование</strong> ⟶ SSH-ключи.
        </p>

        <p>из ОС Linux/macOS</p>

        <ol>
          <li>Опционально: создайте пару SSH-ключей и разместите публичный ключ на сервере.</li>
          <li>Откройте CLI.</li>
          <li>
            Подключитесь к серверу:
            <br />
            <code>{`ssh <username>@<server IP>`}</code>
            <br />
            Укажите:
            <ul>
              <li>
                <code>{`<username>`}</code> — имя пользователя;
              </li>
              <li>
                <code>{`<server IP>`} — публичный IP-адрес сервера.</code>
              </li>
            </ul>
          </li>
          <li>Введите пароль. Если вы используете пару SSH-ключей, вводить пароль не нужно.</li>
        </ol>

        <p>из ОС Windows</p>

        <p>
          В Windows 10 подключиться к серверу можно так же, как в Linux и macOS, через командную строку (cmd.exe). В
          более ранних версиях Windows для подключения используется PuTTY.
        </p>

        <ol>
          <li>Опционально:создайте пару SSH-ключей и разместите публичный ключ на сервере.</li>
          <li>Установите PuTTY и запустите его.</li>
          <li>
            Перейдите на вкладку <strong>Session</strong>.
          </li>
          <li>
            В поле <strong>Host Name</strong> введите публичный IP-адрес сервера.
          </li>
          <li>
            В поле <strong>Port</strong> укажите порт для SSH подключения (по умолчанию 22).
          </li>
          <li>
            В поле <strong>Connection</strong> type выберите тип соединения SSH.
          </li>
          <li>
            Если вы используете пару SSH-ключей, перейдите на вкладку <strong>SSH — Auth</strong>, нажмите{" "}
            <strong>Browse</strong> и загрузите файл с закрытым ключом.
          </li>
          <li>
            Нажмите <strong>Open</strong>.
          </li>
          <li>
            Откроется консоль. Подтвердите подключение и введите логин и пароль для входа на сервер. Если вы используете
            пару SSH-ключей, вводить пароль не нужно.
          </li>
        </ol>

        <h2>Подключиться по RDP</h2>

        <p>Протокол RDP используется для подключения к серверам с ОС Windows.</p>

        <p>ОС Windows</p>

        <ol>
          <li>
            Откройте меню <strong>Пуск</strong> ⟶ <strong>Подключение к удаленному рабочему столу</strong>.
          </li>
          <li>
            В поле <strong>Компьютер</strong> введите публичный IP-адрес сервера.
          </li>
          <li>
            Нажмите <strong>Подключить</strong>.
          </li>
          <li>
            Введите <strong>Имя пользователя</strong> и <strong>Пароль</strong>.
          </li>
          <li>
            Нажмите <strong>OK</strong>.
          </li>
        </ol>

        <p>из ОС Linux</p>

        <ol>
          <li>Установите RDP-клиент (rdesktop, Remmina и пр.).</li>

          <li>Откройте CLI.</li>

          <li>
            Подключитесь к серверу (пример для rdesktop):
            <br />
            <code>{`rdesktop <server IP> -u <user> -p <password>`}</code>
            <br />
            <p>Укажите:</p>
            <ul>
              <li>
                <code>{`<server IP>`}</code> — публичный IP-адрес сервера;
              </li>
              <li>
                <code>{`<username>`}</code> — имя пользователя;
              </li>
              <li>
                <code>{`<password>`}</code> — пароль.
              </li>
            </ul>
          </li>
        </ol>

        <p>из macOS</p>
        <ol>
          <li>Установите Microsoft Remote Desktop и запустите его.</li>
          <li>Нажмите +.</li>
          <li>
            В поле <strong>PC name</strong> введите публичный IP-адрес сервера.
          </li>
          <li>
            Введите <strong>Username</strong> и <strong>Password</strong>.
          </li>
          <li>
            Нажмите <strong>Save</strong>.
          </li>
          <li>Дважды щелкните по созданному подключению в списке.</li>
        </ol>

        <h2>Подключиться по VNC</h2>

        <p>Протокол VNC используется для подключения к серверам с macOS.</p>

        <p>из macOS</p>

        <ol>
          <li>
            Запустите <strong>Finder</strong>.
          </li>
          <li>
            Откройте меню <strong>Переход</strong> ⟶ <strong>Подключение к серверу</strong>.
          </li>
          <li>
            В поле <strong>Адрес сервера</strong> введите: <br />
            <code>{`vnc://<server IP>`}</code>
            <br />
            Укажите
            <br />
            <code>{`<server IP>`}</code> — публичный IP-адрес сервера.
          </li>
          <li>
            Нажмите <strong>Подключиться</strong>.
          </li>
          <li>
            Введите <strong>Имя пользователя</strong> и <strong>Пароль</strong>.
          </li>
          <li>
            Нажмите <strong>Войти</strong>.
          </li>
        </ol>

        <p>из ОС Windows/Linux</p>

        <p>
          Для подключения используйте на своем компьютере клиент для VNC (TightVNC, RealVNC и пр.). Процесс подключения
          зависит от выбранного клиента.
        </p>

        <p>Cтандартный порт для подключения — 5900.</p>
      </>
    ),
    uz: (
      <>
        <p>Ajratilgan serverni masofadan boshqarish uchun unga ulanishingiz mumkin:</p>

        <ul>
          <li>SSH protokoli orqali (Linux serverlari uchun);</li>
          <li>RDP protokoli orqali (Windows OS bilan ishlaydigan serverlar uchun);</li>
          <li>VNC protokoli (macOS-ga ega serverlar uchun);</li>
          <li>
            VNC konsoli orqali (har qanday operatsion tizimga ega serverlar uchun, qo'shimcha buyurtma berishda Chipcore
            Line serverlari uchun xizmatlar).
          </li>
        </ul>
        <p>
          Ulanish parametrlari (login, parol, serverning umumiy IP manzili) sahifadagi boshqaruv panelida ko'rsatilgan
          server ⟶ yorlig'i <strong>Operatsion tizim</strong>. Parol shu paytdan boshlab 24 soat davomida ko'rish uchun
          mavjud bo'ladi serverni topshirish. Agar siz server parolingizni unutgan bo'lsangiz, uni qayta o'rnatishingiz
          va qayta tiklashingiz mumkin.
        </p>

        <p>
          OSni serverga iso tasvirdan o'rnatish uchun VNC konsoli orqali ulaning yoki Airnet Boot-ga yuklang. Menyu.
        </p>

        <h2>SSH orqali ulaning</h2>
        <p>
          SSH protokoli Linux bilan ishlaydigan serverlarga ulanish uchun ishlatiladi. Serverga ulanish uchun loginni
          kiritishingiz mumkin va parolni kiriting yoki SSH kalit juftidan foydalaning. Siz faqat o'rnatilgan
          kompyuterdan kalit juftligi yordamida ulanishingiz mumkin shaxsiy SSH kaliti qaerda saqlanadi. Umumiy SSH
          kalitlarini boshqaruv paneli bo'limida saqlashingiz mumkin. <strong>Serverlar va apparat</strong> ⟶ SSH
          kalitlari.
        </p>

        <p>Linux/macOS'dan</p>

        <ol>
          <li>Ixtiyoriy: SSH kalitlari juftligini yarating va ochiq kalitni serverga joylashtiring.</li>
          <li>CLI-ni oching.</li>
          <li>
            Serverga ulanish:
            <br />
            <code>{`ssh <username>@<server IP>`}</code>
            <br />
            Belgilang:
            <ul>
              <li>
                <code>{`<username>`}</code> — foydalanuvchi nomi;
              </li>
              <li>
                <code>{`<server IP>`} - serverning umumiy IP manzili.</code>
              </li>
            </ul>
          </li>
          <li>Parolni kiriting. Agar siz SSH kalit juftligidan foydalansangiz, parol kiritishingiz shart emas.</li>
        </ol>

        <p>Windows-dan</p>

        <p>
          Windows 10-da siz Linux va macOS-dagi kabi buyruq qatori (cmd.exe) orqali serverga ulanishingiz mumkin. IN
          Windowsning oldingi versiyalari ulanish uchun PuTTY dan foydalanadi.
        </p>

        <ol>
          <li>Ixtiyoriy: SSH kalitlari juftligini yarating va ochiq kalitni serverga joylashtiring.</li>
          <li>PuTTY-ni o'rnating va uni ishga tushiring.</li>
          <li>
            <strong>Sessiya</strong> yorlig'ini bosing.
          </li>
          <li>
            <strong>Xost nomi</strong> maydoniga serverning umumiy IP manzilini kiriting.
          </li>
          <li>
            <strong>Port</strong> maydonida SSH ulanishi uchun portni belgilang (sukut bo'yicha 22).
          </li>
          <li>
            <strong>Ulanish</strong> turi maydonida SSH ulanish turini tanlang.
          </li>
          <li>
            Agar siz SSH kalit juftligidan foydalansangiz, <strong>SSH - Auth</strong> yorlig'iga o'ting, tugmasini
            bosing.
            <strong>Ko'rib chiqing</strong> va shaxsiy kalit faylini yuklang.
          </li>
          <li>
            <strong>Ochish</strong> tugmasini bosing.
          </li>
          <li>
            Konsol ochiladi. Ulanishni tasdiqlang va serverga kirish uchun foydalanuvchi nomingiz va parolingizni
            kiriting. Agar foydalanayotgan bo'lsangiz bir juft SSH kalitlari, parolni kiritish shart emas.
          </li>
        </ol>

        <h2>RDP orqali ulaning</h2>

        <p>RDP protokoli Windows serverlariga ulanish uchun ishlatiladi.</p>

        <p>Windows</p>

        <ol>
          <li>
            <strong>Ishga tushirish</strong> ⟶ <strong>Masofaviy ish stoliga ulanish</strong> menyusini oching.
          </li>
          <li>
            <strong>Kompyuter</strong> maydoniga serverning umumiy IP manzilini kiriting.
          </li>
          <li>
            <strong>Ulanish</strong> tugmasini bosing.
          </li>
          <li>
            <strong>Foydalanuvchi nomi</strong> va <strong>Parol</strong>ni kiriting.
          </li>
          <li>
            <strong>OK</strong> tugmasini bosing.
          </li>
        </ol>

        <p>Linux'dan</p>

        <ol>
          <li>RDP mijozini o'rnating (rdesktop, Remmina va boshqalar).</li>

          <li>CLI-ni oching.</li>

          <li>
            Serverga ulaning (rdesktop uchun misol):
            <br />
            <code>{`rdesktop <server IP> -u <user> -p <password>`}</code>
            <p>Aniqlang:</p>
            <ul>
              <li>
                <code>{`<server IP>`}</code> — serverning umumiy IP manzili;
              </li>
              <li>
                <code>{`<username>`}</code> — foydalanuvchi nomi;
              </li>
              <li>
                <code>{`<password>`}</code> - bu parol.
              </li>
            </ul>
          </li>
        </ol>

        <p>macOS'dan</p>
        <ol>
          <li>Microsoft Remote Desktop-ni o'rnating va uni ishga tushiring.</li>
          <li>+ tugmasini bosing.</li>
          <li>
            <strong>Kompyuter nomi</strong> maydoniga serverning umumiy IP manzilini kiriting.
          </li>
          <li>
            <strong>Foydalanuvchi nomi</strong> va <strong>Parol</strong>ni kiriting.
          </li>
          <li>
            <strong>Saqlash</strong> tugmasini bosing.
          </li>
          <li>Roʻyxatdagi yangi yaratilgan ulanishni ikki marta bosing.</li>
        </ol>

        <h2>VNC orqali ulaning</h2>

        <p>VNC protokoli macOS operatsion tizimida ishlaydigan serverlarga ulanish uchun ishlatiladi.</p>

        <p>macOS'dan</p>

        <ol>
          <li>
            <strong>Finder</strong>ni ishga tushiring.
          </li>
          <li>
            Menyuni oching <strong>O'tish</strong> ⟶ <strong>Serverga ulanish</strong>.
          </li>
          <li>
            <strong>Server manzili</strong> maydoniga: <br /> kiriting
            <br />
            <code>{`vnc://<server IP>`}</code>
            <br />
            <code>{`<server IP>`}</code> - serverning umumiy IP manzilini belgilang.
          </li>
          <li>
            <strong>Ulanish</strong> tugmasini bosing.
          </li>
          <li>
            <strong>Foydalanuvchi nomi</strong> va <strong>Parol</strong>ni kiriting.
          </li>
          <li>
            <strong>Kirish</strong> tugmasini bosing.
          </li>
        </ol>

        <p>Windows/Linux'dan</p>

        <p>
          Ulanish uchun kompyuteringizda VNC mijozidan foydalaning (TightVNC, RealVNC va boshqalar). Ulanish jarayoni
          tanlangan mijozga bog'liq.
        </p>

        <p>Standart ulanish porti 5900.</p>
      </>
    ),
    en: (
      <>
        <p>To remotely manage a dedicated server, you can connect to it:</p>

        <ul>
          <li>via SSH protocol (for Linux servers);</li>
          <li>via RDP protocol (for servers running Windows OS);</li>
          <li>VNC protocol (for servers with macOS);</li>
          <li>
            via VNC console (for servers with any OS, for Chipcore Line servers when ordering an additional services).
          </li>
        </ul>
        <p>
          Connection parameters (login, password, public IP address of the server) are specified in the control panel on
          the page server ⟶ tab <strong>Operating system</strong>. The password will be available for viewing 24 hours
          from the moment surrender of the server. If you have forgotten your server password, you can reset and restore
          it.
        </p>

        <p>
          To install the OS on the server from an iso image, connect via the VNC console or boot into Airnet Boot Menu.
        </p>

        <h2>Connect via SSH</h2>
        <p>
          The SSH protocol is used to connect to servers running Linux. To connect to the server, you can enter a login
          and password, or use an SSH key pair. You can connect using a key pair only from the computer on which where
          the private SSH key is stored. You can store public SSH keys in the control panel section{" "}
          <strong>Servers and hardware</strong> ⟶ SSH keys.
        </p>

        <p>from Linux/macOS</p>

        <ol>
          <li>Optional: Generate an SSH key pair and host the public key on the server.</li>
          <li>Open CLI.</li>
          <li>
            Connect to the server:
            <br />
            <code>{`ssh <username>@<server IP>`}</code>
            <br />
            Specify:
            <ul>
              <li>
                <code>{`<username>`}</code> — username;
              </li>
              <li>
                <code>{`<server IP>`} is the public IP address of the server.</code>
              </li>
            </ul>
          </li>
          <li>Enter a password. If you are using an SSH key pair, you do not need to enter a password.</li>
        </ol>

        <p>from Windows</p>

        <p>
          In Windows 10, you can connect to the server in the same way as in Linux and macOS, through the command line
          (cmd.exe). IN Earlier versions of Windows use PuTTY to connect.
        </p>

        <ol>
          <li>Optional: Generate an SSH key pair and host the public key on the server.</li>
          <li>Install PuTTY and run it.</li>
          <li>
            Click the <strong>Session</strong> tab.
          </li>
          <li>
            In the <strong>Host Name</strong> field, enter the public IP address of the server.
          </li>
          <li>
            In the <strong>Port</strong> field, specify the port for SSH connection (22 by default).
          </li>
          <li>
            In the <strong>Connection</strong> type field, select the SSH connection type.
          </li>
          <li>
            If you are using an SSH key pair, go to the <strong>SSH - Auth</strong> tab, click <strong>Browse</strong>{" "}
            and upload the private key file.
          </li>
          <li>
            Press <strong>Open</strong>.
          </li>
          <li>
            The console will open. Confirm the connection and enter your username and password to enter the server. If
            you are using a pair of SSH keys, no need to enter a password.
          </li>
        </ol>

        <h2>Connect via RDP</h2>

        <p>RDP protocol is used to connect to Windows servers.</p>

        <p>Windows</p>

        <ol>
          <li>
            Open the menu <strong>Start</strong> ⟶ <strong>Remote Desktop Connection</strong>.
          </li>
          <li>
            In the <strong>Computer</strong> field, enter the public IP address of the server.
          </li>
          <li>
            Click <strong>Connect</strong>.
          </li>
          <li>
            Enter <strong>Username</strong> and <strong>Password</strong>.
          </li>
          <li>
            Click <strong>OK</strong>.
          </li>
        </ol>

        <p>from Linux</p>

        <ol>
          <li>Install an RDP client (rdesktop, Remmina, etc.).</li>

          <li>Open CLI.</li>

          <li>
            Connect to the server (example for rdesktop):
            <br />
            <code>{`rdesktop <server IP> -u <user> -p <password>`}</code>
            <p>Specify:</p>
            <ul>
              <li>
                <code>{`<server IP>`}</code> — public IP address of the server;
              </li>
              <li>
                <code>{`<username>`}</code> — username;
              </li>
              <li>
                <code>{`<password>`}</code> is the password.
              </li>
            </ul>
          </li>
        </ol>

        <p>from macOS</p>
        <ol>
          <li>Install Microsoft Remote Desktop and run it.</li>
          <li>Press +.</li>
          <li>
            In the <strong>PC name</strong> field, enter the public IP address of the server.
          </li>
          <li>
            Enter <strong>Username</strong> and <strong>Password</strong>.
          </li>
          <li>
            Click <strong>Save</strong>.
          </li>
          <li>Double-click the newly created connection in the list.</li>
        </ol>

        <h2>Connect via VNC</h2>

        <p>The VNC protocol is used to connect to servers running macOS.</p>

        <p>from macOS</p>

        <ol>
          <li>
            Run <strong>Finder</strong>.
          </li>
          <li>
            Open menu <strong>Go</strong> ⟶ <strong>Connect to server</strong>.
          </li>
          <li>
            In the <strong>Server address</strong> field, enter:
            <br />
            <code>{`vnc://<server IP>`}</code>
            <br />
            Specify
            <br />
            <code>{`<server IP>`}</code> — public IP address of the server.
          </li>
          <li>
            Click <strong>Connect</strong>.
          </li>
          <li>
            Enter <strong>Username</strong> and <strong>Password</strong>.
          </li>
          <li>
            Click <strong>Login</strong>.
          </li>
        </ol>

        <p>from Windows/Linux</p>

        <p>
          To connect, use a VNC client on your computer (TightVNC, RealVNC, etc.). Connection process depends on the
          chosen client.
        </p>

        <p>The standard connection port is 5900.</p>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsVds,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
