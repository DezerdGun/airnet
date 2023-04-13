import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "DNS записи", uz: "DNS yozuvlari", en: "DNS records" },
	content: {
		ru: (
			<>
				<p>При добавлении домена на наш хостинг, рекомендуем делегировать его на DNS-сервера компании AIRNET.uz</p>
				<p>
					Name-сервер 1: <strong>dns1.airnet.uz</strong>
				</p>
				<p>
					Name-сервер 2: <strong>dns2.airnet.uz</strong>
				</p>
				<p>
					Name-сервер 3: <strong>ns1.airnet.uz</strong>
				</p>
				<p>
					Name-сервер 4: <strong>ns2.airnet.uz</strong>
				</p>
			</>
		),
		uz: (
			<>
				<p>Bizning xostingimizga domen qo'shganda, uni vakolat berishni tavsiya qilamiz AIRNET.uz DNS serverlari</p>
				<p>
					1- server nomi: <strong>dns1.airnet.uz</strong>
				</p>
				<p>
					2- server nomi: <strong>dns2.airnet.uz</strong>
				</p>
				<p>
					3- server nomi: <strong>ns1.airnet.uz</strong>
				</p>
				<p>
					4- server nomi: <strong>ns2.airnet.uz</strong>
				</p>
			</>
		),
		en: (
			<>
				<p>When adding a domain to our hosting, we recommend delegating it to the DNS servers of AIRNET.uz</p>
				<p>
					Name server 1: <strong>dns1.airnet.uz</strong>
				</p>
				<p>
					Name server 2: <strong>dns2.airnet.uz</strong>
				</p>
				<p>
					Name server 3: <strong>ns1.airnet.uz</strong>
				</p>
				<p>
					Name server 4: <strong>ns2.airnet.uz</strong>
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
