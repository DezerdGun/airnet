import Container from "../../components/container";
import Partners from "../../components/partners";
import st from "./domains.module.scss";
import Link from "next/dist/client/link";
import { useRef, useState } from "react";
import SEO from "../../components/seo";
import FAQ from "../../components/faq";
import WhyBlock from "../../components/whyBlock";
import RegDomain, { RegDomainBlock } from "../../components/regDomain";

const content = [
		{
			title: "Доверие",
			description:
				"Наши опытные сотрудники помогут подобрать подходящий домен для вашего бизнеса или стартап проекта.",
			img: "/",
		},
		{
			title: "Автопродление",
			description:
				"Настройте автопродление или продлевайте домен вручную — мы заранее предупредим вас об окончании срока.",
			img: "/",
		},
		{
			title: "Удобное управление",
			description:
				"Вы можете легко управлять доменами и другими нашими услугами в Личном кабинете.",
			img: "/",
		},
		{
			title: "Конфиденциальность",
			description:
				"Подключите функцию Privacy Protection, чтобы защитить ваши персональные данные от кражи.",
			img: "/",
		},
	],
	faq = [
		{
			title: "У меня уже есть домен, как разместить его на сервере?",
			description: (
				<>
					<p>
						Подписка позволяет автоматизировать процесс продления{" "}
						<span class="nobr">SSL-сертификата</span>
						и&nbsp;сэкономить при единовременной оплате. Вы&nbsp;можете оформить подписку на&nbsp;2,
						3, 4 года или 5 лет&nbsp;— чем больше срок, тем ниже цена сертификата.
					</p>
					<p>
						Каждый год, за&nbsp;2 недели до&nbsp;конца срока действия сертификата, система будет
						автоматически отправлять его на&nbsp;перевыпуск. Пройдя процедуру подтверждения,
						вы&nbsp;получите новый файл сертификата, который необходимо установить на&nbsp;сайте.
					</p>
					{/* <p>
					<a href="/technology/podpiska-na-ssl-sertifikat">Подробнее о&nbsp;подписке</a>.
				</p> */}
				</>
			),
		},
		{
			title: "Как продлить доменное имя?",
			description: <p></p>,
		},
		{
			title: "Как перевести домен на обслуживание к нам от другого регистратора?",
			description: <p></p>,
		},
		{
			title: "Как заказать свидетельство на домен?",
			description: <p></p>,
		},
	];

export default function Domains() {
	return (
		<>
			<SEO
				title="Регистрация домен UZ, Купить домен UZ | Хостинг TAS-IX в Ташкенте, Узбекистане"
				desc="Быстрая регистрация доменов, по самым низким ценам, в зоне uz"
			/>
			<Container headTitle="Регистрация доменного имени">
				<hr />
				<div className={st.domains__block}>
					<div className={st.domains__block__content}>
						<h2>Об услуге</h2>
						<p>Доменное имя — это уникальный адрес, по которому открывается сайт в интернете.</p>
						<p>
							У нас вы сможете подобрать красивое доменное имя по самым низким ценам, а ещё мы не
							повышаем стоимость домена при продлении.
						</p>
					</div>
					<div className={st.domains__block__img}>
						<img src="/domain/intro-img.png" />
					</div>
				</div>
			</Container>
			<div className={st.domains}>
				<div className={st.domains__head}>
					<Container
						headTitle="Регистрация домена в зоне UZ"
						clNTitle="mb-3"
						description={
							<p>
								Компания &quot;AIRNET&quot; является официальным{" "}
								<a href="https://cctld.uz/reg/">регистратором домен в зоне UZ</a>
							</p>
						}
					>
						<div className={st.domains__head__block}>
							{/* <h3>Введите название доменного имени и нажмите на кнопку &quot;Проверить&quot;.</h3> */}
							<div className={st.domains__head__block__item}>
								<RegDomainBlock />
							</div>

							<p>
								Перед регистрацией просим вас ознакомиться с{" "}
								<a href="https://cctld.uz/info/polru/">
									Положением о порядке регистрации и пользования доменными именами в домене «UZ»
								</a>
							</p>
							{/* <div className={st.domains__head__block__table}>
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
											<a href="https://billing.airnet.uz/billing.php?do=zones">Купить</a>
										</th>
									</tr>
								</table>
							</div> */}
						</div>
						{/* <p>
							Заказав у нас услугу хостинга или VDS/VPS, Вы также можете купить или перенести свой домен
							на нашу площадку. В случае надобности, мы Вам поможем - обращайтесь.
						</p>
						<p>* При регистрации хостинг с доменом</p>
						<p>
							** Redemption period - Домен получает данный статус после того, как истекли 7 рабочих дней
							после окончания срока регистрации. Домен переходит к Администрации домена UZ, при этом в
							течение 30 календарных дней предыдущий владелец может вернуть себе домен.
						</p> */}
					</Container>
				</div>
				<WhyBlock content={content} />
				<FAQ faq={faq} title="FAQ" />
				<Partners />
			</div>
		</>
	);
}
