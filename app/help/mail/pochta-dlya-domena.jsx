import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "Почта для домена", uz: "Domen uchun pochta" },
	content: {
		ru: (
			<>
				<p>
					Компания AIRNET.uz не предоставляет пользователям почтовый сервис.
				</p>
				<p>Мы рекомендуем использовать почтовые сервисы</p>
				<p>
					Бесплатный –{" "}
					<a
						href="https://connect.yandex.ru/"
						target="_blank"
						rel="noreferrer noopener"
					>
						<strong>Яндекс.Почта</strong>
					</a>
				</p>
				<p>
					Платный –{" "}
					<a
						href="https://workspace.google.com/intl/ru/products/gmail"
						target="_blank"
						rel="noreferrer noopener"
					>
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
					<a
						href="https://connect.yandex.ru/"
						target="_blank"
						rel="noreferrer noopener"
					>
						<strong>Yandex.Pochta</strong>
					</a>
				</p>
				<p>
					Pullik –{" "}
					<a
						href="https://workspace.google.com/intl/ru/products/gmail"
						target="_blank"
						rel="noreferrer noopener"
					>
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
