import Head from "next/head"

export default function ProductSSL({ language }) {

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
								  name: "Comodo PositiveSSL",
								  price: "100000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=1&one=1"
								},
								{
								  "@type": "Offer",
								  name: "Comodo PositiveSSL Wildcard",
								  price: "1000000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=2&one=1"
								},
								{
								  "@type": "Offer",
								  name: "Comodo PremiumSSL Wildcard",
								  price: "3000000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=3&one=1"
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
