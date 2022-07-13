import CustomTableBottom from '../../components/customTableBottom';
import Partners from '../../components/partners';
import TraficMaket from '../../components/traficMaket';
import st from './hosting.module.scss';
import Link from 'next/link';
import { LINKS } from '../../components/requirements';
import Container from '../../components/container';
import CustomTable from '../../components/customTable';
import FAQ from '../../components/faq';

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

const faq = [
	{
		title: 'Как скоро можно начать пользоваться услугой?',
		description: (
			<>
				<p>Пользовательский аккаунт открывается сразу после подачи заявки.</p>

				<p>Сразу после произведения оплаты, вы можете начать сразу же пользоваться услугой.</p>
			</>
		),
	},
];

export default function Hosting() {
	return (
		<div className={st.hosting}>
			<Container title="Ваш хостинг будет размещен на сервере с конфигурацией:" clNh3="text-center">
				<div className={st.hosting__block}>
					{block.map((item) => (
						<div key={item.title} className={st.hosting__block__item}>
							<div className={st.hosting__block__item__img}>
								<img src={item.img} />
							</div>
							<div className={st.hosting__block__item__content}>
								<h6>{item.title}</h6>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
			{/* <TraficMaket
				title="VDS/VPS — сервера на базе быстрых SSD-дисков"
				description="Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости 1 Gbps"
				endText="Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 4-х часов, в зависимости от наличия необходимых серверов и загрузки технического персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делам всё возможное, чтобы уменьшить время ожидания. Срок действия услуги начнется с момента её активации."
				bgImg="/servers-2.jpg"
				table={[
					<table key="table-1">
						<tr>
							<th colSpan={2}>VDS/VPS «Strong»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>2 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>ОЗУ</td>
							<td>4 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>50 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>15 Mbps</td>
						</tr>
						<tr>
							<td>Канал TAS-IX</td>
							<td>1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td className="bg-green">ОС</td>
							<td className="bg-green">Windows или Linux</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="200 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-2">
						<tr>
							<th colSpan={2}>VDS/VPS «VIP»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>4 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>ОЗУ</td>
							<td>4 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>100 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>15 Mbps</td>
						</tr>
						<tr>
							<td>Канал TAS-IX</td>
							<td>1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td className="bg-green">ОС</td>
							<td className="bg-green">Windows или Linux</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="250 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-3">
						<tr>
							<th colSpan={2}>VDS/VPS «VIP+»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>4 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>ОЗУ</td>
							<td>6 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>150 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>15 Mbps</td>
						</tr>
						<tr>
							<td>Канал TAS-IX</td>
							<td>1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td className="bg-green">ОС</td>
							<td className="bg-green">Windows или Linux</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="300 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-4">
						<tr>
							<th colSpan={2}>VDS/VPS «Nano»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>4 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>ОЗУ</td>
							<td>8 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>100 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>15 Mbps</td>
						</tr>
						<tr>
							<td>Канал TAS-IX</td>
							<td>1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td className="bg-green">ОС</td>
							<td className="bg-green">Windows или Linux</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="400 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=49"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-5">
						<tr>
							<th colSpan={2}>VDS/VPS «Advanced»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>6 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>ОЗУ</td>
							<td>10 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>150 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>15 Mbps</td>
						</tr>
						<tr>
							<td>Канал TAS-IX</td>
							<td>1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td className="bg-green">ОС</td>
							<td className="bg-green">Windows или Linux</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="550 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
				]}
				className="mt-0"
			/>
			<Container>
				<div className={st.vds__block}>
					{block.map((item) => (
						<div key={item.title} className={st.vds__block__item}>
							<div className={st.vds__block__item__img}>{item.img}</div>
							<h6>{item.title}</h6>
							<p>{item.description}</p>
							{item.link ? (
								<button>
									<Link href={item.link}>
										<a>{item.linkTitle}</a>
									</Link>
								</button>
							) : null}
						</div>
					))}
				</div>
			</Container>
			<Container
				title="Стоимость международного интернет-канала без ограничения трафика"
				description="Внешний трафик и трафик в сети «TAS-IX» не тарифицируется.">
				<div className={st.vds__table}>
					<CustomTable
						table={
							<table>
								<thead>
									<tr>
										<th>Тариф</th>
										<th>Скорость доступа в Интернет</th>
										<th>Скорость доступа в «TAS-IX»</th>
										<th>Тарификация</th>
										<th>Абонентская плата в месяц</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Unlim 5M</td>
										<td>15 мбит/с</td>
										<td>1 Гбит/с</td>
										<td>Без ограничений</td>
										<td>Бесплатно</td>
									</tr>
									<tr>
										<td>Unlim 25M</td>
										<td>25 мбит/с</td>
										<td>1 Гбит/с</td>
										<td>Без ограничений</td>
										<td>500 000 сум/мес.</td>
									</tr>
									<tr>
										<td>Unlim 50M</td>
										<td>50 мбит/с</td>
										<td>1 Гбит/с</td>
										<td>Без ограничений</td>
										<td>1 000 000 сум/мес.</td>
									</tr>
									<tr>
										<td>Unlim 100M</td>
										<td>100 мбит/с</td>
										<td>1 Гбит/с</td>
										<td>Без ограничений</td>
										<td>2 000 000 сум/мес.</td>
									</tr>
								</tbody>
							</table>
						}
					/>
				</div>
			</Container> */}
			<FAQ faq={faq} title="НАС ЧАСТО СПРАШИВАЮТ" />
			<Partners />
		</div>
	);
}
