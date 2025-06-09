import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "IPv4: что это такое?",
		uz: "IPv4: bu nima?",
		en: "IPv4: What is it?",
	},
	title: {
		ru: "IPv4: что это такое и как он работает?",
		uz: "IPv4: bu nima va u qanday ishlaydi?",
		en: "IPv4: What is it and how does it work?",
	},
	desc: {
		ru: "IPv4 — это протокол интернет-адресации🖥️ обеспечивающий уникальные IP-адреса для устройств в сети. Узнайте, как работает IPv4, его структура и особенности",
		uz: "IPv4 - bu tarmoqdagi qurilmalar uchun noyob IP-manzillarni taqdim qiluvchi Internet-manzillash protokoli🖥️. IPv4 qanday ishlashini, uning tuzilishi va xususiyatlarini bilib oling",
		en: "IPv4 is an Internet addressing protocol🖥️ that provides unique IP addresses for devices on the network. Learn how IPv4 works, its structure and features",
	},
	date: "11.10.2024",
	updated: "11.10.2024",
	read: "4",
	view: "11",
	img: "/blog/ipv4.jpg",
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
		{ title: {ru: "IPv4: что это такое?", uz: "IPv4: bu nima?", en: "IPv4: What is it?", slug: "1" }},
		{ title: {ru: "Краткая история", uz: "Qisqacha tarix", en: "Brief history", slug: "2" }},
		{ title: {ru: "Принцип функционирования", uz: "Ishlash printsipi", en: "Operating principle", slug: "3" }},
		{ title: {ru: "Состав IP-адреса", uz: "IP manzilining tarkibi", en: "Composition of IP address", slug: "4" }},
		{ title: {ru: "Классификация адресов", uz: "Manzil tasnifi", en: "Address classification", slug: "5" }},
		{ title: {ru: "Режимы адресации", uz: "Manzillash rejimlari", en: "Addressing modes", slug: "6" }},
		{ title: {ru: "Структура пакета IPv4", uz: "IPv4 paket tuzilishi", en: "IPv4 packet structure", slug: "7" }},
		{ title: {ru: "Статус протокола в эталонной сетевой модели OSI", uz: "OSI tarmoq mos yozuvlar modelidagi protokol holati", en: "Protocol status in the OSI network reference model", slug: "8" }},
		{ title: {ru: "Достоинства и недостатки", uz: "Afzalliklari va kamchiliklari", en: "Advantages and disadvantages", slug: "9" }},
		{ title: {ru: "Развитие технологии", uz: "Texnologiyaning rivojlanishi", en: "Development of technology", slug: "10" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					IPv4: что это такое?
				</h3>
				<p>
					Интернет – сеть, предназначенная для обмена данными. Поиск энциклопедических статей, музыки, видео, фильмов, прием и отправка сообщений – все это варианты информационного обмена. Вообразить современный мир без интернета невозможно, однако, далеко не каждый пользователь имеет даже приблизительное представление о том, как он работает и устроен.
				</p>
				<p>
					Чтобы данные успешно поступили на определенное устройство, будь то смартфон или компьютер, используются специальные протоколы, наиболее распространенным из которых является IPv4. Как и когда он появился? По какому принципу функционирует? Каковы основные особенности?
				</p>
				<a name="2"></a>
				<h3>Краткая история</h3>
				<p>
					Предшественницей современного интернета была сеть ARPAnet, инициатор разработки которой – американское Министерство обороны. Она появилась в 1969 году, обмен данным велся между 4 хостам, однако, уже к 1981 – количество выросло до 213. Сеть ширилась, делилась на группы и сегменты, усложнение структуры привело к тому, что все актуальнее становился поиск способа наладить эффективное взаимодействие между всеми структурами.
				</p>
				<p>
					Главная задача специалистов имела четкую формулировку – сохранение начальной неоднородности всех сетей при обеспечении эффективного взаимодействия клиентов, подключенных к ним. Решение предложили Винтон Серф и Роберт Кхан. Им стал протокол IPv4. В 1981 он начал распространяться, а к 1983 – вытеснил NCP, используемый в ARPAnet.
				</p>
				<a name="3"></a>
				<h3>Принцип функционирования</h3>
				<p>
					IPv4 – протокол, работающий на сетевом и межсетевом уровнях. Его важнейшая функция – передача пакетов данных от отправителей к получателям, которыми являются различные устройства, серверы, компьютеры. При необходимости протокол справится и с выполнением второстепенных задач:
				</p>
				<ul>
					<li>Фрагментация информации;</li>
					<li>Сжатие данных.</li>
				</ul>
				<p>
					Расширенная функциональность дает возможность наладить эффективное взаимодействие между любыми сетями, вне зависимости от масштаба и подключенных к ним устройств.
				</p>
				<p>
					Датаграмма, пакет отправляемых данных, в обязательном порядке имеет уникальный заголовок и полезную нагрузку. Заголовок необходим для шифрования адресов отправителя и получателя, тогда как полезной нагрузкой понимаются именно основная информация. Особенность, отличающая IPv4 от прямых протоколов связи – пакетный метод передачи, что исключает разрыв соединения при выходе из строя даже одного коммутационного модуля. Метод устойчив и к потере пакетов, для их восстановления предусмотрена поддержка повторных запросов.
				</p>
				<p>
					Каждое устройство, работающее по протоколу IPv4, обладает уникальным IP-адресом, что обеспечивает точность передачи информации, исключает лишние сложности и задержки при установке коммутации. Адреса представлены двумя крупными категориями, частными и публичными. Публичные – уникальны и, в большинстве случаев, неизменны, принадлежат крупным серверам, частные – назначаются каждому устройству, вновь подключающемуся к сети, а потому могут изменяться, постоянная привязка отсутствует.
				</p>
				<a name="4"></a>
				<h3>Состав IP-адреса</h3>
				<p>
					В версии IPv4 адрес состоит из 32 бит информации, чего достаточно для успешной идентификации. Его написание – 4 числовых группы, каждая из которых может быть сформирована, как максимум, 3 цифрами. Наглядным примером написания может быть “172.16.254.1.”, минимальный адрес – это 4 нуля, разделенных точками, максимальный – “255.255.255.255”, то есть превышение числа “255” недопустимо.
				</p>
				<a name="5"></a>
				<h3>Классификация адресов</h3>
				<p>
					В сетях, работающих по протоколу IPv4, используются адреса нескольких классов:
				</p>
				<ul>
					<li>A – возможные значения – от “0.0.0.0” до “127.255.255.255”. Данная категория ориентирована на крупномасштабные сети.</li>
					<li>B – крупномасштабные и среднемасштабные сети, значения – от “128.0.0.0” до “191.255.255.255”.</li>
					<li>C – допустимый интервал от “192.0.0.0” до “223.255.255.255”, что обеспечивает идеальную совместимость с сетями местного масштаба.</li>
				</ul>
				<p>
					Также существуют специализированные классы, D и E. Первый ориентирован на программное обеспечение, работа которого предполагает рассылку пакетов сразу по нескольким адресам, второй – экспериментальный.
				</p>
				<a name="6"></a>
				<h3>Режимы адресации</h3>
				<p>
					В протоколе IPv4 реализована поддержка нескольких схем адресации:
				</p>
				<ul>
					<li>Одноадресная. В таком формате передача информации ведется на единственный сетевой модуль, который может выполнять функции как отправителя, так и получателя. В большинстве случаев режим применяется в процессе обращения к протоколу соединения.</li>
					<li>Широковещательная. Эта схема подразумевает, что каждое из устройств, подключенных к соответствующей сети, может взаимодействовать с пакетами передаваемых данных. Формат становится возможным за счет добавления специального идентификационного кода.</li>
					<li>Многоадресный. Эта схема объединяет форматы, описанные выше, является наиболее универсальной и функциональной.</li>
				</ul>
				<a name="7"></a>
				<h3>Структура пакета IPv4</h3>
				<p>
					В пакете передаваемых данных содержится не только основной набор информации, но и вспомогательный, обеспечивающий четкость, стабильность коммутации, своевременность доставки и отправки. Наиболее значимыми являются следующие структурные части:
				</p>
				<ul>
					<li>Время жизни. Оно обозначается английской аббревиатурой “TTL”. Правильно выставленное время жизни исключает опасность зацикливания, бесконечной передачи пакета. Факт получения одним устройством уменьшает TTL на единицу, когда оно достигает нуля, передача прекращается.</li>
					<li>Интернет-протокол. Информация указывает на протокол более высокого уровня, что расширяет область применения IPv4.</li>
					<li>Адрес отправителя. Уникальный идентификатор устройства, сформировавшего пакет.</li>
					<li>Адрес получателя. Идентификатор устройства, на которое должна быть доставлена информация. Он присваивается вне зависимости от формата рассылки, от одноадресной до широковещательной.</li>
					<li>Данные. Главный набор передаваемых между отправителем и получателем данных обозначается термином “Data”.</li>
				</ul>
				<a name="8"></a>
				<h3>Статус протокола в эталонной сетевой модели OSI</h3>
				<p>
					Модель OSI была создана специально для того, чтобы четко представить взаимодействие оборудования, подключенного к сети. Она основана на строгой иерархии, состоит из 7 уровней, от физического до прикладного.
				</p>
				<p>
					Протокол IPv4 принадлежит к сетевому уровню, занимающему в общей иерархической структуре третью позицию. Основная функция этого уровня – определение оптимальных маршрутов для информационной передачи, обеспечивающих максимальную скорость, стабильность доставки, учитывающих актуальную загрузку сети в целом и каждого отдельного устройства, что исключает сбои, потери информации.
				</p>
				<p>
					На сетевом уровне также выполняются задачи, связанные с трансляцией, логические сетевые адреса трансформируются в физические, либо происходит обратное преобразование. Третий уровень – это посредник, принимающий данные с четвертого уровня, фрагментирующий ее, добавляющий вспомогательные данные для успешной передачи на второй. 
				</p>
				<a name="9"></a>
				<h3>Достоинства и недостатки</h3>
				<p>
					Основные сильные стороны протокола IPv4 выглядят следующим образом:
				</p>
				<ul>
					<li>Универсальность, совместимость с сетями различного масштаба, уверенная работа на всех сетевых устройствах, будь то роутеры, маршрутизаторы, компьютеры, смартфоны.</li>
					<li>Простота топологии, что упрощает внедрение сети, ее базовую настройку и дальнейшее управление, конфигурирование.</li>
					<li>Краткость написания IP-адресов, упрощающая запись. При необходимости цифры можно даже запомнить, формат не сложнее мобильного телефонного номера.</li>
					<li>Поддержка алгоритмов шифрования, что повышает безопасность передачи данных, делает их перехват бесполезным, без знаний кодировок расшифровка невозможна.</li>
					<li>Поддержка мультикаста, что особенно актуально для сервисов потокового вещания аудио и видео.</li>
				</ul>
				<p>
					Главный минус IPv4 – ограниченность доступных адресов. Их количество – больше 4 миллиардов, однако, с учетом постоянно увеличивающегося числа абонентов, оно не выглядит достаточным. Авторитетные организации, представляющие сферу интернет-коммуникаций, едины во мнении, что очень скоро свободных адресов в данном сегменте не останется, новым абонентам придется не просто покупать их, но ждать освобождения.
				</p>
				<p>
					Второй негативный момент – изначальное отсутствие поддержки IPsec. Активация возможна, однако, куда проще сделать это с нового адреса.
				</p>
				<a name="10"></a>
				<h3>Развитие технологии</h3>
				<p>
					Более современная версия интернет-протокола, лишенная недостатков IPv4 – IPv6. Ее создание датировано 1995 годом. Количество доступных адресов в рамках IPv6 является, по сути, неограниченным, составляет почти 80 октиллионов, что решает главный минус IPv4 – численность идентификаторов, не соответствующая реальным потребностям абонентов. Другие достоинства обновленной версии выглядят следующим образом:
				</p>
				<ul>
					<li>Повышенная эффективность маршрутизации, что позволяет упростить структуру таблицы маршрутизации, повысить общую стабильность, точность, скорость работы.</li>
					<li>Повышенная эффективность взаимодействия с пакетами информации за счет оптимизации заголовков.</li>
					<li>Базовая поддержка технологии QoS, исключающая задержки при передаче данных.</li>
					<li>Поддержка технологии IoT. Благодаря упрощенной информационной структуре и более эффективной обработке пакетов, новый протокол лучше подходит для подключения сетевого оборудования с невысокой вычислительной мощностью и малым потреблением энергии.</li>
				</ul>
				<p>
					Несмотря на преимущества IPv6, многие пользователи остаются на адресах IPv4. Распространенность ограничивается как техническими, так и финансовыми факторами, однако, количество используемых адресов нового протокола неуклонно растет. В будущем можно ожидать, что IPv4 будет полностью вытеснен шестой версией.
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
				IPv4: bu nima? 
				</h3>
				<p>
				Internet ma'lumotlar almashinuvi uchun mo'ljallangan tarmoqdir. Ensiklopedik maqolalar, musiqa, videolar, filmlarni qidirish, xabarlarni qabul qilish va yuborish - bularning barchasi ma'lumot almashish imkoniyatlari. Zamonaviy dunyoni Internetsiz tasavvur qilib bo'lmaydi, ammo har bir foydalanuvchi ham uning qanday ishlashi va tuzilishi haqida taxminiy tasavvurga ega emas. 
				</p>
				<p>
				Ma'lumotlar ma'lum bir qurilmaga, xoh u smartfon yoki kompyuterga muvaffaqiyatli etib borishi uchun maxsus protokollar qo'llaniladi, ulardan eng keng tarqalgani IPv4. U qanday va qachon paydo bo'lgan? Operatsion printsipi nima? Asosiy xususiyatlar qanday? 
				</p>
				<a name="2"></a>
				<h3>Qisqacha tarix</h3>
				<p>
				Zamonaviy Internetning salafi ARPAnet bo'lib, uning tashabbuskori AQSh Mudofaa vazirligi edi. U 1969 yilda paydo bo'lgan, 4 ta xost o'rtasida ma'lumotlar almashinuvi amalga oshirilgan bo'lsa-da, 1981 yilga kelib ularning soni 213 taga etdi. Tarmoq kengaydi, guruhlar va segmentlarga bo'lindi, tuzilmaning murakkabligi barcha tuzilmalar o'rtasida samarali o'zaro aloqani o'rnatish yo'lini izlash tobora dolzarb bo'lib ketishiga olib keldi. 
				</p>
				<p>
				Mutaxassislarning asosiy vazifasi aniq formuladan iborat edi - ular bilan bog'langan mijozlarning samarali o'zaro ta'sirini ta'minlagan holda barcha tarmoqlarning boshlang'ich heterojenligini saqlab qolish. Yechim Vinton Serf va Robert Xon tomonidan taklif qilingan. Bu IPv4 protokoliga aylandi. 1981 yilda u tarqala boshladi va 1983 yilga kelib ARPAnet tarmog'ida qo'llaniladigan NCP ni siqib chiqardi. 
				</p>
				<a name="3"></a>
				<h3>Ishlash printsipi</h3>
				<p>
				IPv4 - bu tarmoq va tarmoq qatlamlarida ishlaydigan protokol. Uning eng muhim vazifasi turli qurilmalar, serverlar, kompyuterlar bo'lgan ma'lumotlar paketlarini jo'natuvchilardan qabul qiluvchilarga uzatishdir. Agar kerak bo'lsa, protokol ikkilamchi vazifalarni ham bajaradi:
				</p>
				<ul>
				<li>Axborotning parchalanishi;</li>
				<li>Ma'lumotlarni siqish.</li>
				</ul>
				<p>
				Kengaytirilgan funksionallik miqyosdan va ularga ulangan qurilmalardan qatʼi nazar, har qanday tarmoqlar oʻrtasida samarali oʻzaro aloqani oʻrnatish imkonini beradi. 
				</p>
				<p>
				Yuborilayotgan ma'lumotlar paketi bo'lgan datagramda noyob sarlavha va foydali yuk bo'lishi kerak. Sarlavha jo'natuvchi va oluvchi manzillarini shifrlash uchun kerak, foydali yuk esa asosiy ma'lumot sifatida tushuniladi. IPv4 ni to'g'ridan-to'g'ri aloqa protokollaridan ajratib turadigan xususiyat paketli uzatish usuli bo'lib, u hatto bitta kommutatsiya moduli ishlamay qolsa, ulanish uzilishini bartaraf etadi. Usul paketlarni yo'qotishga ham chidamli bo'lib, ularni qayta tiklash uchun takroriy so'rovlar uchun yordam ko'rsatiladi. 
				</p>
				<p>
				IPv4 protokoli bo'yicha ishlaydigan har bir qurilma o'ziga xos IP-manzilga ega bo'lib, u ma'lumot uzatishning aniqligini ta'minlaydi va kommutatsiyani sozlashda keraksiz asoratlar va kechikishlarni bartaraf etadi. Manzillar ikkita asosiy toifada taqdim etilgan: xususiy va ommaviy. Ommaviy bo'lganlar noyobdir va ko'p hollarda o'zgarmasdir, katta serverlarga tegishli, xususiylar tarmoqqa qayta ulanadigan har bir qurilmaga tayinlanadi va shuning uchun o'zgarishi mumkin, doimiy bog'lanish yo'q. 
				</p>
				<a name="4"></a>
				<h3>IP-manzil tarkibi</h3>
				<p>
				IPv4 da manzil 32 bit ma'lumotdan iborat bo'lib, bu muvaffaqiyatli identifikatsiya qilish uchun etarli. Uning yozuvi 4 ta sonli guruh bo'lib, ularning har biri maksimal 3 ta raqam bilan tuzilishi mumkin. Yozishning aniq misoli "172.16.254.1." bo'lishi mumkin, minimal manzil nuqta bilan ajratilgan 4 ta nol, maksimal "255.255.255.255", ya'ni "255" raqamidan oshib ketish qabul qilinishi mumkin emas. 
				</p>
				<a name="5"></a>
				<h3>Manzil tasnifi</h3>
				<p>
				IPv4 protokoli bo'yicha ishlaydigan tarmoqlarda bir nechta sinflarning manzillari qo'llaniladi:
				</p>
				<ul>
				<li>A - mumkin bo'lgan qiymatlar - "0.0.0.0" dan "127.255.255.255" gacha. Bu turkum yirik tarmoqlarga qaratilgan.</li>
				<li>B – yirik va oʻrta miqyosli tarmoqlar, qiymatlar – “128.0.0.0” dan “191.255.255.255” gacha.</li>
				<li>C – ruxsat etilgan diapazon “192.0.0.0” dan “223.255.255.255” gacha, bu mahalliy tarmoqlar bilan ideal muvofiqlikni taʼminlaydi.</li>
				</ul>
				<p>
				Shuningdek, maxsus D va E sinflari mavjud. Birinchisi, bir vaqtning o'zida bir nechta manzillarga paketlarni yuborishni o'z ichiga olgan dasturiy ta'minotga qaratilgan, ikkinchisi eksperimentaldir. 
				</p>
				<a name="6"></a>
				<h3>Manzillash rejimlari</h3>
				<p>
				IPv4 protokoli bir nechta manzillash sxemalarini qo'llab-quvvatlaydi:
				</p>
				<ul>
				<li>Unicast. Ushbu formatda axborot bitta tarmoq moduliga uzatiladi, u ham jo'natuvchi, ham qabul qiluvchi rolini o'ynashi mumkin. Aksariyat hollarda rejim ulanish protokoliga kirish jarayonida qo'llaniladi.</li>
				<li>Efir. Ushbu sxema mos keladigan tarmoqqa ulangan har bir qurilma uzatiladigan ma'lumotlar paketlari bilan o'zaro aloqada bo'lishi mumkinligini anglatadi. Format maxsus identifikatsiya kodini qo'shish orqali amalga oshiriladi.</li>
				<li>Multicast. Ushbu sxema yuqorida tavsiflangan formatlarni birlashtiradi va eng universal va funktsional hisoblanadi.</li>
				</ul>
				<a name="7"></a>
				<h3>IPv4 paket tuzilishi</h3>
				<p>
				O'tkazilayotgan ma'lumotlar paketi nafaqat asosiy ma'lumotlar to'plamini, balki kommutatsiyaning aniqligini, barqarorligini, etkazib berish va jo'natishning o'z vaqtidaligini ta'minlaydigan yordamchi ma'lumotlarni ham o'z ichiga oladi. Eng muhim tarkibiy qismlar quyidagilardir:
				</p>
				<ul>
				<li>Umr vaqti. U inglizcha "TTL" qisqartmasi bilan belgilanadi. To'g'ri belgilangan xizmat muddati paketning aylanishi va cheksiz uzatilishi xavfini yo'q qiladi. Bitta qurilma uni qabul qilishi TTLni bir marta kamaytiradi, u nolga yetganda, uzatish to‘xtaydi.</li>
				<li>Internet protokoli. Ma'lumot IPv4 ko'lamini kengaytiradigan yuqori darajadagi protokolga ishora qiladi.</li>
				<li>Yuborganning manzili. Paketni yaratgan qurilmaning noyob identifikatori.</li>
				<li>Qabul qiluvchining manzili. Ma'lumot yetkazilishi kerak bo'lgan qurilma identifikatori. U tarqatish formatidan qat'iy nazar, unicastdan translyatsiyaga qadar tayinlanadi.</li>
				<li>Ma'lumotlar. Yuboruvchi va qabul qiluvchi oʻrtasida uzatiladigan maʼlumotlarning asosiy toʻplami “Maʼlumotlar” atamasi bilan belgilanadi.</li>
				</ul>
				<a name="8"></a>
				<h3>OSI tarmoq ma'lumot modelidagi protokol holati</h3>
				<p>
				OSI modeli tarmoqqa ulangan uskunalarning o'zaro ta'sirini aniq ifodalash uchun maxsus yaratilgan. U qat'iy ierarxiyaga asoslangan va jismoniydan tortib to amaliygacha bo'lgan 7 darajadan iborat. 
				</p>
				<p>
				IPv4 protokoli umumiy ierarxik tuzilmada uchinchi o'rinni egallagan tarmoq qatlamiga tegishli. Ushbu darajaning asosiy vazifasi axborotni uzatishning optimal yo'nalishlarini aniqlash, maksimal tezlikni, etkazib berish barqarorligini ta'minlash, butun tarmoq va har bir alohida qurilmaning joriy yukini hisobga olgan holda, nosozliklar va ma'lumotlar yo'qolishini bartaraf etadi. 
				</p>
				<p>
				Tarmoq darajasida tarjima bilan bog'liq vazifalar ham amalga oshiriladi; mantiqiy tarmoq manzillari jismoniy manzillarga aylantiriladi yoki teskari transformatsiya sodir bo'ladi. Uchinchi daraja - to'rtinchi darajadan ma'lumotlarni qabul qiluvchi, uni qismlarga ajratadigan va ikkinchi darajaga muvaffaqiyatli uzatish uchun yordamchi ma'lumotlarni qo'shadigan vositachi. 
				</p>
				<a name="9"></a>
				<h3>Afzalliklar va kamchiliklar</h3>
				<p>
				IPv4 protokolining asosiy kuchli tomonlari quyidagilardan iborat:
				</p>
				<ul>
				<li>Universallik, turli o'lchamdagi tarmoqlar bilan moslik, barcha tarmoq qurilmalarida, xoh marshrutizatorlar, xoh kompyuterlar, xoh smartfonlarda ishonchli ishlash.</li>
				<li>Tarmoqni amalga oshirish, uni asosiy sozlash va keyingi boshqarish, konfiguratsiyani soddalashtiradigan topologiyaning soddaligi.</li>
				<li>IP manzillarining qisqacha yozilishi, yozib olishni soddalashtirish. Agar kerak bo'lsa, siz hatto raqamlarni eslab qolishingiz mumkin; format mobil telefon raqamidan murakkabroq emas.</li>
				<li>Ma'lumotlarni uzatish xavfsizligini oshiradigan shifrlash algoritmlarini qo'llab-quvvatlash, ushlashni foydasiz qiladi va kodlashni bilmasdan shifrni ochish mumkin emas.</li>
				<li>Multicast qo'llab-quvvatlash, ayniqsa audio va video oqim xizmatlari uchun muhim.</li>
				</ul>
				<p>
				IPv4 ning asosiy kamchiligi mavjud manzillar sonining cheklanganligidir. Ularning soni 4 milliarddan oshadi, ammo doimiy ravishda o'sib borayotgan obunachilar sonini hisobga olsak, bu etarli emasdek tuyuladi. Internet-kommunikatsiya sohasini ifodalovchi nufuzli tashkilotlar yaqin orada ushbu segmentda bepul manzillar qolmaydi degan fikrda bir ovozdan; yangi obunachilar nafaqat ularni sotib olishlari, balki ular mavjud bo'lishini kutishlari kerak. 
				</p>
				<p>
				Ikkinchi salbiy nuqta - IPsec yordamining dastlabki etishmasligi. Faollashtirish mumkin, ammo uni yangi manzildan qilish ancha oson. 
				</p>
				<a name="10"></a>
				<h3>Texnologiyani rivojlantirish</h3>
				<p>
				Internet protokolining IPv4 kamchiliklaridan xoli zamonaviyroq versiyasi IPv6 hisoblanadi. Uning yaratilishi 1995 yilga borib taqaladi. IPv6 doirasida mavjud manzillar soni mohiyatan cheksiz bo'lib, deyarli 80 oktillionni tashkil etadi, bu IPv4 ning asosiy kamchiligini – abonentlarning real ehtiyojlariga mos kelmaydigan identifikatorlar sonini hal qiladi. Yangilangan versiyaning boshqa afzalliklari quyidagilardan iborat:
				</p>
				<ul>
				<li>Marshrutlash jadvali tuzilmasini soddalashtirish, umumiy barqarorlik, aniqlik va ishlash tezligini yaxshilash imkonini beruvchi marshrutlash samaradorligi ortdi.</li>
				<li>Sarlavhalarni optimallashtirish hisobiga axborot paketlari bilan oʻzaro ishlash samaradorligini oshirish.</li>
				<li>QoS texnologiyasi uchun asosiy yordam, ma'lumotlarni uzatishdagi kechikishlarni bartaraf etish.</li>
				<li>IoT texnologiyasini qo'llab-quvvatlash. Soddalashtirilgan axborot tuzilmasi va paketlarni yanada samarali qayta ishlash tufayli yangi protokol kam hisoblash quvvati va kam energiya sarflaydigan tarmoq uskunalarini ulash uchun ko‘proq mos keladi.</li>
				</ul>
				<p>
				IPv6 ning afzalliklariga qaramay, ko'p foydalanuvchilar IPv4 manzillarida qolishadi. Qabul qilish texnik va moliyaviy omillar bilan cheklangan, ammo yangi protokol uchun foydalaniladigan manzillar soni barqaror o'sib bormoqda. Kelajakda IPv4 to'liq 6-versiyaga almashtirilishini kutish mumkin. 
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				IPv4: what is it?
				</h3>
				<p>
				The Internet is a network designed for data exchange. Searching for encyclopedic articles, music, videos, films, receiving and sending messages - all these are options for information exchange. It is impossible to imagine the modern world without the Internet, however, not every user has even a rough idea of ​​how it works and is arranged.
				</p>
				<p>
				In order for data to successfully arrive at a specific device, be it a smartphone or a computer, special protocols are used, the most common of which is IPv4. How and when did it appear? What is the principle of operation? What are the main features?
				</p>
				<a name="2"></a>
				<h3>Brief history</h3>
				<p>
				The predecessor of the modern Internet was the ARPAnet network, the initiator of which was the US Department of Defense. It appeared in 1969, data exchange was carried out between 4 hosts, however, by 1981 the number had grown to 213. The network expanded, divided into groups and segments, the complexity of the structure led to the fact that the search for a way to establish effective interaction between all structures became increasingly relevant.
				</p>
				<p>
				The main task of specialists had a clear formulation - to preserve the initial heterogeneity of all networks while ensuring effective interaction of clients connected to them. The solution was proposed by Vinton Cerf and Robert Khan. It was the IPv4 protocol. In 1981, it began to spread, and by 1983 it had replaced NCP, used in the ARPAnet.
				</p>
				<a name="3"></a>
				<h3>Principle of operation</h3>
				<p>
				IPv4 is a protocol that operates at the network and internetwork levels. Its most important function is to transmit data packets from senders to recipients, which are various devices, servers, computers. If necessary, the protocol can also handle secondary tasks:
				</p>
				<ul>
				<li>Information fragmentation;</li>
				<li>Data compression.</li>
				</ul>
				<p>
				Extended functionality makes it possible to establish effective interaction between any networks, regardless of scale and devices connected to them.
				</p>
				<p>
				A datagram, a packet of sent data, must have a unique header and payload. The header is needed to encrypt the sender and recipient addresses, while the payload is understood to be the main information. A feature that distinguishes IPv4 from direct communication protocols is the packet transmission method, which eliminates the connection break if even one switching module fails. The method is also resistant to packet loss; support for repeated requests is provided for their recovery. </p>
				<p>
				Each device operating under the IPv4 protocol has a unique IP address, which ensures the accuracy of information transfer, eliminates unnecessary complications and delays when setting up switching. Addresses are presented in two large categories, private and public. Public ones are unique and, in most cases, unchangeable, belong to large servers, private ones are assigned to each device that reconnects to the network, and therefore can change, there is no permanent binding.
				</p>
				<a name="4"></a>
				<h3>IP address composition</h3>
				<p>
				In the IPv4 version, the address consists of 32 bits of information, which is enough for successful identification. It is written - 4 numerical groups, each of which can be formed by a maximum of 3 digits. A clear example of writing can be “172.16.254.1.”, the minimum address is 4 zeros separated by dots, the maximum is “255.255.255.255”, that is, exceeding the number “255” is unacceptable.
				</p>
				<a name="5"></a>
				<h3>Classification of addresses</h3>
				<p>
				In networks operating on the IPv4 protocol, addresses of several classes are used:
				</p>
				<ul>
				<li>A – possible values ​​– from “0.0.0.0” to “127.255.255.255”. This category is focused on large-scale networks.</li>
				<li>B – large-scale and medium-scale networks, values ​​– from “128.0.0.0” to “191.255.255.255”.</li>
				<li>C – the permissible range is from “192.0.0.0” to “223.255.255.255”, which ensures ideal compatibility with local-scale networks.</li>
				</ul>
				<p>
				There are also specialized classes, D and E. The first is focused on software whose operation involves sending packets to several addresses at once, the second is experimental.
				</p>
				<a name="6"></a>
				<h3>Addressing modes</h3>
				<p>
				The IPv4 protocol supports several addressing schemes:
				</p>
				<ul>
				<li>Unicast. In this format, information is transmitted to a single network module that can act as both a sender and a receiver. In most cases, the mode is used when accessing the connection protocol.</li>
				<li>Broadcast. This scheme implies that each device connected to the corresponding network can interact with the transmitted data packets. The format is made possible by adding a special identification code.</li>
				<li>Multicast. This scheme combines the formats described above, is the most universal and functional.</li>
				</ul>
				<a name="7"></a>
				<h3>IPv4 packet structure</h3>
				<p>
				The transmitted data packet contains not only the main set of information, but also an auxiliary one, ensuring clarity, stability of switching, timely delivery and sending. The most significant structural parts are the following:
				</p>
				<ul>
				<li>Time to live. It is designated by the English abbreviation “TTL”. Correctly set time to live eliminates the risk of looping, endless transmission of the packet. The fact of receipt by one device reduces the TTL by one, when it reaches zero, the transmission stops.</li>
				<li>Internet protocol. The information indicates a higher-level protocol, which expands the scope of IPv4.</li>
				<li>Sender address. A unique identifier of the device that generated the packet.</li>
				<li>Recipient address. Identifier of the device to which the information should be delivered. It is assigned regardless of the sending format, from unicast to broadcast.</li>
				<li>Data. The main set of data transmitted between the sender and the recipient is designated by the term “Data”.</li>
				</ul>
				<a name="8"></a>
				<h3>Protocol status in the OSI reference network model</h3>
				<p>
				The OSI model was created specifically to clearly represent the interaction of equipment connected to the network. It is based on a strict hierarchy, consists of 7 levels, from physical to application.
				</p>
				<p>
				The IPv4 protocol belongs to the network layer, which occupies the third position in the general hierarchical structure. The main function of this level is to determine the optimal routes for information transmission, ensuring maximum speed, stability of delivery, taking into account the current load of the network as a whole and each individual device, which eliminates failures and loss of information.
				</p>
				<p>
				The network layer also performs tasks related to translation, logical network addresses are transformed into physical ones, or the reverse transformation occurs. The third level is an intermediary that receives data from the fourth level, fragments it, adds auxiliary data for successful transmission to the second.
				</p>
				<a name="9"></a>
				<h3>Advantages and disadvantages</h3>
				<p>
				The main strengths of the IPv4 protocol are as follows:
				</p>
				<ul>
				<li>Universality, compatibility with networks of various sizes, confident operation on all network devices, be it routers, computers, smartphones.</li>
				<li>Simplicity of topology, which simplifies the implementation of the network, its basic setup and further management, configuration.</li>
				<li>Brief writing of IP addresses, simplifying the recording. If necessary, you can even remember the numbers, the format is no more complicated than a mobile phone number.</li>
				<li>Support for encryption algorithms, which increases the security of data transfer, makes their interception useless, without knowledge of encodings, decryption is impossible.</li>
				<li>Support for multicast, which is especially important for audio and video streaming services.</li>
				</ul>
				<p>
				The main disadvantage of IPv4 is the limited number of available addresses. Their number is more than 4 billion, however, given the constantly increasing number of subscribers, it does not seem sufficient. Authoritative organizations representing the field of Internet communications are unanimous in the opinion that very soon there will be no free addresses left in this segment, new subscribers will have to not only buy them, but wait for them to become available.
				</p>
				<p>
				The second negative point is the initial lack of IPsec support. Activation is possible, however, it is much easier to do this from a new address.
				</p>
				<a name="10"></a>
				<h3>Technology development</h3>
				<p>
				A more modern version of the Internet protocol, devoid of the shortcomings of IPv4 is IPv6. Its creation dates back to 1995. The number of available addresses within IPv6 is essentially unlimited, amounting to almost 80 octillion, which solves the main disadvantage of IPv4 - the number of identifiers that does not correspond to the real needs of subscribers. Other advantages of the updated version are as follows:
				</p>
				<ul>
				<li>Increased routing efficiency, which allows you to simplify the structure of the routing table, increase overall stability, accuracy, and speed.</li>
				<li>Increased efficiency of interaction with information packets due to header optimization.</li>
				<li>Basic support for QoS technology, eliminating delays in data transmission.</li>
				<li>Support for IoT technology. Thanks to its simplified information structure and more efficient packet processing, the new protocol is better suited for connecting network equipment with low computing power and low energy consumption.</li>
				</ul>
				<p>
				Despite the advantages of IPv6, many users remain on IPv4 addresses. Its prevalence is limited by both technical and financial factors, but the number of addresses used by the new protocol is steadily growing. In the future, it can be expected that IPv4 will be completely replaced by the sixth version.
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
