import Container from "@/components/container"
import ImageFullScreen from "@/components/imageFullScreen"
import SEO from "@/components/seo"
import { useEffect, useState } from "react"
import { Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import Partners from "@/components/partners";
import Reviews from "@/components/reviews";
import BreadCrumbs from "../components/seo/breadCrumbs"
import PageBreadcrumb from "../components/seo/pageBreadCrumbs";

const license = [
	{
		img: "/license/license.webp",
	},
	{
		img: "/license/guvohnoma.jpg",
	},
	{
		img: "/license/certificate.png",
	},
]

export default function License({ language }) {
	const [image, setImage] = useState("")

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden"
		else document.body.style = "overflow:unset"
	}, [image])
	const langDate = {
		seoT: {
			ru: "Лицензия на предоставление услуг хостинга | Airnet",
			uz: "Xosting xizmatlari litsenziyasi | Airnet",
			en: "License to provide hosting services | Airnet",
		},
		seoD: {
			ru: "Лицензии и сертификаты компании OOO AIRNET",
			uz: "Mchj AIRNET litsenziyalari va sertifikatlari",
			en: "Licenses and certificates of AIRNET LLC",
		},
		headTitle: {
			ru: "Лицензии и сертификаты на предоставление услуг хостинга",
			uz: "Xosting xizmatlarini ko'rsatish uchun litsenziyalar va sertifikatlar",
			en: "Licenses and certificates for the provision of hosting services",
		},
	};

    const breadCrumbs = [
      {
        name: {
          ru: "Наши лицензии",
          uz: "Наши лицензии",
          en: "Наши лицензии",
        },
        link: "/license",
      },
    ];

	return (
		<>
			<SEO title={langDate.seoT[language]} desc={langDate.seoD[language]} />

			{breadCrumbs && breadCrumbs.length ? (
			<>
				<BreadCrumbs data={breadCrumbs} language={language} />
				<PageBreadcrumb links={breadCrumbs} language={language} />
			</>
			) : null}
			
			<Container className={"text-center"} headTitle={langDate.headTitle[language]}>
				<hr />

				<Swiper
					cssMode={true}
					modules={[Autoplay, Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					loop={false}
					autoplay={{
						delay: 100000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						770: {
							slidesPerView: 3,
						},
						500: {
							slidesPerView: 2,
						},
					}}
					className="tarifSwiper"
				>
					{license.map((item) => (
						<SwiperSlide key={item.img}>
							<div className="w-95">
								<img
									onClick={() => setImage(item.img)}
									src={item.img}
									width="100%"
									height="auto"
									blurDataURL
									placeholder="blur"
									style={{ cursor: "pointer" }}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{image && <ImageFullScreen image={image} setImage={setImage} />}
			</Container>
			<Partners language={language} />
			<Reviews language={language} />
		</>
	)
}
