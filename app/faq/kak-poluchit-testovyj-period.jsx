import FaqInside from '@/components/faqInside'

const data = {
	title: 'Как получить тестовый период?',
	description: '',
	content: (
		<p>
			Мы предоставляем тестовый период автоматически, сразу после регистрации
			аккаунта у нас:
		</p>
	),
}

export default function FAQ() {
	return <FaqInside data={data} />
}
