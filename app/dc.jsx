import Container from "@/components/container"
import SEO from "@/components/seo"
import BreadCrumbs from "../components/seo/breadCrumbs"
import PageBreadcrumb from "../components/seo/pageBreadCrumbs";

export default function DC({ language }) {
	const langData = {
		seoTitle: {
			ru: "Дата-Центр в Ташкенте | Airnet",
			uz: "Toshkentdagi Data Center | Airnet",
			en: "Data Center in Tashkent | Airnet",
		},
		desc: {
			ru: "Дата-Центр Airnet, который расположен в Ташкенте",
			uz: "Toshkent shahrida joylashgan Airnet Data Center",
			en: "Data Center Airnet, which is located in Tashkent",
		},
		tab: {
			ru: (
				<>
					<hr />
					<h3>Collocation</h3>
					<p>Наша компания не оказывает услугу “collocation” по размещение оборудования клиентов.</p>
					<h3>Локация</h3>
					<p>Выделенные VDS/VPS сервера размещаются в Ташкенте в надежном и охраняемом Дата-Центре TIER III.</p>
					<h3>Оборудование</h3>
					<p>
						Мы предоставляем только брендовое оборудование компаний IBM и Dell. При аренде сервера Вы
						можете не беспокоиться о его техническом состоянии.
					</p>
				</>
			),
			uz: (
				<>
					<hr />
					<h3>Kalleksiya</h3>
					<p>Bizning kompaniyamiz mijozlar uskunalarini joylashtirish uchun "kollokatsiya" xizmatini taqdim etmaydi.</p>
					<h3>Joylashuv</h3>
					<p>Maxsus VDS/VPS serverlari Toshkentda ishonchli va himoyalangan Data Centerda joylashgan TIER III.</p>
					<h3>Uskunalar</h3>
					<p>
						Biz faqat IBM va Dell kompaniyalarining uskunalarini taqdim etamiz. Serverni ijaraga
						olayotganda, uning texnik holati haqida tashvishlanishingiz shart emas.
					</p>
				</>
			),
			en: (
				<>
					<hr />
					<h3>Collocation</h3>
					<p>Our company does not provide a “collocation” service for placing customer equipment.</p>
					<h3>Location</h3>
					<p>Dedicated VDS/VPS servers are located in Tashkent in a reliable and guarded Data Center TIER III.</p>
					<h3>Equipment</h3>
					<p>
						We provide only branded equipment from IBM and Dell. When renting a server, you you don't have
						to worry about its technical condition.
					</p>
				</>
			),
		},
		headTitle: {
			ru: "Дата-Центр",
			uz: "Ma'lumotlar markazi",
			en: "Data center",
		},
	};

    const breadCrumbs = [
      {
        name: {
          ru: "Дата-Центр",
          uz: "Дата-Центр",
          en: "Дата-Центр",
        },
        link: "/dc",
      },
    ];

	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.desc[language]} />
			

			{breadCrumbs && breadCrumbs.length ? (
			<>
				<BreadCrumbs data={breadCrumbs} language={language} />
				<PageBreadcrumb links={breadCrumbs} language={language} />
			</>
			) : null}

			<Container headTitle={langData.headTitle[language]}>{langData.tab[language]}</Container>
		</>
	)
}
