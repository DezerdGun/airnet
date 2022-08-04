import FaqInside from '../../components/faqInside';
import { LINKS } from '../../components/requirements';
import Link from 'next/link';

const data = {
	title: 'Как получить тестовый период?',
	description: '',
	content: <p>Мы предоставляем тестовый период автоматически, сразу после регистрации аккаунта у нас:</p>,
};

export default function FAQ() {
	return <FaqInside data={data} />;
}
