import Image from "next/image";

const Hero = () => {
	return (
		<section>
			{/* image */}
			<div className="relative aspect-video">
				<Image src="/images/House-hero.webp" fill alt="house-hero" />
			</div>
			{/* content */}
		</section>
	);
};

export default Hero;
