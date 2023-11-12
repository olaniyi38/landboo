"use client"

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import saveEmail from "../lib/saveEmail";
import Link from 'next/link'



const Cta = () => {


	return (
		<section className="relative grid items-center md:block overflow-hidden border border-black min-h-[20rem] md:min-h-0  bg-gray-200">
			<div className=" pb-54 font-medium ">
				{/* content */}

				<div className="relative md:flex md:items-start bg-veryLightPurple rounded-lg p-8 md:p-0 space-y-4 md:space-y-0 z-[2] overflow-hidden">
					<div className="md:flex-1 md:self-center md:pl-8 md:pr-4 space-y-4">
						<p className=" lg:text-xl md:max-w-[95%]">
							Looking to own a property without hassle? Contact us and make that move now!
						</p>
						<Link href="https://wa.link/slkr82" target="blank" className="inline-block">
							<Button inverted>Contact Us</Button>
						</Link>
					</div>

					<div className="flex-1 relative aspect-video h-full hidden md:block  z-[1]  ">
						<Image
							src="/images/feat-4.webp"
							fill
							alt="cta-img"
							className="object-cover"

						/>
					</div>
				</div>
				<div className="absolute md:hidden inset-0 right-1 z-[1]">
					<Image
						src="/images/feat-4.webp"
						width={600}
						height={600}
						alt="cta-img"
						className="w-full h-full object-cover mx-auto"
					/>
				</div>
			</div>
		</section >
	);
};

export default Cta;
