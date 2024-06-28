import { checkLang } from "@/utils/checkLang"
import Link from "next/link"
import { NewsBlock } from ".."
import st from "../news.module.scss"

export const news = [
	{
		img: "/blog/yandex-musics.jpg",
		link: "/blog/yandeks-muzyka-i-beeline-zapustili-sovmestnyj-proekt",
		date: "23.12.2018",
		title: {
			ru: "«Яндекс.Музыка» и Beeline запустили совместный проект",
			uz: "Yandex.Musiqa va Beeline hamkorlikdagi loyihani ishga tushirdi",
			en: "Yandex.Music and Beeline launched a joint project",
		},
		description: {
			ru: (
				<>
					<p>
						Мобильные операторы все активнее сотрудничают с поставщиками аудиоконтента — ранее похожие проекты запустили
						Ucell и Zvooq, UMS и Lamuz.
					</p>
					<p>«Яндекс.Музыка» и Beeline…</p>
				</>
			),
			uz: (
				<>
					<p>
						Uyali aloqa operatorlari etkazib beruvchilar bilan tobora ko'proq hamkorlik qilmoqda audio-kontent — ilgari
						shu kabi loyihalar Ucell va Zvooq, UMS va Lamuz.
					</p>
					<p>Yandex.Musiqa va Beeline...</p>
				</>
			),
			en: (
				<>
					<p>
						Mobile operators are increasingly cooperating with suppliers audio content — previously similar projects
						were launched by Ucell and Zvooq, UMS and Lamuz.
					</p>
					<p>Yandex.Music and Beeline…</p>
				</>
			),
		},
	},
	{
		img: "/blog/sim-card.jpg",
		link: "/blog/v-uzbekistane-razreshat-soxranyat-nomer-pri-smene-operatora",
		date: "22.12.2018",
		title: {
			ru: "В Узбекистане разрешат сохранять номер при смене оператора",
			uz: "O‘zbekistonda operatorni almashtirishda raqamni saqlab qolishga ruxsat beriladi",
			en: "In Uzbekistan, it will be allowed to keep the number when changing the operator",
		},
		description: {
			ru: (
				<>
					<p>Услуга будет платной, а переносить номер можно будет не чаще одного раза в 180 дней.</p>
					<p>В Узбекистане разрешат сохранять номер при смене…</p>
				</>
			),
			uz: (
				<>
					<p>Xizmat pullik bo'ladi va raqamni ko'pi bilan bir marta o'tkazish mumkin bo'ladi marta 180 kun ichida.</p>
					<p>O‘zbekistonda raqamni o‘zgartirganda saqlashga ruxsat beriladi ...</p>
				</>
			),
			en: (
				<>
					<p>
						The service will be paid, and it will be possible to port the number no more than once times in 180 days.
					</p>
					<p>In Uzbekistan, it will be allowed to save the number when changing ...</p>
				</>
			),
		},
	},
	{
		img: "/blog/lenovo-phone.jpg",
		link: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
		date: "21.12.2018",
		title: {
			ru: "Lenovo представила первый в мире смартфон с 12 ГБ оперативной памяти",
			uz: "Lenovo kompaniyasi 12 Gb tezkor xotiraga ega dunyodagi birinchi smartfonni taqdim etdi",
			en: "Lenovo unveils the world's first smartphone with 12GB of RAM",
		},
		description: {
			ru: (
				<>
					<p>Lenovo Z5 Pro GT первым в мире получил 12 ГБ оперативной памяти и новейший процессор Snapdragon 855.</p>
					<p>Lenovo представила новую версию смартфона-слайдера…</p>
				</>
			),
			uz: (
				<>
					<p>Lenovo Z5 Pro GT dunyoda birinchi bo'lib 12 GB operativ xotira va so'nggi Snapdragon 855 protsessori.</p>
					<p>Lenovo slider smartfonining yangi versiyasini taqdim etdi...</p>
				</>
			),
			en: (
				<>
					<p>Lenovo Z5 Pro GT is the first in the world to receive 12 GB of RAM and latest Snapdragon 855 processor.</p>
					<p>Lenovo has introduced a new version of the slider smartphone…</p>
				</>
			),
		},
	},
	{
		img: "/blog/santa.jpg",
		link: "/blog/v-telegram-poyavilis-vstroennye-oprosy",
		date: "20.12.2018",
		title: {
			ru: "В Telegram появились встроенные опросы",
			uz: "Telegramda o‘rnatilgan so‘rovnomalar mavjud",
			en: "Telegram has built-in polls",
		},
		description: {
			ru: (
				<>
					<p>В новом обновлении мессенджера для создания опроса теперь не надо пользоваться сторонними решениями.</p>
					<p>Команда Telegram представила специальный инструмент для создания опросов. Об…</p>
				</>
			),
			uz: (
				<>
					<p>
						Yangi messenjer yangilanishida siz endi so'rovnoma yaratishingiz shart emas uchinchi tomon yechimlaridan
						foydalaning.
					</p>
					<p>Telegram jamoasi yaratish uchun maxsus vositani taqdim etdi so'rovlar. Haqida…</p>
				</>
			),
			en: (
				<>
					<p>In the new messenger update, you no longer need to create a survey use third party solutions.</p>
					<p>The Telegram team introduced a special tool for creating surveys. About…</p>
				</>
			),
		},
	},
	{
		img: "/blog/phone-vpn.jpg",
		link: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
		date: "19.12.2018",
		title: {
			ru: "Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android",
			uz: "Birinchi marta VPN ilovalari O‘zbekistonda ham iOS, ham Android uchun eng ko‘p yuklab olingan ilovalarga aylandi",
			en: "For the first time, VPN applications have become the most downloaded in Uzbekistan for both iOS and Android",
		},
		description: {
			ru: (
				<>
					<p>Первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store — VPN Proxy Master.</p>
					<p>VPN-приложения стали самыми…</p>
				</>
			),
			uz: (
				<>
					<p>
						Google Play’da yuklab olishlar soni bo‘yicha birinchi o‘rinni Secure egalladi VPN va App Store do'konida -
						VPN Proxy Master.
					</p>
					<p>VPN ilovalari eng koʻp...</p>
				</>
			),
			en: (
				<>
					<p>
						The first place in terms of the number of downloads in Google Play was taken by Secure VPN, and in the App
						Store - VPN Proxy Master.
					</p>
					<p>VPN apps have become the most…</p>
				</>
			),
		},
	},
	{
		img: "/blog/google-5g.jpg",
		link: "/blog/v-kitae-reshili-otkazatsya-ot-3g",
		date: "18.12.2018",
		title: {
			ru: "В Китае решили отказаться от 3G",
			uz: "Xitoy 3Gdan voz kechishga qaror qildi",
			en: "China decided to abandon 3G",
		},
		description: {
			ru: (
				<>
					<p>В прошлом году страна отказалась от 2G, а в этом году решила сделать то же самое с 3G.</p>
					<p>Основные китайские и тайваньские…</p>
				</>
			),
			uz: (
				<>
					<p>O'tgan yili mamlakat 2G dan voz kechdi va bu yil buni qilishga qaror qildi 3G bilan ham xuddi shunday.</p>
					<p>Asosiy Xitoy va Tayvan...</p>
				</>
			),
			en: (
				<>
					<p>Last year, the country abandoned 2G, and this year decided to make the same with 3G.</p>
					<p>Basic Chinese and Taiwanese...</p>
				</>
			),
		},
	},
	{
		img: "/blog/yandex-money.jpg",
		link: "/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane",
		date: "17.12.2018",
		title: {
			ru: "«Яндекс.Деньги» работают над расширением методов пополнения кошельков в Узбекистане",
			uz: "Yandex.Money O‘zbekistonda hamyonlarni to‘ldirish usullarini kengaytirish ustida ishlamoqda",
			en: "Yandex.Money is working on expanding the methods of replenishing wallets in Uzbekistan",
		},
		description: {
			ru: (
				<>
					<p>Сейчас в Узбекистане можно пополнить кошелек лишь через конверсионные и валютные карты.</p>{" "}
					<p>В «Яндексе.Деньгах» работают над расширением методов пополнения кошельков в Узбекистане….</p>
				</>
			),
			uz: (
				<>
					<p>Endi O‘zbekistonda hamyonni faqat orqali to‘ldirish mumkin konvertatsiya va valyuta kartalari.</p>{" "}
					<p>Yandex.Money depozit usullarini kengaytirish ustida ishlamoqda O'zbekistonda hamyonlar...</p>
				</>
			),
			en: (
				<>
					<p>Now in Uzbekistan you can replenish your wallet only through conversion and currency cards.</p>{" "}
					<p>Yandex.Money is working on expanding deposit methods wallets in Uzbekistan….</p>
				</>
			),
		},
	},
	{
		img: "/blog/facebook.jpg",
		link: "/blog/facebook-soobshhil-ob-oshibke",
		date: "16.12.2018",
		title: {
			ru: "Facebook сообщил об ошибке",
			uz: "Facebook xato haqida xabar berdi",
			en: "Facebook reported an error",
		},
		description: {
			ru: (
				<>
					<p>
						Из-за ошибки в API сторонние приложения могли получить доступ к закрытым и даже неопубликованным
						фотографиям.
					</p>
					<p>Facebook обнаружила ошибку в API, из-за которой…</p>
				</>
			),
			uz: (
				<>
					<p>
						APIdagi xatolik tufayli uchinchi tomon ilovalari kirishi mumkin edi yopiq va hatto nashr etilmagan suratlar.{" "}
					</p>
					<p>Facebook API xatosiga duch keldi...</p>
				</>
			),
			en: (
				<>
					<p>Due to a bug in the API, third-party applications could access closed and even unpublished photos. </p>
					<p>Facebook has encountered an API bug that is causing…</p>
				</>
			),
		},
	},
	{
		img: "/blog/speedtest.jpg",
		link: "/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane",
		date: "14.12.2018",
		title: {
			ru: "Speedtest небольшой рост скорости интернета в Узбекистане",
			uz: "Speedtest O‘zbekistonda internet tezligini biroz oshirdi",
			en: "Speedtest small increase in internet speed in Uzbekistan",
		},
		description: {
			ru: (
				<>
					<p>
						По итогам ноября Узбекистан занял 108 место по скорости мобильного интернета и 111 по скорости проводного.
					</p>
					<p>Интернет-сервис Speedtest.net ирландской компании Ookla</p>
				</>
			),
			uz: (
				<>
					<p>
						Noyabr oyi yakunlari bo‘yicha O‘zbekiston mobil aloqa tezligi bo‘yicha 108-o‘rinni egalladi. Internet va
						simli tezlik uchun 111.
					</p>
					<p>Irlandiyaning Ookla kompaniyasining Speedtest.net internet xizmati</p>
				</>
			),
			en: (
				<>
					<p>
						As a result of November, Uzbekistan ranked 108th in terms of mobile speed. Internet and 111 for wired speed.
					</p>
					<p>Internet service Speedtest.net of the Irish company Ookla</p>
				</>
			),
		},
	},
	{
		img: "/blog/google-5g.jpg",
		link: "/blog/google-podvel-itogi-2018-goda",
		date: "13.12.2018",
		title: {
			ru: "Google подвел итоги 2018 года",
			uz: "Google 2018 yil yakunlarini sarhisob qildi",
			en: "Google summed up the results of 2018",
		},
		description: {
			ru: (
				<>
					<p>
						Google подвел{" "}
						<a href="https://trends.google.com/trends/yis/2018/GLOBAL/" target="_blank" rel="noreferrer noopener">
							итоги года
						</a>
						, проанализировав поисковые запросы пользователей со всего мира.
					</p>
					<p>Больше всего в этом году искали информацию о Чемпионате…</p>
				</>
			),
			uz: (
				<>
					<p>
						Google butun dunyo bo'ylab foydalanuvchilarning qidiruv so'rovlarini tahlil qilish orqali{" "}
						<a href="https://trends.google.com/trends/yis/2018/GLOBAL/" target="_blank" rel="noreferrer noopener">
							yil natijalarini
						</a>{" "}
						chiqardi.
					</p>
					<p>Bu yil chempionat haqidagi ma'lumot eng ko'p qidirilganlar...</p>
				</>
			),
			en: (
				<>
					<p>
						Google{" "}
						<a href="https://trends.google.com/trends/yis/2018/GLOBAL/" target="_blank" rel="noreferrer noopener">
							summed up the year
						</a>
						by analyzing the search queries of users from all over the world.
					</p>
					<p>Most searched this year for information about the Championship…</p>
				</>
			),
		},
	},
]

export default function News({ language }) {
	const pagination = {
		ru: (
			<>
				<Link href={checkLang(language) + "/news"}>
					<a>&laquo; Предыдущий пост</a>
				</Link>
				<Link href={checkLang(language) + "/news"}>
					<a>1</a>
				</Link>
				<a className={st.news__links__active}>2</a>
				<Link href={checkLang(language) + "/news/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/news/page/3"}>
					<a>Следующий пост &raquo;</a>
				</Link>
			</>
		),
		uz: (
			<>
				<a className={st.news__links__active} disabled>
					&laquo; Oldingi post
				</a>
				<Link href={checkLang(language) + "/news/page/2"}>
					<a>1</a>
				</Link>
				<a className={st.news__links__active}>2</a>
				<Link href={checkLang(language) + "/news/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/news/page/3"}>
					<a>Keyingi post &raquo;</a>
				</Link>
			</>
		),
		en: (
			<>
				<Link href={checkLang(language) + "/news"}>
					<a>&laquo; Previous post</a>
				</Link>
				<Link href={checkLang(language) + "/news"}>
					<a>1</a>
				</Link>
				<a className={st.news__links__active}>2</a>
				<Link href={checkLang(language) + "/news/page/3"}>
					<a>3</a>
				</Link>
				<Link href={checkLang(language) + "/news/page/3"}>
					<a>Next post &raquo;</a>
				</Link>
			</>
		),
	}

	return <NewsBlock pagination={pagination} news={news} language={language} />
}
