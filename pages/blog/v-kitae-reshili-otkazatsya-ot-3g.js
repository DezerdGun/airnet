import BlogItem from '../../components/blogItem';

const data = {
	title: 'В Китае решили отказаться от 3G',
	date: '18 Дек 2018',
	img: '/blog/google-5g.jpg',
	content: (
		<>
			<p>В прошлом году страна отказалась от 2G, а в этом году решила сделать то же самое с 3G.</p>
			<p>
				Основные китайские и тайваньские операторы планируют с 1 января 2019 года перестать оказывать услуги по
				технологии 3G, сообщает Giz China.
			</p>
			<p>
				Chunghwa Telecom, FarEasTone Telecom и Taiwan Big Brother не планируют продлевать свои лицензии по
				3Glicensess, которые истекают 31 декабря 2018 года.
			</p>
			<p>
				Сейчас 3G на одном лишь Тайване использует около 280 тыс. абонентов, тогда как в прошлом году было более
				5 млн. В Китае таких пользователей еще меньше — около 200 тыс.
			</p>
			<p>
				Ожидается, что до конца года основные операторы переведут абонентов на 4G, а сама технология уйдет в
				прошлое уже к концу следующего года. Некоторые операторы, такие как Asia Pacific Telecom, к примеру, уже
				отключили 3G.
			</p>
			<p>С 1 июля 2017 года в Китае и Тайване также закрылась сеть 2G.</p>
			<p>
				Ранее Spot писал, что уровень проникновения 4G в Узбекистане составляет 8,7% — большая часть населения в
				стране пользуется 2G (33,9%) и 3G (31,4%).
			</p>
			<p>
				Ссылка на источник{' '}
				<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
					Spot
				</a>
			</p>
		</>
	),
	prev: '/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android',
	next: '/blog/yandeks-dengi-rabotayut-nad-rasshireniem-metodov-popolneniya-koshelkov-v-uzbekistane',
};

export default function Blog() {
	return <BlogItem data={data} />;
}
