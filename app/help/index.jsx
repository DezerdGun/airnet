import Image from 'next/image';
import Link from 'next/link';
import st from './help.module.scss';
import HelpItem from '../../components/helpItem';
import SEO from '../../components/seo';

const data = [
		{
			title: 'Общие вопросы',
			children: [
				{
					title: 'Правила оказания услуг и ограничения',
					link: '#',
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
	mainData = {
		headTitle: 'База знаний',
		content: data,
		faq: [
			{
				title: 'Как пополнить баланс в биллинг системе?',
				description: (
					<>
						<p>
							Чтобы пополнить баланс зайдите в биллинг систему, кликните на ваш баланс (правая графа
							сверху)
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
		],
	};

export default function Help() {
	return (
		<>
			<SEO
				title="База знаний | Airnet"
				desc="Ответы на часто задаваемые вопросы, вы можете найти ответы на интересующие вопросы по хостингу, домену и VDS серверам от AIRNET"
			/>
			<div className={st.help}>
				<HelpItem data={mainData} />
			</div>
		</>
	);
}
