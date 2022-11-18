import Link from "next/link";
import Container from "../../components/container";

const sitemap = [
	{ title: "Главная", link: "/" },
	{ title: "О нас", link: "/about" },
	{ title: "Администрирование", link: "/admin-support" },
	{ title: "Защита от DDOS", link: "/anti-ddos" },
	{ title: "Автоматическое резервное копирование", link: "/autobackup" },
	{ title: "Высокопроизводительные серверы", link: "/big-vds" },
	{
		title: "Блог",
		link: "/blog",
		children: [
			{
				title: "2019 год объявлен Годом активных инвестиций и социального развития",
				link: "/blog/2019-god-obyavlen-godom-aktivnyx-investicij-i-socialnogo-razvitiya",
			},
			{
				title:
					"Центральный банк опубликовал проект закона о платежах и электронных деньгах в Узбекистане",
				link: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
			},
			{
				title: "Акции разработчика игры Cyberpunk 2077 рухнули на 20%",
				link: "/blog/cyberpunk-2077",
			},
			{
				title: "Депутаты начали обсуждение законопроекта «О персональных данных»",
				link: "/blog/deputaty-nachali-obsuzhdenie-zakonoproekta-o-personalnyx-dannyx",
			},
			{ title: "Facebook сообщил об ошибке", link: "/blog/facebook-soobshhil-ob-oshibke" },
			{
				title:
					"Financial Times сообщает, что майнеры закрывают бизнес, так как биткоин стал дешевле стоимости его добычи",
				link: "/blog/financial-times-soobshhaet-chto-majnery-zakryvayut-biznes-tak-kak-bitkoin-stal-deshevle-stoimosti-ego-dobychi",
			},
			{ title: "Google подвел итоги 2018 года", link: "/blog/google-podvel-itogi-2018-goda" },
			{
				title: "Илон Маск хочет привлечь $500 млн на создание мирового интернета",
				link: "/blog/ilon-mask-xochet-privlech-500-mln-na-sozdanie-mirovogo-interneta",
			},
			{
				title: "К чему привели неполадки с Facebook и YouTube",
				link: "/blog/k-chemu-priveli-nepoladki-s-facebook-i-youtube",
			},
			{
				title: "Карты UzCard теперь можно пополнять наличными",
				link: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
			},
			{
				title: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
				link: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
			},
			{ title: "Блог | Страница 2", link: "/blog/page/2" },
			{ title: "Блог | Страница 3", link: "/blog/page/3" },
			{
				title: "Speedtest небольшой рост скорости интернета в Узбекистане",
				link: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
			},
			{
				title: "В Telegram появились голосовые чаты и другие новые возможности",
				link: "/blog/telegram-voice-chat",
			},
			{
				title: "UZINFOCOM прекратил работу в качестве регистратора доменов",
				link: "/blog/uzinfocom-prekratil-rabotu-v-kachestve-registratora-domenov",
			},
			{ title: "В Китае решили отказаться от 3G", link: "/blog/v-kitae-reshili-otkazatsya-ot-3g" },
			{
				title: "В Telegram появились встроенные опросы",
				link: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
			},
			{
				title: "В Узбекистане разрешат сохранять номер при смене оператора",
				link: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
			},
			{
				title: "«ВКонтакте» завела профиль в Instagram",
				link: "/blog/vkontakte-zavela-profil-v-instagram",
			},
			{
				title:
					"Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android",
				link: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
			},
			{
				title:
					"«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане",
				link: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
			},
			{
				title: "«Яндекс.Музыка» и Beeline запустили совместный проект",
				link: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
			},
		],
	},
	{ title: "Оптимальные серверы", link: "/cheap-vds" },
	{ title: "Конструктор", link: "/constructor-vds" },
	{ title: "Контакты", link: "/contacts" },
	{ title: "Создание сайта", link: "/create" },
	{ title: "Дата-Центр", link: "/dc" },
	{ title: "Выделенные сервера", link: "/dedicated" },
	{ title: "Документы", link: "/documents" },
	{ title: "Домены", link: "/domains" },
	{
		title: "Частые вопросы",
		link: "/faq",
		children: [
			{ title: "Что такое домен?", link: "/faq/chto-takoe-domen" },
			{
				title: "Как новичку выбрать хостинг-провайдера: 5 простых советов",
				link: "/faq/kak-novichku-vybrat-xosting-provajdera-5-prostyx-sovetov",
			},
			{
				title: "Как перенести сайт на хостинг AIRNET?",
				link: "/faq/kak-perenesti-sajt-na-xosting-airnet",
			},
			{ title: "Как получить тестовый период?", link: "/faq/kak-poluchit-testovyj-period" },
			{ title: "Как проверить домен на занятость?", link: "/faq/kak-proverit-domen-na-zanyatost" },
			{
				title: "Как установить WordPress на хостинг?",
				link: "/faq/kak-ustanovit-wordpress-na-xosting",
			},
			{ title: "Как заключить договор?", link: "/faq/kak-zaklyuchit-dogovor" },
			{ title: "Как зарегистрировать домен?", link: "/faq/kak-zaregistrirovat-domen" },
			{
				title: "Ошибочно зарегистрировал домен, можно ли отменить?",
				link: "/faq/oshibochno-zaregistriroval-domen",
			},
			{
				title: "Правила регистрации доменных имен в зоне .UZ",
				link: "/faq/pravilo-registracii-domena-v-zone-uz",
			},
			{
				title: "Я зарегистрировал домен, что дальше?",
				link: "/faq/ya-zaregistriroval-domen-chto-dalshe",
			},
		],
	},
	{ title: "Бесплатные домены", link: "/free-domains" },
	{
		title: "Помощь",
		link: "/help",
		children: [
			{
				title: "CMS",
				link: "/help/cms",
				children: [{ title: "Что такое CMS", link: "/help/cms/chto-takoe-cms" }],
			},
			{
				title: "Домены",
				link: "/help/domain",
				children: [
					{ title: "DNS записи", link: "/help/domain/dns" },
					{
						title: "Как зарегистрировать домен UZ",
						link: "/help/domain/kak-zaregistrirovat-domen",
					},
					{
						title: "Нужно ли вводить данные паспорта для регистрации?",
						link: "/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii",
					},
					{
						title: "Рекомендации по выбору доменного имени",
						link: "/help/domain/rekomendaczii-po-vyboru-domennogo-imeni",
					},
				],
			},
			{
				title: "FTP",
				link: "/help/ftp",
				children: [{ title: "Что такое FTP", link: "/help/ftp/chto-takoe-ftp" }],
			},
			{
				title: "Хостинг",
				link: "/help/hosting",
				children: [
					{
						title: "Как перенести сайт на хостинг AIRNET?",
						link: "/help/hosting/kak-perenesti-sajt-na-hosting-airnet",
					},
				],
			},
			{
				title: "Почта",
				link: "/help/mail",
				children: [{ title: "Почта для домена", link: "/help/mail/pochta-dlya-domena" }],
			},
			{
				title: "Технические вопросы",
				link: "/help/site",
				children: [{ title: "Файл .htaccess", link: "/help/site/file-htaccess" }],
			},
			{
				title: "SSl-сертификаты",
				link: "/help/ssl",
				children: [
					{ title: "Зачем нужен SSl-сертификат", link: "/help/ssl/zachem-nuzhen-ssl-sertifikat" },
				],
			},
			{
				title: "VDS",
				link: "/help/vds",
				children: [
					{
						title: "Как долго хранятся учётные записи VDS?",
						link: "/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds",
					},
					{
						title: "Необходимые навыки для работы с VDS",
						link: "/help/vds/neobhodimye-navyki-dlya-raboty-s-vds",
					},
					{ title: "Перенос аккаунта на VDS", link: "/help/vds/perenos-akkaunta-na-vds" },
					{
						title: "Преимущества VDS и VPS-серверов",
						link: "/help/vds/preimushhestva-vds-i-vps-serverov",
					},
					{ title: "Смена тарифного плана на VDS", link: "/help/vds/smena-tarifnogo-plana-na-vds" },
					{
						title: "Восстановление root пароля от VDS",
						link: "/help/vds/vosstanovlenie-root-parolya-ot-vds",
					},
				],
			},
		],
	},
	{ title: "Хостинг", link: "/hosting" },
	{ title: "Лицензии", link: "/license" },
	{ title: "Интернет пакеты", link: "/net" },
	{ title: "Публичная оферта", link: "/oferta" },
	{ title: "Партнеры", link: "/partners" },
	{ title: "Оплата", link: "/payment" },
	{ title: "Политика конфиденциальности", link: "/privacy-policy" },
	{ title: "Реселлинг", link: "/reseller" },
	{ title: "Конструктор сайтов SitePad", link: "/sitepad" },
	{ title: "Карта сайта", link: "/sitemap" },
	{ title: "Скорость интернета", link: "/speed" },
	{ title: "SSL сертификаты", link: "/ssl" },
	{ title: "Активныe акции", link: "/stock" },
	{ title: "Служба поддержки", link: "/support" },
	{ title: "Оптимальные серверы", link: "/vds" },
	{ title: "SSL-сертификаты", link: "/voip" },
];

const Linker = ({ link, i }) => {
	if (link?.children)
		return (
			<>
				<li key={i} className="mb-2">
					<Link href={link.link}>
						<a>{link.title}</a>
					</Link>
				</li>
				<ul>
					{link.children.map((item, i) => (
						<Linker key={i} link={item} />
					))}
				</ul>
			</>
		);
	return (
		<li key={i} className="mb-2">
			<Link href={link.link}>
				<a>{link.title}</a>
			</Link>
		</li>
	);
};

const Sitemap = () => {
	return (
		<Container headTitle="Карта сайта">
			{sitemap.map((item, i) => (
				<Linker key={i} link={item} />
			))}
		</Container>
	);
};

export default Sitemap;
