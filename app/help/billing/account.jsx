import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Регистрация в панели управления",
		uz: "Boshqaruv panelida ro'yxatdan o'tish",
		en: "Registration in the control panel",
	},
	content: {
		ru: (
			<>
				<p>
					Управление продуктами Airnet осуществляется через панель управления my.airnet.uz. Зарегистрироваться в панели
					управления Airnet можно:
				</p>
				<ul>
					<li>через сайт airnet.uz;</li>
					<li>по приглашению.</li>
				</ul>
				<p>
					Если в процессе регистрации возникнут проблемы, напишите в службу технической поддержки: support@airnet.uz.
				</p>
				<h2>Зарегистрироваться через сайт airnet.uz</h2>
				<p>При регистрации пользователю будет присвоена роль Владелец аккаунта.</p>

				<ol>
					<li>
						На сайте airnet.uz в правом верхнем углу нажмите <strong>Зарегистрироваться</strong>.
					</li>
					<li>Заполните форму регистрации.</li>
					<li>
						Нажмите <strong>Зарегистрироваться</strong>.
					</li>
					<li>
						Мы отправим письмо со ссылкой для подтверждения на указанную электронную почту. В письме нажмите{" "}
						<strong>Подтвердить почту</strong>. По ссылке для подтверждения можно перейти один раз. Если вы уже
						переходили по ней раньше, войдите в аккаунт и продолжите регистрацию. Если вы забыли пароль, восстановите
						доступ к аккаунту.
					</li>
					<li>Выберите страну резидентства.</li>
					<li>
						Определите тип аккаунта. Тип аккаунта и страна резидентства определяют доступные способы пополнения баланса.
						Изменить тип позже нельзя.
					</li>
					<ul>
						<li>личный аккаунт — аккаунт для личного использования с регистрацией на физическое лицо;</li>
						<li>
							бизнес-аккаунт — аккаунт для использования организацией с регистрацией на юридическое лицо,
							индивидуального предпринимателя или государственное учреждение.
						</li>
					</ul>
					<li>
						Для бизнес-аккаунта с резидентством УЗБ введите ИНН и выберите организацию из списка. Поля со всеми данными
						организации заполнятся автоматически. Если поля с данными не отобразились, нажмите{" "}
						<strong>Ввести данные</strong> и заполните анкету вручную.
					</li>
					<li>Для личного аккаунта или бизнес-аккаунта с резидентством не УЗБ заполните анкету вручную.</li>
					<li>
						Подтвердите согласие с условиями и нажмите <strong>Продолжить</strong>.
					</li>
					<li>Для бизнес-аккаунта введите ФИО контактного лица.</li>
					<li>Введите номер телефона и подтвердите согласие на его использование.</li>
					<li>
						Нажмите <strong>Запросить код</strong>.
					</li>
					<li>Введите полученный код.</li>
					<li>Опционально: настройте двухэтапную аутентификацию.</li>
				</ol>

				<h2>Зарегистрироваться по приглашению</h2>
				<p>
					Пригласить нового пользователя в аккаунт может Владелец аккаунта или Администратор пользователей. После
					приглашения пользователь получит на электронную почту письмо с номером аккаунта и ссылкой для подтверждения.
					Роль пользователя определяется пользователем, который отправляет приглашение.
				</p>
				<ol>
					<li>
						В письме нажмите <strong>Подтвердить почту</strong>.
					</li>
					<li>Введите пароль.</li>
					<li>
						Нажмите <strong>Продолжить</strong>.
					</li>
					<li>Укажите свои данные.</li>
					<li>
						Нажмите <strong>Запросить код</strong>.
					</li>
					<li>Мы отправим SMS на указанный номер телефона. Введите полученный код.</li>
					<li>
						Для приглашенного пользователя автоматически подключается двухэтапная аутентификация. Изменить способ
						получения кода можно в разделе <strong>Профиль и настройки</strong> →{" "}
						<strong>Двухэтапная аутентификация</strong>. Отключить двухэтапную аутентификацию нельзя.
					</li>
				</ol>

				<h2>Изменить данные профиля</h2>
				<p>При изменении данных профиля есть ограничения:</p>

				<ul>
					<li>в личном аккаунте нельзя указать ФИО другого лица;</li>
					<li>в бизнес-аккаунте нельзя изменить ИНН (VAT № для нерезидентов УЗБ).</li>
				</ul>
				<p>
					Чтобы изменить эти данные — оформить аккаунт на другое лицо — зарегистрируйте новый аккаунт и перенесите на
					него услуги.
				</p>

				<ol>
					<li>
						В панели управления откройте меню в правом верхнем углу и выберите <strong>Профиль и настройки</strong>.
					</li>
					<li>
						Нажмите <strong>Изменить</strong>.
					</li>
					<li>
						Внесите изменения в данные и нажмите <strong>Сохранить</strong>. В службу поддержки будет отправлен тикет на
						изменение данных. Они обновятся после проверки.
					</li>
				</ol>
			</>
		),
		uz: (
			<>
				<p>
					Airnet mahsulotlari my.airnet.uz boshqaruv paneli orqali boshqariladi. Airnet boshqaruv panelida ro'yxatdan
					o'tishingiz mumkin:
				</p>
				<ul>
					<li>airnet.uz sayti orqali;</li>
					<li>taklif orqali.</li>
				</ul>
				<p>Ro‘yxatdan o‘tish jarayonida muammolar yuzaga kelsa, texnik yordam xizmatiga yozing: support@airnet.uz.</p>
				<h2>airnet.uz orqali ro'yxatdan o'ting</h2>
				<p>Ro‘yxatdan o‘tishda foydalanuvchiga Hisob egasi roli tayinlanadi.</p>

				<ol>
					<li>
						airnet.uz veb-saytining yuqori o'ng burchagidagi <strong>Ro'yxatdan o'tish</strong> tugmasini bosing.
					</li>
					<li>Ro‘yxatdan o‘tish formasini to‘ldiring.</li>
					<li>
						<strong>Ro‘yxatdan o‘tish</strong> tugmasini bosing.
					</li>
					<li>
						Ko'rsatilgan elektron pochta manziliga tasdiqlash havolasi bilan elektron pochta xabarini yuboramiz. Xatda{" "}
						<strong>E-pochtani tasdiqlash</strong> tugmasini bosing. Tasdiqlash havolasini faqat bir marta bosish
						mumkin. Agar siz allaqachon unga ergashgan bo'lsangiz, hisobingizga kiring va ro'yxatdan o'tishni davom
						eting. Agar parolingizni unutgan bo'lsangiz, hisobingizga kirishni tiklang.
					</li>
					<li>Yashash joyini tanlang.</li>
					<li>
						Hisob turini aniqlang. Hisob turi va yashash mamlakati balansni to'ldirishning mavjud usullarini belgilaydi.
						Siz keyinroq turni o'zgartira olmaysiz.
					</li>
					<ul>
						<li>shaxsiy kabinet - jismoniy shaxs uchun ro'yxatdan o'tgan holda shaxsiy foydalanish uchun hisob;</li>
						<li>
							biznes hisobi - yuridik shaxs, yakka tartibdagi tadbirkor yoki davlat organi sifatida ro'yxatdan o'tgan
							tashkilot tomonidan foydalanish uchun hisob.
						</li>
					</ul>
					<li>
						UZB rezidentligi bo'lgan biznes hisobi uchun TINni kiriting va ro'yxatdan tashkilotni tanlang. Tashkilotning
						barcha ma'lumotlari bilan maydonlar avtomatik ravishda to'ldiriladi. Agar ma'lumotlar maydonlari
						ko'rsatilmasa, <strong>Ma'lumotlarni kiritish</strong> tugmasini bosing va so'rovnomani qo'lda to'ldiring.
					</li>
					<li>Shaxsiy yoki UZB rezidentligi boʻlmagan biznes hisobi uchun anketani qoʻlda toʻldiring.</li>
					<li>
						Shartlarni qabul qilganingizni tasdiqlang va <strong>Davom etish</strong> tugmasini bosing.
					</li>
					<li>Biznes hisobi uchun kontakt shaxsining ismini kiriting.</li>
					<li>Telefon raqamingizni kiriting va undan foydalanishga rozilik bildiring.</li>
					<li>
						<strong>Kod so'rash</strong> tugmasini bosing.
					</li>
					<li>Qabul qilingan kodni kiriting.</li>
					<li>Ixtiyoriy: 2 bosqichli tekshiruvni sozlang.</li>
				</ol>

				<h2>Taklif orqali ro'yxatdan o'ting</h2>
				<p>
					Hisob egasi yoki foydalanuvchi ma'muri yangi foydalanuvchini hisobga taklif qilishi mumkin. Taklifdan so'ng
					foydalanuvchi hisob raqami va tasdiqlash havolasi bilan elektron pochta xabarini oladi. Foydalanuvchining roli
					taklifnoma yuborgan foydalanuvchi tomonidan belgilanadi.
				</p>
				<ol>
					<li>
						Xatda <strong>E-pochtani tasdiqlash</strong> tugmasini bosing.
					</li>
					<li>Parolingizni kiriting.</li>
					<li>
						<strong>Davom etish</strong> tugmasini bosing.
					</li>
					<li>Tafsilotlaringizni kiriting.</li>
					<li>
						<strong>Kod so'rash</strong> tugmasini bosing.
					</li>
					<li>Biz ko'rsatilgan telefon raqamiga SMS yuboramiz. Qabul qilingan kodni kiriting.</li>
					<li>
						Taklif etilgan foydalanuvchi avtomatik ravishda 2 bosqichli tasdiqlash uchun yoqiladi. Kodni olish usulini{" "}
						<strong>Profil va sozlamalar</strong> → <strong>2 bosqichli tekshiruv</strong> orqali o‘zgartirishingiz
						mumkin. Ikki bosqichli tekshiruvni oʻchirib boʻlmaydi.
					</li>
				</ol>

				<h2>Profil tafsilotlarini tahrirlash</h2>
				<p>Profil maʼlumotlarini oʻzgartirishda cheklovlar mavjud:</p>

				<ul>
					<li>shaxsiy hisobda siz boshqa shaxsning ismini ko'rsata olmaysiz;</li>
					<li>Biznes hisobidagi TINni (O‘zB norezidentlari uchun QQS raqami) o‘zgartirish mumkin emas.</li>
				</ul>
				<p>
					Ushbu ma'lumotlarni o'zgartirish uchun - boshqa shaxs uchun hisob qaydnomasini ro'yxatdan o'tkazing - yangi
					hisob qaydnomasini ro'yxatdan o'tkazing va unga xizmatlarni o'tkazing.
				</p>

				<ol>
					<li>
						Boshqaruv panelida yuqori o‘ng burchakdagi menyuni oching va <strong>Profil va sozlamalar</strong>-ni
						tanlang.
					</li>
					<li>
						<strong>Tahrirlash</strong> tugmasini bosing.
					</li>
					<li>
						Ma'lumotlarga o'zgartirishlar kiriting va <strong>Saqlash</strong> tugmasini bosing. Ma'lumotlarni
						o'zgartirish uchun qo'llab-quvvatlash guruhiga chipta yuboriladi. Ular tekshirilgandan so'ng yangilanadi.
					</li>
				</ol>
			</>
		),
		en: (
			<>
				<p>
					Airnet products are managed through the my.airnet.uz control panel. You can register in the Airnet control
					panel:
				</p>
				<ul>
					<li>via the website airnet.uz;</li>
					<li>by invitation.</li>
				</ul>
				<p>
					If there are any problems during the registration process, write to the technical support service:
					support@airnet.uz.
				</p>
				<h2>Register through airnet.uz</h2>
				<p>When registering, the user will be assigned the Account Owner role.</p>

				<ol>
					<li>
						On the airnet.uz website, in the upper right corner, click <strong>Register</strong>.
					</li>
					<li>Fill out the registration form.</li>
					<li>
						Click <strong>Register</strong>.
					</li>
					<li>
						We will send an email with a confirmation link to the email address provided. In the email, click{" "}
						<strong>Confirm Email</strong>. The confirmation link can only be clicked once. If you have already followed
						it before, log in to your account and continue registration. If you have forgotten your password, restore
						access to your account.
					</li>
					<li>Select your country of residence.</li>
					<li>
						Determine the account type. The type of account and the country of residence determine the available methods
						of replenishing the balance. You cannot change the type later.
					</li>
					<ul>
						<li>personal account - an account for personal use with registration for an individual;</li>
						<li>
							business account - an account for use by an organization registered as a legal entity, individual
							entrepreneur or government agency.
						</li>
					</ul>
					<li>
						For a business account with UZB residency, enter the TIN and select an organization from the list. The
						fields with all the data of the organization will be filled in automatically. If the data fields are not
						displayed, click <strong>Enter data</strong> and fill out the questionnaire manually.
					</li>
					<li>
						For a personal account or a business account with a non-UZB residency, fill out the questionnaire manually.
					</li>
					<li>
						Confirm your acceptance of the terms and click <strong>Continue</strong>.
					</li>
					<li>For a business account, enter the name of the contact person.</li>
					<li>Enter your phone number and agree to use it.</li>
					<li>
						Click <strong>Request Code</strong>.
					</li>
					<li>Enter the received code.</li>
					<li>Optional: Set up 2-Step Verification.</li>
				</ol>

				<h2>Register by invitation</h2>
				<p>
					The Account Owner or User Administrator can invite a new user to an account. After the invitation, the user
					will receive an email with an account number and a confirmation link. The role of the user is determined by
					the user who sends the invitation.
				</p>
				<ol>
					<li>
						In the email, click <strong>Confirm Email</strong>.
					</li>
					<li>Enter your password.</li>
					<li>
						Click <strong>Continue</strong>.
					</li>
					<li>Enter your details.</li>
					<li>
						Click <strong>Request Code</strong>.
					</li>
					<li>We will send an SMS to the specified phone number. Enter the received code.</li>
					<li>
						The invited user is automatically enabled for 2-step verification. You can change how you receive the code
						in <strong>Profile and settings</strong> → <strong>2-Step Verification</strong>. You can't turn off two-step
						verification.
					</li>
				</ol>

				<h2>Edit profile details</h2>
				<p>There are restrictions when changing profile data:</p>

				<ul>
					<li>in a personal account, you cannot specify the name of another person;</li>
					<li>It is not possible to change the TIN (VAT number for UZB non-residents) in a business account.</li>
				</ul>
				<p>
					To change this data - register an account for another person - register a new account and transfer services to
					it.
				</p>

				<ol>
					<li>
						In the control panel, open the menu in the upper right corner and select{" "}
						<strong>Profile and settings</strong>.
					</li>
					<li>
						Click <strong>Edit</strong>.
					</li>
					<li>
						Make changes to the data and click <strong>Save</strong>. A ticket will be sent to the support team to
						change the data. They will be updated after verification.
					</li>
				</ol>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
