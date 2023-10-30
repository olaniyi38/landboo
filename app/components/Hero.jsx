import Image from "next/image";

const Hero = () => {
	return (
		<section>
			{/* image */}
			<div className="relative aspect-video">
				<Image src="/images/House-hero.webp" fill alt="house-hero" />
			</div>
			{/* content */}
			<div className="p-4">
				<div className="flex gap-4">
					<h4 className=" font-bold flex-1 text-xl">150,000 +</h4>
					<p className=" text-sm flex-auto">
						Customers who use LandbOO UI Kit to build their new startup landing
						page.
					</p>
				</div>
				<div className=" relative w-full h-20 flex flex-col gap-y-4">
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
		</section>
	);
};

export default Hero;
