import st from './faq.module.scss';
import Head from 'next/head';
import Container from '../container';

export default function FAQ({ faq, faqHead, title }) {
	const active = (i) => {
		const blocks = document.querySelectorAll(`.${st.faq__items__block}`);
		// blocks.forEach((item) =>
		// 	item.classList.contains(st.faq__items__block__active)
		// 		? item?.classList.toggle(st.faq__items__block__active)
		// 		: null
		// );
		// blocks[i].classList.toggle(st.faq__items__block__active);

		blocks.forEach((item, index) =>
			i !== index
				? item?.classList.remove(st.faq__items__block__active)
				: item.classList.toggle(st.faq__items__block__active)
		);
	};

	return (
		<>
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqHead, null, 2),
					}}
				/>
			</Head>
			<div className={st.faq}>
				<Container title={title} clNh3="text-center text-uppercase">
					<div className={st.faq__item}>
						<div className={st.faq__items}>
							{faq.map((item, i) => (
								<div key={item.title} className={st.faq__items__block}>
									<div className={st.faq__items__block__heading} onClick={() => active(i)}>
										<h2>{item.title}</h2>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="21"
												height="21"
												viewBox="0 0 21 21"
												fill="none">
												<rect x="9" width="3" height="21" rx="1.5" fill="black" />
												<rect
													y="12"
													width="3"
													height="21"
													rx="1.5"
													transform="rotate(-90 0 12)"
													fill="black"
												/>
											</svg>
										</span>
									</div>
									<div id={`faqContent${i}`} className={st.faq__items__block__text}>
										{item.description}
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
