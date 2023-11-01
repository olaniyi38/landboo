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
				<p className=" font-medium text-lg md:text-xl">
					$ {price.toLocaleString()}
				</p>
				<div className="flex font-semibold  uppercase text-xs md:text-base text-gray-700">
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
			<div className="py-8 px-4 xs:pr-0 sm:pl-8 md:pl-12 lg:pl-32 max-w-none md:flex md:items-center">
				{/* Text */}
				<div className=" space-y-4 md:space-y-8  md:flex-initial lg:flex-1 md:pr-8">
					<hgroup className=" font-extrabold text-3xl md:text-4xl ">
						<h1>Featured</h1>
						<h1>Properties</h1>
					</hgroup>
					<p className="text-sm text-gray-600">
						Fermin Apps has collaborated with Landify team for several projects
						such as Photo Sharing Apps and Custom Social Networking Apps. The
						experience has been pleasant, professional and exceeding our
						expectations. The team is always thinking beyond the current tasks &
						helps us formulate a vision and possibilities for future.
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
							<FeaturedProperty data={featured2} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured1} />
						</SwiperSlide>
						<SwiperSlide className="max-w-[9rem] sm:max-w-[15rem] xl:max-w-[18rem]">
							<FeaturedProperty data={featured2} />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProperties;
