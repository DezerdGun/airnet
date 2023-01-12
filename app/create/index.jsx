import Container from "@/components/container";
import CustomTable from "@/components/customTable";
import st from "@/app/create/create.module.scss";
import ft from "@/app/hosting/hosting.module.scss";
import SEO from "@/components/seo";

export default function Create({ language }) {
	const langDate = {
		seoTitle: {
			ru: "Разработка сайтов | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Veb-sayt ishlab chiqish | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		},
		desc: {
			ru: "Создание сайтов в Ташкенте от AIRNET.uz",
			uz: "AIRNET.uz dan Toshkentda veb-saytlarni ishlab chiqish",
		},
		headTitle: {
			ru: "Создания сайта ",
			uz: "Saytni yaratish",
		},
		description: {
			ru: "Вашей компании или стартапу необходимо создание сайта – мы знаем об этом наверняка! Команда «AIRNET» реализует узнаваемый сайт актуального формата с учетом ваших долгосрочных целей и текущих задач.",
			uz: "Sizning kompaniyangiz yoki startapingiz veb-sayt yaratishi kerak - biz bu haqda aniq bilamiz! AIRNET jamoasi sizning ma'lumotlaringizni hisobga olgan holda joriy formatdagi taniqli veb-saytni amalga oshiradi uzoq muddatli maqsadlar va joriy vazifalar.",
		},
		table: {
			ru: (
				<>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Готовые решения</th>
								<th>Уникальные решения</th>
							</tr>
							<tr>
								<th>Landing Page от</th>
								<td>1 300 000 сум</td>
								<td>2 500 000 сум</td>
							</tr>
							<tr>
								<th>Сайт-визитка от</th>
								<td>1 500 000 сум</td>
								<td>3 000 000 сум</td>
							</tr>
							<tr>
								<th>Сайт-каталог от</th>
								<td>3 000 000 сум</td>
								<td>6 000 000 сум</td>
							</tr>
							<tr>
								<th>Интернет-магазин от</th>
								<td>4 000 000 сум</td>
								<td>8 000 000 сум</td>
							</tr>
							<tr>
								<th>Мобильная версия от</th>
								<td>1 000 000 сум</td>
								<td>2 000 000 сум</td>
							</tr>
							<tr>
								<th></th>
								<td>
									<a
										href="https://billing.airnet.uz/billing.php"
										target="_blank"
										rel="noopener noreferrer"
									>
										Заказать сайт
									</a>
								</td>
								<td>
									<a
										href="https://billing.airnet.uz/billing.php"
										target="_blank"
										rel="noopener noreferrer"
									>
										Заказать сайт PRO
									</a>
								</td>
							</tr>
						</thead>
					</table>
				</>
			),
			uz: (
				<>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Tayyor yechimlar</th>
								<th>Ajoyib yechmlar</th>
							</tr>
							<tr>
								<th>Landing Page dan</th>
								<td>1 300 000 so'm</td>
								<td>2 500 000 so'm</td>
							</tr>
							<tr>
								<th>Sayt tashrifnomasidan</th>
								<td>1 500 000 so'm</td>
								<td>3 000 000 so'm</td>
							</tr>
							<tr>
								<th>Sayt mundarijasidan</th>
								<td>3 000 000 so'm</td>
								<td>6 000 000 so'm</td>
							</tr>
							<tr>
								<th>Internet do'konidan</th>
								<td>4 000 000 so'm</td>
								<td>8 000 000 so'm</td>
							</tr>
							<tr>
								<th>Telefon qurulmasidan</th>
								<td>1 000 000 so'm</td>
								<td>2 000 000 so'm</td>
							</tr>
							<tr>
								<th></th>
								<td>
									<a
										href="https://billing.airnet.uz/billing.php"
										target="_blank"
										rel="noopener noreferrer"
									>
										Saytga buyurtma berish
									</a>
								</td>
								<td>
									<a
										href="https://billing.airnet.uz/billing.php"
										target="_blank"
										rel="noopener noreferrer"
									>
										Pro saytga buyurtma berish
									</a>
								</td>
							</tr>
						</thead>
					</table>
				</>
			),
		},
		tekin: {
			ru: "Бесплатно для каждого сайта",
			uz: "Hamma saytlar uchun tekin",
		},
		list: {
			ru: (
				<>
					<li>Домен .UZ для сайта - 1 год.</li>
					<li>Хостинг 250мб для сайта - 1 год.</li>
					<li>Техническая поддержка сайта - 1 мес.</li>
					<li>Настройка и подключение чат &quot;Re:plain&quot; на сайт</li>
					<li>Настройка счетчиков Google Analytics и Яндекс.Метрика</li>
				</>
			),
			uz: (
				<>
					<li>Sayt uchun .UZ domeni - 1 yil.</li>
					<li>Sayt uchun 250mb xosting - 1 yil.</li>
					<li>Saytning texnik yordami - 1 oy.</li>
					<li>Chatni sozlash va ulash &quot;Re:plain&quot; veb-saytga</li>
					<li>Google Analytics va Yandex.Metrica hisoblagichlarini sozlash</li>
				</>
			),
		},
		title: {
			ru: "Ваш хостинг будет размещен на сервере с конфигурацией:",
			uz: "Sizning xostingingiz quyidagi konfiguratsiyaga ega serverda joylashtiriladi:",
		},
	};
	const block = [
		{
			title: { ru: "Жесткие диски", uz: "Qattiq disk" },
			description: {
				ru: "12 x 1ТB SSD",
				uz: "12 x 1TB SSD",
			},
			img: "/hosting/ssd.png",
		},
		{
			title: { ru: "Оперативная память", uz: "Tezkor hotira" },
			description: "256 GB DDR4 ECC",
			img: "/hosting/ram.png",
		},
		{
			title: { ru: "Процессор", uz: "Protsessor" },
			description: "2 x Intel Xeon",
			img: "/hosting/processor.png",
		},
		{
			title: { ru: "Массив RAID", uz: "Massiv RAID" },
			description: "Аппаратный RAID5",
			img: "/hosting/raid.png",
		},
	];

	return (
		<>
			<SEO title={langDate.seoTitle[language]} desc={langDate.desc[language]} />
			<Container
				style={{ background: `url('/servers-4.jpg') no-repeat` }}
				className="mt-0"
				headTitle={langDate.headTitle[language]}
				description={<p>{langDate.description[language]}</p>}
			>
				<div className={st.create}>
					<div className={st.create__table}>{langDate.table[language]}</div>
					<div className={st.create__footer}>
						<h3>{langDate.tekin[language]}</h3>
						<ul className="list">{langDate.list[language]}</ul>
					</div>
				</div>
			</Container>
			<Container title={langDate.title[language]} clNTitle="text-center">
				<div className={ft.hosting__block}>
					{block.map(
						(item) =>
							(
								<div key={item.title} className={ft.hosting__block__item} language={language}>
									<div className={ft.hosting__block__item__img}>
										<img src={item.img} />
									</div>
									<div className={ft.hosting__block__item__content}>
										<h6>{item.title}</h6>
										<p>{item.description}</p>
									</div>
								</div>
							)[language]
					)}
				</div>
			</Container>
		</>
	);
}
