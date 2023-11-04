import Image from "next/image";

const Hero = () => {
	return (
		<section>
			<div className="max-w-none">
				{/* image */}
				<div className="relative aspect-[16/9] lg:aspect-[16/7] text-white grid items-center">
					<h1 className=" row-overlay col-overlay z-[1] font-bold text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl sm:max-w-[30rem] lg:max-w-[50rem]  pl-4 pr-20  sm:pl-8 lg:pl-32 sm:pr-0  ">
						Find your Perfect Property here
					</h1>
					<Image
						className=" row-overlay col-overlay object-cover"
						src="/images/House-hero.webp"
						fill
						alt="house-hero"
					/>
				</div>
				<div className="p-4  mx-4 lg:p-8 sm:mx-8 md:mx-12 lg:mx-32 lg:flex rounded xs:relative bottom-16 bg-white shadow-md space-y-6 sm:space-y-8">
					<div className="flex-1 flex lg:flex-col gap-x-4 sm:gap-x-16 lg:gap-y-2">
						<h4 className=" font-bold text-lg sm:text-3xl xl:text-4xl">150,000 +</h4>
						<p className=" text-[.85rem] sm:text-base flex-1 lg:text-xl lg:max-w-[70%]">
							Customers who use LandbOO UI Kit to build their new startup
							landing page.
						</p>
					</div>
					<div className="flex-1 relative flex flex-col gap-y-4 lg:gap-y-8">
						<Image
							className=" object-contain"
							src="/images/companies-1.webp"
							height={50}
							width={1000}
							alt="compamnies-logo"
						/>
						<Image
							className=" object-contain"
							src="/images/companies-2.webp"
							height={50}
							width={500}
							alt="companies-logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
