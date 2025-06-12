import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "DNS сервер: ключевой элемент работы интернета",
		uz: "DNS server: Internetning asosiy elementi",
		en: "DNS Server: A Key Element of the Internet",
	},
	title: {
		ru: "DNS сервер: назначение, принцип работы и важность",
		uz: "DNS server: maqsadi, ishlash printsipi va ahamiyati",
		en: "DNS server: purpose, principle of operation and importance",
	},
	desc: {
		ru: "Подробное объяснение, что такое DNS сервер, как он работает и почему так важен для функционирования интернета.",
		uz: "DNS-server nima ekanligi, u qanday ishlashi va nima uchun Internetning ishlashi uchun juda muhimligi haqida batafsil tushuntirish.",
		en: "A detailed explanation of what a DNS server is, how it works, and why it is so important for the functioning of the Internet.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "14",
	view: "120",
	img: "/blog/dns.png",
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
		{ title: {ru: "DNS-сервер: что это?", uz: "DNS server: bu nima?", en: "DNS server: what is it?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Umumiy tushuncha", en: "General concept", slug: "2" }},
		{ title: {ru: "Основные функции", uz: "Asosiy funktsiyalari", en: "Main functions", slug: "3" }},
		{ title: {ru: "Алгоритм работы", uz: "Ish algoritmi", en: "Algorithm of work", slug: "4" }},
		{ title: {ru: "Классификация", uz: "Tasniflash", en: "Classification", slug: "5" }},
		{ title: {ru: "География корневых DNS-серверов", uz: "Ildiz DNS serverlar geografiyasi", en: "Geography of root DNS servers", slug: "6" }},
		{ title: {ru: "Настройки и записи", uz: "Sozlamalar va yozuvlar", en: "Settings and entries", slug: "7" }},
		{ title: {ru: "К вопросу о безопасности", uz: "Xavfsizlik masalasida", en: "On the issue of security", slug: "8" }},
		{ title: {ru: "Подведение итогов", uz: "Xulosa qilish", en: "Summing up", slug: "9" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					DNS-сервер: что это?
				</h3>
				<p>
					Интернет – это сеть, состоящая из миллиардов устройств, смартфонов, серверов, ноутбуков, планшетных и стационарных компьютеров, маршрутизаторов, находящихся в постоянной коммуникации. Возможность точного, быстрого обмена данными обеспечивается наличием у каждого устройства персонального IP-адреса, сравнить который можно или с почтовым адресом, или с телефонным номером.
				</p>
				<img src="/blog/dns1.png" alt="DNS server" />
				<p>
					IP-адрес нужен не только устройствам, но и сайтам. Его классическое написание, несколько групп цифр, букв, разделенных точками, двоеточиями, дефисами, однако, сложно для запоминания, что неудобно для пользователей. Решить эту проблему призвана система доменных имен, DNS, закрепляющая за каждой цифровой комбинацией конкретное буквенное имя, более простое в написании и запоминании. Основа данной системы – DNS-серверы. В чем их особенности? Какие функции они выполняют?
				</p>
				<a name="2"></a>
				<h3>Общее понятие</h3>
				<p>
					Систему DNS можно сравнить с телефонным справочником. Несколько десятилетий назад приходилось открывать эту книгу, чтобы отыскать желаемый телефонный номер по имени абонента или названию организации. На серверах системы также хранятся нужные записи. Пользователю не нужно указывать в адресной строке конкретный номер, вполне хватит названия сайта, трансформации, необходимые для перехода, будут выполнены автоматически.
				</p>
				<p>
					Ради интереса пользователь может ввести в строку и точный IP-адрес, соответствующий сайту. В этом случае он также без проблем откроется, но вот держать в памяти десятки цифровых комбинаций – неудобно, а зачастую – невозможно. С названиями все куда проще и понятнее.
				</p>
				<img src="/blog/dns2.png" alt="DNS server" />
				<p>
					DNS-серверы – важнейшие звенья системы доменных имен, использующиеся для хранения данных об адресах сайтов, количество которых исчисляется сотнями миллионов и миллиардами. Помимо хранения, они выполняют и некоторые другие задачи, требующие более подробного разбора.
				</p>
				<p>
					Для системы DNS характерно следующее:
				</p>
				<ul>
					<li>Распределение управления и хранения данных. Каждая часть обслуживается определенным предприятием, сервером.</li>
					<li>Кеширование данных. Временное хранение информации помогает уменьшить нагрузку на систему.</li>
					<li>Резервирование. Доступ к одним и тем же данным имеют сразу несколько DNS-серверов, что исключает потерю, невозможность взаимодействия при выходе из строя одного из них, обеспечивает стабильное функционирование всей системы.</li>
				</ul>
				<a name="3"></a>
				<h3>Основные функции</h3>
				<p>
					DNS-серверы не только хранят, но и кешируют информацию. Алгоритм кеширования повышает общую скорость работы DNS, а также способствует равномерному распределению нагрузки. Емкость серверов не безгранична, а потому хранение всех данных в одном месте – задача невыполнимая. Когда пользователь пытается открыть определенный сайт, то сначала система проведет локальную проверку, изучит файл “hosts”, находящийся на компьютере, попытается найти там нужные данные. При отрицательном результате запрос передается на более высокий уровень, местный DNS-сервер, обслуживаемый провайдером.
				</p>
				<img src="/blog/dns3.png" alt="DNS server" />
				<p>
					Локальный DNS-сервер, как правило, обменивается данными с другими местными ресурсами, где расположен сайт. После обнаружения искомых сведений – в браузере пользователя открываются нужные ему страницы. Найденные данные, при этом сохраняются на серверах местного уровня, что исключает необходимость их повторного поиска и загрузки при последующих попытках открытия. Именно этот процесс и называется кешированием.
				</p>
				<a name="4"></a>
				<h3>Алгоритм работы</h3>
				<p>
					Схему функционирования системы доменных имен можно представить следующим образом:
				</p>
				<ul>
					<li>Получение пользовательского запроса браузером. Данный запрос отправляется сетевому серверу, задача которого – найти IP-адрес, соответствующий доменному имени. При обнаружении ответа, происходит немедленное открытие страницы, в противном случае – начинается поиск на более высоких или корневом уровне.</li>
					<li>Перенаправление корневым сервером запроса на первый уровень, второй и далее, до момента обнаружения совпадений доменного имени и IP-адреса.</li>
					<li>Отображение искомой страницы в браузере.</li>
				</ul>
				<img src="/blog/dns4.png" alt="DNS server" />
				<a name="5"></a>
				<h3>Классификация</h3>
				<p>
					Работа системы DNS построена на серверах различных категорий. Если данные об искомом сайте не были обнаружены в файле “hosts”, то в дело вступает DNS-резолвер, ресурс локального уровня. Как правило, он является даже не полноценным масштабным сервером, а компьютером на стороне интернет-провайдера. Резолвер обрабатывает название сайта, нужного пользователю, обращается к собственной базе данных. При наличии совпадения – отправляется ответ, страница открывается, поиск прекращается. В том случае, если резолвер оказался бессильным, в дело вступают следующие DNS-серверы:
				</p>
				<ul>
					<li>Корневые. В англоязычной литературе – root. В мире таковых всего 13, однако, они очень масштабны, отличаются огромной производительностью, справляются с обработкой миллионов запросов в секунду. Корневой сервер DNS не раскрывает нужный IP-адрес при обращении, его задача – определение маршрута для дальнейшей передачи запроса, позволяющего получить требуемые данные.</li>
					<li>Верхнего уровня. Они же TLD. От корневых DNS-серверов поступает информация, к какому TLD нужно обратиться для уточнения адресов доменных имен. Каждому серверу данного уровня присвоена своя “зона ответственности”, соответствующая домену. Интересно, что и TLD не дает сведений о конкретном IP, он также выполняет перенаправление к серверам, выполняющим авторитативные функции.</li>
					<li>Авторитативные. Именно на этих серверах хранится информация о соответствии IP-адресов определенным доменным именам. Соответственно, они и предоставляют резолверу искомые данные, помогают открыть нужную страницу на пользовательском компьютере.</li>
				</ul>
				<p>
					Структура DNS выглядит достаточно громоздкой, включающей множество серверов и устройств, однако, ее работа, несмотря на кажущуюся сложность, максимально оптимизирована. Взаимодействие между аппаратными компонентами занимает несколько тысячных долей секунды.
				</p>
				<a name="6"></a>
				<h3>География корневых DNS-серверов</h3>
				<p>
					Количество корневых DNS-серверов – 13, однако, для обеспечения стабильности системы доменных имен, ее безопасности, устойчивости к сбоям, они имеют множество копий, с учетом которых численность составляет 123. География их распределения выглядит следующим образом:
				</p>
				<ul>
					<li>40 – США и Канада;</li>
					<li>35 – европейские страны;</li>
					<li>6 – южноамериканские страны;</li>
					<li>3 – африканские страны;</li>
					<li>39 – остальной мир.</li>
				</ul>
				<p>
					Подобное размещение не случайно, оно соответствует количеству активных интернет-пользователей и, соответственно, объемам запросов. 5 копий корневых DNS-серверов функционируют и в РФ, находятся они в крупнейших городах, Москве, Петербурге, Новосибирске, Екатеринбурге и Ростове-на-Дону.
				</p>
				<a name="7"></a>
				<h3>Настройки и записи</h3>
				<p>
					Чтобы обеспечить корректную работу DNS-сервера, его нужно правильно настроить, внести необходимые записи. Необходимость вызвана тем, одно доменное имя зачастую связано с различными адресами, например, основным сайтом, его почтовым сервером и многочисленными поддоменами.
				</p>
				<p>
					Данные, в которых закреплено соответствие доменного имени определенному адресу, хранятся на сервере, в специальном файле. Этот файл следует редактировать, добавлять в него записи по мере необходимости. Список основных записей выглядит следующим образом:
				</p>
				<ul>
					<li>A – IP-адрес сетевого ресурса, соответствующий определенному доменному имени.</li>
					<li>MX – IP-адрес, привязанный к почтовому серверу.</li>
					<li>CNAME – нужна для того, чтобы обозначить связь между идентичными доменными именами, в большинстве случаев – для привязки поддоменов.</li>
					<li>NS – указывает на расположение DNS-серверов, хранящих прочие ресурсные записи.</li>
					<li>TXT – содержит любые необходимые текстовые данные, имеющие отношение к домену.</li>
					<li>SPF – содержит сведения о серверах, которые могут заниматься почтовыми рассылками от имени обозначенного домена.</li>
					<li>SOA – запись с базовыми данными о сервере.</li>
				</ul>
				<a name="8"></a>
				<h3>К вопросу о безопасности</h3>
				<p>
					Безопасность корневых серверов – крайне значимый момент, от их работоспособности зависит стабильность всей системы доменных имен. Одна из наиболее масштабных атак зарегистрирована осенью 2002 года. Хакерам удалось заблокировать работу 10 из 13 корневых серверов. Встречается такая активность и сегодня, что вызывает сбои во всемирной паутине, не позволяет зайти на некоторые сайты, в первую очередь – социальные сети.
				</p>
				<img src="/blog/dns5.png" alt="DNS server" />
				<p>
					Технологии защиты, впрочем, с 2002 года шагнули далеко вперед, так что удается обходиться без серьезных последствий. Наибольшее распространение получили следующие методики:
				</p>
				<ul>
					<li>uRPF. Она строится на проведении проверки, в ходе которой определяется, может ли устройство принять пакет данных от конкретного адресата. При отрицательном результате – передача блокируется. Метод достаточно эффективен, однако, не дает абсолютной защиты от фальшивого трафика.</li>
					<li>IP Source Guard. Развитие предыдущей методики. Алгоритмы отслеживают трафик, определяют IP-адреса сетевого оборудования, формируют таблицы передачи информации. В том случае, если проверенный ранее источник вдруг начал пользоваться другим адресом, пакеты отклоняются.</li>
					<li>DNS-Validator. Специальное приложение, контролирующее передачу данных в рамках системы DNS, сопоставляющее запросы и ответы. При обнаружении расхождений – обмен информацией блокируется, либо пользователь получает уведомление-предупреждение, в зависимости от настроек.</li>
				</ul>
				<a name="9"></a>
				<h3>Подведение итогов</h3>
				<p>
					Система доменных имен DNS – главный проводник по глобальной сети, без которого браузеры и пользователи просто не смогли бы добираться до нужных сайтов и страниц. DNS-серверы – важнейшие составляющие этой системы, на которых хранятся данные, необходимые для корректной работы. 
				</p>
				<p>
					Появление DNS датировано еще 80-ми годами минувшего столетия, однако, до сих пор она продолжает активно развиваться, модернизироваться, что позволяет соответствовать требованиям времени, сетевой безопасности, корректно обслуживать стабильно увеличивающееся число пользователей.
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
				DNS server: bu nima?
				</h3>
				<p>
				Internet - bu doimiy aloqada bo'lgan milliardlab qurilmalar, smartfonlar, serverlar, noutbuklar, planshetlar va ish stoli kompyuterlari, routerlardan tashkil topgan tarmoq. Ma'lumotni aniq va tez almashish qobiliyati har bir qurilma uchun pochta manzili yoki telefon raqami bilan taqqoslanadigan shaxsiy IP-manzilning mavjudligi bilan ta'minlanadi.
				</p>
				<img src="/blog/dns1.png" alt="DNS server" />
				<p>
				IP-manzil nafaqat qurilmalar uchun, balki veb-saytlar uchun ham kerak. Uning klassik imlosi, bir nechta raqamlar guruhlari, nuqta, ikki nuqta, defis bilan ajratilgan harflarni eslab qolish qiyin, bu foydalanuvchilar uchun noqulay. Domen nomlari tizimi DNS ushbu muammoni hal qilish uchun mo'ljallangan bo'lib, har bir raqamli birikmaga yozish va eslash osonroq bo'lgan ma'lum harf nomini belgilaydi. Ushbu tizimning asosini DNS serverlari tashkil etadi. Ularning xususiyatlari qanday? Ular qanday funktsiyalarni bajaradilar?
				</p>
				<a name="2"></a>
				<h3>Umumiy tushuncha</h3>
				<p>
				DNS tizimini telefon ma'lumotnomasi bilan solishtirish mumkin. Bir necha o'n yillar oldin siz obunachi nomi yoki tashkilot nomi bo'yicha kerakli telefon raqamini topish uchun ushbu kitobni ochishingiz kerak edi. Kerakli yozuvlar ham tizim serverlarida saqlanadi. Foydalanuvchiga manzil satrida ma'lum bir raqamni ko'rsatishga hojat yo'q, sayt nomi etarli, o'tish uchun zarur bo'lgan transformatsiyalar avtomatik ravishda amalga oshiriladi.
				</p>
				<p>
				O'yin-kulgi uchun foydalanuvchi qatorga saytga mos keladigan aniq IP-manzilni kiritishi mumkin. Bunday holda, u ham muammosiz ochiladi, lekin o'nlab raqamli kombinatsiyalarni xotirada saqlash noqulay va ko'pincha imkonsizdir. Ismlar bilan hamma narsa ancha sodda va tushunarli. </p>
				<img src="/blog/dns2.png" alt="DNS server" />
				<p>
				DNS-serverlar domen nomlari tizimidagi eng muhim havolalar bo'lib, veb-sayt manzillari haqidagi ma'lumotlarni saqlash uchun foydalaniladi, ularning soni yuzlab million va milliardlarni tashkil qiladi. Saqlashdan tashqari, ular batafsilroq tahlil qilishni talab qiladigan boshqa vazifalarni ham bajaradilar.
				</p>
				<p>
				DNS tizimi quyidagilar bilan tavsiflanadi:
				</p>
				<ul>
				<li>Ma'lumotlarni boshqarish va saqlashni taqsimlash. Har bir qismga ma'lum bir korxona, server xizmat ko'rsatadi.</li>
				<li>Ma'lumotlarni keshlash. Axborotni vaqtincha saqlash tizimdagi yukni kamaytirishga yordam beradi.</li>
				<li>Zaxira. Bir nechta DNS-serverlar bir xil ma'lumotlarga kirish huquqiga ega, bu esa yo'qotishlarni, ulardan biri ishlamay qolganda o'zaro ta'sir o'tkaza olmaslikni bartaraf qiladi va butun tizimning barqaror ishlashini ta'minlaydi.</li>
				</ul>
				<a name="3"></a>
				<h3>Asosiy funksiyalar</h3>
				<p>
				DNS-serverlar nafaqat ma'lumotlarni saqlaydi, balki keshlaydi. Keshlash algoritmi DNS ning umumiy tezligini oshiradi va yukni teng taqsimlashga yordam beradi. Serverlarning sig'imi cheksiz emas va shuning uchun barcha ma'lumotlarni bir joyda saqlash imkonsiz vazifadir. Foydalanuvchi ma'lum bir saytni ochishga harakat qilganda, tizim birinchi navbatda mahalliy tekshiruvni o'tkazadi, kompyuterda joylashgan "xostlar" faylini tekshiradi va u erda kerakli ma'lumotlarni topishga harakat qiladi. Natija salbiy bo'lsa, so'rov yuqori darajaga o'tkaziladi, provayder tomonidan xizmat ko'rsatadigan mahalliy DNS server.
				</p>
				<img src="/blog/dns3.png" alt="DNS server" />
				<p>
				Mahalliy DNS server odatda sayt joylashgan boshqa mahalliy resurslar bilan ma'lumotlarni almashadi. Kerakli ma'lumotlarni topgandan so'ng, foydalanuvchi brauzeri kerakli sahifalarni ochadi. Topilgan ma'lumotlar mahalliy serverlarda saqlanadi, bu esa uni ochishga keyingi urinishlarda uni qidirish va qayta yuklab olish zaruratini yo'q qiladi. Ushbu jarayon keshlash deb ataladi.
				</p>
				<a name="4"></a>
				<h3>Ishlash algoritmi</h3>
				<p>
				Domen nomlari tizimining ishlash sxemasini quyidagicha ko'rsatish mumkin:
				</p>
				<ul>
				<li>Brauzer tomonidan foydalanuvchi so'rovini qabul qilish. Ushbu so'rov tarmoq serveriga yuboriladi, uning vazifasi domen nomiga mos keladigan IP-manzilni topishdir. Agar javob topilsa, sahifa darhol ochiladi, aks holda qidiruv yuqoriroq yoki ildiz darajasida boshlanadi.</li>
				<li>Ildiz server so'rovni birinchi darajaga, ikkinchi darajaga va undan keyingi darajaga yo'naltiradi, to domen nomi va IP manzili o'rtasida moslik topilmaguncha.</li>
				<li>Qidirilgan sahifani brauzerda ko'rsatish.</li>
				</ul>
				<img src="/blog/dns4.png" alt="DNS server" />
				<a name="5"></a>
				<h3>Tasniflash</h3>
				<p>
				DNS tizimi turli toifadagi serverlarga asoslangan. Agar qidirilayotgan saytdagi ma'lumotlar "xostlar" faylida topilmasa, u holda mahalliy darajadagi resurs bo'lgan DNS-resolver ishga tushadi. Qoida tariqasida, bu hatto to'liq huquqli keng ko'lamli server emas, balki Internet-provayder tomonidagi kompyuter. Resolver foydalanuvchiga kerakli sayt nomini qayta ishlaydi va o'zining ma'lumotlar bazasiga kiradi. Agar mos keladigan bo'lsa, javob yuboriladi, sahifa ochiladi va qidiruv to'xtaydi. Agar hal qiluvchi kuchsiz bo'lsa, quyidagi DNS serverlari ishga tushadi:
				</p>
				<ul>
				<li>Ildiz. Ingliz adabiyotida - ildiz. Dunyoda ulardan atigi 13 tasi bor, ammo ular juda keng ko'lamli, juda katta ishlashga ega va soniyada millionlab so'rovlarni bajara oladi. Ildiz DNS server unga kirishda kerakli IP-manzilni oshkor qilmaydi; uning vazifasi so'rovni keyingi uzatish marshrutini aniqlashdan iborat bo'lib, bu sizga kerakli ma'lumotlarni olish imkonini beradi.</li>
				<li>Yuqori daraja. Ular ham TLDlardir. Ildiz DNS serverlari domen nomlarining manzillarini aniqlashtirish uchun qaysi TLD bilan bog'lanish kerakligi haqida ma'lumot beradi. Ushbu darajadagi har bir serverga domenga mos keladigan o'z "mas'uliyat sohasi" tayinlangan. Qizig'i shundaki, TLD ma'lum bir IP haqida ma'lumot bermaydi; u vakolatli funksiyalarni bajaradigan serverlarga ham yoʻnaltiradi.</li>
				<li>Vakolatli. Aynan shu serverlarda IP-manzillarning ma'lum domen nomlariga mos kelishi haqidagi ma'lumotlar saqlanadi. Shunga ko'ra, ular hal qiluvchini kerakli ma'lumotlar bilan ta'minlaydi, foydalanuvchi kompyuterida kerakli sahifani ochishga yordam beradi.</li>
				</ul>
				<p>
				DNS tuzilishi juda og'ir ko'rinadi, shu jumladan ko'plab serverlar va qurilmalar, ammo uning ishlashi, ko'rinadigan murakkabligiga qaramay, iloji boricha optimallashtirilgan. Uskuna komponentlari orasidagi o'zaro ta'sir soniyaning bir necha mingdan bir qismini oladi.
				</p>
				<a name="6"></a>
				<h3>Ildiz DNS-serverlar geografiyasi</h3>
				<p>
				Ildiz DNS-serverlar soni 13 ta, ammo domen nomi tizimining barqarorligini, uning xavfsizligini va nosozliklarga chidamliligini ta'minlash uchun ularning soni 123 tani hisobga olgan holda ko'plab nusxalarga ega. Ularning tarqalish geografiyasi quyidagicha:
				</p>
				<ul>
				<li>40 - AQSh va Kanada;</li>
				<li>35 - Yevropa davlatlari;</li>
				<li>6 - Janubiy Amerika mamlakatlari;</li>
				<li>3 - Afrika mamlakatlari;</li>
				<li>39 - dunyoning qolgan qismi.</li>
				</ul>
				<p>
				Ushbu joylashtirish tasodifiy emas, u faol Internet foydalanuvchilari soniga va shunga mos ravishda so'rovlar hajmiga mos keladi. Rossiya Federatsiyasida ildiz DNS serverlarining 5 nusxasi ham ishlaydi, ular eng yirik shaharlar, Moskva, Sankt-Peterburg, Novosibirsk, Yekaterinburg va Rostov-na-Donuda joylashgan.
				</p>
				<a name="7"></a>
				<h3>Sozlamalar va yozuvlar</h3>
				<p>
				DNS serverining to'g'ri ishlashini ta'minlash uchun uni to'g'ri sozlash va kerakli yozuvlarni kiritish kerak. Bu zarur, chunki bitta domen nomi ko'pincha turli manzillar bilan bog'lanadi, masalan, asosiy sayt, uning pochta serveri va ko'plab subdomenlar.
				</p>
				<p>
				Domen nomini ma'lum bir manzilga tayinlaydigan ma'lumotlar serverda, maxsus faylda saqlanadi. Ushbu faylni tahrirlash kerak va kerak bo'lganda unga yozuvlar qo'shilishi kerak. Asosiy yozuvlar ro'yxati quyidagicha ko'rinadi:
				</p>
				<ul>
				<li>A – muayyan domen nomiga mos keladigan tarmoq resursining IP-manzili.</li>
				<li>MX – pochta serveri bilan bog‘langan IP manzil.</li>
				<li>CNAME – bir xil domen nomlari oʻrtasidagi munosabatni koʻrsatish uchun, koʻp hollarda subdomenlarni bogʻlash uchun kerak.</li>
				<li>NS – boshqa manba yozuvlarini saqlaydigan DNS-serverlarning joylashuvini bildiradi.</li>
				<li>TXT – domenga tegishli har qanday kerakli matn maʼlumotlarini oʻz ichiga oladi.</li>
				<li>SPF – belgilangan domen nomidan pochta jo‘natmalarini boshqara oladigan serverlar haqidagi ma’lumotlarni o‘z ichiga oladi.</li>
				<li>SOA – server haqidagi asosiy ma'lumotlarga ega yozuv.</li>
				</ul>
				<a name="8"></a>
				<h3>Xavfsizlik masalasida</h3>
				<p>
				Ildiz serverlarining xavfsizligi juda muhim nuqta, butun domen nomi tizimining barqarorligi ularning ishlashiga bog'liq. Eng yirik hujumlardan biri 2002 yilning kuzida qayd etilgan. Xakerlar 13 ta root serverdan 10 tasining ishini bloklashga muvaffaq bo'lishgan. Butunjahon Internet tarmog'ida nosozliklar keltirib chiqaradigan, ba'zi saytlarga, birinchi navbatda, ijtimoiy tarmoqlarga kirishga ruxsat bermaydigan bunday faoliyat bugungi kunda ham uchraydi.
				</p>
				<img src="/blog/dns5.png" alt="DNS server" />
				<p>
				Biroq, xavfsizlik texnologiyalari 2002 yildan beri katta yutuqlarga erishdi, shuning uchun jiddiy oqibatlarsiz qilish mumkin. Quyidagi usullar eng ko'p qo'llaniladi:
				</p>
				<ul>
				<li>uRPF. U qurilma ma'lum bir qabul qiluvchidan ma'lumotlar paketini qabul qila oladimi yoki yo'qligini aniqlash uchun tekshirishga asoslanadi. Agar natija salbiy bo'lsa, uzatish bloklanadi. Usul ancha samarali, ammo soxta trafikdan mutlaq himoyani ta'minlamaydi.</li>
				<li>IP manba himoyasi. Oldingi usulni ishlab chiqish. Algoritmlar trafikni kuzatib boradi, tarmoq uskunasining IP-manzillarini aniqlaydi va axborot uzatish jadvallarini shakllantiradi. Agar ilgari tasdiqlangan manba birdan boshqa manzildan foydalana boshlasa, paketlar rad etiladi.</li>
				<li>DNS-validator. DNS tizimida ma'lumotlar uzatishni boshqaradigan, so'rovlar va javoblarni taqqoslaydigan maxsus dastur. Agar nomuvofiqliklar aniqlansa, axborot almashinuvi bloklanadi yoki sozlamalarga qarab foydalanuvchi ogohlantirish xabarini oladi.</li>
				</ul>
				<a name="9"></a>
				<h3>Xulosa qilish</h3>
				<p>
				DNS domen nomlari tizimi global tarmoq bo'yicha asosiy qo'llanma bo'lib, ularsiz brauzerlar va foydalanuvchilar kerakli saytlar va sahifalarga kira olmaydilar. DNS serverlari ushbu tizimning eng muhim komponentlari bo'lib, bu erda to'g'ri ishlash uchun zarur bo'lgan ma'lumotlar saqlanadi.
				</p>
				<p>
				DNS-ning paydo bo'lishi o'tgan asrning 80-yillariga to'g'ri keladi, ammo u faol rivojlanish va modernizatsiya qilishda davom etmoqda, bu esa unga zamon talablariga, tarmoq xavfsizligiga va doimiy ravishda o'sib borayotgan foydalanuvchilar soniga to'g'ri xizmat ko'rsatishga imkon beradi.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				DNS server: what is it?
				</h3>
				<p>
				The Internet is a network consisting of billions of devices, smartphones, servers, laptops, tablets and desktop computers, routers that are in constant communication. The ability to accurately and quickly exchange data is ensured by the presence of a personal IP address for each device, which can be compared either with a postal address or a phone number.
				</p>
				<img src="/blog/dns1.png" alt="DNS server" />
				<p>
				An IP address is needed not only for devices, but also for websites. Its classic spelling, several groups of numbers, letters separated by dots, colons, hyphens, however, is difficult to remember, which is inconvenient for users. The domain name system, DNS, is designed to solve this problem, assigning a specific letter name to each digital combination, which is easier to write and remember. The basis of this system is DNS servers. What are their features? What functions do they perform?
				</p>
				<a name="2"></a>
				<h3>General concept</h3>
				<p>
				The DNS system can be compared to a telephone directory. Several decades ago, you had to open this book to find the desired phone number by the subscriber's name or the name of the organization. The necessary records are also stored on the system's servers. The user does not need to specify a specific number in the address bar, the name of the site is enough, the transformations necessary for the transition will be performed automatically.
				</p>
				<p>
				For fun, the user can enter the exact IP address corresponding to the site in the line. In this case, it will also open without problems, but keeping dozens of digital combinations in memory is inconvenient, and often impossible. With names, everything is much simpler and clearer. </p>
				<img src="/blog/dns2.png" alt="DNS server" />
				<p>
				DNS servers are the most important links in the domain name system, used to store data about website addresses, the number of which is in the hundreds of millions and billions. In addition to storage, they also perform some other tasks that require a more detailed analysis.
				</p>
				<p>
				The DNS system is characterized by the following:
				</p>
				<ul>
				<li>Distribution of data management and storage. Each part is serviced by a specific enterprise, server.</li>
				<li>Data caching. Temporary storage of information helps reduce the load on the system.</li>
				<li>Backup. Several DNS servers have access to the same data, which eliminates loss, the inability to interact if one of them fails, and ensures stable operation of the entire system.</li>
				</ul>
				<a name="3"></a>
				<h3>Main functions</h3>
				<p>
				DNS servers not only store, but also cache information. The caching algorithm increases the overall speed of DNS and helps distribute the load evenly. The capacity of servers is not unlimited, and therefore storing all data in one place is an impossible task. When a user tries to open a specific site, the system will first conduct a local check, examine the “hosts” file located on the computer, and try to find the necessary data there. If the result is negative, the request is transferred to a higher level, the local DNS server serviced by the provider.
				</p>
				<img src="/blog/dns3.png" alt="DNS server" />
				<p>
				A local DNS server usually exchanges data with other local resources where the site is located. After finding the required information, the user's browser opens the required pages. The found data is stored on local servers, which eliminates the need to search for and download it again during subsequent attempts to open it. This process is called caching.
				</p>
				<a name="4"></a>
				<h3>Working algorithm</h3>
				<p>
				The scheme of functioning of the domain name system can be presented as follows:
				</p>
				<ul>
				<li>Receiving a user request by the browser. This request is sent to the network server, whose task is to find the IP address corresponding to the domain name. If an answer is found, the page is immediately opened, otherwise the search begins at higher or root levels.</li>
				<li>The root server redirects the request to the first level, the second and further, until a match is found between the domain name and IP address.</li>
				<li>Displaying the searched page in the browser.</li>
				</ul>
				<img src="/blog/dns4.png" alt="DNS server" />
				<a name="5"></a>
				<h3>Classification</h3>
				<p>
				The DNS system is based on servers of various categories. If the data on the site being searched for is not found in the “hosts” file, then the DNS resolver, a local-level resource, comes into play. As a rule, it is not even a full-fledged large-scale server, but a computer on the Internet provider’s side. The resolver processes the name of the site needed by the user and accesses its own database. If there is a match, a response is sent, the page opens, and the search stops. If the resolver is powerless, the following DNS servers come into play:
				</p>
				<ul>
				<li>Root. In English literature - root. There are only 13 of them in the world, however, they are very large-scale, have enormous performance, and can handle millions of requests per second. The root DNS server does not disclose the required IP address when accessing it; its task is to determine the route for further transmission of the request, which allows you to obtain the required data.</li>
				<li>Top level. They are also TLDs. The root DNS servers provide information about which TLD to contact to clarify the addresses of domain names. Each server of this level is assigned its own “area of ​​responsibility” corresponding to the domain. It is interesting that the TLD does not provide information about a specific IP; it also redirects to servers that perform authoritative functions.</li>
				<li>Authoritative. It is on these servers that information about the correspondence of IP addresses to certain domain names is stored. Accordingly, they provide the resolver with the required data, help open the desired page on the user's computer.</li>
				</ul>
				<p>
				The DNS structure looks quite cumbersome, including many servers and devices, however, its operation, despite the apparent complexity, is optimized as much as possible. Interaction between hardware components takes several thousandths of a second.
				</p>
				<a name="6"></a>
				<h3>Geography of root DNS servers</h3>
				<p>
				The number of root DNS servers is 13, however, to ensure the stability of the domain name system, its security, and resilience to failures, they have many copies, taking into account which the number is 123. The geography of their distribution is as follows:
				</p>
				<ul>
				<li>40 - USA and Canada;</li>
				<li>35 - European countries;</li>
				<li>6 - South American countries;</li>
				<li>3 - African countries;</li>
				<li>39 - the rest of the world.</li>
				</ul>
				<p>
				This placement is not accidental, it corresponds to the number of active Internet users and, accordingly, the volume of requests. 5 copies of root DNS servers also function in the Russian Federation, they are located in the largest cities, Moscow, St. Petersburg, Novosibirsk, Yekaterinburg and Rostov-on-Don.
				</p>
				<a name="7"></a>
				<h3>Settings and records</h3>
				<p>
				To ensure the correct operation of the DNS server, it must be configured correctly, and the necessary records must be entered. This is necessary because one domain name is often associated with different addresses, for example, the main site, its mail server and numerous subdomains.
				</p>
				<p>
				The data that assigns a domain name to a specific address is stored on the server, in a special file. This file should be edited, and records should be added to it as needed. The list of main records looks like this:
				</p>
				<ul>
				<li>A – IP address of the network resource corresponding to a specific domain name.</li>
				<li>MX – IP address associated with the mail server.</li>
				<li>CNAME – is needed to indicate the relationship between identical domain names, in most cases – to associate subdomains.</li>
				<li>NS – indicates the location of DNS servers storing other resource records.</li>
				<li>TXT – contains any necessary text data related to the domain.</li>
				<li>SPF – contains information about servers that can handle mailings on behalf of the designated domain.</li>
				<li>SOA – a record with basic data about the server.</li>
				</ul>
				<a name="8"></a>
				<h3>On the issue of security</h3>
				<p>
				The security of root servers is an extremely important point, the stability of the entire domain name system depends on their performance. One of the largest attacks was registered in the fall of 2002. Hackers managed to block the work of 10 out of 13 root servers. Such activity is still encountered today, which causes failures in the World Wide Web, does not allow access to some sites, primarily social networks.
				</p>
				<img src="/blog/dns5.png" alt="DNS server" />
				<p>
				However, security technologies have made great strides since 2002, so it is possible to do without serious consequences. The following methods are most widely used:
				</p>
				<ul>
				<li>uRPF. It is based on a check to determine whether the device can receive a data packet from a specific recipient. If the result is negative, the transmission is blocked. The method is quite effective, but does not provide absolute protection against fake traffic.</li>
				<li>IP Source Guard. Development of the previous method. Algorithms monitor traffic, determine IP addresses of network equipment, and form information transfer tables. If a previously verified source suddenly starts using a different address, the packets are rejected.</li>
				<li>DNS-Validator. A special application that controls data transfer within the DNS system, comparing requests and responses. If discrepancies are detected, the exchange of information is blocked, or the user receives a warning notification, depending on the settings.</li>
				</ul>
				<a name="9"></a>
				<h3>Summing Up</h3>
				<p>
				The DNS domain name system is the main guide through the global network, without which browsers and users would simply not be able to get to the necessary sites and pages. DNS servers are the most important components of this system, where the data necessary for correct operation is stored.
				</p>
				<p>
				The appearance of DNS dates back to the 80s of the last century, however, it continues to actively develop and modernize, which allows it to meet the requirements of the time, network security, and correctly serve a steadily increasing number of users.
				</p>
			</>
		),
	},
	next: "/blog/chto-takoe-imya-hosta",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoe-dns-server",
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
