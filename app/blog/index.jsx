import Container from "@/components/container"
import SEO from "@/components/seo"
import { checkLang } from "@/utils/checkLang"
import Image from "next/image"
import Link from "next/link"
import st from "./blog.module.scss"
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

export const blog = [
	{
		img: "/blog/cyberpunk.jpg",
		link: "/blog/cyberpunk-2077",
		date: "24.12.2020",
		title: {
			ru: "Акции разработчика игры Cyberpunk 2077 рухнули на 20%",
			uz: "Cyberpunk 2077 ishlab chiqaruvchisi ulushlari 20 foizga tushib ketdi",
			en: "Cyberpunk 2077 game developer stocks plummeted 20%",
		},
		description: {
			ru: (
				<>
					<p>
						Котировки польской студии CD Projekt Red резко подешевели на фоне удаления игры Cyberpunk 2077 из магазина
						Sony.
					</p>
					<p>В ходе торгов на Варшавской…</p>
				</>
			),
			uz: (
				<>
					<p>
						Polshaning CD Projekt Red studiyasining iqtiboslari fonida keskin tushib ketdi Sony do'konidan Cyberpunk
						2077 o'yinini olib tashlash.
					</p>
					<p>Varshavadagi kim oshdi savdosida...</p>
				</>
			),
			en: (
				<>
					<p>
						Prices of Polish studio CD Projekt Red fell sharply amid the removal of Cyberpunk 2077 from the store Sony.
					</p>
					<p>During the auction on Varshavskaya…</p>
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
					<p>Президент Шавкат Мирзиёев объявил 2019 год Годом активных инвестиций и социального…</p>
				</>
			),
			uz: (
				<>
					<p>
						Prezident qulay sarmoyaviy muhit olib kelishini ta’kidladi barcha sohalarni rivojlantirishga xizmat qiladi.
					</p>{" "}
					<p>Prezident Shavkat Mirziyoyev 2019-yilni Faol investitsiyalar yili deb e’lon qildi ijtimoiy…</p>
				</>
			),
			en: (
				<>
					<p>
						The President stressed that a favorable investment environment will lead to the development of all areas.
					</p>{" "}
					<p>President Shavkat Mirziyoyev declared 2019 the Year of Active Investments and Social…</p>
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
	{
		img: "/blog/uzcard.jpg",
		link: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
		date: "27.12.2018",
		title: {
			ru: "Карты UzCard теперь можно пополнять наличными",
			uz: "UzCard kartalarini endi naqd pulda to‘ldirish mumkin",
			en: "UzCard cards can now be replenished in cash",
		},
		description: {
			ru: (
				<>
					<p>В компании сообщили, что запустили в банкоматах функцию cash-in.</p>
					<p>Пока такую функцию поддерживают банкоматы пяти банков. Карты UzCard теперь можно пополнять наличными,…</p>
				</>
			),
			uz: (
				<>
					<p>Kompaniya bankomatlarda naqd pul olish funksiyasini ishga tushirganini e'lon qildi.</p>
					<p>
						Hozircha bu funksiya beshta bankning bankomatlari tomonidan qo‘llab-quvvatlanadi. UzCards Endi siz naqd pul
						bilan to'ldirishingiz mumkin...
					</p>
				</>
			),
			en: (
				<>
					<p>The company announced that they have launched the cash-in function in ATMs.</p>
					<p>So far, ATMs of five banks support this function. UzCard cards can now be topped up in cash,…</p>
				</>
			),
		},
	},
	{
		img: "/blog/bitcoin.jpg",
		link: "/blog/financial-times-soobshhaet-chto-majnery-zakryvayut-biznes-tak-kak-bitkoin-stal-deshevle-stoimosti-ego-dobychi",
		date: "26.12.2018",
		title: {
			ru: "Financial Times сообщает, что майнеры закрывают бизнес, так как биткоин стал дешевле стоимости его добычи",
			uz: "Financial Times ma'lumotlariga ko'ra, konchilar biznesni yopishmoqda, chunki bitkoin ishlab chiqarish narxidan arzonlashdi",
			en: "Financial Times reports that miners are shutting down business as bitcoin has become cheaper than the cost of its production,",
		},
		description: {
			ru: (
				<>
					<p>Летом Узбекистан официально взял курс на развитие майнинга и собирался запустить пилотный проект.</p>
					<p>Британская компания Bladetech, которая в марте объявила о строительстве…</p>
				</>
			),
			uz: (
				<>
					<p>
						Yozda O‘zbekiston rasman tog‘-kon sanoatini rivojlantirish yo‘nalishini belgilab oldi va bu yo‘nalishga ham
						bormoqchi edi tajriba loyihasini ishga tushirish.
					</p>
					<p>Mart oyida e'lon qilgan Britaniya kompaniyasi Bladetech qurilish…</p>
				</>
			),
			en: (
				<>
					<p>
						In the summer, Uzbekistan officially set a course for the development of mining and was going to launch a
						pilot project.
					</p>
					<p>British company Bladetech, which in March announced the construction of…</p>
				</>
			),
		},
	},
	{
		img: "/blog/plastic-card.jpg",
		link: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
		date: "25.12.2018",
		title: {
			ru: "Центральный банк опубликовал проект закона о платежах и электронных деньгах в Узбекистане",
			uz: "Markaziy bank O‘zbekistonda to‘lovlar va elektron pullar to‘g‘risida”gi qonun loyihasini e’lon qildi",
			en: "The Central Bank has published a draft law on payments and electronic money in Uzbekistan",
		},
		description: {
			ru: (
				<p>
					Что такое электронные деньги, кто имеет право их выпускать, как ими рассчитываться, где их могут принимать, а
					также многое другое —…
				</p>
			),
			uz: (
				<p>
					Elektron pul nima, uni kim chiqarish huquqiga ega, undan qanday foydalanish kerak to'lash, ularni qabul qilish
					mumkin bo'lgan joy va yana ko'p narsalar - ...
				</p>
			),
			en: (
				<p>
					What is electronic money, who has the right to issue it, how to use it, where they can accept it, and also
					much more…
				</p>
			),
		},
	},
	{
		img: "/blog/spacex.jpg",
		link: "/blog/ilon-mask-xochet-privlech-500-mln-na-sozdanie-mirovogo-interneta",
		date: "24.12.2018",
		title: {
			ru: "Илон Маск хочет привлечь $500 млн на создание мирового интернета",
			uz: "Ilon Mask jahon internetini qurish uchun 500 million dollar yig‘moqchi",
			en: "Elon Musk wants to raise $500 million to build the world's internet",
		},
		description: {
			ru: (
				<>
					<p>Проект Starlink предполагает создание обширной сети спутников, способных передавать интернет-трафик.</p>
					<p>SpaceX Илона Маска планирует привлечь $500 млн для запуска собственной сети космических…</p>
				</>
			),
			uz: (
				<>
					<p>
						Starlink loyihasi sun'iy yo'ldoshlarning keng tarmog'ini yaratishni o'z ichiga oladi, Internet-trafikni
						uzatishga qodir.
					</p>
					<p>
						Ilon Maskning SpaceX kompaniyasi o‘zini uchirish uchun 500 million dollar yig‘ishni rejalashtirmoqda kosmik
						tarmoqlar ...
					</p>
				</>
			),
			en: (
				<>
					<p>
						The Starlink project involves the creation of an extensive network of satellites capable of transmitting
						Internet traffic.
					</p>
					<p>SpaceX Elon Musk plans to raise $500 million to launch his own network of space…</p>
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

export function BlogBlock({ pagination, blog, language }) {
	const langData = {
		seoT: {
			ru: "Новости | Airnet",
			uz: "Yangiliklar | Airnet",
			en: "News | Airnet",
		},
		descT: {
			ru: "Новости компании Airnet",
			uz: "Airnet kampaniyasi yangiliklari",
			en: "Airnet News",
		},
		headTitle: {
			ru: "Новости",
			uz: "Yangiliklar",
			en: "News",
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
      
			<BreadCrumbs data={[{ name: 'Новости' }]} />
			<PageBreadcrumb links={[{ name: 'Новости' }]} />

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
		</>
	)
}
