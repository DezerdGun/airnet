import Head from 'next/head';

export default function BreadCrumbs({ data }) {
	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							'@context': 'https://schema.org',
							'@type': 'BreadcrumbList',
							itemListElement: [
								{ '@type': 'ListItem', position: 1, name: 'Airnet', item: 'https://airnet.uz/' },
								...data.map((item, i) =>
									item?.link
										? {
												'@type': 'ListItem',
												position: i + 2,
												name: item.title,
												item: `https://airnet.uz${item.link}/`,
										  }
										: { '@type': 'ListItem', position: i + 2, name: item.title }
								),
							],
						},
						null,
						2
					),
				}}></script>
		</Head>
	);
}
