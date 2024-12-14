import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "IPv6: будущее интернет-адресации",
		uz: "IPv6: будущее интернет-адресации",
		en: "IPv6: будущее интернет-адресации",
	},
	title: {
		ru: "IPv6: новое поколение интернет-протокола",
		uz: "IPv6: новое поколение интернет-протокола",
		en: "IPv6: новое поколение интернет-протокола",
	},
	desc: {
		ru: "Подробное объяснение протокола IPv6, его отличий от IPv4, преимуществ и необходимости перехода на новую версию.",
		uz: "Подробное объяснение протокола IPv6, его отличий от IPv4, преимуществ и необходимости перехода на новую версию.",
		en: "Подробное объяснение протокола IPv6, его отличий от IPv4, преимуществ и необходимости перехода на новую версию.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "7",
	view: "15",
	img: "/blog/ipv6.png",
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
		{ title: {ru: "Протокол IPv6: что это?", uz: "Протокол IPv6: что это?", en: "Протокол IPv6: что это?", slug: "1" }},
		{ title: {ru: "Причины появления", uz: "Причины появления", en: "Причины появления", slug: "2" }},
		{ title: {ru: "Написание", uz: "Написание", en: "Написание", slug: "3" }},
		{ title: {ru: "Структура заголовка", uz: "Структура заголовка", en: "Структура заголовка", slug: "4" }},
		{ title: {ru: "Классификация адресов", uz: "Классификация адресов", en: "Классификация адресов", slug: "5" }},
		{ title: {ru: "Преимущества", uz: "Преимущества", en: "Преимущества", slug: "6" }},
		{ title: {ru: "Проблемы и решения", uz: "Проблемы и решения", en: "Проблемы и решения", slug: "7" }},
		{ title: {ru: "Подведение итогов", uz: "Подведение итогов", en: "Подведение итогов", slug: "8" }},
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
