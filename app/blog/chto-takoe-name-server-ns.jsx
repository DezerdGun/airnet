import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
		uz: "Nom serverlari (NS): DNS infratuzilmasining asosiy elementlari",
		en: "Name Servers (NS): Key Elements of DNS Infrastructure",
	},
	title: {
		ru: "Name-серверы (NS): роль и значение в DNS-системе",
		uz: "Nom serverlari (NS): DNS tizimidagi roli va ahamiyati",
		en: "Name Servers (NS): Role and Importance in the DNS System",
	},
	desc: {
		ru: "Разберемся, что такое name-серверы, их функции в системе доменных имен и почему они важны для работы сайтов.",
		uz: "Keling, nom serverlari nima ekanligini, ularning domen nomlari tizimidagi funktsiyalarini va nima uchun ular veb-saytlarning ishlashi uchun muhimligini aniqlaymiz.",
		en: "Let's figure out what name servers are, their functions in the domain name system and why they are important for the operation of websites.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "15",
	view: "74",
	img: "/blog/ns.png",
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
		{ title: {ru: "Name-серверы: что это?", uz: "Nom serverlari: ular nima?", en: "Name servers: what are they?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Umumiy tushuncha", en: "General concept", slug: "2" }},
		{ title: {ru: "Основные функции", uz: "Asosiy funktsiyalari", en: "Main functions", slug: "3" }},
		{ title: {ru: "Классификация серверов", uz: "Server tasnifi", en: "Server classification", slug: "4" }},
		{ title: {ru: "Что такое дочерние NS-серверы?", uz: "Bola NS serverlari nima?", en: "What are child NS servers?", slug: "5" }},
		{ title: {ru: "Настройки NS-сервера", uz: "NS server sozlamalari", en: "NS server settings", slug: "6" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Name-серверы: что это?
				</h3>
				<p>
					Доменное имя сайта, написанное латиницей или кириллицей, максимально удобно для пользователей – его легко запомнить, написать в адресной строке. Технике, однако, требуется другой адрес, выраженный не буквами, а цифрами. Преобразованием в режиме реального времени занимаются специальные name-серверы. Что скрывается за этим понятием? Какие функции они выполняют? По какому принципу работают?
				</p>
				<a name="2"></a>
				<h3>Общее понятие</h3>
				<p>
					Name-сервер, часто обозначаемый в тематической литературе аббревиатурой “NS”, используется для преобразования доменных имен, указанных пользователями в адресной строке, в цифровые IP-адреса, необходимые для взаимодействия компьютерного, сетевого оборудования. Поддерживается как прямое, так и обратное преобразование.
				</p>
				<a name="3"></a>
				<h3>Основные функции</h3>
				<p>
					Помимо главной задачи, трансформации доменных имен в IP-адреса, NS-сервер выполняет и некоторые дополнительные:
				</p>
				<ul>
					<li>Подача уведомления об ошибке при вводе некорректного, несуществующего адреса.</li>
					<li>Выдача данных о сервере, где находятся поддомены.</li>
					<li>Кэширование данных, что исключает необходимость в их повторной загрузке из интернета, увеличивает скорость открытия страниц.</li>
				</ul>
				<p>
					При первом посещении можно столкнуться с довольно долгим ожиданием открытия сайта, однако, при последующих – проблема устраняется за счет кэширования. 
				</p>
				<img src="/blog/ns1.png" alt="Server" />
				<a name="4"></a>
				<h3>Классификация серверов</h3>
				<p>
					Обеспечение высокой скорости открытия сайтов, максимального пользовательского удобства – все это возможно за счет использования различных name-серверов. Представлены они тремя основными категориями:
				</p>
				<ul>
					<li>Первичные. Основные, реагирующие на все пользовательские запросы.</li>
					<li>Вторичные. Отвечают в случае недоступности основного сервера, либо его перегрузке, из-за которой он не справляется со своевременной обработкой запросов.</li>
					<li>Кэширующие. Этот name-сервер помогает увеличить скорость работы двух предыдущих, разгрузить их в периоды максимальной пользовательской активности.</li>
				</ul>
				<p>
					При классификации серверов можно ориентироваться и на условия их использования. Доступны следующие варианты:
				</p>
				<ul>
					<li>Предоставленные компанией, зарегистрировавшей доменное имя. В такой ситуации для начала использования достаточно обозначить IP-адрес сайта.</li>
					<li>Бесплатные. Такой name-сервер доступен любому желающему, доступ открыт. Плюс формата – бесплатность, минус – низкие уровни по надежности и безопасности.</li>
					<li>Платные, предоставляемые специализированными организациями. По сути, такая схема предполагает, что name-сервер используется на условиях договора аренды.</li>
					<li>Предоставляемые провайдером, предоставляющим услуги хостинга. Наиболее распространенная и востребованная категория, почти все компании готовы выдать name-сервер по требованию клиента.</li>
				</ul>
				<a name="5"></a>
				<h3>Что такое дочерние NS-серверы?</h3>
				<p>
					Серверы, как правило, находятся в собственности провайдеров, предоставляющих услуги хостинга. При этом при оформлении аренды можно получить в распоряжение не только основной, но и вспомогательный хост. Формируется он на основе базового домена и, соответственно, располагается на головном сервере, что обеспечивает возможность безвозмездного использования.
				</p>
				<p>
					Во время настройки name-записей на “родном” хостинге, где ранее была оформлена покупка доменов, можно ограничиться указанием имен и сохранением правок. Как правило, их ввод автоматизирован, происходит без дополнительных манипуляций сразу с регистрацией сайта.
				</p>
				<img src="/blog/ns2.png" alt="Server" />
				<a name="6"></a>
				<h3>Настройки NS-сервера</h3>
				<p>
					Чтобы name-сервер функционировал корректно, его необходимо грамотно настроить, указать соответствующие записи, в первую очередь – следующие:
				</p>
				<ul>
					<li>NS – важнейшая запись, необходимая для определения адресов, закрепленных за доменным именем.</li>
					<li>A – привязка сайта к конкретному IP-адресу, соответствующему стандарту IPv4. Допускается внесение сразу нескольких записей подобного плана, для привязки к разным адресам.</li>
					<li>AAAA – запись, идентичная предыдущей, однако, ориентированная на протокол IPv6.</li>
					<li>MX – фиксирует имя сервера, который должен принимать электронную почту для главного доменного имени. Этих записей также может быть несколько, причем допустимо их различие по приоритету.</li>
					<li>TXT – в этой записи на name-сервере можно сохранить любые данные, например, пользовательские.</li>
					<li>SOA – запись, предназначенная для сохранения служебной информации, в частности – последних внесенных изменений и обновлений.</li>
				</ul>
				<p>
					От того, насколько корректно настроен name-сервер, зависит стабильность сайта, эффективность реализации стратегий, связанных с маркетингом и продвижением. К примеру, правильно внесенные записи формата MX помогают укрепить репутацию при активном использовании почтовых сервисов, с высокой вероятностью, отправленное письмо не окажется в группе со спамом. Записи формата TXT, в свою очередь, должны делать системные администраторы, специалисты, занимающиеся оптимизацией, активно использующиеся сторонние мониторинговые и аналитические инструменты.
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
				Nom serverlari: bu nima?
				</h3>
				<p>
				Lotin yoki kirill alifbosida yozilgan veb-sayt domen nomi foydalanuvchilar uchun juda qulay – uni eslab qolish va manzillar qatoriga yozish oson. Biroq, texnologiya harflar bilan emas, balki raqamlar bilan ifodalangan boshqa manzilni talab qiladi. Maxsus nom serverlari real vaqtda konvertatsiya qilishni amalga oshiradi. Ushbu kontseptsiya ortida nima bor? Ular qanday funktsiyalarni bajaradilar? Ular qanday ishlaydi?
				</p>
				<a name="2"></a>
				<h3>Umumiy tushuncha</h3>
				<p>
				Adabiyotda ko'pincha "NS" qisqartmasi bilan ataladigan nom serveri manzillar panelida foydalanuvchilar tomonidan ko'rsatilgan domen nomlarini kompyuter va tarmoq uskunalari o'rtasidagi o'zaro ta'sir uchun zarur bo'lgan raqamli IP manzillarga aylantirish uchun ishlatiladi. To'g'ridan-to'g'ri va teskari konvertatsiya qo'llab-quvvatlanadi.
				</p>
				<a name="3"></a>
				<h3>Asosiy funksiyalar</h3>
				<p>
				Domen nomlarini IP manzillarga o'zgartirish asosiy vazifaga qo'shimcha ravishda, NS serveri qo'shimcha vazifalarni ham bajaradi:
				</p>
				<ul>
				<li>Noto'g'ri, mavjud bo'lmagan manzilni kiritishda xatolik haqida bildirishnoma yuborish.</li>
				<li>Subdomenlar joylashgan server haqida ma'lumot berish.</li>
				<li>Ma'lumotlarni keshlash, bu ularni Internetdan qayta yuklab olish zaruratini yo'q qiladi, sahifalarni ochish tezligini oshiradi.</li>
				</ul>
				<p>
				Birinchi tashrifingizda siz saytning ochilishini ancha uzoq kutishingiz mumkin, ammo keyingi tashriflarda keshlash tufayli muammo bartaraf etiladi.
				</p>
				<img src="/blog/ns1.png" alt="Server" />
				<a name="4"></a>
				<h3>Server tasnifi</h3>
				<p>
				Saytlarni ochishning yuqori tezligini, maksimal foydalanuvchi qulayligini ta'minlash - bularning barchasi turli nom serverlaridan foydalanish orqali mumkin. Ular uchta asosiy toifada ifodalanadi:
				</p>
				<ul>
				<li>Asosiy. Foydalanuvchilarning barcha so'rovlariga javob beradigan asosiylari.</li>
				<li>Ikkinchi darajali. Ular asosiy server mavjud bo'lmaganda yoki uning haddan tashqari yuklanishida javob berishadi, shu sababli u so'rovlarni o'z vaqtida qayta ishlashga dosh berolmaydi.</li>
				<li>Keshlash. Ushbu nom serveri avvalgi ikkitasining tezligini oshirishga yordam beradi, ularni maksimal foydalanuvchi faolligi davrida tushirishga yordam beradi.</li>
				</ul>
				<p>
				Serverlarni tasniflashda siz ulardan foydalanish shartlariga ham e'tibor qaratishingiz mumkin. Quyidagi variantlar mavjud:
				</p>
				<ul>
				<li>Domen nomini ro'yxatdan o'tkazgan kompaniya tomonidan taqdim etilgan. Bunday holatda, undan foydalanishni boshlash uchun saytning IP manzilini ko'rsatish kifoya.</li>
				<li>Bepul. Ushbu nom serveri hamma uchun mavjud, kirish ochiq. Ushbu formatning afzalligi shundaki, u bepul, kamchilik - ishonchlilik va xavfsizlikning past darajasi.</li>
				<li>Ixtisoslashgan tashkilotlar tomonidan taqdim etilgan pullik. Aslida, bu sxema nom serveridan ijara shartnomasi bo‘yicha foydalanilishini nazarda tutadi.</li>
				<li>Xosting xizmatlarini taqdim etuvchi provayder tomonidan taqdim etilgan. Eng keng tarqalgan va ommabop kategoriya, deyarli barcha kompaniyalar mijozning iltimosiga binoan nom serverini chiqarishga tayyor.</li>
				</ul>
				<a name="5"></a>
				<h3>Bola NS serverlari nima?</h3>
				<p>
				Serverlar odatda hosting xizmatlarini ko'rsatuvchi provayderlarga tegishli. Bunday holda, ijara shartnomasini tuzishda siz nafaqat asosiy, balki yordamchi uy egasiga ham ega bo'lishingiz mumkin. U asosiy domen asosida shakllanadi va shunga mos ravishda asosiy serverda joylashgan bo'lib, bu bepul foydalanish imkonini beradi.
				</p>
				<p>
				Ilgari domen sotib olingan "mahalliy" xostingda nom yozuvlarini o'rnatishda siz nomlarni belgilash va tahrirlarni saqlash bilan cheklanishingiz mumkin. Qoida tariqasida, ularning kirishi avtomatlashtirilgan, saytni ro'yxatdan o'tkazish bilan darhol qo'shimcha manipulyatsiyalarsiz sodir bo'ladi.
				</p>
				<img src="/blog/ns2.png" alt="Server" />
				<a name="6"></a>
				<h3>NS server sozlamalari</h3>
				<p>
				Nomlar serveri to'g'ri ishlashi uchun u to'g'ri sozlangan bo'lishi kerak, tegishli yozuvlarni ko'rsating, birinchi navbatda, quyidagilar:
				</p>
				<ul>
				<li>NS – domen nomiga tayinlangan manzillarni aniqlash uchun zarur boʻlgan eng muhim yozuv.</li>
				<li>A - saytni IPv4 standartiga mos keladigan ma'lum bir IP-manzilga bog'lash. Bu turdagi bir nechta yozuvlarni bir vaqtning o'zida kiritish, turli manzillarga bog'lash mumkin.</li>
				<li>AAAA – avvalgisiga o'xshash rekord, ammo IPv6 protokoliga yo'naltirilgan.</li>
				<li>MX - asosiy domen nomi uchun elektron pochta xabarini olishi kerak bo'lgan server nomini yozadi. Shuningdek, bunday yozuvlar bir nechta boʻlishi mumkin va ularning ustuvorligidagi farqlari qabul qilinadi.</li>
				<li>TXT – foydalanuvchi maʼlumotlari kabi har qanday maʼlumot ushbu yozuvda nom serverida saqlanishi mumkin.</li>
				<li>SOA - xizmat ma'lumotlarini, xususan, so'nggi o'zgarishlar va yangilanishlarni saqlash uchun mo'ljallangan yozuv.</li>
				</ul>
				<p>
				Saytning barqarorligi va marketing va reklama bilan bog'liq strategiyalarni amalga oshirish samaradorligi nom serveri qanchalik to'g'ri tuzilganiga bog'liq. Masalan, to'g'ri kiritilgan MX yozuvlari pochta xizmatlaridan faol foydalanishda obro'ni mustahkamlashga yordam beradi; yuqori ehtimollik bilan yuborilgan xat spam guruhiga tushmaydi. TXT yozuvlari, o'z navbatida, tizim ma'murlari, optimallashtirish bilan shug'ullanadigan mutaxassislar tomonidan uchinchi tomon monitoringi va tahliliy vositalaridan faol foydalanishi kerak.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				Name servers: what is it?
				</h3>
				<p>
				A website domain name written in Latin or Cyrillic is extremely convenient for users – it is easy to remember and write in the address bar. However, technology requires a different address, expressed not in letters, but in numbers. Special name servers perform real-time conversion. What is behind this concept? What functions do they perform? How do they work?
				</p>
				<a name="2"></a>
				<h3>General concept</h3>
				<p>
				A name server, often referred to in the literature by the abbreviation “NS”, is used to convert domain names specified by users in the address bar into digital IP addresses necessary for interaction between computer and network equipment. Both direct and reverse conversion are supported.
				</p>
				<a name="3"></a>
				<h3>Main functions</h3>
				<p>
				In addition to the main task, transforming domain names into IP addresses, the NS server also performs some additional ones:
				</p>
				<ul>
				<li>Submitting an error notification when entering an incorrect, non-existent address.</li>
				<li>Issuing data about the server where the subdomains are located.</li>
				<li>Caching data, which eliminates the need to re-download them from the Internet, increases the speed of opening pages.</li>
				</ul>
				<p>
				On your first visit, you may encounter a rather long wait for the site to open, however, on subsequent visits, the problem is eliminated due to caching.
				</p>
				<img src="/blog/ns1.png" alt="Server" />
				<a name="4"></a>
				<h3>Server Classification</h3>
				<p>
				Ensuring high speed of opening sites, maximum user convenience - all this is possible through the use of various name servers. They are represented by three main categories:
				</p>
				<ul>
				<li>Primary. The main ones that respond to all user requests.</li>
				<li>Secondary. They respond in case of unavailability of the main server, or its overload, due to which it cannot cope with timely processing of requests.</li>
				<li>Caching. This name server helps to increase the speed of the two previous ones, unload them during periods of maximum user activity.</li>
				</ul>
				<p>
				When classifying servers, you can also focus on the conditions of their use. The following options are available:
				</p>
				<ul>
				<li>Provided by the company that registered the domain name. In this situation, to start using it, it is enough to indicate the IP address of the site.</li>
				<li>Free. This name server is available to anyone, access is open. The advantage of this format is that it is free, the disadvantage is low levels of reliability and security.</li>
				<li>Paid, provided by specialized organizations. In fact, this scheme assumes that the name server is used under a lease agreement.</li>
				<li>Provided by the provider providing hosting services. The most common and popular category, almost all companies are ready to issue a name server upon the client's request.</li>
				</ul>
				<a name="5"></a>
				<h3>What are child NS servers?</h3>
				<p>
				Servers are usually owned by providers providing hosting services. In this case, when arranging a lease, you can get at your disposal not only the main, but also an auxiliary host. It is formed on the basis of the base domain and, accordingly, is located on the main server, which allows for free use.
				</p>
				<p>
				When setting up name records on the “native” hosting, where the domain purchase was previously made, you can limit yourself to specifying names and saving edits. As a rule, their entry is automated, occurs without additional manipulations immediately with the registration of the site.
				</p>
				<img src="/blog/ns2.png" alt="Server" />
				<a name="6"></a>
				<h3>NS server settings</h3>
				<p>
				For the name server to function correctly, it must be properly configured, specify the appropriate records, first of all, the following:
				</p>
				<ul>
				<li>NS – the most important record, necessary for determining the addresses assigned to the domain name.</li>
				<li>A – binding the site to a specific IP address that complies with the IPv4 standard. It is allowed to enter several records of this type at once, to bind to different addresses.</li>
				<li>AAAA – a record identical to the previous one, however, oriented to the IPv6 protocol.</li>
				<li>MX – records the name of the server that should receive e-mail for the main domain name. There may also be several of these records, and their differences in priority are acceptable.</li>
				<li>TXT – any data, such as user data, can be saved in this record on the name server.</li>
				<li>SOA – a record designed to save service information, in particular – the latest changes and updates.</li>
				</ul>
				<p>
				The stability of the site and the effectiveness of the implementation of strategies related to marketing and promotion depend on how correctly the name server is configured. For example, correctly entered MX records help to strengthen the reputation when actively using mail services; with a high probability, the sent letter will not end up in the spam group. TXT records, in turn, should be made by system administrators, specialists involved in optimization, actively using third-party monitoring and analytical tools.
				</p>
			</>
		),
	},
	next: "/blog/chto-takoe-vps-server",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoe-name-server-ns",
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
