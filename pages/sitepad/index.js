import Container from '../../components/container';
import Link from 'next/link';
import Image from 'next/image';
import Partners from '../../components/partners';
import { LINKS } from '../../components/requirements';
import SEO from '../../components/seo';
import st from './sitepad.module.scss';

export default function SitePad() {
	return (
		<>
			<SEO
				title="Бесплатный Конструктор сайтов SitePad | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Простой и быстрый бесплатный конструктор сайтов в Ташкенте SitePad, создайте профессиональный сайт без навыком программированя в зоне TAS-IX"
			/>
			
			<Container headTitle="Конструктор сайтов SitePad">
				<div className={st.sitepad__info}>
					<div className={st.sitepad__info__content}>
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
					<div className={st.sitepad__info__img}>
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
					После того как вы прошли регистрацию и заказали у нас хостинг, на вашем почтовом адресе указанным
					при регистрации отправлены данные от хостинг-панели Cpanel, перейдите в{' '}
					<a
						href="https://cpanel.airnet.uz/"
						title="https://cpanel.airnet.uz/"
						target="_blank"
						rel="noreferrer noopener"
						className="text-decoration-underline">
						хостинг-панель
					</a>{' '}
					и следуйте инструкции указанной ниже с пошаговыми скриншотами.
				</p>
				<p>Шаг № 1 (Найдите Конструктор сайтов SitePad и нажмите на него)</p>
				<Image loading="lazy" width={900} height={475} src="/sitepad/step-1.jpg" />
				<p>Шаг № 2 (Выберите слева Добавить сайт)</p>
				<Image loading="lazy" width={900} height={509} src="/sitepad/step-2.jpg" />
				<p>Шаг № 3 (Нажмите Начать)</p>
				<Image loading="lazy" width={900} height={438} src="/sitepad/step-3.jpg" />
				<p>Шаг № 4 (Найдите подходящую тему по категории создаваемого сайта)</p>
				<Image loading="lazy" width={900} height={535} src="/sitepad/step-4.jpg" />
				<p>Шаг № 5 (Визуальный просмотр демо-сайта)</p>
				<Image loading="lazy" width={900} height={642} src="/sitepad/step-5.jpg" />
				<p>Шаг № 6 (Подтвердите установку выбранной темы)</p>
				<Image loading="lazy" width={900} height={660} src="/sitepad/step-6.jpg" />
				<p>Шаг № 7 (Заполните поля настройки вашего будущего сайта и нажмите установить)</p>
				<Image loading="lazy" width={900} height={516} src="/sitepad/step-7.jpg" />
				<p>Шаг № 8 (После установки вы можете с легкостью изменить внутренние страницы вашего сайта)</p>
				<Image loading="lazy" width={900} height={388} src="/sitepad/step-8.jpg" />
				<p>Шаг № 9 (Опции по редактированию страницы)</p>
				<Image loading="lazy" width={900} height={426} src="/sitepad/step-9.jpg" />
				<p>
					Если у вас остались вопросы, вы всегда можете обратиться в нашу тех.поддержку для получения
					консультации по возникшим вопросам!
				</p>
				{/* <p>+99871-200-87-00</p>
				<p>+99890-324-30-80 </p>
				<p>
					Наш{' '}
					<a
						href="https://t.me/airnetuzb"
						target="_blank"
						rel="noreferrer noopener"
						title="https://t.me/airnetuzb"
						className="text-decoration-underline">
						телеграм
					</a>{' '}
				</p> */}
			</Container>
			<Partners />
		</>
	);
}
