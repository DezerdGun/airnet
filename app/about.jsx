import Container from "@/components/container"
import Partners from "@/components/partners"
import SEO from "@/components/seo"
import { checkLang } from "@/utils/checkLang"
import Link from "next/link"
import Reviews from "@/components/reviews";
import BreadCrumbs from "../components/seo/breadCrumbs"
import PageBreadcrumb from "../components/seo/pageBreadCrumbs";

export default function About({ language }) {
	const langData = {
		seoTitle: {
			ru: "О компании | Airnet",
			uz: "Kompaniya haqida | Airnet",
			en: "About company | Airnet",
		},
		seoDesc: {
			ru: "Информация о компании Airnet",
			uz: "Airnet haqida",
			en: "Information about Airnet",
		},
		title: {
			ru: "О компании",
			uz: "Airnet haqida",
			en: "About Airnet",
		},
		text1: {
			ru: (
				<>
					<strong>AIRNET.uz</strong> – это компания, предоставляющая услуги:{" "}
					<Link href={checkLang(language) + "/hosting"}>
						<a className="text-decoration-underline">виртуального хостинга</a>
					</Link>
					,{" "}
					<Link href={checkLang(language) + "/reseller"}>
						<a className="text-decoration-underline">реселлинга</a>
					</Link>
					,{" "}
					<Link href={checkLang(language) + "/vds"}>
						<a className="text-decoration-underline">аренды VDS</a>
					</Link>{" "}
					и{" "}
					<Link href={checkLang(language) + "/dedicated"}>
						<a className="text-decoration-underline">выделенных серверов</a>
					</Link>
					, а также{" "}
					<Link href={checkLang(language) + "/domains"}>
						<a className="text-decoration-underline">регистрации доменов</a>
					</Link>
					.
				</>
			),
			uz: (
				<>
					<strong>AIRNET.uz</strong> - bu xizmatlarni taqdim etuvchi kompaniya:{" "}
					<Link href={checkLang(language) + "/hosting"}>
						<a className="text-decoration-underline">umumiy xosting</a>
					</Link>
					,{" "}
					<Link href={checkLang(language) + "/reseller"}>
						<a className="text-decoration-underline">sotuvchi</a>
					</Link>
					,{" "}
					<Link href={checkLang(language) + "/vds"}>
						<a className="text-decoration-underline">VDS ijarasi</a>
					</Link>{" "}
					va{" "}
					<Link href={checkLang(language) + "/dedicated"}>
						<a className="text-decoration-underline">ajratilgan serverlar</a>
					</Link>
					, va yana{" "}
					<Link href={checkLang(language) + "/domains"}>
						<a className="text-decoration-underline">domenni ro'yxatdan o'tkazish</a>
					</Link>
					.
				</>
			),
			en: (
				<>
					<strong>AIRNET.uz</strong> is a company providing services:{" "}
					<Link href={checkLang(language) + "/hosting"}>
						<a className="text-decoration-underline">shared hosting</a>
					</Link>
					,{" "}
					<Link href={checkLang(language) + "/reseller"}>
						<a className="text-decoration-underline">reseller</a>
					</Link>
					,{" "}
					<Link href={checkLang(language) + "/vds"}>
						<a className="text-decoration-underline">VDS leases</a>
					</Link>{" "}
					and{" "}
					<Link href={checkLang(language) + "/dedicated"}>
						<a className="text-decoration-underline">dedicated servers</a>
					</Link>
					, as well as{" "}
					<Link href={checkLang(language) + "/domains"}>
						<a className="text-decoration-underline">domain registrations</a>
					</Link>
					.
				</>
			),
		},
		text2: {
			ru: "Наша компания, прежде всего, славится своим первоклассным обслуживанием. Профессиональная и дружелюбная служба поддержки готова помочь Вам в кратчайшие сроки, в любое время суток, с любым возникшим у Вас вопросом. Связаться с нами можно по телефону, онлайн-чату и, конечно же, подав запрос через тикет систему. Мы предпочитаем индивидуальный подход к каждому клиенту и его задачам. Поэтому, Вы можете быть уверены в том, что не останетесь наедине со своими проблемами. Можете спокойно заниматься развитием своего проекта или корпоративного сайта, остальное мы берем на себя.",
			uz: "Bizning kompaniyamiz, birinchi navbatda, birinchi darajali xizmati bilan mashhur. Professional va do'stona qo'llab-quvvatlash xizmati sizga kunning istalgan vaqtida, har qanday savol bilan imkon qadar tezroq yordam berishga tayyor. Siz biz bilan telefon, onlayn chat va, albatta, chipta tizimi orqali so'rov yuborish orqali bog'lanishingiz mumkin. Biz har bir mijozga va uning vazifalariga individual yondashuvni afzal ko'ramiz. Shuning uchun, muammolaringiz bilan yolg'iz qolmasligingizga amin bo'lishingiz mumkin. Siz o'zingizning loyihangiz yoki korporativ veb-saytingizni ishlab chiqish bilan xavfsiz shug'ullanishingiz mumkin, qolganlari bilan biz g'amxo'rlik qilamiz.",
			en: "Our company, above all, is famous for its first-class service. A professional and friendly support service is ready to help you as soon as possible, at any time of the day, with any question you may have. You can contact us by phone, online chat and, of course, by submitting a request through the ticket system. We prefer an individual approach to each client and his tasks. Therefore, you can be sure that you will not be left alone with your problems. You can safely engage in the development of your project or corporate website, we will take care of the rest.",
		},
		text3: {
			ru: "Большое количество наших усилий нацелено на то, чтобы создать клиентам комфортные условия для развития и улучшения своих проектов, чтобы наши сервисы были стабильными, современными и быстрыми.",
			uz: "Bizning ko'plab sa'y-harakatlarimiz mijozlarga o'z loyihalarini ishlab chiqish va takomillashtirish uchun qulay shart-sharoitlarni yaratishga qaratilgan bo'lib, bizning xizmatlarimiz barqaror, zamonaviy va tezkor bo'ladi.",
			en: "A large number of our efforts are aimed at creating comfortable conditions for clients to develop and improve their projects, so that our services are stable, modern and fast.",
		},
		text4: {
			ru: "Опыт наших сотрудников, применяемые технологи, решения и современное серверное оборудование обеспечивают устойчивую инфраструктуру и максимально быструю поддержку клиентов. В своей работе, мы придерживаемся самых высоких стандартов.",
			uz: "Xodimlarimizning tajribasi, qo'llaniladigan texnologiyalar, yechimlar va zamonaviy server uskunalari barqaror infratuzilmani va mijozlarga imkon qadar tez yordam ko'rsatishni ta'minlaydi. Bizning ishimizda biz eng yuqori standartlarga amal qilamiz.",
			en: "The experience of our employees, the applied technologies, solutions and modern server equipment provide a stable infrastructure and the fastest possible customer support. In our work, we adhere to the highest standards.",
		},
		text5: {
			ru: "Нам доверяют как небольшие сайты-визитки, так и крупные порталы, сайты государственных учреждений, высоконагруженные проекты и интернет-стартапы.",
			uz: "Bizga kichik vizit kartalari saytlari ham, yirik portallar ham, davlat idoralari ham, yuqori yuklamali loyihalar ham, internet startaplari ham ishonadi.",
			en: "We are trusted by both small business card sites and large portals, government agencies, high-load projects and Internet startups.",
		},
		text6: {
			ru: "Мы никогда не останавливаемся на достигнутом и постоянно стремимся к развитию и совершенствованию. Мы всегда открыты для новых предложений по сотрудничеству, улучшению нашего сервиса и критике.",
			uz: "Biz hech qachon erishgan yutuqlarimiz bilan to'xtab qolmaymiz va doimo rivojlanish va takomillashtirishga intilamiz. Biz hamkorlik bo'yicha yangi takliflar, xizmatimizni yaxshilash va tanqidlarga doim ochiqmiz.",
			en: "We never rest on our laurels and constantly strive for development and improvement. We are always open to new proposals for cooperation, improvement of our service and criticism.",
		},
	}

	return (
		<>
			<SEO title={langData.seoTitle[language]} desc={langData.seoDesc[language]} />
      
			<BreadCrumbs data={[{ name: 'О компании' }]} />
			<PageBreadcrumb links={[{ name: 'О компании' }]} />

			<Container headTitle={langData.title[language]}>
				<hr />
				<p>{langData.text1[language]}</p>
				<p>{langData.text2[language]}</p>
				<p>{langData.text3[language]}</p>
				<p>{langData.text4[language]}</p>
				<p>{langData.text5[language]}</p>
				<p>{langData.text6[language]}</p>
			</Container>
			<Partners language={language} />
			<Reviews language={language} />
		</>
	)
}
