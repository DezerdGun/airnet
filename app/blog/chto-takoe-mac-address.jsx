import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "MAC-адрес: что это и зачем он нужен?",
		uz: "MAC-адрес: что это и зачем он нужен?",
		en: "MAC-адрес: что это и зачем он нужен?",
	},
	title: {
		ru: "MAC-адрес: уникальный идентификатор сетевого устройства",
		uz: "MAC-адрес: уникальный идентификатор сетевого устройства",
		en: "MAC-адрес: уникальный идентификатор сетевого устройства",
	},
	desc: {
		ru: "Узнайте, что такое MAC-адрес, его структуру, назначение и роль в сетевых коммуникациях.",
		uz: "Узнайте, что такое MAC-адрес, его структуру, назначение и роль в сетевых коммуникациях.",
		en: "Узнайте, что такое MAC-адрес, его структуру, назначение и роль в сетевых коммуникациях.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "8",
	view: "24",
	img: "/blog/mac.png",
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
		{ title: {ru: "MAC-адрес: что это?", uz: "MAC-адрес: что это?", en: "MAC-адрес: что это?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Общее понятие", en: "Общее понятие", slug: "2" }},
		{ title: {ru: "Разбор структуры", uz: "Разбор структуры", en: "Разбор структуры", slug: "3" }},
		{ title: {ru: "Классификация", uz: "Классификация", en: "Классификация", slug: "4" }},
		{ title: {ru: "Функции ", uz: "Функции ", en: "Функции ", slug: "5" }},
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
