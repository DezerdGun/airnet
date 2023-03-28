import axios from "axios"
import { useEffect, useState } from "react"
import Container from "../container/index.jsx"
import st from "./regDomain.module.scss"

export default function RegDomain({ language }) {
	const langData = {
		title: {
			ru: "Зарегистрируем домен?",
			uz: "Domenni ro'yxatdan o'tkazamizmi?",
			en: "Shall we register a domain?",
		},
	}

	return (
		<div className={st.regDomain}>
			<Container title={langData.title[language]}>
				<RegDomainBlock language={language} />
			</Container>
		</div>
	)
}

export const RegDomainBlock = ({ language }) => {
	const langData = {
		inputPlaceholder: {
			ru: "Введите название домена например: airnet.uz",
			uz: "Domen nomini kiriting, masalan: airnet.uz",
			en: "Enter the domain name for example: airnet.uz",
		},
		check: {
			ru: "Проверить",
			uz: "Tekshirish",
			en: "Check",
		},
		domenBooked: {
			ru: "доменное имя в данное время недоступно для регистрации.",
			uz: "domen nomi hozirda ro‘yxatdan o‘tish uchun mavjud emas.",
			en: "domain name is currently unavailable for registration.",
		},
		domenFree: {
			ru: "доменное имя в данное время доступно для регистрации.",
			uz: "domen nomi hozirda ro'yxatdan o'tish uchun mavjud.",
			en: "domain name is currently available for registration.",
		},
		sumVg: {
			ru: "сум/год",
			uz: "so'm/yil",
			en: "sum/year",
		},
	}

	const [isDomainFree, setIsDomainFree] = useState({
			domain: "",
			isShow: false,
			isActive: false,
		}),
		[modal, setModal] = useState(false),
		[loading, setLoading] = useState(false)

	useEffect(() => {
		if (!modal) {
			document.body.style = "overflow:unset"
			return
		}

		document.body.style = "overflow:hidden"

		const outerClick = (event) => {
			const target = event.target
			if (!target.closest("#modalBlock")) {
				setModal(false)
			}
		}

		document.addEventListener("click", outerClick)

		return () => document.removeEventListener("click", outerClick)
	}, [modal])

	const checkDomain = (e) => {
		e.preventDefault()

		setLoading(true)
		let domain = document.querySelector("#domain").value

		if (!domain.includes(".uz")) {
			domain += ".uz"
			document.querySelector("#domain").value = domain
		}

		axios
			.post("https://api.airnet.uz/api/check/domain", {
				domain,
			})
			.then((res) => {
				setLoading(false)

				if (res.data.data?.dstatus !== "empty")
					setIsDomainFree({
						domain,
						isShow: true,
						isActive: true,
						data: res.data.data,
					})
				else setIsDomainFree({ domain, isShow: true, isActive: false })
			})
	}

	return (
		<>
			<form onSubmit={checkDomain} className={st.regDomain__block}>
				www.{" "}
				<input
					id="domain"
					placeholder={langData.inputPlaceholder[language]}
					required
				/>
				<button type="submit" disabled={loading}>
					{langData.check[language]}{" "}
					{loading && (
						<div
							class="spinner-border text-light spinner-border-sm"
							role="status"
						></div>
					)}
				</button>
			</form>

			{isDomainFree.isShow && (
				<p className={st.regDomain__text}>
					<strong>{isDomainFree.domain}</strong>{" "}
					{isDomainFree.isActive ? (
						<span className={st.regDomain__text__red}>
							{langData.domenBooked[language]}{" "}
							<span
								className={st.regDomain__text__red}
								style={{ textDecoration: "underline", cursor: "pointer" }}
								onClick={() => setModal(!modal)}
							>
								whois
							</span>
						</span>
					) : (
						<>
							<span className={st.regDomain__text__green}>
								{langData.domenFree[language]}
							</span>{" "}
							{language == "uz" ? (
								<>
									Buyurtma qilish uchun{" "}
									<a
										href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
									>
										Ushbu havolaga
									</a>{" "}
									bosing
								</>
							) : language == "en " ? (
								<>
									Click{" "}
									<a
										href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
									>
										To order
									</a>{" "}
									to register a domain name.
								</>
							) : (
								<>
									Нажмите{" "}
									<a
										href={`https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz&domain=${isDomainFree.domain}`}
									>
										Заказать
									</a>{" "}
									для регистрации доменного имени.
								</>
							)}
						</>
					)}
				</p>
			)}

			<p className={st.regDomain__price}>
				.UZ - 20.000 {langData.sumVg[language]}
			</p>
			<p className={st.regDomain__price}>
				.RU - 65.000 {langData.sumVg[language]}
			</p>
			<p className={st.regDomain__price}>
				.COM - 150.000 {langData.sumVg[language]}
			</p>
			<p className={st.regDomain__price}>
				.NET - 150.000 {langData.sumVg[language]}
			</p>
			<p className={st.regDomain__price}>
				.ORG - 200.000 {langData.sumVg[language]}
			</p>
			{/* <p className={st.regDomain__endText}>Домен в зоне UZ c хостингом - Бесплатно</p> */}

			<div className={`${st.modal} ${modal ? st.modal__active : ""}`}>
				<div id="modalBlock" className={st.modal__block}>
					<table>
						<tr>
							<th>dName</th>
							<td>{isDomainFree?.data?.dName}</td>
						</tr>
						<tr>
							<th>sRegistrator</th>
							<td>{isDomainFree?.data?.sRegistrator}</td>
						</tr>
						<tr>
							<th>dStatus</th>
							<td>{isDomainFree?.data?.dStatus}</td>
						</tr>
						<tr>
							<th>sNs1</th>
							<td>{isDomainFree?.data?.sNs1}</td>
						</tr>
						<tr>
							<th>sIp1</th>
							<td>{isDomainFree?.data?.sIp1}</td>
						</tr>
						<tr>
							<th>sNs2</th>
							<td>{isDomainFree?.data?.sNs2}</td>
						</tr>
						<tr>
							<th>sIp2</th>
							<td>{isDomainFree?.data?.sIp2}</td>
						</tr>
						<tr>
							<th>sNs3</th>
							<td>{isDomainFree?.data?.sNs3}</td>
						</tr>
						<tr>
							<th>sNs4</th>
							<td>{isDomainFree?.data?.sNs4}</td>
						</tr>
						<tr>
							<th>dActivated</th>
							<td>{isDomainFree?.data?.dActivated}</td>
						</tr>
						<tr>
							<th>dExpired</th>
							<td>{isDomainFree?.data?.dExpired}</td>
						</tr>
						<tr>
							<th>sOrg</th>
							<td>{isDomainFree?.data?.sOrg}</td>
						</tr>
						<tr>
							<th>sCustomerPost</th>
							<td>{isDomainFree?.data?.sCustomerPost}</td>
						</tr>
						<tr>
							<th>sCustomerCity</th>
							<td>{isDomainFree?.data?.sCustomerCity}</td>
						</tr>
						<tr>
							<th>sCustomerRegion</th>
							<td>{isDomainFree?.data?.sCustomerRegion}</td>
						</tr>
						<tr>
							<th>sCustomerCountry</th>
							<td>{isDomainFree?.data?.sCustomerCountry}</td>
						</tr>
						<tr>
							<th>sCustomerState</th>
							<td>{isDomainFree?.data?.sCustomerState}</td>
						</tr>
						{/* <tr>
							<th>sTechsOrgRU</th>
							<td>{isDomainFree?.data?.sTechsOrgRU}</td>
						</tr>
						<tr>
							<th>sTechsPost</th>
							<td>{isDomainFree?.data?.sTechsPost}</td>
						</tr>
						<tr>
							<th>sTechsCityRU</th>
							<td>{isDomainFree?.data?.sTechsCityRU}</td>
						</tr>
						<tr>
							<th>sTechsRegion</th>
							<td>{isDomainFree?.data?.sTechsRegion}</td>
						</tr>
						<tr>
							<th>sTechsCountryRU</th>
							<td>{isDomainFree?.data?.sTechsCountryRU}</td>
						</tr>
						<tr>
							<th>sTechsState</th>
							<td>{isDomainFree?.data?.sTechsState}</td>
						</tr>
						<tr>
							<th>sBillsOrgRU</th>
							<td>{isDomainFree?.data?.sBillsOrgRU}</td>
						</tr>
						<tr>
							<th>sBillsPost</th>
							<td>{isDomainFree?.data?.sBillsPost}</td>
						</tr>
						<tr>
							<th>sBillsCityRU</th>
							<td>{isDomainFree?.data?.sBillsCityRU}</td>
						</tr>
						<tr>
							<th>sBillsRegion</th>
							<td>{isDomainFree?.data?.sBillsRegion}</td>
						</tr>
						<tr>
							<th>sBillsCountryRU</th>
							<td>{isDomainFree?.data?.sBillsCountryRU}</td>
						</tr>
						<tr>
							<th>sBillsState</th>
							<td>{isDomainFree?.data?.sBillsState}</td>
						</tr>
						<tr>
							<th>rcode</th>
							<td>{isDomainFree?.data?.rcode}</td>
						</tr> */}
					</table>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					onClick={() => setModal(false)}
				>
					<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
				</svg>
			</div>
		</>
	)
}
