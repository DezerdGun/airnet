import st from './cookies.module.scss';
import Link from 'next/dist/client/link';
import { LINKS } from '../requirements';
import { useEffect, useState } from 'react';

export default function Cookies() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		localStorage?.getItem('cookies') ? '' : setIsOpen(true);
	}, [isOpen]);

	if (!isOpen) return null;
	return (
		<div className={st.cookies}>
			<div className={st.cookies__block}>
				Пользуясь нашим сайтом, вы соглашаетесь с тем, что {/* <Link href={LINKS.CO}> */}
				<a>мы используем cookies</a>
				{/* </Link> */}
			</div>
			<div className={st.cookies__block}>
				<button
					onClick={() => {
						setIsOpen(false);
						localStorage.setItem('cookies', 'declined');
					}}>
					ЗАКРЫТЬ
				</button>
				<button
					onClick={() => {
						setIsOpen(false);
						localStorage.setItem('cookies', 'accepted');
					}}>
					ПРИНЯТЬ
				</button>
			</div>
		</div>
	);
}
