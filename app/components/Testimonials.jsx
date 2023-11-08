"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiDoubleQuotesR } from 'react-icons/ri'

const testimonials = [
	[
		{
			title: "Incredible Experience",
			content:
				"JROSY HOMES made my land purchase a breeze! Their professional and transparent approach, along with their quick communication, ensured a smooth process. I found the perfect piece of land with their help. I highly recommend JROSY HOMES for all your land-buying needs!",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Patrick Adakole",
				desc: "N.G.O",
			},
		},
		{
			title: "Dependable, Responsive, Professional",
			content:
				"Yemisi Michael here, and I can't say enough about my experience with this real estate company. They made buying land a breeze. Their professionalism and transparent approach ensured a smooth process, and I found the perfect piece of land. I highly recommend them for your land-buying needs!",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Yemisi Michael",
				desc: "Business Woman",
			},
		},
	],
	[
		{
			title: "Seamless Land Purchase Experience",
			content:
				"I recently had the pleasure of working with a real estate company to purchase land, and I couldn't be happier with the experience. Their professional team provided me with valuable insights and guided me through the entire process. They made sure I had all the information I needed to make an informed decision. The communication was top-notch, and I'm now a proud landowner. If you're in the market for land, this real estate company comes highly recommended!",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Capt Ojo A",
				desc: "Military Personnel",
			},
		},
		{
			title: "My Dream Home Journey",
			content:
				"Thanks to JROSY HOMES, I'm now building my dream home on the land they helped me find. From land selection to construction, their support has been invaluable. They made the process a breeze, and I can't wait to see the finished product!",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Alfred",
				desc: "Real Estate Investor",
			},
		},
	],
];

const Testimonial = ({ data }) => {
	const { title, content, by } = data;
	const { imgSrc, name, desc } = by;

	return (
		<div className=" flex flex-col items-center ">
			<div className="bg-white relative text-black  py-4 px-2 sm:p-6 sm:px-4 rounded text-center ">
				<BiSolidDownArrow className="w-6 h-6 fill-white absolute -bottom-4 left-0 right-0 mx-auto  z-[2]" />
				<h3 className=" font-semibold capitalize text-sm lg:text-base">{title}</h3>
				<p className=" text-[.8rem] md:text-sm lg:text-base mt-2 sm:mt-4">{content}</p>
			</div>
			<div className=" flex items-center gap-x-3 mt-6">
				{/* <div className="relative w-10 h-10 lg:w-12 lg:h-12">
					<Image src={imgSrc} alt={name + "testimonial"} fill />
				</div> */}
				<div className="text-sm">
					<p className="font-semibold">{name}</p>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

const Testimonials = () => {
	return (
		<section className="relative bg-darkPurple text-white overflow-hidden">
			<RiDoubleQuotesR className=" fill-lightPurple/20 absolute z[1] -right-2 md:right-6 top-5 sm:top-2 md:-top-4 lg:right-16  w-[25vw] max-w-[15rem] h-auto" />
			<div className="z-[2]">
				<h2 className=" font-bold capitalize text-center lg:text-left text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 lg:mb-16">
					Our clients speak
				</h2>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					pagination={{ clickable: true, dynamicBullets: true }}
					autoplay={{ delay: 3000 }}
					modules={[Grid, Pagination, Autoplay]}
					className="pb-12 lg:pb-16  cursor-grab"
				>
					{testimonials.map((group, i) => (
						<SwiperSlide key={group[0].title + group[1].title + i}>
							<div className="flex flex-col md:flex-row items-center gap-8 md:gap-x-4">
								<Testimonial data={group[0]} />
								{group.length > 1 && <Testimonial data={group[1]} />}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
export default Testimonials;
