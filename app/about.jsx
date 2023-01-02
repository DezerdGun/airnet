import Container from "@/components/container";
import Link from "next/link";
import Partners from "@/components/partners";
import SEO from "@/components/seo";

export default function About({ language }) {
	console.log(language);

	const langData = {
		seoTitle: {
			ru: "О компании | Airnet",
			uz: "Kompaniya haqida | Airnet",
		},
		seoDesc: {
			ru: "Информация о компании Airnet",
			uz: "Airnet kompaniyasi haqida ma'lumotlar",
		},
		headTitle: {
			ru: "О компании",
			uz: "Kompaniya haqida",
		},

		text1: {
			ru: (
				<>
					<strong>AIRNET.uz</strong> – это компания, предоставляющая услуги:{" "}
					<Link href="/hosting">
						<a className="text-decoration-underline">виртуального хостинга</a>
					</Link>
					,{" "}
					<Link href="/reseller">
						<a className="text-decoration-underline">реселлинга</a>
					</Link>
					,{" "}
					<Link href="/vds">
						<a className="text-decoration-underline">аренды VDS</a>
					</Link>{" "}
					и{" "}
					<Link href="/dedicated">
						<a className="text-decoration-underline">выделенных серверов</a>
					</Link>
					, а также{" "}
					<Link href="/domains">
						<a className="text-decoration-underline">регистрации доменов</a>
					</Link>
				</>
			),
			uz: (
				<>
					<strong>AIRNET.uz</strong> – xizmat ko‘rsatuvchi kompaniya hisoblanadi{" "}
					<Link href="/hosting">
						<a className="text-decoration-underline">virtualniy host</a>
					</Link>
					,{" "}
					<Link href="/reseller">
						<a className="text-decoration-underline">resling</a>
					</Link>
					,{" "}
					<Link href="/vds">
						<a className="text-decoration-underline">ijara</a>
					</Link>{" "}
					va{" "}
					<Link href="/dedicated">
						<a className="text-decoration-underline">Maxsus serverlar</a>
					</Link>
					, hamda{" "}
					<Link href="/domains">
						<a className="text-decoration-underline">domenni ro'yxatdan o'tkazish</a>
					</Link>
				</>
			),
		},
		text2: {
			ru: "Наша компания, прежде всего, славится своим первоклассным обслуживанием. Профессиональная и дружелюбная служба поддержки готова помочь Вам в кратчайшие сроки, в любое время суток, с любым возникшим у Вас вопросом. Связаться с нами можно по телефону, онлайн-чату и, конечно же, подав запрос через тикет систему. Мы предпочитаем индивидуальный подход к каждому клиенту и его задачам. Поэтому, Вы можете быть уверены в том, что не останетесь наедине со своими проблемами. Можете спокойно заниматься развитием своего проекта или корпоративного сайта, остальное мы берем на себя.",
			uz: "Bizning kompaniyamiz, birinchi navbatda, birinchi darajali xizmati bilan mashhur. Professional va do'stona qo'llab-quvvatlash xizmati sizga imkon qadar tezroq, kunning istalgan vaqtida yordam berishga tayyor, har qanday savolingiz bilan. Biz bilan telefon, onlayn chat va, albatta, chipta tizimi orqali so'rov yuborish orqali. Biz individual yondashuvni afzal ko'ramiz har bir mijozga va uning vazifalariga. Shuning uchun, siz qolmasligingizga amin bo'lishingiz mumkin muammolaringiz bilan yolg'iz. Siz o'z loyihangizni xavfsiz ishlab chiqishingiz mumkin yoki korporativ veb-sayt, qolganlari bilan biz g'amxo'rlik qilamiz.",
		},
		text3: {
			ru: "Большое количество наших усилий нацелено на то, чтобы создать клиентам комфортные условия для развития и улучшения своих проектов, чтобы наши сервисы были стабильными, современными и быстрыми.",
			uz: "Bizning sa'y-harakatlarimizning katta qismi mijozlar uchun qulay sharoitlar yaratishga qaratilgan. xizmatlarimiz barqaror, zamonaviy bo‘lishi uchun loyihalarimizni ishlab chiqish va takomillashtirish va tez.",
		},
		text4: {
			ru: "Опыт наших сотрудников, применяемые технологи, решения и современное серверное оборудование обеспечивают устойчивую инфраструктуру и максимально быструю поддержку клиентов. В своей работе, мы придерживаемся самых высоких стандартов.",
			uz: "Xodimlarimiz tajribasi, amaliy texnologiyalar, yechimlar va zamonaviy server uskunalar barqaror infratuzilmani va eng tez yordamni ta'minlaydi mijozlar. Bizning ishimizda biz eng yuqori standartlarga amal qilamiz.",
		},
		text5: {
			ru: "Нам доверяют как небольшие сайты-визитки, так и крупные порталы, сайты государственных учреждений, высоконагруженные проекты и интернет-стартапы.",
			uz: "Bizga ham kichik biznes karta saytlari, ham yirik portallar, davlat saytlari ishonadi muassasalar, yuqori yuklangan loyihalar va Internet startaplari.",
		},
		text6: {
			ru: "Мы никогда не останавливаемся на достигнутом и постоянно стремимся к развитию и совершенствованию. Мы всегда открыты для новых предложений по сотрудничеству, улучшению нашего сервиса и критике.",
			uz: "Biz hech qachon erishgan yutuqlarimiz bilan to'xtab qolmaymiz va doimo rivojlanishga intilamiz takomillashtirish. Biz hamkorlik, takomillashtirish bo'yicha yangi takliflarga doim ochiqmiz bizning xizmatimiz va tanqidimiz.",
		},
	};

	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />
			<Container headTitle={langData.headTitle[language]}>
				<hr />
				<p>{langData.text1[language]}</p>
				<p>{langData.text2[language]}</p>
				<p>{langData.text3[language]}</p>
				<p>{langData.text4[language]}</p>
				<p>{langData.text5[language]}</p>
				<p>{langData.text6[language]}</p>
			</Container>
			<Partners />
		</>
	);
}
