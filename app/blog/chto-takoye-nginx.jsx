import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "NGINX: что это такое?",
		uz: "NGINX: что это такое?",
		en: "NGINX: что это такое?",
	},
	title: {
		ru: "Nginx — что это такое и зачем нужен веб-сервер",
		uz: "Nginx — что это такое и зачем нужен веб-сервер",
		en: "Nginx — что это такое и зачем нужен веб-сервер",
	},
	desc: {
		ru: "Nginx — популярный веб-сервер и обратный прокси-сервер 🌐 Узнайте, что такое Nginx, как он работает и для чего используется. Преимущества Nginx по сравнению с другими веб-серверами.",
		uz: "Nginx — популярный веб-сервер и обратный прокси-сервер 🌐 Узнайте, что такое Nginx, как он работает и для чего используется. Преимущества Nginx по сравнению с другими веб-серверами.",
		en: "Nginx — популярный веб-сервер и обратный прокси-сервер 🌐 Узнайте, что такое Nginx, как он работает и для чего используется. Преимущества Nginx по сравнению с другими веб-серверами.",
	},
	date: "21.11.2024",
	updated: "21.11.2024",
	read: "8",
	view: "10",
	img: "/blog/nginx.webp",
    faqTitle: {
      ru: "Ответы на популярные вопросы",
      uz: "Ответы на популярные вопросы",
      en: "Ответы на популярные вопросы",
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
		{ title: {ru: "Что такое Nginx?", uz: "Что такое Nginx?", en: "Что такое Nginx?", slug: "1" }},
		{ title: {ru: "Принцип функционирования", uz: "Принцип функционирования", en: "Принцип функционирования", slug: "2" }},
		{ title: {ru: "Преимущества", uz: "Преимущества", en: "Преимущества", slug: "3" }},
		{ title: {ru: "Совместимость с операционными системами", uz: "Совместимость с операционными системами", en: "Совместимость с операционными системами", slug: "4" }},
		{ title: {ru: "Сравнение с Apache", uz: "Сравнение с Apache", en: "Сравнение с Apache", slug: "5" }},
		{ title: {ru: "Вероятные ошибки", uz: "Вероятные ошибки", en: "Вероятные ошибки", slug: "6" }},
		{ title: {ru: "Установка и настройка Nginx", uz: "Установка и настройка Nginx", en: "Установка и настройка Nginx", slug: "7" }},
		{ title: {ru: "Подведение итогов", uz: "Подведение итогов", en: "Подведение итогов", slug: "8" }},
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
				<p>
					Polshaning CD Projekt Red studiyasining iqtiboslari fonida keskin tushib ketdi Sony do'konidan Cyberpunk 2077
					o'yinini olib tashlandi.
				</p>
				<p>
					Varshava fond birjasidagi savdo paytida CD Projekt Red aksiyalari, Cyberpunk 2077 o'yinini ishlab chiqqanlar
					20% ga kamaydi. Bu haqida bozor ma'lumotlari. Iqtibosning pastki qismida 247 PLN ga tushdi. Payshanba qog'oz
					savdo sessiyasi 309,2 zł atrofida yakunlandi, deb yozadi RBC.
				</p>
				<p>
					Qo'shtirnoqlarning tushishi Cyberpunk 2077-ning o'chirilishi haqidagi xabarlar fonida sodir bo'ldi o'yinning
					muvaffaqiyatsiz ishga tushirilishi tufayli Sony PlayStation do'konidan. Da kompaniya allaqachon sotib olgan
					o'yinchilarga pulni qaytarishga va'da berdi Cyberpunk 2077.
				</p>
				<p>
					Cyberpunk 2077 10 dekabrda chiqarildi, uning chiqarilishi bir vaqtning o'zida bo'lib o'tdi bir nechta
					platformalar. Ba'zi foydalanuvchilar texnik muammolardan shikoyat qilishdi o'yindagi muammolar va buzilishlar.
					Masalan, oldingi konsollarning egalari avlodlar - PlayStation 4 va Xbox One - past piksellar soniga duch keldi
					720p, tushiriladigan teksturalar va kadrlar tezligi 15 V gacha tushadi menga bir soniya bering.
				</p>
				<p>
					Cyberpunk 2077-ning chiqarilishi o'yindagi eng kutilgan voqealardan biri bo'ldi 2020 yilda sanoat. O'yinning
					chiqarilishi bir necha bor qoldirildi. Deyarli darhol ishga tushirilgandan so'ng, bir vaqtning o'zida
					Cyberpunk 2077 o'ynaydigan odamlar soni faqat Steam platformasida 1 milliondan oshdi, bu esa rekorddir yagona
					foydalanuvchi loyihalari.
				</p>
				<p>
					Manba'a uchun link{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>
					Prices of Polish studio CD Projekt Red fell sharply amid the removal of Cyberpunk 2077 from the store Sony.
				</p>
				<p>
					Shares of CD Projekt Red studio, which developed the Cyberpunk 2077 game, fell during trading on the Warsaw
					Stock Exchange by 20%. This is evidenced by the data of the trading platform. At the minimum, quotes fell to
					247 Polish zł. The paper ended the trading session on Thursday at 309.2 zł, writes RBC.
				</p>
				<p>
					The fall in quotes comes amid news about the removal of Cyberpunk 2077 from the Sony PlayStation Store due to
					an unsuccessful launch of the game. At the same time, the company promised to return the money to players who
					have already purchased Cyberpunk 2077.
				</p>
				<p>
					Cyberpunk 2077 was released on December 10, its release took place simultaneously on several platforms. Some
					users complained about technical issues and game crashes. For example, owners of the consoles of the previous
					generations - PlayStation 4 and Xbox One - are experiencing low 720p resolution, textures that won't load, and
					frame rate drops up to 15 per second.
				</p>
				<p>
					The release of Cyberpunk 2077 has been one of the most anticipated events in the gaming industry in 2020. Game
					release multiple times endured. Almost immediately after launch, the number of people simultaneously playing
					Cyberpunk 2077 is only Steam platform exceeded 1 million, which was a record for single-player projects.
				</p>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
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
