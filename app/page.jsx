import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import Featured from "./components/Featured";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";


export default function Home() {
	return (
		<main className="">
			<Hero />
			<FeaturedProperties />
			<Stats />
			<Services />
			<Testimonials />
			<Cta />
			{/* <Featured /> */}
			{/* <Record/>
		 <Services /> */}
		</main>
	);
}
