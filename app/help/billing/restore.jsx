import HelpBlock from "@/components/helpItem/helpBlock";
import { breadCrumbsBilling } from "@/app/help/billing";

const mainData = {
  headTitle: {
    ru: "Восстановление доступа к аккаунту",
    uz: "Hisobga kirish huquqi tiklanmoqda",
    en: "Restoring account access",
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
        ru: "Перенести услуги на другой аккаунт",
        uz: "Xizmatlarni boshqa hisobga o'tkazish",
        en: "Transfer services to another account",
      },
      link: "/help/billing/transfer",
    },
    {
      title: { ru: "Удалить аккаунт", uz: "Hisobni o'chirish", en: "Delete account" },
      link: "/help/billing/delete",
    },
  ],
  content: {
    ru: (
      <>
        <p>Если у вас возникли проблемы с доступом в аккаунт, вы можете восстановить доступ:</p>
        <ul>
          <li>
            если вы Владелец аккаунта, вы можете изменить пароль или адрес электронной почты, а также отключить
            двухэтапную аутентификацию;
          </li>
          <li>
            если вы не Владелец аккаунта, самостоятельно вы можете только изменить пароль. В случае проблем с
            электронной почтой и двухэтапной аутентификацией обратитесь к Владельцу аккаунта — он должен удалить вас из
            списка пользователей и добавить нового пользователя с верными данными.
          </li>
        </ul>
        <h2>Изменить пароль</h2>
        <p>Изменить пароль может пользователь с любой ролью.</p>
        <p>
          Если вы потеряли доступ к электронной почте, которую вы использовали при регистрации, измените адрес
          электронной почты.
        </p>
        <ol>
          <li>
            На странице входа в панель управления нажмите <strong>Восстановить доступ к аккаунту</strong>.
          </li>
          <li>Введите номер аккаунта. Его можно посмотреть:</li>
          <ul>
            <li>в назначении платежа платежного поручения;</li>
            <li>актах выполненных работ;</li>
            <li>уведомлениях no-reply@airnet.uz.</li>
          </ul>
          <li>Введите адрес электронной почты, которую вы использовали при регистрации.</li>
          <li>
            Нажмите <strong>Сбросить пароль</strong>.
          </li>
          <li>
            Мы отправим письмо на указанную электронную почту. В письме нажмите <strong>Сбросить пароль</strong>. Сброс
            пароля активен в течение часа. По ссылке для сброса пароля можно перейти один раз.
          </li>
          <li>На странице сброса пароля введите новый пароль и подтвердите его.</li>
          <li>
            Нажмите <strong>Изменить пароль</strong>.
          </li>
          <li>
            Мы направим на электронную почту, которую вы использовали при регистрации, письмо с уведомлением об
            изменении пароля. Уведомление не содержит пароль.
          </li>
          <li>Если у вас включена двухэтапная аутентификация, введите код.</li>
        </ol>
        <h2>Изменить адрес электронной почты</h2>
        <p>
          Если вы не Владелец аккаунта, обратитесь к Владельцу аккаунта — он должен удалить вас из списка пользователей
          и добавить нового пользователя с верными данными.
        </p>

        <p>Если вы Владелец аккаунта, то для изменения адреса электронной почты предоставьте нам документы:</p>
        <p>
          <strong>Юридическое лицо</strong>
        </p>
        <ol>
          <li>Подготовьте документы:</li>
          <ul>
            <li>ИНН организации;</li>
            <li>
              документ, подтверждающий полномочия лица, подписавшего заявление о восстановлении доступа (для
              генерального директора — это копия приказа или решение о назначении, для других лиц — доверенность);
            </li>
            <li>заявление по шаблону.</li>
          </ul>
          <li>
            Предоставьте подготовленные документы. Если вы ранее определили способ подачи документов в панели
            управления, то вы можете использовать только его. Если вы не определяли способ подачи документов, то вы
            можете предоставить документы:
          </li>
          <ul>
            <li>на электронную почту payment@airnet.uz;</li>
            <li>лично в офис компании в Ташкенте;</li>
            <li>
              через ЭДО — только для юридических лиц и индивидуальных предпринимателей, которые являются резидентами РФ,
              и государственных учреждений.
            </li>
          </ul>
          <li>
            Для повышения безопасности процедуры восстановления доступа к аккаунту мы можем запросить дополнительные
            документы.
          </li>
        </ol>
        <p>
          <strong>Физическое лицо</strong>
        </p>
        <ol>
          <li>Подготовьте документы:</li>
          <ul>
            <li>копию главного разворота паспорта;</li>
            <li>отчетливую фотографию Владельца аккаунта с паспортом, открытым на главном развороте;</li>
            <li>заявление по шаблону.</li>
          </ul>
          <li>
            Предоставьте подготовленные документы. Если вы ранее определили способ подачи документов в панели
            управления, то вы можете использовать только его. Если вы не определяли способ подачи документов, то вы
            можете предоставить документы:
          </li>
          <ul>
            <li>на электронную почту payment@airnet.uz;</li>
            <li>лично в офис компании в Ташкенте.</li>
          </ul>
          <li>
            Для повышения безопасности процедуры восстановления доступа к аккаунту мы можем запросить дополнительные
            документы.
          </li>
        </ol>
      </>
    ),
    uz: (
      <>
        <p>Agar hisobingizga kirishda muammoga duch kelsangiz, kirishni tiklashingiz mumkin:</p>
        <ul>
          <li>
            agar siz hisob egasi bo'lsangiz, parol yoki elektron pochta manzilingizni o'zgartirishingiz yoki 2 bosqichli
            tekshiruvni o'chirib qo'yishingiz mumkin;
          </li>
          <li>
            Agar siz hisob egasi bo'lmasangiz, parolingizni faqat o'zingiz o'zgartirishingiz mumkin. Elektron pochta va
            ikki bosqichli tekshirish bilan bog'liq muammolar bo'lsa, hisob egasi bilan bog'laning - ular sizni
            foydalanuvchilar ro'yxatidan olib tashlashi va to'g'ri ma'lumotlarga ega yangi foydalanuvchi qo'shishi
            kerak.
          </li>
        </ul>
        <h2>Parolni o'zgartirish</h2>
        <p>Har qanday rolga ega foydalanuvchi parolni oʻzgartirishi mumkin.</p>
        <p>
          Agar siz ro'yxatdan o'tishda foydalangan elektron pochta manzilingizni yo'qotgan bo'lsangiz, iltimos, elektron
          pochta manzilingizni o'zgartiring.
        </p>
        <ol>
          <li>
            Boshqaruv paneliga kirish sahifasida <strong>Hisobingizga kirishni qayta tiklash</strong> tugmasini bosing.
          </li>
          <li>Hisob raqamini kiriting. Siz buni ko'rishingiz mumkin:</li>
          <ul>
            <li>to'lov topshirig'ini to'lash maqsadida;</li>
            <li>bajarilgan ish aktlari;</li>
            <li>bildirishnomalar no-reply@airnet.uz.</li>
          </ul>
          <li>Roʻyxatdan oʻtishda foydalangan elektron pochta manzilingizni kiriting.</li>
          <li>
            <strong>Parolni tiklash</strong> tugmasini bosing.
          </li>
          <li>
            Belgilangan elektron pochta manziliga xat yuboramiz. Xatda <strong>Parolni tiklash</strong> tugmasini
            bosing. Parolni tiklash bir soat davomida faol. Parolni tiklash havolasini faqat bir marta bosishingiz
            mumkin.
          </li>
          <li>Parolni tiklash sahifasida yangi parolni kiriting va uni tasdiqlang.</li>
          <li>
            <strong>Parolni o'zgartirish</strong> tugmasini bosing.
          </li>
          <li>
            Parolingiz o'zgartirilganligi haqida sizni xabardor qilish uchun ro'yxatdan o'tishda foydalangan elektron
            pochta manzilingizga xat yuboramiz. Bildirishnomada parol mavjud emas.
          </li>
          <li>Agar sizda 2 bosqichli tekshiruv yoqilgan boʻlsa, kodni kiriting.</li>
        </ol>
        <h2>E-pochta manzilini o'zgartirish</h2>
        <p>
          Agar siz hisob egasi bo'lmasangiz, hisob egasi bilan bog'laning - ular sizni foydalanuvchilar ro'yxatidan olib
          tashlashi va to'g'ri ma'lumotlarga ega yangi foydalanuvchi qo'shishi kerak.
        </p>

        <p>
          Agar siz hisob egasi bo'lsangiz, elektron pochta manzilingizni o'zgartirish uchun bizga quyidagi hujjatlarni
          taqdim eting:
        </p>
        <p>
          <strong>Yuridik shaxs</strong>
        </p>
        <ol>
          <li>Hujjatlarni tayyorlang:</li>
          <ul>
            <li>Tashkilotning STIR;</li>
            <li>
              kirish huquqini tiklash to'g'risidagi arizani imzolagan shaxsning vakolatini tasdiqlovchi hujjat (bosh
              direktor uchun - bu tayinlash to'g'risidagi buyruq yoki qarorning nusxasi, boshqa shaxslar uchun -
              ishonchnoma);
            </li>
            <li>shablon bayonoti.</li>
          </ul>
          <li>
            Tayyorlangan hujjatlarni taqdim eting. Agar siz avval boshqaruv panelida hujjat topshirish usulini
            belgilagan bo'lsangiz, undan faqat foydalanishingiz mumkin. Agar siz hujjatlarni topshirish usulini
            ko'rsatmagan bo'lsangiz, hujjatlarni taqdim etishingiz mumkin:
          </li>
          <ul>
            <li>payment@airnet.uz elektron pochta manziliga;</li>
            <li>kompaniyaning Toshkent shahridagi ofisida shaxsan;</li>
            <li>
              ERI orqali - faqat Rossiya Federatsiyasi rezidentlari bo'lgan yuridik shaxslar va yakka tartibdagi
              tadbirkorlar va davlat organlari uchun.
            </li>
          </ul>
          <li>
            Hisobni tiklash jarayoni xavfsizligini yaxshilash uchun biz qo'shimcha hujjatlarni so'rashimiz mumkin.
          </li>
        </ol>
        <p>
          <strong>Individual</strong>
        </p>
        <ol>
          <li>Hujjatlarni tayyorlang:</li>
          <ul>
            <li>pasportning asosiy tarqalishi nusxasi;</li>
            <li>Hisob egasining pasporti birinchi sahifada ochiq holda aniq surati</li>
            <li>shablon bayonoti.</li>
          </ul>
          <li>
            Tayyorlangan hujjatlarni taqdim eting. Agar siz avval boshqaruv panelida hujjat topshirish usulini
            belgilagan bo'lsangiz, undan faqat foydalanishingiz mumkin. Agar siz hujjatlarni topshirish usulini
            ko'rsatmagan bo'lsangiz, hujjatlarni taqdim etishingiz mumkin:
          </li>
          <ul>
            <li>payment@airnet.uz elektron pochta manziliga;</li>
            <li>kompaniyaning Toshkent shahridagi ofisiga shaxsan.</li>
          </ul>
          <li>
            Hisobni tiklash jarayoni xavfsizligini yaxshilash uchun biz qo'shimcha hujjatlarni so'rashimiz mumkin.
          </li>
        </ol>
      </>
    ),
    en: (
      <>
        <p>If you're having trouble accessing your account, you can restore access:</p>
        <ul>
          <li>
            if you are an Account Owner, you can change your password or email address, or turn off 2-Step Verification;
          </li>
          <li>
            If you are not the Account Owner, you can only change your password yourself. In case of problems with email
            and two-step verification, contact the Account Owner - they should remove you from the list of users and add
            a new user with the correct data.
          </li>
        </ul>
        <h2>Change password</h2>
        <p>A user with any role can change the password.</p>
        <p>If you have lost access to the email you used to register, please change your email address.</p>
        <ol>
          <li>
            On the control panel login page, click <strong>Regain access to your account</strong>.
          </li>
          <li>Enter the account number. You can see it:</li>
          <ul>
            <li>in the purpose of payment of the payment order;</li>
            <li>acts of work performed;</li>
            <li>notifications no-reply@airnet.uz.</li>
          </ul>
          <li>Enter the email address you used when registering.</li>
          <li>
            Click <strong>Reset Password</strong>.
          </li>
          <li>
            We will send an email to the specified email address. In the email, click <strong>Reset Password</strong>.
            Password reset is active for one hour. You can only click on the reset password link once.
          </li>
          <li>On the password reset page, enter a new password and confirm it.</li>
          <li>
            Click <strong>Change Password</strong>.
          </li>
          <li>
            We will send an email to the email address you used to register to notify you that your password has been
            changed. The notification does not contain a password.
          </li>
          <li>If you have 2-Step Verification enabled, enter the code.</li>
        </ol>
        <h2>Change email address</h2>
        <p>
          If you are not the Account Owner, contact the Account Owner - they should remove you from the list of users
          and add a new user with the correct data.
        </p>

        <p>If you are an Account Owner, please provide us with the following documents to change your email address:</p>
        <p>
          <strong>Legal entity</strong>
        </p>
        <ol>
          <li>Prepare documents:</li>
          <ul>
            <li>TIN of the organization;</li>
            <li>
              a document confirming the authority of the person who signed the application for the restoration of access
              (for the CEO - this is a copy of the order or decision on appointment, for other persons - a power of
              attorney);
            </li>
            <li>template statement.</li>
          </ul>
          <li>
            Provide prepared documents. If you have previously defined a document submission method in the control
            panel, then you can only use it. If you did not specify the method of submission of documents, then you can
            provide documents:
          </li>
          <ul>
            <li>to e-mail payment@airnet.uz;</li>
            <li>in person to the company's office in Tashkent;</li>
            <li>
              through EDI - only for legal entities and individual entrepreneurs who are residents of the Russian
              Federation, and government agencies.
            </li>
          </ul>
          <li>To improve the security of the account recovery procedure, we may request additional documents.</li>
        </ol>
        <p>
          <strong>Individual</strong>
        </p>
        <ol>
          <li>Prepare documents:</li>
          <ul>
            <li>copy of the main spread of the passport;</li>
            <li>a clear photo of the Account Holder with their passport open on the front page</li>
            <li>template statement.</li>
          </ul>
          <li>
            Provide prepared documents. If you have previously defined a document submission method in the control
            panel, then you can only use it. If you did not specify the method of submission of documents, then you can
            provide documents:
          </li>
          <ul>
            <li>to e-mail payment@airnet.uz;</li>
            <li>in person to the company's office in Tashkent.</li>
          </ul>
          <li>To improve the security of the account recovery procedure, we may request additional documents.</li>
        </ol>
      </>
    ),
  },
};

const breadCrumbs = [
  ...breadCrumbsBilling,
  {
    name: mainData.headTitle,
    link: mainData.url,
  },
];

export default function HelpBlog({ language }) {
  return <HelpBlock data={mainData} language={language} breadCrumbs={breadCrumbs} />;
}
