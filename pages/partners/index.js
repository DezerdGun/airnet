import Link from 'next/link';
import Container from '../../components/container';
import Partners from '../../components/partners';
import { LINKS } from '../../components/requirements';
import SEO from '../../components/seo';
import st from './partners.module.scss';

export default function PartnersPage() {
	return (
		<>
			<SEO
				title="Партнерская программа | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Выгодная партнерская программа от Airnet"
			/>
			<div className={st.partners}>
				<Container
					style={{ background: "url('/servers-2.jpg') no-repeat" }}
					title="Партнерам"
					className="my-0"></Container>
				<Container
					style={{}}
					title="Партнерская программа"
					clNTitle="text-black"
					className="my-0"
					description={
						<p className="text-black">
							Вы являетесь владельцем большого количества доменов или планируете ежемесячную регистрацию
							доменных имен и приобретение сопутствующих услуг в значительных объемах или вы — владелец
							web-студии, который хотел бы размещать сайты своих клиентов у одного провайдера, чтобы ими
							было удобно управлять?
						</p>
					}>
					<table>
						<thead>
							<tr>
								<th>Веб-хостинг</th>
								<th>VDS/VPS</th>
								<th>Разработка сайтов</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>до 30%</td>
								<td>10%</td>
								<td>10%</td>
							</tr>
						</tbody>
					</table>
				</Container>
				<Container
					style={{}}
					title="Реферальная программа"
					clNTitle="text-black"
					className="mt-0"
					description={
						<>
							<p className="text-black">
								Привлеките клиента один раз и получайте вознаграждение за все его заказы и продления!
							</p>
							<p className="text-black">
								1. Клиент приходит по вашей реферальной ссылке (Вы размещаете ссылку и рекомендуете наши
								услуги)
								<br />
								2. Клиент покупает домены, хостинг или другие услуги (Вы получаете вознаграждение до
								30%!)
								<br />
								3. Клиент продлевает купленные домены, хостинг или другие услуги. (И вы снова получаете
								вознаграждение до 10%!)
							</p>
						</>
					}>
					<table>
						<thead>
							<tr>
								<th>Веб-хостинг</th>
								<th>VDS/VPS</th>
								<th>Разработка сайтов</th>
								<th>Скидки на Landing от fr.uz</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>до 30%</td>
								<td>10%</td>
								<td>10%</td>
								<td>30%</td>
							</tr>
						</tbody>
					</table>
				</Container>
				<Container
					style={{ background: "url('/agreement.jpg') no-repeat" }}
					title="Как начать зарабатывать"
					className="my-0">
					<div className={st.partners__payment}>
						<div className={st.partners__payment__block}>
							<h6>Пройти регистрацию</h6>
							<p>
								<a href="https://billing.airnet.uz/billing.php?do=order&type=partner">
									Пройдите регистрацию
								</a>
								, после чего, в нашем биллинге Вы сможете получить свою реферальную ссылку и
								персональный промо-код.
							</p>
						</div>
						<div className={st.partners__payment__block}>
							<h6>Разместить баннер на своем сайте</h6>
							<p>
								Архив с рекламными материалами доступен по{' '}
								<Link href={LINKS.HOME}>
									<a>данной ссылке</a>
								</Link>
								.
							</p>
						</div>
					</div>
					<p className="text-center text-white">
						Работать с нами очень и легко и приятно. Мы всегда помогаем нашим партнерам достичь хорошего
						результата.
					</p>
				</Container>

				<Container
					style={{}}
					title="Партнерская программа для вебмастеров"
					clNTitle="text-black"
					className="my-0">
					<div className={st.partners__web}>
						<div className={st.partners__web__block}>
							<div className={st.partners__web__block__aside}>до 30%</div>
							<div className={st.partners__web__block__content}>
								<p>
									<strong>
										от всех платежей за услуги виртуального хостинга, от всех привлеченных клиентов
									</strong>
								</p>
								<p>
									Принять участие в данной партнерской программе могут абсолютно все желающие, без
									каких-либо ограничений и особых требований. Если у Вас имеются вопросы, Вы всегда
									можете получить на них ответы у наших онлайн-консультантов или же у менеджеров
									отдела продаж.
								</p>
							</div>
						</div>
						<div className={st.partners__web__block}>
							<div className={st.partners__web__block__aside}>до 15%</div>
							<div className={st.partners__web__block__content}>
								<p>
									<strong>
										от всех платежей за виртуальные и выделенные сервера, от всех привлеченных
										клиентов
									</strong>
								</p>
								<p>
									Принять участие в данной партнерской программе могут абсолютно все желающие, без
									каких-либо ограничений и особых требований. Если у Вас имеются вопросы, Вы всегда
									можете получить на них ответы у наших онлайн-консультантов или же у менеджеров
									отдела продаж.
								</p>
							</div>
						</div>
					</div>
				</Container>
				<Container
					style={{ backgroundColor: '#eeebee' }}
					title="Почему нас выбирают лучшие вебмастеры"
					clNTitle="text-black"
					className="my-0">
					<ul className={st.partners__bestWeb}>
						<li>Высокий уровень вознаграждения, уникальные выгодные условия</li>
						<li>Выплата вознаграждения без задержек, в любое время суток</li>
						<li>Удобная панель со встроенной аналитикой по переходам и регистрациям</li>
						<li>Работаем с веб-мастерами по всему миру</li>
					</ul>
				</Container>
				<Partners />
			</div>
		</>
	);
}
