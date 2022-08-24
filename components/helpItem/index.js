import Container from '../container';
import FAQ from '../faq';
import Partners from '../partners';
import st from './helpItem.module.scss';
import Link from 'next/link';
import SEO from '../seo';
import { useEffect, useState } from 'react';

export default function HelpItem({ data }) {
	const [isFixed, setIsFixed] = useState(false);

	const scroll = () => {
		const content = document.querySelector('#content'),
			links = document.querySelector('#links');

		if (document.body.clientWidth > 770) {
			if (window.pageYOffset >= 112) {
				if (window.pageYOffset > content.clientHeight - links.clientHeight + 112) {
					setIsFixed('end');
				} else setIsFixed(true);
			} else setIsFixed(false);
		} else document.removeEventListener('scroll', scroll);
	};

	useEffect(() => {
		document.addEventListener('scroll', scroll);
	}, []);

	return (
		<>
			<SEO title={`${data.headTitle} | Airnet`} desc={data.desc} />
			<Container headTitle={data.headTitle}>
				<div className={st.helpItem}>
					<div className={st.helpItem__block}>
						<div
							className={`${st.helpItem__block__links} ${
								isFixed &&
								(isFixed === 'end'
									? st.helpItem__block__links__absolute
									: st.helpItem__block__links__fixed)
							}`}>
							<div id="links">
								<h4>Разделы</h4>
								<div className={st.helpItem__block__links__back}>
									{data?.content?.length ? (
										data.content.map((item, i) => <LinksBlock key={i} data={item} />)
									) : (
										<LinksBlock data={data.content} />
									)}
								</div>
							</div>
						</div>
						<div id="content" className={st.helpItem__block__content}>
							<Content data={data.content} />
						</div>
					</div>
					<p>
						Вернуться к{' '}
						<Link href="/help">
							<a>«База знаний»</a>
						</Link>
					</p>
					<p>
						Не нашли ответ на свой вопрос? Позвоните нашим специалистам по телефону{' '}
						<a href="tel:+998712008700">+998(71) 200-87-00</a>
					</p>
				</div>
			</Container>
			{data?.afterContent}
			{data?.faq && <FAQ faq={data.faq} title="НАС ЧАСТО СПРАШИВАЮТ БИЛЛИНГ-ПАНЕЛЬ" />}
			<Partners />
		</>
	);
}

const LinksBlock = ({ data }) => {
	const [state, setState] = useState(false);

	return (
		<ul className={st.helpItem__block__links__block}>
			<li onClick={() => setState(!state)}>
				<div>
					{data?.link ? (
						<Link href={data.link}>
							<a>{data.title}</a>
						</Link>
					) : (
						data.title
					)}
				</div>
				{data?.children && (
					<span
						className={`${st.helpItem__block__links__block__span} ${
							state && st.helpItem__block__links__block__span__active
						}`}>
						{'>'}
					</span>
				)}
			</li>
			<div
				className={`${st.helpItem__block__links__block__content} ${
					state && st.helpItem__block__links__block__content__active
				}`}>
				{data?.children && data.children.map((item, i) => <LinksBlock key={`data${i}`} data={item} />)}
			</div>
		</ul>
	);
};

const Content = ({ data }) => {
	if (data?.length)
		return data.map((item) => (
			<div key={item.title} className={st.helpItem__block__content__block}>
				<h3>
					{item?.link ? (
						<Link href={item.link}>
							<a>{item.title}</a>
						</Link>
					) : (
						item.title
					)}
				</h3>
				<ContentBlock data={item.children} />
			</div>
		));
	return (
		<div className={st.helpItem__block__content__block}>
			<h3>
				{data?.link ? (
					<Link href={data.link}>
						<a>{data.title}</a>
					</Link>
				) : (
					data.title
				)}
			</h3>
			<ContentBlock data={data.children} />
		</div>
	);
};

const ContentBlock = ({ data }) => {
	return data.map((item) => (
		<div key={item.title} className={st.helpItem__block__content__block__item}>
			<h4>
				{item?.link ? (
					<Link href={item.link}>
						<a>{item.title}</a>
					</Link>
				) : (
					item.title
				)}
			</h4>
			{item?.children?.length && (
				<ul>
					{item.children.map((item) => (
						<li key={item.id}>
							<Link href={item.link}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	));
};
