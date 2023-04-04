import Container from "@/components/container"
import ImageFullScreen from "@/components/imageFullScreen"
import Partners from "@/components/partners"
import SEO from "@/components/seo"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./sitepad.module.scss"

const data = [
	{
		title: {
			ru: "Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)",
			uz: "1-qadam (SitePad Website Builder-ni qidiring va ustiga bosing)",
		},
		img: "/sitepad/step-1.jpg",
		width: 500,
		height: 264,
	},
	{
		title: {
			ru: "Шаг № 2 (Выберите слева Добавить сайт)",
			uz: "2-qadam (Chapdagi Sayt qo'shish-ni tanlang)",
		},
		img: "/sitepad/step-2.jpg",
		width: 500,
		height: 283,
	},
	{
		title: { ru: "Шаг № 3 (Нажмите Начать)", uz: "3-qadam (Startni bosing)" },
		img: "/sitepad/step-3.jpg",
		width: 500,
		height: 243,
	},
	{
		title: {
			ru: "Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)",
			uz: "4-qadam (Siz yaratayotgan sayt toifasiga mos mavzuni toping)",
		},

		img: "/sitepad/step-4.jpg",
		width: 500,
		height: 297,
	},
	{
		title: {
			ru: "Шаг № 5 (Визуальный просмотр демо-сайта)",
			uz: "5-qadam (demo saytning vizual ko'rinishi)",
		},
		img: "/sitepad/step-5.jpg",
		width: 500,
		height: 356,
	},
	{
		title: {
			ru: "Шаг № 6 (Подтвердите установку выбранной темы)",
			uz: "6-qadam (Tanlangan mavzuni o'rnatishni tasdiqlang)",
		},

		img: "/sitepad/step-6.jpg",
		width: 500,
		height: 367,
	},
	{
		title: {
			ru: "Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)",
			uz: "7-qadam (Bo'lajak saytingizni sozlash uchun maydonlarni to'ldiring va o'rnatish tugmasini bosing)",
		},

		img: "/sitepad/step-7.jpg",
		width: 500,
		height: 287,
	},
	{
		title: {
			ru: "Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)",
			uz: "8-qadam (O'rnatishdan so'ng saytingizning ichki sahifalarini osongina o'zgartirishingiz mumkin)",
		},

		img: "/sitepad/step-8.jpg",
		width: 500,
		height: 216,
	},
	{
		title: {
			ru: "Шаг № 9 (Опции по редактированию страницы)",
			uz: "9-qadam (sahifani tahrirlash parametrlari)",
		},
		img: "/sitepad/step-9.jpg",
		width: 500,
		height: 237,
	},
]

export default function SitePad({ language }) {
	const [image, setImage] = useState("")

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden"
		else document.body.style = "overflow:unset"
	}, [image])
	const langData = {
		seoT: {
			ru: "Бесплатный Конструктор сайтов SitePad | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Bepul veb-sayt yaratuvchisi SitePad | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		},
		descT: {
			ru: "Простой и быстрый бесплатный конструктор сайтов в Ташкенте SitePad, создайте профессиональный сайт без навыком программированя в зоне TAS-IX",
			uz: "Toshkentda oddiy va tezkor bepul veb-sayt yaratuvchisi SitePad, TAS-IX zonasida dasturlash ko'nikmalarisiz professional veb-sayt yarating",
		},
		headTitle: {
			ru: "Конструктор сайтов SitePad",
			uz: "SitePad yaratuvchi Veb-sayt ",
		},
		usluga: {
			ru: (
				<>
					<div className={styles.sitepad__info__content}>
						<h3>Об услуге</h3>
						<p>
							Создайте свой профессиональный веб-сайт с помощью простого в
							использовании редактора и публикуйте статические веб-страницы.
							Более 500 адаптивных тем веб-сайтов, которые охватывают широкий
							спектр категорий, таких как блог, бизнес, портфолио, рестораны,
							путешествия и многие другие.
						</p>
						<p>
							Более 40 виджетов, таких как слайдер изображений/видео, галереи
							изображений, форматированный текст, видео, аудио, Service Box,
							Google Maps, Контактная форма, социальные сети и многое другое,
							что поможет вам создать свой веб-сайт
						</p>
						{/* <Link href={checkLang(language)+LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
					</div>
					<div className={styles.sitepad__info__img}>
						<img src="/sitepad-img.png" />
					</div>
				</>
			),
			uz: (
				<>
					<div className={styles.sitepad__info__content}>
						<h3>Hizmatlar</h3>
						<p>
							Foydalanish uchun qulay bo'lgan professional veb-saytingizni
							yarating muharriridan foydalanib, statik veb-sahifalarni nashr
							eting. 500 dan ortiq sezgir veb-sayt mavzulari keng doirani qamrab
							oladi blog, biznes, portfel, restoranlar kabi toifalar qatori,
							sayohat va boshqalar.
						</p>
						<p>
							Rasm/video slayder, galereyalar kabi 40 dan ortiq vidjetlar
							rasmlar, boy matn, video, audio, xizmat ko'rsatish qutisi, Google
							Xaritalar, Kontakt shakli, ijtimoiy tarmoqlar va boshqalar,
							veb-saytingizni yaratishga nima yordam beradi
						</p>
						{/* <Link href={checkLang(language)+LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
					</div>
					<div className={styles.sitepad__info__img}>
						<img src="/sitepad-img.png" />
					</div>
				</>
			),
		},
		first: {
			ru: (
				<>
					<p>
						После того как вы прошли регистрацию и заказали у нас хостинг, на
						вашем почтовом адресе указанным при регистрации отправлены данные от
						хостинг-панели Cpanel, перейдите в{" "}
						<a
							href="https://cpanel.airnet.uz/"
							title="https://cpanel.airnet.uz/"
							target="_blank"
							rel="noreferrer noopener"
							className="text-decoration-underline"
						>
							хостинг-панель
						</a>{" "}
						и следуйте инструкции указанной ниже с пошаговыми скриншотами.
					</p>

					<div className={styles.sitepad__block}>
						{data.map((item) => (
							<div className={styles.sitepad__block__item}>
								<p>{item.title[language]}</p>
								<Image
									loading="lazy"
									onClick={() => setImage(item.img)}
									width={item.width}
									height={item.height}
									src={item.img}
								/>
							</div>
						))}
					</div>

					<p>
						Если у вас остались вопросы, вы всегда можете обратиться в нашу
						тех.поддержку для получения консультации по возникшим вопросам!
					</p>
					{/* <p>+99871-200-87-00</p>
				<p>+99890-324-30-80 </p>
				<p>
					Наш{" "}
					<a
						href="https://t.me/airnetuzb"
						target="_blank"
						rel="noreferrer noopener"
						title="https://t.me/airnetuzb"
						className="text-decoration-underline"
					>
						телеграм
					</a>{' '}
				</p> */}
				</>
			),
			uz: (
				<>
					<p>
						Ro'yxatdan o'tganingizdan va bizdan hostingga buyurtma
						berganingizdan so'ng, yoqing ro'yxatdan o'tish paytida ko'rsatilgan
						pochta manzilingiz ma'lumotlarni yubordi cpanel hosting paneliga
						o'ting{" "}
						<a
							href="https://cpanel.airnet.uz/"
							title="https://cpanel.airnet.uz/"
							target="_blank"
							rel="noreferrer noopener"
							className="text-decoration-underline"
						>
							hosting paneli
						</a>{" "}
						va bosqichma-bosqich skrinshotlar bilan quyidagi ko'rsatmalarga
						rioya qiling.
					</p>

					<div className={styles.sitepad__block}>
						{data.map((item) => (
							<div className={styles.sitepad__block__item}>
								<p>{item.title[language]}</p>
								<Image
									loading="lazy"
									onClick={() => setImage(item.img)}
									width={item.width}
									height={item.height}
									src={item.img}
								/>
							</div>
						))}
					</div>

					<p>
						Agar sizda biron bir savol bo'lsa, har doim biz bilan
						bog'lanishingiz mumkin har qanday savol bo'yicha maslahat olish
						uchun texnik yordam!
					</p>
					{/* <p>+99871-200-87-00</p>
				<p>+99890-324-30-80 </p>
				<p>
					Наш{" "}
					<a
						href="https://t.me/airnetuzb"
						target="_blank"
						rel="noreferrer noopener"
						title="https://t.me/airnetuzb"
						className="text-decoration-underline"
					>
						телеграм
					</a>{' '}
				</p> */}
				</>
			),
		},
	}
	return (
		<div className={styles.sitepad}>
			<SEO title={langData.seoT[langData]} desc={langData.descT[language]} />

			<Container headTitle={langData.headTitle[language]}>
				<div className={styles.sitepad__info}>{langData.usluga[language]}</div>
			</Container>

			{/* <Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title="Конструктор сайтов SitePad"
				className="my-0">
			</Container> */}
			<Container className="px-3">{langData.first[language]}</Container>
			{image && <ImageFullScreen image={image} setImage={setImage} />}

			<Partners language={language} />
		</div>
	)
}
