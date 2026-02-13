import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Мониторинг VDS/VPS",
		uz: "VDS/VPS monitoringi",
		en: "VDS/VPS monitoring",
	},
	title: {
		ru: "Полный контроль над сервером — теперь прямо в биллинге Airnet",
		uz: "Serveringiz ustidan to'liq nazorat endi to'g'ridan-to'g'ri Airnet billing xizmatida mavjud.",
		en: "Full control over my server — now directly in Billing Airnet",
	},
	desc: {
		ru: "В биллинговой панели AIRNET появилась новая функция — мониторинг VDS/VPS в реальном времени",
		uz: "AIRNET hisob-kitob paneli endi yangi funksiyaga ega: real vaqt rejimida VDS/VPS monitoringi.",
		en: "The AIRNET billing panel now has a new feature: real-time VDS/VPS monitoring.",
	},
	date: "12.02.2026",
	updated: "12.02.2026",
	read: "3",
	view: "488",
	img: "/blog/live.png",
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
		{ title: {ru: "Доступно", uz: "Mavjud", en: "Available", slug: "1" }},
		{ title: {ru: "Позволяет", uz: "Ruxsat beradi", en: "Allow", slug: "1" }},
	],
	content: {
		ru: (
			<>	
				<p>Мы запустили встроенный мониторинг VDS/VPS, чтобы вы могли видеть реальную картину работы сервера без сторонних сервисов и сложных интеграций.</p>
				<p><strong>Теперь в несколько кликов доступны:</strong></p>
				<ul>
					<li>загрузка процессора</li>
					<li>потребление RAM</li>
					<li>сетевая активность</li>
					<li>характеристики виртуальной машины</li>
				</ul>
				<p><strong>Инструмент позволяет:</strong></p>
				<ul>
					<li>анализировать поведение нагрузки</li>
					<li>выявлять ресурсные ограничения</li>
					<li>планировать capacity</li>
					<li>повышать отказоустойчивость сервисов</li>
				</ul>
				<p>
					Новая функция поможет оперативно выявлять аномалии, планировать масштабирование ресурсов и принимать более точные технические решения. Это особенно важно для проектов с переменной нагрузкой, интернет-сервисов и бизнес-критичных приложений, где стабильность инфраструктуры играет ключевую роль.
				</p>
				<p>
					Мониторинг уже доступен всем клиентам AIRNET и не требует дополнительной настройки — достаточно открыть в биллинг панели вкладку "Заказы" справа от вашего сервера выбрать "Live monitor".
				</p>
				<p>
					Мы создаём платформу, где управление инфраструктурой становится максимально простым, предсказуемым и безопасным.
				</p>
			</>
		),
		uz: (
			<>
				<p>Biz o'rnatilgan VDS/VPS monitoringini ishga tushirdik, shunda siz serveringizning ishlashining haqiqiy manzarasini uchinchi tomon xizmatlari yoki murakkab integratsiyalarsiz ko'rishingiz mumkin.</p>
				<p><strong>Endi bir necha marta bosish bilan siz quyidagilarni amalga oshirishingiz mumkin:</strong></p>
				<ul>
				<li>CPU yuklanishi</li>
				<li>RAM sarfi</li>
				<li>Tarmoq faolligi</li>
				<li>Virtual mashina xususiyatlari</li>
				</ul>
				<p><strong>Asbob sizga quyidagilarni amalga oshirish imkonini beradi:</strong></p>
				<ul>
				<li>Yuklanish xatti-harakatlarini tahlil qilish</li>
				<li>Resurs cheklovlarini aniqlash</li>
				<li>Rejalashtirish hajmi</li>
				<li>Xizmat ko'rsatishning chidamliligini oshirish</li>
				</ul>
				<p>
				Ushbu yangi xususiyat sizga anomaliyalarni tezda aniqlashga, resurslarni masshtablashni rejalashtirishga va aniqroq texnik qarorlar qabul qilishga yordam beradi. Bu, ayniqsa, infratuzilma barqarorligi muhim bo'lgan o'zgaruvchan yuklamalarga ega loyihalar, internet xizmatlari va biznes uchun muhim ilovalar uchun juda muhimdir.
				</p>
				<p>
				Monitoring allaqachon barcha AIRNET mijozlari uchun mavjud va qo'shimcha konfiguratsiyani talab qilmaydi — shunchaki serveringizning o'ng tomonidagi billing panelidagi "Buyurtmalar" yorlig'ini oching va "Jonli monitor" ni tanlang.
				</p>
				<p>
				Biz infratuzilmani boshqarishni iloji boricha sodda, oldindan aytib bo'ladigan va xavfsiz qiladigan platforma yaratmoqdamiz.
				</p>
			</>
		),
		en: (
			<>
				<p>We've launched built-in VDS/VPS monitoring so you can see the real picture of your server's performance without third-party services or complex integrations.</p>
				<p><strong>Now, with just a few clicks, you can:</strong></p>
				<ul>
				<li>CPU load</li>
				<li>RAM consumption</li>
				<li>Network activity</li>
				<li>Virtual machine characteristics</li>
				</ul>
				<p><strong>The tool allows you to:</strong></p>
				<ul>
				<li>Analyze load behavior</li>
				<li>Identify resource limitations</li>
				<li>Plan capacity</li>
				<li>Improve service resiliency</li>
				</ul>
				<p>
				This new feature will help you quickly identify anomalies, plan resource scaling, and make more accurate technical decisions. This is especially important for projects with variable loads, internet services, and business-critical applications, where infrastructure stability is key.
				</p>
				<p>
				Monitoring is already available to all AIRNET clients and requires no additional configuration—just open the "Orders" tab in the billing panel to the right of your server and select "Live Monitor."
				</p>
				<p>
				We are creating a platform that makes infrastructure management as simple, predictable, and secure as possible.
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
