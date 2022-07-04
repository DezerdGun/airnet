import Container from '../container';
import st from './header.module.scss';
import Image from 'next/image';
import { LINKS } from '../requirements';
import Link from 'next/link';
import { useState } from 'react';
import HeaderMob from './headerMob';
import { LOGO } from '../utils';

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
				link: LINKS.SSL_HELP,
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
		[isOpen, setIsOpen] = useState(false);

	return (
		<div className={st.header}>
			<Container className="py-0">
				<div className={st.header__main}>
					<div className={st.header__main__logo}>
						<Link href={LINKS.HOME}>
							<a>{LOGO}</a>
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
				</div>
			</Container>
			<HeaderMob isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} />
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
