import HelpItem from "@/components/helpItem"
import SEO from "@/components/seo"
import Image from "next/image"
import st from "./help.module.scss"

const data = [
		{
			title: { ru: "Общие вопросы", uz: "Umumiy savollar", en: "General questions" },
			children: [
				{
					title: {
						ru: "Правила оказания услуг и ограничения",
						uz: "Xizmat ko'rsatish qoidalari va cheklovlar",
						en: "Rules for the provision of services and restrictions",
					},
					link: "#",
				},
			],
		},
		{
			title: { ru: "Технические вопросы", uz: "Texnik savollar", en: "Technical questions" },
			link: "/help/site",
			children: [
				{
					id: "site",
					title: { ru: "Сайт", uz: "Sayt", en: "Website" },
					children: [
						{
							title: { ru: "Файл .htaccess", uz: "Fayl .htaccess", en: ".htaccess file" },
							link: "/help/site/file-htaccess",
						},
					],
				},
				{
					id: "mail",
					title: { ru: "Почта", uz: "Pochta", en: "Mail" },
					link: "/help/mail",
					children: [
						{
							title: { ru: "Почта для домена", uz: "Domen uchun pochta", en: "Mail for domain" },
							link: "/help/mail/pochta-dlya-domena",
						},
					],
				},
				{
					id: "cms",
					title: { ru: "CMS", uz: "CMS", en: "CMS" },
					link: "/help/cms",
					children: [
						{
							title: { ru: "Что такое CMS?", uz: "CMS bu nma?", en: "What is CMS?" },
							link: "/help/cms/chto-takoe-cms",
						},
					],
				},
				{
					id: "ftp",
					title: { ru: "FTP", uz: "FTP", en: "FTP" },
					link: "/help/ftp",
					children: [
						{
							title: { ru: "Что такое FTP?", uz: "FTP nma?", en: "What is FTP?" },
							link: "/help/ftp/chto-takoe-ftp",
						},
					],
				},
			],
		},
		{
			title: { ru: "Хостинг", uz: "Hosting", en: "Hosting" },
			link: "/help/hosting",
			children: [
				{
					id: "hosting",
					title: { ru: "Общая информация", uz: "Umumiy ma'lumotlar", en: "General information" },
					children: [
						{
							title: {
								ru: "Как перенести сайт на хостинг AIRNET?",
								uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
								en: "How to transfer a website to AIRNET hosting?",
							},
							link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
						},
					],
				},
			],
		},
		{
			title: { ru: "Домены", uz: "Domenlar", en: "Domains" },
			link: "/help/domain",
			children: [
				{
					id: "domain",
					title: {
						ru: "Регистрация/продление доменов",
						uz: "Domenlarni ro'yxatdan o'tkazish / yangilash",
						en: "Registration/Renewal of Domains",
					},
					children: [
						{
							title: {
								ru: "Наши DNS-записи",
								uz: "Bizning DNS-yozuvlarimiz",
								en: "Our DNS records",
							},
							link: "/help/domain/dns",
						},
						{
							title: {
								ru: "Как зарегистрировать домен?",
								uz: "Domenlarni  qanday royxatdan otqazish ",
								en: "How to register a domain?",
							},
							link: "/help/domain/kak-zaregistrirovat-domen",
						},
						{
							title: {
								ru: "Рекомендации по выбору доменного имени",
								uz: "Domen nomlarini tanlshdagi maslaxatlar",
								en: "Recommendations for choosing a domain name",
							},
							link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
						},
						{
							title: {
								ru: "Нужно ли вводить данные паспорта для регистрации?",
								uz: "Ro'yxatdan otish uchun pasport malumotlari kerakmi?",
								en: "Do I need to enter passport data for registration?",
							},
							link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
						},
					],
				},
			],
		},
		{
			title: { ru: "VDS", uz: "VDS", en: "VDS" },
			link: "/help/vds",
			children: [
				{
					id: "vds",
					title: { ru: "Общая информация", uz: "Umumiy ma'lumotlar", en: "General information" },
					children: [
						{
							title: {
								ru: "Необходимые навыки для работы с VDS",
								uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
								en: "Necessary skills to work with VDS",
							},
							link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
						},
						{
							title: {
								ru: "Смена тарифного плана на VDS",
								uz: "Tarif rejasini VDS ga o'zgartirish",
								en: "Change tariff plan to VDS",
							},
							link: "/help/vds/smena-tarifnogo-plana-na-vds",
						},
						{
							title: {
								ru: "Как долго хранятся учётные записи VDS?",
								uz: "VDS hisoblari qancha vaqt saqlanadi?",
								en: "How long are VDS accounts kept?",
							},
							link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
						},
						{
							title: {
								ru: "Восстановление root пароля от VDS",
								uz: "VDS-dan ildiz parolini tiklash",
								en: "Recovery of root password from VDS",
							},
							link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
						},
						{
							title: {
								ru: "Перенос аккаунта на VDS",
								uz: "Akkauntni VDS ga otqazish",
								en: "Account transfer to VDS",
							},
							link: "/help/vds/perenos-akkaunta-na-vds",
						},
						{
							title: {
								ru: "Преимущества VDS и VPS-серверов",
								uz: "VDS va VPS serverlarinign ustunlikari",
								en: "Advantages of VDS and VPS servers",
							},
							link: "/help/vds/preimushhestva-vds-i-vps-serverov",
						},
						{
							title: {
								ru: "Подключиться к выделенному серверу",
								uz: "Ajratilgan serverga ulaning",
								en: "Connect to a dedicated server",
							},
							link: "/help/vds/connect-to-server",
						},
						{
							title: {
								ru: "Управлять сервером через VNC-консоль",
								uz: "VNC konsoli orqali serverni boshqarish",
								en: "Manage server via VNC console",
							},
							link: "/help/vds/manage-server-vnc",
						},
						{
							title: {
								ru: "Резервное копирование выделенных серверов",
								uz: "Maxsus server zahirasi",
								en: "Dedicated server backup",
							},
							link: "/help/vds/backups-server",
						},
						{
							title: {
								ru: "Развернуть виртуальную машину с Windows Server",
								uz: "Windows Server bilan virtual mashinani o'rnating",
								en: "Deploy a virtual machine with Windows Server",
							},
							link: "/help/vds/windows",
						},
					],
				},
			],
		},
		{
			title: { ru: "SSL-сертификаты", uz: "SSL-sertifikatlari", en: "SSL certificates" },
			link: "/help/ssl",
			children: [
				{
					id: "ssl",
					title: { ru: "Общая информация", uz: "Umumiy ma'lumotlar", en: "General information" },
					children: [
						{
							title: {
								ru: "Зачем нужен SSL-сертификат",
								uz: "Nma uchun SSL-sertifikati kerak?",
								en: "Why do I need an SSL certificate",
							},
							link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
						},
					],
				},
			],
		},
		{
			id: "billing",
			title: { ru: "Биллинг", uz: "Billing", en: "Billing" },
			link: "/help/billing",
			children: [
				{
					title: {
						ru: "Регистрация в панели управления",
						uz: "Boshqaruv panelida ro'yxatdan o'tish",
						en: "Registration in the control panel",
					},
					link: "/help/billing/account",
					children: [
						{
							title: {
								ru: "Восстановление доступа к аккаунту",
								uz: "Hisobga kirish huquqi tiklanmoqda",
								en: "Restoring account access",
							},
							link: "/help/billing/account/restore",
						},
						{
							title: {
								ru: "Перенести услуги на другой аккаунт",
								uz: "Xizmatlarni boshqa hisobga o'tkazish",
								en: "Transfer services to another account",
							},
							link: "/help/billing/account/transfer",
						},
						{
							title: { ru: "Удалить аккаунт", uz: "Hisobni o'chirish", en: "Delete account" },
							link: "/help/billing/account/delete",
						},
					],
				},
			],
		},
		{
			id: "dns",
			title: { ru: "DNS-хостинг", uz: "DNS hosting", en: "DNS hosting" },
			link: "/help/dns",
			children: [
				{
					title: {
						ru: "Общая информация о DNS-хостинг",
						uz: "DNS hosting haqida umumiy ma'lumot",
						en: "General information about DNS hosting",
					},
					link: "/help/dns/about-dns",
				},
				{
					title: {
						ru: "Добавить и делегировать домен",
						uz: "Domen qo‘shish va vakolat berish",
						en: "Add and delegate a domain",
					},
					link: "/help/dns/add-domain",
				},
				{
					title: {
						ru: "Редактировать настройки домена",
						uz: "Domen sozlamalarini tahrirlash",
						en: "Edit domain settings",
					},
					link: "/help/dns/edit-domain",
				},
				{
					title: {
						ru: "Подключить сайт к домену",
						uz: "Saytni domenga ulang",
						en: "Connect site to domain",
					},
					link: "/help/dns/connect-domain",
				},
				{
					title: {
						ru: "Добавить запись",
						uz: "Eslatma qo'shing",
						en: "Add a note",
					},
					link: "/help/dns/add-record",
				},
			],
		},
	],
	mainData = {
		headTitle: { ru: "База знаний", uz: "Ilmlar bazasi", en: "Knowledge base" },
		content: data,
		faq: [
			{
				title: {
					ru: "Как пополнить баланс в биллинг системе?",
					uz: "Billeng sistemasida hisobni to'ldirish",
					en: "How to replenish the balance in the billing system?",
				},
				description: {
					ru: (
						<>
							<p className="mb-3">
								Чтобы пополнить баланс зайдите в биллинг систему, кликните на ваш баланс (правая графа сверху)
							</p>
							<Image src="/help/balance.jpg" width={1160} height={511} blurDataURL placeholder="blur" />
						</>
					),
					uz: (
						<>
							<p className="mb-3">
								Balansni to'ldirish uchun billing tizimiga o'ting, o'zingizning tugmachangizni bosing balans (yuqori
								o'ng ustun)
							</p>
							<Image src="/help/balance.jpg" width={1160} height={511} blurDataURL placeholder="blur" />
						</>
					),
					en: (
						<>
							<p className="mb-3">
								To top up your balance, go to the billing system, click on your balance (top right column)
							</p>
							<Image src="/help/balance.jpg" width={1160} height={511} blurDataURL placeholder="blur" />
						</>
					),
				},
			},
			{
				title: {
					ru: "Как изменить личные данные в биллинг системе?",
					uz: "To'lov tizimidagi shaxsiy ma'lumotlarni qanday o'zgartirish mumkin?",
					en: "How to change personal data in the billing system?",
				},
				description: {
					ru: (
						<>
							<p className="mb-3">Как изменить личные данные в биллинг системе?</p>
							<Image src="/help/profile.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
						</>
					),
					uz: (
						<>
							<p className="mb-3">Billing tizimidagi shaxsiy ma'lumotlarni qanday o'zgartirish mumkin?</p>
							<Image src="/help/profile.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
						</>
					),
					en: (
						<>
							<p className="mb-3">How to change personal data in the billing system?</p>
							<Image src="/help/profile.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
						</>
					),
				},
			},
			{
				title: {
					ru: "В настройках можно изменить язык панели.",
					uz: "Sozlamalarda siz panel tilini o'zgartirishingiz mumkin.",
					en: "You can change the panel language in the settings.",
				},
				description: {
					ru: (
						<>
							<p className="mb-3">Для выбора вам предоставляется 6 языков</p>
							<Image src="/help/lang.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
						</>
					),
					uz: (
						<>
							<p className="mb-3">Sizda 6 ta til mavjud</p>
							<Image src="/help/lang.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
						</>
					),
					en: (
						<>
							<p className="mb-3">You have 6 languages to choose from</p>
							<Image src="/help/lang.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
						</>
					),
				},
			},
			{
				title: {
					ru: "Где я могу увидеть SSL- сертификат?",
					uz: "SSL- sertifikatini qayerda korishim mumkin",
					en: "Where can I see the SSL certificate?",
				},
				description: {
					ru: (
						<>
							<p className="mb-3">SSL сертификат можно увидеть в графе «товары»</p>
							<Image src="/help/ssl.jpg" width={1160} height={592} blurDataURL placeholder="blur" />
						</>
					),
					uz: (
						<>
							<p className="mb-3">SSL sertifikatini "mahsulotlar" ustunida ko'rish mumkin</p>
							<Image src="/help/ssl.jpg" width={1160} height={592} blurDataURL placeholder="blur" />
						</>
					),
					en: (
						<>
							<p className="mb-3">SSL certificate can be seen in the "goods" column</p>
							<Image src="/help/ssl.jpg" width={1160} height={592} blurDataURL placeholder="blur" />
						</>
					),
				},
			},
			{
				title: {
					ru: "Как ознакомится с тарифными планами VDS/VPS",
					uz: "VDS/VPS tarif rejalari bilan qanday tanishish mumkin",
					en: "How to get acquainted with the tariff plans VDS / VPS",
				},
				description: {
					ru: (
						<>
							<p className="mb-3">C тарифными планами можно также ознакомится и приобрести в биллинг системе.</p>
							<Image src="/help/tarif.jpg" width={1160} height={563} blurDataURL placeholder="blur" />
						</>
					),
					uz: (
						<>
							<p className="mb-3">Tarif rejalarini ham ko'rish va sotib olish mumkin hisob-kitob tizimi.</p>
							<Image src="/help/tarif.jpg" width={1160} height={563} blurDataURL placeholder="blur" />
						</>
					),
					en: (
						<>
							<p className="mb-3">You can also view and purchase tariff plans in the billing system.</p>
							<Image src="/help/tarif.jpg" width={1160} height={563} blurDataURL placeholder="blur" />
						</>
					),
				},
			},
		],
	}

export default function Help({ language }) {
	const langData = {
		seoT: {
			ru: "База знаний | Airnet",
			uz: "Airnet | Ilimlari bazasi",
			en: "Knowledge Base | Airnet",
		},
		descT: {
			ru: "Ответы на часто задаваемые вопросы, вы можете найти ответы на интересующие вопросы по хостингу, домену и VDS серверам от AIRNET",
			uz: "Tez-tez beriladigan savollarga javoblar, hosting, domen va VDS serverlari haqidagi savollaringizga AIRNET’dan javob topishingiz mumkin.",
			en: "Answers to frequently asked questions, you can find answers to your questions about hosting, domain and VDS servers from AIRNET",
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<div className={st.help}>
				<HelpItem data={mainData} language={language} />
			</div>
		</>
	)
}
