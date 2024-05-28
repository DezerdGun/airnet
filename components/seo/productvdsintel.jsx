import Head from "next/head"

export default function ProductVDSIntel({ language }) {

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
								  price: "550000",
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
