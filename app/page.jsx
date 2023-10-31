import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import Featured from "./components/Featured";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Record from "./components/Record";
import Services from "./components/Services";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<FeaturedProperties />
			<Stats />
			<Services />
			{/* <Featured /> */}
		 <Record/>
		 <Services />
		</main>
	);
}
