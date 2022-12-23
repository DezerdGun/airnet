import FAQ from "@/components/faq";
import Notifications from "@/components/notifications";
import Partners from "@/components/partners";
import CustomSwiper from "@/components/customSwiper";
import Trust from "@/components/trust";
import WhyBlock from "@/components/whyBlock";
import RegDomain from "@/components/regDomain";
import Sitepad from "@/components/sitepad";
import Stock from "@/components/stock";
import TarifCard from "@/components/tarifCard";
import Link from "next/dist/client/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TarifMaket from "@/components/tarifMaket";
import TarifCard2 from "@/components/tarifCard2";
import Reviews from "@/components/reviews";
import Product from "@/components/seo/product";
import { useEffect, useState } from "react";
import SEO from "@/components/seo";

const faq = [
		{
			title: {
				ru: "Есть ли возможность протестировать услуги? ✔",
				uz: "Xizmatlarni sinab ko'rish mumkinmi? ✔",
			},
			description: {
				ru: (
					<>
						<p>
							Чтобы протестировать сервис, сначала нужно <a href="#">зарегистрироваться.</a>
						</p>

						<p>Вам нужен VDS сервер? - Выполните 5 простых шагов, описанных здесь</p>

						<p>
							Вы представляете юр.лицо, и вам нужен полноценный тестовый стенд? -{" "}
							<strong>напишите нам</strong>
						</p>
					</>
				),
				uz: (
					<>
						<p>
							Xizmatni sinab koʻrish uchun avval <a href="#">roʻyxatdan oʻtishingiz kerak.</a>
						</p>

						<p>Sizga VDS server kerakmi? - Bu yerda tasvirlangan 5 oson qadamni bajaring</p>

						<p>
							Siz yuridik shaxssiz va sizga to'liq huquqli test stoli kerakmi? -{" "}
							<strong>bizga yozing</strong>
						</p>
					</>
				),
			},
		},
		{
			title: {
				ru: "Как быстро отвечает служба техподдержки? ⭐",
				uz: "Texnik yordam qanchalik tez javob beradi? ⭐",
			},
			description: {
				ru: (
					<p>
						Время ответа может занять до 30 мин. Оно зависит от числа обращений в определенный
						период времени.
					</p>
				),
				uz: (
					<p>
						Javob berish vaqti 30 daqiqagacha vaqt olishi mumkin. Bu ma'lum bir davrdagi
						qo'ng'iroqlar soniga bog'liq. vaqt.
					</p>
				),
			},
		},
		{
			title: {
				ru: "Можно ли изменять конфигурацию рабочего сервера? 🖥️",
				uz: "Ishchi server konfiguratsiyasini o'zgartirish mumkinmi? 🖥️",
			},
			description: {
				ru: (
					<>
						<p>Да. Изменять конфигурации своего сервера вы можете в любой момент. 🚀</p>

						<p>
							Для <strong>RAM</strong> и <strong>CPU</strong> [требуется перезагрузка]
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
							Ha. Siz istalgan vaqtda serveringiz konfiguratsiyasini o'zgartirishingiz mumkin. 🚀
						</p>

						<p>
							<strong>RAM</strong> va <strong>CPU</strong> uchun [qayta yuklash kerak]
						</p>

						<p>
							<strong>SSD</strong> uchun [qayta yuklash kerak]
						</p>

						<p>
							<strong>Internet</strong> uchun [qayta yuklanmaydi]
						</p>
					</>
				),
			},
		},
		{
			title: {
				ru: "Какая система виртуализации используется в AIRNET? 🗂️",
				uz: "AIRNET da qanday virtualizatsiya tizimi qo'llaniladi? 🗂️",
			},
			description: {
				ru: (
					<p>
						Виртуальная инфраструктура <strong>AIRNET</strong> компании использует{" "}
						<strong>VMware</strong> с прикладными дополнениями. Виртуальные сервера создаются в
						среде операционной системы <strong>ESXi</strong>.
					</p>
				),
				uz: (
					<p>
						Kompaniyaning <strong>AIRNET</strong> virtual infratuzilmasi <strong>VMware</strong>{" "}
						ilova qoʻshimchalari bilan. Virtual serverlar muhitda yaratilgan
						<strong>ESXi</strong> operatsion tizimi.
					</p>
				),
			},
		},
		{
			title: {
				ru: "Как можно оплатить за услуги AIRNET? 💷",
				uz: "AIRNET xizmatlari uchun qanday to'lashim mumkin? 💷",
			},
			description: {
				ru: (
					<>
						<p>Способы оплаты</p>

						<p>
							Для <strong>физических лиц</strong>: PAYME, PAYNET, CLICK, UPAY, Webmoney, OSON.uz,
							VISA, MasterCard и другие.
						</p>

						<p>
							Для <strong>юридических лиц</strong>: банковский перевод. (перечисление)
						</p>
					</>
				),
				uz: (
					<>
						<p>To'lov usullari</p>

						<p>
							<strong>jismoniy shaxslar</strong> uchun: PAYME, PAYNET, CLICK, UPAY, Webmoney,
							OSON.uz, VISA, MasterCard va boshqalar.
						</p>

						<p>
							<strong>yuridik shaxslar</strong> uchun: bank o‘tkazmasi. (ro'yxatga olish)
						</p>
					</>
				),
			},
		},
	],
	tarif = [
		{
			title: { ru: "Strong", uz: "Strong" },
			prices: [
				{
					price: "200 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "600 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 200 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "2 400 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			cpu: 2,
			ram: 4,
			ssd: 50,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14",
		},
		{
			title: { ru: "VIP+", uz: "VIP+" },
			prices: [
				{
					price: "300 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "900 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 800 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "3 600 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			cpu: 4,
			ram: 6,
			ssd: 150,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16",
		},
		{
			title: { ru: "Advanced", uz: "Advanced" },
			prices: [
				{
					price: "550 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 650 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "3 300 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "6 600 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			cpu: 6,
			ram: 10,
			ssd: 150,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50",
		},
		{
			title: { ru: "Mega", uz: "Mega" },
			prices: [
				{
					price: "800 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "2 400 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "4 800 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "9 600 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			cpu: 6,
			ram: 12,
			ssd: 200,
			net: 25,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51",
		},
		{
			title: { ru: "Ultra", uz: "Ultra" },
			prices: [
				{
					price: "1 000 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "3 000 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "6 000 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "12 000 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
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
			title: { ru: "Старт", uz: "Start" },
			prices: [
				{
					price: "10 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "30 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "57 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "108 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: 250,
			sites: 5,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32",
		},
		{
			title: { ru: "Простой", uz: "Oddiy" },
			// price: '15 000',
			prices: [
				{
					price: "15 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "45 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "85 500",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "162 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: 500,
			sites: 10,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31",
		},
		{
			title: { ru: "Стандарт", uz: "Standart" },
			// price: '25 000',
			prices: [
				{
					price: "25 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "75 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "142 500",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "270 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: "1 000",
			sites: 15,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33",
		},
		{
			title: { ru: "Доступный", uz: "Hamyonbop" },
			// price: '60 000',
			prices: [
				{
					price: "60 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "180 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "342 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "648 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: "3 000",
			sites: 20,
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34",
		},
		{
			title: { ru: "Оптимальный", uz: "Optimal" },
			// price: '90 000',
			prices: [
				{
					price: "90 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "270 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "513 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "972 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: "5 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37",
		},
		{
			title: { ru: "Выгодный", uz: "Foydali" },
			// price: '150 000',
			prices: [
				{
					price: "150 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "450 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "855 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 620 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: "10 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38",
		},
		{
			title: { ru: "Офис", uz: "Ofis" },
			// price: '250 000',
			prices: [
				{
					price: "250 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "750 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 425 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "2 700 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: "15 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39",
		},
		{
			title: { ru: "Корпоративный", uz: "Korporativ" },
			// price: '350 000',
			prices: [
				{
					price: "350 000",
					dateOff: { ru: "1 мес.", uz: "1 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 050 000",
					dateOff: { ru: "3 мес.", uz: "3 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "1 995 000",
					dateOff: { ru: "6 мес.", uz: "6 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
				{
					price: "3 780 000",
					dateOff: { ru: "12 мес.", uz: "12 oy" },
					date: { ru: "мес.", uz: "oy" },
				},
			],
			ssd: "20 000",
			sites: "∞",
			link: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40",
		},
	],
	content = [
		{
			title: { ru: "Служба поддержки 24/7", uz: "Qo'llab-quvvatlash xizmati 24/7" },
			description: {
				ru: "В случае возникновения каких-либо вопросов, Вы всегда можете рассчитывать на нашу квалифицированную помощь с индивидуальным подходом, по телефону, e-mail, telegram, а также в онлайн чате - в любое время суток!",
				uz: "Savollaringiz bo'lsa, siz har doim bizning malakali yordamimizga individual yondashish orqali, telefon, elektron pochta, telegram orqali, shuningdek, kunning istalgan vaqtida ishonishingiz mumkin!",
			},
			img: "/phone.png",
		},
		{
			title: { ru: "Стабильность", uz: "Barqarorlik" },
			description: {
				ru: (
					<>
						Мы обеспечиваем гарантированную доступность сервиса 99%. Круглосуточно, за всеми
						системами следят наши высококвалифицированные сотрудники. А оборудование размещаем в
						высокотехнологичном, современном, надёжном{" "}
						<Link href="/dc">
							<a>Дата-Центре</a>
						</Link>{" "}
						TIER-2, в Ташкенте.
					</>
				),
				uz: (
					<>
						Biz 99% kafolatlangan xizmat mavjudligini ta'minlaymiz. Kecha-kunduz, hamma uchun
						tizimlar bizning yuqori malakali xodimlarimiz tomonidan nazorat qilinadi. Biz jihozlarni
						joylashtiramiz yuqori texnologiyali, zamonaviy, ishonchli{" "}
						<Link href="/dc">
							<a>Ma'lumotlar markazi</a>
						</Link>{" "}
						TIER-2, Toshkent shahrida.
					</>
				),
			},
			img: "/search.png",
		},
		{
			title: { ru: "Низкая цена", uz: "Past narx" },
			description: {
				ru: 'Мы предоставляем услуги по самым "низким" ценам в Узбекистане, наше преимущество в том, что мы оказываем максимально качественные услуги за максимально низкие цены. Таким образом, мы поможем Вам зарабатывать, а не тратиться.',
				uz: "Biz O'zbekistonda 'eng past' narxlarda xizmatlar ko'rsatamiz, bizning afzalligimiz shundaki, biz eng yuqori sifatli xizmatlarni imkon qadar arzon narxlarda taqdim etamiz. Shunday qilib, biz sizga sarflashga emas, pul ishlashingizga yordam beramiz.",
			},
			img: "/wallet.png",
		},
		{
			title: { ru: "Собственные ip-адреса", uz: "O'z IP manzillari" },
			description: {
				ru: 'Мы предоставляем услуги по собственной BGP протоколу (Border Gateway Protocol) для всех блоков IP-адресов. Подключенныe напрямую к автономной системе (AS) АК "Узтелеком", а также являемся участниками зоны TAS-IX.',
				uz: "Biz barcha IP-manzillar bloklari uchun o'z BGP protokolimiz (Chegara shlyuzi protokoli) yordamida xizmatlarni taqdim etamiz. “O‘ztelekom” AK avtonom tizimiga (AS) bevosita ulangan va biz ham TAS-IX zonasi a’zolarimiz.",
			},
			img: "/ip.png",
		},
	];

export default function Home({ language }) {
	const langData = {
		seoTitle: {
			ru: "Airnet.uz - Виртуальный хостинг в TAS-IX, домена, VDS-сервера, Ташкент",
			uz: "Airnet.uz - TAS-IXda virtual xosting, domen, VDS-server, Toshkent",
			en: "",
		},
		seoDesc: {
			ru: "Виртуальный хостинг, хостинг в Ташкенте, реселлинг хостинга, дешевые VDS, VPS-сервера, VDS в Ташкенте, виртуальные сервера, выделенные сервера, доменные имена",
			uz: "Virtual xosting, Toshkentda xosting, xostingni qayta sotish, arzon VDS, VPS serverlar, Toshkentda VDS, virtual serverlar, ajratilgan serverlar, domen nomlari",
		},
		whyBlockTitle: {
			ru: "Почему выбирают AIRNET?",
			uz: "Nima uchun AIRNET ni tanlaysiz?",
		},
		tarifMaketTitle: {
			ru: "Популярные тарифы - Виртуальный сервер в Ташкенте",
			uz: "Ommabop tariflar - Toshkentdagi virtual server",
		},
		tarifMaketDesc: {
			ru: "Наши сервера расположены на территории Узбекистана (Ташкент), в сети TAS-IX на скорости до 1 Gbps",
			uz: "Bizning serverlarimiz O‘zbekiston hududida (Toshkent) TAS-IX tarmog‘ida 1 Gbit/s gacha tezlikda joylashgan.",
		},
		tarifMaketEnd: {
			ru: (
				<>
					<p>
						Срок установки сервера, после оформления заказа и оплаты, составляет от 30 минут до 2-х
						рабочих дней, в зависимости от наличия необходимых серверов и загрузки технического
						персонала. Среднее время активации оборудования после оплаты - 1-2 часа. Мы делам всё
						возможное, чтобы уменьшить время ожидания.
					</p>
					<p>Срок действия услуги начнется с момента её активации.</p>
				</>
			),
			uz: (
				<>
					<p>
						Buyurtma va to'lovni amalga oshirgandan so'ng serverni o'rnatish vaqti 30 daqiqadan 2
						daqiqagacha zarur serverlarning mavjudligi va texnik yukga qarab ish kunlari xodimlar.
						To'lovdan so'ng uskunani faollashtirishning o'rtacha vaqti 1-2 soat. Biz hamma narsani
						qilamiz kutish vaqtini qisqartirish mumkin.
					</p>
					<p>Xizmat u yoqilgan paytdan boshlab ishga tushadi.</p>
				</>
			),
		},
		tarifMaketTitle2: {
			ru: "Популярные тарифы Виртуальный хостинг Cpanel в Ташкенте",
			uz: "Ommabop tariflar Toshkentda umumiy hosting Cpanel",
		},
		tarifMaketEnd2: {
			ru: "*При оплате за хостинг от 12 месяцев!",
			uz: "*Xosting uchun 12 oydan boshlab to'lashda!",
		},
		faqTitle: {
			ru: "Нас часто спрашивают",
			uz: "Bizdan tez-tez so'rashadi",
		},
	};
	const [show, setShow] = useState(-1);

	useEffect(() => {
		const outerClick = (e) => {
			const classList = [...e.target?.classList];

			if (!classList.join(" ").includes("tarif_drop")) {
				setShow(-1);
			}
		};
		document.addEventListener("click", outerClick);
		return () => document.removeEventListener("click", outerClick);
	}, []);

	return (
		<>
			{/* <SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} /> */}
			<Product />
			<CustomSwiper language={language} />
			<WhyBlock title={langData.whyBlockTitle[language]} content={content} language={language} />
			<TarifMaket
				title={langData.tarifMaketTitle[language]}
				description={<p>{langData.tarifMaketDesc[language]}</p>}
				endText={
					<div className="text-white text-center mt-2">{langData.tarifMaketEnd[language]}</div>
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
				endText={<p className="text-white text-center mt-2">{langData.tarifMaketEnd2[language]}</p>}
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
	);
}
