import FaqInside from '../../components/faqInside';
import { LINKS } from '../../components/requirements';
import Link from 'next/link';

const data = {
	title: '',
	description: '',
	content: <></>,
};

export default function FAQ() {
	return <FaqInside data={data} />;
}
