import Head from "next/head"

export default function ProductDomain({ language }) {

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
								  name: "UZ",
								  price: "20000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz"
								},
								{
								  "@type": "Offer",
								  name: "RU",
								  price: "65000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz"
								},
								{
								  "@type": "Offer",
								  name: "COM",
								  price: "150000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz"
								},
								{
								  "@type": "Offer",
								  name: "NET",
								  price: "150000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz"
								},
								{
								  "@type": "Offer",
								  name: "ORG",
								  price: "200000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=d&zone=uz"
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
