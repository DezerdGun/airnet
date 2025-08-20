import BlogItem from "@/components/blogItem"
import Blogslider from "@/components/blogslider";
import { breadCrumbsBlog } from "@/app/blog";

const data = {
	headTitle: {
		ru: "Пошаговая настройка VPS на Ubuntu 22.04 для сайта",
		uz: "Veb-sayt uchun Ubuntu 22.04 da VPS-ni bosqichma-bosqich sozlash",
		en: "Step-by-step setup of VPS on Ubuntu 22.04 for a website",
	},
	title: {
		ru: "Настройка VPS на Ubuntu 22.04: Полная инструкция для новичков",
		uz: "Ubuntu 22.04 da VPS o'rnatish: Yangi boshlanuvchilar uchun to'liq qo'llanma",
		en: "Setting Up a VPS on Ubuntu 22.04: Complete Guide for Beginners",
	},
	desc: {
		ru: "Как правильно настроить VPS на Ubuntu 22.04: пошаговое руководство с командами, настройкой домена и SSL.",
		uz: "Ubuntu 22.04 da VPS ni qanday to'g'ri sozlash kerak: Buyruqlar, domen va SSL sozlamalari bilan bosqichma-bosqich qo'llanma.",
		en: "How to Properly Set Up a VPS on Ubuntu 22.04: Step-by-Step Guide with Commands, Domain, and SSL Setup.",
	},
	date: "19.08.2025",
	updated: "19.08.2025",
	read: "5",
	view: "488",
	img: "/blog/ubuntu.jpg",
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
		{ title: {ru: "Подключение к серверу по SSH:", uz: "SSH orqali serverga ulanish:", en: "Connecting to the server via SSH:", slug: "1" }},
		{ title: {ru: "Обновите систему:", uz: "Tizimni yangilang:", en: "Update the system:", slug: "2" }},
		{ title: {ru: "Установите LAMP-стек (Apache, MySQL, PHP):", uz: "LAMP stekini o'rnating (Apache, MySQL, PHP):", en: "Install LAMP stack (Apache, MySQL, PHP):", slug: "3" }},
		{ title: {ru: "Настройте домен:", uz: "Domeningizni sozlang:", en: "Set up your domain:", slug: "4" }},
		{ title: {ru: "Установите бесплатный SSL:", uz: "Bepul SSL-ni o'rnating:", en: "Install Free SSL:", slug: "5" }},
		{ title: {ru: "Готово!", uz: "Tayyor", en: "Ready", slug: "6" }},
	],
	content: {
		ru: (
			<>
				<a name="1"></a>
				<p>
					Если вы приобрели VPS — поздравляем! Ниже инструкция, как с нуля запустить сайт на Ubuntu 22.04:
				</p>
				<h3>🔧 1. Подключение к серверу по SSH:</h3>
				<p className="box">
					ssh root@your-ip
				</p>
				<a name="2"></a>
				<h3>🔄 2. Обновите систему:</h3>
				<p className="box">
					apt update && apt upgrade -y
				</p>
				<a name="3"></a>
				<h3>📦 3. Установите LAMP-стек (Apache, MySQL, PHP):</h3>
				<p className="box">
					apt install apache2 mysql-server php libapache2-mod-php -y
				</p>
				<a name="4"></a>
				<h3>🌐 4. Настройте домен:</h3>
				<ul>
					<li>Установите A-запись на IP VPS</li>
					<li>Пропишите виртуальный хост:</li>
				</ul>
				<p className="box">
					nano /etc/apache2/sites-available/example.uz.conf
				</p>
				<a name="5"></a>
				<h3>🔒 5. Установите бесплатный SSL:</h3>
				<p className="box">
					apt install certbot python3-certbot-apache -y<br />
					certbot --apache
				</p>
				<a name="6"></a>
				<h3>✅ Готово!</h3>
				<p>
					Ваш сайт доступен по HTTPS и полностью работает на вашем VPS.
				</p>
			</>
		),
		uz: (
			<>
				<a name="1"></a>
				<p>
				Agar siz VPS sotib olgan bo'lsangiz - tabriklaymiz! Quyida Ubuntu 22.04 da noldan veb-saytni qanday ishga tushirish bo'yicha ko'rsatma berilgan:
				</p>
				<h3>🔧 1. Serverga SSH orqali ulanish:</h3>
				<p className="box">
				ssh root@your-ip
				</p>
				<a name="2"></a>
				<h3>🔄 2. Tizimni yangilang:</h3>
				<p className="box">
				apt update && apt upgrade -y
				</p>
				<a name="3"></a>
				<h3>📦 3. LAMP stekini o'rnating (Apache, MySQL, PHP):</h3>
				<p className="box">
				apt install apache2 mysql-server php libapache2-mod-php -y
				</p>
				<a name="4"></a>
				<h3>🌐 4. Domenni sozlang:</h3>
				<ul>
				<li>VPS IP-da A-rekordni o'rnating</li>
				<li>Virtual xostni sozlang:</li>
				</ul>
				<p className="box">
				nano /etc/apache2/sites-available/example.uz.conf
				</p>
				<a name="5"></a>
				<h3>🔒 5. Bepul SSL-ni o'rnating:</h3>
				<p className="box">
				apt install certbot python3-certbot-apache -y<br />
				certbot --apache
				</p>
				<a name="6"></a>
				<h3>✅ Bajarildi!</h3>
				<p>
				Sizning saytingiz HTTPS orqali mavjud va VPS-da to'liq ishlaydi.
				</p>
			</>
		),
		en: (
			<>
				<a name="1"></a>
				<p>
				If you have purchased a VPS - congratulations! Below is an instruction on how to launch a website from scratch on Ubuntu 22.04:
				</p>
				<h3>🔧 1. Connect to the server via SSH:</h3>
				<p className="box">
				ssh root@your-ip
				</p>
				<a name="2"></a>
				<h3>🔄 2. Update the system:</h3>
				<p className="box">
				apt update && apt upgrade -y
				</p>
				<a name="3"></a>
				<h3>📦 3. Install the LAMP stack (Apache, MySQL, PHP):</h3>
				<p className="box">
				apt install apache2 mysql-server php libapache2-mod-php -y
				</p>
				<a name="4"></a>
				<h3>🌐 4. Set up the domain:</h3>
				<ul>
				<li>Set up an A-record on your VPS IP</li>
				<li>Set up a virtual host:</li>
				</ul>
				<p className="box">
				nano /etc/apache2/sites-available/example.uz.conf
				</p>
				<a name="5"></a>
				<h3>🔒 5. Install free SSL:</h3>
				<p className="box">
				apt install certbot python3-certbot-apache -y<br />
				certbot --apache
				</p>
				<a name="6"></a>
				<h3>✅ Done!</h3>
				<p>
				Your site is available via HTTPS and fully functional on your VPS.
				</p>
			</>
		),
	},
	next: "/blog/chto-takoye-ispmanager",
},

mainData = {
    headTitle: data.title,
    url: "/blog/chto-takoye-gitlab",
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
