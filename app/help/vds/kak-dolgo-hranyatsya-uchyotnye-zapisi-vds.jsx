import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Как долго хранятся учётные записи VDS?",
    uz: "VDS hisoblari qancha vaqt saqlanadi?",
    en: "How long are VDS accounts kept?",
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
      <p>
        После блокировки услуги, учётная запись VDS хранится на наших серверах 30 дней. Если в течении этого периода
        денежные средства не поступят, сервис и все данные будут безвозвратно удалены с наших серверов в соответствии с
        условиями договора.
      </p>
    ),
    uz: (
      <p>
        Xizmatni bloklagandan so'ng, VDS hisob qaydnomasi bizning serverlarimizda 30 kun davomida saqlanadi. Agar bu
        davrda mablag' olinmaydi, xizmat va barcha ma'lumotlar bizning serverlarimizdan butunlay o'chiriladi shartnoma
        shartlariga muvofiq.
      </p>
    ),
    en: (
      <p>
        After blocking the service, the VDS account is stored on our servers for 30 days. If during this period funds
        will not be received, the service and all data will be permanently deleted from our servers in accordance with
        the terms of the contract.
      </p>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
