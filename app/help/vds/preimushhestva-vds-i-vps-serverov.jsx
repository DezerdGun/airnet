import HelpBlock from "@/components/helpItem/helpBlock";
import { LINKS } from "@/components/requirements";
import { checkLang } from "@/utils/checkLang";
import Link from "next/link";
import { breadCrumbsVds } from "@/app/help/vds";

export default function HelpBlog({ language }) {
  const mainData = {
    headTitle: {
      ru: "Преимущества VDS и VPS-серверов",
      uz: "VDS va VPS serverlarining afzalliklari",
      en: "Advantages of VDS and VPS servers",
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
            Нагруженные сайты требуют более комфортные условия, чем обычный хостинг, где серверные ресурсы одни и те же
            для проектов всех пользователей. В этом случае целесообразным вариантом будет VDS / VPS-сервер.
          </p>
          <p>
            На виртуальном сервере у сайтов есть возможность эффективно работать при выборе подходящего тарифа.{" "}
            <strong>Функциональность VPS</strong> аналогична реальному хосту, а стоимость в несколько раз ниже,
            поскольку клиент использует только часть ресурсов физического сервера.
          </p>
          <p>
            <strong>Арендуя выделенные сервера</strong> пользователь получает в распоряжение все мощности оборудования.
            Поэтому стоимость услуг бывает достаточно высока. Подобную услугу заказывают для высоконагруженных сайтов,
            принимаемых, например для больших гипермаркетов.
          </p>
          <p>
            Большинству владельцев сайтов <strong>возможностей виртуального сервера</strong> достаточно для продуктивной
            работы. Заказчик с опытом управления может самостоятельно настроить подходящую программную среду с
            необходимым программным обеспечением и операционными системами.
          </p>
          <p>
            Никакие соседи, как на виртуальном хостинге, ему не помешают, поскольку{" "}
            <strong>VDS/VPS – это изолированная площадка</strong>. Независимость и доступность делают виртуальный сервер
            одной из лучших разновидностей хостингового сервиса.
          </p>
          <p>
            Ознакомится со всеми тарифными планами можно на сайта{" "}
            <Link href={checkLang(language) + LINKS.OPTIMAL_VDS}>
              <a>Оптимальные и Высокопроизводительные</a>
            </Link>{" "}
            сервера
          </p>
        </>
      ),
      uz: (
        <>
          <p>
            Yuklangan saytlar server resurslari bir xil bo'lgan oddiy xostingdan ko'ra qulayroq sharoitlarni talab
            qiladi barcha foydalanuvchilarning loyihalari uchun bir xil. Bunday holda, VDS / VPS serveri maqbul variant
            bo'ladi.
          </p>
          <p>
            Virtual serverda saytlar to'g'ri tarifni tanlashda samarali ishlash imkoniyatiga ega.{" "}
            <strong>VPS funksionalligi</strong> haqiqiy xostga o'xshaydi va narxi bir necha baravar past, chunki mijoz
            jismoniy server resurslarining faqat bir qismini ishlatadi.
          </p>
          <p>
            <strong>Ajratilgan serverlarni ijaraga olish</strong> orqali foydalanuvchi o'z ixtiyoridagi barcha quvvatni
            oladi uskunalar. Shuning uchun xizmatlarning narxi ancha yuqori. Bu xizmat uchun buyurtma qilingan yuqori
            yuklangan saytlar, masalan, yirik gipermarketlar uchun qabul qilinadi.
          </p>
          <p>
            Aksariyat veb-sayt egalari uchun <strong>virtual server imkoniyatlari</strong> etarli samarali mehnat.
            Boshqaruv tajribasiga ega bo'lgan mijoz tegishli dasturiy ta'minotni mustaqil ravishda sozlashi mumkin zarur
            dasturiy ta'minot va operatsion tizimlar bilan muhit.
          </p>
          <p>
            Hech qanday qo'shnilar, umumiy hostingda bo'lgani kabi, bunga aralashmaydi, chunki{" "}
            <strong>VDS/VPS izolyatsiya qilingan sayt</strong>. Mustaqillik va qulaylik virtual qiladi hosting
            xizmatining eng yaxshi turlaridan biri serveri.
          </p>
          <p>
            Saytda barcha tarif rejalari bilan serverning{" "}
            <Link href={checkLang(language) + LINKS.OPTIMAL_VDS}>
              <a>Optimal va Kuchli</a>
            </Link>{" "}
            turlarini tanishishingiz mumkin
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Loaded sites require more comfortable conditions than regular hosting, where server resources are the same
            for projects of all users. In this case, a VDS / VPS server would be a viable option.
          </p>
          <p>
            On a virtual server, sites have the opportunity to work effectively when choosing the right tariff.{" "}
            <strong>VPS functionality</strong> is similar to a real host, and the cost is several times lower, because
            the client uses only a fraction of the resources of the physical server.
          </p>
          <p>
            <strong>By renting dedicated servers</strong> the user gets all the capacity of the equipment at his
            disposal. Therefore, the cost of services is quite high. A similar service is ordered for highly loaded
            sites, accepted, for example, for large hypermarkets.
          </p>
          <p>
            For most site owners, <strong>virtual server</strong> capabilities are enough for a productive work. A
            customer with management experience can independently set up a suitable software environment with necessary
            software and operating systems.
          </p>
          <p>
            No neighbors, as in shared hosting, will interfere with him, because{" "}
            <strong>VDS/VPS is an isolated site</strong>. Independence and accessibility make a virtual server one of
            the best varieties of hosting service.
          </p>
          <p>
            You can get acquainted with all tariff plans on the website{" "}
            <Link href={checkLang(language) + LINKS.OPTIMAL_VDS}>
              <a>Optimal and High performance</a>
            </Link>{" "}
            servers
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

  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
