import Container from '../../components/container';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/seo';
import st from './anti-ddos.module.scss';
import { LINKS } from '../../components/requirements';
import WhyBlock from '../../components/whyBlock';
import Partners from '../../components/partners';

const content = [
	{
		title: 'На сайт невозможно зайти',
		description:
			'Во время DDoS-атаки серверы не выдердивают нагрузку и сайт становится недоступен для пользователей.',
		img: '/notification.png',
	},
	{
		title: 'Потеря клиентов',
		description: 'Клиент не будет ждать, пока сайт заработает и отправится рассматривать предложения конкурентов.',
		img: '/user-minus.png',
	},
	{
		title: 'Потеря прибыли',
		description: 'С уходом клиентов Вы теряете заказы, а значит и прибыль, которую они могли принести.',
		img: '/money.png',
	},
	{
		title: 'Потеря репутации',
		description: 'Клиенты ассоциируют нерабочий сайт с Вашей компанией, таким образом Вам бренд теряет репутацию.',
		img: '/dislike.png',
	},
];

export default function AntiDDos() {
	return (
		<>
			<SEO
				title="Защита серверов от DDoS-атак | Airnet"
				desc="Описание защиты от DDoS-атак VDS и Выделенных серверов у Airnet"
			/>
			
			<Container headTitle="Защита серверов от DDoS-атак">
				<div className={st.anti_ddos__info}>
					<div className={st.anti_ddos__info__content}>
						<h3>Об услуге</h3>
						<p>
							Защищает сервер от самых известных атак, предотвращает угрозы на канальном, сетевом, транспортном и прикладном уровнях OSI. Весь входящий трафик фильтруется — вредоносный отсеивается, и до сайта доходят только реальные пользователи.
						</p>
						<p>
							Подключите защищенный канал, и все сайты на сервере будут в безопасности.
						</p>
						<Link href={LINKS.HELP}>
							<a>Как подключить DDoS?</a>
						</Link>
					</div>
					<div className={st.anti_ddos__info__img}>
						<img src="/ddos-img.png" />
					</div>
				</div>
			</Container>

			{/* <Container headTitle="Защита серверов от DDoS-атак" clNTitle="mb-0"></Container> */}
			<WhyBlock title="Чем опасны DDoS-атаки?" content={content} />
			<Container className="pt-2">
				<hr />
				<h3>Как осуществляется DDoS-атака</h3>
				<p>
					Шансы стать объектом DDoS-атаки очень велики, и таких попыток бывает много. Цель DDoS-атаки –
					сделать сервер, сервис или инфраструктуру недоступной путем перегрузки пропускной способности
					сервера или монополизации его ресурсов до полного истощения. Во время DDoS-атаки большое количество
					запросов одновременно отправляется с большого количества точек со всей сети Интернет. Интенсивность
					такого “перекрестного огня” делает предоставляемый сервис нестабильным, или еще хуже, – недоступным.
				</p>
				<div className="text-center">
					<Image src="/anti-ddos/without-protection.png" width={640} height={167} className="text-center" />
				</div>
				<h3>Цели и виды атак</h3>
				<p>Существует три способа сделать Ваш сайт, сервер или инфраструктуру недоступной: </p>
				<ul className="list">
					<li>Перенасытить пропускную способность сети сервера, сделав его недоступным.</li>
					<li>Исчерпать системные ресурсы машины, сделав невозможным ответ на легитимные запросы.</li>
					<li>
						Использовать уязвимость программного обеспечения, так называемый «эксплоит», для захвата машины
						или ограничения доступа к ней.
					</li>
				</ul>

				<div className="text-center">
					<Image src="/anti-ddos/network.jpg" width={800} height={640} className="text-center" />
				</div>

				<h3>Как выполняется защита</h3>
				<p>
					Для защиты серверов и сервисов от атак предлагаем решение на основе технологии VAC – эксклюзивное
					сочетание методов для:
				</p>
				<ul className="list">
					<li>Высокоскоростного анализа всех пакетов в режиме реального времени</li>
					<li>Отсеивания входящего трафика вашего сервера</li>
					<li>
						Смягчения негативных последствий, то есть выделения всех нелегитимных IP-пакетов и пропускания
						легитимных
					</li>
				</ul>
				<div className="text-center">
					<Image src="/anti-ddos/protected.png" width={640} height={216} />
				</div>
			</Container>
			<Partners />
		</>
	);
}
