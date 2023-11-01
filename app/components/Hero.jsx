import Image from "next/image";

const Hero = () => {
	return (
		<section>
			<div className="max-w-none">
				{/* image */}
				<div className="relative aspect-[16/9] text-white grid">
					<h1 className=" row-overlay col-overlay z-[1] font-bold text-2xl sm:text-5xl sm:max-w-[30rem] sm:pt-32 sm:pl-8 sm:pr-0  pl-4 pr-20 pt-8">
						Find your Perfect Property here
					</h1>
					<Image
						className=" row-overlay col-overlay"
						src="/images/House-hero.webp"
						fill
						alt="house-hero"
					/>
					</div>
				<div className="p-4  mx-4 lg:p-8 sm:mx-8 md:mx-16 lg:flex rounded relative bottom-16 bg-white shadow-md space-y-6 sm:space-y-8">
					<div className="flex-1 flex lg:flex-col gap-x-4 sm:gap-x-16">
						<h4 className=" font-bold text-lg sm:text-3xl">150,000 +</h4>
						<p className=" text-[.9rem] sm:text-base flex-1">
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
