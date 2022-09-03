import { useEffect, useState } from 'react';
// import InputRange from 'react-input-range';
import Container from '../container';
import st from './calculator.module.scss';
// import 'react-input-range/lib/css/index.css';
import { Range } from 'react-range';

const calcSpeed = [
		{
			id: 100,
			title: 'до 100 Мбит/с - безлимит',
			price: 0,
		},
		{
			id: 1,
			title: 'до 1 Гбит/с - 32ТБ/мес',
			price: 0,
		},
		{
			id: 'ddos',
			title: 'Защита от DDoS (1 Мбит/с)',
			price: 250,
		},
	],
	calcPO = [
		{
			id: 'not',
			title: 'Не выбрано',
		},
		{
			id: 'lamp',
			title: 'LAMP',
		},
		{
			id: 'lemp',
			title: 'LEMP',
		},
		{
			id: '1c',
			title: '1С-Битрикс: Управление сайтом',
		},
		{
			id: 'django',
			title: 'Django',
		},
		{
			id: 'isp6lite',
			title: 'ISPmanager 6 Lite',
			price: 299,
		},
		{
			id: 'isp6pro',
			title: 'ISPmanager 6 Pro',
			price: 599,
		},
		{
			id: 'isp6host',
			title: 'ISPmanager 6 Host',
			price: 899,
		},
		{
			id: 'openvpn',
			title: 'Openvpn',
		},
		{
			id: 'redmine',
			title: 'Redmine',
		},
		{
			id: 'team',
			title: 'Teamspeak',
		},
		{
			id: 'tomcat',
			title: 'Tomcat',
		},
		{
			id: 'bitrix24',
			title: 'Битрикс24',
		},
	],
	calcOS = [
		{
			id: 'ubuntu',
			title: 'Ubuntu',
			img: '/',
			versions: [
				{
					title: '18.04',
					po: [
						'not',
						'lamp',
						'lemp',
						'django',
						'isp6lite',
						'isp6pro',
						'isp6host',
						'openvpn',
						'team',
						'tomcat',
					],
				},
				{
					title: '20.04',
					po: ['not', 'lamp', 'lemp', 'isp6lite', 'isp6pro', 'isp6host', 'openvpn'],
				},
				{
					title: '22.04',
					po: ['not', 'isp6lite', 'isp6pro', 'isp6host'],
				},
			],
		},
		{
			id: 'centos',
			title: 'CentOS',
			img: '/',
			versions: [
				{
					title: '7',
					po: [
						'not',
						'lamp',
						'1c',
						'django',
						'isp6lite',
						'isp6pro',
						'isp6host',
						'openvpn',
						'team',
						'tomcat',
						'bitrix24',
					],
				},
			],
		},
		{
			id: 'alma',
			title: 'Alma',
			img: '/',
			versions: [
				{
					title: '8',
					po: [
						'not',
						'lamp',
						'lemp',
						'django',
						'isp6lite',
						'isp6pro',
						'isp6host',
						'openvpn',
						'redmine',
						'team',
						'tomcat',
					],
				},
				{
					title: '9',
					po: ['not'],
				},
			],
		},
		{
			id: 'rocky',
			title: 'Rocky',
			img: '/',
			versions: [
				{
					title: '8',
					po: ['not', 'lamp', 'lemp', 'django', 'openvpn', 'redmine', 'team', 'tomcat'],
				},
				{
					title: '9',
					po: ['not'],
				},
			],
		},
		{
			id: 'oracle',
			title: 'Oracle',
			img: '/',
			versions: [
				{
					title: '8',
					po: ['not', 'lamp', 'lemp', 'django', 'openvpn', 'redmine', 'team', 'tomcat'],
				},
			],
		},
		{
			id: 'debian',
			title: 'Debian',
			img: '/',
			versions: [
				{
					title: '10',
					po: [
						'not',
						'lamp',
						'lemp',
						'isp6lite',
						'isp6pro',
						'isp6host',
						'openvpn',
						'redmine',
						'team',
						'tomcat',
					],
				},
				{
					title: '11',
					po: ['not', 'lamp', 'lemp', 'isp6lite', 'isp6pro', 'isp6host', 'openvpn', 'team', 'tomcat'],
				},
			],
		},
		{
			id: 'free',
			title: 'FreeBSD',
			img: '/',
			versions: [
				{
					title: '12',
					po: ['not'],
				},
				{
					title: '13',
					po: ['not'],
				},
			],
		},
		{
			id: 'windows',
			title: 'Windows',
			img: '/',
			versions: [
				{
					title: '2019',
					po: ['not'],
				},
				{
					title: '2022',
					po: ['not'],
				},
			],
		},
	];

export default function Calculator() {
	const [state, setState] = useState({
		core: 2,
		ram: 2,
		ssd: 20,
		os: 'ubuntu',
		osVersion: '18.04',
		po: calcPO[0].title,
		speed: calcSpeed[0].title,
		administration: 'Нет',
	});

	return (
		<div className={st.calculator}>
			<Container>
				<div className={st.calculator__block}>
					<div className={st.calculator__block__item}>
						<div className={st.calculator__block__item__info}>
							<div className={st.calculator__block__item__info__item}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
								</svg>
								Гибкая настройка
							</div>
							<div className={st.calculator__block__item__info__item}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z" />
								</svg>
								До 128 CPU
							</div>
							<div className={st.calculator__block__item__info__item}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z" />
								</svg>
								До 4000Гб SSD
							</div>
						</div>
						<CalcBlock number={1} title="Процессор и память">
							<CalcHeader title="Количество ядер процессора (до 3,4 ГГц)" price={0} />
							<CalcInput
								text="ядер"
								step={1}
								min={2}
								max={16}
								name="core"
								state={state}
								setState={setState}
							/>
							<CalcHeader title="Объём оперативной памяти" price={0} />
							<CalcInput
								text="Гб"
								step={2}
								min={2}
								max={64}
								name="ram"
								state={state}
								setState={setState}
							/>
						</CalcBlock>
						<CalcBlock number={2} title="Хранилище">
							<CalcHeader title="Дисковая система" />
							<CalcSelect title="SSD" isChecked={true} />
							<CalcHeader title="Объём диска" price={0} />
							<CalcInput
								text="Гб"
								step={20}
								min={20}
								max={2000}
								name="ssd"
								state={state}
								setState={setState}
							/>
						</CalcBlock>
						<CalcBlock number={3} title="Система">
							<CalcHeader title="Выбор операционной системы" price={0} />
							<CalcSystem data={calcOS} state={state} setState={setState} />
							<CalcHeader title="Выбор предустановленного ПО" price={0} />
							<CalcPO
								data={calcPO.filter((item) =>
									calcOS
										.find((e) => e.id === state.os)
										.versions.find((e) => e.title === state.osVersion)
										.po.includes(item.id)
								)}
								state={state}
								setState={setState}
							/>
						</CalcBlock>
						<CalcBlock number={4} title="Канал">
							<CalcHeader title="Выбор канала" price={0} />
							<CalcSpeed data={calcSpeed} state={state} setState={setState} />
						</CalcBlock>
						<CalcBlock number={5} title="Администрирование">
							<CalcHeader title="Пакет включает 5 обращений в месяц" price={0} />
							<CalcSwitcher state={state} setState={setState} />
						</CalcBlock>
						<div className={st.calculator__block__item__category__content__footer}>
							<h4>
								При покупке <span className="text-green">VDS Форсаж</span> вы получаете:
							</h4>
							<ul>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
										<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
									</svg>
									1 выделенный IP-адрес
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
										<path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
									</svg>
									Полный доступ по SSH
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
										<path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
									</svg>
									ОС на ваш выбор
								</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
									</svg>
									Помощь в переезде с другого хостинга
								</li>
							</ul>
						</div>
					</div>
					<div className={st.calculator__block__result}>
						<div className={st.calculator__block__result__header}>
							<div>VDS Форсаж</div>
							<a href="#">Поделиться</a>
						</div>
						<div className={st.calculator__block__result__content}>
							<CalcInfo title="CPU" value={`${state.core} ядер`} />
							<div className="d-flex">
								<div className="me-4">
									<CalcInfo title="RAM" value={`${state.ram} Гб`} />
								</div>
								<CalcInfo title="SSD" value={`${state.ssd} Гб`} />
							</div>
							<CalcInfo title="Операционная система" value={`${state.os} ${state.osVersion}`} />
							<CalcInfo title="Предустановленное ПО" value={`${state.po}`} />
							<CalcInfo title="Канал" value={`${state.speed}`} />
							<CalcInfo title="Лимит IP-Адресов" value={`32 адреса`} />
							<CalcInfo title="Администрирование" value={`${state.administration}`} />
							<div className={st.calculator__block__result__content__footer}>
								<div className="def-price">
									50 000{' '}
									<span>
										сум
										<hr />
										мес
									</span>
								</div>
								<a href="#">В корзину</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

const CalcBlock = ({ number, title, children }) => {
	return (
		<div className={st.calculator__block__item__category}>
			<span className={st.calculator__block__item__category__number}>{number}</span>
			<div className={st.calculator__block__item__category__content}>
				<div className={st.calculator__block__item__category__content__title}>{title}</div>
				{children}
			</div>
		</div>
	);
};

const CalcHeader = ({ title, price }) => {
	return (
		<div className={st.calculator__block__item__category__content__header}>
			<span>{title}</span>
			{price !== undefined && <div>+{price} сум</div>}
		</div>
	);
};

const CalcInput = ({ text, step, min, max, name, state, setState }) => {
	return (
		<div className={st.calculator__block__item__category__content__input}>
			<div className={st.calculator__block__item__category__content__input__item}>
				<Range
					step={step}
					min={min}
					max={max}
					values={[state[name]]}
					onChange={(values) => setState((prev) => ({ ...prev, [name]: values[0] }))}
					renderTrack={({ props, children }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: '16px',
								width: '100%',
								borderRadius: '10px',
								backgroundColor: '#c2c2c2',
							}}>
							{children}
						</div>
					)}
					renderThumb={({ props }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: '24px',
								width: '24px',
								border: '8px solid #006a4d',
								borderRadius: '50%',
								backgroundColor: '#fff',
							}}
						/>
					)}
				/>
			</div>
			<div className={st.calculator__block__item__category__content__input__block}>
				<input
					type="tel"
					value={state[name]}
					onChange={(e) => setState((prev) => ({ ...prev, [name]: +e.target.value }))}
				/>
				<span>{text}</span>
			</div>
		</div>
	);
};

const CalcSystem = ({ data, state, setState }) => {
	const [show, setShow] = useState({ index: 0, show: false, ver: 0 });

	return (
		<div className={st.calculator__block__item__category__content__system}>
			{data.map((item, i) => (
				<div
					key={item.id}
					className={`${st.calculator__block__item__category__content__system__item} ${
						state.os === item.id && st.calculator__block__item__category__content__system__item__active
					}`}>
					<div
						className={st.calculator__block__item__category__content__system__item__title}
						onClick={() => {
							setShow((prev) => ({ ...prev, index: i, show: false }));
							setState((prev) => ({
								...prev,
								os: item.id,
								osVersion: item.versions[show.ver].title,
								po: 'Не выбрано',
							}));
						}}>
						{item.title}
					</div>
					<div
						className={st.calculator__block__item__category__content__system__item__content}
						onClick={() => {
							(!show.show || show.index !== i) &&
								setShow((prev) =>
									prev.index === i ? { ...prev, show: !prev.show } : { index: i, show: true }
								);
						}}>
						<CalcSystemVersions
							index={i}
							show={show}
							setShow={setShow}
							state={state}
							setState={setState}
							data={item}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

const CalcSystemVersions = ({ index, show, setShow, state, setState, data }) => {
	const [ver, setVer] = useState(0);

	return (
		<>
			{show.index === index ? state.osVersion : data.versions[ver]?.title}
			{show.index === index && show.show && (
				<ul>
					{data.versions.map((el, i) => (
						<li
							// className={
							// 	ver === index ? st.calculator__block__item__category__content__system__item__content__active : ''
							// }
							onClick={() => {
								setVer(index);
								setState((prev) => ({
									...prev,
									os: data.id,
									osVersion: data.versions[i].title,
									ver: i,
									po: 'Не выбрано',
								}));
								setShow((prev) => ({ ...prev, show: false, ver: i }));
							}}>
							{el.title}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

const CalcPO = ({ data, state, setState }) => {
	return (
		<div className={st.calculator__block__item__category__content__po}>
			{data.map((item) => (
				<div
					className={`${st.calculator__block__item__category__content__po__item} ${
						item.title === state.po ? st.calculator__block__item__category__content__po__item__active : ''
					}`}
					key={item.title}
					onClick={() => setState((prev) => ({ ...prev, po: item.title }))}>
					{item.title}
				</div>
			))}
		</div>
	);
};

const CalcSpeed = ({ data, state, setState }) => {
	return (
		<div className={st.calculator__block__item__category__content__po}>
			{data.map((item) => (
				<div
					className={`${st.calculator__block__item__category__content__po__item} ${
						item.title === state.speed
							? st.calculator__block__item__category__content__po__item__active
							: ''
					}`}
					key={item.title}
					onClick={() => setState((prev) => ({ ...prev, speed: item.title }))}>
					{item.title}
				</div>
			))}
		</div>
	);
};

const CalcSwitcher = ({ state, setState }) => {
	return (
		<div className={st.calculator__block__item__category__content__switcher}>
			<div
				className={`${st.calculator__block__item__category__content__switcher__item} ${
					state.administration === 'Нет'
						? st.calculator__block__item__category__content__switcher__item__active
						: ''
				}`}
				onClick={() => setState((prev) => ({ ...prev, administration: 'Нет' }))}>
				Нет
			</div>
			<div
				className={`${st.calculator__block__item__category__content__switcher__item} ${
					state.administration === 'Да'
						? st.calculator__block__item__category__content__switcher__item__active
						: ''
				}`}
				onClick={() => setState((prev) => ({ ...prev, administration: 'Да' }))}>
				Да
			</div>
		</div>
	);
};

const CalcSelect = ({ title, isChecked }) => {
	return (
		<div
			className={`${st.calculator__block__item__category__content__select} ${
				isChecked && st.calculator__block__item__category__content__select__checked
			}`}>
			{title}
		</div>
	);
};

const CalcInfo = ({ title, value }) => {
	return (
		<div className={st.calculator__block__result__content__info}>
			<div className={st.calculator__block__result__content__info__title}>{title}</div>
			<div className={st.calculator__block__result__content__info__value}>{value}</div>
		</div>
	);
};
