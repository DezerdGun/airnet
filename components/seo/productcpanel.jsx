import Head from "next/head"

export default function ProductCpanel({ language }) {

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
								  name: "Старт",
								  price: "10000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=32"
								},
								{
								  "@type": "Offer",
								  name: "Простой",
								  price: "15000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=31"
								},
								{
								  "@type": "Offer",
								  name: "Стандарт",
								  price: "25000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=33"
								},
								{
								  "@type": "Offer",
								  name: "Доступный",
								  price: "60000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=34"
								},
								{
								  "@type": "Offer",
								  name: "Оптимальный",
								  price: "90000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=37"
								},
								{
								  "@type": "Offer",
								  name: "Выгодный",
								  price: "150000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=38"
								},
								{
								  "@type": "Offer",
								  name: "Офис",
								  price: "250000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=39"
								},
								{
								  "@type": "Offer",
								  name: "Корпоративный",
								  price: "350000",
								  priceCurrency: "UZS",
								  url: "https://billing.airnet.uz/billing.php?do=order&vid=hosting&tarif=40"
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
