import Container from "../../components/container";
import Image from "next/image";
import Partners from "../../components/partners";
import SEO from "../../components/seo";
import { useEffect, useState } from "react";
import ImageFullScreen from "../../components/imageFullScreen";

export default function SitePad() {
	const [image, setImage] = useState("");

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden";
		else document.body.style = "overflow:unset";
	}, [image]);

	return (
		<>
			<SEO
				title="Бесплатный Конструктор сайтов SitePad | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Простой и быстрый бесплатный конструктор сайтов в Ташкенте SitePad, создайте профессиональный сайт без навыком программированя в зоне TAS-IX"
			/>
			<Container
				style={{ background: "url('/servers-2.jpg') no-repeat" }}
				title="Конструктор сайтов SitePad"
				className="my-0"
			></Container>
			<Container className="px-3">
				<p>
					После того как вы прошли регистрацию и заказали у нас хостинг, на вашем почтовом адресе
					указанным при регистрации отправлены данные от хостинг-панели Cpanel, перейдите в{" "}
					<a
						href="https://cpanel.airnet.uz:2083/"
						title="https://cpanel.airnet.uz:2083/"
						target="_blank"
						rel="noreferrer noopener"
						className="text-decoration-underline"
					>
						хостинг-панель
					</a>{" "}
					и следуйте инструкции указанной ниже с пошаговыми скриншотами.
				</p>
				<h2 className="mt-3 mb-2">
					Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)
				</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-1.jpg")}
					width={900}
					height={475}
					src="/sitepad/step-1.jpg"
				/>
				<h2 className="mt-3 mb-2">Шаг № 2 (Выберите слева Добавить сайт)</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-2.jpg")}
					width={900}
					height={509}
					src="/sitepad/step-2.jpg"
				/>
				<h2 className="mt-3 mb-2">Шаг № 3 (Нажмите Начать)</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-3.jpg")}
					width={900}
					height={438}
					src="/sitepad/step-3.jpg"
				/>
				<h2 className="mt-3 mb-2">
					Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)
				</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-4.jpg")}
					width={900}
					height={535}
					src="/sitepad/step-4.jpg"
				/>
				<h2 className="mt-3 mb-2">Шаг № 5 (Визуальный просмотр демо-сайта)</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-5.jpg")}
					width={900}
					height={642}
					src="/sitepad/step-5.jpg"
				/>
				<h2 className="mt-3 mb-2">Шаг № 6 (Подтвердите установку выбранной темы)</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-6.jpg")}
					width={900}
					height={660}
					src="/sitepad/step-6.jpg"
				/>
				<h2 className="mt-3 mb-2">
					Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)
				</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-7.jpg")}
					width={900}
					height={516}
					src="/sitepad/step-7.jpg"
				/>
				<h2 className="mt-3 mb-2">
					Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)
				</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-8.jpg")}
					width={900}
					height={388}
					src="/sitepad/step-8.jpg"
				/>
				<h2 className="mt-3 mb-2">Шаг № 9 (Опции по редактированию страницы)</h2>
				<Image
					loading="lazy"
					onClick={() => setImage("/sitepad/step-9.jpg")}
					width={900}
					height={426}
					src="/sitepad/step-9.jpg"
				/>
				<p>
					Если у вас остались вопросы, вы всегда можете обратиться в нашу тех.поддержку для
					получения консультации по возникшим вопросам!
				</p>
				<p>+99871-200-87-00</p>
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
					</a>{" "}
				</p>
			</Container>
			{image && <ImageFullScreen image={image} setImage={setImage} />}

			<Partners />
		</>
	);
}
