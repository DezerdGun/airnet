import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "MAC-адрес: что это и зачем он нужен?",
		uz: "MAC manzili: bu nima va u nima uchun kerak?",
		en: "MAC address: what is it and why is it needed?",
	},
	title: {
		ru: "MAC-адрес: уникальный идентификатор сетевого устройства",
		uz: "MAC manzili: tarmoq qurilmasi uchun noyob identifikator",
		en: "MAC address: a unique identifier for a network device",
	},
	desc: {
		ru: "Узнайте, что такое MAC-адрес, его структуру, назначение и роль в сетевых коммуникациях.",
		uz: "MAC manzili nima ekanligini, uning tuzilishi, maqsadi va tarmoq aloqalaridagi rolini bilib oling.",
		en: "Find out what a MAC address is, its structure, purpose and role in network communications.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "8",
	view: "24",
	img: "/blog/mac.png",
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
		{ title: {ru: "MAC-адрес: что это?", uz: "MAC manzili: bu nima?", en: "MAC address: what is it?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Umumiy tushuncha", en: "General concept", slug: "2" }},
		{ title: {ru: "Разбор структуры", uz: "Strukturani tahlil qilish", en: "Analysis of the structure", slug: "3" }},
		{ title: {ru: "Классификация", uz: "Tasniflash", en: "Classification", slug: "4" }},
		{ title: {ru: "Функции ", uz: "Функции ", en: "Functions ", slug: "5" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					MAC-адрес: что это?
				</h3>
				<p>
					Обмен данными между устройствами, работающими в глобальной или локальной сети, возможен за счет присвоения каждому из них определенного адреса. В специализированной литературе часто можно встретиться с определением IP-адресов, однако, нужно выделять и MAC-адрес. В чем его особенности? Какие функции он выполняет?
				</p>
				<a name="2"></a>
				<h3>Общее понятие</h3>
				<p>
					Расшифровка аббревиатуры “MAC” – “Media Access Control”. Она указывает на физическое расположение сетевого устройства, обозначается как набор числовых и буквенных символов. Наиболее распространенный формат написания – “00-50-B6-5B-CA-6A”, однако, возможны и другие варианты, со строчными буквами, что характерно для компании CISCO, разделением двоеточиями, используемым в операционных системах на Linux-ядре. Во встроенной памяти компьютерного или другого устройства, подобный номер занимает 48 бит.
				</p>
				<p>
					MAC-адрес можно сравнить с паспортом. Если представить сеть в виде многоквартирного дома, то паспорт – это лучший идентификатор для конкретного абонента. Имена и даже фамилии жильцов могут повторяться, а вот паспорт – уникален, позволяет однозначно идентифицировать получателя или отправителя.
				</p>
				<a name="3"></a>
				<h3>Разбор структуры</h3>
				<p>
					Числа и буквы в MAC не генерируются случайно, находятся в зависимости от определенных правил и требований, благодаря чему удается зашифровать в них важную информацию. Структуру можно разделить на две части:
				</p>
				<ul>
					<li>В первых символах зашифрован код производителя, который позволяет безошибочно определить, кто именно изготовил устройство, будь то сетевая карта или модем. Например, корпорация Google использует комбинацию “3C:5A:B4”, а китайский концерн Huawei – “00:9A:CD”.</li>
					<li>Последующие цифры и буквы – индивидуальный идентификатор. Для этой части допустима случайная генерация, именно такого алгоритма придерживаются, например, компании Qualcomm и MediaTek.</li>
				</ul>
				<img src="/blog/mac1.png" alt="Mac address" />
				<p>
					Для уточнения адреса своего устройства, изучения его структуры, можно воспользоваться как сторонними приложениями, так и функциями, изначально предусмотренными операционной системой. Первый вариант лучше подойдет для смартфонов или планшетных компьютеров на Android, в ОС Windows нужные данные можно получить командой “ipconfig”, а в Linux и Mac – “ifconfig”. 
				</p>
				<a name="4"></a>
				<h3>Классификация</h3>
				<p>
					MAC-адрес представлен двумя основными категориями:
				</p>
				<ul>
					<li>Локальные. Используются для идентификации устройств в небольших частных сетях, ориентированы на внутреннее, а не на глобальное, применение. Характерный пример – домашняя беспроводная сеть Wi-Fi, где центральным звеном является роутер, к которому подключаются смартфоны, планшетные и стационарные компьютеры, ноутбуки.</li>
					<li>Глобальные. В данном случае MAC-адрес присваивается по факту выпуска устройства, должен соответствовать определенным требованиям и быть уникальным во всем интернете, что необходимо для безошибочной идентификации. Присвоение адресов строго контролируется уполномоченной организацией, IEEE. </li>
				</ul>
				<img src="/blog/mac2.png" alt="Mac address" />
				<a name="5"></a>
				<h3>Функции</h3>
				<p>
					Знание адресов значительно упрощает сбор данных об устройствах, входящих в состав сети. Каждый из них – персональный идентификатор, показывающий, какое оборудование активно, как оно взаимодействует с другой техникой, как обменивается информацией. MAC-адреса не просто гарантируют точность обмена данными между устройствами, исключают риск отправки пакетов не тому получателю, помогают отслеживать трафик и перенастраивать сеть, но и решают массу других задач:
				</p>
				<ul>
					<li>Повышение уровня защиты сети. Например, для беспроводного Wi-Fi роутера можно задать “белый список” адресов. Если идентификатора устройства, будь то смартфон или ноутбук, не окажется в этом списке, выполнить подключение не удастся, попытка автоматически заблокируется.</li>
					<li>Упрощение восстановления сети. Программная диагностика быстро определит MAC-адрес оборудования, вышедшего из строя, нуждающегося в восстановлении или замене. Такой алгоритм поможет провести ремонт максимально оперативно, исключит необходимость в сложных диагностических операциях, последовательной проверке всех аппаратных компонентов.</li>
					<li>Настройка фильтров. Не обязательно полностью блокировать определенным адресам доступ к сети. Можно ограничиться более лояльными ограничениями, например, по скорости или времени доступа. Это исключит перегрузку каналов связи и другие негативные явления.</li>
				</ul>
				<p>
				MAC-адрес способен стать и ценным коммерческим инструментом. Например, в кафе, где есть общедоступная сеть Wi-Fi, он становится основой для статистических отчетов, позволяет точно зафиксировать посещаемость, определить наиболее загруженные периоды. Такая статистика поможет в определении эффективности рекламных акций, если количество уникальных MAC после таких кампаний увеличилось – работа была проведена правильно.
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
				MAC manzili: bu nima?
				</h3>
				<p>
				Global yoki mahalliy tarmoqda ishlaydigan qurilmalar o'rtasida ma'lumotlar almashinuvi ularning har biriga ma'lum bir manzilni belgilash orqali mumkin. Ixtisoslashgan adabiyotlarda siz ko'pincha IP manzillarining ta'rifini topishingiz mumkin, ammo MAC manzilini ham ajratib ko'rsatishingiz kerak. Uning xususiyatlari qanday? U qanday funktsiyalarni bajaradi?
				</p>
				<a name="2"></a>
				<h3>Umumiy tushuncha</h3>
				<p>
				"MAC" - "Media Access Control" qisqartmasini tushuntirish. Bu raqamli va alifbo belgilar to'plami sifatida belgilangan tarmoq qurilmasining jismoniy joylashishini ko'rsatadi. Eng keng tarqalgan yozish formati "00-50-B6-5B-CA-6A", ammo boshqa variantlar ham mumkin, kichik harflar bilan CISCO kompaniyasiga xos bo'lgan, ikki nuqta bilan ajratilgan, Linux yadrosidagi operatsion tizimlarda qo'llaniladi. Kompyuter yoki boshqa qurilmaning o'rnatilgan xotirasida bunday raqam 48 bitni egallaydi.
				</p>
				<p>
				MAC manzilini pasport bilan solishtirish mumkin. Agar siz tarmoqni ko'p qavatli uy sifatida tasavvur qilsangiz, u holda pasport ma'lum bir abonent uchun eng yaxshi identifikator hisoblanadi. Rezidentlarning ismlari va hatto familiyalari takrorlanishi mumkin, ammo pasport noyobdir, bu sizga oluvchi yoki jo'natuvchini aniq aniqlash imkonini beradi.
				</p>
				<a name="3"></a>
				<h3>Tuzilishni tahlil qilish</h3>
				<p>
				MACdagi raqamlar va harflar tasodifiy yaratilmaydi, ular ma'lum qoidalar va talablarga bog'liq, buning natijasida ulardagi muhim ma'lumotlarni shifrlash mumkin. Strukturani ikki qismga bo'lish mumkin:
				</p>
				<ul>
				<li>Birinchi belgilar ishlab chiqaruvchining kodini kodlaydi, bu sizga qurilmani kim, tarmoq kartasi yoki modem bo'ladimi, aniq aniqlash imkonini beradi. Masalan, Google “3C:5A:B4”, Xitoy konserni Huawei esa “00:9A:CD” kombinatsiyasidan foydalanadi.</li>
				<li>Quyidagi raqamlar va harflar individual identifikator hisoblanadi. Ushbu qism uchun tasodifiy yaratishga ruxsat beriladi; bu, masalan, Qualcomm va MediaTek tomonidan qo'llaniladigan algoritm.</li>
				</ul>
				<img src="/blog/mac1.png" alt="Mac manzili" />
				<p>
				Qurilmangiz manzilini aniqlashtirish, uning tuzilishini o'rganish uchun siz operatsion tizim tomonidan taqdim etilgan uchinchi tomon ilovalari va funktsiyalaridan foydalanishingiz mumkin. Birinchi variant Android-dagi smartfonlar yoki planshetlar uchun ko'proq mos keladi, Windows operatsion tizimida kerakli ma'lumotlarni "ipconfig" buyrug'i bilan, Linux va Mac-da esa "ifconfig" yordamida olish mumkin.
				</p>
				<a name="4"></a>
				<h3>Tasniflash</h3>
				<p>
				MAC manzili ikkita asosiy toifa bilan ifodalanadi:
				</p>
				<ul>
				<li>Mahalliy. Global foydalanishga emas, balki ichki foydalanishga qaratilgan kichik xususiy tarmoqlardagi qurilmalarni aniqlash uchun foydalaniladi. Oddiy misol - uy simsiz Wi-Fi tarmog'i, bu erda markaziy havola smartfonlar, planshetlar, ish stoli kompyuterlari va noutbuklar ulangan router hisoblanadi.</li>
				<li>Global. Bunday holda, MAC manzili qurilma chiqarilgandan so'ng tayinlanadi, ma'lum talablarga javob berishi va Internetda yagona bo'lishi kerak, bu xatosiz identifikatsiya qilish uchun zarurdir. Manzillarni tayinlash vakolatli tashkilot IEEE tomonidan qat'iy nazorat qilinadi.</li>
				</ul>
				<img src="/blog/mac2.png" alt="Mac manzili" />
				<a name="5"></a>
				<h3>Funksiyalar</h3>
				<p>
				Manzillarni bilish tarmoqqa kiritilgan qurilmalar haqida ma'lumotlarni to'plashni sezilarli darajada osonlashtiradi. Ularning har biri shaxsiy identifikator bo'lib, qaysi asbob-uskunalar faol ekanligini, boshqa uskunalar bilan qanday aloqada bo'lishini, qanday ma'lumot almashishini ko'rsatadi. MAC manzillari nafaqat qurilmalar o'rtasida ma'lumotlar almashinuvining to'g'riligini kafolatlaydi, noto'g'ri qabul qiluvchiga paketlarni yuborish xavfini yo'q qiladi, trafikni kuzatish va tarmoqni qayta sozlashda yordam beradi, balki boshqa ko'plab muammolarni hal qiladi:
				</p>
				<ul>
				<li>Tarmoq xavfsizligi darajasini oshirish. Masalan, simsiz Wi-Fi router uchun siz manzillarning "oq ro'yxatini" o'rnatishingiz mumkin. Agar smartfon yoki noutbuk bo‘lsin, qurilma identifikatori ushbu ro‘yxatda bo‘lmasa, ulanish muvaffaqiyatsiz bo‘ladi, urinish avtomatik ravishda bloklanadi.</li>
				<li>Tarmoqni tiklashni soddalashtirish. Dasturiy diagnostika ishlamay qolgan va ta'mirlanishi yoki almashtirilishi kerak bo'lgan uskunaning MAC manzilini tezda aniqlaydi. Ushbu algoritm imkon qadar tezroq ta'mirlashni amalga oshirishga yordam beradi, murakkab diagnostika operatsiyalariga ehtiyojni yo'q qiladi, barcha apparat komponentlarini ketma-ket sinovdan o'tkazadi.</li>
				<li>Filtrlarni sozlash. Ba'zi manzillarni tarmoqqa kirishni butunlay blokirovka qilish shart emas. Siz o'zingizni yanada yumshoq cheklovlar bilan cheklashingiz mumkin, masalan, tezlik yoki kirish vaqti. Bu aloqa kanallarining ortiqcha yuklanishi va boshqa salbiy hodisalarni bartaraf etadi.</li>
				</ul>
				<p>
				MAC manzili ham qimmatli tijorat vositasiga aylanishi mumkin. Masalan, umumiy Wi-Fi tarmog'iga ega kafeda u statistik hisobotlar uchun asos bo'lib, davomatni aniq qayd etish, eng band davrlarni aniqlash imkonini beradi. Bunday statistik ma'lumotlar reklama kampaniyalarining samaradorligini aniqlashda yordam beradi, agar bunday kampaniyalardan keyin noyob MAClar soni ko'paygan bo'lsa, ish to'g'ri bajarilgan bo'lsa.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				MAC address: what is it?
				</h3>
				<p>
				Data exchange between devices operating in a global or local network is possible by assigning a specific address to each of them. In specialized literature, you can often find a definition of IP addresses, however, you also need to highlight the MAC address. What are its features? What functions does it perform?
				</p>
				<a name="2"></a>
				<h3>General concept</h3>
				<p>
				Explanation of the abbreviation “MAC” – “Media Access Control”. It indicates the physical location of the network device, designated as a set of numeric and alphabetic characters. The most common writing format is “00-50-B6-5B-CA-6A”, however, other options are possible, with lowercase letters, which is typical for the CISCO company, separated by colons, used in operating systems on the Linux kernel. In the built-in memory of a computer or other device, such a number takes up 48 bits.
				</p>
				<p>
				The MAC address can be compared to a passport. If you imagine a network as an apartment building, then the passport is the best identifier for a specific subscriber. The names and even surnames of residents can be repeated, but the passport is unique, allowing you to unambiguously identify the recipient or sender.
				</p>
				<a name="3"></a>
				<h3>Parsing the structure</h3>
				<p>
				The numbers and letters in the MAC are not generated randomly, they depend on certain rules and requirements, due to which it is possible to encrypt important information in them. The structure can be divided into two parts:
				</p>
				<ul>
				<li>The first characters encode the manufacturer's code, which allows you to accurately determine who exactly made the device, be it a network card or a modem. For example, Google uses the combination “3C:5A:B4”, and the Chinese concern Huawei uses “00:9A:CD”.</li>
				<li>The following numbers and letters are an individual identifier. Random generation is allowed for this part; this is the algorithm used, for example, by Qualcomm and MediaTek.</li>
				</ul>
				<img src="/blog/mac1.png" alt="Mac address" />
				<p>
				To clarify the address of your device, study its structure, you can use both third-party applications and functions originally provided by the operating system. The first option is better suited for smartphones or tablets on Android, in Windows OS the necessary data can be obtained with the command “ipconfig”, and in Linux and Mac - “ifconfig”.
				</p>
				<a name="4"></a>
				<h3>Classification</h3>
				<p>
				The MAC address is represented by two main categories:
				</p>
				<ul>
				<li>Local. Used to identify devices in small private networks, focused on internal rather than global use. A typical example is a home wireless Wi-Fi network, where the central link is a router to which smartphones, tablets, desktop computers, and laptops are connected.</li>
				<li>Global. In this case, the MAC address is assigned upon release of the device, must meet certain requirements and be unique throughout the Internet, which is necessary for error-free identification. The assignment of addresses is strictly controlled by an authorized organization, IEEE.</li>
				</ul>
				<img src="/blog/mac2.png" alt="Mac address" />
				<a name="5"></a>
				<h3>Functions</h3>
				<p>
				Knowledge of addresses greatly simplifies the collection of data about devices included in the network. Each of them is a personal identifier showing which equipment is active, how it interacts with other equipment, how it exchanges information. MAC addresses not only guarantee the accuracy of data exchange between devices, eliminate the risk of sending packets to the wrong recipient, help track traffic and reconfigure the network, but also solve many other problems:
				</p>
				<ul>
				<li>Increasing the level of network security. For example, for a wireless Wi-Fi router, you can set a “white list” of addresses. If the identifier of the device, be it a smartphone or a laptop, is not on this list, the connection will fail, the attempt will be automatically blocked.</li>
				<li>Simplifying network recovery. Software diagnostics will quickly determine the MAC address of equipment that has failed and needs to be repaired or replaced. This algorithm will help to carry out repairs as quickly as possible, eliminate the need for complex diagnostic operations, sequential testing of all hardware components.</li>
				<li>Configuring filters. It is not necessary to completely block certain addresses from accessing the network. You can limit yourself to more lenient restrictions, for example, on speed or access time. This will eliminate overloading of communication channels and other negative phenomena.</li>
				</ul>
				<p>
				The MAC address can also become a valuable commercial tool. For example, in a cafe with a public Wi-Fi network, it becomes the basis for statistical reports, allows you to accurately record attendance, determine the busiest periods. Such statistics will help in determining the effectiveness of advertising campaigns, if the number of unique MACs after such campaigns has increased, the work was done correctly.
				</p>
			</>
		),
	},
	next: "/blog/chto-takoe-name-server-ns",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoe-mac-address",
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
