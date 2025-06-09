import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Ошибка 403 Forbidden: что это значит",
		uz: "Xato 403 Taqiqlangan: bu nimani anglatadi",
		en: "Error 403 Forbidden: What does it mean",
	},
	title: {
		ru: "Ошибка 403 Forbidden — что это значит и как исправить",
		uz: "Xato 403 Taqiqlangan - bu nimani anglatadi va uni qanday tuzatish kerak",
		en: "Error 403 Forbidden - What Does It Mean and How to Fix It",
	},
	desc: {
		ru: "Ошибка 403 Forbidden — запрет доступа к веб-странице или ресурсу 🚫 Узнайте, что означает ошибка 403, почему она возникает и как решить эту проблему на стороне пользователя и администратора.",
		uz: "403-xato Taqiqlangan - veb-sahifa yoki manbaga kirish taqiqlangan 🚫 403-xato nimani anglatishini, nima uchun paydo bo'lishini va ushbu muammoni foydalanuvchi va administrator tomonidan qanday hal qilishni bilib oling.",
		en: "Error 403 Forbidden - access to a web page or resource is prohibited 🚫 Find out what error 403 means, why it occurs and how to solve this problem on the user and administrator side.",
	},
	date: "10.10.2024",
	updated: "10.10.2024",
	read: "3",
	view: "12",
	img: "/blog/403.webp",
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
		{ title: {ru: "Ошибка 403: понятие, особенности, методы исправления", uz: "Xato 403: tushunchasi, xususiyatlari, tuzatish usullari", en: "Error 403: concept, features, methods of correction", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Umumiy tushuncha", en: "General concept", slug: "2" }},
		{ title: {ru: "Вероятные причины", uz: "Mumkin sabablar", en: "Probable causes", slug: "3" }},
		{ title: {ru: "Сбои на стороне пользователя", uz: "Foydalanuvchi tomonidagi nosozliklar", en: "Failures on the user side", slug: "4" }},
		{ title: {ru: "Сбои на стороне администратора сайта", uz: "Sayt administratori tomonidagi nosozliklar", en: "Failures on the site administrator side", slug: "5" }},
		{ title: {ru: "Сбои на стороне провайдера", uz: "Provayder tomonidagi muvaffaqiyatsizliklar", en: "Failures on the provider side", slug: "6" }},
		{ title: {ru: "Как устранить сбой?", uz: "Avariyani qanday tuzatish mumkin?", en: "How to fix the failure?", slug: "7" }},
		{ title: {ru: "Инструкции для пользователя", uz: "Foydalanuvchi ko'rsatmalari", en: "Instructions for the user", slug: "8" }},
		{ title: {ru: "Инструкции для администратора", uz: "Administrator uchun ko'rsatmalar", en: "Instructions for the administrator", slug: "9" }},
		{ title: {ru: "Меры профилактики", uz: "Profilaktik choralar", en: "Preventive measures", slug: "10" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Ошибка 403: понятие, особенности, методы исправления
				</h3>
				<p>
					Путешествие по интернет-просторам – это не только изучение полезной информации, чтение интересных статей и просмотр развлекательных видео. Зачастую пользователю приходится сталкиваться с неприятностями. Одна из них – ошибка сервера 403 forbidden. Почему она появляется? Что скрывается за ее кодовым обозначением? Какие действия нужно выполнить для устранения?
				</p>
				<a name="2"></a>
				<h3>Общее понятие</h3>
				<p>
					Код 403 forbidden – это ответ сервера, показывающий, что пользователь не имеет прав доступа к определенному сетевому ресурсу. Причин такого ответа множество, устранение возможно исключительно после разбора конкретной ситуации, универсальные инструкции отсутствуют.
				</p>
				<p>
					Нужно отметить, что указанная ошибка, в целом, не слишком серьезна. Бывает, что она носит временный характер, исчезает сама по себе, не требуя дополнительных манипуляций, в других случаях – требуются простейшие действия, корректировки настроек.
				</p>
				<a name="3"></a>
				<h3>Вероятные причины</h3>
				<p>
					В идеале, ошибка сервера 403 forbidden должна появляться только в том случае, если доступ к сетевому ресурсу пытается получить пользователь, не обладающий соответствующими правами. Реальность, к сожалению, далека от идеала, а потому список возможных причин сбоя гораздо шире, включает следующие категории:
				</p>
				<ul>
					<li>Некорректная работа пользовательского устройства;</li>
					<li>Некорректная настройка компонентов сетевого ресурса;</li>
					<li>Ограничения, установленные организацией, предоставляющей услуги сетевого доступа.</li>
				</ul>
				<p>
					Каждая из перечисленных категорий требует более детального изучения.
				</p>
				<a name="4"></a>
				<h3>Сбои на стороне пользователя</h3>
				<p>
					Как уже было отмечено, “эталонный” сценарий отображения ошибки – реакция сервера на действия посетителя, который не имеет права просматривать определенные страницы, сайты, файлы, размещенные на них. Таковыми могут быть, например, служебные страницы, доступные исключительно администраторам. Также вероятны следующие причины:
				</p>
				<ul>
					<li>Отсутствие авторизации, аутентификации, авторизации. Некоторые сайты “согласны” работать исключительно с зарегистрированными, авторизованными посетителями, указавшими минимальный набор личных данных, выполнившими вход через имя и пароль. Для незарегистрированных клиентов они закрыты.</li>
					<li>Некорректный ввод адреса страницы. Ошибки, как правило, кроются в мелочах, так что нужно внимательно изучить ссылку – нет ли в ней лишнего символа.</li>
					<li>Работа антивирусных приложений, брандмауэров. Возможно, что антивирус, установленный на пользовательском компьютере или смартфоне, считает сайт подозрительным и блокирует переход.</li>
					<li>Некорректная работа устройства, с которого выполняется вход. Устаревшие cookies-файлы, перегруженный кэш, ограничения передачи данных по мобильной сети или активация режима экономии трафика, что актуально для смартфонов – вариантов множество.</li>
				</ul>
				<a name="5"></a>
				<h3>Сбои на стороне администратора сайта</h3>
				<p>
					В данном случае ошибка 403 появляется по следующим причинам:
				</p>
				<ul>
					<li>Отсутствие, неправильное написание имени индексного файла. Как правило, речь идет о файле “index” с расширением php или html.</li>
					<li>Некорректное размещение файлов сетевого ресурса. Они должны находиться в корневой папке, иные варианты исключают возможность прямого доступа к ним веб-сервера, что приводит к отображению ошибки.</li>
					<li>Неправильная настройка прав доступа к директориям и файлам, из-за чего сервер не может взаимодействовать с ними.</li>
					<li>Некорректная работа плагинов и расширений. Это особенно актуально для сайтов, созданных на популярной платформе WordPress. Администратору нужно внимательно относиться к поиску расширений, своевременно обновлять, переустанавливать их.</li>
					<li>Использование неподходящих редакций PHP и других инструментов, необходимых для настройки, управления сайтом. Версии могут быть устаревшими, либо несовместимыми с ПО, установленным на сервере.</li>
				</ul>
				<a name="6"></a>
				<h3>Сбои на стороне провайдера</h3>
				<p>
					В этой категории, к появлению 403 ошибки приводит следующее:
				</p>
				<ul>
					<li>Прекращение обслуживания сетевого ресурса. Например, провайдер может заблокировать доступ из-за невыполнения владельцем сайта своих обязательств, отсутствия своевременной оплаты, размещения контента, нарушающего авторские права.</li>
					<li>Несвоевременное обновление кэша DNS-сервера. Ошибка 403 появляется в случае недавнего переезда сетевого ресурса на новый адрес, если DNS-сервер продолжает использовать старую информацию из кэша.</li>
					<li>Технические сбои. Выход из строя основного серверного оборудования, обрывы коммуникационных линий, некорректная работа программного обеспечения.</li>
					<li>Географические ограничения. Некоторые сайты недоступны для пользователей из определенных стран.</li>
				</ul>
				<a name="7"></a>
				<h3>Как устранить сбой?</h3>
				<p>
					Алгоритм устранения ошибки определяется причинами, которые привели к ее возникновению. Наиболее распространенные ситуации нужно рассмотреть детально.
				</p>
				<a name="8"></a>
				<h3>Инструкции для пользователя</h3>
				<p>
					Пользователю, столкнувшемуся с проблемой, нужно проделать следующее:
				</p>
				<ul>
					<li>Проверить права доступа. Вполне вероятно, что для перехода на искомый сайт или страницу достаточно пройти авторизацию или зарегистрироваться, потратив на это несколько секунд. В редких случаях приходится писать администратору сайта, чтобы он снял блокировку, выданную по ошибке, либо обозначил невозможность этого действия, объяснив причину.</li>
					<li>Почистить кэш и cookies. Делается это через настройки браузера.</li>
					<li>Проверить настройки браузера. Не лишне установить последнюю версию ПО, убедиться, что сайт по ошибке не оказался в списке блокировки.</li>
					<li>Отключить или, наоборот, активировать VPN.</li>
					<li>Проверить правильность написания искомой страницы. Возможно, в адресной строке оказалась лишняя скобка, незаметный знак препинания.</li>
					<li>Попробовать другое устройство. Сайт не открывается с ноутбука? Стоит попытаться выполнить вход со смартфона.</li>
					<li>Позвонить провайдеру. Возможно, организация, предоставляющая услуги сетевого доступа, знает, с чем связана ошибка 403, и уже принимает комплекс мер, направленных на ее скорейшее устранение.</li>
					<li>Проверить антивирус. Возможно, сайт оказался в списках блокировки. При уверенности в безопасности нужно удалить его.</li>
					<li>Подключиться через другую сеть. Если сайт не открывается через домашний Wi-Fi, можно попытаться зайти через одну из публичных сетей, либо через мобильную сеть смартфона.</li>
				</ul>
				<a name="9"></a>
				<h3>Инструкции для администратора</h3>
				<p>
					Если сбой 403 forbidden связан не с пользовательской, а с администраторской стороной, то помогут следующие действия:
				</p>
				<ul>
					<li>Проверка правильности настроек серверных прав доступа. У каждой группы пользователей должны быть свои права, будь то чтение, изменение страниц, загрузка новых файлов, размещение новостей, фотографий, видео и другого контента.</li>
					<li>Проверка правильности основных настроек сервера. Если в конфигурацию закрались ошибки, с доступом неминуемо возникнут сложности. В первую очередь нужно тщательно изучить файлы с расширением “.htaccess”, именно они отвечают за доступ в определенные зоны сетевого ресурса.</li>
					<li>Проверка правильности работы защитных алгоритмов и программ. Бывает, что они автоматически переходят в самый жесткий режим, исключающий посторонний доступ, в таком случае – достаточно “откатиться” к настройкам по умолчанию, более лояльным.</li>
					<li>Анализ логов веб-сервера. Опытный администратор, изучив журналы, легко сможет определить события, косвенно или напрямую повлиявшие на возникновение ошибок.</li>
					<li>Отключение плагинов WordPress. Возможно, вновь установленные плагины несовместимы с сайтом и мешают его нормальной работе. Проблема актуальна и при несвоевременности обновлений.</li>
					<li>Перенос файлов сайта в корневые директории. При ином размещении они оказываются недоступными.</li>
				</ul>
				<a name="10"></a>
				<h3>Меры профилактики</h3>
				<p>
					Любую ошибку, как известно, проще предотвратить, нежели в спешке устранять причины, спровоцировавшие ее возникновение. Администраторам, желающим защитить посетителей и пользователей сайта от неприятной надписи “forbidden”, следует придерживаться следующих принципов:
				</p>
				<ul>
					<li>Точная настройка прав доступа. Это основа корректной работы сетевого ресурса. Нужно провести проверки всех файлов, директорий и каталогов, убедиться в правильности разрешений. У каждого пользователя, будь то простой посетитель, маркетолог или владелец, должны быть определенные права.</li>
					<li>Правильное конфигурирование файла c разрешением “.htaccess”. Именно в нем сохранены базовые принципы, в соответствии с которыми осуществляется доступ. Ошибочное указание директив приводит к тому, что недоступным оказывается или весь сетевой ресурс целиком, или отдельные его категории, страницы. Директивы файла должны соответствовать специфике сайта, особенностям его использования.</li>
					<li>Исключение блокировок по IP-адресам. Такой способ ограничения доступа – эффективная мера защиты, однако, слишком увлекаться им не стоит. Неправильное применение приводит к тому, что ошибка 403 forbidden появляется даже при попытке захода на сайт легального, проверенного пользователя. Нужно убедиться, что доступ с корректных IP-адресов не заблокирован, сетевые экраны, антивирусы и другие приложения, обеспечивающие безопасность сетевого ресурса, функционируют корректно.</li>
				</ul>
				<p>
					Конечно, администраторам нужно своевременно обновлять серверное программное обеспечение. Такой подход не только исключит опасность появления 403 ошибки, но и гарантирует безопасность, исключит лишние риски и уязвимости. Практика показывает, что отсутствие даже одного обновления, которое не выглядит важным и значимым, приводит к серьезным ошибкам.
				</p>
				<p>
					Ответственный подход администраторов не просто исключает появление ошибок, но положительно сказывается на общем восприятии сайта пользователями, способствует росту его посещаемости, привлекательности для рекламодателей.
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
				Xato 403: tushunchasi, xususiyatlari, tuzatish usullari
				</h3>
				<p>
				Internet orqali sayohat qilish nafaqat foydali ma'lumotlarni o'rganish, qiziqarli maqolalarni o'qish va qiziqarli videolarni tomosha qilishdir. Ko'pincha foydalanuvchi muammolarga duch kelishi kerak. Ulardan biri 403 taqiqlangan server xatosi. Nima uchun paydo bo'ladi? Uning kod belgisi ortida nima yashiringan? Buni tuzatish uchun qanday choralar ko'rish kerak? 
				</p>
				<a name="2"></a>
				<h3>Umumiy tushuncha</h3>
				<p>
				403 taqiqlangan kod foydalanuvchining ma'lum bir tarmoq resursiga kirish huquqiga ega emasligini ko'rsatadigan server javobidir. Bunday javob uchun juda ko'p sabablar bor va yo'q qilish faqat aniq vaziyatni tahlil qilgandan keyin mumkin; universal ko'rsatmalar mavjud emas. 
				</p>
				<p>
				Shuni ta'kidlash kerakki, ko'rib chiqilayotgan xato, umuman olganda, unchalik jiddiy emas. Ba'zan u vaqtinchalik va hech qanday qo'shimcha manipulyatsiyani talab qilmasdan, o'z-o'zidan yo'qoladi; boshqa hollarda oddiy harakatlar va sozlamalarni o'zgartirish talab qilinadi. 
				</p>
				<a name="3"></a>
				<h3>Ehtimoliy sabablar</h3>
				<p>
				Ideal holda, 403 taqiqlangan server xatosi faqat tegishli huquqlarga ega bo'lmagan foydalanuvchi tarmoq resursiga kirishga harakat qilsa paydo bo'lishi kerak. Haqiqat, afsuski, idealdan uzoqdir va shuning uchun muvaffaqiyatsizlikning mumkin bo'lgan sabablari ro'yxati ancha kengroq va quyidagi toifalarni o'z ichiga oladi:
				</p>
				<ul>
				<li>Foydalanuvchi qurilmasining noto'g'ri ishlashi;</li>
				<li>Tarmoq resurslari komponentlarining noto'g'ri konfiguratsiyasi;</li>
				<li>Tarmoqqa kirish xizmatlarini taqdim etuvchi tashkilot tomonidan o'rnatilgan cheklovlar.</li>
				</ul>
				<p>
				Ro'yxatdagi toifalarning har biri batafsilroq o'rganishni talab qiladi. 
				</p>
				<a name="4"></a>
				<h3>Foydalanuvchi tomonidagi nosozliklar</h3>
				<p>
				Yuqorida ta'kidlab o'tilganidek, xatoni ko'rsatishning "standart" stsenariysi serverning ma'lum sahifalarni, saytlarni yoki ulardagi fayllarni ko'rish huquqiga ega bo'lmagan tashrif buyuruvchining harakatlariga javobidir. Bu, masalan, faqat ma'murlar foydalanishi mumkin bo'lgan xizmat sahifalari bo'lishi mumkin. Quyidagi sabablar ham mumkin:
				</p>
				<ul>
				<li>Avtorizatsiya, autentifikatsiya, avtorizatsiya yo'qligi. Ba'zi saytlar faqat shaxsiy ma'lumotlarning minimal to'plamini taqdim etgan va ism va parol yordamida tizimga kirgan ro'yxatdan o'tgan, vakolatli tashrif buyuruvchilar bilan ishlashga "rozi". Ular roʻyxatdan oʻtmagan mijozlar uchun yopiq.</li>
				<li>Sahifa manzili noto‘g‘ri kiritildi. Xatolar odatda tafsilotlarda yashirinadi, shuning uchun havolani diqqat bilan o‘rganib chiqib, unda qo‘shimcha belgi bor-yo‘qligini bilishingiz kerak.</li>
				<li>Antivirus dasturlari, xavfsizlik devorlarining ishlashi. Ehtimol, foydalanuvchining kompyuterida yoki smartfonida o‘rnatilgan antivirus saytni shubhali deb hisoblab, o‘tishni bloklaydi.</li>
				<li>Siz tizimga kirgan qurilma toʻgʻri ishlamayapti. Eskirgan cookie fayllari, haddan tashqari yuklangan kesh, mobil maʼlumotlarni uzatish cheklovlari yoki smartfonlar uchun dolzarb boʻlgan trafikni tejash rejimini faollashtirish – koʻp variantlar mavjud.</li>
				</ul>
				<a name="5"></a>
				<h3>Sayt administratori tomonidagi nosozliklar</h3>
				<p>
				Bunday holda, 403 xatosi quyidagi sabablarga ko'ra paydo bo'ladi:
				</p>
				<ul>
				<li>Indeks fayl nomi etishmayotgan yoki noto'g'ri yozilgan. Odatda, biz php yoki html kengaytmali “indeks” fayli haqida bormoqda.</li>
				<li>Tarmoq resurs fayllarini noto'g'ri joylashtirish. Ular ildiz papkasida joylashgan boʻlishi kerak, aks holda veb-server ularga toʻgʻridan-toʻgʻri kira olmaydi, natijada xatolik koʻrsatiladi.</li>
				<li>Kataloglar va fayllarga kirish huquqi notoʻgʻri sozlangan, shu sababli server ular bilan oʻzaro aloqada boʻla olmaydi.</li>
				<li>Plaginlar va kengaytmalarning noto'g'ri ishlashi. Bu, ayniqsa, mashhur WordPress platformasida yaratilgan saytlar uchun to'g'ri keladi. Administrator kengaytmalarni qidirishda ehtiyot bo‘lishi, ularni o‘z vaqtida yangilab turishi va qayta o‘rnatishi kerak.</li>
				<li>Nomaqbul PHP nashrlari va saytni sozlash va boshqarish uchun zarur bo'lgan boshqa vositalardan foydalanish. Versiyalar eskirgan yoki serverda oʻrnatilgan dasturiy taʼminotga mos kelmasligi mumkin.</li>
				</ul>
				<a name="6"></a>
				<h3>Provayder tomonidagi nosozliklar</h3>
				<p>
				Ushbu turkumda quyidagi 403 xatolik paydo bo'lishiga olib keladi:
				</p>
				<ul>
				<li>Tarmoq resurslari xizmatini tugatish. Masalan, provayder sayt egasi o‘z majburiyatlarini bajarmaganligi, to‘lovni o‘z vaqtida olmagani yoki mualliflik huquqini buzuvchi kontentni joylashtirgani uchun kirishni bloklashi mumkin.</li>
				<li>DNS server keshi o'z vaqtida yangilanmagan. 403-xato, agar DNS-server keshdagi eski ma'lumotlardan foydalanishda davom etsa, tarmoq resursi yaqinda yangi manzilga ko'chirilganda paydo bo'ladi.</li>
				<li>Texnik nosozliklar. Asosiy server uskunasining ishdan chiqishi, aloqa liniyalaridagi uzilishlar, dasturiy ta'minotning noto'g'ri ishlashi.</li>
				<li>Geografik cheklovlar. Ayrim saytlar ayrim mamlakatlardagi foydalanuvchilar uchun mavjud emas.</li>
				</ul>
				<a name="7"></a>
				<h3>Avariyani qanday tuzatish mumkin?</h3>
				<p>
				Xatoni bartaraf etish algoritmi uning paydo bo'lishiga sabab bo'lgan sabablar bilan belgilanadi. Eng keng tarqalgan vaziyatlarni batafsil ko'rib chiqish kerak. 
				</p>
				<a name="8"></a>
				<h3>Foydalanuvchi ko'rsatmalari</h3>
				<p>
				Muammoga duch kelgan foydalanuvchi quyidagilarni bajarishi kerak:
				</p>
				<ul>
				<li>Kirish huquqlarini tekshiring. Kerakli sayt yoki sahifaga o'tish uchun unga bir necha soniya vaqt sarflab, tizimga kirish yoki ro'yxatdan o'tish kifoya. Kamdan kam hollarda siz sayt administratoriga xat yozishingiz kerak bo'ladi, shunda u noto'g'ri berilgan blokni olib tashlaydi yoki bu harakatni amalga oshirish mumkin emasligini ko'rsatib, sababini tushuntiradi.</li>
				<li>Keshni va cookie-fayllarni tozalash. Bu brauzer sozlamalari orqali amalga oshiriladi.</li>
				<li>Brauzer sozlamalarini tekshiring. Dasturiy ta'minotning so'nggi versiyasini o'rnatib, sayt tasodifan bloklanganlar ro'yxatiga tushmaganiga ishonch hosil qilish yaxshi bo'lardi.</li>
				<li>VPNni o'chiring yoki aksincha faollashtiring.</li>
				<li>Izlayotgan sahifaning imlosini tekshiring. Ehtimol, manzillar qatorida qo‘shimcha qavs yoki sezilmaydigan tinish belgisi bordir.</li>
				<li>Boshqa qurilmani sinab ko'ring. Sayt noutbukdan ochilmaydimi? Smartfoningizdan tizimga kirishga urinib ko'ring.</li>
				<li>Provayderingizga qo'ng'iroq qiling. Ehtimol, tarmoqqa kirish xizmatlarini taqdim etuvchi tashkilot 403 xatosi nima bilan bog'liqligini biladi va uni tezda bartaraf etishga qaratilgan chora-tadbirlar to'plamini allaqachon amalga oshirmoqda.</li>
				<li>Antivirusingizni tekshiring. Sayt bloklangan bo'lishi mumkin. Agar uning xavfsiz ekanligiga ishonchingiz komil bo'lsa, uni o'chiring.</li>
				<li>Boshqa tarmoq orqali ulaning. Agar sayt uy Wi-Fi orqali ochilmasa, unga umumiy tarmoqlardan biri yoki smartfoningizning mobil tarmog'i orqali kirishga urinib ko'rishingiz mumkin.</li>
				</ul>
				<a name="9"></a>
				<h3>Administrator ko'rsatmalari</h3>
				<p>
				Agar 403 taqiqlangan xato foydalanuvchi tomoni bilan emas, balki administrator tomoni bilan bog'liq bo'lsa, unda quyidagi qadamlar yordam beradi:
				</p>
				<ul>
				<li>Serverga kirish huquqi sozlamalari toʻgʻriligini tekshirish. Har bir foydalanuvchi guruhi oʻqish, sahifalarni oʻzgartirish, yangi fayllarni yuklash, yangiliklar, fotosuratlar, videolar va boshqa kontentni joylashtirish kabi oʻz huquqlariga ega boʻlishi kerak.</li>
				<li>Asosiy server sozlamalari toʻgʻriligini tekshirish. Agar konfiguratsiyada xatolar bo'lsa, kirishda qiyinchiliklar muqarrar ravishda paydo bo'ladi. Avvalo, ".htaccess" kengaytmali fayllarni diqqat bilan o'rganishingiz kerak, ular tarmoq resursining ma'lum sohalariga kirish uchun javobgardir.</li>
				<li>Xavfsizlik algoritmlari va dasturlarining to'g'ri ishlashini tekshirish. Ruxsatsiz kirishni istisno qilgan holda, ular avtomatik ravishda eng og'ir rejimga o'tadilar, bu holda yumshoqroq bo'lgan standart sozlamalarga "orqaga qaytish" kifoya qiladi.</li>
				<li>Veb-server jurnallarini tahlil qilish. Tajribali administrator jurnallarni oʻrganib chiqib, xatolar yuzaga kelishiga bilvosita yoki bevosita taʼsir qilgan voqealarni osongina aniqlashi mumkin.</li>
				<li>WordPress plaginlarini o'chirish. Yangi o'rnatilgan plaginlar saytga mos kelmasligi va uning normal ishlashiga xalaqit berishi mumkin. Muammo yangilanishlar o'z vaqtida bo'lmasa ham dolzarbdir.</li>
				<li>Sayt fayllarini ildiz kataloglariga ko'chirish. Agar boshqacha joylashtirilsa, ular o'tib bo'lmaydi.</li>
				</ul>
				<a name="10"></a>
				<h3>Profilaktik choralar</h3>
				<p>
				Ma'lumki, har qanday xatoning paydo bo'lishiga sabab bo'lgan sabablarni tezda bartaraf etishdan ko'ra uning oldini olish osonroqdir. Saytga tashrif buyuruvchilar va foydalanuvchilarni yoqimsiz "taqiqlangan" xabardan himoya qilishni istagan ma'murlar quyidagi tamoyillarga amal qilishlari kerak:
				</p>
				<ul>
				<li>Kirish huquqlarini aniq sozlash. Bu tarmoq resursining to'g'ri ishlashi uchun asosdir. Ruxsatlarning to'g'ri ekanligiga ishonch hosil qilish uchun barcha fayllarni, kataloglarni va kataloglarni tekshirish kerak. Har bir foydalanuvchi, xoh oddiy tashrifchi, xoh marketolog yoki xoh mulk egasi, ma'lum huquqlarga ega bo'lishi kerak.</li>
				<li>".htaccess" ruxsati bilan faylni to'g'ri konfiguratsiya qilish. Unda kirish amalga oshiriladigan asosiy tamoyillar saqlanib qolgan. Noto'g'ri belgilangan direktivalar butun tarmoq resursi yoki alohida toifalar yoki sahifalar mavjud bo'lmasligiga olib keladi. Fayl direktivalari saytning o'ziga xos xususiyatlariga va undan foydalanish xususiyatlariga mos kelishi kerak.</li>
				<li>IP manzillar bo'yicha bloklash bundan mustasno. Kirishni cheklashning bu usuli samarali xavfsizlik chorasi hisoblanadi, lekin siz u bilan o'zingizni bezovta qilmasligingiz kerak. Noto'g'ri foydalanish 403 ta taqiqlangan xatoga olib keladi, hatto qonuniy, tasdiqlangan foydalanuvchi saytga kirishga harakat qilganda ham paydo bo'ladi. To'g'ri IP manzillardan kirish bloklanmaganligiga, tarmoq resursi xavfsizligini ta'minlaydigan xavfsizlik devorlari, antiviruslar va boshqa ilovalar to'g'ri ishlashiga ishonch hosil qilishingiz kerak.</li>
				</ul>
				<p>
				Albatta, ma'murlar server dasturlarini yangilab turishlari kerak. Ushbu yondashuv nafaqat 403 xatolik xavfini bartaraf qiladi, balki xavfsizlikni kafolatlaydi va keraksiz xavf va zaifliklarni yo'q qiladi. Tajriba shuni ko'rsatadiki, hatto muhim va ahamiyatli bo'lmagan bir yangilanishning yo'qligi jiddiy xatolarga olib keladi. 
				</p>
				<p>
				Administratorlarning mas'uliyatli yondashuvi nafaqat xatolar yuzaga kelishini bartaraf qiladi, balki foydalanuvchilar tomonidan saytni umumiy qabul qilishiga ijobiy ta'sir ko'rsatadi, uning trafigining o'sishiga va reklama beruvchilar uchun jozibadorligiga hissa qo'shadi. 
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				Error 403: concept, features, methods of correction
				</h3>
				<p>
				Traveling through the Internet is not only studying useful information, reading interesting articles and watching entertaining videos. Often, the user has to deal with troubles. One of them is the server error 403 forbidden. Why does it appear? What is hidden behind its code designation? What actions should be taken to eliminate it?
				</p>
				<a name="2"></a>
				<h3>General concept</h3>
				<p>
				Code 403 forbidden is a server response indicating that the user does not have access rights to a certain network resource. There are many reasons for such a response, elimination is possible only after analyzing a specific situation, there are no universal instructions.
				</p>
				<p>
				It should be noted that this error is generally not very serious. Sometimes it is temporary, disappears on its own, without requiring additional manipulations, in other cases - the simplest actions, adjustments to the settings are required.
				</p>
				<a name="3"></a>
				<h3>Probable causes</h3>
				<p>
				Ideally, the 403 forbidden server error should only appear if a user who does not have the appropriate rights tries to access a network resource. Reality, unfortunately, is far from ideal, and therefore the list of possible causes of the failure is much wider, including the following categories:
				</p>
				<ul>
				<li>Incorrect operation of the user device;</li>
				<li>Incorrect configuration of network resource components;</li>
				<li>Restrictions established by the organization providing network access services.</li>
				</ul>
				<p>
				Each of the listed categories requires a more detailed study.
				</p>
				<a name="4"></a>
				<h3>User-side failures</h3>
				<p>
				As already noted, the “standard” error display scenario is the server’s response to the actions of a visitor who does not have the right to view certain pages, sites, or files hosted on them. Such pages may be, for example, service pages accessible only to administrators. The following reasons are also possible:
				</p>
				<ul>
				<li>Lack of authorization, authentication, authorization. Some sites “agree” to work exclusively with registered, authorized visitors who have specified a minimum set of personal data and logged in using a name and password. They are closed to unregistered clients.</li>
				<li>Incorrect entry of the page address. Errors are usually hidden in the details, so you need to carefully study the link – is there an extra character in it.</li>
				<li>Operation of antivirus applications, firewalls. It is possible that the antivirus installed on the user's computer or smartphone considers the site suspicious and blocks the transition.</li>
				<li>Incorrect operation of the device from which the login is performed. Outdated cookies, overloaded cache, restrictions on data transfer over a mobile network or activation of the traffic saving mode, which is relevant for smartphones - there are many options.</li>
				</ul>
				<a name="5"></a>
				<h3>Failures on the site administrator's side</h3>
				<p>
				In this case, error 403 appears for the following reasons:
				</p>
				<ul>
				<li>Absence, incorrect spelling of the index file name. As a rule, we are talking about the “index” file with the php or html extension.</li>
				<li>Incorrect placement of network resource files. They must be in the root folder, other options exclude the possibility of direct access to them by the web server, which leads to the display of the error.</li>
				<li>Incorrect configuration of access rights to directories and files, due to which the server cannot interact with them.</li>
				<li>Incorrect operation of plugins and extensions. This is especially true for sites created on the popular WordPress platform. The administrator must be attentive to the search for extensions, update them in a timely manner, and reinstall them.</li>
				<li>Using inappropriate PHP versions and other tools required for configuring and managing the site. The versions may be outdated or incompatible with the software installed on the server.</li>
				</ul>
				<a name="6"></a>
				<h3>Provider-side failures</h3>
				<p>
				In this category, the following causes the 403 error to appear:
				</p>
				<ul>
				<li>Termination of service to a network resource. For example, a provider may block access due to the site owner's failure to fulfill their obligations, lack of timely payment, or posting content that violates copyright.</li>
				<li>Untimely update of the DNS server cache. Error 403 appears in the event of a recent move of a network resource to a new address, if the DNS server continues to use old information from the cache.</li>
				<li>Technical failures. Failure of the main server equipment, communication line breaks, incorrect software operation.</li>
				<li>Geographical restrictions. Some sites are unavailable to users from certain countries.</li>
				</ul>
				<a name="7"></a>
				<h3>How to fix the failure?</h3>
				<p>
				The error troubleshooting algorithm is determined by the reasons that led to its occurrence. The most common situations need to be considered in detail.
				</p>
				<a name="8"></a>
				<h3>User instructions</h3>
				<p>
				A user who encounters a problem needs to do the following:
				</p>
				<ul>
				<li>Check access rights. It is quite possible that to go to the desired site or page, it is enough to go through authorization or register, spending a few seconds on this. In rare cases, you have to write to the site administrator so that he removes the block issued by mistake, or indicates the impossibility of this action, explaining the reason.</li>
				<li>Clear the cache and cookies. This is done through the browser settings.</li>
				<li>Check the browser settings. It would be a good idea to install the latest version of the software, make sure that the site was not mistakenly included in the block list.</li>
				<li>Disable or, conversely, activate the VPN.</li>
				<li>Check the spelling of the page you are looking for. Perhaps there was an extra bracket or an unnoticeable punctuation mark in the address bar.</li>
				<li>Try another device. The site does not open from a laptop? You should try to log in from a smartphone.</li>
				<li>Call the provider. Perhaps the organization providing network access services knows what the 403 error is associated with and is already taking a set of measures aimed at its speedy elimination.</li>
				<li>Check the antivirus. Perhaps the site was included in the block lists. If you are sure it is safe, you should delete it.</li>
				<li>Connect via another network. If the site does not open via home Wi-Fi, you can try to access it via one of the public networks, or via your smartphone's mobile network.</li>
				</ul>
				<a name="9"></a>
				<h3>Administrator instructions</h3>
				<p>
				If the 403 forbidden error is not related to the user side, but to the administrator side, then the following actions will help:
				</p>
				<ul>
				<li>Check the correctness of the server access rights settings. Each user group should have its own rights, whether it is reading, changing pages, uploading new files, posting news, photos, videos and other content.</li>
				<li>Check the correctness of the main server settings. If errors have crept into the configuration, difficulties with access will inevitably arise. First of all, you need to carefully study the files with the “.htaccess” extension, they are responsible for access to certain areas of the network resource.</li>
				<li>Check the correctness of the security algorithms and programs. Sometimes they automatically switch to the most severe mode, excluding unauthorized access, in which case it is enough to “roll back” to the default settings, which are more lenient.</li>
				<li>Analysis of web server logs. An experienced administrator, having studied the logs, can easily identify events that indirectly or directly influenced the occurrence of errors.</li>
				<li>Disabling WordPress plugins. Perhaps newly installed plugins are incompatible with the site and interfere with its normal operation. The problem is also relevant if updates are not timely.</li>
				<li>Moving site files to root directories. If they are placed differently, they are inaccessible.</li>
				</ul>
				<a name="10"></a>
				<h3>Preventive measures</h3>
				<p>
				As you know, any error is easier to prevent than to hastily eliminate the causes that provoked its occurrence. Administrators who want to protect visitors and users of the site from the unpleasant inscription "forbidden" should adhere to the following principles:
				</p>
				<ul>
				<li>Fine-tuning access rights. This is the basis for the correct operation of the network resource. It is necessary to check all files, directories and catalogs, make sure that the permissions are correct. Each user, be it a simple visitor, a marketer or an owner, must have certain rights.</li>
				<li>Correct configuration of the file with the permission ".htaccess". It is in it that the basic principles are saved, according to which access is carried out. Incorrect indication of directives leads to the fact that either the entire network resource as a whole, or its individual categories, pages are inaccessible. File directives must correspond to the specifics of the site, the features of its use.</li>
				<li>Exclusion of blocking by IP addresses. This method of restricting access is an effective security measure, however, you should not get too carried away with it. Incorrect use leads to the fact that the 403 forbidden error appears even when a legal, verified user tries to enter the site. It is necessary to make sure that access from the correct IP addresses is not blocked, firewalls, antiviruses and other applications that ensure the security of the network resource function correctly.</li>
				</ul>
				<p>
				Of course, administrators need to update server software in a timely manner. This approach will not only eliminate the risk of 403 errors, but also guarantee security, eliminate unnecessary risks and vulnerabilities. Practice shows that the absence of even one update that does not look important and significant leads to serious errors.
				</p>
				<p>
				A responsible approach by administrators not only eliminates errors, but also has a positive effect on the overall perception of the site by users, contributes to the growth of its traffic, attractiveness for advertisers.
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
