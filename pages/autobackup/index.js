import Container from '../../components/container';
import WhyBlock from '../../components/whyBlock';
import st from './autobackup.module.scss';
import Link from 'next/link';
import { LINKS } from '../../components/requirements';
import Partners from '../../components/partners';

const content = [
	{
		title: 'Независимые серверы',
		description:
			'Копии хранятся на отдельном VDS: сможете восстановить информацию, даже если Ваш сервер выйдет из строя.',
		img: '/server.png',
	},
	{
		title: 'Частота обновлений',
		description:
			'Полные копии создаются еженедельно, а дифференциальные - ежедневно. В случае форс-мажора восстанавливаются файты за любой день последних 5 недель.',
		img: '/calendar.png',
	},
	{
		title: 'Уведомляем об ошибках',
		description:
			'Система ежедневно проверят корректную работу резервного копирования. Если что-то пойдет не так - Вы получите уведомление.',
		img: '/notification.png',
	},
	{
		title: 'Фоновая загрузка',
		description: 'Копирование происходит в фоновом режиме и не требует остановки сервера или отключния сайта.',
		img: '/cloud.png',
	},
];

export default function Autobackup() {
	return (
		<div className={st.autobackup}>
			<Container headTitle="Автоматическое резервное копирование">
				<div className={st.autobackup__info}>
					<div className={st.autobackup__info__content}>
						<h3>Об услуге</h3>
						<p>
							Автоматические бэкапы позволят вам не беспокоиться о том, что вы забыли или не успели
							сделать бэкап.
						</p>
						<p>
							В случае взлома, случайного удаления или неудачного обновления у вас под рукой будет свежая
							копия для быстрого восстановления данных.
						</p>
						<Link href={LINKS.HELP}>
							<a>Как подключить бэкапы?</a>
						</Link>
					</div>
					<div className={st.autobackup__info__img}>
						<img src="/intro-img.png" />
					</div>
				</div>
			</Container>
			<WhyBlock title="Преимущества автобэкапов" content={content} />
			<Partners />
		</div>
	);
}
