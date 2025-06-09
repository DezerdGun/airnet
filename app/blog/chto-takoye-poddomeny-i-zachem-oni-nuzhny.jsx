import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Что такое поддомены и зачем они нужны",
		uz: "Subdomenlar nima va ular nima uchun kerak?",
		en: "What are subdomains and why are they needed?",
	},
	title: {
		ru: "Что такое поддомены и зачем они нужны: простыми словами",
		uz: "Subdomenlar nima va ular nima uchun kerak?: oddiy so'zlar bilan",
		en: "What are subdomains and why are they needed?: in simple words",
	},
	desc: {
		ru: "Поддомены — это часть доменного имени, отделенная точкой🚫 Узнайте, как используются поддомены для организации веб-сайтов и структурирования контента.",
		uz: "Subdomenlar domen nomining nuqta bilan ajratilgan qismidir🚫 Subdomainlardan veb-saytlarni tartibga solish va tarkibni tuzishda qanday foydalanilishini bilib oling.",
		en: "Subdomains are the portion of a domain name separated by a period🚫 Learn how subdomains are used to organize websites and structure content.",
	},
	date: "10.10.2024",
	updated: "10.10.2024",
	read: "3",
	view: "12",
	img: "/blog/subdomain.png",
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
		{ title: {ru: "Что такое поддомен?", uz: "Subdomen nima?", en: "What is a subdomain?", slug: "1" }},
		{ title: {ru: "Разбор понятия", uz: "Kontseptsiyani tahlil qilish", en: "Description", slug: "2" }},
		{ title: {ru: "Классификация", uz: "Tasniflash", en: "Classification", slug: "3" }},
		{ title: {ru: "Необходимость поддоменов", uz: "Subdomenlarga bo'lgan ehtiyoj", en: "Need for subdomains", slug: "4" }},
		{ title: {ru: "Поисковое продвижение", uz: "Qidiruv tizimini reklama qilish", en: "Search engine promotion", slug: "5" }},
		{ title: {ru: "Обеспечение удобства навигации", uz: "Navigatsiya qulayligini ta'minlash", en: "Ensuring ease of navigation", slug: "6" }},
		{ title: {ru: "Ускорение работы сетевого ресурса", uz: "Tarmoq resursini tezlashtirish", en: "Speeding up the network resource", slug: "7" }},
		{ title: {ru: "Обеспечение безопасности основного сайта", uz: "Asosiy sayt xavfsizligi", en: "Ensuring the security of the main site", slug: "8" }},
		{ title: {ru: "Как создать поддомен?", uz: "Subdomenni qanday yaratish mumkin?", en: "How to create a subdomain?", slug: "9" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Что такое поддомен?
				</h3>
				<p>
					Поддомен – это домен, являющийся частью более высокоуровневого домена. В специализированной литературе также встречается определение “субдомен”, эти термины являются синонимичными. Какими классами они представлены? Для чего используются?
				</p>
				<a name="2"></a>
				<h3>Разбор понятия</h3>
				<p>
					Интернет сформирован множеством сайтов, сетевых ресурсов, а они – частями, сегментами, обеспечивающими структуризацию контента, удобство навигации, управления и настроек. Например, основной сайт носит название “example.net”. На нем размещена наиболее значимая информация, характеризующая профиль работы организации. На этом сайте можно создать следующие поддомены:
				</p>
				<ul>
					<li>Forum.example.net – раздел для форума, общения пользователей, обсуждения вопросов, связанных с компанией, либо сторонних, тематических.</li>
					<li>Blog.example.net – раздел для публикации интересных тематических статей, обзоров, авторами которых могут быть и администраторы сайта, и зарегистрированные пользователи.</li>
					<li>Region.example.net – раздел для регионального представительства масштабной организации.</li>
				</ul>
				
				<a name="3"></a>
				<h3>Классификация</h3>
				<p>
					Основной классификационный признак для субдоменов – назначение. Специалисты выделяют следующие главные типы:
				</p>
				<ul>
					<li>Сервисные. Их задача – разделение функций основного сайта. Например, указанный выше форум. Также допустимо выделение в отдельный поддомен интернет-магазина, доски объявлений, блога, формы для общения со службой поддержкой, администраторами. К группе сервисных субдоменов относятся и лендинги, посадочные страницы, посвященные определенному событию, услуге, товару, структурному подразделению головной организации.</li>
					<li>Географические. Они необходимы, если речь идет об организации крупного масштаба, представленной в различных городах, регионах, странах. Разделение упрощает поиск, позволяет четче структурировать предложения, товары, контакты, актуальные исключительно в определенной географической области. Национальный поддомен, относящийся к конкретному государству, должен иметь хорошую локализацию, чтобы посетители не столкнулись с трудностями перевода.</li>
					<li>Мобильные. В последнее время они используются не слишком часто, что объясняется развитием адаптивного дизайна, однако, некоторые сайты до сих представлены отдельными мобильными и десктопными версиями.</li>
					<li>Тестовые. Применяются при модернизации, изменении функционала или дизайна основного сайта. Поддомен оставляет основу доступной для посещения, оформления заказов, при этом разработчики могут спокойно работать, проверять, насколько хорошо подходит сетевому ресурсу обновленное оформление, нет ли проблем с навигацией, использованием определенных функций, вкладок.</li>
				</ul>
				<a name="4"></a>
				<h3>Необходимость поддоменов</h3>
				<p>
					Субдоменами пользуются в основном крупные организации, предлагающие различные товары и услуги, имеющие региональные представительства, взаимодействующие с широкой целевой аудиторией. Каждую из возможных функций нужно рассмотреть в отдельности.
				</p>
				<a name="5"></a>
				<h3>Поисковое продвижение</h3>
				<p>
					Для Яндекс или Google поддомен – это отдельный ресурс, что повышает эффективность SEO для главного сайта. Преимущества таковы:
				</p>
				<ul>
					<li>Достижение верхних позиций в списках поисковой выдачи, даже если речь идет о нишах с высокой конкуренцией. Использование вспомогательных доменов позволяет более равномерно распределить ключевые фразы с высокой частотностью, повысить видимость главного домена для поисковых роботов, увеличить объемы привлекаемого трафика, обойти ограничения, исключить риски попадания под блокировку.</li>
					<li>Региональное продвижение. Поддомен для каждого города, области, где представлена компания, обеспечивает уверенное взаимодействие сайта с поисковыми роботами, учитывающими географическую привязку.</li>
				</ul>
				<a name="6"></a>
				<h3>Обеспечение удобства навигации</h3>
				<p>
					Для каждого раздела сайта, товарной категории можно создать отдельный субдомен, что упростит пользователю поиск нужной позиции, информации. Например, на сайте автомобильных объявлений можно выделить сегменты, где собраны мотоциклы, спецтехника, легковые авто.
				</p>
				<a name="7"></a>
				<h3>Ускорение работы сетевого ресурса</h3>
				<p>
					Эффект максимально выражен, если главный сайт перегружен крупными файлами, например, видео или фото в формате высокого разрешения. При помощи субдоменов можно более равномерно распределить информацию, страницы загружаются гораздо быстрее. Это оценят не только посетители, но и поисковые системы, позиции в списках выдачи улучшатся, вырастет посещаемость и конверсия.
				</p>
				<a name="8"></a>
				<h3>Обеспечение безопасности основного сайта</h3>
				<p>
					Это особенно актуально, если планируется модернизация сетевого ресурса, изменение его оформления, добавление новых функций. Поддомен – оптимальный вариант для проведения всех тестов и проверок. От ошибок никто не застрахован, но они не скажутся на функциональности главного портала, не ухудшат посещаемость, конверсию, позиции в списках поисковой выдачи.
				</p>
				<a name="9"></a>
				<h3>Как создать поддомен?</h3>
				<p>
					Чтобы на 100% реализовать преимущества субдоменов, обеспечить их функциональность, эффективность при продвижении основного портала, необходимо ответственно отнестись к созданию. Важнейшее требование – уникальность, наличие собственного оформления, привязки по региону, семантического ядра. Для обеспечения уникальности нужно следовать нескольким принципам:
				</p>
				<ul>
					<li>Создание уникального контента для каждого из субдоменов;</li>
					<li>Корректная региональная привязка;</li>
					<li>Создание перелинковку с главным сайтом;</li>
					<li>Подтверждение прав вебмастера в системах Google и Яндекс;</li>
					<li>Использование при продвижении собственного семантического ядра, неповторимых ключевых запросов.</li>
				</ul>
				<p>
					Поддомен должен быть хорошо продуман с технической стороны, быть безопасным. Для его обслуживания следует привлечь дополнительных специалистов, администраторов, использовать защищенные протоколы HTTPS, обеспечивающие передачу данных с предварительным шифрованием, SSL-сертификаты, регулярно проводить проверки на предмет уязвимостей и небольших сбоев, способных привести к серьезным проблемам.
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
				Subdomen nima? 
				</h3>
				<p>
				Subdomain - bu yuqori darajadagi domenning bir qismi bo'lgan domen. Ixtisoslashgan adabiyotlarda "subdomain" ta'rifi ham mavjud; bu atamalar sinonimdir. Ular qaysi sinflar bilan ifodalanadi? Ular nima uchun ishlatiladi? 
				</p>
				<a name="2"></a>
				<h3>Tushuncha tahlili</h3>
				<p>
				Internet ko'plab saytlar, tarmoq resurslari tomonidan shakllantiriladi va ular tarkibiy tuzilishni, navigatsiya qulayligini, boshqaruvni va sozlashni ta'minlovchi qismlar, segmentlardir. Masalan, asosiy sayt "example.net" deb ataladi. U tashkilotning ish profilini tavsiflovchi eng muhim ma'lumotlarni o'z ichiga oladi. Ushbu saytda quyidagi subdomenlarni yaratish mumkin:
				</p>
				<ul>
				<li>Forum.example.net – forum, foydalanuvchilar bilan muloqot, kompaniyaga oid yoki uchinchi tomon mavzuli masalalarni muhokama qilish uchun boʻlim.</li>
				<li>Blog.example.net – mualliflari ham sayt ma'murlari, ham ro'yxatdan o'tgan foydalanuvchilar bo'lishi mumkin bo'lgan qiziqarli mavzuli maqolalar, sharhlarni nashr qilish bo'limi.</li>
				<li>Region.example.net – yirik tashkilotning hududiy vakolatxonasi uchun bo‘lim.</li>
				</ul>

				<a name="3"></a>
				<h3>Tasniflash</h3>
				<p>
				Subdomenlar uchun asosiy tasniflash xususiyati maqsaddir. Mutaxassislar quyidagi asosiy turlarni aniqlaydilar:
				</p>
				<ul>
				<li>Xizmat. Ularning vazifasi asosiy saytning funktsiyalarini ajratishdir. Masalan, yuqorida aytib o'tilgan forum. Shuningdek, alohida subdomenga onlayn-do'kon, xabarlar paneli, blog, qo'llab-quvvatlash xizmati, ma'murlar bilan aloqa shaklini ajratish mumkin. Xizmat subdomenlari guruhi, shuningdek, asosiy tashkilotning muayyan voqea, xizmat, mahsulot yoki tarkibiy boʻlinmasiga bagʻishlangan ochilish sahifalarini ham oʻz ichiga oladi.</li>
				<li>Geografik. Agar biz turli shaharlarda, viloyatlarda va mamlakatlarda joylashgan keng ko'lamli tashkilot haqida gapiradigan bo'lsak, ular kerak. Bo'lim qidiruvni soddalashtiradi va faqat ma'lum bir geografik hududga tegishli bo'lgan takliflar, mahsulotlar va kontaktlarning aniqroq tuzilishiga imkon beradi. Muayyan mamlakatga xos boʻlgan milliy subdomen yaxshi mahalliylashtirishga ega boʻlishi kerak, shunda tashrif buyuruvchilar tarjimada qiyinchiliklarga duch kelmasligi kerak.</li>
				<li>Mobil. Ular so'nggi paytlarda unchalik tez-tez ishlatilmayapti, bu moslashuvchan dizaynning rivojlanishi bilan izohlanadi, biroq ba'zi saytlar hali ham alohida mobil va ish stoli versiyalari bilan taqdim etiladi.</li>
				<li>Sinov. Ular asosiy saytni yangilash, funksionalligi yoki dizaynini o'zgartirishda ishlatiladi. Subdomen bazani tashrif buyurish, buyurtma berish uchun ochiq qoldiradi, shu bilan birga ishlab chiquvchilar xotirjam ishlashlari mumkin, yangilangan dizayn tarmoq resursiga qanchalik mos kelishini, navigatsiya bilan bog‘liq muammolar bor-yo‘qligini, muayyan funksiyalar, yorliqlardan foydalanishni tekshiring.</li>
				</ul>
				<a name="4"></a>
				<h3>Subdomainlarga bo'lgan ehtiyoj</h3>
				<p>
				Subdomenlar asosan turli xil tovarlar va xizmatlarni taklif qiluvchi, mintaqaviy ofislarga ega bo'lgan va keng maqsadli auditoriya bilan o'zaro aloqada bo'lgan yirik tashkilotlar tomonidan qo'llaniladi. Mumkin bo'lgan funktsiyalarning har biri alohida ko'rib chiqilishi kerak. 
				</p>
				<a name="5"></a>
				<h3>Qidiruv tizimini reklama qilish</h3>
				<p>
				Yandex yoki Google uchun subdomain alohida resurs bo'lib, asosiy sayt uchun SEO samaradorligini oshiradi. Afzalliklari quyidagilardan iborat:
				</p>
				<ul>
				<li>Qidiruv natijalarida yuqori o'rinlarga erishish, hatto raqobatbardosh bo'shliqlarda ham. Yordamchi domenlardan foydalanish yuqori chastotali kalit iboralarni bir tekis taqsimlash, qidiruv robotlari uchun asosiy domenning koʻrinishini oshirish, jalb qilingan trafik hajmini oshirish, cheklovlarni chetlab oʻtish va bloklanish xavfini bartaraf etish imkonini beradi.</li>
				<li>Mintaqaviy reklama. Kompaniya vakili bo'lgan har bir shahar va mintaqa uchun subdomen saytning geografik joylashuvni hisobga olgan qidiruv robotlari bilan ishonchli o'zaro ta'sirini ta'minlaydi.</li>
				</ul>
				<a name="6"></a>
				<h3>navigatsiya qulayligini ta'minlash</h3>
				<p>
				Saytning har bir bo'limi, mahsulot toifasi uchun siz alohida subdomen yaratishingiz mumkin, bu foydalanuvchiga kerakli element yoki ma'lumotni topishni osonlashtiradi. Masalan, avtomobil reklamalari bo'lgan veb-saytda siz mototsikllar, maxsus jihozlar va yengil avtomobillarni o'z ichiga olgan segmentlarni ajratib ko'rsatishingiz mumkin. 
				</p>
				<a name="7"></a>
				<h3>Tarmoq resursini tezlashtirish</h3>
				<p>
				Asosiy sayt katta fayllar, masalan, videolar yoki yuqori aniqlikdagi fotosuratlar bilan haddan tashqari yuklangan bo'lsa, ta'sir eng aniq bo'ladi. Subdomenlardan foydalanib, siz ma'lumotni bir tekisda tarqatishingiz va sahifalar tezroq yuklanishi mumkin. Bu nafaqat tashrif buyuruvchilar, balki qidiruv tizimlari tomonidan ham qadrlanadi; qidiruv natijalaridagi pozitsiyalar yaxshilanadi, trafik va konversiya ortadi. 
				</p>
				<a name="8"></a>
				<h3>Asosiy saytni himoya qilish</h3>
				<p>
				Agar siz tarmoq resursini modernizatsiya qilishni, uning dizaynini o'zgartirishni yoki yangi funktsiyalarni qo'shishni rejalashtirmoqchi bo'lsangiz, bu ayniqsa dolzarbdir. Subdomain barcha testlar va tekshiruvlarni o'tkazish uchun eng yaxshi variantdir. Hech kim xatolardan himoyalanmaydi, lekin ular asosiy portalning funksionalligiga ta'sir qilmaydi, trafikni, konversiyani yoki qidiruv natijalari ro'yxatidagi pozitsiyalarni yomonlashtirmaydi. 
				</p>
				<a name="9"></a>
				<h3>Qanday qilib subdomen yaratiladi?</h3>
				<p>
				Subdomenlarning afzalliklarini 100% amalga oshirish, ularning funksionalligi, asosiy portalni ilgari surish samaradorligini ta'minlash uchun yaratishga mas'uliyat bilan yondashish zarur. Eng muhim talab - o'ziga xoslik, o'z dizaynining mavjudligi, mintaqaviy ma'lumotnomasi va semantik yadrosi. O'ziga xoslikni ta'minlash uchun siz bir nechta printsiplarga amal qilishingiz kerak:
				</p>
				<ul>
				<li>Har bir subdomen uchun noyob kontent yaratish;</li>
				<li>To'g'ri mintaqaviy bog'lanish;</li>
				<li>Asosiy sayt bilan oʻzaro bogʻlanishni yaratish;</li>
				<li>Google va Yandex tizimlarida veb-master huquqlarini tasdiqlash;</li>
				<li>Targ'ib qilishda o'z semantik yadroingiz va noyob kalit so'zlaringizdan foydalaning.</li>
				</ul>
				<p>
				Subdomain texnik tomondan yaxshi o'ylangan va xavfsiz bo'lishi kerak. Uni saqlab qolish uchun siz qo'shimcha mutaxassislar va ma'murlarni jalb qilishingiz, ma'lumotlarni dastlabki shifrlash, SSL sertifikatlari bilan uzatishni ta'minlaydigan xavfsiz HTTPS protokollaridan foydalanishingiz va jiddiy muammolarga olib kelishi mumkin bo'lgan zaifliklar va kichik nosozliklarni muntazam ravishda tekshirishingiz kerak. 
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<h3>
				What is a subdomain?
				</h3>
				<p>
				A subdomain is a domain that is part of a higher-level domain. In specialized literature, the definition of “subdomain” is also found; these terms are synonymous. What classes are they represented by? What are they used for?
				</p>
				<a name="2"></a>
				<h3>Analysis of the concept</h3>
				<p>
				The Internet is formed by many sites, network resources, and they are parts, segments that provide content structuring, ease of navigation, management and settings. For example, the main site is called “example.net”. It contains the most significant information characterizing the profile of the organization. The following subdomains can be created on this site:
				</p>
				<ul>
				<li>Forum.example.net – a section for a forum, user communication, discussion of issues related to the company, or third-party, thematic ones.</li>
				<li>Blog.example.net – a section for publishing interesting thematic articles, reviews, the authors of which can be both site administrators and registered users.</li>
				<li>Region.example.net – a section for a regional representative office of a large organization.</li>
				</ul>

				<a name="3"></a>
				<h3>Classification</h3>
				<p>
				The main classification feature for subdomains is their purpose. Experts distinguish the following main types:
				</p>
				<ul>
				<li>Service. Their purpose is to separate the functions of the main site. For example, the forum mentioned above. It is also permissible to allocate an online store, message board, blog, form for communication with the support service, administrators into a separate subdomain. The group of service subdomains also includes landing pages dedicated to a specific event, service, product, or structural division of the parent organization.</li>
				<li>Geographical. They are necessary if we are talking about a large-scale organization represented in different cities, regions, and countries. Separation simplifies the search, allows for a clearer structuring of offers, products, and contacts that are relevant exclusively in a certain geographic area. A national subdomain related to a specific country should have good localization so that visitors do not encounter translation difficulties.</li>
				<li>Mobile. They have not been used very often lately, which is explained by the development of adaptive design, however, some sites are still presented in separate mobile and desktop versions.</li>
				<li>Test. They are used when upgrading, changing the functionality or design of the main site. The subdomain leaves the base accessible for visiting, placing orders, while developers can work calmly, check how well the updated design suits the network resource, whether there are any problems with navigation, using certain functions, tabs.</li>
				</ul>
				<a name="4"></a>
				<h3>The need for subdomains</h3>
				<p>
				Subdomains are mainly used by large organizations offering various goods and services, having regional offices interacting with a wide target audience. Each of the possible functions should be considered separately.
				</p>
				<a name="5"></a>
				<h3>Search engine promotion</h3>
				<p>
				For Yandex or Google, a subdomain is a separate resource, which increases the effectiveness of SEO for the main site. The advantages are as follows:
				</p>
				<ul>
				<li>Achieving top positions in search results, even if we are talking about niches with high competition. Using auxiliary domains allows for a more even distribution of high-frequency key phrases, increases the visibility of the main domain for search robots, increases the volume of attracted traffic, bypasses restrictions, and eliminates the risk of being blocked.</li>
				<li>Regional promotion. A subdomain for each city or region where the company is represented ensures confident interaction of the site with search robots that take into account geographic location.</li>
				</ul>
				<a name="6"></a>
				<h3>Ensuring ease of navigation</h3>
				<p>
				For each section of the site, product category, you can create a separate subdomain, which will make it easier for the user to find the desired position, information. For example, on a site with car ads, you can highlight segments where motorcycles, special equipment, and cars are collected.
				</p>
				<a name="7"></a>
				<h3>Acceleration of the network resource</h3>
				<p>
				The effect is most pronounced if the main site is overloaded with large files, such as videos or high-resolution photos. With the help of subdomains, you can distribute information more evenly, pages load much faster. This will be appreciated not only by visitors, but also by search engines, positions in the search results will improve, traffic and conversion will increase.
				</p>
				<a name="8"></a>
				<h3>Maintaining the security of the main site</h3>
				<p>
				This is especially important if you plan to upgrade the network resource, change its design, add new functions. A subdomain is the best option for all tests and checks. No one is immune from errors, but they will not affect the functionality of the main portal, will not worsen traffic, conversion, positions in search results lists.
				</p>
				<a name="9"></a>
				<h3>How to create a subdomain?</h3>
				<p>
				In order to 100% realize the benefits of subdomains, ensure their functionality, efficiency in promoting the main portal, it is necessary to take a responsible approach to creation. The most important requirement is uniqueness, the presence of its own design, binding by region, semantic core. To ensure uniqueness, you need to follow several principles:
				</p>
				<ul>
				<li>Creating unique content for each subdomain;</li>
				<li>Correct regional binding;</li>
				<li>Creating cross-links with the main site;</li>
				<li>Confirming webmaster rights in Google and Yandex systems;</li>
				<li>Using your own semantic core and unique key queries when promoting.</li>
				</ul>
				<p>
				The subdomain must be well thought out from the technical side and be secure. To service it, you should involve additional specialists, administrators, use secure HTTPS protocols that ensure data transfer with preliminary encryption, SSL certificates, regularly conduct checks for vulnerabilities and minor failures that can lead to serious problems.
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
