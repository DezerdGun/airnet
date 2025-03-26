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
		img: "/blog/joomla.png",
		link: "/blog/chto-takoye-joomla",
		date: "20.03.2025",
		title: {
			ru: "Что такое Joomla?",
			uz: "Что такое Joomla?",
			en: "Что такое Joomla?",
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
						Рассказываем о том, что такое Joomla, её преимуществах и особенностях.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Рассказываем о том, что такое Joomla, её преимуществах и особенностях.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/gitlab.png",
		link: "/blog/chto-takoye-gitlab",
		date: "20.03.2025",
		title: {
			ru: "Что такое Gitlab?",
			uz: "Что такое Gitlab?",
			en: "Что такое Gitlab?",
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
						Узнаем, что такое GitLab, какие задачи он решает и какую пользу может принести вашему проекту.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнаем, что такое GitLab, какие задачи он решает и какую пользу может принести вашему проекту.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/ispmanager.png",
		link: "/blog/chto-takoye-ispmanager",
		date: "20.03.2025",
		title: {
			ru: "Что такое ISPmanager?",
			uz: "Что такое ISPmanager?",
			en: "Что такое ISPmanager?",
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
						Разбираемся с тем, что представляет собой ISPmanager, для чего он нужен и как использовать его возможности для управления хостингом.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Разбираемся с тем, что представляет собой ISPmanager, для чего он нужен и как использовать его возможности для управления хостингом.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/hosting.png",
		link: "/blog/kak-vybrat-server-dlya-khostinga-sayta",
		date: "15.03.2025",
		title: {
			ru: "Как выбрать сервер для хостинга сайта?",
			uz: "Как выбрать сервер для хостинга сайта?",
			en: "Как выбрать сервер для хостинга сайта?",
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
						Шаг за шагом разберем процесс выбора сервера для хостинга:
					</p>
				</>
			),
			en: (
				<>
					<p>
						Шаг за шагом разберем процесс выбора сервера для хостинга:
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/vds.png",
		link: "/blog/kak-vybrat-vydelenniy-server",
		date: "15.03.2025",
		title: {
			ru: "Выбор выделенного сервера: рекомендации, правила, особенности",
			uz: "Выбор выделенного сервера: рекомендации, правила, особенности",
			en: "Выбор выделенного сервера: рекомендации, правила, особенности",
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
						Узнайте основные параметры выбора выделенного сервера для вашего сайта. Подробное руководство по определению необходимых характеристик и сравнению предложений от провайдеров.
					</p>
				</>
			),
			en: (
				<>
					<p>
						Узнайте основные параметры выбора выделенного сервера для вашего сайта. Подробное руководство по определению необходимых характеристик и сравнению предложений от провайдеров.
					</p>
				</>
			),
		},
	},
	{
		img: "/blog/web.png",
		link: "/blog/chto-takoye-veb-interfeys",
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
		link: "/blog/chto-takoye-error-404",
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
		link: "/blog/chto-takoye-csr-i-kak-ego-sozdat",
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
		link: "/blog/chto-takoe-apache-http-server",
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
		link: "/blog/protocol-ipv6-chto-eto-takoe",
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
		link: "/blog/protocol-sftp-chto-eto",
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
		link: "/blog/chto-takoe-mac-address",
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
		link: "/blog/chto-takoe-name-server-ns",
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
		link: "/blog/chto-takoe-vps-server",
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
		link: "/blog/kak-zaschitit-vps-ot-vzloma",
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
		link: "/blog/raznitsa-mezhdu-hostingom-i-domenom",
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
		link: "/blog/chto-takoe-dns-server",
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
		link: "/blog/chto-takoe-imya-hosta",
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
		link: "/blog/chto-takoye-rdp",
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
		link: "/blog/chto-takoye-docker",
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
		link: "/blog/chto-takoye-ip-address",
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
		link: "/blog/chto-takoye-nginx",
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
		link: "/blog/chto-takoye-smtp",
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
		link: "/blog/kak-zaregistrirovat-domen",
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
		link: "/blog/ipv4-chto-eto-takoye",
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
		link: "/blog/ssh-klyuchi-chto-eto-takoye",
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
		link: "/blog/chto-takoye-host",
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
		link: "/blog/chto-takoye-wordpress",
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
		link: "/blog/chto-takoye-root-prava",
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
		link: "/blog/chto-takoye-tsentralniy-protsessor-tspu-cpu",
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
		link: "/blog/chto-takoye-poddomeny-i-zachem-oni-nuzhny",
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
		link: "/blog/oshibka-403-forbidden-chto-eto-znachit",
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
		link: "/blog/domen-com-chto-eto",
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
								<Link href={checkLang(language) + item.link}>
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
