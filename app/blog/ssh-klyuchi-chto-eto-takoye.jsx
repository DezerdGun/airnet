import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "SSH-ключи: что это такое",
		uz: "SSH-ключи: что это такое",
		en: "SSH-ключи: что это такое",
	},
	title: {
		ru: "SSH-ключи: что это такое и как они работают?",
		uz: "SSH-ключи: что это такое и как они работают?",
		en: "SSH-ключи: что это такое и как они работают?",
	},
	desc: {
		ru: "SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️ Узнайте, как работают SSH-ключи, их преимущества и настройка.",
		uz: "SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️ Узнайте, как работают SSH-ключи, их преимущества и настройка.",
		en: "SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️ Узнайте, как работают SSH-ключи, их преимущества и настройка.",
	},
	date: "11.10.2024",
	updated: "11.10.2024",
	read: "3",
	view: "18",
	img: "/blog/ssh.jpg",
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
		{ title: {ru: "SSH-ключ: что это?", uz: "SSH-ключ: что это?", en: "SSH-ключ: что это?", slug: "1" }},
		{ title: {ru: "Чем плоха авторизация по паролю?", uz: "Чем плоха авторизация по паролю?", en: "Чем плоха авторизация по паролю?", slug: "2" }},
		{ title: {ru: "SSH: что это?", uz: "SSH: что это?", en: "SSH: что это?", slug: "3" }},
		{ title: {ru: "Преимущества ключей", uz: "Преимущества ключей", en: "Преимущества ключей", slug: "4" }},
		{ title: {ru: "Рекомендации по хранению", uz: "Рекомендации по хранению", en: "Рекомендации по хранению", slug: "5" }},
		{ title: {ru: "Генерация ключей", uz: "Генерация ключей", en: "Генерация ключей", slug: "6" }},
		{ title: {ru: "Подведение итогов", uz: "Подведение итогов", en: "Подведение итогов", slug: "7" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<h3>
					SSH-ключ: что это?
				</h3>
				<p>
					Классический способ авторизации в социальной сети, учетной записи электронной почты, интернет-магазине или на другом сетевом ресурсе – ввод имени пользователя и пароля. Это простой и удобный метод, однако, его нельзя назвать на 100% безопасным. Более надежная альтернатива – SSH-ключ. Когда его стоит использовать? Каковы основные преимущества?
				</p>
				<a name="2"></a>
				<h3>Чем плоха авторизация по паролю?</h3>
				<p>
					Комбинация из имени пользователя и пароля – наиболее популярный метод авторизации. Популярность, впрочем, не исключает некоторых серьезных недостатков:
				</p>
				<ul>
					<li>Возможность подбора. Пароль – это сочетание буквенных, цифровых, графических символов. Даже если это совершенно случайная комбинация, не являющаяся ни словом, ни датой, ее можно подобрать как вручную, так и при помощи специального программного обеспечения.</li>
					<li>Сложность запоминания. Хранить в памяти пароль, основа которого – название любимой футбольной команды или значимая дата, просто, однако, и мошеннику будет несложно раскрыть его. Случайные наборы из нескольких цифр и букв разного регистра куда надежнее, но возникает проблема с запоминанием. Комбинация может попросту вылететь из головы, придется проходить сложную процедуру восстановления.</li>
					<li>Возможность кражи. Данные могут быть перехвачены при небезопасном соединении, а то и подсмотрены, если человек выполняет вход, находясь в общественном месте, интернет-кафе или клубе.</li>
				</ul>
				
				<a name="3"></a>
				<h3>SSH: что это?</h3>
				<p>
					SSH – специальный протокол связи, поддерживающий алгоритмы шифрования, за счет которых достигается высокий уровень безопасности при передаче информации. Активация сеанса связи возможна при помощи ввода пароля, однако, гораздо надежнее использовать для этого SSH-ключ, состоящий из сотен символов, что обеспечивает высочайший уровень безопасности.
				</p>
				<p>
					Успешное прохождение авторизации предполагает наличие двух SSH-ключей:
				</p>
				<ul>
					<li>Открытый. Он находится в общем доступе, применяется для шифрования информации при взаимодействии с сервером или сетевым ресурсом. Его можно сравнить с замком, установленным на двери. Перехват этого ключа бесполезен для злоумышленников, “вскрытие” возможно только при наличии второго – приватного.</li>
					<li>Приватный. Если открытый SSH-ключ – это замок, то приватный – это непосредственно ключ. Его основная функция – расшифровка передаваемой информации. Конечно, он требует более бережного и внимательного отношения, в сравнении с открытым, передача третьем лицам недопустима.</li>
				</ul>
				<p>
					Создание ключей происходит автоматически, по алгоритмам, исключающим возможность раскрытие одного ключа даже при известности второго. Такая схема обеспечивает максимальную безопасность обмена данными при использовании протоколов SSH.
				</p>
				<a name="4"></a>
				<h3>Преимущества ключей</h3>
				<p>
					Главные достоинства SSH-ключей выглядят следующим образом:
				</p>
				<ul>
					<li>Невозможность расшифровки подбором. Стандартный пароль редко состоит больше, чем из 10 символов, SSH – из сотен, так что даже использование специальных программ, перебирающих возможные комбинации, не позволит злоумышленнику добиться результата.</li>
					<li>Недоступность закрытого SSH-ключа из внешней сети. Он используется исключительно в момент идентификации.</li>
					<li>Отсутствие потребности в ротации. Одна из рекомендаций по обеспечению сетевой безопасности – периодическая смена пароля. Для SSH это неактуально.</li>
					<li>Автоматизация авторизации. SSH базируется на аутентификации без ручного ввода пароля, так что процесс можно автоматизировать, что особенно актуально для удаленных систем.</li>
					<li>Возможность отслеживания пользовательской активности. Ключ SSH привязывается к определенному пользователю, так что администратор видит, какие именно действия совершались им после прохождения авторизации. Это полезная функция для предприятий, где сетевой безопасности уделяется максимальное внимание.</li>
				</ul>
				<a name="5"></a>
				<h3>Рекомендации по хранению</h3>
				<p>
					Как было отмечено выше, приватный SSH-ключ нужно оберегать, исключить даже минимальную возможность его попадания к третьим лицам. Важнейший момент – организация хранения, для чего допустимо использование следующего:
				</p>
				<ul>
					<li>Внешние носители информации, твердотельные накопители, флеш-карты. Конечно, устройство при таком подходе должно лежать в защищенном месте, сейфе или ящике стола, запирающемся на замок.</li>
					<li>Облачные хранилища и виртуальные диски. Удобный и достаточно безопасный вариант. Конечно, существует вероятность, что злоумышленники смогут добраться до информации в облаке, но им неизвестно, для чего использовать конкретный ключ SSH.</li>
					<li>Менеджеры паролей с расширенным функционалом, позволяющим организовать хранение. Предпочтение следует отдавать проверенным программам от авторитетных разработчиков.</li>
				</ul>
				<a name="6"></a>
				<h3>Генерация ключей</h3>
				<p>
					Для создания SSH-ключей на ОС Linux или Mac необходимо воспользоваться командной строкой или терминалом, операционных системах Windows – сторонним программным обеспечением, например, OpenSSH или подобным, в зависимости от версии.
				</p>
				<p>
					Алгоритм действий при генерации SSH-ключей при помощи терминала выглядит следующим образом:
				</p>
				<ul>
					<li>Открытие командной строки;</li>
					<li>Ввод команды “ssh-keygen”;</li>
					<li>Нажатие клавиши “Enter”. При такой схеме файл сохраняется в папке по умолчанию, но, при необходимости, ее можно изменить.</li>
				</ul>
				<p>
					В процессе создания SSH-ключей дополнительно можно задать кодовое слово, обеспечивающее более высокий уровень защиты соединения. При передаче не самой важной информации, которая вряд ли заинтересует злоумышленников, этот шаг можно пропустить.
				</p>
				<p>
					При использовании стороннего программного обеспечения на операционных системах Windows, нужно руководствоваться интерфейсом конкретного приложения. 
				</p>
				<a name="7"></a>
				<h3>Подведение итогов</h3>
				<p>
					SSH-ключ – один из наиболее надежных способов авторизации, обеспечивающий уровень безопасности, недоступный стандартным паролям. Протокол передачи данных SSH гарантирует, что они находятся в зашифрованной форме, а потому даже их перехват оказывается бесполезным для злоумышленников.
				</p>
				<p>
					При высоком уровне безопасности, SSH-ключи более удобны в использовании, в сравнении с паролями, помогают автоматизировать процессы авторизации.
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
