import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Восстановление root пароля от VDS",
		uz: "VDS ning root parolni tiklash",
	},
	content: {
		ru: (
			<>
				<p>
					Если вы потеряете или забудете root пароль на сервере, вы сможете его
					восстановить.
				</p>
				<p>
					Это можно сделать с помощью консоли – VNC, расположенной в панели
					управления, нужно будет выбрать услугу и перейти в меню консоль – VNC.
				</p>
				<p>
					Преимущество этой консоли в том, что сервер всегда доступен, если
					соединение с сервером установлено локально и соединение не потеряно.
				</p>
				<p>Алгоритм восстановления root-пароля:</p>
				<ol>
					<li>Перезагрузите сервер</li>
					<li>
						Перед запуском операционной системы измените параметры загрузки ядра
						в меню загрузчика GRUB.
					</li>
					<li>Загрузите операционную систему в однопользовательском режиме.</li>
					<li>Установите новый root-пароль, не вводя старый.</li>
				</ol>
			</>
		),
		uz: (
			<>
				<p>
					Agar siz serverda root parolini yo'qotib qo'ysangiz yoki unutsangiz,
					uni qayta tiklashingiz mumkin.
				</p>
				<p>
					Bu boshqaruv panelida joylashgan konsol - VNC yordamida amalga
					oshirilishi mumkin, siz xizmatni tanlashingiz kerak bo'ladi va menyu
					konsoliga o'ting - VNC.
				</p>
				<p>
					Преимущество этой консоли в том, что сервер всегда доступен, если
					соединение с сервером установлено локально и соединение не потеряно.
				</p>
				<p>Root parolni tiklash algoritmi:</p>
				<ol>
					<li>Serverni qayta ishga tushiring</li>
					<li>
						Operatsion tizimni ishga tushirishdan oldin, GRUB bootloader
						menyusidagi yadro yuklash parametrlarini o'zgartiring.
					</li>
					<li>Operatsion tizimni bitta foydalanuvchi rejimida yuklash.</li>
					<li>Eski parolni kiritmasdan yangi root parolini o'rnating.</li>
				</ol>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
