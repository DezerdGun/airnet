import BlogItem from '../../components/blogItem';

const data = {
	title: 'Facebook сообщил об ошибке',
	date: '16 Дек 2018',
	img: '/blog/facebook.jpg',
	content: (
		<>
			<p>
				Из-за ошибки в API сторонние приложения могли получить доступ к закрытым и даже неопубликованным
				фотографиям.
			</p>
			<p>
				Facebook обнаружила ошибку в API, из-за которой сторонние приложения могли получить доступ к закрытым
				фотографиям пользователей,{' '}
				<a
					href="https://vc.ru/social/53459-facebook-rasskazala-ob-uyazvimosti-kotoraya-mogla-otkryt-dostup-k-lichnym-fotografiyam-6-8-mln-polzovateley?from=rss"
					target="_blank"
					rel="noreferrer noopener">
					пишет
				</a>{' '}
				vc.ru. Инцидент мог затронуть до 6,8 млн человек,{' '}
				<a
					href="https://developers.facebook.com/blog/post/2018/12/14/notifying-our-developer-ecosystem-about-a-photo-api-bug/"
					target="_blank"
					rel="noreferrer noopener">
					говорится
				</a>{' '}
				в сообщении компании.
			</p>
			<p>
				Речь идет о приложениях, которым пользователи предоставляют доступ к своим фотографиям в Facebook.
				Обычно соцсеть делится с ними только теми изображениями, которые опубликованы в хронике пользователя. Но
				из-за ошибки сторонние приложения могли получить доступ к снимкам, опубликованным в «историях», на
				торговой площадке Marketplace, а также к фотографиям, которые пользователь загрузил в Facebook, но в
				итоге не стал публиковать. Последнее возможно, потому что соцсеть хранит копию изображения.
			</p>
			<p>
				Ошибка в API существовала в период с 13 по 25 сентября 2018 года, пока ее не заметили разработчики
				Facebook. В это время потенциальный доступ к личным фотографиям пользователей был у 1500 приложений от
				876 разработчиков.
			</p>
			<p>
				Facebook предупредит пользователей, которых могла затронуть эта ошибка. Они получат уведомление со
				ссылкой на список приложений, которые могли получить доступ к их фотографиям. Компания также свяжется с
				разработчиками приложений, чтобы удалить личные изображения пользователей.
			</p>
			<ul>
				<li>«Нам жаль, что это произошло», — говорится в сообщении Facebook.</li>
			</ul>
			<p>
				Ссылка на источник{' '}
				<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
					Spot
				</a>
			</p>
		</>
	),
	prev: '/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane',
	next: '/blog/speedtest-nebolshoj-rost-skorosti-interneta-v-uzbekistane',
};

export default function Blog() {
	return <BlogItem data={data} />;
}
