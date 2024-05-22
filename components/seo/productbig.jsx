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
								  name: "Tera",
								  price: "1500000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=53"
								},
								{
								  "@type": "Offer",
								  name: "Peta",
								  price: "2250000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=61"
								},
								{
								  "@type": "Offer",
								  name: "Zeta",
								  price: "3000000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=62"
								},
								{
								  "@type": "Offer",
								  name: "Yotta",
								  price: "7500000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=vds&tarif=112"
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
