import Container from "@/components/container"
import Partners from "@/components/partners"
import { LINKS } from "@/components/requirements"
import SEO from "@/components/seo"
import { checkLang } from "@/utils/checkLang"
import Link from "next/dist/client/link"
import { useRef, useState } from "react"
import st from "./domains/domains.module.scss"

export default function FreeDomains({ language }) {
	const [isDomainFree, setIsDomainFree] = useState(undefined),
		domainName = useRef()

	const checkDomain = (e) => {
		e.preventDefault()
		fetch(
			`https://api.whoisfreaks.com/v1.0/whois?apiKey=6e967135ca21493f85f7070ec981e67e&whois=live&domainName=${
				document.querySelector("#domainName").value
			}.uz`
		).then((res) => {
			console.log(res)
			return res.domain_registered === "yes"
				? setIsDomainFree("yes")
				: setIsDomainFree("no")
		})
	}

	const langData = {
		seoT: {
			ru: "Бесплатный домен UZ, получить бесплатно домен UZ | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Bepul UZ domeni, bepul UZ domenini oling | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		},
		descT: {
			ru: "Быстрая регистрация бесплатных домен в зоне uz",
			uz: "Uz zonasida bepul domenlarni tez ro'yxatdan o'tkazish",
		},
		headTitle: {
			ru: "Бесплатный домен в зоне UZ",
			uz: "UZ zonasida bepul domen",
		},
		description: {
			ru: (
				<>
					<p>
						Компания &quot;AIRNET&quot; является официальным{" "}
						<a href="https://cctld.uz/reg/">регистратором домен в зоне UZ</a>
					</p>
				</>
			),
			uz: (
				<>
					<p>
						&quot;AIRNET&quot;Kompaniyasi rasmiy{" "}
						<a href="https://cctld.uz/reg/">UZ domeni registratori</a>{" "}
						hisoblanadi{" "}
					</p>
				</>
			),
		},
		proverit: {
			ru: "Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot",
			uz: "Domen nomini yozing va &quot;Tekshirish&quot tugmasini bosing",
		},
		proverka: {
			ru: (
				<>
					<p>
						Перед регистрацией просим вас ознакомиться с{" "}
						<a href="https://cctld.uz/info/polru/">
							Положением о порядке регистрации и пользования доменными именами в
							домене «UZ»
						</a>
					</p>
					<p>
						Вы можете получить{" "}
						<strong>абсолютно бесплатно домен в зоне UZ</strong>, для этого
						нужно купить{" "}
						<Link href={checkLang(language) + LINKS.HOSTING}>
							<a>любой тариф на хостинг</a>
						</Link>
						.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Royxatdan otish oldidan{" "}
						<a href="https://cctld.uz/info/polru/">
							Domen nomlarini ro'yxatdan o'tkazish va ulardan foydalanish
							tartibi to'g'risidagi nizom domeni "UZ"
						</a>
						ni bilan tanishib chiqing
					</p>
					<p>
						Siz <strong>mutlaqo tekin domen .UZ</strong>ga ega bolishingiz
						mumkin buning uchun{" "}
						<Link href={checkLang(language) + LINKS.HOSTING}>
							<a>istalgan tarifni</a>
						</Link>{" "}
						sotib olishingiz kerak .
					</p>
				</>
			),
		},
		placeholder: {
			ru: (
				<>
					<input
						ref={domainName}
						id="domainName"
						placeholder="Например: airnet.uz"
						required
					/>
				</>
			),
			uz: (
				<>
					<input
						ref={domainName}
						id="domainName"
						placeholder="Misol uchun: airnet.uz"
						required
					/>
				</>
			),
		},
		button: {
			ru: (
				<>
					<button type="submit">Проверить</button>
				</>
			),
			uz: (
				<>
					<button type="submit">Tekshirish</button>
				</>
			),
		},
		tf: {
			ru: "Доменное имя в данное время недоступно для регистрации.",
			uz: "Domen nomi hozirda ro‘yxatdan o‘tish uchun mavjud emas.",
		},
		tf2: {
			ru: (
				<>
					<span className={st.domains__head__block__text__green}>
						доменное имя в данное время недоступно для регистрации.
					</span>{" "}
					Нажмите{" "}
					<a href="https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=airnet22">
						Заказать
					</a>{" "}
					для регистрации доменного имени.
				</>
			),
			uz: (
				<>
					<span className={st.domains__head__block__text__green}>
						Domen nomi hozirda ro‘yxatdan o‘tish uchun mavjud emas.
					</span>{" "}
					Domen nomini ro'yxatdan o'tkazish uchun
					<a href="https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=airnet22">
						buyurtma berish
					</a>{" "}
					tugmasini bosing
				</>
			),
		},
		table: {
			ru: (
				<>
					<table>
						<tr>
							<th>Доменная зона</th>
							<th>Регистрации c хостингом</th>
							<th>С хостингом</th>
							<th>Без хостинга</th>
							<th>Redemption period</th>
							<th>Купить</th>
						</tr>
						<tr>
							<td>.UZ</td>
							<th>17 000 сум*</th>
							<th>
								<Link href="/free-domains">
									<a>Бесплатно*</a>
								</Link>
							</th>
							<th>20 000 сум*</th>
							<th>40 000 сум**</th>
							<th>
								<a href="https://billing.airnet.uz/billing.php?do=zones">
									Купить
								</a>
							</th>
						</tr>
					</table>
				</>
			),
			uz: (
				<>
					<table>
						<tr>
							<th>Domen maydoni</th>
							<th>Xost bilan royxatdan otqazish </th>
							<th>Xost bilan</th>
							<th>Xostsiz</th>
							<th>Redemption period</th>
							<th>Harid qilish</th>
						</tr>
						<tr>
							<td>.UZ</td>
							<th>17 000 som*</th>
							<th>
								<Link href="/free-domains">
									<a>Tekin*</a>
								</Link>
							</th>
							<th>20 000 som*</th>
							<th>40 000 som**</th>
							<th>
								<a href="https://billing.airnet.uz/billing.php?do=zones">
									Harid qilish
								</a>
							</th>
						</tr>
					</table>
				</>
			),
		},
		content: {
			ru: (
				<>
					<p>
						Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить
						или перенести свой домен на нашу площадку. Бесплатные домена по
						акции деактивирована услуга смена DNS в течении 3х месяцев.
					</p>
					<p>* При регистрации хостинг с доменом</p>
					<p>
						** Redemption period - Домен получает данный статус после того, как
						истекли 7 рабочих дней после окончания срока регистрации. Домен
						переходит к Администрации домена UZ, при этом в течение 30
						календарных дней предыдущий владелец может вернуть себе домен.
					</p>
				</>
			),
			uz: (
				<>
					<p>
						Bizdan xosting xizmati yoki VDS/VPS ga buyurtma berib, siz ham sotib
						olishingiz mumkin yoki domeningizni bizning saytimizga o'tkazing.
						Bepul domenlar tomonidan Aksiya 3 oy ichida DNS oʻzgartirish
						xizmatini oʻchirib qoʻydi.
					</p>
					<p>* Domen bilan xostingni ro'yxatdan o'tkazishda</p>
					<p>
						** Sotib olish muddati - Domen ushbu maqomni keyin oladi Ro'yxatga
						olish muddati tugaganidan keyin 7 ish kuni o'tdi. Domen UZ domeni
						ma'muriyatiga o'tadi, 30 ichida kalendar kunlari, oldingi egasi
						domenni qaytarib olishi mumkin.
					</p>
				</>
			),
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<div className={st.domains}>
				<Container
					className="mt-0"
					style={{ background: "url('/servers-2.jpg') no-repeat" }}
					headTitle={langData.headTitle[language]}
					description={langData.description[language]}
				>
					<div className={st.domains__head}>
						<div className={st.domains__head__block}>
							<h3>{langData.proverit[language]}</h3>
							{langData.proverka[langData]}
							<form
								onSubmit={checkDomain}
								className={st.domains__head__block__input}
							>
								<div className={st.domains__head__block__input__block}>
									<span>www.</span>
									{langData.placeholder[language]}
									<span>.</span>
									<select>
										<option>uz</option>
										{/* <option>Все</option> */}
									</select>
								</div>
								{langData.button[language]}
							</form>
							{isDomainFree && (
								<p className={st.domains__head__block__text}>
									<strong>{domainName.current.value}.uz</strong>{" "}
									{isDomainFree === "yes" ? (
										<span className={st.domains__head__block__text__red}>
											{langData.tf[langData]}
										</span>
									) : (
										<>{langData.tf2[language]}</>
									)}
								</p>
							)}
							<div className={st.domains__head__block__table}>
								{langData.table[language]}
							</div>
						</div>
						{langData.content[language]}
					</div>
				</Container>
				<Partners language={language} />
			</div>
		</>
	)
}
