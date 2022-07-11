import Container from '../components/container';
import FAQ from '../components/faq';
import Notifications from '../components/notifications';
import Partners from '../components/partners';
import CustomSwiper from '../components/customSwiper';
import TraficMaket from '../components/traficMaket';
import Trust from '../components/trust';
import TrustPilot from '../components/trustpilot';
import { faqGenerate } from '../components/utils';
import WhyBlock from '../components/whyBlock';
import st from './index.module.scss';
import CustomTableBottom from '../components/customTableBottom';
import RegDomain from '../components/regDomain';
import Sitepad from '../components/sitepad';
import Stock from '../components/stock';

export default function Home() {
	const faqHome = [
		{
			title: 'Есть ли возможность протестировать услуги? ✔',
			description: (
				<>
					<p>
						Чтобы протестировать сервис, сначала нужно <a href="">зарегистрироваться.</a>
					</p>

					<p>Вам нужен VDS сервер? - Выполните 5 простых шагов, описанных здесь</p>

					<p>
						Вы представляете юр.лицо, и вам нужен полноценный тестовый стенд? -{' '}
						<strong>напишите нам</strong>
					</p>
				</>
			),
		},
		{
			title: 'Как быстро отвечает служба техподдержки? ⭐',
			description: (
				<p>
					Время ответа может быть от нескольких минут до 30 минут. Оно зависит от числа обращений в
					определенный период времени.
				</p>
			),
		},
		{
			title: 'Можно ли изменять конфигурацию рабочего сервера? 🖥️',
			description: (
				<>
					<p>Да. Изменять конфигурации своего сервера вы можете в любой момент. 🚀</p>

					<p>
						Для <strong>RAM</strong> и <strong>CPU</strong> [требуется перезагрузка]
					</p>

					<p>
						Для <strong>SSD</strong> [без перезагрузки]
					</p>

					<p>
						Для <strong>Интернет</strong> [без перезагрузки]
					</p>
				</>
			),
		},
		{
			title: 'Какая система виртуализации используется в AIRNET? 🗂️',
			description: (
				<p>
					Виртуальная инфраструктура <strong>AIRNET</strong> компании использует <strong>VMware</strong> с
					прикладными дополнениями. Виртуальные сервера создаются в среде операционной системы{' '}
					<strong>ESXi</strong>.
				</p>
			),
		},
		{
			title: 'Как можно оплатить за услуги AIRNET? 💷',
			description: (
				<>
					<p>Способы оплаты</p>

					<p>
						Для <strong>физических лиц</strong>: PAYME, PAYNET, CLICK, UPAY, Webmoney, OSON.uz, VISA,
						MasterCard и другие.
					</p>

					<p>
						Для <strong>юридических лиц</strong>: банковский перевод. (перечисление)
					</p>
				</>
			),
		},
	];
	return (
		<div className={st.home}>
			<CustomSwiper />
			<WhyBlock />
			{/* <TraficMaket
				title="Популярные тарифы - Виртуальный сервер в Ташкенте"
				description="Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости до 1 Gbps"
				bgImg="/servers.jpg"
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
							<td>Оперативная память</td>
							<td>4 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>50 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>25 Mbps</td>
						</tr>
						<tr>
							<td className="bg-green">TAS-IX</td>
							<td className="bg-green">1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="200 000 сум"
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14"
									text="Заказать сервер"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-2">
						<tr>
							<th colSpan={2}>VDS/VPS «VIP+»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>4 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>Оперативная память</td>
							<td>6 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>150 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>25 Mbps</td>
						</tr>
						<tr>
							<td className="bg-green">TAS-IX</td>
							<td className="bg-green">1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="300 000 сум"
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16"
									text="Заказать сервер"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-3">
						<tr>
							<th colSpan={2}>VDS/VPS «Advanced»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>6 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>Оперативная память</td>
							<td>10 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>150 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>25 Mbps</td>
						</tr>
						<tr>
							<td className="bg-green">TAS-IX</td>
							<td className="bg-green">1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="550 000 сум"
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50"
									text="Заказать сервер"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-4">
						<tr>
							<th colSpan={2}>VDS/VPS «Ultra»</th>
						</tr>
						<tr>
							<td>Процессор</td>
							<td>8 ядра - 2.6 GHz</td>
						</tr>
						<tr>
							<td>Оперативная память</td>
							<td>16 Gb</td>
						</tr>
						<tr>
							<td>SSD-диск</td>
							<td>200 Gb</td>
						</tr>
						<tr>
							<td>Интернет</td>
							<td>25 Mbps</td>
						</tr>
						<tr>
							<td className="bg-green">TAS-IX</td>
							<td className="bg-green">1 Gbps</td>
						</tr>
						<tr>
							<td>Статичный ip</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="1 000 000 сум"
									link="https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52"
									text="Заказать сервер"
								/>
							</td>
						</tr>
					</table>,
				]}
			/>
			<TraficMaket
				title="Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте"
				description="Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости до 1 Gbps"
				endText="*При оплате за хостинг от 6 месяцев!"
				bgImg="/servers-2.jpg"
				table={[
					<table key="table-5">
						<tr>
							<th colSpan={2}>Cpanel «Старт»</th>
						</tr>
						<tr>
							<td>Тип диска (SSD)</td>
							<td>250 Mb</td>
						</tr>
						<tr>
							<td>Количество сайтов</td>
							<td>5</td>
						</tr>
						<tr>
							<td>SSL-сертификат</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td>Домен в зоне .UZ</td>
							<td>В Подарок*</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="10 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-6">
						<tr>
							<th colSpan={2}>Cpanel «Простой»</th>
						</tr>
						<tr>
							<td>Тип диска (SSD)</td>
							<td>500 Mb</td>
						</tr>
						<tr>
							<td>Количество сайтов</td>
							<td>10</td>
						</tr>
						<tr>
							<td>SSL-сертификат</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td>Домен в зоне .UZ</td>
							<td>В Подарок*</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="15 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-7">
						<tr>
							<th colSpan={2}>Cpanel «Стандарт»</th>
						</tr>
						<tr>
							<td>Тип диска (SSD)</td>
							<td>1 000 Mb</td>
						</tr>
						<tr>
							<td>Количество сайтов</td>
							<td>15</td>
						</tr>
						<tr>
							<td>SSL-сертификат</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td>Домен в зоне .UZ</td>
							<td>В Подарок*</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="25 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
					<table key="table-8">
						<tr>
							<th colSpan={2}>Cpanel «Доступный»</th>
						</tr>
						<tr>
							<td>Тип диска (SSD)</td>
							<td>3 000 Mb</td>
						</tr>
						<tr>
							<td>Количество сайтов</td>
							<td>20</td>
						</tr>
						<tr>
							<td>SSL-сертификат</td>
							<td>Бесплатно</td>
						</tr>
						<tr>
							<td>Домен в зоне .UZ</td>
							<td>В Подарок*</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<CustomTableBottom
									price="60 000 сум/мес."
									link="https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34"
									text="Купить хостинг"
								/>
							</td>
						</tr>
					</table>,
				]}
			/>
			<RegDomain />
			<Sitepad />
			<Stock />
			<TrustPilot />
			<Trust />
			<Partners />*/}
			<FAQ faq={faqHome} title="НАС ЧАСТО СПРАШИВАЮТ" />
			<Notifications />
		</div>
	);
}
