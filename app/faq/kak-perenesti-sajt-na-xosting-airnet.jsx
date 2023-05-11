import FaqInside from "@/components/faqInside"
import { LINKS } from "@/components/requirements"
import { checkLang } from "@/utils/checkLang"
import Link from "next/link"

export default function KakPerenestiSajtNaXostingAirnet({ language }) {
	const data = {
		title: {
			ru: "Как перенести сайт на хостинг AIRNET?",
			uz: "Qanday quilib saytni AIRNET serveriga otqazish mumkin?",
			en: "How to transfer a website to AIRNET hosting?",
		},
		description: { ru: "", uz: "", en: "" },
		content: {
			ru: (
				<>
					<p>
						В рамках акции{" "}
						<Link href={checkLang(language) + LINKS.STOCK}>
							<a>Бесплатный перенос сайта</a>
						</Link>{" "}
						осуществляется перенос сайта на хостинг AIRNET нашими специалистами.
					</p>
					<p>
						Перенос может осуществляться с одного, уже размещенного на нашем хостинге аккаунта, на другой аккаунт, или с
						другого хостинга на наш.
					</p>
					<p>Перед выполнением переноса, необходимо определить, какие компоненты сайта будут переноситься.</p>
					<p>Каждый сайт условно состоит из нескольких частей:</p>
					<ul className="list">
						<li>Контент (содержимое) сайта – файлы и папки, которые размещаются на нем;</li>
						<li>Базы данных – база данных содержащая материалы сайта;</li>
						<li>Доменные имена – имя сайта в символьной форме, например, domain.uz;</li>
					</ul>
					<p>Базы данных на сайте могут не использоваться, это зависит от его технической реализации.</p>
					<h2>1. ПЕРЕНОС ДОМЕНОВ САЙТА</h2>
					<p>При добавлении домена на наш хостинг, рекомендуем делегировать его на DNS-сервера компании Spaceweb:</p>
					<ul className="list">
						<li>ns1.airnet.uz</li>
						<li>ns2.airnet.uz</li>
					</ul>
					<h2>2. ПЕРЕНОС СОДЕРЖИМОГО САЙТА</h2>
					<p>
						Для переноса содержимого сайта необходимо поместить содержимое папки с контентом сайта в аналогичную папку
						на новом аккаунте.
					</p>
					<p>
						Это можно сделать по протоколу FTP, скачав содержимое сайта на локальный компьютер, затем поместив его в
						папку web на новом аккаунте.
					</p>
					<h2>3. ПЕРЕНОС БАЗ ДАННЫХ</h2>
					<p>
						Для создания дампа можно воспользоваться функцией «Экспорт» программы phpMyAdmin. На нашем хостинге она
						доступна из панели управления, в разделе “Базы данных”, или по адресу https://hosting.airnet.uz/phpmyadmin/
					</p>
					<p>Для развертывания дампа также можно использовать приложение phpMyAdmin (функцию «Импорт»).</p>
					<h2>4. РЕДАКТИРОВАНИЕ КОНФИГУРАЦИОННЫХ ФАЙЛОВ</h2>
					<p>
						Если переносимый сайт использует базу данных, то после выполнения второго и третьего этапов, необходимо
						выполнить правку его конфигурационных файлов таким образом, чтобы корректно происходило подключение к
						перенесенной базе.
					</p>
					<p>В конфигурационном файле следует изменить следующие параметры:</p>
					<ul className="list">
						<li>db_host – имя сервера баз данных, у нас используется значение localhost;</li>
						<li>db_name – имя базы данных;</li>
						<li>db_user – имя пользователя базы данных;</li>
						<li>db_password – пароль пользователя базы данных.</li>
					</ul>
					<p>Приводим имена конфигурационных файлов нескольких самых распространенных CMS:</p>
					<table align="center" border="1" cellPadding="1" cellSpacing="1" style={{ width: "500px;" }}>
						<tbody>
							<tr>
								<td>
									<span>
										<span>Приложение</span>
									</span>
								</td>
								<td>
									<span>
										<span>Имя конфигурационного файла</span>
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>
										<span>Joomla!</span>
									</span>
								</td>
								<td>
									<span>/configuration.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>
										<span>WordPress</span>
									</span>
								</td>
								<td>
									<span>/wp-config.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Drupal</span>
								</td>
								<td>
									<span>/sites/default/settings.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>phpBB</span>
								</td>
								<td>
									<span>/config.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Bitrix</span>
								</td>
								<td>
									<span>/bitrix/php_interface/dbconn.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>MOD.x</span>
								</td>
								<td>
									<span>/manager/includes/config.inc.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>RedMine</span>
								</td>
								<td>
									<span>/config/database.yml</span>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						В случае, если был заказан аккаунт без домена, то на аккаунте будет доступен технический домен вида
						[login].airnet.uz.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Chegara ichida{" "}
						<Link href={checkLang(language) + LINKS.STOCK}>
							<a>Tekinga saytni kochirib otkazish</a>
						</Link>{" "}
						va sayt bizning mutaxassislarimiz tomonidan AIRNET xostingiga o'tkaziladi.
					</p>
					<p>
						O'tkazish bizning xostingimizda allaqachon mavjud bo'lgan bir hisobdan boshqa hisob qaydnomasiga yoki boshqa
						hostingdan bizning hisobimizga amalga oshirilishi mumkin.
					</p>
					<p>Migratsiyani amalga oshirishdan oldin, qaysi sayt komponentlari ko'chirilishini aniqlashingiz kerak.</p>
					<p>Har bir sayt shartli ravishda bir nechta qismlardan iborat:</p>
					<ul className="list">
						<li>Saytning mazmuni (kontenti) - joylashgan fayllar va papkalar bu;</li>
						<li>Ma'lumotlar bazalari - sayt materiallarini o'z ichiga olgan ma'lumotlar bazasi;</li>
						<li>Domen nomlari – ramziy shakldagi sayt nomi, masalan, domain.uz;</li>
					</ul>
					<p>Saytdagi ma'lumotlar bazalaridan foydalanilmasligi mumkin, bu unga bog'liq texnik amalga oshirish.</p>
					<h2>1.SAYT DOMENINI O'TKAZISH</h2>
					<p>Bizning xostingimizga domen qo'shganda, Spaceweb DNS serverlari dan vakolat berishni tavsiya qilamiz :</p>
					<ul className="list">
						<li>ns1.airnet.uz</li>
						<li>ns2.airnet.uz</li>
					</ul>
					<h2>2. SAYT MAZMUNINI O'TKAZISH</h2>
					<p>
						Sayt tarkibini o'tkazish uchun siz jild tarkibini,yangi hisobdagi bir xil jildga joylashtirishingiz kerak
						boladi .
					</p>
					<p>
						Buni FTP orqali, sayt tarkibini yuklab olish orqali amalga oshirish mumkin mahalliy kompyuter, keyin uni
						yangi hisobdagi veb-papkaga joylashtiring.
					</p>
					<h2>3. MA'LUMOTLAR BAZASINI UZATISH</h2>
					<p>
						Damp yaratish uchun dasturning "Eksport" funksiyasidan foydalanishingiz mumkin phpMyAdmin. Bizning
						hostingimizda u boshqaruv panelida mavjud "Ma'lumotlar bazalari" bo'limi yoki quyidagi manzilda
						https://hosting.airnet.uz/phpmyadmin/
					</p>
					<p>Dumpni joylashtirish uchun phpMyAdmin ilovasidan ham foydalanishingiz mumkin ("Import" funktsiyasi).</p>
					<h2>4. KONFIGURASYON FAYLLARINI TAHRIRLASH</h2>
					<p>
						Agar ko'chirilayotgan sayt ma'lumotlar bazasidan foydalansa, ikkinchi va uchinchi bosqichlar bajarilgandan
						so'ng ,uzatilgan bazaga ulanish konfiguratsiya fayllari to'g'ri bo'ladigan tarzda siz uni tahrirlashingiz
						kerak .
					</p>
					<p>Konfiguratsiya faylida quyidagi parametrlar o'zgartirilishi kerak:</p>
					<ul className="list">
						<li>db_host – nomli server, localhost, nomi bn saytda ishlatiladi;</li>
						<li>db_name – ma'lumotlar bazasi nomi;</li>
						<li>db_user – ma'lumotlar bazasi foydalanuvchi nomi;</li>
						<li>db_password – ma'lumotlar bazasi foydalanuvchi paroli.</li>
					</ul>
					<p>Mana bir nechta konfiguratsiya fayllarining nomlari Umumiy CMS:</p>
					<table align="center" border="1" cellPadding="1" cellSpacing="1" style={{ width: "500px;" }}>
						<tbody>
							<tr>
								<td>
									<span>
										<span>Ilova</span>
									</span>
								</td>
								<td>
									<span>
										<span>Konfiguratsiya fayli nomi</span>
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>
										<span>Joomla!</span>
									</span>
								</td>
								<td>
									<span>/configuration.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>
										<span>WordPress</span>
									</span>
								</td>
								<td>
									<span>/wp-config.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Drupal</span>
								</td>
								<td>
									<span>/sites/default/settings.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>phpBB</span>
								</td>
								<td>
									<span>/config.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Bitrix</span>
								</td>
								<td>
									<span>/bitrix/php_interface/dbconn.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>MOD.x</span>
								</td>
								<td>
									<span>/manager/includes/config.inc.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>RedMine</span>
								</td>
								<td>
									<span>/config/database.yml</span>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Agar domensiz hisob qaydnomasi buyurtma qilingan bo'lsa,[login].airnet.uz shaklidagi texnik domen hisob
						qaydnomasiga ega bo'ladi .
					</p>
				</>
			),
			en: (
				<>
					<p>
						As part of the promotion{" "}
						<Link href={checkLang(language) + LINKS.STOCK}>
							<a>Free website transfer</a>
						</Link>{" "}
						the site is transferred to AIRNET hosting by our specialists.
					</p>
					<p>
						The transfer can be carried out from one already hosted on our hosting account, to another account, or from
						another hosting to ours.
					</p>
					<p>Before performing a migration, you must determine which components site will be migrated.</p>
					<p>Each site conditionally consists of several parts:</p>
					<ul className="list">
						<li>Content (content) of the site - files and folders that are located on it;</li>
						<li>Databases - a database containing site materials;</li>
						<li>Domain names - the name of the site in symbolic form, for example, domain.uz;</li>
					</ul>
					<p>Databases on the site may not be used, it depends on it technical implementation.</p>
					<h2>1. TRANSFER OF SITE DOMAIN</h2>
					<p>When adding a domain to our hosting, we recommend delegating it to Spaceweb's DNS servers:</p>
					<ul className="list">
						<li>ns1.airnet.uz</li>
						<li>ns2.airnet.uz</li>
					</ul>
					<h2>2. TRANSFER OF SITE CONTENT</h2>
					<p>
						To transfer the content of the site, you must place the contents of the folder with site content to a
						similar folder on a new account.
					</p>
					<p>
						This can be done via FTP by downloading the content of the site to local computer, then placing it in the
						web folder on the new account.
					</p>
					<h2>3. DATABASE TRANSFER</h2>
					<p>
						To create a dump, you can use the "Export" function phpMyAdmin programs. On our hosting it is available from
						the panel management, in the "Databases" section, or at https://hosting.airnet.uz/phpmyadmin/
					</p>
					<p>You can also use the application to deploy the dump phpMyAdmin ("Import" function).</p>
					<h2>4. EDITING CONFIGURATION FILES</h2>
					<p>
						If the site being migrated uses a database, then after executing second and third stages, you need to edit
						it configuration files in such a way that the correct connection to the transferred base.
					</p>
					<p>The following parameters should be changed in the configuration file:</p>
					<ul className="list">
						<li>db_host is the name of the database server, we use the value localhost;</li>
						<li>db_name - database name;</li>
						<li>db_user – database username;</li>
						<li>db_password - database user password.</li>
					</ul>
					<p>Here are the names of the configuration files of several of the most common CMS:</p>
					<table align="center" border="1" cellPadding="1" cellSpacing="1" style={{ width: "500px;" }}>
						<tbody>
							<tr>
								<td>
									<span>
										<span>Application</span>
									</span>
								</td>
								<td>
									<span>
										<span>Configuration file name</span>
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>
										<span>Joomla!</span>
									</span>
								</td>
								<td>
									<span>/configuration.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>
										<span>WordPress</span>
									</span>
								</td>
								<td>
									<span>/wp-config.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Drupal</span>
								</td>
								<td>
									<span>/sites/default/settings.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>phpBB</span>
								</td>
								<td>
									<span>/config.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Bitrix</span>
								</td>
								<td>
									<span>/bitrix/php_interface/dbconn.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>MOD.x</span>
								</td>
								<td>
									<span>/manager/includes/config.inc.php</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>RedMine</span>
								</td>
								<td>
									<span>/config/database.yml</span>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						If an account without a domain was ordered, then the account will have a technical domain of the form
						[login].airnet.uz is available.
					</p>
				</>
			),
		},
	}
	return <FaqInside data={data} language={language} />
}
