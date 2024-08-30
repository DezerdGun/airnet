import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsVds } from "@/app/help/vds";

const mainData = {
  headTitle: {
    ru: "Развернуть виртуальную машину с Windows Server",
    uz: "Windows Server bilan virtual mashinani o'rnating",
    en: "Deploy a virtual machine with Windows Server",
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
        ru: "Управлять сервером через KVM-консоль",
        uz: "KVM konsoli orqali serverni boshqarish",
        en: "Manage server via KVM console",
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
  ],
  content: {
    ru: (
      <>
        <p>
          Развернуть виртуальную машину с Windows Server можно с помощью стандартного шаблона или с помощью ISO-образа.
        </p>

        <h2>С помощью стандартного шаблона</h2>
        <p>
          Создание виртуальной машины с операционной системой Windows Server выполняется аналогично созданию vApp c
          одной виртуальной машиной.
        </p>

        <p>
          Установите одну из версий ОС в редакции Datacenter из собственного образа или выберите ОС в редакции Standard
          из репозитория образов ISO Library:
        </p>

        <ul>
          <li>
            <strong>Windows Server 2016</strong>
          </li>
          <li>
            <strong>Windows Server 2019</strong>
          </li>
          <li>
            <strong>Windows Server 2022</strong>
          </li>
        </ul>

        <p>После завершения установки ОС виртуальная машина будет готова к работе.</p>

        {/* <h3>Посмотреть пароль администратора</h3>
				<p>
					В процессе первого запуска ОС происходит автоматическая перезагрузка и кастомизация образа. После перезагрузки
					откроется стандартное окно аутентификации.
				</p>

				<ol>
					<li>
						Из панели управления откройте панель Cloud Director: <strong>Облако на базе VMware</strong> →{" "}
						<strong>Cloud Director</strong>.
					</li>
					<li>Откройте страницу виртуального дата-центра.</li>
					<li>
						Перейдите в раздел <strong>Compute</strong> → <strong>Virtual Machines</strong>.
					</li>
					<li>
						В карточке нужной виртуальной машине нажмите <strong>DETAILS</strong>.
					</li>
					<li>
						Выберите <strong>Guest OS Customization</strong> и нажмите <strong>EDIT</strong>.
					</li>
					<li>
						В поле <strong>Specify</strong> password посмотрите пароль.
					</li>
				</ol>

				<h2>С помощью ISO-образа</h2>
				<ol>
					<li>
						Из панели управления откройте панель Cloud Director: <strong>Облако на базе VMware</strong> →{" "}
						<strong>Cloud Director</strong>.
					</li>
					<li>Откройте страницу виртуального дата-центра.</li>
					<li>
						Перейдите в раздел <strong>Compute</strong> → <strong>Virtual Machines</strong>.
					</li>
					<li>
						Нажмите <strong>NEW VM</strong>.
					</li>
					<li>Введите имя виртуальной машины.</li>
					<li>
						В поле <strong>Type выберите</strong> <strong>New</strong>.
					</li>
					<li>
						В поле <strong>OS family</strong> выберите <strong>Microsoft Windows</strong>.
					</li>
					<li>
						В поле <strong>Operating System</strong> выберите версию ОС <strong>Microsoft Windows</strong>. При создании
						виртуальной машины с Windows Server 2019 в меню выбора типа ОС выберите тип Windows Server 2016.
					</li>
					<li>
						В поле <strong>Boot image</strong> выберите ISO-образ ОС.
					</li>
					<li>
						В поле <strong>Select a Size</strong> выберите количество ЦП и памяти.
					</li>
					<li>
						В поле <strong>Storage</strong> добавьте нужное количество дисков, укажите их размеры и политику хранения:
					</li>
					<ul>
						<li>для пула Gold — vSSD или Fast vSSD;</li>
						<li>для пула Silver — Fast vHDD или vHDD.</li>
					</ul>
					<li>
						Опционально: в поле <strong>Networking</strong> добавьте сеть.
					</li>
					<li>
						Нажмите <strong>OK</strong>.
					</li>
					<li>
						На карточке созданной ВМ нажмите <strong>ACTIONS</strong> → <strong>Install VMware Tools</strong>.
					</li>
					<li>
						Нажмите <strong>INSTALL</strong>.
					</li>
					<li>
						Опционально: для использования собственного преднастроенного установочного образа ОС добавьте его в
						соответствующий приватный репозиторий, подробнее в статье Импортировать виртуальную машину.
					</li>
				</ol> */}
      </>
    ),
    uz: (
      <>
        <p>
          Windows Server virtual mashinasini standart shablon yoki ISO tasviridan foydalanib joylashtirishingiz mumkin.
        </p>

        <h2>Standart shablon bilan</h2>
        <p>
          Windows Server operatsion tizimi bilan virtual mashina yaratish bitta virtual mashina bilan vApp yaratishga
          o'xshaydi.
        </p>

        <p>
          O'zingizning rasmingizdan Datacenter nashri OS versiyalaridan birini o'rnating yoki ISO Library tasvirlar
          omboridan standart versiya OT ni tanlang:
        </p>

        <ul>
          <li>
            <strong>Windows Server 2016</strong>
          </li>
          <li>
            <strong>Windows Server 2019</strong>
          </li>
          <li>
            <strong>Windows Server 2022</strong>
          </li>
        </ul>

        <p>OTni oʻrnatish tugallangandan soʻng virtual mashina foydalanishga tayyor boʻladi.</p>

        {/* <h3>Administrator parolini ko'rish</h3>
				<p>
					Operatsion tizimning birinchi ishga tushirilishida tasvirni avtomatik qayta ishga tushirish va sozlash amalga
					oshiriladi. Qayta ishga tushirilgandan so'ng, standart autentifikatsiya oynasi ochiladi.
				</p>

				<ol>
					<li>
						Boshqaruv panelidan Cloud Director panelini oching: <strong>Bulutli VMware</strong> →{" "}
						<strong>Cloud Director</strong>.
					</li>
					<li>Virtual ma'lumotlar markazi sahifasini oching.</li>
					<li>
						<strong>Hisoblash</strong> → <strong>Virtual mashinalar</strong>ga o‘ting.
					</li>
					<li>
						Kerakli virtual mashina uchun kartada <strong>BATafsil ma'lumotlar</strong>ni bosing.
					</li>
					<li>
						<strong>Mehmon OS moslamasi</strong>ni tanlang va <strong>TAHRARLASH</strong> tugmasini bosing.
					</li>
					<li>
						Parolni <strong>Specify</strong> maydonida qidiring.
					</li>
				</ol>

				<h2>ISO tasviridan foydalanish</h2>
				<ol>
					<li>
						Boshqaruv panelidan Cloud Director panelini oching: <strong>Bulutli VMware</strong> →{" "}
						<strong>Cloud Director</strong>.
					</li>
					<li>Virtual ma'lumotlar markazi sahifasini oching.</li>
					<li>
						<strong>Hisoblash</strong> → <strong>Virtual mashinalar</strong>ga o‘ting.
					</li>
					<li>
						<strong>YANGI VM</strong> tugmasini bosing.
					</li>
					<li>Virtual mashina nomini kiriting.</li>
					<li>
						<strong>Tur maydonida</strong> <strong>Yangi</strong>ni tanlang.
					</li>
					<li>
						<strong>OT oilasi</strong> maydonida <strong>Microsoft Windows</strong>ni tanlang.
					</li>
					<li>
						<strong>Operating System</strong> maydonida <strong>Microsoft Windows</strong> OS versiyasini tanlang.
						Windows Server 2019 bilan virtual mashina yaratishda OS turini tanlash menyusidan Windows Server 2016 turini
						tanlang.
					</li>
					<li>
						<strong>Boot image</strong> maydonida OS ISO tasvirini tanlang.
					</li>
					<li>
						<strong>Hajmni tanlang</strong> maydonida protsessor va xotira hajmini tanlang.
					</li>
					<li>
						<strong>Saqlash</strong> maydoniga kerakli disklar sonini qo'shing, ularning o'lchamlari va saqlash
						siyosatini belgilang:
					</li>
					<ul>
						<li>Oltin hovuz uchun - vSSD yoki Fast vSSD;</li>
						<li>Kumush hovuz, Fast vHDD yoki vHDD uchun.</li>
					</ul>
					<li>
						{" "}
						Majburiy emas: <strong>Tarmoq</strong> maydoniga tarmoq qo‘shing.
					</li>
					<li>
						<strong>OK</strong> tugmasini bosing.
					</li>
					<li>
						Yaratilgan VM kartasida <strong>ACTIONS</strong> → <strong>VMware Tools-ni o'rnatish</strong>-ni bosing.
					</li>
					<li>
						<strong>O'RNATISH</strong> tugmasini bosing.
					</li>
					<li>
						Majburiy emas: o'zingizning oldindan sozlangan OS o'rnatish tasviridan foydalanish uchun uni tegishli
						shaxsiy omborga qo'shing, batafsil ma'lumot uchun Virtual mashinani import qilish bo'limiga qarang.
					</li>
				</ol> */}
      </>
    ),
    en: (
      <>
        <p>You can deploy a Windows Server virtual machine using a standard template or using an ISO image.</p>

        <h2>With a standard template</h2>
        <p>
          Creating a virtual machine with the Windows Server operating system is similar to creating a vApp with a
          single virtual machine.
        </p>

        <p>
          Install one of the Datacenter edition OS versions from your own image, or select a Standard edition OS from
          the ISO Library image repository:
        </p>

        <ul>
          <li>
            <strong>Windows Server 2016</strong>
          </li>
          <li>
            <strong>Windows Server 2019</strong>
          </li>
          <li>
            <strong>Windows Server 2022</strong>
          </li>
        </ul>

        <p>After the OS installation is complete, the virtual machine will be ready to use.</p>

        {/* <h3>View administrator password</h3>
				<p>
					During the first start of the OS, an automatic reboot and customization of the image takes place. After the
					reboot, the standard authentication window will open.
				</p>

				<ol>
					<li>
						From the control panel, open the Cloud Director panel: <strong>Cloud powered by VMware</strong> →{" "}
						<strong>Cloud Director</strong>.
					</li>
					<li>Open the virtual data center page.</li>
					<li>
						Go to <strong>Compute</strong> → <strong>Virtual Machines</strong>.
					</li>
					<li>
						In the card for the desired virtual machine, click <strong>DETAILS</strong>.
					</li>
					<li>
						Select <strong>Guest OS Customization</strong> and click <strong>EDIT</strong>.
					</li>
					<li>
						In the <strong>Specify</strong> password field, look for the password.
					</li>
				</ol>

				<h2>Using an ISO image</h2>
				<ol>
					<li>
						From the control panel, open the Cloud Director panel: <strong>Cloud powered by VMware</strong> →{" "}
						<strong>Cloud Director</strong>.
					</li>
					<li>Open the virtual data center page.</li>
					<li>
						Go to <strong>Compute</strong> → <strong>Virtual Machines</strong>.
					</li>
					<li>
						Click <strong>NEW VM</strong>.
					</li>
					<li>Enter a name for the virtual machine.</li>
					<li>
						In the <strong>Type field, select</strong> <strong>New</strong>.
					</li>
					<li>
						In the <strong>OS family</strong> field, select <strong>Microsoft Windows</strong>.
					</li>
					<li>
						In the <strong>Operating System</strong> field, select the <strong>Microsoft Windows</strong> OS version.
						When creating a virtual machine with Windows Server 2019, select the Windows Server 2016 type from the OS
						type selection menu.
					</li>
					<li>
						In the <strong>Boot image</strong> field, select the OS ISO image.
					</li>
					<li>
						In the <strong>Select a Size</strong> field, select the amount of CPU and memory.
					</li>
					<li>
						In the <strong>Storage</strong> field, add the required number of disks, specify their sizes and storage
						policy:
					</li>
					<ul>
						<li>for Gold pool - vSSD or Fast vSSD;</li>
						<li>for the Silver pool, Fast vHDD or vHDD.</li>
					</ul>
					<li>
						{" "}
						Optional: in the <strong>Networking</strong> field, add a network.
					</li>
					<li>
						Click <strong>OK</strong>.
					</li>
					<li>
						On the created VM card, click <strong>ACTIONS</strong> → <strong>Install VMware Tools</strong>.
					</li>
					<li>
						Click <strong>INSTALL</strong>.
					</li>
					<li>
						Optional: to use your own pre-configured OS installation image, add it to the appropriate private
						repository, see Import a virtual machine for details.
					</li>
				</ol> */}
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
