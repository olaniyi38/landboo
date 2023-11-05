import Image from "next/image";
import React from "react";

const stats = [
	{
		img: "/images/svgs/stat-client.svg",
		title: "happy client",
		value: 50,
	},
	{
		img: "/images/svgs/stat-proj.svg",
		title: "projects completed",
		value: 540
	}, {
		img: "/images/svgs/stat-mem.svg",
		title: "dedicated members",
		value: 300
	}, {
		img: "/images/svgs/stat-award.svg",
		title: "awards dedicated",
		value: 32
	}
]


const Stats = () => {
	return (
		<section className="relative py-12 px-4 md:p-12 lg:p-16   text-white ">
			<aside className="bg-darkPurple z-[1] absolute w-full h-[50%] top-0 left-0 right-0 mx-auto "></aside>
			<div className="relative text-center z-[2] p-4  lg:mx-16 bg-white text-black grid grid-cols-2 md:grid-cols-4 gap-y-8 xs:gap-8 rounded-md shadow-md">

				{
					stats.map(({ title, value, img }) => (
						<div className=" flex flex-col items-center lg:gap-y-1">
							<div className="bg-gray-200 p-3 rounded-full mb-2">
								<Image
									src={img}
									width={15}
									height={15}
									alt="svg"
								/>
							</div>
							<p className="text-darkPurple text-2xl lg:text-3xl xl:text-4xl  font-semibold md:font-bold ">
								{value - 10}+
							</p>
							<p className=" capitalize text-sm lg:text-lg">{title}</p>
						</div>
					))
				}
			</div>
		</section>
	);
};

export default Stats;
