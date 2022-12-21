import Container from "../container";
import { LINKS } from "../requirements";
import st from "./sitepad.module.scss";
import Link from "next/dist/client/link";

export default function Sitepad({ language }) {
	const content = ["/art-const-1.jpg", "/art-const-2.jpg", "/art-const-3.jpg", "/art-const-4.jpg"];

	const langData = {
		title: {
			ru: "Бесплатный конструктор сайтов от SitePad",
			uz: "SitePad tomonidan bepul veb-sayt yaratuvchisi",
		},
		desc: {
			ru: (
				<p>
					Для того чтобы воспользоваться конструктором сайта где более 750 разных тем, вам
					необходимо{" "}
					<Link href={LINKS.HOSTING}>
						<a className="text-red">заказать любой хостинг</a>
					</Link>{" "}
					на тарифных планах Cpanel.
				</p>
			),
			uz: (
				<p>
					750 dan ortiq turli mavzular bilan veb-sayt quruvchisidan foydalanish uchun siz zarur{" "}
					<Link href={LINKS.HOSTING}>
						<a className="text-red">har qanday xostingga buyurtma bering</a>
					</Link>{" "}
					Cpanel tarif rejalarida.
				</p>
			),
		},
		text: {
			ru: (
				<>
					После оплаты за услугу хостинг, вы получите доступы к панели управления Cpanel по
					эл.почте.
					<br />
					Внутри Cpanel вы сможете создавать профессиональный сайт с помощью конструктора, без
					навыков программирования.
				</>
			),
			uz: (
				<>
					Xosting xizmati uchun to'lovni amalga oshirganingizdan so'ng, siz Cpanel boshqaruv
					paneliga kirish huquqiga ega bo'lasiz elektron pochta.
					<br />
					Cpanel ichida siz veb-sayt yaratuvchisi yordamida professional veb-sayt yaratishingiz
					mumkin dasturlash qobiliyatlari.
				</>
			),
		},
		buy: {
			ru: "Купить хостинг",
			uz: "Xosting sotib olish",
		},
		instruct: {
			ru: "Краткая инструкция по созданию сайта через конструктор",
			uz: "Konstruktor orqali sayt yaratish bo'yicha qisqacha ko'rsatmalar",
		},
	};

	return (
		<div className={st.sitepad}>
			<Container title={langData.title[language]} description={langData.desc[language]}>
				<div className={st.sitepad__img}>
					{content.map((item) => (
						<img key={item} src={item} />
					))}
				</div>
				<p>{langData.text[language]}</p>
				<div className={st.sitepad__button}>
					<button>
						<Link href={LINKS.HOSTING}>
							<a>{langData.buy[language]}</a>
						</Link>
					</button>
					<button>
						<Link href={LINKS.SITEPAD}>
							<a>{langData.instruct[language]}</a>
						</Link>
					</button>
				</div>
			</Container>
		</div>
	);
}
