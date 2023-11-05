"use client"

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import saveEmail from "../lib/saveEmail";




const Cta = () => {


	return (
		<section className="relative overflow-hidden border border-black min-h-[26rem] md:min-h-0  bg-gray-200">
			<div className=" pb-54 font-medium ">
				{/* content */}

				<div className="relative bg-lightPurple rounded-lg p-8 md:py-12 lg:py-16 space-y-4 z-[2] overflow-hidden">
					<p className="md:max-w-[50%] xl:max-w-[35rem] lg:text-xl">
						Looking to own a property without hassle? Sharing Apps and Custom
						Social Networking Apps. The experience has been pleasant,
						professional and exceeding ou
					</p>
					<Button inverted>Buy now</Button>
					<div className="hidden md:block absolute left-1 right-1  md:-top-10 lg:-top-20 md:inset-0 md:-right-[15%] xl:-right-[6rem] md:left-auto z-[1]  mx-auto">
						<Image
							src="/images/cta-mob.svg"
							width={600}
							height={600}
							alt="cta-img"
							className="md:w-[28rem] lg:w-[35rem]"
						/>
					</div>
				</div>
				<div className="absolute md:hidden -bottom-24 left-1 right-1 z-[1]  mx-auto">
					<Image
						src="/images/cta-mob.svg"
						width={600}
						height={600}
						alt="cta-img"
						className="md:w-[28rem] lg:w-[35rem] mx-auto"
					/>
				</div>
			</div>
		</section >
	);
};

export default Cta;
