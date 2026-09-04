import { useState } from "react"
import st from "./customTableHosting.module.scss"

const checkedCircle = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM16.768 10.14C16.8558 10.0396 16.9226 9.92274 16.9646 9.79617C17.0065 9.6696 17.0227 9.53591 17.0123 9.40298C17.0018 9.27005 16.9648 9.14056 16.9036 9.02213C16.8423 8.90369 16.758 8.79871 16.6555 8.71334C16.5531 8.62798 16.4346 8.56396 16.3071 8.52506C16.1796 8.48616 16.0455 8.47316 15.9129 8.48683C15.7802 8.50049 15.6517 8.54055 15.5347 8.60463C15.4178 8.66872 15.3149 8.75554 15.232 8.86L10.932 14.019L8.707 11.793C8.5184 11.6108 8.2658 11.51 8.0036 11.5123C7.7414 11.5146 7.49059 11.6198 7.30518 11.8052C7.11977 11.9906 7.0146 12.2414 7.01233 12.5036C7.01005 12.7658 7.11084 13.0184 7.293 13.207L10.293 16.207C10.3913 16.3052 10.5089 16.3818 10.6384 16.4321C10.7679 16.4823 10.9065 16.505 11.0453 16.4986C11.184 16.4923 11.32 16.4572 11.4444 16.3954C11.5688 16.3337 11.6791 16.2467 11.768 16.14L16.768 10.14Z"
			fill="#0e6a4e"
		/>
	</svg>
)

export default function CustomTableHosting({ table, language }) {
	const [isOpen, setIsOpen] = useState(null)

	const langData = {
		main: {
			ru: "Основные характеристики",
			uz: "Asosiy xususiyatlar",
			en: "Main characteristics",
		},
		sumPerMonth: {
			ru: "сум/мес",
			uz: "so'm/oy",
			en: "sum/mo.",
		},
		podrobnee: {
			ru: "Узнать подробнее",
			uz: "Batafsil ma'lumot",
			en: "Learn more",
		},
		diskType: {
			ru: "Тип диска",
			uz: "Disk turi",
			en: "Disk type",
		},
		podrobniyeXarakter: {
			ru: "Подробные характеристики",
			uz: "Batafsil xususiyatlar",
			en: "Detailed specifications",
		},
		mestoSSD: {
			ru: "Место на SSD",
			uz: "SSDda joy",
			en: "Space on SSD",
		},
		sitesCount: {
			ru: "Количество сайтов",
			uz: "Saytlar soni",
			en: "Number of sites",
		},
		subdomens: {
			ru: "Поддоменов",
			uz: "Subdomenlar",
			en: "Subdomains",
		},
		db: {
			ru: "Баз данных",
			uz: "Ma'lumotlar bazasi",
			en: "Databases",
		},
		sitepad: {
			ru: "Конструктор SitePad",
			uz: "SitePad konstruktori",
			en: "SitePad Constructor",
		},
		free: {
			ru: "Бесплатно",
			uz: "Bepul",
			en: "For free",
		},
		eightCore: {
			ru: "8 ядра",
			uz: "8 yadro",
			en: "8 cores",
		},
		panel: {
			ru: "Панель",
			uz: "Panel",
			en: "Panel",
		},
		fixedSpeed: {
			ru: "Ограничение на пропускную способность данных",
			uz: "Ma'lumotlar o'tkazish qobiliyati",
			en: "Data bandwidth limit",
		},
		mbPerSec: {
			ru: "МБ/сек",
			uz: "MB/sek",
			en: "MB/sec",
		},
		readWritePerSec: {
			ru: "Количество операций чтения и записи в секунду",
			uz: "Bir soniyada o'qish va yozish operatsiyalari soni",
			en: "Number of read and write operations per second",
		},
		RAM: {
			ru: "Физическая память",
			uz: "Fizik xotira",
			en: "Physical Memory",
		},
		mb: {
			ru: "МБ",
			uz: "MB",
			en: "MB",
		},
		month: {
			ru: "месяц",
			uz: "oy",
			en: "month",
		},
		months: {
			ru: "месяца",
			uz: "oy",
			en: "months",
		},
		monthes: {
			ru: "месяцев",
			uz: "oy",
			en: "months",
		},
		year: {
			ru: "год",
			uz: "yil",
			en: "year",
		},
		sum: {
			ru: "сум",
			uz: "so'm",
			en: "sum",
		},
		buyXosting: {
			ru: "Купить хостинг",
			uz: "Xosting sotib olish",
			en: "Buy hosting",
		},
		ssl: {
			ru: "SSL-сертификат",
			uz: "SSL sertifikati",
			en: "SSL certificate",
		},
		trafic: {
			ru: "Объем трафика",
			uz: "Trafik hajmi",
			en: "Traffic volume",
		},
		domenUZ: {
			ru: "Домен в зоне .UZ",
			uz: ".UZ zonasidagi domen",
			en: "Domain in .UZ zone",
		},
		present: {
			ru: "В Подарок",
			uz: "Sovg'a sifatida",
			en: "As a gift",
		},
		forPayToXosting: {
			ru: "При оплате за хостинг",
			uz: "Xosting uchun to'lashda",
			en: "When paying for hosting",
		},
		order: {
			ru: "Заказать тариф",
			uz: "Buyurtma berish",
			en: "Order a rate",
		},
	}

	return (
		<div className={st.customTableHosting}>
			<table className={st.customTableHosting__table}>
				<tr>
					<td>{langData.main[language]}:</td>
					{table.map((item, i) => (
						<td className="p-0" key={i}>
							<div className={st.customTableHosting__head}>
								<h6>Cpanel - {item.title}</h6>
								<span>
									{item.price} {langData.sumPerMonth[language]}.
								</span>
								<button
									className={isOpen === i + 1 ? st.customTableHosting__head__button__active : null}
									onClick={() => (isOpen === i + 1 ? setIsOpen(null) : setIsOpen(i + 1))}
								>
									{langData.podrobnee[language]}
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
											<path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
										</svg>
									</span>
								</button>
							</div>
						</td>
					))}
				</tr>
				<tr className="position-relative">
					<th>{langData.diskType[language]} (SSD)</th>
					{table.map((item) => (
						<td key={item.ssd}>
							{item.ssd} {langData.mb[language]}
						</td>
					))}
					<div className={`${st.customTableHosting__block} ${isOpen && st.customTableHosting__block__active}`}>
						<div className={st.customTableHosting__block__scroll}>
							<div className={st.customTableHosting__block__scroll__head}>
								<h6>{langData.podrobniyeXarakter[language]}</h6>
								<svg onClick={() => setIsOpen(null)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
									<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
								</svg>
							</div>
							<div className={st.customTableHosting__block__scroll__content}>
								<table>
									<tr>
										<th>{langData.mestoSSD[language]}</th>
										<td>
											{table[isOpen - 1]?.ssd} {langData.mb[language]}
										</td>
									</tr>
									<tr>
										<th>{langData.sitesCount[language]}</th>
										<td>{table[isOpen - 1]?.sites}</td>
									</tr>
									<tr>
										<th>{langData.subdomens[language]}</th>
										<td>{table[isOpen - 1]?.sites}</td>
									</tr>
									<tr>
										<th>{langData.db[language]}</th>
										<td>{table[isOpen - 1]?.sites}</td>
									</tr>
									<tr>
										<th>{langData.sitepad[language]}</th>
										<td>{langData.free[language]}</td>
									</tr>
								</table>
								<ul>
									<li>
										{checkedCircle}CPU Intel Xeon - <strong>{langData.eightCore[language]}</strong>
									</li>
									<li>
										{checkedCircle}
										{langData.panel[language]}: <strong>Cpanel</strong>
									</li>
									<li>
										{checkedCircle}
										{langData.fixedSpeed[language]}
										(IO) - <strong>100 {langData.mbPerSec[language]}</strong>
									</li>
									<li>{checkedCircle}MySQL (phpMyAdmin)</li>
									<li>
										{checkedCircle}
										{langData.readWritePerSec[language]}
										(IOPS) - <strong>2000</strong>
									</li>
									<li>{checkedCircle}PHP: 7.1, 7.2, 7.3, 7.4, 8.0</li>
									<li>
										{checkedCircle}
										{langData.RAM[language]} <strong>4096 {langData.mb[language]}</strong>
									</li>
									<li>{checkedCircle}ionCube Loader, CURL, Zend, Cron</li>
									<li>
										{checkedCircle}TAS-IX - <strong>1 Gbps</strong>
									</li>
								</ul>
								<table>
									<tr>
										<th>1 {langData.month[language]}</th>
										<td>
											{table[isOpen - 1]?.month1} {langData.sum[language]}
										</td>
									</tr>
									<tr>
										<th>3 {langData.months[language]}</th>
										<td>
											{table[isOpen - 1]?.month3} {langData.sum[language]}
										</td>
									</tr>
									<tr>
										<th>6 {langData.monthes[language]}</th>
										<td>
											{table[isOpen - 1]?.month6} {langData.sum[language]}
										</td>
									</tr>
									<tr>
										<th>1 {langData.year[language]}</th>
										<td>
											{table[isOpen - 1]?.month12} {langData.sum[language]}
										</td>
									</tr>
									<tr>
										<td colSpan={2}>
											<a href={table[isOpen - 1]?.buyLink} target="_blank" rel="noopener noreferrer">
												{langData.buyXosting[language]}
											</a>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</tr>
				<tr>
					<th>{langData.sitesCount[language]}</th>
					{table.map((item) => (
						<td key={item.sites}>{item.sites}</td>
					))}
				</tr>
				<tr>
					<th>{langData.ssl[language]}</th>
					<th className="text-green">
						{langData.free[language]}*
						<br />
						<span>*Let&apos;s Encrypt</span>
					</th>
					<th className="text-green">
						{langData.free[language]}*
						<br />
						<span>*Let&apos;s Encrypt</span>
					</th>
					<th className="text-green">
						{langData.free[language]}*
						<br />
						<span>*Let&apos;s Encrypt</span>
					</th>
					<th className="text-green">
						{langData.free[language]}*
						<br />
						<span>*Let&apos;s Encrypt</span>
					</th>
				</tr>
				<tr>
					<th>{langData.trafic[language]}</th>
					<td className="text-green">∞</td>
					<td className="text-green">∞</td>
					<td className="text-green">∞</td>
					<td className="text-green">∞</td>
				</tr>
				<tr>
					<th>{langData.sitepad[language]}</th>
					<th className="text-green">{langData.free[language]}</th>
					<th className="text-green">{langData.free[language]}</th>
					<th className="text-green">{langData.free[language]}</th>
					<th className="text-green">{langData.free[language]}</th>
				</tr>
				<tr>
					<th>{langData.domenUZ[language]}</th>
					{table.map((item, i) => (
						<th key={`present${i}`} className="text-green">
							{langData.present[language]}* {item.present}
							<br />
							<span>*{langData.forPayToXosting[language]}!</span>
						</th>
					))}
				</tr>
				<tr>
					<td></td>
					{table.map((item) => (
						<td key={item.orderLink}>
							<a href={item.orderLink} target="_blank" rel="noopener noreferrer">
								{langData.order[language]}
							</a>
						</td>
					))}
				</tr>
			</table>
		</div>
	)
}
