import FAQ from '../../components/faq';
import Partners from '../../components/partners';
import Image from 'next/image';
import Link from 'next/link';
import st from './help.module.scss';
import Container from '../../components/container';
import { useEffect } from 'react';

const data = [
		{
			title: 'Общие вопросы',
			children: [
				{
					title: 'Правила оказания услуг и ограничения',
				},
			],
		},
		{
			title: 'Технические вопросы',
			link: '/help/site',
			children: [
				{
					id: 'site',
					title: 'Сайт',
					children: [
						{
							title: 'Файл .htaccess',
							link: '/help/site/file-htaccess',
						},
					],
				},
				// {
				// 	title: 'Базы данных',
				// 	children: [
				// 		{
				// 			title: '',
				// 			link: '',
				// 		},
				// 	],
				// },
				{
					id: 'mail',
					title: 'Почта',
					link: '/help/mail',
					children: [
						{
							title: 'Почта для домена',
							link: '/help/mail/pochta-dlya-domena',
						},
					],
				},
				// {
				// 	title: 'Безопасность',
				// 	children: [
				// 		{
				// 			title: '',
				// 			link: '',
				// 		},
				// 	],
				// },
				{
					id: 'cms',
					title: 'CMS',
					link: '/help/cms',
					children: [
						{
							title: 'Что такое CMS',
							link: '/help/cms/chto-takoe-cms',
						},
					],
				},
				{
					id: 'ftp',
					title: 'FTP',
					link: '/help/ftp',
					children: [
						{
							title: 'Что такое FTP',
							link: '/help/ftp/chto-takoe-ftp',
						},
					],
				},
				// {
				// 	title: 'Скрипты',
				// 	children: [
				// 		{
				// 			title: '',
				// 			link: '',
				// 		},
				// 	],
				// },
			],
		},
		{
			title: 'Хостинг',
			link: '/help/hosting',
			children: [
				{
					id: 'hosting',
					title: 'Общая информация',
					children: [
						{
							title: 'Как перенести сайт на хостинг AIRNET?',
							link: '/help/hosting/kak-perenesti-sajt-na-hosting-airnet',
						},
					],
				},
			],
		},
		{
			title: 'Домены',
			link: '/help/domain',
			children: [
				{
					id: 'domain',
					title: 'Регистрация/продление доменов',
					children: [
						{
							title: 'Наши DNS-записи',
							link: '/help/domain/dns',
						},
						{
							title: 'Как зарегистрировать домен?',
							link: '/help/domain/kak-zaregistrirovat-domen',
						},
						{
							title: 'Рекомендации по выбору доменного имени',
							link: '/help/domain/rekomendaczii-po-vyboru-domennogo-imeni',
						},
						{
							title: 'Нужно ли вводить данные паспорта для регистрации?',
							link: '/help/domain/nuzhno-li-vvodit-dannye-pasporta-dlya-registraczii',
						},
					],
				},
			],
		},
		{
			title: 'VDS',
			link: '/help/vds',
			children: [
				{
					id: 'vds',
					title: 'Общая информация',
					children: [
						{
							title: 'Необходимые навыки для работы с VDS',
							link: '/help/vds/neobhodimye-navyki-dlya-raboty-s-vds',
						},
						{
							title: 'Смена тарифного плана на VDS',
							link: '/help/vds/smena-tarifnogo-plana-na-vds',
						},
						{
							title: 'Как долго хранятся учётные записи VDS?',
							link: '/help/vds/kak-dolgo-hranyatsya-uchyotnye-zapisi-vds',
						},
						{
							title: 'Восстановление root пароля от VDS',
							link: '/help/vds/vosstanovlenie-root-parolya-ot-vds',
						},
						{
							title: 'Перенос аккаунта на VDS',
							link: '/help/vds/perenos-akkaunta-na-vds',
						},
						{
							title: 'Преимущества VDS и VPS-серверов',
							link: '/help/vds/preimushhestva-vds-i-vps-serverov',
						},
					],
				},
			],
		},
		{
			title: 'SSl-сертификаты',
			link: '/help/ssl',
			children: [
				{
					id: 'ssl',
					title: 'Общая информация',
					children: [
						{
							title: 'Зачем нужен SSl-сертификат',
							link: '/help/ssl/zachem-nuzhen-ssl-sertifikat',
						},
					],
				},
			],
		},
	],
	chevron = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
		</svg>
	),
	faq = [
		{
			title: 'Как пополнить баланс в биллинг системе?',
			description: (
				<>
					<p>
						Чтобы пополнить баланс зайдите в биллинг систему, кликните на ваш баланс (правая графа сверху)
					</p>
					<Image src="/help/balance.jpg" width={1160} height={511} blurDataURL placeholder="blur" />
				</>
			),
		},
		{
			title: 'Как изменить личные данные в биллинг системе?',
			description: (
				<>
					<p>Как изменить личные данные в биллинг системе?</p>
					<Image src="/help/profile.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
				</>
			),
		},
		{
			title: 'В настройках можно изменить язык панели.',
			description: (
				<>
					<p>Для выбора вам предоставляется 6 языков</p>
					<Image src="/help/lang.jpg" width={1160} height={422} blurDataURL placeholder="blur" />
				</>
			),
		},
		{
			title: 'Где я могу увидеть SSL- сертификат?',
			description: (
				<>
					<p>SSL сертификат можно увидеть в графе «товары»</p>
					<Image src="/help/ssl.jpg" width={1160} height={592} blurDataURL placeholder="blur" />
				</>
			),
		},
		{
			title: 'Как ознакомится с тарифными планами VDS/VPS',
			description: (
				<>
					<p>C тарифными планами можно также ознакомится и приобрести в биллинг системе.</p>
					<Image src="/help/tarif.jpg" width={1160} height={563} blurDataURL placeholder="blur" />
				</>
			),
		},
	];

export default function Help() {
	const active = (i) => {
		document.querySelector(`#${i}`).classList.toggle(st.help__block__content__active);
		document.querySelector(`#${i}Collapse`).classList.toggle(st.help__block__collapse__active);
	};

	return (
		<>
			<Container headTitle="База знаний">
				<div className={st.help}>
					<div className={st.help__block}>
						<ul>
							{data.map((item, i) => (
								<li>
									<h2>
										{i + 1}.{' '}
										{item.link ? (
											<Link href={item.link}>
												<a>{item.title}</a>
											</Link>
										) : (
											item.title
										)}
									</h2>
									<ul>
										{item.children.map((item, j) => (
											<li>
												<h3>
													{item?.children && (
														<span
															id={`${item.id}Collapse`}
															className={st.help__block__collapse}
															onClick={() => active(item.id)}>
															{chevron}
														</span>
													)}
													{item.link ? (
														<Link href={item.link}>
															<a>{item.title}</a>
														</Link>
													) : (
														item.title
													)}
												</h3>
												{item?.children && (
													<ol id={item.id} className={st.help__block__content}>
														{item.children.map((item) => (
															<li>
																<Link href={item.link}>
																	<a>{item.title}</a>
																</Link>
															</li>
														))}
													</ol>
												)}
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
			<FAQ faq={faq} title="НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ" />
			<Partners />
		</>
	);
}
