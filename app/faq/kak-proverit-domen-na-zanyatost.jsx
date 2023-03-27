import FaqInside from '@/components/faqInside'
import { LINKS } from '@/components/requirements'
import Link from 'next/link'

const data = {
	title: 'Как проверить домен на занятость?',
	description: '',
	content: (
		<>
			<p>
				<strong>Whois</strong> (от англ. «кто это») — общедоступная база данных
				зарегистрированных доменов. Через неё любой пользователь может получить
				информацию о домене или IP-адресе.{' '}
			</p>
			<h2>Как проверить домен на занятость?</h2>
			<p>
				Проверить домен на занятость можно как{' '}
				<Link href={LINKS.DOMAINS}>
					<a>на странице сервиса Купить домен</a>
				</Link>
				, так и{' '}
				<Link href={LINKS.HOME}>
					<a>на главной странице сайта</a>
				</Link>
				.
			</p>
			<p>
				Введите имя домена или IP-адрес и нажмите <strong>Проверить</strong>.{' '}
			</p>
			<p>
				Сервис покажет результаты проверки. Если домен <strong>свободен</strong>
				, вы можете его{' '}
				<a
					href='https://billing.airnet.uz/billing.php?do=order&amp;type=d&amp;zone=uz'
					target='_blank'
					rel='noreferrer noopener'
				>
					зарегистрировать
				</a>
				.{' '}
			</p>
			<p>
				Если домен занят, вы можете обратиться к текущему администратору домена
				по вопросу его покупки.
			</p>
		</>
	),
}

export default function FAQ() {
	return <FaqInside data={data} />
}
