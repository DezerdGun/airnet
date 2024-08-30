import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsVds } from "@/app/help/vds";

const mainData = {
  headTitle: {
    ru: "Смена тарифного плана на VDS",
    uz: "Tarif rejasini VDS ga o'zgartirish",
    en: "Change tariff plan to VDS",
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
        <p>
          Тарифный план VDS может быть изменен только на более высокий. Это связано с изменением дисковой квоты для
          виртуального сервера. Уменьшение квоты увеличивает вероятность потери информации и целостности.
        </p>
        <p>
          Например:{" "}
          <em>
            можно изменить тариф с VDS/VPS «Platinum» на VDS/VPS «VIP», но нельзя с VDS/VPS «VIP» на VDS/VPS «Platinum».
          </em>
        </p>
        <p>
          Также следует учитывать необходимость полной остановки виртуального сервера при смене тарифного плана. Сервер
          будет остановлен для смены конфигурации, и общее время недоступности составит около 15-30 минут.
        </p>
        <p>
          Чтобы изменить свой тарифный план, вы должны выбрать новый план в разделе «Смена тарифа» на панели управления
          учетной записью.
        </p>
      </>
    ),
    uz: (
      <>
        <p>
          VDS tarif rejasini faqat yuqoriroq tarifga o'zgartirish mumkin. Bu disk kvotasi o'zgarishi bilan bog'liq
          virtual server uchun. Kvotani kamaytirish axborot va yaxlitlikni yo'qotish ehtimolini oshiradi.
        </p>
        <p>
          Masalan:{" "}
          <em>
            tarifni VDS/VPS "Platinum" dan VDS/VPS "VIP" ga o'zgartirishingiz mumkin, lekin VDS/VPS "VIP" dan VDS/VPS ga
            emas Mikro.
          </em>
        </p>
        <p>
          Tarif rejasini o'zgartirishda virtual serverni to'liq to'xtatish zarurligini ham hisobga olishingiz kerak.
          Konfiguratsiyani o'zgartirish uchun server to'xtatiladi va mavjud bo'lmaslikning umumiy vaqti taxminan 15-30
          daqiqani tashkil qiladi.
        </p>
        <p>
          Tarif rejangizni o'zgartirish uchun paneldagi "Tarifni o'zgartirish" bo'limida yangi tarifni tanlashingiz
          kerak hisobni boshqarish.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          The VDS tariff plan can only be changed to a higher one. This is due to the disk quota change for virtual
          server. Reducing the quota increases the likelihood of loss of information and integrity.
        </p>
        <p>
          For example:{" "}
          <em>
            you can change the tariff from VDS/VPS "Platinum" to VDS/VPS "VIP", but not from VDS/VPS "VIP" to VDS/VPS
            "Platinum".
          </em>
        </p>
        <p>
          You should also take into account the need to completely stop the virtual server when changing the tariff
          plan. Server will be stopped to change the configuration, and the total unavailability time will be about
          15-30 minutes.
        </p>
        <p>
          To change your tariff plan, you must select a new plan in the "Change tariff" section of the control panel
          account.
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
