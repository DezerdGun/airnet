
import Partners from "@/components/partners";
import Reviews from "@/components/reviews";
import BreadCrumbs from "@/components/seo/breadCrumbs";
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs";
import Stock from "@/components/stock";

export default function ({ language }) {
	
	return (
		<> 
			<BreadCrumbs data={[{ name: 'Акции' }]} />
			<PageBreadcrumb links={[{ name: 'Акции' }]} />
			<Stock language={language} />
			<Partners language={language} />
			<Reviews language={language} />
		</>
  );
}