import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "Перенос аккаунта на VDS", uz: "VDS ga akkauntni otqazish" },
	content: {
		ru: (
			<>
				<p>
					Если вы переносите свою учетную запись с виртуального хостинга на VDS,
					вам нужно будет создать новую учетную запись в VDS и вручную перенести
					свои сайты и базы данных в эту учетную запись.
				</p>
				<p>
					Услуга VDS подразумевает самостоятельное администрирование сервера.
				</p>
				<p>Сторона тех.поддержки может выполнять работу на сервере.</p>
				<p>Системный образ для VDS не включает панель управления сервером.</p>
				<p>
					Программное обеспечение, необходимое для покупки, установки, настройки
					и эксплуатации панели управления, выполняется самостоятельно
					владельцем учетной записи VDS.
				</p>
				<p>
					Если возникнут трудности в процессе экспорта данных, вы можете
					получить необходимую консультацию, оставив заявку в отделе технической
					поддержки по телефону{" "}
					<a href="tel:+998 (90) 324-30-80">+998 (90) 324-30-80</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Agar hisobingizni umumiy hostingdan VDS ga ko'chirayotgan bo'lsangiz,
					yangisini yaratishingiz kerak bo'ladi VDS-da hisob qaydnomasini
					o'rnating va saytlaringiz va ma'lumotlar bazalaringizni ushbu hisobga
					qo'lda o'tkazing.
				</p>
				<p>VDS xizmati serverni o'z-o'zini boshqarishni nazarda tutadi.</p>
				<p>Qo'llab-quvvatlash tomoni serverda ishni bajarishi mumkin.</p>
				<p>
					VDS uchun tizim tasviri server boshqaruv panelini o'z ichiga olmaydi.
				</p>
				<p>
					Boshqaruv panelini sotib olish, o'rnatish, sozlash va ishlatish uchun
					zarur bo'lgan dasturiy ta'minot, VDS hisobining egasi tomonidan
					mustaqil ravishda amalga oshiriladi.
				</p>
				<p>
					Ma'lumotlarni eksport qilish jarayonida qiyinchiliklarga duch
					kelsangiz, kerakli maslahatlarni olishingiz mumkin,{" "}
					<a href="tel:+998 (90) 324-30-80">+998 (90) 324-30-80</a> telefon
					orqali texnik yordam bo'limiga so'rov qoldirish
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
