import CustomTableBottom from '../../components/customTableBottom';
import Partners from '../../components/partners';
import TraficMaket from '../../components/traficMaket';
import st from './dedicated.module.scss';
import Link from 'next/link';
import { LINKS } from '../../components/requirements';
import Container from '../../components/container';
import CustomTable from '../../components/customTable';
import FAQ from '../../components/faq';
import CustomTableHosting from '../../components/customTableHosting';

const checkedCircle = (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
				fill="#006a4d"
			/>
		</svg>
	),
	infoCircle = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
		</svg>
	),
	table = [
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-1.png" />
				</div>
			),
			proc: 'Intel E3-1220v2',
			ram: 16,
			ssd: '240 GB SSD',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-1.png" />
				</div>
			),
			proc: 'Intel Xeon 1xL5640',
			ram: 32,
			ssd: '1 x 200 Gb SSD',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-1.png" />
				</div>
			),
			proc: 'Intel Xeon 1xL5640',
			ram: 32,
			ssd: '2 x 500 Gb HDD',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-1.png" />
				</div>
			),
			proc: 'Intel Xeon 1xL5640',
			ram: 32,
			ssd: '2 x 500 Gb HDD',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<span>ХИТ</span>
					<img src="/dedicated/d-1.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5630',
			ram: 32,
			ssd: '2 x 200 Gb SSD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-1.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5630',
			ram: 32,
			ssd: '2 x 1000 Gb HDD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-2.png" />
				</div>
			),
			proc: 'Intel Xeon 2xE5-2670',
			ram: 32,
			ssd: '2 x 1000 Gb HDD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-2.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5630',
			ram: 48,
			ssd: '2 x 200 Gb SSD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-2.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5630',
			ram: 48,
			ssd: '2 x 1000 Gb HDD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-2.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5640',
			ram: 64,
			ssd: '2 x 480 Gb SSD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<span>СУПЕРЦЕНА</span>
					<img src="/dedicated/d-2.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5640',
			ram: 64,
			ssd: '2 x 2000 Gb HDD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-3.png" />
				</div>
			),
			proc: 'Intel Xeon 2xE5-2670',
			ram: 64,
			ssd: '2 x 1000 Gb HDD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-3.png" />
				</div>
			),
			proc: 'Intel Xeon 2xE5-2670',
			ram: 64,
			ssd: '2 x 480 Gb SSD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-3.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5640',
			ram: 96,
			ssd: '2 x 480 Gb SSD, RAID 1',
		},
		{
			img: (
				<div className={st.dedicated__table__img}>
					<img src="/dedicated/d-3.png" />
				</div>
			),
			proc: 'Intel Xeon 2xL5640',
			ram: 96,
			ssd: '2 x 2000 Gb HDD, RAID 1',
		},
	];

export default function Hosting() {
	return (
		<div className={st.dedicated}>
			<Container
				className="mt-0"
				headTitle="Выделенные сервера"
				style={{ background: "url('/servers.jpg') no-repeat" }}>
				<>
					<div className={st.dedicated__table}>
						<table>
							<thead>
								<tr>
									<th></th>
									<th>Процессор</th>
									<th>Оперативная память</th>
									<th>Жесткие диски</th>
									<th>Порт</th>
									<th>Локация</th>
									<th>Стоимость</th>
								</tr>
							</thead>
							<tbody>
								{table.map((item) => (
									<tr key={item.proc}>
										<td>{item.img}</td>
										<td>{item.proc}</td>
										<td>{item.ram} GB</td>
										<td>{item.ssd}</td>
										<td>100 Mbit/s., неограниченный</td>
										<td>Ташкент</td>
										<td>Ожидается</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<a href="" className={st.dedicated__link}>
						Арендовать сервер
					</a>
				</>
			</Container>

			<Container>
				<p className={st.dedicated__text}>
					{infoCircle}Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 3-х
					рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического персонала.
					Среднее время активации оборудования - 24 часа. <br /> Мы делам всё возможное, чтобы уменьшить время
					ожидания. Срок действия услуги начнется с момента её активации.
				</p>
				<p className={st.dedicated__text}>
					{infoCircle}Цены привязаны и указаны в сумах, корректировка курса выполняется раз в сутки.
				</p>
			</Container>

			<Container
				title="Что входит в услугу аренды сервера"
				clNh3="text-black text-center"
				style={{ background: "url('/hosting/server.jpg') no-repeat" }}>
				<ul className={st.dedicated__plan}>
					<li>
						<span>{checkedCircle}</span>Бесплатная настройка и установка сервера
					</li>
					<li>
						<span>{checkedCircle}</span>Все сервера подключаются к порту 1 Gbps., трафик на скорости до 25
						Mbit/s без ограничений
					</li>
					<li>
						<span>{checkedCircle}</span>
						На каждый сервер бесплатно выделяется 1 IPv4 адрес., стоимость дополнительного IP - 15 000 сум
					</li>
					<li>
						<span>{checkedCircle}</span>Все серверы поддерживают как 32-х так и 64-х битные системы
					</li>
					<li>
						<span>{checkedCircle}</span>Операционные системы для установки: Linux и Windows Server (доступен
						не на всех конфигурациях)
					</li>
				</ul>
			</Container>
			<Partners />
		</div>
	);
}
