import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "SSH-ключи: что это такое",
		uz: "SSH kalitlari: ular nima",
		en: "SSH keys: what are they",
	},
	title: {
		ru: "SSH-ключи: что это такое и как они работают?",
		uz: "SSH kalitlari: ular nima va ular qanday ishlaydi?",
		en: "SSH Keys: What Are They and How Do They Work?",
	},
	desc: {
		ru: "SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️ Узнайте, как работают SSH-ключи, их преимущества и настройка.",
		uz: "SSH kalitlari uzoq serverlarga xavfsiz kirish uchun kriptografik kalitlardir🖥️ SSH kalitlari qanday ishlashi, ularning afzalliklari va ularni qanday sozlashni bilib oling.",
		en: "SSH keys are cryptographic keys for secure access to remote servers🖥️ Learn how SSH keys work, their benefits, and how to set them up.",
	},
	date: "11.10.2024",
	updated: "11.10.2024",
	read: "3",
	view: "18",
	img: "/blog/ssh.jpg",
    faqTitle: {
      ru: "Ответы на популярные вопросы",
      uz: "Ommabop savollarga javoblar",
      en: "Answers to popular questions",
    },
	faq: [
		{
		  title: {
			ru: "Как скоро можно начать пользоваться услугой?",
			uz: "Xizmatdan qanchalik tez foydalanishni boshlashim mumkin?",
			en: "How soon can I start using the service?",
		  },
		  description: {
			ru: (
			  <>
				<p>Пользовательский аккаунт открывается сразу после подачи заявки.</p>
  
				<p>Сразу после произведения оплаты, вы можете начать сразу же пользоваться услугой.</p>
			  </>
			),
			uz: (
			  <>
				<p>Foydalanuvchi hisobi ariza topshirilgandan so‘ng darhol ochiladi.</p>
  
				<p>Toʻlovni amalga oshirganingizdan soʻng darhol xizmatdan foydalanishni boshlashingiz mumkin.</p>
			  </>
			),
			en: (
			  <>
				<p>The user account is opened immediately after the application is submitted.</p>
  
				<p>Immediately after making the payment, you can start using the service immediately.</p>
			  </>
			),
		  },
		},
	],
	alinks: [
		{ title: {ru: "SSH-ключ: что это?", uz: "SSH kaliti: bu nima?", en: "SSH Key: What is it?", slug: "1" }},
		{ title: {ru: "Чем плоха авторизация по паролю?", uz: "Parolni autentifikatsiya qilishda nima xato?", en: "What's wrong with password authentication?", slug: "2" }},
		{ title: {ru: "SSH: что это?", uz: "SSH: Bu nima?", en: "SSH: What is it?", slug: "3" }},
		{ title: {ru: "Преимущества ключей", uz: "Kalitlarning afzalliklari", en: "Advantages of keys", slug: "4" }},
		{ title: {ru: "Рекомендации по хранению", uz: "Saqlash bo'yicha tavsiyalar", en: "Storage recommendations", slug: "5" }},
		{ title: {ru: "Генерация ключей", uz: "Kalitlarni yaratish", en: "Generating keys", slug: "6" }},
		{ title: {ru: "Подведение итогов", uz: "Xulosa qilish", en: "Summing up", slug: "7" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					SSH-ключ: что это?
				</h3>
				<p>
					Классический способ авторизации в социальной сети, учетной записи электронной почты, интернет-магазине или на другом сетевом ресурсе – ввод имени пользователя и пароля. Это простой и удобный метод, однако, его нельзя назвать на 100% безопасным. Более надежная альтернатива – SSH-ключ. Когда его стоит использовать? Каковы основные преимущества?
				</p>
				<a name="2"></a>
				<h3>Чем плоха авторизация по паролю?</h3>
				<p>
					Комбинация из имени пользователя и пароля – наиболее популярный метод авторизации. Популярность, впрочем, не исключает некоторых серьезных недостатков:
				</p>
				<ul>
					<li>Возможность подбора. Пароль – это сочетание буквенных, цифровых, графических символов. Даже если это совершенно случайная комбинация, не являющаяся ни словом, ни датой, ее можно подобрать как вручную, так и при помощи специального программного обеспечения.</li>
					<li>Сложность запоминания. Хранить в памяти пароль, основа которого – название любимой футбольной команды или значимая дата, просто, однако, и мошеннику будет несложно раскрыть его. Случайные наборы из нескольких цифр и букв разного регистра куда надежнее, но возникает проблема с запоминанием. Комбинация может попросту вылететь из головы, придется проходить сложную процедуру восстановления.</li>
					<li>Возможность кражи. Данные могут быть перехвачены при небезопасном соединении, а то и подсмотрены, если человек выполняет вход, находясь в общественном месте, интернет-кафе или клубе.</li>
				</ul>
				
				<a name="3"></a>
				<h3>SSH: что это?</h3>
				<p>
					SSH – специальный протокол связи, поддерживающий алгоритмы шифрования, за счет которых достигается высокий уровень безопасности при передаче информации. Активация сеанса связи возможна при помощи ввода пароля, однако, гораздо надежнее использовать для этого SSH-ключ, состоящий из сотен символов, что обеспечивает высочайший уровень безопасности.
				</p>
				<p>
					Успешное прохождение авторизации предполагает наличие двух SSH-ключей:
				</p>
				<ul>
					<li>Открытый. Он находится в общем доступе, применяется для шифрования информации при взаимодействии с сервером или сетевым ресурсом. Его можно сравнить с замком, установленным на двери. Перехват этого ключа бесполезен для злоумышленников, “вскрытие” возможно только при наличии второго – приватного.</li>
					<li>Приватный. Если открытый SSH-ключ – это замок, то приватный – это непосредственно ключ. Его основная функция – расшифровка передаваемой информации. Конечно, он требует более бережного и внимательного отношения, в сравнении с открытым, передача третьем лицам недопустима.</li>
				</ul>
				<p>
					Создание ключей происходит автоматически, по алгоритмам, исключающим возможность раскрытие одного ключа даже при известности второго. Такая схема обеспечивает максимальную безопасность обмена данными при использовании протоколов SSH.
				</p>
				<a name="4"></a>
				<h3>Преимущества ключей</h3>
				<p>
					Главные достоинства SSH-ключей выглядят следующим образом:
				</p>
				<ul>
					<li>Невозможность расшифровки подбором. Стандартный пароль редко состоит больше, чем из 10 символов, SSH – из сотен, так что даже использование специальных программ, перебирающих возможные комбинации, не позволит злоумышленнику добиться результата.</li>
					<li>Недоступность закрытого SSH-ключа из внешней сети. Он используется исключительно в момент идентификации.</li>
					<li>Отсутствие потребности в ротации. Одна из рекомендаций по обеспечению сетевой безопасности – периодическая смена пароля. Для SSH это неактуально.</li>
					<li>Автоматизация авторизации. SSH базируется на аутентификации без ручного ввода пароля, так что процесс можно автоматизировать, что особенно актуально для удаленных систем.</li>
					<li>Возможность отслеживания пользовательской активности. Ключ SSH привязывается к определенному пользователю, так что администратор видит, какие именно действия совершались им после прохождения авторизации. Это полезная функция для предприятий, где сетевой безопасности уделяется максимальное внимание.</li>
				</ul>
				<a name="5"></a>
				<h3>Рекомендации по хранению</h3>
				<p>
					Как было отмечено выше, приватный SSH-ключ нужно оберегать, исключить даже минимальную возможность его попадания к третьим лицам. Важнейший момент – организация хранения, для чего допустимо использование следующего:
				</p>
				<ul>
					<li>Внешние носители информации, твердотельные накопители, флеш-карты. Конечно, устройство при таком подходе должно лежать в защищенном месте, сейфе или ящике стола, запирающемся на замок.</li>
					<li>Облачные хранилища и виртуальные диски. Удобный и достаточно безопасный вариант. Конечно, существует вероятность, что злоумышленники смогут добраться до информации в облаке, но им неизвестно, для чего использовать конкретный ключ SSH.</li>
					<li>Менеджеры паролей с расширенным функционалом, позволяющим организовать хранение. Предпочтение следует отдавать проверенным программам от авторитетных разработчиков.</li>
				</ul>
				<a name="6"></a>
				<h3>Генерация ключей</h3>
				<p>
					Для создания SSH-ключей на ОС Linux или Mac необходимо воспользоваться командной строкой или терминалом, операционных системах Windows – сторонним программным обеспечением, например, OpenSSH или подобным, в зависимости от версии.
				</p>
				<p>
					Алгоритм действий при генерации SSH-ключей при помощи терминала выглядит следующим образом:
				</p>
				<ul>
					<li>Открытие командной строки;</li>
					<li>Ввод команды “ssh-keygen”;</li>
					<li>Нажатие клавиши “Enter”. При такой схеме файл сохраняется в папке по умолчанию, но, при необходимости, ее можно изменить.</li>
				</ul>
				<p>
					В процессе создания SSH-ключей дополнительно можно задать кодовое слово, обеспечивающее более высокий уровень защиты соединения. При передаче не самой важной информации, которая вряд ли заинтересует злоумышленников, этот шаг можно пропустить.
				</p>
				<p>
					При использовании стороннего программного обеспечения на операционных системах Windows, нужно руководствоваться интерфейсом конкретного приложения. 
				</p>
				<a name="7"></a>
				<h3>Подведение итогов</h3>
				<p>
					SSH-ключ – один из наиболее надежных способов авторизации, обеспечивающий уровень безопасности, недоступный стандартным паролям. Протокол передачи данных SSH гарантирует, что они находятся в зашифрованной форме, а потому даже их перехват оказывается бесполезным для злоумышленников.
				</p>
				<p>
					При высоком уровне безопасности, SSH-ключи более удобны в использовании, в сравнении с паролями, помогают автоматизировать процессы авторизации.
				</p>
				
				{/* <div className="blog-slider">
					<Blogslider />
				</div> */}
				{/* <FAQ faq={data.faq} title={data.faqTitle[language]} language={language} /> */}

				{/* <p>
					Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p> */}
			</>
		),
		uz: (
			<>
				<a name="1"></a>
				<h3>
				SSH kaliti: bu nima? 
				</h3>
				<p>
				Ijtimoiy tarmoqqa, elektron pochta hisobiga, onlayn-do'konga yoki boshqa onlayn resursga kirishning klassik usuli - foydalanuvchi nomi va parolni kiritish. Bu oddiy va qulay usul, ammo uni 100% xavfsiz deb atash mumkin emas. Xavfsizroq alternativa SSH kalitidir. Qachon foydalanish kerak? Asosiy afzalliklari nimada? 
				</p>
				<a name="2"></a>
				<h3>Parolni autentifikatsiya qilishda nima xato?</h3>
				<p>
				Foydalanuvchi nomi va parol kombinatsiyasi autentifikatsiyaning eng mashhur usuli hisoblanadi. Biroq, mashhurlik ba'zi jiddiy kamchiliklarni istisno qilmaydi:
				</p>
				<ul>
				<li>Tanlash imkoniyati. Parol - bu alifbo, raqamli va grafik belgilarning kombinatsiyasi. Bu so'z ham, sana ham bo'lmagan mutlaqo tasodifiy kombinatsiya bo'lsa ham, uni qo'lda yoki maxsus dastur yordamida tanlash mumkin.</li>
				<li>Yodda saqlash qiyinligi. Sevimli futbol jamoangiz yoki muhim sanaga asoslangan parolni eslab qolish oson, lekin firibgar uchun parolni buzish ham oson. Turli registrlarning bir nechta raqamlari va harflarining tasodifiy to'plamlari ancha ishonchli, ammo yodlash bilan bog'liq muammo mavjud. Kombinatsiya shunchaki boshingizdan uchib ketishi mumkin va siz murakkab tiklanish jarayonidan o'tishingiz kerak bo'ladi.</li>
				<li>O'g'irlik ehtimoli. Xavfsiz ulanish vaqtida maʼlumotlar ushlanishi yoki hatto jamoat joyida, internet-kafe yoki klubda tizimga kirganda josuslik qilinishi mumkin.</li>
				</ul>

				<a name="3"></a>
				<h3>SSH: bu nima?</h3>
				<p>
				SSH shifrlash algoritmlarini qo'llab-quvvatlaydigan maxsus aloqa protokoli bo'lib, axborotni uzatishda yuqori darajadagi xavfsizlikka erishadi. Aloqa seansini parolni kiritish orqali faollashtirish mumkin, ammo buning uchun xavfsizlikning eng yuqori darajasini ta'minlaydigan yuzlab belgilardan iborat SSH kalitidan foydalanish ancha ishonchli. 
				</p>
				<p>
				Muvaffaqiyatli avtorizatsiya ikkita SSH kalitini talab qiladi:
				</p>
				<ul>
				<li>Ochish. U hamma uchun ochiq va server yoki tarmoq resursi bilan o'zaro aloqada bo'lganda ma'lumotlarni shifrlash uchun ishlatiladi. Uni eshikka o'rnatilgan qulf bilan solishtirish mumkin. Bu kalitni ushlash hujumchilar uchun foydasiz; “Buzish” faqat ikkinchi – maxfiy kalit mavjud bo‘lganda mumkin.</li>
				<li>Shaxsiy. Agar umumiy SSH kaliti qulf bo'lsa, u holda shaxsiy kalit kalitning o'zi hisoblanadi. Uning asosiy vazifasi uzatilgan ma'lumotni shifrlashdir. Albatta, bu ko'proq ehtiyotkorlik va ehtiyotkorlik bilan ishlashni talab qiladi, ochiq bilan solishtirganda, uchinchi shaxslarga o'tkazish qabul qilinishi mumkin emas.</li>
				</ul>
				<p>
				Kalitlarni yaratish avtomatik ravishda, ikkinchisi ma'lum bo'lsa ham, bitta kalitni ochish imkoniyatini istisno qiladigan algoritmlarga muvofiq amalga oshiriladi. Ushbu sxema SSH protokollaridan foydalanganda ma'lumotlar almashinuvining maksimal xavfsizligini ta'minlaydi. 
				</p>
				<a name="4"></a>
				<h3>Kalitlarning afzalliklari</h3>
				<p>
				SSH kalitlarining asosiy afzalliklari quyidagilardan iborat:
				</p>
				<ul>
				<li>Tanlash orqali shifrlash mumkin emas. Standart parol kamdan-kam hollarda 10 dan ortiq, SSH esa yuzlab belgilardan iborat bo‘ladi, shuning uchun mumkin bo‘lgan kombinatsiyalarni sinab ko‘radigan maxsus dasturlardan foydalanish ham tajovuzkorga natijaga erishishga imkon bermaydi.</li>
				<li>Shaxsiy SSH kalitiga tashqi tarmoqdan kirish imkoni yo'q. U faqat identifikatsiyalash vaqtida ishlatiladi.</li>
				<li>Burish kerak emas. Tarmoq xavfsizligini ta'minlash bo'yicha tavsiyalardan biri parolni vaqti-vaqti bilan o'zgartirishdir. Bu SSH uchun tegishli emas.</li>
				<li>Avtorizatsiyani avtomatlashtirish. SSH parolni qoʻlda kiritmasdan autentifikatsiyaga asoslangan, shuning uchun jarayonni avtomatlashtirish mumkin, bu ayniqsa masofaviy tizimlar uchun muhim.</li>
				<li>Foydalanuvchi faolligini kuzatish imkoniyati. SSH kaliti ma'lum bir foydalanuvchi bilan bog'langan, shuning uchun administrator avtorizatsiyadan so'ng foydalanuvchi tomonidan qanday harakatlar bajarilganligini ko'rishi mumkin. Bu tarmoq xavfsizligi ustuvor ahamiyatga ega boʻlgan korxonalar uchun foydali xususiyatdir.</li>
				</ul>
				<a name="5"></a>
				<h3>Saqlash bo'yicha tavsiyalar</h3>
				<p>
				Yuqorida ta'kidlab o'tilganidek, shaxsiy SSH kaliti himoyalangan bo'lishi kerak, hatto uning uchinchi shaxslar qo'liga tushib qolish ehtimolini yo'q qiladi. Eng muhim nuqta - saqlashni tashkil qilish, buning uchun quyidagilardan foydalanish mumkin:
				</p>
				<ul>
				<li>Tashqi xotira vositalari, qattiq holatdagi disklar, flesh-kartalar. Albatta, bunday yondashuv bilan qurilma xavfsiz joyda, seyfda yoki qulflangan stol tortmasida saqlanishi kerak.</li>
				<li>Bulutli saqlash va virtual disklar. Qulay va ancha xavfsiz variant. Albatta, tajovuzkorlar bulutdagi ma'lumotlarga kirish imkoniyatiga ega, ammo ular SSH kaliti nima uchun ishlatilishini bilishmaydi.</li>
				<li>Xotirani tashkil qilish imkonini beruvchi kengaytirilgan funksiyalarga ega parol menejerlari. Nufuzli ishlab chiquvchilarning tasdiqlangan dasturlariga ustunlik berish kerak.</li>
				</ul>
				<a name="6"></a>
				<h3>Kalit yaratish</h3>
				<p>
				Linux yoki Mac OS da SSH kalitlarini yaratish uchun siz Windows operatsion tizimlarida buyruq satri yoki terminaldan foydalanishingiz kerak - versiyaga qarab OpenSSH yoki shunga o'xshash uchinchi tomon dasturlari. 
				</p>
				<p>
				Terminal yordamida SSH kalitlarini yaratish bo'yicha harakatlar algoritmi quyidagicha ko'rinadi:
				</p>
				<ul>
				<li>Buyruqlar qatorini ochish;</li>
				<li>“ssh-keygen” buyrug'ini kiriting;</li>
				<li>“Enter” tugmasini bosish. Ushbu sxema yordamida fayl standart papkada saqlanadi, lekin agar kerak bo'lsa, uni o'zgartirish mumkin.</li>
				</ul>
				<p>
				SSH kalitlarini yaratishda siz ulanish xavfsizligining yuqori darajasini ta'minlaydigan kod so'zini qo'shimcha ravishda belgilashingiz mumkin. Agar siz tajovuzkorlarni qiziqtirmasligi mumkin bo'lgan muhim bo'lmagan ma'lumotlarni uzatayotgan bo'lsangiz, bu bosqichni o'tkazib yuborishingiz mumkin. 
				</p>
				<p>
				Windows operatsion tizimlarida uchinchi tomon dasturiy ta'minotidan foydalanganda, siz ma'lum dasturning interfeysiga amal qilishingiz kerak. 
				</p>
				<a name="7"></a>
				<h3>Xulosa qilish</h3>
				<p>
				SSH kaliti autentifikatsiyaning eng ishonchli usullaridan biri bo'lib, standart parollar bilan mavjud bo'lmagan xavfsizlik darajasini ta'minlaydi. SSH ma'lumotlar uzatish protokoli ma'lumotlarning shifrlangan shaklda bo'lishini ta'minlaydi, shuning uchun hatto ushlash tajovuzkorlar uchun foydasiz. 
				</p>
				<p>
				Yuqori darajadagi xavfsizlik bilan SSH kalitlari parollardan ko'ra foydalanish uchun qulayroq va avtorizatsiya jarayonlarini avtomatlashtirishga yordam beradi. 
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				SSH key: what is it?
				</h3>
				<p>
				The classic way to log in to a social network, email account, online store or other online resource is to enter a username and password. This is a simple and convenient method, but it cannot be called 100% secure. A more reliable alternative is an SSH key. When should it be used? What are the main advantages?
				</p>
				<a name="2"></a>
				<h3>What is wrong with password authentication?</h3>
				<p>
				A combination of username and password is the most popular authentication method. However, popularity does not exclude some serious disadvantages:
				</p>
				<ul>
				<li>Easy to guess. A password is a combination of letters, numbers, and graphic characters. Even if it is a completely random combination that is neither a word nor a date, it can be selected either manually or using special software.</li>
				<li>Difficulty of memorization. It is easy to remember a password based on the name of a favorite football team or a significant date, but it will also be easy for a fraudster to crack. Random sets of several numbers and letters of different registers are much more reliable, but there is a problem with memorization. The combination can simply fly out of your head, and you will have to go through a complex recovery procedure.</li>
				<li>Possibility of theft. Data can be intercepted during an insecure connection, or even spied on if a person logs in while in a public place, Internet cafe or club.</li>
				</ul>

				<a name="3"></a>
				<h3>SSH: what is it?</h3>
				<p>
				SSH is a special communication protocol that supports encryption algorithms, due to which a high level of security is achieved when transmitting information. Activation of the communication session is possible by entering a password, however, it is much more reliable to use an SSH key for this, consisting of hundreds of characters, which ensures the highest level of security.
				</p>
				<p>
				Successful authorization requires two SSH keys:
				</p>
				<ul>
				<li>Open. It is publicly available, used to encrypt information when interacting with a server or network resource. It can be compared to a lock installed on a door. Interception of this key is useless for intruders, “opening” is possible only with the second - private.</li>
				<li>Private. If the open SSH key is a lock, then the private one is the key itself. Its main function is to decrypt the transmitted information. Of course, it requires more careful and attentive handling, in comparison with the open one, transfer to third parties is unacceptable.</li>
				</ul>
				<p>
				Keys are created automatically, according to algorithms that exclude the possibility of disclosing one key even if the second is known. This scheme ensures maximum security of data exchange when using SSH protocols.
				</p>
				<a name="4"></a>
				<h3>Advantages of keys</h3>
				<p>
				The main advantages of SSH keys are as follows:
				</p>
				<ul>
				<li>Inability to decrypt by brute force. A standard password rarely consists of more than 10 characters, SSH - of hundreds, so even the use of special programs that sort out possible combinations will not allow an attacker to achieve a result.</li>
				<li>Inaccessibility of a private SSH key from the external network. It is used exclusively at the time of identification.</li>
				<li>No need for rotation. One of the recommendations for ensuring network security is a periodic password change. This is not relevant for SSH.</li>
				<li>Authentication automation. SSH is based on authentication without manual password entry, so the process can be automated, which is especially important for remote systems.</li>
				<li>Ability to track user activity. The SSH key is linked to a specific user, so the administrator can see what actions they performed after authorization. This is a useful feature for enterprises where network security is of utmost importance.</li>
				</ul>			
				<a name="5"></a>
				<h3>Storage recommendations</h3>
				<p>
				As noted above, a private SSH key must be protected, eliminating even the slightest possibility of it falling into the hands of third parties. The most important point is the organization of storage, for which the following is acceptable:
				</p>
				<ul>
				<li>External storage media, solid-state drives, flash cards. Of course, with this approach, the device should be kept in a secure place, a safe or a desk drawer that is locked with a lock.</li>
				<li>Cloud storage and virtual disks. A convenient and fairly secure option. Of course, there is a possibility that intruders will be able to get to information in the cloud, but they do not know what to use a specific SSH key for.</li>
				<li>Password managers with advanced functionality that allows you to organize storage. Preference should be given to proven programs from reputable developers.</li>
				</ul>
				<a name="6"></a>
				<h3>Key generation</h3>
				<p>
				To generate SSH keys on Linux or Mac OS, you need to use the command line or terminal, on Windows operating systems - third-party software, for example, OpenSSH or similar, depending on the version.
				</p>
				<p>
				The algorithm of actions when generating SSH keys using the terminal is as follows:
				</p>
				<ul>
				<li>Open the command line;</li>
				<li>Enter the command “ssh-keygen”;</li>
				<li>Press the “Enter” key. With this scheme, the file is saved in the default folder, but, if necessary, it can be changed.</li>
				</ul>
				<p>
				In the process of creating SSH keys, you can additionally specify a code word that provides a higher level of connection security. If you are not transmitting the most important information that is unlikely to be of interest to attackers, you can skip this step.
				</p>
				<p>
				When using third-party software on Windows operating systems, you should be guided by the interface of a specific application.
				</p>
				<a name="7"></a>
				<h3>Summary</h3>
				<p>
				An SSH key is one of the most reliable authorization methods, providing a level of security that is not available to standard passwords. The SSH data transfer protocol guarantees that they are in encrypted form, and therefore even their interception is useless for attackers.
				</p>
				<p>
				With a high level of security, SSH keys are more convenient to use compared to passwords, they help automate authorization processes.
				</p>
			</>
		),
	},
	next: "/blog/telegram-voice-chat",
},

mainData = {
    headTitle: data.title,
    url: "/blog/domen-com-chto-eto",
    content: data,
  };

  export const breadCrumbsBlog1 = [
    ...breadCrumbsBlog,
    {
      name: data.headTitle,
      link: mainData.url,
    },
  ];
  
export default function Blog({ language }) {
	return <BlogItem data={data} language={language} breadCrumbs={breadCrumbsBlog1} />
}
