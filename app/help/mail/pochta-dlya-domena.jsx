import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "Почта для домена", uz: "Domen uchun pochta", en: "Mail for domain" },
	content: {
		ru: (
			<>
				<p>Компания AIRNET.uz не предоставляет пользователям почтовый сервис.</p>
				<p>Мы рекомендуем использовать почтовые сервисы</p>
				<p>
					Бесплатный –{" "}
					<a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
						<strong>Яндекс.Почта</strong>
					</a>
				</p>
				<p>
					Платный –{" "}
					<a href="https://workspace.google.com/intl/ru/products/gmail" target="_blank" rel="noreferrer noopener">
						<strong>Gmail.com</strong>
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>AIRNET.uz foydalanuvchilarga pochta xizmatini taqdim etmaydi.</p>
				<p>Pochta xizmatlaridan foydalanishni tavsiya etamiz</p>
				<p>
					Bepul –{" "}
					<a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
						<strong>Yandex.Pochta</strong>
					</a>
				</p>
				<p>
					Pullik –{" "}
					<a href="https://workspace.google.com/intl/ru/products/gmail" target="_blank" rel="noreferrer noopener">
						<strong>Gmail.com</strong>
					</a>
				</p>
			</>
		),
		en: (
			<>
				<p>AIRNET.uz does not provide users with a postal service.</p>
				<p>We recommend using email services</p>
				<p>
					Free –{" "}
					<a href="https://connect.yandex.ru/" target="_blank" rel="noreferrer noopener">
						<strong>Yandex.Mail</strong>
					</a>
				</p>
				<p>
					Paid –{" "}
					<a href="https://workspace.google.com/intl/en/products/gmail" target="_blank" rel="noreferrer noopener">
						<strong>Gmail.com</strong>
					</a>
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
