import Container from "@/components/container"
import Partners from "@/components/partners"
import PopularStock from "@/components/popularStock"
import SEO from "@/components/seo"
import st from "./stock.module.scss"
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

const data = [
	{
		img: "/stock/stock.jpg",
		date: { ru: "до 20-го января", uz: "20-yanvargacha", en: "until January 20th" },
		isStock: false,
		title: {
			ru: "Первый розыгрыш от ХОСТИНГ-ПРОВАЙДЕРА AIRNET. Хостинг и VPS БЕСПЛАТНО получат многие пользователи!",
			uz: "HOSTING PROVIDER AIRNET-dan birinchi o'yin. Ko'p foydalanuvchilar hosting va VPS-ni BEPUL oladi!",
			en: "First giveaway from AIRNET HOSTING PROVIDER. Many users will get hosting and VPS for FREE!",
		},
		description: {
			ru: (
				<>
					<p>
						<strong>Условия и призы:</strong>
					</p>
					<p>
						Перед участием в розыгрыше вы должны быть уверены в том, что данная услуга вам необходима. Принимать участие
						в розыгрыше для галочки не нужно.
					</p>
					<p>
						<strong>Розыгрыш хостинга:</strong>
					</p>
					<p>
						3 месяца бесплатного хостинга на тарифе Старт — 5 шт.
						<br />
						3 месяца бесплатного хостинга на тарифе Простой — 3 шт.
						<br />3 месяца бесплатного хостинга на тарифе Стандарт — 1 шт.
					</p>
					<p>
						<strong>Розыгрыш VPS:</strong>
					</p>
					<p>2 месяца бесплатного VDS/VPS «Micro» — 1 шт.</p>
					<p>
						Ознакомиться с характеристиками тарифов можно НА САЙТЕ https://airnet.uz. Победители будут выбраны случайным
						образом в день подведения итогов. Победители будут объявлены в последнем комментарии в этом посте от
						Администратора. Всего будет 10 победителей!
					</p>
					<p className="text-red">
						<strong>Правила розыгрыша:</strong>
					</p>
					<p>
						В комментариях необходимо отписать, что вы принимаете участие и указать кодовое слово того, на что вы
						претендуете. Принимать участие в розыгрыше можно только на одну услугу! То есть, вы не можете участвовать в
						розыгрыше хостинга и VPS одновременно. При нарушении этого правила вы лишаетесь статуса участника!
					</p>
					<p>
						Кодовое слово для хостинга: <strong>airHost</strong>
						<br />
						Кодовое слово для VPS: <strong>airVPS</strong>
					</p>
					<p>
						Завершение розыгрыша: <strong className="text-red">20 января</strong>
						<br />
						Подведение итогов: 21-22 января (возможна задержка на несколько дней)
					</p>
					<p>Всем удачного розыгрыша!</p>
				</>
			),
			uz: (
				<>
					<p>
						<strong>Sovgalar va shartlar:</strong>
					</p>
					<p>
						O'yinda ishtirok etishdan oldin, bunga ishonch hosil qilishingiz kerak sizga kerak bo'lgan xizmat. Shomil
						emas uchun chizilgan ishtirok eting kerak.
					</p>
					<p>
						<strong>Xosting Giveaway</strong>
					</p>
					<p>
						Start tarifida 3 oylik bepul xosting - 5 dona.
						<br />
						Oddiy reja bo'yicha 3 oylik bepul xosting - 3 dona.
						<br />
						Standart tarifda 3 oylik bepul xosting — 1 dona.
					</p>
					<p>
						<strong>VPS oyini:</strong>
					</p>
					<p>2 oy bepul VDS/VPS "Mikro" - 1 dona.</p>
					<p>
						Tariflar xususiyatlari bilan SAYTDA tanishishingiz mumkin https://airnet.uz. G'oliblar kuni tasodifiy
						tanlanadi xulosa qilish. G'oliblar oxirgi marta e'lon qilinadi Administratordan ushbu postdagi sharhlar.
						Hammasi bo'lib 10 ta bo'ladi g'oliblar!
					</p>
					<p className="text-red">
						<strong>O'yin qoidasi:</strong>
					</p>
					<p>
						Izohlarda siz ishtirok etayotganingizni va obunani bekor qilishingiz kerak murojaat etayotgan narsangizning
						kod so'zini ko'rsating. Qatnashmoq O'yinga faqat bitta xizmat kiritilishi mumkin! Ya'ni, qila olmaysiz bir
						vaqtning o'zida hosting va VPS o'yinida ishtirok eting. Buzilgan taqdirda bu qoida siz ishtirokchi maqomini
						yo'qotasiz!
					</p>
					<p>
						Xosting kod so'zi: <strong>airHost</strong>
						<br />
						VPS uchun kod so'zi: <strong>airVPS</strong>
					</p>
					<p>
						Qura o'yini yakuni: <strong className="text-red">20 yanvarda</strong>
						<br />
						Xulosa: 21-22 yanvar (bir necha vaqtga kechiktirilishi mumkin )
					</p>
					<p>Qura o'ynida hammaga omad</p>
				</>
			),
			en: (
				<>
					<p>
						<strong>Terms and Prizes:</strong>
					</p>
					<p>
						Before participating in the draw, you must be sure that this service is necessary for you. Participate in
						the drawing for a tick is not necessary.
					</p>
					<p>
						<strong>Hosting Giveaway:</strong>
					</p>
					<p>
						3 months of free hosting on the Start tariff — 5 pcs.
						<br />
						3 months of free hosting on the Simple plan — 3 pcs.
						<br />3 months of free hosting on the Standard tariff — 1 pc.
					</p>
					<p>
						<strong>VPS Giveaway:</strong>
					</p>
					<p>2 months of free VDS/VPS "Micro" - 1 piece</p>
					<p>
						You can get acquainted with the characteristics of tariffs ON THE SITE https://airnet.uz. Winners will be
						chosen randomly way on the day of summing up. Winners will be announced in the last comment on this post by
						Administrator. There will be 10 winners in total!
					</p>
					<p className="text-red">
						<strong>Drawing rules:</strong>
					</p>
					<p>
						In the comments, you must unsubscribe that you are participating and indicate the code word of what you are
						claim. You can only participate in the draw for one service! That is, you cannot participate in raffle
						hosting and VPS at the same time. If you violate this rule, you will lose your membership status!
					</p>
					<p>
						Hosting codeword: <strong>airHost</strong>
						<br />
						Code word for VPS: <strong>airVPS</strong>
					</p>
					<p>
						Giveaway End: <strong className="text-red">January 20</strong>
						<br />
						Summing up: January 21-22 (a few days delay is possible)
					</p>
					<p>Good luck to everyone!</p>
				</>
			),
		},
	},
	{
		img: "/stock/stock-25.png",
		date: { ru: "до 1-го января", uz: "1-yanvargacha", en: "before January 1st" },
		isStock: true,
		title: {
			ru: "Скидка 25% на веб-хостинг для студентов вуза TUIT (Ташкентский университет информационных технологий)",
			uz: "TATU (Toshkent axborot texnologiyalari universiteti) talabalari uchun veb-xostingga 25% chegirma",
			en: "25% discount on web hosting for students of TUIT (Tashkent University of Information Technologies)",
		},
		description: {
			ru: (
				<>
					<p>Только сейчас, у Вас есть возможность заказать любой веб-хостинг с 25% скидкой</p>
					<small>Для участия в акции, Вам нужно заказать веб-хостинг и предъявить копию студенческого билета.</small>
				</>
			),
			uz: (
				<>
					<p>Faqat hozir siz istalgan veb-xostingga buyurtma berish imkoniyatiga egasiz 25% chegirma</p>
					<small>
						Aksiyada ishtirok etish uchun siz veb-xosting va taqdimotga buyurtma berishingiz kerak talaba kartasi
						nusxasi.
					</small>
				</>
			),
			en: (
				<>
					<p>Only now, you have the opportunity to order any web hosting with a 25% discount</p>
					<small>
						To participate in the promotion, you need to order web hosting and present a copy of your student ID.
					</small>
				</>
			),
		},
	},
	{
		img: "/stock/stock-50.png",
		date: { ru: "до 1-го ноября", uz: "1-noyabrgacha", en: "until November 1st" },
		isStock: true,
		title: { ru: "Скидка 50% на первый месяц", uz: "1-oy 50% chegirma", en: "50% discount for the first month" },
		description: {
			ru: (
				<>
					<p>Только сейчас, у Вас есть возможность заказать веб-хостинг с 50% скидкой</p>
					<small>Для участия в акции, Вам нужно оплатить веб-хостинг за 3 месяца.</small>
				</>
			),
			uz: (
				<>
					<p>Faqat hozir sizda 50% ga veb-xostingga buyurtma berish imkoniyati mavjud chegirma</p>
					<small>Aksiyada ishtirok etish uchun siz 3 oy davomida veb-xosting uchun to'lashingiz kerak.</small>
				</>
			),
			en: (
				<>
					<p>Only now, you have the opportunity to order web hosting with a 50% discount</p>
					<small>To participate in the promotion, you need to pay for web hosting for 3 months.</small>
				</>
			),
		},
	},
	{
		img: "/stock/present.png",
		date: { ru: "до 10-го августа", uz: "10-yanvargacha", en: "until August 10th" },
		isStock: true,
		title: { ru: "Домен в подарок", uz: "Domen sovg'aga", en: "Gift domain" },
		description: {
			ru: (
				<>
					<p>
						Вы приобретаете у нас любой веб-хостинг на 1 год и абсолютно БЕСПЛАТНО получаете домен для вашего бизнеса
						или стартапа.
					</p>
					<small>Для участия в акции, Вам нужно оплатить веб-хостинг за год.</small>
				</>
			),
			uz: (
				<>
					<p>
						Siz bizdan har qanday veb hostingni 1 yilga va mutlaqo BEPUL xarid qilasiz biznesingiz yoki startapingiz
						uchun domen oling.
					</p>
					<small>Aksiyada ishtirok etish uchun siz bir yil davomida veb-xosting uchun to'lashingiz kerak.</small>
				</>
			),
			en: (
				<>
					<p>
						You purchase any web hosting from us for 1 year and get a domain for your business absolutely FREE or a
						startup.
					</p>
					<small>To participate in the promotion, you need to pay for a web hosting for a year.</small>
				</>
			),
		},
	},
	{
		img: "/stock/calendar.png",
		date: { ru: "до 8-го августа", uz: "8-avgustgacha", en: "until August 8th" },
		isStock: true,
		title: {
			ru: "Хостинг в подарок, при переезде от другого провайдера",
			uz: "Boshqa provayderdan ko'chib o'tishda sovg'a sifatida xosting",
			en: "Hosting as a gift, when moving from another provider",
		},
		description: {
			ru: (
				<>
					<p>
						Вы переезжаете к нам от другого хостинг-провайдера? Тогда мы подарим один месяц виртуального хостинга, по
						выбранному Вами тарифу, боле того, выполним бесплатный перенос всех сайтов!
					</p>
					<small>
						Для участия в акции, Вам нужно оплатить первый месяц и написать нам в отдел продаж, после чего, Вам окажут
						содействие в переезде, а также зачислят второй-подарочный месяц.
					</small>
				</>
			),
			uz: (
				<>
					<p>
						Siz boshqa hosting provayderidan bizga ko'chyapsizmi? Keyin beramiz bir oy virtual xosting, siz tanlagan
						tarifga ko'ra, ko'proq Bundan tashqari, biz barcha saytlarni bepul uzatishni amalga oshiramiz!
					</p>
					<small>
						Aksiyada ishtirok etish uchun siz birinchi oy uchun to'lovni amalga oshirishingiz va bizga yozishingiz kerak
						savdo bo'limi, shundan so'ng sizga ko'chirishda yordam beriladi, shuningdek ikkinchi sovg'a oyi hisobga
						olinadi.
					</small>
				</>
			),
			en: (
				<>
					<p>
						Are you moving to us from another hosting provider? Then we will give one month of virtual hosting,
						according to the tariff you have chosen, moreover, we will perform a free transfer of all sites!
					</p>
					<small>
						To participate in the promotion, you need to pay for the first month and write to our sales department,
						after which you will be provided assistance in moving, as well as a second gift month will be credited.
					</small>
				</>
			),
		},
	},
	{
		img: "/stock/transfer.png",
		date: { ru: "бессрочно", uz: "shoshilinch", en: "indefinitely" },
		isStock: true,
		title: {
			ru: "Перенос сайтов «под ключ» бесплатно",
			uz: "Kalit topshirilgan saytni bepul o'tkazish",
			en: "Turnkey site transfer for free",
		},
		description: {
			ru: (
				<>
					<p>
						При переезде от другого хостинг-провайдера к AIRNET, наши специалисты бесплатно перенесут все Ваши сайты
						&quot;под ключ&quot;.
					</p>
					<small>
						Для выполнения переезда, Вы должны иметь активный аккаунт у нас и создать тикет в техническую поддержку,
						указав данные доступа в панель управления предыдущего хостинга. Мы мгновенно приступим к работе, а перенос
						будет завершен в кратчайшие сроки.
					</small>
				</>
			),
			uz: (
				<>
					<p>
						Boshqa hosting-provayderdan AIRNET-ga o'tishda bizning mutaxassislarimiz barcha veb-saytlaringizni
						&quot;kalit orqali&quot;bepul o'tkazadi .
					</p>
					<small>
						Ko'chirishni yakunlash uchun bizda faol hisob qaydnomangiz bo'lishi kerak va panelga kirish ma'lumotlarini
						ko'rsatib, texnik yordam uchun chipta yaratish oldingi xostingni boshqarish. Biz darhol ishga kirishamiz
						transfer imkon qadar tezroq yakunlanadi.
					</small>
				</>
			),
			en: (
				<>
					<p>
						When moving from another hosting provider to AIRNET, our specialists will transfer all your sites for free
						&quot;turnkey&quot;.
					</p>
					<small>
						To complete the move, you must have an active account with us and create a technical support ticket, by
						specifying access data in the control panel of the previous hosting. We'll get to work instantly, and the
						transfer will be completed as soon as possible.
					</small>
				</>
			),
		},
	},
]

export default function Stock({ language }) {
	const langData = {
		seoT: {
			ru: "Акции и скидки | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Chegirma va aksiyalar  | Uzbekistonda,Toshkentda Xost TAS-IX , ",
			en: "Promotions and discounts | Hosting TAS-IX in Tashkent, Uzbekistan",
		},
		descT: {
			ru: "Выгодные акции от компании Airnet",
			uz: "Airnet kompaniyasidan qoniqarli chegirmalar",
			en: "Favorable promotions from Airnet",
		},
		headTitle: {
			ru: "Активныe акции",
			uz: "Chegirmalarni ishga tushirish",
			en: "Active shares",
		},
		text: {
			ru: <p>Собрали здесь самые интересные предложения</p>,
			uz: <p>Biz bu erda eng qiziqarli takliflarni to'pladik</p>,
			en: <p>We have collected the most interesting offers here</p>,
		},
	};

    const breadCrumbs = [
      {
        name: {
          ru: "Акции",
          uz: "Акции",
          en: "Акции",
        },
        link: "/stock",
      },
    ];

	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />

			{breadCrumbs && breadCrumbs.length ? (
			<>
				<BreadCrumbs data={breadCrumbs} language={language} />
				<PageBreadcrumb links={breadCrumbs} language={language} />
			</>
			) : null}

			<Container className="text-center" headTitle={langData.headTitle[language]}>
				<hr />
				<div className={st.stock__block}>
					<div className={st.stock__block__content}>{langData.text[language]}</div>
				</div>
			</Container>
			<PopularStock language={language} />
			{/* <Container headTitle="Действующие акции">
				<hr />
				<div className={st.stock}>
					{data.map((item) => (
						<div key={item.title} className={st.stock__item}>
							<div className={st.stock__item__img}>
								<Image src={item.img} width={170} height={170} blurDataURL placeholder="blur" />
							</div>
							<div className={st.stock__item__content}>
								<div className={st.stock__item__content__header}>
									<h3>{item.title}</h3>
									<div>
										<span>{item.isStock ? 'Акция действует:' : 'Розыгрыш действует:'}</span>
										<span>{item.date}</span>
									</div>
								</div>
								{item.description}
							</div>
						</div>
					))}
				</div>
			</Container> */}
			<Partners language={language} />
		</>
	)
}
