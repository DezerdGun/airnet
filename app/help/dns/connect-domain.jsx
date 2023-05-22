import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Подключить сайт к домену",
		uz: "Saytni domenga ulang",
		en: "Connect site to domain",
	},
	content: {
		ru: (
			<>
				<p>Вы можете подключить сайт к домену с помощью A-записи — привязать домен к определенному IP-адресу. При обращении к домену будет открываться сайт, расположенный на сервере с указанным IP-адресом.</p>

				<ol>
					<li>Проверьте, что у домена не истек срок регистрации.</li>
					<li>Добавьте домен.</li>
					<li>Делегируйте домен на NS-серверы Airnet.</li>
					<li>Добавьте A-запись со значением IP-адреса вашего сервера.</li>
				</ol>
			</>
		),
		uz: (
			<>
				<p>Siz saytni domenga A-record yordamida ulashingiz mumkin - domenni ma'lum bir IP manzilga bog'lang. Domenga kirishda ko‘rsatilgan IP manzilga ega serverda joylashgan sayt ochiladi.</p>

				<ol>
					<li>Domen muddati tugamaganligini tekshiring.</li>
					<li>Domen qo'shing.</li>
					<li>Domenni Airnet NS serverlariga topshiring.</li>
					<li>Serveringiz IP manzili qiymatiga ega A yozuvini qo'shing.</li>
				</ol>
			</>
		),
		en: (
			<>
				<p>You can connect a site to a domain using an A-record - bind a domain to a specific IP address. When accessing the domain, the site located on the server with the specified IP address will be opened.</p>

				<ol>
					<li>Check that the domain has not expired.</li>
					<li>Add a domain.</li>
					<li>Delegate the domain to the Airnet NS servers.</li>
					<li>Add an A record with the value of your server's IP address.</li>
				</ol>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
