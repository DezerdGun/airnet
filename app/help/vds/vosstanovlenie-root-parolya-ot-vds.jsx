import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Восстановление root пароля от VDS",
    uz: "VDS ning root parolni tiklash",
    en: "Recovery of root password from VDS",
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
        <p>Если вы потеряете или забудете root пароль на сервере, вы сможете его восстановить.</p>
        <p>
          Это можно сделать с помощью консоли – VNC, расположенной в панели управления, нужно будет выбрать услугу и
          перейти в меню консоль – VNC.
        </p>
        <p>
          Преимущество этой консоли в том, что сервер всегда доступен, если соединение с сервером установлено локально и
          соединение не потеряно.
        </p>
        <p>Алгоритм восстановления root-пароля:</p>
        <ol>
          <li>Перезагрузите сервер</li>
          <li>Перед запуском операционной системы измените параметры загрузки ядра в меню загрузчика GRUB.</li>
          <li>Загрузите операционную систему в однопользовательском режиме.</li>
          <li>Установите новый root-пароль, не вводя старый.</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Agar siz serverda root parolini yo'qotib qo'ysangiz yoki unutsangiz, uni qayta tiklashingiz mumkin.</p>
        <p>
          Bu boshqaruv panelida joylashgan konsol - VNC yordamida amalga oshirilishi mumkin, siz xizmatni tanlashingiz
          kerak bo'ladi va menyu konsoliga o'ting - VNC.
        </p>
        <p>
          Преимущество этой консоли в том, что сервер всегда доступен, если соединение с сервером установлено локально и
          соединение не потеряно.
        </p>
        <p>Root parolni tiklash algoritmi:</p>
        <ol>
          <li>Serverni qayta ishga tushiring</li>
          <li>
            Operatsion tizimni ishga tushirishdan oldin, GRUB bootloader menyusidagi yadro yuklash parametrlarini
            o'zgartiring.
          </li>
          <li>Operatsion tizimni bitta foydalanuvchi rejimida yuklash.</li>
          <li>Eski parolni kiritmasdan yangi root parolini o'rnating.</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>If you lose or forget the root password on the server, you can recover it.</p>
        <p>
          This can be done using the console - VNC, located in the control panel, you will need to select the service
          and go to the menu console - VNC.
        </p>
        <p>
          The advantage of this console is that the server is always available if the connection to the server is
          established locally and the connection is not lost.
        </p>
        <p>Root password recovery algorithm:</p>
        <ol>
          <li>Restart the server</li>
          <li>Before starting the operating system, change the kernel boot options in the GRUB bootloader menu.</li>
          <li>Boot the operating system in single user mode.</li>
          <li>Set a new root password without entering the old one.</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
