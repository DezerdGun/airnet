import Container from '../components/container';
import FAQ from '../components/faq';
import Notifications from '../components/notifications';
import Partners from '../components/partners';
import Swiper from '../components/swiper';
import Trust from '../components/trust';
import TrustPilot from '../components/trustpilot';
import { faqGenerate } from '../components/utils';
import WhyBlock from '../components/whyBlock';
import st from './index.module.scss';

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
			<Swiper />
			<WhyBlock />
			<TrustPilot />
			<Trust />
			<Partners />
			<FAQ faq={faqHome} faqHead={faqGenerate(faqHome)} title="НАС ЧАСТО СПРАШИВАЮТ" />
			<Notifications />
			<Container></Container>
		</div>
	);
}
