import Link from "next/dist/client/link"
import { useEffect, useState } from "react"

import CustomSwiper from "@/components/customSwiper"
import FAQ from "@/components/faq"
import Notifications from "@/components/notifications"
import Partners from "@/components/partners"
import RegDomain from "@/components/regDomain"
import Reviews from "@/components/reviews"
import SEO from "@/components/seo"
import Product from "@/components/seo/product"
import Sitepad from "@/components/sitepad"
import Stock from "@/components/stock"
import TarifCard from "@/components/tarifCard"
import TarifCard2 from "@/components/tarifCard2"
import TarifMaket from "@/components/tarifMaket"
import Trust from "@/components/trust"
import WhyBlock from "@/components/whyBlock"

import { checkLang } from "@/utils/checkLang"
import { Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Home({ language }) {
	const [show, setShow] = useState(-1)
	const langData = {
		seoTitle: {
			ru: "Airnet.uz - Виртуальный хостинг в TAS-IX, домена, VDS-сервера, Ташкент",
			uz: "Airnet.uz - TAS-IXda virtual xosting, domen, VDS-server, Toshkent",
			en: "Airnet.uz - Virtual hosting in TAS-IX, domain, VDS server, Tashkent",
		},
		seoDesc: {
			ru: "Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена",
			uz: "Virtual xosting, Toshkentda xosting, xostingni qayta sotish, arzon VDS, VPS serverlar, Toshkentda VDS, virtual serverlar, ajratilgan serverlar, domen nomlari",
			en: "Virtual hosting, hosting in Tashkent, reselling hosting, cheap VDS, VPS servers, VDS in Tashkent, virtual servers, dedicated servers, domain names",
		},
		whyBlockTitle: {
			ru: "Почему выбирают AIRNET?",
			uz: "Nima uchun AIRNET ni tanlaysiz?",
			en: "Why choose AIRNET?",
		},
		tarifMaketTitle: {
			ru: "Популярные тарифы - Виртуальный сервер в Ташкенте",
			uz: "Ommabop tariflar - Toshkentdagi virtual server",
			en: "Popular tariffs - Virtual server in Tashkent",
		},
		tarifMaketDesc: {
			ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости до 1 Gbps",
			uz: "Bizning serverlarimiz O‘zbekiston hududida (Toshkent) TAS-IX tarmog‘ida 1 Gbit/s gacha tezlikda joylashgan.",
			en: "Our servers are located on the territory of Uzbekistan (Tashkent), in the TAS-IX network at speeds up to 1 Gbps",
		},
		tarifMaketEnd: {
			ru: (
				<>
					<p>
						Срок установки сервера, после оформления заказа и оплаты, составляет
						от 30 минут до 2-х рабочих дней, в зависимости от наличия
						необходимых серверов и загрузки технического персонала. Среднее
						время активации оборудования после оплаты - 1-2 часа. Мы делам всё
						возможное, чтобы уменьшить время ожидания.
					</p>
					<p>Срок действия услуги начнется с момента её активации.</p>
				</>
			),
			uz: (
				<>
					<p>
						Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish
						vaqti 30 daqiqadan 2 daqiqagacha zarur serverlarning mavjudligi va
						texnik yukga qarab ish kunlari xodimlar. To'lovdan so'ng uskunani
						faollashtirishning o'rtacha vaqti 1-2 soat. Biz hamma narsani
						qilamiz kutish vaqtini qisqartirish mumkin.
					</p>
					<p>Xizmat u yoqilgan paytdan boshlab ishga tushadi.</p>
				</>
			),
			en: (
				<>
					<p>
						Server installation time, after placing an order and payment, is
						from 30 minutes to 2 working days, depending on the availability of
						the necessary servers and the load of the technical personnel.
						Average equipment activation time after payment is 1-2 hours. We do
						everything possible to reduce the waiting time.
					</p>
					<p>The service will start from the moment it is activated.</p>
				</>
			),
		},
		tarifMaketTitle2: {
			ru: "Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте",
			uz: "Ommabop tariflar Toshkentda umumiy hosting Cpanel",
			en: "Popular tariffs Shared hosting Cpanel in Tashkent",
		},
		tarifMaketEnd2: {
			ru: "*При оплате за хостинг от 12 месяцев!",
			uz: "*Xosting uchun 12 oydan boshlab to'lashda!",
			en: "*If you pay for hosting from 12 months!",
		},
		faqTitle: {
			ru: "Нас часто спрашивают",
			uz: "Bizdan tez-tez so'rashadi",
			en: "We are often asked",
		},
		month: {
			ru: "мес.",
			uz: "oy",
		},
	}

	const faq = [
			{
				title: {
					ru: "Есть ли возможность протестировать услуги? ✔",
					uz: "Xizmatlarni sinab ko'rish mumkinmi? ✔",
					en: "Is it possible to test the services? ✔",
				},
				description: {
					ru: (
						<>
							<p>
								Чтобы протестировать сервис, сначала нужно{" "}
								<a href="#">зарегистрироваться.</a>
							</p>

							<p>
								Вам нужен VDS сервер? - Выполните 5 простых шагов, описанных
								здесь
							</p>

							<p>
								Вы представляете юр.лицо, и вам нужен полноценный тестовый
								стенд? - <strong>напишите нам</strong>
							</p>
						</>
					),
					uz: (
						<>
							<p>
								Xizmatni sinab koʻrish uchun avval{" "}
								<a href="#">roʻyxatdan oʻtishingiz kerak.</a>
							</p>

							<p>
								Sizga VDS server kerakmi? - Bu yerda tasvirlangan 5 oson qadamni
								bajaring
							</p>

							<p>
								Siz yuridik shaxssiz va sizga to'liq huquqli test stoli kerakmi?
								- <strong>bizga yozing</strong>
							</p>
						</>
					),
					en: (
						<>
							<p>
								To test the service, you first need to <a href="#">sign up.</a>
							</p>

							<p>
								Do you need a VDS server? - Follow the 5 easy steps described
								here
							</p>

							<p>
								Are you a legal entity and do you need a full-fledged test
								stand? - <strong>write to us</strong>
							</p>
						</>
					),
				},
			},
			{
				title: {
					ru: "Как быстро отвечает служба техподдержки? ⭐",
					uz: "Texnik yordam qanchalik tez javob beradi? ⭐",
					en: "How quickly does tech support respond? ⭐",
				},
				description: {
					ru: (
						<p>
							Время ответа может занять до 30 мин. Оно зависит от числа
							обращений в определенный период времени.
						</p>
					),
					uz: (
						<p>
							Javob berish vaqti 30 daqiqagacha vaqt olishi mumkin. Bu ma'lum
							bir davrdagi qo'ng'iroqlar soniga bog'liq. vaqt.
						</p>
					),
					en: (
						<p>
							Response time may take up to 30 minutes. It depends on the number
							of calls in a certain time period.
						</p>
					),
				},
			},
			{
				title: {
					ru: "Можно ли изменять конфигурацию рабочего сервера? 🖥️",
					uz: "Ishchi server konfiguratsiyasini o'zgartirish mumkinmi? 🖥️",
					en: "Is it possible to change the configuration of the working server? 🖥️",
				},
				description: {
					ru: (
						<>
							<p>
								Да. Изменять конфигурации своего сервера вы можете в любой
								момент. 🚀
							</p>

							<p>
								Для <strong>RAM</strong> и <strong>CPU</strong> [требуется
								перезагрузка]
							</p>

							<p>
								Для <strong>SSD</strong> [требуется перезагрузка]
							</p>

							<p>
								Для <strong>Интернет</strong> [без перезагрузки]
							</p>
						</>
					),
					uz: (
						<>
							<p>
								Ha. Siz istalgan vaqtda serveringiz konfiguratsiyasini
								o'zgartirishingiz mumkin. 🚀
							</p>

							<p>
								<strong>RAM</strong> va <strong>CPU</strong> uchun [qayta
								yuklash kerak]
							</p>

							<p>
								<strong>SSD</strong> uchun [qayta yuklash kerak]
							</p>

							<p>
								<strong>Internet</strong> uchun [qayta yuklanmaydi]
							</p>
						</>
					),
					en: (
						<>
							<p>
								Yes. You can change the configuration of your server at any
								time. 🚀
							</p>

							<p>
								For <strong>RAM</strong> and <strong>CPU</strong> [reboot
								required]
							</p>

							<p>
								For <strong>SSD</strong> [reboot required]
							</p>

							<p>
								For <strong>Internet</strong> [no reboot]
							</p>
						</>
					),
				},
			},
			{
				title: {
					ru: "Какая система виртуализации используется в AIRNET? 🗂️",
					uz: "AIRNET da qanday virtualizatsiya tizimi qo'llaniladi? 🗂️",
					en: "What virtualization system is used in AIRNET? 🗂️",
				},
				description: {
					ru: (
						<p>
							Виртуальная инфраструктура <strong>AIRNET</strong> компании
							использует <strong>VMware</strong> с прикладными дополнениями.
							Виртуальные сервера создаются в среде операционной системы{" "}
							<strong>ESXi</strong>.
						</p>
					),
					uz: (
						<p>
							Kompaniyaning <strong>AIRNET</strong> virtual infratuzilmasi{" "}
							<strong>VMware</strong> ilova qoʻshimchalari bilan. Virtual
							serverlar muhitda yaratilgan
							<strong>ESXi</strong> operatsion tizimi.
						</p>
					),
					en: (
						<p>
							The company's <strong>AIRNET</strong> virtual infrastructure uses{" "}
							<strong>VMware</strong> with application addons. Virtual servers
							are created in
							<strong>ESXi</strong> operating system environment.
						</p>
					),
				},
			},
			{
				title: {
					ru: "Как можно оплатить за услуги AIRNET? 💷",
					uz: "AIRNET xizmatlari uchun qanday to'lashim mumkin? 💷",
					en: "How can I pay for AIRNET services? 💷",
				},
				description: {
					ru: (
						<>
							<p>Способы оплаты</p>

							<p>
								Для <strong>физических лиц</strong>: PAYME, PAYNET, CLICK, UPAY,
								Webmoney, OSON.uz, VISA, MasterCard и другие.
							</p>

							<p>
								Для <strong>юридических лиц</strong>: банковский перевод.
								(перечисление)
							</p>
						</>
					),
					uz: (
						<>
							<p>To'lov usullari</p>

							<p>
								<strong>jismoniy shaxslar</strong> uchun: PAYME, PAYNET, CLICK,
								UPAY, Webmoney, OSON.uz, VISA, MasterCard va boshqalar.
							</p>

							<p>
								<strong>yuridik shaxslar</strong> uchun: bank o‘tkazmasi.
								(ro'yxatga olish)
							</p>
						</>
					),
					en: (
						<>
							<p>Payment methods</p>

							<p>
								For <strong>individuals</strong>: PAYME, PAYNET, CLICK, UPAY,
								Webmoney, OSON.uz, VISA, MasterCard and others.
							</p>

							<p>
								For <strong>legal entities</strong>: bank transfer.
								(enumeration)
							</p>
						</>
					),
				},
			},
		],
		tarif = [
			{
				title: { ru: "Strong", uz: "Strong", en: "Strong" },
				prices: [
					{
						price: "200 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "600 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 200 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "2 400 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 2,
				ram: 4,
				ssd: 50,
				net: 25,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
			},
			{
				title: { ru: "VIP+", uz: "VIP+", en: "VIP+" },
				prices: [
					{
						price: "300 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "900 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 800 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "3 600 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 4,
				ram: 6,
				ssd: 100,
				net: 25,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
			},
			{
				title: { ru: "Advanced", uz: "Advanced", en: "Advanced" },
				prices: [
					{
						price: "550 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 650 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "3 300 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "6 600 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 6,
				ram: 10,
				ssd: 100,
				net: 25,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50",
			},
			{
				title: { ru: "Mega", uz: "Mega", en: "Mega" },
				prices: [
					{
						price: "800 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "2 400 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "4 800 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "9 600 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 6,
				ram: 12,
				ssd: 200,
				net: 25,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51",
			},
			{
				title: { ru: "Ultra", uz: "Ultra", en: "Ultra" },
				prices: [
					{
						price: "1 000 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "3 000 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "6 000 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "12 000 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				cpu: 8,
				ram: 16,
				ssd: 200,
				net: 25,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52",
			},
		],
		tarif2 = [
			{
				title: { ru: "Старт", uz: "Start", en: "Start" },
				prices: [
					{
						price: "10 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "30 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "57 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "108 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: 250,
				sites: 5,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32",
			},
			{
				title: { ru: "Простой", uz: "Oddiy", en: "Simple" },
				// price: '15 000',
				prices: [
					{
						price: "15 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "45 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "85 500",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "162 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: 500,
				sites: 10,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31",
			},
			{
				title: { ru: "Стандарт", uz: "Standart", en: "Standart" },
				// price: '25 000',
				prices: [
					{
						price: "25 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "75 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "142 500",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "270 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "1 000",
				sites: 15,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33",
			},
			{
				title: { ru: "Доступный", uz: "Hamyonbop", en: "Accessible" },
				// price: '60 000',
				prices: [
					{
						price: "60 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "180 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "342 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "648 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "3 000",
				sites: 20,
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34",
			},
			{
				title: { ru: "Оптимальный", uz: "Optimal", en: "Optimal" },
				// price: '90 000',
				prices: [
					{
						price: "90 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "270 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "513 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "972 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "5 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37",
			},
			{
				title: { ru: "Выгодный", uz: "Foydali", en: "Profitable" },
				// price: '150 000',
				prices: [
					{
						price: "150 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "450 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "855 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 620 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "10 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
			},
			{
				title: { ru: "Офис", uz: "Ofis", en: "Office" },
				// price: '250 000',
				prices: [
					{
						price: "250 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "750 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 425 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "2 700 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "15 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
			},
			{
				title: { ru: "Корпоративный", uz: "Korporativ", en: "Corporate" },
				// price: '350 000',
				prices: [
					{
						price: "350 000",
						dateOff: `1 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 050 000",
						dateOff: `3 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "1 995 000",
						dateOff: `6 ${langData.month[language]}`,
						date: langData.month[language],
					},
					{
						price: "3 780 000",
						dateOff: `12 ${langData.month[language]}`,
						date: langData.month[language],
					},
				],
				ssd: "20 000",
				sites: "∞",
				link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
			},
		],
		content = [
			{
				title: {
					ru: "Служба поддержки 24/7",
					uz: "Qo'llab-quvvatlash xizmati 24/7",
					en: "24/7 support service",
				},
				description: {
					ru: "В случае возникновения каких-либо вопросов, Вы всегда можете рассчитывать на нашу квалифицированную помощь с индивидуальным подходом, по телефону, e-mail, telegram, а также в онлайн чате - в любое время суток!",
					uz: "Savollaringiz bo'lsa, siz har doim bizning malakali yordamimizga individual yondashish orqali, telefon, elektron pochta, telegram orqali, shuningdek, kunning istalgan vaqtida ishonishingiz mumkin!",
					en: "If you have any questions, you can always count on our qualified assistance with an individual approach, by phone, e-mail, telegram, as well as in online chat - at any time of the day!",
				},
				img: "/phone.png",
			},
			{
				title: { ru: "Стабильность", uz: "Barqarorlik", en: "Stability" },
				description: {
					ru: (
						<>
							Мы обеспечиваем гарантированную доступность сервиса 99%.
							Круглосуточно, за всеми системами следят наши
							высококвалифицированные сотрудники. А оборудование размещаем в
							высокотехнологичном, современном, надёжном{" "}
							<Link href={checkLang(language) + "/dc"}>
								<a>Дата-Центре</a>
							</Link>{" "}
							TIER-2, в Ташкенте.
						</>
					),
					uz: (
						<>
							Biz 99% kafolatlangan xizmat mavjudligini ta'minlaymiz.
							Kecha-kunduz, hamma uchun tizimlar bizning yuqori malakali
							xodimlarimiz tomonidan nazorat qilinadi. Biz jihozlarni
							joylashtiramiz yuqori texnologiyali, zamonaviy, ishonchli{" "}
							<Link href={checkLang(language) + "/dc"}>
								<a>Ma'lumotlar markazi</a>
							</Link>{" "}
							TIER-2, Toshkent shahrida.
						</>
					),
					en: (
						<>
							We provide guaranteed service availability of 99%. Around the
							clock, for everyone systems are supervised by our highly qualified
							staff. We place the equipment in high-tech, modern, reliable{" "}
							<Link href={checkLang(language) + "/dc"}>
								<a>Data Center</a>
							</Link>{" "}
							TIER-2, in Tashkent.
						</>
					),
				},
				img: "/search.png",
			},
			{
				title: { ru: "Низкая цена", uz: "Past narx", en: "Low price" },
				description: {
					ru: 'Мы предоставляем услуги по самым "низким" ценам в Узбекистане, наше преимущество в том, что мы оказываем максимально качественные услуги за максимально низкие цены. Таким образом, мы поможем Вам зарабатывать, а не тратиться.',
					uz: "Biz O'zbekistonda 'eng past' narxlarda xizmatlar ko'rsatamiz, bizning afzalligimiz shundaki, biz eng yuqori sifatli xizmatlarni imkon qadar arzon narxlarda taqdim etamiz. Shunday qilib, biz sizga sarflashga emas, pul ishlashingizga yordam beramiz.",
					en: 'We provide services at the "lowest" prices in Uzbekistan, our advantage is that we provide the highest quality services for the lowest possible prices. Thus, we will help you to earn, not to spend.',
				},
				img: "/wallet.png",
			},
			{
				title: {
					ru: "Собственные ip-адреса",
					uz: "O'z IP manzillari",
					en: "Own ip-addresses",
				},
				description: {
					ru: 'Мы предоставляем услуги по собственной BGP протоколу (Border Gateway Protocol) для всех блоков IP-адресов. Подключенныe напрямую к автономной системе (AS) АК "Узтелеком", а также являемся участниками зоны TAS-IX.',
					uz: "Biz barcha IP-manzillar bloklari uchun o'z BGP protokolimiz (Chegara shlyuzi protokoli) yordamida xizmatlarni taqdim etamiz. “O‘ztelekom” AK avtonom tizimiga (AS) bevosita ulangan va biz ham TAS-IX zonasi a’zolarimiz.",
					en: 'We provide services on our own BGP protocol (Border Gateway Protocol) for all blocks of IP addresses. Connected directly to the autonomous system (AS) of JSC "Uztelecom", and we are also members of the TAS-IX zone.',
				},
				img: "/ip.png",
			},
		]

	useEffect(() => {
		const outerClick = (e) => {
			const classList = [...e.target?.classList]

			if (!classList.join(" ").includes("tarif_drop")) {
				setShow(-1)
			}
		}
		document.addEventListener("click", outerClick)
		return () => document.removeEventListener("click", outerClick)
	}, [])

	return (
		<>
			<SEO
				title={langData.seoTitle[language]}
				desc={langData.seoDesc[language]}
			/>
			<Product language={language} />
			<CustomSwiper language={language} />
			<WhyBlock
				title={langData.whyBlockTitle[language]}
				content={content}
				language={language}
			/>
			<TarifMaket
				title={langData.tarifMaketTitle[language]}
				description={<p>{langData.tarifMaketDesc[language]}</p>}
				endText={
					<div className="text-white text-center mt-2">
						{langData.tarifMaketEnd[language]}
					</div>
				}
			>
				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					loop={false}
					autoplay={{
						delay: 100000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						950: {
							slidesPerView: 4,
						},
						770: {
							slidesPerView: 3,
						},
						500: {
							slidesPerView: 2,
						},
					}}
					className="tarifSwiper"
				>
					{tarif.map((item, index) => (
						<SwiperSlide key={item.title}>
							<div className="w-95">
								<TarifCard
									index={index}
									tarif={item}
									show={show}
									setShow={setShow}
									language={language}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</TarifMaket>
			<RegDomain language={language} />
			<TarifMaket
				title={langData.tarifMaketTitle2[language]}
				description={<p>{langData.tarifMaketDesc[language]}</p>}
				endText={
					<p className="text-white text-center mt-2">
						{langData.tarifMaketEnd2[language]}
					</p>
				}
			>
				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					loop={false}
					autoplay={{
						delay: 100000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						950: {
							slidesPerView: 4,
						},
						770: {
							slidesPerView: 3,
						},
						500: {
							slidesPerView: 2,
						},
					}}
					className="tarifSwiper"
				>
					{tarif2.map((item, index) => (
						<SwiperSlide key={item.title}>
							<div className="w-95">
								<TarifCard2
									index={index + tarif2.length}
									tarif={item}
									show={show}
									setShow={setShow}
									language={language}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</TarifMaket>
			<Sitepad language={language} />
			<Stock language={language} />
			<Reviews language={language} />
			<Trust language={language} />
			<FAQ faq={faq} title={langData.faqTitle[language]} language={language} />
			<Notifications language={language} />
			<Partners language={language} />
		</>
	)
}
