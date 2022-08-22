import st from './whyBlock.module.scss';
import Container from '../container';
import Link from 'next/link';
import WhyCard from '../whyCard';

const content = [
	{
		title: 'Служба поддержки 24/7',
		decsription:
			'В случае возникновения каких-либо вопросов, Вы всегда можете рассчитывать на нашу квалифицированную помощь с индивидуальным подходом, по телефону, e-mail, telegram, а также в онлайн чате - в любое время суток!',
		img: '/phone.png',
	},
	{
		title: 'Стабильность',
		decsription: (
			<>
				Мы обеспечиваем гарантированную доступность сервиса 99%. Круглосуточно, за всеми системами следят наши
				высококвалифицированные сотрудники. А оборудование размещаем в высокотехнологичном, современном,
				надёжном{' '}
				<Link href="/dc">
					<a>Дата-Центре</a>
				</Link>{' '}
				TIER-2, в Ташкенте.
			</>
		),
		img: '/search.png',
	},
	{
		title: 'Низкая цена',
		decsription:
			'Мы предоставляем услуги по самым "низким" ценам в Узбекистане, наше преимущество в том, что мы оказываем максимально качественные услуги за максимально низкие цены. Таким образом, мы поможем Вам зарабатывать, а не тратиться.',
		img: '/wallet.png',
	},
	{
		title: 'Собственные ip-адреса',
		decsription:
			'Мы предоставляем услуги по собственной BGP протоколу (Border Gateway Protocol) для всех блоков IP-адресов. Подключенныe напрямую к автономной системе (AS) АК "Узтелеком", а также являемся участниками зоны TAS-IX.',
		img: '/wallet.png',
	},
];

export default function WhyBlock() {
	return (
		<div className={`${st.whyBlock} whyBlock-swiper`}>
			<Container title="Почему выбирают AIRNET?" clNTitle="text-center">
				<WhyCard content={content} />
			</Container>
		</div>
	);
}
