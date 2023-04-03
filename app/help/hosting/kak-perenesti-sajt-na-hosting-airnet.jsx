import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Как перенести сайт на хостинг AIRNET?",
		uz: "Qanday qilib veb-saytni AIRNET xostingiga o'tkazish mumkin?",
	},
	content: {
		ru: (
			<>
				<p>
					Перенос любого сайта на хостинг Airnet выполняется специалистами
					абсолютно бесплатно.
				</p>
				<h3 className="fw-bold mb-2">
					Для начала давайте рассмотрим содержимое сайта:
				</h3>
				<p>
					<strong>Контент</strong> (содержимое) сайта – файлы и папки,
					размещённые на нем;
				</p>
				<p>
					<strong>Базы данных</strong> – содержит материалы сайта;
				</p>
				<p>
					<strong>Доменные имена</strong> – название сайта, например: Airnet.uz;
				</p>
				<h3>Перенос домена сайта на наш хостинг.</h3>
				<p>
					Техническим – изменение списка DNS-серверов в настройках домена,
					которыми обслуживается доменное имя.
				</p>
				<p>
					При добавлении домена на наш хостинг, рекомендуем делегировать его на
					DNS-сервера компании AIRNET.uz
				</p>
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
				<p>
					Har qanday saytni Airnet xostingiga o'tkazish mutaxassislar tomonidan
					mutlaqo bepul amalga oshiriladi.
				</p>
				<h3 className="fw-bold mb-2">
					Birinchidan, saytning mazmunini ko'rib chiqaylik:
				</h3>
				<p>
					<strong>Kontent</strong> sayt (tarkib) - unda joylashgan fayllar va
					papkalar;
				</p>
				<p>
					<strong>Ma'lumotlar bazasi</strong> – sayt materiallarini o'z ichiga
					oladi;
				</p>
				<p>
					<strong>Domen nomlari</strong> – sayt nomi, masalan: Airnet.uz;
				</p>
				<h3>Veb-sayt domenini bizning hostingga o'tkazish.</h3>
				<p>
					Texnik - domen nomiga xizmat ko'rsatadigan domen sozlamalarida DNS
					serverlari ro'yxatini o'zgartirish.
				</p>
				<p>
					Xostingimizga domen qo‘shganda, uni AIRNET.uz DNS serverlariga
					topshirishni tavsiya qilamiz.
				</p>
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
