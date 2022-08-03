import Container from '../../components/container';
import Image from 'next/image';

export default function License() {
	return (
		<Container headTitle="Лицензия на предоставление услуг хостинга">
			<hr />
			<Image src="/license/license.webp" width={1200} height={1697} blurDataURL placeholder="blur" />
		</Container>
	);
}
