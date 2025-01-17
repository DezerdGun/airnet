import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsVds } from "@/app/help/vds";

const mainData = {
  headTitle: {
	ru: "Есть ли лимит на число файлов?",
	uz: "Fayllar sonida cheklov bormi?",
	en: "Is there a limit on the number of files?",
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
	{
	  title: {
		ru: "Есть ли лимит на число файлов?",
		uz: "Fayllar sonida cheklov bormi?",
		en: "Is there a limit on the number of files?",
	  },
	  link: "/help/vds/est-li-limit-na-chislo-fajlov",
	},
	{
	  title: {
		ru: "Производится ли резервное копирование?",
		uz: "Zaxira bormi?",
		en: "Is there a backup?",
	  },
	  link: "/help/vds/proizvoditsya-li-rezervnoe-kopirovanie",
	},
	{
	  title: {
		ru: "Как использовать 25 порт для отправки почты?",
		uz: "Pochta yuborish uchun 25-portdan qanday foydalanish kerak?",
		en: "How to use port 25 to send mail?",
	  },
	  link: "/help/vds/kak-ispolzovat-25-port-dlya-otpravki-pochty",
	},
	{
	  title: {
		ru: "Как установить ОС или переустановить имеющуюся?",
		uz: "OSni qanday o'rnatish yoki mavjudini qayta o'rnatish kerak?",
		en: "How to install OS or reinstall existing one?",
	  },
	  link: "/help/vds/kak-ustanovit-os-ili-pereustanovit-imeyushchuyusya",
	},
	{
	  title: {
		ru: "Как удалить сервер?",
		uz: "Serverni qanday o'chirish mumkin?",
		en: "How to delete a server?",
	  },
	  link: "/help/vds/kak-udalit-server",
	},
	{
	  title: {
		ru: "Возможно ли увеличить объем предоставляемых ресурсов?",
		uz: "Berilgan resurslar hajmini oshirish mumkinmi?",
		en: "Is it possible to increase the volume of resources provided?",
	  },
	  link: "/help/vds/vozmozhno-li-uvelichit-obem-predostavlyaemyh-resursov",
	},
  ],
  content: {
    ru: (
      <>
        <p>Лимита нет</p>
      </>
    ),
    uz: (
		<>
		  <p>Hech qanday chegara yo'q</p>
		</>
    ),
    en: (
		<>
		  <p>There is no limit</p>
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
