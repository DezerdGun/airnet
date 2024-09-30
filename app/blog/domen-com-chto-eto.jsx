import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Домен .COM — что это?",
		uz: "Домен .COM — что это?",
		en: "Домен .COM — что это?",
	},
	title: {
		ru: "Домен .COM — что это такое, особенности и преимущества",
		uz: ".COM domeni - bu nima, xususiyatlari va afzalliklari",
		en: "Domain .COM - what is it, features and advantages",
	},
	desc: {
		ru: "COM — домен верхнего уровня для коммерческих организаций. Узнайте, что означает доменная зона COM, каковы ее преимущества и недостатки ✅ История появления и назначение домена.",
		uz: "COM - tijorat tashkilotlari uchun yuqori darajadagi domen. COM domen zonasi nimani anglatishini, uning afzalliklari va kamchiliklarini bilib oling ✅ Domenning paydo bo'lish tarixi va maqsadi.",
		en: "COM is a top-level domain for commercial organizations. Find out what the COM domain zone means, what are its advantages and disadvantages ✅ History of the emergence and purpose of the domain.",
	},
	date: "30.09.2024",
	updated: "30.09.2024",
	read: "2",
	view: "10",
	img: "/blog/com.jpg",
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
		{ title: {ru: "Происхождение названия", uz: "Происхождение названия", en: "Происхождение названия", slug: "1" }},
		{ title: {ru: "Немного истории", uz: "Немного истории", en: "Немного истории", slug: "2" }},
		{ title: {ru: "Кому подойдет доменная зона com?", uz: "Кому подойдет доменная зона com?", en: "Кому подойдет доменная зона com?", slug: "3" }},
		{ title: {ru: "Достоинства и недостатки", uz: "Достоинства и недостатки", en: "Достоинства и недостатки", slug: "4" }},
		{ title: {ru: "Подведение итогов", uz: "Подведение итогов", en: "Подведение итогов", slug: "5" }},
	],
	content: {
		ru: (
			<>
				<p>
					Com – одна из наиболее узнаваемых интернет-пользователями доменных зон. Ее исходным назначением была регистрация предприятий коммерческой направленности, однако, в середине 90-х данное ограничение потеряло актуальность, зоной стали пользоваться организации, частные предприниматели, физические лица для размещения любых сайтов, независимо от специфики и типа.
				</p>
				<p>
					В указанной доменной зоне встречаются как крупные новостные порталы, интернет-магазины с десятками тысяч товарных наименований, так и частные блоги. Популярность объясняется открытостью регистрационной процедуры, отсутствием привязки по региону. Согласно статистике, общее количество зарегистрированных сетевых ресурсов уверенно перевалило за полторы сотни миллионов, причем большинство – работающие.
				</p>
				<a name="1"></a>
				<h3>Происхождение названия</h3>
				<p>
					Com – это сокращенный вариант написания английского слова “commercial”. Подобный выбор нельзя назвать удивительным: как уже было сказано выше, изначально зону использовали сугубо для сайтов коммерческой направленности. Существует также другой вариант расшифровки – “common”, “общий”, однако, он является ошибочным. Сокращенный термин для обозначения зоны – “dotcom”, используется он как простыми интернет-пользователями, так и специалистами.
				</p>
				<a name="2"></a>
				<h3>Немного истории</h3>
				<p>
					Появление домена com датировано 1985 годом, он оказался в числе первых, принадлежащих к верхнему уровню. Подобно многим другим зонам, первое время он находился под контролем американского Министерства обороны, однако, в 1991 – был передан компании GSI.
				</p>
				<p>
					Доменная зона оказалась востребованной, в первую очередь, у гражданских предприятий, в 1993 – оказалась под управлением Национального научного фонда. Именно по его инициативе была установлена 50-долларовая плата за регистрацию и обслуживание.
				</p>
				<p>
					Первой организацией, успешно прошедшей регистрацию в com, стала Symbolic Incorporated, специализация которой – выпуск компьютерного, электронного оборудования, разработка программного обеспечения. Сейчас данный сетевой ресурс находится в частных руках, его покупка невозможна.
				</p>
				<p>
					Непосредственно после появления доменная зона не пользовалась особо высоким спросом. В течение двух лет была зарегистрирована буквально сотня сайтов, однако, к 1995 – количество выросло до 18 тысяч, к 2011 – до 100 миллионов, к 2021 – до 150, активное увеличение продолжается и в настоящее время.
				</p>
				<a name="3"></a>
				<h3>Кому подойдет доменная зона com?</h3>
				<p>
					Ограничения, действующие в зоне до середины 90-х годов минувшего столетия, потеряли актуальность. Сейчас здесь встречаются следующие сайты:
				</p>
				<ul>
					<li>Коммерческие, представляющие предприятия производственной, финансовой и других областей;</li>
					<li>Новостные площадки, порталы информационной направленности, от огромных государственных, региональных и городских до частных блогов;</li>
					<li>Интернет-магазины, прочие платформы, предназначенные для продажи товаров, предложения различных услуг;</li>
					<li>Развлекательные площадки, стриминги аудио и видео;</li>
					<li>Соцсети;</li>
					<li>Сетевые представительства крупных радиостанций, телекомпаний, на которых налажено интернет-вещание.</li>
				</ul>
				<a name="4"></a>
				<h3>Достоинства и недостатки</h3>
				<p>
					Главные преимущества доменной зоны выглядят следующим образом:
				</p>
				<ul>
					<li>Открытость регистрационной процедуры. Ограничения в зоне отсутствуют, покупка домена доступна организациям, зарегистрированных в форме юридических лиц, индивидуальным предпринимателям, частным лицам, при этом коммерческая специфика работы необязательна.</li>
					<li>Повышение доверия к сайту. Com относится к категории наиболее известных, авторитетных зон, так что сетевой ресурс, зарегистрированный в ней, воспринимается пользователями как надежный, заслуживающий доверия. Это увеличивает конверсию и посещаемость, причем на всех этапах существования сайта, даже молодая компания, зарегистрированная в com, может рассчитывать на коммерческий успех.</li>
					<li>Универсальность. Доменную зону можно использовать для любых сайтов, независимо от масштаба и направленности, от посадочной страницы и небольшого блога до огромного интернет-магазина. Специфика сетевого ресурса не сказывается на качестве техподдержки, условиях, необходимых для успешного прохождения регистрации.</li>
					<li>Отсутствие географической привязки. Com исключает ассоциации с конкретным государством, что зачастую смущает пользователя, ограничивает целевую аудиторию. Например, жители стран СНГ зачастую избегают делать заказы на сайтах ru-сегмента, полагая, что они работают исключительно с россиянами. Com указывает на международный статус сетевого ресурса, позволяет избежать подобной проблемы.</li>
				</ul>
				<p>
					К числу недостатков зоны можно отнести стоимость регистрации. Для национальных сегментов она составляет, как правило, несколько сотен рублей, для com – вдвое, иногда – втрое выше. Этот минус в достаточной степени условный, даже при такой разнице речь идет о небольших суммах. Второй момент – ограниченность доступных имен. Например, с 2000 года невозможно подобрать трехзначное имя, с 2007 – четырехзначное, из-за популярности доменной зоны они попросту закончились. Впрочем, если немного поразмышлять, то удастся подыскать запоминающееся имя.
				</p>
				<a name="5"></a>
				<h3>Подведение итогов</h3>
				<p>
					Количество сильных сторон com уверенно перевешивает число недостатков. Плата за регистрацию на 100% компенсируется повышением доверия к сайту, ростом посещаемости и конверсии, стабильностью функционирования, комплексной технической поддержкой.
				</p>
				<p>
					При возникновении желания зарегистрироваться в указанной зоне, не стоит тянуть с его реализацией – количество свободных имен сокращается!
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
