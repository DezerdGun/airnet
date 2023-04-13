import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Как перенести сайт на хостинг AIRNET?",
		uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
		en: "How to transfer a website to AIRNET hosting?",
	},
	content: {
		ru: (
			<>
				<p>Перенос любого сайта на хостинг Airnet выполняется специалистами абсолютно бесплатно.</p>
				<h3 className="fw-bold mb-2">Для начала давайте рассмотрим содержимое сайта:</h3>
				<p>
					<strong>Контент</strong> (содержимое) сайта – файлы и папки, размещённые на нем;
				</p>
				<p>
					<strong>Базы данных</strong> – содержит материалы сайта;
				</p>
				<p>
					<strong>Доменные имена</strong> – название сайта, например: Airnet.uz;
				</p>
				<h3>Перенос домена сайта на наш хостинг.</h3>
				<p>Техническим – изменение списка DNS-серверов в настройках домена, которыми обслуживается доменное имя.</p>
				<p>При добавлении домена на наш хостинг, рекомендуем делегировать его на DNS-сервера компании AIRNET.uz</p>
				<p>
					<strong>
						dns1.airnet.uz
						<br />
						dns2.airnet.uz
						<br />
						ns1.airnet.uz
						<br />
						ns2.airnet.uz
					</strong>
				</p>
			</>
		),
		uz: (
			<>
				<p>Har qanday saytni Airnet xostingiga o'tkazish mutaxassislar tomonidan mutlaqo bepul amalga oshiriladi.</p>
				<h3 className="fw-bold mb-2">Birinchidan, saytning mazmunini ko'rib chiqaylik:</h3>
				<p>
					<strong>Kontent</strong> sayt (tarkib) - unda joylashgan fayllar va papkalar;
				</p>
				<p>
					<strong>Ma'lumotlar bazasi</strong> – sayt materiallarini o'z ichiga oladi;
				</p>
				<p>
					<strong>Domen nomlari</strong> – sayt nomi, masalan: Airnet.uz;
				</p>
				<h3>Veb-sayt domenini bizning hostingga o'tkazish.</h3>
				<p>Texnik - domen nomiga xizmat ko'rsatadigan domen sozlamalarida DNS serverlari ro'yxatini o'zgartirish.</p>
				<p>Xostingimizga domen qo‘shganda, uni AIRNET.uz DNS serverlariga topshirishni tavsiya qilamiz.</p>
				<p>
					<strong>
						dns1.airnet.uz
						<br />
						dns2.airnet.uz
						<br />
						ns1.airnet.uz
						<br />
						ns2.airnet.uz
					</strong>
				</p>
			</>
		),
		en: (
			<>
				<p>The transfer of any site to Airnet hosting is carried out by specialists absolutely free of charge.</p>
				<h3 className="fw-bold mb-2">First, let's look at the content of the site:</h3>
				<p>
					<strong>Content</strong> (content) of the site - files and folders located on it;
				</p>
				<p>
					<strong>Databases</strong> – contains site materials;
				</p>
				<p>
					<strong>Domain names</strong> – site name, for example: Airnet.uz;
				</p>
				<h3>Transfer site domain to our hosting.</h3>
				<p>Technical - change the list of DNS servers in the domain settings that serve the domain name.</p>
				<p>When adding a domain to our hosting, we recommend delegating it to the DNS servers of AIRNET.uz</p>
				<p>
					<strong>
						dns1.airnet.uz
						<br />
						dns2.airnet.uz
						<br />
						ns1.airnet.uz
						<br />
						ns2.airnet.uz
					</strong>
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
