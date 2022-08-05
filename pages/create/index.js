import Container from '../../components/container';
import CustomTable from '../../components/customTable';
import st from './create.module.scss';
import ft from '../hosting/hosting.module.scss';

const block = [
	{
		title: 'Жесткие диски',
		description: '12 x 1ТB SSD',
		img: '/hosting/ssd.png',
	},
	{
		title: 'Оперативная память',
		description: '256 GB DDR4 ECC',
		img: '/hosting/ram.png',
	},
	{
		title: 'Процессор',
		description: '2 x Intel Xeon',
		img: '/hosting/processor.png',
	},
	{
		title: 'Массив RAID',
		description: 'Аппаратный RAID5',
		img: '/hosting/raid.png',
	},
];

export default function Create() {
	return (
		<>
			<Container
				style={{ background: `url('/servers-4.jpg') no-repeat` }}
				className="mt-0"
				headTitle="Создание сайта"
				description={
					<p>
						Вашей компании или стартапу необходимо создание сайта – мы знаем об этом наверняка! Команда
						«AIRNET» реализует узнаваемый сайт актуального формата с учетом ваших долгосрочных целей и
						текущих задач.
					</p>
				}>
				<div className={st.create}>
					<div className={st.create__table}>
						<table>
							<thead>
								<tr>
									<th></th>
									<th>Готовые решения</th>
									<th>Уникальные решения</th>
								</tr>
								<tr>
									<th>Landing Page от</th>
									<td>1 300 000 сум</td>
									<td>2 500 000 сум</td>
								</tr>
								<tr>
									<th>Сайт-визитка от</th>
									<td>1 500 000 сум</td>
									<td>3 000 000 сум</td>
								</tr>
								<tr>
									<th>Сайт-каталог от</th>
									<td>3 000 000 сум</td>
									<td>6 000 000 сум</td>
								</tr>
								<tr>
									<th>Интернет-магазин от</th>
									<td>4 000 000 сум</td>
									<td>8 000 000 сум</td>
								</tr>
								<tr>
									<th>Мобильная версия от</th>
									<td>1 000 000 сум</td>
									<td>2 000 000 сум</td>
								</tr>
								<tr>
									<th></th>
									<td>
										<a
											href="https://billing.airnet.uz/billing.php"
											target="_blank"
											rel="noopener noreferrer">
											Заказать сайт
										</a>
									</td>
									<td>
										<a
											href="https://billing.airnet.uz/billing.php"
											target="_blank"
											rel="noopener noreferrer">
											Заказать сайт PRO
										</a>
									</td>
								</tr>
							</thead>
						</table>
					</div>
					<div className={st.create__footer}>
						<h3>Бесплатно для каждого сайта</h3>
						<ul className="list">
							<li>Домен .UZ для сайта - 1 год.</li>
							<li>Хостинг 250мб для сайта - 1 год.</li>
							<li>Техническая поддержка сайта - 1 мес.</li>
							<li>Настройка и подключение чат &quot;Re:plain&quot; на сайт</li>
							<li>Настройка счетчиков Google Analytics и Яндекс.Метрика</li>
						</ul>
					</div>
				</div>
			</Container>
			<Container title="Ваш хостинг будет размещен на сервере с конфигурацией:" clNTitle="text-center">
				<div className={ft.hosting__block}>
					{block.map((item) => (
						<div key={item.title} className={ft.hosting__block__item}>
							<div className={ft.hosting__block__item__img}>
								<img src={item.img} />
							</div>
							<div className={ft.hosting__block__item__content}>
								<h6>{item.title}</h6>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</>
	);
}
