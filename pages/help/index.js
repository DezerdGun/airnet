import FAQ from '../../components/faq';
import Partners from '../../components/partners';
import Image from 'next/image';

const faq = [
	{
		title: 'Как пополнить баланс в биллинг системе?',
		description: (
			<>
				<p>Чтобы пополнить баланс зайдите в биллинг систему, кликните на ваш баланс (правая графа сверху)</p>
				<Image src="/help/balance.jpg" width={1160} height={511} />
			</>
		),
	},
	{
		title: 'Как изменить личные данные в биллинг системе?',
		description: (
			<>
				<p>Как изменить личные данные в биллинг системе?</p>
				<Image src="/help/profile.jpg" width={1160} height={422} />
			</>
		),
	},
	{
		title: 'В настройках можно изменить язык панели.',
		description: (
			<>
				<p>Для выбора вам предоставляется 6 языков</p>
				<Image src="/help/lang.jpg" width={1160} height={422} />
			</>
		),
	},
	{
		title: 'Где я могу увидеть SSL- сертификат?',
		description: (
			<>
				<p>SSL сертификат можно увидеть в графе «товары»</p>
				<Image src="/help/ssl.jpg" width={1160} height={592} />
			</>
		),
	},
	{
		title: 'Как ознакомится с тарифными планами VDS/VPS',
		description: (
			<>
				<p>C тарифными планами можно также ознакомится и приобрести в биллинг системе.</p>
				<Image src="/help/tarif.jpg" width={1160} height={563} />
			</>
		),
	},
];

export default function Help() {
	return (
		<div>
			<FAQ faq={faq} title="НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ" />

			<Partners />
		</div>
	);
}
