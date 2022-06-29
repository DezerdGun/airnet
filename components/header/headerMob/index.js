import st from './headerMob.module.scss';
import Link from 'next/dist/client/link';
import { useEffect } from 'react';

export default function HeaderMob({ isOpen, setIsOpen, links, menu }) {
	const { quoteOrApply } = useSelector((state) => state.quote),
		router = useRouter();

	useEffect(() => {
		let icon = document.querySelectorAll(`.${st.headerMob__block__icon}`);
		let coll = document.querySelectorAll(`.${st.headerMob__collapse}`);
		let i;

		for (i = 0; i < icon.length; i++) {
			((j) =>
				icon[j].addEventListener('click', function () {
					icon[j].classList.toggle(st.headerMob__block__icon__active);
					coll[j].classList.toggle(st.headerMob__collapse__active);
				}))(i);
		}
	}, []);

	return (
		<div className={`${st.headerMob} ${isOpen ? st.headerMob__active : null}`}>
			<ul>
				{menu.map((item) =>
					item?.menu ? (
						<li>
							<div className={`${st.headerMob__block} df_alc_jcb`}>
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
											stroke-linecap="round"
											stroke-linejoin="round"></path>
									</svg>
								</span>
							</div>
							<ul className={st.headerMob__collapse}>
								{item.menu.length > 1
									? item.menu.map((link) => (
											<li>
												<div className={`${st.headerMob__block} df_alc_jcb`}>
													{links[link]?.link ? (
														<Link href={links[link].link}>
															<a onClick={() => setIsOpen(false)}>{links[link].title}</a>
														</Link>
													) : (
														<a onClick={() => setIsOpen(false)}>{links[link].title}</a>
													)}
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
																stroke-linecap="round"
																stroke-linejoin="round"></path>
														</svg>
													</span>
												</div>
												<ul className={st.headerMob__collapse}>
													{links[link].links.map((li) => (
														<li>
															<Link href={li.link}>
																<a onClick={() => setIsOpen(false)}>{li.title}</a>
															</Link>
														</li>
													))}
												</ul>
											</li>
									  ))
									: item.menu.map((link) => (
											<li>
												<Link href={links[link].link}>
													<a onClick={() => setIsOpen(false)}>{links[link].title}</a>
												</Link>
											</li>
									  ))}
							</ul>
						</li>
					) : (
						<li>
							<Link href={item.link}>
								<a onClick={() => setIsOpen(false)}>{item.title}</a>
							</Link>
						</li>
					)
				)}
				{/* <div className={st.header__main__block__item}>
                    <Link href={item.link}>
                        <a className={st.header__main__block__item__a} onClick={() => setIsOpen(false)}>
                            {item.title}
                        </a>
                    </Link>
                    {item?.menu ? (
                        <div className={`${st.header__main__block__item__nav} ${st[`header__main__block__item__nav__${item.clN}`]}`}>
                            {item.menu.map((nav) => (
                                <NavItem key={nav} nav={headerLinks[nav]} />
                            ))}
                        </div>
                    ) : null}
                </div> */}
			</ul>

			<button
				className="getOrderBtn w-100 mt-3 mx-auto"
				onClick={() => {
					setIsOpen(false);
					router.push(`/${quoteOrApply}`);
				}}>
				Get car finance quote
			</button>
		</div>
	);
}

const MobItem = () => {
	return <div></div>;
};

const CustomPanel = ({ nav, setIsOpen }) => {
	return (
		<ul className={st.header__nav__item__links}>
			{nav.links.map((item) => (
				<li key={item.id} className={st.header__nav__item__links__item}>
					<Link href={item.link}>
						<a onClick={() => setIsOpen(false)}>{item.title}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};
