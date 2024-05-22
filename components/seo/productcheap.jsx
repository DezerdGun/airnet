import Head from "next/head"

export default function ProductCheap({ language }) {

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
								  name: "Platinum",
								  price: "150000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=13"
								},
								{
								  "@type": "Offer",
								  name: "Strong",
								  price: "200000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=14"
								},
								{
								  "@type": "Offer",
								  name: "VIP",
								  price: "250000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=15"
								},
								{
								  "@type": "Offer",
								  name: "VIP+",
								  price: "300000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=16"
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
