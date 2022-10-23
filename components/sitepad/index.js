import Container from '../container';
import { LINKS } from '../requirements';
import st from './sitepad.module.scss';
import Link from 'next/dist/client/link';

export default function Sitepad() {
	const content = ['/art-const-1.jpg', '/art-const-2.jpg', '/art-const-3.jpg', '/art-const-4.jpg'];
	return (
		<div className={st.sitepad}>
			<Container
				// style={{ background: `url('/laptop.jpg') no-repeat`, backgroundSize: 'cover' }}
				title="Бесплатный конструктор сайтов от SitePad"
				description={
					<>
						<p>
							Для того чтобы воспользоваться конструктором сайта где более 750 разных тем, вам необходимо{' '}
							<Link href={LINKS.HOSTING}>
								<a className="text-red">заказать любой хостинг</a>
							</Link>{' '}
							на тарифных планах Cpanel.
						</p>
					</>
				}>
				<div className={st.sitepad__img}>
					{content.map((item) => (
						<img key={item} src={item} />
					))}
				</div>
				<p>
					После оплаты за услугу хостинг, вы получите доступы к панели управления cPanel по эл.почте.<br />
					Внутри cPanel вы сможете создавать профессиональный сайт с помощью конструктора, без навыков
					программирования.
				</p>
				<div className={st.sitepad__button}>
					<button>
						<Link href={LINKS.HOSTING}>
							<a>Купить хостинг</a>
						</Link>
					</button>
					<button>
						<Link href={LINKS.SITEPAD}>
							<a>Краткая инструкция по созданию сайта через конструктор</a>
						</Link>
					</button>
				</div>
			</Container>
		</div>
	);
}
