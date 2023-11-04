import Image from "next/image";
import Button from "./Button";

const Cta = () => {
	return (
		<section className="relative md:static overflow-hidden border border-black min-h-[26rem] md:min-h-0  bg-gray-200">
			<div className="py-8 px-4 md:py-12 lg:p-16 pb-54 font-medium ">
				{/* content */}
				<div className="md:relative bg-lightPurple rounded-lg p-8 md:py-12 lg:py-16 space-y-4 z-[2] overflow-hidden">
					<p className="md:max-w-[25rem] lg:max-w-[30rem]">
						Looking to own a property without hassle? Sharing Apps and Custom
						Social Networking Apps. The experience has been pleasant,
						professional and exceeding ou
					</p>
					<Button inverted>Buy now</Button>
					<div className="absolute left-1 right-1 md:-top-16 lg:-top-20 md:inset-0 md:-right-[7rem] lg:-right-[5rem] md:left-auto z-[1]  mx-auto">
						<Image
							src="/images/cta-mob.svg"
							width={600}
							height={600}
							alt="cta-img"
							className="md:w-[28rem] lg:w-[32rem]"
						/>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Cta;
