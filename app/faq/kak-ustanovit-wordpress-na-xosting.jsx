import FaqInside from "@/components/faqInside"

const data = {
	title: {
		ru: "Как установить WordPress на хостинг?",
		u: " Qanday qilib WordPressni xostga yuklash",
	},
	description: { ru: "", uz: "", en: "" },
	content: {
		ru: (
			<>
				<h2>Необходимые вещи</h2>
				<p>Перед началом установки Вам потребуется узнать несколько вещей.</p>
				<h2>Это нужно знать</h2>
				<p>
					Вам нужен доступ к вашему сайту, его директориям и программное
					обеспечение для процесса установки. Это:
				</p>
				<p>
					Доступ к Вашему сайту (FTP)
					<br />
					Текстовый редактор
					<br />
					FTP-клиент
					<br />
					Браузер, которым Вы пользуетесь.
				</p>
				<h2>Начните установку с:</h2>
				<ul className="list">
					<li>
						<a rel="nofollow" href="http://ru.wordpress.org/">
							Получения
						</a>{" "}
						последней версии WordPress.
					</li>
					<li>Распаковки полученного файла в папку на вашем компьютере.</li>
				</ul>
				<h2>Краткая инструкция</h2>
				<ul className="list">
					<li>
						Скачайте и распакуйте дистрибутив WordPress, если вы этого еще не
						сделали.
					</li>
					<li>
						Создайте базу данных для WordPress на вашем веб-сервере, чтобы ваш
						пользователь MySQL имел все права для доступа и внесения изменений в
						нее.
					</li>
					<li>Переименуйте файл wp-config-sample.php файл в wp-config.php.</li>
					<li>
						Откройте wp-config.php в вашем любимом текстовом редакторе и впишите
						в него настройки подключения к базе данных.
					</li>
					<li>
						Разместите файлы WordPress на вашем веб-сервере в директории “web”:
					</li>
					<li>
						Перейдите по ссылке http://example.com/wp-admin/install.php
						используя ваш любимый веб-браузер.
					</li>
					<li>Распаковки</li>
				</ul>
				<h2>
					Полная инструкция по установке{" "}
					<a href="https://codex.wordpress.org/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0_WordPress">
						WordPress
					</a>
				</h2>
			</>
		),
		uz: (
			<>
				<h2>Zarur narsalar</h2>
				<p>Yuklashdan oldin bir nechta zaruriyatlarni bilishingiz lozim.</p>
				<h2>Buni bilishingiz shart</h2>
				<p>
					Siz saytingizga, uning kataloglariga va dasturiy ta'minotiga
					kirishingiz kerak O'rnatish jarayonini ta'minlash. Bu:
				</p>
				<p>
					Veb-saytingizga kirish (FTP)
					<br />
					Matn muharriri
					<br />
					FTP-mijoz
					<br />
					Siz ishlatadigan brauzer.
				</p>
				<h2>Ornatishni boshlang:</h2>
				<ul className="list">
					<li>
						WordPress ni songi taqvinini.
						<a rel="nofollow" href="http://ru.wordpress.org/">
							qabul qilish
						</a>{" "}
					</li>
					<li>Olingan faylni kompyuteringizdagi papkaga chiqarib oling.</li>
				</ul>
				<h2>Qisqa qo'llanma</h2>
				<ul className="list">
					<li>
						Agar sizda hali WordPress yo'q bo'lsa, ilovani yuklab oling va
						chiqarib oling .
					</li>
					<li>
						Siz veb-serveringizda WordPress uchun ma'lumotlar bazasini yarating
						MySQL foydalanuvchi yani sizga kirish va unga o'zgartirish kiritish
						uchun barcha huquqlarga ega bo'lasiz.
					</li>
					<li>
						wp-config-sample.php faylining nomini wp-config.php qilib
						o'zgartiring.
					</li>
					<li>
						Sevimli matn muharririda wp-config.php ni oching va yozing unda
						ma'lumotlar bazasiga ulanish sozlamalari mavjud.
					</li>
					<li>
						WordPress fayllarini veb-serveringizga “veb” katalogiga
						joylashtiring:
					</li>
					<li>
						http://example.com/wp-admin/install.php havolasiga o'ting sevimli
						veb-brauzeringizdan foydalaning.
					</li>
					<li>Qutidan chiqarish</li>
				</ul>
				<h2>
					To'liq o'rnatish ko'rsatmalari{" "}
					<a href="https://codex.wordpress.org/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0_WordPress">
						WordPress
					</a>
				</h2>
			</>
		),
	},
}

export default function KakUstanovitWordpressNaXosting({ language }) {
	return <FaqInside data={data} language={language} />
}
