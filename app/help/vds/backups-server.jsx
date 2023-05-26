import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Резервное копирование выделенных серверов",
    uz: "Maxsus server zahirasi",
    en: "Dedicated server backup",
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
          Для выделенных серверов Airnet предусмотрена возможность создания и хранения резервных копий (бэкапов). Услуга
          резервного копирования позволяет повысить надежность инфраструктуры, защитить себя от безвозвратной потери
          данных.
        </p>

        <p>Для создания и хранения резервных копий доступны следующие решения:</p>

        <ul>
          <li>
            Veeam agent — резервное копирование выполняется Veeam-агентом, работающим на сервере. Данные могут быть
            выгружены в облачный репозиторий Veeam® Cloud Connect, или на отдельный диск сервера;
          </li>
          <li>
            автоматический бэкап в Объектное хранилище — резервные копии создаются с помощью ПО, которое поддерживает
            FTP, OpenStack Swift или Amazon S3-совместимый API. ПО регулярно архивирует и переносит данные в объектное
            хранилище Airnet;
          </li>
          <li>
            бэкап в Файловое хранилище Airnet (SFS) — SFS подключается по протоколам NFS или CIFS к одному или
            нескольким инстансам (серверам или виртуальным машинам), которые могут работать с ней одновременно.
            Использует трёхкратную репликацию томов диска, что обеспечивает высокую сохранность данных. Для серверов
            линейки Chipcore Line данное решение недоступно.
          </li>
        </ul>
      </>
    ),
    uz: (
      <>
        <p>
          Tanlangan ajratilgan serverlar zaxira nusxalarini (zaxira nusxalarini) yaratish va saqlash imkoniyatini
          beradi. Zaxira xizmati infratuzilmaning ishonchliligini oshirish, o'zingizni qaytarib bo'lmaydigan
          ma'lumotlarni yo'qotishdan himoya qilish imkonini beradi.
        </p>

        <p>Zaxira nusxalarini yaratish va saqlash uchun quyidagi echimlar mavjud:</p>

        <ul>
          <li>
            Veeam agenti - zaxiralash serverda ishlaydigan Veeam agenti tomonidan amalga oshiriladi. Ma'lumotlarni
            Veeam® Cloud Connect bulutli omboriga yoki alohida server diskiga yuklash mumkin;
          </li>
          <li>
            Object Storage-ga avtomatik zaxiralash - zaxira nusxalari FTP, OpenStack Swift yoki Amazon S3-ga mos API-ni
            qo'llab-quvvatlaydigan dasturiy ta'minot yordamida yaratiladi. Dastur muntazam ravishda ma'lumotlarni
            arxivlaydi va Airnet ob'ekt xotirasiga o'tkazadi;
          </li>
          <li>
            Tanlangan fayl xotirasiga (SFS) zahira nusxasi — SFS NFS yoki CIFS protokollari orqali u bilan bir vaqtda
            ishlay oladigan bir yoki bir nechta nusxalarga (serverlar yoki virtual mashinalar) ulanadi. Disk
            hajmlarining uch marta takrorlanishidan foydalanadi, bu esa ma'lumotlarning yuqori xavfsizligini
            ta'minlaydi. Ushbu yechim Chipcore Line serverlari uchun mavjud emas.
          </li>
        </ul>
      </>
    ),
    en: (
      <>
        <p>
          Airnet dedicated servers provide the ability to create and store backups (backups). The backup service allows
          you to increase the reliability of the infrastructure, protect yourself from irretrievable data loss.
        </p>

        <p>The following solutions are available for creating and storing backups:</p>

        <ul>
          <li>
            Veeam agent - backup is performed by the Veeam agent running on the server. Data can be uploaded to the
            Veeam® Cloud Connect cloud repository, or to a separate server disk;
          </li>
          <li>
            automatic backup to Object Storage - backups are created using software that supports FTP, OpenStack Swift
            or Amazon S3 compatible API. The software regularly archives and transfers data to the Airnet object
            storage;
          </li>
          <li>
            backup to Airnet File Storage (SFS) — SFS connects via NFS or CIFS protocols to one or more instances
            (servers or virtual machines) that can work with it simultaneously. Uses three-time replication of disk
            volumes, which ensures high data safety. This solution is not available for Chipcore Line servers.
          </li>
        </ul>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
