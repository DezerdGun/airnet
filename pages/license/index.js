import Container from '../../components/container';
import Image from 'next/image';
import SEO from '../../components/seo';

export default function License() {
	return (
		<>
			<SEO title="Лицензия на предоставление услуг хостинга | Airnet" desc="" />
			<Container headTitle="Лицензия на предоставление услуг хостинга">
				<hr />
				<Image src="/license/license.webp" width={1200} height={1697} blurDataURL placeholder="blur" />
			</Container>
		</>
	);
}
