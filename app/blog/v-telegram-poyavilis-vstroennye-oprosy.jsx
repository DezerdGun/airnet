import NewsItem from "@/components/newsItem"

const data = {
	title: {
		ru: "В Telegram появились встроенные опросы",
		uz: "Telegramda o‘rnatilgan so‘rovnomalar mavjud",
		en: "Telegram has built-in polls",
	},
	desc: {
		ru: "В новом обновлении мессенджера для создания опроса теперь не надо пользоваться сторонними решениями.",
		uz: "Messenjerning yangi yangilanishida so‘rovnoma yaratish uchun endi uchinchi tomon yechimlaridan foydalanish shart emas",
		en: "In the new messenger update, you no longer need to use third-party solutions to create a survey.",
	},
	date: "20.12.2018",
	img: "/blog/santa.jpg",
	content: {
		ru: (
			<>
				<p>В новом обновлении мессенджера для создания опроса теперь не надо пользоваться сторонними решениями.</p>
				<p>
					Команда Telegram представила специальный инструмент для создания опросов. Об этом сообщается в блоге компании.
				</p>
				<p>
					«Новые встроенные опросы станут удобным дополнением к группам с 100 000 участников и каналам с миллионами
					подписчиков», — считают в компании.
				</p>
				<p>
					Для начала это будут анонимные опросы, которые можно пересылать для увеличения досягаемости и закрепления в
					чатах/каналах для лучшей видимости (и для уведомления всех участников).
				</p>
				<p>
					Кроме этого, в Telegram для iOS снова доступен веб-поиск для поиска изображений при отправке вложений «Фото и
					видео» или при выборе картинки профиля:
				</p>
				<p>
					В целом же, приложение для iOS стало еще лучше в версии 5.1.1. за счет исправления множества мелких ошибок и
					багов.
				</p>
				<p>
					Так, к примеру, очистка кэша в меню «Настройки» {">"} «Данные и хранилище» {">"} «Использование хранилища»
					теперь корректно уменьшает пространство, занимаемое приложением.
				</p>
				<p>
					Файлы и мультимедиа будут продолжать загружаться некоторое время после закрытия приложения. Также добавили
					онлайн-статус пользователей в результатах поиска.
				</p>
				<p>
					Ссылка на источник{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Yangi messenjer yangilanishida siz endi so'rovnoma yaratishingiz shart emas uchinchi tomon yechimlaridan
					foydalaning.
				</p>
				<p>
					Telegram jamoasi yaratish uchun maxsus vositani taqdim etdi so'rovlar. Bu haqda kompaniya blogida xabar
					berildi.
				</p>
				<p>
					Yangi o'rnatilgan so'rovlar 100 dan iborat guruhlarga qulay qo'shimcha bo'ladi 000 a'zolar va millionlab
					obunachilarga ega kanallar "dedi kompaniyalar.
				</p>
				<p>
					Boshlash uchun, bular yuborilishi mumkin bo'lgan anonim so'rovlar bo'ladi yaxshilanish uchun chat/kanallarga
					kirishni oshirish va yopishib olish ko'rinish (va barcha ishtirokchilarni xabardor qilish).
				</p>
				<p>
					Bundan tashqari, iOS uchun Telegram’da qidiruv uchun veb-qidiruv yana mavjud Rasm va video qoʻshimchalarini
					yuborganingizda yoki tanlaganingizda rasmlar profil rasmlari:
				</p>
				<p>
					Umuman olganda, iOS ilovasi 5.1.1 versiyasida yanada yaxshilandi. hisobiga ko'plab kichik xatolar va xatolarni
					tuzatadi.
				</p>
				<p>
					Shunday qilib, masalan, "Sozlamalar" menyusida keshni tozalash {">"} "Ma'lumotlar va saqlash" {">"} "Xotiradan
					foydalanish" endi to'g'ri kamayadi ilova egallagan joy.
				</p>
				<p>
					Fayllar va media fayllarni bir muddatdan keyin yuklab olish davom etadi ilovani yopish. Shuningdek,
					foydalanuvchilarning onlayn holati qo'shildi Qidiruv natijalari.
				</p>
				<p>
					Manba'a uchun link{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						Spot
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>In the new messenger update, you no longer need to use third-party solutions to create a survey.</p>
				<p>
					The Telegram team has introduced a special tool for creating polls. This was reported in the company's blog.
				</p>
				<p>
					“The new built-in polls will be a welcome addition to groups with 100,000 members and channels with millions
					of subscribers,” according to the company.
				</p>
				<p>
					To begin with, these will be anonymous surveys that can be forwarded to increase reach and stay in
					chats/channels for better visibility (and to notify all participants).
				</p>
				<p>
					In addition, web search is back in Telegram for iOS to search for images when sending “Photos and video" or
					when selecting a profile picture:
				</p>
				<p>
					In general, the iOS application has become even better in version 5.1.1. by fixing many minor bugs and bugs.
				</p>
				<p>
					So, for example, clearing the cache in the "Settings" menu {">"} "Data and storage" {">"} "Storage usage" now
					correctly reduces the space occupied by the application.
				</p>
				<p>
					Files and media will continue to download for a while after the app is closed. Also added online status of
					users in search results.
				</p>
				<p>
					Link to source{" "}
					<a href="https://www.spot.uz/ru" target="_blank" rel="noreferrer noopener">
						spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/lenovo-predstavila-pervyj-v-mire-smartfon-s-12-gb-operativnoj-pamyati",
	next: "/blog/vpervye-vpn-prilozheniya-stali-samymi-skachivaemymi-v-uzbekistane-kak-dlya-ios-tak-i-dlya-android",
}

export default function Blog({ language }) {
	return <NewsItem data={data} language={language} />
}
