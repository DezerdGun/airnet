import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Что такое CSR и как его создать?",
		uz: "CSR nima va uni qanday yaratish kerak?",
		en: "What is a CSR and how to create one?",
	},
	title: {
		ru: "Что такое CSR и как его создать?",
		uz: "CSR nima va uni qanday yaratish kerak?",
		en: "What is a CSR and how to create one?",
	},
	desc: {
		ru: "Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов, и как его правильно создать. Пошаговая инструкция и практические рекомендации.",
		uz: "CSR (Sertifikat imzolash so'rovi) nima ekanligini, SSL sertifikatlarini yaratishda u nima uchun ishlatilishini va uni qanday qilib to'g'ri yaratishni bilib oling. Bosqichma-bosqich ko'rsatmalar va amaliy tavsiyalar.",
		en: "Find out what a CSR (Certificate Signing Request) is, what it is used for when creating SSL certificates, and how to create one correctly. Step-by-step instructions and practical recommendations.",
	},
	date: "14.03.2025",
	updated: "14.03.2025",
	read: "10",
	view: "14",
	img: "/blog/csr.jpg",
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
		{ title: {ru: "Что такое CSR и как его создать?", uz: "CSR nima va uni qanday yaratish kerak?", en: "What is a CSR and how to create one?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Umumiy tushuncha", en: "General concept", slug: "2" }},
		{ title: {ru: "Структура CSR", uz: "CSR tuzilishi", en: "CSR structure", slug: "3" }},
		{ title: {ru: "Как подписать сертификат?", uz: "Sertifikatni qanday imzolash kerak?", en: "How to sign a certificate?", slug: "4" }},
		{ title: {ru: "Создание CSL-запроса: способы и инструкции", uz: "CSL so'rovini yaratish: usullar va ko'rsatmalar", en: "Creating a CSL Request: Methods and Instructions", slug: "5" }},
		{ title: {ru: "Создание приватного ключа", uz: "Shaxsiy kalitni yaratish", en: "Generate a private key", slug: "6" }},
		{ title: {ru: "Подготовка запроса", uz: "So'rovni tayyorlash", en: "Preparing a request", slug: "7" }},
		{ title: {ru: "Указание информации", uz: "Ma'lumot berish", en: "Providing information", slug: "8" }},
		{ title: {ru: "Что нужно учитывать?", uz: "Nimani hisobga olish kerak?", en: "What should be taken into account?", slug: "9" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Что такое CSR и как его создать?
				</h3>
				<p>
					Безопасность – один из важнейших принципов цифрового мира. Следование ему обеспечивает сохранность данных, исключает их перехват третьими лицами. Вся информация должна передаваться исключительно через защищенные соединения, в зашифрованном виде, для чего используются SSL-сертификаты. Перед их получением, однако, нужно создать специальный запрос, CSR. Что скрывается за этой аббревиатурой? Как правильно сгенерировать запрос?
				</p>
				<img src="/blog/csr1.png" alt="Open SSL" />
				<a name="2"></a>
				<h3>Общее понятие</h3>
				<p>
					Аббревиатура CSR расшифровывается как “certificate signing request”, то есть запрос на оформление цифровой подписи для сертификата. В нем должны содержаться сведения о доменном имени, предприятии, планирующем использовать сертификат.
				</p>
				<p>
					Протокол SSL гарантирует защищенность сеанса связи между клиентом и сервером, все данные зашифрованы, а потому даже их вероятный перехват окажется бессмысленным. Все ценные сведения, например, реквизиты банковских карт, пароли для входа в учетные записи, не будут доступны злоумышленникам.
				</p>
				<p>
					Отсутствие SSL-сертификата резко снижает уровень доверия к сайту, более того, многие браузеры автоматически блокируют переход на них, предупреждая пользователя о небезопасности, незащищенности соединения, риске потери конфиденциальной информации.
				</p>
				<a name="3"></a>
				<h3>Структура CSR</h3>
				<p>
					CSR состоит из следующих элементов:
				</p>
				<ul>
					<li>Приватный ключ. Особый ключ, созданный вместе с CSR, основная функция которого – шифровка передаваемой информации.</li>
					<li>Публичный ключ. Формируется на основе предыдущего, интегрируется в запрос.</li>
					<li>Данные о предприятии. Имя физического лица, название организации-пользователя, региональная, государственная принадлежность.</li>
					<li>Доменное имя.</li>
				</ul>
				<img src="/blog/csr2.png" alt="SSL" />
				<a name="4"></a>
				<h3>Как подписать сертификат?</h3>
				<p>
					Чтобы поставить подпись под SSL-сертификатом, необходимо не просто создать запрос CSR, но отправить его на рассмотрение в сертификационный центр. Задача центра – провести проверку указанных данных, убедиться в их правильности и выпустить SSL. В первую очередь организация проводит проверку следующего:
				</p>
				<ul>
					<li>Легитимность домена. Для этого анализируются DNS-записи или применяются иные методы.</li>
					<li>Документы, предоставленные компанией или физическим лицом. Это делается не всегда, а только при оформлении высокоуровневых EV SSL.</li>
					<li>Деятельность организации. Актуально для OV SSL.</li>
				</ul>
				<a name="5"></a>
				<h3>Создание CSL-запроса: способы и инструкции</h3>
				<p>
					Простейший способ генерации CSR – обращение к провайдеру, предоставляющему услуги хостинга. Это избавляет от лишних трудностей, позволяет быстро получить сертификат, установить его и начать использовать.
				</p>
				<p>
					Второй вариант – самостоятельный, при помощи OpenSSL. Эта методика универсальна, дает возможность держать процесс под абсолютным контролем, получить результат, на 100% соответствующий всем серверам и платформам. У OpenSSL есть альтернативы, однако, эта программа функциональна и эффективна, вдобавок распространяется на безвозмездной основе, исключает ненужные расходы.
				</p>
				<p>
					Для того чтобы создать необходимый сертификат, нужно установить программу на сервер или ПК. Проще всего загрузить ее с официального сайта. Дальнейшие действия сложнее, а потому требуют более подробного разбора.
				</p>
				<a name="6"></a>
				<h3>Создание приватного ключа</h3>
				<p>
					Делается это при помощи командной строки, через выполнение команды “openssl genrsa -out private.key 2048”. У каждой из частей данной команды есть строго определенное значение:
				</p>
				<ul>
					<li>Genrsa – основная команда, запускающая генерацию;</li>
					<li>-out private.key – обозначает имя файла, где планируется хранить ключ;</li>
					<li>2048 – размер файла, выраженный в битах. 2048 – это минимально рекомендованное значение, обеспечивающее достаточный уровень безопасности. По возможности рекомендуется использовать более крупные файлы.</li>
				</ul>
				<a name="7"></a>
				<h3>Подготовка запроса</h3>
				<p>
					После того как ключ создан, можно переходить к формированию запроса командой “openssl req -new -key private.key -out domain.csr”. Как и в предыдущем случае, у каждой составляющей команды есть свои задачи:
				</p>
				<ul>
					<li>req –new – базовая часть, активирующая подготовку CSR;</li>
					<li>-key private.key – обозначает путь к ключу, сделанному на предыдущем этапе;</li>
					<li>-out domain.csr – файл, где планируется хранение CSR.</li>
				</ul>
				<a name="8"></a>
				<h3>Указание информации</h3>
				<p>
					После выполнения команды, указанной ранее, программа выдаст список характеристик, которые следует подробно указать:
				</p>
				<ul>
					<li>Страна. Государство, где проведена регистрация домена. Например, для Соединенных Штатов указывается аббревиатура “US”, а для Великобритании – “UK”.</li>
					<li>State or Province. Регион, где зарегистрировано предприятие, прописано физическое лицо.</li>
					<li>Locality Name. Населенный пункт, где зарегистрировано предприятие, прописано физическое лицо.</li>
					<li>Organization Name. В этой графе нужно указать полное название предприятия, без сокращений, такое же, как в документах, либо ФИО физического лица.</li>
					<li>Organization Unit. Название отдела в рамках предприятия, который будет пользоваться сертификатом.</li>
					<li>Common Name. Доменное имя. Указывается полностью, без аббревиатур и сокращений.</li>
					<li>E-mail. Контактная электронная почта, при помощи которой можно оперативно связаться с администратором для решения технических вопросов и проблем.</li>
				</ul>
				<img src="/blog/csr3.png" alt="Https" />
				<a name="9"></a>
				<h3>Что нужно учитывать?</h3>
				<p>
					Перед тем как создать запрос CSR, провести оформление SSL-сертификата, нужно принять во внимание несколько значимых моментов. Например, размер ключа. Минимально рекомендованное значение, позволяющее не переживать по поводу безопасности – 2048 бит. Если требуется максимальная надежность, рекомендуется увеличить ключ до 4096 бит.
				</p>
				<p>
					Конечно, даже самый надежный ключ окажется бесполезным, если к нему получат доступ третьи лица. Передача в чужие руки, равно как и хранение на незащищенных носителях информации, недопустимы.
				</p>
				<p>
					Нельзя забывать и об однократности использования CSR. При необходимости обновления, повторного издания сертификата, нужно сгенерировать новый ключ и CSR. Такой подход исключает риски, связанные с уязвимостью.
				</p>
				
			</>
		),
		uz: (
			<>
				<a name="1"></a>
				<h3>
				KSS nima va uni qanday yaratish kerak?
				</h3>
				<p>
				Xavfsizlik raqamli dunyoning eng muhim tamoyillaridan biridir. Unga rioya qilish ma'lumotlarning xavfsizligini ta'minlaydi, uchinchi shaxslar tomonidan ushlanishini istisno qiladi. Barcha ma'lumotlar faqat xavfsiz ulanishlar orqali, shifrlangan shaklda uzatilishi kerak, ular uchun SSL sertifikatlari qo'llaniladi. Biroq, ularni qabul qilishdan oldin, siz maxsus so'rov, CSR yaratishingiz kerak. Ushbu qisqartma ortida nima yashiringan? Qanday qilib so'rovni to'g'ri yaratish kerak?
				</p>
				<img src="/blog/csr1.png" alt="SSLni ochish" />
				<a name="2"></a>
				<h3>Umumiy tushuncha</h3>
				<p>
				CSR qisqartmasi "sertifikatni imzolash so'rovi" degan ma'noni anglatadi, ya'ni sertifikat uchun raqamli imzo so'rovi. U domen nomi, sertifikatdan foydalanishni rejalashtirayotgan korxona haqidagi ma'lumotlarni o'z ichiga olishi kerak.
				</p>
				<p>
				SSL protokoli mijoz va server o'rtasidagi aloqa seansining xavfsizligini kafolatlaydi, barcha ma'lumotlar shifrlangan va shuning uchun hatto ularni ushlash ham ma'nosiz bo'ladi. Barcha qimmatli ma'lumotlar, masalan, bank kartasi tafsilotlari, hisob qaydnomalariga kirish uchun parollar buzg'unchilar uchun mavjud bo'lmaydi.
				</p>
				<p>
				SSL sertifikatining yo'qligi saytga bo'lgan ishonch darajasini keskin pasaytiradi, bundan tashqari, ko'plab brauzerlar ularga o'tishni avtomatik ravishda bloklaydi, foydalanuvchini ishonchsizlik, ulanishning ishonchsizligi, maxfiy ma'lumotlarni yo'qotish xavfi haqida ogohlantiradi.
				</p>
				<a name="3"></a>
				<h3>KSS tuzilishi</h3>
				<p>
				CSR quyidagi elementlardan iborat:
				</p>
				<ul>
				<li>Shaxsiy kalit. CSR bilan birgalikda yaratilgan maxsus kalit, uning asosiy vazifasi uzatilgan axborotni shifrlashdir.</li>
				<li>Ochiq kalit. Oldingi so'rov asosida tuzilgan, so'rovga birlashtirilgan.</li>
				<li>Korxona haqidagi ma'lumotlar. Jismoniy shaxsning nomi, foydalanuvchi tashkilotining nomi, hududiy, davlatga mansubligi.</li>
				<li>Domen nomi.</li>
				</ul>
				<img src="/blog/csr2.png" alt="SSL" />
				<a name="4"></a>
				<h3>Sertifikatni qanday imzolash kerak?</h3>
				<p>
				SSL sertifikatini imzolash uchun siz nafaqat CSR so'rovini yaratishingiz, balki uni sertifikatlashtirish markaziga ko'rib chiqish uchun yuborishingiz kerak. Markazning vazifasi ko'rsatilgan ma'lumotlarni tekshirish, ularning to'g'riligiga ishonch hosil qilish va SSLni berishdir. Avvalo, tashkilot quyidagilarni tekshiradi:
				</p>
				<ul>
				<li>Domenning qonuniyligi. Buning uchun DNS yozuvlari tahlil qilinadi yoki boshqa usullardan foydalaniladi.</li>
				<li>Kompaniya yoki jismoniy shaxs tomonidan taqdim etilgan hujjatlar. Bu har doim ham bajarilmaydi, lekin faqat yuqori darajadagi EV SSL uchun ariza topshirilganda amalga oshiriladi.</li>
				<li>Tashkilot faoliyati. OV SSL uchun tegishli.</li>
				</ul>
				<a name="5"></a>
				<h3>CSL so'rovini yaratish: usullar va ko'rsatmalar</h3>
				<p>
				KSS yaratishning eng oddiy usuli hosting xizmatlarini taqdim etuvchi provayderga murojaat qilishdir. Bu keraksiz qiyinchiliklarni bartaraf qiladi, tezda sertifikat olish, uni o'rnatish va undan foydalanishni boshlash imkonini beradi.
				</p>
				<p>
				Ikkinchi variant mustaqil, OpenSSL yordamida. Ushbu usul universal bo'lib, jarayonni mutlaq nazorat ostida ushlab turishga, barcha serverlar va platformalarga 100% mos keladigan natijaga erishishga imkon beradi. OpenSSL-ning muqobil variantlari bor, ammo bu dastur funktsional va samarali, qo'shimcha ravishda keraksiz xarajatlarni bartaraf etib, bepul tarqatiladi.
				</p>
				<p>
				Kerakli sertifikatni yaratish uchun dasturni server yoki shaxsiy kompyuterga o'rnatishingiz kerak. Eng oson yo'li - uni rasmiy veb-saytdan yuklab olish. Keyingi harakatlar yanada murakkab va shuning uchun batafsil tahlilni talab qiladi.
				</p>
				<a name="6"></a>
				<h3>Shaxsiy kalit yaratish</h3>
				<p>
				Bu buyruq qatori yordamida, “openssl genrsa -out private.key 2048” buyrug'ini bajarish orqali amalga oshiriladi. Ushbu buyruqning har bir qismi qat'iy belgilangan ma'noga ega:
				</p>
				<ul>
				<li>Genrsa - avlodni boshlaydigan asosiy buyruq;</li>
				<li>-out private.key - kalitni saqlashni rejalashtirgan fayl nomini bildiradi;</li>
				<li>2048 – fayl hajmi, bitlarda ifodalangan. 2048 - tavsiya etilgan minimal qiymat, etarli darajadagi xavfsizlikni ta'minlaydi. Iloji bo'lsa, kattaroq fayllardan foydalanish tavsiya etiladi.</li>
				</ul>
				<a name="7"></a>
				<h3>So'rov tayyorlanmoqda</h3>
				<p>
				Kalit yaratilgandan so'ng, "openssl req -new -key private.key -out domain.csr" buyrug'i yordamida so'rovni shakllantirishga o'tishingiz mumkin. Oldingi holatda bo'lgani kabi, buyruqning har bir komponenti o'z vazifalariga ega:
				</p>
				<ul>
				<li>req –new – CSRni tayyorlashni faollashtiruvchi asosiy qism;</li>
				<li>-key private.key - oldingi bosqichda qilingan kalitga yo'lni ko'rsatadi;</li>
				<li>-out domain.csr – siz CSR saqlashni rejalashtirgan fayl.</li>
				</ul>
				<a name="8"></a>
				<h3>Ma'lumotni ko'rsatish</h3>
				<p>
				Ilgari ko'rsatilgan buyruqni bajargandan so'ng, dastur batafsil ko'rsatilishi kerak bo'lgan xususiyatlar ro'yxatini chiqaradi:
				</p>
				<ul>
				<li>Mamlakat. Domen ro'yxatdan o'tgan davlat. Masalan, Qo'shma Shtatlar uchun "US" qisqartmasi, Buyuk Britaniya uchun esa "Buyuk Britaniya" ko'rsatilgan.</li>
				<li>Shtat yoki viloyat. Korxona ro'yxatdan o'tgan hudud, jismoniy shaxs ro'yxatga olingan.</li>
				<li>Mahalla nomi. Korxona ro'yxatga olingan joy, jismoniy shaxs ro'yxatga olingan.</li>
				<li>Tashkilot nomi. Ushbu ustunda siz hujjatlardagi kabi qisqartmalarsiz korxonaning to'liq nomini yoki jismoniy shaxsning to'liq ismini ko'rsatishingiz kerak.</li>
				<li>Tashkiliy birlik. Sertifikatdan foydalanadigan korxona ichidagi bo'limning nomi.</li>
				<li>Umumiy ism. Domen nomi. Qisqartmalarsiz va qisqartmalarsiz toʻliq koʻrsating.</li>
				<li>Elektron pochta. Texnik muammolar va muammolarni hal qilish uchun administrator bilan tezda bog'lanishingiz mumkin bo'lgan elektron pochta manziliga murojaat qiling.</li>
				</ul>
				<img src="/blog/csr3.png" alt="Https" />
				<a name="9"></a>
				<h3>Nimaga e'tibor berish kerak?</h3>
				<p>
				CSR so'rovini yaratish yoki SSL sertifikatini ro'yxatdan o'tkazishdan oldin siz bir nechta muhim fikrlarni hisobga olishingiz kerak. Masalan, kalit o'lchami. Xavfsizlik haqida tashvishlanmaslik imkonini beruvchi minimal tavsiya etilgan qiymat 2048 bit. Agar maksimal ishonchlilik talab etilsa, kalitni 4096 bitgacha oshirish tavsiya etiladi.
				</p>
				<p>
				Albatta, agar uchinchi shaxslar unga kirish huquqiga ega bo'lsa, hatto eng ishonchli kalit ham foydasiz bo'ladi. Uni noto'g'ri qo'llarga o'tkazish, shuningdek, himoyalanmagan saqlash vositalarida saqlash qabul qilinishi mumkin emas.
				</p>
				<p>
				KSSdan bir martalik foydalanish haqida unutmasligimiz kerak. Agar sertifikatni yangilash yoki qayta rasmiylashtirish zarur bo'lsa, yangi kalit va CSR yaratilishi kerak. Ushbu yondashuv zaiflik bilan bog'liq xavflarni yo'q qiladi.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				What is a CSR and how to create it?
				</h3>
				<p>
				Security is one of the most important principles of the digital world. Following it ensures the safety of data, excludes its interception by third parties. All information must be transmitted exclusively through secure connections, in encrypted form, for which SSL certificates are used. Before receiving them, however, you need to create a special request, CSR. What is hidden behind this abbreviation? How to generate a request correctly?
				</p>
				<img src="/blog/csr1.png" alt="Open SSL" />
				<a name="2"></a>
				<h3>General concept</h3>
				<p>
				The abbreviation CSR stands for “certificate signing request”, that is, a request for a digital signature for a certificate. It must contain information about the domain name, the enterprise planning to use the certificate.
				</p>
				<p>
				The SSL protocol guarantees the security of the communication session between the client and the server, all data is encrypted, and therefore even their probable interception will be meaningless. All valuable information, for example, bank card details, passwords for logging into accounts, will not be available to intruders.
				</p>
				<p>
				The absence of an SSL certificate dramatically reduces the level of trust in the site, moreover, many browsers automatically block the transition to them, warning the user about the insecurity, insecurity of the connection, the risk of losing confidential information.
				</p>
				<a name="3"></a>
				<h3>CSR structure</h3>
				<p>
				A CSR consists of the following elements:
				</p>
				<ul>
				<li>Private key. A special key created together with the CSR, the main function of which is to encrypt the transmitted information.</li>
				<li>Public key. Formed on the basis of the previous one, integrated into the request.</li>
				<li>Data about the enterprise. Name of the individual, name of the user organization, regional, state affiliation.</li>
				<li>Domain name.</li>
				</ul>
				<img src="/blog/csr2.png" alt="SSL" />
				<a name="4"></a>
				<h3>How to sign a certificate?</h3>
				<p>
				To sign an SSL certificate, you need to not only create a CSR request, but also send it for review to the certification center. The task of the center is to check the specified data, make sure it is correct and issue the SSL. First of all, the organization checks the following:
				</p>
				<ul>
				<li>The legitimacy of the domain. For this, DNS records are analyzed or other methods are used.</li>
				<li>Documents provided by the company or individual. This is not always done, but only when applying for high-level EV SSL.</li>
				<li>Organization activities. Relevant for OV SSL.</li>
				</ul>
				<a name="5"></a>
				<h3>Creating a CSL request: methods and instructions</h3>
				<p>
				The simplest way to generate a CSR is to contact a provider that provides hosting services. This eliminates unnecessary difficulties, allows you to quickly obtain a certificate, install it and start using it.
				</p>
				<p>
				The second option is independent, using OpenSSL. This method is universal, makes it possible to keep the process under absolute control, to obtain a result that is 100% consistent with all servers and platforms. OpenSSL has alternatives, however, this program is functional and effective, in addition, it is distributed free of charge, eliminating unnecessary expenses.
				</p>
				<p>
				To create the required certificate, you need to install the program on the server or PC. The easiest way is to download it from the official website. Further actions are more complicated, and therefore require a more detailed analysis.
				</p>
				<a name="6"></a>
				<h3>Creating a private key</h3>
				<p>
				This is done using the command line, by executing the command “openssl genrsa -out private.key 2048”. Each part of this command has a strictly defined meaning:
				</p>
				<ul>
				<li>Genrsa is the main command that starts generation;</li>
				<li>-out private.key – indicates the name of the file where you plan to store the key;</li>
				<li>2048 – file size, expressed in bits. 2048 is the minimum recommended value, providing a sufficient level of security. It is recommended to use larger files if possible.</li>
				</ul>
				<a name="7"></a>
				<h3>Preparing a request</h3>
				<p>
				Once the key has been created, you can proceed to forming a request using the command “openssl req -new -key private.key -out domain.csr”. As in the previous case, each component of the command has its own tasks:
				</p>
				<ul>
				<li>req –new – the basic part that activates the preparation of the CSR;</li>
				<li>-key private.key – indicates the path to the key made in the previous step;</li>
				<li>-out domain.csr – the file where you plan to store the CSR.</li>
				</ul>
				<a name="8"></a>
				<h3>Specifying information</h3>
				<p>
				After executing the command specified earlier, the program will issue a list of characteristics that should be specified in detail:
				</p>
				<ul>
				<li>Country. The state where the domain is registered. For example, for the United States, the abbreviation “US” is indicated, and for Great Britain, “UK”.</li>
				<li>State or Province. The region where the enterprise is registered, the individual is registered.</li>
				<li>Locality Name. The locality where the enterprise is registered, the individual is registered.</li>
				<li>Organization Name. In this column, you must specify the full name of the enterprise, without abbreviations, the same as in the documents, or the full name of the individual.</li>
				<li>Organization Unit. The name of the department within the enterprise that will use the certificate.</li>
				<li>Common Name. Domain name. Specify in full, without abbreviations and acronyms.</li>
				<li>E-mail. Contact e-mail, with which you can quickly contact the administrator to resolve technical issues and problems.</li>
				</ul>
				<img src="/blog/csr3.png" alt="Https" />
				<a name="9"></a>
				<h3>What should be taken into account?</h3>
				<p>
				Before creating a CSR request, or registering an SSL certificate, you need to take into account several important points. For example, the key size. The minimum recommended value, which allows you not to worry about security, is 2048 bits. If maximum reliability is required, it is recommended to increase the key to 4096 bits.
				</p>
				<p>
				Of course, even the most reliable key will be useless if third parties gain access to it. Transferring it into the wrong hands, as well as storing it on unprotected storage media, is unacceptable.
				</p>
				<p>
				We must not forget about the one-time use of CSR. If it is necessary to renew or reissue the certificate, a new key and CSR must be generated. This approach eliminates the risks associated with vulnerability.
				</p>
			</>
		),
	},
	next: "/blog/chto-takoe-apache-http-server",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoye-csr-i-kak-ego-sozdat",
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
