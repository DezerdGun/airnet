import SEO from "@/components/seo";
import Image from "next/image";
import styles from "./review.module.scss";
import Container from "@/components/container";
import ReviewsPage from "@/components/reviewsPage";
import BreadCrumbs from "../../components/seo/breadCrumbs"
import PageBreadcrumb from "../../components/seo/pageBreadCrumbs";

const Review = ({ language }) => {
  const langData = {
    seoTitle: {
      ru: "Отзывы | Хостинг TAS-IX в Ташкенте, Узбекистане",
      uz: "Отзывы | O'zbekiston, Toshkent shahrida TAS-IX mezbonligi",
      en: "Отзывы | Hosting TAS-IX in Tashkent, Uzbekistan",
    },
    descTitle: {
      ru: "Отзывы компании OOO AIRNET",
      uz: "Отзывы компании OOO AIRNET",
      en: "Отзывы компании OOO AIRNET",
    },
    title: {
      ru: "Отзывы",
      uz: "Отзывы",
      en: "Отзывы",
    },
    description: {
      ru: "Юридическая информация",
      uz: "Huquqiy ma'lumotlar",
      en: "Legal information",
    },
  };

  return (
    <>
    <SEO title={langData.seoTitle[language]} desc={langData.descTitle[language]} />
    <main className={styles.reviewsPage}>
		<BreadCrumbs data={[{ name: 'Отзывы о нас' }]} />
		<PageBreadcrumb links={[{ name: 'Отзывы о нас' }]} />
    <ReviewsPage  language={language} />
    <div className='add-reviews'>
      <a target="_blank" href="https://billing.airnet.uz/billing.php?do=testimonials">Оставить отзыв</a>
    </div>
    </main>
    </>
  );
};

export default Review;
