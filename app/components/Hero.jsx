import Image from "next/image";

const Hero = () => {
	const logos = ["airbnb", "amazon", "fedex", "microsoft", "google", "ola", "walmart", "oyo"]
	return (


		<section>
			<div className="max-w-none p-0">
				{/* image */}
				<div className="relative aspect-[16/9] lg:aspect-[16/7] text-white grid items-center">
					<div className="row-overlay col-overlay w-full h-full bg-black/60 z-[2] flex items-center">
						<h1 className="flex flex-col gap-y-0 md:gap-y-4 lg:gap-y-6   z-[1] font-bold text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl sm:max-w-[30rem] lg:max-w-[50rem]  pl-4 pr-20  sm:pl-8 lg:pl-32 sm:pr-0  ">
							<span>Find your Perfect</span>
							<span> Property here</span>
						</h1>
					</div>
					<Image
						className=" row-overlay col-overlay object-cover"
						src="/images/feat-1.webp"
						fill
						alt="house-hero"
					/>
				</div>
				{/* <div className="p-4  mx-4 lg:p-8 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32 lg:flex rounded xs:relative bottom-10 md:bottom-16 bg-white shadow-md space-y-6 sm:space-y-8 lg:space-y-0">
					<div className="flex-1 flex lg:flex-col gap-x-4 sm:gap-x-16 lg:gap-y-2">
						<h4 className=" font-bold text-xl sm:text-3xl xl:text-5xl">150,000 +</h4>
						<p className="text-xs xs:text-[.9rem] sm:text-base flex-1 lg:text-lg xl:pr-16 ">
							Customers who use LandbOO UI Kit to build their new startup
							landing page.
						</p>
					</div>
					<div className="flex-1 lg:flex-[1.5_1_0] lg:pl-4 relative grid grid-cols-4 place-items-center gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-2 lg:gap-x-6 lg:gap-y-0 xl:gap-y-8 xl:gap-x-16">
						{
							logos.map((name) => (
								<div className="relative aspect-[16/7] w-full sm:w-[90%] md:w-[70%] lg:w-full ">
									<Image src={"/images/svgs/" + name + ".svg"} fill alt="" />
								</div>
							))
						}
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
