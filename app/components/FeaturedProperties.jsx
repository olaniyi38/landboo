"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const featured1 = {
	imgSrc: "/images/feat-1.webp",
	price: 352982,
	beds: 3,
	ba: 2,
	ft: 1200,
};
const featured2 = {
	imgSrc: "/images/feat-2.webp",
	price: 352982,
	beds: 3,
	ba: 2,
	ft: 1200,
};

const featured3 = {
	imgSrc: "/images/feat-3.webp",
	price: 352982,
	beds: 3,
	ba: 2,
	ft: 1200,
};

const featured4 = {
	imgSrc: "/images/feat-4.webp",
	price: 352982,
	beds: 3,
	ba: 2,
	ft: 1200,
};

const featured5 = {
	imgSrc: "/images/feat-5.webp",
	price: 352982,
	beds: 3,
	ba: 2,
	ft: 1200,
};

const featured6 = {
	imgSrc: "/images/feat-2.webp",
	price: 352982,
	beds: 3,
	ba: 2,
	ft: 1200,
};

const FeaturedProperty = ({ data }) => {
	const { imgSrc, price, beds, ba, ft } = data;

	return (
		<div>
			{/* img */}
			<div className="relative aspect-[1/1.2] lg:aspect-[1/1.5] rounded-md">
				<Image
					fill
					src={imgSrc}
					alt="house img"
					className=" object-cover rounded"
				/>
			</div>
			{/* content */}
			<div className="py-2 space-y-2">
				<p className=" font-semibold text-lg md:text-xl">
					$ {price.toLocaleString()}
				</p>
				<div className="flex font-medium  uppercase text-xs md:text-base text-gray-700">
					<p className="px-1 md:px-2 pl-0 border-r border-r-gray-700">
						{beds} BEDs
					</p>
					<p className="px-1 md:px-2 border-r border-r-gray-700">{ba}BA</p>
					<p className="px-1 md:px-2">{ft} SFT</p>
				</div>
			</div>
		</div>
	);
};

const FeaturedProperties = () => {
	return (
		<section>
			<div className="xs:pr-0 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-32 max-w-none md:flex md:items-center">
				{/* Text */}
				<div className=" space-y-4 md:space-y-8  md:flex-initial lg:flex-1 md:pr-8 lg:pr-16">
					<hgroup className=" font-extrabold text-2xl md:text-4xl xl:text-5xl">
						<h1>Featured</h1>
						<h1>Property Designs</h1>
					</hgroup>
					<p className="text-sm pr-4 sm:pr-0 text-gray-600 lg:text-base">
					"Your Dream Home Awaits. Explore our curated selection of featured properties and discover the perfect place to call home. From cozy starter homes to luxurious estates, we have something for everyone. Ohhh, don't forget that you can customize any design to suit your unique style and preferences. Begin crafting this important part of your future with us today!"
					</p>
				</div>
				{/* Images */}
				<div className="pt-6 md:flex-initial lg:flex-[2_1_0%] md:w-[50%] ">
					<Swiper
						breakpoints={{
							1280: {
								spaceBetween: 30,
							},
						}}
						spaceBetween={20}
						slidesPerView="auto"
						modules={[Autoplay]}
						autoplay={{
							delay: 2000,
						}}
					>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured1} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured5} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured2} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured3} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured4} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured6} />
						</SwiperSlide>
						
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProperties;
