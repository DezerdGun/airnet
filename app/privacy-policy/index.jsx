import { checkLang } from "@/utils/checkLang"
import Link from "next/link"
import Container from "../../components/container"
import { LINKS } from "../../components/requirements"
import SEO from "../../components/seo"
import st from "./privacyPolicy.module.scss"

export default function PrivacyPolicy({ language }) {
	const langData = {
		seoT: {
			ru: "Политика конфиденциальности | Airnet",
			uz: "Maxfiylik siyosati | Airnet",
			en: "Privacy Policy | Airnet",
		},
		desc: {
			ru: "Политика конфиденциальности компании Airnet",
			uz: "Airnet maxfiylik siyosati",
			en: "Airnet Privacy Policy",
		},
		headTitle: {
			ru: "Политика конфиденциальности",
			uz: "Maxfiylik siyosati",
			en: "Privacy Policy",
		},
		about: {
			ru: (
				<>
					<h2>Кто мы</h2>
					<p>
						Наш адрес сайта:{" "}
						<Link href={checkLang(language) + LINKS.HOME}>
							<a>https://airnet.uz</a>
						</Link>
						.
					</p>
					<h2>Какие персональные данные мы собираем и с какой целью</h2>
					<h3>Комментарии</h3>
					<p>
						Если посетитель оставляет комментарий на сайте, мы собираем данные указанные в форме комментария, а также IP
						адрес посетителя и данные user-agent браузера с целью определения спама.
					</p>
					<h3>Медиафайлы</h3>
					<p>
						Если вы зарегистрированный пользователь и загружаете фотографии на сайт, вам возможно следует избегать
						загрузки изображений с метаданными EXIF, так как они могут содержать данные вашего месторасположения по GPS.
						Посетители могут извлечь эту информацию скачав изображения с сайта.
					</p>
					<h3>Формы контактов</h3>
					<h3>Куки</h3>
					<p>
						Если вы оставляете комментарий на нашем сайте, вы можете включить сохранение вашего имени, адреса email и
						вебсайта в куки. Это делается для вашего удобства, чтобы не заполнять данные снова при повторном
						комментировании. Эти куки хранятся в течение одного года.
					</p>
					<p>
						Если у вас есть учетная запись на сайте и вы войдете в неё, мы установим временный куки для определения
						поддержки куки вашим браузером, куки не содержит никакой личной информации и удаляется при закрытии вашего
						браузера.
					</p>
					<p>
						При входе в учетную запись мы также устанавливаем несколько куки с данными входа и настройками экрана. Куки
						входа хранятся в течение двух дней, куки с настройками экрана – год. Если вы выберете возможность “Запомнить
						меня”, данные о входе будут сохраняться в течение двух недель. При выходе из учетной записи куки входа будут
						удалены.
					</p>
					<p>
						При редактировании или публикации статьи в браузере будет сохранен дополнительный куки, он не содержит
						персональных данных и содержит только ID записи отредактированной вами, истекает через 1 день.
					</p>
					<h3>Встраиваемое содержимое других вебсайтов</h3>
					<p>
						Статьи на этом сайте могут включать встраиваемое содержимое (например видео, изображения, статьи и др.),
						подобное содержимое ведет себя так же, как если бы посетитель зашел на другой сайт.
					</p>
					<p>
						Эти сайты могут собирать ваши данные, использовать куки, внедрять дополнительное отслеживание третьей
						стороной и следить за вашим взаимодействием с внедренным содержимым, включая отслеживание взаимодействия,
						если у вас есть учетная запись и вы авторизовались на том сайте.
					</p>
					<h3>Веб-аналитика</h3>
					<h2>С кем мы делимся вашими данными</h2>
					<h2>Как долго мы храним ваши данные</h2>
					<p>
						Если вы оставляете комментарий, то сам комментарий и его метаданные сохраняются неопределенно долго. Это
						делается для того, чтобы определять и одобрять последующие комментарии автоматически, вместо помещения их в
						очередь на одобрение.
					</p>
					<p>
						Для пользователей с регистрацией на нашем сайте мы храним ту личную информацию, которую они указывают в
						своем профиле. Все пользователи могут видеть, редактировать или удалить свою информацию из профиля в любое
						время (кроме имени пользователя). Администрация вебсайта также может видеть и изменять эту информацию.
					</p>
					<h2>Какие у вас права на ваши данные</h2>
					<p>
						При наличии учетной записи на сайте или если вы оставляли комментарии, то вы можете запросить файл экспорта
						персональных данных, которые мы сохранили о вас, включая предоставленные вами данные. Вы также можете
						запросить удаление этих данных, это не включает данные, которые мы обязаны хранить в административных целях,
						по закону или целях безопасности.
					</p>
					<h2>Куда мы отправляем ваши данные</h2>
					<p>Комментарии пользователей могут проверяться автоматическим сервисом определения спама.</p>
					<h2>Ваша контактная информация</h2>
					<h2>Дополнительная информация</h2>
					<h3>Как мы защищаем ваши данные</h3>
					<h3>Какие принимаются процедуры против взлома данных</h3>
					<h3>От каких третьих сторон мы получаем данные</h3>
					<h3>Какие автоматические решения принимаются на основе данных пользователей</h3>
					<h3>Требования к раскрытию отраслевых нормативных требований</h3>
				</>
			),
			uz: (
				<>
					<h2>Biz kimmiz</h2>
					<p>
						Saytimiz manzili:{" "}
						<Link href={checkLang(language) + LINKS.HOME}>
							<a>https://airnet.uz</a>
						</Link>
						.
					</p>
					<h2>Biz qanday shaxsiy ma'lumotlarni yig'amiz va nima maqsadda</h2>
					<h3>Kommentariya</h3>
					<p>
						Agar tashrifchi saytga sharh qoldirsa, biz ma'lumotlarni yig'amiz sharh shaklida ko'rsatilgan, shuningdek,
						tashrif buyuruvchining IP manzili va ma'lumotlar spamni aniqlash uchun brauzer foydalanuvchi-agenti.
					</p>
					<h3>Mediasahrlar</h3>
					<p>
						Agar siz ro'yxatdan o'tgan foydalanuvchi bo'lsangiz va fotosuratlarni yuklang saytida siz rasmlarni yuklab
						olishdan qochishingiz kerak EXIF metadata, chunki u sizning ma'lumotlaringizni o'z ichiga olishi mumkin GPS
						manzillari. Mehmonlar ushbu ma'lumotni olishlari mumkin saytdan rasmlarni yuklab olish.
					</p>
					<h3>Aloqa shakllari</h3>
					<h3>Kuki</h3>
					<p>
						Agar siz bizning saytimizda sharh qoldirsangiz, faollashtirishingiz mumkin ismingizni, elektron pochta
						manzilingizni va veb-saytingizni cookie fayllarida saqlash. Bu Qachon ma'lumotlarni qayta to'ldirmaslik
						uchun sizga qulaylik yaratish maqsadida amalga oshiriladi qayta fikr bildirish. Ushbu kukilar bir yil
						saqlanadi.
					</p>
					<p>
						Saytda hisob qaydnomangiz bo'lsa va tizimga kirsangiz, biz yoki yo'qligini aniqlash uchun vaqtinchalik
						cookie faylini o'rnating brauzer, cookie hech qanday shaxsiy ma'lumotlarni o'z ichiga olmaydi va o'chiriladi
						brauzeringizni yopganingizda.
					</p>
					<p>
						Hisobingizga kirganingizda, biz bir nechta cookie-fayllarni o'rnatamiz kirish ma'lumotlari va ekran
						sozlamalari. Kirish cookie fayllari uchun saqlanadi ikki kun, ekran sozlamalari bilan kukilar - bir yil.
						Agar tanlasangiz "Meni eslab qoling" opsiyasi, kirish ma'lumotlari saqlanadi ikki hafta ichida.
						Hisobingizdan chiqqaningizda, kirish cookie fayllari bo'ladi olib tashlandi.
					</p>
					<p>
						Brauzerda maqolani tahrirlash yoki nashr qilishda u saqlanadi qo'shimcha cookie, u shaxsiy ma'lumotlarni o'z
						ichiga olmaydi va o'z ichiga oladi faqat siz tahrirlagan post identifikatorining amal qilish muddati 1
						kundan keyin tugaydi.
					</p>
					<h3>Boshqa veb-saytlardan o'rnatilgan kontent</h3>
					<p>
						Ushbu saytdagi maqolalar o'rnatilgan tarkibni o'z ichiga olishi mumkin (masalan, videolar, rasmlar,
						maqolalar va boshqalar), shunga o'xshash kontent xuddi mehmon boshqa saytga kirgandek o'zini tutadi.
					</p>
					<p>
						Ushbu saytlar ma'lumotlaringizni to'plashi, cookie-fayllardan foydalanishi, joylashtirishi mumkin ixtiyoriy
						uchinchi tomon kuzatuvi va kuzatib boring o'rnatilgan kontent bilan o'zaro ta'sir, shu jumladan kuzatish
						Agar hisobingiz bo'lsa va tizimga kirgan bo'lsangiz, o'zaro aloqalar o'sha saytda.
					</p>
					<h3>Veb-tahlil</h3>
					<h2>Ma'lumotlaringizni kim bilan baham ko'ramiz?</h2>
					<h2>Maʼlumotlaringizni qancha vaqt saqlaymiz</h2>
					<p>
						Agar siz sharh qoldirsangiz, sharhning o'zi va uning metama'lumotlari cheksiz davom eting. Buning uchun
						amalga oshiriladi o'rniga avtomatik ravishda kuzatish sharhlarini aniqlash va tasdiqlash ularni tasdiqlash
						uchun kutish ro'yxatiga qo'yish.
					</p>
					<p>
						Saytimizda ro'yxatdan o'tgan foydalanuvchilar uchun biz ushbu shaxsiy ma'lumotlarni saqlaymiz ular o'z
						profilida taqdim etgan ma'lumotlar. Barcha foydalanuvchilar profil ma'lumotlarini ko'rishi, tahrirlashi yoki
						o'chirishi mumkin istalgan vaqtda (foydalanuvchi nomidan tashqari). Veb-sayt ma'muriyati ham bu
						maʼlumotlarni koʻrishi va oʻzgartirishi mumkin.
					</p>
					<h2>Sizning ma'lumotlaringizga qanday huquqlaringiz bor</h2>
					<p>
						Saytda hisob qaydnomangiz bo'lsa yoki siz tark etgan bo'lsangiz sharhlar, siz shaxsiy eksport faylini
						so'rashingiz mumkin biz siz haqingizda saqlagan ma'lumotlar, shu jumladan siz taqdim etgan ma'lumotlar
						ma'lumotlar. Shuningdek, siz ushbu ma'lumotlarni o'chirishni so'rashingiz mumkin, bu emas maʼmuriyatda
						saqlashimiz kerak boʻlgan maʼlumotlarni oʻz ichiga oladi maqsadlar, qonuniy yoki xavfsizlik maqsadlari.
					</p>
					<h2>Ma'lumotlaringizni qayerga yuboramiz</h2>
					<p>Foydalanuvchi izohlarini avtomatik xizmat orqali tekshirish mumkin spam ta'riflari.</p>
					<h2>Sizning aloqa ma'lumotlaringiz</h2>
					<h2>Qo'shimcha ma'lumot</h2>
					<h3>Maʼlumotlaringizni qanday himoya qilamiz</h3>
					<h3>Ma'lumotlar buzilishiga qarshi qanday tartiblar mavjud</h3>
					<h3>Biz qaysi uchinchi tomonlardan ma'lumotlarni olamiz?</h3>
					<h3>Ma'lumotlar asosida qanday avtomatlashtirilgan qarorlar qabul qilinadi foydalanuvchilar</h3>
					<h3>Sanoat reglamentini oshkor qilish talablari</h3>
				</>
			),
			en: (
				<>
					<h2>Who are we</h2>
					<p>
						Our website address:{" "}
						<Link href={checkLang(language) + LINKS.HOME}>
							<a>https://airnet.uz</a>
						</Link>
						.
					</p>
					<h2>What personal data we collect and for what purpose</h2>
					<h3>Comments</h3>
					<p>
						If a visitor leaves a comment on the site, we collect data specified in the comment form, as well as the IP
						address of the visitor and data browser user-agent to detect spam.
					</p>
					<h3>Media</h3>
					<p>
						If you are a registered user and upload photos to site, you should probably avoid downloading images from
						EXIF metadata, as it may contain data from your GPS locations. Visitors can extract this information
						downloading images from the site.
					</p>
					<h3>Contact forms</h3>
					<h3>Cookies</h3>
					<p>
						If you leave a comment on our site, you can enable saving your name, email address and website in cookies.
						This is done for your convenience, so as not to fill in the data again when re-commenting. These cookies are
						stored for one year.
					</p>
					<p>
						If you have an account on the site and you log in, we set a temporary cookie to determine whether your
						browser, the cookie does not contain any personal information and is deleted when you close your browser.
					</p>
					<p>
						When you log in to your account, we also set several cookies with login information and screen settings.
						Login cookies are stored for two days, cookies with screen settings - a year. If you choose “Remember me”
						option, login data will be stored in within two weeks. When you log out of your account, the login cookies
						will be removed.
					</p>
					<p>
						When editing or publishing an article in the browser, it will be saved additional cookie, it does not
						contain personal data and contains only the post ID you edited will expire after 1 day.
					</p>
					<h3>Embedded content from other websites</h3>
					<p>
						Articles on this site may include embeddable content (e.g. videos, images, articles, etc.), similar content
						behaves in the same way as if the visitor has visited another site.
					</p>
					<p>
						These sites may collect your data, use cookies, embed optional third party tracking and keep track of your
						interaction with embedded content, including tracking interactions if you have an account and are logged in
						on that site.
					</p>
					<h3>Web analytics</h3>
					<h2>Who do we share your data with</h2>
					<h2>How long we keep your data</h2>
					<p>
						If you leave a comment, then the comment itself and its metadata persist indefinitely. This is done in order
						to detect and approve follow-up comments automatically, instead of placing them on a waiting list for
						approval.
					</p>
					<p>
						For users with registration on our site, we store that personal the information they provide in their
						profile. All users can see, edit or delete their profile information in any time (except username). The
						website administration also can see and modify this information.
					</p>
					<h2>What rights do you have over your data</h2>
					<p>
						If you have an account on the site or if you left comments, you can request an export file of personal the
						data we have stored about you, including information provided by you data. You can also request the deletion
						of this data, this is not includes data that we are required to keep in administrative purposes, legal or
						security purposes.
					</p>
					<h2>Where do we send your data</h2>
					<p>User comments can be checked by an automatic service spam definitions.</p>
					<h2>Your contact information</h2>
					<h2>Additional information</h2>
					<h3>How we protect your data</h3>
					<h3>What procedures are in place against data breaches</h3>
					<h3>What third parties do we get data from</h3>
					<h3>What automated decisions are made based on the data users</h3>
					<h3>Industry regulatory disclosure requirements</h3>
				</>
			),
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.desc[language]} />
			<Container headTitle={langData.headTitle[language]}>
				<hr />
				<div className={st.privacyPolicy}>{langData.about[language]}</div>
			</Container>
		</>
	)
}
