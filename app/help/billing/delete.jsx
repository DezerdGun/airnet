import HelpBlock from "@/components/helpItem/helpBlock";

const mainData = {
  headTitle: { ru: "Удалить аккаунт", uz: "Hisobni o'chirish", en: "Delete account" },
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
      title: {
        ru: "Перенести услуги на другой аккаунт",
        uz: "Xizmatlarni boshqa hisobga o'tkazish",
        en: "Transfer services to another account",
      },
      link: "/help/billing/account/transfer",
    },
  ],
  content: {
    ru: (
      <>
        <p>Отправить запрос на удаление аккаунта может только Владелец аккаунта.</p>

        <ol>
          <li>Перед отправлением запроса:</li>

          <ul>
            <li>откажитесь от активных услуг;</li>
            <li>погасите задолженность;</li>
            <li>оформите возврат неиспользованных денег;</li>
            <li>удалите банковскую карту.</li>
            <li>
              В панели управления откройте меню в верхнем правом углу и выберите пункт{" "}
              <strong>Профиль и настройки</strong>.
            </li>
          </ul>

          <li>
            Перейдите в раздел <strong>Профиль</strong>.
          </li>

          <li>
            В блоке <strong>Удаление аккаунта</strong> нажмите <strong>Запросить удаление аккаунта</strong>.
          </li>

          <li>
            В предзаполненном тикете в поле <strong>Сообщение</strong> укажите причину удаления аккаунта.
          </li>

          <li>
            Нажмите <strong>Создать тикет</strong>.
          </li>

          <li>После проверки вашего запроса мы удалим аккаунт.</li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Faqat hisob egasi hisobni oʻchirish uchun soʻrov yuborishi mumkin.</p>

        <ol>
          <li>So'rov yuborishdan oldin:</li>

          <ul>
            <li>faol xizmatlardan voz kechish;</li>
            <li>qarzingizni to'lash;</li>
            <li>ishlatilmagan pulni qaytarib berish;</li>
            <li>bank kartasini o'chirib tashlang.</li>
            <li>
              Boshqaruv panelida yuqori o‘ng burchakdagi menyuni oching va <strong>Profil va sozlamalar</strong>-ni
              tanlang.
            </li>
          </ul>

          <li>
            <strong>Profil</strong> bo'limiga o'ting.
          </li>

          <li>
            <strong>Hisobni o'chirish</strong> blokida <strong>Hisobni o'chirishni so'rash</strong> tugmasini bosing.
          </li>

          <li>
            Oldindan to'ldirilgan chiptaning <strong>Xabar</strong> maydonida hisobni o'chirish sababini ko'rsating.
          </li>

          <li>
            <strong>Chipta yaratish</strong> tugmasini bosing.
          </li>

          <li>So'rovingizni ko'rib chiqqach, hisobingizni o'chirib tashlaymiz.</li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>Only the Account Owner can send a request to delete an account.</p>

        <ol>
          <li>Before sending request:</li>

          <ul>
            <li>stop active services;</li>
            <li>pay off your debt;</li>
            <li>issue a refund of unused money;</li>
            <li>delete the bank card.</li>
            <li>
              In the control panel, open the menu in the upper right corner and select{" "}
              <strong>Profile and Settings</strong>.
            </li>
          </ul>

          <li>
            Go to the <strong>Profile</strong> section.
          </li>

          <li>
            In the <strong>Account deletion</strong> block, click <strong>Request account deletion</strong>.
          </li>

          <li>
            In the pre-filled ticket, in the <strong>Message</strong> field, indicate the reason for deleting the
            account.
          </li>

          <li>
            Click <strong>Create a ticket</strong>.
          </li>

          <li>We will delete your account after reviewing your request.</li>
        </ol>
      </>
    ),
  },
};

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} />;
}
