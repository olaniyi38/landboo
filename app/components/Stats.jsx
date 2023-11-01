import Image from "next/image";
import React from "react";

const stats = {
	clients: 50,
	projects: 540,
	members: 300,
	awards: 32,
};

const Stats = () => {
	return (
		<section className="relative py-12 px-4 md:p-12 lg:p-16   text-white ">
			<aside className="bg-darkPurple z-[1] absolute w-full h-[50%] top-0 left-0 right-0 mx-auto "></aside>
			<div className="relative text-center z-[2] p-4 md:p-8 lg:mx-16 bg-white text-black grid grid-cols-2 md:grid-cols-4 gap-y-8 xs:gap-8 rounded-md shadow-md">
				<div className=" flex flex-col items-center ">
					<div className="bg-gray-200 p-3 rounded-full mb-2">
						<Image
							src="/images/svgs/stat-client.svg"
							width={15}
							height={15}
							alt="svg"
						/>
					</div>
					<p className="text-darkPurple text-2xl lg:text-3xl  font-medium md:font-bold ">
						{stats.clients}+
					</p>
					<p className=" capitalize text-sm lg:text-base">happy clients</p>
				</div>
				<div className=" flex flex-col items-center ">
					<div className="bg-gray-200 p-3 rounded-full mb-2">
						<Image
							src="/images/svgs/stat-proj.svg"
							width={15}
							height={15}
							alt="svg"
						/>
					</div>
					<p className="text-darkPurple text-2xl lg:text-3xl  font-medium md:font-bold ">
						{stats.projects}+
					</p>
					<p className=" capitalize text-sm lg:text-base">projects completed</p>
				</div>
				<div className=" flex flex-col items-center">
					<div className="bg-gray-200 p-3 rounded-full mb-2">
						<Image
							src="/images/svgs/stat-mem.svg"
							width={15}
							height={15}
							alt="svg"
						/>
					</div>
					<p className="text-darkPurple text-2xl lg:text-3xl  font-medium md:font-bold ">
						{stats.members}+
					</p>
					<p className=" capitalize text-sm lg:text-base">dedicated members</p>
				</div>
				<div className=" flex flex-col items-center">
					<div className="bg-gray-200 p-3 rounded-full mb-2">
						<Image
							src="/images/svgs/stat-award.svg"
							width={15}
							height={15}
							alt="svg"
						/>
					</div>
					<p className="text-darkPurple text-2xl lg:text-3xl  font-medium md:font-bold ">
						{stats.awards}+
					</p>
					<p className=" capitalize text-sm lg:text-base">Awards won</p>
				</div>
			</div>
		</section>
	);
};

export default Stats;
