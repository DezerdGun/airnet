import BlogItem from '../../components/blogItem';

const data = {
	title: 'Впервые VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android',
	date: '19 Дек 2018',
	img: '/blog/phone-vpn.jpg',
	content: (
		<>
			<p>
				Первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store — VPN Proxy Master.
			</p>
			<p>
				VPN-приложения стали самыми скачиваемыми в Узбекистане как для iOS, так и для Android,{' '}
				<a
					href="https://www.data.ai/account/login/?next=%2Fdashboard%2Fhome"
					target="_blank"
					rel="noreferrer noopener">
					свидетельствуют
				</a>
				данные сервиса аналитики мобильных приложений App Annie.
			</p>
			<p>
				Начиная с сентября владельцы телефонов на iOS{' '}
				<a href="https://www.spot.uz/ru/2018/09/20/vpn/" target="_blank" rel="noreferrer noopener">
					скачивают
				</a>{' '}
				VPN Proxy Master от студии All Connected. Приложение иногда опускается ниже 5 места, но практически не
				выходит из топ-10. Теперь в тройку самых скачиваемых вошло еще и VPN Super Unlimited от студии Mobile
				Jump.
			</p>
			<p>
				Начиная с ноября массово скачивать VPN-приложения стали и владельцы телефонов на Android (до этого
				VPN-приложения не входили в топ-10). В частности, пользователи активно устанавливают Thunder VPN и
				Secure VPN от студии Signal Lab.
			</p>
			<p>
				На 15−18 декабря первое место по количеству скачиваний в Google Play занял Secure VPN, а в App Store —
				VPN Proxy Master. Таким образом, впервые VPN-приложения одновременно стали самыми скачиваемыми как среди
				владельцем телефонов на iOS, так и Android в Узбекистане.
			</p>
			<p>
				Причем второе место в Google Play также занимает VPN-приложение — Thunder VPN, а в App Store — третье
				(VPN Super Unlimited). Конкуренцию им иногда составляют «Яндекс.Музыка», SHAREit, Telegram, Instagram,
				Plus Messenger и imo.
			</p>
			<p>
				Ранее Spot писал, что в Узбекистане наблюдаются проблемы с доступом к Facebook, YouTube и нескольким
				другим сайтам. В правительстве сообщали, что работают над решением проблемы, пока что пользователи
				пытаются сами решить ее установкой VPN.
			</p>
			<p>
				Ссылка на источник{' '}
				<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
					Spot
				</a>
			</p>
		</>
	),
	prev: '/blog/v-telegram-poyavilis-vstroennye-oprosy',
	next: '/blog/v-kitae-reshili-otkazatsya-ot-3g',
};

export default function () {
	return <BlogItem data={data} />;
}
