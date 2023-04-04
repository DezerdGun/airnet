import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "Что такое CMS", uz: "CMS nma?" },
	content: {
		ru: (
			<>
				<p>
					Чтобы установить актуальную версию <strong>CMS WordPress</strong>{" "}
					необходимо выполнить следующие действия:
				</p>
				<p>
					1. Перейдите в панель управления аккаунтом в раздел{" "}
					<strong>«сайты»</strong> выбрать нужный сайт и в графе{" "}
					<strong>«Программы»</strong> нажать кнопку{" "}
					<strong>«Установить»</strong>.
				</p>
				<p>
					2. На вкладке <strong>«Блоги»</strong> нажмите кнопку{" "}
					<strong>«Установить»</strong>
				</p>
				<p>
					3. Если на сайт направлен 1 домен, то он указывается автоматически.
					Если на сайт направлено несколько доменов, то можно выбрать доменное
					имя, на котором будет работать сайт.
				</p>
				<p>
					4. По заверщению установки откройте в браузере сайт, на который
					устанавливался <strong>движок CMS WordPress</strong> и заполните
					необходимые поля (Имя сайта, Логин, Пароль и Адрес электронной почты)
					и нажмите кнопку Установить WordPress
				</p>
				<p>
					5. После заключительного шага установки загрузится страница входа для
					доступа в Панель администрирования сайтом.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					<strong>CMS WordPress</strong> oxirgi versiyasini o'rnatish uchun
					quyidagilarni qilishingiz kerak:
				</p>
				<p>
					1. Bo'limda hisobni boshqarish paneliga o'ting{" "}
					<strong>"saytlar"</strong> kerakli saytni va ustunni tanlang{" "}
					<strong>«Ilovalar»</strong> tugmani bosing <strong>«Yuklash»</strong>.
				</p>
				<p>
					2. Bo'limda <strong>«bloklar»</strong> tugmani bosing{" "}
					<strong>«Yuklash»</strong>
				</p>
				<p>
					3. Agar saytga 1 ta domen yuborilsa, u avtomatik ravishda
					ko'rsatiladi. Agar bir nechta domenlar saytga yo'naltirilgan bo'lsa, u
					holda siz domenni tanlashingiz mumkin sayt ishlaydigan nom.
				</p>
				<p>
					4. O'rnatish tugallangach, brauzeringizda qaysi veb-saytni oching{" "}
					<strong>WordPress CMS</strong> dvigatelini o'rnating va to'ldiring
					kerakli maydonlar (sayt nomi, login, parol va elektron pochta manzili)
					va WordPress-ni o'rnatish tugmasini bosing
				</p>
				<p>
					5. Yakuniy o'rnatish bosqichidan so'ng, kirish sahifasi sayt boshqaruv
					paneliga kirish.
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
