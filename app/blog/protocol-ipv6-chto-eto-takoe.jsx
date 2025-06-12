import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "IPv6: будущее интернет-адресации",
		uz: "IPv6: Internet-manzillashning kelajagi",
		en: "IPv6: The Future of Internet Addressing",
	},
	title: {
		ru: "IPv6: новое поколение интернет-протокола",
		uz: "IPv6: Internet protokolining keyingi avlodi",
		en: "IPv6: The Next Generation of Internet Protocol",
	},
	desc: {
		ru: "Подробное объяснение протокола IPv6, его отличий от IPv4, преимуществ и необходимости перехода на новую версию.",
		uz: "IPv6 protokoli, uning IPv4 dan farqlari, afzalliklari va yangi versiyaga yangilash zarurati haqida batafsil tushuntirish.",
		en: "A detailed explanation of the IPv6 protocol, its differences from IPv4, its advantages and the need to upgrade to the new version.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "7",
	view: "15",
	img: "/blog/ipv6.png",
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
		{ title: {ru: "Протокол IPv6: что это?", uz: "IPv6 protokoli: bu nima?", en: "IPv6 Protocol: What is it?", slug: "1" }},
		{ title: {ru: "Причины появления", uz: "Ko'rinish sabablari", en: "Reasons for the appearance", slug: "2" }},
		{ title: {ru: "Написание", uz: "Yozish", en: "Writing", slug: "3" }},
		{ title: {ru: "Структура заголовка", uz: "Sarlavha tuzilishi", en: "Header structure", slug: "4" }},
		{ title: {ru: "Классификация адресов", uz: "Manzil tasnifi", en: "Address classification", slug: "5" }},
		{ title: {ru: "Преимущества", uz: "Afzalliklari", en: "Advantages", slug: "6" }},
		{ title: {ru: "Проблемы и решения", uz: "Muammolar va yechimlar", en: "Problems and solutions", slug: "7" }},
		{ title: {ru: "Подведение итогов", uz: "Xulosa qilish", en: "Summing up", slug: "8" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Протокол IPv6: что это?
				</h3>
				<p>
					Отправка и получение писем, посылок, бандеролей, квитанций на оплату услуг ЖКХ – все это оказалось бы невозможным без почтовых адресов. Подобное применимо и к интернету, только вместо почтовых – там используются IP-адреса. Расшифровка аббревиатуры “IP” – “интернет-протокол”, то есть набор алгоритмов и инструментов, благодаря которым внутри локальных и глобальных сетей происходит обмен данными, устройства, ноутбуки, компьютеры, роутеры, модемы, серверы, взаимодействуют друг с другом.
				</p>
				<p>
					Наиболее популярной версией протокола продолжает оставаться IPv4, однако, постепенно ей на смену приходит IPv6. В чем ее особенности? Каковы преимущества?
				</p>
				<a name="2"></a>
				<h3>Причины появления</h3>
				<p>
					Версия IPv4 появилась еще в 80-х годах минувшего столетия. Она предполагает 32-битный формат написания, так что количество доступных комбинаций – около 4 миллиардов 300 миллионов. Конечно, в годы появления количество выглядело вполне достаточным для удовлетворения потребностей всех пользователей, ведь интернет не был слишком распространенной и доступной технологией.
				</p>
				<p>
					Времена изменились. Население планеты стремится к 8 миллиардам, в кармане у подавляющего большинства лежит смартфон, в портфеле или рюкзаке – ноутбук, а дома стоит компьютер. Каждое из перечисленных устройств умеет выходить в интернет, а потому нуждается в собственном IP-адресе. IPv4 критически не хватает для удовлетворения потребностей.
				</p>
				<img src="/blog/ipv61.png" alt="IPV6" />
				<p>
					Протокол IPv6 подразумевает не 32, а 128-битное написание, благодаря которому количество доступных комбинаций адресов составляет совершенно астрономическую цифру - 3,4 x 10^38. Это с запасом перекрывает потребности не просто на годы, а на десятилетия и столетия вперед.
				</p>
				<p>
					Дата официального мирового дебюта IPv6 – 6 июня 2012 года, хотя первые испытания и тестирования начались гораздо раньше. С каждым годом версия становится все более распространенной, поддерживается современным сетевым оборудованием, роутерами, маршрутизаторами, базовыми станциями сотовой связи, работающих в формате 4G и более высоких.
				</p>
				<p>
					Согласно статистическим данным, общий объем мирового трафика, относящегося к IPv6, составляет пока менее половины, около 35-40 процентов, но он стабильно растет.
				</p>
				<a name="3"></a>
				<h3>Написание</h3>
				<p>
					Как отмечено выше, длина адреса IPv6 – 128 бит. Запись представлена 8 группами по 4 цифры 16-ричного формата, разделенными двоеточиями. Пример написания – “2001:0db8:abf2:29ea:5298:ad71:2ca0:4ff1”. Для большего удобства были введены некоторые правила:
				</p>
				<ul>
					<li>Возможность опускания при написании начальных нулей. Например, группа “0db8” превратится в “db8”.</li>
					<li>Использование двойного двоеточия для замены групп, следующих друг за другом, сформированных исключительно нулями.</li>
					<li>Использование строчных, а не заглавных, символов латинского алфавита.</li>
				</ul>
				<img src="/blog/ipv62.png" alt="IPV6" />
				<a name="4"></a>
				<h3>Структура заголовка</h3>
				<p>
					Информационный пакет содержит не только основные доставляемые сведения, но и заголовок, определяющий эффективность и точность доставки. Размера адреса в IPv6 увеличился четырехкратно, с 32 до 128 бит, но заголовок – только вдвое, что свидетельствует о его хорошей оптимизации.
				</p>
				<p>
					В фиксированной части заголовка находятся все сведения, требуемые для маршрутизации:
				</p>
				<ul>
					<li>Версия протокола. В данном случае – IPv6.</li>
					<li>Класс трафика. От него зависит, насколько срочно должен быть доставлен конкретный пакет. Вместе с классом, повышается и приоритет доставки.</li>
					<li>Поточная метка. Ее получателями являются маршрутизаторы. В ней содержатся данные о специфике, порядке передачи пакетов в определенном потоке информации.</li>
					<li>Протяженность полезной нагрузки. Определяет размер пакета в полезной нагрузке.</li>
					<li>Адреса. Фиксируют IP-адреса устройства, отправившего пакет, и места его назначения.</li>
				</ul>
				<p>
					Вне фиксированной части заголовка могут находиться и другие данные, в том числе сведения о необходимости активации шифрования, вспомогательных устройствах при транзитной передаче, аутентификации.
				</p>
				<a name="5"></a>
				<h3>Классификация адресов</h3>
				<p>
					В протоколе IPv6 используются адреса следующих типов:
				</p>
				<ul>
					<li>Unicast. Нужны для точного распознавания интерфейса узла, функционирующего на IPv6.</li>
					<li>Multicast. Позволяют отправлять данные сразу на несколько адресов. Аналоги широкополосных адресов, характерных для предыдущей версии.</li>
					<li>Anycast. Такие адреса присваиваются сразу нескольким устройствам, однако, пакет поступает на ближайшее.</li>
				</ul>
				<img src="/blog/ipv63.png" alt="IPV6" />
				<p>
					На несколько категорий также можно разделить Unicast-адреса:
				</p>
				<ul>
					<li>Global. Публичные. По сути, это аналоги тех же адресов в IPv4. Сетевое оборудование может построить до них полноценный путь для эффективной передачи данных. Эти адреса уникальны и неповторимы, допускают как статическую настройку, так и динамическую.</li>
					<li>Unique local. Их аналоги в 4-й версии протокола IP – частные. Для глобальной маршрутизации они не применяются, но используются в частных сетях малого масштаба.</li>
					<li>Link local. Эти адреса в IPv6 принадлежат к нижнему уровню. Их назначение автоматизировано, процесс контролируется и управляется хостом. Маршрутизация в глобальной сети невозможна, сфера применения ограничивается каналом, в котором сформирован адрес. Уникальность необязательна.</li>
				</ul>
				<a name="6"></a>
				<h3>Преимущества</h3>
				<p>
					Протокол IPv6 отличается от предшественника в лучшую сторону не только максимальным количеством возможных адресов, но и другими преимуществами. Наиболее значимые выглядят следующим образом:
				</p>
				<ul>
					<li>Усовершенствованные алгоритмы маршрутизации. Процесс протекает быстрее и эффективнее, что положительно сказывается на общей надежности, стабильности сети, ускоряет передачу информации. Преимущество становится все более актуальным и ощутимым с распространением оптоволоконных линий и высокоскоростных стандартов сотовой связи, LTE, 4G, 5G. Такую скорость однозначно оценят любители онлайн-игр и кинотеатров. Пинг уменьшится.</li>
					<li>Упрощенные заголовки, не содержащие лишних данных. Это также повышает скорость обмена информацией, вдобавок снижает нагрузку на сетевое оборудование.</li>
					<li>Максимальная безопасность. Протоколом IPv6 предусмотрена поддержка функций, защищающих информацию от перехвата, обеспечивающих их передачу в зашифрованном виде, делающим перехват бесполезным. Например, поддерживается IPSec, то есть даже без вспомогательных программных и аппаратных средств удастся достичь высокого уровня безопасности, не переживать по поводу хакерских атак, взломов сети, кражи или намеренного повреждения информации.</li>
					<li>Совместимость с новыми технологиями. Далеко не все инновационные разработки удается использовать на IPv4, из-за ограниченного адресного пространства и не лучших алгоритмов маршрутизации. IPv6 решает проблему, позволяет в полной мере раскрыть потенциал IoT, интернета вещей, вычислений в облачных сервисах, машинного обучения и других технологий.</li>
					<li>Поддержка функции QoS, позволяющей фиксировать пакеты информации, максимально чувствительные к падениям скорости, передача которых должна вестись в первую очередь.</li>
				</ul>
				<img src="/blog/ipv64.png" alt="IPV6" />
				<a name="7"></a>
				<h3>Проблемы и решения</h3>
				<p>
					Несмотря на очевидные преимущества IPv6, существуют некоторые проблемы, мешающие его распространению. В частности, нужно отметить следующие ограничивающие факторы:
				</p>
				<ul>
					<li>Несовместимость протоколов. Устройство, поддерживающее IPv4, не может соединиться с аналогом, работающим на IPv6. Требуется модернизация или использование посреднических сетевых компонентов, в обоих случаях придется столкнуться с дополнительными расходами.</li>
					<li>Ограниченность приложений, программного обеспечения. Не все программы пока позволяют эффективно взаимодействовать с IPv6. Решение проблемы аналогично предыдущей, требуется модернизация, обновление, переход на актуальные версии.</li>
					<li>Недостаточная информированность пользователей. Профессионалам уже давно известны преимущества IPv6, чего не скажешь о простых пользователях, продолжающих жить в мире, где существует только 4-я версия. Интернет-корпорациям, провайдерам нужно более активно продвигать новую версию.</li>
				</ul>
				<a name="8"></a>
				<h3>Подведение итогов</h3>
				<p>
					Несмотря на сложности, ограничивающие распространение, однозначно можно сказать, что будущее – за протоколом IPv6. Дело не только в исчерпании запаса свободных адресов IPv4, но и в технических преимуществах новой версии, ее способности передавать данные на более высокой скорости, поддержке функций, обеспечивающих защиту и безопасность. При покупке сетевых устройств, будь то роутеры, маршрутизаторы, сетевые платы, модемы, стоит обращать внимание на их поддержку IPv6.
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
				IPv6 protokoli: bu nima?
				</h3>
				<p>
				Xatlar, posilkalar, paketlar, kommunal to'lovlarni jo'natish va qabul qilish - bularning barchasi pochta manzillarisiz mumkin emas. Xuddi shu narsa Internetga ham tegishli, u erda faqat pochta manzillari o'rniga IP-manzillar qo'llaniladi. "IP" qisqartmasi "Internet Protocol" degan ma'noni anglatadi, ya'ni algoritmlar va vositalar to'plami, buning yordamida mahalliy va global tarmoqlar, qurilmalar, noutbuklar, kompyuterlar, routerlar, modemlar, serverlar bir-biri bilan o'zaro aloqada bo'lgan ma'lumotlar almashinuvi amalga oshiriladi.
				</p>
				<p>
				Protokolning eng mashhur versiyasi IPv4 bo'lib qolmoqda, ammo u asta-sekin IPv6 bilan almashtirilmoqda. Uning xususiyatlari qanday? Qanday afzalliklari bor?
				</p>
				<a name="2"></a>
				<h3>Uning paydo bo'lish sabablari</h3>
				<p>
				IPv4 o'tgan asrning 80-yillarida paydo bo'lgan. U 32 bitli yozish formatini qabul qiladi, shuning uchun mavjud kombinatsiyalar soni taxminan 4 milliard 300 millionni tashkil qiladi. Albatta, paydo bo'lgan yillarda bu raqam barcha foydalanuvchilarning ehtiyojlarini qondirish uchun etarli bo'lib tuyuldi, chunki Internet juda keng tarqalgan va foydalanish mumkin bo'lgan texnologiya emas edi.
				</p>
				<p>
				Zamon o'zgardi. Sayyora aholisi 8 milliardga yaqinlashmoqda, aksariyatining cho'ntagida smartfon, portfel yoki ryukzakda noutbuk va uyda kompyuter bor. Ushbu qurilmalarning har biri Internetga kirishi mumkin va shuning uchun o'z IP manziliga muhtoj. IPv4 talablarni qondirish uchun juda etarli emas.
				</p>
				<img src="/blog/ipv61.png" alt="IPV6" />
				<p>
				IPv6 protokoli 32-bitli yozishdan ko'ra 128-bitni ishlatadi, bu mavjud manzillar birikmalarining sonini mutlaqo astronomik ko'rsatkichga aylantiradi - 3,4 x 10^38. Bu nafaqat yillardagi, balki o'nlab yillar va asrlar davomidagi ehtiyojlarni qoplaydi.
				</p>
				<p>
				IPv6 ning rasmiy jahon debyut sanasi 2012-yil 6-iyun, garchi birinchi sinovlar va sinovlar ancha oldin boshlangan. Har yili zamonaviy tarmoq uskunalari, marshrutizatorlar, marshrutizatorlar, 4G va undan yuqori formatda ishlaydigan uyali aloqa tayanch stantsiyalari tomonidan qo'llab-quvvatlanadigan versiya tobora kengayib bormoqda.
				</p>
				<p>
				Statistik ma'lumotlarga ko'ra, IPv6 bilan bog'liq jahon trafikining umumiy hajmi hali ham yarmidan kam, taxminan 35-40 foizni tashkil etadi, ammo u barqaror o'sib bormoqda.
				</p>
				<a name="3"></a>
				<h3>Yozish</h3>
				<p>
				Yuqorida aytib o'tilganidek, IPv6 manzilining uzunligi 128 bit. Yozuv ikki nuqta bilan ajratilgan o'n oltilik formatda 4 ta raqamdan iborat 8 ta guruh bilan ifodalanadi. Yozish misoli "2001: 0db8: abf2: 29ea: 5298: ad71: 2ca0: 4ff1". Qulaylik uchun ba'zi qoidalar joriy etildi:
				</p>
				<ul>
				<li>Yozishda boshlang'ich nollarni o'tkazib yuborish imkoniyati. Masalan, “0db8” guruhi “db8”ga aylanadi.</li>
				<li>Faqat nol bilan tuzilgan ketma-ket guruhlarni almashtirish uchun ikki nuqtadan foydalanish.</li>
				<li>Lotin harflari katta emas, kichik harflardan foydalanish.</li>
				</ul>
				<img src="/blog/ipv62.png" alt="IPV6" />
				<a name="4"></a>
				<h3>Sarlavha tuzilishi</h3>
				<p>
				Axborot paketi nafaqat etkazib beriladigan asosiy ma'lumotni, balki etkazib berishning samaradorligi va aniqligini belgilaydigan sarlavhani ham o'z ichiga oladi. IPv6-da manzil hajmi to'rt baravar, 32 dan 128 bitgacha oshdi, lekin sarlavha faqat ikki baravar ko'paydi, bu uning yaxshi optimallashtirilganligini ko'rsatadi.
				</p>
				<p>
				Sarlavhaning belgilangan qismida marshrutlash uchun zarur bo'lgan barcha ma'lumotlar mavjud:
				</p>
				<ul>
				<li>Protokol versiyasi. Bunday holda, IPv6.</li>
				<li>Trafik klassi. Bu ma'lum bir paketni qanchalik zudlik bilan etkazib berish kerakligini aniqlaydi. Sinf bilan birga yetkazib berish ustuvorligi ham ortadi.</li>
				<li>Oqim yorlig'i. Uning qabul qiluvchilari marshrutizatorlardir. Unda ma'lum bir axborot oqimida paketlarni uzatishning o'ziga xos xususiyatlari, tartibi to'g'risidagi ma'lumotlar mavjud.</li>
				<li>Yuklash uzunligi. Foydali yukdagi paket hajmini aniqlaydi.</li>
				<li>Manzillar. Paketni yuborgan qurilmaning IP manzillarini va uning manzilini yozib oling.</li>
				</ul>
				<p>
				Boshqa ma'lumotlar ham sarlavhaning belgilangan qismidan tashqarida joylashgan bo'lishi mumkin, shu jumladan shifrlashni faollashtirish zarurati to'g'risidagi ma'lumotlar, tranzit uzatish paytida yordamchi qurilmalar, autentifikatsiya.
				</p>
				<a name="5"></a>
				<h3>Manzillar tasnifi</h3>
				<p>
				IPv6 protokoli quyidagi turdagi manzillardan foydalanadi:
				</p>
				<ul>
				<li>Unicast. Ular IPv6 da ishlaydigan tugun interfeysini aniq tanib olish uchun kerak.</li>
				<li>Multicast. Ular bir vaqtning o'zida bir nechta manzillarga ma'lumotlarni yuborish imkonini beradi. Oldingi versiyaga xos keng polosali manzillarning analoglari.</li>
				<li>Har qanday translatsiya. Bunday manzillar bir vaqtning o'zida bir nechta qurilmalarga tayinlanadi, biroq paket eng yaqin manzilga yetib boradi.</li>
				</ul>
				<img src="/blog/ipv63.png" alt="IPV6" />
				<p>
				Unicast manzillarni ham bir necha toifalarga bo'lish mumkin:
				</p>
				<ul>
				<li>Global. Ommaviy. Aslida, bu IPv4-dagi bir xil manzillarning analoglari. Tarmoq uskunalari ma'lumotlarni samarali uzatish uchun ularga to'liq yo'l qurishi mumkin. Bu manzillar noyob va takrorlanmaydi va ularni ham statik, ham dinamik tarzda sozlash mumkin.</li>
				<li>Noyob mahalliy. IP protokolining 4-versiyasidagi ularning analoglari shaxsiydir. Ular global marshrutlash uchun ishlatilmaydi, lekin kichik o'lchamli xususiy tarmoqlarda qo'llaniladi.</li>
				<li>Mahalliy havola. IPv6 dagi bu manzillar quyi darajaga tegishli. Ularning tayinlanishi avtomatlashtirilgan, jarayon uy egasi tomonidan nazorat qilinadi va boshqariladi. Global tarmoqda marshrutlash mumkin emas, qo'llash doirasi manzil yaratilgan kanal bilan cheklangan. Yagonalik ixtiyoriy.</li>
				</ul>
				<a name="6"></a>
				<h3>Afzalliklar</h3>
				<p>
				IPv6 protokoli o'zidan oldingisidan nafaqat mumkin bo'lgan manzillarning maksimal soni, balki boshqa afzalliklari bilan ham farq qiladi. Eng muhimlari quyidagilar:
				</p>
				<ul>
				<li>Kengaytirilgan marshrutlash algoritmlari. Jarayon tezroq va samaraliroq bo'lib, bu tarmoqning umumiy ishonchliligi, barqarorligiga ijobiy ta'sir ko'rsatadi va axborot uzatishni tezlashtiradi. Afzallik optik tolali liniyalar va yuqori tezlikdagi uyali aloqa standartlari, LTE, 4G, 5G tarqalishi bilan tobora dolzarb va sezilarli bo'lib bormoqda. Bu tezlik, albatta, onlayn o'yinlar va kinoteatrlar muxlislari tomonidan qadrlanadi. Ping kamayadi.</li>
				<li>Keraksiz ma'lumotlarni o'z ichiga olmaydigan soddalashtirilgan sarlavhalar. Bu shuningdek, axborot almashish tezligini oshiradi, bundan tashqari, tarmoq uskunalariga yukni kamaytiradi.</li>
				<li>Maksimal xavfsizlik. IPv6 protokoli ma'lumotni ushlashdan himoya qiluvchi funktsiyalarni qo'llab-quvvatlaydi, ularning shifrlangan shaklda uzatilishini ta'minlaydi va ushlashni foydasiz qiladi. Misol uchun, IPSec qo'llab-quvvatlanadi, ya'ni qo'shimcha dasturiy ta'minot va apparat vositalarisiz ham siz xakerlik hujumlari, tarmoqni buzish, o'g'irlik yoki ma'lumotlarga qasddan zarar yetkazishdan xavotir olmasdan yuqori darajadagi xavfsizlikka erishishingiz mumkin.</li>
				<li>Yangi texnologiyalar bilan moslik. Cheklangan manzil maydoni va eng yaxshi marshrutlash algoritmlari emasligi sababli IPv4 da hamma innovatsion ishlanmalardan foydalanish mumkin emas. IPv6 muammoni hal qiladi, IoT, narsalar interneti, bulutli hisoblash, mashinani o'rganish va boshqa texnologiyalar imkoniyatlarini to'liq ochib berishga imkon beradi.</li>
				<li>Tezlik pasayishlariga eng sezgir bo'lgan ma'lumotlar paketlarini yozib olish imkonini beruvchi QoS funksiyasini qo'llab-quvvatlash, ularni uzatish birinchi navbatda amalga oshirilishi kerak.</li>
				</ul>
				<img src="/blog/ipv64.png" alt="IPV6" />
				<a name="7"></a>
				<h3>Muammolar va yechimlar</h3>
				<p>
				IPv6 ning aniq afzalliklariga qaramay, uning tarqalishiga to'sqinlik qiladigan ba'zi muammolar mavjud. Xususan, quyidagi cheklovchi omillarga e'tibor qaratish lozim:
				</p>
				<ul>
				<li>Protokolning mos kelmasligi. IPv4-ni qo'llab-quvvatlaydigan qurilma IPv6-da ishlaydigan analogga ulana olmaydi. Vositachi tarmoq komponentlarini modernizatsiya qilish yoki ulardan foydalanish talab qilinadi, ikkala holatda ham siz qo‘shimcha xarajatlarga duch kelishingiz kerak bo‘ladi.</li>
				<li>Cheklangan ilovalar, dasturiy ta'minot. Hamma dasturlar hali IPv6 bilan samarali o'zaro ishlashga imkon bermaydi. Muammoni hal qilish avvalgisiga o'xshaydi, modernizatsiya, yangilash, joriy versiyalarga o'tish talab qilinadi.</li>
				<li>Foydalanuvchining xabardorligi yetarli emas. Professionallar IPv6 ning afzalliklarini uzoq vaqtdan beri bilishadi, buni faqat 4-versiyasi mavjud bo'lgan dunyoda yashashni davom ettiradigan oddiy foydalanuvchilar haqida aytib bo'lmaydi. Internet-korporatsiyalar, provayderlar yangi versiyani faolroq targ‘ib qilishlari kerak.</li>
				</ul>
				<a name="8"></a>
				<h3>Xulosa</h3>
				<p>
				Tarqatishni cheklaydigan qiyinchiliklarga qaramay, kelajak IPv6 protokoliga tegishli ekanligi aniq. Gap nafaqat bepul IPv4 manzillari yetkazib berishning tugashi, balki yangi versiyaning texnik afzalliklari, uning maʼlumotlarni yuqori tezlikda uzatish qobiliyati, himoya va xavfsizlikni taʼminlovchi funksiyalarni qoʻllab-quvvatlash haqida ham bormoqda. Tarmoq qurilmalarini sotib olayotganda, u marshrutizatorlar, marshrutizatorlar, tarmoq kartalari, modemlar bo'lsin, ularning IPv6 qo'llab-quvvatlashiga e'tibor qaratish lozim.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				IPv6 Protocol: What is it?
				</h3>
				<p>
				Sending and receiving letters, parcels, packages, utility bills – all this would be impossible without postal addresses. The same applies to the Internet, only instead of postal addresses, IP addresses are used there. The abbreviation “IP” stands for “Internet Protocol”, that is, a set of algorithms and tools, thanks to which data is exchanged within local and global networks, devices, laptops, computers, routers, modems, servers interact with each other.
				</p>
				<p>
				The most popular version of the protocol continues to be IPv4, however, it is gradually being replaced by IPv6. What are its features? What are the advantages?
				</p>
				<a name="2"></a>
				<h3>Reasons for its appearance</h3>
				<p>
				IPv4 appeared back in the 80s of the last century. It assumes a 32-bit writing format, so the number of available combinations is about 4 billion 300 million. Of course, in the years of its appearance, the number seemed quite sufficient to meet the needs of all users, because the Internet was not a very widespread and accessible technology.
				</p>
				<p>
				Times have changed. The population of the planet is approaching 8 billion, the vast majority have a smartphone in their pocket, a laptop in their briefcase or backpack, and a computer at home. Each of these devices can access the Internet, and therefore needs its own IP address. IPv4 is critically insufficient to meet the needs.
				</p>
				<img src="/blog/ipv61.png" alt="IPV6" />
				<p>
				The IPv6 protocol uses 128-bit rather than 32-bit writing, which makes the number of available address combinations an absolutely astronomical figure - 3.4 x 10^38. This more than covers the needs not just for years, but for decades and centuries to come.
				</p>
				<p>
				The official world debut date of IPv6 is June 6, 2012, although the first tests and trials began much earlier. Every year, the version becomes more and more widespread, supported by modern network equipment, routers, routers, base stations of cellular communications, operating in 4G format and higher.
				</p>
				<p>
				According to statistics, the total volume of world traffic related to IPv6 is still less than half, about 35-40 percent, but it is growing steadily.
				</p>
				<a name="3"></a>
				<h3>Writing</h3>
				<p>
				As noted above, the length of an IPv6 address is 128 bits. The entry is represented by 8 groups of 4 digits in hexadecimal format, separated by colons. An example of writing is “2001:0db8:abf2:29ea:5298:ad71:2ca0:4ff1”. For greater convenience, some rules were introduced:
				</p>
				<ul>
				<li>Possibility of omitting initial zeros when writing. For example, the group “0db8” will become “db8”.</li>
				<li>Using double colons to replace consecutive groups formed exclusively by zeros.</li>
				<li>Using lowercase, not uppercase, Latin characters.</li>
				</ul>
				<img src="/blog/ipv62.png" alt="IPV6" />
				<a name="4"></a>
				<h3>Header structure</h3>
				<p>
				The information packet contains not only the main information to be delivered, but also a header that determines the efficiency and accuracy of delivery. The size of the address in IPv6 has increased fourfold, from 32 to 128 bits, but the header has only doubled, which indicates its good optimization.
				</p>
				<p>
				The fixed part of the header contains all the information required for routing:
				</p>
				<ul>
				<li>Protocol version. In this case, IPv6.</li>
				<li>Traffic class. It determines how urgently a specific packet should be delivered. Along with the class, the delivery priority also increases.</li>
				<li>Flow label. Its recipients are routers. It contains data on the specifics, the order of transmission of packets in a certain information flow.</li>
				<li>Payload length. Determines the size of the packet in the payload.</li>
				<li>Addresses. Record the IP addresses of the device that sent the packet and its destination.</li>
				</ul>
				<p>
				Other data may also be located outside the fixed part of the header, including information on the need to activate encryption, auxiliary devices during transit transmission, authentication.
				</p>
				<a name="5"></a>
				<h3>Classification of addresses</h3>
				<p>
				The IPv6 protocol uses the following types of addresses:
				</p>
				<ul>
				<li>Unicast. They are needed for precise recognition of the interface of a node operating on IPv6.</li>
				<li>Multicast. They allow sending data to several addresses at once. Analogues of broadband addresses typical of the previous version.</li>
				<li>Anycast. Such addresses are assigned to several devices at once, however, the packet arrives at the nearest one.</li>
				</ul>
				<img src="/blog/ipv63.png" alt="IPV6" />
				<p>
				Unicast addresses can also be divided into several categories:
				</p>
				<ul>
				<li>Global. Public. In fact, these are analogues of the same addresses in IPv4. Network equipment can build a full path to them for efficient data transmission. These addresses are unique and unrepeatable, and can be configured both statically and dynamically.</li>
				<li>Unique local. Their analogues in the 4th version of the IP protocol are private. They are not used for global routing, but are used in small-scale private networks.</li>
				<li>Link local. These addresses in IPv6 belong to the lower level. Their assignment is automated, the process is controlled and managed by the host. Routing in the global network is impossible, the scope of application is limited to the channel in which the address is generated. Uniqueness is optional.</li>
				</ul>
				<a name="6"></a>
				<h3>Advantages</h3>
				<p>
				The IPv6 protocol differs from its predecessor for the better not only in the maximum number of possible addresses, but also in other advantages. The most significant are as follows:
				</p>
				<ul>
				<li>Advanced routing algorithms. The process is faster and more efficient, which has a positive effect on the overall reliability, stability of the network, and accelerates the transfer of information. The advantage is becoming increasingly relevant and tangible with the spread of fiber optic lines and high-speed cellular standards, LTE, 4G, 5G. This speed will definitely be appreciated by fans of online games and cinemas. Ping will decrease.</li>
				<li>Simplified headers that do not contain unnecessary data. This also increases the speed of information exchange, in addition, reduces the load on network equipment.</li>
				<li>Maximum security. The IPv6 protocol provides support for functions that protect information from interception, ensuring their transmission in encrypted form, making interception useless. For example, IPSec is supported, which means that even without additional software and hardware, you can achieve a high level of security, without worrying about hacker attacks, network break-ins, theft or deliberate damage to information.</li>
				<li>Compatibility with new technologies. Not all innovative developments can be used on IPv4, due to the limited address space and not the best routing algorithms. IPv6 solves the problem, allows to fully reveal the potential of IoT, Internet of Things, cloud computing, machine learning and other technologies.</li>
				<li>Support for QoS function, which allows to record information packets, which are most sensitive to speed drops, the transmission of which should be carried out first.</li>
				</ul>
				<img src="/blog/ipv64.png" alt="IPV6" />
				<a name="7"></a>
				<h3>Problems and solutions</h3>
				<p>
				Despite the obvious advantages of IPv6, there are some problems that hinder its distribution. In particular, the following limiting factors should be noted:
				</p>
				<ul>
				<li>Protocol incompatibility. A device supporting IPv4 cannot connect to an analog running on IPv6. Modernization or use of intermediary network components is required, in both cases you will have to face additional costs.</li>
				<li>Limited applications, software. Not all programs yet allow you to effectively interact with IPv6. The solution to the problem is similar to the previous one, modernization, updating, switching to current versions is required.</li>
				<li>Insufficient user awareness. Professionals have long known the advantages of IPv6, which cannot be said about ordinary users who continue to live in a world where only the 4th version exists. Internet corporations, providers need to more actively promote the new version.</li>
				</ul>
				<a name="8"></a>
				<h3>Summary</h3>
				<p>
				Despite the difficulties that limit distribution, it is clear that the future belongs to the IPv6 protocol. It is not only about the exhaustion of the supply of free IPv4 addresses, but also about the technical advantages of the new version, its ability to transmit data at a higher speed, support for functions that ensure protection and security. When purchasing network devices, be it routers, routers, network cards, modems, it is worth paying attention to their IPv6 support.
				</p>
			</>
		),
	},
	next: "/blog/chto-takoe-mac-address",
},

mainData = {
    headTitle: data.title,
    url: "/blog/protocol-sftp-chto-eto",
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
