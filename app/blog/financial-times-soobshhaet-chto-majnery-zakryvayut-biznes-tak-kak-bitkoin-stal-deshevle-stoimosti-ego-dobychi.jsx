import BlogItem from "@/components/blogItem"

const data = {
	title: {
		ru: "Financial Times сообщает, что майнеры закрывают бизнес, так как биткоин стал дешевле стоимости его добычи",
		uz: "Financial Times ma'lumotlariga ko'ra, konchilar biznesni yopishmoqda, chunki bitkoin ishlab chiqarish narxidan arzonlashdi",
	},
	decs: "Летом Узбекистан официально взял курс на развитие майнинга и собирался запустить пилотный проект.",
	date: "26 Дек 2018",
	img: "/blog/bitcoin.jpg",
	content: {
		ru: (
			<>
				<p>
					Летом Узбекистан официально взял курс на развитие майнинга и собирался
					запустить пилотный проект.
				</p>
				<p>
					Британская компания Bladetech, которая в марте объявила о
					строительстве крупнейшего в Великобритании предприятия по добыче
					биткоина, заявила, что приостановила проект из-за нестабильной
					обстановки на крипторынках,{" "}
					<a
						href="https://www.ft.com/content/98d52c50-fd37-11e8-aebf-99e208d3e521"
						target="_blank"
						rel="noreferrer noopener"
					>
						пишет
					</a>{" "}
					Financial Times. На это{" "}
					<a
						href="https://vc.ru/crypto/53834-ft-maynery-kriptovalyut-stolknulis-s-ubytkami-iz-za-padeniya-ceny-bitkoina-nizhe-stoimosti-ego-dobychi"
						target="_blank"
						rel="noreferrer noopener"
					>
						обратили
					</a>{" "}
					внимание в VC.ru.
				</p>
				<p>
					Китайские производители майнингового оборудования Ebang, Canaan и
					Bitmain отложили планы по IPO. Nvidia закрыла своё подразделение по
					разработке криптооборудования. Американская майнинговая компания
					Gigawatt в ноябре объявила о банкротстве.
				</p>
				<p>
					«Многие компании, которые занимаются майнингом криптовалют, а также
					майнеры-любители закрывают бизнес, так как из-за падения стоимости
					криптовалют он стал приносить им убытки», — делает вывод издание.
				</p>
				<p>
					Опрошенные изданием эксперты говорят, что для безубыточного майнинга,
					включая расходы на электроэнергию и амортизацию, биткоин должен стоить
					около $5000. 16 декабря курс биткоина опускался ниже $3200 — это на
					80% меньше по сравнению с максимальными значениями в конце 2017 года.
					Тогда цена биткоина приблизилась к $20 тысячам.
				</p>
				<p>
					Совокупная мощность майнинговых ферм упала на 40% с августа 2018 года.
					Это говорит о том, что с сентября около 1,5 млн ферм были отключены,
					подсчитали в исследовательской компании Fundstrat.
				</p>
				<p>
					Летом Узбекистан официально взял курс на развитие и внедрение
					блокчейна, крипто-активов и майнинга. Блокчейн внедрят в работу
					государственных органов, узаконят все крипто-активы и процессы их
					купли-продажи, начнут готовить кадры по блокчейну и запустят пилотный
					проект по майнингу, для чего привлекут «Узбекэнерго» и
					«Узбекгидроэнерго».
				</p>
				<p>
					Ссылка на источник{" "}
					<a
						href="https://www.spot.uz/ru"
						target="_blank"
						rel="noreferrer noopener"
					>
						Spot
					</a>
				</p>
			</>
		),
		uz: (
			<>
				<p>
					Yozda O‘zbekiston rasman tog‘-kon sanoatini rivojlantirish
					yo‘nalishini belgilab oldi va bu yo‘nalishga ham bormoqchi edi tajriba
					loyihasini ishga tushirish.
				</p>
				<p>
					Mart oyida qurilish haqida e'lon qilgan Britaniya kompaniyasi
					Bladetech Buyuk Britaniyaning eng yirik bitcoin qazib olish
					operatsiyasi, dedi u kripto bozorlaridagi beqaror vaziyat tufayli
					loyihani to'xtatganini,{" "}
					<a
						href="https://www.ft.com/content/98d52c50-fd37-11e8-aebf-99e208d3e521"
						target="_blank"
						rel="noreferrer noopener"
					>
						yozdi,
					</a>{" "}
					Financial Times. VC.ru{" "}
					<a
						href="https://vc.ru/crypto/53834-ft-maynery-kriptovalyut-stolknulis-s-ubytkami-iz-za-padeniya-ceny-bitkoina-nizhe-stoimosti-ego-dobychi"
						target="_blank"
						rel="noreferrer noopener"
					>
						etiborini qaratdi.
					</a>{" "}
				</p>
				<p>
					Xitoy kon uskunalari ishlab chiqaruvchilari Ebang, Kan'on va Bitmain
					IPO rejalarini kechiktirdi. Nvidia o'z bo'linmasini yopdi kripto
					uskunalarini ishlab chiqish. Amerika kon kompaniyasi Noyabr oyida
					Gigawatt bankrotlik to'g'risida ariza berdi.
				</p>
				<p>
					Kriptovalyutalarni qazib oluvchi ko'plab kompaniyalar, shuningdek
					havaskor konchilar biznesni yopmoqdalar, chunki tannarxning pasayishi
					tufayli kriptovalyutalar, u ularga yo'qotishlarni keltira boshladi ",
					deb xulosa qiladi nashr.
				</p>
				<p>
					Nashr suhbatlashgan mutaxassislarning aytishicha, zararsiz qazib olish
					uchun, elektr energiyasi va amortizatsiya xarajatlarini o'z ichiga
					olgan holda, bitcoin qiymatga ega bo'lishi kerak taxminan 5000 dollar.
					16 dekabrda bitkoin kursi 3200 dollardan pastga tushdi - bu 80% 2017
					yil oxiridagi maksimal qiymatlardan kamroq. Keyin Bitkoinning narxi 20
					000 dollarga yaqinlashdi.
				</p>
				<p>
					2018 yil avgust oyidan beri konchilik xo'jaliklarining umumiy quvvati
					40 foizga kamaydi. Bu sentabr oyidan beri 1,5 millionga yaqin fermer
					xo‘jaligi faoliyati to‘xtatilganidan dalolat beradi. Fundstrat
					tadqiqot kompaniyasida hisoblab chiqilgan.
				</p>
				<p>
					Yozda O‘zbekiston rasman blokcheynni ishlab chiqish va joriy etish
					kursini belgiladi, kripto aktivlari va qazib olish. Blockchain hukumat
					ishiga kiritiladi hokimiyat barcha kripto-aktivlarni va ularni sotib
					olish va sotish jarayonlarini qonuniylashtiradi blokcheyn bo'yicha
					xodimlarni tayyorlash va tajriba kon loyihasini ishga tushirish
					«O‘zbekenergo» va «O‘zbekgidroenergo»ni nima jalb qiladi.
				</p>
				<p>
					Manba'a cuhun link{" "}
					<a
						href="https://www.spot.uz/ru"
						target="_blank"
						rel="noreferrer noopener"
					>
						Spot
					</a>
				</p>
			</>
		),
	},
	prev: "/blog/karty-uzcard-teper-mozhno-popolnyat-nalichnymi",
	next: "/blog/centralnyj-bank-opublikoval-proekt-zakona-o-platezhax-i-elektronnyx-dengax-v-uzbekistane",
}

export default function Blog({ language }) {
	return <BlogItem data={data} language={language} />
}
