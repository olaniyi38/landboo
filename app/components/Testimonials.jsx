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
				"We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Jane cooper",
				desc: "CEO, ABC Corporation",
			},
		},
		{
			title: "Dependable, Responsive, Professional Partner",
			content:
				"Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Jane cooper",
				desc: "CEO, ABC Corporation",
			},
		},
	],
	[
		{
			title: "Incredible Experience",
			content:
				"We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Jane cooper",
				desc: "CEO, ABC Corporation",
			},
		},
		{
			title: "Dependable, Responsive, Professional Partner",
			content:
				"Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
			by: {
				imgSrc: "/images/photo.svg",
				name: "Jane cooper",
				desc: "CEO, ABC Corporation",
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
				<div className="relative w-10 h-10 lg:w-12 lg:h-12">
					<Image src={imgSrc} alt={name + "testimonial"} fill />
				</div>
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
