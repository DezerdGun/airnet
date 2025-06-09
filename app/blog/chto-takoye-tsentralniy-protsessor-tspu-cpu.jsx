import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Что такое центральный процессор (ЦПУ, CPU)?",
		uz: "Markaziy protsessor (CPU) nima?",
		en: "What is a central processing unit (CPU)?",
	},
	title: {
		ru: "Процессор (CPU) — что это такое и как работает центральный процессор компьютера",
		uz: "Protsessor (CPU) - bu nima va kompyuterning markaziy protsessori qanday ishlaydi",
		en: "Processor (CPU) - what is it and how does a computer's central processor work",
	},
	desc: {
		ru: "Процессор (CPU) — главное 'сердце' компьютера. Узнайте, что такое центральный процессор, его устройство и как он работает 🖥️ Для чего нужен и что делает процессор в ПК. Характеристики и назначение CPU.",
		uz: "Protsessor (CPU) kompyuterning asosiy 'yuragi' dir. Markaziy protsessor nima ekanligini bilib oling, его qurilma va u qanday ishlaydi 🖥️ Protsessor nima uchun va u shaxsiy kompyuterda nima qiladi. CPU xususiyatlari va maqsadi.",
		en: "The processor (CPU) is the main 'heart' of the computer. Find out what a central processor is, его device and how it works 🖥️ What is the processor for and what does it do in a PC. Characteristics and purpose of the CPU.",
	},
	date: "10.10.2024",
	updated: "10.10.2024",
	read: "4",
	view: "11",
	img: "/blog/cpu.avif",
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
		{ title: {ru: "Что такое ЦПУ?", uz: "CPU nima?", en: "What is CPU?", slug: "1" }},
		{ title: {ru: "Немного истории", uz: "Biroz tarix", en: "A bit of history", slug: "2" }},
		{ title: {ru: "Функции", uz: "Funksiyalar", en: "Functions", slug: "3" }},
		{ title: {ru: "Алгоритм работы", uz: "Ish algoritmi", en: "Algorithm of work", slug: "4" }},
		{ title: {ru: "Устройство процессора", uz: "Protsessor qurilmasi", en: "Processor device", slug: "5" }},
		{ title: {ru: "Классификация процессоров", uz: "Protsessorlarning tasnifi", en: "Classification of processors", slug: "6" }},
		{ title: {ru: "Основные характеристики", uz: "Asosiy xususiyatlar", en: "Main characteristics", slug: "7" }},
		{ title: {ru: "Правила выбора", uz: "Tanlov qoidalari", en: "Selection rules", slug: "8" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Что такое ЦПУ?
				</h3>
				<p>
					Центральный процессор – основной аппаратный компонент электронного оборудования, от фитнес-браслета до игрового ноутбука. Именно он обеспечивает вычислительную мощность, производительность, обрабатывает информацию, подает команды, необходимые для корректного функционирования устройства, операционной системы в целом и отдельных ее приложений.
				</p>
				<p>
					Простыми словами, ЦПУ – “мозг” электронной техники. Без этого “мозга” все прочие аппаратные компоненты окажутся бесполезными, неработоспособными, даже если речь идет о самых совершенных моделях видеокарт, планках оперативной памяти огромного объема, твердотельных накопителях.
				</p>
				<a name="2"></a>
				<h3>Немного истории</h3>
				<p>
					История компьютеров начинается в XX веке, конечно, она неразрывно связана с процессорами. Первые модели базировались на триггерах и вентилях, что приводило к огромным расходам электричества при минимуме производительности. В 50-е годы появились ламповые устройства, в 90-е – микросхемы, поддерживающие функции кэширования данных.
				</p>
				<p>
					Современные CPU – электронные компоненты, базой для которых являются транзисторы. Развитие электронной промышленности, освоение новых производственных методик – все это позволяет уменьшить физические габариты транзисторов, использовать при сборке процессора миллиарды крошечных модулей. Результат – увеличение производительности, усложнение архитектуры, возможность использования не 1-2 ядер, как 10-15 лет назад, а множества, 4, 6, 8.
				</p>
				<p>
					Развиваются и другие характеристики:
				</p>
				<ul>
					<li>Энергоэффективность. Компонент потребляет меньше энергии, меньше нагревается, при этом сохраняет высокую вычислительную мощность.</li>
					<li>Стойкость к температурной нагрузке. Модули делаются на базе графена и других материалов, выдерживающих интенсивный нагрев, способствующих быстрому отводу, рассеиванию избытков тепловой энергии.</li>
					<li>Скорость обмена данными и наращивание емкости кэша. Характерный пример технологии – 3D NAND.</li>
				</ul>
				
				<a name="3"></a>
				<h3>Функции</h3>
				<p>
					Главные функции, выполняемые ЦП, выглядят следующим образом:
				</p>
				<ul>
					<li>Выполнение инструкций, характерных для определенных команд и приложений. В зависимости от типа ПО, выполняется чтение информации, ее передача между прочими аппаратными компонентами.</li>
					<li>Управление памятью. Процесс взаимодействует как с ОЗУ, так и с кэшем, что гарантирует быструю работу приложений, уверенное выполнение всех характерных для них инструкций и функций.</li>
					<li>Обработка информации. Именно процессор осуществляет все действия, от математических до логических, без которых эффективное взаимодействие с информацией оказалось бы невозможным.</li>
					<li>Управление операционной системой, обеспечение эффективного взаимодействия между периферийными устройствами, подключенными к компьютеру, и его внутренними модулями.</li>
					<li>Кэширование. Каждый процессор имеет определенный объем кэша, используемого для непродолжительного хранения информации и инструкций. Чем быстрее кэш, чем больше его объем – тем выше общая системная производительность.</li>
				</ul>
				<a name="4"></a>
				<h3>Алгоритм работы</h3>
				<p>
					ЦПУ выполняет инструкции, отправляемые установленными на смартфоне или ПК программами. Все вычисления проводятся в строгом соответствии с ними, рабочий цикл сформирован несколькими стадиями:
				</p>
				<ul>
					<li>Получение команды. Она передается с ОЗУ.</li>
					<li>Расшифровка команды.</li>
					<li>Выполнение команды.</li>
				</ul>
				<p>
					Впервые подобный алгоритм описал Джон фон Нейман, профессор математики из США. Описание датировано далеким 1945 годом, однако, до сих пор оно остается актуальным. Вычислительные мощности, впрочем, растут, так что современные устройства в течение секунды способны миллионы и даже десятки миллионов раз реализовать подобный цикл.
				</p>
				<p>
					По завершении операции, ЦП сохраняет полученные результаты в памяти ПК, либо отправляет их другому устройству, будь то внешний жесткий диск или видеокарты. Результат действий процессора, видимый пользователю – выполнение определенной задачи, будь то запуск видео, открытие браузера, начало сканирования или печати документа.
				</p>
				<p>
					В усложненном варианте, схема работы процессора такова:
				</p>
				<ul>
					<li>Блок управления получает из ОЗУ, где сохранена программа, команды, запланированные к исполнению. Эти команды фиксируются в собственном кэше процессора.</li>
					<li>Запись полученных сведений в регистры.</li>
					<li>Анализ информации и выполнение команд.</li>
					<li>Запись полученных результатов в регистры. Если инструкция успешно завершена, то результаты фиксируются в буферной памяти, откуда передаются на ОЗУ, для разгрузки кэша и освобождения вычислительной мощности, либо передаются на кэш нижних уровней, что характерно для выполнения особо сложных инструкций и команд.</li>
				</ul>
				<a name="5"></a>
				<h3>Устройство процессора</h3>
				<p>
					Процессор состоит из нескольких компонентов, каждый из которых выполняет определенные задачи:
				</p>
				<ul>
					<li>Управляющее устройство. Благодаря этому компоненту, происходит корректное выполнение программ. УУ получает команды от оперативной памяти и расшифровывает их;</li>
					<li>Арифметическое логическое устройство. Его задача – выполнение команд, математических, логических действий;</li>
					<li>Регистры. Мельчайшие ячейки, обеспечивающие временное хранение информации. Благодаря регистрам, ЦП не приходится постоянно взаимодействовать с оперативной памятью, что увеличивает быстродействие;</li>
					<li>Кэш. Второй формат памяти, отличающийся увеличенной, в сравнении с регистрами, емкостью. В кэше сохраняются инструкции и информация, доступ к которой требуется регулярно.</li>
				</ul>
				<a name="6"></a>
				<h3>Классификация процессоров</h3>
				<p>
					Классифицировать ЦПУ можно по множеству признаков. Например, они могут быть миниатюрными, мобильными, предназначенными для использования в смартфонах, планшетных компьютерах и другой портативной технике, либо ориентированными на ноутбуки или стационарные компьютеры. Разница между последними размыта, однако, в офисные ноутбуки часто ставятся модули небольшой мощности, что увеличивает автономность, снижает нагрузку на аккумуляторах. Стационарные ПК предполагают подключение к сети, так что потребляемая мощность – не столь значимый показатель, акцент делается на производительности.
				</p>
				<p>
					Отдельная категория – серверные ЦП. Им приходится взаимодействовать сразу с несколькими клиентами, а потому они предполагают наличие нескольких ядер, увеличенный объем кэша, отличаются высокой производительностью и поддерживают большие объемы ОЗУ.
				</p>
				<p>
					Также классифицировать процессоры можно по специфике выполнения команд:
				</p>
				<ul>
					<li>CISC – устройство, поддерживающее полный командный набор;</li>
					<li>RISC – основная особенность данного типа заключается в увеличении производительности путем упрощения инструкций. Число транзисторов уменьшено, что снижает стоимость и потребление энергии;</li>
					<li>VLIW – ЦП выполняет команды, предварительно объединяя их в связки.</li>
				</ul>
				<a name="7"></a>
				<h3>Основные характеристики</h3>
				<p>
					Главным показателем при подборе CPU является его производительность, зависящая от следующих параметров:
				</p>
				<ul>
					<li>Тактовая частота. Чем выше частота, тем больше операций устройство выполнит за единицу времени. Буквально пару десятилетий назад частота измерялась сотнями мегагерц, а сейчас – гигагерцами. Нужно учитывать, что вместе с этой характеристикой увеличивается энергопотребление и объемы выделяемой тепловой энергии. Производительному процессору потребуется крупный радиатор и эффективный кулер.</li>
					<li>Количество ядер. Многоядерные процессоры могут одновременно выполнять сразу несколько задач, что недоступно их одноядерным аналогам. Также нужно обратить внимание на многопоточность, способность одного ядра справляться сразу со множеством потоков команд.</li>
					<li>Объем кэш-памяти. Здесь все просто – чем крупнее кэш, тем производительнее и быстрее ЦПУ.</li>
					<li>Технологический процесс. Он указывает на габариты транзисторов, использованных в процессоре. Чем миниатюрнее транзисторы, тем производительнее устройство, тем ниже объемы выделяемой им энергии.</li>
					<li>Тепловыделение. Объемы выделяемой ЦП тепловой энергии измеряются в ваттах. Этот показатель особенно важен для ноутбуков и другой портативной техники. Эффективность системы охлаждения сильно ограничена размерами корпуса, а у лэптопов с этим большие проблемы. Пропускной способности отверстий и мощности небольшого вентилятора для должного обдува не хватает, ноутбук начинает тормозить, троттлить, процессор – искусственно занижать частоту для исключения перегрева. Для стационарных компьютеров это не столь существенный показатель, в крупный корпус вполне можно поставить несколько кулеров, а то и водяную систему, способную остудить даже высокопроизводительный ЦПУ с огромным тепловыделением.</li>
				</ul>
				<a name="8"></a>
				<h3>Правила выбора</h3>
				<p>
					В первую очередь нужно учитывать, для чего будет использоваться процессор. Если планируется простейшая офисная работа в Word и Excel, просмотр видео, то не нужно гнаться за производительными моделями, вполне хватит недорогой версии на 2, максимум 4 ядра со средними тактовыми частотами. Другое дело – компьютерные игры, обработка графики и выполнение других задач, требующих огромных вычислительных мощностей. В такой ситуации лучше не экономить.
				</p>
				<p>
					Второй момент – сокет. Нужно, чтобы материнская плата допускала саму возможность использования определенного ЦПУ. При несовместимости сокета установка окажется невозможной.
				</p>
				<p>
					Нельзя забывать о производителе и позиционировании. Главные игроки рынка – AMD и Intel, в каталогах которых можно найти как недорогие серии для офисных задач, так и премиальные игровые, отличающиеся высокими тактовыми частотами, многопоточностью и другими особенностями, повышающими производительность, исключающими троттлинг и другие неприятные явления, мешающие нормально играть и работать.
				</p>
				<p>
					Нужно учесть, что CPU развиваются активными темпами, а требования игровых и рабочих приложений – растут как на дрожжах. При покупке устройства лучше сразу предусмотреть запас производительности в 20-30 процентов, чтобы не столкнуться с необходимостью скорой модернизации и дополнительными расходами.
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
				CPU nima? 
				</h3>
				<p>
				Markaziy protsessor - bu fitnes bilaguzukdan tortib o'yin noutbukigacha bo'lgan elektron jihozlarning asosiy apparat komponenti. Aynan shu narsa hisoblash quvvatini, unumdorligini ta'minlaydi, ma'lumotlarni qayta ishlaydi va qurilmaning, umuman operatsion tizimning va uning alohida ilovalarining to'g'ri ishlashi uchun zarur bo'lgan buyruqlarni beradi. 
				</p>
				<p>
				Oddiy qilib aytganda, protsessor elektron jihozlarning "miyasi" dir. Ushbu "miya" bo'lmasa, boshqa barcha apparat komponentlari, hatto video kartalarning eng ilg'or modellari, ulkan RAM modullari va qattiq holatdagi drayverlar haqida gapiradigan bo'lsak ham, foydasiz va ishlamay qoladi. 
				</p>
				<a name="2"></a>
				<h3>Kichik tarix</h3>
				<p>
				Kompyuterlar tarixi 20-asrda boshlanadi va, albatta, u protsessorlar bilan uzviy bog'liqdir. Birinchi modellar tetik va klapanlarga asoslangan edi, bu esa minimal ishlash bilan katta quvvat sarfini keltirib chiqardi. 50-yillarda vakuum trubkasi qurilmalari paydo bo'ldi va 90-yillarda ma'lumotlarni keshlash funktsiyalarini qo'llab-quvvatlovchi mikrosxemalar paydo bo'ldi. 
				</p>
				<p>
				Zamonaviy protsessorlar tranzistorlar asosidagi elektron komponentlardir. Elektron sanoatning rivojlanishi va yangi ishlab chiqarish usullarining rivojlanishi tranzistorlarning jismoniy o'lchamlarini kamaytirish va protsessorni yig'ishda milliardlab kichik modullardan foydalanish imkonini beradi. Natijada unumdorlikni oshirish, yanada murakkab arxitektura, 10-15 yil oldingi kabi 1-2 yadrodan emas, balki ko'p, 4, 6, 8-dan foydalanish qobiliyati.
				</p>
				<p>
				Boshqa xususiyatlar ham rivojlanadi:
				</p>
				<ul>
				<li>Energiya samaradorligi. Komponent kam energiya sarflaydi, kamroq issiqlik hosil qiladi va yuqori hisoblash quvvatini saqlaydi.</li>
				<li>Harorat yukiga qarshilik. Modullar grafen va kuchli isitishga bardosh bera oladigan, ortiqcha issiqlik energiyasini tez olib tashlash va tarqatish imkonini beruvchi boshqa materiallar asosida ishlab chiqarilgan.</li>
				<li>Ma'lumot almashish tezligi va kesh hajmi oshadi. Texnologiyaning odatiy namunasi 3D NAND.</li>
				</ul>

				<a name="3"></a>
				<h3>Funksiyalar</h3>
				<p>
				CPU tomonidan bajariladigan asosiy funktsiyalar quyidagilardan iborat:
				</p>
				<ul>
				<li>Ma'lum buyruqlar va ilovalarga xos ko'rsatmalarni bajaring. Dasturiy ta'minot turiga qarab, ma'lumot o'qiladi va boshqa apparat komponentlari o'rtasida uzatiladi.</li>
				<li>Xotira boshqaruvi. Jarayon operativ xotira va kesh bilan oʻzaro taʼsir qiladi, bu esa ilovalarning tezkor ishlashini hamda ularning barcha xarakterli koʻrsatmalari va funksiyalarining ishonchli bajarilishini taʼminlaydi.</li>
				<li>Axborotni qayta ishlash. Aynan protsessor matematikdan mantiqiygacha bo'lgan barcha amallarni bajaradi, ularsiz axborot bilan samarali o'zaro ta'sir qilish mumkin emas.</li>
				<li>Operatsion tizimni boshqarish, kompyuterga ulangan periferik qurilmalar va uning ichki modullari o‘rtasida samarali o‘zaro aloqani ta’minlash.</li>
				<li>Keshlash. Har bir protsessor ma'lumot va ko'rsatmalarni qisqa vaqt davomida saqlash uchun ishlatiladigan ma'lum miqdordagi keshga ega. Kesh qanchalik tez bo'lsa, uning hajmi qanchalik katta bo'lsa, tizimning umumiy unumdorligi shunchalik yuqori bo'ladi.</li>
				</ul>
				<a name="4"></a>
				<h3>Ishlash algoritmi</h3>
				<p>
				CPU smartfon yoki kompyuterda o'rnatilgan dasturlar tomonidan yuborilgan ko'rsatmalarni bajaradi. Barcha hisob-kitoblar ularga qat'iy muvofiq amalga oshiriladi, ish tsikli bir necha bosqichda shakllanadi:
				</p>
				<ul>
				<li>Buyruq qabul qilinmoqda. U RAMdan uzatiladi.</li>
				<li>Buyruqni dekodlash.</li>
				<li>Buyruqni bajarish.</li>
				</ul>
				<p>
				Birinchi bunday algoritmni AQSHlik matematika professori Jon fon Neyman tasvirlab bergan. Ta'rif 1945 yilga to'g'ri keladi, ammo u hali ham dolzarbligicha qolmoqda. Biroq, hisoblash quvvati o'sib bormoqda, shuning uchun zamonaviy qurilmalar xuddi shunday tsiklni bir soniya ichida millionlab va hatto o'nlab million marta bajarishga qodir. 
				</p>
				<p>
				Amaliyot tugallangandan so'ng, protsessor natijalarni shaxsiy kompyuter xotirasida saqlaydi yoki ularni tashqi qattiq disk yoki video karta bo'lsin, boshqa qurilmaga yuboradi. Foydalanuvchiga ko'rinadigan protsessor harakatlarining natijasi - bu videoni boshlash, brauzerni ochish, skanerlashni boshlash yoki hujjatni chop etish bo'ladimi, ma'lum bir vazifani bajarishdir. 
				</p>
				<p>
				Keyinchalik murakkab versiyada protsessorning ishlash sxemasi quyidagicha:
				</p>
				<ul>
				<li>Boshqaruv bloki dastur saqlanadigan operativ xotiradan bajarish uchun rejalashtirilgan buyruqlarni oladi. Bu buyruqlar protsessorning shaxsiy keshida saqlanadi.</li>
				<li>Qabul qilingan ma'lumotlarni registrlarga yozib olish.</li>
				<li>Axborotni tahlil qilish va buyruqlarni bajarish.</li>
				<li>Olingan natijalarni registrlarga yozish. Agar ko'rsatma muvaffaqiyatli bajarilsa, natijalar bufer xotirasiga yoziladi, u yerdan keshni bo'shatish va hisoblash quvvatini bo'shatish uchun operativ xotiraga o'tkaziladi yoki ular ayniqsa murakkab ko'rsatmalar va buyruqlarni bajarish uchun xos bo'lgan quyi darajadagi keshga o'tkaziladi.</li>
				</ul>
				<a name="5"></a>
				<h3>Protsessor qurilmasi</h3>
				<p>
				Protsessor bir nechta komponentlardan iborat bo'lib, ularning har biri o'ziga xos vazifalarni bajaradi:
				</p>
				<ul>
				<li>Boshqaruv qurilmasi. Ushbu komponent tufayli dasturlar to'g'ri bajariladi. Boshqaruv bloki operativ xotiradan buyruqlar qabul qiladi va ularni shifrlaydi;</li>
				<li>Arifmetik mantiq birligi. Uning vazifasi buyruqlar, matematik va mantiqiy amallarni bajarish;</li>
				<li>Registrlar. Ma'lumotni vaqtincha saqlashni ta'minlaydigan kichik hujayralar. Registrlar tufayli protsessor doimiy ravishda operativ xotira bilan o‘zaro aloqada bo‘lishi shart emas, bu esa unumdorlikni oshiradi;</li>
				<li>Kesh. Ikkinchi xotira formati registrlar bilan solishtirganda sig'imning oshishi bilan tavsiflanadi. Kesh muntazam ravishda kirish kerak bo'lgan ko'rsatmalar va ma'lumotlarni saqlaydi.</li>
				</ul>
				<a name="6"></a>
				<h3>Protsessorlarning tasnifi</h3>
				<p>
				Protsessorlarni ko'plab xususiyatlarga ko'ra tasniflash mumkin. Masalan, ular miniatyura, mobil bo'lishi mumkin, smartfonlar, planshet kompyuterlar va boshqa portativ uskunalarda foydalanish uchun mo'ljallangan yoki noutbuklar yoki ish stoli kompyuterlariga yo'naltirilgan bo'lishi mumkin. Ikkinchisi o'rtasidagi farq loyqa, ammo ofis noutbuklari ko'pincha kam quvvatli modullarga ega, bu avtonomiyani oshiradi va batareyalarga yukni kamaytiradi. Ish stoli kompyuterlari tarmoqqa ulanish uchun mo'ljallangan, shuning uchun quvvat sarfi unchalik muhim ko'rsatkich emas; asosiy e'tibor ishlashga qaratiladi. 
				</p>
				<p>
				Alohida toifa - bu server protsessorlari. Ular bir vaqtning o'zida bir nechta mijozlar bilan o'zaro aloqada bo'lishlari kerak va shuning uchun ular bir nechta yadrolarni, kengaytirilgan keshni, yuqori ishlashni va katta hajmdagi RAMni qo'llab-quvvatlashni talab qiladi. 
				</p>
				<p>
				Protsessorlarni buyruqlarni bajarish xususiyatlariga ko'ra ham tasniflash mumkin:
				</p>
				<ul>
				<li>CISC - to'liq buyruqlar to'plamini qo'llab-quvvatlaydigan qurilma;</li>
				<li>RISC - bu turdagi asosiy xususiyat ko'rsatmalarni soddalashtirish orqali samaradorlikni oshirishdir. Tranzistorlar soni kamayadi, bu esa xarajatlar va quvvat sarfini kamaytiradi;</li>
				<li>VLIW – protsessor buyruqlarni avval ularni paketlarga birlashtirib bajaradi.</li>
				</ul>
				<a name="7"></a>
				<h3>Asosiy xususiyatlar</h3>
				<p>
				CPU tanlashda asosiy ko'rsatkich uning ishlashi bo'lib, u quyidagi parametrlarga bog'liq:
				</p>
				<ul>
				<li>Soat chastotasi. Chastota qanchalik baland bo'lsa, qurilma vaqt birligida shunchalik ko'p operatsiyalarni bajaradi. Bir necha o'n yillar oldin chastota yuzlab megahertsda o'lchangan bo'lsa, endi u gigagertsda o'lchanadi. Shuni hisobga olish kerakki, bu xususiyat bilan birga energiya iste'moli va chiqarilgan issiqlik energiyasi hajmi oshadi. Samarali protsessor katta radiator va samarali sovutgichni talab qiladi.</li>
				<li>Yadrolar soni. Ko'p yadroli protsessorlar bir vaqtning o'zida bir nechta vazifalarni bajarishi mumkin, bu ularning bir yadroli hamkasblari bilan mumkin emas. Shuningdek, diqqat qilish kerak bo'lgan narsa ko'p ish zarralari, bir yadroning bir vaqtning o'zida bir nechta buyruq oqimlarini boshqarish qobiliyatidir.</li>
				<li>Kesh xotira hajmi. Bu yerda hamma narsa oddiy – kesh qanchalik katta bo‘lsa, protsessor shunchalik samarali va tezroq ishlaydi.</li>
				<li>Texnologik jarayon. Bu protsessorda ishlatiladigan tranzistorlarning o'lchamlarini ko'rsatadi. Transistorlar qanchalik kichik bo'lsa, qurilma qanchalik unumdor bo'lsa, u chiqaradigan energiya miqdori shunchalik kam bo'ladi.</li>
				<li>Issiqlik tarqalishi. CPU tomonidan ishlab chiqarilgan issiqlik energiyasi miqdori vattlarda o'lchanadi. Ushbu ko'rsatkich noutbuklar va boshqa portativ uskunalar uchun ayniqsa muhimdir. Sovutish tizimining samaradorligi korpusning o'lchami bilan keskin cheklangan va noutbuklarda bu borada katta muammolar mavjud. Teshiklarning o'tkazuvchanligi va kichik fanning kuchi to'g'ri havo oqimi uchun etarli emas, noutbuk sekinlasha boshlaydi, gazni bosadi va protsessor haddan tashqari qizib ketishning oldini olish uchun chastotasini sun'iy ravishda pasaytira boshlaydi. Statsionar kompyuterlar uchun bu unchalik muhim ko'rsatkich emas; katta holatda, bir nechta sovutgichlarni yoki hatto issiqlik hosil qiluvchi yuqori samarali protsessorni ham sovutishga qodir suv tizimini o'rnatish juda mumkin.</li>
				</ul>
				<a name="8"></a>
				<h3>Tanlash qoidalari</h3>
				<p>
				Avvalo, protsessor nima uchun ishlatilishini hisobga olishingiz kerak. Agar siz Word va Excel-da asosiy ofis ishlarini bajarishni rejalashtirmoqchi bo'lsangiz, videolarni tomosha qiling, keyin yuqori samarali modellarni ta'qib qilishingiz shart emas; o'rtacha soat chastotalari bilan 2, maksimal 4 yadroli arzon versiya etarli bo'ladi. Kompyuter o'yinlari, grafiklarni qayta ishlash va katta hisoblash quvvatini talab qiladigan boshqa vazifalar bilan bu boshqa masala. Bunday vaziyatda saqlamaslik yaxshiroqdir. 
				</p>
				<p>
				Ikkinchi nuqta - rozetka. Anakart ma'lum bir protsessordan foydalanish imkoniyatini ta'minlashi kerak. Agar rozetka mos kelmasa, o'rnatish muvaffaqiyatsiz bo'ladi. 
				</p>
				<p>
				Biz ishlab chiqaruvchi va joylashishni unutmasligimiz kerak. Bozordagi asosiy o'yinchilar AMD va Intel bo'lib, ularning kataloglarida siz ofis vazifalari uchun arzon seriyalarni ham, yuqori soat chastotalari, ko'p o'rinli va boshqa xususiyatlar bilan ajralib turadigan premium o'yin seriyalarini topishingiz mumkin, bu esa unumdorlikni oshiradigan, tejamkorlik va boshqa noxush hodisalarni bartaraf qiladi. 
				</p>
				<p>
				Shuni hisobga olish kerakki, protsessorlar faol sur'atlarda rivojlanmoqda, o'yin va ish ilovalariga bo'lgan talablar keskin o'sib bormoqda. Qurilmani sotib olayotganda, tezkor modernizatsiya va qo'shimcha xarajatlarga duch kelmaslik uchun darhol 20-30 foiz ishlash zaxirasini ta'minlash yaxshiroqdir. 
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				What is a CPU?
				</h3>
				<p>
				The central processing unit is the main hardware component of electronic equipment, from a fitness bracelet to a gaming laptop. It provides computing power, performance, processes information, and issues commands necessary for the correct functioning of the device, the operating system as a whole, and its individual applications.
				</p>
				<p>
				In simple terms, the CPU is the “brain” of electronic equipment. Without this “brain,” all other hardware components will be useless and inoperative, even if we are talking about the most advanced video card models, huge RAM modules, and solid-state drives.
				</p>
				<a name="2"></a>
				<h3>A little history</h3>
				<p>
				The history of computers begins in the 20th century, and of course, it is inextricably linked with processors. The first models were based on triggers and valves, which led to huge power consumption with minimal performance. In the 50s, vacuum tube devices appeared, in the 90s - microcircuits supporting data caching functions.
				</p>
				<p>
				Modern CPUs are electronic components based on transistors. The development of the electronics industry, the development of new production methods - all this allows us to reduce the physical dimensions of transistors, use billions of tiny modules when assembling a processor. The result is increased performance, more complex architecture, the ability to use not 1-2 cores, as 10-15 years ago, but many, 4, 6, 8.
				</p>
				<p>
				Other characteristics are also developing:
				</p>
				<ul>
				<li>Energy efficiency. The component consumes less energy, heats up less, while maintaining high computing power.</li>
				<li>Resistance to temperature load. The modules are made on the basis of graphene and other materials that can withstand intense heating, facilitating rapid removal and dissipation of excess thermal energy.</li>
				<li>Data exchange speed and cache capacity growth. A typical example of the technology is 3D NAND.</li>
				</ul>

				<a name="3"></a>
				<h3>Functions</h3>
				<p>
				The main functions performed by the CPU are as follows:
				</p>
				<ul>
				<li>Execution of instructions specific to certain commands and applications. Depending on the type of software, information is read and transferred between other hardware components.</li>
				<li>Memory management. The process interacts with both RAM and cache, which ensures fast operation of applications, confident execution of all instructions and functions specific to them.</li>
				<li>Information processing. It is the processor that carries out all the actions, from mathematical to logical, without which effective interaction with information would be impossible.</li>
				<li>Managing the operating system, ensuring effective interaction between peripheral devices connected to the computer and its internal modules.</li>
				<li>Caching. Each processor has a certain amount of cache used for short-term storage of information and instructions. The faster the cache, the larger its volume - the higher the overall system performance.</li>
				</ul>			
				<a name="4"></a>
				<h3>Working algorithm</h3>
				<p>
				The CPU executes instructions sent by programs installed on a smartphone or PC. All calculations are carried out in strict accordance with them, the working cycle is formed by several stages:
				</p>
				<ul>
				<li>Receiving a command. It is transmitted from RAM.</li>
				<li>Decoding the command.</li>
				<li>Executing the command.</li>
				</ul>
				<p>
				A similar algorithm was first described by John von Neumann, a professor of mathematics from the USA. The description dates back to 1945, however, it is still relevant. Computing power, however, is growing, so that modern devices are capable of implementing a similar cycle millions and even tens of millions of times per second.
				</p>
				<p>
				Upon completion of the operation, the CPU saves the obtained results in the PC memory, or sends them to another device, be it an external hard drive or video cards. The result of the processor's actions, visible to the user, is the execution of a certain task, be it starting a video, opening a browser, starting to scan or print a document.
				</p>
				<p>
				In a complex version, the processor's operation scheme is as follows:
				</p>
				<ul>
				<li>The control unit receives commands scheduled for execution from RAM, where the program is stored. These commands are recorded in the processor's own cache.</li>
				<li>Writing the received information into registers.</li>
				<li>Analyzing information and executing commands.</li>
				<li>Writing the received results into registers. If the instruction is successfully completed, the results are recorded in the buffer memory, from where they are transferred to the RAM to unload the cache and free up computing power, or they are transferred to the lower-level cache, which is typical for executing particularly complex instructions and commands.</li>
				</ul>
				<a name="5"></a>
				<h3>Processor structure</h3>
				<p>
				The processor consists of several components, each of which performs specific tasks:
				</p>
				<ul>
				<li>Control unit. Thanks to this component, programs are executed correctly. The CU receives commands from the RAM and deciphers them;</li>
				<li>Arithmetic logic unit. Its task is to execute commands, mathematical, logical operations;</li>
				<li>Registers. The smallest cells that provide temporary storage of information. Thanks to the registers, the CPU does not have to constantly interact with the RAM, which increases performance;</li>
				<li>Cache. The second memory format, characterized by increased capacity compared to registers. The cache stores instructions and information that needs to be accessed regularly.</li>
				</ul>
				<a name="6"></a>
				<h3>Classification of Processors</h3>
				<p>
				CPUs can be classified by many features. For example, they can be miniature, mobile, designed for use in smartphones, tablet computers and other portable equipment, or oriented towards laptops or desktop computers. The difference between the latter is blurred, however, office laptops often have low-power modules, which increases autonomy and reduces the load on batteries. Desktop PCs require a network connection, so power consumption is not such a significant indicator, the emphasis is on performance.
				</p>
				<p>
				A separate category is server CPUs. They have to interact with several clients at once, and therefore they require several cores, an increased cache size, are characterized by high performance and support large amounts of RAM.
				</p>
				<p>
				Processors can also be classified by the specifics of command execution:
				</p>
				<ul>
				<li>CISC – a device that supports a full command set;</li>
				<li>RISC – the main feature of this type is to increase productivity by simplifying instructions. The number of transistors is reduced, which reduces cost and energy consumption;</li>
				<li>VLIW – the CPU executes commands, pre-combining them into bundles.</li>
				</ul>
				<a name="7"></a>
				<h3>Key characteristics</h3>
				<p>
				The main indicator when selecting a CPU is its performance, which depends on the following parameters:
				</p>
				<ul>
				<li>Clock frequency. The higher the frequency, the more operations the device will perform per unit of time. Just a couple of decades ago, the frequency was measured in hundreds of megahertz, and now - in gigahertz. It should be taken into account that along with this characteristic, energy consumption and the amount of heat generated increase. A productive processor will need a large radiator and an effective cooler.</li>
				<li>Number of cores. Multi-core processors can simultaneously perform several tasks at once, which is not available to their single-core counterparts. You should also pay attention to multithreading, the ability of one core to handle multiple command streams at once.</li>
				<li>Cache memory size. Everything is simple here - the larger the cache, the more productive and faster the CPU.</li>
				<li>Technological process. It indicates the dimensions of the transistors used in the processor. The smaller the transistors, the more productive the device, the lower the amount of energy it emits.</li>
				<li>Heat emission. The amount of thermal energy emitted by the CPU is measured in watts. This indicator is especially important for laptops and other portable equipment. The efficiency of the cooling system is severely limited by the size of the case, and laptops have big problems with this. The throughput of the holes and the power of a small fan for proper blowing are not enough, the laptop begins to slow down, throttle, the processor - artificially lower the frequency to prevent overheating. For desktop computers, this is not such a significant indicator, in a large case it is quite possible to install several coolers, or even a water system capable of cooling even a high-performance CPU with huge heat emission.</li>
				</ul>
				<a name="8"></a>
				<h3>Selection rules</h3>
				<p>
				First of all, you need to consider what the processor will be used for. If you plan to do basic office work in Word and Excel, watch videos, then you don’t need to chase high-performance models, an inexpensive version with 2, maximum 4 cores with average clock frequencies will be enough. Another thing is computer games, graphics processing and other tasks that require huge computing power. In such a situation, it is better not to save.
				</p>
				<p>
				The second point is the socket. It is necessary that the motherboard allows the very possibility of using a certain CPU. If the socket is incompatible, installation will be impossible.
				</p>
				<p>
				We must not forget about the manufacturer and positioning. The main market players are AMD and Intel, in whose catalogs you can find both inexpensive series for office tasks and premium gaming ones, distinguished by high clock frequencies, multithreading and other features that increase productivity, eliminate throttling and other unpleasant phenomena that interfere with normal play and work. </p>
				<p>
				It is necessary to take into account that CPUs are developing at an active pace, and the requirements of gaming and work applications are growing by leaps and bounds. When buying a device, it is better to immediately provide a performance reserve of 20-30 percent, so as not to face the need for rapid modernization and additional costs.
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
