import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "SFTP протокол: безопасный способ передачи файлов",
		uz: "SFTP протокол: безопасный способ передачи файлов",
		en: "SFTP протокол: безопасный способ передачи файлов",
	},
	title: {
		ru: "Протокол SFTP: безопасная передача файлов через SSH",
		uz: "Протокол SFTP: безопасная передача файлов через SSH",
		en: "Протокол SFTP: безопасная передача файлов через SSH",
	},
	desc: {
		ru: "Разберемся, что такое протокол SFTP, его преимущества перед FTP и как он обеспечивает безопасность при передаче данных.",
		uz: "Разберемся, что такое протокол SFTP, его преимущества перед FTP и как он обеспечивает безопасность при передаче данных.",
		en: "Разберемся, что такое протокол SFTP, его преимущества перед FTP и как он обеспечивает безопасность при передаче данных.",
	},
	date: "14.12.2024",
	updated: "14.12.2024",
	read: "10",
	view: "28",
	img: "/blog/sftp.png",
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
		{ title: {ru: "Протокол SFTP: что это?", uz: "Протокол SFTP: что это?", en: "Протокол SFTP: что это?", slug: "1" }},
		{ title: {ru: "Немного истории", uz: "Немного истории", en: "Немного истории", slug: "2" }},
		{ title: {ru: "Общее понятие", uz: "Общее понятие", en: "Общее понятие", slug: "3" }},
		{ title: {ru: "Кому он необходим?", uz: "Кому он необходим?", en: "Кому он необходим?", slug: "4" }},
		{ title: {ru: "Преимущества", uz: "Преимущества", en: "Преимущества", slug: "5" }},
		{ title: {ru: "Как настроить соединение?", uz: "Как настроить соединение?", en: "Как настроить соединение?", slug: "6" }},
		{ title: {ru: "SFTP-клиенты", uz: "SFTP-клиенты", en: "SFTP-клиенты", slug: "7" }},
		{ title: {ru: "FileZilla", uz: "FileZilla", en: "FileZilla", slug: "8" }},
		{ title: {ru: "WinSCP", uz: "WinSCP", en: "WinSCP", slug: "9" }},
		{ title: {ru: "Cyberduck", uz: "Cyberduck", en: "Cyberduck", slug: "10" }},
		{ title: {ru: "Transmit", uz: "Transmit", en: "Transmit", slug: "11" }},
		{ title: {ru: "Подведение итогов", uz: "Подведение итогов", en: "Подведение итогов", slug: "12" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					Протокол SFTP: что это?
				</h3>
				<p>
					Интернет – среда, основное предназначение которой – передача информации. Она может быть как развлекательной, так и личной, коммерческой, конфиденциальной, попадание которой к третьим лицам недопустимо, чревато серьезными денежными, репутационными потерями.
				</p>
				<p>
					Исключить такую ситуацию можно, используя особые протоколы передачи данных, поддерживающие технологии шифрования, обеспечивающую защиту от перехвата, кражи, намеренного повреждения и искажения. Характерный пример – протокол SFTP. В чем его особенности? Каковы преимущества и отличия от альтернатив?
				</p>
				<a name="2"></a>
				<h3>Немного истории</h3>
				<p>
					Предшественник протокола SFTP – FTP, история которого начинается в 1971 году. Со своей основной задачей, передачей информации, он справлялся успешно, однако, обмен велся в открытой форме, при перехвате все данные оказывались сразу видны злоумышленнику, расшифровка не требовалась.
				</p>
				<p>
					Интернет развивался, количество пользователей росло по экспоненте, базовый набор функций – расширялся, активно охватывалась коммерческая сфера, предполагающая взаимодействие с конфиденциальными данными, банковскими реквизитами. Конечно, передача таких сведений по незащищенному каналу могла обернуться катастрофическими последствиями.
				</p>
				<p>
					Решить проблему удалось комбинированием протокола FTP и SSL, поддерживающего алгоритмы шифрования. Для обозначения новой разработки стали использовать аббревиатуру FTPS, а чуть позже возникла и ее модифицированная версия, SFTP.
				</p>
				<a name="3"></a>
				<h3>Общее понятие</h3>
				<p>
					Расшифровка аббревиатуры SFTP – “Secure File Transfer Protocol”. Технология обеспечивает быстрый, безопасный, обмен данными, позволяет уверенно взаимодействовать как с большими, так и с малыми их объемами. Важнейшее достоинство протокола – обеспечение защиты на всех стадиях передачи, что не оставляет шансов злоумышленникам.
				</p>
				<p>
					Для использования SFTP нужно предварительно установить соответствующий клиент, в котором присутствуют все функции, от удаления информации до их перемещения между директориями, физическими, виртуальными устройствами.
				</p>
				<img src="/blog/sftp1.png" alt="SFTP" />
				<p>
					Схему передачи можно представить следующим образом:
				</p>
				<ul>
					<li>Подключение. Пользовательский компьютер устанавливает связь с сервером.</li>
					<li>Авторизация. Проверяется подлинность учетной записи, при необходимости – вводится пароль, начинается полноценный сеанс связи.</li>
					<li>Передача. Файлы отправляются с сервера на компьютер, либо в обратном направлении. В процессе они шифруются, что и гарантирует безопасность. Алгоритм шифрования, установленный по умолчанию – RSA, при необходимости – его можно изменить.</li>
					<li>Окончание сеанса. Ранее задействованные ресурсы при этом высвобождаются.</li>
				</ul>
				<a name="4"></a>
				<h3>Кому он необходим?</h3>
				<p>
					Протоколом SFTP активно пользуются следующие ведомства, организации, структуры:
				</p>
				<ul>
					<li>Крупные предприятия. Смысл – защищенная передача данными между подразделениями, представительствами, в том числе расположенными в разных городах и государствах.</li>
					<li>Веб-хостинги. SFTP помогает безопасно разместить на сервере сайт, приложение, программу, независимо от аппаратных требований, специфики и масштаба.</li>
					<li>Банки, финансовые предприятия. Протокол позволяет без лишних рисков передавать личные данные клиентов, реквизиты счетов.</li>
					<li>Компании, специализирующиеся на разработке программного обеспечения, независимо от специфики. SFTP хорошо подходит для быстрого трансфера крупных файлов, составляющих основу исходного кода.</li>
				</ul>
				<img src="/blog/sftp2.png" alt="SFTP" />
				<a name="5"></a>
				<h3>Преимущества</h3>
				<p>
					Если сравнить SFTP с предшественником, FTP, то становятся очевидными его следующие сильные стороны:
				</p>
				<ul>
					<li>Максимальный уровень защиты информации. Современный протокол шифрует всю сессию. Даже если злоумышленникам удастся перехватить данные, никакой выгоды они из этого не извлекут, не смогут раскодировать их.</li>
					<li>Надежность авторизации. В SFTP применяются публичные ключи, помогающие системе четко распознать пользователя. Риск несанкционированного доступа минимален, равно как и компрометации, намеренного изменения информации.</li>
					<li>Сохранение целостности информации. Алгоритмы SFTP следят, чтобы все пакеты сохраняли целостность, их передача не была сопряжена с ошибками и сбоями, они достигли адресата в неизменном виде, могли быть точно идентифицированы.</li>
					<li>Удобство применения. Интерфейс большинства программ, позволяющих задействовать SFTP, интуитивно понятен, задействовать все функции, наладить эффективный обмен данными смогут даже пользователи, у которых не было похожего опытом, обладающие минимальной компьютерной грамотностью.</li>
					<li>Универсальность. SFTP подходит для всех популярных операционных сред, может неограниченно использоваться на Microsoft Windows, MacOS, Linux-подобных системах.</li>
				</ul>
				<p>
					Недостатков у протокола, по сути, нет. Он несколько сложнее в настройке, в сравнении с FTP, требует больших аппаратных мощностей, так как осуществляет не просто передачу, но шифрование информации, но эти минусы с лихвой компенсируются безопасностью и другими достоинствами, недоступными предшественнику.
				</p>
				<a name="6"></a>
				<h3>Как настроить соединение?</h3>
				<p>
					Чтобы оценить все достоинства протокола SFTP, необходимо правильно настроить соединение. Ответственный подход гарантирует, что информация окажется надежно защищена, в сеанс связи не смогут вмешаться посторонние. Алгоритм настройки выглядит следующим образом:
				</p>
				<ul>
					<li>Установка и настройка сервера, который будет задействован в обработке запросов SFTP. Нужно определиться с оптимальной программой, поддерживающей защищенный протокол, настроить брандмауэр для порта, через который пойдет информация, протестировать систему, чтобы зафиксировать и устранить недочеты.</li>
					<li>Создание учетных записей. Для каждой учетной записи должны быть прописаны данные, с которыми возможно взаимодействие, права и ограничения доступа.</li>
					<li>Подбор метода аутентификации. Лучший вариант для SFTP – аутентификация по SSH-ключам. Она подразумевает контроль двух уровней подлинности, благодаря чему максимально безопасна.</li>
					<li>Настройка программного обеспечения на компьютере пользователя. Нужно указать IP-адрес задействованного сервера, порт, через который пойдет информация, аутентификационные данные, будь то ключи SSH или персональные пароли, имена для каждого из пользователей.</li>
					<li>Проверка стабильности связи. Нужно выполнить тестовое подключение через клиентскую программу, убедиться, что все права и полномочия пользователей выставлены корректно, информация передается без потерь, на хорошей скорости.</li>
				</ul>
				<a name="7"></a>
				<h3>SFTP-клиенты</h3>
				<p>
					Наладить работу SFTP можно как через функционал операционной системы, так и через сторонние приложения. Второй вариант считается более удобным, понятным большинству пользователей, предлагающим максимум функций и возможностей. Следует подробнее рассмотреть несколько популярных приложений.
				</p>
				<img src="/blog/sftp3.png" alt="SFTP" />
				<a name="8"></a>
				<h3>FileZilla</h3>
				<p>
					Универсальная программа, совместимая со всеми операционными системами. Настройка SFTP интуитивно понятна, слева можно увидеть локальное устройство, слева – удаленное. Копирование данных инициируется простым переносом между половинами экрана. 
				</p>
				<a name="9"></a>
				<h3>WinSCP</h3>
				<p>
					Разработка, предназначенная для ОС от Microsoft. Взаимодействие с файлами также построено на структуре с парой окон, можно настроить автоматическую работу по скриптам, уровень защиты соответствует даже наиболее жестким требованиям.
				</p>
				<a name="10"></a>
				<h3>Cyberduck</h3>
				<p>
					Приложение, помогающее эффективно использовать SFTP в Microsoft Windows и MacOS. Фирменное преимущество – синхронизация с облачными сервисами, упрощающая перенос информации.
				</p>
				<img src="/blog/sftp4.png" alt="SFTP" />
				<a name="11"></a>
				<h3>Transmit</h3>
				<p>
					Специальная программа для пользователей MacOS. Функциональность и безопасность – на самых высоких уровнях, доступно взаимодействие с крупными информационными массивами, интерфейсы просты и понятны.
				</p>
				<a name="12"></a>
				<h3>Подведение итогов</h3>
				<p>
					SFTP уверенно находится в лидирующей группе протоколов, позволяющих обмениваться информацией не только быстро, но и безопасно. Задействовать и настроить его можно как при помощи встроенных в операционную систему инструментов, так и через сторонние сервисы. Главное – уделять должное внимание базовым мерам предосторожности, своевременно обновлять программное обеспечение.
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
