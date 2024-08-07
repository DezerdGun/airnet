
import Partners from "@/components/partners";
import Reviews from "@/components/reviews";
import BreadCrumbs from "@/components/seo/breadCrumbs";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs";
import Stock from "@/components/stock";

export default function ({ language }) {

    const breadCrumbs = [
      {
        name: {
          ru: "Акции",
          uz: "Акции",
          en: "Акции",
        },
        link: "/stock",
      },
    ];
	
	return (
		<> 
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