import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsVds } from "@/app/help/vds";

const mainData = {
  headTitle: { ru: "Перенос аккаунта на VDS", uz: "Hisobni VDS-ga o'tkazish", en: "Account transfer to VDS" },
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
        <p>
          Если вы переносите свою учетную запись с виртуального хостинга на VDS, вам нужно будет создать новую учетную
          запись в VDS и вручную перенести свои сайты и базы данных в эту учетную запись.
        </p>
        <p>Услуга VDS подразумевает самостоятельное администрирование сервера.</p>
        <p>Сторона тех.поддержки может выполнять работу на сервере.</p>
        <p>Системный образ для VDS не включает панель управления сервером.</p>
        <p>
          Программное обеспечение, необходимое для покупки, установки, настройки и эксплуатации панели управления,
          выполняется самостоятельно владельцем учетной записи VDS.
        </p>
        <p>
          Если возникнут трудности в процессе экспорта данных, вы можете получить необходимую консультацию, оставив
          заявку в отделе технической поддержки по телефону <a href="tel:+998712028700">+998 (71) 202-87-00</a>
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          Agar hisobingizni umumiy hostingdan VDS ga ko'chirayotgan bo'lsangiz, yangisini yaratishingiz kerak bo'ladi
          VDS-da hisob qaydnomasini o'rnating va saytlaringiz va ma'lumotlar bazalaringizni ushbu hisobga qo'lda
          o'tkazing.
        </p>
        <p>VDS xizmati serverni o'z-o'zini boshqarishni nazarda tutadi.</p>
        <p>Qo'llab-quvvatlash tomoni serverda ishni bajarishi mumkin.</p>
        <p>VDS uchun tizim tasviri server boshqaruv panelini o'z ichiga olmaydi.</p>
        <p>
          Boshqaruv panelini sotib olish, o'rnatish, sozlash va ishlatish uchun zarur bo'lgan dasturiy ta'minot, VDS
          hisobining egasi tomonidan mustaqil ravishda amalga oshiriladi.
        </p>
        <p>
          Ma'lumotlarni eksport qilish jarayonida qiyinchiliklarga duch kelsangiz, kerakli maslahatlarni olishingiz
          mumkin, <a href="tel:+998712028700">+998 (71) 202-87-00</a> telefon orqali texnik yordam bo'limiga
          so'rov qoldirish
        </p>
      </>
    ),
    en: (
      <>
        <p>
          If you are migrating your account from shared hosting to VDS, you will need to create a new account VDS
          account and manually transfer your sites and databases to this account.
        </p>
        <p>The VDS service implies self-administration of the server.</p>
        <p>The support side can do the work on the server.</p>
        <p>The system image for VDS does not include the server control panel.</p>
        <p>
          The software required to purchase, install, configure and operate the control panel, performed independently
          by the owner of the VDS account.
        </p>
        <p>
          If you encounter difficulties during the data export process, you can get the necessary advice by leaving
          contact the technical support department by phone <a href="tel:+998712028700">+998 (71) 202-87-00</a>
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
