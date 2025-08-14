import Partners from "@/components/partners";
import Reviews from "@/components/reviews";
import SEO from "@/components/seo";
import BreadCrumbs from "@/components/seo/breadCrumbs";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs";
import Stock from "@/components/stock";

export default function ({ language }) {

    const breadCrumbs = [
      {
        name: {
			ru: "Акции",
			uz: "Aksiya",
			en: "Stocks",
        },
        link: "/stock",
      },
    ];
	const langData = {
		seo: {
			ru: "Акции и скидки | Хостинг TAS-IX в Ташкенте, Узбекистане",
			uz: "Chegirma va aksiyalar | Uzbekistonda,Toshkentda Xost TAS-IX",
			en: "Promotions and discounts | Hosting TAS-IX in Tashkent, Uzbekistan",
		},
		desc: {
			ru: "Выгодные акции от компании Airnet",
			uz: "Airnet kompaniyasidan qoniqarli chegirmalar",
			en: "Favorable promotions from Airnet",
		},
	};
	
	return (
		<> 
			<SEO title={langData.seo[language]} desc={langData.desc[language]} />

			{breadCrumbs && breadCrumbs.length ? (
			<>
				<BreadCrumbs data={breadCrumbs} language={language} />
				<PageBreadcrumb links={breadCrumbs} language={language} />
			</>
			) : null}
			
			<Stock language={language} />
			<Partners language={language} />
			<Reviews language={language} />
		</>
  );
}