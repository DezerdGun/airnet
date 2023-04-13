import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Необходимые навыки для работы с VDS",
		uz: "VDS bilan ishlash uchun zaruriy ko'nikmalar",
		en: "Necessary skills to work with VDS",
	},
	content: {
		ru: (
			<>
				<p>Управления виртуальным сервером требует навыков системного администрирования.</p>
				<p>Для управления VDS доступно множество коммерческих и бесплатных панелей управления.</p>
				<p>
					Альтернативой панелям управления помимо этого служит — протокол SSH, который весьма популярен при работе с VDS
					и с выделенными физическими серверами.
				</p>
			</>
		),
		uz: (
			<>
				<p>Virtual serverni boshqarish tizimni boshqarish ko'nikmalarini talab qiladi.</p>
				<p>VDSni boshqarish uchun ko'plab tijorat va bepul boshqaruv panellari mavjud.</p>
				<p>
					Bunga qo'shimcha ravishda, boshqaruv panellariga alternativa SSH protokoli bo'lib, u ishlayotganda juda
					mashhur VDS va maxsus jismoniy serverlar bilan.
				</p>
			</>
		),
		en: (
			<>
				<p>Managing a virtual server requires system administration skills.</p>
				<p>Many commercial and free control panels are available to manage VDS.</p>
				<p>
					In addition to this, an alternative to control panels is the SSH protocol, which is very popular when working
					with VDS and with dedicated physical servers.
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
