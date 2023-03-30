import Container from "@/components/container"
import CustomTableBottom from "@/components/customTableBottom"
import Partners from "@/components/partners"
import SEO from "@/components/seo"
import TraficMaket from "@/components/traficMaket"
import Link from "next/link"
import st from "./vds/vds.module.scss"

const block = [
	{
		title: { ru: "Мгновенная активация", uz: "Darhol faollashtirish" },
		description: {
			ru: "Активация интернет-пакетов AirNet выполняется от 5 минуты до 2-х часов, в зависимости от количества заказов и наличия свободного оборудования.",
			uz: "AirNet Internet-paketlarini faollashtirish buyurtmalar soni va bepul jihozlar mavjudligiga qarab 5 daqiqadan 2 soatgacha davom etadi.",
		},

		img: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="0 0 512 512"
				style={{ enableBackground: "new 0 0 512 512" }}
			>
				<g>
					<g>
						<path d="M437.019,74.981C388.668,26.628,324.38,0,256,0S123.332,26.628,74.981,74.981S0,187.62,0,256    s26.628,132.668,74.981,181.019S187.62,512,256,512s132.668-26.628,181.019-74.981S512,324.38,512,256    S485.372,123.332,437.019,74.981z M425.291,425.291c-45.22,45.219-105.341,70.122-169.291,70.122s-124.071-24.903-169.291-70.122    C41.491,380.071,16.587,319.949,16.587,256S41.491,131.929,86.709,86.709C131.929,41.491,192.051,16.587,256,16.587    s124.071,24.903,169.291,70.122c45.219,45.22,70.122,105.341,70.122,169.291S470.509,380.071,425.291,425.291z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M329.603,366.896l-54.116-93.731c4.041-4.581,6.5-10.591,6.5-17.165c0-11.43-7.42-21.152-17.693-24.622v-90.384    c0-4.58-3.713-8.294-8.294-8.294c-4.58,0-8.294,3.713-8.294,8.294v90.384c-10.273,3.47-17.693,13.193-17.693,24.622    c0,14.329,11.658,25.987,25.987,25.987c1.756,0,3.472-0.177,5.132-0.511l54.106,93.714c1.536,2.661,4.324,4.148,7.19,4.148    c1.407,0,2.833-0.358,4.139-1.112C330.534,375.935,331.893,370.863,329.603,366.896z M256,265.4c-5.183,0-9.4-4.216-9.4-9.4    s4.217-9.4,9.4-9.4s9.4,4.217,9.4,9.4S261.183,265.4,256,265.4z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M256,35.387C134.353,35.387,35.387,134.353,35.387,256S134.353,476.613,256,476.613S476.613,377.647,476.613,256    S377.647,35.387,256,35.387z M256,460.026c-112.501,0-204.026-91.525-204.026-204.026S143.499,51.974,256,51.974    S460.026,143.499,460.026,256S368.501,460.026,256,460.026z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M105.607,247.706h-26.54c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294h26.54    c4.58,0,8.294-3.713,8.294-8.294C113.901,251.42,110.187,247.706,105.607,247.706z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M432.933,247.706h-26.54c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294h26.54    c4.58,0,8.294-3.713,8.294-8.294C441.227,251.42,437.513,247.706,432.933,247.706z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M256,70.773c-4.58,0-8.294,3.713-8.294,8.294v26.54c0,4.58,3.713,8.294,8.294,8.294c4.58,0,8.294-3.713,8.294-8.294    v-26.54C264.294,74.487,260.58,70.773,256,70.773z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M256,398.099c-4.58,0-8.294,3.713-8.294,8.294v26.54c0,4.58,3.713,8.294,8.294,8.294c4.58,0,8.294-3.713,8.294-8.294    v-26.54C264.294,401.813,260.58,398.099,256,398.099z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M176.104,394.385c-3.967-2.292-9.039-0.931-11.329,3.036l-4.423,7.661c-2.29,3.967-0.931,9.039,3.036,11.329    c1.306,0.754,2.732,1.112,4.139,1.112c2.866,0,5.654-1.488,7.19-4.148l4.423-7.661    C181.429,401.746,180.07,396.674,176.104,394.385z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M348.613,95.589c-3.968-2.291-9.039-0.931-11.329,3.036l-4.423,7.661c-2.29,3.967-0.931,9.039,3.035,11.329    c1.306,0.754,2.733,1.112,4.139,1.112c2.866,0,5.654-1.488,7.19-4.148l4.423-7.661C353.939,102.952,352.58,97.879,348.613,95.589z    " />
					</g>
				</g>
				<g>
					<g>
						<path d="M114.58,164.774l-7.661-4.423c-3.967-2.292-9.039-0.931-11.329,3.036s-0.931,9.039,3.036,11.329l7.661,4.423    c1.306,0.754,2.732,1.112,4.139,1.112c2.866,0,5.654-1.488,7.19-4.148C119.906,172.137,118.547,167.065,114.58,164.774z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M413.375,337.284l-7.661-4.423c-3.968-2.29-9.039-0.931-11.329,3.035s-0.931,9.039,3.036,11.329l7.661,4.423    c1.306,0.754,2.733,1.112,4.139,1.112c2.866,0,5.654-1.488,7.19-4.148C418.701,344.647,417.342,339.574,413.375,337.284z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M351.649,405.082l-4.423-7.661c-2.29-3.968-7.363-5.327-11.329-3.036c-3.967,2.29-5.326,7.363-3.035,11.329l4.423,7.661    c1.536,2.661,4.324,4.148,7.19,4.148c1.407,0,2.833-0.358,4.139-1.112C352.58,414.121,353.939,409.048,351.649,405.082z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M179.139,106.286l-4.423-7.661c-2.29-3.968-7.363-5.327-11.329-3.036c-3.967,2.29-5.326,7.363-3.036,11.329l4.423,7.661    c1.536,2.661,4.324,4.148,7.19,4.148c1.407,0,2.833-0.358,4.139-1.112C180.07,115.325,181.429,110.253,179.139,106.286z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M416.411,163.387c-2.29-3.968-7.363-5.327-11.329-3.035l-7.661,4.423c-3.967,2.29-5.326,7.363-3.035,11.329    c1.536,2.661,4.324,4.148,7.19,4.148c1.407,0,2.833-0.358,4.139-1.112l7.661-4.423    C417.342,172.426,418.701,167.353,416.411,163.387z" />
					</g>
				</g>
				<g>
					<g>
						<path d="M117.615,335.896c-2.29-3.968-7.363-5.326-11.329-3.035l-7.661,4.423c-3.967,2.29-5.326,7.363-3.036,11.329    c1.536,2.661,4.324,4.148,7.19,4.148c1.407,0,2.833-0.358,4.139-1.112l7.661-4.423    C118.546,344.935,119.905,339.863,117.615,335.896z" />
					</g>
				</g>
			</svg>
		),
		link: "/",
		linkTitle: "Стать клиентом и заказать трафик",
	},
	{
		title: {
			ru: "Вернем вам деньги, если что",
			uz: "Nma bolishidan qatiy nazar mablagni qaytaramiz",
		},
		description: {
			ru: "Хотите убедиться, что все работает как нужно? Не волнуйтесь, для этого есть целых 30 дней. Если в течение этого времени Вы решите, что хотите отказаться от наших услуг, мы вернем Вам все неиспользованные средства.",
			uz: "Hammasi kerakli darajada ishlashiga ishonch hosil qilishni xohlaysizmi? Xavotir olmang, buni amalga oshirish uchun sizda 30 kun bor. Agar shu vaqt ichida siz xizmatlarimizni toʻxtatmoqchi boʻlsangiz, foydalanilmagan mablagʻlaringizni qaytarib beramiz.",
		},

		img: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="0 0 496.2 496.2"
				style={{ enableBackground: "new 0 0 496.2 496.2" }}
			>
				<path
					style={{ fill: "#006a4d" }}
					d="M496.2,248.1C496.2,111.1,385.1,0,248.1,0S0,111.1,0,248.1s111.1,248.1,248.1,248.1  S496.2,385.1,496.2,248.1z"
				/>

				<g>
					<path
						style={{ fill: "#fff" }}
						d="M372.1,326.4c0,68.5-55.5,87.7-124,87.7s-124-19.3-124-87.7c0-68.5,55.5-160.2,124-160.2   S372.1,258,372.1,326.4z"
					/>
					<polygon
						style={{ fill: "#fff" }}
						points="245.3,161.9 248.8,161.9 265.5,161.9 305.5,112 305.5,92.9 277.9,92.9 277.9,82 248.8,82    245.3,82 216.2,82 216.2,92.9 188.6,92.9 188.6,112 228.6,161.9  "
					/>
				</g>
				<g>
					<polygon
						style={{ fill: "#006a4d" }}
						points="277.9,92.9 251.9,156.9 293.9,92.9  "
					/>
					<polygon
						style={{ fill: "#006a4d" }}
						points="216.2,92.9 242.4,156.9 200.4,92.9  "
					/>
					<polygon
						style={{ fill: "#006a4d" }}
						points="228.9,194 245.7,176.5 218.5,194  "
					/>
					<polygon
						style={{ fill: "#006a4d" }}
						points="268.6,194 251.8,176.5 278.9,194  "
					/>
					<path
						style={{ fill: "#006a4d" }}
						d="M271.7,166.9c0,3-2.4,5.4-5.4,5.4h-37.2c-3,0-5.4-2.4-5.4-5.4l0,0c0-3,2.4-5.4,5.4-5.4h37.2   C269.3,161.5,271.7,163.9,271.7,166.9L271.7,166.9z"
					/>
					<polygon
						style={{ fill: "#006a4d" }}
						points="243.1,82 251.9,82 246.9,154.3  "
					/>
					<path
						style={{ fill: "#006a4d" }}
						d="M293.3,260.9c0,8.6-9.8,14.8-10.4,14c-7.3-8.5-19.8-14.8-32.5-14.8c-12.9,0-20.8,5.8-20.8,14.4   c0,10,10.6,12.7,25.4,16c17.7,3.8,40.9,11,40.9,36.1c0,19.4-13.5,32.9-36,36.3v7.5c0,8.8-3.5,13.1-11.1,13.1h-1   c-8.1,0-11-4-11-13.1v-7.1c-23.3-2.5-36.5-13.1-36.5-23.8c0-8.3,9.2-14.2,10-13.5c7.3,8.8,21.5,16.1,36.5,16.1   c13.7,0,21.5-5.8,21.5-14.4c0-10.6-11.9-13.5-26-16.7c-16.9-3.7-39.2-10.4-39.2-35.8c0-18.5,13.1-31.7,33.8-35.6v-7.1   c0-8.8,3.3-13.1,11-13.1h1.2c7.9,0,11,4,11,13.1v6.5C281.6,241.4,293.3,251,293.3,260.9z"
					/>
				</g>
			</svg>
		),
	},
	{
		title: { ru: "Поддержка круглосуточно", uz: "Qollab quvatlash 24/7" },
		description: {
			ru: "В любое время суток, Вы можете к нам обратиться за помощью или советом, мы ответим максимально быстро.",
			uz: "Kunning istalgan vaqtida yordam yoki maslahat uchun biz bilan bog'lanishingiz mumkin, biz imkon qadar tezroq javob beramiz.",
		},

		img: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				x="0px"
				y="0px"
				width="422.491px"
				height="422.491px"
				viewBox="0 0 422.491 422.491"
				style={{ enableBackground: "new 0 0 422.491 422.491" }}
			>
				<g>
					<g>
						<g>
							<path
								style={{ fill: "#006a4d" }}
								d="M338.594,289.207c-36.805,0-66.641,29.836-66.641,66.641c0,36.808,29.836,66.644,66.641,66.644     c36.807,0,66.643-29.836,66.643-66.644C405.235,319.043,375.399,289.207,338.594,289.207z M381.889,388.121l-10.424,10.423     c-0.855,0.858-2.252,0.858-3.108,0l-20.532-20.533l-0.779,0.777c-0.858,0.858-2.25,0.858-3.108,0l-4.979-4.979     c-0.856-0.857-0.856-2.251,0-3.109l5.104-5.104l-4.543-4.544l-11.429,11.432c2.123,6.051,0.771,13.062-4.059,17.892     c-3.271,3.27-7.615,5.059-12.24,5.04c-0.396-0.003-0.771-0.163-1.037-0.435c-0.135-0.137-0.246-0.298-0.321-0.48     c-0.228-0.551-0.101-1.187,0.321-1.606l4.799-4.802l-2.866-10.707l-10.706-2.868l-4.803,4.802     c-0.422,0.422-1.057,0.549-1.605,0.319c-0.551-0.227-0.912-0.764-0.914-1.357c-0.021-4.624,1.771-8.972,5.037-12.239     c4.832-4.829,11.842-6.183,17.895-4.058l11.429-11.431l-15.086-15.084l-10.685-6.877l-4.766-8.412l5.041-5.039l8.409,4.767     l6.879,10.684l15.084,15.084l10.229-10.229c-2.123-6.052-0.771-13.063,4.06-17.894c3.271-3.269,7.614-5.058,12.239-5.039     c0.597,0.004,1.132,0.362,1.359,0.914c0.227,0.554,0.1,1.188-0.322,1.607l-4.801,4.801l2.869,10.708l10.707,2.868l4.803-4.801     c0.42-0.423,1.055-0.55,1.604-0.321c0.551,0.228,0.91,0.763,0.914,1.357c0.021,4.625-1.771,8.972-5.036,12.24     c-4.832,4.829-11.843,6.184-17.896,4.06l-10.229,10.229l4.541,4.544l5.104-5.104c0.859-0.859,2.252-0.859,3.111,0l4.977,4.977     c0.859,0.859,0.859,2.253,0,3.111l-0.776,0.776l20.532,20.532C382.749,385.869,382.749,387.262,381.889,388.121z"
							/>
							<path
								style={{ fill: "#006a4d" }}
								d="M303.637,280.498l-40.977-16.338l-19.881-16.748c-5.25-4.438-13.004-4.109-17.873,0.731l-27.639,27.48l-27.717-27.492     c-4.873-4.832-12.617-5.145-17.863-0.722l-19.879,16.748l-84.894,33.854c-27.336,10.886-27.314,107.693-29.66,116.579h261.183     c-15.414-14.857-25.032-35.692-25.032-58.745C253.403,321.956,274.167,292.829,303.637,280.498z"
							/>
							<path
								style={{ fill: "#006a4d" }}
								d="M100.042,160.169l15.943-0.04c9.848,51.453,44.795,80.728,81.27,80.728c36.475,0,57.666-17.339,71.719-49.293     c-10.729,8.416-26.324,16.114-48.135,17.704c-2.004,2.985-5.41,4.951-9.277,4.951h-10.188c-6.168,0-11.166-4.999-11.166-11.167     s4.998-11.167,11.166-11.167h10.188c3.613,0,6.814,1.723,8.855,4.383c35.068-2.815,51.559-24.083,58.135-36.091l15.916-0.006     c9.746,0,17.646-7.903,17.646-17.646v-39.996c0-6.246-3.254-11.723-8.152-14.859C298.067,38.434,252.464,0,197.255,0     S96.444,38.434,90.55,87.668c-4.898,3.137-8.152,8.613-8.152,14.859v39.996C82.396,152.265,90.295,160.169,100.042,160.169z      M197.254,19.999c43.453,0,79.592,28.656,86.254,66.041c-2.082,0.791-3.971,1.959-5.59,3.429     c-10.406-32.855-40.471-52.385-80.664-52.385c-40.193,0-70.275,19.519-80.695,52.357c-1.611-1.456-3.49-2.616-5.559-3.401     C117.663,48.655,153.801,19.999,197.254,19.999z"
							/>
						</g>
					</g>
				</g>
			</svg>
		),
		// link: LINKS.CONTACTS,
		// linkTitle: "Наши контакты",
	},
]

export default function Net({ language }) {
	const langData = {
		seoT: {
			ru: "Интернет пакеты | Airnet",
			uz: "Internet hizmati | Airnet",
		},
		descT: {
			ru: "Подключение интернет пакетов в сети TAS-IX в Ташкенте по самым низким ценам в Узбекистане",
			uz: "Toshkent shahridagi TAS-IX tarmog‘iga Internet-paketlarni O‘zbekistonda eng arzon narxlarda ulash",
		},
		table: {
			ru: (
				<>
					<TraficMaket
						headTitle="AIRNET — Unlim интернет"
						endText="1 Скорость от оператора до АТС, 2 Скорость от оператора до АТС трафик не тарифицируется, 3 Внутренние ресурсы не тарифицируются и скорость TAS-IX от абонента, 4 Скорость доступа в сеть интернет снижается до указанный в выбранных тарифных планах."
						bgImg="/servers-3.jpg"
						table={[
							<table key="table-1">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 1»</th>
								</tr>
								<tr>
									<td>Объем трафика</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Скорость<sup>1</sup>
									</td>
									<td>5 Мбит/с</td>
								</tr>
								<tr>
									<td>
										Требуемая скорость TAS-IX<sup>2</sup>
									</td>
									<td>10 Мбит/с</td>
								</tr>
								<tr>
									<td className="bg-green">При превышении порога трафика</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="200 000 сум/мес."
											link="/"
											text="Заказать трафик"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-2">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 2»</th>
								</tr>
								<tr>
									<td>Объем трафика</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Скорость<sup>1</sup>
									</td>
									<td>10 Мбит/с</td>
								</tr>
								<tr>
									<td>
										Требуемая скорость TAS-IX<sup>2</sup>
									</td>
									<td>15 Мбит/с</td>
								</tr>
								<tr>
									<td className="bg-green">
										При превышении порога трафика<sup>4</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="350 000 сум/мес."
											link="/"
											text="Заказать трафик"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-3">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 3»</th>
								</tr>
								<tr>
									<td>Объем трафика</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Скорость<sup>1</sup>
									</td>
									<td>15 Мбит/с</td>
								</tr>
								<tr>
									<td>
										Требуемая скорость TAS-IX<sup>2</sup>
									</td>
									<td>20 Мбит/с</td>
								</tr>
								<tr>
									<td className="bg-green">
										При превышении порога трафика<sup>4</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="500 000 сум/мес."
											link="/"
											text="Заказать трафик"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-4">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 4»</th>
								</tr>
								<tr>
									<td>Объем трафика</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Скорость<sup>1</sup>
									</td>
									<td>20 Мбит/с</td>
								</tr>
								<tr>
									<td>
										Требуемая скорость TAS-IX<sup>2</sup>
									</td>
									<td>25 Мбит/с</td>
								</tr>
								<tr>
									<td className="bg-green">
										При превышении порога трафика<sup>4</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="650 000 сум/мес."
											link="/"
											text="Заказать трафик"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-5">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 5»</th>
								</tr>
								<tr>
									<td>Объем трафика</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Скорость<sup>1</sup>
									</td>
									<td>25 Мбит/с</td>
								</tr>
								<tr>
									<td>
										Требуемая скорость TAS-IX<sup>2</sup>
									</td>
									<td>30 Мбит/с</td>
								</tr>
								<tr>
									<td className="bg-green">
										При превышении порога трафика<sup>4</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="800 000 сум/мес."
											link="/"
											text="Заказать трафик"
										/>
									</td>
								</tr>
							</table>,
						]}
						className="mt-0"
					/>
				</>
			),
			uz: (
				<>
					<TraficMaket
						headTitle="AIRNET — Unlim internet"
						endText="1 Operatordan ATSgacha bo'lgan tezlik, 2 Operatordan ATS trafigiga tezlik olinmaydi, 3 Ichki resurslar to'lanmaydi va abonentdan TAS-IX tezligi, 4 Internetga kirish tezligi tanlangan tarif rejalarida ko'rsatilganiga kamaytiriladi."
						bgImg="/servers-3.jpg"
						table={[
							<table key="table-1">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 1»</th>
								</tr>
								<tr>
									<td>Tarif hajmi</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Tezlik<sup>1</sup>
									</td>
									<td>5 mb/s</td>
								</tr>
								<tr>
									<td>
										Qoniqarli tezlik TAS-IX<sup>2</sup>
									</td>
									<td>10 mb/s</td>
								</tr>
								<tr>
									<td className="bg-green">
										Trafik chegarasi oshib ketganda<sup>1</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="200 000 som/oy."
											link="/"
											text="Trafik buyurtma berish"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-2">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 2»</th>
								</tr>
								<tr>
									<td>Tarif hajmi </td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Tezlik<sup>2</sup>
									</td>
									<td>10 mb/s</td>
								</tr>
								<tr>
									<td>
										Qoniqarli tezlik TAS-IX<sup>2</sup>
									</td>
									<td>15 mb/s</td>
								</tr>
								<tr>
									<td className="bg-green">
										Trafik chegarasi oshib ketganda<sup>2</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="350 000 som/oy."
											link="/"
											text="Trafik buyurtma berish"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-3">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 3»</th>
								</tr>
								<tr>
									<td>Trafik hajmi</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Tezlik<sup>3</sup>
									</td>
									<td>15 mb/s</td>
								</tr>
								<tr>
									<td>
										Qoniqarli tezlik TAS-IX<sup>2</sup>
									</td>
									<td>20 mb/s</td>
								</tr>
								<tr>
									<td className="bg-green">
										Trafik chegarasi oshib ketganda<sup>3</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="500 000 som/oy."
											link="/"
											text="Trafik buyurtma berish "
										/>
									</td>
								</tr>
							</table>,
							<table key="table-4">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 4»</th>
								</tr>
								<tr>
									<td>Trafik hajmi</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Tezlik<sup>4</sup>
									</td>
									<td>20 mb/s</td>
								</tr>
								<tr>
									<td>
										Qoniqarli tezlik TAS-IX<sup>2</sup>
									</td>
									<td>25 mb/s</td>
								</tr>
								<tr>
									<td className="bg-green">
										Trafik chegarsi oshib ketganda<sup>4</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="650 000 som/oy."
											link="/"
											text="Trafik buyurtma berish"
										/>
									</td>
								</tr>
							</table>,
							<table key="table-5">
								<tr>
									<th colSpan={2}>AIRNET «Unlim 5»</th>
								</tr>
								<tr>
									<td>Trafik hajmi</td>
									<td>ထ</td>
								</tr>
								<tr>
									<td>
										Tezlik<sup>5</sup>
									</td>
									<td>25 mb/s</td>
								</tr>
								<tr>
									<td>
										Qoniqarli tezlik TAS-IX<sup>2</sup>
									</td>
									<td>30 mb/s</td>
								</tr>
								<tr>
									<td className="bg-green">
										Trafik chegarasi oshib ketganda<sup>5</sup>
									</td>
									<td className="bg-green">ထ</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<CustomTableBottom
											price="800 000 som/oy."
											link="/"
											text="Trafik buyurtma berish"
										/>
									</td>
								</tr>
							</table>,
						]}
						className="mt-0"
					/>
				</>
			),
		},
	}
	return (
		<>
			<SEO title={langData.seoT[language]} desc={langData.descT[language]} />
			<div className={st.vds}>
				{langData.table[language]}
				<Container>
					<div className={st.vds__block}>
						{
							block.map((item) => (
								<div key={item.title} className={st.vds__block__item}>
									<div className={st.vds__block__item__img}>{item.img}</div>
									<h6>{item.title}</h6>
									<p>{item.description}</p>
									{item.link ? (
										<button>
											<Link href={item.link}>
												<a>{item.linkTitle}</a>
											</Link>
										</button>
									) : null}
								</div>
							))[language]
						}
					</div>
				</Container>
				<Partners language={language} />
			</div>
		</>
	)
}
