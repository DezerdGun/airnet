import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Что такое Localhost?",
		uz: "Localhost nima?",
		en: "What is Localhost?",
	},
	title: {
		ru: "Что такое Localhost и как он работает?",
		uz: "Localhost nima va u qanday ishlaydi?",
		en: "What is Localhost and how does it work?",
	},
	desc: {
		ru: "Localhost — это специальное имя для обращения компьютера к самому себе.",
		uz: "Localhost - bu kompyuter o'ziga murojaat qilish uchun foydalanadigan maxsus nom.",
		en: "Localhost is a special name that a computer uses to refer to itself.",
	},
	date: "21.11.2025",
	updated: "21.11.2025",
	read: "5",
	view: "38",
	img: "/blog/localhost.png",
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
		{ title: {ru: "Что такое Localhost?", uz: "Localhost nima?", en: "What is Localhost?", slug: "1" }},
		{ title: {ru: "Основная концепция", uz: "Asosiy tushuncha", en: "Basic concept", slug: "1" }},
		{ title: {ru: "Как функционирует петлевой интерфейс", uz: "Loopback interfeysi qanday ishlaydi?", en: "How does the loopback interface work?", slug: "2" }},
		{ title: {ru: "Процесс преобразования имён", uz: "Ismni o'zgartirish jarayoni", en: "The process of name transformation", slug: "3" }},
		{ title: {ru: "Использование в веб-разработке", uz: "Veb-ishlab chiqishda foydalaning", en: "Use in web development", slug: "4" }},
		{ title: {ru: "Настройка локального сервера", uz: "Mahalliy serverni sozlash", en: "Setting up a local server", slug: "5" }},
		{ title: {ru: "Решение типичных проблем", uz: "Решение типичных проблем", en: "Solving typical problems", slug: "6" }},
		{ title: {ru: "Занятый порт", uz: "Band port", en: "Busy port", slug: "7" }},
		{ title: {ru: "Блокировка брандмауэром", uz: "Xavfsizlik devori tomonidan bloklangan", en: "Blocked by firewall", slug: "8" }},
		{ title: {ru: "Права доступа", uz: "Kirish huquqlari", en: "Access rights", slug: "9" }},
		{ title: {ru: "Различие терминов", uz: "Atamalardagi farq", en: "Difference in terms", slug: "10" }},
	],
	content: {
		ru: (
			<>	
				<p>Многие начинающие веб-разработчики сталкиваются с понятием «localhost». Оно лежит в основе разработки сайтов, давая возможность протестировать проект на собственном компьютере перед его размещением в сети. Разберёмся подробнее, что означает этот термин и как его правильно использовать.</p>
				<a name="1"></a>
				<h3>
					Основная концепция
				</h3>
				<p>
					«Localhost» — это специальное имя для обращения компьютера к самому себе. Когда пользователь вводит это слово в адресную строку браузера, система понимает: при выполнении запроса нужно вернуться на этот же компьютер. На техническом уровне имя «localhost» связано с особыми сетевыми адресами, которые компьютер использует для самовызова. Самый распространенный из них — 127.0.0.1.
				</p>
				<p>
					Подобные адреса относятся к диапазону «петлевого интерфейса». Этот виртуальный сетевой интерфейс не требует физического подключения к сети. Вся передача информации происходит внутри устройства.
				</p>
				<a name="2"></a>
				<h3>Как функционирует петлевой интерфейс</h3>
				<p>
					При отправке запроса на адрес «127.0.0.1» операционная система сразу возвращает его обратно. Данные не передаются во внешнюю сеть. Этот процесс создает цифровую замкнутую «петлю», которая обеспечивает:
				</p>
				<ul>
					<li>отсутствие задержек при передаче;</li>
					<li>повышенную безопасность работы;</li>
					<li>возможность работы без интернета.</li>
				</ul>
				<p>В Linux и macOS эта технология отображается как сетевое устройство с названием «lo». В Windows функционал изначально работает «под капотом» (на уровне драйверов), скрыто от пользователя, но выполняет абсолютно ту же задачу — замыкает сетевой запрос внутри компьютера.</p>
				<a name="3"></a>
				<h3>Процесс преобразования имён</h3>
				<p>
					Первым и самым главным шагом, который выполняет операционная система, является проверка локального файла с именем hosts. Физически он расположен:
				</p>
				<ul>
					<li>в операционных системах Linux и macOS по пути: «/etc/hosts»;</li>
					<li>в Windows его можно найти в каталоге: «C:\Windows\System32\drivers\etc\hosts»</li>
				</ul>
				<p>
					Изначально, в этом файле прописаны ключевые соответствия, для IPv4 выглядят они так: «127.0.0.1	localhost». А также, для более современного протокола IPv6: «::1      	localhost».
				</p>
				<p>
					Эти строки являются прямыми инструкциями для системы. Они гласят: «все запросы к имени «localhost» немедленно перенаправляй на IP-адрес 127.0.0.1». 
				</p>
				<p>
					Важно понимать, что файл hosts обладает абсолютным приоритетом. Когда компьютер пытается понять, куда ведет то или иное доменное имя, он в первую очередь заглядывает в этот локальный файл. И только если там не находит нужной записи, он обращается к глобальным DNS-серверам в интернете.
				</p>
				<p>
					Этот механизм дает широкие возможности. Например, разработчики могут временно прописать в этом файле запись вида «127.0.0.1 test-site.uz». После этого, даже без подключения к интернету, браузер будет открывать «сайт» с пользовательского локального сервера.
				</p>
				<a name="4"></a>
				<h3>Использование в веб-разработке</h3>
				<p>
					Разработчики активно применяют localhost для создания сайтов. После установки веб-сервера можно открыть браузер и перейти по адресу «http://localhost» для просмотра результатов своего труда.
				</p>
				<p>
					Такой подход дает несколько преимуществ:
				</p>
				<ul>
					<li>быстрое тестирование изменений;</li>
					<li>изолированная среда разработки;</li>
					<li>экономия на хостинге;</li>
					<li>работа в любых условиях.</li>
				</ul>
				<p>
					Локальный хост также используется для проверки сетевых функций через утилиту «ping». Иногда его применяют для размещения игровых серверов на своем компьютере.
				</p>
				<a name="5"></a>
				<h3>Настройка локального сервера</h3>
				<p>
					Для работы с современными сайтами, которые используют базы данных и сложную логику (например, интернет-магазины или соцсети), недостаточно просто открыть HTML-файл в браузере. Для их запуска требуется специальная среда — локальный сервер. Такая программа позволяет превратить компьютер пользователя в мини-версию настоящего веб-сервера, которая умеет выполнять код и работать с данными.
				</p>
				<p>
					Для удобства разработчиков созданы готовые программные пакеты, которые устанавливают всё необходимое одной программой. Среди них можно выделить несколько популярных решений:
				</p>
				<ul>
					<li>Open Server — многофункциональная платформа;</li>
					<li>XAMPP — кроссплатформенное решение;</li>
					<li>Денвер — вариант для начинающих.</li>
				</ul>
				<p>
					Перечисленные программные пакеты содержат веб-сервер, систему управления базами данных и интерпретатор PHP. Для статических сайтов можно использовать встроенные средства Python или Node.js.
				</p>
				<a name="6"></a>
				<h3>Решение типичных проблем</h3>
				<p>
					При работе с локальным сервером иногда возникают ситуации, которые легко и стандартно решаются.
				</p>
				<a name="7"></a>
				<h3>Занятый порт</h3>
				<p>
					Если порт 80 занят другой программой, сервер не запустится. Следует использовать альтернативные порты 8080 или 8888, обращаясь к серверу как «http://localhost:8080».
				</p>
				<a name="8"></a>
				<h3>Блокировка брандмауэром</h3>
				<p>
					Антивирусные программы могут блокировать локальный сервер. Необходимо проверить настройки брандмауэра и разрешить доступ для веб-сервера, либо подтвердить действие во всплывающем окне.
				</p>
				<a name="9"></a>
				<h3>Права доступа</h3>
				<p>
					На Linux/macOS могут потребоваться дополнительные права для доступа к файлам сервера. Решается изменением разрешений через терминал.
				</p>
				<a name="10"></a>
				<h3>Различие терминов</h3>
				<p>
					Хотя термины «localhost» и «127.0.0.1» часто используются как синонимы, между ними есть техническая разница. «localhost» — это имя хоста, а «127.0.0.1» — конкретный IP-адрес.
				</p>
				<p>
					Эту разницу важно понимать при настройках программного обеспечения. При использовании имени системе требуется преобразовать его в адрес. В редких случаях это может приводить к некорректной интерпретации. Поэтому для работы рекомендуется использовать прямой IP «127.0.0.1».
				</p>
				<p>
					Многие специалисты начинали с работы на локальном сервере на своём компьютере. Освоение «localhost» — базовый шаг в изучении веб-разработки. Этот инструмент позволяет создавать и тестировать современные веб-приложения в безопасной и изолированной среде.
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
				<p>Ko'pgina yangi boshlovchi veb-ishlab chiquvchilar "localhost" atamasiga duch kelishadi. Bu veb-sayt ishlab chiqishda juda muhim bo'lib, foydalanuvchilarga loyihani onlayn joylashtirishdan oldin uni o'z kompyuterlarida sinab ko'rish imkonini beradi. Keling, bu atama nimani anglatishini va undan qanday to'g'ri foydalanishni batafsil ko'rib chiqamiz.</p>
				<a name="1"></a>
				<h3>
				Asosiy tushuncha
				</h3>
				<p>
				"Localhost" - bu kompyuter o'zini manzillash uchun foydalanadigan maxsus nom. Foydalanuvchi bu so'zni brauzerning manzil satriga yozganda, tizim foydalanuvchi so'rov yuborayotganda o'sha kompyuterga qaytishi kerakligini tushunadi. Texnik jihatdan, "localhost" nomi kompyuter o'zini o'zi chaqirish uchun foydalanadigan maxsus tarmoq manzillari bilan bog'liq. Ulardan eng keng tarqalgani 127.0.0.1.
				</p>
				<p>
				Bunday manzillar "loopback interfeysi" diapazoniga tegishli. Ushbu virtual tarmoq interfeysi tarmoqqa jismoniy ulanishni talab qilmaydi. Barcha ma'lumotlar uzatish ichki ravishda amalga oshiriladi. </p>
				<a name="2"></a>
				<h3>Loopback interfeysi qanday ishlaydi</h3>
				<p>
				"127.0.0.1" manziliga so'rov yuborilganda, operatsion tizim uni darhol qaytaradi. Tashqi tarmoqqa hech qanday ma'lumot uzatilmaydi. Bu jarayon raqamli yopiq tsiklni yaratadi, bu quyidagilarni ta'minlaydi:
				</p>
				<ul>
				<li>uzatish kechikishlari yo'q;</li>
				<li>xavfsizlikning oshishi;</li>
				<li>oflayn rejimda ishlash imkoniyati.</li>
				</ul>
				<p>Linux va macOS da bu texnologiya "lo" nomli tarmoq qurilmasi sifatida ko'rinadi. Windows da bu funksiya dastlab "qopqoq ostida" (drayver darajasida), foydalanuvchidan yashirin holda ishlaydi, lekin aynan bir xil vazifani bajaradi - kompyuter ichidagi tarmoq so'rovini yopadi.</p>
				<a name="3"></a>
				<h3>Nomni aniqlash jarayoni</h3>
				<p>
				Operatsion tizim bajaradigan birinchi va eng muhim qadam hosts nomli mahalliy faylni tekshirishdir. U jismonan quyidagi manzilda joylashgan:
				</p>
				<ul>
				<li>Linux va macOS operatsion tizimlarida, "/etc/hosts" yo'lida;</li>
				<li>Windowsda uni "C:\Windows\System32\drivers\etc\hosts" katalogida topish mumkin</li>
				</ul>
				<p>
				Dastlab, bu fayl kalit xaritalarini o'z ichiga oladi; IPv4 uchun ular quyidagicha ko'rinadi: "127.0.0.1 localhost." Va zamonaviyroq IPv6 protokoli uchun: "::1 localhost."
				</p>
				<p>
				Bu satrlar tizimga to'g'ridan-to'g'ri ko'rsatmalardir. Ularda shunday deyilgan: "'localhost' nomi uchun barcha so'rovlarni darhol 127.0.0.1 IP manziliga yo'naltiring."
				</p>
				<p>
				Hosts fayli mutlaq ustuvorlikka ega ekanligini tushunish muhimdir. Kompyuter domen nomi qayerga olib borishini aniqlashga harakat qilganda, avval ushbu mahalliy faylni qidiradi. Faqat kerakli yozuvni topa olmasa, u internetdagi global DNS serverlariga murojaat qiladi.
				</p>
				<p>
				Ushbu mexanizm keng imkoniyatlarni taqdim etadi. Masalan, ishlab chiquvchilar vaqtincha ushbu faylga "127.0.0.1 test-site.uz" kabi yozuvni qo'shishlari mumkin. Shundan so'ng, hatto internetga ulanmasdan ham, brauzer foydalanuvchining mahalliy serveridan "sayt"ni ochadi. </p>
				<a name="4"></a>
				<h3>Veb-ishlab chiqishda foydalanish</h3>
				<p>
				Dasturchilar veb-saytlar yaratish uchun localhost-dan faol foydalanadilar. Veb-serverni o'rnatgandan so'ng, siz brauzerni ochib, ishingiz natijalarini ko'rish uchun "http://localhost" ga o'tishingiz mumkin.
				</p>
				<p>
				Ushbu yondashuv bir nechta afzalliklarni taqdim etadi:
				</p>
				<ul>
				<li>o'zgarishlarni tezkor sinovdan o'tkazish;</li>
				<li>izolyatsiya qilingan ishlab chiqish muhiti;</li>
				<li>xostingda tejash;</li>
				<li>har qanday sharoitda ishlaydi.</li>
				</ul>
				<p>
				Localhost shuningdek, "ping" yordamchi dasturi yordamida tarmoq funksiyalarini sinab ko'rish uchun ham ishlatiladi. Ba'zan u o'z kompyuteringizda o'yin serverlarini joylashtirish uchun ishlatiladi.
				</p>
				<a name="5"></a>
				<h3>Mahalliy serverni sozlash</h3>
				<p>
				Ma'lumotlar bazalari va murakkab mantiqdan foydalanadigan zamonaviy veb-saytlar (masalan, onlayn-do'konlar yoki ijtimoiy tarmoqlar) bilan ishlash uchun brauzerda HTML faylini ochishning o'zi yetarli emas. Ularni ishga tushirish uchun maxsus muhit - mahalliy server kerak. Ushbu dastur foydalanuvchi kompyuterini kodni bajarish va ma'lumotlar bilan ishlashga qodir bo'lgan haqiqiy veb-serverning miniatyura versiyasiga aylantiradi.
				</p>
				<p>
				Dasturchilarning qulayligi uchun barcha kerakli narsalarni bitta dasturga o'rnatadigan tayyor dasturiy ta'minot paketlari yaratilgan. Ular orasida bir nechta mashhur yechimlar ajralib turadi:
				</p>
				<ul>
				<li>Open Server - ko'p funksiyali platforma;</li>
				<li>XAMPP - platformalararo yechim;</li>
				<li>Denver - yangi boshlanuvchilar uchun variant.</li>
				</ul>
				<p>
				Ushbu dasturiy ta'minot paketlariga veb-server, ma'lumotlar bazasini boshqarish tizimi va PHP tarjimoni kiradi. Statik veb-saytlar uchun siz o'rnatilgan Python yoki Node.js vositalaridan foydalanishingiz mumkin.
				</p>
				<a name="6"></a>
				<h3>Keng tarqalgan muammolarni hal qilish</h3>
				<p>
				Mahalliy server bilan ishlashda ba'zan oson va standart tarzda hal qilinadigan vaziyatlar yuzaga keladi.
				</p>
				<a name="7"></a>
				<h3>Band port</h3>
				<p>
				Agar 80-port boshqa dastur tomonidan band bo'lsa, server ishga tushmaydi. Serverga "http://localhost:8080" nomi bilan kirib, 8080 yoki 8888 muqobil portlaridan foydalaning.
				</p>
				<a name="8"></a>
				<h3>Xavfsizlik devorini bloklash</h3>
				<p>
				Antivirus dasturlari mahalliy serverni bloklayotgan bo'lishi mumkin. Xavfsizlik devori sozlamalarini tekshiring va veb-serverga kirishga ruxsat bering yoki qalqib chiquvchi oynada harakatni tasdiqlang. </p>
				<a name="9"></a>
				<h3>Kirish ruxsatnomalari</h3>
				<p>
				Linux/macOS da server fayllariga kirish uchun qo'shimcha ruxsatnomalar talab qilinishi mumkin. Buni terminaldagi ruxsatnomalarni o'zgartirish orqali hal qilish mumkin.
				</p>
				<a name="10"></a>
				<h3>Terminologiyadagi farqlar</h3>
				<p>
				"localhost" va "127.0.0.1" atamalari ko'pincha bir-birining o'rnida ishlatilsa-da, ular o'rtasida texnik farq mavjud. "localhost" - bu xost nomi, "127.0.0.1" esa ma'lum bir IP-manzil.
				</p>
				<p>
				Dasturiy ta'minotni sozlashda bu farqni tushunish muhimdir. Nomdan foydalanganda tizim uni manzilga o'zgartirishi kerak. Kamdan-kam hollarda, bu noto'g'ri talqin qilinishiga olib kelishi mumkin. Shuning uchun, ish uchun "127.0.0.1" to'g'ridan-to'g'ri IP-manzilidan foydalanish tavsiya etiladi. </p>
				<p>
				Ko'pgina mutaxassislar o'z kompyuterlarida mahalliy serverda ishlashni boshladilar. "Localhost" ni o'zlashtirish veb-ishlab chiqishni o'rganishda asosiy qadamdir. Ushbu vosita sizga zamonaviy veb-ilovalarni xavfsiz va izolyatsiya qilingan muhitda yaratish va sinovdan o'tkazish imkonini beradi.
				</p>
			</>
		),
		en: (
			<>
				<p>Many beginning web developers encounter the term "localhost." It's fundamental to website development, allowing users to test a project on their own computer before deploying it online. Let's take a closer look at what this term means and how to use it correctly.</p>
				<a name="1"></a>
				<h3>
				Basic Concept
				</h3>
				<p>
				"Localhost" is a special name a computer uses to address itself. When a user types this word into the browser's address bar, the system understands that the user should return to this same computer when making a request. Technically, the name "localhost" is associated with special network addresses that a computer uses to call itself. The most common of these is 127.0.0.1.
				</p>
				<p>
				Such addresses belong to the "loopback interface" range. This virtual network interface does not require a physical connection to the network. All information transfer occurs internally. </p>
				<a name="2"></a>
				<h3>How the loopback interface works</h3>
				<p>
				When a request is sent to the address "127.0.0.1," the operating system immediately returns it. No data is transmitted to the external network. This process creates a digital closed loop, which provides:
				</p>
				<ul>
				<li>no transmission delays;</li>
				<li>increased security;</li>
				<li>the ability to work offline.</li>
				</ul>
				<p>In Linux and macOS, this technology appears as a network device named "lo." In Windows, this functionality initially operates "under the hood" (at the driver level), hidden from the user, but performs exactly the same task—closing the network request within the computer.</p>
				<a name="3"></a>
				<h3>Name Resolution Process</h3>
				<p>
				The first and most important step the operating system performs is checking the local file named hosts. It is physically located:
				</p>
				<ul>
				<li>on Linux and macOS operating systems, at the path: "/etc/hosts";</li>
				<li>on Windows, it can be found in the directory: "C:\Windows\System32\drivers\etc\hosts"</li>
				</ul>
				<p>
				Initially, this file contains key mappings; for IPv4, they look like this: "127.0.0.1 localhost." And for the more modern IPv6 protocol: "::1 localhost."
				</p>
				<p>
				These lines are direct instructions to the system. They state: "Immediately redirect all requests for the name 'localhost' to the IP address 127.0.0.1."
				</p>
				<p>
				It's important to understand that the hosts file has absolute priority. When a computer tries to figure out where a domain name leads, it first looks in this local file. Only if it doesn't find the required entry there does it turn to global DNS servers on the internet.
				</p>
				<p>
				This mechanism offers a wide range of possibilities. For example, developers can temporarily add an entry like "127.0.0.1 test-site.uz" to this file. After that, even without an internet connection, the browser will open the "site" from the user's local server. </p>
				<a name="4"></a>
				<h3>Use in Web Development</h3>
				<p>
				Developers actively use localhost to create websites. After installing a web server, you can open a browser and navigate to "http://localhost" to view the results of your work.
				</p>
				<p>
				This approach offers several advantages:
				</p>
				<ul>
				<li>quick testing of changes;</li>
				<li>isolated development environment;</li>
				<li>savings on hosting;</li>
				<li>works in any conditions.</li>
				</ul>
				<p>
				Localhost is also used to test network functions using the "ping" utility. It is sometimes used to host game servers on your own computer.
				</p>
				<a name="5"></a>
				<h3>Setting Up a Local Server</h3>
				<p>
				To work with modern websites that use databases and complex logic (for example, online stores or social networks), simply opening an HTML file in a browser is not enough. Running them requires a special environment—a local server. This program turns the user's computer into a miniature version of a real web server, capable of executing code and working with data.
				</p>
				<p>
				For the convenience of developers, ready-made software packages have been created that install everything needed in a single program. Among these, several popular solutions stand out:
				</p>
				<ul>
				<li>Open Server—a multifunctional platform;</li>
				<li>XAMPP—a cross-platform solution;</li>
				<li>Denver—an option for beginners.</li>
				</ul>
				<p>
				These software packages include a web server, a database management system, and a PHP interpreter. For static websites, you can use built-in Python or Node.js tools.
				</p>
				<a name="6"></a>
				<h3>Solving Common Problems</h3>
				<p>
				When working with a local server, sometimes situations arise that are easily and standardly resolved.
				</p>
				<a name="7"></a>
				<h3>Busy Port</h3>
				<p>
				If port 80 is occupied by another program, the server will not start. Use alternative ports 8080 or 8888, accessing the server as "http://localhost:8080".
				</p>
				<a name="8"></a>
				<h3>Firewall Blocking</h3>
				<p>
				Antivirus programs may be blocking the local server. Check your firewall settings and allow access for the web server, or confirm the action in the pop-up window. </p>
				<a name="9"></a>
				<h3>Access Permissions</h3>
				<p>
				On Linux/macOS, additional permissions may be required to access server files. This can be resolved by changing permissions in the terminal.
				</p>
				<a name="10"></a>
				<h3>Terminology Differences</h3>
				<p>
				While the terms "localhost" and "127.0.0.1" are often used interchangeably, there is a technical difference between them. "localhost" is a hostname, while "127.0.0.1" is a specific IP address.
				</p>
				<p>
				It's important to understand this difference when configuring software. When using a name, the system must convert it to an address. In rare cases, this can lead to incorrect interpretation. Therefore, it is recommended to use the direct IP address "127.0.0.1" for work. </p>
				<p>
				Many professionals started working on a local server on their own computer. Mastering "localhost" is a basic step in learning web development. This tool allows you to create and test modern web applications in a secure and isolated environment.
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
