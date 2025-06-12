import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Что такое Docker?",
		uz: "Docker nima?",
		en: "What is Docker?",
	},
	title: {
		ru: "Docker — что это такое и зачем нужен",
		uz: "Docker - bu nima va u nima uchun kerak",
		en: "Docker - what is it and why is it needed",
	},
	desc: {
		ru: "Docker — платформа для разработки, доставки и запуска приложений 📦 Узнайте, что такое Docker, как он работает и зачем нужен. Преимущества использования Docker для разработчиков и DevOps.",
		uz: "Docker - bu ilovalarni ishlab chiqish, yetkazib berish va ishga tushirish uchun platforma 📦 Docker nima ekanligini, u qanday ishlashini va nima uchun kerakligini bilib oling. Ishlab chiquvchilar va DevOps uchun Docker-dan foydalanishning afzalliklari.",
		en: "Docker is a platform for developing, delivering and running applications 📦 Learn what Docker is, how it works and why you need it. Benefits of using Docker for developers and DevOps.",
	},
	date: "21.11.2024",
	updated: "21.11.2024",
	read: "11",
	view: "7",
	img: "/blog/docker.png",
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
		{ title: {ru: "Что такое Docker?", uz: "Docker nima?", en: "What is Docker?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Umumiy tushuncha", en: "General concept", slug: "2" }},
		{ title: {ru: "Структура и принцип действия", uz: "Tuzilishi va ishlash printsipi", en: "Structure and principle of operation", slug: "3" }},
		{ title: {ru: "Кому необходим Docker?", uz: "Docker kimga kerak?", en: "Who needs Docker?", slug: "4" }},
		{ title: {ru: "Преимущества платформы", uz: "Platformaning afzalliklari", en: "Advantages of the platform", slug: "5" }},
		{ title: {ru: "К вопросу о недостатках", uz: "Kamchiliklar masalasida", en: "On the issue of shortcomings", slug: "6" }},
		{ title: {ru: "Docker и хранение информации", uz: "Docker va saqlash", en: "Docker and Storage", slug: "7" }},
		{ title: {ru: "Практическое использование", uz: "Amaliy foydalanish", en: "Practical use", slug: "8" }},
		{ title: {ru: "Установка Docker", uz: "Docker ni o'rnatish", en: "Installing Docker", slug: "9" }},
		{ title: {ru: "Работа с образом Docker", uz: "Docker tasviri bilan ishlash", en: "Working with a Docker image", slug: "10" }},
		{ title: {ru: "Подведение итогов", uz: "Xulosa qilish", en: "Summing up", slug: "11" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Что такое Docker?
				</h3>
				<p>
					Контейнеризация – одна из наиболее свежих технологий в сфере IT. Ее принцип сводится к упаковке программного обеспечения в общий контейнер, что упрощает его перенос и дальнейшую распаковку. Наиболее распространенный инструмент для контейнеризации – Docker. В чем его особенности? Каковы преимущества? Каких рекомендаций придерживаться при использовании, чтобы в полной мере ощутить и реализовать их?
				</p>
				<a name="2"></a>
				<h3>Общее понятие</h3>
				<p>
					В первую очередь нужно подробнее познакомиться с методом контейнеризации. Контейнер дает возможность стандартизировать процесс развертки программного обеспечения, отделить его от уже имеющейся, базовой, инфраструктуры. Запуск программы осуществляется в отдельной среде, не связанной с ОС, не оказывает на нее влияния.
				</p>
				<p>
					Такой подход упрощает процесс разработки программы, специалистам не нужно думать о конкретной операционной среде, необходимости определенных конфигураций и зависимости. Разработчики могут полностью сосредоточиться на создании программы, упаковать в контейнер все необходимые для корректного функционирования настройки, не переживая по поводу невозможности запуска в неподходящей ОС.
				</p>
				<p>
					Docker – универсальная, функциональная, надежная платформа, в которой можно разрабатывать, доставлять, запускать контейнерное программное обеспечение. Она не просто позволяет работать над созданием контейнеров, но обеспечивает широкие возможности автоматизации их активации, помогает держать под контролем весь жизненный цикл.
				</p>
				<p>
					В целом, метод контейнеризации можно сравнить с виртуализации, однако, понятия не являются синонимичными. Виртуализация предполагает запуск хоста на гипервизоре, когда внутри одной операционной системы используется другая. Контейнеризация строится по другому принципу: процесс активируется непосредственно из ядра операционной системы, без виртуализации оборудования, что снижает требования к аппаратной части, обеспечивает высокое быстродействие при минимальной нагрузке на процессор.
				</p>
				<p>
					Разработка платформы датирована 2008 годом, однако, первые 5 лет она использовалась исключительно компанией-создателем, dotCloud. В 2013 началось свободное распространение, приложение сразу привлекло внимание разработчиков, началось усовершенствование, создание собственных библиотек.
				</p>
				<a name="3"></a>
				<h3>Структура и принцип действия</h3>
				<p>
					Docker дает возможность реализовать виртуализацию на уровне операционной системы, ядро которой становится основой формирования виртуальной среды. Структурно приложение состоит из множества компонентов, у каждого из которых – свои функции и задачи:
				</p>
				<ul>
					<li>Host. ОС, в среде которой функционирует Docker.</li>
					<li>Daemon. Служба, управляющая всеми базовыми объектами, от сетей до контейнеров.</li>
					<li>Client. Клиент, обеспечивающий взаимодействие между пользователем и платформой, обрабатывающий команды, позволяющий создавать контейнеры, конфигурировать их.</li>
					<li>Image. Это образ, не предполагающий возможности изменения, являющийся основой для разворачивания контейнеров. Приложение, готовящееся к использованию, должно быть упаковано именно в такой образ.</li>
					<li>Container. Приложение, которое было развернуто и успешно запущено.</li>
					<li>Registry. Специальное хранилище для образов.</li>
					<li>File. Файл, внутри которого находится инструкция, следование которой поможет грамотно собрать образ.</li>
					<li>Compose. Многофункциональный инструмент для взаимодействия сразу с несколькими контейнерами, их создания, настройки, конфигурирования.</li>
					<li>Desktop. Удобный GUI-клиент, позволяющий быстро разобраться во всех возможностях платформы, использовать максимум из доступных функций. Имеются версии для всех популярных операционных систем, Linux, Mac, Windows.</li>
				</ul>
				<a name="4"></a>
				<h3>Кому необходим Docker?</h3>
				<p>
					Платформа в первую очередь ориентирована на разработчиков и DevOps. Ее использование дает возможность разрабатывать, переносить, запускать программы в контейнерном формате, максимально универсальном, допускающим запуск в любой среде. Контейнер избавляет разработчика от лишних проблем, он может сконцентрироваться на создании программы, не переживая о совместимости ее с операционной средой, в которой планируется запуск.
				</p>
				<p>
					Разработчикам также доступны огромные количества приложений-контейнеров, изначально адаптированных для Docker. Обилие инструментов и функций помогает обойти массу ограничений, связанных с запуском приложений, наладить их беспроблемное, быстрое развертывание.
				</p>
				<a name="5"></a>
				<h3>Преимущества платформы</h3>
				<p>
					Основные сильные стороны Docker можно представить следующим образом:
				</p>
				<ul>
					<li>Устранение сложностей с зависимостями и рабочей средой. В контейнере можно разместить не только основное приложение, но и его зависимости, от настроечных файлов до системных утилит. Данная особенность помогает без лишних трудностей перенести программу на новую инфраструктуру. Это важно для разработчиков, создающих программу в одной среде, тестирующих и использующих – в других, где может не оказаться зависимостей, обеспечивающих функциональность и возможность запуска. С контейнерами подобные риски исключены.</li>
					<li>Высокий уровень безопасности. Все процессы, упакованные в контейнер, не взаимодействуют с основной операционной системой, что исключает риск ее повреждения, зависания, блокировки прочих системных процессов.</li>
					<li>Простота развертывания приложений. Стандартная схема инсталляции новой программы предполагает активацию скриптов, корректировку файлов с настройками, иные манипуляции, усложняющие процесс, требующие времени. Неопытный пользователь может запутаться, допустить ошибку, из-за которой программа окажется неработоспособной. Контейнерная методика предполагает полную автоматизацию всех действий, их выполнение в строго необходимой очередности. Формат оптимален, и при развертывании приложения сразу на множестве серверов, специалисту не придется несколько раз повторять идентичные манипуляции.</li>
					<li>Приближение к микросервисной архитектуре. Контейнеры оптимально соответствуют ей. Такая схема считается оптимальной, она подразумевает, что приложение дробится на компактные компоненты, в идеале – независимые, является противоположностью монолитной архитектуры, все компоненты которой находятся в тесной связи. Микросервисная архитектура ускоряет внедрение новых функций, позволяет добавлять новые компоненты без риска повредить остальные, нарушив работу приложения.</li>
					<li>Комплексная поддержка. Разработчикам доступны масштабные подборки контейнеров с открытым исходным кодом. Если найти образ под конкретную задачу не удается, можно прибегнуть к помощи сообщества.</li>
					<li>Непрерывность работы. Платформа позволяет воспользоваться эффективными инструментами управления трафиком, благодаря которым приложение обновляется автоматически, без влияния на работоспособность, функциональность, стабильность системы.</li>
				</ul>
				<a name="6"></a>
				<h3>К вопросу о недостатках</h3>
				<p>
					Платформа не лишена некоторых минусов, однако, они не выглядят слишком серьезными, не сказываются на популярности. В первую очередь, речь идет о следующих моментах:
				</p>
				<ul>
					<li>Значительное потребление ресурсов. Docker играет роль вспомогательной прослойки, которой требуются определенные мощности и ресурсы для уверенной работы. Пользователю сразу нужно определить, что для него первично – удобство или снижение нагрузки. Если производительность компьютера ограничена, рациональнее придерживаться традиционной схемы инсталляции программы, для современных ПК – подойдет Docker.</li>
					<li>Необходимость применения оркестратора при взаимодействии с крупными приложениями. Базового функционала Docker хватает для работы с несколькими приложениями, однако, он не подойдет, если в рамках одной программы используются десятки и, тем более, сотни сервисов. В таких ситуациях не обойтись без оркестраторов, например, OpenShift или Kubernetes.</li>
					<li>Сложности при работе в Windows и Mac. Платформа разрабатывалась под Linux, именно эта операционная система позволяет на 100% раскрыть ее потенциал, использовать максимум доступных функций без дополнительных манипуляций. На прочих ОС придется воспользоваться виртуальными машинами. Это не слишком сложно, однако, потребует дополнительных действий и вычислительных ресурсов.</li>
				</ul>
				<a name="7"></a>
				<h3>Docker и хранение информации</h3>
				<p>
					Уникальная черта контейнеров Docker – эфемерность. Проще говоря, они могут быть удалены, перезапущены, деактивированы при первой необходимости. Все перечисленные манипуляции приведут к потере данных, а потому программа изначально должна быть разработана так, чтобы не находиться в зависимости от информации, находящейся в контейнере.
				</p>
				<p>
					Особенность идеально соответствует ПО и сервисам, не нуждающимся в сохранении результатов работы. Простейший пример – калькуляторы, которые нужны только для расчетов, а не для продолжительного хранения. Если существует потребность именно в хранении, придется воспользоваться одной из следующих методик:
				</p>
				<ul>
					<li>Тома. Том – это специальная директория, созданная непосредственно Docker, позволяющая решить вопрос хранения информации. Том может быть персональным, работающим с конкретным контейнером, либо общим – доступным сразу нескольким. Местом хранения может быть как основной компьютер, хост, так и удаленные сервера, облачные сервисы.</li>
					<li>Формирование каталогов. Методика предполагает создание директории на хосте и ее преобразование в контейнер. Она надежна, однако, не слишком удобна, возникают трудности с резервным копированием, доступностью информации сразу для нескольких контейнеров.</li>
					<li>Tmpfs. Tmpfs – специальные хранилища файлов, доступные исключительно на Linux. Для долговременного хранения они не подходят, остановка сразу приводит к потере информации, однако, имеют преимущество – максимальная скорость доступа, за счет чего контейнер функционирует стабильнее и быстрее.</li>
				</ul>
				<a name="8"></a>
				<h3>Практическое использование</h3>
				<p>
					При помощи Docker удается эффективно решить следующие задачи:
				</p>
				<ul>
					<li>Развертывание рабочих сред и приложений. Перенос приложения можно выполнить буквально парой команд. Простой задачей является и разворачивание операционной системы, которая сразу будет иметь все необходимые настройки.</li>
					<li>Изоляция запуска. Платформа предполагает запуск приложения в отрыве от системы, сбои, вызванные несовместимостью с другими программными компонентами, исключены.</li>
					<li>Контроль ресурсов. Docker помогает рационально использовать доступные ресурсы, точно распределять их между различными программами. Изоляция процессов исключает повышенную нагрузку на ОЗУ и ЦПУ.</li>
					<li>Обеспечение безопасности. Вредоносный код, находящийся в контейнере, не представляет угрозы серверу-хосту. Главное – правильность настроек. Даже при критических ошибках, все прочие сервисы и службы останутся работоспособными.</li>
					<li>Быстрая разработка ПО. Контейнеризация – метод, благодаря которому программирование требует минимальных временных затрат. Ускоряется работа как программистов-одиночек, так и целых команд.</li>
					<li>Эффективное взаимодействие со сложными системами и их масштабирование. Базового функционала Docker может не хватить для этого, однако, на выручку разработчику придут оркестраторы.</li>
				</ul>
				<a name="9"></a>
				<h3>Установка Docker</h3>
				<p>
					Загрузить дистрибутив платформы можно с официального сайта. Алгоритм инсталляции на операционной системе Windows выглядит следующим образом:
				</p>
				<ul>
					<li>Открытие загруженного дистрибутива от имени администратора, начало установки.</li>
					<li>Перезагрузка компьютера после успешного завершения инсталляции.</li>
					<li>Запуск Docker Desktop.</li>
					<li>Принятие всех лицензионных соглашений.</li>
					<li>Установка вспомогательных компонентов WSL2, при необходимости. Загрузить их можно с сайта Microsoft.</li>
				</ul>
				<p>
					Для MacOS характерен другой алгоритм:
				</p>
				<ul>
					<li>Выбор дистрибутива. Он должен соответствовать процессору, которым укомплектован компьютер. Используются ЦПУ от Intel или фирменные разработки Apple.</li>
					<li>Открытие файла “Docker.dmg”, запуск инсталляции, перемещение иконки Docker в директорию с программами.</li>
					<li>Запуск платформы двойным кликом.</li>
					<li>Подтверждение принятия лицензионного соглашения, ввод пароля.</li>
					<li>Просмотр или пропуск инструкций.</li>
				</ul>
				<a name="10"></a>
				<h3>Работа с образом Docker</h3>
				<p>
					Базовый образ – важнейший компонент платформы, позволяющий использовать технологию контейнеризации. Именно он хранит процессы, зависимости, без которых корректная работа программы оказалась бы невозможной. Лучший вариант для разработчика – загрузка готового образа из библиотеки, вариантов множество, без особых проблем удастся подобрать образ под конкретную задачу.
				</p>
				<p>
					Изменение исходного образа формирует слои, доступные исключительно для чтения, так что конечная редакция – состоит из целого комплекса слоев. Послойная структура позволяет, при необходимости, отменить изменения, быстро решить проблемы с работоспособностью при ошибочных действиях.
				</p>
				<p>
					Образ можно представить как комплекс слоев, доступных сугубо для чтения, контейнер – это тот же образ, однако, с дополнительным верхним слоем, за счет которого происходит запись. Главный файл образа – manifest, где хранится вся основная информация, ссылки на слои, их объем и прочее, что требуется для стабильной работы.
				</p>
				<p>
					Развертывание образа не предполагает каких-либо ограничений по хосту и количеству раз. Выполнить задачу можно двумя способами:
				</p>
				<ul>
					<li>Интерактивный. Наиболее простой, позволяющий разработчику менять среду окружения при запуске. Для этого используется команда “docker run image_name: tag_name”.</li>
					<li>Dockerfile. Более сложная схема. Каждый образ связан с собственным Dockerfile, в котором нужно прописать требуемые команды, а также исключить “лишние” файлы, ненужные для конкретной сборки, указав их в .dockerignore. Команда для создания образа – “docker image build”.</li>
				</ul>
				<a name="11"></a>
				<h3>Подведение итогов</h3>
				<p>
					Docker – очень мощная платформа, позволяющая разработчику развернуть нужный сервис на любом компьютере. Вдобавок, она является эффективным инструментом для тестирования новой программы, ее доставки на сервер. Освоение поначалу может показаться сложным, однако, оно не займет много времени даже у новичка, а впоследствии – сэкономит массу сил и ресурсов.
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
				Docker nima?
				</h3>
				<p>
				Konteynerlashtirish IT sohasidagi eng yangi texnologiyalardan biridir. Uning printsipi dasturiy ta'minotni umumiy konteynerga qadoqlashdan iborat bo'lib, uni uzatish va undan keyin ochishni osonlashtiradi. Konteynerlash uchun eng keng tarqalgan vosita bu Docker. Uning xususiyatlari qanday? Qanday afzalliklari bor? To'liq tajriba va ularni amalga oshirish uchun uni qo'llashda qanday tavsiyalarga amal qilish kerak?
				</p>
				<a name="2"></a>
				<h3>Umumiy tushuncha</h3>
				<p>
				Avvalo, konteynerlash usuli bilan batafsilroq tanishishingiz kerak. Konteyner dasturiy ta'minotni joylashtirish jarayonini mavjud, asosiy infratuzilmadan ajratib, standartlashtirishga imkon beradi. Dastur OS bilan bog'lanmagan alohida muhitda ishga tushiriladi va unga ta'sir qilmaydi.
				</p>
				<p>
				Ushbu yondashuv dasturni ishlab chiqish jarayonini soddalashtiradi; mutaxassislar ma'lum bir ish muhiti, muayyan konfiguratsiyalar va bog'liqliklarga bo'lgan ehtiyoj haqida o'ylashlari shart emas. Ishlab chiquvchilar to'liq e'tiborni dastur yaratishga qaratishi, to'g'ri ishlash uchun zarur bo'lgan barcha sozlamalarni mos bo'lmagan OTda ishga tushirish mumkin emasligi haqida tashvishlanmasdan konteynerga to'plashi mumkin.
				</p>
				<p>
				Docker - bu universal, funktsional va ishonchli platforma bo'lib, unda siz konteyner dasturlarini ishlab chiqishingiz, yetkazib berishingiz va ishga tushirishingiz mumkin. Bu nafaqat konteynerlarni yaratish ustida ishlashga imkon beradi, balki ularni faollashtirishni avtomatlashtirish uchun keng imkoniyatlarni beradi, butun hayot aylanishini nazorat ostida saqlashga yordam beradi.
				</p>
				<p>
				Umuman olganda, konteynerlashtirish usulini virtualizatsiya bilan solishtirish mumkin, ammo tushunchalar sinonim emas. Virtualizatsiya gipervisorda boshqa operatsion tizim ishlatilsa, xostni ishga tushirishni o'z ichiga oladi. Konteynerlashtirish boshqa printsip asosida qurilgan: jarayon to'g'ridan-to'g'ri operatsion tizim yadrosidan, apparat virtualizatsiyasisiz faollashtiriladi, bu apparat talablarini kamaytiradi, minimal protsessor yuki bilan yuqori ishlashni ta'minlaydi.
				</p>
				<p>
				Platforma 2008 yilda ishlab chiqilgan, biroq dastlabki 5 yil davomida u faqat dotCloud yaratuvchisi kompaniyasi tomonidan ishlatilgan. 2013 yilda bepul tarqatish boshlandi, dastur darhol ishlab chiquvchilarning e'tiborini tortdi, takomillashtirish va o'z kutubxonalarini yaratish boshlandi.
				</p>
				<a name="3"></a>
				<h3>Tuzilishi va ishlash printsipi</h3>
				<p>
				Docker virtualizatsiyani operatsion tizim darajasida amalga oshirish imkonini beradi, uning yadrosi virtual muhitni shakllantirish uchun asos bo'ladi. Strukturaviy ravishda dastur ko'plab tarkibiy qismlardan iborat bo'lib, ularning har biri o'z funktsiyalari va vazifalariga ega:
				</p>
				<ul>
				<li>Xost. Docker ishlaydigan OT.</li>
				<li>Daemon. Tarmoqlardan tortib konteynerlargacha bo‘lgan barcha asosiy obyektlarni boshqaradigan xizmat.</li>
				<li>Mijoz. Foydalanuvchi va platforma oʻrtasidagi oʻzaro aloqani taʼminlovchi, buyruqlarni qayta ishlaydigan, konteynerlar yaratish, ularni sozlash imkonini beruvchi mijoz.</li>
				<li>Rasm. Bu konteynerlarni joylashtirish uchun asos bo'lgan o'zgartirib bo'lmaydigan rasm. Foydalanish uchun tayyorlanayotgan ilova ushbu rasmga joylashtirilishi kerak.</li>
				<li>Konteyner. Joylashtirilgan va muvaffaqiyatli ishga tushirilgan ilova.</li>
				<li>Ro'yxatga olish. Rasmlar uchun maxsus xotira.</li>
				<li>Fayl. Agar bajarilsa, tasvirni toʻgʻri yigʻishga yordam beradigan koʻrsatmalarni oʻz ichiga olgan fayl.</li>
				<li>Yozing. Bir vaqtning o'zida bir nechta konteynerlar bilan ishlash, ularni yaratish, sozlash va sozlash uchun ko'p funksiyali vosita.</li>
				<li>Ish stoli. Platformaning barcha imkoniyatlarini tezda tushunish va mavjud funktsiyalardan maksimal darajada foydalanish imkonini beruvchi qulay GUI mijozi. Barcha mashhur operatsion tizimlar, Linux, Mac, Windows uchun versiyalari mavjud.</li>
				</ul>
				<a name="5"></a>
				<h3>Platformaning afzalliklari</h3>
				<p>
				Docker-ning asosiy kuchli tomonlarini quyidagicha ko'rsatish mumkin:
				</p>
				<ul>
				<li>Bog'liklarning murakkabligini va ish muhitini yo'q qilish. Konteynerda siz nafaqat asosiy dasturni, balki uning konfiguratsiya fayllaridan tizim yordam dasturlarigacha bo'lgan bog'liqliklarini ham joylashtirishingiz mumkin. Bu xususiyat dasturni keraksiz qiyinchiliklarsiz yangi infratuzilmaga o'tkazishga yordam beradi. Bu bitta muhitda dastur yaratadigan, uni sinab ko'radigan va boshqalarida ishlatadigan ishlab chiquvchilar uchun muhim, bu erda funksionallik va ishlash qobiliyatini ta'minlaydigan bog'liqliklar bo'lmasligi mumkin. Konteynerlar bilan bunday xavflar istisno qilinadi.</li>
				<li>Yuqori darajadagi xavfsizlik. Konteynerga qadoqlangan barcha jarayonlar asosiy operatsion tizim bilan o'zaro ta'sir qilmaydi, bu uning shikastlanishi, muzlashi va boshqa tizim jarayonlarini blokirovka qilish xavfini yo'q qiladi.</li>
				<li>Ilovalarni joylashtirish qulayligi. Yangi dastur uchun standart o'rnatish sxemasi skriptlarni faollashtirish, sozlamalar bilan fayllarni sozlash va jarayonni murakkablashtiradigan va vaqt talab qiladigan boshqa manipulyatsiyalarni o'z ichiga oladi. Tajribasiz foydalanuvchi chalkashib ketishi va xatoga yo'l qo'yishi mumkin, bu esa dasturni ishlamay qoldiradi. Konteyner usuli barcha harakatlarni to'liq avtomatlashtirishni, ularning qat'iy talab qilinadigan tartibda bajarilishini o'z ichiga oladi. Format optimaldir va dasturni bir vaqtning o'zida bir nechta serverlarga joylashtirganda, mutaxassis bir xil manipulyatsiyalarni bir necha marta takrorlashi shart emas.</li>
				<li>Mikroservis arxitekturasiga yaqinlashish. Konteynerlar unga eng mos keladi. Ushbu sxema optimal deb hisoblanadi, u ilovaning ixcham komponentlarga bo'linishini, ideal mustaqilligini, barcha komponentlari bir-biri bilan chambarchas bog'liq bo'lgan monolitik arxitekturaga qarama-qarshi ekanligini anglatadi. Mikroservis arxitekturasi yangi funksiyalarni amalga oshirishni tezlashtiradi, qolgan qismiga zarar yetkazmaslik, ilovaning ishlashini buzmaslik xavfisiz yangi komponentlarni qo‘shish imkonini beradi.</li>
				<li>Har tomonlama qo'llab-quvvatlash. Ishlab chiquvchilar ochiq kodli konteynerlarning katta tanlovidan foydalanishlari mumkin. Agar muayyan vazifa uchun rasm topa olmasangiz, hamjamiyat yordamiga murojaat qilishingiz mumkin.</li>
				<li>Ishning uzluksizligi. Platforma trafikni boshqarishning samarali vositalaridan foydalanish imkonini beradi, buning yordamida dastur tizimning ishlashi, funksionalligi va barqarorligiga taʼsir qilmasdan avtomatik ravishda yangilanadi.</li>
				</ul>
				<a name="6"></a>
				<h3>Kamchiliklar masalasida</h3>
				<p>
				Platformaning ba'zi kamchiliklari yo'q, ammo ular juda jiddiy ko'rinmaydi, mashhurlikka ta'sir qilmaydi. Avvalo, biz quyidagi fikrlar haqida gapiramiz:
				</p>
				<ul>
				<li>Resurslarning sezilarli iste'moli. Docker yordamchi qatlam rolini o'ynaydi, bu ishonchli ishlash uchun ma'lum imkoniyatlar va resurslarni talab qiladi. Foydalanuvchi o'zi uchun nima asosiy ekanligini darhol aniqlashi kerak - qulaylik yoki yukni kamaytirish. Agar kompyuterning ishlashi cheklangan bo'lsa, dasturni o'rnatishning an'anaviy sxemasiga rioya qilish yanada oqilona; zamonaviy shaxsiy kompyuterlar uchun Docker mos keladi.</li>
				<li>Katta ilovalar bilan ishlashda orkestrdan foydalanish zarurati. Docker-ning asosiy funksionalligi bir nechta ilovalar bilan ishlash uchun etarli, ammo bir dastur doirasida o'nlab, ayniqsa, yuzlab xizmatlardan foydalanilsa, mos kelmaydi. Bunday vaziyatlarda siz orkestrlarsiz ishlay olmaysiz, masalan, OpenShift yoki Kubernetes.</li>
				<li>Windows va Mac-da ishlashda qiyinchiliklar. Platforma Linux uchun ishlab chiqilgan bo'lib, aynan shu operatsion tizim sizga o'z imkoniyatlarini 100% ochib berishga, qo'shimcha manipulyatsiyalarsiz maksimal mavjud funksiyalardan foydalanishga imkon beradi. Boshqa operatsion tizimlarda siz virtual mashinalardan foydalanishingiz kerak bo'ladi. Bu unchalik qiyin emas, lekin qo'shimcha harakatlar va hisoblash resurslarini talab qiladi.</li>
				</ul>
				<a name="7"></a>
				<h3>Docker va ma'lumotlarni saqlash</h3>
				<p>
				Docker konteynerlarining o'ziga xos xususiyati ularning vaqtinchalikligidir. Oddiy qilib aytganda, ular birinchi ehtiyojda o'chirilishi, qayta ishga tushirilishi, o'chirilishi mumkin. Ushbu manipulyatsiyalarning barchasi ma'lumotlarning yo'qolishiga olib keladi va shuning uchun dastur dastlab konteynerdagi ma'lumotlarga bog'liq bo'lmagan tarzda ishlab chiqilishi kerak.
				</p>
				<p>
				Bu xususiyat o'z ish natijalarini saqlashga hojat bo'lmagan dasturiy ta'minot va xizmatlar uchun idealdir. Eng oddiy misol - uzoq muddatli saqlash uchun emas, balki faqat hisob-kitoblar uchun zarur bo'lgan kalkulyatorlar. Agar saqlash kerak bo'lsa, siz quyidagi usullardan birini qo'llashingiz kerak bo'ladi:
				</p>
				<ul>
				<li>Jildlar. To'g'ridan-to'g'ri Docker tomonidan yaratilgan maxsus katalog ma'lumotni saqlash masalasini hal qilishga imkon beradi. Jild shaxsiy bo'lishi mumkin, ma'lum bir konteyner bilan ishlaydi yoki umumiy bo'lishi mumkin - bir vaqtning o'zida bir nechtasi uchun mavjud. Saqlash joyi asosiy kompyuter, xost yoki masofaviy serverlar, bulut xizmatlari boʻlishi mumkin.</li>
				<li>Kataloglar yaratish. Usul xostda katalog yaratish va uni konteynerga aylantirishni o'z ichiga oladi. Bu ishonchli, lekin unchalik qulay emas, zaxira nusxasini yaratish, bir vaqtning o'zida bir nechta konteynerlar uchun ma'lumotlar mavjudligi bilan bog'liq qiyinchiliklar mavjud.</li>
				<li>Tmpfs. Tmpfs - bu faqat Linuxda mavjud bo'lgan maxsus fayllar ombori. Ular uzoq muddatli saqlash uchun mos emas, to‘xtab qolishi darhol ma’lumotlarning yo‘qolishiga olib keladi, biroq ularning afzalligi bor – maksimal kirish tezligi, buning natijasida konteyner barqarorroq va tezroq ishlaydi.</li>
				</ul>
				<a name="8"></a>
				<h3>Amaliy foydalanish</h3>
				<p>
				Docker-dan foydalanib, siz quyidagi muammolarni samarali hal qilishingiz mumkin:
				</p>
				<ul>
				<li>Ish muhiti va ilovalarini joylashtirish. Ilova tom ma'noda bir nechta buyruqlar bilan uzatilishi mumkin. Barcha kerakli sozlamalar darhol bo'ladigan operatsion tizimni o'rnatish ham oddiy vazifadir.</li>
				<li>Izolyatsiyani ishga tushiring. Platforma dastur tizimdan alohida ishga tushirilgan deb hisoblaydi; boshqa dasturiy ta'minot komponentlari bilan mos kelmasligi natijasida yuzaga kelgan nosozliklar bundan mustasno.</li>
				<li>Resurs nazorati. Docker mavjud resurslardan oqilona foydalanishga, ularni turli dasturlar o'rtasida to'g'ri taqsimlashga yordam beradi. Jarayon izolyatsiyasi operativ xotira va protsessorga ortib borayotgan yukni bartaraf qiladi.</li>
				<li>Xavfsizlik. Konteynerda joylashgan zararli kod xost serveriga tahdid solmaydi. Asosiysi, to'g'ri sozlamalar. Hatto jiddiy xatolar bo'lsa ham, boshqa barcha xizmatlar va xizmatlar o'z ishini davom ettiraveradi.</li>
				<li>Tezkor dasturiy ta'minotni ishlab chiqish. Konteynerlashtirish - bu dasturlash uchun minimal vaqt investitsiyasini talab qiladigan usul. Ham individual dasturchilar, ham butun jamoalar ishi tezlashadi.</li>
				<li>Murakkab tizimlar va ularni masshtablash bilan samarali o'zaro ta'sir qilish. Buning uchun Dockerning asosiy funksiyalari yetarli boʻlmasligi mumkin, ammo ishlab chiquvchiga orkestrlar yordamga keladi.</li>
				</ul>
				<a name="9"></a>
				<h3>Docker o'rnatilmoqda</h3>
				<p>
				Platformani tarqatishni rasmiy veb-saytdan yuklab olishingiz mumkin. Windows operatsion tizimida o'rnatish algoritmi quyidagicha:
				</p>
				<ul>
				<li>Yuklab olingan tarqatishni administrator sifatida oching, oʻrnatishni boshlang.</li>
				<li>Muvaffaqiyatli o'rnatishdan so'ng kompyuterni qayta yoqing.</li>
				<li>Docker Desktop-ni ishga tushiring.</li>
				<li>Barcha litsenziya shartnomalarini qabul qiling.</li>
				<li>Agar kerak bo'lsa, yordamchi WSL2 komponentlarini o'rnatish. Ularni Microsoft veb-saytidan yuklab olish mumkin.</li>
				</ul>
				<p>
				MacOS boshqa algoritmga ega:
				</p>
				<ul>
				<li>Taqsimotni tanlash. U kompyuter bilan jihozlangan protsessorga mos kelishi kerak. Intel protsessorlari yoki xususiy Apple ishlanmalaridan foydalaniladi.</li>
				<li>“Docker.dmg” faylini ochish, o‘rnatishni ishga tushirish, Docker belgisini dastur katalogiga ko‘chirish.</li>
				<li>Platformani ikki marta bosish orqali ishga tushirish.</li>
				<li>Litsenziya shartnomasini qabul qilishni tasdiqlash, parolni kiritish.</li>
				<li>Ko'rsatmalarni ko'rish yoki o'tkazib yuborish.</li>
				</ul>
				<a name="10"></a>
				<h3>Docker tasviri bilan ishlash</h3>
				<p>
				Asosiy tasvir platformaning eng muhim komponenti bo'lib, konteynerlashtirish texnologiyasidan foydalanishga imkon beradi. U jarayonlar va bog'liqliklarni saqlaydi, ularsiz dasturning to'g'ri ishlashi mumkin bo'lmaydi. Ishlab chiquvchi uchun eng yaxshi variant kutubxonadan tayyor tasvirni yuklab olishdir, ko'plab variantlar mavjud va siz ma'lum bir vazifa uchun rasmni osongina tanlashingiz mumkin.
				</p>
				<p>
				Asl tasvirni o'zgartirish faqat o'qish uchun mavjud bo'lgan qatlamlarni yaratadi, shuning uchun oxirgi versiya qatlamlarning butun majmuasidan iborat. Qatlamli tuzilma, agar kerak bo'lsa, o'zgarishlarni bekor qilishga, noto'g'ri harakatlar sodir bo'lganda ishlash bilan bog'liq muammolarni tezda hal qilishga imkon beradi.
				</p>
				<p>
				Tasvirni faqat o'qish uchun mavjud bo'lgan qatlamlar majmuasi sifatida ko'rish mumkin, konteyner bir xil tasvirdir, lekin qo'shimcha yuqori qatlamga ega, buning natijasida ro'yxatga olish sodir bo'ladi. Asosiy rasm fayli manifest bo'lib, unda barcha asosiy ma'lumotlar, qatlamlarga havolalar, ularning hajmi va barqaror ishlash uchun zarur bo'lgan boshqa narsalar saqlanadi. </p>
				<p>
				Tasvirni joylashtirish xostga yoki martalar soniga hech qanday cheklovlarni bildirmaydi. Vazifani ikki yo'l bilan bajarish mumkin:
				</p>
				<ul>
				<li>Interaktiv. Eng oddiy, ishlab chiquvchiga ishga tushganda muhitni o'zgartirishga imkon beradi. Buning uchun “docker run image_name: tag_name” buyrug‘idan foydalaning.</li>
				<li>Docker fayli. Keyinchalik murakkab sxema. Har bir rasm o'zining Dockerfile bilan bog'langan bo'lib, unda siz kerakli buyruqlarni yozishingiz kerak, shuningdek, ma'lum bir tuzilish uchun kerak bo'lmagan "qo'shimcha" fayllarni .dockerignore da ko'rsatib, chiqarib tashlashingiz kerak. Tasvir yaratish buyrug‘i “docker image build”.</li>
				</ul>
				<a name="11"></a>
				<h3>Xulosa qilish</h3>
				<p>
				Docker juda kuchli platforma bo'lib, ishlab chiquvchiga kerakli xizmatni istalgan kompyuterda joylashtirish imkonini beradi. Bundan tashqari, bu yangi dasturni sinovdan o'tkazish, uni serverga etkazish uchun samarali vositadir. Uni o'zlashtirish dastlab qiyin bo'lib tuyulishi mumkin, lekin bu hatto yangi boshlovchi uchun ham ko'p vaqtni talab qilmaydi va uzoq muddatda bu juda ko'p kuch va resurslarni tejaydi. </p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				What is Docker?
				</h3>
				<p>
				Containerization is one of the most recent technologies in the IT field. Its principle comes down to packing software in a common container, which simplifies its transfer and further unpacking. The most common tool for containerization is Docker. What are its features? What are the advantages? What recommendations should be followed when using it in order to fully experience and implement them?
				</p>
				<a name="2"></a>
				<h3>General concept</h3>
				<p>
				First of all, you need to get acquainted with the containerization method in more detail. The container makes it possible to standardize the software deployment process, separating it from the existing, basic infrastructure. The program is launched in a separate environment, not associated with the OS, and does not affect it.
				</p>
				<p>
				This approach simplifies the program development process; specialists do not need to think about a specific operating environment, the need for certain configurations and dependencies. Developers can fully focus on creating a program, pack all the settings necessary for correct operation into a container, without worrying about the inability to launch in an unsuitable OS.
				</p>
				<p>
				Docker is a universal, functional, reliable platform in which you can develop, deliver, and launch container software. It not only allows you to work on creating containers, but also provides extensive capabilities for automating their activation, helps to keep the entire life cycle under control.
				</p>
				<p>
				In general, the containerization method can be compared with virtualization, however, the concepts are not synonymous. Virtualization involves running a host on a hypervisor when another operating system is used inside one. Containerization is built on a different principle: the process is activated directly from the operating system kernel, without hardware virtualization, which reduces hardware requirements, ensures high performance with minimal processor load.
				</p>
				<p>
				The platform was developed in 2008, but for the first 5 years it was used exclusively by the creator company, dotCloud. In 2013, free distribution began, the application immediately attracted the attention of developers, improvements began, and the creation of their own libraries.
				</p>
				<a name="3"></a>
				<h3>Structure and operating principle</h3>
				<p>
				Docker makes it possible to implement virtualization at the operating system level, the kernel of which becomes the basis for the formation of a virtual environment. Structurally, the application consists of many components, each of which has its own functions and tasks:
				</p>
				<ul>
				<li>Host. OS in which Docker operates.</li>
				<li>Daemon. Service that manages all basic objects, from networks to containers.</li>
				<li>Client. A client that provides interaction between the user and the platform, processes commands, allows you to create containers, configure them.</li>
				<li>Image. This is an image that cannot be changed, which is the basis for deploying containers. An application that is being prepared for use must be packed into this image.</li>
				<li>Container. An application that has been deployed and successfully launched.</li>
				<li>Registry. A special storage for images.</li>
				<li>File. A file that contains instructions that, if followed, will help you correctly assemble the image.</li>
				<li>Compose. A multifunctional tool for interacting with several containers at once, creating, setting up, and configuring them.</li>
				<li>Desktop. A convenient GUI client that allows you to quickly understand all the capabilities of the platform and use the maximum of the available functions. There are versions for all popular operating systems, Linux, Mac, Windows.</li>
				</ul>
				<a name="5"></a>
				<h3>Platform advantages</h3>
				<p>
				The main strengths of Docker can be presented as follows:
				</p>
				<ul>
				<li>Eliminating the complexity of dependencies and the working environment. In a container, you can place not only the main application, but also its dependencies, from configuration files to system utilities. This feature helps to transfer the program to a new infrastructure without unnecessary difficulties. This is important for developers who create a program in one environment, test and use it in others, where there may be no dependencies that provide functionality and the ability to run. With containers, such risks are excluded.</li>
				<li>High level of security. All processes packed in a container do not interact with the main operating system, which eliminates the risk of its damage, freezing, blocking other system processes.</li>
				<li>Ease of application deployment. The standard installation scheme for a new program involves activating scripts, adjusting files with settings, and other manipulations that complicate the process and take time. An inexperienced user may get confused and make a mistake that will render the program inoperable. The container method involves full automation of all actions, their execution in the strictly required order. The format is optimal, and when deploying an application on multiple servers at once, a specialist will not have to repeat identical manipulations several times.</li>
				<li>Approaching microservice architecture. Containers are optimally suited to it. This scheme is considered optimal, it implies that the application is divided into compact components, ideally independent, is the opposite of a monolithic architecture, all components of which are closely related. Microservice architecture accelerates the implementation of new functions, allows you to add new components without the risk of damaging the rest, disrupting the operation of the application.</li>
				<li>Comprehensive support. Developers have access to large selections of open source containers. If you can't find an image for a specific task, you can resort to the help of the community.</li>
				<li>Continuity of work. The platform allows you to use effective traffic management tools, thanks to which the application is updated automatically, without affecting the performance, functionality, and stability of the system.</li>
				</ul>
				<a name="6"></a>
				<h3>On the issue of disadvantages</h3>
				<p>
				The platform is not without some disadvantages, however, they do not seem too serious, do not affect popularity. First of all, we are talking about the following points:
				</p>
				<ul>
				<li>Significant resource consumption. Docker plays the role of an auxiliary layer, which requires certain capacities and resources for confident operation. The user must immediately determine what is primary for him - convenience or load reduction. If the computer's performance is limited, it is more rational to stick to the traditional program installation scheme; for modern PCs, Docker is suitable.</li>
				<li>The need to use an orchestrator when interacting with large applications. The basic functionality of Docker is sufficient for working with several applications, however, it is not suitable if dozens and, especially, hundreds of services are used within one program. In such situations, you cannot do without orchestrators, for example, OpenShift or Kubernetes.</li>
				<li>Difficulties when working in Windows and Mac. The platform was developed for Linux, it is this operating system that allows you to 100% reveal its potential, use the maximum available functions without additional manipulations. On other OS, you will have to use virtual machines. This is not too difficult, however, it will require additional actions and computing resources.</li>
				</ul>
				<a name="7"></a>
				<h3>Docker and data storage</h3>
				<p>
				A unique feature of Docker containers is their ephemerality. Simply put, they can be deleted, restarted, deactivated at the first need. All of these manipulations will lead to data loss, and therefore the program should initially be developed in such a way as not to depend on the information in the container.
				</p>
				<p>
				This feature is ideal for software and services that do not need to save the results of their work. The simplest example is calculators that are only needed for calculations, and not for long-term storage. If there is a need for storage, you will have to use one of the following methods:
				</p>
				<ul>
				<li>Volumes. A volume is a special directory created directly by Docker, which allows you to solve the issue of storing information. A volume can be personal, working with a specific container, or shared - available to several at once. The storage location can be either the main computer, host, or remote servers, cloud services.</li>
				<li>Creating directories. The method involves creating a directory on the host and converting it into a container. It is reliable, but not very convenient, there are difficulties with backup, availability of information for several containers at once.</li>
				<li>Tmpfs. Tmpfs is a special file storage available exclusively on Linux. They are not suitable for long-term storage, stopping immediately leads to loss of information, however, they have an advantage - maximum access speed, due to which the container functions more stably and faster.</li>
				</ul>
				<a name="8"></a>
				<h3>Practical use</h3>
				<p>
				Using Docker, you can effectively solve the following problems:
				</p>
				<ul>
				<li>Deployment of work environments and applications. The application can be transferred with literally a couple of commands. Deploying an operating system that will immediately have all the necessary settings is also a simple task.</li>
				<li>Launch isolation. The platform assumes that the application is launched separately from the system; failures caused by incompatibility with other software components are excluded.</li>
				<li>Resource control. Docker helps to rationally use available resources, accurately distribute them between different programs. Process isolation eliminates increased load on RAM and CPU.</li>
				<li>Security. Malicious code located in the container does not pose a threat to the host server. The main thing is the correct settings. Even with critical errors, all other services and services will remain operational.</li>
				<li>Rapid software development. Containerization is a method that makes programming require minimal time investment. The work of both individual programmers and entire teams is accelerated.</li>
				<li>Efficient interaction with complex systems and their scaling. Basic Docker functionality may not be enough for this, but orchestrators will come to the rescue of the developer.</li>
				</ul>
				<a name="9"></a>
				<h3>Installing Docker</h3>
				<p>
				You can download the platform distribution from the official website. The installation algorithm on the Windows operating system is as follows:
				</p>
				<ul>
				<li>Open the downloaded distribution as administrator, start the installation.</li>
				<li>Reboot the computer after successful installation.</li>
				<li>Launch Docker Desktop.</li>
				<li>Accept all license agreements.</li>
				<li>Installing auxiliary WSL2 components, if necessary. They can be downloaded from the Microsoft website.</li>
				</ul>
				<p>
				MacOS has a different algorithm:
				</p>
				<ul>
				<li>Selecting a distribution. It must match the processor that the computer is equipped with. Intel CPUs or proprietary Apple developments are used.</li>
				<li>Opening the “Docker.dmg” file, running the installation, moving the Docker icon to the program directory.</li>
				<li>Running the platform by double-clicking.</li>
				<li>Confirming acceptance of the license agreement, entering the password.</li>
				<li>Viewing or skipping instructions.</li>
				</ul>
				<a name="10"></a>
				<h3>Working with a Docker image</h3>
				<p>
				The base image is the most important component of the platform, allowing you to use containerization technology. It stores processes and dependencies, without which the correct operation of the program would be impossible. The best option for a developer is to download a ready-made image from the library, there are many options, and you can easily select an image for a specific task.
				</p>
				<p>
				Changing the original image creates layers that are available only for reading, so the final version consists of a whole complex of layers. The layered structure allows you to cancel changes if necessary, quickly solve problems with operability in case of erroneous actions.
				</p>
				<p>
				An image can be thought of as a complex of layers available only for reading, a container is the same image, but with an additional upper layer, due to which the recording occurs. The main image file is manifest, where all the basic information is stored, links to layers, their volume, and other things that are required for stable operation. </p>
				<p>
				Deploying an image does not imply any restrictions on the host or the number of times. The task can be completed in two ways:
				</p>
				<ul>
				<li>Interactive. The simplest, allowing the developer to change the environment at startup. To do this, use the command “docker run image_name: tag_name”.</li>
				<li>Dockerfile. A more complex scheme. Each image is associated with its own Dockerfile, in which you need to write the required commands, as well as exclude “extra” files that are not needed for a specific build, specifying them in .dockerignore. The command to create an image is “docker image build”.</li>
				</ul>
				<a name="11"></a>
				<h3>Summing up</h3>
				<p>
				Docker is a very powerful platform that allows the developer to deploy the required service on any computer. In addition, it is an effective tool for testing a new program, delivering it to the server. Mastering it may seem difficult at first, but it won’t take much time even for a beginner, and in the long run it will save a lot of effort and resources. </p>
			</>
		),
	},
	next: "/blog/chto-takoye-ip-address",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoye-docker",
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
