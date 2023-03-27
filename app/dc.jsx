import Container from '@/components/container'
import SEO from '@/components/seo'

export default function DC({ language }) {
	const langData = {
		seoTitle: {
			ru: 'Дата-Центр в Ташкенте | Airnet',
			uz: 'Toshkentdagi Data Center | Airnet',
		},
		desc: {
			ru: 'Дата-Центр Airnet, который расположен в Ташкенте',
			uz: 'Toshkent shahrida joylashgan Airnet Data Center',
		},
		tab: {
			ru: (
				<>
					<hr />
					<h3>Collocation</h3>
					<p>
						Наша компания не оказывает услугу “collocation” по размещение
						оборудования клиентов.
					</p>
					<h3>Локация</h3>
					<p>
						Выделенные VDS/VPS сервера размещаются в Ташкенте в надежном и
						охраняемом Дата-Центре.
					</p>
					<h3>Оборудование</h3>
					<p>
						Мы предоставляем только брендовое оборудование компаний Hewlett
						Packard, IBM, Dell. При аренде сервера Вы можете не беспокоиться о
						его техническом состоянии.
					</p>
				</>
			),
			uz: (
				<>
					<hr />
					<h3>Kalleksiya</h3>
					<p>
						Bizning kompaniyamiz mijozlar uskunalarini joylashtirish uchun
						"kollokatsiya" xizmatini taqdim etmaydi.
					</p>
					<h3>Joylashuv</h3>
					<p>
						Maxsus VDS/VPS serverlari Toshkentda ishonchli va himoyalangan Data
						Centerda joylashgan.
					</p>
					<h3>Uskunalar</h3>
					<p>
						Biz faqat Hewlett Packard, IBM, Dell kompaniyalarining uskunalarini
						taqdim etamiz. Serverni ijaraga olayotganda, uning texnik holati
						haqida tashvishlanishingiz shart emas.
					</p>
				</>
			),
		},
		headTitle: {
			ri: 'Дата-Центр',
			uz: "Ma'lumotlar markazi",
		},
	}
	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.desc[language]} />
			<Container headTitle={langData.headTitle[language]}>
				{langData.tab[language]}
			</Container>
		</>
	)
}
