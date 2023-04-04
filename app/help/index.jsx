import HelpItem from "@/components/helpItem"
import SEO from "@/components/seo"
import Image from "next/image"
import st from "./help.module.scss"

const data = [
		{
			title: { ru: "Общие вопросы", uz: "Umumiy savollar" },
			children: [
				{
					title: {
						ru: "Правила оказания услуг и ограничения",
						uz: "Xizmat ko'rsatish qoidalari va cheklovlar",
					},
					link: "#",
				},
			],
		},
		{
			title: { ru: "Технические вопросы", uz: "Texnik savollar" },
			link: "/help/site",
			children: [
				{
					id: "site",
					title: { ru: "Сайт", uz: "Sayt" },
					children: [
						{
							title: { ru: "Файл .htaccess", uz: "Fayl .htaccess" },
							link: "/help/site/file-htaccess",
						},
					],
				},

				{
					id: "mail",
					title: { ru: "Почта", uz: "Pochta" },
					link: "/help/mail",
					children: [
						{
							title: { ru: "Почта для домена", uz: "Domen uchun pochta" },
							link: "/help/mail/pochta-dlya-domena",
						},
					],
				},
				{
					id: "cms",
					title: { ru: "CMS", uz: "CMS" },
					link: "/help/cms",
					children: [
						{
							title: { ru: "Что такое CMS", uz: " CMS bu nma?" },
							link: "/help/cms/chto-takoe-cms",
						},
					],
				},
				{
					id: "ftp",
					title: { ru: "FTP", uz: "FTP" },
					link: "/help/ftp",
					children: [
						{
							title: { ru: "Что такое FTP", uz: "FTP nma?" },
							link: "/help/ftp/chto-takoe-ftp",
						},
					],
				},
			],
		},
		{
			title: { ru: "Хостинг", uz: "Xost" },
			link: "/help/hosting",
			children: [
				{
					id: "hosting",
					title: { ru: "Общая информация", uz: "Umumiy ma'lumotlar" },
					children: [
						{
							title: {
								ru: "Как перенести сайт на хостинг AIRNET?",
								uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
							},
							link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
						},
					],
				},
			],
		},
		{
			title: { ru: "Домены", uz: " Domenlar" },
			link: "/help/domain",
			children: [
				{
					id: "domain",
					title: {
						ru: "Регистрация/продление доменов",
						uz: "Domenlarni ro'yxatdan o'tkazish / yangilash",
					},
					children: [
						{
							title: {
								ru: "Наши DNS-записи",
								uz: "Bizning DNS-serverlarimiz",
							},
							link: "/help/domain/dns",
						},
						{
							title: {
								ru: "Как зарегистрировать домен?",
								uz: "Domenlarni  qanday royxatdan otqazish ",
							},
							link: "/help/domain/kak-zaregistrirovat-domen",
						},
						{
							title: {
								ru: "Рекомендации по выбору доменного имени",
								uz: "Domen nomlarini tanlshdagi maslaxatlar",
							},
							link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
						},
						{
							title: {
								ru: "Нужно ли вводить данные паспорта для регистрации?",
								uz: "Royxatdan otish uchun pasport malumotlari kerakmi?",
							},
							link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
						},
					],
				},
			],
		},
		{
			title: { ru: "VDS", uz: "VDS" },
			link: "/help/vds",
			children: [
				{
					id: "vds",
					title: { ru: "Общая информация", uz: "Umumiy ma'lumotlar" },
					children: [
						{
							title: {
								ru: "Необходимые навыки для работы с VDS",
								uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
							},
							link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
						},
						{
							title: {
								ru: "Смена тарифного плана на VDS",
								uz: "Tarif rejasini VDS ga o'zgartirish",
							},
							link: "/help/vds/smena-tarifnogo-plana-na-vds",
						},
						{
							title: {
								ru: "Как долго хранятся учётные записи VDS?",
								uz: "VDS hisoblari qancha vaqt saqlanadi?",
							},
							link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
						},
						{
							title: {
								ru: "Восстановление root пароля от VDS",
								uz: "VDS-dan ildiz parolini tiklash",
							},
							link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
						},
						{
							title: {
								ru: "Перенос аккаунта на VDS",
								uz: "Akkauntni VDS ga otqazish",
							},
							link: "/help/vds/perenos-akkaunta-na-vds",
						},
						{
							title: {
								ru: "Преимущества VDS и VPS-серверов",
								uz: "VDS va VPS serverlarinign ustunlikari",
							},
							link: "/help/vds/preimushhestva-vds-i-vps-serverov",
						},
					],
				},
			],
		},
		{
			title: { ru: "SSl-сертификаты", uz: "SS1- sertefeketlari" },
			link: "/help/ssl",
			children: [
				{
					id: "ssl",
					title: { ru: "Общая информация", uz: "Umumiy ma'lumotlar" },
					children: [
						{
							title: {
								ru: "Зачем нужен SSl-сертификат",
								uz: "SS1- sertefikati nma uchun kerak?",
							},
							link: "/help/ssl/zachem-nuzhen-ssl-sertifikat",
						},
					],
				},
			],
		},
	],
	mainData = {
		headTitle: { ru: "База знаний", uz: "Ilmlar bazasi" },
		content: data,
		faq: [
			{
				title: {
					ru: "Как пополнить баланс в биллинг системе?",
					uz: "Billeng sistemasida hisobni to'ldirish",
				},
				description: {
					ru: (
						<>
							<p>
								Чтобы пополнить баланс зайдите в биллинг систему, кликните на
								ваш баланс (правая графа сверху)
							</p>
							<Image
								src="/help/balance.jpg"
								width={1160}
								height={511}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
					uz: (
						<>
							<p>
								Balansni to'ldirish uchun billing tizimiga o'ting, o'zingizning
								tugmachangizni bosing balans (yuqori o'ng ustun)
							</p>
							<Image
								src="/help/balance.jpg"
								width={1160}
								height={511}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
				},
			},
			{
				title: {
					ru: "Как изменить личные данные в биллинг системе?",
					uz: "To'lov tizimidagi shaxsiy ma'lumotlarni qanday o'zgartirish mumkin?",
				},
				description: {
					ru: (
						<>
							<p>Как изменить личные данные в биллинг системе?</p>
							<Image
								src="/help/profile.jpg"
								width={1160}
								height={422}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
					uz: (
						<>
							<p>
								Billing tizimidagi shaxsiy ma'lumotlarni qanday o'zgartirish
								mumkin?
							</p>
							<Image
								src="/help/profile.jpg"
								width={1160}
								height={422}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
				},
			},
			{
				title: {
					ru: "В настройках можно изменить язык панели.",
					uz: "Sozlamalarda siz panel tilini o'zgartirishingiz mumkin.",
				},
				description: {
					ru: (
						<>
							<p>Для выбора вам предоставляется 6 языков</p>
							<Image
								src="/help/lang.jpg"
								width={1160}
								height={422}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
					uz: (
						<>
							<p>Sizda 6 ta til mavjud</p>
							<Image
								src="/help/lang.jpg"
								width={1160}
								height={422}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
				},
			},
			{
				title: {
					ru: "Где я могу увидеть SSL- сертификат?",
					uz: "SSL- sertefikatini qayerda korishim mumkin",
				},
				description: {
					ru: (
						<>
							<p>SSL сертификат можно увидеть в графе «товары»</p>
							<Image
								src="/help/ssl.jpg"
								width={1160}
								height={592}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
					uz: (
						<>
							<p>SSL sertifikatini "mahsulotlar" ustunida ko'rish mumkin</p>
							<Image
								src="/help/ssl.jpg"
								width={1160}
								height={592}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
				},
			},
			{
				title: {
					ru: "Как ознакомится с тарифными планами VDS/VPS",
					uz: "VDS/VPS tarif rejalari bilan qanday tanishish mumkin",
				},
				description: {
					ru: (
						<>
							<p>
								C тарифными планами можно также ознакомится и приобрести в
								биллинг системе.
							</p>
							<Image
								src="/help/tarif.jpg"
								width={1160}
								height={563}
								blurDataURL
								placeholder="blur"
							/>
						</>
					),
					uz: (
						<>
							<p>
								Tarif rejalarini ham ko'rish va sotib olish mumkin hisob-kitob
								tizimi.
							</p>
							<Image
								src="/help/tarif.jpg"
								width={1160}
								height={563}
								blurDataURL
								placeholder="blur"
							/>
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
		},
		descT: {
			ru: "Ответы на часто задаваемые вопросы, вы можете найти ответы на интересующие вопросы по хостингу, домену и VDS серверам от AIRNET",
			uz: "Tez-tez beriladigan savollarga javoblar, hosting, domen va VDS serverlari haqidagi savollaringizga AIRNET’dan javob topishingiz mumkin.",
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
