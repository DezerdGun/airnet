import Container from '../container';
import st from './header.module.scss';
import Image from 'next/image';
import { LINKS } from '../requirements';
import Link from 'next/link';
import { useState } from 'react';
import HeaderMob from './headerMob';

export default function Header() {
	const menu = [
			{
				title: 'Хостинг',
				link: LINKS.HOSTING,
			},

			{
				title: 'Серверы',
				link: LINKS.SERVERS,
			},
			{
				title: 'VPS и VDS серверы',
				link: LINKS.VPS_VDS,
				children: [
					{
						title: 'Бюджетные серверы',
						link: LINKS.CHEAP_VDS,
					},
					{
						title: 'Оптимальные серверы',
						link: LINKS.OPTIMAL_VDS,
					},
					{
						title: 'Высокопроизводительные серверы',
						link: LINKS.BIG_VDS,
					},
				],
			},
			{
				title: 'Домены',
				link: LINKS.DOMAINS,
			},
			{
				title: 'SSL',
				link: LINKS.SSL,
			},
			{
				title: 'Лицензии',
				link: LINKS.LICENSE,
			},

			{
				title: 'О сервисе',
				link: LINKS.ABOUT,
				className: 'sec',
				children: [
					{
						title: 'Администрирование',
						link: LINKS.ADMINISTRATION,
					},
					{
						title: 'Реселлинг',
						link: LINKS.RESELLING,
					},
					{
						title: 'Блог',
						link: LINKS.BLOG,
					},
					{
						title: 'Акции',
						link: LINKS.STOCK,
					},
					{
						title: 'FAQ',
						link: LINKS.FAQ,
					},
					{
						title: 'Оплата',
						link: LINKS.PAYMENT,
					},
					{
						title: 'Поддержка',
						link: LINKS.SUPPORT,
					},
					{
						title: '+998(71) 200-87-00',
						link: LINKS.PHONE,
					},
					{
						title: '+998(90) 324-30-80 (телеграм)',
						link: LINKS.TELEGRAM,
					},
				],
			},
		],
		burger = [
			{
				title: 'О сервисе',
				link: LINKS.ABOUT,
			},
			{
				title: 'Блог',
				link: LINKS.BLOG,
			},
			{
				title: 'Акции',
				link: LINKS.STOCK,
			},
			{
				title: 'FAQ',
				link: LINKS.FAQ,
			},
			{
				title: 'Оплата',
				link: LINKS.PAYMENT,
			},
			{
				title: 'Поддержка',
				link: LINKS.SUPPORT,
			},
			{
				title: '+998(71) 200-87-00',
				link: LINKS.PHONE,
			},
			{
				title: '+998(90) 324-30-80 (телеграм)',
				link: LINKS.TELEGRAM,
			},
		],
		[isOpen, setIsOpen] = useState(false);

	return (
		<div className={st.header}>
			<Container className="py-0">
				<div className={st.header__main}>
					<div className={st.header__main__logo}>
						<Link href={LINKS.HOME}>
							<a>
								<svg
									version="1.1"
									id="Layer_1"
									x="0px"
									y="0px"
									width="512px"
									height="250px"
									viewBox="0 0 512 250"
									enable-background="new 0 0 512 250">
									{' '}
									<image
										id="image0"
										width="512"
										height="250"
										x="0"
										y="0"
										href="data:image/png;base64,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
AAAASUVORK5CYII="
									/>
								</svg>
								{/* <Image src="/logo-white.png" alt="logo" width={175} height={85} /> */}
							</a>
						</Link>
					</div>
					<nav className={st.header__main__nav}>
						{menu.map((item) => (
							<div key={item.title} className={st.header__main__nav__item}>
								<Link href={item.link}>
									<a className={st.header__main__nav__item__a} onClick={() => setIsOpen(false)}>
										{item.title}
									</a>
								</Link>
								{item?.children && <NavItem key={item.title} nav={item} />}
							</div>
						))}
					</nav>
					<div className={st.header__main__right}>
						<div className={st.header__main__right__lang}>
							<div
								className={`${st.header__main__right__lang__item} ${st.header__main__right__lang__item__active}`}>
								RU
							</div>
							<div className={st.header__main__right__lang__item}>EN</div>
							<div className={st.header__main__right__lang__item}>UZ</div>
						</div>
						<button className={st.header__main__right__billing}>
							<a href="https://billing.airnet.uz/billing.php">
								<span>
									<svg
										fill="#FFFFFF"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 26 26"
										width="15px"
										height="15px">
										<path d="M 16 0 C 13.789063 0 11.878906 0.917969 10.6875 2.40625 C 9.496094 3.894531 9 5.824219 9 7.90625 L 9 9 L 12 9 L 12 7.90625 C 12 6.328125 12.390625 5.085938 13.03125 4.28125 C 13.671875 3.476563 14.542969 3 16 3 C 17.460938 3 18.328125 3.449219 18.96875 4.25 C 19.609375 5.050781 20 6.308594 20 7.90625 L 20 9 L 23 9 L 23 7.90625 C 23 5.8125 22.472656 3.863281 21.28125 2.375 C 20.089844 0.886719 18.207031 0 16 0 Z M 9 10 C 7.34375 10 6 11.34375 6 13 L 6 23 C 6 24.65625 7.34375 26 9 26 L 23 26 C 24.65625 26 26 24.65625 26 23 L 26 13 C 26 11.34375 24.65625 10 23 10 Z M 16 15 C 17.105469 15 18 15.894531 18 17 C 18 17.738281 17.597656 18.371094 17 18.71875 L 17 21 C 17 21.550781 16.550781 22 16 22 C 15.449219 22 15 21.550781 15 21 L 15 18.71875 C 14.402344 18.371094 14 17.738281 14 17 C 14 15.894531 14.894531 15 16 15 Z" />
									</svg>
								</span>
								Вход и регистрация
							</a>
						</button>
						<button
							className={`${st.header__main__right__burger} ${
								isOpen && st.header__main__right__burger__active
							}`}
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none">
									<rect
										width="26"
										height="3"
										rx="1.5"
										transform="matrix(0.707107 0.707107 -0.707499 0.706714 2.12305 0.384766)"
										fill="#fff"></rect>
									<rect
										width="26"
										height="3"
										rx="1.5"
										transform="matrix(0.707107 -0.707107 0.707499 0.706714 0 18.3848)"
										fill="#fff"></rect>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="20"
									viewBox="0 0 26 20"
									fill="#fff">
									<rect width="26" height="4" rx="2" fill="#fff"></rect>
									<rect x="9" y="16" width="17" height="4" rx="2" fill="#fff"></rect>
									<rect x="4" y="8" width="22" height="4" rx="2" fill="#fff"></rect>
								</svg>
							)}
						</button>
					</div>
					{/* <HeaderMob /> */}
				</div>
			</Container>
		</div>
	);
}

const NavItem = ({ nav }) => {
	return (
		<ul className={st[`header__main__nav__item__${nav.className}`]}>
			{nav.children.map((item) => (
				<li key={item.id}>
					<Link href={item.link}>
						<a>{item.title}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};
