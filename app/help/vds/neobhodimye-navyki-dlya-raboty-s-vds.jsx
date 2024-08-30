import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsVds } from "@/app/help/vds";

const mainData = {
  headTitle: {
    ru: "Необходимые навыки для работы с VDS",
    uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
    en: "Necessary skills to work with VDS",
  },
  related: [
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
        <p>Управления виртуальным сервером требует навыков системного администрирования.</p>
        <p>Для управления VDS доступно множество коммерческих и бесплатных панелей управления.</p>
        <p>
          Альтернативой панелям управления помимо этого служит — протокол SSH, который весьма популярен при работе с VDS
          и с выделенными физическими серверами.
        </p>
      </>
    ),
    uz: (
      <>
        <p>Virtual serverni boshqarish tizimni boshqarish ko'nikmalarini talab qiladi.</p>
        <p>VDSni boshqarish uchun ko'plab tijorat va bepul boshqaruv panellari mavjud.</p>
        <p>
          Bunga qo'shimcha ravishda, boshqaruv panellariga alternativa SSH protokoli bo'lib, u ishlayotganda juda
          mashhur VDS va maxsus jismoniy serverlar bilan.
        </p>
      </>
    ),
    en: (
      <>
        <p>Managing a virtual server requires system administration skills.</p>
        <p>Many commercial and free control panels are available to manage VDS.</p>
        <p>
          In addition to this, an alternative to control panels is the SSH protocol, which is very popular when working
          with VDS and with dedicated physical servers.
        </p>
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
