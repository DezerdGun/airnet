import Head from "next/head"

export default function ProductMail({ language }) {

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
								  name: "Mail 1Gb",
								  price: "25000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=4&one=1"
								},
								{
								  "@type": "Offer",
								  name: "Mail 10Gb",
								  price: "75000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=5&one=1"
								},
								{
								  "@type": "Offer",
								  name: "Mail 20Gb",
								  price: "100000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=6&one=1"
								},
								{
								  "@type": "Offer",
								  name: "Mail 50Gb",
								  price: "200000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&type=shop&item=7&one=1"
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
