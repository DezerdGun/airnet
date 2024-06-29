import NewsItem from "@/components/newsItem"

const data = {
	title: {
		ru: "«ВКонтакте» завела профиль в Instagram",
		uz: "VKontakte Instagram profilini ishga tushirdi",
		en: "VKontakte launched an Instagram profile",
	},
	desc: {
		ru: "Раньше «ВКонтакте» активно боролась с Instagram — отключала ссылки на сервис и пыталась создать конкурента.",
		uz: "Avvalroq “VKontakte” Instagram’ga qarshi faol kurashgan – u servisga havolalarni o‘chirib, raqobatchi yaratishga uringan",
		en: "Earlier, VKontakte actively fought against Instagram - it turned off links to the service and tried to create a competitor.",
	},
	date: "28.12.2018",
	img: "/blog/vk.jpg",
	content: {
		ru: (
			<>
				<p>
					Раньше «ВКонтакте» активно боролась с Instagram — отключала ссылки на сервис и пыталась создать конкурента.
				</p>

				<p>
					Соцсеть «ВКонтакте», запущенная в 2006 году, запустила свой профиль в Instagram. На это обратили внимание в
					VC.ru. Первая фотография в нём опубликована 21 декабря 2018 года — на ней изображён Дом Зингера, где
					расположена штаб-квартира «ВКонтакте».
				</p>
				<p>
					Представители «ВКонтакте» подтвердили, что это официальный профиль, но не стали подробно объяснять, зачем
					компании он понадобился.
				</p>
				<p>
					«ВКонтакте» раньше боролась с Instagram — в августе 2015 года соцсеть отключила ссылки на фотосервис на
					страницах пользователей и в личных сообщениях на фоне выхода фотоприложения Snapster.
				</p>
				<p>
					В апреле 2016 года ссылки включили обратно — во «ВКонтакте» объяснили, что это было вызвано не заботой о
					Snapster, а борьбой с людьми и организациями, которые занимались перепродажей трафика. Snapster закрыли в
					сентябре 2017 года.
				</p>
				<p>
					В Узбекистане проблемы с доступом к «ВКонтакте» наблюдаются с октября, когда начал с перебоями работать
					YouTube.
				</p>
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
					Ilgari VKontakte Instagramga qarshi faol kurash olib bordi - u havolalarni o'chirib qo'ydi xizmati va
					raqobatchi yaratishga harakat qildi.
				</p>

				<p>
					2006 yilda ishga tushirilgan "VKontakte" ijtimoiy tarmog'i o'z profilini yilda ishga tushirdi Instagram. Bu
					VC.ru saytida qayd etilgan. Undagi birinchi fotosurat 2018 yil 21-dekabrda nashr etilgan - bu xonanda xonanda
					tasvirlangan VKontakte shtab-kvartirasi joylashgan.
				</p>
				<p>
					VKontakte vakillari bu rasmiy profil ekanligini tasdiqladilar, ammo kompaniyaga nima uchun kerakligini
					batafsil tushuntirishni boshlamadi.
				</p>
				<p>
					"VKontakte" ilgari Instagram bilan kurashgan - 2015 yil avgustida ijtimoiy tarmoq foydalanuvchilarning
					sahifalarida va shaxsiy fotosuratlar xizmatiga o'chirilgan havolalar Snapster foto ilovasi ishga tushirilganda
					xabarlar.
				</p>
				<p>
					2016 yil aprel oyida havolalar qayta yoqildi - tushuntirdi VKontakte Bu Snapster haqida qayg'urishdan emas,
					balki odamlar bilan jang qilishdan va trafikni qayta sotish bilan shug'ullangan tashkilotlar. Snapster 2017
					yil sentyabr oyida yopildi.
				</p>
				<p>
					O‘zbekistonda oktyabr oyidan beri “VKontakte” tarmog‘iga kirishda muammolar kuzatilmoqda. YouTube vaqti-vaqti
					bilan boshlanganda.
				</p>
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
				<p>
					Previously, VKontakte actively fought against Instagram - it turned off links to service and tried to create a
					competitor.
				</p>

				<p>
					The social network "VKontakte", launched in 2006, launched its profile in Instagram. This was noticed in
					VC.ru. The first photo in it published December 21, 2018 - it depicts the Singer House, where the headquarters
					of VKontakte is located.
				</p>
				<p>
					Representatives of VKontakte confirmed that this is an official profile, but did not begin to explain in
					detail why the company needed it.
				</p>
				<p>
					"VKontakte" used to fight with Instagram - in August 2015, the social network disabled links to the photo
					service on the pages of users and in personal messages amid the launch of the Snapster photo app.
				</p>
				<p>
					In April 2016, the links were turned back on - VKontakte explained that it was caused not by caring about
					Snapster, but by fighting people and organizations that were engaged in the resale of traffic. Snapster closed
					in September 2017.
				</p>
				<p>
					In Uzbekistan, problems with access to VKontakte have been observed since October, when YouTube started
					intermittently.
				</p>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/deputaty-nachali-obsuzhdenie-zakonoproekta-o-personalnyx-dannyx",
	next: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
}

export default function Blog({ language }) {
	return <NewsItem data={data} language={language} />
}
