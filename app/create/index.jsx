import st from "@/app/create/create.module.scss"
import ft from "@/app/hosting/hosting.module.scss"
import Container from "@/components/container"
import SEO from "@/components/seo"

export default function Create({ language }) {
	const langData = {
		seoTitle: {
			ru: "Разработка сайтов | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Veb-sayt ishlab chiqish | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
			en: "Website development | Hosting TAS-IX in Tashkent, Uzbekistan",
		},
		desc: {
			ru: "Создание сайтов в Ташкенте от AIRNET.uz",
			uz: "AIRNET.uz dan Toshkentda veb-saytlarni ishlab chiqish",
			en: "Creation of sites in Tashkent from AIRNET.uz",
		},
		headTitle: {
			ru: "Создания сайта ",
			uz: "Saytni yaratish",
			en: "Website Creation",
		},
		description: {
			ru: "Вашей компании или стартапу необходимо создание сайта – мы знаем об этом наверняка! Команда «AIRNET» реализует узнаваемый сайт актуального формата с учетом ваших долгосрочных целей и текущих задач.",
			uz: "Sizning kompaniyangiz yoki startapingiz veb-sayt yaratishi kerak - biz bu haqda aniq bilamiz! AIRNET jamoasi sizning ma'lumotlaringizni hisobga olgan holda joriy formatdagi taniqli veb-saytni amalga oshiradi uzoq muddatli maqsadlar va joriy vazifalar.",
			en: "Your company or startup needs to create a website - we know this for sure! The AIRNET team implements a recognizable website in an up-to-date format, taking into account your long-term goals and current tasks.",
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
									<a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
										Заказать сайт
									</a>
								</td>
								<td>
									<a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
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
									<a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
										Saytga buyurtma berish
									</a>
								</td>
								<td>
									<a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
										Pro saytga buyurtma berish
									</a>
								</td>
							</tr>
						</thead>
					</table>
				</>
			),
			en: (
				<>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Ready-to-use solutions</th>
								<th>Unique Solutions</th>
							</tr>
							<tr>
								<th>Landing Page from</th>
								<td>1 300 000 UZS</td>
								<td>2 500 000 UZS</td>
							</tr>
							<tr>
								<th>Promo site from</th>
								<td>1 500 000 UZS</td>
								<td>3 000 000 UZS</td>
							</tr>
							<tr>
								<th>Catalog site from</th>
								<td>3 000 000 UZS</td>
								<td>6 000 000 UZS</td>
							</tr>
							<tr>
								<th>Online store from</th>
								<td>4 000 000 sum</td>
								<td>8 000 000 UZS</td>
							</tr>
							<tr>
								<th>Mobile version from</th>
								<td>1 000 000 sum</td>
								<td>2 000 000 UZS</td>
							</tr>
							<tr>
								<th></th>
								<td>
									<a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
										Order website
									</a>
								</td>
								<td>
									<a href="https://billing.airnet.uz/billing.php" target="_blank" rel="noopener noreferrer">
										Order website PRO
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
			en: "Free for every site",
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
			en: (
				<>
					<li>Domain .UZ for the site - 1 year.</li>
					<li>Hosting 250mb for the site - 1 year.</li>
					<li>Web site technical support - 1 month</li>
					<li>Setting up and connecting the "Re:plain" chat to website</li>
					<li>Setting up Google Analytics and Yandex.Metrica counters</li>
				</>
			),
		},
		title: {
			ru: "Ваш хостинг будет размещен на сервере с конфигурацией:",
			uz: "Sizning xostingingiz quyidagi konfiguratsiyaga ega serverda joylashtiriladi:",
			en: "Your hosting will be hosted on a server with configuration:",
		},
	}

	const block = [
		{
			title: { ru: "Жесткие диски", uz: "Qattiq disk", en: "Hard disks" },
			description: {
				ru: "12 x 1ТB SSD",
				uz: "12 x 1TB SSD",
				en: "12 x 1TB SSD",
			},
			img: "/hosting/ssd.png",
		},
		{
			title: { ru: "Оперативная память", uz: "Tezkor hotira", en: "RAM" },
			description: { ru: "256 GB DDR4 ECC", uz: "256 GB DDR4 ECC", en: "256 GB DDR4 ECC" },
			img: "/hosting/ram.png",
		},
		{
			title: { ru: "Процессор", uz: "Protsessor", en: "CPU" },
			description: { ru: "2 x Intel Xeon", uz: "2 x Intel Xeon", en: "2 x Intel Xeon" },
			img: "/hosting/processor.png",
		},
		{
			title: { ru: "Массив RAID", uz: "Massiv RAID", en: "RAID Array" },
			description: { ru: "Аппаратный RAID5", uz: "RAID5 apparati", en: "Hardware RAID5" },
			img: "/hosting/raid.png",
		},
	]

	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.desc[language]} />
			<Container
				style={{ background: `url('/servers-4.jpg') no-repeat` }}
				className="mt-0"
				headTitle={langData.headTitle[language]}
				description={<p>{langData.description[language]}</p>}
			>
				<div className={st.create}>
					<div className={st.create__table}>{langData.table[language]}</div>
					<div className={st.create__footer}>
						<h3>{langData.tekin[language]}</h3>
						<ul className="list">{langData.list[language]}</ul>
					</div>
				</div>
			</Container>
			<Container title={langData.title[language]} clNTitle="text-center">
				<div className={ft.hosting__block}>
					{block.map((item, idx) => (
						<div key={idx} className={ft.hosting__block__item}>
							<div className={ft.hosting__block__item__img}>
								<img src={item.img} />
							</div>
							<div className={ft.hosting__block__item__content}>
								<h6>{item.title[language]}</h6>
								<p>{item.description[language]}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</>
	)
}
