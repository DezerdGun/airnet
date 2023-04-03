import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "Что такое FTP", uz: "FTP nma?" },
	content: {
		ru: (
			<>
				<p>
					<strong>FTP — File Transfer Protocol</strong> («протокол передачи
					файлов») — стандартный протокол, который предназначен для передачи
					файлов.
				</p>
				<p>
					<strong>FTP-клиент</strong> — это программа, которая позволяет с
					помощью FTP-доступа к аккаунту осуществлять его администрирование.
				</p>
				<p>
					<strong>FTP-клиент</strong> устанавливается на компьютере
					пользователя.
				</p>
				<p>
					По умолчанию для каждого аккаунта на хостинге Airnet.uz предоставлен
					основной FTP-доступ.
				</p>
				<p>
					Для подключения к своему аккаунту по FTP, нужно настроить FTP-клиент.
				</p>
				<p>В FTP-клиенте должны быть установлены следующие параметры:</p>
				<ul className="list">
					<li>Имя пользователя —аналогично с логином для панели управления.</li>
					<li>Пароль — совпадает с паролем для входа в Панель управления.</li>
					<li>
						Имя сервера — вы можете указать IP-адрес, сообщающийся в письме с
						уведомлением о создании учётной записи. Его всегда можно найти в
						разделе «Домены» – «IP-адреса» панели управления аккаунтом.
					</li>
				</ul>
				<p>
					Основной FTP-доступ используется клиентом для доступа ко всем файлам,
					находящимся на аккаунте.
				</p>
				<p>
					Панель управления Airnet.uz предоставляет возможность создавать
					дополнительные FTP-аккаунты.
				</p>
				<p>
					Дополнительные учетные записи FTP предназначены для предоставления
					ограниченного доступа. Например, если несколько сайтов размещены в
					одной учетной записи и на каждом сайте работает отдельный технический
					специалист, удобно создавать и настраивать разные учетные записи FTP.
					Таким образом, каждый специалист сможет получить доступ только к
					файлам того сайта, на котором он работает.
				</p>
				<p>
					<strong>Логин и пароль</strong> для дополнительной учетной записи FTP
					указываются при ее создании.
				</p>
				<p>
					При работе по FTP можно передавать отдельные файлы, группы файлов или
					архивы.
				</p>
				<p>
					Мы рекомендуем использовать архивацию. Передача одного архива
					производится намного быстрее, чем передача большого количества файлов
					небольшого объема.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					<strong>FTP - Fayl uzatish protokoli</strong>
					fayllar") - uzatish uchun mo'ljallangan standart protokol fayllar.
				</p>
				<p>
					<strong>FTP mijozi</strong> sizga imkon beruvchi dasturdir hisobni
					boshqarish uchun FTP kirishidan foydalanish.
				</p>
				<p>
					<strong>FTP mijozi</strong> kompyuterda o'rnatilgan foydalanuvchi.
				</p>
				<p>
					Odatiy bo'lib, Airnet.uz hostingidagi har bir akkaunt uchun, asosiy
					FTP kirish.
				</p>
				<p>
					Hisobingizga FTP orqali ulanish uchun siz FTP mijozini o'rnatishingiz
					kerak.
				</p>
				<p>FTP mijozida quyidagi parametrlar o'rnatilishi kerak:</p>
				<ul className="list">
					<li>Foydalanuvchi nomi - boshqaruv panelidagi loginga o'xshash.</li>
					<li>Parol - Boshqaruv paneliga kirish uchun parol bilan bir xil.</li>
					<li>
						Server nomi - elektron pochtada xabar qilingan IP manzilni
						belgilashingiz mumkin hisob yaratish haqida xabar. Uni har doim
						ichida topish mumkin "Domenlar" bo'limi - hisobni boshqarish
						panelining "IP-manzillari".
					</li>
				</ul>
				<p>
					Asosiy FTP kirish mijoz tomonidan barcha fayllarga kirish uchun
					ishlatiladi, hisob bo'yicha.
				</p>
				<p>
					Airnet.uz boshqaruv paneli yaratish imkoniyatini beradi qo'shimcha FTP
					hisoblari.
				</p>
				<p>
					Ta'minlash uchun qo'shimcha FTP hisoblari taqdim etiladi cheklangan
					kirish. Misol uchun, agar bir nechta saytlar joylashtirilgan bo'lsa
					bitta hisob va har bir saytda alohida texnik mavjud mutaxassis, turli
					FTP hisoblarini yaratish va sozlash qulay. Shunday qilib, har bir
					mutaxassis faqat kirish imkoniyatiga ega bo'ladi u ishlaydigan
					saytning fayllari.
				</p>
				<p>
					Qo'shimcha FTP hisobi uchun{" "}
					<strong>Foydalanuvchi nomi va parol</strong>
					yaratilganda belgilanadi.
				</p>
				<p>
					FTP yordamida siz alohida fayllarni, fayllar guruhlarini yoki
					arxivlar.
				</p>
				<p>
					Arxivdan foydalanishni tavsiya etamiz. Yagona arxiv uzatish ko'p sonli
					fayllarni uzatishdan ko'ra tezroq kichik hajm.
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
