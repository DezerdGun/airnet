import Head from "next/head"

export default function Product({ language }) {
	const langData = {
		description: {
			ru: "Быстрые VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Tez VDS/VPS | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
			en: "",
		},
	}

	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							"@context": "https://schema.org/",
							"@type": "Product",
							name: "VDS/VPS",
							description: langData.description[language],
							mpn: "123",
							sku: "123",
							brand: {
								"@type": "Thing",
								name: "AIRNET",
							},
							aggregateRating: {
								"@type": "AggregateRating",
								ratingValue: "5",
								reviewCount: "120",
							},
							review: {
								"@type": "Review",
								reviewRating: {
									"@type": "Rating",
									ratingValue: "5",
									bestRating: "5",
								},
								author: {
									"@type": "Organization",
									name: "Hosting",
								},
							},
							offers: {
								"@type": "AggregateOffer",
								offerCount: "1",
								lowPrice: "10000",
								highPrice: "3000000",
								priceCurrency: "UZS",
								seller: {
									"@type": "Organization",
									name: "AIRNET",
								},
							},
						},
						null,
						2
					),
				}}
			></script>
		</Head>
	)
}
