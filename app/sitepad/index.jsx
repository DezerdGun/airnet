import Container from "../../components/container";
import Image from "next/image";
import Partners from "../../components/partners";
import SEO from "../../components/seo";
import { useEffect, useState } from "react";
import ImageFullScreen from "../../components/imageFullScreen";
import styles from "./sitepad.module.scss";

const data = [
	{
		title: "Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)",
		img: "/sitepad/step-1.jpg",
		width: 500,
		height: 264,
	},
	{
		title: "Шаг № 2 (Выберите слева Добавить сайт)",
		img: "/sitepad/step-2.jpg",
		width: 500,
		height: 283,
	},
	{
		title: "Шаг № 3 (Нажмите Начать)",
		img: "/sitepad/step-3.jpg",
		width: 500,
		height: 243,
	},
	{
		title: "Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)",
		img: "/sitepad/step-4.jpg",
		width: 500,
		height: 297,
	},
	{
		title: "Шаг № 5 (Визуальный просмотр демо-сайта)",
		img: "/sitepad/step-5.jpg",
		width: 500,
		height: 356,
	},
	{
		title: "Шаг № 6 (Подтвердите установку выбранной темы)",
		img: "/sitepad/step-6.jpg",
		width: 500,
		height: 367,
	},
	{
		title: "Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)",
		img: "/sitepad/step-7.jpg",
		width: 500,
		height: 287,
	},
	{
		title:
			"Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)",
		img: "/sitepad/step-8.jpg",
		width: 500,
		height: 216,
	},
	{
		title: "Шаг № 9 (Опции по редактированию страницы)",
		img: "/sitepad/step-9.jpg",
		width: 500,
		height: 237,
	},
];

export default function SitePad() {
	const [image, setImage] = useState("");

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden";
		else document.body.style = "overflow:unset";
	}, [image]);

	return (
		<div className={styles.sitepad}>
			<SEO
				title="Бесплатный Конструктор сайтов SitePad | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Простой и быстрый бесплатный конструктор сайтов в Ташкенте SitePad, создайте профессиональный сайт без навыком программированя в зоне TAS-IX"
			/>
			
			<Container headTitle="Конструктор сайтов SitePad">
				<div className={styles.sitepad__info}>
					<div className={styles.sitepad__info__content}>
						<h3>Об услуге</h3>
						<p>
							Создайте свой профессиональный веб-сайт с помощью простого в использовании редактора и публикуйте статические веб-страницы. Более 500 адаптивных тем веб-сайтов, которые охватывают широкий спектр категорий, таких как блог, бизнес, портфолио, рестораны, путешествия и многие другие.
						</p>
						<p>
							Более 40 виджетов, таких как слайдер изображений/видео, галереи изображений, форматированный текст, видео, аудио, Service Box, Google Maps, Контактная форма, социальные сети и многое другое, что поможет вам создать свой веб-сайт
						</p>
						{/* <Link href={LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link> */}
					</div>
					<div className={styles.sitepad__info__img}>
						<img src="/sitepad-img.png" />
					</div>
				</div>
			</Container>

			{/* <Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title="Конструктор сайтов SitePad"
				className="my-0">
			</Container> */}
			<Container className="px-3">
				<p>
					После того как вы прошли регистрацию и заказали у нас хостинг, на вашем почтовом адресе
					указанным при регистрации отправлены данные от хостинг-панели Cpanel, перейдите в{" "}
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
							<p>{item.title}</p>
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
					Если у вас остались вопросы, вы всегда можете обратиться в нашу тех.поддержку для
					получения консультации по возникшим вопросам!
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
			</Container>
			{image && <ImageFullScreen image={image} setImage={setImage} />}

			<Partners />
		</div>
	);
}
