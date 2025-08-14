import Calculator from "@/components/calculator";
import SEO from "@/components/seo";
import BreadCrumbs from "@/components/seo/breadCrumbs"
import PageBreadcrumb from "@/components/seo/pageBreadCrumbs";

export default function ConstructorVds({ language }) {

	const langData = {
		seo: {
		ru: "Свой виртуальный сервер VDS/VPS | Хостинг TAS-IX в Ташкенте, Узбекистане",
		uz: "O'z virtual serveri VDS/VPS | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
		en: "Own virtual server VDS/VPS | Hosting TAS-IX in Tashkent, Uzbekistan",
		},
		desc: {
		ru: "Предложение в соотношении цены-качества-количества ресурсов, которое построенно на быстрых SSD-дисках. Оптимальные VDS/VPS в сети TAS-IX в Ташкенте",
		uz: "Tez SSD drayverlarga qurilgan narx-sifat-resurslar miqdori nisbatidagi taklif. Toshkent shahridagi TAS-IX tarmog'ida optimal VDS/VPS",
		en: "An offer in the ratio of price-quality-quantity of resources, which is built on fast SSD drives. Optimal VDS / VPS in the TAS-IX network in Tashkent",
		},
	};

	return (
    <>
		<Calculator language={language} />
		
		<SEO title={langData.seo[language]} desc={langData.desc[language]} />
    </>
  );
}