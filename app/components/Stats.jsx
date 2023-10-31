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
		<section className=" bg-darkPurple py-8 text-white px-4 ">
			<div className="p-4 bg-white text-black grid grid-cols-2 gap-8 rounded-md shadow-md">
				<div className=" flex flex-col items-center">
					<div className="bg-gray-200 p-3 rounded-full mb-2">
						<Image
							src="/images/svgs/stat-client.svg"
							width={15}
							height={15}
							alt="svg"
						/>
					</div>
					<p className="text-darkPurple text-2xl  font-medium ">
						{stats.clients}+
					</p>
					<p className=" capitalize text-sm">happy clients</p>
				</div>
				<div className=" flex flex-col items-center">
					<div className="bg-gray-200 p-3 rounded-full mb-2">
						<Image
							src="/images/svgs/stat-proj.svg"
							width={15}
							height={15}
							alt="svg"
						/>
					</div>
					<p className="text-darkPurple text-2xl  font-medium ">
						{stats.projects}+
					</p>
					<p className=" capitalize text-sm">projects completed</p>
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
					<p className="text-darkPurple text-2xl  font-medium ">
						{stats.members}+
					</p>
					<p className=" capitalize text-sm">dedicated members</p>
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
					<p className="text-darkPurple text-2xl  font-medium ">
						{stats.awards}+
					</p>
					<p className=" capitalize text-sm">Awards won</p>
				</div>
			</div>
		</section>
	);
};

export default Stats;
