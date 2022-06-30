import st from './headerMob.module.scss';
import Link from 'next/dist/client/link';
import { useEffect } from 'react';

export default function HeaderMob({ isOpen, setIsOpen, menu }) {
	useEffect(() => {
		let icon = document.querySelectorAll(`.${st.headerMob__block__icon}`);
		let coll = document.querySelectorAll(`.${st.headerMob__collapse}`);
		let i;

		console.log(icon);

		for (i = 0; i < icon.length; i++) {
			((j) =>
				icon[j].addEventListener('click', function () {
					console.log('sdfsdf', j, icon.classList, coll.classList);
					icon[j].classList.toggle(st.headerMob__block__icon__active);
					coll[j].classList.toggle(st.headerMob__collapse__active);
				}))(i);
		}
	}, []);

	return (
		<div className={`${st.headerMob} ${isOpen ? st.headerMob__active : null}`}>
			<ul>
				{menu.map((item) =>
					item?.children ? (
						<li key={item.title}>
							<div className={st.headerMob__block}>
								<Link href={item.link}>
									<a onClick={() => setIsOpen(false)}>{item.title}</a>
								</Link>
								<span className={st.headerMob__block__icon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="8"
										viewBox="0 0 12 8"
										fill="none">
										<path
											d="M11.3359 1.33366L6.0026 6.66699L0.669271 1.33366"
											stroke="#F8F8F8"
											strokeLinecap="round"
											strokeLinejoin="round"></path>
									</svg>
								</span>
							</div>
							<ul className={st.headerMob__collapse}>
								{item.children.map((link) => (
									<li key={link.title}>
										{console.log(link)}

										<Link href={link.link}>
											<a onClick={() => setIsOpen(false)}>{link.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</li>
					) : (
						<li key={item.title}>
							<Link href={item.link}>
								<a onClick={() => setIsOpen(false)}>{item.title}</a>
							</Link>
						</li>
					)
				)}
			</ul>
		</div>
	);
}
