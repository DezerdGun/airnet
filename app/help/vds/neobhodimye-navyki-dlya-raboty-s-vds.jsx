import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Необходимые навыки для работы с VDS",
		uz: "VDS bilan ishlash uchun kerakli qobiliyatlar",
	},
	content: {
		ru: (
			<>
				<p>
					Управления виртуальным сервером требует навыков системного
					администрирования.
				</p>
				<p>
					Для управления VDS доступно множество коммерческих и бесплатных
					панелей управления.
				</p>
				<p>
					Альтернативой панелям управления помимо этого служит — протокол SSH,
					который весьма популярен при работе с VDS и с выделенными физическими
					серверами.
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Virtual serverni boshqarish tizimni boshqarish ko'nikmalarini talab
					qiladi.
				</p>
				<p>
					VDSni boshqarish uchun ko'plab tijorat va bepul boshqaruv panellari
					mavjud.
				</p>
				<p>
					Bunga qo'shimcha ravishda, boshqaruv panellariga alternativa SSH
					protokoli bo'lib, u ishlayotganda juda mashhur VDS va maxsus jismoniy
					serverlar bilan.
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
