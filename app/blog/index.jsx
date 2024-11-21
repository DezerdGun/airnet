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
	  link: "/blog",
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
