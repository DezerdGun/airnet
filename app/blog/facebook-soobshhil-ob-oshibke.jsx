import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Facebook сообщил об ошибке",
		uz: "Facebook xato haqida xabar berdi",
		en: "Facebook reported an error",
	},
	desc: {
		ru: "Из-за ошибки в API сторонние приложения могли получить доступ к закрытым и даже неопубликованным фотографиям.",
		uz: "API'dagi xatolik tufayli uchinchi tomon ilovalari shaxsiy va hatto nashr etilmagan fotosuratlarga kirishi mumkin edi.",
		en: "Due to an API bug, third-party apps could access private or even unpublished photos.",
	},
	date: "16.12.2018",
	img: "/blog/facebook.jpg",
	content: {
		ru: (
			<>
				<p>
					Из-за ошибки в API сторонние приложения могли получить доступ к закрытым и даже неопубликованным фотографиям.
				</p>
				<p>
					Facebook обнаружила ошибку в API, из-за которой сторонние приложения могли получить доступ к закрытым
					фотографиям пользователей,{" "}
					<a
						href="https://vc.ru/social/53459-facebook-rasskazala-ob-uyazvimosti-kotoraya-mogla-otkryt-dostup-k-lichnym-fotografiyam-6-8-mln-polzovateley?from=rss"
						target="_blank"
						rel="noreferrer noopener"
					>
						пишет
					</a>{" "}
					vc.ru. Инцидент мог затронуть до 6,8 млн человек,{" "}
					<a
						href="https://developers.facebook.com/blog/post/2018/12/14/notifying-our-developer-ecosystem-about-a-photo-api-bug/"
						target="_blank"
						rel="noreferrer noopener"
					>
						говорится
					</a>{" "}
					в сообщении компании.
				</p>
				<p>
					Речь идет о приложениях, которым пользователи предоставляют доступ к своим фотографиям в Facebook. Обычно
					соцсеть делится с ними только теми изображениями, которые опубликованы в хронике пользователя. Но из-за ошибки
					сторонние приложения могли получить доступ к снимкам, опубликованным в «историях», на торговой площадке
					Marketplace, а также к фотографиям, которые пользователь загрузил в Facebook, но в итоге не стал публиковать.
					Последнее возможно, потому что соцсеть хранит копию изображения.
				</p>
				<p>
					Ошибка в API существовала в период с 13 по 25 сентября 2018 года, пока ее не заметили разработчики Facebook. В
					это время потенциальный доступ к личным фотографиям пользователей был у 1500 приложений от 876 разработчиков.
				</p>
				<p>
					Facebook предупредит пользователей, которых могла затронуть эта ошибка. Они получат уведомление со ссылкой на
					список приложений, которые могли получить доступ к их фотографиям. Компания также свяжется с разработчиками
					приложений, чтобы удалить личные изображения пользователей.
				</p>
				<ul>
					<li>«Нам жаль, что это произошло», — говорится в сообщении Facebook.</li>
				</ul>
				<p>
					Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					APIdagi xatolik tufayli uchinchi tomon ilovalari shaxsiy ilovalarga kirishi mumkin edi va hatto nashr
					etilmagan fotosuratlar.
				</p>
				<p>
					Facebook uchinchi tomon ilovalariga sabab bo‘ladigan API xatosini aniqladi shaxsiy foydalanuvchi
					fotosuratlariga kirishi mumkin, vc.ru{" "}
					<a
						href="https://vc.ru/social/53459-facebook-rasskazala-ob-uyazvimosti-kotoraya-mogla-otkryt-dostup-k-lichnym-fotografiyam-6-8-mln-polzovateley?from=rss"
						target="_blank"
						rel="noreferrer noopener"
					>
						aytishlaricha
					</a>{" "}
					hodisa 6,8 million kishiga ta'sir qilishi mumkin deb kampaniya
					<a
						href="https://developers.facebook.com/blog/post/2018/12/14/notifying-our-developer-ecosystem-about-a-photo-api-bug/"
						target="_blank"
						rel="noreferrer noopener"
					>
						xabar berdi
					</a>{" "}
				</p>
				<p>
					Bular foydalanuvchilar uchun ruxsat beruvchi ilovalar. Facebookdagi fotosuratlaringiz. Odatda ijtimoiy tarmoq
					faqat ular bilan baham ko'radi foydalanuvchining vaqt jadvalida chop etilgan tasvirlar. Lekin xato tufayli
					uchinchi tomon ilovalari suratlarga kirishi mumkin, "Hikoyalar", Marketplace bozorida, shuningdek, nashr
					etilgan foydalanuvchi Facebook-ga yuklagan, lekin oxirida yuklamagan fotosuratlarga nashr eta boshladi.
					Ikkinchisi mumkin, chunki ijtimoiy tarmoq nusxasini saqlaydi Tasvirlar.
				</p>
				<p>
					APIdagi xatolik 2018-yilning 13-25-sentyabr kunlarida mavjud edi buni Facebook ishlab chiquvchilari payqamadi.
					Ayni paytda potentsial kirish foydalanuvchilarning shaxsiy fotosuratlariga 876 ta ilovadan 1500 tasi
					kiritilgan ishlab chiquvchilar.
				</p>
				<p>
					Facebook bundan ta'sirlangan bo'lishi mumkin bo'lgan foydalanuvchilarni ogohlantiradi xato. Ular ilovalar
					ro'yxatiga havola bilan bildirishnoma oladilar, ularning fotosuratlariga kim kirishi mumkin edi. Kompaniya ham
					shaxsiy rasmlarni olib tashlash uchun ilova ishlab chiqaruvchilariga murojaat qiling foydalanuvchilar.
				</p>
				<ul>
					<li>Bu sodir boʻlganidan afsusdamiz”, — deyiladi Facebook xabarida.</li>
				</ul>
				<p>
					Manba'a uchun link{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>Due to a bug in the API, third-party applications could access private and even unpublished photos.</p>
				<p>
					Facebook has discovered an API bug that could allow third-party apps to access private user photos,{" "}
					<a
						href="https://vc.ru/social/53459-facebook-rasskazala-ob-uyazvimosti-kotoraya-mogla-otkryt-dostup-k-lichnym-fotografiyam-6-8-mln-polzovateley?from=rss"
						target="_blank"
						rel="noreferrer noopener"
					>
						writes
					</a>{" "}
					vc.ru. The incident could have affected up to 6.8 million people,{" "}
					<a
						href="https://developers.facebook.com/blog/post/2018/12/14/notifying-our-developer-ecosystem-about-a-photo-api-bug/"
						target="_blank"
						rel="noreferrer noopener"
					>
						says
					</a>{" "}
					in a company message.
				</p>
				<p>
					We are talking about applications that users give access to their photos on Facebook. Usually the social
					network shares with them only those images that are published in the user's timeline. But due to a mistake
					third-party apps could access pictures posted in "stories" on the marketplace Marketplace, as well as to
					photos that the user uploaded to Facebook, but ultimately did not publish. The latter is possible because the
					social network stores a copy of the image.
				</p>
				<p>
					The bug in the API existed from September 13 to 25, 2018, until it was noticed by the Facebook developers. IN
					During this time, 1,500 applications from 876 developers had potential access to users' personal photos.
				</p>
				<p>
					Facebook will warn users who may have been affected by this bug. They will receive a notification with a link
					to a list of applications that may have accessed their photos. The company will also contact the developers
					applications to delete users' private pictures.
				</p>
				<ul>
					<li>"We're sorry this happened," Facebook said in a message.</li>
				</ul>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
	next: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
