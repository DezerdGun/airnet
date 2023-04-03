import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: { ru: "DNS записи", uz: "DNS yozuvlari" },
	content: {
		ru: (
			<>
				<p>
					При добавлении домена на наш хостинг, рекомендуем делегировать его на
					DNS-сервера компании AIRNET.uz
				</p>
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
				<p>
					Bizning xostingimizga domen qo'shganda, uni vakolat berishni tavsiya
					qilamiz AIRNET.uz DNS serverlari
				</p>
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
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
