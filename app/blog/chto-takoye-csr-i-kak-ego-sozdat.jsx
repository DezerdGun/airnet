import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Что такое CSR и как его создать?",
		uz: "Что такое CSR и как его создать?",
		en: "Что такое CSR и как его создать?",
	},
	title: {
		ru: "Что такое CSR и как его создать?",
		uz: "Что такое CSR и как его создать?",
		en: "Что такое CSR и как его создать?",
	},
	desc: {
		ru: "Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов, и как его правильно создать. Пошаговая инструкция и практические рекомендации.",
		uz: "Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов, и как его правильно создать. Пошаговая инструкция и практические рекомендации.",
		en: "Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов, и как его правильно создать. Пошаговая инструкция и практические рекомендации.",
	},
	date: "14.03.2025",
	updated: "14.03.2025",
	read: "10",
	view: "14",
	img: "/blog/csr.jpg",
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
		{ title: {ru: "Что такое CSR и как его создать?", uz: "Что такое CSR и как его создать?", en: "Что такое CSR и как его создать?", slug: "1" }},
		{ title: {ru: "Общее понятие", uz: "Общее понятие", en: "Общее понятие", slug: "2" }},
		{ title: {ru: "Структура CSR", uz: "Структура CSR", en: "Структура CSR", slug: "3" }},
		{ title: {ru: "Как подписать сертификат?", uz: "Как подписать сертификат?", en: "Как подписать сертификат?", slug: "4" }},
		{ title: {ru: "Создание CSL-запроса: способы и инструкции", uz: "Создание CSL-запроса: способы и инструкции", en: "Создание CSL-запроса: способы и инструкции", slug: "5" }},
		{ title: {ru: "Создание приватного ключа", uz: "Создание приватного ключа", en: "Создание приватного ключа", slug: "6" }},
		{ title: {ru: "Подготовка запроса", uz: "Подготовка запроса", en: "Подготовка запроса", slug: "7" }},
		{ title: {ru: "Указание информации", uz: "Указание информации", en: "Указание информации", slug: "8" }},
		{ title: {ru: "Что нужно учитывать?", uz: "Что нужно учитывать?", en: "Что нужно учитывать?", slug: "9" }},
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
