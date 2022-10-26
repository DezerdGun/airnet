import Container from '../../components/container';
import StepsBlock from '../../components/stepsBlock';
import Partners from '../../components/partners';
import WhyCard from '../../components/whyCard';
import st from './reseller.module.scss';

const content = [
	{
		title: 'Сайт хостинг-провайдера',
		description:
			'Сайт должен быть готов для размещения предложений по нашим виртуальным серверам. Это может быть действующий сайт хостинговой компании, уже имеющей опыт работы в хостинг-услугах и клиентскую базу.',
		img: '/server.png',
	},
	{
		title: 'Сайт веб-студии',
		description:
			'Помимо услуг по созданию сайтов, студия должна предлагать своим клиентам дополнительные услуги по их размещению.',
		img: '/tag.png',
	},
];

export default function Reseller() {
	return (
		<>
			<div className={st.reseller}>
				<Container
					headTitle="Кто может стать реселлером?"
					description={
						<p>
							К участию в программе допускаются только нацеленные на массовую перепродажу партнёры.
							Обязательными условиями являются наличие сайта и продажа не менее 10 серверов в первые
							полгода.
						</p>
					}>
					<WhyCard content={content} />
				</Container>
			</div>
			<StepsBlock
				title="Как это работает?"
				data={[
					{
						title: 'Получаете заявку',
						description: 'Клиенты обращаются за сервером напрямую к вам',
					},
					{
						title: 'Покупаете у нас',
						description: 'Приобретаете у нас сервер со скидкой от 15 до 30%',
					},
					{
						title: 'Продаёте клиенту',
						description: 'Купленный сервер вы продаёте своему клиенту с наценкой',
					},
					{
						title: 'Профит!',
						description: 'Скидка + маржа = ваша прибыль, которую вы получаете сразу после первого заказа',
					},
				]}
				img="/how-work-img.png"
			/>
			<Partners />
		</>
	);
}
