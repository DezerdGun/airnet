import Head from "next/head"

export default function ProductDedicated({ language }) {

	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							"@context": "https://schema.org",
							"@type": "Service",
							serviceType : "VDS/VPS Hosting",
							provider: {
								"@type": "Organization",
								name: "AIRNET",
								url: "https://airnet.uz/",
							},
							offers: [
								{
								  "@type": "Offer",
								  name: "P1",
								  price: "20000000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=dedicated&tarif=113"
								},
								{
								  "@type": "Offer",
								  name: "P2",
								  price: "25000000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=dedicated&tarif=113"
								},
							],								
						},
						null,
						2
					),
				}}
			></script>
		</Head>
	)
}
