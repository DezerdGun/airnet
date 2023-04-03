import HelpBlock from "@/components/helpItem/helpBlock"
import { LINKS } from "@/components/requirements"
import Link from "next/link"

const mainData = {
	headTitle: {
		ru: "Преимущества VDS и VPS-серверов",
		uz: "VDS va VPS serverlarini ustunligi",
	},
	content: {
		ru: (
			<>
				<p>
					Нагруженные сайты требуют более комфортные условия, чем обычный
					хостинг, где серверные ресурсы одни и те же для проектов всех
					пользователей. В этом случае целесообразным вариантом будет VDS /
					VPS-сервер.
				</p>
				<p>
					На виртуальном сервере у сайтов есть возможность эффективно работать
					при выборе подходящего тарифа. <strong>Функциональность VPS</strong>{" "}
					аналогична реальному хосту, а стоимость в несколько раз ниже,
					поскольку клиент использует только часть ресурсов физического сервера.
				</p>
				<p>
					<strong>Арендуя выделенные сервера</strong> пользователь получает в
					распоряжение все мощности оборудования. Поэтому стоимость услуг бывает
					достаточно высока. Подобную услугу заказывают для высоконагруженных
					сайтов, принимаемых, например для больших гипермаркетов.
				</p>
				<p>
					Большинству владельцев сайтов{" "}
					<strong>возможностей виртуального сервера</strong> достаточно для
					продуктивной работы. Заказчик с опытом управления может самостоятельно
					настроить подходящую программную среду с необходимым программным
					обеспечением и операционными системами.
				</p>
				<p>
					Никакие соседи, как на виртуальном хостинге, ему не помешают,
					поскольку <strong>VDS/VPS – это изолированная площадка</strong>.
					Независимость и доступность делают виртуальный сервер одной из лучших
					разновидностей хостингового сервиса.
				</p>
				<p>
					Ознакомится со всеми тарифными планами можно на сайта{" "}
					<Link href={LINKS.OPTIMAL_VDS}>
						<a>Оптимальные</a>
					</Link>{" "}
					и{" "}
					<Link href={LINKS.BIG_VDS}>
						<a>Высокопроизводительные</a>
					</Link>{" "}
					сервера
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Yuklangan saytlar server resurslari bir xil bo'lgan oddiy xostingdan
					ko'ra qulayroq sharoitlarni talab qiladi barcha foydalanuvchilarning
					loyihalari uchun bir xil. Bunday holda, VDS / VPS serveri maqbul
					variant bo'ladi.
				</p>
				<p>
					Virtual serverda saytlar to'g'ri tarifni tanlashda samarali ishlash
					imkoniyatiga ega. <strong>VPS funksionalligi</strong> haqiqiy xostga
					o'xshaydi va narxi bir necha baravar past, chunki mijoz jismoniy
					server resurslarining faqat bir qismini ishlatadi.
				</p>
				<p>
					<strong>Ajratilgan serverlarni ijaraga olish</strong> orqali
					foydalanuvchi o'z ixtiyoridagi barcha quvvatni oladi uskunalar.
					Shuning uchun xizmatlarning narxi ancha yuqori. Bu xizmat uchun
					buyurtma qilingan yuqori yuklangan saytlar, masalan, yirik
					gipermarketlar uchun qabul qilinadi.
				</p>
				<p>
					Aksariyat veb-sayt egalari uchun{" "}
					<strong>virtual server imkoniyatlari</strong> etarli samarali mehnat.
					Boshqaruv tajribasiga ega bo'lgan mijoz tegishli dasturiy ta'minotni
					mustaqil ravishda sozlashi mumkin zarur dasturiy ta'minot va
					operatsion tizimlar bilan muhit.
				</p>
				<p>
					Hech qanday qo'shnilar, umumiy hostingda bo'lgani kabi, bunga
					aralashmaydi, chunki{" "}
					<strong>VDS/VPS izolyatsiya qilingan sayt</strong>. Mustaqillik va
					qulaylik virtual qiladi hosting xizmatining eng yaxshi turlaridan biri
					serveri.
				</p>
				<p>
					Saytda barcha tarif rejalari bilan serverning{" "}
					<Link href={LINKS.OPTIMAL_VDS}>
						<a>Optimal</a>
					</Link>{" "}
					va{" "}
					<Link href={LINKS.BIG_VDS}>
						<a>yuqori ishlash</a>
					</Link>{" "}
					tanishishingiz mumkin
				</p>
			</>
		),
	},
}

export default function HelpBlog({ language }) {
	return <HelpBlock data={mainData} language={language} />
}
