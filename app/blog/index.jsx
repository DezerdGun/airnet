import Container from "@/components/container"
import SEO from "@/components/seo"
import { checkLang } from "@/utils/checkLang"
import Image from "next/image"
import Link from "next/link"
import st from "./blog.module.scss"
import BreadCrumbs from "../../components/seo/breadCrumbs";
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";
import ProductDomain from "../../components/seo/productdomain";

export const blog = [
	{
		img: "/blog/office.png",
		link: {
			ru: "/blog/nastroika-ip-telefonii-v-ofise-poshagovaya-instruktsiya",
			uz: "/blog/ofisda-ip-telefoniyani-sozlash-bosqichma-bosqich-korsatmalar",
			en: "/blog/setting-up-ip-telephony-in-the-office-step-by-step-instructions",
		},
		date: "29.04.2025",
		title: {
			ru: "Настройка IP-телефонии в офисе — пошаговая инструкция",
			uz: "Ofisda IP telefoniyani sozlash - bosqichma-bosqich ko'rsatmalar",
			en: "Setting up IP telephony in the office - step-by-step instructions",
		},
		description: {
			ru: (
				<>
					<p>
						Пошаговая настройка IP-телефонии в офисе
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Ofisda IP telefoniyani bosqichma-bosqich sozlash
					</p>
				</>
			),
			en: (
				<>
					<p>
						Step-by-step setup of IP telephony in the office
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/settingvoip.png",
		link: {
			ru: "/blog/kak-podklyuchit-sip-telefon-samostoyatelno",
			uz: "/blog/telefonni-ozingizga-qanday-ulash-mumkin",
			en: "/blog/how-to-connect-sip-phone-yourself",
		},
		date: "29.04.2025",
		title: {
			ru: "Как подключить SIP-телефон самостоятельно?",
			uz: "SIP telefonini o'zingiz qanday ulash mumkin?",
			en: "How to connect a SIP phone yourself?",
		},
		description: {
			ru: (
				<>
					<p>
						Простая инструкция по подключению SIP-телефона
					</p>
				</>
			),
			uz: (
				<>
					<p>
						SIP telefonini ulash bo'yicha oddiy ko'rsatmalar
					</p>
				</>
			),
			en: (
				<>
					<p>
						Simple instructions for connecting a SIP phone
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/sipvoip.png",
		link: {
			ru: "/blog/chem-otlichaetsya-sip-telefoniya-ot-ip",
			uz: "/blog/sip-telefoniya-va-ip-ortasidagi-farq-nima",
			en: "/blog/what-is-the-difference-between-sip-telephony-and-ip",
		},
		date: "29.04.2025",
		title: {
			ru: "Чем отличается SIP-телефония от IP?",
			uz: "SIP telefoniya va IP o'rtasidagi farq nima?",
			en: "What is the difference between SIP telephony and IP?",
		},
		description: {
			ru: (
				<>
					<p>
						Разбираем ключевые отличия SIP от IP-телефонии
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Biz SIP va IP telefoniya o'rtasidagi asosiy farqlarni tahlil qilamiz
					</p>
				</>
			),
			en: (
				<>
					<p>
						We analyze the key differences between SIP and IP telephony
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/sipip.png",
		link: {
			ru: "/blog/kak-podklyuchit-ip-telefon-instruktsiya-dlya-novichkov",
			uz: "/blog/yangi-boshlanuvchilar-uchun-ip-telefonga-qanday-ulanish-boyicha-korsatmala",
			en: "/blog/how-to-connect-ip-phone-instructions-for-beginners",
		},
		date: "29.04.2025",
		title: {
			ru: "Как подключить IP-телефон — инструкция для новичков",
			uz: "IP telefonni qanday ulash mumkin - yangi boshlanuvchilar uchun ko'rsatmalar",
			en: "How to connect an IP phone - instructions for beginners",
		},
		description: {
			ru: (
				<>
					<p>
						Пошаговая инструкция по подключению IP-телефона
					</p>
				</>
			),
			uz: (
				<>
					<p>
						IP telefonni ulash bo'yicha bosqichma-bosqich ko'rsatmalar
					</p>
				</>
			),
			en: (
				<>
					<p>
						Step-by-step instructions for connecting an IP phone
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/voip.png",
		link: {
			ru: "/blog/voip-chto-eto-takoe-i-kak-rabotaet",
			uz: "/blog/voip-nima-va-qanday-ishlaydi",
			en: "/blog/voip-what-is-it-and-how-does-it-work",
		},
		date: "29.04.2025",
		title: {
			ru: "VoIP — что это такое и как работает?",
			uz: "VoIP - bu nima va u qanday ishlaydi?",
			en: "VoIP - what is it and how does it work?",
		},
		description: {
			ru: (
				<>
					<p>
						VoIP — это передача голоса через интернет.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						VoIP - bu Internet orqali ovoz uzatish.
					</p>
				</>
			),
			en: (
				<>
					<p>
						VoIP is voice transmission over the Internet.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/sip5.png",
		link: {
			ru: "/blog/sip-telefoniya-chto-eto-takoe",
			uz: "/blog/sip-telefoniya-bu-nima",
			en: "/blog/sip-telephony-what-is-it",
		},
		date: "29.04.2025",
		title: {
			ru: "SIP-телефония — что это такое?",
			uz: "SIP telefoniya - bu nima?",
			en: "SIP telephony - what is it?",
		},
		description: {
			ru: (
				<>
					<p>
						Что такое SIP-телефония, как она работает и чем отличается от IP и VoIP?
					</p>
				</>
			),
			uz: (
				<>
					<p>
						SIP telefoniyasi nima, u qanday ishlaydi va IP va VoIP dan qanday farq qiladi?
					</p>
				</>
			),
			en: (
				<>
					<p>
						What is SIP telephony, how does it work and how does it differ from IP and VoIP?
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/sip.png",
		link: {
			ru: "/blog/ip-telefoniya-chto-eto-takoe-i-kak-ona-rabotaet",
			uz: "/blog/ip-telefoniya-nima-va-u-qanday-ishlaydi",
			en: "/blog/ip-telephony-what-is-it-and-how-does-it-work",
		},
		date: "28.04.2025",
		title: {
			ru: "IP-телефония — что это такое и как она работает?",
			uz: "IP telefoniya - bu nima va u qanday ishlaydi?",
			en: "IP telephony - what is it and how does it work?",
		},
		description: {
			ru: (
				<>
					<p>
						Объясняем простыми словами, что такое IP-телефония, как она работает
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Biz IP telefoniya nima ekanligini va u qanday ishlashini sodda qilib tushuntiramiz
					</p>
				</>
			),
			en: (
				<>
					<p>
						We explain in simple terms what IP telephony is and how it works
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/joomla.png",
		link: {
			ru: "/blog/chto-takoye-joomla",
			uz: "/blog/joomla-nima",
			en: "/blog/what-is-joomla",
		},
		date: "20.03.2025",
		title: {
			ru: "Что такое Joomla?",
			uz: "Joomla nima?",
			en: "What is Joomla?",
		},
		description: {
			ru: (
				<>
					<p>
						Рассказываем о том, что такое Joomla, её преимуществах и особенностях.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Biz sizga Joomla nima ekanligini, uning afzalliklari va xususiyatlari haqida gapirib beramiz.
					</p>
				</>
			),
			en: (
				<>
					<p>
						We tell you about what Joomla is, its advantages and features.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/gitlab.png",
		link: {
			ru: "/blog/chto-takoye-gitlab",
			uz: "/blog/gitlab-nima",
			en: "/blog/what-is-gitlab",
		},
		date: "20.03.2025",
		title: {
			ru: "Что такое Gitlab?",
			uz: "Gitlab nima?",
			en: "What is Gitlab?",
		},
		description: {
			ru: (
				<>
					<p>
						Узнаем, что такое GitLab, какие задачи он решает и какую пользу может принести вашему проекту.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Keling, GitLab nima ekanligini, u qanday vazifalarni hal qilishini va loyihangizga qanday foyda keltirishini bilib olaylik.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Let's find out what GitLab is, what tasks it solves, and what benefits it can bring to your project.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ispmanager.png",
		link: {
			ru: "/blog/chto-takoye-ispmanager",
			uz: "/blog/ispmanager-nima",
			en: "/blog/what-is-ispmanager",
		},
		date: "20.03.2025",
		title: {
			ru: "Что такое ISPmanager?",
			uz: "ISPmanager nima?",
			en: "What is ISPmanager?",
		},
		description: {
			ru: (
				<>
					<p>
						Разбираемся с тем, что представляет собой ISPmanager, для чего он нужен и как использовать его возможности для управления хостингом.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Keling, ISPmanager nima ekanligini, u nima uchun kerakligini va hostingni boshqarish uchun uning imkoniyatlaridan qanday foydalanishni aniqlaymiz.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Let's figure out what ISPmanager is, what it is needed for, and how to use its capabilities to manage hosting.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/hosting.png",
		link: {
			ru: "/blog/kak-vybrat-server-dlya-khostinga-sayta",
			uz: "/blog/veb-sayt-hosting-uchun-serverni-qanday-tanlash",
			en: "/blog/how-to-choose-a-server-for-website-hosting",
		},
		date: "15.03.2025",
		title: {
			ru: "Как выбрать сервер для хостинга сайта?",
			uz: "Veb-saytlarni joylashtirish uchun serverni qanday tanlash mumkin?",
			en: "How to choose a server for website hosting?",
		},
		description: {
			ru: (
				<>
					<p>
						Шаг за шагом разберем процесс выбора сервера для хостинга:
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Xosting uchun server tanlash jarayonini bosqichma-bosqich ko'rib chiqamiz:
					</p>
				</>
			),
			en: (
				<>
					<p>
						Let's look at the process of choosing a server for hosting step by step:
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/vds.png",
		link: {
			ru: "/blog/kak-vybrat-vydelenniy-server",
			uz: "/blog/bagishlangan-serverni-qanday-tanlash",
			en: "/blog/how-to-choose-a-dedicated-server",
		},
		date: "15.03.2025",
		title: {
			ru: "Выбор выделенного сервера: рекомендации, правила, особенности",
			uz: "Ajratilgan serverni tanlash: tavsiyalar, qoidalar, xususiyatlar",
			en: "Choosing a Dedicated Server: Recommendations, Rules, Features",
		},
		description: {
			ru: (
				<>
					<p>
						Узнайте основные параметры выбора выделенного сервера для вашего сайта. Подробное руководство по определению необходимых характеристик и сравнению предложений от провайдеров.
					</p>
				</>
			),
			uz: (
				<>
					<p>
					Veb-saytingiz uchun ajratilgan serverni tanlashning asosiy parametrlarini bilib oling. Sizga kerak bo'lgan xususiyatlarni aniqlash va provayderlarning takliflarini solishtirish bo'yicha batafsil qo'llanma.
					</p>
				</>
			),
			en: (
				<>
					<p>
					Find out the main parameters for choosing a dedicated server for your website. A detailed guide to determining the necessary characteristics and comparing offers from providers.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/web.png",
		link: {
			ru: "/blog/chto-takoye-veb-interfeys",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "15.03.2025",
		title: {
			ru: "Что такое Веб-интерфейс?",
			uz: "Что такое Веб-интерфейс?",
			en: "Что такое Веб-интерфейс?",
		},
		description: {
			ru: (
				<>
					<p>
						Разберем, что такое веб-интерфейс, где он применяется и как его использовать для управления приложениями и устройствами.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Разберем, что такое веб-интерфейс, где он применяется и как его использовать для управления приложениями и устройствами.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Разберем, что такое веб-интерфейс, где он применяется и как его использовать для управления приложениями и устройствами.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/404.jpg",
		link: {
			ru: "/blog/chto-takoye-error-404",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.03.2025",
		title: {
			ru: "Что такое error 404?",
			uz: "Что такое error 404?",
			en: "Что такое error 404?",
		},
		description: {
			ru: (
				<>
					<p>
						Что означает ошибка 404, почему она появляется, и как устранить эту проблему на вашем сайте?
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Что означает ошибка 404, почему она появляется, и как устранить эту проблему на вашем сайте?
					</p>
				</>
			),
			en: (
				<>
					<p>
						Что означает ошибка 404, почему она появляется, и как устранить эту проблему на вашем сайте?
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/csr.jpg",
		link: {
			ru: "/blog/chto-takoye-csr-i-kak-ego-sozdat",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.03.2025",
		title: {
			ru: "Что такое CSR и как его создать?",
			uz: "Что такое CSR и как его создать?",
			en: "Что такое CSR и как его создать?",
		},
		description: {
			ru: (
				<>
					<p>
						Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнайте, что такое CSR (Certificate Signing Request), для чего он используется при создании SSL-сертификатов
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/apache.png",
		link: {
			ru: "/blog/chto-takoe-apache-http-server",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "Apache HTTP Server: основа современного веб-хостинга",
			uz: "Apache HTTP Server: основа современного веб-хостинга",
			en: "Apache HTTP Server: основа современного веб-хостинга",
		},
		description: {
			ru: (
				<>
					<p>
						Узнайте о Apache HTTP Server, его функциях
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Узнайте о Apache HTTP Server, его функциях
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнайте о Apache HTTP Server, его функциях
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ipv6.png",
		link: {
			ru: "/blog/protocol-ipv6-chto-eto-takoe",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "IPv6: будущее интернет-адресации",
			uz: "IPv6: будущее интернет-адресации",
			en: "IPv6: будущее интернет-адресации",
		},
		description: {
			ru: (
				<>
					<p>
						Подробное объяснение протокола IPv6, его отличий от IPv4
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Подробное объяснение протокола IPv6, его отличий от IPv4
					</p>
				</>
			),
			en: (
				<>
					<p>
						Подробное объяснение протокола IPv6, его отличий от IPv4
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/sftp.png",
		link: {
			ru: "/blog/protocol-sftp-chto-eto",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "SFTP протокол: безопасный способ передачи файлов",
			uz: "SFTP протокол: безопасный способ передачи файлов",
			en: "SFTP протокол: безопасный способ передачи файлов",
		},
		description: {
			ru: (
				<>
					<p>
						Разберемся, что такое протокол SFTP
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Разберемся, что такое протокол SFTP
					</p>
				</>
			),
			en: (
				<>
					<p>
						Разберемся, что такое протокол SFTP
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/mac.png",
		link: {
			ru: "/blog/chto-takoe-mac-address",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "MAC-адрес: что это и зачем он нужен?",
			uz: "MAC-адрес: что это и зачем он нужен?",
			en: "MAC-адрес: что это и зачем он нужен?",
		},
		description: {
			ru: (
				<>
					<p>
						Узнайте, что такое MAC-адрес
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Узнайте, что такое MAC-адрес
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнайте, что такое MAC-адрес
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ns.png",
		link: {
			ru: "/blog/chto-takoe-name-server-ns",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
			uz: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
			en: "Name-серверы (NS): ключевые элементы DNS-инфраструктуры",
		},
		description: {
			ru: (
				<>
					<p>
						Разберемся, что такое name-серверы
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Разберемся, что такое name-серверы
					</p>
				</>
			),
			en: (
				<>
					<p>
						Разберемся, что такое name-серверы
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/server.png",
		link: {
			ru: "/blog/chto-takoe-vps-server",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "VPS сервер: виртуальный выделенный сервер для ваших задач",
			uz: "VPS сервер: виртуальный выделенный сервер для ваших задач",
			en: "VPS сервер: виртуальный выделенный сервер для ваших задач",
		},
		description: {
			ru: (
				<>
					<p>
						Подробное объяснение понятия VPS сервера
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Подробное объяснение понятия VPS сервера
					</p>
				</>
			),
			en: (
				<>
					<p>
						Подробное объяснение понятия VPS сервера
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/vps.png",
		link: {
			ru: "/blog/kak-zaschitit-vps-ot-vzloma",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "Эффективные способы защиты VPS от кибератак",
			uz: "Эффективные способы защиты VPS от кибератак",
			en: "Эффективные способы защиты VPS от кибератак",
		},
		description: {
			ru: (
				<>
					<p>
						Узнайте о лучших практиках и инструментах для надежной защиты вашего VPS сервера
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Узнайте о лучших практиках и инструментах для надежной защиты вашего VPS сервера
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнайте о лучших практиках и инструментах для надежной защиты вашего VPS сервера
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/domain.png",
		link: {
			ru: "/blog/raznitsa-mezhdu-hostingom-i-domenom",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "Хостинг и домен: ключевые различия и взаимодействие",
			uz: "Хостинг и домен: ключевые различия и взаимодействие",
			en: "Хостинг и домен: ключевые различия и взаимодействие",
		},
		description: {
			ru: (
				<>
					<p>
						Разберемся в отличиях между хостингом и доменом
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Разберемся в отличиях между хостингом и доменом
					</p>
				</>
			),
			en: (
				<>
					<p>
						Разберемся в отличиях между хостингом и доменом
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/dns.png",
		link: {
			ru: "/blog/chto-takoe-dns-server",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "DNS сервер: ключевой элемент работы интернета",
			uz: "DNS сервер: ключевой элемент работы интернета",
			en: "DNS сервер: ключевой элемент работы интернета",
		},
		description: {
			ru: (
				<>
					<p>
						Подробное объяснение, что такое DNS сервер
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Подробное объяснение, что такое DNS сервер
					</p>
				</>
			),
			en: (
				<>
					<p>
						Подробное объяснение, что такое DNS сервер
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/host.png",
		link: {
			ru: "/blog/chto-takoe-imya-hosta",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "14.12.2024",
		title: {
			ru: "Что такое имя хоста и зачем оно нужно?",
			uz: "Что такое имя хоста и зачем оно нужно?",
			en: "Что такое имя хоста и зачем оно нужно?",
		},
		description: {
			ru: (
				<>
					<p>
						Узнайте, что такое имя хоста, его функции и значение в сетевых коммуникациях.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Узнайте, что такое имя хоста, его функции и значение в сетевых коммуникациях.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнайте, что такое имя хоста, его функции и значение в сетевых коммуникациях.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/rdp.jpg",
		link: {
			ru: "/blog/chto-takoye-rdp",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "21.11.2024",
		title: {
			ru: "Что такое RDP?",
			uz: "Что такое RDP?",
			en: "Что такое RDP?",
		},
		description: {
			ru: (
				<>
					<p>
						RDP — протокол удаленного рабочего стола от Microsoft 🖥️
					</p>
				</>
			),
			uz: (
				<>
					<p>
						RDP — протокол удаленного рабочего стола от Microsoft 🖥️
					</p>
				</>
			),
			en: (
				<>
					<p>
						RDP — протокол удаленного рабочего стола от Microsoft 🖥️
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/docker.png",
		link: {
			ru: "/blog/chto-takoye-docker",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "21.11.2024",
		title: {
			ru: "Что такое Docker?",
			uz: "Что такое Docker?",
			en: "Что такое Docker?",
		},
		description: {
			ru: (
				<>
					<p>
						Docker — платформа для разработки, доставки и запуска приложений 📦
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Docker — платформа для разработки, доставки и запуска приложений 📦
					</p>
				</>
			),
			en: (
				<>
					<p>
						Docker — платформа для разработки, доставки и запуска приложений 📦
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ipv4.png",
		link: {
			ru: "/blog/chto-takoye-ip-address",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "21.11.2024",
		title: {
			ru: "Что такое IP-адрес?",
			uz: "Что такое IP-адрес?",
			en: "Что такое IP-адрес?",
		},
		description: {
			ru: (
				<>
					<p>
					IP-адрес — уникальный идентификатор устройства в сети 🖥️
					</p>
				</>
			),
			uz: (
				<>
					<p>
					IP-адрес — уникальный идентификатор устройства в сети 🖥️
					</p>
				</>
			),
			en: (
				<>
					<p>
					IP-адрес — уникальный идентификатор устройства в сети 🖥️
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/nginx.webp",
		link: {
			ru: "/blog/chto-takoye-nginx",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "21.11.2024",
		title: {
			ru: "NGINX: что это такое?",
			uz: "NGINX: что это такое?",
			en: "NGINX: что это такое?",
		},
		description: {
			ru: (
				<>
					<p>
					Nginx — популярный веб-сервер и обратный прокси-сервер 🌐
					</p>
				</>
			),
			uz: (
				<>
					<p>
					Nginx — популярный веб-сервер и обратный прокси-сервер 🌐
					</p>
				</>
			),
			en: (
				<>
					<p>
					Nginx — популярный веб-сервер и обратный прокси-сервер 🌐
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/smtp.webp",
		link: {
			ru: "/blog/chto-takoye-smtp",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "20.11.2024",
		title: {
			ru: "Что такое SMTP (Simple Mail Transfer Protocol)?",
			uz: "Что такое SMTP (Simple Mail Transfer Protocol)?",
			en: "Что такое SMTP (Simple Mail Transfer Protocol)?",
		},
		description: {
			ru: (
				<>
					<p>
						SMTP (Simple Mail Transfer Protocol) — стандартный протокол для отправки электронной почты 📧
					</p>
				</>
			),
			uz: (
				<>
					<p>
						SMTP (Simple Mail Transfer Protocol) — стандартный протокол для отправки электронной почты 📧
					</p>
				</>
			),
			en: (
				<>
					<p>
						SMTP (Simple Mail Transfer Protocol) — стандартный протокол для отправки электронной почты 📧
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/domen.webp",
		link: {
			ru: "/blog/kak-zaregistrirovat-domen",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "11.10.2024",
		title: {
			ru: "Как зарегистрировать домен?",
			uz: "Как зарегистрировать домен?",
			en: "Как зарегистрировать домен?",
		},
		description: {
			ru: (
				<>
					<p>
						Зарегистрируйте домен для сайта в несколько шагов 🌐
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Зарегистрируйте домен для сайта в несколько шагов 🌐
					</p>
				</>
			),
			en: (
				<>
					<p>
						Зарегистрируйте домен для сайта в несколько шагов 🌐
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ipv4.jpg",
		link: {
			ru: "/blog/ipv4-chto-eto-takoye",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "11.10.2024",
		title: {
			ru: "IPv4: что это такое?",
			uz: "IPv4: что это такое?",
			en: "IPv4: что это такое?",
		},
		description: {
			ru: (
				<>
					<p>
						IPv4 — это протокол интернет-адресации🖥️ обеспечивающий уникальные IP-адреса для устройств в сети
					</p>
				</>
			),
			uz: (
				<>
					<p>
						IPv4 — это протокол интернет-адресации🖥️ обеспечивающий уникальные IP-адреса для устройств в сети
					</p>
				</>
			),
			en: (
				<>
					<p>
						IPv4 — это протокол интернет-адресации🖥️ обеспечивающий уникальные IP-адреса для устройств в сети
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ssh.jpg",
		link: {
			ru: "/blog/ssh-klyuchi-chto-eto-takoye",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "11.10.2024",
		title: {
			ru: "SSH-ключи: что это такое",
			uz: "SSH-ключи: что это такое",
			en: "SSH-ключи: что это такое",
		},
		description: {
			ru: (
				<>
					<p>
						SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️
					</p>
				</>
			),
			uz: (
				<>
					<p>
						SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️
					</p>
				</>
			),
			en: (
				<>
					<p>
						SSH-ключи — это криптографические ключи для безопасного доступа к удаленным серверам🖥️
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/host.jpg",
		link: {
			ru: "/blog/chto-takoye-host",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "11.10.2024",
		title: {
			ru: "Что такое host?",
			uz: "Что такое host?",
			en: "Что такое host?",
		},
		description: {
			ru: (
				<>
					<p>
						Host (хост) — это сервер или компьютер, предоставляющий доступ к ресурсам в сети🌐
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Host (хост) — это сервер или компьютер, предоставляющий доступ к ресурсам в сети🌐
					</p>
				</>
			),
			en: (
				<>
					<p>
						Host (хост) — это сервер или компьютер, предоставляющий доступ к ресурсам в сети🌐
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/wordpress.png",
		link: {
			ru: "/blog/chto-takoye-wordpress",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "10.10.2024",
		title: {
			ru: "Что такое Wordpress:",
			uz: "Что такое Wordpress:",
			en: "Что такое Wordpress:",
		},
		description: {
			ru: (
				<>
					<p>
						WordPress — самая популярная система управления контентом (CMS) в мире
					</p>
				</>
			),
			uz: (
				<>
					<p>
						WordPress — самая популярная система управления контентом (CMS) в мире
					</p>
				</>
			),
			en: (
				<>
					<p>
						WordPress — самая популярная система управления контентом (CMS) в мире
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/root.jpg",
		link: {
			ru: "/blog/chto-takoye-root-prava",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "10.10.2024",
		title: {
			ru: "Что такое Root-права",
			uz: "Что такое Root-права",
			en: "Что такое Root-права",
		},
		description: {
			ru: (
				<>
					<p>
						Root-права — это получение полного доступа к системе 📱
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Root-права — это получение полного доступа к системе 📱
					</p>
				</>
			),
			en: (
				<>
					<p>
						Root-права — это получение полного доступа к системе 📱
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/cpu.avif",
		link: {
			ru: "/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "10.10.2024",
		title: {
			ru: "Что такое центральный процессор (ЦПУ, CPU)?",
			uz: "Что такое центральный процессор (ЦПУ, CPU)?",
			en: "Что такое центральный процессор (ЦПУ, CPU)?",
		},
		description: {
			ru: (
				<>
					<p>
						Процессор (CPU) — главное "сердце" компьютера.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Процессор (CPU) — главное "сердце" компьютера.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Процессор (CPU) — главное "сердце" компьютера.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/subdomain.png",
		link: {
			ru: "/blog/chto-takoye-poddomeny-i-zachem-oni-nuzhny",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "10.10.2024",
		title: {
			ru: "Что такое поддомены и зачем они нужны",
			uz: "Что такое поддомены и зачем они нужны",
			en: "Что такое поддомены и зачем они нужны",
		},
		description: {
			ru: (
				<>
					<p>
						Поддомены — это часть доменного имени, отделенная точкой
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Поддомены — это часть доменного имени, отделенная точкой
					</p>
				</>
			),
			en: (
				<>
					<p>
						Поддомены — это часть доменного имени, отделенная точкой
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/403.webp",
		link: {
			ru: "/blog/oshibka-403-forbidden-chto-eto-znachit",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "10.10.2024",
		title: {
			ru: "Ошибка 403 Forbidden: что это значит",
			uz: "Ошибка 403 Forbidden: что это значит",
			en: "Ошибка 403 Forbidden: что это значит",
		},
		description: {
			ru: (
				<>
					<p>
						Ошибка 403 Forbidden — запрет доступа к веб-странице или ресурсу
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Ошибка 403 Forbidden — запрет доступа к веб-странице или ресурсу
					</p>
				</>
			),
			en: (
				<>
					<p>
						Ошибка 403 Forbidden — запрет доступа к веб-странице или ресурсу
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/com.jpg",
		link: {
			ru: "/blog/domen-com-chto-eto",
			uz: "/blog/wwww",
			en: "/blog/wwww",
		},
		date: "30.09.2024",
		title: {
			ru: "Домен .COM — что это такое, особенности и преимущества",
			uz: ".COM domeni - bu nima, xususiyatlari va afzalliklari",
			en: "Domain .COM - what is it, features and advantages",
		},
		description: {
			ru: (
				<>
					<p>
						Com – одна из наиболее узнаваемых интернет-пользователями доменных зон.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Com – одна из наиболее узнаваемых интернет-пользователями доменных зон.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Com – одна из наиболее узнаваемых интернет-пользователями доменных зон.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/audio-call.jpg",
		link: "/blog/telegram-voice-chat",
		date: "24.12.2020",
		title: {
			ru: "В Telegram появились голосовые чаты и другие новые возможности",
			uz: "Telegram’da ovozli chatlar va boshqa yangi funksiyalar paydo bo‘ldi",
			en: "Voice chats and other new features appeared in Telegram",
		},
		description: {
			ru: (
				<p>
					В любой группе теперь можно запустить голосовой чат параллельно с обычной перепиской — текст и голос будут
					органично дополнять друг…
				</p>
			),
			uz: (
				<p>
					Har qanday guruhda siz endi parallel ravishda ovozli suhbatni boshlashingiz mumkin muntazam yozishmalar - matn
					va ovoz bir-birini organik ravishda to'ldiradi ...
				</p>
			),
			en: (
				<p>
					In any group, you can now start a voice chat in parallel with regular correspondence - text and voice will
					organically complement each other ...
				</p>
			),
		},
	},
	{
		img: "/blog/president.jpg",
		link: "/blog/2019-god-obyavlen-godom-aktivnyx-investicij-i-socialnogo-razvitiya",
		date: "31.12.2018",
		title: {
			ru: "2019 год объявлен Годом активных инвестиций и социального развития",
			uz: "2019-yil “Faol investitsiyalar va ijtimoiy rivojlanish yili” deb e’lon qilindi.",
			en: "2019 has been declared the Year of Active Investments and Social Development",
		},
		description: {
			ru: (
				<>
					<p>Президент подчеркнул, что благоприятная инвестиционная среда приведет к развитию всех сфер.</p>{" "}
				</>
			),
			uz: (
				<>
					<p>
						Prezident qulay sarmoyaviy muhit olib kelishini ta’kidladi barcha sohalarni rivojlantirishga xizmat qiladi.
					</p>{" "}
				</>
			),
			en: (
				<>
					<p>
						The President stressed that a favorable investment environment will lead to the development of all areas.
					</p>{" "}
				</>
			),
		},
	},
	{
		img: "/blog/youtube-facebook.jpg",
		link: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
		date: "30.12.2018",
		title: {
			ru: "К чему привели неполадки с Facebook и YouTube",
			uz: "Facebook va YouTube bilan bog'liq muammolarga nima sabab bo'ldi",
			en: "What did the problems with Facebook and YouTube lead to",
		},
		description: {
			ru: (
				<p>
					В начале 2018 года, года инноваций, у всех игроков сферы онлайн-коммерции был очень оптимистичный настрой, мы
					ожидали, что появится большое количество…
				</p>
			),
			uz: (
				<p>
					2018 yil boshida, innovatsiyalar yili, sohaning barcha o'yinchilari onlayn tijorat juda optimistik edi, biz
					buni kutgan edik juda ko'p bo'ladi ...
				</p>
			),
			en: (
				<p>
					At the beginning of 2018, the year of innovation, all players in the online commerce industry were very
					optimistic, we expecting a large number...
				</p>
			),
		},
	},
	{
		img: "/blog/personal-security.jpg",
		link: "/blog/deputaty-nachali-obsuzhdenie-zakonoproekta-o-personalnyx-dannyx",
		date: "29.12.2018",
		title: {
			ru: "Депутаты начали обсуждение законопроекта «О персональных данных»",
			uz: "Deputatlar “Shaxsiy ma’lumotlar to‘g‘risida”gi qonun loyihasini muhokama qilishga kirishdilar.",
			en: "Deputies began discussing the draft law «On Personal Data»",
		},
		description: {
			ru: (
				<>
					<p>Сейчас персональные данные в Узбекистане слабо защищены, но скоро это изменится.</p>
					<p>25 декабря 2018 года состоялось очередное заседание Законодательной палаты Олий Мажлиса….</p>
				</>
			),
			uz: (
				<>
					<p>Hozir O‘zbekistonda shaxsiy ma’lumotlar yomon himoyalangan, biroq tez orada himoyalanadi o'zgaradi.</p>
					<p>
						2018-yil 25-dekabr kuni Qonunchilik palatasining navbatdagi majlisi bo‘lib o‘tdi Oliy Majlis palatalari ...
					</p>
				</>
			),
			en: (
				<>
					<p>Now personal data in Uzbekistan is poorly protected, but this will change soon.</p>
					<p>On December 25, 2018, a regular meeting of the Legislative Chamber of the Oliy Majlis was held ....</p>
				</>
			),
		},
	},
	{
		img: "/blog/vk.jpg",
		link: "/blog/vkontakte-zavela-profil-v-instagram",
		date: "28.12.2018",
		title: {
			ru: "«ВКонтакте» завела профиль в Instagram",
			uz: "VKontakte Instagram profilini ishga tushirdi",
			en: "VKontakte launched an Instagram profile",
		},
		description: {
			ru: (
				<>
					<p>
						Раньше «ВКонтакте» активно боролась с Instagram — отключала ссылки на сервис и пыталась создать конкурента.
					</p>
					<p>Соцсеть «ВКонтакте», запущенная в 2006 году,</p>
				</>
			),
			uz: (
				<>
					<p>
						Ilgari VKontakte Instagramga qarshi faol kurash olib bordi - u havolalarni o'chirib qo'ydi xizmati va
						raqobatchi yaratishga harakat qildi.
					</p>
					<p>2006 yilda ishga tushirilgan "VKontakte" ijtimoiy tarmog'i,</p>
				</>
			),
			en: (
				<>
					<p>
						Previously, VKontakte actively fought against Instagram - it turned off links to the service and tried to
						create a competitor.
					</p>
					<p>Social network "VKontakte", launched in 2006,</p>
				</>
			),
		},
	},
]

export default function Blog({ language }) {
	const pagination = {
		ru: (
			<>
				<a className={st.blog__links__active} disabled>
					&laquo; Предыдущий пост
				</a>
				<a className={st.blog__links__active}>1</a>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>2</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>Следующий пост &raquo;</a>
				</Link>
			</>
		),
		uz: (
			<>
				<a className={st.blog__links__active} disabled>
					&laquo; Oldingi post
				</a>
				<a className={st.blog__links__active}>1</a>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>2</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>Keyingi post &raquo;</a>
				</Link>
			</>
		),
		en: (
			<>
				<a className={st.blog__links__active} disabled>
					&laquo; Previous post
				</a>
				<a className={st.blog__links__active}>1</a>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>2</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/blog/page/2"}>
					<a>Next post &raquo;</a>
				</Link>
			</>
		),
	}

	return <BlogBlock pagination={pagination} blog={blog} language={language} />
}

export const breadCrumbsBlog = [
	{
	  name: {
		ru: "Блог",
		uz: "Blog",
		en: "Blog",
	  },
	  link: {
		ru: "/blog",
		uz: "/uz/blog",
		en: "/en/blog",
	  },
	},
  ];

export function BlogBlock({ pagination, blog, language }) {
	const langData = {
		seoT: {
			ru: "Блог | Airnet",
			uz: "Blog | Airnet",
			en: "Blog | Airnet",
		},
		descT: {
			ru: "Блог компании Airnet",
			uz: "Airnet kampaniyasi Blog",
			en: "Airnet Blog",
		},
		headTitle: {
			ru: "Блог",
			uz: "Blog",
			en: "Blog",
		},
	}
	return (
		<div className="bg-gray">
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
      
			<ProductDomain />
			{breadCrumbsBlog && breadCrumbsBlog.length ? (
				<>
				<BreadCrumbs data={breadCrumbsBlog} language={language} />
				<PageBreadcrumb links={breadCrumbsBlog} language={language} />
				</>
			) : null}

			<Container headTitle={langData.headTitle[language]} clNTitle="text-center">
				<div className={st.blog}>
					<div className={st.blog__block}>
						{blog.map((item) => (
							<div key={item.title[language]} className={st.blog__block__item}>
								<Link href={checkLang(language) + item.link[language]}>
									<a>
										<div className={st.blog__block__item__img}>
											<Image src={item.img} width={560} height={300} blurDataURL placeholder="blur" />
										</div>
										<div className={st.blog__block__item__content}>
											<div className={st.blog__block__item__content__header}>
												<h2>{item.title[language]}</h2>
												<span>{item.date}</span>
											</div>
											{item.description[language]}
										</div>
									</a>
								</Link>
							</div>
						))}
					</div>
					<div className={st.blog__links}>{pagination[language]}</div>
				</div>
			</Container>
		</div>
	)
}
