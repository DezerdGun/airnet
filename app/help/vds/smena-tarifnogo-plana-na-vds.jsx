import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Смена тарифного плана на VDS",
		uz: "Tarif rejasini VDS ga o'zgartirish",
		en: "Change tariff plan to VDS",
	},
	content: {
		ru: (
			<>
				<p>
					Тарифный план VDS может быть изменен только на более высокий. Это связано с изменением дисковой квоты для
					виртуального сервера. Уменьшение квоты увеличивает вероятность потери информации и целостности.
				</p>
				<p>
					Например:{" "}
					<em>
						можно изменить тариф с VDS/VPS «Micro» на VDS/VPS «VIP», но нельзя с VDS/VPS «VIP» на VDS/VPS «Micro».
					</em>
				</p>
				<p>
					Также следует учитывать необходимость полной остановки виртуального сервера при смене тарифного плана. Сервер
					будет остановлен для смены конфигурации, и общее время недоступности составит около 15-30 минут.
				</p>
				<p>
					Чтобы изменить свой тарифный план, вы должны выбрать новый план в разделе «Смена тарифа» на панели управления
					учетной записью.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					VDS tarif rejasini faqat yuqoriroq tarifga o'zgartirish mumkin. Bu disk kvotasi o'zgarishi bilan bog'liq
					virtual server uchun. Kvotani kamaytirish axborot va yaxlitlikni yo'qotish ehtimolini oshiradi.
				</p>
				<p>
					Masalan:{" "}
					<em>
						tarifni VDS/VPS "Micro" dan VDS/VPS "VIP" ga o'zgartirishingiz mumkin, lekin VDS/VPS "VIP" dan VDS/VPS ga
						emas Mikro.
					</em>
				</p>
				<p>
					Tarif rejasini o'zgartirishda virtual serverni to'liq to'xtatish zarurligini ham hisobga olishingiz kerak.
					Konfiguratsiyani o'zgartirish uchun server to'xtatiladi va mavjud bo'lmaslikning umumiy vaqti taxminan 15-30
					daqiqani tashkil qiladi.
				</p>
				<p>
					Tarif rejangizni o'zgartirish uchun paneldagi "Tarifni o'zgartirish" bo'limida yangi tarifni tanlashingiz
					kerak hisobni boshqarish.
				</p>
			</>
		),
		en: (
			<>
				<p>
					The VDS tariff plan can only be changed to a higher one. This is due to the disk quota change for virtual
					server. Reducing the quota increases the likelihood of loss of information and integrity.
				</p>
				<p>
					For example:{" "}
					<em>
						you can change the tariff from VDS/VPS "Micro" to VDS/VPS "VIP", but not from VDS/VPS "VIP" to VDS/VPS
						"Micro".
					</em>
				</p>
				<p>
					You should also take into account the need to completely stop the virtual server when changing the tariff
					plan. Server will be stopped to change the configuration, and the total unavailability time will be about
					15-30 minutes.
				</p>
				<p>
					To change your tariff plan, you must select a new plan in the "Change tariff" section of the control panel
					account.
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
