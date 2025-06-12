import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "NGINX: что это такое?",
		uz: "NGINX: Bu nima?",
		en: "NGINX: What is it?",
	},
	title: {
		ru: "Nginx — что это такое и зачем нужен веб-сервер",
		uz: "Nginx - bu nima va nima uchun sizga veb-server kerak",
		en: "Nginx - what is it and why do you need a web server",
	},
	desc: {
		ru: "Nginx — популярный веб-сервер и обратный прокси-сервер 🌐 Узнайте, что такое Nginx, как он работает и для чего используется. Преимущества Nginx по сравнению с другими веб-серверами.",
		uz: "Nginx mashhur veb-server va teskari proksi-server 🌐 Nginx nima ekanligini, u qanday ishlashini va nima uchun ishlatilishini bilib oling. Nginx ning boshqa veb-serverlarga nisbatan afzalliklari.",
		en: "Nginx is a popular web server and reverse proxy 🌐 Learn what Nginx is, how it works, and what it is used for. Advantages of Nginx over other web servers.",
	},
	date: "21.11.2024",
	updated: "21.11.2024",
	read: "8",
	view: "10",
	img: "/blog/nginx.webp",
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
		{ title: {ru: "Что такое Nginx?", uz: "Nginx nima?", en: "What is Nginx?", slug: "1" }},
		{ title: {ru: "Принцип функционирования", uz: "Ishlash printsipi", en: "Operating principle", slug: "2" }},
		{ title: {ru: "Преимущества", uz: "Afzalliklar", en: "Advantages", slug: "3" }},
		{ title: {ru: "Совместимость с операционными системами", uz: "Operatsion tizimlar bilan moslik", en: "Compatibility with operating systems", slug: "4" }},
		{ title: {ru: "Сравнение с Apache", uz: "Apache bilan taqqoslash", en: "Comparison with Apache", slug: "5" }},
		{ title: {ru: "Вероятные ошибки", uz: "Mumkin bo'lgan xatolar", en: "Possible errors", slug: "6" }},
		{ title: {ru: "Установка и настройка Nginx", uz: "Nginx-ni o'rnatish va sozlash", en: "Installing and Configuring Nginx", slug: "7" }},
		{ title: {ru: "Подведение итогов", uz: "Xulosa qilish", en: "Summing up", slug: "8" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Что такое Nginx?
				</h3>
				<p>
					Nginx, также известно как “Энджинкс” или “eNGIne X”, представляет собой программное обеспечение, позволяющее без лишних сложностей создать веб-сервер. Программа универсальна, может использоваться как почтовый или прокси-сервер.
				</p>
				<p>
					Nginx – это российская разработка, его автором является Игорь Сысоев, один из ведущих специалистов компании “Рамблер”. Программа появилась в 2002 году, а необходимость ее создания была обусловлена проблемами с производительностью при повышении серверной нагрузки. В 2004 утилита начала использоваться не только “Рамблером”, но и сторонними организациями, с 2011 – на модернизации и поддержке сосредоточилась фирма, принадлежащая Сысоеву. Сейчас программа представлена в нескольких версиях, в том числе платных, с расширенным функционалом.
				</p>
				<a name="2"></a>
				<h3>Принцип функционирования</h3>
				<p>
					Алгоритм работы Nginx можно сравнить с классическим сервером, он предполагает получение клиентских запросов, их обработку и отправку требуемых файлов, кода, графики, текста, видео и прочего, что требуется для корректного отображения искомой страницы.
				</p>
				<p>
					Отличие заключается в том, что Nginx функционирует асинхронно со схемой обработки запросов, ориентированной на события. Благодаря этой особенности, программа поддерживает множество соединений без блокировки ввода и вывода. Подобное описание выглядит достаточно сложно, для лучшего понимания следует разобрать пример:
				</p>
				<ul>
					<li>Поступление клиентского запроса на отправку крупного файла, например, видео в формат высокого разрешения;</li>
					<li>Активация передачи;</li>
					<li>Освобождение потока обработки запросов. Это ключевая особенность, позволяющая взаимодействовать с другими поступающими запросами;</li>
					<li>Завершение передачи файла;</li>
					<li>Финальная обработка результатов, возобновление выполнения прочих операций.</li>
				</ul>
				<p>
					Классический алгоритм работы сервера подразумевает блокировку обработки новых запросов до того, как все операции, связанные с вводом и выводом данных, будут завершены, с Nginx это исключено. Благодаря этой особенности, сервер одновременно работает со множеством запросов, что позволяет эффективнее использовать доступные ресурсы, исключает задержки передачи и другие проблемы.
				</p>
				<p>
					Nginx справляется с функциями не только стандартного сервера. Возможно использование программы для решения следующих задач:
				</p>
				<ul>
					<li>Создание прокси-серверов. При больших объемах поступающих запросов, производительности оказывается недостаточно. В такой ситуации он начинает функции прокси, принимает клиентские запросы, передает их более мощным сетевым ресурсам, выполняющим обработку, и направляет ответы пользователю.</li>
					<li>Терминация SSL и TLS. Программа эффективно взаимодействует с обоими протоколами, может как шифровать информацию, так и расшифровывать ее. Эта функция позволяет реализовать посреднические функции, снять часть нагрузки с главного сервера, к которому обращается пользователь.</li>
				</ul>
				<a name="3"></a>
				<h3>Преимущества</h3>
				<p>
				Главные достоинства Nginx выглядят следующим образом:
				</p>
				<ul>
					<li>Высокая скорость. Это преимущество наиболее выражено при взаимодействии со статическим содержимым сайта, не нуждающимся в регулярном обновлении. При загрузке страницы, сервер Nginx проводит кэширование данных, так что при последующих запросах – они загружаются из кэша, такая операция выполняется мгновенно.</li>
					<li>Универсальность. Программа предполагает максимальную гибкость и удобство настройки, ее легко адаптировать под конкретную систему, независимо от спецификации, масштаба и требований.</li>
					<li>Минимальная нагрузка на ОЗУ. Nginx пользуется “пулом”, собственным сегментом памяти. Изменение его объема происходит автоматически, в соответствии с нагрузкой, что обеспечивает быстродействие и позволяет максимально рационально расходовать доступные ресурсы.</li>
					<li>Комплексная поддержка. ПО Nginx востребовано и популярно, на профильных площадках, в тематических сообществах легко можно найти ответы на интересующие вопросы, что поможет эффективно решить технические проблемы. Вдобавок, присутствует официальная поддержка, а все инструкции, документы доступны на русском языке, им не требуется перевод и локализация.</li>
					<li>Адаптивность. Программа доступна не только в платных, но и в бесплатных редакциях. Открытость программного кода упрощает взаимодействие, каждый пользователь может настроить ее в полном соответствии с личными потребностями.</li>
				</ul>
				<a name="4"></a>
				<h3>Совместимость с операционными системами</h3>
				<p>
					Отличительная особенность Nginx – мультиплатформенность, использовать ее можно в различных операционных средах. Чаще всего она применяется на следующих ОС:
				</p>
				<ul>
					<li>Linux. Речь идет обо всех платформах, основа которых – Linux-ядро, от популярных Ubuntu и Debian до Fedora.</li>
					<li>Unix. Как и в предыдущем случае, обеспечена совместимость со всеми Unix-подобными ОС.</li>
					<li>macOS. Если прямая установка оказывается невозможной, проблему легко решить при помощи специальных пакетных менеджеров.</li>
					<li>Windows. Для разработки Microsoft существуют и другие решения с похожим функционалом, однако, Nginx – популярный вариант, с официальной поддержкой.</li>
				</ul>
				<p>Использование возможно на системах, не только установленных непосредственно на компьютере, но и находящихся в облаке, например, на GCP или AWS. Допустимо применение и на других ОС, при условии наличия подходящих библиотек и компиляторов.</p>
				<a name="5"></a>
				<h3>Сравнение с Apache</h3>
				<p>
					По замыслу разработчика, программа Nginx должна была стать альтернативой Apache, платформе, которая раньше использовалась повсеместно. Практика показала, что новое ПО оказалось куда удачнее при взаимодействии со статичным содержимым сайтов, нагрузка на сервер минимальна, при этом не возникает никаких проблем с быстродействием. Преимущество особенно ощутимо на сайтах, для которых характерен именно статический контент, к которым относятся товарные карточки, визитки, блоги.
				</p>
				<p>
					При проведении сравнения также нужно учесть следующие факторы:
				</p>
				<ul>
					<li>Операционная среда. На Linux-подобных системах производительность примерно равна, но на Windows – у Apache есть определенное преимущество.</li>
					<li>Техническая поддержка. За счет того, что Nginx является российской разработкой, она предлагает более развитую, квалифицированную и оперативную техническую поддержку.</li>
					<li>Простота настройки. Nginx настроить проще, в случае с Apache – приходится задействовать сразу несколько уровней ОС, внимательно прописывать информацию для файлов .htaccess.</li>
					<li>Модульность. Apache предлагает большее количество модулей, в сравнении с Nginx.</li>
					<li>Поддержка виртуальных хостов. Равенство, в обоих случаях с их настройкой проблем не возникает.</li>
				</ul>
				<a name="6"></a>
				<h3>Вероятные ошибки</h3>
				<p>
				Настройка и использование Nginx в целом не требует высокой квалификации, справиться с задачами смогут даже не слишком опытные администраторы, однако, иногда возникают сбои. Согласно статистике, наиболее распространены следующие:
				</p>
				<ul>
					<li>502 Bad Gateway. Такое уведомление показывает полное отсутствие ответов от обслуживаемых сервисов. Причина, как правило, банальна – отсутствие подключения.</li>
					<li>504 Gateway Time-Out. Ответ в таком случае приходит, однако, ожидание оказывается слишком продолжительным. Нужно зайти в настройки и увеличить время по тайм-ауту.</li>
					<li>413 Request Entire Too Large. Ошибка появляется, если загружаемые файлы слишком крупные. Решение проблемы – изменение настроек. Базовое значение – мегабайт, следует увеличить его.</li>
				</ul>
				<a name="7"></a>
				<h3>Установка и настройка Nginx</h3>
				<p>
					В процессе инсталляции на Linux-подобную систему можно воспользоваться двумя технологиями, предварительно собранным пакетом, либо кодом. Пакет – более простой метод, однако, код открывает более широкие возможности, позволяет поставить вспомогательные модули. Впрочем, сложность ограничивает его применение, так что предпочтительной является пакетная технология. В случае с ОС Microsoft Windows, придется пользоваться интерфейсом Win32 API.
				</p>
				<p>
					Инсталляция на Linux из пакета активируется командой “sudo apt-get updatesudo apt-get install nginx”. Все дальнейшие настройки проводятся через папку “/etc/nginx/”, главный файл которой – nginx.conf.
				</p>
				<p>
					В процессе конфигурирования основное внимание нужно уделить следующим параметрам:
				</p>
				<ul>
					<li>Worker_processes – число рабочих процессов, используемых сервером. Оно должно быть идентично числу ядер ЦПУ.</li>
					<li>Worker_connections – лимит подключений для каждого из процессов. С увеличением параметра растет число одновременно обслуживаемых пользователей.</li>
					<li>Gzip_comp_level – показатель сжатия. 1 – минимальное сжатие, 10 – максимальное. Как правило, хватает усредненного значения, 6.</li>
				</ul>
				<p>
					Для уверенного взаимодействия Nginx с файлами, нужно выполнить линкование с директорией “/etc/nginx/sites-enabled”. Благодаря линкованию, удается ускорить запуск сайтов, после их открытия удаление данных не произойдет.
				</p>
				<a name="8"></a>
				<h3>Подведение итогов</h3>
				<p>
					Nginx – удобное, эффективное решение, позволяющее решить массу вопросов, связанных с организацией стандартного или прокси-сервера. По некоторым показателям оно превосходит Apache, нуждается в меньших вычислительных мощностях, не нагружает процессор и оперативную память, способно в одно время взаимодействовать сразу с несколькими соединениями.
				</p>
				<p>
					Универсальность Nginx делает программу совместимой с различными сайтами, независимо от типологии и размещенного содержимого. В особо сложных ситуациях можно использовать Nginx в комбинации с Apache, однако, в большинстве случаев, хватает и его базовых возможностей.
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
				Nginx nima?
				</h3>
				<p>
				"Enginx" yoki "eNGINe X" nomi bilan ham tanilgan Nginx - bu keraksiz asoratlarsiz veb-server yaratish imkonini beruvchi dastur. Dastur universal bo'lib, pochta yoki proksi-server sifatida foydalanish mumkin.
				</p>
				<p>
				Nginx - bu rus ishlanmasi, uning muallifi Igor Sysoev, Rambler kompaniyasining etakchi mutaxassislaridan biri. Dastur 2002 yilda paydo bo'lgan va uni yaratish zarurati server yukini oshirishda ishlash bilan bog'liq muammolar bilan bog'liq edi. 2004 yilda yordamchi dastur nafaqat Rambler tomonidan, balki uchinchi tomon tashkilotlari tomonidan ham qo'llanila boshlandi, 2011 yildan boshlab - Sysoevga tegishli kompaniya modernizatsiya va qo'llab-quvvatlashga e'tibor qaratdi. Endi dastur bir nechta versiyalarda, shu jumladan pullik, rivojlangan funksionallik bilan taqdim etilgan. </p>
				<a name="2"></a>
				<h3>Ishlash printsipi</h3>
				<p>
				Nginx operatsion algoritmini klassik server bilan solishtirish mumkin, u mijoz so'rovlarini qabul qilish, ularni qayta ishlash va kerakli sahifani to'g'ri ko'rsatish uchun zarur bo'lgan kerakli fayllar, kodlar, grafikalar, matn, video va boshqa narsalarni yuborishni o'z ichiga oladi.
				</p>
				<p>
				Farqi shundaki, Nginx hodisaga yo'naltirilgan so'rovni qayta ishlash sxemasi bilan asinxron ishlaydi. Ushbu xususiyat tufayli dastur kirish va chiqishni bloklamasdan bir nechta ulanishlarni qo'llab-quvvatlaydi. Bunday tavsif juda murakkab ko'rinadi, yaxshiroq tushunish uchun siz misolni tahlil qilishingiz kerak:
				</p>
				<ul>
				<li>Mijozning katta hajmdagi faylni, masalan, yuqori aniqlikdagi formatdagi videoni yuborish haqidagi soʻrovini olish;</li>
				<li>O'tkazishni faollashtirish;</li>
				<li>So'rovni qayta ishlash to'plamini chiqarish. Bu boshqa kiruvchi so'rovlar bilan o'zaro ishlash imkonini beruvchi asosiy xususiyatdir;</li>
				<li>Fayl uzatishni yakunlash;</li>
				<li>Natijalarni yakuniy qayta ishlash, boshqa operatsiyalarni qayta boshlash.</li>
				</ul>
				<p>
				Klassik serverning ishlash algoritmi ma'lumotlarni kiritish va chiqarish bilan bog'liq barcha operatsiyalar tugaguniga qadar yangi so'rovlarni qayta ishlashni bloklashni o'z ichiga oladi, Nginx bilan bu istisno. Ushbu xususiyat tufayli server bir vaqtning o'zida ko'plab so'rovlar bilan ishlaydi, bu mavjud resurslardan samaraliroq foydalanish imkonini beradi, uzatish kechikishlarini va boshqa muammolarni bartaraf etadi.
				</p>
				<p>
				Nginx nafaqat standart serverning funktsiyalari bilan shug'ullanadi. Dasturdan quyidagi vazifalarni hal qilish uchun foydalanish mumkin:
				</p>
				<ul>
				<li>Proksi-serverlar yaratish. Katta hajmdagi kiruvchi so'rovlar bilan ishlash etarli emas. Bunday vaziyatda u proksi-server funktsiyalarini ishga tushiradi, mijoz so'rovlarini qabul qiladi, ularni qayta ishlashni amalga oshiradigan kuchliroq tarmoq resurslariga o'tkazadi va foydalanuvchiga javoblarni yuboradi.</li>
				<li>SSL va TLSni tugatish. Dastur ikkala protokol bilan samarali o'zaro ta'sir qiladi, ma'lumotlarni shifrlashi va shifrini ochishi mumkin. Bu funksiya sizga vositachi funksiyalarni amalga oshirish, foydalanuvchi kirayotgan asosiy serverdan yukning bir qismini olib tashlash imkonini beradi.</li>
				</ul>
				<a name="3"></a>
				<h3>Afzalliklar</h3>
				<p>
				Nginx ning asosiy afzalliklari quyidagilardan iborat:
				</p>
				<ul>
				<li>Yuqori tezlik. Ushbu afzallik muntazam yangilanishni talab qilmaydigan statik sayt mazmuni bilan o'zaro aloqada bo'lganda eng aniq namoyon bo'ladi. Sahifani yuklashda Nginx serveri maʼlumotlarni keshlaydi, shuning uchun keyingi soʻrovlar keshdan yuklanadi, bunday operatsiya bir zumda amalga oshiriladi.</li>
				<li>Universallik. Dastur maksimal moslashuvchanlik va sozlash qulayligini ta'minlaydi, spetsifikatsiya, masshtab va talablardan qat'i nazar, muayyan tizimga moslashish oson.</li>
				<li>RAMga minimal yuk. Nginx o'zining xotira segmentidan "hovuz" dan foydalanadi. Uning hajmi yukga mos ravishda avtomatik ravishda o'zgaradi, bu tezlikni ta'minlaydi va mavjud resurslardan eng oqilona foydalanish imkonini beradi.</li>
				<li>Har tomonlama qo'llab-quvvatlash. Nginx dasturiy ta'minoti talabga ega va ommabop, ixtisoslashgan saytlarda, tematik jamoalarda siz qiziqtirgan savollarga osongina javob topishingiz mumkin, bu esa texnik muammolarni samarali hal qilishga yordam beradi. Bundan tashqari, rasmiy yordam mavjud va barcha ko'rsatmalar, hujjatlar rus tilida mavjud, ular tarjima va mahalliylashtirishni talab qilmaydi. </li>
				<li>Moslashuvchanlik. Dastur nafaqat pullik, balki bepul nashrlarda ham mavjud. Dastur kodining ochiqligi o'zaro aloqani soddalashtiradi, har bir foydalanuvchi uni shaxsiy ehtiyojlariga to'liq mos ravishda sozlashi mumkin. </li>
				</ul>
				<a name="4"></a>
				<h3>Operatsion tizimlar bilan moslik</h3>
				<p>
				Nginx-ning o'ziga xos xususiyati uning ko'p platformali tabiati bo'lib, u turli xil operatsion muhitlarda ishlatilishi mumkin. Ko'pincha u quyidagi operatsion tizimlarda qo'llaniladi:
				</p>
				<ul>
				<li>Linux. Biz mashhur Ubuntu va Debian-dan Fedoragacha Linux yadrosiga asoslangan barcha platformalar haqida gapiramiz. </li>
				<li>Unix. Oldingi holatda bo'lgani kabi, barcha Unix-ga o'xshash operatsion tizimlar bilan muvofiqligi ta'minlanadi.</li>
				<li>macOS. Agar to'g'ridan-to'g'ri o'rnatish imkoni bo'lmasa, muammoni maxsus paket menejerlari yordamida osongina hal qilish mumkin.</li>
				<li>Windows. Microsoft ishlanmalari uchun shunga o'xshash funksiyalarga ega bo'lgan boshqa echimlar ham mavjud, biroq Nginx rasmiy yordamga ega mashhur variant hisoblanadi.</li>
				</ul>
				<p>U nafaqat kompyuterda, balki bulutda, masalan, GCP yoki AWS da oʻrnatilgan tizimlarda ham qoʻllanilishi mumkin. Tegishli kutubxonalar va kompilyatorlar mavjud boʻlsa, undan boshqa OTlarda ham foydalanish mumkin.</p>
				<a name="5"></a>
				<h3>Apache bilan solishtirish</h3>
				<p>
				Ishlab chiquvchining so‘zlariga ko‘ra, Nginx dasturi avval hamma joyda qo‘llanilgan Apache platformasiga muqobil bo‘lishi kerak edi. Amaliyot shuni ko'rsatdiki, yangi dasturiy ta'minot veb-saytning statik kontenti bilan o'zaro aloqada bo'lganda ancha muvaffaqiyatli bo'ladi, serverga yuk minimaldir va ishlashda hech qanday muammo yo'q. Afzallik, ayniqsa, mahsulot kartalari, tashrif qog'ozlari, bloglarni o'z ichiga olgan statik tarkib bilan tavsiflangan veb-saytlarda sezilarli.
				</p>
				<p>
				Taqqoslashda siz quyidagi omillarni ham hisobga olishingiz kerak:
				</p>
				<ul>
				<li>Ishlash muhiti. Linux-ga o'xshash tizimlarda unumdorlik taxminan teng, ammo Windows-da Apache ma'lum bir afzalliklarga ega. </li>
				<li>Texnik yordam. Nginx rus ishlanmasi bo'lganligi sababli, u yanada ilg'or, malakali va tezkor texnik yordamni taklif qiladi. </li>
				<li>Sozlash qulayligi. Nginx-ni sozlash osonroq, Apache-da siz bir vaqtning o'zida bir nechta OS darajalaridan foydalanishingiz kerak, .htaccess fayllari uchun ma'lumotlarni diqqat bilan ro'yxatdan o'tkazishingiz kerak. </li>
				<li>Modullilik. Apache Nginx ga qaraganda ko'proq modullarni taklif qiladi.</li>
				<li>Virtual xostlar uchun yordam. Tenglik, ikkala holatda ham ularning konfiguratsiyasi bilan bog'liq muammolar yo'q.</li>
				</ul>
				<a name="6"></a>
				<h3>Mumkin xatolar</h3>
				<p>
				Nginx-ni sozlash va ishlatish odatda yuqori malakani talab qilmaydi, hatto unchalik tajribali bo'lmagan ma'murlar ham vazifalarni bajara olmaydi, ammo ba'zida muvaffaqiyatsizliklar yuzaga keladi. Statistikaga ko'ra, quyidagilar eng keng tarqalgan:
				</p>
				<ul>
				<li>502 Bad Gateway. Ushbu bildirishnoma xizmat ko'rsatilayotgan xizmatlardan to'liq javob yo'qligini ko'rsatadi. Buning sababi odatda oddiy - aloqa yo'q.</li>
				<li>504 Gateway vaqti tugashi. Bunday holda, javob keladi, lekin kutish juda uzoq. Siz sozlamalarga o'tishingiz va kutish vaqtini oshirishingiz kerak.</li>
				<li>413 So'rov juda katta. Yuklab olingan fayllar juda katta bo'lsa, xato paydo bo'ladi. Yechim sozlamalarni o'zgartirishdir. Asosiy qiymat megabayt, siz uni oshirishingiz kerak.</li>
				</ul>
				<a name="7"></a>
				<h3>Nginx-ni o'rnatish va sozlash</h3>
				<p>
				Linuxga o'xshash tizimda o'rnatish vaqtida siz ikkita texnologiyadan, oldindan tuzilgan paketdan yoki koddan foydalanishingiz mumkin. Paket oddiyroq usul, ammo kod ko'proq imkoniyatlarni ochadi, yordamchi modullarni o'rnatishga imkon beradi. Biroq, uning murakkabligi foydalanishni cheklaydi, shuning uchun paket texnologiyasi afzalroqdir. Microsoft Windows holatida siz Win32 API interfeysidan foydalanishingiz kerak bo'ladi.
				</p>
				<p>
				Linux-ga paketdan o'rnatish "sudo apt-get updatesudo apt-get install nginx" buyrug'i bilan faollashtiriladi. Barcha keyingi sozlamalar “/etc/nginx/” papkasi orqali amalga oshiriladi, uning asosiy fayli nginx.conf.
				</p>
				<p>
				Konfiguratsiya jarayonida siz quyidagi parametrlarga alohida e'tibor berishingiz kerak:
				</p>
				<ul>
				<li>Ishchi_jarayonlar - server tomonidan ishlatiladigan ishchi jarayonlar soni. Bu protsessor yadrolari soni bilan bir xil bo'lishi kerak.</li>
				<li>Ishchi_ulanishlari - har bir jarayon uchun ulanish chegarasi. Parametr oshgani sayin, bir vaqtning o'zida xizmat ko'rsatuvchi foydalanuvchilar soni ortadi.</li>
				<li>Gzip_comp_level - siqish ko'rsatkichi. 1 - minimal siqish, 10 - maksimal. Qoidaga ko'ra, o'rtacha qiymat 6 etarli.</li>
				</ul>
				<p>
				Nginx-ning fayllar bilan ishonchli o'zaro ta'siri uchun siz "/etc/nginx/sites-enabled" katalogiga ulanishingiz kerak. Ulanish tufayli siz saytlarni ishga tushirishni tezlashtirishingiz mumkin, ular ochilgandan keyin ma'lumotlar o'chirilmaydi.
				</p>
				<a name="8"></a>
				<h3>Xulosa qilish</h3>
				<p>
				Nginx - bu standart yoki proksi-serverni tashkil qilish bilan bog'liq ko'plab muammolarni hal qilish imkonini beruvchi qulay, samarali yechim. Ba'zi jihatlari bo'yicha u Apache'dan oshib ketadi, kamroq hisoblash quvvatini talab qiladi, protsessor va operativ xotirani yuklamaydi va bir vaqtning o'zida bir nechta ulanishlar bilan o'zaro ta'sir o'tkazishga qodir.
				</p>
				<p>
				Nginx-ning ko'p qirraliligi dasturni chop etilgan tipologiya va kontentdan qat'i nazar, turli saytlar bilan moslashtiradi. Ayniqsa qiyin vaziyatlarda siz Nginx-ni Apache bilan birgalikda ishlatishingiz mumkin, ammo ko'p hollarda uning asosiy imkoniyatlari etarli.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				What is Nginx?
				</h3>
				<p>
				Nginx, also known as “Enginx” or “eNGIne X”, is a software that allows you to create a web server without unnecessary complications. The program is universal, can be used as a mail or proxy server.
				</p>
				<p>
				Nginx is a Russian development, its author is Igor Sysoev, one of the leading specialists of the Rambler company. The program appeared in 2002, and the need for its creation was due to problems with performance when increasing the server load. In 2004, the utility began to be used not only by Rambler, but also by third-party organizations, since 2011 - a company owned by Sysoev has focused on modernization and support. Now the program is presented in several versions, including paid ones, with advanced functionality. </p>
				<a name="2"></a>
				<h3>Operating principle</h3>
				<p>
				The Nginx operating algorithm can be compared to a classic server, it involves receiving client requests, processing them and sending the required files, code, graphics, text, video and other things that are required to correctly display the desired page.
				</p>
				<p>
				The difference is that Nginx operates asynchronously with an event-oriented request processing scheme. Due to this feature, the program supports multiple connections without blocking input and output. Such a description looks quite complicated, for a better understanding, you should analyze the example:
				</p>
				<ul>
				<li>Receipt of a client request to send a large file, for example, a video in high definition format;</li>
				<li>Activation of transfer;</li>
				<li>Release of the request processing thread. This is a key feature that allows interaction with other incoming requests;</li>
				<li>File transfer completion;</li>
				<li>Final processing of results, resumption of other operations.</li>
				</ul>
				<p>
				The classic server operation algorithm involves blocking the processing of new requests until all operations related to input and output of data are completed, with Nginx this is excluded. Due to this feature, the server simultaneously works with many requests, which allows more efficient use of available resources, eliminates transmission delays and other problems.
				</p>
				<p>
				Nginx copes with the functions of not only a standard server. It is possible to use the program to solve the following tasks:
				</p>
				<ul>
				<li>Creating proxy servers. With large volumes of incoming requests, the performance is insufficient. In such a situation, it starts proxy functions, accepts client requests, passes them to more powerful network resources that perform processing, and sends responses to the user.</li>
				<li>SSL and TLS termination. The program effectively interacts with both protocols, can both encrypt and decrypt information. This function allows you to implement intermediary functions, remove some of the load from the main server that the user is accessing.</li>
				</ul>
				<a name="3"></a>
				<h3>Advantages</h3>
				<p>
				The main advantages of Nginx are as follows:
				</p>
				<ul>
				<li>High speed. This advantage is most pronounced when interacting with static site content that does not require regular updating. When loading a page, the Nginx server caches data, so that subsequent requests are loaded from the cache, such an operation is performed instantly.</li>
				<li>Universality. The program provides maximum flexibility and ease of configuration, it is easy to adapt to a specific system, regardless of the specification, scale and requirements.</li>
				<li>Minimal load on RAM. Nginx uses a “pool”, its own memory segment. Its volume changes automatically, in accordance with the load, which ensures speed and allows the most rational use of available resources.</li>
				<li>Comprehensive support. Nginx software is in demand and popular, on specialized sites, in thematic communities you can easily find answers to questions of interest, which will help to effectively solve technical problems. In addition, there is official support, and all instructions, documents are available in Russian, they do not require translation and localization. </li>
				<li>Adaptability. The program is available not only in paid, but also in free editions. The openness of the program code simplifies interaction, each user can customize it in full accordance with personal needs. </li>
				</ul>
				<a name="4"></a>
				<h3>Compatibility with operating systems</h3>
				<p>
				A distinctive feature of Nginx is its multiplatform nature, it can be used in various operating environments. Most often, it is used on the following OS:
				</p>
				<ul>
				<li>Linux. We are talking about all platforms based on the Linux kernel, from the popular Ubuntu and Debian to Fedora. </li>
				<li>Unix. As in the previous case, compatibility with all Unix-like OS is ensured.</li>
				<li>macOS. If direct installation is not possible, the problem can be easily solved using special package managers.</li>
				<li>Windows. There are other solutions with similar functionality for Microsoft development, however, Nginx is a popular option with official support.</li>
				</ul>
				<p>It can be used on systems not only installed directly on the computer, but also in the cloud, for example, on GCP or AWS. It can also be used on other OS, provided that suitable libraries and compilers are available.</p>
				<a name="5"></a>
				<h3>Comparison with Apache</h3>
				<p>
				According to the developer, the Nginx program was supposed to become an alternative to Apache, a platform that was previously used everywhere. Practice has shown that the new software is much more successful when interacting with static website content, the load on the server is minimal, and there are no problems with performance. The advantage is especially noticeable on websites that are characterized by static content, which include product cards, business cards, blogs.
				</p>
				<p>
				When making a comparison, you also need to consider the following factors:
				</p>
				<ul>
				<li>Operating environment. On Linux-like systems, the performance is approximately equal, but on Windows, Apache has a certain advantage. </li>
				<li>Technical support. Due to the fact that Nginx is a Russian development, it offers more advanced, qualified and prompt technical support. </li>
				<li>Ease of setup. Nginx is easier to set up, in the case of Apache, you have to use several OS levels at once, carefully register information for .htaccess files. </li>
				<li>Modularity. Apache offers more modules than Nginx.</li>
				<li>Support for virtual hosts. Equality, in both cases there are no problems with their configuration.</li>
				</ul>
				<a name="6"></a>
				<h3>Possible errors</h3>
				<p>
				Configuring and using Nginx generally does not require high qualifications, even not very experienced administrators can cope with the tasks, however, sometimes failures occur. According to statistics, the following are the most common:
				</p>
				<ul>
				<li>502 Bad Gateway. This notification shows a complete lack of responses from the services being served. The reason is usually banal - no connection.</li>
				<li>504 Gateway Time-Out. In this case, the response comes, but the wait is too long. You need to go to the settings and increase the timeout.</li>
				<li>413 Request Entire Too Large. The error appears if the downloaded files are too large. The solution is to change the settings. The base value is a megabyte, you should increase it.</li>
				</ul>
				<a name="7"></a>
				<h3>Installing and configuring Nginx</h3>
				<p>
				During installation on a Linux-like system, you can use two technologies, a pre-built package or code. The package is a simpler method, however, the code opens up more opportunities, allows you to install auxiliary modules. However, its complexity limits its use, so the package technology is preferable. In the case of Microsoft Windows, you will have to use the Win32 API interface.
				</p>
				<p>
				Installation on Linux from the package is activated by the command “sudo apt-get updatesudo apt-get install nginx”. All further settings are carried out through the “/etc/nginx/” folder, the main file of which is nginx.conf.
				</p>
				<p>
				During the configuration process, you should pay special attention to the following parameters:
				</p>
				<ul>
				<li>Worker_processes – the number of worker processes used by the server. It should be identical to the number of CPU cores.</li>
				<li>Worker_connections – the connection limit for each process. As the parameter increases, the number of simultaneously served users increases.</li>
				<li>Gzip_comp_level – compression indicator. 1 – minimum compression, 10 – maximum. As a rule, the average value, 6, is enough.</li>
				</ul>
				<p>
				For reliable interaction of Nginx with files, you need to link with the directory “/etc/nginx/sites-enabled”. Thanks to linking, you can speed up the launch of sites, after they are opened, data will not be deleted.
				</p>
				<a name="8"></a>
				<h3>Summing up</h3>
				<p>
				Nginx is a convenient, effective solution that allows you to solve a lot of issues related to the organization of a standard or proxy server. In some respects, it surpasses Apache, requires less computing power, does not load the processor and RAM, and is capable of interacting with several connections at the same time.
				</p>
				<p>
				The versatility of Nginx makes the program compatible with various sites, regardless of the typology and content posted. In particularly difficult situations, you can use Nginx in combination with Apache, however, in most cases, its basic capabilities are sufficient.
				</p>
			</>
		),
	},
	next: "/blog/kak-zaregistrirovat-domen",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoye-nginx",
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
