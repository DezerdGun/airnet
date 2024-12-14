import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Apache HTTP Server: основа современного веб-хостинга",
		uz: "Apache HTTP Server: основа современного веб-хостинга",
		en: "Apache HTTP Server: основа современного веб-хостинга",
	},
	title: {
		ru: "Apache HTTP Server: мощный и надежный веб-сервер",
		uz: "Apache HTTP Server: мощный и надежный веб-сервер",
		en: "Apache HTTP Server: мощный и надежный веб-сервер",
	},
	desc: {
		ru: "Узнайте о Apache HTTP Server, его функциях, преимуществах и почему он остается одним из самых популярных веб-серверов в мире.",
		uz: "Узнайте о Apache HTTP Server, его функциях, преимуществах и почему он остается одним из самых популярных веб-серверов в мире.",
		en: "Узнайте о Apache HTTP Server, его функциях, преимуществах и почему он остается одним из самых популярных веб-серверов в мире.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "11",
	view: "25",
	img: "/blog/apache.png",
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
		{ title: {ru: "Apache HTTP-сервер: что это?", uz: "Apache HTTP-сервер: что это?", en: "Apache HTTP-сервер: что это?", slug: "1" }},
		{ title: {ru: "Немного истории", uz: "Немного истории", en: "Немного истории", slug: "2" }},
		{ title: {ru: "Веб-сервер: общее понятие", uz: "Веб-сервер: общее понятие", en: "Веб-сервер: общее понятие", slug: "3" }},
		{ title: {ru: "Структурные особенности", uz: "Структурные особенности", en: "Структурные особенности", slug: "4" }},
		{ title: {ru: "Ядро", uz: "Ядро", en: "Ядро", slug: "5" }},
		{ title: {ru: "Модули", uz: "Модули", en: "Модули", slug: "6" }},
		{ title: {ru: "Конфигурация", uz: "Конфигурация", en: "Конфигурация", slug: "7" }},
		{ title: {ru: "Преимущества Apache", uz: "Преимущества Apache", en: "Преимущества Apache", slug: "8" }},
		{ title: {ru: "Недостатки Apache", uz: "Недостатки Apache", en: "Недостатки Apache", slug: "9" }},
		{ title: {ru: "Есть ли альтернативы?", uz: "Есть ли альтернативы?", en: "Есть ли альтернативы?", slug: "10" }},
		{ title: {ru: "Подведение итогов", uz: "Подведение итогов", en: "Подведение итогов", slug: "11" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Apache HTTP-сервер: что это?
				</h3>
				<p>
					Поиск информации – основной смысл использования интернета. Для этого пользователю приходится посещать определенные сайты, обращаться к посредническим веб-серверам, позволяющим взаимодействовать с данными, хранящимися на физических устройствах. Алгоритм работы довольно прост: получение пользовательского запроса, его обработка, ответная отправка и отображение необходимой страницы.
				</p>
				<p>
					Передача информации ведется через HTTP-протоколы и их модифицированные версии, более безопасные HTTPS. Создать веб-сервер и наладить подобную передачу можно при помощи соответствующего программного обеспечения. Согласно статистике, одно из наиболее популярных решений – Apache. Какие функции оно выполняет? Чем привлекает разработчиков?
				</p>
				<a name="2"></a>
				<h3>Немного истории</h3>
				<p>
					Название Apache HTTP-server, конечно, навевает ассоциации с североамериканским племенем индейцев, однако, на практике – означает “a patchy server”, то есть сервер с исправленными ошибками, улучшенный, модифицированный. 
				</p>
				<p>
					Такое наименование появилось не случайно. В 90-х годах прошлого столетия на пике популярности находился веб-сервер NCSA HTTPd, над которым трудилась целая команда специалистов, каждый из которых – стремился внести свои улучшения, предложить патчи, исправляющие недостатки первоначальной редакции, делающие ее стабильнее и надежнее.
				</p>
				<p>
					В 1995 году один из ведущих разработчиков программы, Брайан Белендорф, высказал идею об объединении всех выпущенных патчей. Именно так и появилась дебютная редакция Apache, которая с тех пор много раз видоизменялась и улучшалась. Согласно статистике, именно Apache сейчас применяется для обеспечения корректной работы каждого третьего сайта в мире, доступна в версиях для различных операционных систем, от наиболее распространенных, вроде Microsoft Windows и Linux, до не самых известных, BSD.
				</p>
				<a name="3"></a>
				<h3>Веб-сервер: общее понятие</h3>
				<p>
					Веб-сервер – посредническое звено между физическим оборудованием, размещенным на стороне провайдера, и пользовательским компьютером. При поступлении запроса он проводит поиск страницы сайта по каталогу, по достижении желаемого результата – отправляет ее. Алгоритм работы можно представить следующим образом:
				</p>
				<ul>
					<li>Для работы серверов применяются порты 80, 800 и подобные, открытые для клиентского программного обеспечения, к разряду которого относится, например, браузер.</li>
					<li>При поступлении запроса на один из обслуживаемых портов, Apache, либо аналогичное ПО, сравнивает его со встроенными инструкциями, принимает решение об исполнении или об отклонении.</li>
					<li>В случае отклонения пользователь увидит в браузере соответствующее уведомление, ошибку с кодом 404 или другим.</li>
					<li>После выполнения запроса, положительного или отрицательного, веб-сервер начинает работать в режиме ожидания.</li>
				</ul>
				<p>
					Apache, как и разработки-аналоги, функционирует при помощи протокола HTTP и его улучшенной версией, HTTPS, поддерживающей алгоритмы шифрования, более безопасной. Это наиболее удачное, быстрое, универсальное решение, позволяющее взаимодействовать со всеми файлами, независимо от типа, от небольших текстовых документов до объемных видео в формате высокого разрешения.
				</p>
				<img src="/blog/apache1.png" alt="Apache Server" />
				<p>
					Базовые задачи, решаемые Apache, выглядят следующим образом:
				</p>
				<ul>
					<li>Обеспечение высокой скорости открытия страниц сайтов, независимо от содержимого;</li>
					<li>Равномерное распределение нагрузки на серверное оборудование;</li>
					<li>Защита серверов от сбоев, аппаратных и программных;</li>
					<li>Упрощение настройки серверов при работе с PHP-скриптами.</li>
				</ul>
				<a name="4"></a>
				<h3>Структурные особенности</h3>
				<p>
					Одна из важнейших отличительных черт Apache – модульность структуры. В первую очередь необходимо провести установку ядра, а уже потом – подключить к нему все вспомогательные модули. Каждый структурный элемент Apache требует подробного рассмотрения.
				</p>
				<a name="5"></a>
				<h3>Ядро</h3>
				<p>
					Базовый элемент, в котором сосредоточены основные функции. Именно ядро помогает наладить взаимодействие с файлами, работу HTTP-протокола, установить вспомогательные, второстепенные модули. При необходимости, возможно использование Apache только на ядре, без дополнительных компонентов, однако, придется столкнуться с существенным ограничением функциональных возможностей.
				</p>
				<a name="6"></a>
				<h3>Модули</h3>
				<p>
					Модули представлены файлами, которые могут быть прикреплены к ядру для расширения спектра доступных функций. Инсталляция возможна как при первой установке Apache, в сочетании с ядром, так и постепенно, по мере необходимости. При такой схеме корректировки вносятся через файл конфигурации.
				</p>
				<p>
					В большинстве случаев модули ориентированы на решение специфических задач, в числе которых:
				</p>
				<ul>
					<li>Возможность работы с ранее недоступными языками программирования;</li>
					<li>Устранение программных ошибок и сбоев;</li>
					<li>Кэширование информации для ускорения загрузки страниц;</li>
					<li>Повышение уровней защиты и безопасности;</li>
					<li>Упрощение процедуры аутентификации, авторизации без ущерба для надежности.</li>
				</ul>
				<p>
					Количество модулей для Apache измеряется сотнями, что позволяет самостоятельно собрать оптимальную конфигурацию, соответствующую специфике использования.
				</p>
				<a name="7"></a>
				<h3>Конфигурация</h3>
				<p>
					Функционирование Apache строится на трех уровнях. Каждый требует тщательного разбора:
				</p>
				<ul>
					<li>Серверный. На этом уровне закреплены правила, в соответствии с которыми обрабатываются все запросы, поступающие на веб-сервер. Обозначить правила необходимо в файле “httpd.conf”.</li>
					<li>Виртуального хоста. Этот уровень говорит, что на компьютере “существует” целый комплекс сайтов, находящихся в подчинении единственного веб-сервера. При поступлении запросов каждый из них отправляется на нужный виртуальный сайт. Файл, который требует корректировок для правильного функционирования этого уровня – “extra/httpd-vhosts.conf”.</li>
					<li>Каталога. Этот уровень определяет, до каких каталогов пользователь может добраться, а в какие - его доступ должен быть заблокирован. В процессе настройки нужно взаимодействовать с файлом с расширением “.htaccess”.</li>
				</ul>
				<p>
					Apache взаимодействует с перечисленными файлами при поступлении каждого очередного запроса, так что внесенные изменения ощутимы сразу.
				</p>
				<a name="8"></a>
				<h3>Преимущества Apache</h3>
				<p>
					Программное обеспечение для настройки веб-сервера характеризуется как положительными, так и отрицательными сторонами. Для начала следует рассмотреть плюсы:
				</p>
				<ul>
					<li>Доступность. Код Apache HTTP Server открыт. Благодаря этому, его использование на 100% безвозмездно, более того, все желающие могут вносить корректировки, улучшать работу программы. Число дополнений постоянно увеличивается, многие из них – действительно полезны.</li>
					<li>Вариативность настроек. Каждый конфигурационный файл выполняет свои задачи, что помогает максимально точно адаптировать программу к эксплуатационной специфике.</li>
					<li>Широкие функциональные возможности. Они обеспечиваются возможностью добавления к базовому ядру Apache соответствующих модулей. Правильный подбор модулей – залог максимально быстрой, точной работы сайта, мгновенного открытия страниц вне зависимости от размещенного на них контента, будь то динамические или статические файлы.</li>
					<li>Универсальность. Apache подходит для любых серверов, сайтов, операционных систем. Эффективное использование возможно как в Microsoft Windows, так и в ОС Linux, MacOS.</li>
					<li>Поддержка различных языков программирования. Apache без проблем работает с Python, PHP, C++ и другими языками. Расширенная поддержка гарантирует 100% совместимости с различными базами данных, программным обеспечением, обеспечивающим корректную работу серверов.</li>
					<li>Максимальная пользовательская поддержка. История Apache длится уже больше четверти века, сообщество исчисляется миллионами специалистов, работает множество тематических форумов, где легко удастся найти ответы на возникшие вопросы, успешно справиться с проблемами, сбоями.</li>
				</ul>
				<img src="/blog/apache2.png" alt="Apache Server" />
				<a name="9"></a>
				<h3>Недостатки Apache</h3>
				<p>
					Теперь нужно рассмотреть основные минусы программы для веб-серверов. Их ощутимо меньше, при этом большинство недостатков в достаточной степени условно и легко решаемо:
				</p>
				<ul>
					<li>Проблемы с производительностью. Обработка каждого запроса предполагает, что Apache взаимодействует с файлами конфигурации. Каждый такой цикл требует времени, если серверы находятся под большой нагрузкой, значительно возрастает время ожидания ответа. Решение проблемы – правильный выбор вспомогательных модулей, ненужные компоненты рекомендуется отключить.</li>
					<li>Уязвимость. Конфигурация Apache может быть как очень простой, так и сложной. Чем сложнее – тем выше риск ошибки, провоцирующей критические уязвимости, серьезные сбои.</li>
					<li>Избыточность функционала. Практика показывает, что даже в базовых конфигурациях, последние версии Apache чересчур сложны и избыточны для большинства пользователей. Исправить ситуацию можно отключением ненужных модулей.</li>
				</ul>
				<a name="10"></a>
				<h3>Есть ли альтернативы?</h3>
				<p>
					Близкими к Apache разработками можно назвать следующие:
				</p>
				<ul>
					<li>NGINX. Основной конкурент, известный с 2004 года. Сильная сторона – уверенная работа с огромным количеством одновременных запросов. В этом плане Apache уступает NGINX, который куда лучше подходит для крупных новостных порталов, онлайн-каталогов и других проектов, где показатель посещаемости значительно превышает среднюю отметку.</li>
					<li>Microsoft IIS. Отличная совместимость с другими разработками Microsoft. К сожалению, разработчик ограничивает сферу использования веб-сервера, установить его можно только на ОС Windows.</li>
					<li>Apache Tomcat. Специальная версия веб-сервера, ориентированная на проекты, где активно используется динамическое содержимое. Со стандартными сайтами, например, на движке WordPress, рациональнее использовать классическую редакцию Apache.</li>
				</ul>
				<img src="/blog/apache3.png" alt="Apache Server" />
				<a name="11"></a>
				<h3>Подведение итогов</h3>
				<p>
					Несмотря на бесплатность, Apache – одно из наиболее мощных, эффективных решений для развертывания интернет-проектов вне зависимости от масштаба и специфики. Его использование требует определенных знаний, однако, доступно любому уверенному пользователю ПК. При возникновении вопросов ответы легко удастся найти на форумах и в тематических сообществах.
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
	next: "/blog/protocol-ipv6-chto-eto-takoe",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoe-apache-http-server",
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
