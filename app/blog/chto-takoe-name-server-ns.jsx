import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
		uz: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
		en: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
	},
	title: {
		ru: "Name-серверы (NS): роль и значение в DNS-системе",
		uz: "Name-серверы (NS): роль и значение в DNS-системе",
		en: "Name-серверы (NS): роль и значение в DNS-системе",
	},
	desc: {
		ru: "Разберемся, что такое name-серверы, их функции в системе доменных имен и почему они важны для работы сайтов.",
		uz: "Разберемся, что такое name-серверы, их функции в системе доменных имен и почему они важны для работы сайтов.",
		en: "Разберемся, что такое name-серверы, их функции в системе доменных имен и почему они важны для работы сайтов.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "15",
	view: "74",
	img: "/blog/ns.png",
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
		{ title: {ru: "Name-серверы: что это?", uz: "Name-серверы: что это?", en: "Name-серверы: что это?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Общее понятие", en: "Общее понятие", slug: "2" }},
		{ title: {ru: "Основные функции", uz: "Основные функции", en: "Основные функции", slug: "3" }},
		{ title: {ru: "Классификация серверов", uz: "Классификация серверов", en: "Классификация серверов", slug: "4" }},
		{ title: {ru: "Что такое дочерние NS-серверы?", uz: "Что такое дочерние NS-серверы?", en: "Что такое дочерние NS-серверы?", slug: "5" }},
		{ title: {ru: "Настройки NS-сервера", uz: "Настройки NS-сервера", en: "Настройки NS-сервера", slug: "6" }},
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
