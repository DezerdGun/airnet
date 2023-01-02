import Container from "../../components/container";
import { LINKS } from "../../components/requirements";
import st from "./adminSupport.module.scss";
import Link from "next/link";
import Partners from "../../components/partners";
import WhyCard from "../../components/whyCard";
import WhyBlock from "../../components/whyBlock";
import uz from "@/pages/uz";

export default function AdminSupport({ language }) {
	const langData = {
		headTitle: {
			ru: "Администрирование и доп. услуги",
			uz: "Administratsiya va qoshimcha hizmatlar ",
		},
		sisAdmin1: {
			ru: "Если у вас нет своего системного администратора — закажите пакет администрирования и доверьте выполнение работ на сервере нашим специалистам.",
			uz: "Agar o'zingizning tizim administratoringiz bo'lmasa, ma'muriyat paketiga buyurtma bering va Serverda ishlarni bajarishni mutaxassislarimizga topshiring.",
		},
		sisAdmin2: {
			ru: (
				<>
					Если вы уверены, что проблема находится в зоне нашей ответственности, напишите или
					позвоните в{" "}
					<Link href={LINKS.SUPPORT}>
						<a>службу поддержки</a>
					</Link>
					.
				</>
			),
			uz: (
				<>
					Muammo biz bilan bog'liq ekanligiga ishonchingiz komil bo'lsa{" "}
					<Link href={LINKS.SUPPORT}>
						<a>mijozlarni qo'llab quvvatlash</a>
					</Link>{" "}
					ga yozing yoki qo'ng'iroq qiling
				</>
			),
		},
		coin: {
			ru: "от 1 000 000",
			uz: "1 000 000 ",
		},
		coinTitle1: {
			ru: "сум",
			uz: "so'm",
		},
		coinTitle2: {
			ru: "мес",
			uz: "oy",
		},
		paket: {
			ru: "Пакет администрирования",
			uz: "Administratsiya tarifi",
		},
		paketTitle: {
			ru: "Пакет включает в себя решение 5 задач по вопросам администрирования сервера.",
			uz: "Ushbu tarif server ma'muriyati bilan bog'liq 5 ta vazifani hal qilishni o'z ichiga oladi.",
		},
		paketTitle2: {
			ru: "Только для серверов FirstVDS с панелью управления ISPmanager.",
			uz: "Faqat ISPmanager boshqaruv paneliga ega FirstVDS serverlari uchun.",
		},
		work: {
			ru: "Задачи, входящие в пакет",
			uz: "Tarifga kiruvchi vazifalar",
		},
		workIt1: {
			ru: "Обновление PHP и MySQL",
			uz: "PHP va MySQL yuklash",
		},
		workIt2: {
			ru: "Перенос сайта с другого VDS или хостинга",
			uz: "Saytni VDS yoki boshqa serverga o'tqazish",
		},
		workIt3: {
			ru: "Установка и обновление ISPmanager",
			uz: "ISP managerni yuklash va yangilash",
		},
		workIt4: {
			ru: "Настройка резервного копирования",
			uz: "Zaxira nusxasini sozlash",
		},
		workIt5: {
			ru: "Первоначальная установка популярных CMS",
			uz: "Mashhur bo'lgan CMS-ni birinchilardan o'rnatish",
		},
		workIt6: {
			ru: "Восстановление сайтов из загруженной копии",
			uz: "Ko'chirilgan nushalarni qayta yaratish",
		},
		workIt7: {
			ru: "Сброс root-пароля для сервера и MySQL",
			uz: "Server va MySQL uchun parolni tiklash",
		},
		workIt8: {
			ru: "Изменение ресурсов на серверах с VMware",
			uz: "VMwaredagi resurslarni o'zgartirush",
		},
		workIt9: {
			ru: "Установка SSL-сертификата",
			uz: "SSL-sertifikatsiyasini yuklash",
		},
		workIt10: {
			ru: "Поиск причин неработоспособности сайтов",
			uz: "Saytdagi muommolarni qidirish",
		},
		five: {
			ru: "5 обращений",
			uz: "5 ta yonalish",
		},
		enter: {
			ru: "входит в пакет",
			uz: "paket ichiga kiradi",
		},
		buy1: {
			ru: "250 000 сум/шт.",
			uz: "250 000 so'm",
		},
		buy2: {
			ru: "стоимость доп. обращений",
			uz: "qo'shimcha murojat",
		},

		coinMonth: {
			ru: (
				<>
					<>
						1 000 000
						<span>
							сум
							<hr />
							мес
						</span>
					</>
				</>
			),
			uz: (
				<>
					<>
						1 000 000
						<span>
							so'm
							<hr />
							oy
						</span>
					</>
				</>
			),
		},
		brn: {
			ru: "Заказать пакет",
			uz: "Paketga buyutma berish",
		},
		buyF: {
			ru: "Без пакета администрирования выполним одну задачу за 500 000 сум.",
			uz: "Ma'muriyat paketisiz bitta vazifani 500 000 so'mga bajaramiz.",
		},
		bigPaket: {
			ru: "Работы сверх пакета",
			uz: "Yuqori paket ishi ",
		},
		uslug1: {
			ru: "Услуги за 250 000 сум",
			uz: "250 000 so'm uchun hizmatlar",
		},
		download1: {
			ru: "Установка сервера SVN с доступом по HTTP",
			uz: "HTTP ruxsatiga ega SVN serverini o'rnatish",
		},
		download2: {
			ru: "Установка ОС с ISO-шаблона на виртуализации VMware",
			uz: "VMware virtualizatsiyasida ISO shablonidan operatsion tizimni o'rnatish",
		},
		download3: {
			ru: "Установка OpenVPN",
			uz: "OpenVPN ni yuklab olish",
		},
		uslug2: {
			ru: "Услуги за 100 000 сум",
			uz: "100 000 so'm uchun hizmatlar",
		},
		ipn: {
			ru: "Перенос IP с одного VDS на другой ",
			uz: "IPni bir VDS dan boshqasiga o'tkazish",
		},
		upgarde: {
			ru: "Переустановка VDS с сохранением данных",
			uz: "Ma'lumotlarni saqlagan holatda VDSni qayta o'rnatish",
		},
	};

	const content = [
		{
			title: { ru: "Прочие работы", uz: "Boshqa ishlar" },
			description: {
				ru: (
					<>
						<p>Выполняются только после согласования с поддержкой и оплачиваются по часам.</p>
						<p>Оставляем за собой право отказаться от выполнения таких работ, как:</p>
						<ul className="list">
							<li>администрирование серверов без панели;</li>
							<li>администрирование Windows-серверов;</li>
							<li>
								работы, не входящие в{" "}
								<a href="#" target="_blank">
									регламент
								</a>
								.
							</li>
						</ul>
					</>
				),
				uz: (
					<>
						<p>
							Ular faqat qo'llab-quvvatlash bilan kelishilganidan keyin amalga oshiriladi va soatiga
							to'lanadi.
						</p>
						<p>Biz quyidagi ishlarni bajarishni rad etish huquqini saqlab qolamiz:</p>
						<ul className="list">
							<li>Serverlarni panelsiz boshqarish;</li>
							<li>Windows serverlarini boshqarish;</li>
							<li>
								Ish kiritilmagan{" "}
								<a href="#" target="_blank">
									reglament
								</a>
								.
							</li>
						</ul>
					</>
				),
			},

			img: "/question.png",
		},
		{
			title: { ru: "Не выполняем", uz: "Bajarilmaydi" },
			description: {
				ru: (
					<>
						<ul className="list">
							<li>поиск и исправление ошибок в скриптах клиента;</li>
							<li>
								поиск и исправление ошибок <span>в SQL-запросах</span>, а также их оптимизацию;
							</li>
							<li>обучение основам работы c Linux, FreeBSD, Windows;</li>
							<li>настройку игровых серверов, прокси и другого специфического ПО.</li>
						</ul>
					</>
				),
				uz: (
					<>
						<ul className="list">
							<li>Mijoz skriptlarida xatolarni qidirish va tuzatish;</li>
							<li>
								<span>SQL soro'vlarida</span> optimizatsiyani hamda, hatolarni qidirish ;
							</li>
							<li>Linux, FreeBSD, Windows bilan ishlash asoslarini o'rganish;</li>
							<li>O'yin serverlari, proksi-serverlar va boshqa maxsus dasturlarni sozlash.</li>
						</ul>
					</>
				),
			},

			img: "/notification-danger.png",
		},
	];

	return (
		<div className={st.adminSupport}>
			<Container headTitle={langData.headTitle[language]} clNTitle="mb-0">
				<hr />
				<div className={st.adminSupport__header}>
					<div className={st.adminSupport__header__content}>
						{/* <h2>Администрирование</h2> */}
						<p>
							{langData.sisAdmin1[language]}
							<br />
							<br />
							{langData.sisAdmin2[language]}
						</p>
						<div className={st.adminSupport__header__content__price}>
							<div className="def-price">
								{langData.coin[language]}
								<span>
									{langData.coinTitle1[language]}
									<hr />
									{langData.coinTitle2[language]}
								</span>
							</div>
							{/* <a href="#" target="_blank" rel="noopener noreferrer">
								Заказать пакет
							</a> */}
						</div>
					</div>
					<div className={st.adminSupport__header__img}>
						<img src="/admin-intro-img.png" />
					</div>
				</div>
			</Container>
			<div className="bg-gray">
				<Container>
					<div className={st.adminSupport__paket}>
						<h2>{langData.paket[language]}</h2>
						<p>
							{langData.paketTitle[language]}
							<br />
							{langData.paketTitle2[language]}
						</p>
						<h3>{langData.work[language]}</h3>
						<ul>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
								</svg>
								{langData.workIt1[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" />
								</svg>
								{langData.workIt2[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
								</svg>
								{langData.workIt3[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
									<path d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z" />
								</svg>
								{langData.workIt4[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
								</svg>
								{langData.workIt5[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" />
								</svg>
								{langData.workIt6[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
								</svg>
								{langData.workIt7[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
								</svg>
								{langData.workIt8[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
									<path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
								</svg>
								{langData.workIt9[language]}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
								</svg>
								{langData.workIt10[language]}
							</li>
						</ul>
						{/* <a href="#" target="_blank" rel="noopener noreferrer">
							Полный список и условия выполнения работ
						</a> */}
						<div className={st.adminSupport__paket__block}>
							<div className={st.adminSupport__paket__block__item}>
								<h3>{langData.five[language]}</h3>
								{langData.enter[language]}
							</div>
							<div className={st.adminSupport__paket__block__item}>
								<h3>{langData.buy1[language]}</h3>
								{langData.buy2[language]}
							</div>
							<div className={st.adminSupport__paket__block__item}>
								<div className="def-price">{langData.coinMonth[language]}</div>
								<a href="#" target="_blank" rel="noopener noreferrer">
									{langData.brn[language]}
								</a>
							</div>
						</div>
						<div className={st.adminSupport__paket__footer}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
							</svg>
							<span>{langData.buyF[language]}</span>
						</div>
					</div>
				</Container>
			</div>
			<Container>
				<div className={st.adminSupport__uslugi}>
					<h2>{langData.bigPaket[language]}</h2>
					<div className={st.adminSupport__uslugi__block}>
						<div className={st.adminSupport__uslugi__block__content}>
							<h4>{langData.uslug1[language]}:</h4>
							<ul>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
									</svg>
									{langData.download1[language]}
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
									</svg>
									{langData.download2[language]}
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M502.6 182.6l-45.25-45.25C451.4 131.4 443.3 128 434.8 128H384V80C384 53.5 362.5 32 336 32h-160C149.5 32 128 53.5 128 80V128H77.25c-8.5 0-16.62 3.375-22.62 9.375L9.375 182.6C3.375 188.6 0 196.8 0 205.3V304h128v-32C128 263.1 135.1 256 144 256h32C184.9 256 192 263.1 192 272v32h128v-32C320 263.1 327.1 256 336 256h32C376.9 256 384 263.1 384 272v32h128V205.3C512 196.8 508.6 188.6 502.6 182.6zM336 128h-160V80h160V128zM384 368c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32H192v32C192 376.9 184.9 384 176 384h-32C135.1 384 128 376.9 128 368v-32H0V448c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-112h-128V368z" />
									</svg>
									{langData.download3[language]}
								</li>
							</ul>
							<h4>{langData.uslug2[language]}:</h4>
							<ul>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" />
									</svg>
									{langData.ipn[language]}
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z" />
									</svg>
									{langData.upgarde[language]}
								</li>
							</ul>
						</div>
						<div className={st.adminSupport__uslugi__block__img}>
							<img src="/additional-services-img.png" />
						</div>
					</div>
					{/* <a href="#">Полный список и условия выполнения работ</a> */}
				</div>
			</Container>
			<WhyBlock content={content} language={language} />
			<Partners />
		</div>
	);
}
