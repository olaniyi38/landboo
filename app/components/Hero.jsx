import Image from "next/image";

const Hero = () => {
	return (
		<section>
			<div>
				{/* image */}
				<div className="relative aspect-video text-white grid">
					<h1 className=" row-overlay col-overlay z-[1] font-bold text-2xl pl-4 pr-20 pt-8">
						Find your Perfect Property here
					</h1>
					<Image
						className=" row-overlay col-overlay"
						src="/images/House-hero.webp"
						fill
						alt="house-hero"
					/>
				</div>
				{/* content */}
				<div className="p-4 mx-4 rounded relative bottom-16 bg-white shadow-md space-y-6">
					<div className="flex gap-4">
						<h4 className=" font-bold text-lg">150,000 +</h4>
						<p className=" text-xs flex-1">
							Customers who use LandbOO UI Kit to build their new startup
							landing page.
						</p>
					</div>
					<div className=" relative flex flex-col gap-y-4">
						<Image
							className=" object-contain"
							src="/images/companies-1.webp"
							height={20}
							width={500}
							alt="compamnies-logo"
						/>
						<Image
							className=" object-contain"
							src="/images/companies-2.webp"
							height={20}
							width={500}
							alt="compamnies-logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
