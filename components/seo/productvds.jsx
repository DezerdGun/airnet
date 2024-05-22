import Head from "next/head"

export default function ProductVDS({ language }) {

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
								  name: "Nano",
								  price: "400000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=49"
								},
								{
								  "@type": "Offer",
								  name: "Advanced",
								  price: "500000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=50"
								},
								{
								  "@type": "Offer",
								  name: "Mega",
								  price: "800000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=51"
								},
								{
								  "@type": "Offer",
								  name: "Ultra",
								  price: "1000000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=52"
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
