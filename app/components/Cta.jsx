import Image from "next/image";

const Cta = () => {
	return (
		<section className="relative md:static overflow-hidden border border-black min-h-[26rem] md:min-h-0  bg-gray-200">
			<div className="py-8 px-4 md:py-12 lg:px-16 pb-54 font-medium ">
				{/* content */}
				<div className="md:relative bg-lightPurple rounded-lg p-8 md:py-12 lg:py-16 space-y-4 z-[2] overflow-hidden">
					<p className="md:max-w-[25rem] lg:max-w-[40rem]">
						Looking to own a property without hassle? Sharing Apps and Custom
						Social Networking Apps. The experience has been pleasant,
						professional and exceeding ou
					</p>
					<button className=" bg-white text-darkPurple font-medium py-1 px-3 rounded text-xs first-letter:capitalize ">
						Buy now
					</button>
					<div className="absolute left-1 right-1 md:-top-20 md:inset-0 md:-right-[7rem] md:left-auto z-[1]  mx-auto">
						<Image
							src="/images/cta-mob.svg"
							width={800}
							height={600}
							alt="cta-img"
							className="md:w-[30rem]"
						/>
					</div>
				</div>
				{/* image */}
			</div>
		</section>
	);
};

export default Cta;
