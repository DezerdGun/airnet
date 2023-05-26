import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: {
    ru: "Перенести услуги на другой аккаунт",
    uz: "Xizmatlarni boshqa hisobga o'tkazish",
    en: "Transfer services to another account",
  },
  related: [
    {
      title: {
        ru: "Регистрация в панели управления",
        uz: "Boshqaruv panelida ro'yxatdan o'tish",
        en: "Registration in the control panel",
      },
      link: "/help/billing/account",
    },
    {
      title: {
        ru: "Восстановление доступа к аккаунту",
        uz: "Hisobga kirish huquqi tiklanmoqda",
        en: "Restoring account access",
      },
      link: "/help/billing/account/restore",
    },
    {
      title: { ru: "Удалить аккаунт", uz: "Hisobni o'chirish", en: "Delete account" },
      link: "/help/billing/account/delete",
    },
  ],
  content: {
    ru: (
      <>
        <p>
          Если на аккаунте Airnet уже пополнялся баланс, то переоформить аккаунт на другое юридическое или физическое
          лицо, изменить ФИО Владельца аккаунта или ИНН напрямую нельзя. Зарегистрируйте новый аккаунт и перенесите на
          него услуги.
        </p>
        <p>Можно перенести несколько услуг или все услуги аккаунта. Ограничения:</p>
        <ul>
          <li>
            если услуги объединены приватной сетью на уровне L3 с помощью глобального роутера, их нельзя перенести по
            отдельности — только все сразу. В принимающем аккаунте связность между услугами сохранится;
          </li>
          <li>мы не переносим объектное хранилище — перенесите данные самостоятельно;</li>
          <li>некоторые услуги переносятся только с даунтаймом — мы предупредим вас в тикете.</li>
        </ul>
        <p>
          Если на передающем аккаунте есть услуги с моделью оплаты за период, то при переносе оплаченный период не
          сохраняется. На принимающем аккаунте оплаченный период начинается сразу после переноса.
        </p>
        <p style={{ background: "#fff1f0", padding: "10px 15px", border: "1px solid #ffccc7", borderRadius: "5px" }}>
          Перенос услуг на другой аккаунт занимает до 15 минут.
        </p>
        <ol>
          <li>Зарегистрируйте новый принимающий аккаунт.</li>
          <li>
            Пополните баланс принимающего аккаунта. Баланс должен быть не меньше стоимости услуг с моделью оплаты за
            период, которые будут перенесены.
            <br />
            Посмотреть расходы на инфраструктуру можно в панели управления в разделе <strong>Обзор биллинга</strong> →
            блок <strong>Расходы</strong>.
          </li>
          <li>
            Создайте тикеты с запросом на перенос от имени пользователей с ролью Владелец аккаунта, с передающего и
            принимающего аккаунта и не менее чем за сутки до переноса.
            <br />В тикетах укажите:
            <br />
            <ul>
              <li>номера передающего и принимающего аккаунта;</li>
              <li>
                дату и время переноса. В некоторых случаях мы сможем перенести услуги только с понедельника по пятницу с
                10-00 до 19-00 — предупредим вас в тикете и согласуем другое время;
              </li>
              <li>
                список услуг для переноса — в том числе, сети, подсети и IP-адреса. Если вы используете услугу
                DNS-хостинг, укажите домены, которые нужно перенести.
              </li>
            </ul>
          </li>
          <li>
            Если нужно перенести оборудование, размещенное в Airnet, мы пришлем в тикетах документы:
            <ul>
              <li>на передающий аккаунт — акт приема-передачи для возврата оборудования;</li>
              <li>
                на принимающий аккаунт — акт приема-передачи для приема оборудования и Условия оказания услуг связи.
              </li>
            </ul>
            До даты переноса подпишите документы, заверьте печатью и направьте скан-копии в тикете.
          </li>
          <li>Когда перенос услуг завершится, мы отправим уведомление в тикете.</li>
          <li>
            Оформите возврат денег, которые остались на передающем аккаунте.
            <br />
            Если передающий и принимающий аккаунт оформлены на одно лицо, можно запросить перенос баланса — создайте
            тикет и укажите номера передающего и принимающего аккаунта. Мы пришлем заявление для переноса баланса.
          </li>
          <li>Добавьте дополнительных пользователей, которые были созданы в передающем аккаунте.</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>
          Agar Airnet hisobvarag'ida balans allaqachon to'ldirilgan bo'lsa, unda boshqa yuridik yoki jismoniy shaxs
          uchun hisobni qayta ro'yxatdan o'tkazish, Hisob egasining to'liq ismini yoki TINni to'g'ridan-to'g'ri
          o'zgartirish mumkin emas. Yangi hisob qaydnomasini ro'yxatdan o'tkazing va unga o'tkazing unga xizmatlar.
        </p>
        <p>Hisobdagi bir nechta xizmatlarni yoki barcha xizmatlarni koʻchirishingiz mumkin. Cheklovlar:</p>
        <ul>
          <li>
            agar xizmatlar global router yordamida L3 darajasida xususiy tarmoq orqali ulangan bo'lsa, ularni
            alohida-alohida o'tkazib bo'lmaydi - faqat bir vaqtning o'zida. Qabul qiluvchi hisobda xizmatlar o'rtasidagi
            aloqa saqlanib qoladi;
          </li>
          <li>biz ob'ekt xotirasini ko'chirmaymiz - ma'lumotlarni o'zingiz ko'chiring;</li>
          <li>Ba'zi xizmatlar faqat ishlamay qolganda ko'chiriladi - biz sizni chiptada ogohlantiramiz.</li>
        </ul>
        <p>
          Agar o'tkazma hisobvarag'ida ushbu davr uchun to'lov modeliga ega xizmatlar mavjud bo'lsa, u holda pul
          o'tkazmasi vaqtida to'langan muddat saqlanmaydi. Qabul qiluvchi hisobvaraqda to'lov muddati o'tkazma amalga
          oshirilgandan so'ng darhol boshlanadi.
        </p>
        <p style={{ background: "#fff1f0", padding: "10px 15px", border: "1px solid #ffccc7", borderRadius: "5px" }}>
          Xizmatlarni boshqa hisobga o'tkazish 15 daqiqagacha davom etadi.
        </p>
        <ol>
          <li>Yangi qabul qiluvchi hisobni ro'yxatdan o'tkazing.</li>
          <li>
            Qabul qiluvchi hisobning balansini to'ldiring. Balans o'tkazilayotgan davr uchun to'lov modeli bilan
            xizmatlar narxidan kam bo'lmasligi kerak.
            <br />
            Infratuzilma xarajatlarini boshqaruv panelidagi <strong>Toʻlovlar haqida umumiy maʼlumot</strong> boʻlimi →{" "}
            <strong>Xarajatlar</strong> blokida koʻrishingiz mumkin.
          </li>
          <li>
            Hisob egasi roliga ega bo‘lgan foydalanuvchilar nomidan o‘tkazish va qabul qilish hisoblaridan va
            o‘tkazishdan kamida 24 soat oldin o‘tkazish so‘rovlarini yarating.
            <br />
            Chiptalarda quyidagilarni belgilang:
            <br />
            <ul>
              <li>yuboruvchi va qabul qiluvchi hisob raqamlari;</li>
              <li>
                o'tkazish sanasi va vaqti. Ba'zi hollarda biz xizmatlarni faqat dushanbadan jumaga soat 10-00 dan 19-00
                gacha o'zgartirishimiz mumkin - biz sizni chiptada ogohlantiramiz va boshqa vaqtni kelishib olamiz;
              </li>
              <li>
                ko'chirish uchun xizmatlar ro'yxati, jumladan, tarmoqlar, quyi tarmoqlar va IP manzillar. Agar siz DNS
                hosting xizmatidan foydalanayotgan bo'lsangiz, o'tkazmoqchi bo'lgan domenlarni belgilang.
              </li>
            </ul>
          </li>
          <li>
            Agar siz Airnet tomonidan joylashtirilgan uskunalarni topshirishingiz kerak bo'lsa, biz hujjatlarni
            chiptalarda yuboramiz:
            <ul>
              <li>o'tkazuvchi hisob raqamiga - uskunani qaytarish uchun qabul qilish va topshirish akti;</li>
              <li>
                qabul qiluvchi hisob raqamiga - uskunalarni qabul qilish uchun qabul qilish va topshirish akti va aloqa
                xizmatlarini ko'rsatish shartlari.
              </li>
            </ul>
            O'tkazish sanasidan oldin hujjatlarni imzolang, muhr bilan tasdiqlang va chiptada skanerlangan nusxalarni
            yuboring.
          </li>
          <li>Xizmatlarni koʻchirish tugagach, biz chiptada bildirishnoma yuboramiz.</li>
          <li>
            O'tkazma hisobvarag'ida qolgan pulni qaytarib berish.
            <br />
            Agar o'tkazuvchi va qabul qiluvchi hisoblar bitta shaxsga ro'yxatdan o'tgan bo'lsa, siz balansni o'tkazishni
            so'rashingiz mumkin - chipta yarating va o'tkazuvchi va qabul qiluvchi hisob raqamlarini ko'rsating. Biz
            balansni o'tkazish uchun ariza yuboramiz.
          </li>
          <li>O‘tkazilayotgan hisobda yaratilgan qo‘shimcha foydalanuvchilarni qo‘shing.</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>
          If the balance has already been replenished on the Airnet account, then it is impossible to re-register the
          account for another legal or natural person, change the full name of the Account Owner or TIN directly.
          Register a new account and transfer to him services.
        </p>
        <p>You can migrate multiple services or all services in an account. Restrictions:</p>
        <ul>
          <li>
            if services are connected by a private network at the L3 level using a global router, they cannot be
            transferred individually - only all at once. In the receiving account, the connectivity between services
            will remain;
          </li>
          <li>we don't migrate object storage - migrate the data yourself;</li>
          <li>Some services are migrated only with downtime - we will warn you in the ticket.</li>
        </ul>
        <p>
          If the transferring account has services with a payment model for the period, then the paid period is not
          saved during the transfer. On the receiving account, the paid period starts immediately after the transfer.
        </p>
        <p style={{ background: "#fff1f0", padding: "10px 15px", border: "1px solid #ffccc7", borderRadius: "5px" }}>
          Transferring services to another account takes up to 15 minutes.
        </p>
        <ol>
          <li>Register a new receiving account.</li>
          <li>
            Top up the balance of the receiving account. The balance must be no less than the cost of services with a
            payment model for the period to be transferred.
            <br />
            You can view infrastructure costs in the control panel in the <strong>Billing Overview</strong> section →
            the <strong>Expenses</strong> block.
          </li>
          <li>
            Create transfer requests on behalf of users with the Account Owner role, from the transferring and receiving
            accounts, and at least 24 hours before the transfer.
            <br />
            In tickets, specify:
            <br />
            <ul>
              <li>numbers of the sending and receiving account;</li>
              <li>
                transfer date and time. In some cases, we will be able to reschedule services only from Monday to Friday
                from 10-00 to 19-00 - we will warn you in the ticket and agree on another time;
              </li>
              <li>
                a list of services to migrate, including networks, subnets, and IP addresses. If you are using a DNS
                hosting service, specify the domains you want to transfer.
              </li>
            </ul>
          </li>
          <li>
            If you need to transfer equipment hosted by Airnet, we will send documents in tickets:
            <ul>
              <li>to the transferring account - an act of acceptance and transfer for the return of equipment;</li>
              <li>
                to the receiving account - an act of acceptance and transfer for the reception of equipment and the
                Conditions for the provision of communication services.
              </li>
            </ul>
            Before the transfer date, sign the documents, certify with a seal and send scanned copies in the ticket.
          </li>
          <li>When the migration of services is completed, we will send a notification in the ticket.</li>
          <li>
            Issue a refund of the money that remained on the transferring account.
            <br />
            If the transferring and receiving accounts are registered to the same person, you can request a balance
            transfer - create a ticket and indicate the numbers of the transferring and receiving account. We will send
            an application for balance transfer.
          </li>
          <li>Add additional users that were created in the transferring account.</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
