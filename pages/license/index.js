import Container from "../../components/container";
import Image from "next/image";
import SEO from "../../components/seo";
import ImageFullScreen from "../../components/imageFullScreen";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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
];

export default function License() {
	const [image, setImage] = useState("");

	useEffect(() => {
		if (image) document.body.style = "overflow:hidden";
		else document.body.style = "overflow:unset";
	}, [image]);

	return (
		<>
			<SEO title="Лицензия на предоставление услуг хостинга | Airnet" desc="" />
			<Container
				className={"text-center"}
				headTitle="Лицензии и сертификаты на предоставление услуг хостинга"
			>
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
		</>
	);
}
