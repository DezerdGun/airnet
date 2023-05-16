import HelpBlock from "@/components/helpItem/helpBlock"

const mainData = {
	headTitle: {
		ru: "Резервное копирование выделенных серверов",
		uz: "Maxsus server zahirasi",
		en: "Dedicated server backup",
	},
	content: {
		ru: (
			<>
				<p>
					Для выделенных серверов Selectel предусмотрена возможность создания и хранения резервных копий (бэкапов).
					Услуга резервного копирования позволяет повысить надежность инфраструктуры, защитить себя от безвозвратной
					потери данных.
				</p>

				<p>Для создания и хранения резервных копий доступны следующие решения:</p>

				<ul>
					<li>
						Veeam agent — резервное копирование выполняется Veeam-агентом, работающим на сервере. Данные могут быть
						выгружены в облачный репозиторий Veeam® Cloud Connect, или на отдельный диск сервера;
					</li>
					<li>
						автоматический бэкап в Объектное хранилище — резервные копии создаются с помощью ПО, которое поддерживает
						FTP, OpenStack Swift или Amazon S3-совместимый API. ПО регулярно архивирует и переносит данные в объектное
						хранилище Selectel;
					</li>
					<li>
						бэкап в Файловое хранилище Selectel (SFS) — SFS подключается по протоколам NFS или CIFS к одному или
						нескольким инстансам (серверам или виртуальным машинам), которые могут работать с ней одновременно.
						Использует трёхкратную репликацию томов диска, что обеспечивает высокую сохранность данных. Для серверов
						линейки Chipcore Line данное решение недоступно.
					</li>
				</ul>
			</>
		),
		uz: (
			<>
				<p>
					Tanlangan ajratilgan serverlar zaxira nusxalarini (zaxira nusxalarini) yaratish va saqlash imkoniyatini
					beradi. Zaxira xizmati infratuzilmaning ishonchliligini oshirish, o'zingizni qaytarib bo'lmaydigan
					ma'lumotlarni yo'qotishdan himoya qilish imkonini beradi.
				</p>

				<p>Zaxira nusxalarini yaratish va saqlash uchun quyidagi echimlar mavjud:</p>

				<ul>
					<li>
						Veeam agenti - zaxiralash serverda ishlaydigan Veeam agenti tomonidan amalga oshiriladi. Ma'lumotlarni
						Veeam® Cloud Connect bulutli omboriga yoki alohida server diskiga yuklash mumkin;
					</li>
					<li>
						Object Storage-ga avtomatik zaxiralash - zaxira nusxalari FTP, OpenStack Swift yoki Amazon S3-ga mos API-ni
						qo'llab-quvvatlaydigan dasturiy ta'minot yordamida yaratiladi. Dastur muntazam ravishda ma'lumotlarni
						arxivlaydi va Selectel ob'ekt xotirasiga o'tkazadi;
					</li>
					<li>
						Tanlangan fayl xotirasiga (SFS) zahira nusxasi — SFS NFS yoki CIFS protokollari orqali u bilan bir vaqtda
						ishlay oladigan bir yoki bir nechta nusxalarga (serverlar yoki virtual mashinalar) ulanadi. Disk
						hajmlarining uch marta takrorlanishidan foydalanadi, bu esa ma'lumotlarning yuqori xavfsizligini
						ta'minlaydi. Ushbu yechim Chipcore Line serverlari uchun mavjud emas.
					</li>
				</ul>
			</>
		),
		en: (
			<>
				<p>
					Selectel dedicated servers provide the ability to create and store backups (backups). The backup service
					allows you to increase the reliability of the infrastructure, protect yourself from irretrievable data loss.
				</p>

				<p>The following solutions are available for creating and storing backups:</p>

				<ul>
					<li>
						Veeam agent - backup is performed by the Veeam agent running on the server. Data can be uploaded to the
						Veeam® Cloud Connect cloud repository, or to a separate server disk;
					</li>
					<li>
						automatic backup to Object Storage - backups are created using software that supports FTP, OpenStack Swift
						or Amazon S3 compatible API. The software regularly archives and transfers data to the Selectel object
						storage;
					</li>
					<li>
						backup to Selectel File Storage (SFS) — SFS connects via NFS or CIFS protocols to one or more instances
						(servers or virtual machines) that can work with it simultaneously. Uses three-time replication of disk
						volumes, which ensures high data safety. This solution is not available for Chipcore Line servers.
					</li>
				</ul>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
